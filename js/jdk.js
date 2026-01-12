var _0x4790ef = _0x47fe;
(function(_0x371380, _0x521f31) {
    var _0x3d1b5d = _0x47fe,
        _0x3164f2 = _0x371380();
    while (!![]) {
        try {
            var _0x466d7e = parseInt(_0x3d1b5d(0x47e)) / 0x1 * (-parseInt(_0x3d1b5d(0x690)) / 0x2) + -parseInt(_0x3d1b5d(0x2fe)) / 0x3 * (parseInt(_0x3d1b5d(0x811)) / 0x4) + parseInt(_0x3d1b5d(0x83c)) / 0x5 * (-parseInt(_0x3d1b5d(0x38b)) / 0x6) + -parseInt(_0x3d1b5d(0x849)) / 0x7 + parseInt(_0x3d1b5d(0x615)) / 0x8 * (-parseInt(_0x3d1b5d(0x575)) / 0x9) + parseInt(_0x3d1b5d(0x7cb)) / 0xa + parseInt(_0x3d1b5d(0x326)) / 0xb;
            if (_0x466d7e === _0x521f31) break;
            else _0x3164f2['push'](_0x3164f2['shift']());
        } catch (_0x575099) {
            _0x3164f2['push'](_0x3164f2['shift']());
        }
    }
}(_0x5a74, 0x8dd12), document[_0x4790ef(0x4fa)][_0x4790ef(0x462)]('afterbegin', _0x4790ef(0x3b3)), window[_0x4790ef(0x40e)] = window[_0x4790ef(0x40e)] || new Set());
const resolutionLimit = 0.025,
    scaleFactor = 0.5;

function optimizarTextura(_0x2f0789) {
    var _0x3fa352 = _0x4790ef;
    if (!_0x2f0789 || !_0x2f0789['Hc'] || !_0x2f0789['Hc'][_0x3fa352(0x6b9)]) {
        console[_0x3fa352(0x362)]('âš ï¸\x20Textura\x20invÃ¡lida\x20o\x20sin\x20baseTexture.');
        return;
    }
    const _0x18d79c = _0x2f0789['Hc'][_0x3fa352(0x6b9)],
        _0x5e9e28 = _0x18d79c[_0x3fa352(0x4cd)] || _0x18d79c[_0x3fa352(0x78d)]?.[_0x3fa352(0x7fb)] || _0x18d79c['resource']?.[_0x3fa352(0x439)]?.[_0x3fa352(0x68e)] || '';
    if (!_0x5e9e28 || window[_0x3fa352(0x40e)][_0x3fa352(0x6a3)](_0x5e9e28)) return;
    try {
        _0x5e9e28[_0x3fa352(0x3d4)]('100300_portions.png') && _0x18d79c[_0x3fa352(0x34a)] > resolutionLimit && (_0x18d79c[_0x3fa352(0x34a)] = resolutionLimit, console[_0x3fa352(0x435)](_0x3fa352(0x501) + _0x18d79c['resolution'] + '):\x20' + _0x5e9e28));
        if (_0x3fa352(0x477) in _0x18d79c) _0x18d79c['mipmap'] = ![];
        else 'mipmap' in _0x18d79c[_0x3fa352(0x6b9)] && (_0x18d79c[_0x3fa352(0x6b9)][_0x3fa352(0x477)] = ![]);
        if ('anisotropicLevel' in _0x18d79c) _0x18d79c[_0x3fa352(0x3ed)] = 0x1;
        else _0x3fa352(0x3ed) in _0x18d79c[_0x3fa352(0x6b9)] && (_0x18d79c[_0x3fa352(0x6b9)]['anisotropicLevel'] = 0x1);
        const _0x1dca4c = 0x400,
            _0x3e9b6e = 0x400;
        if (_0x18d79c[_0x3fa352(0x785)] > _0x1dca4c || _0x18d79c[_0x3fa352(0x561)] > _0x3e9b6e) {
            const _0x2eed5e = _0x1dca4c / _0x18d79c['width'],
                _0x5265cf = _0x3e9b6e / _0x18d79c[_0x3fa352(0x561)],
                _0x469081 = Math['min'](_0x2eed5e, _0x5265cf);
            if (_0x18d79c[_0x3fa352(0x738)]) _0x18d79c['setSize'](_0x18d79c[_0x3fa352(0x785)] * _0x469081, _0x18d79c[_0x3fa352(0x561)] * _0x469081);
            else _0x18d79c[_0x3fa352(0x78d)]?.[_0x3fa352(0x439)] instanceof HTMLImageElement && (_0x18d79c[_0x3fa352(0x78d)][_0x3fa352(0x439)][_0x3fa352(0x785)] *= _0x469081, _0x18d79c[_0x3fa352(0x78d)]['source'][_0x3fa352(0x561)] *= _0x469081);
            console['log'](_0x3fa352(0x809) + Math[_0x3fa352(0x223)](_0x469081 * 0x64) + _0x3fa352(0x650) + _0x5e9e28);
        }
        _0x18d79c[_0x3fa352(0x6e9)] && !_0x5e9e28['includes']('atlas') && !_0x5e9e28[_0x3fa352(0x3d4)]('sprite') && (_0x18d79c[_0x3fa352(0x6e9)] = ![]), (_0x18d79c[_0x3fa352(0x83d)] || _0x18d79c[_0x3fa352(0x78d)]?.['destroyed']) && (_0x18d79c['destroy'](!![]), console['log'](_0x3fa352(0x3f4) + _0x5e9e28)), window['_alreadyScaledWormTextures'][_0x3fa352(0x292)](_0x5e9e28), console[_0x3fa352(0x435)](_0x3fa352(0x5cd) + _0x5e9e28);
    } catch (_0x262fe9) {
        console[_0x3fa352(0x769)]('âŒ\x20Error\x20al\x20optimizar\x20textura:\x20' + _0x5e9e28, _0x262fe9);
    }
}

function checkOrientation() {
    var _0x4a00bb = _0x4790ef;
    const _0x540443 = document['getElementById'](_0x4a00bb(0x598));
    window[_0x4a00bb(0x6ac)](_0x4a00bb(0x4e0))['matches'] ? _0x540443[_0x4a00bb(0x577)]['display'] = _0x4a00bb(0x27b) : _0x540443[_0x4a00bb(0x577)][_0x4a00bb(0x7a3)] = _0x4a00bb(0x541);
}
window[_0x4790ef(0x6bd)]('load', checkOrientation), window['addEventListener']('resize', checkOrientation), window['onload'] = function() {
    var _0x1a9a91 = _0x4790ef;
    document[_0x1a9a91(0x706)](_0x1a9a91(0x564))[_0x1a9a91(0x577)][_0x1a9a91(0x785)] = '100%', setTimeout(() => {
        var _0x2a32f1 = _0x1a9a91;
        document[_0x2a32f1(0x706)](_0x2a32f1(0x48b))['style'][_0x2a32f1(0x489)] = '0', setTimeout(() => {
            var _0x53623a = _0x2a32f1;
            document[_0x53623a(0x706)](_0x53623a(0x48b))[_0x53623a(0x563)]();
        }, 0x1f4);
    }, 0x2710);
};
var __extends = this && this[_0x4790ef(0x511)] || (function() {
        var _0x3b6ab3 = (function() {
                var _0x4bf47b = !![];
                return function(_0x126dec, _0x400e17) {
                    var _0x113280 = _0x4bf47b ? function() {
                        var _0x5d424c = _0x47fe;
                        if (_0x400e17) {
                            var _0x4fef7c = _0x400e17[_0x5d424c(0x614)](_0x126dec, arguments);
                            return _0x400e17 = null, _0x4fef7c;
                        }
                    } : function() {};
                    return _0x4bf47b = ![], _0x113280;
                };
            }()),
            _0x54d3b4 = _0x3b6ab3(this, function() {
                var _0x45a666 = _0x47fe;
                return _0x54d3b4['toString']()['search'](_0x45a666(0x45e))['toString']()[_0x45a666(0x6fe)](_0x54d3b4)[_0x45a666(0x5bc)](_0x45a666(0x45e));
            });
        _0x54d3b4();
        var _0x1b769b = (function() {
                var _0x4f16fe = !![];
                return function(_0x19eefe, _0x4c37de) {
                    var _0x12324f = _0x4f16fe ? function() {
                        if (_0x4c37de) {
                            var _0x1296a6 = _0x4c37de['apply'](_0x19eefe, arguments);
                            return _0x4c37de = null, _0x1296a6;
                        }
                    } : function() {};
                    return _0x4f16fe = ![], _0x12324f;
                };
            }()),
            _0x2f2878 = _0x1b769b(this, function() {
                var _0x29e4cb = _0x47fe,
                    _0x4cdb07;
                try {
                    var _0x4dd51f = Function('return\x20(function()\x20' + _0x29e4cb(0x269) + ');');
                    _0x4cdb07 = _0x4dd51f();
                } catch (_0x5082a8) {
                    _0x4cdb07 = window;
                }
                var _0x15b8a2 = _0x4cdb07[_0x29e4cb(0x4ca)] = _0x4cdb07['console'] || {},
                    _0x16c1d9 = [_0x29e4cb(0x435), _0x29e4cb(0x362), _0x29e4cb(0x3b4), _0x29e4cb(0x769), _0x29e4cb(0x756), _0x29e4cb(0x434), _0x29e4cb(0x4ee)];
                for (var _0x4f2107 = 0x0; _0x4f2107 < _0x16c1d9[_0x29e4cb(0x30a)]; _0x4f2107++) {
                    var _0x2dd482 = _0x1b769b[_0x29e4cb(0x6fe)][_0x29e4cb(0x6f4)][_0x29e4cb(0x32c)](_0x1b769b),
                        _0x19ece7 = _0x16c1d9[_0x4f2107],
                        _0xbe53b6 = _0x15b8a2[_0x19ece7] || _0x2dd482;
                    _0x2dd482[_0x29e4cb(0x48f)] = _0x1b769b[_0x29e4cb(0x32c)](_0x1b769b), _0x2dd482[_0x29e4cb(0x696)] = _0xbe53b6[_0x29e4cb(0x696)][_0x29e4cb(0x32c)](_0xbe53b6), _0x15b8a2[_0x19ece7] = _0x2dd482;
                }
            });
        _0x2f2878();
        var _0x245b55 = function(_0x43f12f, _0x3be035) {
            var _0x584d75 = _0x47fe;
            return _0x245b55 = Object[_0x584d75(0x68b)] || {
                '__proto__': []
            }
            instanceof Array && function(_0x358744, _0x463ba8) {
                var _0x17ba06 = _0x584d75;
                _0x358744[_0x17ba06(0x48f)] = _0x463ba8;
            } || function(_0x4f76c5, _0x1fe440) {
                var _0x5a17a8 = _0x584d75;
                for (var _0x9ec2b4 in _0x1fe440)
                    if (Object['prototype'][_0x5a17a8(0x2f7)]['call'](_0x1fe440, _0x9ec2b4)) _0x4f76c5[_0x9ec2b4] = _0x1fe440[_0x9ec2b4];
            }, _0x245b55(_0x43f12f, _0x3be035);
        };
        return function(_0x1904ce, _0x5a02e4) {
            var _0x1e9d65 = _0x47fe;
            if (typeof _0x5a02e4 !== _0x1e9d65(0x7a0) && _0x5a02e4 !== null) throw new TypeError('Class\x20extends\x20value\x20' + String(_0x5a02e4) + '\x20is\x20not\x20a\x20constructor\x20or\x20null');
            _0x245b55(_0x1904ce, _0x5a02e4);

            function _0x198eae() {
                var _0x54d582 = _0x1e9d65;
                this[_0x54d582(0x6fe)] = _0x1904ce;
            }
            _0x1904ce[_0x1e9d65(0x6f4)] = _0x5a02e4 === null ? Object[_0x1e9d65(0x5bd)](_0x5a02e4) : (_0x198eae[_0x1e9d65(0x6f4)] = _0x5a02e4[_0x1e9d65(0x6f4)], new _0x198eae());
        };
    }()),
    Direction;
(function(_0x474ce) {
    var _0x462482 = _0x4790ef;
    _0x474ce['LEFT'] = 'left', _0x474ce['TOP'] = _0x462482(0x7fe), _0x474ce['BOTTOM'] = _0x462482(0x215), _0x474ce[_0x462482(0x28b)] = 'right', _0x474ce[_0x462482(0x238)] = _0x462482(0x7a6), _0x474ce['TOP_RIGHT'] = _0x462482(0x7c6), _0x474ce['BOTTOM_LEFT'] = _0x462482(0x6a4), _0x474ce['BOTTOM_RIGHT'] = _0x462482(0x70a);
}(Direction = {}));
var Joystick = function(_0x1f896d) {
    var _0x1b4c8b = _0x4790ef,
        _0x4994ee = (function() {
            var _0x251d41 = !![];
            return function(_0x5de8ec, _0x261019) {
                var _0x55c565 = _0x251d41 ? function() {
                    var _0xca3f86 = _0x47fe;
                    if (_0x261019) {
                        var _0x12f52f = _0x261019[_0xca3f86(0x614)](_0x5de8ec, arguments);
                        return _0x261019 = null, _0x12f52f;
                    }
                } : function() {};
                return _0x251d41 = ![], _0x55c565;
            };
        }());
    (function() {
        _0x4994ee(this, function() {
            var _0x4f3bc0 = _0x47fe,
                _0x49ae88 = new RegExp('function\x20*\x5c(\x20*\x5c)'),
                _0x1c9b07 = new RegExp(_0x4f3bc0(0x2a9), 'i'),
                _0x399a21 = _0x229fb7('init');
            !_0x49ae88[_0x4f3bc0(0x599)](_0x399a21 + _0x4f3bc0(0x5cc)) || !_0x1c9b07[_0x4f3bc0(0x599)](_0x399a21 + _0x4f3bc0(0x5c6)) ? _0x399a21('0') : _0x229fb7();
        })();
    }()), __extends(_0xb8b08c, _0x1f896d);

    function _0xb8b08c(_0x4df82c) {
        var _0x3f192c = _0x47fe,
            _0x3d3193 = _0x1f896d[_0x3f192c(0x371)](this) || this;
        _0x3d3193[_0x3f192c(0x3cb)] = 0x0, _0x3d3193['innerRadius'] = 0x0, _0x3d3193['innerAlphaStandby'] = 0.5, _0x3d3193[_0x3f192c(0x4de)] = Object[_0x3f192c(0x622)]({
            'outerScale': {
                'x': 0x1,
                'y': 0x1
            },
            'innerScale': {
                'x': 0x1,
                'y': 0x1
            }
        }, _0x4df82c);
        if (!_0x3d3193[_0x3f192c(0x4de)][_0x3f192c(0x2c4)]) {
            var _0x4ab7b4 = new PIXI['Graphics']();
            _0x4ab7b4['beginFill'](0xff0000), _0x4ab7b4[_0x3f192c(0x2e5)](0x0, 0x0, 0x3c), _0x4ab7b4[_0x3f192c(0x7ec)] = 0.5, _0x3d3193[_0x3f192c(0x4de)]['outer'] = _0x4ab7b4;
        }
        if (!_0x3d3193[_0x3f192c(0x4de)][_0x3f192c(0x597)]) {
            var _0x5e2dc9 = new PIXI[(_0x3f192c(0x85b))]();
            _0x5e2dc9[_0x3f192c(0x514)](0xff0000), _0x5e2dc9[_0x3f192c(0x2e5)](0x0, 0x0, 0x23), _0x5e2dc9[_0x3f192c(0x7ec)] = _0x3d3193[_0x3f192c(0x742)], _0x3d3193[_0x3f192c(0x4de)][_0x3f192c(0x597)] = _0x5e2dc9;
        }
        return _0x3d3193[_0x3f192c(0x76d)](), _0x3d3193;
    }
    return _0xb8b08c[_0x1b4c8b(0x6f4)][_0x1b4c8b(0x76d)] = function() {
        var _0x44be22 = _0x1b4c8b;
        this['outer'] = this[_0x44be22(0x4de)][_0x44be22(0x2c4)], this[_0x44be22(0x597)] = this['settings'][_0x44be22(0x597)], this[_0x44be22(0x2c4)][_0x44be22(0x266)][_0x44be22(0x3ce)](this[_0x44be22(0x4de)][_0x44be22(0x806)]['x'], this[_0x44be22(0x4de)][_0x44be22(0x806)]['y']), this[_0x44be22(0x597)][_0x44be22(0x266)]['set'](this[_0x44be22(0x4de)]['innerScale']['x'], this[_0x44be22(0x4de)]['innerScale']['y']), _0x44be22(0x5f4) in this[_0x44be22(0x2c4)] && this[_0x44be22(0x2c4)]['anchor'][_0x44be22(0x3ce)](0.5), _0x44be22(0x5f4) in this[_0x44be22(0x597)] && this[_0x44be22(0x597)][_0x44be22(0x5f4)][_0x44be22(0x3ce)](0.5), this[_0x44be22(0x6f9)](this[_0x44be22(0x2c4)]), this['addChild'](this[_0x44be22(0x597)]), this['outerRadius'] = this['width'] / 2.5, this['innerRadius'] = this[_0x44be22(0x597)][_0x44be22(0x785)] / 0x2, this[_0x44be22(0x5c0)]();
    }, _0xb8b08c['prototype']['bindEvents'] = function() {
        var _0x160299 = _0x1b4c8b,
            _0xe8ffd5 = this;
        this['interactive'] = !![];
        var _0x1fd5e9 = ![],
            _0x2435f6, _0x2c510d, _0x20e403;
        this[_0x160299(0x5d2)] = function(_0x49b51c) {
            var _0x4e13d5 = _0x160299,
                _0x579c23, _0x41a8e6;
            _0x2435f6 = _0x49b51c, _0x20e403 = this[_0x4e13d5(0x4a2)](_0x2435f6), _0x1fd5e9 = !![], _0xe8ffd5[_0x4e13d5(0x597)]['alpha'] = 0x1, (_0x41a8e6 = (_0x579c23 = _0xe8ffd5['settings'])[_0x4e13d5(0x759)]) === null || _0x41a8e6 === void 0x0 ? void 0x0 : _0x41a8e6['call'](_0x579c23);
        }, this[_0x160299(0x4d0)] = function(_0x1923b9) {
            var _0x590f24 = _0x160299,
                _0x5a55ba, _0x234fa1;
            if (_0x1fd5e9 == ![]) return;
            _0xe8ffd5[_0x590f24(0x597)][_0x590f24(0x797)][_0x590f24(0x3ce)](0x0, 0x0), _0x1fd5e9 = ![], _0xe8ffd5[_0x590f24(0x597)][_0x590f24(0x7ec)] = _0xe8ffd5[_0x590f24(0x742)], (_0x234fa1 = (_0x5a55ba = _0xe8ffd5['settings'])[_0x590f24(0x7e6)]) === null || _0x234fa1 === void 0x0 ? void 0x0 : _0x234fa1[_0x590f24(0x371)](_0x5a55ba);
        }, this[_0x160299(0x351)] = function(_0x399179) {
            var _0x3f016b = _0x160299;
            this[_0x3f016b(0x3cb)] = this[_0x3f016b(0x785)] / 2.5, this[_0x3f016b(0x3ee)] = this[_0x3f016b(0x597)]['width'] / 0x2;
            var _0x46edf5, _0x1ba21e, _0x25a94a, _0x4a55b2, _0x59d201, _0x42ce76;
            if (_0x1fd5e9 == ![]) return;
            var _0xffbb37 = this['toLocal'](_0x399179),
                _0x5da30c = _0xffbb37['x'] - _0x20e403['x'],
                _0x201dd0 = _0xffbb37['y'] - _0x20e403['y'],
                _0x2ca393 = new PIXI['Point'](0x0, 0x0),
                _0x2eb78c = 0x0;
            if (_0x5da30c == 0x0 && _0x201dd0 == 0x0) return;
            var _0x3b36a2 = 0x0;
            _0x5da30c * _0x5da30c + _0x201dd0 * _0x201dd0 >= _0xe8ffd5['outerRadius'] * _0xe8ffd5[_0x3f016b(0x3cb)] ? _0x3b36a2 = _0xe8ffd5[_0x3f016b(0x3cb)] : _0x3b36a2 = _0xe8ffd5[_0x3f016b(0x3cb)] - _0xe8ffd5[_0x3f016b(0x3ee)];
            var _0x2b7b09 = Direction[_0x3f016b(0x248)];
            if (_0x5da30c == 0x0) {
                _0x201dd0 > 0x0 ? (_0x2ca393[_0x3f016b(0x3ce)](0x0, _0x201dd0 > _0xe8ffd5[_0x3f016b(0x3cb)] ? _0xe8ffd5[_0x3f016b(0x3cb)] : _0x201dd0), _0x2eb78c = 0x10e, _0x2b7b09 = Direction['BOTTOM']) : (_0x2ca393['set'](0x0, -(Math[_0x3f016b(0x2e8)](_0x201dd0) > _0xe8ffd5[_0x3f016b(0x3cb)] ? _0xe8ffd5[_0x3f016b(0x3cb)] : Math[_0x3f016b(0x2e8)](_0x201dd0))), _0x2eb78c = 0x5a, _0x2b7b09 = Direction['TOP']);
                _0xe8ffd5[_0x3f016b(0x597)]['position'][_0x3f016b(0x3ce)](_0x2ca393['x'], _0x2ca393['y']), _0x2c510d = _0xe8ffd5[_0x3f016b(0x6bf)](_0x2ca393), (_0x1ba21e = (_0x46edf5 = _0xe8ffd5['settings'])[_0x3f016b(0x847)]) === null || _0x1ba21e === void 0x0 ? void 0x0 : _0x1ba21e[_0x3f016b(0x371)](_0x46edf5, {
                    'angle': _0x2eb78c,
                    'direction': _0x2b7b09,
                    'power': _0x2c510d
                });
                return;
            }
            if (_0x201dd0 == 0x0) {
                _0x5da30c > 0x0 ? (_0x2ca393[_0x3f016b(0x3ce)](Math[_0x3f016b(0x2e8)](_0x5da30c) > _0xe8ffd5['outerRadius'] ? _0xe8ffd5[_0x3f016b(0x3cb)] : Math['abs'](_0x5da30c), 0x0), _0x2eb78c = 0x0, _0x2b7b09 = Direction[_0x3f016b(0x248)]) : (_0x2ca393[_0x3f016b(0x3ce)](-(Math[_0x3f016b(0x2e8)](_0x5da30c) > _0xe8ffd5['outerRadius'] ? _0xe8ffd5['outerRadius'] : Math[_0x3f016b(0x2e8)](_0x5da30c)), 0x0), _0x2eb78c = 0xb4, _0x2b7b09 = Direction[_0x3f016b(0x28b)]);
                _0xe8ffd5[_0x3f016b(0x597)][_0x3f016b(0x797)][_0x3f016b(0x3ce)](_0x2ca393['x'], _0x2ca393['y']), _0x2c510d = _0xe8ffd5[_0x3f016b(0x6bf)](_0x2ca393), (_0x4a55b2 = (_0x25a94a = _0xe8ffd5['settings'])[_0x3f016b(0x847)]) === null || _0x4a55b2 === void 0x0 ? void 0x0 : _0x4a55b2[_0x3f016b(0x371)](_0x25a94a, {
                    'angle': _0x2eb78c,
                    'direction': _0x2b7b09,
                    'power': _0x2c510d
                });
                return;
            }
            var _0x4ae6c6 = Math[_0x3f016b(0x2e8)](_0x201dd0 / _0x5da30c),
                _0x3df82c = Math[_0x3f016b(0x72a)](_0x4ae6c6);
            _0x2eb78c = _0x3df82c * 0xb4 / Math['PI'];
            var _0x4e71ff = 0x0,
                _0x3f0aac = 0x0;
            _0x5da30c * _0x5da30c + _0x201dd0 * _0x201dd0 >= _0xe8ffd5[_0x3f016b(0x3cb)] * _0xe8ffd5[_0x3f016b(0x3cb)] ? (_0x4e71ff = _0xe8ffd5[_0x3f016b(0x3cb)] * Math[_0x3f016b(0x76a)](_0x3df82c), _0x3f0aac = _0xe8ffd5['outerRadius'] * Math[_0x3f016b(0x2d7)](_0x3df82c)) : (_0x4e71ff = Math[_0x3f016b(0x2e8)](_0x5da30c) > _0xe8ffd5['outerRadius'] ? _0xe8ffd5['outerRadius'] : Math[_0x3f016b(0x2e8)](_0x5da30c), _0x3f0aac = Math[_0x3f016b(0x2e8)](_0x201dd0) > _0xe8ffd5[_0x3f016b(0x3cb)] ? _0xe8ffd5['outerRadius'] : Math[_0x3f016b(0x2e8)](_0x201dd0));
            _0x201dd0 < 0x0 && (_0x3f0aac = -Math[_0x3f016b(0x2e8)](_0x3f0aac));
            _0x5da30c < 0x0 && (_0x4e71ff = -Math[_0x3f016b(0x2e8)](_0x4e71ff));
            if (_0x5da30c > 0x0 && _0x201dd0 < 0x0) {} else {
                if (_0x5da30c < 0x0 && _0x201dd0 < 0x0) _0x2eb78c = 0xb4 - _0x2eb78c;
                else {
                    if (_0x5da30c < 0x0 && _0x201dd0 > 0x0) _0x2eb78c = _0x2eb78c + 0xb4;
                    else _0x5da30c > 0x0 && _0x201dd0 > 0x0 && (_0x2eb78c = 0x168 - _0x2eb78c);
                }
            }
            _0x2ca393[_0x3f016b(0x3ce)](_0x4e71ff, _0x3f0aac), _0x2c510d = _0xe8ffd5[_0x3f016b(0x6bf)](_0x2ca393), _0x2b7b09 = _0xe8ffd5[_0x3f016b(0x765)](_0x2ca393), _0xe8ffd5[_0x3f016b(0x597)]['position'][_0x3f016b(0x3ce)](_0x2ca393['x'], _0x2ca393['y']), (_0x42ce76 = (_0x59d201 = _0xe8ffd5[_0x3f016b(0x4de)])[_0x3f016b(0x847)]) === null || _0x42ce76 === void 0x0 ? void 0x0 : _0x42ce76[_0x3f016b(0x371)](_0x59d201, {
                'angle': _0x2eb78c,
                'direction': _0x2b7b09,
                'power': _0x2c510d
            });
        };
    }, _0xb8b08c[_0x1b4c8b(0x6f4)][_0x1b4c8b(0x6bf)] = function(_0x40d2dc) {
        var _0xe37f8e = _0x1b4c8b,
            _0x2efd7f = _0x40d2dc['x'] - 0x0,
            _0x59b79e = _0x40d2dc['y'] - 0x0;
        return Math[_0xe37f8e(0x363)](0x1, Math['sqrt'](_0x2efd7f * _0x2efd7f + _0x59b79e * _0x59b79e) / this['outerRadius']);
    }, _0xb8b08c[_0x1b4c8b(0x6f4)][_0x1b4c8b(0x765)] = function(_0x3c4328) {
        var _0x44fa13 = _0x1b4c8b,
            _0x2952cf = Math[_0x44fa13(0x50c)](_0x3c4328['y'], _0x3c4328['x']);
        if (_0x2952cf >= -Math['PI'] / 0x8 && _0x2952cf < 0x0 || _0x2952cf >= 0x0 && _0x2952cf < Math['PI'] / 0x8) return Direction[_0x44fa13(0x28b)];
        else {
            if (_0x2952cf >= Math['PI'] / 0x8 && _0x2952cf < 0x3 * Math['PI'] / 0x8) return Direction[_0x44fa13(0x4d9)];
            else {
                if (_0x2952cf >= 0x3 * Math['PI'] / 0x8 && _0x2952cf < 0x5 * Math['PI'] / 0x8) return Direction[_0x44fa13(0x466)];
                else {
                    if (_0x2952cf >= 0x5 * Math['PI'] / 0x8 && _0x2952cf < 0x7 * Math['PI'] / 0x8) return Direction['BOTTOM_LEFT'];
                    else {
                        if (_0x2952cf >= 0x7 * Math['PI'] / 0x8 && _0x2952cf < Math['PI'] || _0x2952cf >= -Math['PI'] && _0x2952cf < -0x7 * Math['PI'] / 0x8) return Direction['LEFT'];
                        else {
                            if (_0x2952cf >= -0x7 * Math['PI'] / 0x8 && _0x2952cf < -0x5 * Math['PI'] / 0x8) return Direction[_0x44fa13(0x238)];
                            else return _0x2952cf >= -0x5 * Math['PI'] / 0x8 && _0x2952cf < -0x3 * Math['PI'] / 0x8 ? Direction[_0x44fa13(0x284)] : Direction[_0x44fa13(0x522)];
                        }
                    }
                }
            }
        }
    }, _0xb8b08c;
}(PIXI[_0x4790ef(0x4f9)]);

function _typeof(_0x2f7df2) {
    '@babel/helpers - typeof';
    var _0x49e18d = _0x4790ef;
    return (_typeof = _0x49e18d(0x7a0) == typeof Symbol && 'symbol' == typeof Symbol[_0x49e18d(0x443)] ? function(_0x39abd5) {
        return typeof _0x39abd5;
    } : function(_0x2fb907) {
        var _0x45bf48 = _0x49e18d;
        return _0x2fb907 && 'function' == typeof Symbol && _0x2fb907[_0x45bf48(0x6fe)] === Symbol && _0x2fb907 !== Symbol[_0x45bf48(0x6f4)] ? _0x45bf48(0x4fb) : typeof _0x2fb907;
    })(_0x2f7df2);
}
var lenguaje = {
    'es': {
        'opciones': _0x4790ef(0x397),
        'zoomVelocidad': _0x4790ef(0x5fe),
        'anchoPotenciador': _0x4790ef(0x5c2),
        'auraPotenciador': _0x4790ef(0x829),
        'anchoComida': _0x4790ef(0x80d),
        'brilloComida': 'brillo\x20de\x20la\x20comida',
        'fondo': _0x4790ef(0x5cb),
        'laser': 'laser\x20de\x20cabeza',
        'sectores': _0x4790ef(0x408),
        'colorJuego': 'color\x20del\x20juego',
        'colorLaser': 'color\x20del\x20laser',
        'colorBorde': _0x4790ef(0x743),
        'copiar': _0x4790ef(0x3b7),
        'fondos': 'fondos',
        'fondo0': _0x4790ef(0x7d4),
        'fondo1': 'espacio',
        'fondo2': _0x4790ef(0x6a6),
        'fondo3': _0x4790ef(0x808),
        'fondo4': 'espacio\x203',
        'skinVisible': _0x4790ef(0x792),
        'soundTuto1': 'descargar\x20sonido',
        'soundTuto2': _0x4790ef(0x24f),
        'soundTuto3': 'sonido\x20link\x20cabeza',
        'soundTuto4': _0x4790ef(0x69a)
    },
    'en': {
        'opciones': _0x4790ef(0x4de),
        'zoomVelocidad': _0x4790ef(0x256),
        'anchoPotenciador': _0x4790ef(0x4c7),
        'auraPotenciador': _0x4790ef(0x5fa),
        'anchoComida': _0x4790ef(0x582),
        'brilloComida': _0x4790ef(0x4d3),
        'fondo': 'Solid\x20background',
        'laser': 'Center\x20laser',
        'sectores': _0x4790ef(0x2d4),
        'colorJuego': _0x4790ef(0x80e),
        'colorLaser': _0x4790ef(0x79d),
        'colorBorde': _0x4790ef(0x4e3),
        'copiar': _0x4790ef(0x7f2),
        'fondos': _0x4790ef(0x290),
        'fondo0': _0x4790ef(0x560),
        'fondo1': 'Green',
        'fondo2': 'Blue',
        'fondo3': _0x4790ef(0x5ac),
        'fondo4': _0x4790ef(0x58c),
        'skinVisible': _0x4790ef(0x31c),
        'soundTuto1': _0x4790ef(0x4df),
        'soundTuto2': _0x4790ef(0x5db),
        'soundTuto3': _0x4790ef(0x5ad),
        'soundTuto4': 'sound\x20link\x2010heads'
    },
    'uk': {
        'opciones': _0x4790ef(0x2da),
        'anchoPotenciador': _0x4790ef(0x776),
        'auraPotenciador': _0x4790ef(0x3a6),
        'anchoComida': '??????\x20???',
        'brilloComida': _0x4790ef(0x353),
        'fondo': _0x4790ef(0x28d),
        'laser': _0x4790ef(0x234),
        'sectores': _0x4790ef(0x5e8),
        'colorJuego': _0x4790ef(0x353),
        'colorLaser': _0x4790ef(0x401),
        'colorBorde': _0x4790ef(0x631),
        'copiar': _0x4790ef(0x4cc),
        'fondos': _0x4790ef(0x24a),
        'fondo0': _0x4790ef(0x342),
        'fondo1': _0x4790ef(0x7e4),
        'fondo2': _0x4790ef(0x799),
        'fondo3': _0x4790ef(0x3a3),
        'fondo4': '??????\x203',
        'skinVisible': _0x4790ef(0x559),
        'soundTuto1': _0x4790ef(0x347),
        'soundTuto2': '???????????\x20????',
        'soundTuto3': _0x4790ef(0x84e),
        'soundTuto4': _0x4790ef(0x241)
    }
};
const _wrmxt = {
        'isSkinCustom'(_0x1a8f62) {
            var _0x4f4e1a = _0x4790ef,
                _0x5a859b = /[a-zA-Z]/;
            return 'string' === typeof _0x1a8f62 && _0x5a859b[_0x4f4e1a(0x599)](_0x1a8f62);
        },
        'testSkinCustom': function(_0x480d39) {
            return _wrmxt['isSkinCustom'](_0x480d39) ? 0x22 || 0x21 : _0x480d39;
        },
        'testSkinMod': function(_0xaaa1ff) {
            return 0x18f <= _0xaaa1ff && 0x3e7 > _0xaaa1ff;
        },
        'testWear': function(_0x58cfcc) {
            return 0x18f <= _0x58cfcc && 0x3e7 > _0x58cfcc;
        },
        'isNumberValid': function(_0x267d27) {
            return '' !== _0x267d27 && null !== _0x267d27 && void 0x0 !== _0x267d27 && !isNaN(_0x267d27);
        },
        'validInput': function(_0x2d8eb7) {
            var _0xb673b0 = _0x4790ef;
            if (!_wrmxt[_0xb673b0(0x5b9)](_0x2d8eb7) && !_wrmxt[_0xb673b0(0x51d)](_0x2d8eb7)) return _0x2d8eb7;
            try {
                let _0x1726f3 = $(_0xb673b0(0x1fc))[_0xb673b0(0x7db)]();
                return encodeURI(_wrmxt[_0xb673b0(0x7be)](_0x1726f3) ? _0x1726f3 : 0x23);
            } catch (_0x539f07) {
                return encodeURI(0x23);
            }
        },
        'aload': ![],
        'aId': 0x0
    },
    setIdReplaceSkin = function(_0x5d9526) {
        var _0x1e47c3 = _0x4790ef;
        theoKzObjects[_0x1e47c3(0x23b)] = _wrmxt[_0x1e47c3(0x7be)](_0x5d9526[_0x1e47c3(0x639)]) ? _0x5d9526[_0x1e47c3(0x639)] : 0x23, localStorage[_0x1e47c3(0x1df)](_0x1e47c3(0x648), JSON[_0x1e47c3(0x77d)](theoKzObjects));
    };
var intervalID = null,
    isRunning = ![],
    initialInterval = 0x37,
    cycleCounter = 0x1,
    isIncrementing = !![];
let pixi = new Function(_0x4790ef(0x28e))(),
    girotexture = pixi[_0x4790ef(0x259)][_0x4790ef(0x2a8)]('https://i.imgur.com/0aN5Zek.png'),
    ungirotexture = pixi[_0x4790ef(0x259)]['from'](_0x4790ef(0x779)),
    explotWtexture = pixi[_0x4790ef(0x259)][_0x4790ef(0x2a8)](_0x4790ef(0x6ab));
var keys = {
    'zoom': 'z',
    'restart': 'r',
    'giro': 's',
    'wormExplot': 'x',
    'laserHS': 'l',
    'sectores': 'q',
    'background': 'c',
    'noSkin': 'f',
    'noAuras': 'g'
};

function cambiarKey(_0x230c0c, _0x446e5a) {
    keys['hasOwnProperty'](_0x230c0c) && (keys[_0x230c0c] = _0x446e5a);
}
let theoObjects = {
    'teamColor': _0x4790ef(0x5f8),
    'laserColor': _0x4790ef(0x5f8),
    'colorFondo': _0x4790ef(0x587),
    'colorBorde': _0x4790ef(0x4f2),
    'hsTextColor': _0x4790ef(0x5f8),
    'killTextColor': _0x4790ef(0x5f8),
    'minimapBorderColor': 'FFFFFF'
};
var zw_updatezoom, zw_multiplier, zw_zoomtext, crearRegion2, qkq2089cen = null,
    zw_servertext, zw_serverping;
let ping;
var zw_serverfps;
let canSendMessage = !![];
var zw_TopHS_RecordHs, zw_Top3HS_RecordHs, zw_TopFriends_list, zw_TopHS_BestPlayers, zw_MinimapTeamCode, zw_MinimapSombra, zw_lastserver, zw_toplist, zw_Background, ctxHeadshotLine, zw_zoomplustexture, zw_zoomsubtracttexture, zw_giroplustexture, zw_girosubtracttexture, zw_explotWubtracttexture, zw_settingsblockbadwords, zw_selectedbackground, zw_joystick, zw_mobilecontrol, zw_mobilecontrol2, zw_mobilecontroltextures, zw_mobilepredictiontextures, zw_mobileprediction, zw_joysticks, zw_mobilearrowtexture, zw_mobilepeedtexture, zw_mobilefullscreenstatus, zw_mobilecheck;
zw_multiplier = 0x1;
let frameTimes = [],
    lastFrameTime = performance[_0x4790ef(0x7bc)]();
var killtext, hstext, circle, backgrounds = [_0x4790ef(0x35e), _0x4790ef(0x3d8), _0x4790ef(0x820), 'https://asserts.wormworld.io/backgrounds/bkgnd10.png', 'https://asserts.wormworld.io/backgrounds/bkgnd6.png', _0x4790ef(0x463), _0x4790ef(0x456), _0x4790ef(0x449), _0x4790ef(0x6cf), 'https://asserts.wormworld.io/backgrounds/bg_sky_4.png', _0x4790ef(0x735), _0x4790ef(0x75e), _0x4790ef(0x617), _0x4790ef(0x2a3), _0x4790ef(0x55d)];
let currentIndex = localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x85d)) ? parseInt(localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x85d))) : 0x0;
var fonts = [_0x4790ef(0x6f5), _0x4790ef(0x440), 'Tahoma,\x20sans-serif', _0x4790ef(0x5cf), '\x27Georgia\x27,\x20serif', _0x4790ef(0x42d), '\x27Comic\x20Sans\x20MS\x27,\x20cursive', '\x27Impact\x27,\x20sans-serif', '\x27Lucida\x20Console\x27,\x20monospace', _0x4790ef(0x5b8)];
let currentFontIndex = localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x41b)) ? parseInt(localStorage[_0x4790ef(0x3a1)]('selectedFont')) : 0x0;

function getPingColor(_0x2234e1) {
    var _0x5a27e2 = _0x4790ef;
    if (_0x2234e1 <= 0x32) return _0x5a27e2(0x53b);
    if (_0x2234e1 <= 0x50) return _0x5a27e2(0x635);
    if (_0x2234e1 <= 0x78) return _0x5a27e2(0x67b);
    if (_0x2234e1 <= 0xb4) return _0x5a27e2(0x74f);
    if (_0x2234e1 <= 0xfa) return _0x5a27e2(0x5e0);
    return '#FF0000';
}

function getFPSColor(_0x1ead1c) {
    var _0x1fc4ce = _0x4790ef;
    if (_0x1ead1c >= 0x3c) return _0x1fc4ce(0x53b);
    if (_0x1ead1c >= 0x32) return _0x1fc4ce(0x635);
    if (_0x1ead1c >= 0x28) return _0x1fc4ce(0x67b);
    if (_0x1ead1c >= 0x1e) return _0x1fc4ce(0x74f);
    if (_0x1ead1c >= 0x14) return _0x1fc4ce(0x5e0);
    return _0x1fc4ce(0x739);
}
window['onwheel'] = _0x10a957 => {
    var _0xe2332f = _0x4790ef;
    _0x10a957[_0xe2332f(0x1fe)] > 0x0 ? zw_updatezoom(Math[_0xe2332f(0x604)](zw_multiplier - 0.75 * parseFloat(theoKzObjects['zoomSpeed']), 0.5)) : zw_updatezoom(Math[_0xe2332f(0x363)](zw_multiplier + 1.05 * parseFloat(theoKzObjects['zoomSpeed']), 0x32));
};
var zw_mobilecheck = function() {
        var _0xbe485 = _0x4790ef,
            _0x34d6fd = new Function(_0xbe485(0x812))();
        return new _0x34d6fd(_0xbe485(0x364), 'i')[_0xbe485(0x599)](navigator[_0xbe485(0x4a0)]);
    },
    zw_updatezoom = function(_0x42780d) {
        var _0x1a1301 = _0x4790ef;
        zw_multiplier = _0x42780d;
        var _0x5954fe = parseFloat(zw_multiplier[_0x1a1301(0x830)](0x2));
        if (Math[_0x1a1301(0x2e8)](_0x5954fe) < 0.01) _0x5954fe = 0x0;
        else Math[_0x1a1301(0x2e8)](_0x5954fe - 0x1) < 0.01 && (_0x5954fe = 0x1);
        zw_zoomtext['text'] = _0x5954fe + 'x';
    },
    inputReplaceSkin = localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x304)),
    PilotoAutomatico = null,
    isPlaying = ![];
window[_0x4790ef(0x3e8)] = 0x51;
var theoEvents = {
        'eventoPrincipal': null,
        'joystick': {
            'positionMode': 'L',
            'checked': !0x0,
            'size': 0x5a,
            'mode': 'dynamic',
            'position': {
                'left': _0x4790ef(0x531),
                'bottom': _0x4790ef(0x531)
            },
            'color': _0x4790ef(0x848),
            'pxy': 0x6e
        }
    },
    idiomaActual = window[_0x4790ef(0x56c)][_0x4790ef(0x1fa)][_0x4790ef(0x3d4)](_0x4790ef(0x3ab)) ? 'es' : window['location'][_0x4790ef(0x1fa)]['includes'](_0x4790ef(0x2cd)) ? 'uk' : 'en',
    theoKzObjects = {
        'FB_UserID': '',
        'fps': ![],
        'ping': ![],
        'chngBotSkins': ![],
        'chngPersonsSkins': ![],
        'minimapTeamcod': ![],
        'hideYouNameInMinimap': ![],
        'Incognito': ![],
        'laserHS': ![],
        'spawnInfinity': ![],
        'backgroundSolid': ![],
        'sectores': ![],
        'visiblePowersAll': ![],
        'speed_zigzag': !![],
        'timerSpZg': ![],
        'zoomSpeed': localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x1dd)) || 0x1,
        'PotenciadorSize': localStorage[_0x4790ef(0x3a1)]('PotenciadorSize') || 0x2,
        'PotenciadorAura': localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x1de)) || 1.2,
        'ComidaShadow': localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x843)) || 0x2,
        'ComidaSize': localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x46f)) || 0x2,
        'mouseDelay': localStorage['getItem'](_0x4790ef(0x30b)) || 0x14,
        'smoothCamera': localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x83f)) || 0.5,
        'eat_animation': 0.0025,
        'PortionSize': localStorage[_0x4790ef(0x6ee)] || 0x2,
        'PortionAura': localStorage[_0x4790ef(0x1de)] || 1.2,
        'PortionTransparent': 0.8,
        'FoodTransparent': 0.3,
        'showTeamList': !![],
        'animationHeadshot': !![],
        'top8': !![],
        'killFeed': ![],
        'noAuras': !![],
        'noSkin': !![],
        'KeyCodeRespawn': localStorage[_0x4790ef(0x2c1)] || 0x52,
        'KeyCodeAutoMov': localStorage['KeyAutoMov'] || window[_0x4790ef(0x3e8)],
        'AbilityZ': ![],
        'dead': ![],
        'FoodShadow': localStorage[_0x4790ef(0x843)] || 0x2,
        'FoodSize': localStorage[_0x4790ef(0x46f)] || 0x2,
        'headshot': 0x0,
        'idReplaceSkin': 0x23,
        'visibleSkin': [],
        'pL': [],
        'gamePad': theoEvents[_0x4790ef(0x301)],
        'mobile': !0x1,
        'loading': ![],
        'kill': 0x0,
        'totalKills': 0x0,
        'totalHeadshots': 0x0,
        'adblock': ![],
        'CLIENTE_ADMIN': 0x1,
        'CLIENTE_ACTIVO': 0x3,
        'CLIENTE_INACTIVO': 0x4
    };
saveGameLocal = localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x648));
if (saveGameLocal && _0x4790ef(0x417) !== saveGameLocal) {
    let t = JSON[_0x4790ef(0x374)](saveGameLocal);
    for (let e in t) theoKzObjects[e] = t[e];
}
theoKzObjects[_0x4790ef(0x25b)] = !![];
let soundEnabled;
var zwormData = {
    'id_user': '',
    'nickname': 'zworm',
    'enemyNameHs': _0x4790ef(0x6b5),
    'teamCode': '',
    'playerX': 0x0,
    'playerY': 0x0,
    'hs': 0x0,
    'kill': 0x0,
    'message': '',
    'teamColor': localStorage[_0x4790ef(0x3a1)](_0x4790ef(0x2f9)) || _0x4790ef(0x82a),
    'wssServer': ''
};
const socket = new WebSocket(_0x4790ef(0x578)),
    gameState = {
        'players': new Map()
    };
let lastUpdate = 0x0;
const UPDATE_INTERVAL = 0x32;
socket[_0x4790ef(0x6bd)](_0x4790ef(0x7ce), () => console['log'](_0x4790ef(0x4d4))), socket[_0x4790ef(0x6bd)](_0x4790ef(0x7a9), () => console[_0x4790ef(0x435)](_0x4790ef(0x4fd))), socket[_0x4790ef(0x6bd)](_0x4790ef(0x800), async _0x3d8499 => {
    var _0x2a3109 = _0x4790ef;
    try {
        const _0x545b58 = typeof _0x3d8499['data'] === _0x2a3109(0x791) ? JSON[_0x2a3109(0x374)](_0x3d8499[_0x2a3109(0x85c)]) : JSON[_0x2a3109(0x374)](await _0x3d8499[_0x2a3109(0x85c)]['text']());
        handleMessage(_0x545b58);
    } catch (_0x4d8e2c) {
        console[_0x2a3109(0x769)](_0x2a3109(0x383), _0x4d8e2c);
    }
});

function handleMessage(_0x193003) {
    var _0x456664 = _0x4790ef;
    if (!_0x193003 || _0x193003[_0x456664(0x3f9)] !== zwormData[_0x456664(0x3f9)]) return;
    _0x193003[_0x456664(0x80a)] && [_0x456664(0x81c), _0x456664(0x47f), _0x456664(0x2e0)]['includes'](_0x193003['id_user']) && (createServerMessage(_0x456664(0x611), _0x193003[_0x456664(0x800)]), console[_0x456664(0x435)](_0x456664(0x473) + _0x193003[_0x456664(0x80a)] + '\x20ha\x20enviado\x20un\x20mensaje:\x20' + _0x193003[_0x456664(0x800)]));
    switch (_0x193003[_0x456664(0x767)]) {
        case _0x456664(0x506):
            handlers[_0x456664(0x506)](_0x193003[_0x456664(0x479)]);
            break;
        case 'playerUpdate':
            handlers[_0x456664(0x5ef)](_0x193003);
            break;
        case _0x456664(0x682):
            handlers[_0x456664(0x682)](_0x193003);
            break;
        case _0x456664(0x218):
            handlers[_0x456664(0x218)](_0x193003);
            break;
        case _0x456664(0x2c3):
            removePlayer(_0x193003['id']);
            break;
        default:
            console[_0x456664(0x435)]('Mensaje\x20desconocido:', _0x193003);
    }
}

function getUserData(_0x1437fc) {
    var _0x4e97fd = _0x4790ef;
    return clientes[_0x4e97fd(0x851)]['find'](_0x504af5 => _0x504af5[_0x4e97fd(0x52a)] === _0x1437fc);
}
let messageQueue = [],
    isProcessingQueue = ![];

function sendMessage() {
    var _0x5ec541 = _0x4790ef;
    if (!canSendMessage) {
        console['log'](_0x5ec541(0x1fb));
        return;
    }
    const _0x5dd418 = $(_0x5ec541(0x546))[_0x5ec541(0x7db)]()[_0x5ec541(0x58b)]();
    if (!_0x5dd418) return;
    canSendMessage = ![], setTimeout(() => canSendMessage = !![], 0x3e8);
    const _0x14d0ec = zwormData[_0x5ec541(0x5b6)]['substring'](0x0, 0x10),
        _0x3e5eef = getUserData(zwormData[_0x5ec541(0x80a)]),
        _0x392d32 = {
            'type': _0x5ec541(0x5ce),
            'id_user': zwormData[_0x5ec541(0x80a)],
            'nickname': _0x14d0ec,
            'message': _0x5dd418,
            'wssServer': zwormData[_0x5ec541(0x3f9)],
            'color': _0x3e5eef?.['color'] || _0x5ec541(0x28a),
            'image': _0x3e5eef?.[_0x5ec541(0x2be)] || 'default_icon.png'
        };
    messageQueue['push'](_0x392d32), processMessageQueue(), displayMessage(_0x14d0ec, _0x5dd418, zwormData[_0x5ec541(0x80a)], _0x392d32[_0x5ec541(0x281)], _0x392d32['image'], !![]), $(_0x5ec541(0x546))[_0x5ec541(0x7db)]('');
}
async function processMessageQueue() {
    var _0x3c47b6 = _0x4790ef;
    if (isProcessingQueue || messageQueue[_0x3c47b6(0x30a)] === 0x0) return;
    isProcessingQueue = !![];
    while (messageQueue[_0x3c47b6(0x30a)] > 0x0) {
        const _0x4e92d5 = messageQueue['shift']();
        try {
            socket[_0x3c47b6(0x2ba)](JSON[_0x3c47b6(0x77d)](_0x4e92d5)), await new Promise(_0x1c709e => setTimeout(_0x1c709e, 0x32));
        } catch (_0x1193ed) {
            console['error'](_0x3c47b6(0x2ec), _0x1193ed);
        }
    }
    isProcessingQueue = ![];
}

function displayMessage(_0x33262d, _0x494588, _0x121ef2, _0x97071b, _0x51432a, _0x5a53ee = ![]) {
    var _0x3173f8 = _0x4790ef;
    const _0x12db18 = _0x97071b || _0x3173f8(0x28a),
        _0x2fee7b = _0x51432a ? '<img\x20src=\x22' + _0x51432a + _0x3173f8(0x4d2) : '',
        _0x50db7d = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-message\x22\x20style=\x22background:\x20' + _0x12db18 + _0x3173f8(0x672) + _0x2fee7b + _0x3173f8(0x64d) + _0x121ef2 + _0x3173f8(0x844) + (_0x5a53ee ? _0x3173f8(0x79b) : _0x3173f8(0x42f)) + '\x22>' + _0x33262d + _0x3173f8(0x2c7) + _0x494588 + _0x3173f8(0x316);
    $(_0x3173f8(0x307))[_0x3173f8(0x517)](_0x50db7d)['scrollTop']($(_0x3173f8(0x307))[0x0][_0x3173f8(0x502)]);
}
const handlers = {
    'initialState': _0x6c3c58 => {
        var _0x45e3da = _0x4790ef;
        _0x6c3c58[_0x45e3da(0x39f)](_0x5bbad1 => gameState[_0x45e3da(0x479)][_0x45e3da(0x3ce)](_0x5bbad1['id_user'], _0x5bbad1)), console[_0x45e3da(0x435)](_0x45e3da(0x43d), _0x6c3c58);
    },
    'playerUpdate': _0x457716 => {
        var _0x240033 = _0x4790ef;
        gameState[_0x240033(0x479)][_0x240033(0x3ce)](_0x457716[_0x240033(0x80a)], {
            ..._0x457716
        }), updateTop8Hs(), _0x457716[_0x240033(0x6e5)] && _0x457716[_0x240033(0x6e5)] === zwormData[_0x240033(0x6e5)] && (createTeamUbication(_0x457716[_0x240033(0x6e5)], _0x457716['teamColor']), createTeamMessage(_0x457716[_0x240033(0x6e5)], _0x457716['nickname'], _0x457716[_0x240033(0x800)]));
    },
    'hsKillUpdate': _0x8e70dd => {
        var _0x240f84 = _0x4790ef;
        const _0x43bd91 = gameState[_0x240f84(0x479)][_0x240f84(0x505)](_0x8e70dd[_0x240f84(0x80a)]);
        _0x43bd91 ? _0x43bd91[_0x240f84(0x823)] = _0x8e70dd[_0x240f84(0x823)] : gameState[_0x240f84(0x479)][_0x240f84(0x3ce)](_0x8e70dd[_0x240f84(0x80a)], {
            ..._0x8e70dd,
            'position': {
                'x': 0x0,
                'y': 0x0
            }
        }), updateTop8Hs();
    },
    'playerDeath': _0x4773f9 => {
        var _0xff3fea = _0x4790ef;
        gameState[_0xff3fea(0x479)][_0xff3fea(0x25c)](_0x4773f9['id_user']), console[_0xff3fea(0x435)]('El\x20jugador\x20' + _0x4773f9[_0xff3fea(0x5b6)] + '\x20ha\x20muerto.'), updateTop8Hs(), clearTeamUbication();
    }
};
Object[_0x4790ef(0x622)](window, handlers);
let pendingUpdate = null,
    updateTimeout = null;

function sendUpdate(_0x36c7c5, _0x5958e6 = {}) {
    var _0x1bdaca = _0x4790ef;
    const _0xbdd332 = {
        'type': _0x36c7c5,
        'id_user': zwormData[_0x1bdaca(0x80a)],
        'nickname': zwormData[_0x1bdaca(0x5b6)],
        'enemyNameHs': zwormData[_0x1bdaca(0x3bb)],
        'hskill': {
            'hs': zwormData['hs'],
            'kill': zwormData[_0x1bdaca(0x7ab)]
        },
        'position': {
            'x': zwormData[_0x1bdaca(0x758)],
            'y': zwormData[_0x1bdaca(0x5b1)]
        },
        'message': zwormData[_0x1bdaca(0x800)],
        'teamCode': zwormData[_0x1bdaca(0x6e5)],
        'teamColor': zwormData[_0x1bdaca(0x2f9)],
        'wssServer': zwormData[_0x1bdaca(0x3f9)],
        ..._0x5958e6
    };
    socket[_0x1bdaca(0x3bc)] === WebSocket[_0x1bdaca(0x75f)] && socket[_0x1bdaca(0x2ba)](JSON[_0x1bdaca(0x77d)](_0xbdd332));
}

function sendPlayerUpdate(_0x2a65f4, _0x1ea2a5) {
    var _0xc04bce = _0x4790ef;
    const _0x55e0d7 = Date[_0xc04bce(0x7bc)]();
    if (_0x55e0d7 - lastUpdate < UPDATE_INTERVAL) {
        pendingUpdate && clearTimeout(updateTimeout);
        pendingUpdate = {
            'x': _0x2a65f4,
            'y': _0x1ea2a5
        }, updateTimeout = setTimeout(() => {
            var _0x2dd8e6 = _0xc04bce;
            pendingUpdate && (zwormData['playerX'] = pendingUpdate['x'], zwormData[_0x2dd8e6(0x5b1)] = pendingUpdate['y'], sendUpdate(_0x2dd8e6(0x5ef), {
                'position': pendingUpdate
            }), pendingUpdate = null, lastUpdate = Date[_0x2dd8e6(0x7bc)]());
        }, UPDATE_INTERVAL - (_0x55e0d7 - lastUpdate));
        return;
    }
    zwormData[_0xc04bce(0x758)] = _0x2a65f4, zwormData[_0xc04bce(0x5b1)] = _0x1ea2a5, sendUpdate(_0xc04bce(0x5ef), {
        'position': {
            'x': _0x2a65f4,
            'y': _0x1ea2a5
        }
    }), lastUpdate = _0x55e0d7;
}

function sendPlayerDeath(_0x3adcef, _0x5907f6) {
    var _0x2dc8ff = _0x4790ef;
    sendUpdate(_0x2dc8ff(0x218), {
        'hskill': {
            'hs': _0x3adcef,
            'kill': _0x5907f6
        }
    });
}

function sendHSKillUpdate(_0x5a923b, _0x579b8d) {
    var _0x22f171 = _0x4790ef;
    sendUpdate(_0x22f171(0x682), {
        'hskill': {
            'hs': _0x5a923b,
            'kill': _0x579b8d
        }
    });
}
let clientes = {
        'clientesVencidos': [],
        'clientesActivos': []
    },
    clientsSkins = {
        'clientsSkinsVencidos': [],
        'clientsSkinsActivos': []
    };
var TIME = new Date()[_0x4790ef(0x35c)]();
async function loadUsers() {
    var _0x88e68c = _0x4790ef;
    await fetch(_0x88e68c(0x601) + TIME)['then'](_0x2267dc => _0x2267dc['json']())[_0x88e68c(0x63d)](_0x117baf => {
        var _0x207f3c = _0x88e68c;
        console[_0x207f3c(0x435)](_0x117baf);
        if (_0x117baf[_0x207f3c(0x4cb)]) {
            let _0x421dca = _0x117baf['Users'];
            clientes[_0x207f3c(0x851)] = _0x421dca[_0x207f3c(0x732)](_0x110a8d => {
                var _0x22f06c = _0x207f3c;
                return _0x110a8d[_0x22f06c(0x52a)];
            });
        } else clientes = {
            'clientesVencidos': [],
            'clientesActivos': []
        }, alert(_0x207f3c(0x610));
    });
}
loadUsers();
async function loadSkinUnlock() {
    var _0x26e02d = _0x4790ef;
    await fetch(_0x26e02d(0x74c) + TIME)[_0x26e02d(0x63d)](_0x50deb5 => _0x50deb5[_0x26e02d(0x2e6)]())['then'](_0x26af7a => {
        var _0x3f6b61 = _0x26e02d;
        console[_0x3f6b61(0x435)](_0x26af7a);
        if (_0x26af7a[_0x3f6b61(0x4cb)]) {
            let _0x10982b = _0x26af7a[_0x3f6b61(0x698)];
            clientsSkins[_0x3f6b61(0x731)] = _0x10982b['filter'](_0x377ad1 => {
                return _0x377ad1['client_ID'];
            });
        } else clientsSkins = {
            'clientsSkinsVencidos': [],
            'clientsSkinsActivos': []
        }, alert(_0x3f6b61(0x610));
    });
}
loadSkinUnlock();
let serverDataTimMap = [];
async function loadServersTimMap() {
    var _0x5be808 = _0x4790ef;
    const _0x29aa44 = 'https://zwormextenstion.com/wormExtension/api/serversTimMap.php?v=' + TIME;
    await fetch(_0x29aa44)[_0x5be808(0x63d)](_0x5c21c4 => _0x5c21c4[_0x5be808(0x32d)]())[_0x5be808(0x63d)](_0x6d5323 => {
        var _0x4d2186 = _0x5be808,
            _0x5f4859 = _0x6d5323,
            _0x5d4ed7 = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g,
            _0xb6e524 = _0x5f4859['matchAll'](_0x5d4ed7),
            _0x293937 = [..._0xb6e524][_0x4d2186(0x751)](_0x3c074e => _0x3c074e[0x1]);
        for (let _0x524e94 = 0x0; _0x524e94 < _0x293937['length']; _0x524e94++) {
            let _0x1e7b4f = _0x293937[_0x524e94],
                _0x398363 = null,
                _0x240009 = null;
            var _0x100f7d = /<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/,
                _0x3a9198 = _0x1e7b4f[_0x4d2186(0x33e)](_0x100f7d);
            if (_0x3a9198) {
                var _0x469010 = _0x3a9198[0x1],
                    _0x3db102 = _0x3a9198[0x2],
                    _0x4c7e13 = _0x3a9198[0x3],
                    _0x91d5da = _0x3a9198[0x4],
                    _0x51617d = decodeUnicode(_0x91d5da),
                    _0x93fb47 = /<a href=\\"(https:.*?)\\"/,
                    _0x3090dd = _0x1e7b4f[_0x4d2186(0x33e)](_0x93fb47);
                _0x3090dd && (_0x398363 = _0x3090dd[0x1]);
                var _0x364229 = /<img src=\\"(.*?)\\"/,
                    _0x4b45a4 = _0x1e7b4f[_0x4d2186(0x33e)](_0x364229);
                _0x4b45a4 && (_0x240009 = _0x4b45a4[0x1]), serverDataTimMap[_0x4d2186(0x236)]({
                    'serverNameAndOpen': _0x469010,
                    'dataRoom': _0x3db102,
                    'dataCon': _0x4c7e13,
                    'serverName': _0x51617d,
                    'secondHref': _0x398363,
                    'imgSrc': _0x240009
                });
            }
        }
    })['catch'](_0x90cc85 => {
        var _0x1690c1 = _0x5be808;
        console[_0x1690c1(0x435)](_0x90cc85);
    });
}
var top1Servers = {};
async function extractTopScores() {
    var _0x4a3290 = _0x4790ef;
    const _0x100c07 = _0x4a3290(0x2fc) + TIME;
    try {
        let _0x1290af = await fetch(_0x100c07);
        if (!_0x1290af['ok']) throw new Error(_0x4a3290(0x673) + _0x1290af[_0x4a3290(0x755)]);
        let _0x5aca69 = await _0x1290af['json']();
        for (let _0xe6a5f9 in _0x5aca69) {
            if (_0x5aca69[_0xe6a5f9]['length'] > 0x0) {
                let _0x50ecd2 = _0x5aca69[_0xe6a5f9][_0x4a3290(0x22a)]((_0x56a9d9, _0x203936) => _0x203936['Score'] > _0x56a9d9[_0x4a3290(0x534)] ? _0x203936 : _0x56a9d9, _0x5aca69[_0xe6a5f9][0x0]),
                    _0x5ee0bc = formatScore(_0x50ecd2['Score']),
                    _0x4add2e = getStatusColor(_0x50ecd2['Score']);
                top1Servers[_0xe6a5f9] = {
                    'ServerName': _0x50ecd2[_0x4a3290(0x2d2)],
                    'Initials': _0xe6a5f9,
                    'Score': _0x5ee0bc,
                    'StatusColor': _0x4add2e
                };
            }
        }
        console[_0x4a3290(0x435)](top1Servers);
    } catch (_0x3f1114) {
        console[_0x4a3290(0x769)](_0x4a3290(0x54b), _0x3f1114);
    }
}
let serverData = [];
async function loadServersWormWorld() {
    var _0x514b67 = _0x4790ef;
    const _0x2ebbd0 = _0x514b67(0x7aa) + TIME;
    await fetch(_0x2ebbd0)['then'](_0x5daac1 => _0x5daac1[_0x514b67(0x32d)]())[_0x514b67(0x63d)](_0x290278 => {
        var _0x4fde9c = _0x514b67;
        const _0x23dc10 = new DOMParser(),
            _0x4166ad = _0x23dc10[_0x4fde9c(0x3ad)](_0x290278, 'text/html'),
            _0x111d9a = _0x4166ad['querySelectorAll']('div[id*=\x22wwc_room_item_\x22]');
        console[_0x4fde9c(0x435)](_0x111d9a), _0x111d9a[_0x4fde9c(0x39f)](_0x27f0f2 => {
            var _0x25aafa = _0x4fde9c;
            const _0x450b27 = _0x27f0f2[_0x25aafa(0x272)](_0x25aafa(0x492)),
                _0x16f17a = _0x450b27[_0x25aafa(0x655)](_0x25aafa(0x412)),
                _0x3879e7 = _0x450b27[_0x25aafa(0x655)](_0x25aafa(0x34c)),
                _0x236a1c = _0x27f0f2['textContent']['trim'](),
                _0xf35eb7 = _0x450b27[_0x25aafa(0x655)](_0x25aafa(0x36d)),
                _0x1f7232 = _0x27f0f2[_0x25aafa(0x272)](_0x25aafa(0x783)),
                _0xf82eb6 = _0x1f7232 ? _0x1f7232[_0x25aafa(0x655)]('src') : null;
            serverData[_0x25aafa(0x236)]({
                'dataCon': _0x16f17a,
                'dataRoom': _0x3879e7,
                'serverName': _0x236a1c,
                'dataType': _0xf35eb7,
                'imgSrc': _0xf82eb6
            });
        }), console[_0x4fde9c(0x435)](serverData);
    })[_0x514b67(0x53a)](_0x5770bd => {
        var _0x48d727 = _0x514b67;
        console[_0x48d727(0x435)](_0x5770bd);
    });
}

function formatScore(_0x1a9639) {
    var _0x16d9f5 = _0x4790ef;
    if (_0x1a9639 >= 0xf4240) return (_0x1a9639 / 0xf4240)[_0x16d9f5(0x830)](0x1) + 'M';
    else {
        if (_0x1a9639 >= 0x3e8) return (_0x1a9639 / 0x3e8)[_0x16d9f5(0x830)](0x1) + 'K';
    }
    return _0x1a9639['toString']();
}

function getStatusColor(_0x5f1d55) {
    var _0x4d1d0d = _0x4790ef;
    if (_0x5f1d55 > 0x989680) return _0x4d1d0d(0x43e);
    else return _0x5f1d55 > 0x1e8480 ? _0x4d1d0d(0x394) : _0x4d1d0d(0x721);
}
async function registerUpdatePlayer(_0x270cef) {
    var _0x5d5916 = _0x4790ef;
    await fetch(_0x5d5916(0x4c1), {
        'method': _0x5d5916(0x31a),
        'body': JSON[_0x5d5916(0x77d)]({
            'data': _0x270cef
        })
    })[_0x5d5916(0x63d)](_0x34ade6 => _0x34ade6[_0x5d5916(0x2e6)]())[_0x5d5916(0x63d)](_0x5613a5 => {
        var _0x211911 = _0x5d5916;
        console[_0x211911(0x435)](_0x5613a5);
    });
}
async function checkSubscriptionExpired(_0x5257f6) {
    var _0x5a922e = _0x4790ef;
    await fetch('https://swykz.theoxt.com/api/users/checkSubscriptionExpired.php', {
        'method': _0x5a922e(0x31a),
        'body': JSON[_0x5a922e(0x77d)]({
            'code': _0x5257f6
        })
    })[_0x5a922e(0x63d)](_0x57dcea => _0x57dcea['json']())['then'](_0x1ed3ef => {
        console['log'](_0x1ed3ef);
    });
}

function fetchCustomLogo(_0x56da34) {
    var _0x592da1 = _0x4790ef;
    $[_0x592da1(0x5d9)]({
        'url': _0x592da1(0x294),
        'method': _0x592da1(0x214),
        'dataType': _0x592da1(0x2e6),
        'success': function(_0x5eae07) {
            var _0x17a787 = _0x592da1,
                _0x2751fd = _0x5eae07['allstreamers']['streamers'][_0x17a787(0x732)](function(_0xff29b4) {
                    var _0x3ade4b = _0x17a787;
                    return _0xff29b4[_0x3ade4b(0x3e0)] === _0x56da34;
                });
            if (_0x2751fd[_0x17a787(0x30a)] === 0x0) {
                console['log'](_0x17a787(0x61b));
                return;
            }
            var _0x3e003c = _0x2751fd[0x0];
            $(_0x17a787(0x75a))['attr'](_0x17a787(0x68e), _0x3e003c['logo']), $(_0x17a787(0x47c))[_0x17a787(0x5b5)](_0x17a787(0x68e), _0x3e003c[_0x17a787(0x30c)]), $(_0x17a787(0x75a))[_0x17a787(0x5b5)](_0x17a787(0x68e), _0x3e003c[_0x17a787(0x30c)]);
        },
        'error': function(_0x36f62f) {
            var _0x2444b1 = _0x592da1;
            console[_0x2444b1(0x769)](_0x2444b1(0x5df), _0x36f62f);
        }
    });
}
loadServersWormWorld(), loadServersTimMap(), extractTopScores();

function obtenerImagenPorSeleccion(_0x5159d3) {
    var _0x257a2d = _0x4790ef;
    let _0x465e5e = '';
    switch (_0x5159d3) {
        case '0':
            _0x465e5e = _0x257a2d(0x35e);
            break;
        case '1':
            _0x465e5e = 'https://asserts.wormworld.io/backgrounds/bkgnd8.png';
            break;
        case '2':
            _0x465e5e = _0x257a2d(0x820);
            break;
        case '3':
            _0x465e5e = _0x257a2d(0x350);
            break;
        case '4':
            _0x465e5e = _0x257a2d(0x470);
            break;
        case '5':
            _0x465e5e = _0x257a2d(0x463);
            break;
        case '6':
            _0x465e5e = _0x257a2d(0x456);
            break;
        case '7':
            _0x465e5e = _0x257a2d(0x449);
            break;
        case '8':
            _0x465e5e = _0x257a2d(0x6cf);
            break;
        case '9':
            _0x465e5e = _0x257a2d(0x6e1);
            break;
        case '10':
            _0x465e5e = 'https://asserts.wormworld.io/backgrounds/bg_sky_5.png';
            break;
        case '11':
            _0x465e5e = _0x257a2d(0x75e);
            break;
        case '12':
            _0x465e5e = _0x257a2d(0x617);
            break;
        case '13':
            _0x465e5e = _0x257a2d(0x2a3);
            break;
        case '14':
            _0x465e5e = 'https://asserts.wormworld.io/backgrounds/arena04.png';
            break;
        default:
            console[_0x257a2d(0x362)](_0x257a2d(0x385));
    }
    return _0x465e5e;
}

function startInterval() {
    clearInterval(intervalID), intervalID === null && (intervalID = setInterval(function() {
        var _0x44f607 = anApp['s']['H']['sk'];
        let _0x1ced5a = Math['PI'];
        var _0x295ed2 = _0x44f607 + _0x1ced5a / 0x168 * 0x9;
        _0x295ed2 >= _0x1ced5a && (_0x295ed2 = -_0x44f607), anApp['s']['H']['sk'] = _0x295ed2;
    }, 0x37));
}

function adjustInterval() {
    cycleCounter >= 0x28 && (isIncrementing ? initialInterval += 0x19 : initialInterval -= 0x64, cycleCounter = 0x1);
}

function controlIntervalAdjustment() {
    initialInterval === 0x37 && cycleCounter >= 0x28 && (initialInterval += 0x19, cycleCounter = 0x1, isIncrementing = !![]);
    if (initialInterval === 0x50) adjustInterval();
    if (initialInterval === 0x69) adjustInterval();
    if (initialInterval === 0x82) adjustInterval();
    if (initialInterval === 0x9b) adjustInterval();
    if (initialInterval === 0xb4) adjustInterval();
    if (initialInterval === 0xcd) adjustInterval();
    if (initialInterval === 0xe6) adjustInterval();
    if (initialInterval === 0xff) adjustInterval();
    if (initialInterval === 0x118) adjustInterval();
    if (initialInterval === 0x131) adjustInterval();
    if (initialInterval === 0x14a) adjustInterval();
    if (initialInterval === 0x163) adjustInterval();
    if (initialInterval === 0x17c) adjustInterval();
    if (initialInterval === 0x195) adjustInterval();
    if (initialInterval === 0x1ae) adjustInterval();
    initialInterval === 0x1c7 && cycleCounter >= 0x28 && (initialInterval -= 0x64, cycleCounter = 0x1, isIncrementing = ![]);
}

function manageIntervalCycle() {
    clearInterval(intervalID);
    if (intervalID === null) {
        let _0x3342f4 = anApp['s']['H']['sk'],
            _0x4d087b = Math['PI'],
            _0xfe9f37 = _0x3342f4 + _0x4d087b / 0x168 * 0x9;
        _0xfe9f37 >= _0x4d087b && (_0xfe9f37 = -_0x3342f4), anApp['s']['H']['sk'] = _0xfe9f37, cycleCounter += 0x1, controlIntervalAdjustment(), isRunning && (intervalID = setInterval(manageIntervalCycle, initialInterval));
    }
}

function starAutoCircle() {
    isRunning = !![], initialInterval = 0x37, cycleCounter = 0x1, isIncrementing = !![], manageIntervalCycle();
}
const isPremiumUser = localStorage['getItem'](_0x4790ef(0x3eb)) === _0x4790ef(0x543),
    wormxt_5dlrs_Obj = {
        'visiblePowersAll': ![],
        'speed_zigzag': !![]
    };
var wormxt_Obj = {
    'laserColor': _0x4790ef(0x5f8),
    'colorFondo': '0D0400',
    'colorBorde': _0x4790ef(0x4f2),
    'laserHS': ![],
    'spawnInfinity': ![],
    'backgroundSolid': ![],
    'sectores': ![],
    'CLIENTE_ADMIN': 0x1,
    'CLIENTE_ACTIVO': 0x3,
    'CLIENTE_INACTIVO': 0x4
};
const showVersionPays = async function(_0x312ad4) {
    var _0x5a8ff2 = _0x4790ef,
        _0x39d548 = clientes[_0x5a8ff2(0x851)][_0x5a8ff2(0x3db)](function(_0x1e0d2e) {
            var _0x8ccc29 = _0x5a8ff2;
            return _0x1e0d2e[_0x8ccc29(0x52a)] === _0x312ad4[_0x8ccc29(0x82f)][_0x8ccc29(0x65e)];
        });
    if (_0x39d548) {
        console[_0x5a8ff2(0x435)](_0x5a8ff2(0x652) + _0x312ad4['user_data'][_0x5a8ff2(0x65e)] + _0x5a8ff2(0x539));
        const _0x3ec448 = new Date(),
            _0x191565 = new Date(_0x39d548[_0x5a8ff2(0x7bb)]);
        _0x3ec448 > _0x191565 ? (console[_0x5a8ff2(0x435)](_0x5a8ff2(0x59d)), localStorage[_0x5a8ff2(0x1df)](_0x5a8ff2(0x3eb), _0x5a8ff2(0x530))) : (console[_0x5a8ff2(0x435)](_0x5a8ff2(0x372)), settings5dolars(_0x39d548[_0x5a8ff2(0x7bb)]), localStorage[_0x5a8ff2(0x1df)](_0x5a8ff2(0x3eb), 'true'));
    } else console[_0x5a8ff2(0x435)](_0x5a8ff2(0x216)), localStorage[_0x5a8ff2(0x1df)](_0x5a8ff2(0x3eb), 'false');
};

function setSectorsGame() {
    var _0x540c60 = _0x4790ef;
    zw_Background['removeChildren'](), zw_Background['clear'](), console['log'](theoObjects[_0x540c60(0x763)]);
    if (theoKzObjects[_0x540c60(0x2f8)]) zw_Background[_0x540c60(0x514)]('0x' + theoObjects[_0x540c60(0x763)], 0x1), zw_Background[_0x540c60(0x645)](0x1, '0x' + theoObjects[_0x540c60(0x4e2)], 0x1), zw_Background[_0x540c60(0x2e5)](0x0, 0x0, 0x1f4), zw_Background[_0x540c60(0x64c)]();
    else {
        if (theoKzObjects['sectores']) {
            var _0x3c09a5 = 0x0,
                _0x2a3892 = 0x0,
                _0x46f024 = 0x1f4,
                _0x52dd91 = _0x46f024,
                _0x4bff68 = 0x2 * _0x52dd91 / 0x5,
                _0x163837 = _0x540c60(0x572)[_0x540c60(0x6b6)](''),
                _0x86a7f9 = Math['PI'] * 0x2 / 0xa;
            for (var _0x562f7a = 0x0; _0x562f7a < 0x5; _0x562f7a++) {
                for (var _0x16f807 = 0x0; _0x16f807 < 0xa; _0x16f807++) {
                    var _0x44d797 = _0x16f807 * _0x86a7f9,
                        _0x2318c8 = (_0x16f807 + 0x1) * _0x86a7f9,
                        _0x503ed8 = _0x46f024 - (_0x562f7a + 0.01) * (_0x4bff68 / 0x2),
                        _0x5e2989 = _0x3c09a5 + Math[_0x540c60(0x76a)](_0x44d797) * _0x503ed8,
                        _0x1302c7 = _0x2a3892 + Math['sin'](_0x44d797) * _0x503ed8;
                    zw_Background[_0x540c60(0x514)]('0x' + theoObjects[_0x540c60(0x763)], 0x1), zw_Background['lineStyle'](0.5, '0x' + theoObjects[_0x540c60(0x4e2)], 0x1), zw_Background[_0x540c60(0x3c5)](_0x3c09a5, _0x2a3892), zw_Background[_0x540c60(0x603)](_0x5e2989, _0x1302c7), zw_Background[_0x540c60(0x302)](_0x3c09a5, _0x2a3892, _0x503ed8, _0x44d797, _0x2318c8), zw_Background[_0x540c60(0x603)](_0x3c09a5, _0x2a3892), zw_Background[_0x540c60(0x64c)]();
                    if (_0x562f7a < 0x4) {
                        var _0x1db5ba = _0x163837[_0x562f7a] + (_0x16f807 + 0x1);
                        if (!zw_Background['getChildByName'](_0x1db5ba)) {
                            var _0x4ae311 = new PIXI['TextStyle']({
                                    'fontSize': _0x540c60(0x75d),
                                    'fill': _0x540c60(0x82e)
                                }),
                                _0x4390ad = new PIXI[(_0x540c60(0x636))](_0x1db5ba, _0x4ae311);
                            _0x4390ad[_0x540c60(0x5f4)][_0x540c60(0x3ce)](0.5);
                            var _0x874d46 = _0x44d797 + (_0x2318c8 - _0x44d797) / 0x2,
                                _0x2d3dff = _0x503ed8 - _0x4bff68 / 0x4,
                                _0x48880b = _0x3c09a5 + Math[_0x540c60(0x76a)](_0x874d46) * _0x2d3dff,
                                _0x2f9bb3 = _0x2a3892 + Math[_0x540c60(0x2d7)](_0x874d46) * _0x2d3dff;
                            _0x4390ad[_0x540c60(0x797)][_0x540c60(0x3ce)](_0x48880b, _0x2f9bb3), _0x4390ad[_0x540c60(0x431)] = _0x1db5ba, zw_Background['addChild'](_0x4390ad);
                        }
                    }
                }
            }
        } else zw_Background[_0x540c60(0x6e6)](), zw_Background[_0x540c60(0x39b)](), zw_Background['lineStyle'](0x1, 0xff0000, 0x1), zw_Background['drawCircle'](0x0, 0x0, 0x1f4), zw_Background[_0x540c60(0x64c)]();
    }
}

function decodeUnicode(_0xfbd04a) {
    var _0xfe5ee8 = _0x4790ef;
    return _0xfbd04a[_0xfe5ee8(0x4ae)](/\\u[\dA-F]{4}/gi, function(_0x8428f9) {
        var _0x132677 = _0xfe5ee8;
        return String[_0x132677(0x490)](parseInt(_0x8428f9[_0x132677(0x4ae)](/\\u/, ''), 0x10));
    })['replace'](/\\u[0-9A-F]{2}/g, function(_0x511a5b) {
        var _0x1c9cc2 = _0xfe5ee8;
        return String[_0x1c9cc2(0x490)](parseInt(_0x511a5b[_0x1c9cc2(0x4ae)](/\\u/, ''), 0x10));
    });
}
const settings5dolars = async function(_0x49d92e) {
    var _0x3676bb = _0x4790ef,
        _0x305bf4 = $(_0x3676bb(0x243));
    addMinicolor(_0x305bf4[0x1], _0x3676bb(0x288), _0x3676bb(0x59e), _0x3676bb(0x763), theoObjects[_0x3676bb(0x763)]), addMinicolor(_0x305bf4[0x1], _0x3676bb(0x5c8), _0x3676bb(0x2f6), 'colorBorde', theoObjects[_0x3676bb(0x4e2)]), addMinicolor(_0x305bf4[0x1], _0x3676bb(0x204), 'LASER', _0x3676bb(0x736), theoObjects['laserColor']), addMinicolor(_0x305bf4[0x1], _0x3676bb(0x61c), _0x3676bb(0x7df), 'hsTextColor', theoObjects[_0x3676bb(0x2a6)]), addMinicolor(_0x305bf4[0x1], _0x3676bb(0x771), _0x3676bb(0x31f), 'killTextColor', theoObjects[_0x3676bb(0x73a)]), addMinicolor(_0x305bf4[0x1], _0x3676bb(0x3ea), _0x3676bb(0x5d3), _0x3676bb(0x6af), theoObjects[_0x3676bb(0x6af)]), wormxt_5dlrs_Obj[_0x3676bb(0x1e8)] = ![], wormxt_5dlrs_Obj[_0x3676bb(0x638)] = !![], $(_0x3676bb(0x5fb))[_0x3676bb(0x517)](_0x3676bb(0x661)), $('#user_config')['on'](_0x3676bb(0x3f7), function() {
        var _0x157368 = _0x3676bb;
        $(_0x157368(0x35f))['css']('position', _0x157368(0x47b))['css'](_0x157368(0x7a3), _0x157368(0x27b)), giroActive = ![], toggleGiro();
    });
    let _0x27c5ce = localStorage['getItem'](_0x3676bb(0x54f)),
        _0x253913;
    if (_0x27c5ce === 'true') _0x253913 = !![], theoKzObjects[_0x3676bb(0x54f)] = !![];
    else _0x27c5ce === _0x3676bb(0x530) ? (_0x253913 = ![], theoKzObjects['showTeamList'] = ![]) : _0x253913 = theoKzObjects[_0x3676bb(0x54f)];
    let _0x3a14a2 = localStorage[_0x3676bb(0x3a1)](_0x3676bb(0x448)),
        _0x130211;
    if (_0x3a14a2 === _0x3676bb(0x543)) _0x130211 = !![], theoKzObjects['animationHeadshot'] = !![];
    else _0x3a14a2 === _0x3676bb(0x530) ? (_0x130211 = ![], theoKzObjects[_0x3676bb(0x508)] = ![]) : _0x130211 = theoKzObjects[_0x3676bb(0x508)];
    $(_0x3676bb(0x41e))[_0x3676bb(0x6b2)]('checked', wormxt_Obj[_0x3676bb(0x2f8)]), $(_0x3676bb(0x41e))['on']('click', function() {
        var _0xe47532 = _0x3676bb;
        this['checked'] ? (wormxt_Obj[_0xe47532(0x2f8)] = !![], setSectorsGame()) : (wormxt_Obj[_0xe47532(0x2f8)] = ![], setSectorsGame());
    }), $(_0x3676bb(0x7d7))['on'](_0x3676bb(0x2ab), function() {
        var _0x3702aa = _0x3676bb;
        theoKzObjects[_0x3702aa(0x508)] = $(this)['is'](':checked'), localStorage[_0x3702aa(0x1df)]('showAnimationHeadshot', theoKzObjects['animationHeadshot']), console[_0x3702aa(0x435)]('Mostrar\x20lista\x20de\x20amigos:', theoKzObjects['animationHeadshot']);
    }), $(_0x3676bb(0x643))['on'](_0x3676bb(0x2ab), function() {
        var _0x596c36 = _0x3676bb;
        theoKzObjects['showTeamList'] = $(this)['is'](':checked'), localStorage[_0x596c36(0x1df)](_0x596c36(0x54f), theoKzObjects['showTeamList']), console[_0x596c36(0x435)](_0x596c36(0x7f4), theoKzObjects[_0x596c36(0x54f)]);
    }), $(_0x3676bb(0x3fe))['on'](_0x3676bb(0x3f7), function() {
        var _0xde1e23 = _0x3676bb;
        $(_0xde1e23(0x35f))['css']('display', _0xde1e23(0x541)), giroActive = !![], toggleGiro();
    });

    function _0x4f8dce(_0x1f87bb, _0x2c32f6, _0x57ff75) {
        var _0x245183 = _0x3676bb;
        $(_0x1f87bb)['on'](_0x245183(0x5c6), function() {
            var _0x460fd6 = _0x245183;
            wormxt_Obj[_0x2c32f6] = $(this)['val'](), localStorage[_0x460fd6(0x1df)](_0x57ff75, $(this)[_0x460fd6(0x7db)]()), console[_0x460fd6(0x435)](_0x460fd6(0x3b5), localStorage[_0x460fd6(0x3a1)](_0x57ff75));
        });
    }
    let _0x18d991 = $('<div\x20class=\x22cursor-menu\x22></div>'),
        _0xddb2e7 = $(_0x3676bb(0x6b3));
    for (let _0x561151 = 0x1; _0x561151 < 0x2a; _0x561151++) {
        const _0x491176 = _0x3676bb(0x584) + _0x561151[_0x3676bb(0x696)]()[_0x3676bb(0x318)](0x2, '0') + _0x3676bb(0x5f1),
            _0x440461 = _0x561151 === 0x1 ? _0x3676bb(0x52b) : '',
            _0x134612 = $(_0x3676bb(0x557))[_0x3676bb(0x5b5)]({
                'src': _0x491176,
                'data-cursor': _0x491176,
                'alt': _0x3676bb(0x747) + _0x561151
            }),
            _0x3726de = $('<div>')['addClass'](_0x3676bb(0x850))[_0x3676bb(0x4c6)](_0x440461)[_0x3676bb(0x517)](_0x134612);
        _0xddb2e7[_0x3676bb(0x517)](_0x3726de);
    }
    _0x18d991[_0x3676bb(0x517)](_0xddb2e7), $(_0x3676bb(0x205))['append'](_0x18d991), $(_0x3676bb(0x551))[_0x3676bb(0x58d)]('<div\x20id=\x22firefly-container\x22></div>');
    const _0x4ab3a7 = 0x14,
        _0x2cc22f = $(_0x3676bb(0x6d7));
    for (let _0x542737 = 0x0; _0x542737 < _0x4ab3a7; _0x542737++) {
        let _0x3997b2 = $(_0x3676bb(0x4b3))['addClass'](_0x3676bb(0x365));
        _0x3997b2[_0x3676bb(0x66a)]({
            'left': Math[_0x3676bb(0x201)]() * window[_0x3676bb(0x20b)] + 'px',
            'top': Math[_0x3676bb(0x201)]() * window[_0x3676bb(0x7b8)] + 'px',
            'animationDuration': 0x2 + Math[_0x3676bb(0x201)]() + _0x3676bb(0x801) + (0x5 + Math[_0x3676bb(0x201)]() * 0xa) + 's'
        });
    }
    $(_0x3676bb(0x762))[_0x3676bb(0x327)](_0x3676bb(0x324) + _0x49d92e + _0x3676bb(0x316)), $('.hotkey-container')[_0x3676bb(0x517)](_0x3676bb(0x413)), $(_0x3676bb(0x7c8))[_0x3676bb(0x7db)](keys['zoom']), $('#restart-key')['val'](keys[_0x3676bb(0x521)]), $(_0x3676bb(0x7ae))[_0x3676bb(0x7db)](keys[_0x3676bb(0x6e0)]), $(_0x3676bb(0x85f))[_0x3676bb(0x7db)](keys[_0x3676bb(0x3fb)]), $(_0x3676bb(0x277))[_0x3676bb(0x7db)](keys['giro']), $(_0x3676bb(0x43a))['val'](keys[_0x3676bb(0x2c6)]), $('#noAuras-key')[_0x3676bb(0x7db)](keys[_0x3676bb(0x2bc)]), $('#sectores-key')[_0x3676bb(0x7db)](keys['sectores']), $(_0x3676bb(0x71f))[_0x3676bb(0x7db)](keys['background']), $(_0x3676bb(0x420))['on'](_0x3676bb(0x3f7), function() {
        var _0x5051e1 = _0x3676bb;
        $(_0x5051e1(0x420))[_0x5051e1(0x4c6)](_0x5051e1(0x52b)), $(_0x5051e1(0x421))[_0x5051e1(0x29c)](_0x5051e1(0x52b)), $(_0x5051e1(0x794))['toggle'](), $(_0x5051e1(0x7ac))[_0x5051e1(0x26a)]();
    }), $(_0x3676bb(0x425))[_0x3676bb(0x2b6)](function(_0x4b170c) {
        var _0x4b3fc6 = _0x3676bb;
        _0x4b170c[_0x4b3fc6(0x778)]();
    }), $('.key-input')['keypress'](function(_0x50a179) {
        var _0x74ff19 = _0x3676bb;
        _0x50a179['preventDefault']();
        var _0x589638 = _0x50a179['key']['toLowerCase']();
        $(this)[_0x74ff19(0x7db)](_0x589638);
        var _0x5caf88 = $(this)[_0x74ff19(0x5b5)]('id');
        switch (_0x5caf88) {
            case _0x74ff19(0x63b):
                cambiarKey(_0x74ff19(0x4a4), _0x589638);
                break;
            case 'restart-key':
                cambiarKey(_0x74ff19(0x521), _0x589638);
                break;
            case _0x74ff19(0x702):
                cambiarKey('wormExplot', _0x589638);
                break;
            case _0x74ff19(0x7c7):
                cambiarKey(_0x74ff19(0x6e0), _0x589638);
                break;
            case _0x74ff19(0x25d):
                cambiarKey(_0x74ff19(0x795), _0x589638);
                break;
            case _0x74ff19(0x7a1):
                cambiarKey('noSkin', _0x589638);
                break;
            case _0x74ff19(0x60f):
                cambiarKey(_0x74ff19(0x2bc), _0x589638);
                break;
            case _0x74ff19(0x707):
                cambiarKey(_0x74ff19(0x408), _0x589638);
                break;
            case _0x74ff19(0x528):
                cambiarKey(_0x74ff19(0x290), _0x589638);
                break;
        }
        $(this)['blur']();
    }), $(_0x3676bb(0x7ac))[_0x3676bb(0x517)](_0xddb2e7), $(_0x3676bb(0x325))['on'](_0x3676bb(0x3f7), function() {
        var _0x318fa9 = _0x3676bb,
            _0x973d84 = $(this)[_0x318fa9(0x3db)]('img')[_0x318fa9(0x5b5)](_0x318fa9(0x68e));
        $('body,\x20button,\x20input,\x20a,\x20textarea,\x20select,\x20div,\x20span,\x20p')[_0x318fa9(0x66a)]({
            'cursor': _0x318fa9(0x209) + _0x973d84 + _0x318fa9(0x858)
        }), $(_0x318fa9(0x325))[_0x318fa9(0x29c)](_0x318fa9(0x52b)), $(this)['addClass'](_0x318fa9(0x52b));
    }), $(_0x3676bb(0x399))[_0x3676bb(0x5f0)]('<span\x20style=\x27color:\x20#98928a;\x27\x20class=\x27settings_span\x27>EXP:\x20' + _0x49d92e + _0x3676bb(0x29b)), $(_0x3676bb(0x669))['val'](_0x3676bb(0x574)), $(_0x3676bb(0x3bf))[_0x3676bb(0x7db)](_0x3676bb(0x41f)), zw_hssound = new Audio($(_0x3676bb(0x669))[_0x3676bb(0x7db)]()), zw_laughsound = new Audio($(_0x3676bb(0x3bf))[_0x3676bb(0x7db)]()), $(_0x3676bb(0x669))['on']('input', function() {
        var _0x484498 = _0x3676bb;
        zw_hssound[_0x484498(0x68e)] = $(this)[_0x484498(0x7db)]();
    }), $(_0x3676bb(0x3bf))['on'](_0x3676bb(0x5c6), function() {
        var _0x3a6abc = _0x3676bb;
        zw_laughsound[_0x3a6abc(0x68e)] = $(this)['val']();
    }), $(_0x3676bb(0x3e5))[_0x3676bb(0x58d)](_0x3676bb(0x72e) + _0x3676bb(0x545) + _0x3676bb(0x818) + lenguaje[idiomaActual]['laser'] + _0x3676bb(0x29b) + _0x3676bb(0x68c) + '<div\x20class=\x22settings-checkbox\x22>' + '<input\x20type=\x22checkbox\x22\x20id=\x22settings-sectores-switch\x22>' + _0x3676bb(0x419) + lenguaje[idiomaActual]['sectores'] + _0x3676bb(0x29b) + _0x3676bb(0x68c) + _0x3676bb(0x72e) + _0x3676bb(0x59c) + '<span\x20class=\x22names_settings\x22>\x20:\x20Show\x20All\x20Power-Ups</span>' + _0x3676bb(0x68c) + '<div\x20class=\x22settings-checkbox\x22>' + _0x3676bb(0x553) + _0x3676bb(0x1ea) + _0x3676bb(0x68c) + _0x3676bb(0x6d3) + _0x3676bb(0x7ad) + '<input\x20id=\x22color_paletRGB\x22\x20type=\x22color\x22\x20value=\x22#000A11\x22>' + _0x3676bb(0x80f) + lenguaje[idiomaActual][_0x3676bb(0x427)] + _0x3676bb(0x230) + _0x3676bb(0x68c) + _0x3676bb(0x7ad) + _0x3676bb(0x249) + _0x3676bb(0x59a) + lenguaje[idiomaActual][_0x3676bb(0x3c8)] + _0x3676bb(0x230) + _0x3676bb(0x68c) + '<div\x20class=\x22container\x22>' + _0x3676bb(0x773) + '<span\x20class=\x22names_settings\x22\x20id=\x22colorBorde\x22>\x20' + lenguaje[idiomaActual]['colorBorde'] + '</span>' + '</div>');
    const _0xf548d6 = {
        'color_paletRGB': _0x105a35 => wormxt_Obj[_0x3676bb(0x763)] = _0x105a35,
        'color_palet': _0x5f9d7b => wormxt_Obj[_0x3676bb(0x736)] = _0x5f9d7b,
        'color_palet2': _0x2f9679 => wormxt_Obj[_0x3676bb(0x4e2)] = _0x2f9679
    };
    $(_0x3676bb(0x37d))[_0x3676bb(0x2ab)](function() {
        var _0x5a5c12 = _0x3676bb;
        const _0x59417d = $(this)[_0x5a5c12(0x5b5)]('id'),
            _0x43dcce = $(this)[_0x5a5c12(0x7db)]()['replace']('#', '');
        setSectorsGame(), console[_0x5a5c12(0x435)](_0x5a5c12(0x526) + _0x59417d + ':\x20' + _0x43dcce), _0xf548d6[_0x59417d] && _0xf548d6[_0x59417d](_0x43dcce), setSectorsGame();
    }), wormxt_5dlrs_Obj[_0x3676bb(0x1e8)] = ![], $('#settings-notAbilityAll-switch')[_0x3676bb(0x6b2)]('checked', wormxt_5dlrs_Obj[_0x3676bb(0x1e8)]), $(_0x3676bb(0x57a))['on'](_0x3676bb(0x3f7), function() {
        var _0x5e2d9d = _0x3676bb;
        this[_0x5e2d9d(0x798)] ? wormxt_5dlrs_Obj['visiblePowersAll'] = !![] : wormxt_5dlrs_Obj[_0x5e2d9d(0x1e8)] = ![];
    }), wormxt_5dlrs_Obj[_0x3676bb(0x638)] = !![], $(_0x3676bb(0x621))['prop']('checked', wormxt_5dlrs_Obj[_0x3676bb(0x638)]), $(_0x3676bb(0x621))['on'](_0x3676bb(0x3f7), function() {
        var _0xe66abf = _0x3676bb;
        this[_0xe66abf(0x798)] ? wormxt_5dlrs_Obj[_0xe66abf(0x638)] = !![] : wormxt_5dlrs_Obj[_0xe66abf(0x638)] = ![];
    }), $(_0x3676bb(0x3d6))[_0x3676bb(0x6b2)](_0x3676bb(0x798), wormxt_Obj[_0x3676bb(0x6e0)]), $('#settings-laserHS-switch')['on'](_0x3676bb(0x3f7), function() {
        var _0x420f92 = _0x3676bb;
        this[_0x420f92(0x798)] ? wormxt_Obj[_0x420f92(0x6e0)] = !![] : wormxt_Obj[_0x420f92(0x6e0)] = ![];
    }), $(_0x3676bb(0x82b))[_0x3676bb(0x6b2)](_0x3676bb(0x798), wormxt_Obj[_0x3676bb(0x384)]), $(_0x3676bb(0x82b))['on']('click', function() {
        var _0x56253f = _0x3676bb;
        if (this['checked']) zw_explotWubtracttexture[_0x56253f(0x384)] = ![];
        else {}
    }), $('#settings-sectores-switch')[_0x3676bb(0x6b2)](_0x3676bb(0x798), wormxt_Obj['sectores']), $(_0x3676bb(0x5a6))['on'](_0x3676bb(0x3f7), function() {
        var _0x43d1b7 = _0x3676bb;
        this[_0x43d1b7(0x798)] ? (wormxt_Obj['sectores'] = !![], setSectorsGame()) : (wormxt_Obj[_0x43d1b7(0x408)] = ![], setSectorsGame());
    });
};
var TIME = new Date()['getTime'](),
    linkCSS = 'https://zwormextenstion.com/wormExtension/css/style2.css?v=' + TIME,
    unlockSkinsExecuted = ![],
    unlockSkinsPrivate = async function(_0x33892d) {
        var _0x4071c7 = _0x4790ef;
        if (unlockSkinsExecuted) {
            console['log']('unlockSkinsPrivate\x20ya\x20fue\x20ejecutada\x20anteriormente.');
            return;
        }
        unlockSkinsExecuted = !![];
        var _0x528b82 = _0x33892d['u']['si'][_0x4071c7(0x65e)],
            _0x46e6ce = clientsSkins[_0x4071c7(0x731)][_0x4071c7(0x3db)](_0x3f329e => _0x3f329e['client_ID'] === _0x528b82);
        if (_0x46e6ce && _0x46e6ce[_0x4071c7(0x7da)]) {
            console[_0x4071c7(0x435)](_0x46e6ce);
            const _0x5eef39 = new Date(),
                _0x17e23b = new Date(_0x46e6ce[_0x4071c7(0x7bb)]);
            if (_0x5eef39 > _0x17e23b) console[_0x4071c7(0x435)](_0x4071c7(0x36c));
            else {
                console['log'](_0x4071c7(0x257));
                let _0x2e834b = Array[_0x4071c7(0x84b)](_0x46e6ce[_0x4071c7(0x7da)]) ? _0x46e6ce['Client_VisibleSkinPrivate'] : [_0x46e6ce[_0x4071c7(0x7da)]];
                _0x2e834b[_0x4071c7(0x39f)](_0x5dd330 => {
                    var _0x35df0e = _0x4071c7;
                    let _0x1b5d0d = theoKzObjects[_0x35df0e(0x3c6)][_0x35df0e(0x3db)](_0x16e6fb => _0x16e6fb['id'] === _0x5dd330);
                    _0x1b5d0d && (_0x1b5d0d[_0x35df0e(0x4ff)] = ![]);
                }), console['log'](_0x4071c7(0x7c4) + _0x528b82 + ':', _0x2e834b);
            }
        } else console[_0x4071c7(0x435)]('No\x20se\x20encontraron\x20skins\x20privadas\x20para\x20el\x20usuario\x20' + _0x528b82 + '.');
    };
let giroActive = ![];

function toggleGiro() {
    var _0x535dc8 = _0x4790ef;
    giroActive ? (zw_girosubtracttexture['texture'] = ungirotexture, zw_girosubtracttexture['alpha'] = 0.25, console[_0x535dc8(0x435)](_0x535dc8(0x3ca)), isRunning = ![], initialInterval = 0x37, cycleCounter = 0x1, isIncrementing = !![], clearInterval(intervalID), intervalID = null) : (zw_girosubtracttexture[_0x535dc8(0x7ec)] = 0.75, console[_0x535dc8(0x435)]('Giro\x20activated'), startInterval(), isRunning = !![]), giroActive = !giroActive;
}
const showServer2 = async function(_0x466d1e) {
    var _0x1d5971 = _0x4790ef;
    updateBackground(), fetchCustomLogo(_0x466d1e['u']['si'][_0x1d5971(0x65e)]), zwormData[_0x1d5971(0x80a)] = _0x466d1e['u']['si'][_0x1d5971(0x65e)], loadStylesheet(linkCSS), loadStylesheet('https://fonts.googleapis.com/icon?family=Material+Icons'), console[_0x1d5971(0x435)](_0x466d1e, _0x466d1e['u']['si']['userId']), zw_hssound = new Audio(_0x1d5971(0x574)), zw_laughsound = new Audio(_0x1d5971(0x41f)), zw_explotWubtracttexture = new pixi[(_0x1d5971(0x380))](), (zw_explotWubtracttexture[_0x1d5971(0x273)] = explotWtexture, zw_explotWubtracttexture[_0x1d5971(0x384)] = !![]), zw_explotWubtracttexture[_0x1d5971(0x7dc)] = !![], zw_explotWubtracttexture['x'] = -0x2d, zw_explotWubtracttexture['y'] = 0xa, zw_explotWubtracttexture[_0x1d5971(0x7ec)] = 0.25;

    function _0x32992f() {
        var _0x207d56 = _0x1d5971;
        zw_explotWubtracttexture[_0x207d56(0x384)] = ![];
        var _0x538421 = 0x2710,
            _0x4f05a9 = 0x1,
            _0x462328 = 0.25,
            _0x2775e6 = 0x64,
            _0x1dbf8f = (_0x4f05a9 - _0x462328) / _0x2775e6,
            _0x3d450c = 0x0,
            _0x2b2af9 = setInterval(function() {
                var _0xce2f3e = _0x207d56,
                    _0x321176 = _0x4f05a9 - _0x1dbf8f * _0x3d450c;
                zw_explotWubtracttexture[_0xce2f3e(0x7ec)] = _0x321176, _0x3d450c++, _0x3d450c > _0x2775e6 && (clearInterval(_0x2b2af9), zw_explotWubtracttexture['alpha'] = _0x462328, zw_explotWubtracttexture[_0xce2f3e(0x384)] = !![]);
            }, _0x538421 / _0x2775e6);
    }
    zw_explotWubtracttexture['on'](_0x1d5971(0x6d8), function() {
        _0x32992f();
        const _0x10c9c0 = new Uint8Array([NaN, NaN]);
        anApp['o']['Wb'](_0x10c9c0), setTimeout(() => {
            var _0x463b78 = _0x47fe;
            let _0x5726b3 = zw_lastserver;
            $(_0x463b78(0x32a))['css']('position', 'static'), _0x5726b3 && (anApp['r']['Hd'](), anApp['sa'](_0x5726b3));
        }, 0x3e8);
    }), zw_girosubtracttexture = new pixi['Sprite'](), (zw_girosubtracttexture[_0x1d5971(0x273)] = ungirotexture, zw_girosubtracttexture[_0x1d5971(0x384)] = !![]), zw_girosubtracttexture[_0x1d5971(0x7dc)] = !![], zw_girosubtracttexture['x'] = -0xa, zw_girosubtracttexture['y'] = 0xa, zw_girosubtracttexture[_0x1d5971(0x7ec)] = 0.25, zw_girosubtracttexture['on']('mouseup', function() {
        toggleGiro();
    });
    if (zw_mobilecheck()) {
        zw_girosubtracttexture['x'] = -0x5a, zw_explotWubtracttexture['x'] = -0x87, zw_explotWubtracttexture['y'] = 0xa;
        let _0x29ca77 = new Function(_0x1d5971(0x28e))(),
            _0x333a3a = _0x29ca77[_0x1d5971(0x259)]['from'](_0x1d5971(0x2ee)),
            _0x53e980 = _0x29ca77[_0x1d5971(0x259)]['from']('https://i.imgur.com/4JZUa1u.png');
        zw_zoomplustexture = new _0x29ca77[(_0x1d5971(0x380))](), (zw_zoomplustexture[_0x1d5971(0x273)] = _0x333a3a, zw_zoomplustexture['interactive'] = !![]), zw_zoomplustexture[_0x1d5971(0x7dc)] = !![], zw_zoomplustexture['x'] = -0xa, zw_zoomplustexture['y'] = 0xa, zw_zoomplustexture[_0x1d5971(0x7ec)] = 0.25, zw_zoomplustexture['on'](_0x1d5971(0x6d8), function() {
            var _0x490bfd = _0x1d5971;
            zw_updatezoom(Math[_0x490bfd(0x363)](zw_multiplier + 0.25, 0x32));
        }), zw_zoomsubtracttexture = new _0x29ca77['Sprite'](), (zw_zoomsubtracttexture[_0x1d5971(0x273)] = _0x53e980, zw_zoomsubtracttexture['interactive'] = !![]), zw_zoomsubtracttexture['buttonMode'] = !![], zw_zoomsubtracttexture['x'] = -0x2b, zw_zoomsubtracttexture['y'] = 0xa, zw_zoomsubtracttexture[_0x1d5971(0x7ec)] = 0.25, zw_zoomsubtracttexture['on'](_0x1d5971(0x6d8), function() {
            var _0x53bddb = _0x1d5971;
            zw_updatezoom(Math[_0x53bddb(0x604)](zw_multiplier - 0.25, 0.25));
        });
    }
    $('#game-canvas')['after'](_0x1d5971(0x686));
    var _0x48cbbd = function() {
            var _0x27864e = _0x1d5971;
            $('#chatInput')[_0x27864e(0x66a)](_0x27864e(0x7a3), 'none')['val'](''), $(_0x27864e(0x2c9))[_0x27864e(0x2ca)]();
        },
        _0xf787ff = function() {
            var _0x2a0330 = _0x1d5971;
            let _0x184265 = $(_0x2a0330(0x608))[_0x2a0330(0x7db)]();
            $[_0x2a0330(0x58b)](_0x184265) !== '' && (console[_0x2a0330(0x435)]('Mensaje\x20enviado:', _0x184265), zwormData[_0x2a0330(0x800)] = _0x184265, setTimeout(() => {
                var _0x2ff1a5 = _0x2a0330;
                zwormData[_0x2ff1a5(0x800)] = '';
            }, 0x5dc));
        };
    $(_0x1d5971(0x608))['on']('keydown', function(_0x481f7e) {
        var _0x4ad4e9 = _0x1d5971;
        if (_0x481f7e[_0x4ad4e9(0x7b1)] === _0x4ad4e9(0x60d)) _0xf787ff(), _0x48cbbd();
        else _0x481f7e[_0x4ad4e9(0x7b1)] === _0x4ad4e9(0x3c3) && _0x48cbbd();
    }), $(_0x1d5971(0x437))[_0x1d5971(0x5f0)]('<i\x20class=\x22material-icons\x22>play_circle_filled</i><span>PLAY</span>'), $(_0x1d5971(0x1fd))['html'](_0x1d5971(0x4ad)), $(_0x1d5971(0x787))[_0x1d5971(0x5f0)]('<i\x20class=\x22material-icons\x22>leaderboard</i>'), $(_0x1d5971(0x4e8))[_0x1d5971(0x5f0)]('<i\x20class=\x22material-icons\x22>store</i>'), $(_0x1d5971(0x5fd))['html'](_0x1d5971(0x317)), $('#user-icon')['on']('click', function() {
        var _0x37c9e0 = _0x1d5971;
        $('#user-icon')['addClass'](_0x37c9e0(0x52b)), $(_0x37c9e0(0x420))[_0x37c9e0(0x29c)]('active'), $(_0x37c9e0(0x7ac))[_0x37c9e0(0x815)](), $('#hotkeys-section')[_0x37c9e0(0x26a)]();
    }), $(_0x1d5971(0x551))['replaceWith'](_0x1d5971(0x480)), $(_0x1d5971(0x5fb))[_0x1d5971(0x517)](_0x1d5971(0x333)), $(_0x1d5971(0x5fb))[_0x1d5971(0x517)]('<span\x20id=\x22ping\x22></span>'), $(_0x1d5971(0x2f0))[_0x1d5971(0x3dd)](_0x1d5971(0x59f)), $('#buy-premium')['on'](_0x1d5971(0x3f7), function() {
        var _0x1fdd15 = _0x1d5971;
        window['open'](_0x1fdd15(0x5d6), '_blank');
    }), $('#social-buttons')[_0x1d5971(0x3dd)](''), $(_0x1d5971(0x7b2))[_0x1d5971(0x563)](), $('#mm-skin-next\x20svg')[_0x1d5971(0x563)](), $(_0x1d5971(0x75a))['attr'](_0x1d5971(0x68e), _0x1d5971(0x728)), $(_0x1d5971(0x47c))[_0x1d5971(0x5b5)](_0x1d5971(0x68e), _0x1d5971(0x728)), $(_0x1d5971(0x23e))[_0x1d5971(0x563)](), $('#mm-coins-box\x20.mm-coins-img')['remove'](), $(_0x1d5971(0x4f1))[_0x1d5971(0x3f7)](function() {
        var _0x5de61f = _0x1d5971;
        $(_0x5de61f(0x32a))[_0x5de61f(0x66a)](_0x5de61f(0x797), _0x5de61f(0x7e1));
    }), $(_0x1d5971(0x5fd))[_0x1d5971(0x3f7)](function() {
        var _0x4486ef = _0x1d5971;
        $(_0x4486ef(0x1ee))[_0x4486ef(0x66a)]({
            'display': _0x4486ef(0x63e),
            'opacity': '1'
        });
    }), $(_0x1d5971(0x6c2))[_0x1d5971(0x3f7)](function() {
        var _0x215423 = _0x1d5971;
        $(_0x215423(0x1ee))[_0x215423(0x66a)](_0x215423(0x489), '0');
    }), $(_0x1d5971(0x5ea))['click'](function() {
        var _0x29f097 = _0x1d5971;
        $(_0x29f097(0x1f5))[_0x29f097(0x4c6)](_0x29f097(0x313)), setTimeout(function() {
            var _0x3958b3 = _0x29f097;
            $(_0x3958b3(0x1f5))[_0x3958b3(0x29c)]('cambio-skin2');
        }, 0x15e);
    }), $('#mm-skin-prev')[_0x1d5971(0x3f7)](function() {
        var _0x153641 = _0x1d5971;
        $(_0x153641(0x1f5))[_0x153641(0x4c6)]('cambio-skin2'), setTimeout(function() {
            var _0xecb46f = _0x153641;
            $(_0xecb46f(0x1f5))[_0xecb46f(0x29c)](_0xecb46f(0x313));
        }, 0x15e);
    });
    const _0x39bd95 = [_0x1d5971(0x357), _0x1d5971(0x1f5), _0x1d5971(0x1fd), _0x1d5971(0x787), '#mm-store', _0x1d5971(0x44f)];
    $(_0x39bd95[_0x1d5971(0x49d)](',\x20'))[_0x1d5971(0x3f7)](function() {
        var _0x570cce = _0x1d5971;
        $(_0x570cce(0x1ee))[_0x570cce(0x66a)]({
            'display': 'none',
            'opacity': '0'
        });
    });
    const _0x3ca721 = ['#mm-action-play', _0x1d5971(0x1fd), _0x1d5971(0x787), _0x1d5971(0x4e8), _0x1d5971(0x5fd)];
    _0x3ca721[_0x1d5971(0x39f)](function(_0x4cbb6d) {
        $(_0x4cbb6d)['hover'](function() {
            var _0x3c81d5 = _0x47fe;
            $(this)[_0x3c81d5(0x66a)]({
                'box-shadow': _0x3c81d5(0x262)
            });
        }, function() {
            var _0x34a81f = _0x47fe;
            $(this)[_0x34a81f(0x66a)]({
                'box-shadow': _0x34a81f(0x605)
            });
        });
    }), $('.mm-merchant-cont')[_0x1d5971(0x3dd)](''), $('#fullscreen')[_0x1d5971(0x327)](_0x1d5971(0x4d5)), $(_0x1d5971(0x379))[_0x1d5971(0x327)](_0x1d5971(0x710)), $(_0x1d5971(0x7d2))[_0x1d5971(0x332)](), $(_0x1d5971(0x7d2))[_0x1d5971(0x517)](_0x1d5971(0x6d4)), $(_0x1d5971(0x61d))[_0x1d5971(0x3f7)](function() {
        var _0x35886b = _0x1d5971;
        let _0x2b034e = $(_0x35886b(0x694))[_0x35886b(0x7db)](),
            _0x20c563 = $(_0x35886b(0x713))[_0x35886b(0x7db)]();
        if (!_0x2b034e || _0x20c563 === '') {
            alert(_0x35886b(0x7f5));
            return;
        }
        zw_lastserver = _0x35886b(0x834) + _0x2b034e + ':' + _0x20c563 + _0x35886b(0x52d), anApp['r']['Hd'](), anApp['sa'](zw_lastserver), zw_servertext[_0x35886b(0x32d)] = '' + zw_lastserver[_0x35886b(0x4ae)](_0x35886b(0x834), '')[_0x35886b(0x4ae)](_0x35886b(0x50a), '')[_0x35886b(0x4ae)]('/wormy', '');
    });
    var _0x1e9ea5 = {
            'sao': 'br',
            'vin': _0x1d5971(0x36e),
            'dal': 'Dallas\x20-\x20EEUU',
            'fra': 'Frankfurt\x20-\x20Alemania',
            'sgp': 'sg',
            'tok': 'jp',
            'syd': 'au',
            'lon': 'gb',
            'tor': 'ca',
            'mex': 'mx',
            'sin': 'sg',
            'hil': _0x1d5971(0x81a),
            'gra': 'de'
        },
        _0xf0bfa3 = [{
            'code': 'br',
            'name': _0x1d5971(0x3f0)
        }, {
            'code': 'mx',
            'name': _0x1d5971(0x450)
        }, {
            'code': 'us',
            'name': _0x1d5971(0x6ea)
        }, {
            'code': 'ca',
            'name': _0x1d5971(0x43c)
        }, {
            'code': 'de',
            'name': _0x1d5971(0x7fd)
        }, {
            'code': 'fr',
            'name': _0x1d5971(0x757)
        }, {
            'code': 'sg',
            'name': _0x1d5971(0x24c)
        }, {
            'code': 'jp',
            'name': _0x1d5971(0x291)
        }, {
            'code': 'au',
            'name': _0x1d5971(0x41c)
        }, {
            'code': 'gb',
            'name': _0x1d5971(0x44d)
        }],
        _0x72ce50 = $(_0x1d5971(0x6c8)),
        _0x951005 = $('<div\x20class=\x22servers-container\x22></div>');
    _0xf0bfa3[_0x1d5971(0x39f)](function(_0x2e3704, _0x43c376) {
        var _0xe8d6b0 = _0x1d5971,
            _0x33ec10 = $(_0xe8d6b0(0x66f) + (_0x43c376 === 0x0 ? 'ui-tab-active' : '') + _0xe8d6b0(0x38f) + _0x2e3704[_0xe8d6b0(0x507)] + _0xe8d6b0(0x7d9) + _0x2e3704[_0xe8d6b0(0x507)] + _0xe8d6b0(0x212));
        _0x72ce50[_0xe8d6b0(0x517)](_0x33ec10);
        var _0x3feb88 = $(_0xe8d6b0(0x334) + _0x2e3704[_0xe8d6b0(0x507)] + _0xe8d6b0(0x4e5) + (_0x43c376 === 0x0 ? 'block' : _0xe8d6b0(0x541)) + _0xe8d6b0(0x55e));
        _0x951005[_0xe8d6b0(0x517)](_0x3feb88);
    }), $(_0x1d5971(0x7d2))['append'](_0x72ce50, _0x951005), $('.ui-tabs-tab')[_0x1d5971(0x3f7)](function() {
        var _0x23fb81 = _0x1d5971,
            _0x4f57f7 = $(this)[_0x23fb81(0x85c)]('country');
        $(_0x23fb81(0x81b))[_0x23fb81(0x29c)]('ui-tab-active'), $(this)['addClass']('ui-tab-active'), $(_0x23fb81(0x6c3))[_0x23fb81(0x26a)](), $(_0x23fb81(0x42e) + _0x4f57f7)[_0x23fb81(0x7e5)](0xc8);
    }), serverData['forEach'](function(_0xe1b244) {
        var _0x32a584 = _0x1d5971,
            _0x1161f5 = _0xe1b244['dataRoom'][_0x32a584(0x33e)](/[a-zA-Z]+/g)[_0x32a584(0x49d)]('');
        _0x1161f5 === 'ae' && (_0x1161f5 = 'gb');
        var _0x5b3092 = _0xe1b244[_0x32a584(0x200)][_0x32a584(0x33e)](/wss:\/\/([a-z]+)-/i),
            _0x527e25 = _0x5b3092 ? _0x5b3092[0x1] : null,
            _0x32cf07 = _0x1e9ea5[_0x527e25] ? _0x1e9ea5[_0x527e25][_0x32a584(0x683)]() : _0x32a584(0x65f);
        if (!_0xf0bfa3[_0x32a584(0x370)](_0x42b067 => _0x42b067[_0x32a584(0x507)] === _0x1161f5)) return;
        var _0x5afe99 = _0xe1b244[_0x32a584(0x772)][_0x32a584(0x58b)]()[_0x32a584(0x554)](),
            _0x303b78 = top1Servers[_0x5afe99] || {
                'Score': _0x32a584(0x398),
                'StatusColor': _0x32a584(0x4ec)
            },
            _0x203bd7 = _0xe1b244[_0x32a584(0x200)][_0x32a584(0x33e)](/wss:\/\/([^:/]+)/)[0x1],
            _0x37bda8 = $(_0x32a584(0x34d) + _0xe1b244[_0x32a584(0x200)] + _0x32a584(0x5a8) + _0xe1b244[_0x32a584(0x772)] + _0x32a584(0x2fb) + _0x303b78[_0x32a584(0x442)] + _0x32a584(0x47d) + _0xe1b244[_0x32a584(0x67e)] + _0x32a584(0x253) + _0x32cf07 + _0x32a584(0x78a) + _0x303b78['Score'] + _0x32a584(0x311) + _0xe1b244['imgSrc'] + _0x32a584(0x536));
        $(_0x32a584(0x42e) + _0x1161f5 + '\x20tbody')['append'](_0x37bda8);
    }), $(document)['on'](_0x1d5971(0x3f7), _0x1d5971(0x7bd), function() {
        var _0x4cf22c = _0x1d5971;
        let _0x228b88 = $(this)['attr'](_0x4cf22c(0x639)),
            _0x42ee47 = $(this)[_0x4cf22c(0x3db)](_0x4cf22c(0x375))[_0x4cf22c(0x32d)](),
            _0x27c1a1 = $(this)['attr'](_0x4cf22c(0x53c));
        _0x42ee47 && _0x27c1a1 && (_0x466d1e['r']['Hd'](), _0x466d1e['sa'](_0x27c1a1), zw_servertext['text'] = '' + _0x228b88, setTimeout(() => {
            var _0xa37f7b = _0x4cf22c;
            zw_servertext[_0xa37f7b(0x32d)] = '' + _0x228b88;
        }, 0x7d0), console[_0x4cf22c(0x435)](_0x4cf22c(0x1e1), _0x27c1a1));
    }), $(document)['on']('click', _0x1d5971(0x69e), function(_0xa62ed2) {
        var _0x2f4375 = _0x1d5971;
        _0xa62ed2[_0x2f4375(0x778)]();
        const _0x441c7d = $(this)[_0x2f4375(0x670)](_0x2f4375(0x7bd)),
            _0x3d6fdc = _0x441c7d[_0x2f4375(0x5b5)]('data-wss'),
            _0x548377 = _0x3d6fdc[_0x2f4375(0x33e)](/wss:\/\/[^:]+:(\d+)\//);
        if (!_0x548377) {
            alert(_0x2f4375(0x641));
            return;
        }
        const _0xd2301b = _0x548377[0x1];
        _0x57e235(_0x441c7d, _0xd2301b);
    });

    function _0x57e235(_0x142513, _0x4ac4c9) {
        var _0x553883 = _0x1d5971;
        const _0x191595 = _0x142513['find']('.server-name')['text'](),
            _0x58adbb = _0x142513[_0x553883(0x5b5)](_0x553883(0x53c))[_0x553883(0x33e)](/wss:\/\/([^:/]+)/)[0x1];
        !$(_0x553883(0x3d9))[_0x553883(0x30a)] && ($(_0x553883(0x7f3))[_0x553883(0x517)](_0x553883(0x26d)), $(document)[_0x553883(0x822)]('click', '#modalCloseBtn')['on'](_0x553883(0x3f7), '#modalCloseBtn', function() {
            var _0x4a7543 = _0x553883;
            $(_0x4a7543(0x3d9))[_0x4a7543(0x6e2)](0x12c);
        }), $(document)[_0x553883(0x822)]('click', _0x553883(0x6f2))['on'](_0x553883(0x3f7), '.connect-button', function() {
            var _0x549fe7 = _0x553883;
            const _0x1e6d00 = $(this)['data'](_0x549fe7(0x484));
            anApp['sa'](_0x1e6d00), console[_0x549fe7(0x435)]('Conectando\x20a:', _0x1e6d00);
        })), $(_0x553883(0x4ba))[_0x553883(0x32d)](_0x191595), $(_0x553883(0x3d9))[_0x553883(0x7e5)](0xc8), $('#resultadoPuertas')['html'](_0x553883(0x5f3)), testPortOnServers(_0x4ac4c9);
    }
    $(_0x1d5971(0x75a))['on']('click', function() {
        var _0x3e011e = _0x1d5971,
            _0x585c96 = prompt('Extension\x20\x27W\x27\x20or\x20\x27T\x27:');
        if (_0x585c96 === 'W') $(_0x3e011e(0x75a))[_0x3e011e(0x32d)](_0x3e011e(0x2d1)), setTimeout(() => {
            var _0x2f98ee = _0x3e011e;
            $(_0x2f98ee(0x75a))['text']('Loading..'), setTimeout(() => {
                var _0x464e88 = _0x2f98ee;
                $(_0x464e88(0x75a))['text'](_0x464e88(0x571)), setTimeout(() => {
                    var _0xf20ccb = _0x464e88;
                    $(_0xf20ccb(0x75a))[_0xf20ccb(0x32d)]('WormWorld');
                }, 0x7d0);
            }, 0x5dc);
        }, 0x3e8), $('.servers-peru')['html'](''), $(_0x3e011e(0x5e1))[_0x3e011e(0x5f0)](''), $('.servers-eeuu')[_0x3e011e(0x5f0)](''), $('.servers-canada')['html'](''), $('.servers-germania')['html'](''), $('.servers-francia')[_0x3e011e(0x5f0)](''), $(_0x3e011e(0x609))[_0x3e011e(0x5f0)](''), $(_0x3e011e(0x7ea))[_0x3e011e(0x5f0)](''), $('.servers-australia')[_0x3e011e(0x5f0)](''), $(_0x3e011e(0x2db))[_0x3e011e(0x5f0)](''), setTimeout(() => {
            var _0x120e6c = _0x3e011e;
            for (a = 0x0; a < serverData[_0x120e6c(0x30a)]; a++) {
                var _0x2a6012 = serverData[a]['dataCon'],
                    _0x224f15 = serverData[a][_0x120e6c(0x772)],
                    _0x22e382 = serverData[a]['serverName'],
                    _0x1c45ab = 'https://xd.com',
                    _0x1a393b = serverData[a]['imgSrc'];
                let _0x574472 = _0x120e6c(0x55c) + _0x1a393b + _0x120e6c(0x40c),
                    _0x119a39 = _0x224f15[_0x120e6c(0x33e)](/[a-zA-Z]+/g)[_0x120e6c(0x49d)](''),
                    _0x8c2b19 = document[_0x120e6c(0x76b)]('p');
                _0x8c2b19['value'] = _0x2a6012, _0x8c2b19[_0x120e6c(0x359)] = _0x22e382;
                let _0x9febc5 = document['createElement']('div');
                _0x9febc5[_0x120e6c(0x424)](_0x120e6c(0x55f), _0x120e6c(0x857));
                if (_0x119a39 == 'br') $(_0x120e6c(0x60a))[_0x120e6c(0x517)](_0x9febc5), $(_0x9febc5)['append'](_0x8c2b19), $(_0x8c2b19)[_0x120e6c(0x517)](_0x574472);
                else {
                    if (_0x119a39 == 'mx') $(_0x120e6c(0x5e1))[_0x120e6c(0x517)](_0x9febc5), $(_0x9febc5)['append'](_0x8c2b19), $(_0x8c2b19)[_0x120e6c(0x517)](_0x574472);
                    else {
                        if (_0x119a39 == 'us') $(_0x120e6c(0x613))[_0x120e6c(0x517)](_0x9febc5), $(_0x9febc5)['append'](_0x8c2b19), $(_0x8c2b19)[_0x120e6c(0x517)](_0x574472);
                        else {
                            if (_0x119a39 == 'ca') $(_0x120e6c(0x7d6))['append'](_0x9febc5), $(_0x9febc5)[_0x120e6c(0x517)](_0x8c2b19), $(_0x8c2b19)[_0x120e6c(0x517)](_0x574472);
                            else {
                                if (_0x119a39 == 'de') $(_0x120e6c(0x5ae))[_0x120e6c(0x517)](_0x9febc5), $(_0x9febc5)[_0x120e6c(0x517)](_0x8c2b19), $(_0x8c2b19)[_0x120e6c(0x517)](_0x574472);
                                else {
                                    if (_0x119a39 == 'fr') $(_0x120e6c(0x770))[_0x120e6c(0x517)](_0x9febc5), $(_0x9febc5)['append'](_0x8c2b19), $(_0x8c2b19)[_0x120e6c(0x517)](_0x574472);
                                    else {
                                        if (_0x119a39 == 'sg') $('.servers-singapur')[_0x120e6c(0x517)](_0x9febc5), $(_0x9febc5)['append'](_0x8c2b19), $(_0x8c2b19)[_0x120e6c(0x517)](_0x574472);
                                        else {
                                            if (_0x119a39 == 'jp') $(_0x120e6c(0x7ea))[_0x120e6c(0x517)](_0x9febc5), $(_0x9febc5)[_0x120e6c(0x517)](_0x8c2b19), $(_0x8c2b19)['append'](_0x574472);
                                            else {
                                                if (_0x119a39 == 'au') $('.servers-australia')[_0x120e6c(0x517)](_0x9febc5), $(_0x9febc5)[_0x120e6c(0x517)](_0x8c2b19), $(_0x8c2b19)[_0x120e6c(0x517)](_0x574472);
                                                else _0x119a39 == 'ae' && ($(_0x120e6c(0x2db))[_0x120e6c(0x517)](_0x9febc5), $(_0x9febc5)[_0x120e6c(0x517)](_0x8c2b19), $(_0x8c2b19)['append'](_0x574472));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                $(_0x8c2b19)[_0x120e6c(0x5b5)]('class', 'selectSala'), $(_0x8c2b19)[_0x120e6c(0x5b5)](_0x120e6c(0x639), _0x224f15), $(_0x8c2b19)[_0x120e6c(0x5b5)](_0x120e6c(0x412), _0x2a6012), $(_0x8c2b19)[_0x120e6c(0x3f7)](function() {
                    var _0x2082db = _0x120e6c;
                    $(_0x2082db(0x32a))[_0x2082db(0x66a)](_0x2082db(0x797), _0x2082db(0x7e1));
                    let _0x5ecc0e = $(this)[_0x2082db(0x5b5)](_0x2082db(0x412));
                    console[_0x2082db(0x435)](_0x5ecc0e), _0x5ecc0e && (_0x466d1e['r']['Hd'](), _0x466d1e['sa'](_0x5ecc0e), zw_servertext[_0x2082db(0x32d)] = $(this)[_0x2082db(0x32d)](), console[_0x2082db(0x435)]($(this)[_0x2082db(0x32d)]()));
                });
            }
        }, 0xbb8);
        else _0x585c96 === 'T' ? ($(_0x3e011e(0x75a))['text'](_0x3e011e(0x2d1)), setTimeout(() => {
            var _0x46c8f9 = _0x3e011e;
            $(_0x46c8f9(0x75a))[_0x46c8f9(0x32d)]('Loading..'), setTimeout(() => {
                var _0x5eaea0 = _0x46c8f9;
                $(_0x5eaea0(0x75a))[_0x5eaea0(0x32d)]('Loading...'), setTimeout(() => {
                    var _0x40986e = _0x5eaea0;
                    $(_0x40986e(0x75a))[_0x40986e(0x32d)]('Tim\x20Map');
                }, 0x7d0);
            }, 0x5dc);
        }, 0x3e8), $(_0x3e011e(0x60a))['html'](''), $(_0x3e011e(0x5e1))[_0x3e011e(0x5f0)](''), $(_0x3e011e(0x613))[_0x3e011e(0x5f0)](''), $(_0x3e011e(0x7d6))[_0x3e011e(0x5f0)](''), $(_0x3e011e(0x5ae))[_0x3e011e(0x5f0)](''), $('.servers-francia')[_0x3e011e(0x5f0)](''), $(_0x3e011e(0x609))[_0x3e011e(0x5f0)](''), $('.servers-japon')[_0x3e011e(0x5f0)](''), $(_0x3e011e(0x77a))[_0x3e011e(0x5f0)](''), $(_0x3e011e(0x2db))[_0x3e011e(0x5f0)](''), setTimeout(() => {
            var _0x185870 = _0x3e011e;
            for (a = 0x0; a < serverDataTimMap[_0x185870(0x30a)]; a++) {
                var _0x3f8e7c = serverDataTimMap[a][_0x185870(0x200)],
                    _0x18a5b8 = serverDataTimMap[a][_0x185870(0x772)],
                    _0x5fbd9e = serverDataTimMap[a]['serverName'],
                    _0x5bdead = serverDataTimMap[a][_0x185870(0x55b)],
                    _0x1dae04 = serverDataTimMap[a]['secondHref'];
                let _0xb4df84 = _0x18a5b8['match'](/[a-zA-Z]+/g)[_0x185870(0x49d)](''),
                    _0x112f74 = document[_0x185870(0x76b)]('p');
                _0x112f74[_0x185870(0x639)] = _0x3f8e7c;
                let _0x1780fd = '<a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + _0x5bdead + '\x22\x20\x20\x20\x20style=\x22margin-left:\x20100px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>',
                    _0x6c4f5d = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
                _0x6c4f5d[_0x185870(0x599)](_0x1780fd) ? _0x1780fd = _0x1780fd[_0x185870(0x4ae)](_0x6c4f5d, '') : _0x1780fd;
                let _0x350c5d = '<span\x20style=\x22background-color:\x20#4dff00;width:\x2012px;height:\x2012px;border-radius:\x2012px;margin-top:\x204px;float:\x20right;\x22></span>',
                    _0x3d2254 = /<span style=\\"(.*?)"><\\\/span>/;
                _0x3d2254[_0x185870(0x599)](_0x5fbd9e) ? _0x5fbd9e = _0x5fbd9e[_0x185870(0x4ae)](_0x3d2254, _0x350c5d) : _0x5fbd9e;
                _0x112f74[_0x185870(0x359)] = _0x5fbd9e;
                let _0x5a9def = document[_0x185870(0x76b)]('div');
                _0x5a9def[_0x185870(0x424)](_0x185870(0x55f), _0x185870(0x857));
                if (_0xb4df84 == 'BR') $(_0x185870(0x60a))['append'](_0x5a9def), $(_0x5a9def)[_0x185870(0x517)](_0x112f74), $(_0x112f74)[_0x185870(0x517)](_0x1780fd);
                else {
                    if (_0xb4df84 == 'MX') $('.servers-mexico')[_0x185870(0x517)](_0x5a9def), $(_0x5a9def)[_0x185870(0x517)](_0x112f74), $(_0x112f74)[_0x185870(0x517)](_0x1780fd);
                    else {
                        if (_0xb4df84 == 'US') $(_0x185870(0x613))[_0x185870(0x517)](_0x5a9def), $(_0x5a9def)[_0x185870(0x517)](_0x112f74), $(_0x112f74)['append'](_0x1780fd);
                        else {
                            if (_0xb4df84 == 'CA') $(_0x185870(0x7d6))[_0x185870(0x517)](_0x5a9def), $(_0x5a9def)[_0x185870(0x517)](_0x112f74), $(_0x112f74)[_0x185870(0x517)](_0x1780fd);
                            else {
                                if (_0xb4df84 == 'DE') $(_0x185870(0x5ae))[_0x185870(0x517)](_0x5a9def), $(_0x5a9def)[_0x185870(0x517)](_0x112f74), $(_0x112f74)[_0x185870(0x517)](_0x1780fd);
                                else {
                                    if (_0xb4df84 == 'FR') $(_0x185870(0x770))[_0x185870(0x517)](_0x5a9def), $(_0x5a9def)[_0x185870(0x517)](_0x112f74), $(_0x112f74)['append'](_0x1780fd);
                                    else {
                                        if (_0xb4df84 == 'SG') $(_0x185870(0x609))[_0x185870(0x517)](_0x5a9def), $(_0x5a9def)['append'](_0x112f74), $(_0x112f74)[_0x185870(0x517)](_0x1780fd);
                                        else {
                                            if (_0xb4df84 == 'JP') $(_0x185870(0x7ea))['append'](_0x5a9def), $(_0x5a9def)[_0x185870(0x517)](_0x112f74), $(_0x112f74)[_0x185870(0x517)](_0x1780fd);
                                            else {
                                                if (_0xb4df84 == 'AU') $(_0x185870(0x77a))['append'](_0x5a9def), $(_0x5a9def)[_0x185870(0x517)](_0x112f74), $(_0x112f74)[_0x185870(0x517)](_0x1780fd);
                                                else _0xb4df84 == 'AE' && ($(_0x185870(0x2db))[_0x185870(0x517)](_0x5a9def), $(_0x5a9def)[_0x185870(0x517)](_0x112f74), $(_0x112f74)[_0x185870(0x517)](_0x1780fd));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                $(_0x112f74)['attr']('class', _0x185870(0x261)), $(_0x112f74)[_0x185870(0x5b5)](_0x185870(0x639), _0x18a5b8), $(_0x112f74)[_0x185870(0x5b5)]('data-con', _0x3f8e7c), $(_0x112f74)[_0x185870(0x3f7)](function() {
                    var _0x9c5157 = _0x185870;
                    $(_0x9c5157(0x32a))[_0x9c5157(0x66a)](_0x9c5157(0x797), _0x9c5157(0x7e1));
                    let _0x2c74d4 = $(this)[_0x9c5157(0x5b5)](_0x9c5157(0x412)),
                        _0x59b012 = $(this)[_0x9c5157(0x5b5)](_0x9c5157(0x639));
                    console[_0x9c5157(0x435)](_0x59b012), _0x2c74d4 && (_0x466d1e['r']['Hd'](), _0x466d1e['sa'](_0x2c74d4));
                });
            }
        }, 0xbb8)) : alert(_0x3e011e(0x7b4));
    });
}, ctx = {
    'fontStyle': {
        'blanco': new PIXI['TextStyle']({
            'align': 'center',
            'fill': _0x4790ef(0x727),
            'fontSize': 0xc,
            'lineJoin': _0x4790ef(0x223),
            'stroke': _0x4790ef(0x727),
            'strokeThickness': 0x1,
            'whiteSpace': _0x4790ef(0x31d),
            'wordWrap': !![]
        })
    }
};
timeFontColors = ['#FFD500', _0x4790ef(0x805), '#00B2ED', '#FF4544', '#0094D7', _0x4790ef(0x837), '#ff0999'], timeFontColors2 = [_0x4790ef(0x4bd), _0x4790ef(0x555), _0x4790ef(0x6f0), _0x4790ef(0x679), _0x4790ef(0x4d8), '#CCCF81', _0x4790ef(0x460)];
for (let index = 0x0; index < timeFontColors[_0x4790ef(0x30a)]; index++) {
    let color = timeFontColors[index];
    ctx[_0x4790ef(0x4a5)][_0x4790ef(0x68d) + index] = new PIXI['TextStyle']({
        'align': 'center',
        'fill': color,
        'fontSize': 0x19,
        'lineJoin': _0x4790ef(0x223),
        'whiteSpace': _0x4790ef(0x31d),
        'wordWrap': !![],
        'dropShadow': !![],
        'dropShadowBlur': 0x6,
        'fontWeight': 'bold'
    });
}
ctx[_0x4790ef(0x4f6)] = {};
const portionTimes = [0x28, 0x28, 0x28, 0x78, 0x28, 0x14, 0x28];
for (let i = 0x0; i < portionTimes[_0x4790ef(0x30a)]; i++) {
    let name = _0x4790ef(0x258) + i;
    ctx['ptc'][name] = new PIXI[(_0x4790ef(0x636))](portionTimes[i], ctx[_0x4790ef(0x4a5)][_0x4790ef(0x68d) + i]), ctx['ptc'][name]['y'] = 0x3d;
}
ctx[_0x4790ef(0x38d)] = PIXI[_0x4790ef(0x259)][_0x4790ef(0x790)](_0x4790ef(0x6e4)), ctx[_0x4790ef(0x44c)] = new PIXI[(_0x4790ef(0x380))](ctx['imgTest_desactived']), ctx[_0x4790ef(0x44c)]['anchor'][_0x4790ef(0x3ce)](0.5), ctx['containerImgTest']['x'] = window[_0x4790ef(0x20b)] / 0x2, ctx['containerImgTest']['y'] = window[_0x4790ef(0x7b8)] / 0x2, ctx[_0x4790ef(0x44c)][_0x4790ef(0x7ec)] = 0.3, ctx[_0x4790ef(0x454)] = new PIXI[(_0x4790ef(0x4f9))]();
const createCircle = function() {
    var _0x2dd52a = _0x4790ef;
    const _0xf75677 = 0xff0000;
    if (!window[_0x2dd52a(0x7cd)] || typeof window[_0x2dd52a(0x7cd)][_0x2dd52a(0x758)] === 'undefined' || typeof window[_0x2dd52a(0x7cd)]['playerY'] === _0x2dd52a(0x337)) {
        console[_0x2dd52a(0x769)]('Error:\x20window.coords\x20no\x20estï¿½\x20definido\x20correctamente\x20o\x20no\x20contiene\x20playerX\x20y\x20playerY.');
        return;
    }
    let _0x5d69aa = _0x2dd52a(0x600);
    !ctx[_0x5d69aa] && (ctx[_0x5d69aa] = new PIXI[(_0x2dd52a(0x85b))](), ctx[_0x5d69aa]['zIndex'] = 0x2, ctx[_0x5d69aa][_0x2dd52a(0x7ec)] = 0.9, ctx[_0x5d69aa][_0x2dd52a(0x514)](_0xf75677), ctx[_0x5d69aa][_0x2dd52a(0x2e5)](0x0, 0x0, 0.06 * 0x28), ctx[_0x5d69aa][_0x2dd52a(0x64c)](), ctx[_0x5d69aa]['lineStyle'](0x1, _0x2dd52a(0x671)), ctx[_0x5d69aa][_0x2dd52a(0x2e5)](0x0, 0x0, 0.06 * 0x28), ctx[_0x5d69aa][_0x2dd52a(0x64c)]()), ctx[_0x5d69aa]['x'] = window[_0x2dd52a(0x7cd)]['playerX'], ctx[_0x5d69aa]['y'] = window[_0x2dd52a(0x7cd)][_0x2dd52a(0x5b1)], ctx['pointsContainer'] ? ctx[_0x2dd52a(0x454)][_0x2dd52a(0x6f9)](ctx[_0x5d69aa]) : console[_0x2dd52a(0x769)]('Error:\x20ctx.pointsContainer\x20no\x20estï¿½\x20definido.');
};
ctx[_0x4790ef(0x7f6)] = new PIXI[(_0x4790ef(0x4f9))]();
var createServerMessage = function(_0x316ba2, _0x4c96b2) {
        var _0x3d7466 = _0x4790ef;
        if (_0x4c96b2['trim']() === '') return;
        toastr[_0x3d7466(0x777)] = {
            'closeButton': ![],
            'debug': ![],
            'newestOnTop': !![],
            'progressBar': !![],
            'positionClass': _0x3d7466(0x2aa),
            'preventDuplicates': !![],
            'onclick': null,
            'showDuration': _0x3d7466(0x49e),
            'hideDuration': '1000',
            'timeOut': _0x3d7466(0x73e),
            'extendedTimeOut': _0x3d7466(0x3b2),
            'showEasing': _0x3d7466(0x5e6),
            'hideEasing': _0x3d7466(0x590),
            'showMethod': _0x3d7466(0x7e5),
            'hideMethod': _0x3d7466(0x6e2),
            'toastClass': _0x3d7466(0x267)
        }, toastr['success'](_0x4c96b2, _0x316ba2, {
            'iconClass': _0x3d7466(0x684)
        });
    },
    createTeamMessage = function(_0x297775, _0x3466d4, _0x5058a8) {
        var _0x4a5602 = _0x4790ef;
        if (_0x5058a8[_0x4a5602(0x58b)]() === '') return;
        gameState[_0x4a5602(0x479)][_0x4a5602(0x39f)]((_0x495664, _0x3610ee) => {
            var _0x5c3118 = _0x4a5602;
            if (_0x495664[_0x5c3118(0x6e5)] === _0x297775 && _0x495664[_0x5c3118(0x5b6)] !== _0x3466d4) {
                let _0xf4a506 = _0x495664[_0x5c3118(0x5b6)][_0x5c3118(0x30a)] > 0xc ? _0x495664[_0x5c3118(0x5b6)][_0x5c3118(0x225)](0x0, 0xc) : _0x495664[_0x5c3118(0x5b6)];
                toastr[_0x5c3118(0x777)] = {
                    'closeButton': ![],
                    'debug': ![],
                    'newestOnTop': !![],
                    'progressBar': !![],
                    'positionClass': _0x5c3118(0x2aa),
                    'preventDuplicates': !![],
                    'onclick': null,
                    'showDuration': _0x5c3118(0x49e),
                    'hideDuration': '1000',
                    'timeOut': _0x5c3118(0x73e),
                    'extendedTimeOut': '1000',
                    'showEasing': 'swing',
                    'hideEasing': 'linear',
                    'showMethod': _0x5c3118(0x7e5),
                    'hideMethod': _0x5c3118(0x6e2)
                }, toastr[_0x5c3118(0x4cb)]('' + _0x5058a8, '' + _0x3466d4, {
                    'iconClass': _0x5c3118(0x684)
                }), console[_0x5c3118(0x435)](_0x5c3118(0x41a) + _0x3466d4 + _0x5c3118(0x49a) + _0xf4a506 + '\x20(' + _0x3610ee + _0x5c3118(0x44e) + _0x297775);
            }
        });
    },
    createTeamUbication = function(_0x23e2b7, _0x136e03) {
        var _0x328061 = _0x4790ef;
        updateTeamTable(gameState, _0x23e2b7), gameState[_0x328061(0x479)][_0x328061(0x39f)]((_0xf9c48e, _0x173782) => {
            var _0x19a672 = _0x328061;
            if (_0xf9c48e[_0x19a672(0x6e5)] === _0x23e2b7) {
                let _0x10bd0f = _0xf9c48e['teamColor'] || _0x136e03,
                    _0x86d6ae = _0xf9c48e[_0x19a672(0x5b6)]['replace'](/\u3164/g, '')['replace'](/ZW_\d+$/, '')[_0x19a672(0x58b)]();
                if (!ctx[_0x173782]) {
                    ctx[_0x173782] = new PIXI[(_0x19a672(0x85b))](), ctx[_0x173782]['zIndex'] = 0x2, ctx[_0x173782][_0x19a672(0x7ec)] = 0.9, ctx[_0x19a672(0x7f6)]['addChild'](ctx[_0x173782]);
                    let _0x4cbe82 = new PIXI['Text'](_0x86d6ae, {
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0xe,
                        'fill': _0x10bd0f,
                        'stroke': 0x0,
                        'strokeThickness': 0x2
                    });
                    _0x4cbe82['anchor'][_0x19a672(0x3ce)](0.5), _0x4cbe82[_0x19a672(0x3d0)] = ![], _0x4cbe82['y'] = -0xf, ctx[_0x173782]['addChild'](_0x4cbe82), ctx[_0x173782][_0x19a672(0x452)] = new PIXI[(_0x19a672(0x6f8))](0x0, 0x0, 0.12 * 0x14), ctx[_0x173782][_0x19a672(0x384)] = !![], ctx[_0x173782][_0x19a672(0x7dc)] = !![], ctx[_0x173782]['on']('mouseover', () => {
                        _0x4cbe82['visible'] = !![];
                    }), ctx[_0x173782]['on'](_0x19a672(0x7f8), () => {
                        var _0x2cbd6a = _0x19a672;
                        _0x4cbe82[_0x2cbd6a(0x3d0)] = ![];
                    }), ctx[_0x173782]['on'](_0x19a672(0x6d8), () => {
                        var _0x1542ec = _0x19a672;
                        _0x4cbe82[_0x1542ec(0x3d0)] = !_0x4cbe82[_0x1542ec(0x3d0)];
                    }), ctx[_0x173782]['on'](_0x19a672(0x5be), () => {
                        var _0x3a7f58 = _0x19a672;
                        _0x4cbe82['visible'] = !_0x4cbe82[_0x3a7f58(0x3d0)];
                    }), ctx[_0x173782][_0x19a672(0x31b)] = _0x4cbe82;
                }
                ctx[_0x173782][_0x19a672(0x39b)](), ctx[_0x173782][_0x19a672(0x514)](_0x10bd0f), ctx[_0x173782][_0x19a672(0x2e5)](0x0, 0x0, 0.12 * 0x14), ctx[_0x173782][_0x19a672(0x64c)](), ctx[_0x173782][_0x19a672(0x645)](0x1, 0x0), ctx[_0x173782]['drawCircle'](0x0, 0x0, 0.12 * 0x14), ctx[_0x173782][_0x19a672(0x64c)](), ctx[_0x173782]['x'] = _0xf9c48e['position']['x'], ctx[_0x173782]['y'] = _0xf9c48e[_0x19a672(0x797)]['y'], ctx[_0x173782][_0x19a672(0x31b)]['y'] = -0xf, ctx[_0x173782][_0x19a672(0x31b)][_0x19a672(0x32d)] !== _0x86d6ae && (ctx[_0x173782]['nameText'][_0x19a672(0x32d)] = _0x86d6ae), ctx[_0x173782][_0x19a672(0x31b)][_0x19a672(0x577)][_0x19a672(0x691)] !== _0x10bd0f && (ctx[_0x173782][_0x19a672(0x31b)][_0x19a672(0x577)]['fill'] = _0x10bd0f);
            }
        });
    },
    clearTeamUbication = function() {
        var _0x561255 = _0x4790ef;
        ctx[_0x561255(0x7f6)] ? Object[_0x561255(0x55a)](ctx)[_0x561255(0x39f)](_0x466616 => {
            var _0x2a58c7 = _0x561255;
            ctx[_0x466616] instanceof PIXI[_0x2a58c7(0x85b)] && ctx[_0x466616]['parent'] === ctx[_0x2a58c7(0x7f6)] && (ctx['teamsContainer'][_0x2a58c7(0x5af)](ctx[_0x466616]), ctx[_0x466616][_0x2a58c7(0x5b7)](!![]), delete ctx[_0x466616]), ctx[_0x466616 + _0x2a58c7(0x54d)] && ctx[_0x466616 + _0x2a58c7(0x54d)][_0x2a58c7(0x852)] === ctx[_0x2a58c7(0x7f6)] && (ctx['teamsContainer'][_0x2a58c7(0x5af)](ctx[_0x466616 + _0x2a58c7(0x54d)]), ctx[_0x466616 + _0x2a58c7(0x54d)]['destroy'](!![]), delete ctx[_0x466616 + _0x2a58c7(0x54d)]);
        }) : console[_0x561255(0x769)](_0x561255(0x287));
    };
ctx[_0x4790ef(0x5c1)] = new PIXI[(_0x4790ef(0x636))]('Friends', ctx['fontStyle'][_0x4790ef(0x2df)]), ctx[_0x4790ef(0x5c1)]['y'] = -0x5, ctx[_0x4790ef(0x607)] = new PIXI['Container'](), ctx[_0x4790ef(0x607)]['x'] = 0x1e, ctx['containerHsRec2']['y'] = 0xaa;
let playersTexts = [];
for (let index = 0x0; index < 0x5; index++) {
    let wallBounce = index + 0x1,
        deltaCoordinate = new PIXI[(_0x4790ef(0x636))](wallBounce + '.', ctx[_0x4790ef(0x4a5)][_0x4790ef(0x2df)]);
    deltaCoordinate['x'] = 0x0, deltaCoordinate['y'] = 0xd * wallBounce, ctx['containerHsRec2'][_0x4790ef(0x6f9)](deltaCoordinate);
    let playerNameText = new PIXI[(_0x4790ef(0x636))]('--', {
        'fill': _0x4790ef(0x504),
        'fontSize': 0xc
    });
    playerNameText['x'] = 0xf, playerNameText['y'] = 0xd * wallBounce, ctx['containerHsRec2'][_0x4790ef(0x6f9)](playerNameText), playersTexts[_0x4790ef(0x236)](playerNameText);
}
ctx[_0x4790ef(0x607)]['addChild'](ctx['titleRec2']);

function updatePlayerTable(_0x29eba3) {
    var _0x52c7d5 = _0x4790ef;
    const _0x1a5a4a = _0x29eba3[_0x52c7d5(0x479)],
        _0x5929ad = Array[_0x52c7d5(0x2a8)](_0x1a5a4a[_0x52c7d5(0x2f2)]()),
        _0x59e3d9 = _0x5929ad['filter'](_0x479919 => _0x479919[_0x52c7d5(0x6e5)] === zwormData[_0x52c7d5(0x6e5)]);
    playersTexts['forEach']((_0x2a094a, _0x404afc) => {
        var _0x5897c6 = _0x52c7d5;
        if (_0x59e3d9[_0x404afc]) {
            let _0x50a52b = _0x59e3d9[_0x404afc];
            _0x2a094a['text'] = _0x50a52b[_0x5897c6(0x5b6)][_0x5897c6(0x78f)](0x0, 0x14), _0x2a094a[_0x5897c6(0x577)][_0x5897c6(0x691)] = _0x50a52b[_0x5897c6(0x2f9)];
        } else _0x2a094a[_0x5897c6(0x32d)] = '--', _0x2a094a[_0x5897c6(0x577)][_0x5897c6(0x691)] = '#FFFFFF';
    });
}
zw_TopFriends_list = new PIXI[(_0x4790ef(0x4f9))](), zw_TopFriends_list['x'] = 0x50, zw_TopFriends_list['y'] = 0xb9;
const titleTextfriendlist = new PIXI[(_0x4790ef(0x636))](_0x4790ef(0x34e), {
    'fontFamily': fonts[currentFontIndex],
    'fontSize': 0xc,
    'fill': 0xffffff,
    'fontWeight': _0x4790ef(0x69d)
});
titleTextfriendlist['x'] = 0xa, titleTextfriendlist['y'] = -0x5, zw_TopFriends_list[_0x4790ef(0x6f9)](titleTextfriendlist);
const dividerfriendlist = new PIXI[(_0x4790ef(0x85b))]();
dividerfriendlist['lineStyle'](0x2, 0xffffff, 0x1), dividerfriendlist['moveTo'](-0xf, 0xf), dividerfriendlist['lineTo'](0x50, 0xf), dividerfriendlist['x'] = 0x5, zw_TopFriends_list['addChild'](dividerfriendlist);

function updateTeamTable(_0x46e61e, _0x5749d7) {
    var _0xf3ef9 = _0x4790ef;
    for (let _0x237fd2 = zw_TopFriends_list[_0xf3ef9(0x77f)][_0xf3ef9(0x30a)] - 0x1; _0x237fd2 >= 0x0; _0x237fd2--) {
        let _0x59d901 = zw_TopFriends_list[_0xf3ef9(0x77f)][_0x237fd2];
        _0x59d901 !== titleTextfriendlist && _0x59d901 !== dividerfriendlist && zw_TopFriends_list[_0xf3ef9(0x5af)](_0x59d901);
    }
    let _0x5eda0b = 0x0;
    const _0x1eec91 = 0xa;
    _0x46e61e[_0xf3ef9(0x479)][_0xf3ef9(0x39f)]((_0x44be6d, _0x36f532) => {
        var _0x357461 = _0xf3ef9;
        if (_0x44be6d[_0x357461(0x6e5)] === _0x5749d7 && _0x44be6d[_0x357461(0x766)] === zwormData[_0x357461(0x766)]) {
            let _0xcc1463 = cleanNickname(_0x44be6d[_0x357461(0x5b6)]),
                _0x24c2e9 = /[\u0600-\u06FF]/ [_0x357461(0x599)](_0xcc1463);
            const _0x3c699b = new PIXI[(_0x357461(0x636))](_0x5eda0b + 0x1 + '.\x20' + _0xcc1463, {
                'fontFamily': fonts[currentFontIndex],
                'fontSize': 0xc,
                'fill': _0x44be6d[_0x357461(0x2f9)] || 0xffffff,
                'stroke': 0x0,
                'strokeThickness': 0x2,
                'align': _0x24c2e9 ? _0x357461(0x268) : 'left'
            });
            _0x3c699b['x'] = -0x32, _0x3c699b['y'] = 0x14 + _0x5eda0b * 0xf, zw_TopFriends_list[_0x357461(0x6f9)](_0x3c699b), _0x5eda0b++;
            if (_0x5eda0b >= _0x1eec91) return;
        }
    });
}
zw_TopHS_RecordHs = new PIXI[(_0x4790ef(0x4f9))](), zw_TopHS_RecordHs['x'] = -0x37, zw_TopHS_RecordHs['y'] = 0x73;
const titleText = new PIXI['Text'](_0x4790ef(0x63c), {
    'fontFamily': fonts[currentFontIndex],
    'fontSize': 0xc,
    'fill': 0xffd700,
    'fontWeight': _0x4790ef(0x69d)
});
titleText['x'] = 0xa, titleText['y'] = -0x5, zw_TopHS_RecordHs[_0x4790ef(0x6f9)](titleText);
const divider = new PIXI['Graphics']();
divider[_0x4790ef(0x645)](0x2, 0xffffff, 0x1), divider[_0x4790ef(0x3c5)](0x0, 0xf), divider[_0x4790ef(0x603)](0x50, 0xf), divider['x'] = 0x5, zw_TopHS_RecordHs[_0x4790ef(0x6f9)](divider), zw_Top3HS_RecordHs = new PIXI['Container'](), zw_Top3HS_RecordHs['y'] = 0x19;
const titleText3hs = new PIXI[(_0x4790ef(0x636))]('Top\x203\x20HS\x20(ðŸ‘‘)', {
    'fontFamily': fonts[currentFontIndex],
    'fontSize': 0xc,
    'fill': 0xffd700,
    'fontWeight': _0x4790ef(0x69d)
});
titleText3hs['x'] = 0xa, titleText3hs['y'] = -0x5, zw_Top3HS_RecordHs[_0x4790ef(0x6f9)](titleText3hs);
const divider3hs = new PIXI[(_0x4790ef(0x85b))]();
divider3hs[_0x4790ef(0x645)](0x2, 0xffffff, 0x1), divider3hs[_0x4790ef(0x3c5)](0x0, 0xf), divider3hs[_0x4790ef(0x603)](0x50, 0xf), divider3hs['x'] = 0x5, zw_Top3HS_RecordHs['addChild'](divider3hs);
var playerTexts = [];
const cleanNickname = _0x21c5b5 => {
        var _0x29ced0 = _0x4790ef;
        return _0x21c5b5['replace'](/[_.\s:)+ã…¤]*ZW[Z]*_\d+$/g, '')[_0x29ced0(0x58b)]();
    },
    updateTop8Hs = function() {
        var _0x5c2b09 = _0x4790ef;
        const _0x155933 = Array[_0x5c2b09(0x2a8)](gameState[_0x5c2b09(0x479)][_0x5c2b09(0x2f2)]()),
            _0x37bfea = _0x155933[_0x5c2b09(0x732)](_0x11e746 => _0x11e746['hskill']['hs'] > 0x0 && _0x11e746[_0x5c2b09(0x5b6)][_0x5c2b09(0x58b)]() !== '');
        let _0xd8e353 = _0x37bfea[_0x5c2b09(0x370)](_0x2abb78 => _0x2abb78[_0x5c2b09(0x5b6)] === zwormData[_0x5c2b09(0x5b6)]);
        !_0xd8e353 && zwormData['hs'] > 0x0 && _0x37bfea[_0x5c2b09(0x236)]({
            'nickname': zwormData[_0x5c2b09(0x5b6)],
            'hskill': {
                'hs': zwormData['hs']
            },
            'teamColor': zwormData['teamColor']
        });
        if (_0x37bfea[_0x5c2b09(0x30a)] === 0x0) return;
        _0x37bfea['sort']((_0x2846f7, _0x3c264c) => _0x3c264c[_0x5c2b09(0x823)]['hs'] - _0x2846f7[_0x5c2b09(0x823)]['hs']);
        for (let _0x4f18a5 = zw_TopHS_RecordHs[_0x5c2b09(0x77f)][_0x5c2b09(0x30a)] - 0x1; _0x4f18a5 >= 0x0; _0x4f18a5--) {
            let _0x4f3b51 = zw_TopHS_RecordHs[_0x5c2b09(0x77f)][_0x4f18a5];
            _0x4f3b51 !== titleText && _0x4f3b51 !== divider && zw_TopHS_RecordHs[_0x5c2b09(0x5af)](_0x4f3b51);
        }
        playerTexts[_0x5c2b09(0x30a)] = 0x0;
        const _0x28a9ad = 0xc8;
        for (let _0x39052d = 0x0; _0x39052d < Math[_0x5c2b09(0x363)](_0x37bfea[_0x5c2b09(0x30a)], 0x6); _0x39052d++) {
            let _0x55ce5d = _0x37bfea[_0x39052d],
                _0x359c7b = cleanNickname(_0x55ce5d[_0x5c2b09(0x5b6)]),
                _0xa294dc = /[\u0600-\u06FF]/ [_0x5c2b09(0x599)](_0x359c7b),
                _0x47e03c = _0x359c7b['padEnd'](0xf, '\x20'),
                _0x4490af = (_0x5c2b09(0x863) + _0x55ce5d[_0x5c2b09(0x823)]['hs'])[_0x5c2b09(0x318)](0x6, '\x20'),
                _0x5024a5 = new PIXI[(_0x5c2b09(0x636))](_0x39052d + 0x1 + _0x5c2b09(0x616) + _0x47e03c + _0x5c2b09(0x68a) + _0x4490af + _0x5c2b09(0x5f7), {
                    'fontFamily': fonts[currentFontIndex],
                    'fontSize': 0xa,
                    'fill': _0x55ce5d[_0x5c2b09(0x2f9)] || 0xffffff,
                    'stroke': 0x0,
                    'strokeThickness': 0x2,
                    'align': _0xa294dc ? _0x5c2b09(0x268) : 'left',
                    'wordWrap': !![],
                    'wordWrapWidth': _0x28a9ad,
                    'breakWords': !![]
                });
            _0x5024a5['x'] = 0xa, _0x5024a5['y'] = 0x14 + _0x39052d * 0xf, playerTexts[_0x5c2b09(0x236)](_0x5024a5), zw_TopHS_RecordHs[_0x5c2b09(0x6f9)](_0x5024a5);
        }
        zw_Top3HS_RecordHs['y'] = 0x1e + playerTexts[_0x5c2b09(0x30a)] * 0xf;
    },
    colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff],
    textStyle = {
        'align': _0x4790ef(0x71b),
        'fontSize': 0xc,
        'lineJoin': _0x4790ef(0x223),
        'strokeThickness': 0x1,
        'whiteSpace': 'normal',
        'wordWrap': !![]
    };
ctx[_0x4790ef(0x3c0)] = new PIXI['Text']('----------â˜ ï¸---------', ctx[_0x4790ef(0x4a5)]['blanco']), ctx[_0x4790ef(0x3c0)]['y'] = -0x5, ctx['titleRec3']['x'] = 0xa, ctx[_0x4790ef(0x5d4)] = new PIXI[(_0x4790ef(0x4f9))](), ctx[_0x4790ef(0x5d4)]['x'] = -0x37, ctx[_0x4790ef(0x5d4)]['y'] = 0x118;
for (let index = 0x0; index < 0x8; index++) {
    let wallBounce = index + 0x1,
        deltaCoordinate = new PIXI[(_0x4790ef(0x636))]('\x20', ctx[_0x4790ef(0x4a5)][_0x4790ef(0x2df)]);
    deltaCoordinate['x'] = index >= 0x9 ? -0x5 : 0x0, deltaCoordinate['y'] = 0xd * wallBounce, ctx['containerHsRec3'][_0x4790ef(0x6f9)](deltaCoordinate);
    let playerNameText = new PIXI['Text']('--', {
        'fill': '#00FF00',
        ...textStyle
    });
    playerNameText['x'] = index >= 0x9 ? -0x5 : 0x0, playerNameText['y'] = 0xd * wallBounce, ctx[_0x4790ef(0x5d4)]['addChild'](playerNameText);
    let playerName2Text = new PIXI[(_0x4790ef(0x636))]('?', {
        'fill': colors[index % colors[_0x4790ef(0x30a)]],
        ...textStyle
    });
    playerName2Text['x'] = 0x46, playerName2Text['y'] = 0xd * wallBounce;
    let playerHsText = new PIXI[(_0x4790ef(0x636))]('--', {
        'fill': _0x4790ef(0x739),
        ...textStyle
    });
    playerHsText['x'] = 0x7d, playerHsText['y'] = 0xd * wallBounce, ctx[_0x4790ef(0x5d4)][_0x4790ef(0x6f9)](playerHsText);
}

function _0x47fe(_0x7d4676, _0x24e215) {
    var _0x766ddd = _0x5a74();
    return _0x47fe = function(_0x39aa96, _0x41b767) {
        _0x39aa96 = _0x39aa96 - 0x1dd;
        var _0x24cf84 = _0x766ddd[_0x39aa96];
        return _0x24cf84;
    }, _0x47fe(_0x7d4676, _0x24e215);
}
ctx[_0x4790ef(0x5d4)][_0x4790ef(0x6f9)](ctx[_0x4790ef(0x3c0)]);
var createTop1InMinimap = function(_0x405787) {
    var _0x5204e3 = _0x4790ef;
    if (_0x405787 && _0x405787[_0x5204e3(0x797)]) {
        let _0x747d66 = 0xfff000;
        !ctx[_0x5204e3(0x2ea)] && (ctx[_0x5204e3(0x2ea)] = new PIXI[(_0x5204e3(0x85b))](), ctx[_0x5204e3(0x2ea)][_0x5204e3(0x4f0)] = 0x2, ctx[_0x5204e3(0x2ea)][_0x5204e3(0x7ec)] = 0.9, ctx[_0x5204e3(0x7f6)] ? ctx[_0x5204e3(0x7f6)]['addChild'](ctx[_0x5204e3(0x2ea)]) : console['error'](_0x5204e3(0x287)));
        ctx[_0x5204e3(0x2ea)]['clear'](), ctx[_0x5204e3(0x2ea)][_0x5204e3(0x514)](_0x747d66), ctx[_0x5204e3(0x2ea)][_0x5204e3(0x2e5)](0x0, 0x0, 0.06 * 0x28), ctx[_0x5204e3(0x2ea)][_0x5204e3(0x64c)](), ctx['top1Point'][_0x5204e3(0x645)](0x1, 0xff0000), ctx[_0x5204e3(0x2ea)]['drawCircle'](0x0, 0x0, 0.06 * 0x28), ctx['top1Point'][_0x5204e3(0x64c)](), ctx[_0x5204e3(0x2ea)][_0x5204e3(0x6ad)] = !![], ctx[_0x5204e3(0x2ea)][_0x5204e3(0x73d)] = 0xff0000, ctx['top1Point'][_0x5204e3(0x5ab)] = 0xf, ctx[_0x5204e3(0x2ea)]['shadowOffsetX'] = 0x0, ctx[_0x5204e3(0x2ea)][_0x5204e3(0x20f)] = 0x0;
        const _0x1b4605 = new PIXI[(_0x5204e3(0x636))]('ðŸ‘‘', {
            'fontFamily': _0x5204e3(0x2ff),
            'fontSize': 0xa,
            'fill': 0xffffff,
            'align': _0x5204e3(0x71b)
        });
        _0x1b4605['x'] = -_0x1b4605[_0x5204e3(0x785)] / 0x2, _0x1b4605['y'] = -_0x1b4605['height'] / 0x2, ctx[_0x5204e3(0x2ea)][_0x5204e3(0x6f9)](_0x1b4605), ctx[_0x5204e3(0x2ea)]['x'] = _0x405787[_0x5204e3(0x797)]['x'], ctx['top1Point']['y'] = _0x405787[_0x5204e3(0x797)]['y'], console[_0x5204e3(0x435)](_0x5204e3(0x562), _0x405787[_0x5204e3(0x24d)]);
    } else console['error']('No\x20hay\x20jugadores\x20disponibles\x20para\x20actualizar\x20el\x20top\x201.');
};
const updateHeadshotHistory = function(_0x5288d4) {
    var _0x207caf = _0x4790ef;
    for (let _0x45f834 = 0x0; _0x45f834 < 0x8; _0x45f834++) {
        ctx[_0x207caf(0x5d4)]['children'][0x3 * _0x45f834 + 0x1] && (ctx['containerHsRec3']['children'][0x3 * _0x45f834 + 0x1][_0x207caf(0x32d)] = _0x5288d4[_0x45f834][_0x207caf(0x40f)]), ctx[_0x207caf(0x5d4)][_0x207caf(0x77f)][0x3 * _0x45f834 + 0x3] && (ctx[_0x207caf(0x5d4)][_0x207caf(0x77f)][0x3 * _0x45f834 + 0x2]['text'] = _0x5288d4[_0x45f834][_0x207caf(0x3bb)]);
    }
};

function assignPtcValues(_0x549536, _0x4d0397, _0x33063b) {
    var _0x30f72a = _0x4790ef;
    let _0x4dbc4f = portionTimes[_0x4d0397] - parseInt((0.99 == _0x33063b ? 0x1 : _0x33063b) * portionTimes[_0x4d0397] / 0x1),
        _0x359224 = _0x30f72a(0x258) + _0x4d0397;
    _0x549536['Tf'][_0x4d0397][_0x30f72a(0x6f9)](ctx[_0x30f72a(0x4f6)][_0x359224]), ctx['ptc'][_0x359224] && (ctx[_0x30f72a(0x4f6)][_0x359224]['x'] = _0x4dbc4f >= 0x64 ? 0xb : _0x4dbc4f >= 0xa ? 0x12 : 0x1a, ctx[_0x30f72a(0x4f6)][_0x359224][_0x30f72a(0x32d)] = _0x4dbc4f);
}

function account() {
    var _0x58d194 = _0x4790ef;
    $(_0x58d194(0x6c3))['hide'](), $(_0x58d194(0x54a))['on'](_0x58d194(0x3f7), function() {
        var _0x263a3b = _0x58d194,
            _0x49a38b = $(this)[_0x263a3b(0x5b5)](_0x263a3b(0x271));
        $(_0x263a3b(0x54a))['removeClass'](_0x263a3b(0x382)), $(this)['addClass'](_0x263a3b(0x382)), $('.servers-container\x20>\x20div')[_0x263a3b(0x26a)](), $(_0x263a3b(0x42e) + _0x49a38b[_0x263a3b(0x554)]())['fadeIn'](0xc8), $('.servers-container\x20>\x20div')[_0x263a3b(0x2fa)](_0x263a3b(0x42e) + _0x49a38b[_0x263a3b(0x554)]())[_0x263a3b(0x6e2)](0x64);
    });
}

function obtieneUSER() {
    var _0x9e1ea6 = _0x4790ef,
        _0x203b5c = {},
        _0x41e8f5 = {};
    window[_0x9e1ea6(0x286)] = function() {
        var _0x340d8f = _0x9e1ea6;
        _0x41e8f5 = window[_0x340d8f(0x82d)];
        if (_0x41e8f5 && Object['keys'](_0x41e8f5)[_0x340d8f(0x30a)] > 0x0) {
            console[_0x340d8f(0x435)](_0x41e8f5);
            if (_0x41e8f5) {
                var _0x1f094c = window[_0x340d8f(0x7b5)] - _0x41e8f5['qj']['If']['x'],
                    _0x1b7635 = window[_0x340d8f(0x3be)] - _0x41e8f5['qj']['If']['y'],
                    _0x9568d9 = _0x41e8f5['Mb']['ad'],
                    _0x528f1d = Math[_0x340d8f(0x27e)](_0x1f094c * _0x1f094c + _0x1b7635 * _0x1b7635);
                console[_0x340d8f(0x435)]('Cell:', _0x41e8f5, _0x340d8f(0x4ab), _0x9568d9, _0x340d8f(0x3f3), _0x528f1d);
            }
        }
    };
};

function loadScript2(_0x46beed, _0x36f33e = !![]) {
    return new Promise((_0xf5770, _0x329bbc) => {
        var _0x22ed0d = _0x47fe,
            _0x62d44f = document[_0x22ed0d(0x76b)](_0x22ed0d(0x4bb));
        _0x62d44f['type'] = _0x22ed0d(0x7f9), _0x62d44f[_0x22ed0d(0x68e)] = _0x46beed, _0x62d44f[_0x22ed0d(0x4f4)] = _0x36f33e, _0x62d44f[_0x22ed0d(0x2b0)] = _0xf5770, _0x62d44f[_0x22ed0d(0x476)] = _0x329bbc, document[_0x22ed0d(0x346)]['appendChild'](_0x62d44f);
    });
}

function loadStylesheet(_0x1619a7) {
    return new Promise((_0x2cc789, _0x197221) => {
        var _0x16af9b = _0x47fe,
            _0x45b22e = document[_0x16af9b(0x76b)](_0x16af9b(0x37a));
        _0x45b22e[_0x16af9b(0x338)] = _0x16af9b(0x819), _0x45b22e[_0x16af9b(0x767)] = _0x16af9b(0x51e), _0x45b22e[_0x16af9b(0x1fa)] = _0x1619a7, _0x45b22e['onload'] = _0x2cc789, _0x45b22e['onerror'] = _0x197221, document[_0x16af9b(0x346)][_0x16af9b(0x27d)](_0x45b22e);
    });
}

function _0x5a74() {
    var _0x14a6a7 = ['<input\x20type=\x22text\x22\x20id=\x22chatInput\x22\x20style=\x22display:\x20none;\x20position:\x20absolute;\x22\x20placeholder=\x22Escribe\x20tu\x20mensaje...\x22\x20/>', 'dal-a.wormate.io', 'CLAMP', 'xxx2', '\x20-\x20', 'setPrototypeOf', '</div>', 'tfc', 'src', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22sound-button\x22\x20onclick=\x22window.open(\x27https://www.myinstants.com/en/index/us/\x27,\x20\x27_blank\x27)\x22>Go\x20to\x20Sound\x20Tutorial\x201</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>', '1468SUyFAA', 'fill', '&nickname=', 'R2VvbWV0cnk=', '#optionSelect', 'Fj\x20(otros)', 'toString', 'QkxFTkRfTU9ERVM=', 'Users', 'facebook-jssdk', 'sonido\x20link\x2010cabezas', 'tok-b.wormate.io', ':nth-child(', 'bold', '.btn-check-ports', '<div\x20class=\x22settings-line\x22>', '_complete', 'enableJSClass', 'soundTuto2', 'has', 'bottom_left', 'sin-f.wormate.io', 'espacio\x202', '%;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22', 'init1\x20pSC:\x20', 'webkitExitFullscreen', '<button\x20id=\x22idkopyala\x22>', 'https://i.imgur.com/DbWbUxD.png', 'matchMedia', 'shadow', 'pivot', 'minimapBorderColor', '<img\x20src=\x22', 'https://i.imgur.com/IqQGK58.png', 'prop', '<div\x20class=\x22icon-selector\x22></div>', 'fillText', 'zworm', 'split', 'MOUTH', 'keypress', 'baseTexture', '<br/>', 'getRegistrations', '#popup-login-gg', 'addEventListener', '#adbl-3', 'getPower', 'exitFullscreen', 'Config', '#popup-menu-back', '.servers-container\x20>\x20div', 'util.time.sec', 'dead', 'MðŸ§', 'UmVjdGFuZ2xl', '<ul\x20class=\x22ui-tabs-nav\x22></ul>', 'index.game.popup.menu.login.tab', 'feed', 'indexOf', 'fileSize', 'baseVal', '#mm-player-level', 'https://asserts.wormworld.io/backgrounds/bg_sky_3.png', 'writeText', '<span\x20class=\x22tooltip\x22>', 'X_xxlupa', '<div\x20id=\x22display_color\x22>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22containerDoorsServers\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22optionSelect\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sao-a.wormate.io\x22>sao-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22mum-a.wormate.io\x22>mum-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dxb-a.wormate.io\x22>dxb-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-e.wormate.io\x22>fra-e</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-d.wormate.io\x22>fra-d</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-c.wormate.io\x22>fra-c</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-b.wormate.io\x22>fra-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22waw-a.wormate.io\x22>waw-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dal-b.wormate.io\x22>dal-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22vin-a.wormate.io\x22>vin-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dal-a.wormate.io\x22>dal-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sao-c.wormate.io\x22>sao-c</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22bhs-a.wormate.io\x22>bhs-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sao-b.wormate.io\x22>sao-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22hil-a.wormate.io\x22>hil-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22syd-a.wormate.io\x22>syd-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-g.wormate.io\x22>sin-g</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22gra-a.wormate.io\x22>gra-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-i.wormate.io\x22>sin-i</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-h.wormate.io\x22>sin-h</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-f.wormate.io\x22>sin-f</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-c.wormate.io\x22>sin-c</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-b.wormate.io\x22>sin-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-a.wormate.io\x22>sin-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22tok-b.wormate.io\x22>tok-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-d.wormate.io\x22>sin-d</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-e.wormate.io\x22>sin-e</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22numberInput\x22\x20min=\x220\x22\x20placeholder=\x22ROOM\x20NUMBER\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22connectButton\x22>CONNECT</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'u6_', 'v8.0', '#firefly-container', 'mouseup', 'Dj\x20(boca)', 'minimapTeamcod', 'this\x20is\x20null\x20or\x20not\x20defined', 'bottom\x20left', 'coins', 'Z2V0', 'd29ybWF0ZS1pb185NzB4MjUw', 'laserHS', 'https://asserts.wormworld.io/backgrounds/bg_sky_4.png', 'fadeOut', 'MzI', 'https://i.imgur.com/K7UPjJJ.jpg', 'teamCode', 'removeChildren', 'VGV4dHVyZQ==', 'isBuyer', 'isPowerOfTwo', 'EEUU', '/images/bg-pattern-pow2-TEAM2.png', 'skinId_A:\x20', '\x20proviene\x20de\x20tu\x20pï¿½gina:\x20', 'PotenciadorSize', 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js', '#00B2ED', 'index.game.social.shareResult.messNorm', '.connect-button', 'SHOW\x20PING', 'prototype', 'Arial,\x20sans-serif', 'target=\x22_black\x22\x20href', 'O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo', 'Circle', 'addChild', 'offsetHeight', 'Equipos\x20/\x20Teams', 'EYES', 'N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+.\x20.+osYYyso+-.osyQSs6662NyW.63\x20yW:`+QQ+\x20-Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63\x20yW:+Ss:.-+Ss:`M-3.M`\x20.YyySYys32`QSs.2``-Hh-32sH-66\x20`..3\x20`..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3\x20oS/`Sso`3\x20ohy6oH.3..6\x20-Hh.\x20-+Qs/\x20N\x20/W+62`Wo:Ss32Sso.MMmd+.3syy`\x20.-`\x20:Y+3+Ss//Q+3\x20+H`32sHhsyHho6-Hh`:S+--+S+N2+W`\x20`+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6\x20Hh`So3`SsN3oHhs-sHhsoW/\x20`Sso:-:Q.hM-2ymmh.\x20/Yo`3\x20sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3\x20+Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3\x20oYy:Q/3\x20`Q.\x20-W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3\x20ohdh/`+So:3\x20.+S/`/oo:6.+s+`\x20`+yyo`3\x20+yQYs:\x20+oo..shy.\x20-+oSo/.\x20NN', 'constructor', 'angleBetween', '#toggleTop8', 'X_x5', 'wormExplot-key', 'shift', 'zw_msg', '#mm-player-exp-bar', 'getElementById', 'sectores-key', 'guest', 'stop', 'bottom_right', 'ping', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22value\x22>', 'totalPlayTimeSec', 'ï¿½Coincidencia\x20encontrada!\x20El\x20script\x20proviene\x20de\x20la\x20fuente\x20correcta.', '#mm-params-game-mode', '<i\x20class=\x22material-icons\x22>replay</i>', '..\x2010\x20..', '</div></div>', '#numberInput', 'startsWith', 'index.game.popup.menu.skins.tab', '#707070', 'sfxEnabled', 'pageY', 'outerWidth', '#loading-view', 'center', 'onreadystatechange', '#adbl-1', '100%\x20200%', '#background-key', 'fontSize', 'red', 'gra-a.wormate.io', 'fi_bg', 'hatDict', 'u3_', 'sin-c.wormate.io', '#FFF', 'https://i.imgur.com/jXzoG5D.png', '#popup-menu-label', 'atan', '#withdraw-consent-view', 'resize', 'indexedDB', '<div\x20class=\x22settings-checkbox\x22>', '#mm-player-username', '<input\x20type=\x22color\x22\x20id=\x22colorPicker\x22\x20/>', 'clientsSkinsActivos', 'filter', '\x22\x20data-option=\x22', 'O2F0dHJpYnV0ZSB2ZWMyIA==', 'https://asserts.wormworld.io/backgrounds/bg_sky_5.png', 'laserColor', '00000', 'setSize', '#FF0000', 'killTextColor', '#mm-action-guest', '#results-view', 'shadowColor', '5000', '#wear-locked-bar-text', 'https://i.imgur.com/NKAyYa8.png', 'changeFont', 'innerAlphaStandby', 'color\x20del\x20borde', 'dA:\x20FAIL', '#popup-menu-coins-box', 'TWVzaA==', 'Cursor\x20', 'binaryType', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css', 'Incognito', 'unshift', 'https://zwormextenstion.com/wormExtension/api/skinsActived.php?v=', '#login-view', 'de_DE', '#FFA500', '\x22></div>', 'map', '#mm-skin-prev', 'category', '</a>\x20\x20\x20\x20</div>\x20\x20\x20\x20<div\x20class=\x22toaster-consent-close\x22>', 'status', 'exception', 'Francia', 'playerX', 'onStart', '.mm-logo', 'WebSocket', 'PortionSkinData', '15px', 'https://asserts.wormworld.io/backgrounds/arena01.png', 'OPEN', 'https://wormate.io/images/og-share-img-new.jpg', 'zw-toplist', '.profile-info', 'colorFondo', 'gsi:then', 'getDirection', 'wssCode', 'type', '\x20-\x20Ping:\x20', 'error', 'cos', 'createElement', 'touchmove', 'initialize', 'tint', '#toaster-view', '.servers-francia', 'killTextColorGroup', 'dataRoom', '<input\x20id=\x22color_palet2\x22\x20type=\x22color\x22\x20value=\x22#01D9CC\x22>', 'coins_50000', 'updatePacketInterval', '??????\x20???????????', 'options', 'stopPropagation', 'https://i.imgur.com/12MgJyy.png', '.servers-australia', 'LASER\x20HS', '#adbl-4', 'stringify', 'flexx', 'children', '#withdraw-consent-no', 'https://i.imgur.com/9ui2KwE.png', '.tab.material-button', 'img', 'rs:lo', 'width', '/images/linelogo-xmas2022.png', '#mm-leaders', '<option\x20value=\x2214\x22>', 'BOOSTER\x20SIZE', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-top1\x22>', 'onclose', '<div\x20class=\x22name\x22>', 'resource', 'onopen', 'substring', 'fromImage', 'string', 'SkinVisible(Para\x20publico)', '<div\x20class=\x22popup-sep\x22></div>', '#hotkeys-section', 'giro', 'tooltip', 'position', 'checked', '??????\x202', 'classPrefix', 'lightblue', '\x20https://wormate.io/\x20#wormate\x20#wormateio', 'laser\x20color', 'AbilitySkinData', 'skinId', 'function', 'noSkin-key', 'init2\x20pSC:\x20', 'display', 'init', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'top_left', '#withdraw-consent-yes', '#final-share-fb', 'close', 'https://zwormextenstion.com/wormExtension/api/servers.php?v=', 'kill', '#user-section', '<div\x20class=\x22container\x22>', '#laserHSkey-key', 'X5_TYPE', '#loading-worm-a', 'key', '#mm-skin-prev\x20svg', '#store-view', 'Ingresa\x20\x27W\x27\x20o\x20\x27T\x27\x20para\x20continuar.', 'mouseX', 'MTY', 'nonbuyableCause', 'innerHeight', ';path=/', 'VISIBLE\x20ALL\x20POWER\x20UPS', 'client_DateExpired', 'now', '.server-row', 'isNumberValid', 'zwset', 'VELOCITY_TYPE', 'musicEnabled', 'backgroundImage', 'textContent', 'Skins\x20privadas\x20desbloqueadas\x20para\x20el\x20usuario\x20', 'rs:fb', 'top_right', 'laserHSkey-key', '#zoom-key', 'propertyList', 'TeamSkinData', '7419870wyVoZq', '\x22/></span><span>', 'coords', 'open', 'Sky\x20Purp', 'blendMode', 'sao-a.wormate.io', '.description-text', 'https://wormate.io', 'por\x20defecto', '#wormtr-settings-view', '.servers-canada', '#showAnimationHeadshot', 'WearSkinData', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20', 'Client_VisibleSkinPrivate', 'val', 'buttonMode', '#store-buy-coins_3250', 'querySelectorAll', 'HS\x20TEXT', 'https://cdn.socket.io/4.4.1/socket.io.min.js', 'static', 'onmessage', 'textDict', '??????', 'fadeIn', 'onEnd', 'index.game.popup.menu.delete.tab', 'teamDict', 'util.time.days', '.servers-japon', '\x22\x20style=\x22margin-left:\x2010px;\x22>Connect</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'alpha', '#final-place', 'enableClasses', '#leaders-button-level', 'ENV', 'cookie', 'copy', 'body', 'Mostrar\x20lista\x20de\x20amigos:', 'Por\x20favor,\x20selecciona\x20una\x20opciÃ³n\x20y\x20escribe\x20un\x20nÃºmero\x20antes\x20de\x20conectar.', 'teamsContainer', 'x_emoji', 'mouseout', 'text/javascript', '.v4', 'url', 'mousemove', 'Germania', 'top', 'âš ï¸\x20Advertencia:\x20No\x20se\x20encontrÃ³\x20el\x20elemento\x20\x27teamNickname\x27.', 'message', 's,\x20', 'eyesId', '\x0aðŸ”\x20Probando\x20servidores\x20Wormate.io\x20(puerto\x20', '_end', '#FFC75A', 'outerScale', 'Origin:', 'azul', 'ðŸ”§\x20Imagen\x20escalada\x20(', 'id_user', 'aqnvgcpz05orkobh', '/buyProperty?id=', 'ancho\x20de\x20la\x20comida', 'game\x20color', '<span\x20class=\x22names_settings\x22\x20\x20id=\x22colorJuego\x22\x20>\x20', 'preroll', '556UfZRZy', 'return\x20RegExp;', '#profile-experience-val', '</div>\x20\x20\x20\x20<div\x20class=\x22toaster-coins-close\x22>', 'toggle', 'util.time.min', '#settings-kufur-isim', '<span\x20class=\x22names_settings\x22\x20id=\x22laser\x22>\x20', 'stylesheet', 'Honolulu\x20-\x20HawÃ¡i,\x20EEUU', '.ui-tabs-tab', 'gg_107164783301809303612', 'bhs-a.wormate.io', 'index.game.toaster.levelup', 'pow', 'https://asserts.wormworld.io/backgrounds/bkgnd9.png', 'index.game.main.menu.unlockSkins.comeAndPlay', 'off', 'hskill', '#profile-stat-registrationDate', 'validInput', 'OA==', 'UkVQRUFU', '.options-list\x20>\x20div[category=\x22controls\x22]', 'aura\x20del\x20potenciador', '0xffffff', '#settings-interactive-switch', 'VGV4dA==', 'nodes', '0x00243E', 'user_data', 'toFixed', 'gg_', 'game-cont', 'Kw==', 'wss://', 'VISIBLE\x20SPEED\x20AND\x20ZIGZAG', 'replaceAll', '#CCCF81', 'sao-b.wormate.io', '#teamColor', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22connect-button\x22\x20data-server=\x22', 'xXx2', '132525neTbal', 'destroyed', '<div\x20id=\x22hotkeys-menu\x22\x20class=\x22menu\x22>ConfiguraciÃ³n\x20de\x20teclas\x20rÃ¡pidas</div>', 'smoothCamera', '#1eaom01c3pxu9wd3', 'mouthUnknown', 'O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9', 'ComidaShadow', '\x22\x20style=\x22color:\x20', 'fondo3', '&glassesId=', 'onChange', '#222', '7333627mavOqk', 'CLOSING', 'isArray', '</button>', '</li>', '????\x20???\x20??????', 'prerollCount', 'cursor-box\x20icon-selector__item', 'clientesActivos', 'parent', '<div\x20id=\x22settings-menu\x22\x20class=\x22menu\x22>Ajustes\x20generales</div>', 'fade\x20OUT\x20', 'gsi:sil', 'lowercase', 'conteiner', '),\x20auto', 'syd-a.wormate.io', 'data-control', 'Graphics', 'data', 'selectedBackground', '<option\x20value=\x2210\x22>10</option>', '#wormExplot-key', 'coins_7000', 'https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Zen+Dots&display=swap', 'https://i.imgur.com/gvMlosm.png', 'â˜ ï¸\x20', 'fontFamily', '<select\x20id=\x22zwtop\x22>', '.fill', 'zoomSpeed', 'PotenciadorAura', 'setItem', 'gger', 'Conectando\x20a:', '#popup-logout', '<div\x20id=\x22mm-zw-settings\x22\x20style=\x22\x22>Settings</div>', '</span></div>', '/pub/leaders', '\x20\x20\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'visiblePowersAll', 'CHANGE\x20SKINS\x20TO\x20Z\x20WORM', '<span\x20class=\x22names_settings\x22>\x20:\x20Show\x20Speed&Zigzag</span>', 'TEAM2', 'gsi:l', 'wormate.io', '#settings-menu', 'resetScript', 'format', 'pointerdown', 'description', '#top8List', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22box\x22><div\x20class=\x22ball\x22></div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#mm-skin-canv', '#userid', 'zw-background', '#highscore-table', '<span\x20id=\x22zw-settings-id\x22\x20class=\x22settings-label\x22>ID:\x20</span>', 'href', 'â³\x20Espera\x20antes\x20de\x20enviar\x20otro\x20mensaje...', '#inputReplaceSkin', '#mm-settings', 'deltaY', 'getAuthResponse', 'dataCon', 'random', '#markup-wrap', 'isFinite', 'laserColorGroup', '.options-list.ps\x20div[category=\x22cursor\x22]', '<option\x20value=\x223\x22>', '</span><span>', 'index.game.result.your', 'url(', '<input\x20style=\x22width:\x2060px\x22\x20type=\x22text\x22\x20name=\x22inputReplaceSkin\x22\x20id=\x22inputReplaceSkin\x22\x20value=\x2235\x22\x20maxlength=\x224\x22\x20onchange=\x22setIdReplaceSkin(this)\x22>', 'innerWidth', '#resultadoPuertas', '#popup-delete-account', '#loading-worm-c', 'shadowOffsetY', 'wrapMode', 'no-js(\x5cs|$)', '\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#wear-tint-chooser', 'GET', 'bottom', 'El\x20ID\x20generado\x20no\x20coincide\x20con\x20ningï¿½n\x20ID\x20almacenado\x20en\x20la\x20base\x20de\x20datos.', '<div\x20class=\x22table-row\x22><span>', 'playerDeath', 'getContext', 'index.game.antiadblocker.msg4', 'es_ES', 'https://i.imgur.com/0G8cFtP.png', '#adbl-2', 'LDEuMCkpLnh5LDAuMCwxLjApO30=', 'eyesVariantArray', '<div\x20id=\x22mm-advice-cont\x22><button\x20value=\x22FULL\x20SCREEN\x22\x20id=\x22fullscreen\x22\x20style=\x22display:\x20inline;\x20margin:\x2015px\x20auto;width:50%;height:\x2053px;\x22>FULL\x20SCREEN</button><button\x20value=\x22Replay\x22\x20id=\x22zwplayagain\x22\x20style=\x22display:\x20inline;\x20margin:\x2015px\x20auto;width:50%;height:\x2053px;\x22>REPLAY</button></div>', 'arraybuffer', 'index.game.antiadblocker.msg3', 'round', 'glassesDict', 'slice', 'colorDict', 'index.game.floating.wellDone', '/images/lens.png', 'SKIN', 'reduce', 'data-inline', 'outerHeight', 'parentElement', 'Ej\x20(gorra?)', '<span\x20class=\x22settings_span\x22\x20>', '\x20</span>', 'clientY', 'requestFullscreen', 'AudioState', '???????????\x20?????', 'xxxEmojiType', 'push', 'antiadblocker', 'TOP_LEFT', '#fullscreen', 'play', 'idReplaceSkin', 'mousedown', 'scrollTo', '#mm-coins-buy\x20span', 'SECTORS', '=;expires=', '????\x20???\x2010\x20?????', '#wear-glasses-button', 'div[category=\x27theme\x27]', '<li><strong>âŒ\x20No\x20se\x20encontraron\x20puertas\x20abiertas.</strong></li>', 'xxx5', 'DataReader\x20error:\x20', 'index.game.popup.menu.wear.tab', 'LEFT', '<input\x20id=\x22color_palet\x22\x20type=\x22color\x22\x20value=\x22#00243E\x22>', '????', 'mouthVariantArray', 'Singapur', 'nombre', 'keyup', 'subir\x20sonido', 'en_US', 'MSStream', '(^|\x5cs)', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-region\x22>', '000', 'flx', 'Zoom\x20Speed', 'La\x20fecha\x20de\x20skins\x20expiraciÃ³n\x20es\x20vÃ¡lida.', 'clock_ad', 'Texture', '</span><span><img\x20src=\x22', 'loading', 'delete', 'giro-key', '<input\x20type=\x22checkbox\x22\x20id=\x22toggleKillFeed\x22\x20/>', '#mm-menu-cont', 'latitude', 'selectSala', 'inset\x200\x200\x2020px\x20rgba(255,\x20255,\x20255,\x200.5),\x200\x200\x2020px\x20rgba(255,\x20255,\x20255,\x200.2)', '</span></a>', '#avatarUrl', '#store-view-next', 'scale', 'server-message-toast', 'right', '{}.constructor(\x22return\x20this\x22)(\x20)', 'hide', 'index.game.social.shareResult.caption', 'movimiento', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22modalPuertas\x22\x20style=\x22position:fixed;\x20top:20%;\x20left:50%;\x20transform:translateX(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:20px;\x20z-index:9999;\x20display:none;\x20background-color:\x20rgb(78\x2078\x20114\x20/\x2075%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x20border:\x202px\x20solid\x20#252535;\x20color:\x20white;\x20font-family:\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x20400px;\x20overflow-y:\x20auto;\x20min-width:\x20300px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22modalCloseBtn\x22\x20style=\x22position:\x20absolute;\x20top:\x205px;\x20right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x20cursor:\x20pointer;\x20color:\x20#fff;\x22>âœ–</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22modalTitle\x22\x20style=\x22font-size:\x2016px;\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x20text-align:\x20center;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ðŸ”“\x20Open\x20doors\x20available\x20for:\x20<span\x20id=\x22nombreServidor\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22resultadoPuertas\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#profile-username', 'CHANGE\x20BOT\x20&\x20PEOPLE\x20TO\x20BASIC\x20SKINS', '&type=', 'data-country-name', 'querySelector', 'texture', 'latency', 'zMg==', '#delete-account-timer', '#giro-key', 'deleteDatabase', '.v1', '#profile-stat-totalTimeSpent', 'block', 'ID\x20copiado:\x20', 'appendChild', 'sqrt', 'cloneNode', '<option\x20value=\x225\x22>', 'color', '<strong>ðŸ†\x20Best\x20server:\x20', 'option\x20range', 'TOP', 'render', 'onclick', 'Error:\x20ctx.teamsContainer\x20is\x20not\x20defined.', 'gameColorGroup', 'contextmenu', 'rgba(255,\x20255,\x20255,\x200.1)', 'RIGHT', 'className', '???????\x20???', 'return\x20PIXI;', '.v3', 'background', 'Japon', 'add', '.tooltip', 'https://swykz.theoxt.com/api/streming.php', 'BACKGROUND\x20SOLID', '&gh=', '<a\x20class=\x22mm-skin-over-button\x22\x20id=\x22mm-skin-over-fb\x22\x20target=\x22_blank\x22\x20href=\x22https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=', '/getUserData', '_config', '<span\x20id=\x22notifications-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22notifications-menu\x22>notifications</span>', '</span>', 'removeClass', '<div\x20id=\x22wormtr-settings-view\x22\x20class=\x22base-popup-view\x22\x20style=\x22opacity:\x201;\x22>', '/images/guest-avatar-xmas2022.png', '\x27)\x22></div>', 'tap', 'use\x20strict', '#teamCodeInput', 'https://asserts.wormworld.io/backgrounds/arena03.png', '#store-item-price', 'game-wrap', 'hsTextColor', '.toaster-consent-close', 'from', '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'toast-top-center', 'change', 'pressed', 'AURA\x20THE\x20BOOSTER', 'adblock', 'pointermove', 'onload', 'emit', '..\x206\x20..', 'skinGroupArrayDict', 'fade\x20IN\x20', 'getImageData', 'keydown', 'glow', 'fra-e.wormate.io', 'rotation', 'send', '#congrats', 'noAuras', '/sdk.js', 'image', 'pause', '<div\x20id=\x22user-section\x22\x20class=\x22settings-section\x22>', 'KeyRespawn', '<span\x20class=\x22settings-label\x22>Top</span>', 'playerDisconnect', 'outer', 'ARENA', 'noSkin', ':</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', 'v1_', '#game-canvas', 'focus', 'ActiveX2', '#profile-level', '/uk', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22\x20style=\x22', 'util.time.hours', 'sha256', 'Loading.', 'ServerName', 'hideYouNameInMinimap', 'sectors', 'X10_TYPE', '#store-buy-coins_125000', 'sin', 'addAsyncTest', 'iman', '????????????', '.servers-granbretana', 'MOUSE\x20DELAY', 'translate(-50%,\x20-50%)\x20scale(', '//apis.google.com/js/api:client.js', 'blanco', 'gg_110413852592088957484', 'waw-a.wormate.io', 'kills', 'loading\x20advertisement', '.v5', 'drawCircle', 'json', '\x20:\x20', 'abs', '#wear-hats-button', 'top1Point', 'sgp1', 'Error\x20enviando\x20mensaje:', 'Premium\x20Feature', 'https://i.imgur.com/kGjR9yf.png', 'clientX', '#aqnvgcpz05orkobh', '/login', 'values', 'MLb', 'index.game.result.share', '#zwtop', 'BORDE\x20GAME', 'hasOwnProperty', 'backgroundSolid', 'teamColor', 'not', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22status-dot\x22\x20style=\x22background-color:\x20', 'https://zworm.xyz:3305/data?v=', '#delete-account-yes', '15222YSFKrG', 'Arial', 'fi_aw', 'joystick', 'arc', 'portionUnknown', 'inputReplaceSkin', 'ZOOM_TYPE', 'player', '#chat-history', 'runtimeHash', ':</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22sound-10hs\x22\x20class=\x22sounds-input\x22\x20placeholder=\x22Enter\x20secondary\x20sound\x20URL\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20BotÃ³n\x20para\x20activar/desactivar\x20el\x20sonido\x20de\x20headshots\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>Headshot\x20Sound:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22toggle-sound\x22\x20class=\x22sound-button\x22>Disable\x20Sound</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20ðŸ†\x20Nueva\x20secciÃ³n:\x20Equipos\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22teams\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>TEAM\x20CODE:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22teamCodeInput\x22\x20\x20class=\x22sounds-input\x22\x20placeholder=\x22ENTER\x20YOUR\x20CODE\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20ðŸŽ¨\x20Nueva\x20secciÃ³n:\x20Skins\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22skins\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>Skin\x20Original:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22width:\x2060px\x22\x20type=\x22text\x22\x20name=\x22inputReplaceSkin\x22\x20\x20class=\x22sounds-input\x22\x20\x20id=\x22inputReplaceSkin\x22\x20value=\x2235\x22\x20maxlength=\x224\x22\x20onchange=\x22setIdReplaceSkin(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22streamers\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22streamers-section\x22\x20style=\x22display:\x20none;\x20padding:\x2010px;\x22>\x0a\x20\x20\x20\x20<h2>Lista\x20de\x20Streamers</h2>\x0a\x20\x20\x20\x20<div\x20id=\x22streamers-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer\x20inlive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/MFip2zi.png\x22\x20class=\x22streamer-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-name\x22>Streamer\x201</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-platform\x22>Twitch</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/MFip2zi.png\x22\x20class=\x22streamer-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-name\x22>Streamer\x202</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-platform\x22>YouTube</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer\x20inlive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/MFip2zi.png\x22\x20class=\x22streamer-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-name\x22>Streamer\x203</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-platform\x22>Facebook</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20SecciÃ³n\x20de\x20Streamers\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'length', 'mouseDelay', 'logo', '..\x201\x20..', '<option\x20value=\x227\x22>7</option>', 'data-position', 'dotFormat', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22', 'nodeName', 'cambio-skin2', '#killFeed', '#coins-view', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', '<i\x20class=\x22material-icons\x22>manage_accounts</i>', 'padStart', '#store-locked-bar', 'POST', 'nameText', 'SkinVisible(For\x20public)', 'normal', 'SHOW\x20KILL\x20FEED', 'KILL\x20TEXT', 'caches', 'mmm', '#mm-player-exp-val', 'color:\x20yellow;', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22premium-badge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20â­\x20Premium\x20â­\x20<br>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Expire:\x20<span\x20id=\x22premium-expiration\x22>', '.cursor-box', '22702064rIZqxd', 'prepend', 'fn_o', 'dA:\x20OK', '.overlay-2', 'ActiveZlupa', 'bind', 'text', 'PQ==', 'error-view', 'highScore', 'vin-a.wormate.io', 'empty', '<img\x20class=\x22worm_1\x22\x20src=\x22https://i.imgur.com/iekrYYm.png\x22><span\x20class=\x22Worm_cerca\x22></span>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-', 'portionDict', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js', 'undefined', 'rel', 'X2_TYPE', 'LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=', '200%\x20200%', 'comidax2', 'Socket\x20closed', 'match', 'offsetWidth', '#mm-skin-over', 'loop', '??\x20?????????????', 'fra-c.wormate.io', 'I18N_LANG', 'data-format', 'head', '???????????\x20????', '\x20ms', 'webkitRequestFullscreen', 'resolution', '#final-caption', 'data-room', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22server-row\x22\x20data-wss=\x22', 'TEAM\x20LIST', '#popup-logout-container', 'https://asserts.wormworld.io/backgrounds/bkgnd10.png', 'onDragMove', '<a\x20class=\x22mm-skin-over-button\x22\x20id=\x22mm-skin-over-tw\x22\x20target=\x22_blank\x22\x20href=\x22http://twitter.com/intent/tweet?status=', '?????\x20???', 'Wormy\x20Error:\x20', 'INCOGNITO', 'geolocation', '#mm-player-info', 'google', 'innerHTML', 'comidax5', '<div\x20class=\x22settings-icons\x22>', 'getTime', '<span\x20id=\x22hotkeys-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22hotkeys-menu\x22>keyboard</span>', 'https://asserts.wormworld.io/backgrounds/bkgnd0.png', '#settings-container2,\x20#clossed_Setings', 'index.game.result.placeInBoard', 'pointerup', 'warn', 'min', 'iPhone|iPad|iPod|Android', 'firefly', 'ActiveX10', 'sSE=', '#fff', 'isCustom', 'background-color', 'xXx5', 'La\x20fecha\x20de\x20skins\x20expiraciÃ³n\x20ha\x20vencido.', 'data-type', 'Virginia\x20-\x20EEUU', 'login', 'some', 'call', 'La\x20fecha\x20de\x20expiraciï¿½n\x20es\x20vï¿½lida.', 'WormSkinData', 'parse', '.server-name', '{1}', '#please-wait-view', 'Socket\x20error', '#zwplayagain', 'link', '#final-replay', '#mm-advice-cont', '#color_paletRGB,\x20#color_palet,\x20#color_palet2', '#wear-mouths-button', '_start', 'Sprite', 'index.game.popup.menu.store.locked', 'ui-tab-active', 'Error\x20al\x20procesar\x20el\x20mensaje:', 'interactive', 'Valor\x20no\x20vï¿½lido,\x20se\x20utilizarï¿½\x20una\x20imagen\x20por\x20defecto.', '<option\x20value=\x224\x22>4</option>', 'customFormat', '<option\x20value=\x222\x22>', '#delete-account-no', 'skin', '24JbYIqB', 'hue', 'imgTest_desactived', '</div>\x20\x20\x20\x20<div\x20class=\x22toaster-levelup-close\x22>', '\x22\x20data-country=\x22', 'ZWORM\x20SETTINGS', 'floor', 'show', 'timerSpZg', 'orange', '\x27,\x20change\x20in\x20(ms)\x20', 'ssss', 'opciones', '???', '#mm-event-text', 'msExitFullscreen', 'clear', 'base', 'index.game.popup.menu.coins.tab', '.v0', 'forEach', 'https://i.imgur.com/mHp0ozi.png', 'getItem', 'sgp2', '?????', '\x20/\x20', '#loading-worm-b', '?????\x20???????????', 'Arena\x203', 'RmxvYXQ', 'setTime', 'setInt16', '/es', 'debu', 'parseFromString', 'R3JhcGhpY3M=', 'price', 'SHOW\x20FPS', 'id_token', '1000', '\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Preloader\x20en\x20pantalla\x20completa\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.fixed-background\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.5s\x20ease-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Imagen\x20de\x20fondo\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.background-image\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20url(\x27https://i.imgur.com/oXntzBc.jpeg\x27)\x20no-repeat\x20center\x20center/cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-position:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20blur(5px)\x20opacity(1.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Estilos\x20del\x20logo\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20pulse\x204s\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2070px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20AnimaciÃ³n\x20de\x20pulso\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20pulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(2);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20transform:\x20scale(2.1);\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(2);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Barra\x20de\x20carga\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.progress-bar-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20255,\x20255,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.progress-bar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x200%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#252535;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x2010s\x20linear;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20GIF\x20de\x20rotaciÃ³n\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.rotate-gif\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x20/*\x20Oculto\x20por\x20defecto\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Corazones\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.hearts\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one,\x20.two,\x20.three,\x20.four,\x20.five\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#252535;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotate(-45deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one:before,\x20.one:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.two:before,\x20.two:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.three:before,\x20.three:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.four:before,\x20.four:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.five:before,\x20.five:after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#252535;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one:before,\x20.two:before,\x20.three:before,\x20.four:before,\x20.five:before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20-5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one:after,\x20.two:after,\x20.three:after,\x20.four:after,\x20.five:after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20AnimaciÃ³n\x20de\x20los\x20corazones\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20heart\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(0)\x20rotate(-45deg)\x20scale(0.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-150px)\x20rotate(-45deg)\x20scale(1.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one\x20{\x20animation:\x20heart\x201s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.two\x20{\x20animation:\x20heart\x202s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.three\x20{\x20animation:\x20heart\x201.5s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.four\x20{\x20animation:\x20heart\x202.3s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.five\x20{\x20animation:\x20heart\x201.7s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20</style>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22fixed-background\x22\x20id=\x22loading-screen\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-image\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/jXzoG5D.png\x22\x20alt=\x22server\x20logo\x22\x20class=\x22logo\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hearts\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22one\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22two\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22three\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22four\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22five\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x22\x20id=\x22progress-bar\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20GIF\x20de\x20rotaciÃ³n\x20para\x20mÃ³viles\x20en\x20vertical\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/CVpwetK.gif\x22\x20alt=\x22Rotar\x20el\x20dispositivo\x22\x20class=\x22rotate-gif\x22\x20id=\x22rotate-gif\x22>\x0a\x20\x20\x20\x20</div>\x0a', 'info', 'Valor\x20guardado\x20en\x20localStorage:', '</option>', 'copiar', 'accessToken', 'Socket\x20send\x20error:\x20', 'WLp', 'enemyNameHs', 'readyState', '\x22\x20type=\x22text\x22\x20class=\x22minicolors\x20form-control\x22>', 'mouseY', '#sound-10hs', 'titleRec3', 'concat', 'sin-a.wormate.io', 'Escape', '#final-score', 'moveTo', 'idSkin', 'soundTuto3', 'colorLaser', '&eyesId=', 'Giro\x20deactivated', 'outerRadius', 'volume', 'bestSurvivalTimeSec', 'set', 'GAME\x20JS\x202023\x20BY\x20SWYKZ', 'visible', 'âŒ\x20Cerrado', '#popup-login-fb', 'aliases', 'includes', 'O3VuaWZvcm0gdmVjMiA=', '#settings-laserHS-switch', 'cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg', 'https://asserts.wormworld.io/backgrounds/bkgnd8.png', '#modalPuertas', 'Sky\x20Blue', 'find', 'day', 'replaceWith', 'beforeend', '/images/bg-pattern-pow2-ARENA.png', 'id_game', 'server_url', 'data-opacity', '<span\x20class=\x22settings-label\x22>', '#ffffff', '#settings5dolars', 'stateObject', 'msRequestFullscreen', 'keyMove', '#stretch-box', 'minimapBorderColorGroup', 'premium', 'backgroundPreview', 'anisotropicLevel', 'innerRadius', 'http://www.w3.org/2000/svg', 'Peru', 'soundTuto1', '/images/bg-obstacle.png', 'Distance:', 'ðŸ—‘ï¸\x20Textura\x20destruida\x20por\x20estado\x20invÃ¡lido:\x20', '#preview_teamColor', 'URL\x20decodificada:', 'click', '<div\x20id=\x22', 'wssServer', '#toaster-stack', 'wormExplot', 'ZOOM\x20SPEED', '/deleteAccount', '#clossed_Setings', '#delete-account-view', 'isConsentGiven', '?????\x20??????', 'game', 'while\x20(true)\x20{}', '<option\x20value=\x228\x22>', '#store-buy-coins_1250', 'iSI:\x20', 'TEAM_DEFAULT', 'sectores', 'coins_16000', '<option\x20value=\x228\x22>8</option>', '#markup-header', '\x22\x20\x20\x20\x20style=\x22margin-left:\x20100px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>', 'KnZlYzMo', '_alreadyScaledWormTextures', 'nombre2', 'facebook', '<label\x20for=\x22toggleTop8\x22>Show\x20Top\x208</label>', 'data-con', '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Zoom</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22zoom-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Replay</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22restart-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Explote</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22wormExplot-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>LaserHS</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22laserHSkey-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Sectors</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22sectores-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Background</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22background-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Giro</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22giro-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>No\x20Skins</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22noSkin-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>No\x20Auras</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22noAuras-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'isIPInEEA', 'Kg==', 'Disable\x20Sound', 'null', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x2050px;\x20background-color:\x20#f44336;\x20color:\x20#ffffff;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>No\x20robes\x20el\x20cï¿½digo,\x20ladrï¿½n.</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Don\x27t\x20steal\x20the\x20code,\x20thief.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Kod\x20ï¿½almasini\x20yapma,\x20hirsiz.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', '<span\x20class=\x22names_settings\x22\x20id=\x22sectores\x22>\x20', 'Mensaje\x20enviado\x20por\x20', 'selectedFont', 'Australia', '<option\x20value=\x227\x22>', '#settings-backgroundSolid-switch', 'https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3', '#hotkeys-icon', '#user-icon', 'https://i.imgur.com/UKIZZmr.png', 'sin-d.wormate.io', 'setAttribute', '.key-input', 'div', 'colorJuego', 'Load\x20GM:\x20', '<option\x20value=\x229\x22>9</option>', 'a1_', 'substr', '<span\x20id=\x22zw-settings-version\x22\x20class=\x22settings-line\x22></span>', '\x27Times\x20New\x20Roman\x27,\x20serif', '.servers-', 'white', 'glassesVariantArray', 'name', '\x22\x20max=\x22', 'index.game.toaster.consent.iAccept', 'table', 'log', '{2}', '#mm-action-play', '#tooltipKillFeed', 'source', '#noSkin-key', 'index.game.popup.menu.profile.tab', 'Canada', 'Estado\x20inicial\x20recibido:', 'green', '\x22\x20class=\x22toaster\x20toaster-coins\x22>\x20\x20\x20\x20<img\x20class=\x22toaster-coins-img\x22\x20alt=\x22Wormate\x20Coin\x22\x20src=\x22/images/coin_320.png\x22\x20/>\x20\x20\x20\x20<div\x20class=\x22toaster-coins-val\x22>+', 'Verdana,\x20sans-serif', '<span\x20id=\x22help-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22help-menu\x22>help_outline</span>', 'StatusColor', 'iterator', '&skinId=', 'g.o', '#wear-locked-bar', 'mouthDict', 'showAnimationHeadshot', 'https://asserts.wormworld.io/backgrounds/bg_sky_2.png', '#settings-sfx-enabled-switch', 'done', 'containerImgTest', 'Granbretana', ')\x20del\x20equipo\x20', '#mm-coins-box', 'Mexico', 'update', 'hitArea', 'expOnLevel', 'pointsContainer', 'avatarUrl', 'https://asserts.wormworld.io/backgrounds/bg_sky_1.png', 'level', 'fondo2', 'https://i.imgur.com/iqKabEA.png', 'fra-d.wormate.io', 'currentTime', 'action', '#wear-item-price', '(((.+)+)+)+$', 'index.game.popup.menu.consent.tab', '#ff0999', '//connect.facebook.net/', 'insertAdjacentHTML', 'https://asserts.wormworld.io/backgrounds/bkgnd11.png', 'host', 'pageX', 'BOTTOM', 'hil-a.wormate.io', 'teams', 'relativePath', 'SW50', '#mm-action-buttons', 'canvastext', 'https://i.imgur.com/4ccZ556.png', 'FLEXIBLE_TYPE', 'ComidaSize', 'https://asserts.wormworld.io/backgrounds/bkgnd6.png', '#profile-experience-bar', 'file', 'Servidor\x20', 'QURE', 'expToNext', 'onerror', 'mipmap', 'https://i.imgur.com/Hg3sKn0.png', 'players', '#store-buy-button', 'absolute', '.loading-logo', ';\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-name\x22\x20>', '281TCnpIk', 'gg_107696732696574095850', '<canvas\x20id=\x22background-canvas\x22></canvas>', 'comidax10', '..\x204\x20..', 'region', 'server', '#store-groups', 'padEnd', 'ActiveEmoji', 'popup', 'opacity', '<option\x20value=\x224\x22>', 'loading-screen', 'mm-params-nickname', 'ID:\x20', 'start\x20pSC:\x20', '__proto__', 'fromCharCode', '#zw-settings-id', '.dropdown-item.selecionar-sala-v2', 'index.game.result.place.i', '#store-go-wear-button', '<input\x20id=\x22', '<li\x20style=\x22margin-top:10px;\x22>', ';\x22\x20onclick=\x22openColorPanel(\x27', 'charAt', '#profile-avatar', '\x20recibido\x20por\x20el\x20jugador\x20', '<select\x20id=\x22arkaplan\x22>', '<option\x20value=\x223\x22>3</option>', 'join', '300', 'comiste\x20otro\x20potenciador', 'userAgent', 'FOOD\x20SHADOW', 'toLocal', 'step', 'zoom', 'fontStyle', 'revision', 'auth2', 'adplayer', 'longitude', 'contains', 'nickname:\x20', 'backgroundColor', '<i\x20class=\x22material-icons\x22>settings</i>', 'replace', 'angle', 'disposing\x20prev\x20texture:\x20', 'Error\x20al\x20construir\x20la\x20URL\x20del\x20script\x20', 'hex', '<div>', 'O2dsX1Bvc2l0aW9uPXZlYzQoKA==', 'toUTCString', 'Sky\x20Orange', '<span\x20class=\x22tooltip\x22\x20id=\x22tooltipTop8\x22\x20style=\x22display:\x20none;\x22>If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20the\x20top\x208\x20players.</span>', 'svg', '<option\x20value=\x226\x22>', '#nombreServidor', 'script', '.v6', '#51a913', 'aipAABC', '#adbl-continue', 'reload', 'https://swykz.theoxt.com/api/users/register_update_player.php', 'Web\x20SQL\x20no\x20se\x20puede\x20eliminar\x20automÃ¡ticamente\x20desde\x20JavaScript.', '#final-continue', 'fondo4', 'miniclip', 'addClass', 'booster\x20width', 'WRAP_MODES', 'no-', 'console', 'success', '?????????', 'cacheId', 'load', 'Sky\x20Write', 'onDragEnd', '\x20ms</strong>', '\x22\x20alt=\x22User\x20Icon\x22\x20style=\x22width:\x2020px;\x20height:\x2020px;\x20margin-right:\x205px;\x20border-radius:\x2050%;\x22>', 'food\x20shine', 'Conectado\x20al\x20servidor\x20WebSocket', '<i\x20class=\x22material-icons\x22>fullscreen</i>', 'chngPersonsSkins', '0000', '#0094D7', 'BOTTOM_RIGHT', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22settings-menu\x22\x20style=\x22display:\x20flex;\x20opacity:\x200;\x20z-index:\x202;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22navigation\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x20active\x22\x20category=\x22profile\x22\x20\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>person</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Profile</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22game\x22\x20\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>games</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Game</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22theme\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>palette</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Theme</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20id=\x22button-inputs\x22\x20data-toggle=\x22modal\x22\x20data-target=\x22#hotkeysModal\x22\x20category=\x22controls\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>keyboard</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Controls</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22cursor\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>mouse</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Cursor</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22sound\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>volume_up</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Sound</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20ðŸ†\x20Nueva\x20pestaÃ±a:\x20Equipos\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22teams\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>group</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Teams</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20ðŸŽ¨\x20Nueva\x20pestaÃ±a:\x20Skins\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22skins\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>brush</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Skins</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20ðŸŽ¨\x20Nueva\x20pestaÃ±a:\x20Stremers\x20\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22streamers\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>live_tv</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Live</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22options-list\x20ps\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22game\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>SELECT\x20BACKGROUND</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22prevBackground\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeBackground(-1)\x22>â®</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22backgroundPreview\x22\x20class=\x22background-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22nextBackground\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeBackground(1)\x22>â¯</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>SELECT\x20FONT\x20IN\x20GAME</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22prevFont\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeFont(-1)\x22>â®</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22fontPreview\x22\x20class=\x22font-preview\x22>AaBbCc</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22nextFont\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeFont(1)\x22>â¯</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22theme\x22\x20class=\x22\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22controls\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-container\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22profile\x22\x20class=\x22active\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Imagen\x20de\x20perfil\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-picture\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/gUysDha.png\x22\x20id=\x22avatarUrl\x22\x20alt=\x22Profile\x20Picture\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Datos\x20del\x20usuario\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>User\x20Profile</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--p><strong>Nombre:</strong>\x20<span\x20id=\x22username\x22>Usuario</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Email:</strong>\x20<span\x20id=\x22useremail\x22>usuario@email.com</span></p-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Contenedor\x20del\x20ID\x20con\x20botÃ³n\x20para\x20copiar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-id-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22idperfil\x22>ID:\x20<span\x20id=\x22userid\x22></span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22idcopiar\x22\x20class=\x22copy-button\x22>Copy\x20ID</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22resetScript\x22\x20class=\x22reset-button\x22>Change\x20Version</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22cursor\x22\x20class=\x22\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22sound\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Contenedor\x20de\x20enlaces\x20con\x20botones\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-inputs\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>', 'index.game.antiadblocker.msg2', 'gdprConsent', '\x22\x20style=\x22background-color:\x20', 'settings', 'download\x20sounds', '(orientation:\x20portrait)', 'OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t', 'colorBorde', 'border\x20color', '.toaster-coins-close', '\x22\x20style=\x22display:\x20', '<option\x20value=\x222\x22>2</option>', 'eat_animation', '#mm-store', 'clipboard', 'js$2', '#tooltipTop8', 'gray', 'If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20kills\x20in\x20real\x20time.', 'trace', '100%\x20100%', 'zIndex', '#mm-action-play,\x20#zwplayagain,\x20#final-replay', 'FF0000', '.Worm_cerca', 'defer', 'coins_3250', 'ptc', '#store-go-coins-button', '#mm-action-login', 'Container', 'documentElement', 'symbol', 'charCodeAt', 'Desconectado\x20del\x20servidor\x20WebSocket', 'skinArrayDict', 'nonbuyable', 'aHR0cHM6Ly96d29ybWV4dGVuc3Rpb24uY29tL3dvcm1FeHRlbnNpb24vZ2FtZS5qcw==', 'ðŸ› ï¸\x20ResoluciÃ³n\x20ajustada\x20(', 'scrollHeight', 'regDate', '#FFFFFF', 'get', 'initialState', 'code', 'animationHeadshot', 'connected', '.wormate.io', 'dxb-a.wormate.io', 'atan2', 'chngBotSkins', 'visibleSkin', 'distance', '.option.toggle[data-option=\x27laserHS\x27]\x20.box', '__extends', 'consent_state_2', 'u5_', 'beginFill', '#leaders-button-highscore', 'xxx10', 'append', 'V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==', 'index.game.popup.menu.store.tab', 'addTest', 'aipAABS', 'main', 'isSkinCustom', 'text/css', 'authResponse', 'regionDict', 'restart', 'TOP_RIGHT', '#profile-stat-kills', '2NA==', '#store-locked-bar-text', 'Recibiendo\x20el\x20color\x20reemplazado\x20para\x20', 'teamColorGroup', 'background-key', 'async', 'client_ID', 'active', '<option\x20value=\x2212\x22>', '/wormy', 'https://i.imgur.com/ZFifUoX.png', 'SIZE\x20FOOD', 'false', '110px', 'gsi:c', 'getElementsByTagName', 'Score', 'openDatabase', '\x22\x20class=\x22streamer-image\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-check-ports\x22>ðŸ“¡ðŸ“¶</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#wear-view', '<option\x20value=\x2211\x22>', '\x20coincide\x20con\x20un\x20ID\x20almacenado\x20en\x20la\x20base\x20de\x20datos.', 'catch', '#00FF00', 'data-wss', '#idcopiar', '\x22><img\x20src=\x22data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\x22><span>', '<option\x20value=\x221\x22>', 'touches', 'none', 'aipC', 'true', 'UElYSQ==', '<input\x20type=\x22checkbox\x22\x20id=\x22settings-laserHS-switch\x22>', '#chat-input', 'fail', 'devicePixelRatio', '#markup-footer', '.ui-tab', 'Error\x20fetching\x20server\x20data:', 'a2_', '_text', 'index.game.antiadblocker.continue', 'showTeamList', 'save\x20sPN:\x20', '#background-canvas', '.pwrups', '<input\x20type=\x22checkbox\x22\x20id=\x22settings-Speed_ZigZag-switch\x22>', 'toLowerCase', '#f97a1d', 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css', '<img>', 'index.game.toaster.consent.text', 'SkinVisible(???\x20???????)', 'keys', 'imgSrc', '<a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', 'https://asserts.wormworld.io/backgrounds/arena04.png', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22server-table\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>On/Off</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Name</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>RegiÃ³n</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Top\x201</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Streamer</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Doors</th>\x20<!--\x20Nueva\x20columna\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'class', 'default', 'height', 'Top\x201\x20actualizado:', 'remove', 'progress-bar', 'addAttribute', '#profile-stat-headshots', 'keyCode', '<div\x20class=\x22option\x20colorpicker\x22>', '#unl6wj4czdl84o9b', 'sortableChildren', 'websockets', 'location', 'QmFzZVRleHR1cmU=', 'glassesId', 'locale', '&hatId=', 'Loading...', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'U3ByaXRl', 'https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3', '27XoTkQc', 'index.game.popup.menu.leaders.tab', 'style', 'wss://zworm.xyz:9800', '---', '#settings-notAbilityAll-switch', '<option\x20value=\x221\x22>1</option>', 'sin-e.wormate.io', '.option.toggle[data-option=\x27backgroundSolid\x27]\x20.box', '#popup-view', 'onOpen', 'data-option', 'fondo1', 'size\x20of\x20food', 'Arena\x204', 'https://deltav4.gitlab.io/v7/assets/cursors/cursor_', '.options-list\x20>\x20div[category=\x22game\x22]', 'size', '0D0400', 'aipS', 'Socket\x20opened', 'index.game.toaster.continue', 'trim', 'Blue\x20Light', 'after', 'JDHnkHtYwyXyVgG9', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22sound-button\x22\x20onclick=\x22window.open(\x27https://catbox.moe/\x27,\x20\x27_blank\x27)\x22>Go\x20to\x20Sound\x20Tutorial\x202</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>', 'linear', '/consent/change?value=', 'event', 'currentUser', '\x22\x20step=\x22', 'eyesUnknown', '<span\x20class=\x22settings-label\x22>You\x20Color\x20Map:\x20</span>', 'inner', 'rotate-gif', 'test', '<span\x20class=\x22names_settings\x22\x20id=\x22colorLaser\x22>\x20', '#popup-withdraw-consent', '<input\x20type=\x22checkbox\x22\x20id=\x22settings-notAbilityAll-switch\x22>', 'La\x20fecha\x20de\x20expiraciï¿½n\x20ha\x20vencido.', 'GAME', '\x0a\x20\x20\x20\x20<div\x20id=\x22premium-panel\x22\x20style=\x22box-shadow:\x20rgba(0,\x200,\x200,\x200.5)\x200px\x201px\x201px\x200px;\x20background-color:\x20transparent;\x20border-radius:\x208px;\x20padding:\x2020px;\x20text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:\x20#fff;\x22>Get\x20the\x20Premium\x20Version!</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#f9f9f9;\x22>Access\x20exclusive\x20benefits\x20by\x20purchasing\x20the\x20premium\x20version.\x20Dedicated\x20support,\x20more\x20options,\x20and\x20much\x20more.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#fff;\x20font-weight:\x20bold;\x22>Advertise\x20with\x20more\x20visibility\x20and\x20reach\x20more\x20customers!</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Button\x20to\x20redirect\x20to\x20Discord\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22buy-premium\x22\x20style=\x22background-color:\x20#7289da;\x20color:\x20white;\x20padding:\x2010px\x2020px;\x20border:\x20none;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Buy\x20on\x20Discord\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'background-position', '#final-message', '<option\x20value=\x2213\x22>', '#store-buy-coins_7000', '#profile-stat-bestSurvivalTime', '#adbl-continue\x20span', '#settings-sectores-switch', 'attach', '\x22\x20value=\x22', 'https://i.imgur.com/VPkrI9l.png', '<option\x20value=\x226\x22>6</option>', 'shadowBlur', 'Blue\x20Black', 'sound\x20link\x20head', '.servers-germania', 'removeChild', '<div><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22\x20x=\x220\x22\x20y=\x220\x22\x20viewBox=\x220\x200\x20456\x20456\x22\x20xml:space=\x22preserve\x22><rect\x20x=\x220\x22\x20y=\x220\x22\x20width=\x22456\x22\x20height=\x22456\x22\x20fill=\x22#F7941D\x22/><path\x20d=\x22M242.7\x20456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9\x2035.6-79.5\x2079.5-79.5h62v64.6h-44.4c-13.9\x200-25.3\x2011.3-25.3\x2025.3v50h68.5l-9.5\x2071.9h-59.1V456z\x22\x20fill=\x22#fff\x22/></svg><span>', 'playerY', 'sort', ';\x20path=/', '{0}', 'attr', 'nickname', 'destroy', '\x27Trebuchet\x20MS\x27,\x20sans-serif', 'testSkinMod', 'setInt8', '\x20ðŸŒŽ)', 'search', 'create', 'touchend', 'O3VuaWZvcm0gdmVjNCA=', 'bindEvents', 'titleRec2', 'ancho\x20del\x20potenciador', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'byHighScore', '#popup-delete-account-container', 'input', 'GLASSES', 'borderColorGroup', 'fb_', ')...\x0a', 'fondo\x20Solido', 'chain', 'âœ…\x20OptimizaciÃ³n\x20completa:\x20', 'chatMessage', '\x27Courier\x20New\x27,\x20monospace', '<span\x20id=\x22user-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22user-menu\x22>account_circle</span>', '#preview_', 'onDragStart', 'MINIMAP\x20BORDER', 'containerHsRec3', 'tuNewScore', 'https://discord.gg/sJ5R95Rc6Z', 'aradian', 'pop', 'ajax', 'headShots', 'turn\x20up\x20sound', 'preventDefault', 'username', 'Premium', 'Error\x20al\x20obtener\x20los\x20datos:', '#FF4500', '.servers-mexico', 'ODYxOTI2ODUwNjE5MDUx', '0xFFFFFF', 'Enable\x20Sound', 'hypot', 'swing', 'Q29udGFpbmVy', '???????', '#skins-view', '#mm-skin-next', 'duration', 'teamNickname', '</div>\x20\x20\x20\x20<div\x20class=\x22toaster-levelup-text\x22>', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fill\x22\x20style=\x22width:\x20', 'playerUpdate', 'html', '.cur', 'X_x2', 'ðŸ”„\x20Testing\x20...', 'anchor', 'mouthId', '<span\x20id=\x22settings-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22settings-menu\x22>settings</span>', '\x20â˜ ï¸', 'FFFFFF', 'eyesDict', 'power\x20up\x20glow', '#game-view', 'Nflex', '#mm-zw-settings', 'Zoom\x20Velocidad', 'O3VuaWZvcm0gbWF0MyA=', 'team_2', 'https://zwormextenstion.com/wormExtension/api/clients.php?v=', '#wear-view-next', 'lineTo', 'max', '0\x201px\x201px\x200\x20rgba(0,0,0,.5)', 'account_type', 'containerHsRec2', '#chatInput', '.servers-singapur', '.servers-peru', 'xXx10', '#mm-skin-over-button-list', 'Enter', 'xXxLupaZ', 'noAuras-key', 'An\x20error\x20occurred\x20while\x20loading\x20clients', '[Zworm\x20OWNER]', 'SHOW\x20TOP\x20HS', '.servers-eeuu', 'apply', '425888XdefGA', '.\x20\x20', 'https://asserts.wormworld.io/backgrounds/arena02.png', 'getCurrentPosition', 'Revisando\x20script\x20', 'serviceWorker', 'No\x20hay\x20streamers\x20online.', 'hsTextColorGroup', '#connectButton', '..\x205\x20..', '.v2', '/pub/wuid/', '#settings-Speed_ZigZag-switch', 'assign', 'spawnInfinity', 'minicolors', 'hover', 'origin', 'index.game.result.title', 'nombres2', 'createElementNS', 'SMOOTH\x20CAMERA', '</span>\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22toaster-consent-accepted-link\x22\x20href=\x22/privacy-policy\x22>', 'emoji', 'cmd', 'PropertyManager', 'prime', '#idkopyala', '?????\x20????', '\x20at\x20', 'tabindex', '..\x202\x20..', '#ADFF2F', 'Text', '</select>', 'speed_zigzag', 'value', 'HAT', 'zoom-key', 'Top\x20HS\x20(ðŸ‘‘)', 'then', 'flex', 'getGlobalPosition', 'MAGNETIC_TYPE', 'Puerto\x20no\x20vÃ¡lido', '&mouthId=', '#showTeamList', 'consented', 'lineStyle', 'O3ZhcnlpbmcgdmVjMiA=', '#leaders-view', 'SaveGameXT', 'O3VuaWZvcm0gc2FtcGxlcjJEIA==', 'WHITE', 'uk_UA', 'endFill', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20id=\x22', 'aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==', '#mm-player-avatar', '%):\x20', 'sin-b.wormate.io', 'El\x20ID\x20', 'urlRequest:\x20', 'YOUR\x20COLOR\x20IN\x20MAP', 'getAttribute', '<ul></ul>', 'cHJvamVjdGlvbk1hdHJpeA==', 'ltmolilci1iurq1i', 'Fondo\x20cargado\x20desde\x20almacenamiento:', '#settings-show-names-switch', 'fra-b.wormate.io', 'index.game.result.tryHit', 'TIMER\x20SPEED\x20AND\x20ZIGZAG', 'userId', 'Desconocido', 'canvas', '<i\x20class=\x22material-icons\x22\x20\x20id=\x22user_config\x22\x20style=\x22position:\x20absolute;background-color:\x20transparent;border-radius:\x205px;\x22>menu</i>', 'fondos', '3.3.1', '..\x208\x20..', '#profile-stat-gamesPlayed', 'killFeed', '_request', '#toggleKillFeed', '#sound-hs', 'css', 'https://zwormextenstion.com/wormExtension/api/skins.php', 'https://i.imgur.com/aOyOob6.png', '<input\x20type=\x22text\x22\x20id=\x22teamCodeInput\x22\x20placeholder=\x22Enter\x20team\x20code\x22\x20/>', '<div\x20id=\x22help-menu\x22\x20class=\x22menu\x22>Ayuda\x20y\x20soporte</div>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20', 'closest', 'black', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'HTTP\x20error!\x20Status:\x20', '.options-list\x20>\x20div[category=\x22theme\x22]', 'list', 'pointerId', '.toaster-levelup-close', 'xxxLupatype', '#FF4544', 'textureDict', '#FFFF00', '<div\x20style=\x22border-color:', 'aload', 'serverName', 'sin-i.wormate.io', 'gsi:e:\x20', 'application/json', 'hsKillUpdate', 'toUpperCase', 'toast-info', 'top8'];
    _0x5a74 = function() {
        return _0x14a6a7;
    };
    return _0x5a74();
}
loadStylesheet(_0x4790ef(0x861)), loadScript2(_0x4790ef(0x336), !![]), loadStylesheet(_0x4790ef(0x749)), loadScript2(_0x4790ef(0x7e0)), loadScript2(_0x4790ef(0x6ef)), loadStylesheet(_0x4790ef(0x556)), _0x4790ef(0x2a1);
var _typeof = 'function' == typeof Symbol && _0x4790ef(0x4fb) == typeof Symbol[_0x4790ef(0x443)] ? function(_0x175052) {
        return typeof _0x175052;
    } : function(_0x323b09) {
        var _0x5a23ec = _0x4790ef;
        return _0x323b09 && _0x5a23ec(0x7a0) == typeof Symbol && _0x323b09[_0x5a23ec(0x6fe)] === Symbol && _0x323b09 !== Symbol[_0x5a23ec(0x6f4)] ? _0x5a23ec(0x4fb) : typeof _0x323b09;
    },
    GoogleAuth;
!(function() {
    var _0x46bbfd = _0x4790ef;
    try {
        console[_0x46bbfd(0x435)](function(_0xa19674, _0xb1747a) {
            var _0x29d237 = _0x46bbfd;
            for (var _0x2eccf2 = 0x0; _0x2eccf2 < _0xb1747a[_0x29d237(0x30a)]; _0x2eccf2 += 0x2) _0xa19674 = _0xa19674[_0x29d237(0x836)](_0xb1747a[_0x2eccf2], _0xb1747a[_0x2eccf2 + 0x1]);
            return _0xa19674;
        }(_0x46bbfd(0x6fd), ['W', 'hhhh', 'Q', _0x46bbfd(0x396), 'M', _0x46bbfd(0x321), 'Y', 'yyy', 'H', 'hh', 'S', 'ss', '6', '\x20\x20\x20\x20\x20\x20', '3', _0x46bbfd(0x1e6), '2', '\x20\x20', 'N', '\x0a']));
    } catch (_0x255074) {}
}()), window['addEventListener'](_0x4790ef(0x4ce), function() {
    var _0x368ee6 = _0x4790ef;

    function _0x82081f() {
        var _0x308ffb = _0x47fe;
        return function(_0x3b7a2f, _0x4bc533, _0x31b18d) {
            var _0x389007 = _0x47fe;

            function _0x3ccda5(_0x45a4b4, _0x54e45b) {
                return (void 0x0 === _0x45a4b4 ? 'undefined' : _typeof(_0x45a4b4)) === _0x54e45b;
            }

            function _0x43ab08() {
                var _0x220978 = _0x47fe;
                return 'function' != typeof _0x4bc533[_0x220978(0x76b)] ? _0x4bc533[_0x220978(0x76b)](arguments[0x0]) : _0x25b470 ? _0x4bc533[_0x220978(0x629)][_0x220978(0x371)](_0x4bc533, _0x220978(0x3ef), arguments[0x0]) : _0x4bc533['createElement'][_0x220978(0x614)](_0x4bc533, arguments);
            }
            var _0x3b70ba = [],
                _0x4ecf8d = [],
                _0x5e223e = {
                    '_version': _0x389007(0x663),
                    '_config': {
                        'classPrefix': '',
                        'enableClasses': !0x0,
                        'enableJSClass': !0x0,
                        'usePrefixes': !0x0
                    },
                    '_q': [],
                    'on': function(_0x5e4542, _0x21c8a9) {
                        var _0x469697 = this;
                        setTimeout(function() {
                            _0x21c8a9(_0x469697[_0x5e4542]);
                        }, 0x0);
                    },
                    'addTest': function(_0x465f31, _0x16f804, _0x2c49de) {
                        _0x4ecf8d['push']({
                            'name': _0x465f31,
                            'fn': _0x16f804,
                            'options': _0x2c49de
                        });
                    },
                    'addAsyncTest': function(_0x54923f) {
                        var _0xee2dfd = _0x389007;
                        _0x4ecf8d[_0xee2dfd(0x236)]({
                            'name': null,
                            'fn': _0x54923f
                        });
                    }
                },
                _0x21471e = function() {};
            _0x21471e['prototype'] = _0x5e223e, _0x21471e = new _0x21471e();
            var _0x50e4fd = !0x1;
            try {
                _0x50e4fd = _0x389007(0x75b) in _0x3b7a2f && 0x2 === _0x3b7a2f['WebSocket'][_0x389007(0x84a)];
            } catch (_0x39d61d) {}
            _0x21471e['addTest'](_0x389007(0x56b), _0x50e4fd);
            var _0x5b0da1 = _0x4bc533[_0x389007(0x4fa)],
                _0x25b470 = _0x389007(0x4b8) === _0x5b0da1[_0x389007(0x312)][_0x389007(0x554)]();
            _0x21471e[_0x389007(0x51a)](_0x389007(0x660), function() {
                    var _0x12e424 = _0x389007,
                        _0x939a7 = _0x43ab08('canvas');
                    return !(!_0x939a7[_0x12e424(0x219)] || !_0x939a7[_0x12e424(0x219)]('2d'));
                }), _0x21471e['addTest'](_0x389007(0x46c), function() {
                    var _0x1eec0b = _0x389007;
                    return !0x1 !== _0x21471e[_0x1eec0b(0x660)] && _0x1eec0b(0x7a0) == typeof _0x43ab08('canvas')[_0x1eec0b(0x219)]('2d')[_0x1eec0b(0x6b4)];
                }), (function() {
                    var _0x56602c = _0x389007,
                        _0x575aba, _0x3d3d39, _0x26d8cb, _0x28ecb0, _0x33da8a, _0x31f48f, _0x12d7de;
                    for (var _0x5ea9e4 in _0x4ecf8d)
                        if (_0x4ecf8d['hasOwnProperty'](_0x5ea9e4)) {
                            if (_0x575aba = [], _0x3d3d39 = _0x4ecf8d[_0x5ea9e4], _0x3d3d39[_0x56602c(0x431)] && (_0x575aba[_0x56602c(0x236)](_0x3d3d39[_0x56602c(0x431)][_0x56602c(0x554)]()), _0x3d3d39[_0x56602c(0x777)] && _0x3d3d39[_0x56602c(0x777)][_0x56602c(0x3d3)] && _0x3d3d39[_0x56602c(0x777)]['aliases']['length'])) {
                                for (_0x26d8cb = 0x0; _0x26d8cb < _0x3d3d39[_0x56602c(0x777)]['aliases']['length']; _0x26d8cb++) _0x575aba[_0x56602c(0x236)](_0x3d3d39[_0x56602c(0x777)]['aliases'][_0x26d8cb][_0x56602c(0x554)]());
                            }
                            for (_0x28ecb0 = _0x3ccda5(_0x3d3d39['fn'], 'function') ? _0x3d3d39['fn']() : _0x3d3d39['fn'], _0x33da8a = 0x0; _0x33da8a < _0x575aba[_0x56602c(0x30a)]; _0x33da8a++) _0x31f48f = _0x575aba[_0x33da8a], _0x12d7de = _0x31f48f[_0x56602c(0x6b6)]('.'), 0x1 === _0x12d7de[_0x56602c(0x30a)] ? _0x21471e[_0x12d7de[0x0]] = _0x28ecb0 : (!_0x21471e[_0x12d7de[0x0]] || _0x21471e[_0x12d7de[0x0]] instanceof Boolean || (_0x21471e[_0x12d7de[0x0]] = new Boolean(_0x21471e[_0x12d7de[0x0]])), _0x21471e[_0x12d7de[0x0]][_0x12d7de[0x1]] = _0x28ecb0), _0x3b70ba['push']((_0x28ecb0 ? '' : _0x56602c(0x4c9)) + _0x12d7de['join']('-'));
                        }
                }()),
                function(_0x10d112) {
                    var _0x33b656 = _0x389007,
                        _0x20ef5b = _0x5b0da1[_0x33b656(0x28c)],
                        _0x53e721 = _0x21471e[_0x33b656(0x299)][_0x33b656(0x79a)] || '';
                    if (_0x25b470 && (_0x20ef5b = _0x20ef5b[_0x33b656(0x6cd)]), _0x21471e[_0x33b656(0x299)][_0x33b656(0x6a1)]) {
                        var _0x419914 = new RegExp(_0x33b656(0x252) + _0x53e721 + _0x33b656(0x211));
                        _0x20ef5b = _0x20ef5b[_0x33b656(0x4ae)](_0x419914, '$1' + _0x53e721 + _0x33b656(0x4ea));
                    }
                    _0x21471e['_config'][_0x33b656(0x7ee)] && (_0x20ef5b += '\x20' + _0x53e721 + _0x10d112[_0x33b656(0x49d)]('\x20' + _0x53e721), _0x25b470 ? _0x5b0da1['className'][_0x33b656(0x6cd)] = _0x20ef5b : _0x5b0da1[_0x33b656(0x28c)] = _0x20ef5b);
                }(_0x3b70ba), delete _0x5e223e[_0x389007(0x51a)], delete _0x5e223e[_0x389007(0x2d8)];
            for (var _0x5b4231 = 0x0; _0x5b4231 < _0x21471e['_q'][_0x389007(0x30a)]; _0x5b4231++) _0x21471e['_q'][_0x5b4231]();
            _0x3b7a2f['Modernizr'] = _0x21471e;
        }(window, document), Modernizr[_0x308ffb(0x56b)] && Modernizr[_0x308ffb(0x660)] && Modernizr[_0x308ffb(0x46c)];
    }
    if (document['getElementById'](_0x368ee6(0x2a5))[_0x368ee6(0x577)][_0x368ee6(0x7a3)] = _0x368ee6(0x27b), !_0x82081f()) return void(document[_0x368ee6(0x706)](_0x368ee6(0x32f))['style'][_0x368ee6(0x7a3)] = 'block');
    !(function() {
        var _0xde0f64 = _0x368ee6;

        function _0x3b8490() {
            return window['anApp'] = _0xe6a4c3;
        }

        function _0x424d02(_0xf64120) {
            var _0x2d27ec = _0x47fe;
            const _0x4cf2be = _0xf64120 + '=',
                _0x49753c = document[_0x2d27ec(0x7f1)][_0x2d27ec(0x6b6)](';');
            for (let _0xa13688 = 0x0; _0xa13688 < _0x49753c['length']; _0xa13688++) {
                let _0x20369a = _0x49753c[_0xa13688];
                while (_0x20369a[_0x2d27ec(0x498)](0x0) === '\x20') {
                    _0x20369a = _0x20369a[_0x2d27ec(0x78f)](0x1);
                }
                if (_0x20369a[_0x2d27ec(0x6cb)](_0x4cf2be) === 0x0) return _0x20369a[_0x2d27ec(0x78f)](_0x4cf2be['length'], _0x20369a[_0x2d27ec(0x30a)]);
            }
            return '';
        }

        function _0x28ae7f(_0x38b7ba, _0x450794, _0xc6dc5f) {
            var _0x264004 = _0x47fe,
                _0x52f6a9 = new Date();
            _0x52f6a9[_0x264004(0x3a9)](_0x52f6a9[_0x264004(0x35c)]() + 0x5265c00 * _0xc6dc5f);
            var _0x38483b = 'expires=' + _0x52f6a9[_0x264004(0x4b5)]();
            document[_0x264004(0x7f1)] = _0x38b7ba + '=' + _0x450794 + ';\x20' + _0x38483b + _0x264004(0x5b3);
        }

        function _0x34e632(_0x399807) {
            return window['I18N_MESSAGES'][_0x399807];
        }

        function _0x5080eb(_0x156e2a) {
            return _0x156e2a[_0x2c7f6a] ? _0x156e2a[_0x2c7f6a] : _0x156e2a['en'] ? _0x156e2a['en'] : _0x156e2a['x'];
        }

        function _0x24d3fb(_0x3bac8a) {
            var _0x542024 = _0x47fe,
                _0x4adcd4 = (Math[_0x542024(0x391)](_0x3bac8a) % 0x3c)[_0x542024(0x696)](),
                _0x17bf0a = (Math[_0x542024(0x391)](_0x3bac8a / 0x3c) % 0x3c)[_0x542024(0x696)](),
                _0x8900e6 = (Math['floor'](_0x3bac8a / 0xe10) % 0x18)[_0x542024(0x696)](),
                _0x59d9c3 = Math['floor'](_0x3bac8a / 0x15180)[_0x542024(0x696)](),
                _0xbf3667 = _0x34e632(_0x542024(0x7e9)),
                _0x30e1cb = _0x34e632(_0x542024(0x2cf)),
                _0x473e53 = _0x34e632(_0x542024(0x816)),
                _0x33f4e3 = _0x34e632(_0x542024(0x6c4));
            return _0x59d9c3 > 0x0 ? _0x59d9c3 + '\x20' + _0xbf3667 + '\x20' + _0x8900e6 + '\x20' + _0x30e1cb + '\x20' + _0x17bf0a + '\x20' + _0x473e53 + '\x20' + _0x4adcd4 + '\x20' + _0x33f4e3 : _0x8900e6 > 0x0 ? _0x8900e6 + '\x20' + _0x30e1cb + '\x20' + _0x17bf0a + '\x20' + _0x473e53 + '\x20' + _0x4adcd4 + '\x20' + _0x33f4e3 : _0x17bf0a > 0x0 ? _0x17bf0a + '\x20' + _0x473e53 + '\x20' + _0x4adcd4 + '\x20' + _0x33f4e3 : _0x4adcd4 + '\x20' + _0x33f4e3;
        }

        function _0x277c18(_0x4081ba) {
            var _0x37f4ad = _0x47fe;
            return _0x4081ba[_0x37f4ad(0x3d4)](_0x37f4ad(0x1fa)) ? _0x4081ba['replaceAll'](_0x37f4ad(0x1fa), _0x37f4ad(0x6f6)) : _0x4081ba;
        }

        function _0x5dd43c(_0x1c34ba, _0x3be08c, _0x5a596b) {
            var _0x5b2d7e = _0x47fe,
                _0x158081 = document[_0x5b2d7e(0x76b)](_0x5b2d7e(0x4bb)),
                _0x2a9ac4 = !0x0;
            _0x3be08c && (_0x158081['id'] = _0x3be08c), _0x158081[_0x5b2d7e(0x529)] = _0x5b2d7e(0x529), _0x158081[_0x5b2d7e(0x767)] = _0x5b2d7e(0x7f9), _0x158081[_0x5b2d7e(0x68e)] = _0x1c34ba, _0x5a596b && (_0x158081[_0x5b2d7e(0x2b0)] = _0x158081[_0x5b2d7e(0x71c)] = function() {
                var _0x451633 = _0x5b2d7e;
                _0x2a9ac4 = !0x1;
                try {
                    _0x5a596b();
                } catch (_0x1dcbc3) {
                    console['log'](_0x1dcbc3);
                }
                _0x158081[_0x451633(0x2b0)] = _0x158081[_0x451633(0x71c)] = null;
            }), (document[_0x5b2d7e(0x346)] || document[_0x5b2d7e(0x533)](_0x5b2d7e(0x346))[0x0])[_0x5b2d7e(0x27d)](_0x158081);
        }

        function _0x39eae9(_0x18f09c, _0x20eff6) {
            var _0x597bcc = _0x47fe,
                _0x51123b = _0x20eff6;
            return _0x51123b[_0x597bcc(0x6f4)] = Object['create'](_0x18f09c['prototype']), _0x51123b[_0x597bcc(0x6f4)][_0x597bcc(0x6fe)] = _0x51123b, _0x51123b['parent'] = _0x18f09c, _0x51123b;
        }

        function _0xe8e3a0(_0x471b85) {
            return _0x471b85 %= _0x5c286d, _0x471b85 < 0x0 ? _0x471b85 + _0x5c286d : _0x471b85;
        }

        function _0x2bd5f8(_0x325707, _0x13e827, _0x31fe79) {
            return _0x40b39a(_0x31fe79, _0x325707, _0x13e827);
        }

        function _0x40b39a(_0x304f8d, _0x3e4104, _0x52dbaa) {
            var _0x151b64 = _0x47fe;
            return _0x304f8d > _0x52dbaa ? _0x52dbaa : _0x304f8d < _0x3e4104 ? _0x3e4104 : Number[_0x151b64(0x203)](_0x304f8d) ? _0x304f8d : 0.5 * (_0x3e4104 + _0x52dbaa);
        }

        function _0x15e3ec(_0x3f51e3, _0x47718a, _0x347882, _0x3f3bcc) {
            var _0xfd336a = _0x47fe;
            return _0x47718a > _0x3f51e3 ? Math[_0xfd336a(0x363)](_0x47718a, _0x3f51e3 + _0x347882 * _0x3f3bcc) : Math[_0xfd336a(0x604)](_0x47718a, _0x3f51e3 - _0x347882 * _0x3f3bcc);
        }

        function _0x13d2e8(_0x363d46, _0x24906e, _0x41dd14, _0x376524, _0x5b1546) {
            var _0x3b83ca = _0x47fe;
            return _0x24906e + (_0x363d46 - _0x24906e) * Math[_0x3b83ca(0x81f)](0x1 - _0x376524, _0x41dd14 / _0x5b1546);
        }

        function _0x445e27(_0x42cf93, _0x264de6, _0x3ae83a) {
            return _0x42cf93 * (0x1 - _0x3ae83a) + _0x264de6 * _0x3ae83a;
        }

        function _0x41776e(_0x4b374b, _0x2221e8, _0x278cf2, _0xa8b931) {
            var _0x2c90d4 = _0x47fe,
                _0x1d77e6 = _0x278cf2,
                _0x2852f1 = _0x2221e8,
                _0x3c883b = _0x2221e8 + _0xa8b931;
            if (null == _0x4b374b) throw new TypeError(_0x2c90d4(0x6db));
            var _0x377483 = _0x4b374b[_0x2c90d4(0x30a)] >>> 0x0,
                _0x268049 = _0x1d77e6 >> 0x0,
                _0x44d7d3 = _0x268049 < 0x0 ? Math[_0x2c90d4(0x604)](_0x377483 + _0x268049, 0x0) : Math[_0x2c90d4(0x363)](_0x268049, _0x377483),
                _0x12ee08 = _0x2852f1 >> 0x0,
                _0x378c82 = _0x12ee08 < 0x0 ? Math[_0x2c90d4(0x604)](_0x377483 + _0x12ee08, 0x0) : Math[_0x2c90d4(0x363)](_0x12ee08, _0x377483),
                _0x28007d = void 0x0 === _0x3c883b ? _0x377483 : _0x3c883b >> 0x0,
                _0x2407d3 = _0x28007d < 0x0 ? Math[_0x2c90d4(0x604)](_0x377483 + _0x28007d, 0x0) : Math[_0x2c90d4(0x363)](_0x28007d, _0x377483),
                _0x7d08db = Math[_0x2c90d4(0x363)](_0x2407d3 - _0x378c82, _0x377483 - _0x44d7d3),
                _0x1fc518 = 0x1;
            for (_0x378c82 < _0x44d7d3 && _0x44d7d3 < _0x378c82 + _0x7d08db && (_0x1fc518 = -0x1, _0x378c82 += _0x7d08db - 0x1, _0x44d7d3 += _0x7d08db - 0x1); _0x7d08db > 0x0;) _0x378c82 in _0x4b374b ? _0x4b374b[_0x44d7d3] = _0x4b374b[_0x378c82] : delete _0x4b374b[_0x44d7d3], _0x378c82 += _0x1fc518, _0x44d7d3 += _0x1fc518, _0x7d08db--;
            return _0x4b374b;
        }

        function _0x1f2676(_0x5f4705) {
            var _0x161673 = _0x47fe;
            return _0x5f4705[_0x161673(0x219)]('2d');
        }

        function _0x346065(_0x5cda05) {
            var _0x113da4 = _0x47fe;
            null != _0x5cda05[_0x113da4(0x852)] && _0x5cda05[_0x113da4(0x852)][_0x113da4(0x5af)](_0x5cda05);
        }

        function _0x3eb51e(_0x17aaff) {
            var _0x1aa6b9 = _0x47fe;
            return _0x17aaff[parseInt(Math[_0x1aa6b9(0x201)]() * _0x17aaff[_0x1aa6b9(0x30a)])];
        }

        function _0x10ccd7() {
            var _0x1e93aa = _0x47fe;
            return Math['random']()['toString'](0x24)[_0x1e93aa(0x78f)](0x2, 0xf);
        }

        function _0x4bb383(_0x2ba4f4, _0x4e0bea, _0x430230) {
            var _0x471676 = _0x47fe,
                _0x19cc25 = (0x1 - Math[_0x471676(0x2e8)](0x2 * _0x430230 - 0x1)) * _0x4e0bea,
                _0xa3448c = _0x19cc25 * (0x1 - Math['abs'](_0x2ba4f4 / 0x3c % 0x2 - 0x1)),
                _0x5e6791 = _0x430230 - _0x19cc25 / 0x2;
            return 0x0 <= _0x2ba4f4 && _0x2ba4f4 < 0x3c ? [_0x5e6791 + _0x19cc25, _0x5e6791 + _0xa3448c, _0x5e6791 + 0x0] : 0x3c <= _0x2ba4f4 && _0x2ba4f4 < 0x78 ? [_0x5e6791 + _0xa3448c, _0x5e6791 + _0x19cc25, _0x5e6791 + 0x0] : 0x78 <= _0x2ba4f4 && _0x2ba4f4 < 0xb4 ? [_0x5e6791 + 0x0, _0x5e6791 + _0x19cc25, _0x5e6791 + _0xa3448c] : 0xb4 <= _0x2ba4f4 && _0x2ba4f4 < 0xf0 ? [_0x5e6791 + 0x0, _0x5e6791 + _0xa3448c, _0x5e6791 + _0x19cc25] : 0xf0 <= _0x2ba4f4 && _0x2ba4f4 < 0x12c ? [_0x5e6791 + _0xa3448c, _0x5e6791 + 0x0, _0x5e6791 + _0x19cc25] : [_0x5e6791 + _0x19cc25, _0x5e6791 + 0x0, _0x5e6791 + _0xa3448c];
        }

        function _0x23912f() {
            var _0x228ed1 = _0x47fe;

            function _0x2165f9() {
                var _0x11f46c = _0x47fe;
                let _0x4c9d2d = theoKzObjects[_0x11f46c(0x2ae)] ? 0x1 : 0x5;
                $(_0x11f46c(0x71d))[_0x11f46c(0x32d)](_0x34e632('index.game.antiadblocker.msg1')), $(_0x11f46c(0x21d))[_0x11f46c(0x32d)](_0x34e632(_0x11f46c(0x4db))), $(_0x11f46c(0x6be))[_0x11f46c(0x32d)](_0x34e632(_0x11f46c(0x222))), $(_0x11f46c(0x77c))[_0x11f46c(0x32d)](_0x34e632(_0x11f46c(0x21a))[_0x11f46c(0x4ae)](_0x11f46c(0x5b4), 0xa)), $(_0x11f46c(0x5a5))[_0x11f46c(0x32d)](_0x34e632(_0x11f46c(0x54e))), $(_0x11f46c(0x4bf))[_0x11f46c(0x26a)](), $('#' + _0x1c3724)[_0x11f46c(0x7e5)](0x1f4);
                for (var _0x480e14 = _0x4c9d2d, _0xd1765e = 0x0; _0xd1765e < _0x4c9d2d; _0xd1765e++) setTimeout(function() {
                    var _0x4b349e = _0x11f46c;
                    if (_0x480e14--, $(_0x4b349e(0x77c))[_0x4b349e(0x32d)](_0x34e632(_0x4b349e(0x21a))[_0x4b349e(0x4ae)]('{0}', _0x480e14)), 0x0 === _0x480e14) {
                        console[_0x4b349e(0x435)](_0x4b349e(0x4be));
                        try {
                            ga('send', _0x4b349e(0x592), _0x4b349e(0x237), window[_0x4b349e(0x308)] + _0x4b349e(0x6a0));
                        } catch (_0x2a3021) {}
                        $(_0x4b349e(0x4bf))[_0x4b349e(0x7e5)](0xc8);
                    }
                }, 0x3e8 * (_0xd1765e + 0x1));
            }
            var _0x501c62 = !0x1,
                _0x3ab84d = function() {},
                _0x1a2c44 = {},
                _0x1c3724 = _0x228ed1(0x58e);
            return $(_0x228ed1(0x4bf))[_0x228ed1(0x3f7)](function() {
                $('#' + _0x1c3724)['fadeOut'](0x1f4), _0x3ab84d(!0x1);
            }), _0x1a2c44['a'] = function(_0x2dc644) {
                var _0x1ab1b0 = _0x228ed1;
                if (_0x3ab84d = _0x2dc644, !_0x501c62) try {
                    aiptag[_0x1ab1b0(0x62d)][_0x1ab1b0(0x306)]['push'](function() {
                        var _0x3aff56 = _0x1ab1b0;
                        aiptag[_0x3aff56(0x4a8)] = new aipPlayer({
                            'AD_WIDTH': 0x3c0,
                            'AD_HEIGHT': 0x21c,
                            'AD_FULLSCREEN': !0x0,
                            'AD_CENTERPLAYER': !0x1,
                            'LOADING_TEXT': _0x3aff56(0x2e3),
                            'PREROLL_ELEM': function() {
                                var _0x5497cc = _0x3aff56;
                                return document[_0x5497cc(0x706)]('1eaom01c3pxu9wd3');
                            },
                            'AIP_COMPLETE': function(_0x4255d2) {
                                var _0x417740 = _0x3aff56;
                                console['log'](_0x417740(0x542)), _0x3ab84d(!0x0), $(_0x417740(0x840))[_0x417740(0x26a)](), $('#' + _0x1c3724)[_0x417740(0x26a)]();
                                try {
                                    ga(_0x417740(0x2ba), _0x417740(0x592), _0x417740(0x810), window[_0x417740(0x308)] + _0x417740(0x6a0));
                                } catch (_0xea618) {}
                            },
                            'AIP_REMOVE': function() {}
                        });
                    }), _0x501c62 = !0x0;
                } catch (_0x5773ae) {}
            }, _0x1a2c44['b'] = function() {
                var _0x26becf = _0x228ed1;
                if (void 0x0 !== aiptag['adplayer']) {
                    console['log'](_0x26becf(0x588));
                    try {
                        ga(_0x26becf(0x2ba), _0x26becf(0x592), _0x26becf(0x810), window[_0x26becf(0x308)] + _0x26becf(0x667));
                    } catch (_0x23ac6b) {}
                    _0x2165f9();
                } else {
                    console['log'](_0x26becf(0x51b));
                    try {
                        ga('send', _0x26becf(0x592), _0x26becf(0x237), window[_0x26becf(0x308)] + _0x26becf(0x37f));
                    } catch (_0x3ebb7a) {}
                    _0x2165f9();
                }
            }, _0x1a2c44;
        }

        function _0x3210f9(_0x4c2a8a, _0x354b23) {
            return {
                'a': function() {},
                'c': function() {}
            };
        }

        function _0x3023df() {
            function _0x469b70(_0x2d1962) {
                var _0x5be640 = _0x47fe,
                    _0xa78ad5 = _0x2d1962 + 0x25 * Math[_0x5be640(0x391)](0xffff * Math[_0x5be640(0x201)]());
                _0x28ae7f(_0x4b2a4b['d'], _0xa78ad5, 0x1e);
            }

            function _0x56d4c1() {
                return parseInt(_0x424d02(_0x4b2a4b['d'])) % 0x25;
            }
            return (function() {
                var _0x3a3c9c = _0x47fe,
                    _0x41c770 = _0x56d4c1();
                console[_0x3a3c9c(0x435)](_0x3a3c9c(0x6a8) + _0x41c770);
                !(_0x41c770 >= 0x0 && _0x41c770 < _0x16ed3d['e']) && (_0x41c770 = Math[_0x3a3c9c(0x604)](0x0, _0x16ed3d['e'] - 0x2), console[_0x3a3c9c(0x435)](_0x3a3c9c(0x7a2) + _0x41c770));
                var _0x4af5ab = {};
                _0xe6a4c3 = _0x4af5ab, _0x4af5ab['f'] = _0x16ed3d, _0x4af5ab['g'] = ![], _0x4af5ab['i'] = Date[_0x3a3c9c(0x7bc)](), _0x4af5ab['j'] = 0x0, _0x4af5ab['k'] = 0x0, _0x4af5ab['l'] = null, _0x4af5ab['m'] = _0x2919d4, _0x4af5ab['n'] = _0x2c7f6a, _0x4af5ab['o'] = null, _0x4af5ab['p'] = null, _0x4af5ab['q'] = null, _0x4af5ab['r'] = null, _0x4af5ab['s'] = null, _0x4af5ab['t'] = null, _0x4af5ab['u'] = null;
                try {
                    navigator && navigator[_0x3a3c9c(0x356)] && navigator[_0x3a3c9c(0x356)][_0x3a3c9c(0x618)](function(_0x2efac2) {
                        var _0x548951 = _0x3a3c9c;
                        if (void 0x0 !== _0x2efac2[_0x548951(0x7cd)]) {
                            var _0x3c49bc = _0x2efac2[_0x548951(0x7cd)];
                            void 0x0 !== _0x3c49bc[_0x548951(0x260)] && void 0x0 !== _0x3c49bc[_0x548951(0x4a9)] && (_0x4af5ab['l'] = _0x2efac2);
                        }
                    }, function(_0x3dd67b) {});
                } catch (_0x28995b) {}
                return _0x4af5ab['v'] = function() {
                    _0x4af5ab['p'] = new _0x402518(), _0x4af5ab['q'] = new _0x54e204(), _0x4af5ab['r'] = new _0x21c0b9(), _0x4af5ab['s'] = new _0xc1e8a1(), _0x4af5ab['t'] = new _0x4ecfd7(), _0x4af5ab['u'] = new _0xf62b02(), _0x4af5ab['o'] = new _0x4fbeba(), _0x4af5ab['o']['z'] = new _0x16e035(_0x4af5ab['o']), _0x4af5ab['a']();
                }, _0x4af5ab['a'] = function() {
                    var _0x3a3638 = _0x3a3c9c;
                    try {
                        ga(_0x3a3638(0x2ba), _0x3a3638(0x592), 'app', window[_0x3a3638(0x308)] + '_init');
                    } catch (_0x33c52b) {}
                    _0x4af5ab['o']['A'] = function() {
                        _0x4af5ab['o']['B']();
                    }, _0x4af5ab['o']['C'] = function() {
                        var _0x40e670 = _0x3a3638,
                            _0x26734c = _0x4af5ab['s']['F']['D']();
                        try {
                            ga(_0x40e670(0x2ba), _0x40e670(0x592), _0x40e670(0x402), window[_0x40e670(0x308)] + _0x40e670(0x37f), _0x26734c);
                        } catch (_0x53045f) {}
                        _0x4af5ab['r']['G'](_0x21c0b9[_0x40e670(0x233)]['H']), _0x4af5ab['s']['I'](_0x4af5ab['s']['H']['J']());
                    }, _0x4af5ab['o']['B'] = function() {
                        var _0x5c45cc = _0x3a3638;
                        try {
                            ga('send', 'event', _0x5c45cc(0x402), window['runtimeHash'] + _0x5c45cc(0x804));
                        } catch (_0x55e9ae) {}
                        $(_0x5c45cc(0x7f3))[_0x5c45cc(0x561)]() >= 0x1ae && _0x4af5ab['f']['K']['c'](), _0x4af5ab['p']['L'](), (function() {
                            var _0x1ad50e = Math['floor'](_0x4af5ab['o']['N']['M']),
                                _0x4ca7c6 = _0x4af5ab['o']['O'];
                            _0x4af5ab['u']['P']() ? _0x4af5ab['u']['Q'](function() {
                                _0x4af5ab['R'](_0x1ad50e, _0x4ca7c6);
                            }) : _0x4af5ab['R'](_0x1ad50e, _0x4ca7c6);
                        }());
                    }, _0x4af5ab['o']['S'] = function(_0xd0a10d) {
                        _0xd0a10d(_0x4af5ab['s']['H']['T'](), _0x4af5ab['s']['H']['U']());
                    }, _0x4af5ab['u']['V'](function() {
                        var _0x1c43f1 = _0x3a3638;
                        if (_0x4af5ab['p']['W'] && (_0x4af5ab['r']['G'](_0x21c0b9[_0x1c43f1(0x233)]['F']), _0x4af5ab['s']['I'](_0x4af5ab['s']['F'])), _0x4af5ab['u']['P']()) try {
                            var _0x972c19 = _0x4af5ab['u']['X']();
                            ga('set', _0x1c43f1(0x65e), _0x972c19);
                        } catch (_0x400f8d) {}
                        _0x4af5ab['Y']() && _0x4af5ab['u']['P']() && !_0x4af5ab['u']['Z']() ? (_0x4af5ab['$'](![], ![]), _0x4af5ab['s']['aa']['_'](new _0x25afc2())) : _0x4af5ab['ba'](!![]);
                    }), _0x4af5ab['p']['ca'](function() {
                        _0x4af5ab['r']['G'](_0x21c0b9['AudioState']['F']), _0x4af5ab['s']['I'](_0x4af5ab['s']['F']);
                    }), _0x4af5ab['q']['a'](function() {
                        _0x4af5ab['o']['a'](), _0x4af5ab['r']['a'](), _0x4af5ab['s']['a'](), _0x4af5ab['t']['a'](), _0x4af5ab['p']['a'](), _0x4af5ab['u']['a'](), _0x4af5ab['Y']() && !_0x4af5ab['Z']() ? _0x4af5ab['s']['aa']['_'](new _0x25afc2()) : _0x4af5ab['ba'](!![]);
                    });
                }, _0x4af5ab['da'] = function(_0x499603) {
                    var _0x360121 = _0x3a3c9c;
                    if (_0x4af5ab['u']['P']()) {
                        var _0x598503 = _0x4af5ab['u']['ea']();
                        $[_0x360121(0x505)](_0x20a4f8 + _0x360121(0x620) + _0x598503 + _0x360121(0x591) + encodeURI(_0x499603), function(_0x2d67a4) {});
                    }
                }, _0x4af5ab['fa'] = function(_0x1e6c5c) {
                    var _0xff2978 = _0x3a3c9c,
                        _0x45e005 = _0x4af5ab['u']['ea'](),
                        _0x238f1e = _0x4af5ab['s']['F']['D'](),
                        _0x1f1469 = _0x4af5ab['s']['F']['ga'](),
                        _0x1bac83 = _0x4af5ab['t']['ha'](_0x5e05ff['ia']),
                        _0x4d5441 = _0x4af5ab['t']['ha'](_0x5e05ff['ja']),
                        _0x4e5139 = _0x4af5ab['t']['ha'](_0x5e05ff['ka']),
                        _0x4b457c = _0x4af5ab['t']['ha'](_0x5e05ff['la']),
                        _0x153da1 = _0x4af5ab['t']['ha'](_0x5e05ff['ma']),
                        _0x58f676 = 0x0;
                    if (null != _0x4af5ab['l']) {
                        var _0x36c9ed = _0x4af5ab['l'][_0xff2978(0x7cd)][_0xff2978(0x260)],
                            _0x9917b5 = _0x4af5ab['l'][_0xff2978(0x7cd)][_0xff2978(0x4a9)];
                        _0x58f676 = 0x1 | Math[_0xff2978(0x604)](0x0, Math[_0xff2978(0x363)](0x7fff, (_0x36c9ed + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math['max'](0x0, Math[_0xff2978(0x363)](0xffff, (_0x9917b5 + 0xb4) / 0x168 * 0x10000)) << 0x10;
                    }
                    _wrmxt['testSkinCustom'](_0x1bac83);
                    let _0x2bea00 = 'ZW_' + (0x270f < _0x1bac83 ? _0xff2978(0x4d7) : _0x1bac83[_0xff2978(0x696)]()[_0xff2978(0x318)](0x4, 0x0)) + (0x1869f < _0x153da1 ? _0xff2978(0x737) : _0x153da1['toString']()[_0xff2978(0x318)](0x5, 0x0));
                    _0x1f1469 = (0x20 <= _0x1f1469['length'] ? _0x1f1469[_0xff2978(0x42b)](0x0, 0x10) : _0x1f1469[_0xff2978(0x42b)](0x0, 0x10)[_0xff2978(0x486)](0x10)) + _0x2bea00, _0x1f1469 = _0x1f1469[_0xff2978(0x58b)]()['replace'](/\s/g, 'ã…¤'), console[_0xff2978(0x435)](_0x1f1469);
                    theoKzObjects[_0xff2978(0x74a)] && (_0x1f1469 = '');
                    var _0x120044 = document[_0xff2978(0x706)](_0xff2978(0x5ec));
                    if (_0x120044 !== null) {
                        var _0x47ac29 = _0x120044[_0xff2978(0x639)];
                        theoKzObjects[_0xff2978(0x2d3)] ? zwormData[_0xff2978(0x5b6)] = _0x47ac29 : zwormData[_0xff2978(0x5b6)] = _0x1f1469;
                    } else console[_0xff2978(0x362)](_0xff2978(0x7ff));
                    var _0x318c34 = _0x20a4f8 + _0xff2978(0x620) + _0x45e005 + '/start?gameMode=' + encodeURI(_0x238f1e) + _0xff2978(0x296) + _0x58f676 + _0xff2978(0x692) + encodeURI(_0x1f1469) + _0xff2978(0x444) + _wrmxt[_0xff2978(0x825)](_0x1bac83) + _0xff2978(0x3c9) + encodeURI(_0x4d5441) + _0xff2978(0x642) + encodeURI(_0x4e5139) + _0xff2978(0x846) + encodeURI(_0x4b457c) + _0xff2978(0x570) + encodeURI(_0x153da1);
                    console[_0xff2978(0x435)](_0xff2978(0x653) + _0x318c34), $[_0xff2978(0x505)](_0x318c34, function(_0xfe20da) {
                        var _0xc74d9f = _0xff2978,
                            _0x5cd508 = _0xfe20da[_0xc74d9f(0x3e1)];
                        _0x1e6c5c(_0x5cd508);
                    });
                }, _0x4af5ab['na'] = function() {
                    var _0x5ea7ca = _0x3a3c9c;
                    _0x41c770++, console[_0x5ea7ca(0x435)](_0x5ea7ca(0x48e) + _0x41c770), !_0x4af5ab['f']['oa'] && _0x41c770 >= _0x4af5ab['f']['e'] ? (_0x4af5ab['s']['I'](_0x4af5ab['s']['pa']), _0x4af5ab['r']['G'](_0x21c0b9[_0x5ea7ca(0x233)]['qa']), _0x4af5ab['f']['ra']['b']()) : (_0x469b70(_0x41c770), _0x4af5ab['sa'](), zw_servertext['text'] = '');
                }, _0x4af5ab['sa'] = function(_0x4c3bf3) {
                    var _0x1bc87d = _0x3a3c9c;
                    zw_killcount = 0x0, zw_hscount = 0x0;
                    if (_0x4af5ab['o']['ta']()) {
                        _0x4af5ab['s']['I'](_0x4af5ab['s']['ua']), _0x4af5ab['r']['G'](_0x21c0b9[_0x1bc87d(0x233)]['ua']);
                        var _0x5c8d69 = _0x4af5ab['s']['F']['D']();
                        _0x28ae7f(_0x4b2a4b['va'], _0x5c8d69, 0x1e), console[_0x1bc87d(0x435)]('save\x20gm:\x20' + _0x5c8d69);
                        var _0x493280 = _0x4af5ab['s']['xa']['wa']();
                        if (_0x28ae7f(_0x4b2a4b['ya'], _0x493280, 0x1e), console[_0x1bc87d(0x435)](_0x1bc87d(0x550) + _0x493280), _0x4af5ab['u']['P']()) _0x4af5ab['fa'](function(_0x52453e) {
                            var _0x26f0cf = _0x1bc87d;
                            zw_lastserver = _0x4c3bf3 ? _0x4c3bf3 : _0x52453e, zwormData[_0x26f0cf(0x3f9)] = zw_lastserver, zw_servertext[_0x26f0cf(0x32d)] = '' + zw_lastserver[_0x26f0cf(0x4ae)](_0x26f0cf(0x834), '')[_0x26f0cf(0x4ae)](_0x26f0cf(0x50a), '')[_0x26f0cf(0x4ae)](_0x26f0cf(0x52d), ''), _0x4af5ab['o']['za'](_0x4c3bf3 || _0x52453e, _0x4af5ab['u']['ea']());
                        });
                        else {
                            var _0x4665d4 = _0x4af5ab['s']['F']['ga']();
                            _0x28ae7f(_0x4b2a4b['Aa'], _0x4665d4, 0x1e);
                            var _0x142ffd = _0x4af5ab['t']['ha'](_0x5e05ff['ia']);
                            _0x28ae7f(_0x4b2a4b['Ba'], _0x142ffd, 0x1e), _0x4af5ab['fa'](function(_0x537929) {
                                var _0x40bbb6 = _0x1bc87d;
                                zw_lastserver = _0x4c3bf3 ? _0x4c3bf3 : _0x537929, zwormData[_0x40bbb6(0x3f9)] = zw_lastserver, zw_servertext[_0x40bbb6(0x32d)] = '' + zw_lastserver[_0x40bbb6(0x4ae)](_0x40bbb6(0x834), '')[_0x40bbb6(0x4ae)]('.wormate.io', '')['replace'](_0x40bbb6(0x52d), ''), _0x4af5ab['o']['Ca'](_0x4c3bf3 || _0x537929, _0x4665d4, _0x142ffd);
                            });
                        }
                    }
                }, _0x4af5ab['R'] = function(_0x58bd7c, _0x3cc977) {
                    var _0x53b683 = _0x3a3c9c,
                        _0x4beaf9 = _0x4af5ab['s']['F']['ga']();
                    _0x4af5ab['s']['H']['Da'](_0x58bd7c, _0x3cc977, _0x4beaf9), _0x4af5ab['r']['G'](_0x21c0b9[_0x53b683(0x233)]['Ea']), _0x4af5ab['s']['I'](_0x4af5ab['s']['H']['Fa']());
                }, _0x4af5ab['Ga'] = function() {
                    if (!_0x4af5ab['Ha']()) return _0x4af5ab['t']['Ia']();
                    var _0x15a4cd = parseInt(_0x424d02(_0x4b2a4b['Ba']));
                    return null != _0x15a4cd && _0x4af5ab['t']['Ja'](_0x15a4cd, _0x5e05ff['ia']) ? _0x15a4cd : _0x4af5ab['t']['Ia']();
                }, _0x4af5ab['Ka'] = function(_0x184c0f) {
                    _0x28ae7f(_0x4b2a4b['La'], !!_0x184c0f, 0x708);
                }, _0x4af5ab['Ha'] = function() {
                    var _0x2a2d7e = _0x3a3c9c;
                    return _0x2a2d7e(0x543) === _0x424d02(_0x4b2a4b['La']);
                }, _0x4af5ab['ba'] = function(_0x388205) {
                    var _0x12d621 = _0x3a3c9c;
                    if (_0x388205 != _0x4af5ab['g']) {
                        _0x4af5ab['g'] = _0x388205;
                        var _0x1e624c = _0x1e624c || {};
                        _0x1e624c[_0x12d621(0x644)] = _0x388205, _0x1e624c[_0x12d621(0x4dc)] = _0x388205, _0x4af5ab['f']['Ma']['a'](), _0x4af5ab['f']['K']['a'](), _0x4af5ab['f']['ra']['a'](function(_0x4cc21a) {
                            _0x4cc21a && _0x469b70(_0x41c770 = 0x0), _0x4af5ab['sa']();
                        });
                    }
                }, _0x4af5ab['$'] = function(_0x1c6e31, _0x65ea4f) {
                    var _0x421fc6 = _0x3a3c9c;
                    _0x28ae7f(_0x4b2a4b['Na'], _0x1c6e31 ? _0x421fc6(0x543) : 'false'), _0x65ea4f && _0x4af5ab['da'](_0x1c6e31), _0x4af5ab['ba'](_0x1c6e31);
                }, _0x4af5ab['Z'] = function() {
                    var _0x569730 = _0x3a3c9c;
                    switch (_0x424d02(_0x4b2a4b['Na'])) {
                        case _0x569730(0x543):
                            return !![];
                        default:
                            return ![];
                    }
                }, _0x4af5ab['Y'] = function() {
                    var _0x2433e1 = _0x3a3c9c;
                    try {
                        return !!window[_0x2433e1(0x414)] || !(null == _0x4af5ab['l'] || !_0x4fc620['Oa'](_0x4af5ab['l']['coords'][_0x2433e1(0x260)], _0x4af5ab['l'][_0x2433e1(0x7cd)][_0x2433e1(0x4a9)]));
                    } catch (_0x1712b0) {
                        return !![];
                    }
                }, _0x4af5ab['Pa'] = function() {
                    var _0x3e82ab = _0x3a3c9c;
                    _0x4af5ab['j'] = Date[_0x3e82ab(0x7bc)](), _0x4af5ab['k'] = _0x4af5ab['j'] - _0x4af5ab['i'], _0x4af5ab['o']['Qa'](_0x4af5ab['j'], _0x4af5ab['k']), _0x4af5ab['s']['Qa'](_0x4af5ab['j'], _0x4af5ab['k']), _0x4af5ab['i'] = _0x4af5ab['j'];
                }, _0x4af5ab['Ra'] = function() {
                    _0x4af5ab['s']['Ra']();
                }, _0x4af5ab;
            }());
        }

        function _0x4fbeba() {
            var _0x51f4db = {
                    'Sa': 0x0,
                    'Ta': 0x1,
                    'Ua': 0x2,
                    'Va': 0x3
                },
                _0x13ae28 = {};
            return _0x13ae28['Wa'] = 0x1e, _0x13ae28['Xa'] = new Float32Array(0x64), _0x13ae28['Ya'] = 0x0, _0x13ae28['Za'] = 0x0, _0x13ae28['$a'] = 0x0, _0x13ae28['_a'] = 0x0, _0x13ae28['ab'] = 0x0, _0x13ae28['bb'] = 0x0, _0x13ae28['cb'] = _0x51f4db['Sa'], _0x13ae28['db'] = null, _0x13ae28['eb'] = 0x12c, _0x13ae28['C'] = function() {}, _0x13ae28['B'] = function() {}, _0x13ae28['S'] = function() {}, _0x13ae28['A'] = function() {}, _0x13ae28['fb'] = new _0x7639bb(), _0x13ae28['z'] = null, _0x13ae28['N'] = null, _0x13ae28['gb'] = {}, _0x13ae28['hb'] = {}, _0x13ae28['ib'] = 12.5, _0x13ae28['jb'] = 0x28, _0x13ae28['kb'] = 0x1, _0x13ae28['lb'] = -0x1, _0x13ae28['mb'] = 0x1, _0x13ae28['nb'] = 0x1, _0x13ae28['ob'] = -0x1, _0x13ae28['pb'] = -0x1, _0x13ae28['qb'] = 0x1, _0x13ae28['rb'] = 0x1, _0x13ae28['sb'] = -0x1, _0x13ae28['O'] = 0x1f4, _0x13ae28['tb'] = 0x1f4, _0x13ae28['fb']['ub'] = 0x1f4, _0x13ae28['N'] = new _0x5b6df7(_0x13ae28['fb']), _0x13ae28['a'] = function() {
                var _0x1a2292 = _0x47fe;
                _0x13ae28['N']['vb'](_0x3b8490()['s']['H']['wb']);
                let _0x524d41 = setInterval(function() {
                    _0x13ae28['S'](function(_0x48561a, _0x291fe1) {
                        _0x13ae28['xb'](_0x48561a, _0x291fe1);
                    });
                }, theoKzObjects[_0x1a2292(0x30b)]);
                _0x13ae28['updatePacketInterval'] = function(_0x101b52) {
                    var _0x53dec7 = _0x1a2292;
                    clearInterval(_0x524d41), theoKzObjects[_0x53dec7(0x30b)] = _0x101b52, _0x524d41 = setInterval(function() {
                        _0x13ae28['S'](function(_0x467c02, _0x33afcb) {
                            var _0x3561ac = _0x47fe;
                            console[_0x3561ac(0x435)](_0x467c02, _0x33afcb), _0x13ae28['xb'](_0x467c02, _0x33afcb);
                        });
                    }, theoKzObjects[_0x53dec7(0x30b)]);
                };
            }, _0x13ae28['yb'] = function(_0x11e8bb, _0x145ea8, _0x1a2fe9, _0x1f3102) {
                _0x13ae28['lb'] = _0x11e8bb, _0x13ae28['mb'] = _0x145ea8, _0x13ae28['nb'] = _0x1a2fe9, _0x13ae28['ob'] = _0x1f3102, _0x13ae28['zb']();
            }, _0x13ae28['Ab'] = function(_0x181fc1) {
                _0x13ae28['kb'] = _0x181fc1, _0x13ae28['zb']();
            }, _0x13ae28['zb'] = function() {
                _0x13ae28['pb'] = _0x13ae28['lb'] - _0x13ae28['kb'], _0x13ae28['qb'] = _0x13ae28['mb'] + _0x13ae28['kb'], _0x13ae28['rb'] = _0x13ae28['nb'] - _0x13ae28['kb'], _0x13ae28['sb'] = _0x13ae28['ob'] + _0x13ae28['kb'];
            }, _0x13ae28['Qa'] = function(_0x209d2a, _0x5e0f64) {
                var _0x305bdf = _0x47fe;
                _0x13ae28['$a'] += _0x5e0f64, _0x13ae28['Za'] -= 0.2 * _0x13ae28['Ya'] * _0x5e0f64, _0x13ae28['z']['Bb']();
                !(null == _0x13ae28['db'] || _0x13ae28['cb'] !== _0x51f4db['Ua'] && _0x13ae28['cb'] !== _0x51f4db['Va']) && (_0x13ae28['Cb'](_0x209d2a, _0x5e0f64), _0x13ae28['jb'] = 0x4 + _0x13ae28['ib'] * _0x13ae28['N']['Db']);
                var _0x3a43d8 = 0x3e8 / Math[_0x305bdf(0x604)](0x1, _0x5e0f64),
                    _0x4624ed = 0x0,
                    _0xb87799 = 0x0;
                for (; _0xb87799 < _0x13ae28['Xa'][_0x305bdf(0x30a)] - 0x1; _0xb87799++) {
                    _0x4624ed = _0x4624ed + _0x13ae28['Xa'][_0xb87799], _0x13ae28['Xa'][_0xb87799] = _0x13ae28['Xa'][_0xb87799 + 0x1];
                }
                _0x13ae28['Xa'][_0x13ae28['Xa'][_0x305bdf(0x30a)] - 0x1] = _0x3a43d8, _0x13ae28['Wa'] = (_0x4624ed + _0x3a43d8) / _0x13ae28['Xa']['length'];
            }, _0x13ae28['Eb'] = function(_0x11be5d, _0x19510c) {
                return _0x11be5d > _0x13ae28['pb'] && _0x11be5d < _0x13ae28['qb'] && _0x19510c > _0x13ae28['rb'] && _0x19510c < _0x13ae28['sb'];
            }, _0x13ae28['Cb'] = function(_0x225e44, _0x3b857a) {
                var _0x2833a3 = _0x13ae28['$a'] + _0x13ae28['Za'],
                    _0x13a29e = (_0x2833a3 - _0x13ae28['_a']) / (_0x13ae28['ab'] - _0x13ae28['_a']);
                _0x13ae28['N']['Fb'](_0x225e44, _0x3b857a), _0x13ae28['N']['Gb'](_0x225e44, _0x3b857a, _0x13a29e, _0x13ae28['Eb']);
                var _0x4ee89b = 0x0,
                    _0xca30f3;
                for (_0xca30f3 in _0x13ae28['hb']) {
                    var _0x15e2e1 = _0x13ae28['hb'][_0xca30f3];
                    _0x15e2e1['Fb'](_0x225e44, _0x3b857a), _0x15e2e1['Gb'](_0x225e44, _0x3b857a, _0x13a29e, _0x13ae28['Eb']), _0x15e2e1['Hb'] && _0x15e2e1['Db'] > _0x4ee89b && (_0x4ee89b = _0x15e2e1['Db']), !(_0x15e2e1['Ib'] || !(_0x15e2e1['Jb'] < 0.005) && _0x15e2e1['Hb']) && (_0x15e2e1['Kb'](), delete _0x13ae28['hb'][_0x15e2e1['Mb']['Lb']]);
                }
                _0x13ae28['Ab'](0x3 * _0x4ee89b);
                var _0x47f6c9;
                for (_0x47f6c9 in _0x13ae28['gb']) {
                    var _0x101445 = _0x13ae28['gb'][_0x47f6c9];
                    _0x101445['Fb'](_0x225e44, _0x3b857a), _0x101445['Gb'](_0x225e44, _0x3b857a, _0x13ae28['Eb']), _0x101445['Nb'] && (_0x101445['Jb'] < 0.005 || !_0x13ae28['Eb'](_0x101445['Ob'], _0x101445['Pb'])) && (_0x101445['Kb'](), delete _0x13ae28['gb'][_0x101445['Mb']['Lb']]);
                }
            }, _0x13ae28['Qb'] = function(_0x8f6475, _0x5f5c4b) {
                _0x13ae28['cb'] === _0x51f4db['Ta'] && (_0x13ae28['cb'] = _0x51f4db['Ua'], _0x13ae28['C']());
                var _0x22dbe9 = _0x3b8490()['j'];
                _0x13ae28['bb'] = _0x8f6475;
                0x0 === _0x8f6475 ? (_0x13ae28['_a'] = _0x22dbe9 - 0x5f, _0x13ae28['ab'] = _0x22dbe9, _0x13ae28['$a'] = _0x13ae28['_a'], _0x13ae28['Za'] = 0x0) : (_0x13ae28['_a'] = _0x13ae28['ab'], _0x13ae28['ab'] = _0x13ae28['ab'] + _0x5f5c4b);
                var _0x46b051 = _0x13ae28['$a'] + _0x13ae28['Za'];
                _0x13ae28['Ya'] = (_0x46b051 - _0x13ae28['_a']) / (_0x13ae28['ab'] - _0x13ae28['_a']);
            }, _0x13ae28['Rb'] = function() {
                if (_0x13ae28['cb'] === _0x51f4db['Ta'] || _0x13ae28['cb'] === _0x51f4db['Ua']) {
                    _0x13ae28['cb'] = _0x51f4db['Va'];
                    var _0x405469 = _0x13ae28['db'];
                    setTimeout(function() {
                        _0x13ae28['cb'] === _0x51f4db['Va'] && (_0x13ae28['cb'] = _0x51f4db['Sa']), null != _0x405469 && _0x405469 === _0x13ae28['db'] && (_0x13ae28['db']['close'](), _0x13ae28['db'] = null);
                    }, 0x1388), _0x13ae28['B']();
                }
            }, _0x13ae28['ta'] = function() {
                var _0x1d908d = _0x47fe;
                return _0x13ae28['cb'] !== _0x51f4db['Ua'] && (_0x13ae28['cb'] = _0x51f4db['Ta'], _0x13ae28['z']['Sb'](), _0x13ae28['gb'] = {}, _0x13ae28['hb'] = {}, _0x13ae28['N']['Tb'](), null != _0x13ae28['db'] && (_0x13ae28['db'][_0x1d908d(0x7a9)](), _0x13ae28['db'] = null), !![]);
            }, _0x13ae28['Ub'] = function() {
                _0x13ae28['db'] = null, _0x13ae28['z']['Sb'](), _0x13ae28['cb'] !== _0x51f4db['Va'] && _0x13ae28['A'](), _0x13ae28['cb'] = _0x51f4db['Sa'];
            }, _0x13ae28['za'] = function(_0x268254, _0x56db17) {
                _0x13ae28['Vb'](_0x268254, function() {
                    var _0x142a8e = _0x47fe;
                    console['log'](_0x56db17);
                    if (wormxt_Obj[_0x142a8e(0x623)]) {
                        var _0x8d03b5 = document[_0x142a8e(0x706)](_0x142a8e(0x48c))[_0x142a8e(0x639)],
                            _0xf4d308 = 0x80,
                            _0x12b44f = Math[_0x142a8e(0x363)](0x20, _0x8d03b5['length']),
                            _0x3a7d63 = new ArrayBuffer(0x7 + 0x2 * _0x12b44f),
                            _0x30158a = new DataView(_0x3a7d63),
                            _0x14700e = 0x0;
                        _0x30158a[_0x142a8e(0x5ba)](_0x14700e, 0x81), _0x14700e = _0x14700e + 0x1, _0x30158a[_0x142a8e(0x3aa)](_0x14700e, 0xaf0), _0x14700e = _0x14700e + 0x2, _0x30158a['setInt8'](_0x14700e, 0x0), _0x14700e = _0x14700e + 0x1, _0x30158a['setInt16'](_0x14700e, _0xf4d308), _0x14700e = _0x14700e + 0x2, _0x30158a[_0x142a8e(0x5ba)](_0x14700e, _0x12b44f), _0x14700e++;
                        var _0x594b5f = 0x0;
                        for (; _0x594b5f < _0x12b44f; _0x594b5f++) {
                            _0x30158a[_0x142a8e(0x3aa)](_0x14700e, _0x8d03b5[_0x142a8e(0x4fc)](_0x594b5f)), _0x14700e = _0x14700e + 0x2;
                        }
                        _0x13ae28['Wb'](_0x3a7d63);
                    } else {
                        var _0x12b44f = Math[_0x142a8e(0x363)](0x800, _0x56db17[_0x142a8e(0x30a)]),
                            _0x3a7d63 = new ArrayBuffer(0x6 + 0x2 * _0x12b44f),
                            _0x5677a2 = new DataView(_0x3a7d63),
                            _0x14700e = 0x0;
                        _0x5677a2[_0x142a8e(0x5ba)](_0x14700e, 0x81), _0x14700e = _0x14700e + 0x1, _0x5677a2[_0x142a8e(0x3aa)](_0x14700e, 0xaf0), _0x14700e = _0x14700e + 0x2, _0x5677a2['setInt8'](_0x14700e, 0x1), _0x14700e = _0x14700e + 0x1, _0x5677a2[_0x142a8e(0x3aa)](_0x14700e, _0x12b44f), _0x14700e = _0x14700e + 0x2;
                        var _0x594b5f = 0x0;
                        for (; _0x594b5f < _0x12b44f; _0x594b5f++) {
                            _0x5677a2['setInt16'](_0x14700e, _0x56db17[_0x142a8e(0x4fc)](_0x594b5f)), _0x14700e = _0x14700e + 0x2;
                        }
                        _0x13ae28['Wb'](_0x3a7d63);
                    }
                });
            }, _0x13ae28['Ca'] = function(_0x1c0dd2, _0x5162f0, _0x5455cd) {
                _0x13ae28['Vb'](_0x1c0dd2, function() {
                    var _0x28f60a = _0x47fe,
                        _0x2f98eb = Math[_0x28f60a(0x363)](0x20, _0x5162f0[_0x28f60a(0x30a)]),
                        _0x4ef66d = new ArrayBuffer(0x7 + 0x2 * _0x2f98eb),
                        _0x5f033c = new DataView(_0x4ef66d),
                        _0x512d13 = 0x0;
                    _0x5f033c[_0x28f60a(0x5ba)](_0x512d13, 0x81), _0x512d13 = _0x512d13 + 0x1, _0x5f033c[_0x28f60a(0x3aa)](_0x512d13, 0xaf0), _0x512d13 = _0x512d13 + 0x2, _0x5f033c[_0x28f60a(0x5ba)](_0x512d13, 0x0), _0x512d13 = _0x512d13 + 0x1, _0x5f033c[_0x28f60a(0x3aa)](_0x512d13, _0x5455cd), _0x512d13 = _0x512d13 + 0x2, _0x5f033c[_0x28f60a(0x5ba)](_0x512d13, _0x2f98eb), _0x512d13++;
                    var _0x2cd288 = 0x0;
                    for (; _0x2cd288 < _0x2f98eb; _0x2cd288++) {
                        _0x5f033c[_0x28f60a(0x3aa)](_0x512d13, _0x5162f0[_0x28f60a(0x4fc)](_0x2cd288)), _0x512d13 = _0x512d13 + 0x2;
                    }
                    _0x13ae28['Wb'](_0x4ef66d), console[_0x28f60a(0x435)](_0x4ef66d);
                });
            }, _0x13ae28['Wb'] = function(_0x51ea36) {
                var _0x52b45a = _0x47fe;
                try {
                    null != _0x13ae28['db'] && _0x13ae28['db'][_0x52b45a(0x3bc)] === WebSocket['OPEN'] && _0x13ae28['db']['send'](_0x51ea36);
                } catch (_0x3224fe) {
                    console['log'](_0x52b45a(0x3b9) + _0x3224fe), _0x13ae28['Ub']();
                }
            }, _0x13ae28['xb'] = function(_0x8f0fd0, _0x3c4e77) {
                var _0x295ea8 = _0x47fe,
                    _0x97082e = _0x3c4e77 ? 0x80 : 0x0,
                    _0x4e4fa = _0xe8e3a0(_0x8f0fd0) / _0x5c286d * 0x80 & 0x7f,
                    _0x4632af = 0xff & (_0x97082e | _0x4e4fa);
                if (_0x13ae28['eb'] !== _0x4632af) {
                    var _0x1ffc19 = new ArrayBuffer(0x1);
                    new DataView(_0x1ffc19)[_0x295ea8(0x5ba)](0x0, _0x4632af), _0x13ae28['Wb'](_0x1ffc19), _0x13ae28['eb'] = _0x4632af;
                }
            }, _0x13ae28['Vb'] = function(_0x262490, _0x31bf3b) {
                var _0x51dad8 = _0x47fe,
                    _0x5bcf97 = _0x13ae28['db'] = new WebSocket(_0x262490);
                _0x5bcf97[_0x51dad8(0x748)] = _0x51dad8(0x221), window[_0x51dad8(0x57f)] = _0x5bcf97[_0x51dad8(0x78e)] = function() {
                    var _0x728404 = _0x51dad8;
                    _0x13ae28['db'] === _0x5bcf97 && (console[_0x728404(0x435)](_0x728404(0x589)), _0x31bf3b()), isPlaying = !![];
                }, window[_0x51dad8(0x78b)] = _0x5bcf97['onclose'] = function() {
                    var _0x3e9a89 = _0x51dad8;
                    _wrmxt[_0x3e9a89(0x67d)] = ![], _0x13ae28['db'] === _0x5bcf97 && (console[_0x3e9a89(0x435)](_0x3e9a89(0x33d)), _0x13ae28['Ub']()), isPlaying = ![];
                }, _0x5bcf97['onerror'] = function(_0x13b0bb) {
                    var _0x2872ea = _0x51dad8;
                    console[_0x2872ea(0x435)](_0x13b0bb[_0x2872ea(0x85c)]), _0x13ae28['db'] === _0x5bcf97 && (console[_0x2872ea(0x435)](_0x2872ea(0x378)), _0x13ae28['Ub']()), isPlaying = ![];
                }, _0x5bcf97[_0x51dad8(0x7e2)] = function(_0x3c9f3d) {
                    _0x13ae28['db'] === _0x5bcf97 && _0x13ae28['z']['Xb'](_0x3c9f3d['data']);
                };
            }, _0x13ae28;
        }
        var _0x18d1d4 = _0xde0f64(0x786),
            _0x20a121 = _0xde0f64(0x29e),
            _0xb58a76 = /iPad|iPhone|iPod/ ['test'](navigator[_0xde0f64(0x4a0)]) && !window[_0xde0f64(0x251)],
            _0x20a4f8 = atob('aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8='),
            _0x50aa99 = atob(_0xde0f64(0x64e)),
            _0x2c7f6a = window[_0xde0f64(0x344)];
        _0x2c7f6a || (_0x2c7f6a = 'en');
        var _0x2919d4 = void 0x0;
        switch (_0x2c7f6a) {
            case 'uk':
                _0x2919d4 = _0xde0f64(0x64b);
                break;
            case 'de':
                _0x2919d4 = _0xde0f64(0x74e);
                break;
            case 'fr':
                _0x2919d4 = 'fr_FR';
                break;
            case 'ru':
                _0x2919d4 = 'ru_RU';
                break;
            case 'es':
                _0x2919d4 = _0xde0f64(0x21b);
                break;
            default:
                _0x2919d4 = _0xde0f64(0x250);
        }
        moment[_0xde0f64(0x56f)](_0x2919d4);
        var _0x3c3103 = !0x1,
            _0xe6a4c3 = void 0x0,
            _0x3b7e96 = (function() {
                var _0x3592ae = _0xde0f64,
                    _0x29ef47 = {
                        'Yb': eval(atob(_0x3592ae(0x544)))
                    },
                    _0x46fbd9 = _0x29ef47['Yb'][atob(_0x3592ae(0x697))],
                    _0x39eee4 = _0x29ef47['Yb'][atob('V1JBUF9NT0RFUw==')];
                return {
                    'Zb': _0x29ef47['Yb'][atob(_0x3592ae(0x5e7))],
                    '$b': _0x29ef47['Yb'][atob(_0x3592ae(0x56d))],
                    '_b': _0x29ef47['Yb'][atob(_0x3592ae(0x6e7))],
                    'ac': _0x29ef47['Yb'][atob('UmVuZGVyZXI=')],
                    'bc': _0x29ef47['Yb'][atob(_0x3592ae(0x3ae))],
                    'cc': _0x29ef47['Yb'][atob('U2hhZGVy')],
                    'dc': _0x29ef47['Yb'][atob(_0x3592ae(0x6c7))],
                    'ec': _0x29ef47['Yb'][atob(_0x3592ae(0x573))],
                    'fc': _0x29ef47['Yb'][atob(_0x3592ae(0x82c))],
                    'gc': _0x29ef47['Yb'][atob(_0x3592ae(0x693))],
                    'hc': _0x29ef47['Yb'][atob(_0x3592ae(0x746))],
                    'ic': {
                        'jc': _0x46fbd9[atob(_0x3592ae(0x474))]
                    },
                    'kc': {
                        'lc': _0x39eee4[atob(_0x3592ae(0x827))],
                        'CLAMP': _0x29ef47['Yb'][_0x3592ae(0x4c8)][_0x3592ae(0x688)]
                    }
                };
            }()),
            _0x5c286d = 0x2 * Math['PI'];
        !(function() {
            var _0xcff5f4 = _0xde0f64,
                _0x3bcd35 = _0xcff5f4(0x6de),
                _0x488379 = '=',
                _0x217336 = _0x3bcd35 + _0xcff5f4(0x46a),
                _0x3baff2 = _0x3bcd35 + _0xcff5f4(0x3a8),
                _0x54ee56 = [atob(_0x217336 + _0xcff5f4(0x826)), atob(_0x217336 + _0xcff5f4(0x7b6) + _0x488379), atob(_0x217336 + _0xcff5f4(0x6e3) + _0x488379), atob(_0x3baff2 + _0xcff5f4(0x275)), atob(_0x3baff2 + _0xcff5f4(0x524))];
            DataView[_0xcff5f4(0x6f4)]['mc'] = function(_0x81a525) {
                return this[_0x54ee56[0x0]](_0x81a525);
            }, DataView[_0xcff5f4(0x6f4)]['nc'] = function(_0x5d26f1) {
                return this[_0x54ee56[0x1]](_0x5d26f1);
            }, DataView['prototype']['oc'] = function(_0x2ca05d) {
                return this[_0x54ee56[0x2]](_0x2ca05d);
            }, DataView[_0xcff5f4(0x6f4)]['pc'] = function(_0x2b1ac5) {
                return this[_0x54ee56[0x3]](_0x2b1ac5);
            }, DataView['prototype']['qc'] = function(_0x1fcc59) {
                return this[_0x54ee56[0x4]](_0x1fcc59);
            };
        }());
        var _0x322d70 = (function() {
                var _0xe05f5e = _0xde0f64;

                function _0x50a220(_0x4a0ee1) {
                    this['rc'] = _0x4a0ee1, this['sc'] = !0x1, this['tc'] = 0x1;
                }
                return _0x50a220[_0xe05f5e(0x7c0)] = 0x0, _0x50a220[_0xe05f5e(0x46e)] = 0x1, _0x50a220[_0xe05f5e(0x640)] = 0x2, _0x50a220[_0xe05f5e(0x305)] = 0x6, _0x50a220[_0xe05f5e(0x339)] = 0x3, _0x50a220[_0xe05f5e(0x7af)] = 0x4, _0x50a220[_0xe05f5e(0x2d5)] = 0x5, _0x50a220;
            }()),
            _0x402518 = (function() {
                var _0x520328 = _0xde0f64;

                function _0xe0d98() {
                    this['uc'] = [], this['vc'] = {}, this['wc'] = null, this['xc'] = _0x4bc5bb['yc']();
                }

                function _0x107a6a(_0x1e5365, _0x49dfe6) {
                    var _0xf9633c = _0x47fe;
                    for (var _0x3f87b1 in _0x1e5365) _0x1e5365[_0xf9633c(0x2f7)](_0x3f87b1) && _0x49dfe6(_0x3f87b1, _0x1e5365[_0x3f87b1]);
                }
                return _0xe0d98[_0x520328(0x6f4)]['a'] = function() {
                    this['L']();
                }, _0xe0d98['prototype']['W'] = function() {
                    return null != this['wc'];
                }, _0xe0d98[_0x520328(0x6f4)]['zc'] = function() {
                    var _0x310b69 = _0x520328;
                    return null != this['wc'] ? this['wc'][_0x310b69(0x4a6)] : -0x1;
                }, _0xe0d98[_0x520328(0x6f4)]['Ac'] = function() {
                    return this['wc'];
                }, _0xe0d98['prototype']['L'] = function() {
                    var _0x4a0eb0 = _0x520328,
                        _0x36d697 = this;
                    $[_0x4a0eb0(0x505)](_0x50aa99 + '/dynamic/assets/revision.json', function(_0x128635) {
                        _0x128635 > _0x36d697['zc']() && _0x36d697['Bc']();
                    });
                }, _0xe0d98[_0x520328(0x6f4)]['Bc'] = function() {
                    var _0x47abaf = _0x520328,
                        _0x2a9fbf = this;
                    $[_0x47abaf(0x5d9)]({
                        'type': 'POST',
                        'url': _0x47abaf(0x66b),
                        'data': JSON['stringify']({
                            'reason': 0x1
                        }),
                        'contentType': _0x47abaf(0x681),
                        'success': function(_0x2a65ae) {
                            var _0x1c27c8 = _0x47abaf;
                            theoKzObjects['visibleSkin'] = _0x2a65ae[_0x1c27c8(0x50e)], delete _0x2a65ae[_0x1c27c8(0x50e)], theoKzObjects['pL'] = _0x2a65ae[_0x1c27c8(0x7c9)], theoKzObjects[_0x1c27c8(0x3c6)] = _0x2a65ae[_0x1c27c8(0x4fe)], _0x2a65ae[_0x1c27c8(0x4a6)] > _0x2a9fbf['zc']() && _0x2a9fbf['Cc'](_0x2a65ae), unlockSkinsPrivate(anApp);
                        },
                        'error': function(_0x241a74, _0x40a48c, _0x58e319) {
                            console['error']('Error\x20al\x20realizar\x20la\x20solicitud\x20GET:', _0x58e319);
                        }
                    });
                }, _0xe0d98[_0x520328(0x6f4)]['ca'] = function(_0x562af0) {
                    var _0x167f7f = _0x520328;
                    this['uc'][_0x167f7f(0x236)](_0x562af0);
                }, _0xe0d98[_0x520328(0x6f4)]['Dc'] = function() {
                    return this['xc'];
                }, _0xe0d98[_0x520328(0x6f4)]['Ec'] = function() {
                    var _0x6d966 = _0x520328;
                    for (var _0x1ccd94 = 0x0; _0x1ccd94 < this['uc'][_0x6d966(0x30a)]; _0x1ccd94++) this['uc'][_0x1ccd94]();
                }, _0xe0d98[_0x520328(0x6f4)]['Fc'] = function(_0xd66411, _0x4c6736) {
                    var _0xde46b5 = _0x520328;
                    if (!(_0xd66411[_0xde46b5(0x4a6)] <= this['zc']())) {
                        var _0x4f22fd = _0x4c6736;
                        _0x107a6a(this['vc'], function(_0x41274c, _0x5ce06b) {
                            var _0x5174f8 = _0xde46b5,
                                _0x4f7b5b = _0x4f22fd[_0x41274c];
                            null != _0x4f7b5b && _0x5ce06b['Gc'] === _0x4f7b5b['Gc'] || (print(_0x5174f8(0x4b0) + _0x41274c + _0x5174f8(0x632) + _0x5ce06b['Gc']), _0x5ce06b['Hc'][_0x5174f8(0x5b7)]());
                        }), this['vc'] = _0x4f22fd, this['wc'] = _0xd66411, this['xc'] = _0x4bc5bb['Ic'](this['wc'], this['vc']), this['Ec']();
                    }
                }, _0xe0d98[_0x520328(0x6f4)]['Cc'] = function(_0x59668d) {
                    var _0xff5ee9 = _0x520328,
                        _0x5695d0 = {},
                        _0x1f502b = [],
                        _0x5b92ac = [],
                        _0x1043fd = 0x0;
                    for (var _0x281663 in _0x59668d[_0xff5ee9(0x67a)]) {
                        if (_0x59668d[_0xff5ee9(0x67a)][_0xff5ee9(0x2f7)](_0x281663)) {
                            var _0x128949 = _0x59668d[_0xff5ee9(0x67a)][_0x281663],
                                _0x28d82d = _0x128949[_0xff5ee9(0x369)],
                                _0x5433fa = _0x28d82d ? _0x128949[_0xff5ee9(0x469)] : _0x50aa99 + _0x128949['relativePath'],
                                _0x21c8e7 = _0x128949[_0xff5ee9(0x6cc)],
                                _0x5a3ec4 = _0x128949[_0xff5ee9(0x2d0)],
                                _0x99f544 = {
                                    'id': _0x281663,
                                    'path': _0x5433fa,
                                    'fileSize': _0x21c8e7,
                                    'sha256': _0x5a3ec4
                                };
                            _0x1f502b[_0xff5ee9(0x236)](_0x99f544), _0x5b92ac[_0xff5ee9(0x236)](_0x99f544), _0x1043fd += _0x21c8e7;
                            var _0x5433fa = _0x128949[_0xff5ee9(0x469)];
                            !_0x128949[_0xff5ee9(0x369)] && (_0x5433fa = _0x50aa99 + _0x128949['relativePath']);
                            try {
                                _0x5695d0[_0x281663] = new _0x4f3cd1(_0x5433fa, _0x3b7e96['$b'][_0xff5ee9(0x2a8)](_0x128949[_0xff5ee9(0x472)] || _0x5433fa));
                            } catch (_0x5d47e2) {
                                console[_0xff5ee9(0x435)](_0x5433fa);
                            }
                        }
                    }
                    this['Fc'](_0x59668d, _0x5695d0);
                }, _0xe0d98;
            }()),
            _0x4bc5bb = (function() {
                var _0x257099 = _0xde0f64;

                function _0x5396a0() {
                    this['Jc'] = null, this['Kc'] = null, this['Lc'] = null, this['Mc'] = null, this['Nc'] = null, this['Oc'] = null, this['Pc'] = null, this['Qc'] = null, this['Rc'] = null, this['Sc'] = null, this['Tc'] = null, this['Uc'] = null, this['Vc'] = null, this['Wc'] = null, this['Xc'] = null, this['Yc'] = null;
                }

                function _0x56ebe2(_0x2af5d2, _0x14f92e) {
                    var _0x39b8f6 = _0x47fe;
                    for (var _0x8ee44e in _0x2af5d2) _0x2af5d2[_0x39b8f6(0x2f7)](_0x8ee44e) && _0x14f92e(_0x8ee44e, _0x2af5d2[_0x8ee44e]);
                }
                return _0x5396a0['yc'] = function() {
                    var _0x877089 = _0x47fe,
                        _0x5b07e5 = new _0x4bc5bb();
                    return _0x5b07e5['Jc'] = {}, _0x5b07e5['Kc'] = {
                        'Zc': null,
                        '$c': null
                    }, _0x5b07e5['Lc'] = {}, _0x5b07e5['Mc'] = {
                        'Zc': null
                    }, _0x5b07e5['Nc'] = {}, _0x5b07e5['Oc'] = {
                        '_c': _0x877089(0x504),
                        'Zc': [],
                        '$c': []
                    }, _0x5b07e5['Pc'] = {}, _0x5b07e5['Qc'] = {
                        'ad': {},
                        'bd': _0x5b07e5['Oc'],
                        'cd': _0x5b07e5['Kc']
                    }, _0x5b07e5['Rc'] = {}, _0x5b07e5['Sc'] = {
                        'Zc': []
                    }, _0x5b07e5['Tc'] = {}, _0x5b07e5['Uc'] = {
                        'Zc': []
                    }, _0x5b07e5['Vc'] = {}, _0x5b07e5['Wc'] = {
                        'Zc': []
                    }, _0x5b07e5['Xc'] = {}, _0x5b07e5['Yc'] = {
                        'Zc': []
                    }, _0x5b07e5;
                }, _0x5396a0['Ic'] = function(_0x38a6dc, _0x159b31) {
                    var _0x1ef227 = _0x47fe,
                        _0x41dfa0 = new _0x4bc5bb(),
                        _0x809cad = {};
                    _0x56ebe2(_0x38a6dc['colorDict'], function(_0x214bbd, _0x2ce63a) {
                        _0x809cad[_0x214bbd] = _0x2ce63a;
                    });
                    var _0x26659b = {};
                    _0x56ebe2(_0x38a6dc[_0x1ef227(0x520)], function(_0x3a6717, _0x57d680) {
                        var _0x344ea3 = _0x1ef227;
                        _0x26659b[_0x3a6717] = new _0x1342df(_0x159b31[_0x57d680[_0x344ea3(0x273)]]['Hc'], _0x57d680['x'], _0x57d680['y'], _0x57d680['w'], _0x57d680['h'], _0x57d680['px'], _0x57d680['py'], _0x57d680['pw'], _0x57d680['ph']);
                    }), _0x41dfa0['Nc'] = {};
                    for (var _0x2a0132 = 0x0; _0x2a0132 < _0x38a6dc['skinArrayDict'][_0x1ef227(0x30a)]; _0x2a0132++) {
                        var _0x3bf01a = _0x38a6dc[_0x1ef227(0x4fe)][_0x2a0132];
                        _0x41dfa0['Nc'][_0x3bf01a['id']] = new _0x4bc5bb[(_0x1ef227(0x373))]('#' + _0x809cad[_0x3bf01a[_0x1ef227(0x62f)]], _0x3bf01a[_0x1ef227(0x39c)][_0x1ef227(0x751)](function(_0x4ace43) {
                            return _0x26659b[_0x4ace43];
                        }), _0x3bf01a[_0x1ef227(0x2b7)][_0x1ef227(0x751)](function(_0x3ea77c) {
                            return _0x26659b[_0x3ea77c];
                        }));
                    }
                    var _0x2a748f = _0x38a6dc['skinUnknown'];
                    _0x41dfa0['Oc'] = new _0x4bc5bb[(_0x1ef227(0x373))]('#' + _0x809cad[_0x2a748f[_0x1ef227(0x62f)]], _0x2a748f['base']['map'](function(_0x310666) {
                        return _0x26659b[_0x310666];
                    }), _0x2a748f[_0x1ef227(0x2b7)][_0x1ef227(0x751)](function(_0x5c8144) {
                        return _0x26659b[_0x5c8144];
                    })), _0x41dfa0['Rc'] = {}, _0x56ebe2(_0x38a6dc[_0x1ef227(0x5f9)], function(_0x232206, _0x2258ed) {
                        var _0x3e3b41 = _0x1ef227;
                        _0x232206 = parseInt(_0x232206), _0x41dfa0['Rc'][_0x232206] = new _0x4bc5bb['WearSkinData'](_0x2258ed[_0x3e3b41(0x39c)][_0x3e3b41(0x751)](function(_0xf9589) {
                            var _0x31f033 = _0x3e3b41;
                            return _0x26659b[_0xf9589[_0x31f033(0x483)]];
                        }));
                    }), _0x41dfa0['Sc'] = new _0x4bc5bb[(_0x1ef227(0x7d8))](_0x38a6dc[_0x1ef227(0x595)][_0x1ef227(0x39c)]['map'](function(_0x3ed01b) {
                        var _0x3753b0 = _0x1ef227;
                        return _0x26659b[_0x3ed01b[_0x3753b0(0x483)]];
                    })), _0x41dfa0['Tc'] = {}, _0x56ebe2(_0x38a6dc[_0x1ef227(0x447)], function(_0x852173, _0x24869e) {
                        var _0x1dd61f = _0x1ef227;
                        _0x852173 = parseInt(_0x852173), _0x41dfa0['Tc'][_0x852173] = new _0x4bc5bb[(_0x1dd61f(0x7d8))](_0x24869e[_0x1dd61f(0x39c)]['map'](function(_0x500851) {
                            var _0x5257e1 = _0x1dd61f;
                            return _0x26659b[_0x500851[_0x5257e1(0x483)]];
                        }));
                    }), _0x41dfa0['Uc'] = new _0x4bc5bb[(_0x1ef227(0x7d8))](_0x38a6dc[_0x1ef227(0x841)][_0x1ef227(0x39c)][_0x1ef227(0x751)](function(_0x2aef51) {
                        var _0xff7583 = _0x1ef227;
                        return _0x26659b[_0x2aef51[_0xff7583(0x483)]];
                    })), _0x41dfa0['Vc'] = {}, _0x56ebe2(_0x38a6dc[_0x1ef227(0x224)], function(_0x28dc53, _0x11bed1) {
                        var _0x17669e = _0x1ef227;
                        _0x28dc53 = parseInt(_0x28dc53), _0x41dfa0['Vc'][_0x28dc53] = new _0x4bc5bb['WearSkinData'](_0x11bed1[_0x17669e(0x39c)][_0x17669e(0x751)](function(_0x867450) {
                            var _0x18415d = _0x17669e;
                            return _0x26659b[_0x867450[_0x18415d(0x483)]];
                        }));
                    }), _0x41dfa0['Wc'] = new _0x4bc5bb[(_0x1ef227(0x7d8))](_0x38a6dc['glassesUnknown'][_0x1ef227(0x39c)][_0x1ef227(0x751)](function(_0x5652ad) {
                        var _0x3ad36e = _0x1ef227;
                        return _0x26659b[_0x5652ad[_0x3ad36e(0x483)]];
                    })), _0x41dfa0['Xc'] = {}, _0x56ebe2(_0x38a6dc[_0x1ef227(0x724)], function(_0x352d1a, _0x1fb293) {
                        var _0x508a4f = _0x1ef227;
                        _0x352d1a = parseInt(_0x352d1a), _0x41dfa0['Xc'][_0x352d1a] = new _0x4bc5bb[(_0x508a4f(0x7d8))](_0x1fb293[_0x508a4f(0x39c)]['map'](function(_0x5718f7) {
                            return _0x26659b[_0x5718f7['region']];
                        }));
                    }), _0x41dfa0['Yc'] = new _0x4bc5bb[(_0x1ef227(0x7d8))](_0x38a6dc['hatUnknown'][_0x1ef227(0x39c)]['map'](function(_0x554587) {
                        var _0x1c2d32 = _0x1ef227;
                        return _0x26659b[_0x554587[_0x1c2d32(0x483)]];
                    })), _0x41dfa0['Jc'] = {}, _0x56ebe2(_0x38a6dc[_0x1ef227(0x335)], function(_0x139480, _0x7caa67) {
                        var _0xc48c30 = _0x1ef227;
                        _0x139480 = parseInt(_0x139480), _0x41dfa0['Jc'][_0x139480] = new _0x4bc5bb[(_0xc48c30(0x75c))](_0x26659b[_0x7caa67[_0xc48c30(0x39c)]], _0x26659b[_0x7caa67[_0xc48c30(0x2b7)]]);
                    });
                    var _0x515acd = _0x38a6dc[_0x1ef227(0x303)];
                    _0x41dfa0['Kc'] = new _0x4bc5bb['PortionSkinData'](_0x26659b[_0x515acd['base']], _0x26659b[_0x515acd[_0x1ef227(0x2b7)]]), _0x41dfa0['Lc'] = {}, _0x56ebe2(_0x38a6dc['abilityDict'], function(_0x427cf2, _0x49f99e) {
                        var _0x2037b0 = _0x1ef227;
                        _0x427cf2 = parseInt(_0x427cf2), _0x41dfa0['Lc'][_0x427cf2] = new _0x4bc5bb[(_0x2037b0(0x79e))](_0x26659b[_0x49f99e[_0x2037b0(0x39c)]]);
                    });
                    var _0x30e09a = _0x38a6dc['abilityUnknown'];
                    return _0x41dfa0['Mc'] = new _0x4bc5bb['AbilitySkinData'](_0x26659b[_0x30e09a[_0x1ef227(0x39c)]]), _0x41dfa0['Pc'] = {}, _0x56ebe2(_0x38a6dc[_0x1ef227(0x7e8)], function(_0x1cd063, _0x413814) {
                        var _0x4bafbc = _0x1ef227;
                        _0x1cd063 = parseInt(_0x1cd063), _0x41dfa0['Pc'][_0x1cd063] = new _0x4bc5bb['TeamSkinData'](_0x413814[_0x4bafbc(0x431)], new _0x4bc5bb[(_0x4bafbc(0x373))]('#' + _0x809cad[_0x413814[_0x4bafbc(0x38a)][_0x4bafbc(0x62f)]], [], _0x413814['skin'][_0x4bafbc(0x2b7)][_0x4bafbc(0x751)](function(_0x3c6152) {
                            return _0x26659b[_0x3c6152];
                        })), new _0x4bc5bb[(_0x4bafbc(0x75c))]([], _0x26659b[_0x413814['portion'][_0x4bafbc(0x2b7)]]));
                    }), _0x41dfa0['Qc'] = new _0x4bc5bb[(_0x1ef227(0x7ca))]({}, _0x41dfa0['Oc'], _0x41dfa0['Kc']), _0x41dfa0;
                }, _0x5396a0[_0x257099(0x6f4)]['dd'] = function(_0x1dbde1) {
                    var _0x2d32da = _0x257099,
                        _0x1c2c65 = this['Nc'][_0x1dbde1];
                    return _0x1c2c65 && (Array[_0x2d32da(0x84b)](_0x1c2c65['$c']) && _0x1c2c65['$c'][_0x2d32da(0x39f)](_0x624e5a => optimizarTextura(_0x624e5a)), Array[_0x2d32da(0x84b)](_0x1c2c65['Zc']) && _0x1c2c65['Zc'][_0x2d32da(0x39f)](_0x4a89fa => optimizarTextura(_0x4a89fa))), _0x1c2c65 || this['Oc'];
                }, _0x5396a0['prototype']['ed'] = function(_0x33ddc0) {
                    var _0x522769 = this['Pc'][_0x33ddc0];
                    return _0x522769 || this['Qc'];
                }, _0x5396a0[_0x257099(0x6f4)]['fd'] = function(_0x3cb14b) {
                    var _0xd2c6cd = this['Rc'][_0x3cb14b];
                    return _0xd2c6cd || this['Sc'];
                }, _0x5396a0[_0x257099(0x6f4)]['gd'] = function(_0x1feb17) {
                    var _0x409d00 = this['Tc'][_0x1feb17];
                    return _0x409d00 || this['Uc'];
                }, _0x5396a0[_0x257099(0x6f4)]['hd'] = function(_0x111e49) {
                    var _0x543839 = this['Vc'][_0x111e49];
                    return _0x543839 || this['Wc'];
                }, _0x5396a0[_0x257099(0x6f4)]['jd'] = function(_0x2fc5f9) {
                    var _0x499540 = this['Xc'][_0x2fc5f9];
                    return _0x499540 || this['Yc'];
                }, _0x5396a0[_0x257099(0x6f4)]['kd'] = function(_0x1e3fd2) {
                    var _0x423b82 = this['Jc'][_0x1e3fd2];
                    if (_0x423b82) {
                        if (_0x423b82['$c']) optimizarTextura(_0x423b82['$c']);
                        if (_0x423b82['Zc']) optimizarTextura(_0x423b82['Zc']);
                    }
                    return _0x423b82 || this['Kc'];
                }, _0x5396a0[_0x257099(0x6f4)]['ld'] = function(_0x3f4d6a) {
                    var _0x316694 = this['Lc'][_0x3f4d6a];
                    return _0x316694 || this['Mc'];
                }, _0x5396a0['TeamSkinData'] = (function() {
                    function _0x5a645d(_0x19c455, _0x1b6366, _0x467c8f) {
                        this['ad'] = _0x19c455, this['bd'] = _0x1b6366, this['cd'] = _0x467c8f;
                    }
                    return _0x5a645d;
                }()), _0x5396a0['WormSkinData'] = (function() {
                    function _0x6af37c(_0x18fc4c, _0x1b767f, _0x98aa4) {
                        this['_c'] = _0x18fc4c, this['Zc'] = _0x1b767f, this['$c'] = _0x98aa4;
                    }
                    return _0x6af37c;
                }()), _0x5396a0['WearSkinData'] = (function() {
                    function _0x2feb1b(_0x516248) {
                        this['Zc'] = _0x516248;
                    }
                    return _0x2feb1b;
                }()), _0x5396a0['PortionSkinData'] = (function() {
                    function _0x1aabef(_0x5dcc89, _0x2f8b66) {
                        this['Zc'] = _0x5dcc89, this['$c'] = _0x2f8b66;
                    }
                    return _0x1aabef;
                }()), _0x5396a0[_0x257099(0x79e)] = (function() {
                    function _0x3ef839(_0x2bfb3c) {
                        this['Zc'] = _0x2bfb3c;
                    }
                    return _0x3ef839;
                }()), _0x5396a0;
            }()),
            _0x21c0b9 = (function() {
                var _0x49713d = _0xde0f64;

                function _0x240202() {
                    this['md'] = _0x21c0b9['AudioState']['ua'], this['nd'] = !0x1, this['od'] = !0x1, this['pd'] = null, this['qd'] = null;
                }
                _0x240202[_0x49713d(0x6f4)]['a'] = function() {}, _0x240202[_0x49713d(0x6f4)]['rd'] = function(_0x544a04) {
                    this['od'] = _0x544a04;
                }, _0x240202[_0x49713d(0x6f4)]['G'] = function(_0x3f1ad1) {
                    this['md'] = _0x3f1ad1, this['sd']();
                }, _0x240202[_0x49713d(0x6f4)]['td'] = function(_0x364b20) {
                    this['nd'] = _0x364b20, this['sd']();
                }, _0x240202[_0x49713d(0x6f4)]['sd'] = function() {}, _0x240202[_0x49713d(0x6f4)]['ud'] = function(_0x4efaef, _0x521859) {
                    var _0x334653 = _0x49713d;
                    if (!_0x3b8490()['p']['W']) return null;
                    var _0x3ef0ee = _0x4efaef[_0x521859];
                    return null == _0x3ef0ee || 0x0 == _0x3ef0ee[_0x334653(0x30a)] ? null : _0x3ef0ee[Math[_0x334653(0x391)](Math[_0x334653(0x201)]() * _0x3ef0ee['length'])][_0x334653(0x27f)]();
                }, _0x240202[_0x49713d(0x6f4)]['vd'] = function(_0x57f591, _0x3e097c, _0x47fd9a) {
                    var _0x1c5287 = _0x49713d;
                    if (this['od'] && !(_0x47fd9a <= 0x0)) {
                        var _0x87062 = this['ud'](_0x57f591, _0x3e097c);
                        null != _0x87062 && (_0x87062[_0x1c5287(0x3cc)] = Math[_0x1c5287(0x363)](0x1, _0x47fd9a), _0x87062[_0x1c5287(0x23a)]());
                    }
                }, _0x240202[_0x49713d(0x6f4)]['wd'] = function(_0x3f9c3f, _0x456adf) {
                    this['md']['xd'] && this['vd'](app['q']['yd'], _0x3f9c3f, _0x456adf);
                }, _0x240202[_0x49713d(0x6f4)]['zd'] = function(_0x5a0d4f, _0x57bcf3) {
                    this['md']['Ad'] && this['vd'](app['q']['Bd'], _0x5a0d4f, _0x57bcf3);
                }, _0x240202[_0x49713d(0x6f4)]['Cd'] = function() {}, _0x240202[_0x49713d(0x6f4)]['Dd'] = function() {}, _0x240202[_0x49713d(0x6f4)]['Ed'] = function() {}, _0x240202[_0x49713d(0x6f4)]['Fd'] = function() {}, _0x240202['prototype']['Gd'] = function() {}, _0x240202[_0x49713d(0x6f4)]['Hd'] = function() {}, _0x240202[_0x49713d(0x6f4)]['Id'] = function(_0x460488, _0x51d222, _0x3c8077) {}, _0x240202[_0x49713d(0x6f4)]['Jd'] = function(_0x4544d9) {}, _0x240202[_0x49713d(0x6f4)]['Kd'] = function(_0xcc1eb9) {}, _0x240202[_0x49713d(0x6f4)]['Ld'] = function(_0x409dc0) {}, _0x240202[_0x49713d(0x6f4)]['Md'] = function(_0x322a23) {}, _0x240202['prototype']['Nd'] = function(_0x5e16b2) {}, _0x240202[_0x49713d(0x6f4)]['Od'] = function(_0x1bdeca) {}, _0x240202['prototype']['Pd'] = function(_0x4d15dd) {}, _0x240202['prototype']['Qd'] = function(_0x3f8258) {}, _0x240202['prototype']['Rd'] = function(_0x38ab1d) {}, _0x240202[_0x49713d(0x6f4)]['Sd'] = function(_0x1853ad) {}, _0x240202[_0x49713d(0x6f4)]['Td'] = function(_0x3c3057) {}, _0x240202['prototype']['Ud'] = function(_0x3c86dd) {}, _0x240202[_0x49713d(0x6f4)]['Vd'] = function(_0x28956c) {}, _0x240202['prototype']['Wd'] = function(_0x351bd2) {}, _0x240202['prototype']['Xd'] = function(_0x26f470, _0x13cc4c) {}, _0x240202[_0x49713d(0x6f4)]['Yd'] = function(_0x1ba114) {}, _0x240202[_0x49713d(0x6f4)]['Zd'] = function(_0x1f897c, _0x26464f, _0x40b455) {};
                var _0x218ad3 = ((function() {
                    var _0x3329 = _0x49713d;

                    function _0x484406(_0x2b509b) {
                        var _0x2f8e1e = _0x47fe;
                        this['$d'] = new _0x218ad3(_0x2b509b, 0.5), this['$d']['_d'][_0x2f8e1e(0x341)] = !0x0, this['ae'] = !0x1;
                    }
                    _0x484406[_0x3329(0x6f4)]['be'] = function(_0x7bfb87) {
                        _0x7bfb87 ? this['b']() : this['ce']();
                    }, _0x484406[_0x3329(0x6f4)]['b'] = function() {
                        this['ae'] || (this['ae'] = !0x0, this['$d']['de'] = 0x0, this['$d']['ee'](0x5dc, 0x64));
                    }, _0x484406[_0x3329(0x6f4)]['ce'] = function() {
                        this['ae'] && (this['ae'] = !0x1, this['$d']['fe'](0x5dc, 0x64));
                    };
                }()), (function() {
                    var _0x519d11 = _0x49713d;

                    function _0x48791d(_0x496e6d) {
                        var _0x16c247 = _0x47fe;
                        this['ge'] = _0x496e6d[_0x16c247(0x751)](function(_0x49604d) {
                            return new _0x218ad3(_0x49604d, 0.4);
                        }), _0x1af404(this['ge'], 0x0, this['ge'][_0x16c247(0x30a)]), this['he'] = null, this['ie'] = 0x0, this['ae'] = !0x1, this['je'] = 0x2710;
                    }

                    function _0x1af404(_0x2f22f2, _0x531878, _0x44ad58) {
                        var _0x23d62b = _0x47fe;
                        for (var _0x5da537 = _0x44ad58 - 0x1; _0x5da537 > _0x531878; _0x5da537--) {
                            var _0x5f54a6 = _0x531878 + Math[_0x23d62b(0x391)](Math[_0x23d62b(0x201)]() * (_0x5da537 - _0x531878 + 0x1)),
                                _0x5afc05 = _0x2f22f2[_0x5da537];
                            _0x2f22f2[_0x5da537] = _0x2f22f2[_0x5f54a6], _0x2f22f2[_0x5f54a6] = _0x5afc05;
                        }
                    }
                    _0x48791d[_0x519d11(0x6f4)]['be'] = function(_0x133e7f) {
                        _0x133e7f ? this['b']() : this['ce']();
                    }, _0x48791d[_0x519d11(0x6f4)]['b'] = function() {
                        this['ae'] || (this['ae'] = !0x0, this['ke'](0x5dc));
                    }, _0x48791d['prototype']['ce'] = function() {
                        this['ae'] && (this['ae'] = !0x1, null != this['he'] && this['he']['fe'](0x320, 0x32));
                    }, _0x48791d[_0x519d11(0x6f4)]['ke'] = function(_0x606cab) {
                        var _0x35acc5 = _0x519d11;
                        if (this['ae']) {
                            null == this['he'] && (this['he'] = this['le']()), this['he']['_d']['currentTime'] + this['je'] / 0x3e8 > this['he']['_d'][_0x35acc5(0x5eb)] && (this['he'] = this['le'](), this['he']['_d'][_0x35acc5(0x45b)] = 0x0), console[_0x35acc5(0x435)]('Current\x20track\x20\x27' + this['he']['_d']['src'] + _0x35acc5(0x395) + (0x3e8 * (this['he']['_d'][_0x35acc5(0x5eb)] - this['he']['_d'][_0x35acc5(0x45b)]) - this['je'])), this['he']['de'] = 0x0, this['he']['ee'](_0x606cab, 0x64);
                            var _0x1fe56d = 0x3e8 * (this['he']['_d'][_0x35acc5(0x5eb)] - this['he']['_d'][_0x35acc5(0x45b)]) - this['je'],
                                _0x327a06 = this,
                                _0x31a916 = setTimeout(function() {
                                    var _0x25276d = _0x35acc5;
                                    _0x327a06['ae'] && _0x31a916 == _0x327a06['ie'] && (_0x327a06['he']['fe'](_0x327a06['je'], 0x64), _0x327a06['he'] = _0x327a06['le'](), _0x327a06['he']['_d'][_0x25276d(0x45b)] = 0x0, _0x327a06['ke'](_0x327a06['je']));
                                }, _0x1fe56d);
                            this['ie'] = _0x31a916;
                        }
                    }, _0x48791d[_0x519d11(0x6f4)]['le'] = function() {
                        var _0x2ccb80 = _0x519d11,
                            _0x3afe6b = this['ge'][0x0],
                            _0x462f7c = Math[_0x2ccb80(0x604)](0x1, this['ge'][_0x2ccb80(0x30a)] / 0x2);
                        return _0x1af404(this['ge'], _0x462f7c, this['ge'][_0x2ccb80(0x30a)]), this['ge']['push'](this['ge']['shift']()), _0x3afe6b;
                    };
                }()), (function() {
                    var _0x49b6b5 = _0x49713d;

                    function _0x3542f0(_0x3bd255, _0x34fa8d) {
                        var _0x5e51fe = _0x47fe;
                        this['_d'] = _0x3bd255, this['me'] = _0x34fa8d, this['de'] = 0x0, _0x3bd255[_0x5e51fe(0x3cc)] = 0x0, this['ne'] = 0x0, this['oe'] = !0x1;
                    }
                    return _0x3542f0[_0x49b6b5(0x6f4)]['ee'] = function(_0xa49dc9, _0x361beb) {
                        var _0x964be4 = _0x49b6b5;
                        console[_0x964be4(0x435)](_0x964be4(0x2b4) + this['_d'][_0x964be4(0x68e)]), this['pe'](!0x0, _0xa49dc9, _0x361beb);
                    }, _0x3542f0[_0x49b6b5(0x6f4)]['fe'] = function(_0x46c323, _0x1d6e0a) {
                        var _0x26207f = _0x49b6b5;
                        console['log'](_0x26207f(0x854) + this['_d'][_0x26207f(0x68e)]), this['pe'](!0x1, _0x46c323, _0x1d6e0a);
                    }, _0x3542f0[_0x49b6b5(0x6f4)]['pe'] = function(_0x56bb36, _0x14cc1f, _0x13cfba) {
                        var _0x107452 = _0x49b6b5;
                        this['oe'] && clearInterval(this['ne']);
                        var _0x56566f = this,
                            _0xd3ff79 = 0x1 / (_0x14cc1f / _0x13cfba),
                            _0x572e3c = setInterval(function() {
                                var _0x4c8381 = _0x47fe;
                                if (_0x56566f['oe'] && _0x572e3c != _0x56566f['ne']) return void clearInterval(_0x572e3c);
                                _0x56bb36 ? (_0x56566f['de'] = Math[_0x4c8381(0x363)](0x1, _0x56566f['de'] + _0xd3ff79), _0x56566f['_d'][_0x4c8381(0x3cc)] = _0x56566f['de'] * _0x56566f['me'], _0x56566f['de'] >= 0x1 && (_0x56566f['oe'] = !0x1, clearInterval(_0x572e3c))) : (_0x56566f['de'] = Math[_0x4c8381(0x604)](0x0, _0x56566f['de'] - _0xd3ff79), _0x56566f['_d'][_0x4c8381(0x3cc)] = _0x56566f['de'] * _0x56566f['me'], _0x56566f['de'] <= 0x0 && (_0x56566f['_d'][_0x4c8381(0x2bf)](), _0x56566f['oe'] = !0x1, clearInterval(_0x572e3c)));
                            }, _0x13cfba);
                        this['oe'] = !0x0, this['ne'] = _0x572e3c, this['_d'][_0x107452(0x23a)]();
                    }, _0x3542f0;
                }()));
                return _0x240202[_0x49713d(0x233)] = {
                    'ua': {
                        'qe': !0x1,
                        're': !0x1,
                        'Ad': !0x0,
                        'xd': !0x1
                    },
                    'F': {
                        'qe': !0x1,
                        're': !0x0,
                        'Ad': !0x0,
                        'xd': !0x1
                    },
                    'H': {
                        'qe': !0x0,
                        're': !0x1,
                        'Ad': !0x1,
                        'xd': !0x0
                    },
                    'Ea': {
                        'qe': !0x1,
                        're': !0x1,
                        'Ad': !0x0,
                        'xd': !0x1
                    },
                    'qa': {
                        'qe': !0x1,
                        're': !0x1,
                        'Ad': !0x1,
                        'xd': !0x1
                    }
                }, _0x240202;
            }()),
            _0x411be4 = (function() {
                var _0x3b1ef7 = _0xde0f64;

                function _0x4255b2(_0x334fe3) {
                    var _0x244a3f = _0x47fe;
                    this['se'] = _0x334fe3, this['te'] = _0x334fe3[_0x244a3f(0x505)]()[0x0], this['ue'] = new _0x3b7e96['ac']({
                        'view': this['te'],
                        'backgroundColor': _0x1a8082,
                        'antialias': !0x0
                    }), this['ve'] = new _0x3b7e96['Zb'](), this['ve'][_0x244a3f(0x56a)] = !0x0, this['we'] = [], this['xe'] = [], this['ye'] = [], this['a']();
                }
                var _0x1a8082 = 0x0,
                    _0x3d73fd = function(_0x25e6ec, _0x2ad998) {
                        var _0x5df012 = _0x47fe;
                        return _0x25e6ec + Math[_0x5df012(0x201)](_0x2ad998 - _0x25e6ec);
                    },
                    _0x1b75ba = function(_0x4f0451) {
                        var _0xed723f = _0x47fe;
                        return _0x4f0451 >= 0x0 ? Math[_0xed723f(0x76a)](_0x4f0451 % _0x5c286d) : Math[_0xed723f(0x76a)](_0x4f0451 % _0x5c286d + _0x5c286d);
                    },
                    _0x30ea8d = function(_0x450087) {
                        var _0x490921 = _0x47fe;
                        return _0x450087 >= 0x0 ? Math[_0x490921(0x2d7)](_0x450087 % _0x5c286d) : Math[_0x490921(0x2d7)](_0x450087 % _0x5c286d + _0x5c286d);
                    },
                    _0x42c9af = [{
                        'ze': _0x3d73fd(0x0, _0x5c286d),
                        'Ae': _0x3d73fd(0x0, _0x5c286d),
                        'Be': _0x3d73fd(0.1, 0.5),
                        'Ce': 0x1,
                        'De': 0x2,
                        'Ee': 0xff66aa
                    }, {
                        'ze': _0x3d73fd(0x0, _0x5c286d),
                        'Ae': _0x3d73fd(0x0, _0x5c286d),
                        'Be': _0x3d73fd(0.1, 0.5),
                        'Ce': 1.5,
                        'De': 1.5,
                        'Ee': 0xff8888
                    }, {
                        'ze': _0x3d73fd(0x0, _0x5c286d),
                        'Ae': _0x3d73fd(0x0, _0x5c286d),
                        'Be': _0x3d73fd(0.1, 0.5),
                        'Ce': 0x2,
                        'De': 0x1,
                        'Ee': 0xffaa66
                    }, {
                        'ze': _0x3d73fd(0x0, _0x5c286d),
                        'Ae': _0x3d73fd(0x0, _0x5c286d),
                        'Be': _0x3d73fd(0.1, 0.5),
                        'Ce': 0x3,
                        'De': 0x2,
                        'Ee': 0xaaff66
                    }, {
                        'ze': _0x3d73fd(0x0, _0x5c286d),
                        'Ae': _0x3d73fd(0x0, _0x5c286d),
                        'Be': _0x3d73fd(0.1, 0.5),
                        'Ce': 2.5,
                        'De': 2.5,
                        'Ee': 0x88ff88
                    }, {
                        'ze': _0x3d73fd(0x0, _0x5c286d),
                        'Ae': _0x3d73fd(0x0, _0x5c286d),
                        'Be': _0x3d73fd(0.1, 0.5),
                        'Ce': 0x2,
                        'De': 0x3,
                        'Ee': 0x66ffaa
                    }, {
                        'ze': _0x3d73fd(0x0, _0x5c286d),
                        'Ae': _0x3d73fd(0x0, _0x5c286d),
                        'Be': _0x3d73fd(0.1, 0.5),
                        'Ce': 0x5,
                        'De': 0x4,
                        'Ee': 0x66aaff
                    }, {
                        'ze': _0x3d73fd(0x0, _0x5c286d),
                        'Ae': _0x3d73fd(0x0, _0x5c286d),
                        'Be': _0x3d73fd(0.1, 0.5),
                        'Ce': 4.5,
                        'De': 4.5,
                        'Ee': 0x8888ff
                    }, {
                        'ze': _0x3d73fd(0x0, _0x5c286d),
                        'Ae': _0x3d73fd(0x0, _0x5c286d),
                        'Be': _0x3d73fd(0.1, 0.5),
                        'Ce': 0x4,
                        'De': 0x5,
                        'Ee': 0xaa66ff
                    }];
                return _0x4255b2[_0x3b1ef7(0x6f4)]['a'] = function() {
                    var _0x4d2acb = _0x3b1ef7,
                        _0xe79d6c = _0x3b8490();
                    this['ue'][_0x4d2acb(0x4ac)] = _0x1a8082, this['we'] = new Array(_0x42c9af[_0x4d2acb(0x30a)]);
                    for (var _0x262057 = 0x0; _0x262057 < this['we'][_0x4d2acb(0x30a)]; _0x262057++) {
                        this['we'][_0x262057] = new _0x3b7e96['ec'](), this['we'][_0x262057][_0x4d2acb(0x273)] = _0xe79d6c['q']['Fe'], this['we'][_0x262057][_0x4d2acb(0x5f4)][_0x4d2acb(0x3ce)](0.5), this['we'][_0x262057]['zIndex'] = 0x1;
                    }
                    this['xe'] = new Array(_0xe79d6c['q']['Ge'][_0x4d2acb(0x30a)]);
                    for (var _0x48ea18 = 0x0; _0x48ea18 < this['xe'][_0x4d2acb(0x30a)]; _0x48ea18++) {
                        this['xe'][_0x48ea18] = new _0x3b7e96['ec'](), this['xe'][_0x48ea18]['texture'] = _0xe79d6c['q']['Ge'][_0x48ea18], this['xe'][_0x48ea18]['anchor']['set'](0.5), this['xe'][_0x48ea18][_0x4d2acb(0x4f0)] = 0x2, this['ve'][_0x4d2acb(0x6f9)](this['xe'][_0x48ea18]);
                    }
                    this['ye'] = new Array(this['xe'][_0x4d2acb(0x30a)]);
                    for (var _0x3e8718 = 0x0; _0x3e8718 < this['ye'][_0x4d2acb(0x30a)]; _0x3e8718++) {
                        this['ye'][_0x3e8718] = {
                            'He': Math[_0x4d2acb(0x201)](),
                            'Ie': Math[_0x4d2acb(0x201)](),
                            'Je': Math[_0x4d2acb(0x201)](),
                            'Ke': Math[_0x4d2acb(0x201)]()
                        };
                    }
                    this['Ra']();
                }, _0x4255b2['sc'] = !0x1, _0x4255b2['Le'] = function(_0xb903be) {
                    _0x4255b2['sc'] = _0xb903be;
                }, _0x4255b2[_0x3b1ef7(0x6f4)]['Ra'] = function() {
                    var _0xc66064 = _0x3b1ef7,
                        _0x59875e = window[_0xc66064(0x548)] ? window[_0xc66064(0x548)] : 0x1,
                        _0x4ab7f9 = this['se']['width'](),
                        _0x465663 = this['se'][_0xc66064(0x561)]();
                    this['ue'][_0xc66064(0x72c)](_0x4ab7f9, _0x465663), this['ue'][_0xc66064(0x34a)] = _0x59875e, this['te']['width'] = _0x59875e * _0x4ab7f9, this['te'][_0xc66064(0x561)] = _0x59875e * _0x465663;
                    for (var _0x22eb04 = 0.8 * Math[_0xc66064(0x604)](_0x4ab7f9, _0x465663), _0x3abb82 = 0x0; _0x3abb82 < this['we'][_0xc66064(0x30a)]; _0x3abb82++) this['we'][_0x3abb82][_0xc66064(0x785)] = _0x22eb04, this['we'][_0x3abb82][_0xc66064(0x561)] = _0x22eb04;
                }, _0x4255b2[_0x3b1ef7(0x6f4)]['Pa'] = function(_0x5d93b2, _0x45aab9) {
                    var _0x49a448 = _0x3b1ef7;
                    if (_0x4255b2['sc']) {
                        for (var _0x238f10 = _0x5d93b2 / 0x3e8, _0x185de1 = _0x45aab9 / 0x3e8, _0x470b35 = this['se']['width'](), _0x3cb435 = this['se'][_0x49a448(0x561)](), _0x232ef6 = 0x0; _0x232ef6 < this['we'][_0x49a448(0x30a)]; _0x232ef6++) {
                            var _0x28e5c9 = _0x42c9af[_0x232ef6 % _0x42c9af[_0x49a448(0x30a)]],
                                _0x1a3a5c = this['we'][_0x232ef6],
                                _0x259da0 = _0x1b75ba(_0x28e5c9['Ce'] * (0.08 * _0x238f10) + _0x28e5c9['Ae']),
                                _0x425e90 = _0x30ea8d(_0x28e5c9['De'] * (0.08 * _0x238f10)),
                                _0x16facb = 0.2 + 0.2 * _0x1b75ba(_0x28e5c9['Ae'] + _0x28e5c9['Be'] * _0x238f10);
                            _0x1a3a5c[_0x49a448(0x76e)] = _0x28e5c9['Ee'], _0x1a3a5c[_0x49a448(0x7ec)] = _0x16facb, _0x1a3a5c[_0x49a448(0x797)][_0x49a448(0x3ce)](_0x470b35 * (0.2 + 0.5 * (_0x259da0 + 0x1) * 0.6), _0x3cb435 * (0.1 + 0.5 * (_0x425e90 + 0x1) * 0.8));
                        }
                        for (var _0x4f972a = 0.05 * Math['max'](_0x470b35, _0x3cb435), _0x5ed9ee = 0x0; _0x5ed9ee < this['xe'][_0x49a448(0x30a)]; _0x5ed9ee++) {
                            var _0x53b5c6 = this['ye'][_0x5ed9ee],
                                _0x538b8f = this['xe'][_0x5ed9ee],
                                _0x4a2fee = _0x5c286d * _0x5ed9ee / this['xe'][_0x49a448(0x30a)] + _0x53b5c6['He'];
                            _0x53b5c6['Ke'] += _0x53b5c6['Ie'] * _0x185de1, _0x53b5c6['Ke'] > 1.3 && (_0x53b5c6['He'] = Math['random']() * _0x5c286d, _0x53b5c6['Ie'] = 0.66 * (0.09 + 0.07 * Math['random']()), _0x53b5c6['Je'] = 0.15 + 0.7 * Math[_0x49a448(0x201)](), _0x53b5c6['Ke'] = -0.3);
                            var _0x567930 = _0x53b5c6['Je'] + 0.03 * Math[_0x49a448(0x2d7)](0x6 * Math[_0x49a448(0x2d7)](_0x4a2fee + 0.48 * _0x238f10)),
                                _0x46bf60 = _0x53b5c6['Ke'],
                                _0x4413dd = _0x40b39a(Math[_0x49a448(0x2d7)](Math['PI'] * _0x46bf60), 0.1, 0x1),
                                _0x6ae7ab = 0.5 * (0.4 + 0.5 * (0x1 + Math[_0x49a448(0x2d7)](_0x4a2fee + 0.12 * _0x238f10)) * 1.2),
                                _0x276f05 = _0x4a2fee + 0x2 * _0x53b5c6['Ie'] * _0x238f10;
                            _0x538b8f[_0x49a448(0x7ec)] = _0x4413dd, _0x538b8f[_0x49a448(0x797)][_0x49a448(0x3ce)](_0x470b35 * _0x567930, _0x3cb435 * _0x46bf60), _0x538b8f['rotation'] = _0x276f05;
                            var _0x1deda2 = _0x538b8f[_0x49a448(0x273)][_0x49a448(0x785)] / _0x538b8f[_0x49a448(0x273)][_0x49a448(0x561)];
                            _0x538b8f[_0x49a448(0x785)] = _0x6ae7ab * _0x4f972a, _0x538b8f[_0x49a448(0x561)] = _0x6ae7ab * _0x4f972a * _0x1deda2;
                        }
                        this['ue'][_0x49a448(0x285)](this['ve'], null, !0x0);
                    }
                }, _0x4255b2;
            }()),
            _0x4b2a4b = (function() {
                var _0x54cb04 = _0xde0f64;

                function _0x53cdeb() {}
                return _0x53cdeb['Na'] = _0x54cb04(0x512), _0x53cdeb['ya'] = 'showPlayerNames', _0x53cdeb['Me'] = _0x54cb04(0x7c1), _0x53cdeb['Ne'] = _0x54cb04(0x717), _0x53cdeb['Oe'] = _0x54cb04(0x606), _0x53cdeb['va'] = 'gameMode', _0x53cdeb['Aa'] = _0x54cb04(0x5b6), _0x53cdeb['Ba'] = _0x54cb04(0x38a), _0x53cdeb['d'] = _0x54cb04(0x84f), _0x53cdeb['La'] = 'shared', _0x53cdeb;
            }()),
            _0x4fc620 = (function() {
                function _0x743002(_0x392ab0, _0x95df05, _0x3d1ddf) {
                    for (var _0x56fc83 = !0x1, _0x5e4075 = _0x3d1ddf['length'], _0xe1c2f8 = 0x0, _0x53bc3e = _0x5e4075 - 0x1; _0xe1c2f8 < _0x5e4075; _0x53bc3e = _0xe1c2f8++) _0x3d1ddf[_0xe1c2f8][0x1] > _0x95df05 != _0x3d1ddf[_0x53bc3e][0x1] > _0x95df05 && _0x392ab0 < (_0x3d1ddf[_0x53bc3e][0x0] - _0x3d1ddf[_0xe1c2f8][0x0]) * (_0x95df05 - _0x3d1ddf[_0xe1c2f8][0x1]) / (_0x3d1ddf[_0x53bc3e][0x1] - _0x3d1ddf[_0xe1c2f8][0x1]) + _0x3d1ddf[_0xe1c2f8][0x0] && (_0x56fc83 = !_0x56fc83);
                    return _0x56fc83;
                }
                var _0x4bac1c = [
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
                    'Oa': function(_0x570655, _0xd66fe4) {
                        return _0x743002(_0xd66fe4, _0x570655, _0x4bac1c);
                    }
                };
            }()),
            _0xacc6c6 = (function() {
                var _0xb4d9a3 = _0xde0f64;

                function _0x27f7fd(_0x42e343) {
                    var _0x160ad7 = _0x47fe,
                        _0x19ad69 = void 0x0;
                    _0x19ad69 = _0x42e343 > 0x0 ? '+' + Math[_0x160ad7(0x391)](_0x42e343) : _0x42e343 < 0x0 ? '-' + Math[_0x160ad7(0x391)](_0x42e343) : '0';
                    var _0x217ca1 = Math[_0x160ad7(0x363)](1.5, 0.5 + _0x42e343 / 0x258),
                        _0x122603 = void 0x0;
                    if (_0x42e343 < 0x1) _0x122603 = _0x160ad7(0x5e3);
                    else {
                        if (_0x42e343 < 0x1e) {
                            var _0x3ba9ab = (_0x42e343 - 0x1) / 0x1d;
                            _0x122603 = _0x578f06(0x1 * (0x1 - _0x3ba9ab) + 0.96 * _0x3ba9ab, 0x1 * (0x1 - _0x3ba9ab) + 0.82 * _0x3ba9ab, 0x1 * (0x1 - _0x3ba9ab) + 0x0 * _0x3ba9ab);
                        } else {
                            if (_0x42e343 < 0x12c) {
                                var _0x25263f = (_0x42e343 - 0x1e) / 0x10e;
                                _0x122603 = _0x578f06(0.96 * (0x1 - _0x25263f) + 0.93 * _0x25263f, 0.82 * (0x1 - _0x25263f) + 0.34 * _0x25263f, 0x0 * (0x1 - _0x25263f) + 0.25 * _0x25263f);
                            } else {
                                if (_0x42e343 < 0x2bc) {
                                    var _0x585fdb = (_0x42e343 - 0x12c) / 0x190;
                                    _0x122603 = _0x578f06(0.93 * (0x1 - _0x585fdb) + 0.98 * _0x585fdb, 0.34 * (0x1 - _0x585fdb) + 0x0 * _0x585fdb, 0.25 * (0x1 - _0x585fdb) + 0.98 * _0x585fdb);
                                } else _0x122603 = _0x578f06(0.98, 0x0, 0.98);
                            }
                        }
                    }
                    var _0xf07ccb = Math[_0x160ad7(0x201)](),
                        _0x47bf13 = 0x1 + 0.5 * Math['random']();
                    return new _0x38cc3b(_0x19ad69, _0x122603, !![], 0.5, _0x217ca1, _0xf07ccb, _0x47bf13);
                }

                function _0x39a796(_0x3acabe, _0x4856f1) {
                    var _0x136e42 = void 0x0,
                        _0x23c83a = void 0x0;
                    return _0x4856f1 ? (_0x136e42 = 1.3, _0x23c83a = _0x578f06(0.93, 0.34, 0.25)) : (_0x136e42 = 1.1, _0x23c83a = _0x578f06(0.96, 0.82, 0x0)), new _0x38cc3b(_0x3acabe, _0x23c83a, !![], 0.5, _0x136e42, 0.5, 0.7);
                }

                function _0x578f06(_0x528417, _0xa9e684, _0x56ebeb) {
                    return ((0xff * _0x528417 & 0xff) << 0x10) + ((0xff * _0xa9e684 & 0xff) << 0x8) + (0xff * _0x56ebeb & 0xff);
                }
                var _0x3f86fa = _0x39eae9(_0x3b7e96['Zb'], function() {
                    var _0x4e587b = _0x47fe;
                    _0x3b7e96['Zb'][_0x4e587b(0x371)](this), this['Pe'] = [], this['Qe'] = 0x0;
                });
                _0x3f86fa[_0xb4d9a3(0x6f4)]['Re'] = function(_0xc0d4c6) {
                    var _0x355ddd = _0xb4d9a3;
                    if (this['Qe'] += _0xc0d4c6, this['Qe'] >= 0x1) {
                        var _0x592e76 = Math[_0x355ddd(0x391)](this['Qe']);
                        this['Qe'] -= _0x592e76;
                        var _0x298e0f = _0x27f7fd(_0x592e76);
                        this[_0x355ddd(0x6f9)](_0x298e0f), this['Pe'][_0x355ddd(0x236)](_0x298e0f);
                    }
                }, _0x3f86fa[_0xb4d9a3(0x6f4)]['Se'] = function(_0x54f776) {
                    var _0x113417 = _0xb4d9a3;
                    if (_0x54f776) {
                        zw_hscount += 0x1, zwormData['hs'] = zw_hscount;
                        !(zw_hscount % 0xa) ? soundEnabled && zw_laughsound[_0x113417(0x23a)](): soundEnabled && zw_hssound[_0x113417(0x23a)]();
                        var _0x5793c3 = _0x39a796(zwormData[_0x113417(0x5b6)][_0x113417(0x78f)](0x0, 0x10) + '-â˜ ï¸-' + zwormData[_0x113417(0x3bb)]['substring'](0x0, 0x10), !![]);
                        this['addChild'](_0x5793c3), this['Pe'][_0x113417(0x236)](_0x5793c3);
                    } else {
                        zw_killcount += 0x1;
                        var _0x5793c3 = _0x39a796(_0x34e632(_0x113417(0x227)) + 'âœ¨', ![]);
                        this[_0x113417(0x6f9)](_0x5793c3), this['Pe'][_0x113417(0x236)](_0x5793c3);
                    }
                }, _0x3f86fa['prototype']['Te'] = function(_0x139bde, _0x32ac6f) {
                    var _0x154a9f = _0xb4d9a3,
                        _0x30165e = _0x3b8490()['s']['H']['wb'],
                        _0xee39c3 = _0x30165e['ue']['width'] / _0x30165e['ue'][_0x154a9f(0x34a)],
                        _0x59ad53 = _0x30165e['ue'][_0x154a9f(0x561)] / _0x30165e['ue'][_0x154a9f(0x34a)],
                        _0x2e5411 = 0x0;
                    for (; _0x2e5411 < this['Pe'][_0x154a9f(0x30a)];) {
                        var _0x100b78 = this['Pe'][_0x2e5411];
                        _0x100b78['Ue'] = _0x100b78['Ue'] + _0x32ac6f / 0x7d0 * _0x100b78['Ve'], _0x100b78['We'] = _0x100b78['We'] + _0x32ac6f / 0x7d0 * _0x100b78['Xe'], _0x100b78[_0x154a9f(0x7ec)] = 0.5 * Math[_0x154a9f(0x2d7)](Math['PI'] * _0x100b78['We']), _0x100b78[_0x154a9f(0x266)][_0x154a9f(0x3ce)](_0x100b78['Ue']), _0x100b78[_0x154a9f(0x797)]['x'] = _0xee39c3 * (0.25 + 0.5 * _0x100b78['Ye']), _0x100b78[_0x154a9f(0x797)]['y'] = _0x100b78['Ze'] ? _0x59ad53 * (0x1 - 0.5 * (0x1 + _0x100b78['We'])) : _0x59ad53 * (0x1 - 0.5 * (0x0 + _0x100b78['We'])), _0x100b78['We'] > 0x1 && (_0x346065(_0x100b78), this['Pe']['splice'](_0x2e5411, 0x1), _0x2e5411--), _0x2e5411++;
                    }
                };
                var _0x38cc3b = (function() {
                    return _0x39eae9(_0x3b7e96['fc'], function(_0x261306, _0x6daa76, _0x3c9fe8, _0x37492d, _0x698557, _0x504b74, _0x1feea8) {
                        var _0x401b38 = _0x47fe;
                        _0x3b7e96['fc'][_0x401b38(0x371)](this, _0x261306, {
                            'fill': _0x6daa76,
                            'fontFamily': fonts[currentFontIndex],
                            'fontSize': 0x24
                        }), this[_0x401b38(0x5f4)][_0x401b38(0x3ce)](0.5), this['Ze'] = _0x3c9fe8, this['Ue'] = _0x37492d, this['Ve'] = _0x698557, this['Ye'] = _0x504b74, this['We'] = 0x0, this['Xe'] = _0x1feea8;
                    });
                }());
                return _0x3f86fa;
            }()),
            _0x4f3cd1 = (function() {
                function _0x2f2842(_0x33de8b, _0x54d36a) {
                    this['Gc'] = _0x33de8b, this['Hc'] = _0x54d36a;
                }
                return _0x2f2842;
            }()),
            _0x5f555c = {
                '$e': 0x0,
                '_e': 0x10
            },
            _0x7639bb = (function() {
                var _0xd4e8a6 = _0xde0f64;

                function _0x1add4f() {
                    this['af'] = _0x5f555c['$e'], this['bf'] = 0x0, this['ub'] = 0x1f4, this['cf'] = 0xfa0, this['df'] = 0x1b58;
                }
                return _0x1add4f['TEAM_DEFAULT'] = 0x0, _0x1add4f[_0xd4e8a6(0x6f4)]['ef'] = function() {
                    return 1.02 * this['ub'];
                }, _0x1add4f;
            }()),
            _0x17fe98 = (function() {
                var _0x3b81f6 = _0xde0f64;

                function _0x4e551b(_0x1ee05a) {
                    var _0x4a3926 = _0x47fe;
                    this['se'] = _0x1ee05a, this['te'] = _0x1ee05a[_0x4a3926(0x505)]()[0x0], this['ue'] = new _0x3b7e96['ac']({
                        'view': this['te'],
                        'backgroundColor': _0x2c5325,
                        'antialias': !![]
                    }), this['ve'] = new _0x3b7e96['Zb'](), this['ve'][_0x4a3926(0x56a)] = !![], this['ff'] = Math['floor'](0x168 * Math[_0x4a3926(0x201)]()), this['gf'] = 0x0, this['hf'] = 0x0, this['if'] = 0xf, this['jf'] = 0.5, this['kf'] = 0x0, this['lf'] = new _0x9bf0c6(), this['mf'] = new _0x3b7e96['bc'](), this['nf'] = new _0x3b7e96['Zb'](), this['pf'] = new _0x3b7e96['Zb'](), this['pf'][_0x4a3926(0x56a)] = !![], this['qf'] = new _0x3b7e96['Zb'](), this['rf'] = new _0x3b7e96['Zb'](), this['rf'][_0x4a3926(0x56a)] = !![], this['sf'] = new _0x3b7e96['Zb'](), this['tf'] = new _0x23528d(), this['uf'] = new _0x5de355(), this['vf'] = new _0x236718(), this['wf'] = new _0xacc6c6(), this['xf'] = new _0x3b7e96['ec'](), this['yf'] = {
                        'x': 0x0,
                        'y': 0x0
                    }, this['a']();
                }
                var _0x2c5325 = 0x0;
                _0x4e551b['prototype']['a'] = function() {
                    var _0x448f73 = _0x47fe;
                    zw_joysticks = [], zw_joystick = -0x1, zw_servertext = new _0x3b7e96['fc']('', {
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0xc,
                        'fill': _0x448f73(0x3e4),
                        'align': _0x448f73(0x71b)
                    }), zw_servertext['x'] = 0x19, zw_serverping = new _0x3b7e96['fc']('', {
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0xc,
                        'fill': '#ffffff',
                        'align': _0x448f73(0x71b)
                    }), zw_serverping['x'] = 0x55, zw_serverfps = new _0x3b7e96['fc']('', {
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0xc,
                        'fill': _0x448f73(0x3e4),
                        'align': _0x448f73(0x71b)
                    }), zw_serverfps['x'] = 0x82;
                    if (zw_mobilecheck()) {
                        zw_joysticks[0x0] = new Joystick({
                            'onChange': _0x2f9631 => {
                                var _0x15c132 = _0x448f73;
                                _0x2f9631['aradian'] = _0x2f9631[_0x15c132(0x4af)] * (Math['PI'] / 0xb4), anApp['s']['H']['sk'] = _0x2f9631['aradian'] <= Math['PI'] ? -0x1 * _0x2f9631[_0x15c132(0x5d7)] : Math['PI'] - (_0x2f9631[_0x15c132(0x5d7)] - Math['PI']);
                            }
                        }), zw_joysticks[0x0]['visible'] = ![], zw_joysticks[0x1] = new Joystick({
                            'outer': _0x3b7e96['ec']['from'](_0x448f73(0x422)),
                            'inner': _0x3b7e96['ec'][_0x448f73(0x2a8)](_0x448f73(0x6b1)),
                            'onChange': _0x4de649 => {
                                var _0x31acbe = _0x448f73;
                                _0x4de649[_0x31acbe(0x5d7)] = _0x4de649[_0x31acbe(0x4af)] * (Math['PI'] / 0xb4), anApp['s']['H']['sk'] = _0x4de649[_0x31acbe(0x5d7)] <= Math['PI'] ? -0x1 * _0x4de649[_0x31acbe(0x5d7)] : Math['PI'] - (_0x4de649['aradian'] - Math['PI']);
                            }
                        }), zw_joysticks[0x1]['visible'] = ![], zw_joysticks[0x2] = new Joystick({
                            'outer': _0x3b7e96['ec'][_0x448f73(0x2a8)](_0x448f73(0x478)),
                            'inner': _0x3b7e96['ec']['from'](_0x448f73(0x52e)),
                            'onChange': _0x65d425 => {
                                var _0x3b82d0 = _0x448f73;
                                _0x65d425['aradian'] = _0x65d425[_0x3b82d0(0x4af)] * (Math['PI'] / 0xb4), anApp['s']['H']['sk'] = _0x65d425[_0x3b82d0(0x5d7)] <= Math['PI'] ? -0x1 * _0x65d425[_0x3b82d0(0x5d7)] : Math['PI'] - (_0x65d425[_0x3b82d0(0x5d7)] - Math['PI']);
                            }
                        }), zw_joysticks[0x2][_0x448f73(0x3d0)] = ![];
                        for (let _0x161e9a = 0x0; _0x161e9a < zw_joysticks[_0x448f73(0x30a)]; _0x161e9a++) {
                            this['rf']['addChild'](zw_joysticks[_0x161e9a]);
                        }
                    }
                    zw_zoomtext = new _0x3b7e96['fc']('', {
                        'align': _0x448f73(0x71b),
                        'fill': _0x448f73(0x368),
                        'fontSize': 0xc,
                        'lineJoin': _0x448f73(0x223),
                        'whiteSpace': _0x448f73(0x31d),
                        'wordWrap': !![],
                        'fontWeight': _0x448f73(0x69d)
                    }), zw_zoomtext['x'] = 0x64, zw_zoomtext['y'] = 0x5a, this['rf']['addChild'](zw_zoomtext), this['ue'][_0x448f73(0x4ac)] = _0x2c5325, this['lf']['zf'][_0x448f73(0x4f0)] = 0xa, this['ve'][_0x448f73(0x6f9)](this['lf']['zf']), zw_Background = new _0x3b7e96['bc'](), zw_Background['zIndex'] = 0x14, this['ve']['addChild'](zw_Background), ctxHeadshotLine = new _0x3b7e96['bc'](), ctxHeadshotLine[_0x448f73(0x4f0)] = 0x14, this['ve'][_0x448f73(0x6f9)](ctxHeadshotLine), this['mf']['zIndex'] = 0x14, this['ve'][_0x448f73(0x6f9)](this['mf']), this['nf']['zIndex'] = 0x1388, this['ve'][_0x448f73(0x6f9)](this['nf']), this['pf']['zIndex'] = 0x13ec, this['ve']['addChild'](this['pf']), this['qf'][_0x448f73(0x4f0)] = 0x2710, this['ve']['addChild'](this['qf']), this['xf'][_0x448f73(0x273)] = _0x3b8490()['q']['Af'], this['xf'][_0x448f73(0x5f4)]['set'](0.5), this['xf'][_0x448f73(0x4f0)] = 0x1, this['rf'][_0x448f73(0x6f9)](this['xf']), this['sf'][_0x448f73(0x7ec)] = 0.6, this['sf'][_0x448f73(0x4f0)] = 0x2, this['rf'][_0x448f73(0x6f9)](this['sf']), this['wf'][_0x448f73(0x4f0)] = 0x3, this['rf'][_0x448f73(0x6f9)](this['wf']), this['tf'][_0x448f73(0x7ec)] = 0.8, this['tf'][_0x448f73(0x4f0)] = 0x4, this['rf'][_0x448f73(0x6f9)](this['tf']), this['uf'][_0x448f73(0x4f0)] = 0x5, this['rf']['addChild'](this['uf']), this['vf'][_0x448f73(0x4f0)] = 0x6, this['rf'][_0x448f73(0x6f9)](this['vf']), this['Ra']();
                }, _0x4e551b[_0x3b81f6(0x6f4)]['Ra'] = function() {
                    var _0x350f95 = _0x3b81f6,
                        _0x48dd2b = window[_0x350f95(0x548)] ? window[_0x350f95(0x548)] : 0x1,
                        _0x3a51ea = this['se'][_0x350f95(0x785)](),
                        _0x7bd401 = this['se'][_0x350f95(0x561)]();
                    this['ue'][_0x350f95(0x72c)](_0x3a51ea, _0x7bd401), this['ue'][_0x350f95(0x34a)] = _0x48dd2b, this['te'][_0x350f95(0x785)] = _0x48dd2b * _0x3a51ea, this['te'][_0x350f95(0x561)] = _0x48dd2b * _0x7bd401, this['jf'] = Math['min'](Math[_0x350f95(0x363)](_0x3a51ea, _0x7bd401), 0.625 * Math[_0x350f95(0x604)](_0x3a51ea, _0x7bd401)), this['xf'][_0x350f95(0x797)]['x'] = _0x3a51ea / 0x2, this['xf']['position']['y'] = _0x7bd401 / 0x2, this['xf'][_0x350f95(0x785)] = _0x3a51ea, this['xf'][_0x350f95(0x561)] = _0x7bd401, this['tf'][_0x350f95(0x797)]['x'] = 0x3c, this['tf'][_0x350f95(0x797)]['y'] = 0x3c, this['uf'][_0x350f95(0x797)]['x'] = 0x6e, this['uf']['position']['y'] = 0xa, this['vf'][_0x350f95(0x797)]['x'] = _0x3a51ea - 0xe1, this['vf'][_0x350f95(0x797)]['y'] = 0x1, this['tf'][_0x350f95(0x6f9)](ctx['pointsContainer']), this['tf'][_0x350f95(0x6f9)](ctx['teamsContainer']), theoKzObjects[_0x350f95(0x685)] ? this['tf'][_0x350f95(0x6f9)](zw_TopHS_RecordHs) : _0x346065(zw_TopHS_RecordHs), theoKzObjects[_0x350f95(0x666)] ? this['tf'][_0x350f95(0x6f9)](ctx[_0x350f95(0x5d4)]) : _0x346065(ctx[_0x350f95(0x5d4)]);
                }, _0x4e551b[_0x3b81f6(0x6f4)]['Te'] = function(_0x2b024d, _0x26390a) {
                    var _0x40cf46 = _0x3b81f6,
                        _0x41d209 = _0x3b8490();
                    this['if'] = 0xf, this['nf'][_0x40cf46(0x6e6)](), this['pf'][_0x40cf46(0x6e6)](), this['qf'][_0x40cf46(0x6e6)](), this['sf'][_0x40cf46(0x6e6)](), this['lf']['Bf'](_0x2b024d['af'] == _0x5f555c['$e'] ? _0x41d209['q']['Cf'] : _0x41d209['q']['Df']), theoKzObjects && theoKzObjects[_0x40cf46(0x2f8)] || theoKzObjects[_0x40cf46(0x408)] ? setSectorsGame() : (zw_Background['removeChildren'](), zw_Background[_0x40cf46(0x39b)](), zw_Background[_0x40cf46(0x645)](0x1, 0xff0000, 0x1), zw_Background[_0x40cf46(0x2e5)](0x0, 0x0, 0x1f4), zw_Background[_0x40cf46(0x64c)]()), this['vf']['Ef'] = _0x26390a, this['sf'][_0x40cf46(0x3d0)] = _0x26390a;
                }, _0x4e551b[_0x3b81f6(0x6f4)]['Pa'] = function(_0xef5a9f, _0x388c34) {
                    var _0x431338 = _0x3b81f6;
                    if (!(this['ue']['width'] <= 0x5)) {
                        var _0x442f3f = _0x3b8490(),
                            _0x41a4b9 = _0x442f3f['o']['N'],
                            _0xd85fe8 = this['ue'][_0x431338(0x785)] / this['ue'][_0x431338(0x34a)],
                            _0xb75e50 = this['ue'][_0x431338(0x561)] / this['ue'][_0x431338(0x34a)];
                        this['if'] = _0x15e3ec(this['if'], _0x442f3f['o']['jb'], _0x388c34, 0.002);
                        var _0x30327e = this['jf'] / (this['if'] * zw_multiplier),
                            _0x45c662 = (this['if'] = _0x15e3ec(this['if'], _0x442f3f['o']['jb'], _0x388c34, 0.002), this['jf'] / (this['if'] * zw_multiplier)),
                            _0x310bcd = _0x442f3f['o']['N']['Ff'][_0x322d70[_0x431338(0x305)]],
                            _0x133a15 = null != _0x310bcd && _0x310bcd['sc'];
                        this['kf'] = _0x2bd5f8(0x0, 0x1, this['kf'] + _0x388c34 / 0x3e8 * (0.1 * (_0x133a15 ? 0x1 : 0x0) - this['kf'])), this['xf']['alpha'] = this['kf'], this['ff'] = this['ff'] + 0.01 * _0x388c34;
                        this['ff'] > 0x168 && (this['ff'] = this['ff'] % 0x168);
                        this['gf'] = Math[_0x431338(0x2d7)](_0xef5a9f / 0x4b0 * 0x2 * Math['PI']);
                        var _0x5188ad = _0x41a4b9['Gf']();
                        this['yf']['x'] = _0x13d2e8(this['yf']['x'], _0x5188ad['x'], _0x388c34, theoKzObjects['smoothCamera'], 33.333), this['yf']['y'] = _0x13d2e8(this['yf']['y'], _0x5188ad['y'], _0x388c34, 0.5, 33.333);
                        var _0x19ea32 = _0xd85fe8 / _0x30327e / 0x2,
                            _0x3aa2a8 = _0xb75e50 / _0x30327e / 0x2;
                        _0x442f3f['o']['yb'](this['yf']['x'] - 1.3 * _0x19ea32, this['yf']['x'] + 1.3 * _0x19ea32, this['yf']['y'] - 1.3 * _0x3aa2a8, this['yf']['y'] + 1.3 * _0x3aa2a8), this['lf']['Te'](this['yf']['x'], this['yf']['y'], 0x2 * _0x19ea32, 0x2 * _0x3aa2a8);
                        var _0x2b84da = _0x442f3f['o']['fb']['ub'];
                        this['ve']['scale']['x'] = _0x30327e, this['ve']['scale']['y'] = _0x30327e, this['ve'][_0x431338(0x797)]['x'] = _0xd85fe8 / 0x2 - this['yf']['x'] * _0x30327e, this['ve'][_0x431338(0x797)]['y'] = _0xb75e50 / 0x2 - this['yf']['y'] * _0x30327e;
                        theoKzObjects['dead'] && (window['coords'] = {
                            'playerX': this['tf']['Jf']['position']['x'],
                            'playerY': this['tf']['Jf'][_0x431338(0x797)]['y']
                        });
                        zwormData[_0x431338(0x758)] = this['tf']['Jf'][_0x431338(0x797)]['x'], zwormData['playerY'] = this['tf']['Jf'][_0x431338(0x797)]['y'];
                        theoKzObjects['laserHS'] ? (ctxHeadshotLine[_0x431338(0x39b)](), ctxHeadshotLine[_0x431338(0x645)](0.1, '0x' + theoObjects[_0x431338(0x736)], 0x1), ctxHeadshotLine[_0x431338(0x3c5)](_0x5188ad['x'], _0x5188ad['y']), ctxHeadshotLine['lineTo'](0x0, 0x0), ctxHeadshotLine['endFill']()) : ctxHeadshotLine[_0x431338(0x39b)]();
                        var _0x463941 = Math['hypot'](_0x5188ad['x'], _0x5188ad['y']);
                        if (_0x463941 > _0x2b84da - 0xa) {
                            this['hf'] = _0x2bd5f8(0x0, 0x1, 0x1 + (_0x463941 - _0x2b84da) / 0xa);
                            var _0x23475e = Math['cos'](this['ff'] * _0x5c286d / 0x168) * (0x1 - this['hf']) + 0x1 * this['hf'],
                                _0x3f79db = Math[_0x431338(0x2d7)](this['ff'] * _0x5c286d / 0x168) * (0x1 - this['hf']),
                                _0xd38e22 = (Math[_0x431338(0x50c)](_0x3f79db, _0x23475e) + _0x5c286d) % _0x5c286d * 0x168 / _0x5c286d,
                                _0x7739a8 = this['hf'] * (0.5 + 0.5 * this['gf']),
                                _0xa39f85 = _0x4bb383(Math[_0x431338(0x391)](_0xd38e22), 0x1, 0.75 - 0.25 * this['hf']);
                            this['lf']['Hf'](_0xa39f85[0x0], _0xa39f85[0x1], _0xa39f85[0x2], 0.1 + 0.2 * _0x7739a8);
                        } else {
                            this['hf'] = 0x0;
                            var _0x18c7b0 = _0x4bb383(Math[_0x431338(0x391)](this['ff']), 0x1, 0.75);
                            this['lf']['Hf'](_0x18c7b0[0x0], _0x18c7b0[0x1], _0x18c7b0[0x2], 0.1);
                        }
                        var _0x24c60a = 0x0;
                        for (; _0x24c60a < this['sf'][_0x431338(0x77f)][_0x431338(0x30a)]; _0x24c60a++) {
                            var _0x4880cc = this['sf']['children'][_0x24c60a];
                            _0x4880cc['If'] && (_0x4880cc['position']['x'] = _0xd85fe8 / 0x2 - (this['yf']['x'] - _0x4880cc['If']['x']) * _0x30327e, _0x4880cc['position']['y'] = _0xb75e50 / 0x2 - (this['yf']['y'] - _0x4880cc['If']['y']) * _0x30327e);
                        }
                        this['tf']['Jf'][_0x431338(0x797)]['x'] = _0x5188ad['x'] / _0x2b84da * this['tf']['Kf'], this['tf']['Jf'][_0x431338(0x797)]['y'] = _0x5188ad['y'] / _0x2b84da * this['tf']['Kf'], this['tf'][_0x431338(0x3ba)][_0x431338(0x797)]['x'] = -0x19 - this['tf']['WLp'][_0x431338(0x785)] / 0x2, this['tf'][_0x431338(0x3ba)][_0x431338(0x32d)] = parseInt(zw_hscount), this['tf'][_0x431338(0x3ba)][_0x431338(0x577)][_0x431338(0x691)] = '0x' + theoObjects['hsTextColor'], this['tf'][_0x431338(0x2f3)][_0x431338(0x797)]['x'] = 0x19 - this['tf']['MLb'][_0x431338(0x785)] / 0x2, this['tf'][_0x431338(0x2f3)][_0x431338(0x32d)] = parseInt(zw_killcount), this['tf']['MLb'][_0x431338(0x577)]['fill'] = '0x' + theoObjects[_0x431338(0x73a)], this['uf']['Qa'](_0xef5a9f), this['wf']['Te'](_0xef5a9f, _0x388c34), this['ue'][_0x431338(0x285)](this['ve'], null, !![]), this['ue'][_0x431338(0x285)](this['rf'], null, ![]);
                        let _0x13ee43 = performance[_0x431338(0x7bc)](),
                            _0x3f8bf4 = _0x13ee43 - lastFrameTime;
                        lastFrameTime = _0x13ee43;
                        let _0x32f86e = 0x3e8 / _0x3f8bf4;
                        frameTimes['push'](_0x32f86e);
                        if (frameTimes[_0x431338(0x30a)] > 0x14) frameTimes[_0x431338(0x703)]();
                        let _0x53e040 = Math[_0x431338(0x223)](frameTimes[_0x431338(0x22a)]((_0x5d1162, _0x47ec59) => _0x5d1162 + _0x47ec59, 0x0) / frameTimes[_0x431338(0x30a)]);
                        zw_serverfps[_0x431338(0x32d)] = _0x53e040 + '\x20FPS', zw_serverfps[_0x431338(0x577)][_0x431338(0x691)] = getFPSColor(_0x53e040), hstext[_0x431338(0x577)][_0x431338(0x691)] = '0x' + theoObjects[_0x431338(0x2a6)], killtext['style'][_0x431338(0x691)] = '0x' + theoObjects['killTextColor'], circle['tint'] = '0x' + theoObjects[_0x431338(0x6af)];
                    }
                }, _0x4e551b[_0x3b81f6(0x6f4)]['Lf'] = function(_0x575896, _0x5907e0) {
                    var _0x3f3995 = _0x3b81f6;
                    _0x5907e0['Of']['Nf']['Mf']()['zIndex'] = (_0x575896 + 0x80000000) / 0x100000000 * 0x1388, this['nf'][_0x3f3995(0x6f9)](_0x5907e0['Of']['Pf']['Mf']()), this['pf'][_0x3f3995(0x6f9)](_0x5907e0['Of']['Nf']['Mf']());
                }, _0x4e551b[_0x3b81f6(0x6f4)]['Qf'] = function(_0x3ac807, _0x3e9ae0, _0x3131da, _0x3de42c, _0x135561) {
                    var _0x1e0600 = _0x3b81f6;
                    $(_0x1e0600(0x4f3))[_0x1e0600(0x32d)](_0x1e0600(0x2e7) + _0x3131da[_0x1e0600(0x32d)]), _0x3e9ae0['Rf']['zIndex'] = _0x3b8490()['o']['fb']['bf'] ? 0x0 : 0xa + (_0x3ac807 + 0x8000) / 0x10000 * 0x1388, this['qf'][_0x1e0600(0x6f9)](_0x3e9ae0['Rf']), _0x3ac807 != _0x3b8490()['o']['fb']['bf'] && (this['sf'][_0x1e0600(0x6f9)](_0x3131da), this['sf']['addChild'](_0x3de42c), this['sf'][_0x1e0600(0x6f9)](_0x135561)), _0x3131da[_0x1e0600(0x32d)] === _0x3b8490()['o']['N']['Mb']['ad'] && (_0x3131da[_0x1e0600(0x32d)] = '.'), this['sf']['addChild'](_0x3131da), this['sf'][_0x1e0600(0x6f9)](_0x3de42c), this['sf'][_0x1e0600(0x6f9)](_0x135561);
                };
                var _0x23528d = (function() {
                        return _0x39eae9(_0x3b7e96['Zb'], function() {
                            var _0x3cc0b7 = _0x47fe;
                            _0x3b7e96['Zb'][_0x3cc0b7(0x371)](this), this['Kf'] = 0x28, this['Sf'] = new _0x3b7e96['ec'](), this['Sf'][_0x3cc0b7(0x5f4)][_0x3cc0b7(0x3ce)](0.5), this['Jf'] = new _0x3b7e96['bc'](), circle = new _0x3b7e96['bc'](), circle['beginFill']('black', 0.4), circle['drawCircle'](0x0, 0x0, this['Kf']), circle[_0x3cc0b7(0x64c)](), circle[_0x3cc0b7(0x645)](0x2, 0xe3d2d2), circle[_0x3cc0b7(0x2e5)](0x0, 0x0, this['Kf']), circle[_0x3cc0b7(0x3c5)](0x0, -this['Kf']), circle[_0x3cc0b7(0x603)](0x0, +this['Kf']), circle[_0x3cc0b7(0x3c5)](-this['Kf'], 0x0), circle[_0x3cc0b7(0x603)](+this['Kf'], 0x0), circle[_0x3cc0b7(0x64c)](), this['Sf'][_0x3cc0b7(0x7ec)] = 0.5, this['Jf'][_0x3cc0b7(0x4f0)] = 0x2, this['Jf'][_0x3cc0b7(0x7ec)] = 0.9, this['Jf'][_0x3cc0b7(0x514)](zwormData[_0x3cc0b7(0x2f9)]), this['Jf'][_0x3cc0b7(0x2e5)](0x0, 0x0, 0.12 * this['Kf']), this['Jf']['endFill'](), this['Jf'][_0x3cc0b7(0x645)](0x1, _0x3cc0b7(0x671)), this['Jf']['drawCircle'](0x0, 0x0, 0.12 * this['Kf']), this['Jf'][_0x3cc0b7(0x64c)](), this['addChild'](circle), this['addChild'](this['Sf']), this[_0x3cc0b7(0x6f9)](this['Jf']), zw_MinimapSombra = new _0x3b7e96['ec'](), zw_MinimapSombra[_0x3cc0b7(0x5f4)][_0x3cc0b7(0x3ce)](0.5), zw_MinimapSombra[_0x3cc0b7(0x7ec)] = 0.5, zw_MinimapTeamCode = new _0x3b7e96['bc'](), zw_MinimapTeamCode['beginFill'](_0x3cc0b7(0x671), 0.4), zw_MinimapTeamCode['drawCircle'](0x0, 0x0, 0x28), zw_MinimapTeamCode[_0x3cc0b7(0x64c)](), zw_MinimapTeamCode[_0x3cc0b7(0x645)](0x2, 0xe3d2d2), zw_MinimapTeamCode['drawCircle'](0x0, 0x0, 0x28), zw_MinimapTeamCode[_0x3cc0b7(0x3c5)](0x0, -0x28), zw_MinimapTeamCode[_0x3cc0b7(0x603)](0x0, +0x28), zw_MinimapTeamCode['moveTo'](-0x28, 0x0), zw_MinimapTeamCode[_0x3cc0b7(0x603)](+0x28, 0x0), zw_MinimapTeamCode[_0x3cc0b7(0x64c)](), zw_MinimapTeamCode['y'] = 0xdc, zw_MinimapTeamCode['x'] = 0x96, zw_MinimapTeamCode['addChild'](zw_MinimapSombra), console['log'](this['Kf']), hstext = new _0x3b7e96['fc']('HS', {
                                'fontFamily': fonts[currentFontIndex],
                                'fontSize': 0x10,
                                'fill': '0x' + theoObjects['hsTextColor'],
                                'align': 'center'
                            }), hstext[_0x3cc0b7(0x797)]['y'] = 0x32, hstext[_0x3cc0b7(0x797)]['x'] = -0x23, killtext = new _0x3b7e96['fc']('KILL', {
                                'fontFamily': fonts[currentFontIndex],
                                'fontSize': 0x10,
                                'fill': '0x' + theoObjects['killTextColor'],
                                'align': 'center'
                            }), killtext[_0x3cc0b7(0x797)]['y'] = 0x32, killtext[_0x3cc0b7(0x797)]['x'] = 0xa, this['addChild'](hstext), this[_0x3cc0b7(0x6f9)](killtext), zw_killcount = 0x0, zw_hscount = 0x0, this['WLp'] = new _0x3b7e96['fc']('', {
                                'fontFamily': fonts[currentFontIndex],
                                'fontSize': 0xe,
                                'fill': _0x3cc0b7(0x504),
                                'align': _0x3cc0b7(0x71b)
                            }), this[_0x3cc0b7(0x3ba)][_0x3cc0b7(0x797)]['y'] = 0x43, this[_0x3cc0b7(0x3ba)][_0x3cc0b7(0x797)]['x'] = -0x2d, this['MLb'] = new _0x3b7e96['fc']('', {
                                'fontFamily': fonts[currentFontIndex],
                                'fontSize': 0xe,
                                'fill': _0x3cc0b7(0x504),
                                'align': 'center'
                            }), this[_0x3cc0b7(0x2f3)][_0x3cc0b7(0x797)]['y'] = 0x43, this[_0x3cc0b7(0x2f3)][_0x3cc0b7(0x797)]['x'] = 0x14, this[_0x3cc0b7(0x6f9)](this[_0x3cc0b7(0x3ba)]), this[_0x3cc0b7(0x6f9)](this[_0x3cc0b7(0x2f3)]);
                            let _0x19cae5 = new _0x3b7e96['_b'](_0x3b7e96['$b'][_0x3cc0b7(0x2a8)](_0x3cc0b7(0x5a9))),
                                _0x3beb31 = new _0x3b7e96['ec']();
                            _0x3beb31[_0x3cc0b7(0x273)] = _0x19cae5, _0x3beb31[_0x3cc0b7(0x785)] = 0x64, _0x3beb31[_0x3cc0b7(0x561)] = 0x64, _0x3beb31['x'] = -0x32, _0x3beb31['y'] = -0x32, this[_0x3cc0b7(0x6f9)](_0x3beb31);
                            let _0x124521 = new _0x3b7e96['ec']();
                            _0x124521[_0x3cc0b7(0x273)] = _0x19cae5, _0x124521['width'] = 0x64, _0x124521[_0x3cc0b7(0x561)] = 0x64, _0x124521['x'] = -0x32, _0x124521['y'] = -0x32, zw_MinimapTeamCode[_0x3cc0b7(0x6f9)](_0x124521);
                            if (zw_mobilecheck()) {
                                var _0x366cfb = document[_0x3cc0b7(0x706)](_0x3cc0b7(0x832));
                                zw_mobilecontrol = 0x0, zw_mobilecontrol2 = -0x1, zw_mobileprediction = 0x0, zw_mobilecontroltextures = [], zw_mobilepredictiontextures = [], zw_mobilecontroltextures[0x0] = new _0x3b7e96['ec'][(_0x3cc0b7(0x2a8))](_0x3cc0b7(0x66c)), zw_mobilecontroltextures[0x0][_0x3cc0b7(0x785)] = 0x50, zw_mobilecontroltextures[0x0][_0x3cc0b7(0x561)] = 0x28, zw_mobilecontroltextures[0x0]['x'] = -0x64 + _0x366cfb[_0x3cc0b7(0x33f)] * 0.5, zw_mobilecontroltextures[0x0]['y'] = -0x3c, zw_mobilecontroltextures[0x0]['on'](_0x3cc0b7(0x2a0), () => {
                                    var _0xed7d4d = _0x3cc0b7;
                                    zw_mobilecontrol++, zw_joystick = 0x0, zw_mobileprediction = -0x1;
                                    for (let _0x324906 = 0x0; _0x324906 < zw_mobilepredictiontextures[_0xed7d4d(0x30a)]; _0x324906++) {
                                        zw_mobilepredictiontextures[_0x324906][_0xed7d4d(0x3d0)] = ![];
                                    }
                                    for (let _0x1bd47b = 0x0; _0x1bd47b < zw_mobilecontroltextures[_0xed7d4d(0x30a)]; _0x1bd47b++) {
                                        zw_mobilecontroltextures[_0x1bd47b][_0xed7d4d(0x3d0)] = zw_mobilecontrol === _0x1bd47b;
                                    }
                                }), zw_mobilecontroltextures[0x1] = new _0x3b7e96['ec'][(_0x3cc0b7(0x2a8))](_0x3cc0b7(0x781)), zw_mobilecontroltextures[0x1][_0x3cc0b7(0x785)] = 0x50, zw_mobilecontroltextures[0x1][_0x3cc0b7(0x561)] = 0x28, zw_mobilecontroltextures[0x1]['x'] = -0x64 + _0x366cfb[_0x3cc0b7(0x33f)] * 0.5, zw_mobilecontroltextures[0x1]['y'] = -0x3c, zw_mobilecontroltextures[0x1][_0x3cc0b7(0x3d0)] = ![], zw_mobilecontroltextures[0x1]['on'](_0x3cc0b7(0x2a0), () => {
                                    var _0x1d30ad = _0x3cc0b7;
                                    if (zw_mobilecontrol2 !== 0x1) {
                                        zw_mobilecontrol2++;
                                        zw_mobilecontrol2 === 0x0 && (zw_mobilearrowtexture['x'] = 0xf, zw_mobilepeedtexture['x'] = -0xfa + _0x366cfb[_0x1d30ad(0x33f)], zw_mobilearrowtexture[_0x1d30ad(0x3d0)] = !![], zw_mobilepeedtexture[_0x1d30ad(0x3d0)] = !![]);
                                        zw_mobilecontrol2 === 0x1 && (zw_mobilearrowtexture['x'] = -0xfa + _0x366cfb[_0x1d30ad(0x33f)], zw_mobilepeedtexture['x'] = 0xf);
                                        zw_mobileprediction = 0x1, zw_joystick = -0x1;
                                        for (let _0xec9e57 = 0x0; _0xec9e57 < zw_mobilepredictiontextures[_0x1d30ad(0x30a)]; _0xec9e57++) {
                                            zw_mobilepredictiontextures[_0xec9e57][_0x1d30ad(0x3d0)] = zw_mobileprediction === _0xec9e57;
                                        }
                                        return;
                                    }
                                    zw_mobilearrowtexture[_0x1d30ad(0x3d0)] = ![], zw_mobilepeedtexture[_0x1d30ad(0x3d0)] = ![], zw_joystick = 0x1, zw_mobilecontrol++;
                                    for (let _0x2d5c67 = 0x0; _0x2d5c67 < zw_mobilecontroltextures[_0x1d30ad(0x30a)]; _0x2d5c67++) {
                                        zw_mobilecontroltextures[_0x2d5c67][_0x1d30ad(0x3d0)] = zw_mobilecontrol === _0x2d5c67;
                                    }
                                }), zw_mobilecontroltextures[0x2] = new _0x3b7e96['ec'][(_0x3cc0b7(0x2a8))](_0x3cc0b7(0x740)), zw_mobilecontroltextures[0x2][_0x3cc0b7(0x785)] = 0x50, zw_mobilecontroltextures[0x2][_0x3cc0b7(0x561)] = 0x28, zw_mobilecontroltextures[0x2]['x'] = -0x64 + _0x366cfb[_0x3cc0b7(0x33f)] * 0.5, zw_mobilecontroltextures[0x2]['y'] = -0x3c, zw_mobilecontroltextures[0x2]['visible'] = ![], zw_mobilecontroltextures[0x2]['on'](_0x3cc0b7(0x2a0), () => {
                                    var _0x1679a8 = _0x3cc0b7;
                                    zw_mobilecontrol++, zw_mobileprediction = 0x2, zw_joystick = 0x2;
                                    for (let _0x2eec5c = 0x0; _0x2eec5c < zw_mobilepredictiontextures['length']; _0x2eec5c++) {
                                        zw_mobilepredictiontextures[_0x2eec5c][_0x1679a8(0x3d0)] = zw_mobileprediction === _0x2eec5c;
                                    }
                                    for (let _0x3f05a9 = 0x0; _0x3f05a9 < zw_mobilecontroltextures[_0x1679a8(0x30a)]; _0x3f05a9++) {
                                        zw_mobilecontroltextures[_0x3f05a9]['visible'] = zw_mobilecontrol === _0x3f05a9;
                                    }
                                }), zw_mobilecontroltextures[0x3] = new _0x3b7e96['ec'][(_0x3cc0b7(0x2a8))]('https://i.imgur.com/n1jVrwm.png'), zw_mobilecontroltextures[0x3][_0x3cc0b7(0x785)] = 0x50, zw_mobilecontroltextures[0x3]['height'] = 0x28, zw_mobilecontroltextures[0x3]['x'] = -0x64 + _0x366cfb[_0x3cc0b7(0x33f)] * 0.5, zw_mobilecontroltextures[0x3]['y'] = -0x3c, zw_mobilecontroltextures[0x3][_0x3cc0b7(0x3d0)] = ![], zw_mobilecontroltextures[0x3]['on'](_0x3cc0b7(0x2a0), () => {
                                    var _0x335c51 = _0x3cc0b7;
                                    zw_mobilecontrol = 0x0, zw_mobilecontrol2 = -0x1, zw_mobileprediction = 0x0, zw_joystick = -0x1;
                                    for (let _0x152394 = 0x0; _0x152394 < zw_mobilepredictiontextures[_0x335c51(0x30a)]; _0x152394++) {
                                        zw_mobilepredictiontextures[_0x152394][_0x335c51(0x3d0)] = zw_mobileprediction === _0x152394;
                                    }
                                    for (let _0x5cfc77 = 0x0; _0x5cfc77 < zw_mobilecontroltextures[_0x335c51(0x30a)]; _0x5cfc77++) {
                                        zw_mobilecontroltextures[_0x5cfc77][_0x335c51(0x3d0)] = zw_mobilecontrol === _0x5cfc77;
                                    }
                                }), zw_mobilepredictiontextures[0x0] = new _0x3b7e96['ec'][(_0x3cc0b7(0x2a8))](_0x3cc0b7(0x46d)), zw_mobilepredictiontextures[0x0][_0x3cc0b7(0x785)] = 0x10, zw_mobilepredictiontextures[0x0][_0x3cc0b7(0x561)] = 0x10, zw_mobilepredictiontextures[0x0]['x'] = 0x0, zw_mobilepredictiontextures[0x0]['y'] = 0x0, zw_mobilepredictiontextures[0x0][_0x3cc0b7(0x7ec)] = 0x0, zw_mobilepredictiontextures[0x1] = new _0x3b7e96['ec'][(_0x3cc0b7(0x2a8))]('https://i.imgur.com/hUVCdUv.png'), zw_mobilepredictiontextures[0x1][_0x3cc0b7(0x785)] = 0x10, zw_mobilepredictiontextures[0x1][_0x3cc0b7(0x561)] = 0x10, zw_mobilepredictiontextures[0x1]['x'] = 0x0, zw_mobilepredictiontextures[0x1]['y'] = 0x0, zw_mobilepredictiontextures[0x1][_0x3cc0b7(0x3d0)] = ![], zw_mobilepredictiontextures[0x2] = new _0x3b7e96['ec'][(_0x3cc0b7(0x2a8))]('https://i.imgur.com/WqWsDfi.png'), zw_mobilepredictiontextures[0x2][_0x3cc0b7(0x785)] = 0x10, zw_mobilepredictiontextures[0x2][_0x3cc0b7(0x561)] = 0x10, zw_mobilepredictiontextures[0x2]['x'] = 0x0, zw_mobilepredictiontextures[0x2]['y'] = 0x0, zw_mobilepredictiontextures[0x2][_0x3cc0b7(0x3d0)] = ![], zw_mobilearrowtexture = new _0x3b7e96['ec'][(_0x3cc0b7(0x2a8))](_0x3cc0b7(0x3a0)), zw_mobilearrowtexture[_0x3cc0b7(0x785)] = 0x64, zw_mobilearrowtexture[_0x3cc0b7(0x561)] = 0x64, zw_mobilearrowtexture['x'] = 0xf, zw_mobilearrowtexture['y'] = -0xd2 + _0x366cfb[_0x3cc0b7(0x6fa)], zw_mobilearrowtexture[_0x3cc0b7(0x3d0)] = ![], zw_mobilepeedtexture = new _0x3b7e96['ec'][(_0x3cc0b7(0x2a8))](_0x3cc0b7(0x21c)), zw_mobilepeedtexture[_0x3cc0b7(0x785)] = 0x50, zw_mobilepeedtexture['height'] = 0x50, zw_mobilepeedtexture['x'] = -0xfa + _0x366cfb[_0x3cc0b7(0x33f)], zw_mobilepeedtexture['y'] = -0xc8 + _0x366cfb[_0x3cc0b7(0x6fa)], zw_mobilepeedtexture[_0x3cc0b7(0x3d0)] = ![], zw_mobilepeedtexture['alpha'] = 0.5, this[_0x3cc0b7(0x6f9)](zw_mobilearrowtexture), this['addChild'](zw_mobilepeedtexture);
                                for (let _0x520343 = 0x0; _0x520343 < zw_mobilecontroltextures[_0x3cc0b7(0x30a)]; _0x520343++) {
                                    this[_0x3cc0b7(0x6f9)](zw_mobilecontroltextures[_0x520343]);
                                }
                                for (let _0x236222 = 0x0; _0x236222 < zw_mobilepredictiontextures[_0x3cc0b7(0x30a)]; _0x236222++) {
                                    this['addChild'](zw_mobilepredictiontextures[_0x236222]);
                                }
                            }
                        });
                    }()),
                    _0x5de355 = (function() {
                        var _0x25a10a = _0x3b81f6,
                            _0x642894 = _0x39eae9(_0x3b7e96['Zb'], function() {
                                var _0x4a5c82 = _0x47fe;
                                _0x3b7e96['Zb'][_0x4a5c82(0x371)](this), this['Tf'] = {};
                            });
                        _0x642894[_0x25a10a(0x6f4)]['Qa'] = function(_0x2b39d4) {
                            var _0x40d22c = _0x25a10a,
                                _0x54e790 = 0.5 + 0.5 * Math[_0x40d22c(0x76a)](_0x5c286d * (_0x2b39d4 / 0x3e8 / 1.6)),
                                _0x40cc6a;
                            for (_0x40cc6a in this['Tf']) {
                                var _0x3f319c = this['Tf'][_0x40cc6a],
                                    _0x29e718 = _0x3f319c['Uf'];
                                _0x3f319c[_0x40d22c(0x7ec)] = 0x1 - _0x29e718 + _0x29e718 * _0x54e790;
                            }
                        }, _0x642894['prototype']['Te'] = function(_0x1c38f3) {
                            var _0xeab964 = _0x25a10a,
                                _0x171ea6;
                            for (_0x171ea6 in this['Tf']) {
                                !(null != _0x1c38f3[_0x171ea6] && _0x1c38f3[_0x171ea6]['sc']) && (_0x346065(this['Tf'][_0x171ea6]), delete this['Tf'][_0x171ea6]);
                            }
                            var _0xa7568e = 0x0,
                                _0x177e13;
                            for (_0x177e13 in _0x1c38f3) {
                                var _0x4e4a18 = _0x1c38f3[_0x177e13];
                                if (_0x4e4a18['sc']) {
                                    var _0x3ea7e1 = this['Tf'][_0x177e13];
                                    if (!_0x3ea7e1) {
                                        var _0x6739bd = _0x3b8490()['p']['Dc']()['ld'](_0x4e4a18['rc'])['Zc'];
                                        _0x3ea7e1 = new _0x1e051f(), _0x3ea7e1[_0xeab964(0x273)] = _0x6739bd['Hc'], _0x3ea7e1[_0xeab964(0x785)] = 0x28, _0x3ea7e1[_0xeab964(0x561)] = 0x28, this['Tf'][_0x177e13] = _0x3ea7e1, this[_0xeab964(0x6f9)](_0x3ea7e1);
                                    }
                                    assignPtcValues(this, _0x177e13, _0x4e4a18['tc']), _0x3ea7e1['Uf'] = _0x4e4a18['tc'], _0x3ea7e1[_0xeab964(0x797)]['x'] = _0xa7568e, _0xa7568e = _0xa7568e + 0x28;
                                }
                            }
                        };
                        var _0x1e051f = (function() {
                            return _0x39eae9(_0x3b7e96['ec'], function() {
                                var _0x535de7 = _0x47fe;
                                _0x3b7e96['ec'][_0x535de7(0x371)](this), this['Uf'] = 0x0;
                            });
                        }());
                        return _0x642894;
                    }()),
                    _0x236718 = (function() {
                        var _0x59db10 = _0x3b81f6,
                            _0x53d3bd = _0x39eae9(_0x3b7e96['Zb'], function() {
                                _0x3b7e96['Zb']['call'](this), this['Ef'] = !![], this['Vf'] = 0xc, this['Wf'] = 0x9, this['Pe'] = [];
                                var _0x2add3c = 0x0;
                                for (; _0x2add3c < 0xe; _0x2add3c++) {
                                    this['Xf']();
                                }
                            });
                        _0x53d3bd[_0x59db10(0x6f4)]['Te'] = function(_0x5226b9) {
                            var _0x5e4277 = _0x59db10;
                            zw_zoomplustexture && this[_0x5e4277(0x6f9)](zw_zoomplustexture);
                            zw_zoomsubtracttexture && this[_0x5e4277(0x6f9)](zw_zoomsubtracttexture);
                            zw_girosubtracttexture && this[_0x5e4277(0x6f9)](zw_girosubtracttexture);
                            zw_explotWubtracttexture && this[_0x5e4277(0x6f9)](zw_explotWubtracttexture);
                            zw_servertext[_0x5e4277(0x32d)] !== '' && (this[_0x5e4277(0x6f9)](zw_servertext), theoKzObjects['minimapTeamcod'] ? this['addChild'](zw_TopFriends_list) : this[_0x5e4277(0x5af)](zw_TopFriends_list));
                            if (zwormData && gameState['players'][_0x5e4277(0x586)] > 0x0) sendPlayerUpdate(zwormData[_0x5e4277(0x758)], zwormData[_0x5e4277(0x5b1)]);
                            else {}
                            var _0x463b8f = _0x3b8490(),
                                _0x59481e = _0x463b8f['o']['fb']['af'] == _0x5f555c['_e'],
                                _0x92338e = 0x0,
                                _0x52a350 = 0x0;
                            _0x52a350 >= this['Pe'][_0x5e4277(0x30a)] && this['Xf']();
                            this['Pe'][_0x52a350]['Yf'](0x1, _0x5e4277(0x42f)), this['Pe'][_0x52a350]['Zf']('', zw_servertext[_0x5e4277(0x32d)] === '' ? 'Top\x20' + zw_toplist : '', '(' [_0x5e4277(0x3c1)](_0x463b8f['o']['tb'], _0x5e4277(0x5bb))), this['Pe'][_0x52a350][_0x5e4277(0x797)]['y'] = _0x92338e, _0x92338e = _0x92338e + this['Vf'], _0x52a350 = _0x52a350 + 0x1;
                            _0x5226b9['$f'][_0x5e4277(0x30a)] > 0x0 && (_0x92338e = _0x92338e + this['Wf']);
                            var _0x18e4ab = 0x0;
                            for (; _0x18e4ab < _0x5226b9['$f'][_0x5e4277(0x30a)]; _0x18e4ab++) {
                                var _0x17a63a = _0x5226b9['$f'][_0x18e4ab],
                                    _0x1665fc = _0x463b8f['p']['Dc']()['ed'](_0x17a63a['_f']);
                                _0x52a350 >= this['Pe']['length'] && this['Xf'](), this['Pe'][_0x52a350]['Yf'](0.8, _0x1665fc['bd']['_c']), console[_0x5e4277(0x435)](_0x1665fc), this['Pe'][_0x52a350]['Zf']('' + (_0x18e4ab + 0x1), _0x5e4277(0x6fb), '' + Math['floor'](_0x17a63a['M'])), this['Pe'][_0x52a350][_0x5e4277(0x797)]['y'] = _0x92338e, _0x92338e = _0x92338e + this['Vf'], _0x52a350 = _0x52a350 + 0x1;
                            }
                            _0x5226b9['ag']['length'] > 0x0 && (_0x92338e = _0x92338e + this['Wf']);
                            var _0x18bac2 = 0x0;
                            for (; _0x18bac2 < _0x5226b9['ag'][_0x5e4277(0x30a)]; _0x18bac2++) {
                                var _0x253eeb = _0x5226b9['ag'][_0x18bac2],
                                    _0xa8cfb2 = _0x463b8f['o']['fb']['bf'] == _0x253eeb['bg'],
                                    _0xb002b7 = void 0x0,
                                    _0x15a84e = void 0x0;
                                if (_0xa8cfb2) _0xb002b7 = 'white', _0x15a84e = _0x463b8f['o']['N']['Mb']['ad'];
                                else {
                                    var _0x1047ba = _0x463b8f['o']['hb'][_0x253eeb['bg']];
                                    null != _0x1047ba ? (_0xb002b7 = _0x59481e ? _0x463b8f['p']['Dc']()['ed'](_0x1047ba['Mb']['cg'])['bd']['_c'] : _0x463b8f['p']['Dc']()['dd'](_0x1047ba['Mb']['dg'])['_c'], _0x15a84e = this['Ef'] ? _0x1047ba['Mb']['ad'] : _0x5e4277(0x579)) : (_0xb002b7 = _0x5e4277(0x4ec), _0x15a84e = '?');
                                }
                                _0xa8cfb2 && (_0x92338e = _0x92338e + this['Wf']);
                                _0x52a350 >= this['Pe']['length'] && this['Xf']();
                                this['Pe'][_0x52a350]['Yf'](_0xa8cfb2 ? 0x1 : 0.8, _0xb002b7);
                                _0x463b8f['o']['O'] === _0x52a350 && this['Pe'][_0x52a350]['Yf'](0x1, 'white');
                                var _0x49e4a2 = Math[_0x5e4277(0x391)](_0x253eeb['M']);
                                _0x49e4a2['customFormat'](), this['Pe'][_0x52a350]['Zf']('' + (_0x18bac2 + 0x1), _0x15a84e, '' + _0x49e4a2[_0x5e4277(0x387)]()), this['Pe'][_0x52a350][_0x5e4277(0x797)]['y'] = _0x92338e, _0x92338e = _0x92338e + this['Vf'], _0x52a350 = _0x52a350 + 0x1, _0xa8cfb2 && (_0x92338e = _0x92338e + this['Wf']);
                            }
                            _0x463b8f['o']['O'] > _0x5226b9['ag'][_0x5e4277(0x30a)] && (_0x92338e = _0x92338e + this['Wf'], _0x52a350 >= this['Pe'][_0x5e4277(0x30a)] && this['Xf'](), this['Pe'][_0x52a350]['Yf'](0x1, '#FFFFFF'), window[_0x5e4277(0x5d5)] = Math[_0x5e4277(0x391)](_0x463b8f['o']['N']['M']), window[_0x5e4277(0x5d5)]['customFormat'](), this['Pe'][_0x52a350]['Zf']('' + _0x463b8f['o']['O'], _0x463b8f['o']['N']['Mb']['ad'], '' + window[_0x5e4277(0x5d5)][_0x5e4277(0x387)]()), this['Pe'][_0x52a350][_0x5e4277(0x797)]['y'] = _0x92338e, _0x92338e = _0x92338e + this['Vf'], _0x52a350 = _0x52a350 + 0x1, _0x92338e = _0x92338e + this['Wf']);
                            for (; this['Pe'][_0x5e4277(0x30a)] > _0x52a350;) {
                                _0x346065(this['Pe'][_0x5e4277(0x5d8)]());
                            }
                        }, _0x53d3bd[_0x59db10(0x6f4)]['Xf'] = function() {
                            var _0xe74fe6 = _0x59db10,
                                _0xcb1886 = new _0x5ee987();
                            _0xcb1886[_0xe74fe6(0x797)]['y'] = 0x0, this['Pe'][_0xe74fe6(0x30a)] > 0x0 && (_0xcb1886[_0xe74fe6(0x797)]['y'] = this['Pe'][this['Pe']['length'] - 0x1][_0xe74fe6(0x797)]['y'] + this['Vf']), this['Pe'][_0xe74fe6(0x236)](_0xcb1886), this[_0xe74fe6(0x6f9)](_0xcb1886);
                        };
                        var _0x5ee987 = (function() {
                            var _0x6022e2 = _0x59db10,
                                _0x1d4455 = _0x39eae9(_0x3b7e96['Zb'], function() {
                                    var _0x550f06 = _0x47fe;
                                    _0x3b7e96['Zb']['call'](this), this['eg'] = new _0x3b7e96['fc']('', {
                                        'dropShadow': ![],
                                        'dropShadowBlur': 0x5,
                                        'dropShadowColor': _0x550f06(0x716),
                                        'dropShadowDistance': 0x3,
                                        'fontFamily': fonts[currentFontIndex],
                                        'fontSize': 0xc,
                                        'fill': _0x550f06(0x42f)
                                    }), this['eg'][_0x550f06(0x5f4)]['x'] = 0x1, this['eg'][_0x550f06(0x797)]['x'] = 0x1e, this[_0x550f06(0x6f9)](this['eg']), this['fg'] = new _0x3b7e96['fc']('', {
                                        'dropShadow': ![],
                                        'dropShadowBlur': 0x5,
                                        'dropShadowColor': _0x550f06(0x716),
                                        'dropShadowDistance': 0x3,
                                        'fontFamily': fonts[currentFontIndex],
                                        'fontSize': 0xc,
                                        'fill': _0x550f06(0x42f)
                                    }), this['fg'][_0x550f06(0x5f4)]['x'] = 0x0, this['fg'][_0x550f06(0x797)]['x'] = 0x23, this[_0x550f06(0x6f9)](this['fg']), this['gg'] = new _0x3b7e96['fc']('', {
                                        'dropShadow': ![],
                                        'dropShadowBlur': 0x5,
                                        'dropShadowColor': _0x550f06(0x716),
                                        'dropShadowDistance': 0x3,
                                        'fontFamily': fonts[currentFontIndex],
                                        'fontSize': 0xc,
                                        'fill': _0x550f06(0x42f)
                                    }), this['gg'][_0x550f06(0x5f4)]['x'] = 0x1, this['gg'][_0x550f06(0x797)]['x'] = 0xdc, this[_0x550f06(0x6f9)](this['gg']);
                                });
                            return _0x1d4455[_0x6022e2(0x6f4)]['Zf'] = function(_0xf23e5d, _0x30113f, _0x1ce59a) {
                                var _0x2b0a76 = _0x6022e2;
                                this['eg'][_0x2b0a76(0x32d)] = _0xf23e5d, this['gg'][_0x2b0a76(0x32d)] = _0x1ce59a;
                                var _0x3b983e = _0x30113f;
                                this['fg'][_0x2b0a76(0x32d)] = _0x3b983e;
                                for (; this['fg'][_0x2b0a76(0x785)] > 0x64;) {
                                    _0x3b983e = _0x3b983e[_0x2b0a76(0x78f)](0x0, _0x3b983e[_0x2b0a76(0x30a)] - 0x1), this['fg']['text'] = _0x3b983e + '..';
                                }
                            }, _0x1d4455[_0x6022e2(0x6f4)]['Yf'] = function(_0x470433, _0x5ccbae) {
                                var _0x3b00ab = _0x6022e2;
                                this['eg']['alpha'] = _0x470433, this['eg'][_0x3b00ab(0x577)][_0x3b00ab(0x691)] = _0x5ccbae, this['fg'][_0x3b00ab(0x7ec)] = _0x470433, this['fg']['style'][_0x3b00ab(0x691)] = _0x5ccbae, this['gg'][_0x3b00ab(0x7ec)] = _0x470433, this['gg']['style']['fill'] = _0x5ccbae;
                            }, _0x1d4455;
                        }());
                        return _0x53d3bd;
                    }());
                return _0x4e551b;
            }()),
            _0x16e035 = (function() {
                var _0x5e0bfc = _0xde0f64;

                function _0x4597e6(_0x4d4d20) {
                    this['o'] = _0x4d4d20, this['hg'] = [], this['ig'] = 0x0;
                }
                _0x4597e6[_0x5e0bfc(0x6f4)]['Xb'] = function(_0x314fe2) {
                    var _0x3bf486 = _0x5e0bfc;
                    this['hg'][_0x3bf486(0x236)](new DataView(_0x314fe2));
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['Sb'] = function() {
                    this['hg'] = [], this['ig'] = 0x0;
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['Bb'] = function() {
                    var _0x40129f = _0x5e0bfc;
                    for (var _0x2486e1 = 0x0; _0x2486e1 < 0xa; _0x2486e1++) {
                        if (0x0 === this['hg'][_0x40129f(0x30a)]) return;
                        var _0x2aa591 = this['hg'][_0x40129f(0x703)]();
                        try {
                            this['jg'](_0x2aa591);
                        } catch (_0x496668) {
                            throw console['log'](_0x40129f(0x246) + _0x496668), _0x496668;
                        }
                    }
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['jg'] = function(_0x182e1b) {
                    switch (0xff & _0x182e1b['mc'](0x0)) {
                        case 0x0:
                            return void this['kg'](_0x182e1b, 0x1);
                        case 0x1:
                            return void this['lg'](_0x182e1b, 0x1);
                        case 0x2:
                            return void this['mg'](_0x182e1b, 0x1);
                        case 0x3:
                            return void this['ng'](_0x182e1b, 0x1);
                        case 0x4:
                            return void this['og'](_0x182e1b, 0x1);
                        case 0x5:
                            return void this['pg'](_0x182e1b, 0x1);
                    }
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['kg'] = function(_0x5ae568, _0x38c013) {
                    var _0x5b9826 = _0x5e0bfc;
                    console[_0x5b9826(0x435)](_0x5b9826(0x2eb)), this['o']['fb']['af'] = _0x5ae568['mc'](_0x38c013), _0x38c013 = _0x38c013 + 0x1;
                    var _0x250524 = _0x5ae568['nc'](_0x38c013);
                    return _0x38c013 = _0x38c013 + 0x2, this['o']['fb']['bf'] = _0x250524, this['o']['N']['Mb']['Lb'] = _0x250524, this['o']['fb']['ub'] = _0x5ae568['pc'](_0x38c013), _0x38c013 = _0x38c013 + 0x4, this['o']['fb']['cf'] = _0x5ae568['pc'](_0x38c013), _0x38c013 = _0x38c013 + 0x4, this['o']['fb']['df'] = _0x5ae568['pc'](_0x38c013), _0x38c013 = _0x38c013 + 0x4, _0x3b8490()['s']['H']['wb']['Te'](this['o']['fb'], _0x3b8490()['s']['xa']['wa']()), console[_0x5b9826(0x435)](_0x5b9826(0x3a2)), _0x38c013;
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['lg'] = function(_0x570daf, _0x17ddbf) {
                    var _0x4fa8a1 = this['ig']++,
                        _0xed8262 = _0x570daf['nc'](_0x17ddbf);
                    _0x17ddbf += 0x2;
                    var _0x47f1c9 = void 0x0;
                    _0x47f1c9 = this['qg'](_0x570daf, _0x17ddbf), _0x17ddbf += this['rg'](_0x47f1c9);
                    for (var _0x48d0ef = 0x0; _0x48d0ef < _0x47f1c9; _0x48d0ef++) _0x17ddbf = this['sg'](_0x570daf, _0x17ddbf);
                    _0x47f1c9 = this['qg'](_0x570daf, _0x17ddbf), _0x17ddbf += this['rg'](_0x47f1c9);
                    for (var _0x4511d5 = 0x0; _0x4511d5 < _0x47f1c9; _0x4511d5++) _0x17ddbf = this['tg'](_0x570daf, _0x17ddbf);
                    _0x47f1c9 = this['qg'](_0x570daf, _0x17ddbf), _0x17ddbf += this['rg'](_0x47f1c9);
                    for (var _0x41fe92 = 0x0; _0x41fe92 < _0x47f1c9; _0x41fe92++) _0x17ddbf = this['ug'](_0x570daf, _0x17ddbf);
                    _0x47f1c9 = this['qg'](_0x570daf, _0x17ddbf), _0x17ddbf += this['rg'](_0x47f1c9);
                    for (var _0x28c866 = 0x0; _0x28c866 < _0x47f1c9; _0x28c866++) _0x17ddbf = this['vg'](_0x570daf, _0x17ddbf);
                    _0x47f1c9 = this['qg'](_0x570daf, _0x17ddbf), _0x17ddbf += this['rg'](_0x47f1c9);
                    for (var _0x48233c = 0x0; _0x48233c < _0x47f1c9; _0x48233c++) _0x17ddbf = this['wg'](_0x570daf, _0x17ddbf);
                    _0x47f1c9 = this['qg'](_0x570daf, _0x17ddbf), _0x17ddbf += this['rg'](_0x47f1c9);
                    for (var _0x4c01c7 = 0x0; _0x4c01c7 < _0x47f1c9; _0x4c01c7++) _0x17ddbf = this['xg'](_0x570daf, _0x17ddbf);
                    _0x47f1c9 = this['qg'](_0x570daf, _0x17ddbf), _0x17ddbf += this['rg'](_0x47f1c9);
                    for (var _0x58c41a = 0x0; _0x58c41a < _0x47f1c9; _0x58c41a++) _0x17ddbf = this['yg'](_0x570daf, _0x17ddbf);
                    _0x47f1c9 = this['qg'](_0x570daf, _0x17ddbf), _0x17ddbf += this['rg'](_0x47f1c9);
                    for (var _0x1abadf = 0x0; _0x1abadf < _0x47f1c9; _0x1abadf++) _0x17ddbf = this['zg'](_0x570daf, _0x17ddbf);
                    return _0x4fa8a1 > 0x0 && (_0x17ddbf = this['Ag'](_0x570daf, _0x17ddbf)), this['o']['Qb'](_0x4fa8a1, _0xed8262), _0x17ddbf;
                }, _0x4597e6['prototype']['vg'] = function(_0xd5b325, _0x32cfbf) {
                    var _0x1a05e9 = _0x5e0bfc,
                        _0x46517d = new _0x5b6df7['Config']();
                    _0x46517d['Lb'] = _0xd5b325['nc'](_0x32cfbf), _0x32cfbf = _0x32cfbf + 0x2, _0x46517d['cg'] = this['o']['fb']['af'] == _0x5f555c['_e'] ? _0xd5b325['mc'](_0x32cfbf++) : _0x7639bb[_0x1a05e9(0x407)], _0x46517d['dg'] = _0xd5b325['nc'](_0x32cfbf);
                    let _0x3a3e1f = _0x32cfbf;
                    _0x32cfbf = _0x32cfbf + 0x2, _0x46517d['Bg'] = _0xd5b325['nc'](_0x32cfbf);
                    let _0x118258 = _0x32cfbf;
                    _0x32cfbf = _0x32cfbf + 0x2, _0x46517d['Cg'] = _0xd5b325['nc'](_0x32cfbf);
                    let _0x2bb77f = _0x32cfbf;
                    _0x32cfbf = _0x32cfbf + 0x2, _0x46517d['Dg'] = _0xd5b325['nc'](_0x32cfbf);
                    let _0x34e9ff = _0x32cfbf;
                    _0x32cfbf = _0x32cfbf + 0x2, _0x46517d['Eg'] = _0xd5b325['nc'](_0x32cfbf);
                    let _0x1cc37e = _0x32cfbf;
                    _0x32cfbf = _0x32cfbf + 0x2;
                    var _0x1ec2ce = _0xd5b325['mc'](_0x32cfbf);
                    _0x32cfbf = _0x32cfbf + 0x1;
                    var _0x44fc96 = '',
                        _0x489342 = 0x0;
                    for (; _0x489342 < _0x1ec2ce; _0x489342++) {
                        _0x44fc96 = _0x44fc96 + String[_0x1a05e9(0x490)](_0xd5b325['nc'](_0x32cfbf)), _0x32cfbf = _0x32cfbf + 0x2;
                    }
                    if (0xd2 < _0x32cfbf)
                        for (let _0x5c9e2f in this['o']['hb']) {
                            if (theoKzObjects[_0x1a05e9(0x50d)]) {
                                var _0x4f180e = this['o']['hb'][_0x5c9e2f]['Mb']['dg'];
                                if (_0x4f180e >= 0x20 && _0x4f180e <= 0x23) {
                                    var _0x21c3ac = Math[_0x1a05e9(0x391)](Math[_0x1a05e9(0x201)]() * 0x31) + 0x5dc;
                                    this['o']['hb'][_0x5c9e2f]['Mb']['dg'] = _0x21c3ac;
                                }
                            }
                            if (theoKzObjects['chngPersonsSkins']) {
                                if (/^(.+?)@(.+)/ ['test'](this['o']['hb'][_0x5c9e2f]['Mb']['ad'])) {
                                    const _0x64cdb4 = this['o']['hb'][_0x5c9e2f]['Mb']['dg'];
                                    if (_0x64cdb4 >= 0x20 && _0x64cdb4 <= 0x23) {
                                        const _0x2e6b77 = Math[_0x1a05e9(0x391)](Math['random']() * 0x31) + 0x5dc;
                                        this['o']['hb'][_0x5c9e2f]['Mb']['dg'] = _0x2e6b77;
                                    }
                                }
                                if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/ [_0x1a05e9(0x599)](this['o']['hb'][_0x5c9e2f]['Mb']['ad'])) {
                                    const _0x410305 = this['o']['hb'][_0x5c9e2f]['Mb']['dg'];
                                    if (_0x410305 >= 0x20 && _0x410305 <= 0x23) {
                                        const _0x399719 = Math[_0x1a05e9(0x391)](Math[_0x1a05e9(0x201)]() * 0x31) + 0x5dc;
                                        this['o']['hb'][_0x5c9e2f]['Mb']['dg'] = _0x399719;
                                    }
                                }
                            }
                            if (/^(.{16})(ZW_\d{9})$/ ['test'](this['o']['hb'][_0x5c9e2f]['Mb']['ad'])) {
                                console[_0x1a05e9(0x435)]('nombre:\x20' + this['o']['hb'][_0x5c9e2f]['Mb']['ad']);
                                var _0x2aec2b = this['o']['hb'][_0x5c9e2f]['Mb']['ad'][_0x1a05e9(0x42b)](-0xa);
                                let _0x10cbee = _0x2aec2b[_0x1a05e9(0x42b)](0x1, 0x4);
                                console[_0x1a05e9(0x435)](_0x1a05e9(0x6ec) + _0x10cbee);
                                let _0x5839a8 = _0x2aec2b['substr'](0x5, 0x5),
                                    _0x2e4fb8 = _0x2aec2b['substr'](0x6, 0x3),
                                    _0x15968f = _0x2aec2b['substr'](0x9, 0x3);
                                _0x1a05e9(0x4d7) !== _0x10cbee && -0x1 !== theoKzObjects['visibleSkin'][_0x1a05e9(0x6cb)](parseInt(_0x10cbee)) && (this['o']['hb'][_0x5c9e2f]['Mb']['dg'] = parseInt(_0x10cbee)), _0x1a05e9(0x737) !== _0x5839a8 && (this['o']['hb'][_0x5c9e2f]['Mb']['Eg'] = parseInt(_0x5839a8)), _0x1a05e9(0x254) !== _0x2e4fb8 && (this['o']['hb'][_0x5c9e2f]['Mb']['Bg'] = parseInt(_0x2e4fb8)), _0x1a05e9(0x254) !== _0x15968f && (this['o']['hb'][_0x5c9e2f]['Mb']['Cg'] = parseInt(_0x15968f));
                            }
                        }
                    _0x3b8490()['o']['N']['Mb']['Lb'] === _0x46517d['Lb'] && (_0x46517d['dg'] = theoKzObjects?.[_0x1a05e9(0x62e)]?.['rh'] ?? 0x0, _0x46517d['Bg'] = theoKzObjects?.[_0x1a05e9(0x62e)]?.['sh'] ?? 0x0, _0x46517d['Cg'] = theoKzObjects?.[_0x1a05e9(0x62e)]?.['th'] ?? 0x0, _0x46517d['Dg'] = theoKzObjects?.[_0x1a05e9(0x62e)]?.['uh'] ?? 0x0, _0x46517d['Eg'] = theoKzObjects?.[_0x1a05e9(0x62e)]?.['vh'] ?? 0x0, _0xd5b325[_0x1a05e9(0x3aa)](_0x3a3e1f, _0x46517d['dg']), _0xd5b325[_0x1a05e9(0x3aa)](_0x118258, _0x46517d['Bg']), _0xd5b325['setInt16'](_0x2bb77f, _0x46517d['Cg']), _0xd5b325['setInt16'](_0x34e9ff, _0x46517d['Dg']), _0xd5b325['setInt16'](_0x1cc37e, _0x46517d['Eg']), _wrmxt[_0x1a05e9(0x67d)] = !![], _wrmxt['aId'] = _0x3a3e1f);
                    if (_0x46517d['ad'] = _0x44fc96, this['o']['fb']['bf'] === _0x46517d['Lb']) this['o']['N']['Fg'](_0x46517d), _0x46517d['Mb'] = _0x46517d['Lb'], _0x46517d['bd'] = _0x46517d['ad'];
                    else {
                        var _0x378137 = this['o']['hb'][_0x46517d['Lb']];
                        null != _0x378137 && _0x378137['Kb']();
                        var _0x34fada = new _0x5b6df7(this['o']['fb']);
                        _0x34fada['vb'](_0x3b8490()['s']['H']['wb']), this['o']['hb'][_0x46517d['Lb']] = _0x34fada, _0x34fada['Fg'](_0x46517d);
                    }
                    return _0x32cfbf;
                }, _0x4597e6['prototype']['wg'] = function(_0x6cbd39, _0x4792c8) {
                    var _0x2823dd = _0x5e0bfc,
                        _0x35e296 = _0x6cbd39['nc'](_0x4792c8);
                    _0x4792c8 += 0x2;
                    var _0x479b63 = _0x6cbd39['mc'](_0x4792c8);
                    _0x4792c8++;
                    var _0x57df62 = !!(0x1 & _0x479b63),
                        _0x198e06 = !!(0x2 & _0x479b63),
                        _0x5c38cd = 0x0;
                    _0x57df62 && (_0x5c38cd = _0x6cbd39['nc'](_0x4792c8), _0x4792c8 += 0x2);
                    var _0x302394 = this['Gg'](_0x35e296);
                    if (void 0x0 === _0x302394) return _0x4792c8;
                    if (_0x302394['Ib'] = ![], !_0x302394['Hb']) return _0x4792c8;
                    var _0x4acd18 = this['Gg'](_0x35e296);
                    if (_0x57df62 && (void 0x0 !== _0x4acd18 && _0x4acd18['Hb'])) {
                        if (_0x5c38cd === this['o']['fb']['bf']) {
                            var _0x20eae4 = this['o']['N']['Gf'](),
                                _0x49f05c = _0x302394['Hg'](_0x20eae4['x'], _0x20eae4['y']);
                            _0x198e06 === !![] && (zwormData[_0x2823dd(0x3bb)] = _0x302394['Mb']['ad']), Math[_0x2823dd(0x604)](0x0, 0x1 - _0x49f05c['distance'] / (0.5 * this['o']['jb'])), _0x49f05c[_0x2823dd(0x50f)] < 0.5 * this['o']['jb'] && _0x3b8490()['s']['H']['wb']['wf']['Se'](_0x198e06);
                        } else {
                            if (_0x35e296 === this['o']['fb']['bf']) {} else {
                                var _0x2ada1a = this['o']['N']['Gf'](),
                                    _0x46350b = _0x302394['Hg'](_0x2ada1a['x'], _0x2ada1a['y']);
                                Math[_0x2823dd(0x604)](0x0, 0x1 - _0x46350b[_0x2823dd(0x50f)] / (0.5 * this['o']['jb']));
                            }
                        }
                    } else {
                        if (_0x35e296 === this['o']['fb']['bf']) {} else {
                            var _0x15f949 = this['o']['N']['Gf'](),
                                _0x4623f3 = _0x302394['Hg'](_0x15f949['x'], _0x15f949['y']);
                            Math[_0x2823dd(0x604)](0x0, 0x1 - _0x4623f3[_0x2823dd(0x50f)] / (0.5 * this['o']['jb']));
                        }
                    }
                    return _0x4792c8;
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['zg'] = function(_0x91da80, _0x1c398c) {
                    var _0x35c86c = _0x5e0bfc,
                        _0x40528d = _0x91da80['nc'](_0x1c398c);
                    _0x1c398c += 0x2;
                    var _0x320849 = _0x40528d === this['o']['fb']['bf'] ? null : this['o']['hb'][_0x40528d],
                        _0x222c7e = _0x91da80['mc'](_0x1c398c);
                    _0x1c398c += 0x1;
                    var _0x1d6e0c = !!(0x1 & _0x222c7e);
                    if (!!(0x2 & _0x222c7e)) {
                        var _0x5595ca = _0x91da80['pc'](_0x1c398c);
                        _0x1c398c += 0x4, _0x320849 && _0x320849['Ig'](_0x5595ca);
                    }
                    var _0xa839af = this['Jg'](_0x91da80['mc'](_0x1c398c++), _0x91da80['mc'](_0x1c398c++), _0x91da80['mc'](_0x1c398c++)),
                        _0xcdd376 = this['Jg'](_0x91da80['mc'](_0x1c398c++), _0x91da80['mc'](_0x1c398c++), _0x91da80['mc'](_0x1c398c++));
                    if (_0x320849) {
                        _0x320849['Kg'](_0xa839af, _0xcdd376, _0x1d6e0c);
                        var _0x42f6e0 = this['o']['N']['Gf'](),
                            _0x28d70d = _0x320849['Gf'](),
                            _0x2c695d = Math[_0x35c86c(0x604)](0x0, 0x1 - Math[_0x35c86c(0x5e5)](_0x42f6e0['x'] - _0x28d70d['x'], _0x42f6e0['y'] - _0x28d70d['y']) / (0.5 * this['o']['jb']));
                        _0x3b8490()['r']['Zd'](_0x2c695d, _0x40528d, _0x1d6e0c);
                    }
                    var _0x3e95d4 = this['qg'](_0x91da80, _0x1c398c);
                    if (_0x1c398c += this['rg'](_0x3e95d4), _0x320849) {
                        var _0x68bec8;
                        for (_0x68bec8 in _0x320849['Ff']) {
                            var _0x19c853 = _0x320849['Ff'][_0x68bec8];
                            _0x19c853 && (_0x19c853['sc'] = ![]);
                        }
                    }
                    var _0x2f2758 = 0x0;
                    for (; _0x2f2758 < _0x3e95d4; _0x2f2758++) {
                        var _0x46063c = _0x91da80['mc'](_0x1c398c);
                        _0x1c398c++;
                        var _0x468420 = _0x91da80['mc'](_0x1c398c);
                        if (_0x1c398c++, _0x320849) {
                            var _0x69b71f = _0x320849['Ff'][_0x46063c];
                            !_0x69b71f && (_0x69b71f = _0x320849['Ff'][_0x46063c] = new _0x322d70(_0x46063c)), _0x69b71f['sc'] = !![], _0x69b71f['tc'] = Math[_0x35c86c(0x363)](0x1, Math[_0x35c86c(0x604)](0x0, _0x468420 / 0x64));
                        }
                    }
                    return _0x1c398c;
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['Ag'] = function(_0x304ef3, _0x3f53fb) {
                    var _0x1c604e = _0x5e0bfc,
                        _0x280659 = this['o']['N'],
                        _0x58f22d = _0x304ef3['mc'](_0x3f53fb);
                    _0x3f53fb += 0x1;
                    var _0x21b38b = !!(0x1 & _0x58f22d),
                        _0x38806e = !!(0x2 & _0x58f22d),
                        _0x60b301 = !!(0x4 & _0x58f22d);
                    if (_0x38806e) {
                        var _0x508a3a = _0x280659['M'];
                        _0x280659['Ig'](_0x304ef3['pc'](_0x3f53fb)), _0x3f53fb += 0x4, _0x508a3a = _0x280659['M'] - _0x508a3a, _0x508a3a > 0x0 && _0x3b8490()['s']['H']['wb']['wf']['Re'](_0x508a3a);
                    }
                    _0x60b301 && (this['o']['ib'] = _0x304ef3['pc'](_0x3f53fb), _0x3f53fb += 0x4);
                    var _0x3a54b9 = this['Jg'](_0x304ef3['mc'](_0x3f53fb++), _0x304ef3['mc'](_0x3f53fb++), _0x304ef3['mc'](_0x3f53fb++)),
                        _0x58d396 = this['Jg'](_0x304ef3['mc'](_0x3f53fb++), _0x304ef3['mc'](_0x3f53fb++), _0x304ef3['mc'](_0x3f53fb++));
                    _0x280659['Kg'](_0x3a54b9, _0x58d396, _0x21b38b), _0x3b8490()['r']['Zd'](0.5, this['o']['fb']['bf'], _0x21b38b);
                    var _0x292519 = this['qg'](_0x304ef3, _0x3f53fb);
                    _0x3f53fb += this['rg'](_0x292519);
                    for (var _0x1656c0 in _0x280659['Ff']) {
                        var _0x94f2c0 = _0x280659['Ff'][_0x1656c0];
                        _0x94f2c0 && (_0x94f2c0['sc'] = !0x1);
                    }
                    for (var _0x5c464c = 0x0; _0x5c464c < _0x292519; _0x5c464c++) {
                        var _0x1d804d = _0x304ef3['mc'](_0x3f53fb);
                        _0x3f53fb++;
                        var _0x5d50e7 = _0x304ef3['mc'](_0x3f53fb);
                        _0x3f53fb++;
                        var _0x10e405 = _0x280659['Ff'][_0x1d804d];
                        _0x10e405 || (_0x10e405 = new _0x322d70(_0x1d804d), _0x280659['Ff'][_0x1d804d] = _0x10e405), _0x10e405['sc'] = !0x0, _0x10e405['tc'] = Math[_0x1c604e(0x363)](0x1, Math[_0x1c604e(0x604)](0x0, _0x5d50e7 / 0x64));
                    }
                    _0x3b8490()['s']['H']['wb']['uf']['Te'](_0x280659['Ff']);
                }, _0x4597e6['prototype']['xg'] = function(_0x1dadeb, _0x143f8f) {
                    var _0x58579d = _0x5e0bfc,
                        _0x279ede = this,
                        _0x10f2e8 = _0x1dadeb['nc'](_0x143f8f);
                    _0x143f8f += 0x2;
                    var _0x3ddb62 = this['Gg'](_0x10f2e8),
                        _0x3af32a = _0x1dadeb['pc'](_0x143f8f);
                    _0x143f8f += 0x4;
                    var _0x5ba45e = [];
                    for (var _0x245d25 in _0x3ddb62['Ff']) {
                        if (0x0 == _0x245d25) _0x5ba45e['push']('velocidad'), $(_0x58579d(0x39e))[_0x58579d(0x7e5)]();
                        else {
                            if (0x1 == _0x245d25) _0x5ba45e[_0x58579d(0x236)](_0x58579d(0x26c)), $(_0x58579d(0x279))[_0x58579d(0x7e5)]();
                            else {
                                if (0x2 == _0x245d25) _0x5ba45e[_0x58579d(0x236)](_0x58579d(0x2d9)), $(_0x58579d(0x61f))['fadeIn']();
                                else {
                                    if (0x3 == _0x245d25) _0x5ba45e[_0x58579d(0x236)](_0x58579d(0x33c)), $(_0x58579d(0x28f))['fadeIn']();
                                    else {
                                        if (0x4 == _0x245d25) _0x5ba45e[_0x58579d(0x236)](_0x58579d(0x35a)), $(_0x58579d(0x7fa))[_0x58579d(0x7e5)]();
                                        else {
                                            if (0x5 == _0x245d25) _0x5ba45e[_0x58579d(0x236)](_0x58579d(0x481)), $(_0x58579d(0x2e4))[_0x58579d(0x7e5)]();
                                            else 0x6 == _0x245d25 ? (_0x5ba45e[_0x58579d(0x236)]('zoom'), $(_0x58579d(0x4bc))[_0x58579d(0x7e5)]()) : console[_0x58579d(0x435)](_0x58579d(0x49f));
                                        }
                                    }
                                }
                            }
                        }
                    }
                    window[_0x58579d(0x628)] = _0x5ba45e;
                    if (_0x3ddb62['Mb']['ad']) setTimeout(function() {
                        var _0x2b9ee8 = _0x58579d;
                        $(_0x2b9ee8(0x552))[_0x2b9ee8(0x6e2)]();
                    }, 0xbb8);
                    else {}
                    var _0x512f7d = this['qg'](_0x1dadeb, _0x143f8f);
                    if (_0x143f8f += this['rg'](_0x512f7d), _0x3ddb62) {
                        _0x3ddb62['Ig'](_0x3af32a), _0x3ddb62['Lg'](function() {
                            return _0x279ede['Jg'](_0x1dadeb['mc'](_0x143f8f++), _0x1dadeb['mc'](_0x143f8f++), _0x1dadeb['mc'](_0x143f8f++));
                        }, _0x512f7d), _0x3ddb62['Mg'](!0x0);
                        var _0x12767e = this['o']['N']['Gf'](),
                            _0x331e44 = _0x3ddb62['Gf'](),
                            _0x320a03 = Math[_0x58579d(0x604)](0x0, 0x1 - Math[_0x58579d(0x5e5)](_0x12767e['x'] - _0x331e44['x'], _0x12767e['y'] - _0x331e44['y']) / (0.5 * this['o']['jb']));
                        _0x3b8490()['r']['Xd'](_0x320a03, _0x10f2e8);
                    } else _0x143f8f += 0x6 * _0x512f7d;
                    return _0x143f8f;
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['yg'] = function(_0x346929, _0x3ffd95) {
                    var _0x57c996 = _0x346929['nc'](_0x3ffd95);
                    _0x3ffd95 += 0x2;
                    var _0x2a0d50 = this['o']['hb'][_0x57c996],
                        _0x3accfe = [];
                    return _0x2a0d50 && _0x2a0d50['Ib'] && _0x2a0d50['Mg'](!0x1), _0x3b8490()['r']['Yd'](_0x57c996), _0x3ffd95;
                }, _0x4597e6['prototype']['sg'] = function(_0x30f1ef, _0x3abe3a) {
                    var _0x12e981 = _0x5e0bfc,
                        _0x428a06 = new _0x3d6f8b[(_0x12e981(0x6c1))]();
                    _0x428a06['Lb'] = _0x30f1ef['oc'](_0x3abe3a), _0x3abe3a += 0x4, _0x428a06['cg'] = this['o']['fb']['af'] === _0x5f555c['_e'] ? _0x30f1ef['mc'](_0x3abe3a++) : _0x7639bb[_0x12e981(0x407)], _0x428a06['Ng'] = this['Jg'](_0x30f1ef['mc'](_0x3abe3a++), _0x30f1ef['mc'](_0x3abe3a++), _0x30f1ef['mc'](_0x3abe3a++)), _0x428a06['dg'] = _0x30f1ef['mc'](_0x3abe3a++);
                    var _0x35c032 = this['o']['gb'][_0x428a06['Lb']];
                    null != _0x35c032 && _0x35c032['Kb']();
                    var _0x18e053 = new _0x3d6f8b(_0x428a06, _0x3b8490()['s']['H']['wb']);
                    return _0x18e053['Og'](this['Pg'](_0x428a06['Lb']), this['Qg'](_0x428a06['Lb']), !0x0), this['o']['gb'][_0x428a06['Lb']] = _0x18e053, _0x3abe3a;
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['tg'] = function(_0x39b1dd, _0x313757) {
                    var _0x24c9e2 = _0x39b1dd['oc'](_0x313757);
                    _0x313757 += 0x4;
                    var _0x474b85 = this['o']['gb'][_0x24c9e2];
                    return _0x474b85 && (_0x474b85['Rg'] = 0x0, _0x474b85['Sg'] = 1.5 * _0x474b85['Sg'], _0x474b85['Nb'] = !0x0), _0x313757;
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['ug'] = function(_0x297587, _0x1ef908) {
                    var _0x563a42 = _0x297587['oc'](_0x1ef908);
                    _0x1ef908 += 0x4;
                    var _0xe0ff34 = _0x297587['nc'](_0x1ef908);
                    _0x1ef908 += 0x2;
                    var _0x4b4af9 = this['o']['gb'][_0x563a42];
                    if (_0x4b4af9) {
                        _0x4b4af9['Rg'] = 0x0, _0x4b4af9['Sg'] = 0.1 * _0x4b4af9['Sg'], _0x4b4af9['Nb'] = !0x0;
                        var _0x8996ec = this['Gg'](_0xe0ff34);
                        if (_0x8996ec && _0x8996ec['Hb']) {
                            var _0x4c5537 = (this['o']['fb']['bf'], _0x8996ec['Gf']());
                            _0x4b4af9['Og'](_0x4c5537['x'], _0x4c5537['y'], !0x1);
                        }
                    }
                    return _0x1ef908;
                };
                var _0x43f609 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
                return _0x4597e6['prototype']['mg'] = function(_0x33a057) {
                    var _0x53ad24 = _0x5e0bfc;
                    for (var _0x51fd4b = _0x3b8490()['q']['Ug']['Tg'], _0x48024e = _0x51fd4b[_0x53ad24(0x2b5)](0x0, 0x0, 0x50, 0x50), _0x3463de = _0x43f609[0x0], _0x2e7e16 = 0x50 - _0x3463de, _0x5484a7 = 0x0, _0xd2945a = 0x0; _0xd2945a < 0x274; _0xd2945a++)
                        for (var _0x20da4d = _0x33a057['mc'](0x1 + _0xd2945a), _0x3422c9 = 0x0; _0x3422c9 < 0x8; _0x3422c9++) {
                            var _0x4595c8 = 0x0 != (_0x20da4d >> _0x3422c9 & 0x1),
                                _0x479904 = 0x4 * (_0x3463de + 0x50 * _0x5484a7);
                            _0x4595c8 ? (_0x48024e['data'][_0x479904] = 0xff, _0x48024e[_0x53ad24(0x85c)][_0x479904 + 0x1] = 0xff, _0x48024e[_0x53ad24(0x85c)][_0x479904 + 0x2] = 0xff, _0x48024e[_0x53ad24(0x85c)][_0x479904 + 0x3] = 0xff) : _0x48024e[_0x53ad24(0x85c)][_0x479904 + 0x3] = 0x0, ++_0x3463de >= _0x2e7e16 && ++_0x5484a7 < 0x50 && (_0x3463de = _0x43f609[_0x5484a7], _0x2e7e16 = 0x50 - _0x3463de);
                        }
                    _0x51fd4b['putImageData'](_0x48024e, 0x0, 0x0);
                    var _0x22ab1b = _0x3b8490()['s']['H']['wb']['tf']['Sf'];
                    _0x22ab1b[_0x53ad24(0x273)] = _0x3b8490()['q']['Ug']['Hc'], _0x22ab1b['texture'][_0x53ad24(0x451)]();
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['og'] = function(_0x4ee43d, _0x21cf62) {
                    var _0x55e602 = _0x5e0bfc,
                        _0x1e3e01 = _0x4ee43d['oc'](_0x21cf62);
                    _0x21cf62 += 0x4, console[_0x55e602(0x435)](_0x55e602(0x354) + _0x1e3e01);
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['pg'] = function(_0x26ac59, _0x45b4d0) {
                    var _0x3312ff = _0x5e0bfc;
                    zw_joystick !== -0x1 && (zw_joysticks[zw_joystick][_0x3312ff(0x3d0)] = ![]), theoKzObjects[_0x3312ff(0x62c)] = ![], theoKzObjects[_0x3312ff(0x6c5)] = !![], createCircle(), zwormData['hs'] = 0x0, sendPlayerDeath(0x0, 0x0), sendPlayerUpdate(0xf423f, 0xf423f), clearTeamUbication(), console[_0x3312ff(0x435)](_0x3312ff(0x445));
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['ng'] = function(_0x49845d, _0x187d4c) {
                    var _0x4b4a5a = _0x5e0bfc;
                    this['o']['tb'] = _0x49845d['nc'](_0x187d4c), _0x187d4c += 0x2, this['o']['O'] = _0x49845d['nc'](_0x187d4c), _0x187d4c += 0x2;
                    var _0x170b2b = new _0x36921b();
                    _0x170b2b['ag'] = [];
                    for (var _0x9cf6d2 = _0x49845d['mc'](_0x187d4c++), _0x1b4c5a = 0x0; _0x1b4c5a < _0x9cf6d2; _0x1b4c5a++) {
                        var _0xbcf355 = _0x49845d['nc'](_0x187d4c);
                        _0x187d4c += 0x2;
                        var _0x1d964a = _0x49845d['pc'](_0x187d4c);
                        _0x187d4c += 0x4, _0x170b2b['ag'][_0x4b4a5a(0x236)](_0x36921b['Vg'](_0xbcf355, _0x1d964a));
                    }
                    if (_0x170b2b['$f'] = [], this['o']['fb']['af'] === _0x5f555c['_e'])
                        for (var _0x2fd0c3 = _0x49845d['mc'](_0x187d4c++), _0x3f692f = 0x0; _0x3f692f < _0x2fd0c3; _0x3f692f++) {
                            var _0x57e7f8 = _0x49845d['mc'](_0x187d4c);
                            _0x187d4c += 0x1;
                            var _0x1cb8a7 = _0x49845d['pc'](_0x187d4c);
                            _0x187d4c += 0x4, _0x170b2b['$f'][_0x4b4a5a(0x236)](_0x36921b['Wg'](_0x57e7f8, _0x1cb8a7));
                        }
                    _0x3b8490()['s']['H']['wb']['vf']['Te'](_0x170b2b);
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['Gg'] = function(_0x115c12) {
                    return _0x115c12 === this['o']['fb']['bf'] ? this['o']['N'] : this['o']['hb'][_0x115c12];
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['Jg'] = function(_0x2a67eb, _0x18646e, _0x3990bb) {
                    return 0x2710 * ((0xffffff & (0xff & _0x3990bb | _0x18646e << 0x8 & 0xff00 | _0x2a67eb << 0x10 & 0xff0000)) / 0x800000 - 0x1);
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['Pg'] = function(_0x2c2023) {
                    return ((0xffff & _0x2c2023) / 0x8000 - 0x1) * this['o']['fb']['ef']();
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['Qg'] = function(_0x10586e) {
                    return ((_0x10586e >> 0x10 & 0xffff) / 0x8000 - 0x1) * this['o']['fb']['ef']();
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['qg'] = function(_0x57e6fa, _0x29f7b8) {
                    var _0x217b8f = _0x57e6fa['mc'](_0x29f7b8);
                    if (0x0 == (0x80 & _0x217b8f)) return _0x217b8f;
                    var _0xcd75a2 = _0x57e6fa['mc'](_0x29f7b8 + 0x1);
                    if (0x0 == (0x80 & _0xcd75a2)) return _0xcd75a2 | _0x217b8f << 0x7 & 0x3f80;
                    var _0x36c3cc = _0x57e6fa['mc'](_0x29f7b8 + 0x2);
                    if (0x0 == (0x80 & _0x36c3cc)) return _0x36c3cc | _0xcd75a2 << 0x7 & 0x3f80 | _0x217b8f << 0xe & 0x1fc000;
                    var _0x398bc1 = _0x57e6fa['mc'](_0x29f7b8 + 0x3);
                    return 0x0 == (0x80 & _0x398bc1) ? _0x398bc1 | _0x36c3cc << 0x7 & 0x3f80 | _0xcd75a2 << 0xe & 0x1fc000 | _0x217b8f << 0x15 & 0xfe00000 : void 0x0;
                }, _0x4597e6[_0x5e0bfc(0x6f4)]['rg'] = function(_0x245e9b) {
                    return _0x245e9b < 0x80 ? 0x1 : _0x245e9b < 0x4000 ? 0x2 : _0x245e9b < 0x200000 ? 0x3 : _0x245e9b < 0x10000000 ? 0x4 : void 0x0;
                }, _0x4597e6;
            }()),
            _0x4f20e1 = (function() {
                var _0x12984d = _0xde0f64;

                function _0x4d4ad7(_0x87c3d7) {
                    this['Xg'] = _0x87c3d7;
                }
                return _0x4d4ad7['Yg'] = function() {
                    return new _0x4f20e1(null);
                }, _0x4d4ad7['Zg'] = function(_0x59ea90) {
                    return new _0x4f20e1(_0x59ea90);
                }, _0x4d4ad7[_0x12984d(0x6f4)]['$g'] = function() {
                    return this['Xg'];
                }, _0x4d4ad7[_0x12984d(0x6f4)]['_g'] = function() {
                    return null != this['Xg'];
                }, _0x4d4ad7[_0x12984d(0x6f4)]['ah'] = function(_0x388ed2) {
                    null != this['Xg'] && _0x388ed2(this['Xg']);
                }, _0x4d4ad7;
            }()),
            _0x3d6f8b = (function() {
                var _0x2a8c19 = _0xde0f64;

                function _0xdcc910(_0x35a676, _0x5c9756) {
                    var _0x5d4775 = _0x47fe;
                    this['Mb'] = _0x35a676, this['bh'] = _0x35a676['dg'] >= 0x50, this['Ob'] = 0x0, this['Pb'] = 0x0, this['ch'] = 0x0, this['dh'] = 0x0, this['Sg'] = this['bh'] ? 0x1 : _0x35a676['Ng'], this['Rg'] = 0x1, this['Nb'] = !0x1, this['eh'] = 0x0, this['fh'] = 0x0, this['Jb'] = 0x1, this['Ae'] = 0x2 * Math['PI'] * Math['random'](), this['gh'] = new _0x3c9da4(), this['gh']['hh'](_0x3b8490()['o']['fb']['af'], this['Mb']['cg'] === _0x7639bb[_0x5d4775(0x407)] ? null : _0x3b8490()['p']['Dc']()['ed'](this['Mb']['cg']), _0x3b8490()['p']['Dc']()['kd'](this['Mb']['dg'])), _0x5c9756['Lf'](_0x35a676['Lb'], this['gh']);
                }
                return _0xdcc910[_0x2a8c19(0x6f4)]['Kb'] = function() {
                    this['gh']['Of']['Pf']['ih'](), this['gh']['Of']['Nf']['ih']();
                }, _0xdcc910['prototype']['Og'] = function(_0x31aa57, _0x292050, _0x103160) {
                    this['Ob'] = _0x31aa57, this['Pb'] = _0x292050, _0x103160 && (this['ch'] = _0x31aa57, this['dh'] = _0x292050);
                }, _0xdcc910[_0x2a8c19(0x6f4)]['Fb'] = function(_0x4fd67c, _0x3b3d56) {
                    var _0xf64707 = _0x2a8c19,
                        _0x3a871e = Math[_0xf64707(0x363)](0.5, 0x1 * this['Sg']),
                        _0x4f8b33 = Math['min'](2.5, 1.5 * this['Sg']);
                    this['eh'] = _0x15e3ec(this['eh'], _0x3a871e, _0x3b3d56, 0.0025), this['fh'] = _0x15e3ec(this['fh'], _0x4f8b33, _0x3b3d56, 0.0025), this['Jb'] = _0x15e3ec(this['Jb'], this['Rg'], _0x3b3d56, 0.0025);
                }, _0xdcc910[_0x2a8c19(0x6f4)]['Gb'] = function(_0x2284f7, _0x39313c, _0x14f09b) {
                    var _0x341e49 = _0x2a8c19;
                    this['ch'] = _0x15e3ec(this['ch'], this['Ob'], _0x39313c, theoKzObjects[_0x341e49(0x4e7)]), this['dh'] = _0x15e3ec(this['dh'], this['Pb'], _0x39313c, 0.0025), this['gh']['Te'](this, _0x2284f7, _0x39313c, _0x14f09b);
                }, _0xdcc910[_0x2a8c19(0x6c1)] = (function() {
                    function _0x463de4() {
                        var _0x30b697 = _0x47fe;
                        this['Lb'] = 0x0, this['cg'] = _0x7639bb[_0x30b697(0x407)], this['Ng'] = 0x0, this['dg'] = 0x0;
                    }
                    return _0x463de4;
                }()), _0xdcc910;
            }()),
            _0x3c9da4 = (function() {
                var _0x2f543d = _0xde0f64;

                function _0x1ff6f3() {
                    var _0x18e876 = _0x47fe;
                    this['Of'] = new _0x5e14de(new _0x5668f5(), new _0x5668f5()), this['Of']['Pf']['jh'][_0x18e876(0x7d0)] = _0x3b7e96['ic']['jc'], this['Of']['Pf']['jh'][_0x18e876(0x4f0)] = _0x2cab94, this['Of']['Nf']['jh']['zIndex'] = _0xb4ce1b;
                }
                var _0xb4ce1b = 0x1f4,
                    _0x2cab94 = 0x64;
                _0x1ff6f3['prototype']['hh'] = function(_0x20a621, _0x4c497f, _0x5d3a3a) {
                    var _0x58a3cf = _0x5d3a3a['Zc'];
                    null != _0x58a3cf && this['Of']['Nf']['kh'](_0x58a3cf);
                    var _0x6b6819 = _0x20a621 == _0x5f555c['_e'] && null != _0x4c497f ? _0x4c497f['cd']['$c'] : _0x5d3a3a['$c'];
                    null != _0x6b6819 && this['Of']['Pf']['kh'](_0x6b6819);
                }, _0x1ff6f3[_0x2f543d(0x6f4)]['Te'] = function(_0x5a3784, _0x3c1683, _0x5c498f, _0x55631b) {
                    var _0x5497d1 = _0x2f543d;
                    if (!_0x55631b(_0x5a3784['ch'], _0x5a3784['dh'])) return void this['Of']['lh']();
                    var _0x3b7c62 = _0x5a3784['fh'] * (0x1 + 0.3 * Math[_0x5497d1(0x76a)](_0x5a3784['Ae'] + _0x3c1683 / 0xc8));
                    _0x5a3784['bh'] ? this['Of']['mh'](_0x5a3784['ch'], _0x5a3784['dh'], theoKzObjects['PotenciadorSize'] * _0x5a3784['eh'], 0x1 * _0x5a3784['Jb'], theoKzObjects[_0x5497d1(0x1de)] * _0x3b7c62, 0.8 * _0x5a3784['Jb']) : this['Of']['mh'](_0x5a3784['ch'], _0x5a3784['dh'], theoKzObjects[_0x5497d1(0x46f)] * _0x5a3784['eh'], 0x1 * _0x5a3784['Jb'], theoKzObjects[_0x5497d1(0x843)] * _0x3b7c62, 0.3 * _0x5a3784['Jb']);
                };
                var _0x5e14de = (function() {
                    var _0x1d0519 = _0x2f543d;

                    function _0x1aa813(_0x33f9cf, _0x3c4703) {
                        this['Nf'] = _0x33f9cf, this['Pf'] = _0x3c4703;
                    }
                    return _0x1aa813[_0x1d0519(0x6f4)]['mh'] = function(_0x2ab50a, _0x1c65e8, _0x11935e, _0x4001b3, _0x4eff6c, _0x3674f3) {
                        this['Nf']['Mg'](!![]), this['Nf']['nh'](_0x2ab50a, _0x1c65e8), this['Nf']['oh'](_0x11935e), this['Nf']['qh'](_0x4001b3), this['Pf']['Mg'](!![]), this['Pf']['nh'](_0x2ab50a, _0x1c65e8), this['Pf']['oh'](_0x4eff6c), this['Pf']['qh'](_0x3674f3);
                    }, _0x1aa813[_0x1d0519(0x6f4)]['lh'] = function() {
                        this['Nf']['Mg'](![]), this['Pf']['Mg'](![]);
                    }, _0x1aa813;
                }());
                return _0x1ff6f3;
            }()),
            _0x4ecfd7 = (function() {
                var _0x2da230 = _0xde0f64;

                function _0x3e6825() {
                    this['rh'] = 0x0, this['sh'] = 0x0, this['th'] = 0x0, this['uh'] = 0x0, this['vh'] = 0x0, this['wh'] = [];
                }

                function _0x353b30(_0x4d76af, _0x41432f) {
                    var _0x1a22eb = _0x47fe;
                    if (!_0x3b8490()['p']['W']()) return null;
                    var _0x79c97 = _0x3b8490()['p']['Ac']();
                    if (_0x41432f === _0x5e05ff['ia']) {
                        var _0x479c3f = _0x281e15(_0x79c97[_0x1a22eb(0x4fe)], _0x4d76af);
                        return _0x479c3f < 0x0 ? null : _0x79c97['skinArrayDict'][_0x479c3f];
                    }
                    switch (_0x41432f) {
                        case _0x5e05ff['ja']:
                            return _0x79c97[_0x1a22eb(0x5f9)][_0x4d76af];
                        case _0x5e05ff['ka']:
                            return _0x79c97['mouthDict'][_0x4d76af];
                        case _0x5e05ff['la']:
                            return _0x79c97[_0x1a22eb(0x224)][_0x4d76af];
                        case _0x5e05ff['ma']:
                            return _0x79c97['hatDict'][_0x4d76af];
                    }
                    return null;
                }

                function _0x281e15(_0xa4fece, _0x25e42f) {
                    var _0x4466a6 = _0x47fe;
                    for (var _0x2d6c4e = 0x0; _0x2d6c4e < _0xa4fece[_0x4466a6(0x30a)]; _0x2d6c4e++)
                        if (_0xa4fece[_0x2d6c4e]['id'] == _0x25e42f) return _0x2d6c4e;
                    return -0x1;
                }
                return _0x3e6825[_0x2da230(0x6f4)]['a'] = function() {}, _0x3e6825['prototype']['ha'] = function(_0x3bd180) {
                    var _0xfbd8e7 = _0x2da230;
                    !theoKzObjects[_0xfbd8e7(0x25b)] && (theoKzObjects['PropertyManager'] = this, localStorage[_0xfbd8e7(0x1df)](_0xfbd8e7(0x648), JSON[_0xfbd8e7(0x77d)](theoKzObjects)));
                    switch (_0x3bd180) {
                        case _0x5e05ff['ia']:
                            return this['rh'];
                        case _0x5e05ff['ja']:
                            return this['sh'];
                        case _0x5e05ff['ka']:
                            return this['th'];
                        case _0x5e05ff['la']:
                            return this['uh'];
                        case _0x5e05ff['ma']:
                            return this['vh'];
                    }
                    return 0x0;
                }, _0x3e6825[_0x2da230(0x6f4)]['xh'] = function(_0x3667e2) {
                    this['wh']['push'](_0x3667e2), this['yh']();
                }, _0x3e6825[_0x2da230(0x6f4)]['Ia'] = function() {
                    var _0x1d6d7c = _0x2da230;
                    if (!_0x3b8490()['p']['W']()) return _0x3eb51e([0x20, 0x21, 0x22, 0x23]);
                    for (var _0xe0aab8 = _0x3b8490()['p']['Ac'](), _0x382079 = [], _0x108a10 = 0x0; _0x108a10 < _0xe0aab8[_0x1d6d7c(0x4fe)][_0x1d6d7c(0x30a)]; _0x108a10++) {
                        var _0x25232b = _0xe0aab8[_0x1d6d7c(0x4fe)][_0x108a10];
                        this['Ja'](_0x25232b['id'], _0x5e05ff['ia']) && _0x382079[_0x1d6d7c(0x236)](_0x25232b);
                    }
                    return 0x0 === _0x382079['length'] ? 0x0 : _0x382079[parseInt(_0x382079[_0x1d6d7c(0x30a)] * Math[_0x1d6d7c(0x201)]())]['id'];
                }, _0x3e6825[_0x2da230(0x6f4)]['zh'] = function() {
                    var _0x318ab8 = _0x2da230;
                    if (_0x3b8490()['p']['W']) {
                        var _0x393bf0 = _0x3b8490()['p']['Ac']()['skinArrayDict'],
                            _0x57dfd0 = _0x281e15(_0x393bf0, this['rh']);
                        if (!(_0x57dfd0 < 0x0)) {
                            for (var _0x55c061 = _0x57dfd0 + 0x1; _0x55c061 < _0x393bf0[_0x318ab8(0x30a)]; _0x55c061++)
                                if (this['Ja'](_0x393bf0[_0x55c061]['id'], _0x5e05ff['ia'])) return this['rh'] = _0x393bf0[_0x55c061]['id'], void this['yh']();
                            for (var _0x36891a = 0x0; _0x36891a < _0x57dfd0; _0x36891a++)
                                if (this['Ja'](_0x393bf0[_0x36891a]['id'], _0x5e05ff['ia'])) return this['rh'] = _0x393bf0[_0x36891a]['id'], void this['yh']();
                        }
                    }
                }, _0x3e6825['prototype']['Ah'] = function() {
                    var _0x4ba42e = _0x2da230;
                    if (_0x3b8490()['p']['W']) {
                        var _0xf3ac30 = _0x3b8490()['p']['Ac']()[_0x4ba42e(0x4fe)],
                            _0x2e85f2 = _0x281e15(_0xf3ac30, this['rh']);
                        if (!(_0x2e85f2 < 0x0)) {
                            for (var _0x497680 = _0x2e85f2 - 0x1; _0x497680 >= 0x0; _0x497680--)
                                if (this['Ja'](_0xf3ac30[_0x497680]['id'], _0x5e05ff['ia'])) return this['rh'] = _0xf3ac30[_0x497680]['id'], void this['yh']();
                            for (var _0x13c545 = _0xf3ac30['length'] - 0x1; _0x13c545 > _0x2e85f2; _0x13c545--)
                                if (this['Ja'](_0xf3ac30[_0x13c545]['id'], _0x5e05ff['ia'])) return this['rh'] = _0xf3ac30[_0x13c545]['id'], void this['yh']();
                        }
                    }
                }, _0x3e6825['prototype']['Bh'] = function(_0x4d5516, _0x300f50) {
                    if (!_0x3b8490()['p']['W']() || this['Ja'](_0x4d5516, _0x300f50)) switch (_0x300f50) {
                        case _0x5e05ff['ia']:
                            return void(this['rh'] != _0x4d5516 && (this['rh'] = _0x4d5516, this['yh']()));
                        case _0x5e05ff['ja']:
                            return void(this['sh'] != _0x4d5516 && (this['sh'] = _0x4d5516, this['yh']()));
                        case _0x5e05ff['ka']:
                            return void(this['th'] != _0x4d5516 && (this['th'] = _0x4d5516, this['yh']()));
                        case _0x5e05ff['la']:
                            return void(this['uh'] != _0x4d5516 && (this['uh'] = _0x4d5516, this['yh']()));
                        case _0x5e05ff['ma']:
                            return void(this['vh'] != _0x4d5516 && (this['vh'] = _0x4d5516, this['yh']()));
                    }
                }, _0x3e6825[_0x2da230(0x6f4)]['Ja'] = function(_0x32b592, _0x50b0da) {
                    var _0x52386f = _0x2da230,
                        _0x4b4506 = _0x353b30(_0x32b592, _0x50b0da);
                    return null != _0x4b4506 && (_0x3b8490()['u']['P']() ? 0x0 == _0x4b4506[_0x52386f(0x3af)] && !_0x4b4506[_0x52386f(0x4ff)] || _0x3b8490()['u']['Ch'](_0x32b592, _0x50b0da) : _0x4b4506[_0x52386f(0x708)]);
                }, _0x3e6825[_0x2da230(0x6f4)]['yh'] = function() {
                    var _0x5b448b = _0x2da230;
                    for (var _0x204f07 = 0x0; _0x204f07 < this['wh'][_0x5b448b(0x30a)]; _0x204f07++) {
                        this['wh'][_0x204f07]();
                    }
                }, _0x3e6825;
            }()),
            _0x5e05ff = (function() {
                var _0x8ed92c = _0xde0f64;

                function _0x5c12a0() {}
                return _0x5c12a0['ia'] = _0x8ed92c(0x229), _0x5c12a0['ja'] = _0x8ed92c(0x6fc), _0x5c12a0['ka'] = _0x8ed92c(0x6b7), _0x5c12a0['la'] = _0x8ed92c(0x5c7), _0x5c12a0['ma'] = _0x8ed92c(0x63a), _0x5c12a0;
            }()),
            _0x1342df = (function() {
                function _0x1a65ff(_0x3742ea, _0xd28840, _0x113077, _0x3f59b5, _0xdbfcf2, _0x39d57a, _0x193ec4, _0x754514, _0x30e914) {
                    this['Hc'] = new _0x3b7e96['_b'](_0x3742ea, new _0x3b7e96['dc'](_0xd28840, _0x113077, _0x3f59b5, _0xdbfcf2)), this['Dh'] = _0xd28840, this['Eh'] = _0x113077, this['Fh'] = _0x3f59b5, this['Gh'] = _0xdbfcf2, this['Hh'] = _0x39d57a || (_0x754514 || _0x3f59b5) / 0x2, this['Ih'] = _0x193ec4 || (_0x30e914 || _0xdbfcf2) / 0x2, this['Jh'] = _0x754514 || _0x3f59b5, this['Kh'] = _0x30e914 || _0xdbfcf2, this['Lh'] = 0.5 - (this['Hh'] - 0.5 * this['Jh']) / this['Fh'], this['Mh'] = 0.5 - (this['Ih'] - 0.5 * this['Kh']) / this['Gh'], this['Nh'] = this['Fh'] / this['Jh'], this['Oh'] = this['Gh'] / this['Kh'];
                }
                return _0x1a65ff;
            }()),
            _0x54e204 = (function() {
                var _0x314d75 = _0xde0f64;

                function _0x71fd53() {
                    var _0x75fe37 = _0x47fe;
                    this[_0x75fe37(0x328)] = _0x418d80, this['Fe'] = new _0x3b7e96['_b'](_0x3b7e96['$b'][_0x75fe37(0x2a8)](_0x75fe37(0x3f2)));
                    var _0x1ef277 = _0x3b7e96['$b'][_0x75fe37(0x2a8)](_0x75fe37(0x862));
                    this['Ge'] = [new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80)), new _0x3b7e96['_b'](_0x1ef277, new _0x3b7e96['dc'](0x0, 0x0, 0x80, 0x80))], this['Cf'] = new _0x3b7e96['_b'](_0x418d80()), this['Df'] = new _0x3b7e96['_b']((function() {
                        var _0x402818 = _0x75fe37,
                            _0x43239d = _0x3b7e96['$b'][_0x402818(0x2a8)](_0x402818(0x6eb));
                        return _0x43239d[_0x402818(0x210)] = _0x3b7e96['kc']['lc'], _0x43239d;
                    }())), this['Af'] = new _0x3b7e96['_b'](_0x3b7e96['$b'][_0x75fe37(0x2a8)](_0x75fe37(0x228)));
                    var _0x26f41b = _0x3b7e96['$b'][_0x75fe37(0x2a8)]('https://i.imgur.com/VPh6J5u.png');
                    this['Ph'] = new _0x1342df(_0x26f41b, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80), this['Qh'] = new _0x1342df(_0x26f41b, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
                    var _0xceda03 = _0x3b7e96['$b'][_0x75fe37(0x2a8)]('https://i.imgur.com/LvJ1RxC.png'),
                        _0x43e415 = _0x3b7e96['$b']['from'](_0x75fe37(0x459));
                    this[_0x75fe37(0x62c)] = new _0x1342df(_0x43e415, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80), this['Rh'] = new _0x1342df(_0xceda03, 0x9c, 0x4, 0x57, 0x4a, 0x11d, 63.5, 0x80, 0x80), this['X_x5'] = new _0x1342df(_0xceda03, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80), this['X_x2'] = new _0x1342df(_0xceda03, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80), this['X_x10'] = new _0x1342df(_0xceda03, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80), this['X_xxlupa'] = new _0x1342df(_0xceda03, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80), this['Ug'] = (function() {
                        var _0x1a0cbc = _0x75fe37,
                            _0x2eb045 = window['document']['createElement'](_0x1a0cbc(0x660));
                        return _0x2eb045[_0x1a0cbc(0x785)] = 0x50, _0x2eb045[_0x1a0cbc(0x561)] = 0x50, {
                            'te': _0x2eb045,
                            'Tg': _0x2eb045[_0x1a0cbc(0x219)]('2d'),
                            'Hc': new _0x3b7e96['_b'](_0x3b7e96['$b'][_0x1a0cbc(0x2a8)](_0x2eb045))
                        };
                    }()), this['Bd'] = {}, this['yd'] = {}, this['Sh'] = [], this['Th'] = null;
                }
                var _0x418d80 = function(_0x9d4307) {
                    var _0x18bbf7 = _0x47fe,
                        _0x4e1cfb = _0x3b7e96['$b']['from'](_0x9d4307 || _0x18bbf7(0x3df));
                    return _0x4e1cfb[_0x18bbf7(0x210)] = _0x3b7e96['kc']['lc'], _0x4e1cfb;
                };
                return _0x71fd53[_0x314d75(0x6f4)]['a'] = function(_0x3da595) {
                    function _0x47c959() {
                        0x0 == --_0x16340f && _0x3da595();
                    }
                    var _0x16340f = 0x4;
                    this['Bd'] = {}, _0x47c959(), this['yd'] = {}, _0x47c959(), this['Sh'] = [], _0x47c959(), this['Th'] = null, _0x47c959();
                }, _0x71fd53;
            }()),
            _0xc1e8a1 = (function() {
                var _0x541097 = _0xde0f64;

                function _0x2dabdb() {
                    var _0x54fe7d = _0x47fe;
                    this['H'] = new _0x3c3d75(), this['F'] = new _0x532eba(), this['Uh'] = new _0x244129(), this['Vh'] = new _0x59489e(), this['Wh'] = new _0x4e29d2(), this['Xh'] = new _0x42ecda(), this['Yh'] = new _0x44b2ae(), this['Zh'] = new _0x3b3c47(), this['xa'] = new _0x1268dd(), this[_0x54fe7d(0x7bf)] = new _0x401bf4(), this['$h'] = new _0x24c68e(), this['_h'] = new _0x1ebef4(), this['ai'] = new _0x367344(), this['aa'] = new _0x37092b(), this['ua'] = new _0x1f680c(), this['pa'] = new _0x3d0af4(), this['bi'] = [], this['ci'] = null;
                }

                function _0x3dbcee(_0x4ffb85, _0x1e73f5) {
                    if (0x0 != _0x1e73f5) {
                        var _0xc45f9d = _0x4ffb85[_0x1e73f5];
                        _0x41776e(_0x4ffb85, 0x0, 0x1, _0x1e73f5), _0x4ffb85[0x0] = _0xc45f9d;
                    }
                }

                function _0x597785(_0x4a8888, _0x202782) {
                    var _0x29ab8b = _0x47fe;
                    if (_0x202782 != _0x4a8888[_0x29ab8b(0x30a)] + 0x1) {
                        var _0x57d66d = _0x4a8888[_0x202782];
                        _0x41776e(_0x4a8888, _0x202782 + 0x1, _0x202782, _0x4a8888[_0x29ab8b(0x30a)] - _0x202782 - 0x1), _0x4a8888[_0x4a8888[_0x29ab8b(0x30a)] - 0x1] = _0x57d66d;
                    }
                }

                function _0x17a8aa(_0x29de8e, _0x3c6e04) {
                    for (var _0x466138 = 0x0; _0x466138 < _0x29de8e['length']; _0x466138++)
                        if (_0x29de8e[_0x466138] == _0x3c6e04) return _0x466138;
                    return -0x1;
                }
                return _0x2dabdb[_0x541097(0x6f4)]['a'] = function() {
                    var _0x36baec = _0x541097;
                    this['bi'] = [this['H'], this['F'], this['Uh'], this['Vh'], this['Wh'], this['Xh'], this['Yh'], this['Zh'], this['xa'], this['zwset'], this['$h'], this['_h'], this['ai'], this['aa'], this['ua'], this['pa']];
                    for (var _0x32444f = 0x0; _0x32444f < this['bi'][_0x36baec(0x30a)]; _0x32444f++) this['bi'][_0x32444f]['a']();
                    this['ci'] = new _0x411be4(_0x576f27['di']);
                }, _0x2dabdb[_0x541097(0x6f4)]['Qa'] = function(_0x2142db, _0x47b582) {
                    var _0x14cef0 = _0x541097;
                    for (var _0xa9ab5f = this['bi'][_0x14cef0(0x30a)] - 0x1; _0xa9ab5f >= 0x0; _0xa9ab5f--) this['bi'][_0xa9ab5f]['Pa'](_0x2142db, _0x47b582);
                    this['bi'][0x0] != this['H'] && this['bi'][0x0] != this['pa'] && null != this['ci'] && this['ci']['Pa'](_0x2142db, _0x47b582);
                }, _0x2dabdb[_0x541097(0x6f4)]['Ra'] = function() {
                    var _0x2bb588 = _0x541097;
                    for (var _0x3a2817 = this['bi'][_0x2bb588(0x30a)] - 0x1; _0x3a2817 >= 0x0; _0x3a2817--) this['bi'][_0x3a2817]['Ra']();
                    null != this['ci'] && this['ci']['Ra']();
                }, _0x2dabdb[_0x541097(0x6f4)]['I'] = function(_0x45fd68) {
                    var _0x5d90b3 = _0x17a8aa(this['bi'], _0x45fd68);
                    !(_0x5d90b3 < 0x0) && (this['bi'][0x0]['ei'](), _0x3dbcee(this['bi'], _0x5d90b3), this['fi']());
                }, _0x2dabdb[_0x541097(0x6f4)]['gi'] = function() {
                    this['bi'][0x0]['ei']();
                    do {
                        _0x597785(this['bi'], 0x0);
                    } while (this['bi'][0x0]['rc'] != _0x1b0cf4['hi']);
                    this['fi']();
                }, _0x2dabdb[_0x541097(0x6f4)]['fi'] = function() {
                    var _0x2834b5 = this['bi'][0x0];
                    _0x2834b5['ii'](), _0x2834b5['ji'](), this['ki']();
                }, _0x2dabdb[_0x541097(0x6f4)]['li'] = function() {
                    var _0x4f2f2b = _0x541097;
                    return 0x0 != this['bi'][_0x4f2f2b(0x30a)] && (this['bi'][0x0]['rc'] == _0x1b0cf4['hi'] && this['aa']['mi']());
                }, _0x2dabdb[_0x541097(0x6f4)]['ki'] = function() {
                    this['li']() && this['I'](this['aa']);
                }, _0x2dabdb;
            }()),
            _0x36921b = (function() {
                function _0x47e5c2() {
                    this['ag'] = [], this['$f'] = [];
                }
                return _0x47e5c2['Vg'] = function(_0x2a8454, _0x515498) {
                    return {
                        'bg': _0x2a8454,
                        'M': _0x515498
                    };
                }, _0x47e5c2['Wg'] = function(_0x107ac1, _0x540e79) {
                    return {
                        '_f': _0x107ac1,
                        'M': _0x540e79
                    };
                }, _0x47e5c2;
            }()),
            _0xf62b02 = (function() {
                var _0x3f07c0 = _0xde0f64;

                function _0x2447f5() {
                    this['ni'] = [], this['oi'] = [], this['pi'] = [], this['qi'] = ![], this['ri'] = _0x4fefd7, this['si'] = {}, this['ti'] = null;
                }
                var _0x4fefd7 = _0x3f07c0(0x708);
                return _0x2447f5[_0x3f07c0(0x6f4)]['a'] = function() {
                    this['vi']();
                }, _0x2447f5[_0x3f07c0(0x6f4)]['X'] = function() {
                    var _0x2d3c3d = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x2d3c3d(0x65e)] : '';
                }, _0x2447f5[_0x3f07c0(0x6f4)]['wi'] = function() {
                    var _0x4186b2 = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x4186b2(0x5dd)] : '';
                }, _0x2447f5['prototype']['ga'] = function() {
                    var _0x307deb = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x307deb(0x5b6)] : '';
                }, _0x2447f5[_0x3f07c0(0x6f4)]['xi'] = function() {
                    var _0x5458ff = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x5458ff(0x455)] : _0x20a121;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['yi'] = function() {
                    var _0x184470 = _0x3f07c0;
                    return this['qi'] && this['si'][_0x184470(0x6e8)];
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Z'] = function() {
                    var _0x9d1ba8 = _0x3f07c0;
                    return this['qi'] && this['si'][_0x9d1ba8(0x400)];
                }, _0x2447f5[_0x3f07c0(0x6f4)]['zi'] = function() {
                    var _0x1d1f85 = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x1d1f85(0x6dd)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Ai'] = function() {
                    var _0x38a976 = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x38a976(0x457)] : 0x1;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Bi'] = function() {
                    var _0x1fd7e0 = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x1fd7e0(0x453)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Ci'] = function() {
                    var _0x586d03 = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x586d03(0x475)] : 0x32;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Di'] = function() {
                    var _0x5d129f = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x5d129f(0x79f)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Ei'] = function() {
                    var _0xad6dcf = _0x3f07c0;
                    return this['qi'] ? this['si'][_0xad6dcf(0x802)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Fi'] = function() {
                    var _0x4aba9f = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x4aba9f(0x5f5)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Gi'] = function() {
                    var _0x54f9ec = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x54f9ec(0x56e)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Hi'] = function() {
                    return this['qi'] ? this['si']['hatId'] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Ii'] = function() {
                    var _0x5e381b = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x5e381b(0x330)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Ji'] = function() {
                    var _0x563a08 = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x563a08(0x3cd)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Ki'] = function() {
                    var _0x35896c = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x35896c(0x2e2)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Li'] = function() {
                    var _0x4ecd15 = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x4ecd15(0x5da)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Mi'] = function() {
                    return this['qi'] ? this['si']['sessionsPlayed'] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Ni'] = function() {
                    var _0xbe85f3 = _0x3f07c0;
                    return this['qi'] ? this['si'][_0xbe85f3(0x70d)] : 0x0;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Oi'] = function() {
                    var _0x35a677 = _0x3f07c0;
                    return this['qi'] ? this['si'][_0x35a677(0x503)] : {};
                }, _0x2447f5[_0x3f07c0(0x6f4)]['V'] = function(_0x35f808) {
                    var _0x22e222 = _0x3f07c0;
                    this['ni'][_0x22e222(0x236)](_0x35f808), _0x35f808();
                }, _0x2447f5['prototype']['Pi'] = function(_0x2782ec) {
                    var _0x2e23d0 = _0x3f07c0;
                    this['oi'][_0x2e23d0(0x236)](_0x2782ec), _0x2782ec();
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Qi'] = function(_0x1f4d8e) {
                    var _0x3c65a4 = _0x3f07c0;
                    this['pi'][_0x3c65a4(0x236)](_0x1f4d8e);
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Ch'] = function(_0x4dc230, _0x419582) {
                    var _0xadf067 = _0x3f07c0,
                        _0x56af19 = this['si']['propertyList'][_0xadf067(0x3c1)](theoKzObjects['pL'] || []);
                    if (!_0x56af19) return !0x1;
                    for (var _0x263279 = 0x0; _0x263279 < _0x56af19['length']; _0x263279++) {
                        var _0x50eecf = _0x56af19[_0x263279];
                        if (_0x50eecf['id'] == _0x4dc230 && _0x50eecf[_0xadf067(0x767)] === _0x419582) return !0x0;
                    }
                    return !0x1;
                }, _0x2447f5[_0x3f07c0(0x6f4)]['P'] = function() {
                    return this['qi'];
                }, _0x2447f5['prototype']['ea'] = function() {
                    return this['ri'];
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Q'] = function(_0x89a8c2) {
                    var _0x2252ab = this;
                    this['qi'] && this['Ri'](function(_0xdf5271) {
                        if (_0xdf5271) {
                            var _0x1fa9fd = _0x2252ab['zi'](),
                                _0x376947 = _0x2252ab['Ai']();
                            _0x2252ab['si'] = _0xdf5271, _0xefd524(_0x2252ab['si']), _0x2252ab['Si']();
                            var _0x497c6e = _0x2252ab['zi'](),
                                _0x3236ef = _0x2252ab['Ai']();
                            _0x3236ef > 0x1 && _0x3236ef != _0x376947 && _0x3b8490()['s']['aa']['Ti'](new _0x4dc516(_0x3236ef));
                            var _0x4d714c = _0x497c6e - _0x1fa9fd;
                            _0x4d714c >= 0x14 && _0x3b8490()['s']['aa']['Ti'](new _0x2e8b79(_0x4d714c));
                        }
                        _0x89a8c2 && _0x89a8c2();
                    });
                }, _0x2447f5['prototype']['Ri'] = function(_0x35e717) {
                    var _0x36f987 = _0x3f07c0;
                    $['get'](_0x20a4f8 + _0x36f987(0x620) + this['ri'] + _0x36f987(0x298), function(_0x38b682) {
                        _0x35e717(_0x38b682['user_data']);
                    });
                }, _0x2447f5['prototype']['Ui'] = function(_0x3eeefd, _0x1a6e3c, _0x3f8b3c) {
                    var _0x52392c = _0x3f07c0,
                        _0x3eabf3 = this;
                    $[_0x52392c(0x505)](_0x20a4f8 + _0x52392c(0x620) + this['ri'] + _0x52392c(0x80c) + _0x3eeefd + _0x52392c(0x270) + _0x1a6e3c, function(_0xac383b) {
                        var _0x343686 = _0x52392c;
                        0x4b0 == _0xac383b[_0x343686(0x507)] ? _0x3eabf3['Q'](_0x3f8b3c) : _0x3f8b3c();
                    })[_0x52392c(0x547)](function() {
                        _0x3f8b3c();
                    });
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Vi'] = function() {
                    var _0x56daf5 = this;
                    if (this['Wi'](), 'undefined' == typeof FB) return void this['Xi']();
                    FB['getLoginStatus'](function(_0x4b5de0) {
                        var _0x13ce95 = _0x47fe;
                        if (_0x13ce95(0x509) === _0x4b5de0[_0x13ce95(0x755)]) return void(_0x4b5de0['authResponse'] && _0x4b5de0['authResponse'][_0x13ce95(0x3b8)] ? _0x56daf5['Yi'](_0x13ce95(0x410), _0x13ce95(0x5c9) + _0x4b5de0[_0x13ce95(0x51f)][_0x13ce95(0x3b8)]) : _0x56daf5['Xi']());
                        FB[_0x13ce95(0x36f)](function(_0x58a409) {
                            var _0x1488da = _0x13ce95;
                            'connected' === _0x58a409[_0x1488da(0x755)] && _0x58a409[_0x1488da(0x51f)] && _0x58a409[_0x1488da(0x51f)][_0x1488da(0x3b8)] ? _0x56daf5['Yi'](_0x1488da(0x410), _0x1488da(0x5c9) + _0x58a409['authResponse'][_0x1488da(0x3b8)]) : _0x56daf5['Xi']();
                        });
                    });
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Zi'] = function() {
                    var _0x103d29 = _0x3f07c0,
                        _0x3e7861 = this;
                    this['Wi']();
                    if (typeof GoogleAuth === _0x103d29(0x337)) {
                        this['Xi']();
                        return;
                    }
                    console['log'](_0x103d29(0x1ec)), GoogleAuth[_0x103d29(0x63d)](function() {
                        var _0x29c30d = _0x103d29;
                        console[_0x29c30d(0x435)](_0x29c30d(0x764));
                        if (GoogleAuth['isSignedIn'][_0x29c30d(0x505)]()) {
                            console[_0x29c30d(0x435)](_0x29c30d(0x855));
                            var _0x3ec86a = GoogleAuth[_0x29c30d(0x593)][_0x29c30d(0x505)]();
                            _0x3e7861['Yi'](_0x29c30d(0x358), _0x29c30d(0x831) + _0x3ec86a['getAuthResponse']()[_0x29c30d(0x3b1)]);
                            return;
                        }
                        GoogleAuth['signIn']()[_0x29c30d(0x63d)](function(_0x24208e) {
                            var _0x6c4d94 = _0x29c30d;
                            if (typeof _0x24208e[_0x6c4d94(0x769)] !== _0x6c4d94(0x337)) {
                                console[_0x6c4d94(0x435)](_0x6c4d94(0x680) + _0x24208e[_0x6c4d94(0x769)]), _0x3e7861['Xi']();
                                return;
                            }
                            _0x24208e['isSignedIn']() ? (console['log']('gsi:s'), _0x3e7861['Yi']('google', _0x6c4d94(0x831) + _0x24208e[_0x6c4d94(0x1ff)]()['id_token'])) : (console['log'](_0x6c4d94(0x532)), _0x3e7861['Xi']());
                        });
                    });
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Wi'] = function() {
                    var _0x314f28 = _0x3f07c0;
                    console['log'](_0x314f28(0x406) + this['qi']);
                    var _0xfd65df = this['ri'],
                        _0x3d8b85 = this['ti'];
                    this['qi'] = ![], this['ri'] = _0x4fefd7, this['si'] = {}, this['ti'] = null, _0x28ae7f(_0x4b2a4b['Oe'], '', 0x3c);
                    switch (_0x3d8b85) {
                        case _0x314f28(0x410):
                            this['$i']();
                            break;
                        case 'google':
                            this['_i']();
                    }
                    _0xfd65df !== this['ri'] ? this['aj']() : this['Si']();
                }, _0x2447f5[_0x3f07c0(0x6f4)]['bj'] = function() {
                    var _0x7cab0b = _0x3f07c0;
                    console[_0x7cab0b(0x435)]('dA'), this['qi'] && $[_0x7cab0b(0x505)](_0x20a4f8 + _0x7cab0b(0x620) + this['ri'] + _0x7cab0b(0x3fd), function(_0x34a80c) {
                        var _0x4b7dc0 = _0x7cab0b;
                        0x4b0 === _0x34a80c[_0x4b7dc0(0x507)] ? console['log'](_0x4b7dc0(0x329)) : console[_0x4b7dc0(0x435)]('dA:\x20NO');
                    })['fail'](function() {
                        var _0x1939e7 = _0x7cab0b;
                        console['log'](_0x1939e7(0x744));
                    });
                }, _0x2447f5[_0x3f07c0(0x6f4)]['vi'] = function() {
                    var _0xfd3adb = _0x3f07c0;
                    console[_0xfd3adb(0x435)]('rs');
                    var _0x4a46b3 = _0x424d02(_0x4b2a4b['Oe']),
                        _0x12dff2 = this;
                    _0xfd3adb(0x410) == _0x4a46b3 ? (console[_0xfd3adb(0x435)](_0xfd3adb(0x7c5)), function _0x43a35f() {
                        'undefined' != typeof FB ? _0x12dff2['Vi']() : setTimeout(_0x43a35f, 0x64);
                    }()) : _0xfd3adb(0x358) == _0x4a46b3 ? (console[_0xfd3adb(0x435)]('rs:gg'), function _0x1baab1() {
                        void 0x0 !== GoogleAuth ? _0x12dff2['Zi']() : setTimeout(_0x1baab1, 0x64);
                    }()) : (console[_0xfd3adb(0x435)](_0xfd3adb(0x784)), this['Wi']());
                }, _0x2447f5['prototype']['aj'] = function() {
                    var _0x4defe4 = 0x0;
                    for (; _0x4defe4 < this['ni']['length']; _0x4defe4++) {
                        this['ni'][_0x4defe4]();
                    }
                    this['Si']();
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Si'] = function() {
                    var _0x11b7c8 = _0x3f07c0,
                        _0x2298f8 = 0x0;
                    for (; _0x2298f8 < this['oi'][_0x11b7c8(0x30a)]; _0x2298f8++) {
                        this['oi'][_0x2298f8]();
                    }
                    var _0x2890a0 = this['pi'];
                    this['pi'] = [];
                    var _0x3edfe1 = 0x0;
                    for (; _0x3edfe1 < _0x2890a0['length']; _0x3edfe1++) {
                        _0x2890a0[_0x3edfe1]();
                    }
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Yi'] = function(_0x34e625, _0x38c743) {
                    var _0x38f169 = _0x3f07c0,
                        _0x4d42f5 = this;
                    $['get'](_0x20a4f8 + '/pub/wuid/' + _0x38c743 + _0x38f169(0x2f1), function(_0x3c4aef) {
                        var _0x5e7893 = _0x38f169;
                        if (_0x3c4aef && _0x3c4aef['user_data']) {
                            checkSubscriptionExpired(_0x3c4aef[_0x5e7893(0x82f)]['userId']), registerUpdatePlayer(_0x3c4aef[_0x5e7893(0x82f)]), _0xefd524(_0x3c4aef[_0x5e7893(0x82f)]);
                            var _0x5a46d3 = this['ri'];
                            _0x4d42f5['qi'] = !![], _0x4d42f5['ri'] = _0x38c743, _0x4d42f5['si'] = _0x3c4aef[_0x5e7893(0x82f)], _0x4d42f5['ti'] = _0x34e625, _0x28ae7f(_0x4b2a4b['Oe'], _0x4d42f5['ti'], 0x3c), console[_0x5e7893(0x435)](_0x4d42f5), showServer2(_0xe6a4c3), showVersionPays(_0x3c4aef), zw_userId = _0x3c4aef[_0x5e7893(0x82f)][_0x5e7893(0x65e)], $(_0x5e7893(0x1f6))['text'](zw_userId), $(_0x5e7893(0x264))['attr'](_0x5e7893(0x68e), _0x3c4aef['user_data'][_0x5e7893(0x455)]), $(_0x5e7893(0x491))[_0x5e7893(0x32d)](_0x5e7893(0x48d) + zw_userId), theoKzObjects[_0x5e7893(0x25b)] = ![], _0x5a46d3 !== _0x38c743 ? _0x4d42f5['aj']() : _0x4d42f5['Si']();
                        } else _0x4d42f5['Xi']();
                    })[_0x38f169(0x547)](function() {
                        _0x4d42f5['Xi']();
                    });
                }, _0x2447f5[_0x3f07c0(0x6f4)]['Xi'] = function() {
                    this['Wi']();
                }, _0x2447f5[_0x3f07c0(0x6f4)]['$i'] = function() {
                    var _0x345624 = _0x3f07c0;
                    console[_0x345624(0x435)]('lo:fb'), FB['logout'](function() {});
                }, _0x2447f5['prototype']['_i'] = function() {
                    console['log']('lo:gg'), GoogleAuth['signOut']();
                }, _0x2447f5;
            }()),
            _0x9bf0c6 = (function() {
                var _0xf97634 = _0xde0f64;

                function _0x4c54e6() {
                    var _0x3f6b82 = _0x47fe;
                    this['cj'] = {}, this['cj'][_0x3dd1ac] = [0x1, 0.5, 0.25, 0.5], this['cj'][_0x4c19d1] = _0x3b7e96['_b'][_0x3f6b82(0x64a)], this['cj'][_0x5b3806] = [0x0, 0x0], this['cj'][_0x30429e] = [0x0, 0x0];
                    var _0x5545bb = _0x3b7e96['cc']['from'](_0x1a5c73, _0x517bbb, this['cj']);
                    this['zf'] = new _0x3b7e96['hc'](_0x99a940, _0x5545bb);
                }
                var _0x557c72 = _0xf97634(0x42a) + _0x10ccd7(),
                    _0x197a28 = _0xf97634(0x54c) + _0x10ccd7(),
                    _0x343d3c = atob('dHJhbnNsYXRpb25NYXRyaXg='),
                    _0x4bf837 = atob(_0xf97634(0x657)),
                    _0x3dd1ac = _0xf97634(0x725) + _0x10ccd7(),
                    _0x4c19d1 = 'u4_' + _0x10ccd7(),
                    _0x5b3806 = _0xf97634(0x513) + _0x10ccd7(),
                    _0x30429e = _0xf97634(0x6d5) + _0x10ccd7(),
                    _0x183ade = _0xf97634(0x2c8) + _0x10ccd7(),
                    _0x99a940 = new _0x3b7e96['gc']()[_0xf97634(0x565)](_0x557c72, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)[_0xf97634(0x565)](_0x197a28, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2),
                    _0x1a5c73 = atob(_0xf97634(0x3d7)) + _0x557c72 + atob(_0xf97634(0x734)) + _0x197a28 + atob('O3VuaWZvcm0gbWF0MyA=') + _0x343d3c + atob(_0xf97634(0x5ff)) + _0x4bf837 + atob(_0xf97634(0x646)) + _0x183ade + atob('O3ZvaWQgbWFpbigpew==') + _0x183ade + atob(_0xf97634(0x32e)) + _0x197a28 + atob(_0xf97634(0x4b4)) + _0x4bf837 + atob(_0xf97634(0x415)) + _0x343d3c + atob(_0xf97634(0x40d)) + _0x557c72 + atob(_0xf97634(0x21e)),
                    _0x517bbb = atob('cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=') + _0x183ade + atob(_0xf97634(0x5bf)) + _0x3dd1ac + atob(_0xf97634(0x649)) + _0x4c19d1 + atob(_0xf97634(0x3d5)) + _0x5b3806 + atob(_0xf97634(0x3d5)) + _0x30429e + atob(_0xf97634(0x842)) + _0x183ade + atob('Kg==') + _0x5b3806 + atob(_0xf97634(0x833)) + _0x30429e + atob('O3ZlYzQgdl9jb2xvcl9taXg9') + _0x3dd1ac + atob(_0xf97634(0x6f7)) + _0x4c19d1 + atob(_0xf97634(0x33a));
                return _0x4c54e6[_0xf97634(0x6f4)]['Hf'] = function(_0x49c314, _0x3e27b2, _0x6b2171, _0x3d5e1f) {
                    var _0x4b9add = this['cj'][_0x3dd1ac];
                    _0x4b9add[0x0] = _0x49c314, _0x4b9add[0x1] = _0x3e27b2, _0x4b9add[0x2] = _0x6b2171, _0x4b9add[0x3] = _0x3d5e1f;
                }, _0x4c54e6['prototype']['Bf'] = function(_0x175e8a) {
                    this['cj'][_0x4c19d1] = _0x175e8a;
                }, _0x4c54e6[_0xf97634(0x6f4)]['Te'] = function(_0x378b97, _0x5ac59d, _0xdc1430, _0x40f362) {
                    var _0x56f2b9 = _0xf97634;
                    this['zf'][_0x56f2b9(0x797)]['x'] = _0x378b97, this['zf']['position']['y'] = _0x5ac59d, this['zf'][_0x56f2b9(0x266)]['x'] = _0xdc1430, this['zf'][_0x56f2b9(0x266)]['y'] = _0x40f362;
                    var _0x41c614 = this['cj'][_0x5b3806];
                    _0x41c614[0x0] = 0.2520615384615385 * _0xdc1430, _0x41c614[0x1] = 0.4357063736263738 * _0x40f362;
                    var _0x59eefd = this['cj'][_0x30429e];
                    _0x59eefd[0x0] = 0.2520615384615385 * _0x378b97, _0x59eefd[0x1] = 0.4357063736263738 * _0x5ac59d;
                }, _0x4c54e6;
            }()),
            _0x5668f5 = (function() {
                var _0xf1de8f = _0xde0f64;

                function _0x13632b() {
                    this['jh'] = new _0x3b7e96['ec'](), this['dj'] = 0x0, this['ej'] = 0x0;
                }
                return _0x13632b[_0xf1de8f(0x6f4)]['kh'] = function(_0x5f466b) {
                    var _0x51c425 = _0xf1de8f;
                    const {
                        Hc: _0x5ada56,
                        Lh: _0x3f9a50,
                        Mh: _0x580453,
                        Nh: _0x3c83bc,
                        Oh: _0x379cfe
                    } = _0x5f466b;
                    this['jh']['texture'] = _0x5ada56, this['jh'][_0x51c425(0x5f4)][_0x51c425(0x3ce)](_0x3f9a50, _0x580453);
                    const _0x203c28 = _0x5ada56['width'],
                        _0x1e63b2 = _0x5ada56[_0x51c425(0x561)];
                    this['dj'] = _0x3c83bc / _0x203c28, this['ej'] = _0x379cfe / _0x1e63b2, this['jh'][_0x51c425(0x266)]['set'](this['dj'], this['ej']);
                }, _0x13632b['prototype']['oh'] = function(_0x724fee) {
                    var _0x1c3eaa = _0xf1de8f;
                    this['jh'][_0x1c3eaa(0x266)]['set'](this['dj'] * _0x724fee, this['ej'] * _0x724fee);
                }, _0x13632b[_0xf1de8f(0x6f4)]['fj'] = function(_0x2a88d5) {
                    var _0x71cc41 = _0xf1de8f;
                    this['jh'][_0x71cc41(0x2b9)] = _0x2a88d5;
                }, _0x13632b['prototype']['nh'] = function(_0x4a0e25, _0x25fb3a) {
                    var _0xc593a7 = _0xf1de8f;
                    this['jh'][_0xc593a7(0x797)][_0xc593a7(0x3ce)](_0x4a0e25, _0x25fb3a);
                }, _0x13632b[_0xf1de8f(0x6f4)]['Mg'] = function(_0x1411bf) {
                    var _0x12f084 = _0xf1de8f;
                    this['jh'][_0x12f084(0x3d0)] = _0x1411bf;
                }, _0x13632b[_0xf1de8f(0x6f4)]['gj'] = function() {
                    return this['jh']['visible'];
                }, _0x13632b['prototype']['qh'] = function(_0x4ab1d8) {
                    var _0x1fae63 = _0xf1de8f;
                    this['jh'][_0x1fae63(0x7ec)] = _0x4ab1d8;
                }, _0x13632b[_0xf1de8f(0x6f4)]['Mf'] = function() {
                    return this['jh'];
                }, _0x13632b[_0xf1de8f(0x6f4)]['ih'] = function() {
                    _0x346065(this['jh']);
                }, _0x13632b;
            }()),
            _0x5b6df7 = (function() {
                var _0x446b41 = _0xde0f64;

                function _0x2dcb5c(_0x5114a9) {
                    var _0xa7dc17 = _0x47fe;
                    this['fb'] = _0x5114a9, this['Mb'] = new _0x5b6df7['Config'](), this['Hb'] = !0x1, this['Ib'] = !0x0, this['hj'] = !0x1, this['Db'] = 0x0, this['ij'] = 0x0, this['Jb'] = 0x1, this['jj'] = 0x0, this['M'] = 0x0, this['Ff'] = {}, this['kj'] = 0x0, this['lj'] = new Float32Array(0x2 * _0x14ca7b), this['mj'] = new Float32Array(0x2 * _0x14ca7b), this['nj'] = new Float32Array(0x2 * _0x14ca7b), this['oj'] = null, this['pj'] = null, this['qj'] = null, this['b'] = null, this[_0xa7dc17(0x704)] = null, this['Tb']();
                }
                var _0x14ca7b = 0xc8;
                return _0x2dcb5c['prototype']['Kb'] = function() {
                    var _0x13315f = _0x47fe;
                    null != this['pj'] && _0x346065(this['pj']['Rf']), null != this['qj'] && _0x346065(this['qj']), this['b'] != null && _0x346065(this['b']), this[_0x13315f(0x704)] != null && _0x346065(this['zw_msg']);
                }, _0x2dcb5c[_0x446b41(0x6f4)]['Tb'] = function() {
                    this['Ig'](0.25), this['Mb']['ad'] = '', this['Ib'] = !![], this['Ff'] = {}, this['Mg'](![]);
                }, _0x2dcb5c['prototype']['Fg'] = function(_0xf79326) {
                    this['Mb'] = _0xf79326, this['rj'](this['Hb']);
                }, _0x2dcb5c[_0x446b41(0x6f4)]['Mg'] = function(_0x1e8db2) {
                    var _0x1c5175 = this['Hb'];
                    this['Hb'] = _0x1e8db2, this['rj'](_0x1c5175);
                }, _0x2dcb5c[_0x446b41(0x6f4)]['Ig'] = function(_0x1b81b7) {
                    var _0xb401f9 = _0x446b41;
                    this['M'] = 0x32 * _0x1b81b7;
                    var _0xd105f4 = _0x1b81b7;
                    _0x1b81b7 > this['fb']['cf'] && (_0xd105f4 = Math['atan']((_0x1b81b7 - this['fb']['cf']) / this['fb']['df']) * this['fb']['df'] + this['fb']['cf']);
                    var _0x44c279 = Math[_0xb401f9(0x27e)](0x4 * Math['pow'](0x5 * _0xd105f4, 0.707106781186548) + 0x19),
                        _0x11a0f5 = Math[_0xb401f9(0x363)](_0x14ca7b, Math[_0xb401f9(0x604)](0x3, 0x5 * (_0x44c279 - 0x5) + 0x1)),
                        _0x4efc6e = this['kj'];
                    if (this['Db'] = 0.025 * (0x5 + 0.9 * _0x44c279), this['kj'] = Math['floor'](_0x11a0f5), this['ij'] = _0x11a0f5 - this['kj'], _0x4efc6e > 0x0 && _0x4efc6e < this['kj']) {
                        for (var _0x4fd404 = this['lj'][0x2 * _0x4efc6e - 0x2], _0x5ba9b0 = this['lj'][0x2 * _0x4efc6e - 0x1], _0xe4dd19 = this['mj'][0x2 * _0x4efc6e - 0x2], _0x5af6f2 = this['mj'][0x2 * _0x4efc6e - 0x1], _0x20eb60 = this['nj'][0x2 * _0x4efc6e - 0x2], _0x2cf1d3 = this['nj'][0x2 * _0x4efc6e - 0x1], _0x1b2dae = _0x4efc6e; _0x1b2dae < this['kj']; _0x1b2dae++) this['lj'][0x2 * _0x1b2dae] = _0x4fd404, this['lj'][0x2 * _0x1b2dae + 0x1] = _0x5ba9b0, this['mj'][0x2 * _0x1b2dae] = _0xe4dd19, this['mj'][0x2 * _0x1b2dae + 0x1] = _0x5af6f2, this['nj'][0x2 * _0x1b2dae] = _0x20eb60, this['nj'][0x2 * _0x1b2dae + 0x1] = _0x2cf1d3;
                    }
                }, _0x2dcb5c[_0x446b41(0x6f4)]['Lg'] = function(_0x538e4a, _0x3aa6be) {
                    this['kj'] = _0x3aa6be;
                    for (var _0x208f9f = 0x0; _0x208f9f < this['kj']; _0x208f9f++) this['lj'][0x2 * _0x208f9f] = this['mj'][0x2 * _0x208f9f] = this['nj'][0x2 * _0x208f9f] = _0x538e4a(), this['lj'][0x2 * _0x208f9f + 0x1] = this['mj'][0x2 * _0x208f9f + 0x1] = this['nj'][0x2 * _0x208f9f + 0x1] = _0x538e4a();
                }, _0x2dcb5c[_0x446b41(0x6f4)]['Kg'] = function(_0x4120b3, _0x2edb84, _0x358164) {
                    this['hj'] = _0x358164;
                    for (var _0x55ecb9 = 0x0; _0x55ecb9 < this['kj']; _0x55ecb9++) this['lj'][0x2 * _0x55ecb9] = this['mj'][0x2 * _0x55ecb9], this['lj'][0x2 * _0x55ecb9 + 0x1] = this['mj'][0x2 * _0x55ecb9 + 0x1];
                    var _0x229823 = _0x4120b3 - this['mj'][0x0],
                        _0x4d436f = _0x2edb84 - this['mj'][0x1];
                    this['sj'](_0x229823, _0x4d436f, this['kj'], this['mj']);
                }, _0x2dcb5c['prototype']['sj'] = function(_0xb4d85c, _0x1f29b7, _0x4e54e8, _0x4a1647) {
                    var _0x2b644a = _0x446b41,
                        _0x10b21f = Math[_0x2b644a(0x5e5)](_0xb4d85c, _0x1f29b7);
                    if (!(_0x10b21f <= 0x0)) {
                        var _0x4798ae = _0x4a1647[0x0],
                            _0x323171 = void 0x0;
                        _0x4a1647[0x0] += _0xb4d85c;
                        var _0x2b62eb = _0x4a1647[0x1],
                            _0x2ee956 = void 0x0;
                        _0x4a1647[0x1] += _0x1f29b7;
                        for (var _0x1ad990 = this['Db'] / (this['Db'] + _0x10b21f), _0x264898 = 0x1 - 0x2 * _0x1ad990, _0x545aa4 = 0x1, _0x119e38 = _0x4e54e8 - 0x1; _0x545aa4 < _0x119e38; _0x545aa4++) _0x323171 = _0x4a1647[0x2 * _0x545aa4], _0x4a1647[0x2 * _0x545aa4] = _0x4a1647[0x2 * _0x545aa4 - 0x2] * _0x264898 + (_0x323171 + _0x4798ae) * _0x1ad990, _0x4798ae = _0x323171, _0x2ee956 = _0x4a1647[0x2 * _0x545aa4 + 0x1], _0x4a1647[0x2 * _0x545aa4 + 0x1] = _0x4a1647[0x2 * _0x545aa4 - 0x1] * _0x264898 + (_0x2ee956 + _0x2b62eb) * _0x1ad990, _0x2b62eb = _0x2ee956;
                        _0x1ad990 = this['ij'] * this['Db'] / (this['ij'] * this['Db'] + _0x10b21f), _0x264898 = 0x1 - 0x2 * _0x1ad990, _0x4a1647[0x2 * _0x4e54e8 - 0x2] = _0x4a1647[0x2 * _0x4e54e8 - 0x4] * _0x264898 + (_0x4a1647[0x2 * _0x4e54e8 - 0x2] + _0x4798ae) * _0x1ad990, _0x4a1647[0x2 * _0x4e54e8 - 0x1] = _0x4a1647[0x2 * _0x4e54e8 - 0x3] * _0x264898 + (_0x4a1647[0x2 * _0x4e54e8 - 0x1] + _0x2b62eb) * _0x1ad990;
                    }
                }, _0x2dcb5c[_0x446b41(0x6f4)]['Gf'] = function() {
                    return {
                        'x': this['nj'][0x0],
                        'y': this['nj'][0x1]
                    };
                }, _0x2dcb5c[_0x446b41(0x6f4)]['Hg'] = function(_0x90d966, _0x42012c) {
                    var _0xbea051 = _0x446b41;
                    for (var _0x521441 = 0xf4240, _0x479eaf = _0x90d966, _0x39fdac = _0x42012c, _0x1c5adc = 0x0; _0x1c5adc < this['kj']; _0x1c5adc++) {
                        var _0x1bb3fa = this['nj'][0x2 * _0x1c5adc],
                            _0xd511af = this['nj'][0x2 * _0x1c5adc + 0x1],
                            _0x558176 = Math[_0xbea051(0x5e5)](_0x90d966 - _0x1bb3fa, _0x42012c - _0xd511af);
                        _0x558176 < _0x521441 && (_0x521441 = _0x558176, _0x479eaf = _0x1bb3fa, _0x39fdac = _0xd511af);
                    }
                    return {
                        'x': _0x479eaf,
                        'y': _0x39fdac,
                        'distance': _0x521441
                    };
                }, _0x2dcb5c[_0x446b41(0x6f4)]['vb'] = function(_0x421299) {
                    this['oj'] = _0x421299;
                }, _0x2dcb5c[_0x446b41(0x6f4)]['Fb'] = function(_0x38b167, _0x2fe026) {
                    var _0x1825c1 = _0x446b41;
                    this['Jb'] = _0x15e3ec(this['Jb'], this['Ib'] ? this['hj'] ? 0.9 + 0.1 * Math[_0x1825c1(0x76a)](_0x38b167 / 0x190 * Math['PI']) : 0x1 : 0x0, _0x2fe026, 0x1 / 0x320), this['jj'] = _0x15e3ec(this['jj'], this['Ib'] ? this['hj'] ? 0x1 : 0x0 : 0x1, _0x2fe026, 0.0025), null != this['pj'] && (this['pj']['Rf']['alpha'] = this['Jb']), null != this['qj'] && (this['qj'][_0x1825c1(0x7ec)] = this['Jb']);
                }, _0x2dcb5c[_0x446b41(0x6f4)]['Gb'] = function(_0x53c04d, _0x4a264b, _0x243b46, _0x2d4d1a) {
                    var _0x35fb7a = _0x446b41;
                    if (this['Hb'] && this['Ib']) {
                        var _0x43cfad = Math[_0x35fb7a(0x81f)](0.11112, _0x4a264b / 0x5f),
                            _0x49256c = 0x0;
                        for (; _0x49256c < this['kj']; _0x49256c++) {
                            var _0x38769f = _0x445e27(this['lj'][0x2 * _0x49256c], this['mj'][0x2 * _0x49256c], _0x243b46),
                                _0x1fd744 = _0x445e27(this['lj'][0x2 * _0x49256c + 0x1], this['mj'][0x2 * _0x49256c + 0x1], _0x243b46);
                            this['nj'][0x2 * _0x49256c] = _0x445e27(_0x38769f, this['nj'][0x2 * _0x49256c], _0x43cfad), this['nj'][0x2 * _0x49256c + 0x1] = _0x445e27(_0x1fd744, this['nj'][0x2 * _0x49256c + 0x1], _0x43cfad);
                        }
                    }
                    if (this['pj'] != null && this['Hb'] && this['pj']['tj'](this, _0x53c04d, _0x4a264b, _0x2d4d1a), this['qj'] != null && (this['qj']['If']['x'] = this['nj'][0x0], this['qj']['If']['y'] = this['nj'][0x1] - 0x3 * this['Db']), this['b'] != null) {
                        var _0x323d73;
                        for (_0x323d73 in (this['b']['x'] = this['qj'][_0x35fb7a(0x797)]['x'], this['b']['y'] = this['qj'][_0x35fb7a(0x797)]['y'] + 0x1, this['b']['he'])) {
                            !(this['Ff'][_0x323d73] != null && this['Ff'][_0x323d73]['sc']) && (this['b']['removeChild'](this['b']['he'][_0x323d73]), delete this['b']['he'][_0x323d73]);
                        }
                        var _0x1d2ff0, _0x4add98 = 0x0;
                        for (_0x1d2ff0 in (c = 0x0, this['Ff'])) {
                            if (_0x1d2ff0 !== '0' && _0x1d2ff0 !== '1') continue;
                            if (_0x4a264b = this['Ff'][_0x1d2ff0]) {
                                if (_0x4a264b['sc'] && theoKzObjects[_0x35fb7a(0x393)]) {
                                    var _0x3a2a44 = this['b']['he'][_0x1d2ff0];
                                    if (!_0x3a2a44) {
                                        const _0x4bc45e = portionTimes[_0x1d2ff0],
                                            _0xdfceb6 = timeFontColors2[_0x1d2ff0];
                                        let _0x2e79a6 = _0x4a264b['tc'];
                                        if (_0x2e79a6 === 0.99) _0x2e79a6 = 0x1;
                                        let _0x8cfe64 = _0x4bc45e - parseInt(_0x2e79a6 * _0x4bc45e);
                                        _0x3a2a44 = new PIXI[(_0x35fb7a(0x636))](_0x8cfe64, {
                                            'align': _0x35fb7a(0x71b),
                                            'fill': _0xdfceb6,
                                            'fontSize': 0x14,
                                            'lineJoin': _0x35fb7a(0x223),
                                            'whiteSpace': _0x35fb7a(0x31d),
                                            'wordWrap': !![],
                                            'dropShadow': !![],
                                            'dropShadowBlur': 0x6,
                                            'fontWeight': _0x35fb7a(0x69d)
                                        }), this['b']['he'][_0x1d2ff0] = _0x3a2a44, this['b'][_0x35fb7a(0x6f9)](_0x3a2a44);
                                    }
                                    const _0x16889c = portionTimes[_0x1d2ff0];
                                    let _0x3c1b43 = _0x4a264b['tc'];
                                    if (_0x3c1b43 === 0.99) _0x3c1b43 = 0x1;
                                    let _0x2cbe2e = _0x16889c - parseInt(_0x3c1b43 * _0x16889c);
                                    _0x3a2a44[_0x35fb7a(0x32d)] = _0x2cbe2e, _0x3a2a44['x'] = _0x4add98, _0x3a2a44['y'] = 0x0, _0x4add98 += _0x3a2a44[_0x35fb7a(0x785)] + 0xa;
                                }
                            }
                        }
                        this['b']['pivot']['x'] = 0.5 * this['b'][_0x35fb7a(0x785)], this['b'][_0x35fb7a(0x6ae)]['y'] = this['b'][_0x35fb7a(0x561)];
                    }
                }, _0x2dcb5c[_0x446b41(0x6f4)]['rj'] = function(_0x1a89fd) {
                    var _0x59f9fe = _0x446b41;
                    this['Hb'] ? !_0x1a89fd && this['uj']() : (null != this['pj'] && _0x346065(this['pj']['Rf']), null != this['qj'] && _0x346065(this['qj']), this['b'] != null && _0x346065(this['b']), this[_0x59f9fe(0x704)] != null && _0x346065(this[_0x59f9fe(0x704)]));
                }, _0x2dcb5c['prototype']['uj'] = function() {
                    var _0x591879 = _0x446b41,
                        _0x2a023a = _0x3b8490();
                    null == this['pj'] ? this['pj'] = new _0x45fee3() : _0x346065(this['pj']['Rf']), this['pj']['hh'](_0x2a023a['o']['fb']['af'], _0x2a023a['p']['Dc']()['ed'](this['Mb']['cg']), _0x2a023a['p']['Dc']()['dd'](this['Mb']['dg']), _0x2a023a['p']['Dc']()['fd'](this['Mb']['Bg']), _0x2a023a['p']['Dc']()['gd'](this['Mb']['Cg']), _0x2a023a['p']['Dc']()['hd'](this['Mb']['Dg']), _0x2a023a['p']['Dc']()['jd'](this['Mb']['Eg'])), null == this['qj'] ? (this['qj'] = new _0x371614(''), this['qj'][_0x591879(0x577)][_0x591879(0x864)] = fonts[currentFontIndex], this['qj'][_0x591879(0x5f4)]['set'](0.5)) : _0x346065(this['qj']), this['b'] == null ? (this['b'] = new _0x3b7e96['Zb'](), this['b']['he'] = {}) : _0x346065(this['b']), this[_0x591879(0x704)] == null ? this['zw_msg'] = new _0x3b7e96['Zb']() : _0x346065(this[_0x591879(0x704)]), this['qj'][_0x591879(0x577)][_0x591879(0x720)] = 0xe, this['qj'][_0x591879(0x577)][_0x591879(0x691)] = _0x2a023a['p']['Dc']()['dd'](this['Mb']['dg'])['_c'], this['qj']['text'] = this['Mb']['ad'], this['oj']['Qf'](this['Mb']['Lb'], this['pj'], this['qj'], this['b'], this[_0x591879(0x704)]);
                }, _0x2dcb5c[_0x446b41(0x6c1)] = (function() {
                    function _0x39b623() {
                        var _0x303a83 = _0x47fe;
                        this['Lb'] = 0x0, this['cg'] = _0x7639bb[_0x303a83(0x407)], this['dg'] = 0x0, this['Bg'] = 0x0, this['Cg'] = 0x0, this['Dg'] = 0x0, this['Eg'] = 0x0, this['ad'] = '';
                    }
                    return _0x39b623;
                }()), _0x2dcb5c;
            }()),
            _0x371614 = (function() {
                return _0x39eae9(_0x3b7e96['fc'], function(_0x26d9de, _0x8b1c58, _0x426e96) {
                    var _0x186f83 = _0x47fe;
                    _0x3b7e96['fc'][_0x186f83(0x371)](this, _0x26d9de, _0x8b1c58, _0x426e96), this['If'] = {
                        'x': 0x0,
                        'y': 0x0
                    };
                });
            }()),
            _0x45fee3 = (function() {
                var _0x43ce30 = _0xde0f64;

                function _0x1f7622() {
                    this['Rf'] = new _0x3b7e96['Zb'](), this['Rf']['sortableChildren'] = !0x0, this['vj'] = new _0xc63e55(), this['vj']['zIndex'] = _0x3102b8 * (0x2 * (_0x41c4b7 + 0x1) + 0x1 + 0x3), this['wj'] = 0x0, this['xj'] = new Array(_0x41c4b7), this['xj'][0x0] = this['yj'](0x0, new _0x5668f5(), new _0x5668f5());
                    for (let _0x257af6 = 0x0; _0x257af6 < _0x41c4b7; _0x257af6++) {
                        this['xj'][_0x257af6] = this['yj'](_0x257af6, new _0x5668f5(), new _0x5668f5());
                    }
                    this['zj'] = 0x0, this['Aj'] = 0x0, this['Bj'] = 0x0;
                }
                var _0x3102b8 = 0.001,
                    _0x41c4b7 = 0x31d,
                    _0x2acb8a = 0.1 * Math['PI'],
                    _0x158e9d = -0.06640625,
                    _0x4c3e3e = 0.84375,
                    _0x131dd1 = 0.2578125,
                    _0x22106c = -0.03515625,
                    _0x37eb9f = -0.0625,
                    _0x816fa1 = 0.5625,
                    _0x1b3ce4 = 0x3 * _0x158e9d + _0x4c3e3e,
                    _0x12a0e2 = _0x131dd1 - 0x3 * _0x158e9d,
                    _0x4181ad = _0x158e9d + _0x22106c,
                    _0x588587 = 0.375,
                    _0xfb270e = 0.75,
                    _0x7909e8 = _0x37eb9f + _0x37eb9f,
                    _0x2cea51 = 0x3 * _0x22106c + _0x131dd1,
                    _0x579d58 = _0x4c3e3e - 0x3 * _0x22106c,
                    _0x3ec67f = _0x22106c + _0x158e9d;
                _0x1f7622[_0x43ce30(0x6f4)]['yj'] = function(_0x384f0f, _0x7d8b5f, _0x2584a9) {
                    var _0x25a785 = _0x43ce30,
                        _0x3368a4 = new _0x238674(_0x7d8b5f, _0x2584a9);
                    const _0x596629 = _0x3102b8 * (0x2 * (_0x41c4b7 - _0x384f0f) + 0x1 + 0x3),
                        _0x43bd99 = _0x3102b8 * (0x2 * (_0x41c4b7 - _0x384f0f) - 0x2 + 0x3);
                    return _0x7d8b5f['jh'][_0x25a785(0x4f0)] = _0x596629, _0x2584a9['jh'][_0x25a785(0x4f0)] = _0x43bd99, _0x3368a4;
                }, _0x1f7622[_0x43ce30(0x6f4)]['hh'] = function(_0x48a135, _0x26e466, _0x1f1d24, _0x27d473, _0x5d3c0c, _0x2befc3, _0x44b282) {
                    var _0x35677a = _0x43ce30,
                        _0x5e4072 = _0x1f1d24['Zc'],
                        _0x47ba53 = _0x48a135 == _0x5f555c['_e'] ? _0x26e466['bd']['$c'] : _0x1f1d24['$c'];
                    _0x5e4072[_0x35677a(0x30a)] && _0x47ba53[_0x35677a(0x30a)] && this['xj'][_0x35677a(0x39f)]((_0x1dc84d, _0x107378) => {
                        var _0x498d7b = _0x35677a;
                        _0x1dc84d['Nf']['kh'](_0x5e4072[_0x107378 % _0x5e4072[_0x498d7b(0x30a)]]), _0x1dc84d['Pf']['kh'](_0x47ba53[_0x107378 % _0x47ba53[_0x498d7b(0x30a)]]);
                    }), this['vj']['hh'](_0x27d473, _0x5d3c0c, _0x2befc3, _0x44b282);
                };
                var _0xc63e55 = (function() {
                    var _0x4a3645 = _0x43ce30,
                        _0x11bb76 = _0x39eae9(_0x3b7e96['Zb'], function() {
                            var _0x161c43 = _0x47fe;
                            _0x3b7e96['Zb'][_0x161c43(0x371)](this), this['sortableChildren'] = !![], this['Cj'] = [], this['Dj'] = [], this['Ej'] = [], this['Fj'] = [], this['Gj'] = new _0x3b7e96['Zb'](), this['Hj'] = [];
                            for (var _0x246f89 = 0x0; _0x246f89 < 0x4; _0x246f89++) {
                                var _0x5a1f59 = new _0x5668f5();
                                _0x5a1f59['kh'](_0x3b8490()['q']['Ph']), this['Gj'][_0x161c43(0x6f9)](_0x5a1f59['jh']), this['Hj'][_0x161c43(0x236)](_0x5a1f59);
                            }
                            this['Gj']['zIndex'] = 0.0011, this['addChild'](this['Gj']), this['Ij'](), this['Jj'] = new _0x5668f5(), this['Jj']['kh'](_0x3b8490()['q']['Qh']), this['Jj']['jh']['zIndex'] = 0.001, this[_0x161c43(0x6f9)](this['Jj']['jh']), this['Kj'](), this[_0x161c43(0x255)] = new _0x5668f5(), this[_0x161c43(0x255)]['kh'](_0x3b8490()['q']['Rh']), this[_0x161c43(0x255)]['jh'][_0x161c43(0x4f0)] = 0.001, this[_0x161c43(0x6f9)](this[_0x161c43(0x255)]['jh']), this[_0x161c43(0x77e)](), this[_0x161c43(0x245)] = new _0x5668f5(), this[_0x161c43(0x245)]['kh'](_0x3b8490()['q'][_0x161c43(0x701)]), this[_0x161c43(0x245)]['jh'][_0x161c43(0x4f0)] = 0.001, this[_0x161c43(0x6f9)](this[_0x161c43(0x245)]['jh']), this[_0x161c43(0x36b)](), this['xxx2'] = new _0x5668f5(), this[_0x161c43(0x689)]['kh'](_0x3b8490()['q'][_0x161c43(0x5f2)]), this[_0x161c43(0x689)]['jh']['zIndex'] = 0.001, this[_0x161c43(0x6f9)](this['xxx2']['jh']), this[_0x161c43(0x83b)](), this['xxx10'] = new _0x5668f5(), this[_0x161c43(0x516)]['kh'](_0x3b8490()['q']['X_x10']), this[_0x161c43(0x516)]['jh'][_0x161c43(0x4f0)] = 0.001, this[_0x161c43(0x6f9)](this[_0x161c43(0x516)]['jh']), this[_0x161c43(0x60b)](), this[_0x161c43(0x678)] = new _0x5668f5(), this[_0x161c43(0x678)]['kh'](_0x3b8490()['q'][_0x161c43(0x6d2)]), this[_0x161c43(0x678)]['jh'][_0x161c43(0x4f0)] = 0.001, this[_0x161c43(0x6f9)](this['xxxLupatype']['jh']), this[_0x161c43(0x60e)](), this[_0x161c43(0x235)] = new _0x5668f5(), this[_0x161c43(0x235)]['kh'](_0x3b8490()['q'][_0x161c43(0x62c)]), this[_0x161c43(0x235)]['jh']['zIndex'] = 0.001, this[_0x161c43(0x6f9)](this[_0x161c43(0x235)]['jh']), this[_0x161c43(0x7f7)]();
                        });
                    return _0x11bb76[_0x4a3645(0x6f4)]['hh'] = function(_0x5ebd14, _0x3b469d, _0x5252e3, _0x467569) {
                        this['Lj'](0.002, this['Cj'], _0x5ebd14['Zc']), this['Lj'](0.003, this['Dj'], _0x3b469d['Zc']), this['Lj'](0.004, this['Fj'], _0x467569['Zc']), this['Lj'](0.005, this['Ej'], _0x5252e3['Zc']);
                    }, _0x11bb76[_0x4a3645(0x6f4)]['Lj'] = function(_0x46dc07, _0x77ed37, _0x2dffff) {
                        var _0x3a15c2 = _0x4a3645;
                        const _0x1f4823 = _0x2dffff[_0x3a15c2(0x30a)],
                            _0x34e1c7 = _0x77ed37[_0x3a15c2(0x30a)];
                        for (let _0x771eeb = _0x34e1c7; _0x771eeb < _0x1f4823; _0x771eeb++) {
                            const _0x518f48 = new _0x5668f5();
                            _0x77ed37['push'](_0x518f48), this[_0x3a15c2(0x6f9)](_0x518f48['Mf']());
                        }
                        for (let _0x1071e2 = _0x34e1c7; _0x1071e2 > _0x1f4823; _0x1071e2--) {
                            _0x77ed37[_0x3a15c2(0x5d8)]()['ih']();
                        }
                        let _0x205891 = _0x46dc07;
                        for (let _0x44fa8d = 0x0; _0x44fa8d < _0x1f4823; _0x44fa8d++) {
                            _0x205891 += 0.0001;
                            const _0x36c4c6 = _0x77ed37[_0x44fa8d];
                            _0x36c4c6['kh'](_0x2dffff[_0x44fa8d]), _0x36c4c6['jh'][_0x3a15c2(0x4f0)] = _0x205891;
                        }
                    }, _0x11bb76['prototype']['mh'] = function(_0x29be5d, _0x256631, _0x1df7b6, _0x2e083e) {
                        var _0x3d9843 = _0x4a3645;
                        this[_0x3d9843(0x3d0)] = !![], this['position']['set'](_0x29be5d, _0x256631), this[_0x3d9843(0x2b9)] = _0x2e083e, [this['Cj'], this['Dj'], this['Ej'], this['Fj']][_0x3d9843(0x39f)]((_0xe89369, _0x506a7a) => {
                            var _0x59a69a = _0x3d9843;
                            const _0x1c0300 = ['Cj\x20(ojos)', _0x59a69a(0x6d9), _0x59a69a(0x22e), _0x59a69a(0x695)][_0x506a7a];
                            _0xe89369['forEach'](_0x1c4aaf => _0x1c4aaf['oh'](_0x1df7b6));
                        });
                    }, _0x11bb76['prototype']['lh'] = function() {
                        var _0x1755d6 = _0x4a3645;
                        this[_0x1755d6(0x3d0)] = !0x1;
                    }, _0x11bb76[_0x4a3645(0x6f4)]['Mj'] = function(_0xc77e99, _0x3e5527, _0x57d85a, _0x466c1a) {
                        var _0x3a990f = _0x4a3645;
                        this['Gj'][_0x3a990f(0x3d0)] = !![];
                        var _0x3d64c7 = _0x57d85a / 0x3e8,
                            _0x533978 = 0x1 / this['Hj'][_0x3a990f(0x30a)];
                        for (var _0xb8da27 = 0x0; _0xb8da27 < this['Hj']['length']; _0xb8da27++) {
                            var _0x14d2f5 = 0x1 - (_0x3d64c7 + _0x533978 * _0xb8da27) % 0x1;
                            this['Hj'][_0xb8da27]['jh'][_0x3a990f(0x7ec)] = 0x1 - _0x14d2f5, this['Hj'][_0xb8da27]['oh'](_0x3e5527 * (0.5 + 4.5 * _0x14d2f5));
                        }
                    }, _0x11bb76[_0x4a3645(0x6f4)]['Ij'] = function() {
                        var _0x41e2fc = _0x4a3645;
                        this['Gj'][_0x41e2fc(0x3d0)] = !0x1;
                    }, _0x11bb76[_0x4a3645(0x6f4)]['Nj'] = function(_0x42c575, _0x43d676, _0x91a4b2, _0x336a7c) {
                        var _0x1089e1 = _0x4a3645;
                        this['Jj']['jh']['visible'] = !![], this['Jj']['jh'][_0x1089e1(0x7ec)] = _0x15e3ec(this['Jj']['jh'][_0x1089e1(0x7ec)], _0x42c575['hj'] ? 0.9 : 0.2, _0x336a7c, 0.0025), this['Jj']['oh'](_0x43d676);
                    }, _0x11bb76[_0x4a3645(0x6f4)][_0x4a3645(0x5fc)] = function(_0xb3a3dc, _0x2a178a, _0x5f2b20, _0x3bfded) {
                        var _0x9c83d0 = _0x4a3645;
                        this['flx']['jh'][_0x9c83d0(0x3d0)] = !![], this[_0x9c83d0(0x255)]['oh'](_0x2a178a);
                    }, _0x11bb76['prototype'][_0x4a3645(0x77e)] = function() {
                        var _0x29cd5f = _0x4a3645;
                        this[_0x29cd5f(0x255)]['jh'][_0x29cd5f(0x3d0)] = ![];
                    }, _0x11bb76[_0x4a3645(0x6f4)]['ActiveX5'] = function(_0x3e26c3, _0x2ccff6, _0x2c5eef, _0x185d7a) {
                        var _0x568b7b = _0x4a3645;
                        this['xxx5']['jh'][_0x568b7b(0x3d0)] = !![], this[_0x568b7b(0x245)]['jh'][_0x568b7b(0x7ec)] = _0x15e3ec(this['Jj']['jh']['alpha'], _0x3e26c3['hj'] ? 0.9 : 0.2, _0x185d7a, 0.0025), this[_0x568b7b(0x245)]['oh'](_0x2ccff6);
                    }, _0x11bb76[_0x4a3645(0x6f4)][_0x4a3645(0x36b)] = function() {
                        var _0x20661d = _0x4a3645;
                        this[_0x20661d(0x245)]['jh'][_0x20661d(0x3d0)] = ![];
                    }, _0x11bb76[_0x4a3645(0x6f4)][_0x4a3645(0x487)] = function(_0x258746, _0x4179b1, _0x39d061, _0x5b1906) {
                        var _0x2fd590 = _0x4a3645;
                        this[_0x2fd590(0x235)]['jh'][_0x2fd590(0x3d0)] = !![], this[_0x2fd590(0x235)]['oh'](_0x4179b1);
                    }, _0x11bb76[_0x4a3645(0x6f4)][_0x4a3645(0x7f7)] = function() {
                        var _0x2edaa8 = _0x4a3645;
                        this[_0x2edaa8(0x235)]['jh'][_0x2edaa8(0x3d0)] = ![];
                    }, _0x11bb76['prototype'][_0x4a3645(0x2cb)] = function(_0x4a1b93, _0x3ce6c0, _0x5947d1, _0x5f3824) {
                        var _0x51c2cd = _0x4a3645;
                        this['xxx2']['jh'][_0x51c2cd(0x3d0)] = !![], this[_0x51c2cd(0x689)]['jh']['alpha'] = _0x15e3ec(this['Jj']['jh'][_0x51c2cd(0x7ec)], _0x4a1b93['hj'] ? 0.9 : 0.2, _0x5f3824, 0.0025), this['xxx2']['oh'](_0x3ce6c0);
                    }, _0x11bb76[_0x4a3645(0x6f4)][_0x4a3645(0x83b)] = function() {
                        var _0x2f49d3 = _0x4a3645;
                        this['xxx2']['jh'][_0x2f49d3(0x3d0)] = ![];
                    }, _0x11bb76['prototype'][_0x4a3645(0x366)] = function(_0x5eed61, _0x57acbc, _0x128633, _0x2f764f) {
                        var _0x14fc45 = _0x4a3645;
                        this[_0x14fc45(0x516)]['jh'][_0x14fc45(0x3d0)] = !![], this[_0x14fc45(0x516)]['jh']['alpha'] = _0x15e3ec(this['Jj']['jh']['alpha'], _0x5eed61['hj'] ? 0.9 : 0.2, _0x2f764f, 0.0025), this[_0x14fc45(0x516)]['oh'](_0x57acbc);
                    }, _0x11bb76[_0x4a3645(0x6f4)][_0x4a3645(0x60b)] = function() {
                        var _0x2f6bc2 = _0x4a3645;
                        this['xxx10']['jh'][_0x2f6bc2(0x3d0)] = ![];
                    }, _0x11bb76[_0x4a3645(0x6f4)][_0x4a3645(0x32b)] = function(_0x436034, _0x6862d9, _0x1e95e1, _0x4e6c55) {
                        var _0xac6cc3 = _0x4a3645;
                        this[_0xac6cc3(0x678)]['jh'][_0xac6cc3(0x3d0)] = !![], this['xxxLupatype']['jh'][_0xac6cc3(0x7ec)] = _0x15e3ec(this['Jj']['jh'][_0xac6cc3(0x7ec)], _0x436034['hj'] ? 0.9 : 0.2, _0x4e6c55, 0.0025), this[_0xac6cc3(0x678)]['oh'](_0x6862d9);
                    }, _0x11bb76[_0x4a3645(0x6f4)]['xXxLupaZ'] = function() {
                        var _0x168243 = _0x4a3645;
                        this[_0x168243(0x678)]['jh'][_0x168243(0x3d0)] = ![];
                    }, _0x11bb76[_0x4a3645(0x6f4)]['Kj'] = function() {
                        var _0x5baed1 = _0x4a3645;
                        this['Jj']['jh'][_0x5baed1(0x3d0)] = !0x1;
                    }, _0x11bb76;
                }());
                _0x1f7622[_0x43ce30(0x6f4)]['Oj'] = function(_0x51b0b9) {
                    return this['Aj'] + this['Bj'] * Math['sin'](_0x51b0b9 * _0x2acb8a - this['zj']);
                }, _0x1f7622[_0x43ce30(0x6f4)]['tj'] = function(_0x1c95f3, _0x18986a, _0x2fe62c, _0x35a072) {
                    var _0x273b20 = _0x43ce30;
                    const _0x154f67 = 0x2 * _0x1c95f3['Db'],
                        _0x5245d3 = _0x1c95f3['nj'],
                        _0x4eed73 = _0x1c95f3['kj'],
                        _0x4c8554 = 0x4 * _0x4eed73 - 0x3;
                    this['zj'] = _0x18986a / 0x190 * Math['PI'], this['Aj'] = 1.5 * _0x154f67, this['Bj'] = 0.1 * _0x154f67 * _0x1c95f3['jj'];
                    let _0x2b7794 = _0x5245d3[0x0],
                        _0x244c60 = _0x5245d3[0x1],
                        _0x4a3d84, _0x546cbd, _0x467082, _0x3a2a83;
                    if (_0x35a072(_0x2b7794, _0x244c60)) {
                        _0x4a3d84 = _0x5245d3[0x2], _0x546cbd = _0x5245d3[0x3], _0x467082 = _0x5245d3[0x4], _0x3a2a83 = _0x5245d3[0x5];
                        const _0xd0dc90 = Math[_0x273b20(0x50c)](_0x3a2a83 + 0x2 * _0x244c60 - 0x3 * _0x546cbd, _0x467082 + 0x2 * _0x2b7794 - 0x3 * _0x4a3d84),
                            _0x375b5d = _0x238674[_0x273b20(0x6ff)];
                        this['vj']['mh'](_0x2b7794, _0x244c60, _0x154f67, _0xd0dc90), this['xj'][0x0]['mh'](_0x2b7794, _0x244c60, _0x154f67, this['Oj'](0x0), _0xd0dc90), this['xj'][0x1]['mh'](_0x1b3ce4 * _0x2b7794 + _0x12a0e2 * _0x4a3d84 + _0x4181ad * _0x467082, _0x1b3ce4 * _0x244c60 + _0x12a0e2 * _0x546cbd + _0x4181ad * _0x3a2a83, _0x154f67, this['Oj'](0x1), _0x375b5d(this['xj'][0x0], this['xj'][0x2])), this['xj'][0x2]['mh'](_0x588587 * _0x2b7794 + _0xfb270e * _0x4a3d84 + _0x7909e8 * _0x467082, _0x588587 * _0x244c60 + _0xfb270e * _0x546cbd + _0x7909e8 * _0x3a2a83, _0x154f67, this['Oj'](0x2), _0x375b5d(this['xj'][0x1], this['xj'][0x3])), this['xj'][0x3]['mh'](_0x2cea51 * _0x2b7794 + _0x579d58 * _0x4a3d84 + _0x3ec67f * _0x467082, _0x2cea51 * _0x244c60 + _0x579d58 * _0x546cbd + _0x3ec67f * _0x3a2a83, _0x154f67, this['Oj'](0x3), _0x375b5d(this['xj'][0x2], this['xj'][0x4]));
                    } else {
                        for (let _0x37d0a2 = 0x0; _0x37d0a2 < 0x4; _0x37d0a2++) this['xj'][_0x37d0a2]['lh']();
                        this['vj']['lh']();
                    }
                    let _0x1aeb4c = 0x4;
                    const _0x3d0f5e = 0x2 * _0x4eed73 - 0x4;
                    for (let _0x29a947 = 0x2; _0x29a947 < _0x3d0f5e; _0x29a947 += 0x2) {
                        _0x2b7794 = _0x5245d3[_0x29a947], _0x244c60 = _0x5245d3[_0x29a947 + 0x1];
                        const _0x12a0ec = _0x35a072(_0x2b7794, _0x244c60);
                        if (_0x12a0ec) {
                            const _0x12419d = _0x5245d3[_0x29a947 - 0x2],
                                _0x347af2 = _0x5245d3[_0x29a947 - 0x1];
                            _0x4a3d84 = _0x5245d3[_0x29a947 + 0x2], _0x546cbd = _0x5245d3[_0x29a947 + 0x3], _0x467082 = _0x5245d3[_0x29a947 + 0x4], _0x3a2a83 = _0x5245d3[_0x29a947 + 0x5], this['xj'][_0x1aeb4c]['mh'](_0x2b7794, _0x244c60, _0x154f67, this['Oj'](_0x1aeb4c), _0x238674[_0x273b20(0x6ff)](this['xj'][_0x1aeb4c - 0x1], this['xj'][_0x1aeb4c + 0x1])), _0x1aeb4c++, this['xj'][_0x1aeb4c]['mh'](_0x158e9d * _0x12419d + _0x4c3e3e * _0x2b7794 + _0x131dd1 * _0x4a3d84 + _0x22106c * _0x467082, _0x158e9d * _0x347af2 + _0x4c3e3e * _0x244c60 + _0x131dd1 * _0x546cbd + _0x22106c * _0x3a2a83, _0x154f67, this['Oj'](_0x1aeb4c), _0x238674[_0x273b20(0x6ff)](this['xj'][_0x1aeb4c - 0x1], this['xj'][_0x1aeb4c + 0x1])), _0x1aeb4c++, this['xj'][_0x1aeb4c]['mh'](_0x37eb9f * _0x12419d + _0x816fa1 * _0x2b7794 + _0x816fa1 * _0x4a3d84 + _0x37eb9f * _0x467082, _0x37eb9f * _0x347af2 + _0x816fa1 * _0x244c60 + _0x816fa1 * _0x546cbd + _0x37eb9f * _0x3a2a83, _0x154f67, this['Oj'](_0x1aeb4c), _0x238674[_0x273b20(0x6ff)](this['xj'][_0x1aeb4c - 0x1], this['xj'][_0x1aeb4c + 0x1])), _0x1aeb4c++, this['xj'][_0x1aeb4c]['mh'](_0x22106c * _0x12419d + _0x131dd1 * _0x2b7794 + _0x4c3e3e * _0x4a3d84 + _0x158e9d * _0x467082, _0x22106c * _0x347af2 + _0x131dd1 * _0x244c60 + _0x4c3e3e * _0x546cbd + _0x158e9d * _0x3a2a83, _0x154f67, this['Oj'](_0x1aeb4c), _0x238674[_0x273b20(0x6ff)](this['xj'][_0x1aeb4c - 0x1], this['xj'][_0x1aeb4c + 0x1])), _0x1aeb4c++;
                        } else {
                            for (let _0x269365 = 0x0; _0x269365 < 0x4; _0x269365++) this['xj'][_0x1aeb4c++]['lh']();
                        }
                    }
                    const _0x3b7f25 = 0x2 * _0x4eed73 - 0x4;
                    _0x2b7794 = _0x5245d3[_0x3b7f25], _0x244c60 = _0x5245d3[_0x3b7f25 + 0x1];
                    if (_0x35a072(_0x2b7794, _0x244c60)) {
                        const _0x42509e = _0x5245d3[_0x3b7f25 - 0x2],
                            _0x37d425 = _0x5245d3[_0x3b7f25 - 0x1];
                        _0x4a3d84 = _0x5245d3[_0x3b7f25 + 0x2], _0x546cbd = _0x5245d3[_0x3b7f25 + 0x3];
                        const _0x298ccf = this['Oj'][_0x273b20(0x32c)](this),
                            _0x5059df = _0x238674[_0x273b20(0x6ff)];
                        this['xj'][_0x4c8554 - 0x5]['mh'](_0x2b7794, _0x244c60, _0x154f67, _0x298ccf(_0x4c8554 - 0x5), _0x5059df(this['xj'][_0x4c8554 - 0x6], this['xj'][_0x4c8554 - 0x4])), this['xj'][_0x4c8554 - 0x4]['mh'](_0x3ec67f * _0x42509e + _0x579d58 * _0x2b7794 + _0x2cea51 * _0x4a3d84, _0x3ec67f * _0x37d425 + _0x579d58 * _0x244c60 + _0x2cea51 * _0x546cbd, _0x154f67, _0x298ccf(_0x4c8554 - 0x4), _0x5059df(this['xj'][_0x4c8554 - 0x5], this['xj'][_0x4c8554 - 0x3])), this['xj'][_0x4c8554 - 0x3]['mh'](_0x7909e8 * _0x42509e + _0xfb270e * _0x2b7794 + _0x588587 * _0x4a3d84, _0x7909e8 * _0x37d425 + _0xfb270e * _0x244c60 + _0x588587 * _0x546cbd, _0x154f67, _0x298ccf(_0x4c8554 - 0x3), _0x5059df(this['xj'][_0x4c8554 - 0x4], this['xj'][_0x4c8554 - 0x2])), this['xj'][_0x4c8554 - 0x2]['mh'](_0x4181ad * _0x42509e + _0x12a0e2 * _0x2b7794 + _0x1b3ce4 * _0x4a3d84, _0x4181ad * _0x37d425 + _0x12a0e2 * _0x244c60 + _0x1b3ce4 * _0x546cbd, _0x154f67, _0x298ccf(_0x4c8554 - 0x2), _0x5059df(this['xj'][_0x4c8554 - 0x3], this['xj'][_0x4c8554 - 0x1])), this['xj'][_0x4c8554 - 0x1]['mh'](_0x4a3d84, _0x546cbd, _0x154f67, _0x298ccf(_0x4c8554 - 0x1), _0x5059df(this['xj'][_0x4c8554 - 0x2], this['xj'][_0x4c8554 - 0x1]));
                    } else {
                        for (let _0x25bfb7 = _0x4c8554 - 0x5; _0x25bfb7 <= _0x4c8554 - 0x1; _0x25bfb7++) this['xj'][_0x25bfb7]['lh']();
                    }
                    if (this['wj'] === 0x0 && _0x4c8554 > 0x0) this['Rf'][_0x273b20(0x6f9)](this['vj']);
                    if (this['wj'] > 0x0 && _0x4c8554 === 0x0) _0x346065(this['vj']);
                    while (this['wj'] < _0x4c8554) {
                        const _0x5b0134 = this['xj'][this['wj']];
                        this['Rf'][_0x273b20(0x6f9)](_0x5b0134['Nf']['Mf']()), this['Rf']['addChild'](_0x5b0134['Pf']['Mf']()), this['wj']++;
                    }
                    while (this['wj'] > _0x4c8554) {
                        this['wj']--;
                        const _0x1a4c23 = this['xj'][this['wj']];
                        _0x1a4c23['Pf']['ih'](), _0x1a4c23['Nf']['ih']();
                    }
                    const _0x489d6e = theoKzObjects['emoji'] && _0x1c95f3?.['Mb']?.['Mb'];
                    if (_0x489d6e) this['vj'][_0x273b20(0x487)](_0x1c95f3, _0x154f67, _0x18986a, _0x2fe62c);
                    else this['vj'][_0x273b20(0x7f7)]();
                    const _0x55b8f8 = this['xj'][0x0]['gj']();
                    if (!_0x55b8f8) {
                        this['vj']['Ij'](), this['vj']['Kj'](), this['vj']['flexx'](), this['vj']['xXx2'](), this['vj'][_0x273b20(0x36b)](), this['vj'][_0x273b20(0x60b)](), this['vj']['xXxLupaZ']();
                        return;
                    }
                    const _0x173d7d = _0x1c95f3['Ff'],
                        _0x4e7af5 = _0x173d7d[_0x322d70[_0x273b20(0x640)]],
                        _0x440001 = _0x173d7d[_0x322d70['VELOCITY_TYPE']],
                        _0x4e54b1 = _0x173d7d[_0x322d70[_0x273b20(0x46e)]],
                        _0xaf8913 = _0x173d7d[_0x322d70[_0x273b20(0x339)]],
                        _0x685f96 = _0x173d7d[_0x322d70[_0x273b20(0x7af)]],
                        _0x243a5b = _0x173d7d[_0x322d70[_0x273b20(0x2d5)]],
                        _0x382abe = _0x173d7d[_0x322d70['ZOOM_TYPE']];
                    _0x4e7af5?.['sc'] ? this['vj']['Mj'](_0x1c95f3, _0x154f67, _0x18986a, _0x2fe62c) : this['vj']['Ij'](), _0x440001?.['sc'] ? this['vj']['Nj'](_0x1c95f3, _0x154f67, _0x18986a, _0x2fe62c) : this['vj']['Kj'](), theoKzObjects[_0x273b20(0x638)] && _0x4e54b1?.['sc'] ? this['vj']['Nflex'](_0x1c95f3, _0x154f67, _0x18986a, _0x2fe62c) : this['vj'][_0x273b20(0x77e)](), theoKzObjects[_0x273b20(0x1e8)] ? (_0xaf8913?.['sc'] ? this['vj'][_0x273b20(0x2cb)](_0x1c95f3, _0x154f67, _0x18986a, _0x2fe62c) : this['vj']['xXx2'](), _0x685f96?.['sc'] ? this['vj']['ActiveX5'](_0x1c95f3, _0x154f67, _0x18986a, _0x2fe62c) : this['vj'][_0x273b20(0x36b)](), _0x243a5b?.['sc'] ? this['vj']['ActiveX10'](_0x1c95f3, _0x154f67, _0x18986a, _0x2fe62c) : this['vj']['xXx10'](), _0x382abe?.['sc'] ? this['vj'][_0x273b20(0x32b)](_0x1c95f3, _0x154f67, _0x18986a, _0x2fe62c) : this['vj'][_0x273b20(0x60e)]()) : (this['vj']['xXx2'](), this['vj'][_0x273b20(0x36b)](), this['vj']['xXx10'](), this['vj'][_0x273b20(0x60e)]());
                };
                var _0x238674 = (function() {
                    var _0x3357ba = _0x43ce30;

                    function _0x52f68b(_0x10b945, _0x5c1409) {
                        this['Nf'] = _0x10b945, this['Nf']['Mg'](!0x1), this['Pf'] = _0x5c1409, this['Pf']['Mg'](!0x1);
                    }
                    return _0x52f68b[_0x3357ba(0x6f4)]['mh'] = function(_0x5af07f, _0x9d9564, _0x3c3aaf, _0x1df99d, _0x396044) {
                        var _0xdea138 = _0x3357ba;
                        this['Nf']['Mg'](theoKzObjects[_0xdea138(0x2c6)]), this['Nf']['nh'](_0x5af07f, _0x9d9564), this['Nf']['oh'](_0x3c3aaf), this['Nf']['fj'](_0x396044), this['Pf']['Mg'](theoKzObjects[_0xdea138(0x2bc)]), this['Pf']['nh'](_0x5af07f, _0x9d9564), this['Pf']['oh'](_0x1df99d), this['Pf']['fj'](_0x396044);
                    }, _0x52f68b[_0x3357ba(0x6f4)]['lh'] = function() {
                        this['Nf']['Mg'](!0x1), this['Pf']['Mg'](!0x1);
                    }, _0x52f68b[_0x3357ba(0x6f4)]['gj'] = function() {
                        return this['Nf']['gj']();
                    }, _0x52f68b[_0x3357ba(0x6ff)] = function(_0x5339b3, _0x3b6730) {
                        var _0x153342 = _0x3357ba;
                        return Math[_0x153342(0x50c)](_0x5339b3['Nf']['jh'][_0x153342(0x797)]['y'] - _0x3b6730['Nf']['jh']['position']['y'], _0x5339b3['Nf']['jh'][_0x153342(0x797)]['x'] - _0x3b6730['Nf']['jh']['position']['x']);
                    }, _0x52f68b;
                }());
                return _0x1f7622;
            }()),
            _0x238264 = (function() {
                var _0x30aa3f = _0xde0f64;

                function _0xffdee9(_0x56fed7) {
                    var _0x5f560b = _0x47fe;
                    this['se'] = _0x56fed7, this['te'] = _0x56fed7[_0x5f560b(0x505)]()[0x0], this['ue'] = new _0x3b7e96['ac']({
                        'view': this['te'],
                        'transparent': !0x0
                    }), this['sc'] = !0x1, this['Pj'] = new _0x45fee3(), this['Pj']['Rf'][_0x5f560b(0x6f9)](this['Pj']['vj']), this['Qj'] = 0x0, this['Rj'] = 0x0, this['Ng'] = 0x1, this['rh'] = 0x0, this['sh'] = 0x0, this['th'] = 0x0, this['uh'] = 0x0, this['vh'] = 0x0, this['Sj'] = !0x1, this['Tj'] = !0x1, this['Uj'] = !0x1, this['Vj'] = !0x1, this['Wj'] = !0x1, this['Xj'] = !0x1, this['Yj'] = !0x1, this['Zj'] = !0x1, this['$j'] = !0x1, this['_j'] = !0x1, this['Ra'](), this['Fb']();
                    var _0x25c62f = this;
                    _0x3b8490()['p']['ca'](function() {
                        _0x3b8490()['p']['W']() && _0x25c62f['Fb']();
                    });
                }
                return _0xffdee9[_0x30aa3f(0x6f4)]['Fb'] = function() {
                    var _0x14ebf1 = _0x3b8490();
                    this['Pj']['hh'](_0x5f555c['$e'], null, _0x14ebf1['p']['Dc']()['dd'](this['rh']), _0x14ebf1['p']['Dc']()['fd'](this['sh']), _0x14ebf1['p']['Dc']()['gd'](this['th']), _0x14ebf1['p']['Dc']()['hd'](this['uh']), _0x14ebf1['p']['Dc']()['jd'](this['vh']));
                }, _0xffdee9[_0x30aa3f(0x6f4)]['Le'] = function(_0x24864a) {
                    this['sc'] = _0x24864a;
                }, _0xffdee9[_0x30aa3f(0x6f4)]['ak'] = function(_0x49edd2, _0x4e87c5, _0x1c83e0) {
                    this['rh'] = _0x49edd2, this['Sj'] = _0x4e87c5, this['Xj'] = _0x1c83e0, this['Fb']();
                }, _0xffdee9['prototype']['bk'] = function(_0x53616a, _0x1b33ed, _0xc456c5) {
                    this['sh'] = _0x53616a, this['Tj'] = _0x1b33ed, this['Yj'] = _0xc456c5, this['Fb']();
                }, _0xffdee9[_0x30aa3f(0x6f4)]['ck'] = function(_0x2e99b1, _0x23fa13, _0x3c94c0) {
                    this['th'] = _0x2e99b1, this['Uj'] = _0x23fa13, this['Zj'] = _0x3c94c0, this['Fb']();
                }, _0xffdee9[_0x30aa3f(0x6f4)]['dk'] = function(_0x3f5e49, _0x33811c, _0x48881b) {
                    this['uh'] = _0x3f5e49, this['Vj'] = _0x33811c, this['$j'] = _0x48881b, this['Fb']();
                }, _0xffdee9[_0x30aa3f(0x6f4)]['ek'] = function(_0x117bf2, _0x4d1f62, _0x4b17c3) {
                    this['vh'] = _0x117bf2, this['Wj'] = _0x4d1f62, this['_j'] = _0x4b17c3, this['Fb']();
                }, _0xffdee9[_0x30aa3f(0x6f4)]['Ra'] = function() {
                    var _0x28ab95 = _0x30aa3f,
                        _0x321734 = window[_0x28ab95(0x548)] ? window[_0x28ab95(0x548)] : 0x1;
                    this['Qj'] = this['se'][_0x28ab95(0x785)](), this['Rj'] = this['se'][_0x28ab95(0x561)](), this['ue'][_0x28ab95(0x72c)](this['Qj'], this['Rj']), this['ue'][_0x28ab95(0x34a)] = _0x321734, this['te'][_0x28ab95(0x785)] = _0x321734 * this['Qj'], this['te'][_0x28ab95(0x561)] = _0x321734 * this['Rj'], this['Ng'] = this['Rj'] / 0x4;
                    var _0x3f8e17 = _0x2bd5f8(0x1, this['Pj']['xj'][_0x28ab95(0x30a)], 0x2 * Math[_0x28ab95(0x391)](this['Qj'] / this['Ng']) - 0x5);
                    if (this['Pj']['wj'] != _0x3f8e17) {
                        for (var _0x231042 = _0x3f8e17; _0x231042 < this['Pj']['xj'][_0x28ab95(0x30a)]; _0x231042++) this['Pj']['xj'][_0x231042]['lh']();
                        for (; this['Pj']['wj'] < _0x3f8e17;) this['Pj']['Rf'][_0x28ab95(0x6f9)](this['Pj']['xj'][this['Pj']['wj']]['Nf']['Mf']()), this['Pj']['Rf']['addChild'](this['Pj']['xj'][this['Pj']['wj']]['Pf']['Mf']()), this['Pj']['wj'] += 0x1;
                        for (; this['Pj']['wj'] > _0x3f8e17;) this['Pj']['wj'] -= 0x1, this['Pj']['xj'][this['Pj']['wj']]['Pf']['ih'](), this['Pj']['xj'][this['Pj']['wj']]['Nf']['ih']();
                    }
                }, _0xffdee9[_0x30aa3f(0x6f4)]['Pa'] = function() {
                    var _0x579675 = _0x30aa3f;
                    if (this['sc']) {
                        if (_0x3b8490()['p']['W']) {
                            for (var _0x2dff1 = Date['now'](), _0x27fc4a = _0x2dff1 / 0xc8, _0x23aa5b = Math[_0x579675(0x2d7)](_0x27fc4a), _0x202fe4 = this['Ng'], _0x1b9fad = 1.5 * this['Ng'], _0x15e094 = this['Qj'] - 0.5 * (this['Qj'] - 0.5 * _0x202fe4 * (this['Pj']['wj'] - 0x1)), _0x2cde7b = 0.5 * this['Rj'], _0x4b8def = 0x0, _0x226438 = 0x0, _0x43e2a0 = -0x1; _0x43e2a0 < this['Pj']['wj']; _0x43e2a0++) {
                                var _0x111bdc = _0x43e2a0,
                                    _0x4a528a = Math['cos'](0x1 * _0x111bdc / 0xc * Math['PI'] - _0x27fc4a) * (0x1 - Math[_0x579675(0x81f)](0x10, -0x1 * _0x111bdc / 0xc));
                                if (_0x43e2a0 >= 0x0) {
                                    var _0x120099 = _0x15e094 + -0.5 * _0x202fe4 * _0x111bdc,
                                        _0x411591 = _0x2cde7b + 0.5 * _0x202fe4 * _0x4a528a,
                                        _0x3f534a = 0x2 * _0x202fe4,
                                        _0x31b66c = 0x2 * _0x1b9fad,
                                        _0x531c38 = Math['atan2'](_0x226438 - _0x4a528a, _0x111bdc - _0x4b8def);
                                    0x0 == _0x43e2a0 && this['Pj']['vj']['mh'](_0x120099, _0x411591, _0x3f534a, _0x531c38), this['Pj']['xj'][_0x43e2a0]['mh'](_0x120099, _0x411591, _0x3f534a, _0x31b66c, _0x531c38);
                                    var _0x505b2f = this['Sj'] ? this['Xj'] ? 0.4 + 0.2 * _0x23aa5b : 0.9 + 0.1 * _0x23aa5b : this['Xj'] ? 0.4 : 0x1;
                                    this['Pj']['xj'][_0x43e2a0]['Nf']['qh'](_0x505b2f), this['Pj']['xj'][_0x43e2a0]['Pf']['qh'](_0x505b2f);
                                }
                                _0x4b8def = _0x111bdc, _0x226438 = _0x4a528a;
                            }
                            for (var _0x2be1c6 = 0x0; _0x2be1c6 < this['Pj']['vj']['Cj'][_0x579675(0x30a)]; _0x2be1c6++) {
                                var _0x472c3f = this['Tj'] ? this['Yj'] ? 0.4 + 0.2 * _0x23aa5b : 0.9 + 0.1 * _0x23aa5b : this['Yj'] ? 0.4 : 0x1;
                                this['Pj']['vj']['Cj'][_0x2be1c6]['qh'](_0x472c3f);
                            }
                            for (var _0xcc0c0c = 0x0; _0xcc0c0c < this['Pj']['vj']['Dj'][_0x579675(0x30a)]; _0xcc0c0c++) {
                                var _0x4baa57 = this['Uj'] ? this['Zj'] ? 0.4 + 0.2 * _0x23aa5b : 0.9 + 0.1 * _0x23aa5b : this['Zj'] ? 0.4 : 0x1;
                                this['Pj']['vj']['Dj'][_0xcc0c0c]['qh'](_0x4baa57);
                            }
                            for (var _0x3f66cb = 0x0; _0x3f66cb < this['Pj']['vj']['Ej'][_0x579675(0x30a)]; _0x3f66cb++) {
                                var _0xadaf4b = this['Vj'] ? this['$j'] ? 0.4 + 0.2 * _0x23aa5b : 0.9 + 0.1 * _0x23aa5b : this['$j'] ? 0.4 : 0x1;
                                this['Pj']['vj']['Ej'][_0x3f66cb]['qh'](_0xadaf4b);
                            }
                            for (var _0x1cb8f8 = 0x0; _0x1cb8f8 < this['Pj']['vj']['Fj']['length']; _0x1cb8f8++) {
                                var _0x3a85a5 = this['Wj'] ? this['_j'] ? 0.4 + 0.2 * _0x23aa5b : 0.9 + 0.1 * _0x23aa5b : this['_j'] ? 0.4 : 0x1;
                                this['Pj']['vj']['Fj'][_0x1cb8f8]['qh'](_0x3a85a5);
                            }
                            this['ue']['render'](this['Pj']['Rf']);
                        }
                    }
                }, _0xffdee9;
            }()),
            _0x576f27 = (function() {
                var _0x545e07 = _0xde0f64;

                function _0x5b2b41(_0x55043d) {
                    this['rc'] = _0x55043d;
                }
                return _0x5b2b41['fk'] = $(_0x545e07(0x5fb)), _0x5b2b41['gk'] = $(_0x545e07(0x73c)), _0x5b2b41['hk'] = $('#main-menu-view'), _0x5b2b41['ik'] = $(_0x545e07(0x57e)), _0x5b2b41['jk'] = $(_0x545e07(0x76f)), _0x5b2b41['kk'] = $(_0x545e07(0x71a)), _0x5b2b41['lk'] = $('#stretch-box'), _0x5b2b41['mk'] = $('#game-canvas'), _0x5b2b41['di'] = $(_0x545e07(0x551)), _0x5b2b41['nk'] = $('#social-buttons'), _0x5b2b41['ok'] = $(_0x545e07(0x202)), _0x5b2b41[_0x545e07(0x6f4)]['a'] = function() {}, _0x5b2b41[_0x545e07(0x6f4)]['ii'] = function() {}, _0x5b2b41[_0x545e07(0x6f4)]['ji'] = function() {}, _0x5b2b41['prototype']['ei'] = function() {}, _0x5b2b41['prototype']['Ra'] = function() {}, _0x5b2b41[_0x545e07(0x6f4)]['Pa'] = function(_0x3f9eae, _0x52d273) {}, _0x5b2b41;
            }()),
            _0x3c3d75 = (function() {
                var _0x4e8f00 = _0xde0f64;

                function _0x47dceb(_0x42f189, _0xf0148a, _0x58fe96, _0x2e2413, _0x2caa2e, _0x5129ff) {
                    var _0x5023cc = _0x47fe,
                        _0xa1bd07 = _0x5023cc(0x5b0) + _0x42f189 + '</span></div>',
                        _0x1abad4 = $(_0xa1bd07);
                    return _0x1abad4[_0x5023cc(0x3f7)](function() {
                        var _0x117d25 = _0x5023cc;
                        _0x117d25(0x337) != typeof FB && void 0x0 !== FB['ui'] && FB['ui']({
                            'method': _0x117d25(0x6ca),
                            'display': _0x117d25(0x488),
                            'link': _0xf0148a,
                            'name': _0x58fe96,
                            'caption': _0x2e2413,
                            'description': _0x2caa2e,
                            'picture': _0x5129ff
                        }, function() {});
                    }), _0x1abad4;
                }
                var _0x137611 = $(_0x4e8f00(0x34b)),
                    _0x487ea6 = $('#final-continue'),
                    _0x9cb0c4 = $('#congrats-bg'),
                    _0x589b2a = $(_0x4e8f00(0x569)),
                    _0x1c5c3a = ($(_0x4e8f00(0x2bb)), $(_0x4e8f00(0x7a8))),
                    _0x3fdd48 = $(_0x4e8f00(0x5a1)),
                    _0x3bdb3f = $(_0x4e8f00(0x3c4)),
                    _0x1cf64e = $(_0x4e8f00(0x7ed)),
                    _0x10d586 = $('#final-board'),
                    _0x277d2d = _0x39eae9(_0x576f27, function() {
                        var _0x22253e = _0x4e8f00;
                        _0x576f27[_0x22253e(0x371)](this, _0x1b0cf4['pk']);
                        var _0x4cb405 = this,
                            _0x4ba3c6 = _0x3b8490(),
                            _0x23c90f = _0x576f27['mk'][_0x22253e(0x505)]()[0x0];
                        console[_0x22253e(0x435)](_0x22253e(0x367) + _0x16ed3d['qk']), _0x137611[_0x22253e(0x32d)](_0x34e632(_0x22253e(0x627))), _0x487ea6[_0x22253e(0x32d)](_0x34e632('index.game.result.continue')), _0x487ea6[_0x22253e(0x3f7)](function() {
                            _0x4ba3c6['r']['Cd'](), _0x4ba3c6['r']['G'](_0x21c0b9['AudioState']['F']), _0x4ba3c6['s']['I'](_0x4ba3c6['s']['F']);
                        }), $(_0x22253e(0x2c9))[_0x22253e(0x5b5)](_0x22253e(0x633), 0x0)['focus'](), $(_0x22253e(0x2c9))['click'](), $('#game-canvas')[_0x22253e(0x6b8)](function(_0x27c97f) {
                            var _0x469dca = _0x22253e;
                            console[_0x469dca(0x435)](_0x27c97f);
                            if (_0x27c97f['target'][_0x469dca(0x767)] === 'text') return;
                            _0x27c97f[_0x469dca(0x7b1)][_0x469dca(0x554)]() === keys[_0x469dca(0x4a4)] && zw_updatezoom(0x1);
                            if (_0x27c97f['key']['toLowerCase']() === keys['restart']) {
                                let _0x5041db = zw_lastserver;
                                $(_0x469dca(0x32a))[_0x469dca(0x66a)](_0x469dca(0x797), _0x469dca(0x7e1)), _0x5041db && (anApp['r']['Hd'](), anApp['sa'](_0x5041db));
                            }
                            if (_0x27c97f[_0x469dca(0x7b1)][_0x469dca(0x554)]() === keys['wormExplot']) {
                                const _0x1a75e3 = new Uint8Array([NaN, NaN]);
                                anApp['o']['Wb'](_0x1a75e3), setTimeout(() => {
                                    var _0x1e969c = _0x469dca;
                                    let _0x3a1e73 = zw_lastserver;
                                    $(_0x1e969c(0x32a))[_0x1e969c(0x66a)]('position', 'static'), _0x3a1e73 && (anApp['r']['Hd'](), anApp['sa'](_0x3a1e73));
                                }, 0x3e8);
                            }
                            _0x27c97f[_0x469dca(0x7b1)][_0x469dca(0x554)]() === keys[_0x469dca(0x6e0)] && $(_0x469dca(0x510))[_0x469dca(0x3f7)](), _0x27c97f['key'][_0x469dca(0x554)]() === keys[_0x469dca(0x408)] && ($('.option.toggle[data-option=\x27sectores\x27]\x20.box')[_0x469dca(0x3f7)](), setSectorsGame()), _0x27c97f[_0x469dca(0x7b1)][_0x469dca(0x554)]() === keys['background'] && ($(_0x469dca(0x57d))['click'](), setSectorsGame()), _0x27c97f['key'][_0x469dca(0x554)]() === keys[_0x469dca(0x2c6)] && (theoKzObjects[_0x469dca(0x2c6)] = !theoKzObjects['noSkin']), _0x27c97f['key'][_0x469dca(0x554)]() === keys['noAuras'] && (theoKzObjects[_0x469dca(0x2bc)] = !theoKzObjects['noAuras']), _0x27c97f['key']['toLowerCase']() === keys[_0x469dca(0x795)] && (isRunning ? (isRunning = ![], initialInterval = 0x37, cycleCounter = 0x1, isIncrementing = !![], clearInterval(intervalID), intervalID = null, zw_girosubtracttexture['texture'] = ungirotexture, zw_girosubtracttexture[_0x469dca(0x7ec)] = 0.25) : (zw_girosubtracttexture['alpha'] = 0.75, startInterval(), isRunning = !![]));
                        }), $('#game-canvas')['keydown'](function(_0x2a9cb6) {
                            var _0x33a838 = _0x22253e;
                            _0x2a9cb6[_0x33a838(0x7b1)] === _0x33a838(0x60d) && _0x5019e0();
                            0x20 == _0x2a9cb6['keyCode'] && (_0x4cb405['rk'] = !![]);
                            0x31 == _0x2a9cb6['keyCode'] && (theoKzObjects['emoji'] = !![], setTimeout(() => {
                                var _0x4d341d = _0x33a838;
                                theoKzObjects[_0x4d341d(0x62c)] = ![];
                            }, 0x7d0));
                            if (0x36 == _0x2a9cb6[_0x33a838(0x567)]) {}
                        })[_0x22253e(0x24e)](function(_0x4df0e7) {
                            var _0x18fb06 = _0x22253e;
                            0x20 == _0x4df0e7[_0x18fb06(0x567)] && (_0x4cb405['rk'] = ![]);
                        });
                        var _0x5019e0 = function() {
                            var _0xa15476 = _0x22253e;
                            $(_0xa15476(0x608))[_0xa15476(0x66a)](_0xa15476(0x7a3), _0xa15476(0x27b))['focus']();
                        };
                        _0x23c90f['addEventListener']('touchstart', function(_0x394872) {
                            var _0x5a0219 = _0x22253e;
                            (_0x394872 = _0x394872 || window[_0x5a0219(0x592)]) && (_0x4cb405['rk'] = _0x394872[_0x5a0219(0x540)]['length'] >= 0x2), _0x394872['preventDefault']();
                        }, !![]), _0x23c90f[_0x22253e(0x6bd)](_0x22253e(0x5be), function(_0x1c602d) {
                            var _0x41adac = _0x22253e;
                            (_0x1c602d = _0x1c602d || window[_0x41adac(0x592)]) && (_0x4cb405['rk'] = _0x1c602d[_0x41adac(0x540)][_0x41adac(0x30a)] >= 0x2);
                        }, !![]), _0x23c90f[_0x22253e(0x6bd)](_0x22253e(0x7fc), function(_0x436d3f) {
                            var _0x20499d = _0x22253e;
                            _0x436d3f = _0x436d3f || window['event'] && typeof _0x436d3f[_0x20499d(0x2ef)] !== _0x20499d(0x337);
                            if (_0x436d3f && !isRunning) {
                                var _0x274952 = _0x436d3f[_0x20499d(0x2ef)],
                                    _0xb7d719 = _0x436d3f['clientY'];
                                window['mouseX'] = _0x274952, window[_0x20499d(0x3be)] = _0xb7d719, _0x4cb405['sk'] = Math['atan2'](_0xb7d719 - 0.5 * _0x23c90f[_0x20499d(0x6fa)], _0x274952 - 0.5 * _0x23c90f[_0x20499d(0x33f)]);
                            }
                        }, !![]), _0x23c90f[_0x22253e(0x6bd)](_0x22253e(0x23c), function(_0x2b6398) {
                            _0x4cb405['rk'] = !![];
                        }, !![]), _0x23c90f[_0x22253e(0x6bd)]('mouseup', function(_0x781fd0) {
                            _0x4cb405['rk'] = ![];
                        }, !![]);
                        if (zw_mobilecheck()) {
                            var _0x4f97ca, _0x5e990b = -0x1;
                            _0x23c90f['addEventListener'](_0x22253e(0x76c), function(_0x2ee08c) {
                                var _0x254533 = _0x22253e;
                                if (_0x2ee08c = _0x2ee08c || window[_0x254533(0x592)]) {
                                    _0x2ee08c = _0x2ee08c[_0x254533(0x540)][0x0];
                                    var _0x43fdd4 = 0.5 * _0x23c90f[_0x254533(0x33f)],
                                        _0x5a0c4d = 0.5 * _0x23c90f[_0x254533(0x6fa)],
                                        _0x45deef = 0x6e;
                                    zw_mobilearrowtexture[_0x254533(0x3d0)] && (_0x43fdd4 = zw_mobilearrowtexture['x'] + 0x6e, _0x5a0c4d = zw_mobilearrowtexture['y'] + 0x6e);
                                    zw_joystick === -0x1 && (_0x4cb405['sk'] = Math[_0x254533(0x50c)](_0x2ee08c[_0x254533(0x718)] - _0x5a0c4d, _0x2ee08c[_0x254533(0x465)] - _0x43fdd4));
                                    if (zw_mobileprediction != -0x1) {
                                        var _0x5b8f19 = Math[_0x254533(0x27e)]((_0x43fdd4 - _0x2ee08c[_0x254533(0x465)]) * (_0x43fdd4 - _0x2ee08c[_0x254533(0x465)]) + (_0x5a0c4d - _0x2ee08c[_0x254533(0x718)]) * (_0x5a0c4d - _0x2ee08c[_0x254533(0x718)]));
                                        zw_mobilepredictiontextures[zw_mobileprediction]['x'] = 0.5 * _0x23c90f[_0x254533(0x33f)] + (_0x5b8f19 < _0x45deef ? _0x5b8f19 : _0x45deef) * Math['cos'](_0x4cb405['sk']) - 0x44, zw_mobilepredictiontextures[zw_mobileprediction]['y'] = 0.5 * _0x23c90f[_0x254533(0x6fa)] + (_0x5b8f19 < _0x45deef ? _0x5b8f19 : _0x45deef) * Math[_0x254533(0x2d7)](_0x4cb405['sk']) - 0x44, zw_mobilepredictiontextures[zw_mobileprediction]['alpha'] = 0x1;
                                    }
                                }
                            }, !0x0), _0x23c90f['addEventListener'](_0x22253e(0x5be), function(_0x5464ed) {
                                var _0xd8581e = _0x22253e;
                                zw_mobileprediction != -0x1 && (zw_mobilepredictiontextures[zw_mobileprediction][_0xd8581e(0x7ec)] = 0.25), _0x5464ed && _0x5e990b === -0x1 && (_0x4cb405['rk'] = _0x5464ed[_0xd8581e(0x540)][_0xd8581e(0x30a)] >= 0x2);
                            }, !0x0), _0x23c90f[_0x22253e(0x6bd)](_0x22253e(0x1f1), function(_0x1b7b65) {
                                var _0x4fe08c = _0x22253e;
                                let _0xec4241 = zw_zoomplustexture[_0x4fe08c(0x63f)](),
                                    _0x155970 = zw_zoomsubtracttexture[_0x4fe08c(0x63f)](),
                                    _0x4f4ad0, _0x13814a;
                                zw_girosubtracttexture !== undefined && zw_explotWubtracttexture !== undefined && (_0x4f4ad0 = zw_girosubtracttexture[_0x4fe08c(0x63f)](), _0x13814a = zw_explotWubtracttexture[_0x4fe08c(0x63f)]());
                                let _0x3003af = zw_mobilecontroltextures[zw_mobilecontrol][_0x4fe08c(0x63f)](),
                                    _0x34299b = zw_mobilepeedtexture[_0x4fe08c(0x63f)]();
                                if (_0x13814a !== undefined && _0x4f4ad0 !== undefined) {
                                    if (_0x1b7b65['clientX'] > _0x13814a['x'] && _0x1b7b65[_0x4fe08c(0x2ef)] <= _0x13814a['x'] + zw_explotWubtracttexture[_0x4fe08c(0x785)] && _0x1b7b65['clientY'] > _0x13814a['y'] && _0x1b7b65[_0x4fe08c(0x231)] <= _0x13814a['y'] + zw_explotWubtracttexture[_0x4fe08c(0x561)]) {
                                        zw_explotWubtracttexture[_0x4fe08c(0x2b1)](_0x4fe08c(0x6d8));
                                        return;
                                    }
                                    if (_0x1b7b65[_0x4fe08c(0x2ef)] > _0x4f4ad0['x'] && _0x1b7b65[_0x4fe08c(0x2ef)] <= _0x4f4ad0['x'] + zw_girosubtracttexture[_0x4fe08c(0x785)] && _0x1b7b65['clientY'] > _0x4f4ad0['y'] && _0x1b7b65[_0x4fe08c(0x231)] <= _0x4f4ad0['y'] + zw_girosubtracttexture[_0x4fe08c(0x561)]) {
                                        zw_girosubtracttexture[_0x4fe08c(0x2b1)](_0x4fe08c(0x6d8));
                                        return;
                                    }
                                }
                                if (_0x1b7b65['clientX'] > _0xec4241['x'] && _0x1b7b65['clientX'] <= _0xec4241['x'] + zw_zoomplustexture['width'] && _0x1b7b65[_0x4fe08c(0x231)] > _0xec4241['y'] && _0x1b7b65[_0x4fe08c(0x231)] <= _0xec4241['y'] + zw_zoomplustexture[_0x4fe08c(0x561)]) {
                                    zw_zoomplustexture['emit']('mouseup');
                                    return;
                                }
                                if (_0x1b7b65[_0x4fe08c(0x2ef)] > _0x155970['x'] && _0x1b7b65[_0x4fe08c(0x2ef)] <= _0x155970['x'] + zw_zoomsubtracttexture[_0x4fe08c(0x785)] && _0x1b7b65['clientY'] > _0x155970['y'] && _0x1b7b65[_0x4fe08c(0x231)] <= _0x155970['y'] + zw_zoomsubtracttexture['height']) {
                                    zw_zoomsubtracttexture['emit'](_0x4fe08c(0x6d8));
                                    return;
                                }
                                if (_0x1b7b65[_0x4fe08c(0x2ef)] > _0x3003af['x'] && _0x1b7b65['clientX'] <= _0x3003af['x'] + zw_mobilecontroltextures[zw_mobilecontrol]['width'] && _0x1b7b65[_0x4fe08c(0x231)] > _0x3003af['y'] && _0x1b7b65['clientY'] <= _0x3003af['y'] + zw_mobilecontroltextures[zw_mobilecontrol][_0x4fe08c(0x561)]) {
                                    zw_mobilecontroltextures[zw_mobilecontrol][_0x4fe08c(0x2b1)](_0x4fe08c(0x2a0));
                                    return;
                                }
                                if (zw_mobilepeedtexture[_0x4fe08c(0x3d0)] && _0x1b7b65['clientX'] > _0x34299b['x'] && _0x1b7b65[_0x4fe08c(0x2ef)] <= _0x34299b['x'] + zw_mobilepeedtexture[_0x4fe08c(0x785)] && _0x1b7b65[_0x4fe08c(0x231)] > _0x34299b['y'] && _0x1b7b65['clientY'] <= _0x34299b['y'] + zw_mobilepeedtexture['height']) {
                                    _0x5e990b = _0x1b7b65[_0x4fe08c(0x676)], _0x4cb405['rk'] = !![], zw_mobilepeedtexture['alpha'] = 0x1;
                                    return;
                                }
                                zw_joystick !== -0x1 && (!zw_joysticks[zw_joystick][_0x4fe08c(0x3d0)] && (_0x4f97ca = _0x1b7b65[_0x4fe08c(0x676)], zw_joysticks[zw_joystick]['x'] = _0x1b7b65[_0x4fe08c(0x2ef)], zw_joysticks[zw_joystick]['y'] = _0x1b7b65[_0x4fe08c(0x231)], zw_joysticks[zw_joystick]['visible'] = !![], zw_joysticks[zw_joystick][_0x4fe08c(0x5d2)](_0x1b7b65)));
                            }, !0x0), _0x23c90f[_0x22253e(0x6bd)](_0x22253e(0x361), function(_0x3f6686) {
                                var _0x22d18f = _0x22253e;
                                _0x3f6686['pointerId'] == _0x5e990b && (_0x4cb405['rk'] = ![], _0x5e990b = -0x1, zw_mobilepeedtexture['alpha'] = 0.5), _0x3f6686['pointerId'] == _0x4f97ca && (zw_joystick !== -0x1 && (zw_joysticks[zw_joystick][_0x22d18f(0x3d0)] = ![], zw_joysticks[zw_joystick][_0x22d18f(0x4d0)](_0x3f6686)));
                            }, !0x0), _0x23c90f[_0x22253e(0x6bd)](_0x22253e(0x2af), function(_0x148ad1) {
                                var _0x49336c = _0x22253e;
                                _0x148ad1[_0x49336c(0x676)] == _0x4f97ca && (zw_joystick !== -0x1 && zw_joysticks[zw_joystick][_0x49336c(0x351)](_0x148ad1));
                            }, !0x0);
                        }
                        this['wb'] = new _0x17fe98(_0x576f27['mk']), this['cb'] = _0xadd062['J'], this['sk'] = 0x0, this['rk'] = ![], theoEvents['eventoPrincipal'] = _0x4cb405;
                    });
                _0x277d2d[_0x4e8f00(0x6f4)]['a'] = function() {}, _0x277d2d[_0x4e8f00(0x6f4)]['ii'] = function() {
                    var _0x25a40e = _0x4e8f00;
                    this['cb'] == _0xadd062['J'] ? (_0x576f27['fk']['stop'](), _0x576f27['fk'][_0x25a40e(0x7e5)](0x1f4), _0x576f27['gk'][_0x25a40e(0x709)](), _0x576f27['gk'][_0x25a40e(0x6e2)](0x1), _0x576f27['hk']['stop'](), _0x576f27['hk'][_0x25a40e(0x6e2)](0x32), _0x576f27['ik']['stop'](), _0x576f27['ik'][_0x25a40e(0x6e2)](0x32), _0x576f27['jk'][_0x25a40e(0x709)](), _0x576f27['jk'][_0x25a40e(0x6e2)](0x32), _0x576f27['kk'][_0x25a40e(0x709)](), _0x576f27['kk'][_0x25a40e(0x6e2)](0x32), _0x576f27['lk'][_0x25a40e(0x709)](), _0x576f27['lk'][_0x25a40e(0x6e2)](0x1), _0x576f27['di'][_0x25a40e(0x709)](), _0x576f27['di'][_0x25a40e(0x6e2)](0x32), _0x411be4['Le'](![]), _0x576f27['nk']['stop'](), _0x576f27['nk']['fadeOut'](0x32), _0x576f27['ok'][_0x25a40e(0x709)](), _0x576f27['ok']['fadeOut'](0x32)) : (_0x576f27['fk'][_0x25a40e(0x709)](), _0x576f27['fk'][_0x25a40e(0x7e5)](0x1f4), _0x576f27['gk'][_0x25a40e(0x709)](), _0x576f27['gk']['fadeIn'](0x1f4), _0x576f27['hk'][_0x25a40e(0x709)](), _0x576f27['hk'][_0x25a40e(0x6e2)](0x32), _0x576f27['ik'][_0x25a40e(0x709)](), _0x576f27['ik'][_0x25a40e(0x6e2)](0x32), _0x576f27['jk'][_0x25a40e(0x709)](), _0x576f27['jk']['fadeOut'](0x32), _0x576f27['kk'][_0x25a40e(0x709)](), _0x576f27['kk'][_0x25a40e(0x6e2)](0x32), _0x576f27['lk'][_0x25a40e(0x709)](), _0x576f27['lk']['fadeOut'](0x1), _0x576f27['di'][_0x25a40e(0x709)](), _0x576f27['di'][_0x25a40e(0x6e2)](0x32), _0x411be4['Le'](![]), _0x576f27['nk'][_0x25a40e(0x709)](), _0x576f27['nk'][_0x25a40e(0x6e2)](0x32), _0x576f27['ok']['stop'](), _0x576f27['ok'][_0x25a40e(0x6e2)](0x32));
                }, _0x277d2d[_0x4e8f00(0x6f4)]['J'] = function() {
                    return this['cb'] = _0xadd062['J'], this;
                }, _0x277d2d['prototype']['Fa'] = function() {
                    var _0x52901f = _0x4e8f00;
                    return console['log']('re'), (_0x9cb0c4[_0x52901f(0x26a)](), setTimeout(function() {
                        var _0x4a569e = _0x52901f;
                        console['log'](_0x4a569e(0x723)), _0x9cb0c4[_0x4a569e(0x7e5)](0x64);
                    }, 0x64), _0x589b2a[_0x52901f(0x26a)](), setTimeout(function() {
                        var _0x580045 = _0x52901f;
                        console[_0x580045(0x435)](_0x580045(0x300)), _0x589b2a[_0x580045(0x7e5)](0x64);
                    }, 0x64), this['cb'] = _0xadd062['Fa'], this);
                }, _0x277d2d[_0x4e8f00(0x6f4)]['ji'] = function() {
                    this['rk'] = ![], this['wb']['Ra'](), this['cb'] == _0xadd062['Fa'] && _0x3b8490()['r']['Gd']();
                }, _0x277d2d[_0x4e8f00(0x6f4)]['Ra'] = function() {
                    this['wb']['Ra']();
                }, _0x277d2d[_0x4e8f00(0x6f4)]['Pa'] = function(_0xc0ecb1, _0x48f9c5) {
                    this['wb']['Pa'](_0xc0ecb1, _0x48f9c5);
                }, _0x277d2d[_0x4e8f00(0x6f4)]['Da'] = function(_0x2c5e73, _0x47dcff, _0xb6d885) {
                    var _0x18a693 = _0x4e8f00,
                        _0x42a9a3 = void 0x0,
                        _0x42581d = void 0x0,
                        _0x54d06c = void 0x0;
                    if (_0x47dcff >= 0x1 && _0x47dcff <= 0xa ? (_0x42a9a3 = _0x34e632(_0x18a693(0x493) + _0x47dcff), _0x42581d = _0x34e632(_0x18a693(0x360)), _0x54d06c = _0x34e632('index.game.social.shareResult.messGood')['replace']('{0}', _0xb6d885)['replace'](_0x18a693(0x376), _0x2c5e73)[_0x18a693(0x4ae)](_0x18a693(0x436), _0x42a9a3)) : (_0x42a9a3 = '', _0x42581d = _0x34e632(_0x18a693(0x65c)), _0x54d06c = _0x34e632(_0x18a693(0x6f1))[_0x18a693(0x4ae)](_0x18a693(0x5b4), _0xb6d885)[_0x18a693(0x4ae)](_0x18a693(0x376), _0x2c5e73)), _0x3fdd48[_0x18a693(0x5f0)](_0x34e632(_0x18a693(0x208))), _0x3bdb3f[_0x18a693(0x5f0)](_0x2c5e73), _0x1cf64e[_0x18a693(0x5f0)](_0x42a9a3), _0x10d586['html'](_0x42581d), _0x16ed3d['qk']) {
                        var _0x26ef1d = _0x34e632(_0x18a693(0x2f4));
                        _0x34e632(_0x18a693(0x26b)), _0x1c5c3a[_0x18a693(0x332)]()[_0x18a693(0x517)](_0x47dceb(_0x26ef1d, _0x18a693(0x7d3), _0x18a693(0x1ed), _0x54d06c, _0x54d06c, _0x18a693(0x760)));
                    }
                }, _0x277d2d['prototype']['T'] = function() {
                    return this['sk'];
                }, _0x277d2d['prototype']['U'] = function() {
                    return this['rk'];
                };
                var _0xadd062 = {
                    'J': 0x0,
                    'Fa': 0x1
                };
                return _0x277d2d;
            }()),
            _0x1f680c = (function() {
                var _0x5ed381 = _0xde0f64,
                    _0x3f9de9 = $(_0x5ed381(0x7b0)),
                    _0x503235 = $(_0x5ed381(0x3a5)),
                    _0x1e4364 = $(_0x5ed381(0x20e)),
                    _0x1073d3 = [_0x5ed381(0x4ef), _0x5ed381(0x71e), '200%\x20100%', _0x5ed381(0x33b)],
                    _0x56dd15 = _0x39eae9(_0x576f27, function() {
                        _0x576f27['call'](this, _0x1b0cf4['pk']);
                    });
                return _0x56dd15[_0x5ed381(0x6f4)]['a'] = function() {}, _0x56dd15[_0x5ed381(0x6f4)]['ii'] = function() {
                    var _0x5e1f1a = _0x5ed381;
                    _0x576f27['fk']['stop'](), _0x576f27['fk'][_0x5e1f1a(0x6e2)](0x32), _0x576f27['gk']['stop'](), _0x576f27['gk'][_0x5e1f1a(0x6e2)](0x32), _0x576f27['hk'][_0x5e1f1a(0x709)](), _0x576f27['hk'][_0x5e1f1a(0x6e2)](0x32), _0x576f27['ik']['stop'](), _0x576f27['ik'][_0x5e1f1a(0x6e2)](0x32), _0x576f27['jk'][_0x5e1f1a(0x709)](), _0x576f27['jk'][_0x5e1f1a(0x6e2)](0x32), _0x576f27['kk'][_0x5e1f1a(0x709)](), _0x576f27['kk'][_0x5e1f1a(0x7e5)](0x1f4), _0x576f27['lk'][_0x5e1f1a(0x709)](), _0x576f27['lk'][_0x5e1f1a(0x7e5)](0x1), _0x576f27['di'][_0x5e1f1a(0x709)](), _0x576f27['di'][_0x5e1f1a(0x7e5)](0x1f4), _0x411be4['Le'](!0x0), _0x576f27['nk'][_0x5e1f1a(0x709)](), _0x576f27['nk'][_0x5e1f1a(0x6e2)](0x32), _0x576f27['ok']['stop'](), _0x576f27['ok']['fadeOut'](0x32);
                }, _0x56dd15[_0x5ed381(0x6f4)]['ji'] = function() {
                    this['tk']();
                }, _0x56dd15[_0x5ed381(0x6f4)]['tk'] = function() {
                    var _0x1fb915 = _0x5ed381;
                    _0x3f9de9[_0x1fb915(0x66a)](_0x1fb915(0x5a0), _0x1fb915(0x71e));
                    for (var _0x3b9734 = 0x0; _0x3b9734 < _0x1073d3[_0x1fb915(0x30a)]; _0x3b9734++) {
                        var _0x312f1e = Math[_0x1fb915(0x391)](Math[_0x1fb915(0x201)]() * _0x1073d3[_0x1fb915(0x30a)]),
                            _0x3ddb79 = _0x1073d3[_0x3b9734];
                        _0x1073d3[_0x3b9734] = _0x1073d3[_0x312f1e], _0x1073d3[_0x312f1e] = _0x3ddb79;
                    }
                    _0x3f9de9[_0x1fb915(0x66a)](_0x1fb915(0x5a0), _0x1073d3[0x0]), _0x503235['css'](_0x1fb915(0x5a0), _0x1073d3[0x1]), _0x1e4364['css'](_0x1fb915(0x5a0), _0x1073d3[0x2]);
                }, _0x56dd15;
            }()),
            _0x532eba = (function() {
                var _0x780769 = _0xde0f64,
                    _0x1be504 = ($(_0x780769(0x399)), $(_0x780769(0x1f5))),
                    _0x2f6856 = $(_0x780769(0x752)),
                    _0x33ce0a = $(_0x780769(0x5ea)),
                    _0x62a50f = $(_0x780769(0x340)),
                    _0x5c8cd2 = $(_0x780769(0x60c)),
                    _0x4d08a1 = $('#mm-params-nickname'),
                    _0x262f79 = $(_0x780769(0x70f)),
                    _0x18d171 = $(_0x780769(0x46b)),
                    _0x4a5ea2 = $(_0x780769(0x437)),
                    _0x4a4d21 = $(_0x780769(0x73b)),
                    _0x59bffa = $(_0x780769(0x4f8)),
                    _0x2b8310 = $(_0x780769(0x357)),
                    _0x3a5fce = $(_0x780769(0x4e8)),
                    _0x39f98d = $(_0x780769(0x787)),
                    _0x8704ca = $(_0x780769(0x1fd)),
                    _0x16f3bb = $(_0x780769(0x44f)),
                    _0x29e680 = $(_0x780769(0x64f)),
                    _0x54f779 = $(_0x780769(0x72f)),
                    _0x8910cf = $('#mm-coins-val'),
                    _0x1d1b9a = $(_0x780769(0x705)),
                    _0x22d200 = $(_0x780769(0x322)),
                    _0x56256f = $(_0x780769(0x6ce)),
                    _0x3efa7c = _0x39eae9(_0x576f27, function() {
                        var _0x17a37c = _0x780769;
                        _0x576f27[_0x17a37c(0x371)](this, _0x1b0cf4['hi']);
                        var _0x116bd6 = _0x3b8490();
                        this['uk'] = new _0x238264(_0x1be504), _0x262f79['click'](function() {
                            _0x116bd6['r']['Cd']();
                        }), _0x1be504[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['u']['P']() && (_0x116bd6['r']['Cd'](), _0x116bd6['s']['I'](_0x116bd6['s']['$h']));
                        }), _0x2f6856[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['r']['Cd'](), _0x116bd6['t']['Ah']();
                        }), _0x33ce0a[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['r']['Cd'](), _0x116bd6['t']['zh']();
                        }), _0x4d08a1['keypress'](function(_0x38209e) {
                            var _0x267a13 = _0x17a37c;
                            0xd == _0x38209e[_0x267a13(0x567)] && _0x116bd6['na']();
                        }), _0x4a5ea2[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['r']['Cd'](), _0x116bd6['na']();
                        }), _0x4a4d21[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['r']['Cd'](), _0x116bd6['na']();
                        }), _0x59bffa[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['r']['Cd'](), _0x116bd6['s']['I'](_0x116bd6['s']['Zh']);
                        }), _0x8704ca[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['r']['Cd'](), _0x116bd6['s']['I'](_0x116bd6['s']['xa']);
                        }), _0x2b8310[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['u']['P']() && (_0x116bd6['r']['Cd'](), _0x116bd6['s']['I'](_0x116bd6['s']['Yh']));
                        }), _0x39f98d[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['u']['P']() && (_0x116bd6['r']['Cd'](), _0x116bd6['s']['I'](_0x116bd6['s']['Xh']));
                        }), _0x3a5fce[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['u']['P']() && (_0x116bd6['r']['Cd'](), _0x116bd6['s']['I'](_0x116bd6['s']['_h']));
                        }), _0x16f3bb[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['u']['P']() && (_0x116bd6['r']['Cd'](), _0x116bd6['s']['I'](_0x116bd6['s']['Wh']));
                        }), this['vk'](), this['wk'](), $(_0x17a37c(0x4c3))['after']('<div\x20id=\x22final-replay\x22>Replay</div>'), $(_0x17a37c(0x37b))[_0x17a37c(0x3f7)](function() {
                            let _0x569694 = zw_lastserver;
                            _0x569694 && (anApp['r']['Hd'](), anApp['sa'](_0x569694));
                        }), _0x3a5fce[_0x17a37c(0x58d)](_0x17a37c(0x1e3));
                        let _0x2b04aa = $(_0x17a37c(0x37c));
                        _0x2b04aa['html'](_0x17a37c(0x220)), $(_0x17a37c(0x379))[_0x17a37c(0x3f7)](function() {
                            let _0x53aa79 = zw_lastserver;
                            _0x53aa79 && (anApp['r']['Hd'](), anApp['sa'](_0x53aa79));
                        }), $(_0x17a37c(0x239))[_0x17a37c(0x3f7)](function() {
                            var _0x99e914 = _0x17a37c;
                            if (zw_mobilefullscreenstatus) {
                                if (document[_0x99e914(0x6c0)]) document['exitFullscreen']();
                                else {
                                    if (document[_0x99e914(0x6a9)]) document['webkitExitFullscreen']();
                                    else {
                                        if (document[_0x99e914(0x39a)]) document[_0x99e914(0x39a)]();
                                        else document[_0x99e914(0x7f3)][_0x99e914(0x6a9)] && document[_0x99e914(0x7f3)][_0x99e914(0x6a9)]();
                                    }
                                }
                                zw_mobilefullscreenstatus = ![];
                            } else {
                                if (document[_0x99e914(0x4fa)]['requestFullscreen']) document[_0x99e914(0x4fa)][_0x99e914(0x232)]();
                                else {
                                    if (document[_0x99e914(0x4fa)][_0x99e914(0x349)]) document[_0x99e914(0x4fa)][_0x99e914(0x349)]();
                                    else {
                                        if (document[_0x99e914(0x4fa)][_0x99e914(0x3e7)]) document[_0x99e914(0x4fa)][_0x99e914(0x3e7)]();
                                        else document[_0x99e914(0x7f3)][_0x99e914(0x349)] && document[_0x99e914(0x7f3)]['webkitRequestFullscreen']();
                                    }
                                }
                                zw_mobilefullscreenstatus = !![];
                            }
                        }), $('#mm-zw-settings')[_0x17a37c(0x3f7)](function() {
                            _0x116bd6['u']['P']() && (_0x116bd6['r']['Cd'](), _0x116bd6['s']['I'](_0x116bd6['s']['zwset']));
                        });
                        var _0x289596 = _0x424d02(_0x4b2a4b['va']);
                        _0x17a37c(0x2c5) != _0x289596 && _0x17a37c(0x1eb) != _0x289596 && (_0x289596 = _0x17a37c(0x2c5)), _0x262f79[_0x17a37c(0x7db)](_0x289596), console[_0x17a37c(0x435)](_0x17a37c(0x428) + _0x289596);
                    });
                return _0x3efa7c[_0x780769(0x6f4)]['a'] = function() {
                    var _0x40936f = _0x3b8490(),
                        _0x4cd0fd = this;
                    _0x40936f['u']['V'](function() {
                        _0x40936f['s']['F']['xk']();
                    }), _0x40936f['u']['Pi'](function() {
                        _0x40936f['u']['P']() ? (_0x40936f['t']['Bh'](_0x40936f['u']['Di'](), _0x5e05ff['ia']), _0x40936f['t']['Bh'](_0x40936f['u']['Ei'](), _0x5e05ff['ja']), _0x40936f['t']['Bh'](_0x40936f['u']['Fi'](), _0x5e05ff['ka']), _0x40936f['t']['Bh'](_0x40936f['u']['Gi'](), _0x5e05ff['la']), _0x40936f['t']['Bh'](_0x40936f['u']['Hi'](), _0x5e05ff['ma'])) : (_0x40936f['t']['Bh'](_0x40936f['Ga'](), _0x5e05ff['ia']), _0x40936f['t']['Bh'](0x0, _0x5e05ff['ja']), _0x40936f['t']['Bh'](0x0, _0x5e05ff['ka']), _0x40936f['t']['Bh'](0x0, _0x5e05ff['la']), _0x40936f['t']['Bh'](0x0, _0x5e05ff['ma']));
                    }), _0x40936f['u']['Pi'](function() {
                        var _0x3ba2ec = _0x47fe;
                        _0x4a5ea2['toggle'](_0x40936f['u']['P']()), _0x59bffa['toggle'](!_0x40936f['u']['P']()), _0x4a4d21[_0x3ba2ec(0x815)](!_0x40936f['u']['P']()), _0x39f98d[_0x3ba2ec(0x815)](_0x40936f['u']['P']()), _0x3a5fce[_0x3ba2ec(0x815)](_0x40936f['u']['P']()), _0x16f3bb[_0x3ba2ec(0x815)](_0x40936f['u']['P']()), _0x40936f['u']['P']() ? (_0x62a50f['hide'](), _0x54f779[_0x3ba2ec(0x5f0)](_0x40936f['u']['wi']()), _0x29e680[_0x3ba2ec(0x5b5)](_0x3ba2ec(0x68e), _0x40936f['u']['xi']()), _0x8910cf[_0x3ba2ec(0x5f0)](_0x40936f['u']['zi']()), _0x1d1b9a['width'](0x64 * _0x40936f['u']['Bi']() / _0x40936f['u']['Ci']() + '%'), _0x22d200[_0x3ba2ec(0x5f0)](_0x40936f['u']['Bi']() + _0x3ba2ec(0x3a4) + _0x40936f['u']['Ci']()), _0x56256f[_0x3ba2ec(0x5f0)](_0x40936f['u']['Ai']()), _0x4d08a1['val'](_0x40936f['u']['ga']())) : (_0x62a50f[_0x3ba2ec(0x815)](_0x16ed3d['qk'] && !_0x40936f['Ha']()), _0x54f779[_0x3ba2ec(0x5f0)](_0x54f779[_0x3ba2ec(0x85c)](_0x3ba2ec(0x708))), _0x29e680[_0x3ba2ec(0x5b5)](_0x3ba2ec(0x68e), _0x20a121), _0x8910cf[_0x3ba2ec(0x5f0)]('10'), _0x1d1b9a[_0x3ba2ec(0x785)]('0'), _0x22d200[_0x3ba2ec(0x5f0)](''), _0x56256f[_0x3ba2ec(0x5f0)](0x1), _0x4d08a1['val'](_0x424d02(_0x4b2a4b['Aa'])));
                    }), _0x40936f['t']['xh'](function() {
                        _0x4cd0fd['uk']['ak'](_0x40936f['t']['ha'](_0x5e05ff['ia']), !0x1, !0x1), _0x4cd0fd['uk']['bk'](_0x40936f['t']['ha'](_0x5e05ff['ja']), !0x1, !0x1), _0x4cd0fd['uk']['ck'](_0x40936f['t']['ha'](_0x5e05ff['ka']), !0x1, !0x1), _0x4cd0fd['uk']['dk'](_0x40936f['t']['ha'](_0x5e05ff['la']), !0x1, !0x1), _0x4cd0fd['uk']['ek'](_0x40936f['t']['ha'](_0x5e05ff['ma']), !0x1, !0x1);
                    });
                }, _0x3efa7c[_0x780769(0x6f4)]['ii'] = function() {
                    var _0x11be78 = _0x780769;
                    _0x576f27['fk'][_0x11be78(0x709)](), _0x576f27['fk']['fadeOut'](0x32), _0x576f27['gk']['stop'](), _0x576f27['gk'][_0x11be78(0x6e2)](0x32), _0x576f27['hk'][_0x11be78(0x709)](), _0x576f27['hk']['fadeIn'](0x1f4), _0x576f27['ik'][_0x11be78(0x709)](), _0x576f27['ik'][_0x11be78(0x6e2)](0x32), _0x576f27['jk']['stop'](), _0x576f27['jk'][_0x11be78(0x6e2)](0x32), _0x576f27['kk'][_0x11be78(0x709)](), _0x576f27['kk'][_0x11be78(0x6e2)](0x32), _0x576f27['lk']['stop'](), _0x576f27['lk'][_0x11be78(0x7e5)](0x1), _0x576f27['di'][_0x11be78(0x709)](), _0x576f27['di']['fadeIn'](0x1f4), _0x411be4['Le'](!0x0), _0x576f27['nk'][_0x11be78(0x709)](), _0x576f27['nk']['fadeIn'](0x1f4), _0x576f27['ok'][_0x11be78(0x709)](), _0x576f27['ok'][_0x11be78(0x7e5)](0x1f4);
                }, _0x3efa7c[_0x780769(0x6f4)]['ji'] = function() {
                    _0x3b8490()['r']['Dd'](), this['uk']['Le'](!0x0);
                }, _0x3efa7c['prototype']['ei'] = function() {
                    this['uk']['Le'](!0x1);
                }, _0x3efa7c[_0x780769(0x6f4)]['Ra'] = function() {
                    this['uk']['Ra']();
                }, _0x3efa7c[_0x780769(0x6f4)]['Pa'] = function(_0x45288d, _0x114788) {
                    this['uk']['Pa']();
                }, _0x3efa7c['prototype']['ga'] = function() {
                    var _0x43521e = _0x780769;
                    return _0x4d08a1[_0x43521e(0x7db)]();
                }, _0x3efa7c['prototype']['D'] = function() {
                    return _0x262f79['val']();
                }, _0x3efa7c[_0x780769(0x6f4)]['xk'] = function() {
                    var _0x24faec = _0x780769;
                    _0x18d171[_0x24faec(0x392)]();
                }, _0x3efa7c[_0x780769(0x6f4)]['vk'] = function() {
                    var _0x673f0e = $('#mm-advice-cont')['children'](),
                        _0x10626e = 0x0;
                    setInterval(function() {
                        var _0x465d31 = _0x47fe;
                        _0x673f0e['eq'](_0x10626e)[_0x465d31(0x6e2)](0x1f4, function() {
                            var _0x3c754e = _0x465d31;
                            ++_0x10626e >= _0x673f0e[_0x3c754e(0x30a)] && (_0x10626e = 0x0), _0x673f0e['eq'](_0x10626e)[_0x3c754e(0x7e5)](0x1f4)[_0x3c754e(0x66a)]('display', 'inline-block');
                        });
                    }, 0xbb8);
                }, _0x3efa7c[_0x780769(0x6f4)]['wk'] = function() {
                    var _0x5ddc53 = _0x780769;

                    function _0xdb674f() {
                        _0xf83403['Ka'](!0x0), setTimeout(function() {
                            var _0x5af89e = _0x47fe;
                            _0x62a50f[_0x5af89e(0x26a)]();
                        }, 0xbb8);
                    }
                    var _0xf83403 = _0x3b8490();
                    if (_0x16ed3d['qk'] && !_0xf83403['Ha']()) {
                        _0x62a50f[_0x5ddc53(0x392)]();
                        var _0x29533f = _0x34e632('index.game.main.menu.unlockSkins.share'),
                            _0x46d95a = encodeURIComponent(_0x34e632(_0x5ddc53(0x821)) + _0x5ddc53(0x79c)),
                            _0x585436 = encodeURIComponent(_0x34e632('index.game.main.menu.unlockSkins.comeAndPlay'));
                        _0x5c8cd2[_0x5ddc53(0x517)]($(_0x5ddc53(0x352) + _0x46d95a + '\x22><img\x20src=\x22data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\x22><span>' + _0x29533f + '</span></a>')[_0x5ddc53(0x3f7)](_0xdb674f)), _0x5c8cd2[_0x5ddc53(0x517)]($(_0x5ddc53(0x297) + _0x585436 + _0x5ddc53(0x53e) + _0x29533f + _0x5ddc53(0x263))['click'](_0xdb674f));
                    }
                }, _0x3efa7c;
            }()),
            _0x3d0af4 = (function() {
                var _0x11e0ce = _0xde0f64,
                    _0x15ea3d = _0x39eae9(_0x576f27, function() {
                        var _0x100e5b = _0x47fe;
                        _0x576f27[_0x100e5b(0x371)](this, _0x1b0cf4['pk']);
                    });
                return _0x15ea3d[_0x11e0ce(0x6f4)]['a'] = function() {}, _0x15ea3d[_0x11e0ce(0x6f4)]['ii'] = function() {
                    var _0x591822 = _0x11e0ce;
                    _0x576f27['fk']['stop'](), _0x576f27['fk'][_0x591822(0x6e2)](0x32), _0x576f27['gk'][_0x591822(0x709)](), _0x576f27['gk'][_0x591822(0x6e2)](0x32), _0x576f27['hk'][_0x591822(0x709)](), _0x576f27['hk']['fadeOut'](0x32), _0x576f27['ik'][_0x591822(0x709)](), _0x576f27['ik'][_0x591822(0x6e2)](0x32), _0x576f27['jk'][_0x591822(0x709)](), _0x576f27['jk'][_0x591822(0x6e2)](0x32), _0x576f27['kk'][_0x591822(0x709)](), _0x576f27['kk'][_0x591822(0x6e2)](0x32), _0x576f27['lk'][_0x591822(0x709)](), _0x576f27['lk'][_0x591822(0x6e2)](0x1), _0x576f27['di'][_0x591822(0x709)](), _0x576f27['di'][_0x591822(0x6e2)](0x32), _0x411be4['Le'](!0x1), _0x576f27['nk'][_0x591822(0x709)](), _0x576f27['nk'][_0x591822(0x6e2)](0x32), _0x576f27['ok'][_0x591822(0x709)](), _0x576f27['ok'][_0x591822(0x6e2)](0x32);
                }, _0x15ea3d;
            }()),
            _0x37092b = (function() {
                var _0x18e2c2 = _0xde0f64,
                    _0x8ad8d9 = $(_0x18e2c2(0x3fa)),
                    _0x1f8294 = _0x39eae9(_0x576f27, function() {
                        _0x576f27['call'](this, _0x1b0cf4['pk']), this['yk'] = [], this['zk'] = null;
                    });
                return _0x1f8294[_0x18e2c2(0x6f4)]['a'] = function() {}, _0x1f8294[_0x18e2c2(0x6f4)]['ii'] = function() {
                    var _0x4a8b6a = _0x18e2c2;
                    _0x576f27['fk']['stop'](), _0x576f27['fk'][_0x4a8b6a(0x6e2)](0x32), _0x576f27['gk'][_0x4a8b6a(0x709)](), _0x576f27['gk'][_0x4a8b6a(0x6e2)](0x32), _0x576f27['hk'][_0x4a8b6a(0x709)](), _0x576f27['hk'][_0x4a8b6a(0x6e2)](0x32), _0x576f27['ik'][_0x4a8b6a(0x709)](), _0x576f27['ik']['fadeOut'](0x32), _0x576f27['jk']['stop'](), _0x576f27['jk'][_0x4a8b6a(0x7e5)](0x1f4), _0x576f27['kk'][_0x4a8b6a(0x709)](), _0x576f27['kk'][_0x4a8b6a(0x6e2)](0x32), _0x576f27['lk'][_0x4a8b6a(0x709)](), _0x576f27['lk'][_0x4a8b6a(0x7e5)](0x1), _0x576f27['di']['stop'](), _0x576f27['di'][_0x4a8b6a(0x7e5)](0x1f4), _0x411be4['Le'](!0x0), _0x576f27['nk'][_0x4a8b6a(0x709)](), _0x576f27['nk']['fadeOut'](0x32), _0x576f27['ok'][_0x4a8b6a(0x709)](), _0x576f27['ok'][_0x4a8b6a(0x7e5)](0x1f4);
                }, _0x1f8294[_0x18e2c2(0x6f4)]['ji'] = function() {
                    this['Ak']();
                }, _0x1f8294[_0x18e2c2(0x6f4)]['mi'] = function() {
                    var _0x26b6d3 = _0x18e2c2;
                    return null != this['zk'] || this['yk'][_0x26b6d3(0x30a)] > 0x0;
                }, _0x1f8294['prototype']['_'] = function(_0x49a2dd) {
                    var _0x409d84 = _0x18e2c2;
                    this['yk'][_0x409d84(0x74b)](_0x49a2dd), setTimeout(function() {
                        _0x3b8490()['s']['ki']();
                    }, 0x0);
                }, _0x1f8294[_0x18e2c2(0x6f4)]['Ti'] = function(_0x430334) {
                    var _0x1b0736 = _0x18e2c2;
                    this['yk'][_0x1b0736(0x236)](_0x430334), setTimeout(function() {
                        _0x3b8490()['s']['ki']();
                    }, 0x0);
                }, _0x1f8294['prototype']['Ak'] = function() {
                    var _0x41aa82 = _0x18e2c2,
                        _0x13d6c0 = this;
                    if (null == this['zk']) {
                        if (0x0 == this['yk'][_0x41aa82(0x30a)]) return void _0x3b8490()['s']['gi']();
                        var _0x3663a4 = this['yk'][_0x41aa82(0x703)]();
                        this['zk'] = _0x3663a4;
                        var _0x39781a = _0x3663a4['Bk']();
                        _0x39781a[_0x41aa82(0x26a)](), _0x39781a[_0x41aa82(0x7e5)](0x12c), _0x8ad8d9[_0x41aa82(0x517)](_0x39781a), _0x3663a4['Ck'] = function() {
                            var _0x49acec = _0x41aa82;
                            _0x39781a[_0x49acec(0x6e2)](0x12c), setTimeout(function() {
                                var _0x287f79 = _0x49acec;
                                _0x39781a[_0x287f79(0x563)]();
                            }, 0x12c), _0x13d6c0['zk'] == _0x3663a4 && (_0x13d6c0['zk'] = null), _0x13d6c0['Ak']();
                        }, _0x3663a4['ji']();
                    }
                }, _0x1f8294;
            }()),
            _0x1b0cf4 = {
                'pk': 0x0,
                'hi': 0x1
            },
            _0x3d3eef = (function() {
                var _0x88e98f = _0xde0f64,
                    _0x12a5e4 = $(_0x88e98f(0x729)),
                    _0x1d0944 = $(_0x88e98f(0x745)),
                    _0x445fcc = $('#popup-menu-coins-val');
                $(_0x88e98f(0x6c2))[_0x88e98f(0x3f7)](function() {
                    var _0x565c1a = _0x3b8490();
                    _0x565c1a['r']['Cd'](), _0x565c1a['s']['gi']();
                }), _0x1d0944['click'](function() {
                    var _0x246f4e = _0x3b8490();
                    _0x246f4e['u']['P']() && (_0x246f4e['r']['Cd'](), _0x246f4e['s']['I'](_0x246f4e['s']['Wh']));
                });
                var _0x3a1d7a = _0x39eae9(_0x576f27, function(_0x4378f8, _0x368d5d) {
                        _0x576f27['call'](this, _0x1b0cf4['hi']), this['ad'] = _0x4378f8, this['Dk'] = _0x368d5d;
                    }),
                    _0xf91414 = _0x88e98f(0x4da) + lenguaje[idiomaActual][_0x88e98f(0x3f1)] + _0x88e98f(0x68f) + lenguaje[idiomaActual][_0x88e98f(0x6a2)] + _0x88e98f(0x58f) + lenguaje[idiomaActual][_0x88e98f(0x3c7)] + ':</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22sound-hs\x22\x20class=\x22sounds-input\x22\x20placeholder=\x22Enter\x20sound\x20URL\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>' + lenguaje[idiomaActual]['soundTuto4'] + _0x88e98f(0x309);
                $('#settings-view')[_0x88e98f(0x58d)](_0xf91414), $(_0x88e98f(0x782))['on'](_0x88e98f(0x3f7), function() {
                    var _0x22930c = _0x88e98f,
                        _0x1dc124 = $(this)[_0x22930c(0x5b5)]('category');
                    if ($(this)['hasClass'](_0x22930c(0x52b))) return;
                    $('.tab.material-button,\x20.options-list\x20>\x20div')[_0x22930c(0x29c)](_0x22930c(0x52b)), $(this)[_0x22930c(0x4c6)](_0x22930c(0x52b)), $('div[category=\x27' + _0x1dc124 + '\x27]')[_0x22930c(0x4c6)]('active');
                }), document[_0x88e98f(0x706)](_0x88e98f(0x1ef))['addEventListener']('click', async function() {
                    var _0x11f554 = _0x88e98f;
                    localStorage[_0x11f554(0x39b)](), sessionStorage[_0x11f554(0x39b)]();
                    if (window[_0x11f554(0x72d)]) {
                        const _0x3c9f83 = await indexedDB['databases']();
                        _0x3c9f83[_0x11f554(0x39f)](_0x42ec01 => indexedDB[_0x11f554(0x278)](_0x42ec01[_0x11f554(0x431)]));
                    }
                    window[_0x11f554(0x535)] && console['warn'](_0x11f554(0x4c2));
                    document['cookie'][_0x11f554(0x6b6)](';')['forEach'](function(_0x2d9ec4) {
                        var _0x358e06 = _0x11f554;
                        document[_0x358e06(0x7f1)] = _0x2d9ec4['replace'](/^ +/, '')[_0x358e06(0x4ae)](/=.*/, _0x358e06(0x240) + new Date()['toUTCString']() + _0x358e06(0x7b9));
                    });
                    _0x11f554(0x320) in window && caches['keys']()[_0x11f554(0x63d)](function(_0x5fbf5) {
                        for (let _0x164236 of _0x5fbf5) caches['delete'](_0x164236);
                    });
                    if (_0x11f554(0x61a) in navigator) {
                        const _0x4941c8 = await navigator['serviceWorker'][_0x11f554(0x6bb)]();
                        for (let _0x47d9ee of _0x4941c8) {
                            await _0x47d9ee['unregister']();
                        }
                    }
                    localStorage['removeItem']('scriptSeleccionado'), location[_0x11f554(0x4c0)]();
                }), soundEnabled = !![], $('#toggle-sound')[_0x88e98f(0x3f7)](function() {
                    var _0x4a01a7 = _0x88e98f;
                    soundEnabled = !soundEnabled, $(this)[_0x4a01a7(0x32d)](soundEnabled ? _0x4a01a7(0x416) : _0x4a01a7(0x5e4));
                }), $(_0x88e98f(0x53d))[_0x88e98f(0x3f7)](function() {
                    var _0x7e88c6 = _0x88e98f;
                    navigator[_0x7e88c6(0x4e9)][_0x7e88c6(0x6d0)](zw_userId), alert(_0x7e88c6(0x27c) + zw_userId);
                }), window['changeBackground'] = function(_0x501522) {
                    var _0xe1bcd3 = _0x88e98f;
                    let _0x124518 = localStorage[_0xe1bcd3(0x3a1)]('selectedBackground');
                    currentIndex = _0x124518 !== null ? parseInt(_0x124518) : 0x0, currentIndex = (currentIndex + _0x501522 + backgrounds[_0xe1bcd3(0x30a)]) % backgrounds[_0xe1bcd3(0x30a)], updateBackground(currentIndex);
                }, window[_0x88e98f(0x741)] = function(_0x23dc53) {
                    var _0x9db0a8 = _0x88e98f;
                    currentFontIndex = (currentFontIndex + _0x23dc53 + fonts[_0x9db0a8(0x30a)]) % fonts[_0x9db0a8(0x30a)], updateFont();
                }, updateFont();
                const _0x3c11e9 = [{
                        'id': _0x88e98f(0x70b),
                        'label': _0x88e98f(0x3b0),
                        'category': _0x88e98f(0x402),
                        'tooltip': ''
                    }, {
                        'id': 'fps',
                        'label': _0x88e98f(0x6f3),
                        'category': _0x88e98f(0x402),
                        'tooltip': ''
                    }, {
                        'id': 'chngBotSkins',
                        'label': _0x88e98f(0x26f),
                        'category': _0x88e98f(0x402),
                        'tooltip': ''
                    }, {
                        'id': _0x88e98f(0x4d6),
                        'label': _0x88e98f(0x1e9),
                        'category': _0x88e98f(0x402),
                        'tooltip': ''
                    }, {
                        'id': 'top8',
                        'label': _0x88e98f(0x612),
                        'category': 'game',
                        'tooltip': 'If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20the\x20top\x208\x20players.'
                    }, {
                        'id': _0x88e98f(0x666),
                        'label': _0x88e98f(0x31e),
                        'category': _0x88e98f(0x402),
                        'tooltip': _0x88e98f(0x4ed)
                    }, {
                        'id': _0x88e98f(0x6da),
                        'label': 'SHOW\x20TEAM\x20LIST',
                        'category': 'teams',
                        'tooltip': ''
                    }],
                    _0x235dcf = [{
                        'name': _0x88e98f(0x3fc),
                        'id': 'zoomSpeed',
                        'min': 0.1,
                        'max': 0xf,
                        'step': 0.1,
                        'category': 'game',
                        'tooltip': ''
                    }],
                    _0x2c730f = {
                        'game': document[_0x88e98f(0x272)](_0x88e98f(0x585)),
                        'teams': document[_0x88e98f(0x272)]('.options-list\x20>\x20div[category=\x22teams\x22]'),
                        'theme': document[_0x88e98f(0x272)](_0x88e98f(0x674)),
                        'controls': document['querySelector'](_0x88e98f(0x828))
                    };
                if (isPremiumUser) {
                    _0x3c11e9[_0x88e98f(0x236)]({
                        'id': 'Incognito',
                        'label': _0x88e98f(0x355),
                        'category': _0x88e98f(0x402),
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'id': _0x88e98f(0x6e0),
                        'label': _0x88e98f(0x77b),
                        'category': 'game',
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'id': _0x88e98f(0x2f8),
                        'label': _0x88e98f(0x295),
                        'category': _0x88e98f(0x402),
                        'tooltip': 'Premium\x20Feature'
                    }, {
                        'id': _0x88e98f(0x408),
                        'label': _0x88e98f(0x23f),
                        'category': _0x88e98f(0x402),
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'id': _0x88e98f(0x638),
                        'label': _0x88e98f(0x835),
                        'category': 'game',
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'id': _0x88e98f(0x393),
                        'label': _0x88e98f(0x65d),
                        'category': _0x88e98f(0x402),
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'id': _0x88e98f(0x1e8),
                        'label': _0x88e98f(0x7ba),
                        'category': 'game',
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'id': 'hideYouNameInMinimap',
                        'label': 'SHOW\x20YOUR\x20NAME\x20FOR\x20TEAM\x20LIST',
                        'category': _0x88e98f(0x468),
                        'tooltip': _0x88e98f(0x2ed)
                    });
                    const _0x4a66ef = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22\x20style=\x22color:\x20yellow;\x22>PUT\x20YOUR\x20NAME\x20FOR\x20TEAM\x20LIST:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22teamNickname\x22\x20class=\x22sounds-input\x22\x20placeholder=\x22ENTER\x20YOUR\x20NAME\x20FOR\x20FRIENDS\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                    _0x2c730f['teams']['insertAdjacentHTML']('beforeend', _0x4a66ef), _0x235dcf[_0x88e98f(0x236)]({
                        'name': _0x88e98f(0x789),
                        'id': _0x88e98f(0x6ee),
                        'min': 0x1,
                        'max': 0x6,
                        'step': 0x1,
                        'category': _0x88e98f(0x402),
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'name': _0x88e98f(0x2ad),
                        'id': _0x88e98f(0x1de),
                        'min': 1.2,
                        'max': 3.2,
                        'step': 0.2,
                        'category': _0x88e98f(0x402),
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'name': _0x88e98f(0x4a1),
                        'id': 'ComidaShadow',
                        'min': 0.5,
                        'max': 0x3,
                        'step': 0.5,
                        'category': _0x88e98f(0x402),
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'name': _0x88e98f(0x52f),
                        'id': 'ComidaSize',
                        'min': 0.5,
                        'max': 0x3,
                        'step': 0.5,
                        'category': _0x88e98f(0x402),
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'name': _0x88e98f(0x2dc),
                        'id': _0x88e98f(0x30b),
                        'min': 0xa,
                        'max': 0x14,
                        'step': 0x1,
                        'category': 'game',
                        'tooltip': _0x88e98f(0x2ed)
                    }, {
                        'name': _0x88e98f(0x62a),
                        'id': _0x88e98f(0x83f),
                        'min': 0.1,
                        'max': 0.9,
                        'step': 0.1,
                        'category': 'game',
                        'tooltip': 'Premium\x20Feature'
                    });
                }
                _0x235dcf[_0x88e98f(0x39f)](_0x2fd1e0 => {
                    var _0x3ccf7e = _0x88e98f;
                    const _0x16b2d4 = parseFloat(theoKzObjects[_0x2fd1e0['id']]),
                        _0x45dcda = document[_0x3ccf7e(0x76b)](_0x3ccf7e(0x426));
                    _0x45dcda[_0x3ccf7e(0x28c)] = _0x3ccf7e(0x283), _0x45dcda['innerHTML'] = _0x3ccf7e(0x2ce) + (_0x2fd1e0[_0x3ccf7e(0x796)][_0x3ccf7e(0x3d4)](_0x3ccf7e(0x5de)) ? _0x3ccf7e(0x323) : '') + '\x22>' + _0x2fd1e0[_0x3ccf7e(0x431)] + _0x3ccf7e(0x70c) + _0x16b2d4 + _0x3ccf7e(0x5ee) + (_0x16b2d4 - _0x2fd1e0[_0x3ccf7e(0x363)]) / (_0x2fd1e0[_0x3ccf7e(0x604)] - _0x2fd1e0[_0x3ccf7e(0x363)]) * 0x64 + _0x3ccf7e(0x6a7) + _0x2fd1e0['id'] + '\x22\x20min=\x22' + _0x2fd1e0[_0x3ccf7e(0x363)] + _0x3ccf7e(0x432) + _0x2fd1e0[_0x3ccf7e(0x604)] + _0x3ccf7e(0x594) + _0x2fd1e0[_0x3ccf7e(0x4a3)] + '\x22\x20value=\x22' + _0x16b2d4 + _0x3ccf7e(0x7a5);
                    const _0x3fe328 = _0x45dcda[_0x3ccf7e(0x272)]('input'),
                        _0x5770fe = _0x45dcda[_0x3ccf7e(0x272)]('.value'),
                        _0x53bb43 = _0x45dcda[_0x3ccf7e(0x272)](_0x3ccf7e(0x866));
                    _0x3fe328[_0x3ccf7e(0x6bd)]('input', () => {
                        var _0xdfd14f = _0x3ccf7e;
                        _0x5770fe[_0xdfd14f(0x7c3)] = _0x3fe328['value'], _0x53bb43[_0xdfd14f(0x577)][_0xdfd14f(0x785)] = (_0x3fe328[_0xdfd14f(0x639)] - _0x2fd1e0['min']) / (_0x2fd1e0[_0xdfd14f(0x604)] - _0x2fd1e0[_0xdfd14f(0x363)]) * 0x64 + '%', theoKzObjects[_0x2fd1e0['id']] = _0x3fe328[_0xdfd14f(0x639)], localStorage['setItem'](_0x2fd1e0['id'], _0x3fe328[_0xdfd14f(0x639)]), _0x2fd1e0['id'] === _0xdfd14f(0x30b) && anApp['o'][_0xdfd14f(0x775)](parseInt(_0x3fe328['value']));
                    }), _0x2c730f[_0x2fd1e0['category']][_0x3ccf7e(0x27d)](_0x45dcda);
                }), _0x3c11e9[_0x88e98f(0x39f)](_0x4ec46c => {
                    var _0xcbb37c = _0x88e98f;
                    const _0xdb4616 = localStorage[_0xcbb37c(0x3a1)](_0x4ec46c['id']) === _0xcbb37c(0x543),
                        _0x2842bd = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20toggle\x20' + (_0xdb4616 ? 'on' : '') + _0xcbb37c(0x733) + _0x4ec46c['id'] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22\x20style=\x22' + (_0x4ec46c[_0xcbb37c(0x796)]['includes'](_0xcbb37c(0x5de)) ? _0xcbb37c(0x323) : '') + '\x22>' + _0x4ec46c['label'] + _0xcbb37c(0x1f4) + (_0x4ec46c[_0xcbb37c(0x796)] ? _0xcbb37c(0x6d1) + _0x4ec46c[_0xcbb37c(0x796)] + _0xcbb37c(0x29b) : '') + _0xcbb37c(0x5c3);
                    _0x2c730f[_0x4ec46c[_0xcbb37c(0x753)]][_0xcbb37c(0x462)](_0xcbb37c(0x3de), _0x2842bd);
                }), document[_0x88e98f(0x7de)]('.box')[_0x88e98f(0x39f)](_0x4e242a => {
                    var _0x5b6d9e = _0x88e98f;
                    _0x4e242a['addEventListener'](_0x5b6d9e(0x3f7), function(_0x512b70) {
                        var _0x4afe85 = _0x5b6d9e;
                        _0x512b70[_0x4afe85(0x778)]();
                        const _0x3d3bf9 = this[_0x4afe85(0x22d)],
                            _0x4ad745 = _0x3d3bf9[_0x4afe85(0x655)](_0x4afe85(0x580)),
                            _0x1cc413 = !_0x3d3bf9['classList'][_0x4afe85(0x4aa)]('on');
                        _0x3d3bf9['classList'][_0x4afe85(0x815)]('on', _0x1cc413), theoKzObjects[_0x4ad745] = _0x1cc413, localStorage[_0x4afe85(0x1df)](_0x4ad745, _0x1cc413);
                        const _0x4b28ef = _0x3d3bf9[_0x4afe85(0x272)](_0x4afe85(0x293));
                        if (_0x4b28ef) _0x4b28ef[_0x4afe85(0x577)][_0x4afe85(0x7a3)] = _0x1cc413 ? _0x4afe85(0x27b) : _0x4afe85(0x541);
                        console['log'](_0x4ad745 + '\x20changed\x20to', _0x1cc413);
                    });
                });
                var _0x9c34e5 = $(_0x88e98f(0x243));
                addMinicolor(_0x9c34e5[0x1], _0x88e98f(0x527), _0x88e98f(0x654), _0x88e98f(0x2f9), theoObjects['teamColor']), $(_0x88e98f(0x839))['on'](_0x88e98f(0x5c6), function() {
                    var _0x4dbc99 = _0x88e98f;
                    let _0x4117c2 = $(this)[_0x4dbc99(0x7db)]();
                    $(_0x4dbc99(0x3f5))[_0x4dbc99(0x66a)](_0x4dbc99(0x36a), _0x4117c2), localStorage[_0x4dbc99(0x1df)](_0x4dbc99(0x2f9), zwormData[_0x4dbc99(0x2f9)]), zwormData[_0x4dbc99(0x2f9)] = '0x' + _0x4117c2[_0x4dbc99(0x78f)](0x1), console[_0x4dbc99(0x435)](zwormData['teamColor']);
                });
                let _0x2b0811 = localStorage[_0x88e98f(0x3a1)](_0x88e98f(0x2f9));
                _0x2b0811 && (zwormData['teamColor'] = _0x2b0811, $(_0x88e98f(0x3f5))[_0x88e98f(0x66a)](_0x88e98f(0x36a), '#' + _0x2b0811[_0x88e98f(0x78f)](0x2)), $(_0x88e98f(0x839))[_0x88e98f(0x7db)]('#' + _0x2b0811[_0x88e98f(0x78f)](0x2)));
                var _0x19252f = _0x88e98f(0x29d) + _0x88e98f(0x35b) + _0x88e98f(0x5d0) + _0x88e98f(0x35d) + _0x88e98f(0x5f6) + _0x88e98f(0x29a) + _0x88e98f(0x441) + _0x88e98f(0x68c) + '<div\x20id=\x22user-menu\x22\x20class=\x22menu\x22>Opciones\x20de\x20usuario</div>' + _0x88e98f(0x83e) + _0x88e98f(0x853) + '<div\x20id=\x22notifications-menu\x22\x20class=\x22menu\x22>Preferencias\x20de\x20notificaciones</div>' + _0x88e98f(0x66e) + _0x88e98f(0x2c0) + _0x88e98f(0x69f) + _0x88e98f(0x1f9) + _0x88e98f(0x6aa) + lenguaje[idiomaActual][_0x88e98f(0x3b7)] + _0x88e98f(0x84c) + _0x88e98f(0x68c) + _0x88e98f(0x793) + '<div\x20class=\x22settings-line\x22>' + '<input\x20type=\x22checkbox\x22\x20id=\x22toggleTop8\x22\x20/>' + _0x88e98f(0x411) + _0x88e98f(0x4b7) + _0x88e98f(0x68c) + _0x88e98f(0x69f) + _0x88e98f(0x25e) + '<label\x20for=\x22toggleKillFeed\x22>Show\x20Kill\x20Feed</label>' + '<span\x20class=\x22tooltip\x22\x20id=\x22tooltipKillFeed\x22\x20style=\x22display:\x20none;\x22>If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20kills\x20in\x20real\x20time.</span>' + _0x88e98f(0x68c) + _0x88e98f(0x793) + _0x88e98f(0x69f) + _0x88e98f(0x596) + _0x88e98f(0x730) + _0x88e98f(0x68c) + '<div\x20class=\x22popup-sep\x22></div>' + _0x88e98f(0x69f) + '<span\x20class=\x22settings-label\x22>Team\x20Code:\x20</span>' + _0x88e98f(0x66d) + _0x88e98f(0x68c) + _0x88e98f(0x793) + '<div\x20class=\x22settings-line\x22>' + _0x88e98f(0x3e3) + lenguaje[idiomaActual][_0x88e98f(0x662)] + _0x88e98f(0x29b) + _0x88e98f(0x49b) + '<option\x20value=\x220\x22>' + lenguaje[idiomaActual]['fondo0'] + '</option>' + _0x88e98f(0x53f) + lenguaje[idiomaActual][_0x88e98f(0x581)] + _0x88e98f(0x3b6) + _0x88e98f(0x388) + lenguaje[idiomaActual][_0x88e98f(0x458)] + _0x88e98f(0x3b6) + _0x88e98f(0x206) + lenguaje[idiomaActual][_0x88e98f(0x845)] + _0x88e98f(0x3b6) + _0x88e98f(0x48a) + lenguaje[idiomaActual][_0x88e98f(0x4c4)] + '</option>' + _0x88e98f(0x280) + 'Textil' + _0x88e98f(0x3b6) + _0x88e98f(0x4b9) + _0x88e98f(0x3da) + _0x88e98f(0x3b6) + _0x88e98f(0x41d) + _0x88e98f(0x7cf) + _0x88e98f(0x3b6) + _0x88e98f(0x404) + 'Sky\x20Violet' + _0x88e98f(0x3b6) + '<option\x20value=\x229\x22>' + _0x88e98f(0x4b6) + _0x88e98f(0x3b6) + '<option\x20value=\x2210\x22>' + _0x88e98f(0x4cf) + _0x88e98f(0x3b6) + _0x88e98f(0x538) + 'Arena\x201' + _0x88e98f(0x3b6) + _0x88e98f(0x52c) + 'Arena\x202' + '</option>' + _0x88e98f(0x5a2) + _0x88e98f(0x3a7) + _0x88e98f(0x3b6) + _0x88e98f(0x788) + _0x88e98f(0x583) + _0x88e98f(0x3b6) + _0x88e98f(0x637) + _0x88e98f(0x68c) + _0x88e98f(0x793) + _0x88e98f(0x69f) + _0x88e98f(0x2c2) + _0x88e98f(0x865) + _0x88e98f(0x57b) + _0x88e98f(0x4e6) + _0x88e98f(0x49c) + _0x88e98f(0x386) + '<option\x20value=\x225\x22>5</option>' + _0x88e98f(0x5aa) + _0x88e98f(0x30e) + _0x88e98f(0x40a) + _0x88e98f(0x429) + _0x88e98f(0x85e) + '</select>' + '</div>' + _0x88e98f(0x793) + '<div\x20class=\x22settings-line\x22>' + _0x88e98f(0x22f) + lenguaje[idiomaActual]['skinVisible'] + _0x88e98f(0x29b) + _0x88e98f(0x20a) + _0x88e98f(0x68c) + _0x88e98f(0x793) + _0x88e98f(0x42c) + '</div>' + _0x88e98f(0x68c);
                let _0x1d48e1 = localStorage['getItem'](_0x88e98f(0x685)) === _0x88e98f(0x543) ? !![] : localStorage[_0x88e98f(0x3a1)]('top8') === _0x88e98f(0x530) ? ![] : theoKzObjects[_0x88e98f(0x685)],
                    _0x17f61b = localStorage[_0x88e98f(0x3a1)](_0x88e98f(0x666)) === _0x88e98f(0x543) ? !![] : localStorage['getItem']('killFeed') === _0x88e98f(0x530) ? ![] : theoKzObjects['killFeed'];
                $(_0x88e98f(0x700))[_0x88e98f(0x6b2)](_0x88e98f(0x798), _0x1d48e1), $('#toggleKillFeed')[_0x88e98f(0x6b2)](_0x88e98f(0x798), _0x17f61b), $('#top8List')[_0x88e98f(0x815)](_0x1d48e1), $(_0x88e98f(0x314))[_0x88e98f(0x815)](_0x17f61b);
                (localStorage[_0x88e98f(0x3a1)](_0x88e98f(0x685)) === _0x88e98f(0x543) || localStorage[_0x88e98f(0x3a1)](_0x88e98f(0x685)) === _0x88e98f(0x530)) && (theoKzObjects[_0x88e98f(0x685)] = _0x1d48e1, localStorage['setItem'](_0x88e98f(0x685), _0x1d48e1));
                (localStorage['getItem'](_0x88e98f(0x666)) === _0x88e98f(0x543) || localStorage[_0x88e98f(0x3a1)](_0x88e98f(0x666)) === _0x88e98f(0x530)) && (theoKzObjects[_0x88e98f(0x666)] = _0x17f61b, localStorage[_0x88e98f(0x1df)](_0x88e98f(0x666), _0x17f61b));
                $(_0x88e98f(0x700))['on'](_0x88e98f(0x2ab), function() {
                    var _0x1f46ec = _0x88e98f;
                    theoKzObjects[_0x1f46ec(0x685)] = this[_0x1f46ec(0x798)], $(_0x1f46ec(0x1f3))['toggle'](this[_0x1f46ec(0x798)]), localStorage[_0x1f46ec(0x1df)]('top8', theoKzObjects[_0x1f46ec(0x685)]);
                }), $(_0x88e98f(0x668))['on'](_0x88e98f(0x2ab), function() {
                    var _0xb31138 = _0x88e98f;
                    theoKzObjects[_0xb31138(0x666)] = this['checked'], $(_0xb31138(0x314))[_0xb31138(0x815)](this[_0xb31138(0x798)]), localStorage['setItem'](_0xb31138(0x666), theoKzObjects['killFeed']);
                }), $(_0x88e98f(0x700))['hover'](function() {
                    var _0x39e10f = _0x88e98f;
                    $(_0x39e10f(0x4eb))[_0x39e10f(0x7e5)]();
                }, function() {
                    var _0x5f13f5 = _0x88e98f;
                    $('#tooltipTop8')[_0x5f13f5(0x6e2)]();
                }), $(_0x88e98f(0x668))[_0x88e98f(0x625)](function() {
                    var _0x5dbe48 = _0x88e98f;
                    $(_0x5dbe48(0x438))[_0x5dbe48(0x7e5)]();
                }, function() {
                    var _0x39471e = _0x88e98f;
                    $(_0x39471e(0x438))[_0x39471e(0x6e2)]();
                }), $(_0x88e98f(0x2a2))['on'](_0x88e98f(0x5c6), function() {
                    var _0x5a6c87 = _0x88e98f;
                    zwormData[_0x5a6c87(0x6e5)] = $(this)['val'](), localStorage[_0x5a6c87(0x1df)]('teamCode', zwormData[_0x5a6c87(0x6e5)]), console[_0x5a6c87(0x435)]('Team\x20Code\x20updated:', zwormData[_0x5a6c87(0x6e5)]);
                });
                let _0x3ae76e = localStorage[_0x88e98f(0x3a1)](_0x88e98f(0x6e5));
                _0x3ae76e && (zwormData['teamCode'] = _0x3ae76e, $(_0x88e98f(0x2a2))['val'](_0x3ae76e));
                zw_selectedbackground = 0x0, zw_toplist = 0xa;
                var _0xc09cc8 = $('#arkaplan'),
                    _0x504c5 = $(_0x88e98f(0x2f5)),
                    _0x523599 = localStorage[_0x88e98f(0x3a1)]('zw-background');
                if (_0x523599) {
                    var _0x791804 = parseInt(_0x523599);
                    _0xc09cc8[_0x88e98f(0x7db)](_0x791804), zw_selectedbackground = _0x791804;
                }
                const _0x505628 = localStorage[_0x88e98f(0x3a1)](_0x88e98f(0x761));
                if (_0x505628) {
                    const _0xb84d12 = parseInt(_0x505628);
                    zw_toplist = _0xb84d12;
                }
                let _0x526279 = _wrmxt[_0x88e98f(0x7be)](theoKzObjects['idReplaceSkin']);
                if (_0x526279) $(_0x88e98f(0x1fc))['val'](theoKzObjects[_0x88e98f(0x23b)]);
                else {
                    let _0x3f0bde = $(_0x88e98f(0x1fc))['val']();
                    _0x526279 = _wrmxt[_0x88e98f(0x7be)](_0x3f0bde), theoKzObjects['idReplaceSkin'] = _0x526279 ? _0x3f0bde : 0x23;
                };
                return _0x504c5[_0x88e98f(0x7db)](zw_toplist), _0xc09cc8['change'](function(_0x874791) {
                    var _0x4eda7a = _0x88e98f;
                    zw_selectedbackground = this[_0x4eda7a(0x639)];
                    var _0x547e00 = obtenerImagenPorSeleccion(zw_selectedbackground);
                    _0x547e00 && (anApp['q']['Cf'] = new PIXI[(_0x4eda7a(0x259))](anApp['q'][_0x4eda7a(0x328)](_0x547e00))), localStorage['setItem']('zw-background', this[_0x4eda7a(0x639)]['toString']());
                }), _0x504c5[_0x88e98f(0x2ab)](function(_0x2d202c) {
                    var _0x30eec9 = _0x88e98f;
                    zw_toplist = this[_0x30eec9(0x639)], localStorage[_0x30eec9(0x1df)](_0x30eec9(0x761), this[_0x30eec9(0x639)][_0x30eec9(0x696)]());
                }), $(_0x88e98f(0x630))[_0x88e98f(0x3f7)](function() {
                    var _0x46e8e1 = _0x88e98f;
                    navigator[_0x46e8e1(0x4e9)][_0x46e8e1(0x6d0)](zw_userId);
                }), (_0x3a1d7a[_0x88e98f(0x6f4)]['a'] = function() {
                    var _0x15cd89 = _0x88e98f;
                    if (_0x3a1d7a[_0x15cd89(0x852)]['prototype']['a'][_0x15cd89(0x371)](this), !_0x3a1d7a['Ek']) {
                        _0x3a1d7a['Ek'] = !0x0;
                        var _0x22e690 = _0x3b8490();
                        _0x22e690['u']['Pi'](function() {
                            var _0x96a535 = _0x15cd89;
                            _0x22e690['u']['P']() ? _0x445fcc[_0x96a535(0x5f0)](_0x22e690['u']['zi']()) : _0x445fcc[_0x96a535(0x5f0)]('0');
                        });
                    }
                }, _0x3a1d7a['Fk'] = $(_0x88e98f(0x315)), _0x3a1d7a['Gk'] = $(_0x88e98f(0x647)), _0x3a1d7a['Hk'] = $('#profile-view'), _0x3a1d7a['Ik'] = $('#settings-view'), _0x3a1d7a['Jk'] = $(_0x88e98f(0x74d)), _0x3a1d7a['Kk'] = $(_0x88e98f(0x5e9)), _0x3a1d7a['Lk'] = $(_0x88e98f(0x7b3)), _0x3a1d7a['zwset'] = $(_0x88e98f(0x7d5)), _0x3a1d7a['Mk'] = $(_0x88e98f(0x537)), _0x3a1d7a['Nk'] = $(_0x88e98f(0x72b)), _0x3a1d7a['Ok'] = $(_0x88e98f(0x3ff)), _0x3a1d7a['Pk'] = $(_0x88e98f(0x377)), _0x3a1d7a[_0x88e98f(0x6f4)]['ii'] = function() {
                    var _0xf8e363 = _0x88e98f;
                    _0x576f27['fk'][_0xf8e363(0x709)](), _0x576f27['fk'][_0xf8e363(0x6e2)](0xc8), _0x576f27['gk'][_0xf8e363(0x709)](), _0x576f27['gk']['fadeOut'](0xc8), _0x576f27['hk'][_0xf8e363(0x709)](), _0x576f27['hk'][_0xf8e363(0x6e2)](0xc8), _0x576f27['ik'][_0xf8e363(0x709)](), _0x576f27['ik'][_0xf8e363(0x7e5)](0xc8), _0x576f27['jk'][_0xf8e363(0x709)](), _0x576f27['jk'][_0xf8e363(0x6e2)](0xc8), _0x576f27['kk'][_0xf8e363(0x709)](), _0x576f27['kk'][_0xf8e363(0x6e2)](0xc8), _0x576f27['nk'][_0xf8e363(0x709)](), _0x576f27['nk'][_0xf8e363(0x7e5)](0xc8), _0x576f27['ok'][_0xf8e363(0x709)](), _0x576f27['ok'][_0xf8e363(0x7e5)](0xc8), _0x12a5e4[_0xf8e363(0x5f0)](this['ad']), _0x1d0944[_0xf8e363(0x815)](this['Dk']), this['Qk'](), this['Rk']();
                }, _0x3a1d7a[_0x88e98f(0x6f4)]['Rk'] = function() {}, _0x3a1d7a[_0x88e98f(0x6f4)]['Sk'] = function() {
                    var _0x43106c = _0x88e98f;
                    _0x3d3eef['Pk'][_0x43106c(0x709)](), _0x3d3eef['Pk'][_0x43106c(0x7e5)](0x12c);
                }, _0x3a1d7a['prototype']['Qk'] = function() {
                    var _0x8d2d91 = _0x88e98f;
                    _0x3d3eef['Pk'][_0x8d2d91(0x709)](), _0x3d3eef['Pk'][_0x8d2d91(0x6e2)](0x12c);
                }, _0x3a1d7a);
            }()),
            _0x4e29d2 = (function() {
                var _0x3e2221 = _0xde0f64,
                    _0x3567ee = $(_0x3e2221(0x2d6)),
                    _0x4c7d5a = $('#store-buy-coins_50000'),
                    _0x346d54 = $('#store-buy-coins_16000'),
                    _0x5d2450 = $(_0x3e2221(0x5a3)),
                    _0x4c1300 = $(_0x3e2221(0x7dd)),
                    _0x33d821 = $(_0x3e2221(0x405)),
                    _0x794978 = _0x39eae9(_0x3d3eef, function() {
                        var _0x47fc16 = _0x3e2221;
                        _0x3d3eef[_0x47fc16(0x371)](this, _0x34e632(_0x47fc16(0x39d)), !0x1);
                        var _0x20d5e0 = _0x3b8490(),
                            _0x1fa5d9 = this;
                        _0x3567ee[_0x47fc16(0x3f7)](function() {
                            _0x20d5e0['r']['Cd'](), _0x1fa5d9['Tk']('coins_125000');
                        }), _0x4c7d5a['click'](function() {
                            var _0x3585ea = _0x47fc16;
                            _0x20d5e0['r']['Cd'](), _0x1fa5d9['Tk'](_0x3585ea(0x774));
                        }), _0x346d54[_0x47fc16(0x3f7)](function() {
                            var _0x504e50 = _0x47fc16;
                            _0x20d5e0['r']['Cd'](), _0x1fa5d9['Tk'](_0x504e50(0x409));
                        }), _0x5d2450[_0x47fc16(0x3f7)](function() {
                            var _0x327a1b = _0x47fc16;
                            _0x20d5e0['r']['Cd'](), _0x1fa5d9['Tk'](_0x327a1b(0x860));
                        }), _0x4c1300['click'](function() {
                            var _0x1eeff4 = _0x47fc16;
                            _0x20d5e0['r']['Cd'](), _0x1fa5d9['Tk'](_0x1eeff4(0x4f5));
                        }), _0x33d821[_0x47fc16(0x3f7)](function() {
                            _0x20d5e0['r']['Cd'](), _0x1fa5d9['Tk']('coins_1250');
                        });
                    });
                return _0x794978[_0x3e2221(0x6f4)]['a'] = function() {
                    var _0x2b488a = _0x3e2221;
                    _0x794978[_0x2b488a(0x852)][_0x2b488a(0x6f4)]['a'][_0x2b488a(0x371)](this);
                }, _0x794978[_0x3e2221(0x6f4)]['Rk'] = function() {
                    var _0x5e19ed = _0x3e2221;
                    _0x3d3eef['Fk'][_0x5e19ed(0x709)](), _0x3d3eef['Fk'][_0x5e19ed(0x7e5)](0xc8), _0x3d3eef['Gk'][_0x5e19ed(0x709)](), _0x3d3eef['Gk'][_0x5e19ed(0x6e2)](0x32), _0x3d3eef['Hk']['stop'](), _0x3d3eef['Hk'][_0x5e19ed(0x6e2)](0x32), _0x3d3eef['Jk'][_0x5e19ed(0x709)](), _0x3d3eef['Jk'][_0x5e19ed(0x6e2)](0x32), _0x3d3eef['Ik'][_0x5e19ed(0x709)](), _0x3d3eef['Ik'][_0x5e19ed(0x6e2)](0x32), _0x3d3eef['Kk'][_0x5e19ed(0x709)](), _0x3d3eef['Kk'][_0x5e19ed(0x6e2)](0x32), _0x3d3eef['Lk']['stop'](), _0x3d3eef['Lk'][_0x5e19ed(0x6e2)](0x32), _0x3d3eef['Mk'][_0x5e19ed(0x709)](), _0x3d3eef['Mk'][_0x5e19ed(0x6e2)](0x32), _0x3d3eef[_0x5e19ed(0x7bf)]['stop'](), _0x3d3eef['zwset'][_0x5e19ed(0x6e2)](0x32), _0x3d3eef['Nk'][_0x5e19ed(0x709)](), _0x3d3eef['Nk'][_0x5e19ed(0x6e2)](0x32), _0x3d3eef['Ok'][_0x5e19ed(0x709)](), _0x3d3eef['Ok'][_0x5e19ed(0x6e2)](0x32);
                }, _0x794978[_0x3e2221(0x6f4)]['ji'] = function() {
                    _0x3b8490()['r']['Dd']();
                }, _0x794978[_0x3e2221(0x6f4)]['Tk'] = function(_0x5c25c3) {}, _0x794978;
            }()),
            _0x42ecda = (function() {
                var _0x2622f8 = _0xde0f64,
                    _0x2e3bf5 = $(_0x2622f8(0x1f8)),
                    _0x28b2fa = $(_0x2622f8(0x7ef)),
                    _0x49c82d = $(_0x2622f8(0x515)),
                    _0x5af380 = $('#leaders-button-kills'),
                    _0x17e91a = _0x39eae9(_0x3d3eef, function() {
                        var _0x18f7bb = _0x2622f8;
                        _0x3d3eef[_0x18f7bb(0x371)](this, _0x34e632(_0x18f7bb(0x576)), !0x0);
                        var _0x3305aa = _0x3b8490(),
                            _0x19979d = this;
                        this['Uk'] = {}, this['Vk'] = {
                            'Wk': {
                                'Xk': _0x28b2fa,
                                'Yk': 'byLevel'
                            },
                            'Zk': {
                                'Xk': _0x49c82d,
                                'Yk': _0x18f7bb(0x5c4)
                            },
                            '$k': {
                                'Xk': _0x5af380,
                                'Yk': 'byKillsAndHeadShots'
                            }
                        }, _0x28b2fa[_0x18f7bb(0x3f7)](function() {
                            _0x3305aa['r']['Cd'](), _0x19979d['_k'](_0x19979d['Vk']['Wk']);
                        }), _0x49c82d[_0x18f7bb(0x3f7)](function() {
                            _0x3305aa['r']['Cd'](), _0x19979d['_k'](_0x19979d['Vk']['Zk']);
                        }), _0x5af380[_0x18f7bb(0x3f7)](function() {
                            _0x3305aa['r']['Cd'](), _0x19979d['_k'](_0x19979d['Vk']['$k']);
                        });
                    });
                return _0x17e91a[_0x2622f8(0x6f4)]['a'] = function() {
                    var _0x5988a3 = _0x2622f8;
                    _0x17e91a[_0x5988a3(0x852)]['prototype']['a'][_0x5988a3(0x371)](this);
                }, _0x17e91a['prototype']['Rk'] = function() {
                    var _0x15bfef = _0x2622f8;
                    _0x3d3eef['Fk'][_0x15bfef(0x709)](), _0x3d3eef['Fk'][_0x15bfef(0x6e2)](0x32), _0x3d3eef['Gk'][_0x15bfef(0x709)](), _0x3d3eef['Gk'][_0x15bfef(0x7e5)](0xc8), _0x3d3eef['Hk'][_0x15bfef(0x709)](), _0x3d3eef['Hk'][_0x15bfef(0x6e2)](0x32), _0x3d3eef['Jk'][_0x15bfef(0x709)](), _0x3d3eef['Jk'][_0x15bfef(0x6e2)](0x32), _0x3d3eef['Ik'][_0x15bfef(0x709)](), _0x3d3eef['Ik'][_0x15bfef(0x6e2)](0x32), _0x3d3eef['Kk'][_0x15bfef(0x709)](), _0x3d3eef['Kk'][_0x15bfef(0x6e2)](0x32), _0x3d3eef['Lk']['stop'](), _0x3d3eef['Lk'][_0x15bfef(0x6e2)](0x32), _0x3d3eef['Mk'][_0x15bfef(0x709)](), _0x3d3eef['Mk'][_0x15bfef(0x6e2)](0x32), _0x3d3eef[_0x15bfef(0x7bf)][_0x15bfef(0x709)](), _0x3d3eef[_0x15bfef(0x7bf)]['fadeOut'](0x32), _0x3d3eef['Nk'][_0x15bfef(0x709)](), _0x3d3eef['Nk'][_0x15bfef(0x6e2)](0x32), _0x3d3eef['Ok'][_0x15bfef(0x709)](), _0x3d3eef['Ok'][_0x15bfef(0x6e2)](0x32);
                }, _0x17e91a[_0x2622f8(0x6f4)]['ji'] = function() {
                    var _0x4deebd = _0x2622f8;
                    _0x3b8490()['r']['Dd']();
                    var _0x4d83e2 = this;
                    this['Sk'](), $[_0x4deebd(0x505)](_0x20a4f8 + _0x4deebd(0x1e5), function(_0x414a71) {
                        _0x4d83e2['Uk'] = _0x414a71, _0x4d83e2['_k'](null != _0x4d83e2['al'] ? _0x4d83e2['al'] : _0x4d83e2['Vk']['Wk']), _0x4d83e2['Qk']();
                    })[_0x4deebd(0x44b)](function() {
                        _0x4d83e2['Qk']();
                    });
                }, _0x17e91a[_0x2622f8(0x6f4)]['_k'] = function(_0x239cee) {
                    var _0x2bb78d = _0x2622f8;
                    this['al'] = _0x239cee;
                    for (var _0xe0351f in this['Vk'])
                        if (this['Vk']['hasOwnProperty'](_0xe0351f)) {
                            var _0x27522e = this['Vk'][_0xe0351f];
                            _0x27522e['Xk']['removeClass'](_0x2bb78d(0x2ac));
                        } this['al']['Xk'][_0x2bb78d(0x4c6)](_0x2bb78d(0x2ac));
                    for (var _0x2c7427 = this['Uk'][this['al']['Yk']], _0x552d84 = '', _0x52359f = 0x0; _0x52359f < _0x2c7427[_0x2bb78d(0x30a)]; _0x52359f++) {
                        var _0x4ebc21 = _0x2c7427[_0x52359f];
                        _0x552d84 += _0x2bb78d(0x217) + (_0x52359f + 0x1) + _0x2bb78d(0x25a) + _0x4ebc21['avatarUrl'] + _0x2bb78d(0x7cc) + _0x4ebc21[_0x2bb78d(0x5dd)] + _0x2bb78d(0x207) + _0x4ebc21[_0x2bb78d(0x457)] + _0x2bb78d(0x207) + _0x4ebc21[_0x2bb78d(0x330)] + '</span><span>' + _0x4ebc21[_0x2bb78d(0x5da)] + _0x2bb78d(0x3a4) + _0x4ebc21[_0x2bb78d(0x2e2)] + _0x2bb78d(0x1e4);
                    }
                    _0x2e3bf5['empty'](), _0x2e3bf5[_0x2bb78d(0x517)](_0x552d84);
                }, _0x17e91a;
            }()),
            _0x3b3c47 = (function() {
                var _0x5ec213 = _0xde0f64,
                    _0x3e1057 = $(_0x5ec213(0x6bc)),
                    _0x21d0bd = $(_0x5ec213(0x3d2)),
                    _0x5a7d4b = _0x39eae9(_0x3d3eef, function() {
                        var _0x3f9410 = _0x5ec213;
                        _0x3d3eef[_0x3f9410(0x371)](this, _0x34e632(_0x3f9410(0x6c9)), !0x1);
                        var _0x44db05 = _0x3b8490(),
                            _0x570eec = this;
                        _0x3e1057[_0x3f9410(0x3f7)](function() {
                            _0x44db05['r']['Cd'](), _0x570eec['Sk'](), _0x44db05['u']['Qi'](function() {
                                _0x570eec['Qk']();
                            }), setTimeout(function() {
                                _0x570eec['Qk']();
                            }, 0x2710), _0x44db05['u']['Zi']();
                        }), _0x21d0bd[_0x3f9410(0x3f7)](function() {
                            _0x44db05['r']['Cd'](), _0x570eec['Sk'](), _0x44db05['u']['Qi'](function() {
                                _0x570eec['Qk']();
                            }), setTimeout(function() {
                                _0x570eec['Qk']();
                            }, 0x2710), _0x44db05['u']['Vi']();
                        });
                    });
                return _0x5a7d4b[_0x5ec213(0x6f4)]['a'] = function() {
                    var _0x192e4e = _0x5ec213;
                    _0x5a7d4b[_0x192e4e(0x852)]['prototype']['a'][_0x192e4e(0x371)](this);
                }, _0x5a7d4b[_0x5ec213(0x6f4)]['Rk'] = function() {
                    var _0x19cc12 = _0x5ec213;
                    _0x3d3eef['Fk']['stop'](), _0x3d3eef['Fk'][_0x19cc12(0x6e2)](0x32), _0x3d3eef['Gk'][_0x19cc12(0x709)](), _0x3d3eef['Gk'][_0x19cc12(0x6e2)](0x32), _0x3d3eef['Hk'][_0x19cc12(0x709)](), _0x3d3eef['Hk']['fadeOut'](0x32), _0x3d3eef['Jk'][_0x19cc12(0x709)](), _0x3d3eef['Jk']['fadeIn'](0xc8), _0x3d3eef['Ik']['stop'](), _0x3d3eef['Ik'][_0x19cc12(0x6e2)](0x32), _0x3d3eef['Kk'][_0x19cc12(0x709)](), _0x3d3eef['Kk'][_0x19cc12(0x6e2)](0x32), _0x3d3eef['Lk'][_0x19cc12(0x709)](), _0x3d3eef['Lk'][_0x19cc12(0x6e2)](0x32), _0x3d3eef['Mk'][_0x19cc12(0x709)](), _0x3d3eef['Mk'][_0x19cc12(0x6e2)](0x32), _0x3d3eef['zwset'][_0x19cc12(0x709)](), _0x3d3eef[_0x19cc12(0x7bf)][_0x19cc12(0x6e2)](0x32), _0x3d3eef['Nk']['stop'](), _0x3d3eef['Nk'][_0x19cc12(0x6e2)](0x32), _0x3d3eef['Ok'][_0x19cc12(0x709)](), _0x3d3eef['Ok'][_0x19cc12(0x6e2)](0x32);
                }, _0x5a7d4b['prototype']['ji'] = function() {
                    _0x3b8490()['r']['Dd']();
                }, _0x5a7d4b;
            }()),
            _0x44b2ae = (function() {
                var _0x14ebbf = _0xde0f64,
                    _0xe00b71 = $(_0x14ebbf(0x499)),
                    _0x4cf26c = $(_0x14ebbf(0x26e)),
                    _0x224a53 = $(_0x14ebbf(0x471)),
                    _0x42e552 = $(_0x14ebbf(0x813)),
                    _0xd5cfdc = $(_0x14ebbf(0x2cc)),
                    _0x2e213e = $('#profile-stat-highScore'),
                    _0x25a488 = $(_0x14ebbf(0x5a4)),
                    _0x135ec2 = $(_0x14ebbf(0x523)),
                    _0x543991 = $(_0x14ebbf(0x566)),
                    _0x3e27d1 = $(_0x14ebbf(0x665)),
                    _0x4799b2 = $(_0x14ebbf(0x27a)),
                    _0x5197a4 = $(_0x14ebbf(0x824)),
                    _0x401fc6 = _0x39eae9(_0x3d3eef, function() {
                        var _0x4d63e2 = _0x14ebbf;
                        _0x3d3eef[_0x4d63e2(0x371)](this, _0x34e632(_0x4d63e2(0x43b)), !0x0);
                    });
                return _0x401fc6[_0x14ebbf(0x6f4)]['a'] = function() {
                    var _0x1b77f4 = _0x14ebbf;
                    _0x401fc6[_0x1b77f4(0x852)]['prototype']['a'][_0x1b77f4(0x371)](this);
                }, _0x401fc6[_0x14ebbf(0x6f4)]['Rk'] = function() {
                    var _0x5a24f1 = _0x14ebbf;
                    _0x3d3eef['Fk']['stop'](), _0x3d3eef['Fk'][_0x5a24f1(0x6e2)](0x32), _0x3d3eef['Gk'][_0x5a24f1(0x709)](), _0x3d3eef['Gk'][_0x5a24f1(0x6e2)](0x32), _0x3d3eef['Hk'][_0x5a24f1(0x709)](), _0x3d3eef['Hk'][_0x5a24f1(0x7e5)](0xc8), _0x3d3eef['Jk']['stop'](), _0x3d3eef['Jk'][_0x5a24f1(0x6e2)](0x32), _0x3d3eef['Ik'][_0x5a24f1(0x709)](), _0x3d3eef['Ik']['fadeOut'](0x32), _0x3d3eef['Kk'][_0x5a24f1(0x709)](), _0x3d3eef['Kk']['fadeOut'](0x32), _0x3d3eef['Lk'][_0x5a24f1(0x709)](), _0x3d3eef['Lk'][_0x5a24f1(0x6e2)](0x32), _0x3d3eef['Mk'][_0x5a24f1(0x709)](), _0x3d3eef['Mk']['fadeOut'](0x32), _0x3d3eef[_0x5a24f1(0x7bf)]['stop'](), _0x3d3eef[_0x5a24f1(0x7bf)][_0x5a24f1(0x6e2)](0x32), _0x3d3eef['Nk'][_0x5a24f1(0x709)](), _0x3d3eef['Nk']['fadeOut'](0x32), _0x3d3eef['Ok'][_0x5a24f1(0x709)](), _0x3d3eef['Ok'][_0x5a24f1(0x6e2)](0x32);
                }, _0x401fc6[_0x14ebbf(0x6f4)]['ji'] = function() {
                    var _0x341b54 = _0x14ebbf,
                        _0x4d2d55 = _0x3b8490();
                    _0x4d2d55['r']['Dd']();
                    var _0x10d9fe = _0x4d2d55['u']['Oi'](),
                        _0x4d0acd = moment([_0x10d9fe['year'], _0x10d9fe['month'] - 0x1, _0x10d9fe[_0x341b54(0x3dc)]])[_0x341b54(0x1f0)]('LL');
                    _0x4cf26c['html'](_0x4d2d55['u']['wi']()), _0xe00b71[_0x341b54(0x5b5)](_0x341b54(0x68e), _0x4d2d55['u']['xi']()), _0x224a53[_0x341b54(0x785)](0x64 * _0x4d2d55['u']['Bi']() / _0x4d2d55['u']['Ci']() + '%'), _0x42e552[_0x341b54(0x5f0)](_0x4d2d55['u']['Bi']() + _0x341b54(0x3a4) + _0x4d2d55['u']['Ci']()), _0xd5cfdc['html'](_0x4d2d55['u']['Ai']()), _0x2e213e[_0x341b54(0x5f0)](_0x4d2d55['u']['Ii']()), _0x25a488[_0x341b54(0x5f0)](_0x24d3fb(_0x4d2d55['u']['Ji']())), _0x135ec2['html'](_0x4d2d55['u']['Ki']()), _0x543991[_0x341b54(0x5f0)](_0x4d2d55['u']['Li']()), _0x3e27d1['html'](_0x4d2d55['u']['Mi']()), _0x4799b2[_0x341b54(0x5f0)](_0x24d3fb(_0x4d2d55['u']['Ni']())), _0x5197a4['html'](_0x4d0acd);
                }, _0x401fc6;
            }()),
            _0x1268dd = (function() {
                var _0x4f4682 = _0xde0f64,
                    _0x3b574f = $('#settings-music-enabled-switch'),
                    _0x2b9c2f = $(_0x4f4682(0x44a)),
                    _0x16bbe7 = $(_0x4f4682(0x65a)),
                    _0x757d84 = $(_0x4f4682(0x1e2)),
                    _0x3c2900 = $(_0x4f4682(0x34f)),
                    _0x1cf8c4 = $(_0x4f4682(0x20d)),
                    _0x2d76a5 = $(_0x4f4682(0x5c5)),
                    _0x3dedb9 = $(_0x4f4682(0x59b)),
                    _0x111502 = _0x39eae9(_0x3d3eef, function() {
                        var _0x27114d = _0x4f4682;
                        _0x3d3eef[_0x27114d(0x371)](this, _0x34e632('index.game.popup.menu.settings.tab'), !0x1);
                        var _0x746474 = this,
                            _0x3984d4 = _0x3b8490();
                        _0x3b574f[_0x27114d(0x3f7)](function() {
                            var _0x1d8e6c = _0x27114d,
                                _0x30536c = !!_0x3b574f[_0x1d8e6c(0x6b2)](_0x1d8e6c(0x798));
                            _0x28ae7f(_0x4b2a4b['Me'], _0x30536c, 0x1e), _0x3984d4['r']['td'](_0x30536c), _0x3984d4['r']['Cd']();
                        }), _0x2b9c2f[_0x27114d(0x3f7)](function() {
                            var _0x4eff7e = _0x27114d,
                                _0x476eff = !!_0x2b9c2f[_0x4eff7e(0x6b2)](_0x4eff7e(0x798));
                            _0x28ae7f(_0x4b2a4b['Ne'], _0x476eff, 0x1e), _0x3984d4['r']['rd'](_0x476eff), _0x3984d4['r']['Cd']();
                        }), _0x16bbe7['click'](function() {
                            _0x3984d4['r']['Cd']();
                        }), _0x757d84['click'](function() {
                            _0x3984d4['r']['Cd'](), _0x746474['Sk'](), setTimeout(function() {
                                _0x746474['Qk']();
                            }, 0x7d0), _0x3984d4['u']['Wi']();
                        }), _0x1cf8c4[_0x27114d(0x3f7)](function() {
                            _0x3984d4['u']['P']() ? (_0x3984d4['r']['Cd'](), _0x3984d4['s']['I'](_0x3984d4['s']['Vh'])) : _0x3984d4['r']['Hd']();
                        }), _0x3dedb9['click'](function() {
                            _0x3984d4['Y']() ? (_0x3984d4['r']['Cd'](), _0x3984d4['s']['I'](_0x3984d4['s']['Uh'])) : _0x3984d4['r']['Hd']();
                        });
                    });
                return _0x111502[_0x4f4682(0x6f4)]['a'] = function() {
                    var _0x3054d0 = _0x4f4682;
                    _0x111502[_0x3054d0(0x852)][_0x3054d0(0x6f4)]['a']['call'](this);
                    var _0x48e6ee = _0x3b8490(),
                        _0x3ef959 = void 0x0;
                    switch (_0x424d02(_0x4b2a4b['Me'])) {
                        case _0x3054d0(0x530):
                            _0x3ef959 = !0x1;
                            break;
                        default:
                            _0x3ef959 = !0x0;
                    }
                    _0x3b574f[_0x3054d0(0x6b2)](_0x3054d0(0x798), _0x3ef959), _0x48e6ee['r']['td'](_0x3ef959);
                    var _0x2cabab = void 0x0;
                    switch (_0x424d02(_0x4b2a4b['Ne'])) {
                        case _0x3054d0(0x530):
                            _0x2cabab = !0x1;
                            break;
                        default:
                            _0x2cabab = !0x0;
                    }
                    _0x2b9c2f['prop'](_0x3054d0(0x798), _0x2cabab), _0x48e6ee['r']['rd'](_0x2cabab);
                    var _0x3049d3 = void 0x0;
                    switch (_0x424d02(_0x4b2a4b['ya'])) {
                        case _0x3054d0(0x530):
                            _0x3049d3 = !0x1;
                            break;
                        default:
                            _0x3049d3 = !0x0;
                    }
                    console[_0x3054d0(0x435)]('Load\x20sPN:\x20' + _0x3049d3), _0x16bbe7[_0x3054d0(0x6b2)](_0x3054d0(0x798), _0x3049d3), _0x48e6ee['u']['V'](function() {
                        var _0x475bdd = _0x3054d0;
                        _0x3c2900[_0x475bdd(0x815)](_0x48e6ee['u']['P']()), _0x2d76a5['toggle'](_0x48e6ee['u']['P']());
                    });
                }, _0x111502[_0x4f4682(0x6f4)]['Rk'] = function() {
                    var _0xac9911 = _0x4f4682;
                    _0x3d3eef['Fk'][_0xac9911(0x709)](), _0x3d3eef['Fk'][_0xac9911(0x6e2)](0x32), _0x3d3eef['Gk']['stop'](), _0x3d3eef['Gk'][_0xac9911(0x6e2)](0x32), _0x3d3eef['Hk']['stop'](), _0x3d3eef['Hk'][_0xac9911(0x6e2)](0x32), _0x3d3eef['Jk'][_0xac9911(0x709)](), _0x3d3eef['Jk'][_0xac9911(0x6e2)](0x32), _0x3d3eef['Ik'][_0xac9911(0x709)](), _0x3d3eef['Ik'][_0xac9911(0x7e5)](0xc8), _0x3d3eef['Kk'][_0xac9911(0x709)](), _0x3d3eef['Kk'][_0xac9911(0x6e2)](0x32), _0x3d3eef['Lk'][_0xac9911(0x709)](), _0x3d3eef['Lk'][_0xac9911(0x6e2)](0x32), _0x3d3eef['Mk'][_0xac9911(0x709)](), _0x3d3eef['Mk'][_0xac9911(0x6e2)](0x32), _0x3d3eef[_0xac9911(0x7bf)][_0xac9911(0x709)](), _0x3d3eef[_0xac9911(0x7bf)][_0xac9911(0x6e2)](0x32), _0x3d3eef['Nk']['stop'](), _0x3d3eef['Nk']['fadeOut'](0x32), _0x3d3eef['Ok'][_0xac9911(0x709)](), _0x3d3eef['Ok'][_0xac9911(0x6e2)](0x32);
                }, _0x111502[_0x4f4682(0x6f4)]['ji'] = function() {
                    var _0x40df90 = _0x4f4682,
                        _0x5d7b2c = _0x3b8490();
                    _0x5d7b2c['r']['Dd'](), _0x5d7b2c['Y']() ? _0x3dedb9[_0x40df90(0x392)]() : _0x3dedb9['hide']();
                }, _0x111502[_0x4f4682(0x6f4)]['wa'] = function() {
                    var _0x27ed68 = _0x4f4682;
                    return _0x16bbe7[_0x27ed68(0x6b2)]('checked');
                }, _0x111502;
            }()),
            _0x24c68e = (function() {
                var _0x23bf80 = _0xde0f64,
                    _0x1f1c22 = $('#store-view-canv'),
                    _0x5d55e6 = $('#skin-description-text'),
                    _0x511c52 = $('#skin-group-description-text'),
                    _0x2f3aae = $(_0x23bf80(0x319)),
                    _0x5a3930 = $(_0x23bf80(0x525)),
                    _0x446d69 = $(_0x23bf80(0x47a)),
                    _0x20ede4 = $(_0x23bf80(0x2a4)),
                    _0x367100 = $(_0x23bf80(0x485)),
                    _0x1f0ad4 = $('#store-view-prev'),
                    _0x409b8b = $(_0x23bf80(0x265)),
                    _0x48e0e8 = _0x39eae9(_0x3d3eef, function() {
                        var _0x5c22f1 = _0x23bf80;
                        _0x3d3eef[_0x5c22f1(0x371)](this, _0x34e632(_0x5c22f1(0x715)), !0x0);
                        var _0x58a2f3 = this,
                            _0x3bd3c9 = _0x3b8490();
                        this['bl'] = null, this['cl'] = [], this['dl'] = {}, this['el'] = new _0x238264(_0x1f1c22), _0x446d69[_0x5c22f1(0x3f7)](function() {
                            _0x3bd3c9['r']['Cd'](), _0x58a2f3['fl']();
                        }), _0x1f0ad4[_0x5c22f1(0x3f7)](function() {
                            _0x3bd3c9['r']['Cd'](), _0x58a2f3['bl']['gl']();
                        }), _0x409b8b[_0x5c22f1(0x3f7)](function() {
                            _0x3bd3c9['r']['Cd'](), _0x58a2f3['bl']['hl']();
                        });
                    });
                _0x48e0e8[_0x23bf80(0x6f4)]['a'] = function() {
                    var _0x29a14b = _0x23bf80;
                    _0x48e0e8[_0x29a14b(0x852)]['prototype']['a'][_0x29a14b(0x371)](this);
                    var _0x29eb77 = this,
                        _0x5e045e = _0x3b8490();
                    _0x5e045e['p']['ca'](function() {
                        var _0x271b01 = _0x29a14b,
                            _0x14fc06 = _0x5e045e['p']['Ac']();
                        if (null != _0x14fc06) {
                            _0x29eb77['cl'] = [];
                            for (var _0x4ab6de = 0x0; _0x4ab6de < _0x14fc06[_0x271b01(0x2b3)]['length']; _0x4ab6de++) _0x29eb77['cl'][_0x271b01(0x236)](new _0x1e68d2(_0x29eb77, _0x14fc06[_0x271b01(0x2b3)][_0x4ab6de]));
                            _0x29eb77['dl'] = {};
                            for (var _0x5b144d = 0x0; _0x5b144d < _0x14fc06[_0x271b01(0x4fe)][_0x271b01(0x30a)]; _0x5b144d++) {
                                var _0x4b7c5e = _0x14fc06[_0x271b01(0x4fe)][_0x5b144d];
                                _0x29eb77['dl'][_0x4b7c5e['id']] = _0x4b7c5e;
                            }
                        }
                    }), this['il'](!0x1), _0x5e045e['t']['xh'](function() {
                        _0x29eb77['il'](!0x1);
                    });
                }, _0x48e0e8[_0x23bf80(0x6f4)]['Rk'] = function() {
                    var _0x2c35b9 = _0x23bf80;
                    _0x3d3eef['Fk']['stop'](), _0x3d3eef['Fk']['fadeOut'](0x32), _0x3d3eef['Gk'][_0x2c35b9(0x709)](), _0x3d3eef['Gk']['fadeOut'](0x32), _0x3d3eef['Hk']['stop'](), _0x3d3eef['Hk'][_0x2c35b9(0x6e2)](0x32), _0x3d3eef['Jk'][_0x2c35b9(0x709)](), _0x3d3eef['Jk'][_0x2c35b9(0x6e2)](0x32), _0x3d3eef['Ik'][_0x2c35b9(0x709)](), _0x3d3eef['Ik'][_0x2c35b9(0x6e2)](0x32), _0x3d3eef['Kk'][_0x2c35b9(0x709)](), _0x3d3eef['Kk'][_0x2c35b9(0x7e5)](0xc8), _0x3d3eef['Lk'][_0x2c35b9(0x709)](), _0x3d3eef['Lk'][_0x2c35b9(0x6e2)](0x32), _0x3d3eef['Mk']['stop'](), _0x3d3eef['Mk'][_0x2c35b9(0x6e2)](0x32), _0x3d3eef[_0x2c35b9(0x7bf)][_0x2c35b9(0x709)](), _0x3d3eef[_0x2c35b9(0x7bf)][_0x2c35b9(0x6e2)](0x32), _0x3d3eef['Nk'][_0x2c35b9(0x709)](), _0x3d3eef['Nk'][_0x2c35b9(0x6e2)](0x32), _0x3d3eef['Ok']['stop'](), _0x3d3eef['Ok'][_0x2c35b9(0x6e2)](0x32);
                }, _0x48e0e8[_0x23bf80(0x6f4)]['ji'] = function() {
                    _0x3b8490()['r']['Dd'](), this['jl'](), this['el']['Le'](!0x0);
                }, _0x48e0e8[_0x23bf80(0x6f4)]['ei'] = function() {
                    this['el']['Le'](!0x1);
                }, _0x48e0e8[_0x23bf80(0x6f4)]['Ra'] = function() {
                    this['el']['Ra']();
                }, _0x48e0e8['prototype']['Pa'] = function(_0x2e9102, _0x272c0a) {
                    this['el']['Pa']();
                }, _0x48e0e8['prototype']['jl'] = function() {
                    var _0x1c2cf4 = _0x23bf80,
                        _0x5be8bc = this,
                        _0x54780f = this,
                        _0x461deb = _0x3b8490();
                    _0x367100[_0x1c2cf4(0x332)]();
                    for (var _0x5d473a = 0x0; _0x5d473a < this['cl'][_0x1c2cf4(0x30a)]; _0x5d473a++) ! function(_0x2570af) {
                        var _0x329a2f = _0x1c2cf4,
                            _0x50ae5c = _0x5be8bc['cl'][_0x2570af],
                            _0x39a4f8 = document[_0x329a2f(0x76b)]('li');
                        _0x367100['append'](_0x39a4f8);
                        var _0x5359a3 = $(_0x39a4f8);
                        _0x5359a3[_0x329a2f(0x5f0)](_0x50ae5c['kl']()), _0x5359a3['click'](function() {
                            _0x461deb['r']['Cd'](), _0x54780f['ll'](_0x50ae5c);
                        }), _0x50ae5c['ml'] = _0x5359a3;
                    }(_0x5d473a);
                    if (this['cl'][_0x1c2cf4(0x30a)] > 0x0) {
                        for (var _0x20fc93 = _0x461deb['t']['ha'](_0x5e05ff['ia']), _0x5d473a = 0x0; _0x5d473a < this['cl'][_0x1c2cf4(0x30a)]; _0x5d473a++)
                            for (var _0x1c2d63 = this['cl'][_0x5d473a], _0x850ef4 = _0x1c2d63['nl'][_0x1c2cf4(0x675)], _0x5952cf = 0x0; _0x5952cf < _0x850ef4[_0x1c2cf4(0x30a)]; _0x5952cf++)
                                if (_0x850ef4[_0x5952cf] == _0x20fc93) return _0x1c2d63['ol'] = _0x5952cf, void this['ll'](_0x1c2d63);
                        this['ll'](this['cl'][0x0]);
                    }
                }, _0x48e0e8['prototype']['ll'] = function(_0x16993b) {
                    var _0x3eff8f = _0x23bf80;
                    if (this['bl'] != _0x16993b) {
                        var _0x36b591 = _0x3b8490();
                        if (this['bl'] = _0x16993b, _0x367100['children']()[_0x3eff8f(0x29c)](_0x3eff8f(0x2ac)), this['bl']['ml'] && this['bl']['ml'][_0x3eff8f(0x4c6)]('pressed'), _0x511c52[_0x3eff8f(0x5f0)](''), null != _0x16993b['nl']) {
                            var _0x2f65ad = _0x36b591['p']['Ac']()[_0x3eff8f(0x7e3)][_0x16993b['nl'][_0x3eff8f(0x1f2)]];
                            null != _0x2f65ad && _0x511c52[_0x3eff8f(0x5f0)](_0x277c18(_0x5080eb(_0x2f65ad)));
                        }
                        this['il'](!0x0);
                    }
                }, _0x48e0e8['prototype']['pl'] = function() {
                    return null == this['bl'] ? _0x4f20e1['Yg']() : this['bl']['ql']();
                }, _0x48e0e8[_0x23bf80(0x6f4)]['fl'] = function() {
                    var _0x527f22 = this;
                    this['pl']()['ah'](function(_0x4cc823) {
                        _0x527f22['rl'](_0x4cc823);
                    });
                }, _0x48e0e8[_0x23bf80(0x6f4)]['rl'] = function(_0x1f30b9) {
                    var _0x36f2ee = this,
                        _0x2de9dd = _0x3b8490(),
                        _0x2d1294 = this['dl'][_0x1f30b9]['price'];
                    if (!(_0x2de9dd['u']['zi']() < _0x2d1294)) {
                        this['Sk']();
                        var _0x31dba0 = _0x2de9dd['t']['ha'](_0x5e05ff['ia']),
                            _0x5137ac = _0x2de9dd['t']['ha'](_0x5e05ff['ja']),
                            _0x5b9e03 = _0x2de9dd['t']['ha'](_0x5e05ff['ka']),
                            _0x1055d3 = _0x2de9dd['t']['ha'](_0x5e05ff['la']),
                            _0x2d3f95 = _0x2de9dd['t']['ha'](_0x5e05ff['ma']);
                        _0x2de9dd['u']['Ui'](_0x1f30b9, _0x5e05ff['ia'], function() {
                            _0x2de9dd['t']['Bh'](_0x31dba0, _0x5e05ff['ia']), _0x2de9dd['t']['Bh'](_0x5137ac, _0x5e05ff['ja']), _0x2de9dd['t']['Bh'](_0x5b9e03, _0x5e05ff['ka']), _0x2de9dd['t']['Bh'](_0x1055d3, _0x5e05ff['la']), _0x2de9dd['t']['Bh'](_0x2d3f95, _0x5e05ff['ma']), _0x2de9dd['u']['Ch'](_0x1f30b9, _0x5e05ff['ia']) && _0x2de9dd['t']['Bh'](_0x1f30b9, _0x5e05ff['ia']), _0x36f2ee['Qk']();
                        });
                    }
                }, _0x48e0e8[_0x23bf80(0x6f4)]['il'] = function(_0x2f043b) {
                    var _0x59cefd = _0x23bf80,
                        _0x547dfd = _0x3b8490();
                    this['el']['bk'](_0x547dfd['t']['ha'](_0x5e05ff['ja']), !0x1, !0x1), this['el']['ck'](_0x547dfd['t']['ha'](_0x5e05ff['ka']), !0x1, !0x1), this['el']['dk'](_0x547dfd['t']['ha'](_0x5e05ff['la']), !0x1, !0x1), this['el']['ek'](_0x547dfd['t']['ha'](_0x5e05ff['ma']), !0x1, !0x1);
                    var _0x3f9e40 = this['pl']();
                    if (_0x3f9e40['_g']()) {
                        var _0x18ede8 = _0x3f9e40['$g'](),
                            _0x50cb87 = this['dl'][_0x18ede8],
                            _0x56e49e = ![];
                        if (_0x547dfd['t']['Ja'](_0x18ede8, _0x5e05ff['ia'])) _0x2f3aae[_0x59cefd(0x26a)](), _0x446d69[_0x59cefd(0x26a)]();
                        else {
                            if (null == _0x50cb87 || 0x1 == _0x50cb87['nonbuyable']) {
                                _0x56e49e = !![], _0x2f3aae['show'](), _0x446d69['hide'](), _0x5a3930[_0x59cefd(0x32d)](_0x34e632(_0x59cefd(0x381)));
                                if (null != _0x50cb87 && _0x50cb87['nonbuyable'] && null != _0x50cb87[_0x59cefd(0x7b7)]) {
                                    var _0x3546e7 = _0x547dfd['p']['Ac']()[_0x59cefd(0x7e3)][_0x50cb87[_0x59cefd(0x7b7)]];
                                    null != _0x3546e7 && _0x5a3930[_0x59cefd(0x32d)](_0x5080eb(_0x3546e7));
                                }
                            } else _0x2f3aae[_0x59cefd(0x26a)](), _0x446d69[_0x59cefd(0x392)](), _0x20ede4[_0x59cefd(0x5f0)](_0x50cb87[_0x59cefd(0x3af)]);
                        }
                        _0x5d55e6[_0x59cefd(0x5f0)](_0x59cefd(0x48d) + _0x18ede8 + '\x20TYPE:\x20' + _0x5e05ff['ia']);
                        if (null != _0x50cb87 && null != _0x50cb87[_0x59cefd(0x1f2)]) {
                            var _0x4d134d = _0x547dfd['p']['Ac']()[_0x59cefd(0x7e3)][_0x50cb87[_0x59cefd(0x1f2)]];
                            null != _0x4d134d && _0x5d55e6[_0x59cefd(0x5f0)](_0x277c18(_0x5080eb(_0x4d134d)));
                        }
                        this['el']['ak'](_0x18ede8, !![], _0x56e49e), _0x2f043b && _0x547dfd['t']['Bh'](_0x18ede8, _0x5e05ff['ia']);
                    }
                };
                var _0x1e68d2 = (function() {
                    var _0x28839a = _0x23bf80;

                    function _0x38e953(_0x7c2fab, _0x404ba9) {
                        this['sl'] = _0x7c2fab, this['ol'] = 0x0, this['nl'] = _0x404ba9;
                    }
                    return _0x38e953[_0x28839a(0x6f4)]['gl'] = function() {
                        var _0x4b1097 = _0x28839a;
                        --this['ol'] < 0x0 && (this['ol'] = this['nl'][_0x4b1097(0x675)][_0x4b1097(0x30a)] - 0x1), this['sl']['il'](!0x0);
                    }, _0x38e953[_0x28839a(0x6f4)]['hl'] = function() {
                        var _0x4bed44 = _0x28839a;
                        ++this['ol'] >= this['nl'][_0x4bed44(0x675)][_0x4bed44(0x30a)] && (this['ol'] = 0x0), this['sl']['il'](!0x0);
                    }, _0x38e953[_0x28839a(0x6f4)]['kl'] = function() {
                        var _0x5767a6 = _0x28839a;
                        let _0x2da587 = _0x5080eb(this['nl']['name']);
                        return console[_0x5767a6(0x435)](this['nl']), this['nl'][_0x5767a6(0x783)] && (_0x2da587 = _0x5767a6(0x6b0) + this['nl'][_0x5767a6(0x783)] + '\x22\x20height=\x2243\x22\x20width=\x22180\x22\x20/>'), _0x2da587;
                    }, _0x38e953['prototype']['ql'] = function() {
                        var _0x3f9ad1 = _0x28839a;
                        return this['ol'] >= this['nl'][_0x3f9ad1(0x675)]['length'] ? _0x4f20e1['Yg']() : _0x4f20e1['Zg'](this['nl']['list'][this['ol']]);
                    }, _0x38e953;
                }());
                return _0x48e0e8;
            }()),
            _0x1ebef4 = (function() {
                var _0x55315e = _0xde0f64,
                    _0x32fed8 = $(_0x55315e(0x4f7)),
                    _0x4a70b1 = $('#store-go-skins-button'),
                    _0x416e62 = $(_0x55315e(0x494)),
                    _0x21ae1a = _0x39eae9(_0x3d3eef, function() {
                        var _0x525d9d = _0x55315e;
                        _0x3d3eef['call'](this, _0x34e632(_0x525d9d(0x519)), !0x0);
                        var _0x406561 = _0x3b8490();
                        _0x32fed8['click'](function() {
                            _0x406561['r']['Cd'](), _0x406561['s']['I'](_0x406561['s']['Wh']);
                        }), _0x4a70b1['click'](function() {
                            _0x406561['r']['Cd'](), _0x406561['s']['I'](_0x406561['s']['$h']);
                        }), _0x416e62[_0x525d9d(0x3f7)](function() {
                            _0x406561['r']['Cd'](), _0x406561['s']['I'](_0x406561['s']['ai']);
                        });
                    });
                return _0x21ae1a[_0x55315e(0x6f4)]['a'] = function() {
                    var _0x410013 = _0x55315e;
                    _0x21ae1a[_0x410013(0x852)][_0x410013(0x6f4)]['a'][_0x410013(0x371)](this);
                }, _0x21ae1a['prototype']['Rk'] = function() {
                    var _0x37ecf8 = _0x55315e;
                    _0x3d3eef['Fk'][_0x37ecf8(0x709)](), _0x3d3eef['Fk']['fadeOut'](0x32), _0x3d3eef['Gk'][_0x37ecf8(0x709)](), _0x3d3eef['Gk'][_0x37ecf8(0x6e2)](0x32), _0x3d3eef['Hk'][_0x37ecf8(0x709)](), _0x3d3eef['Hk']['fadeOut'](0x32), _0x3d3eef['Jk'][_0x37ecf8(0x709)](), _0x3d3eef['Jk'][_0x37ecf8(0x6e2)](0x32), _0x3d3eef['Ik'][_0x37ecf8(0x709)](), _0x3d3eef['Ik']['fadeOut'](0x32), _0x3d3eef['Kk'][_0x37ecf8(0x709)](), _0x3d3eef['Kk'][_0x37ecf8(0x6e2)](0x32), _0x3d3eef['Lk'][_0x37ecf8(0x709)](), _0x3d3eef['Lk']['fadeIn'](0xc8), _0x3d3eef['Mk'][_0x37ecf8(0x709)](), _0x3d3eef['Mk']['fadeOut'](0x32), _0x3d3eef[_0x37ecf8(0x7bf)]['stop'](), _0x3d3eef[_0x37ecf8(0x7bf)][_0x37ecf8(0x6e2)](0x32), _0x3d3eef['Nk'][_0x37ecf8(0x709)](), _0x3d3eef['Nk'][_0x37ecf8(0x6e2)](0x32), _0x3d3eef['Ok'][_0x37ecf8(0x709)](), _0x3d3eef['Ok'][_0x37ecf8(0x6e2)](0x32);
                }, _0x21ae1a[_0x55315e(0x6f4)]['ji'] = function() {
                    _0x3b8490()['r']['Dd']();
                }, _0x21ae1a;
            }()),
            _0x401bf4 = (function() {
                var _0x3c2b58 = _0xde0f64,
                    _0xbb671f = $(_0x3c2b58(0x817)),
                    _0x28f6a8 = _0x39eae9(_0x3d3eef, function() {
                        var _0x299021 = _0x3c2b58;
                        _0x3d3eef[_0x299021(0x371)](this, _0x299021(0x390), 0x0);
                    });
                return _0x28f6a8[_0x3c2b58(0x6f4)]['a'] = function() {
                    var _0x27c0f0 = _0x3c2b58;
                    _0x28f6a8[_0x27c0f0(0x852)]['prototype']['a']['call'](this);
                }, _0x28f6a8[_0x3c2b58(0x6f4)]['Rk'] = function() {
                    var _0x31a562 = _0x3c2b58;
                    _0x3d3eef['Fk']['stop'](), _0x3d3eef['Fk'][_0x31a562(0x6e2)](0x32), _0x3d3eef['Gk'][_0x31a562(0x709)](), _0x3d3eef['Gk'][_0x31a562(0x6e2)](0x32), _0x3d3eef['Hk'][_0x31a562(0x709)](), _0x3d3eef['Hk'][_0x31a562(0x6e2)](0x32), _0x3d3eef['Jk'][_0x31a562(0x709)](), _0x3d3eef['Jk'][_0x31a562(0x6e2)](0x32), _0x3d3eef['Kk'][_0x31a562(0x709)](), _0x3d3eef['Kk']['fadeOut'](0x32), _0x3d3eef['Lk'][_0x31a562(0x709)](), _0x3d3eef['Lk']['fadeOut'](0x32), _0x3d3eef['Mk'][_0x31a562(0x709)](), _0x3d3eef['Mk'][_0x31a562(0x6e2)](0x32), _0x3d3eef['Nk'][_0x31a562(0x709)](), _0x3d3eef['Nk'][_0x31a562(0x6e2)](0x32), _0x3d3eef['Ok'][_0x31a562(0x709)](), _0x3d3eef['Ok']['fadeOut'](0x32), _0x3d3eef['zwset']['stop'](), _0x3d3eef[_0x31a562(0x7bf)]['fadeIn'](0xc8);
                }, _0x28f6a8[_0x3c2b58(0x6f4)]['ji'] = function() {
                    var _0x156b41 = _0x3b8490();
                    _0x156b41['r']['Dd']();
                }, _0x28f6a8;
            }()),
            _0x367344 = (function() {
                var _0x535c50 = _0xde0f64,
                    _0x4d3545 = $('#wear-view-canv'),
                    _0x1376d6 = $('#wear-description-text'),
                    _0x5a3c53 = $(_0x535c50(0x446)),
                    _0x11007d = $(_0x535c50(0x73f)),
                    _0xaa01bf = $('#wear-buy-button'),
                    _0x3047bb = $(_0x535c50(0x45d)),
                    _0x513866 = $('#wear-eyes-button'),
                    _0x1092e1 = $(_0x535c50(0x37e)),
                    _0x3b5cae = $(_0x535c50(0x242)),
                    _0x344298 = $(_0x535c50(0x2e9)),
                    _0x3b992d = $(_0x535c50(0x213)),
                    _0x332239 = $('#wear-view-prev'),
                    _0x56832b = $(_0x535c50(0x602)),
                    _0x414719 = _0x39eae9(_0x3d3eef, function() {
                        var _0xab85f3 = _0x535c50,
                            _0x2be787 = this;
                        _0x3d3eef[_0xab85f3(0x371)](this, _0x34e632(_0xab85f3(0x247)), !0x0);
                        var _0x38cbca = _0x3b8490(),
                            _0x14ef24 = this;
                        this['tl'] = [], this['ja'] = new _0x4b8d22(this, _0x5e05ff['ja'], _0x513866), this['ka'] = new _0x4b8d22(this, _0x5e05ff['ka'], _0x1092e1), this['la'] = new _0x4b8d22(this, _0x5e05ff['la'], _0x3b5cae), this['ma'] = new _0x4b8d22(this, _0x5e05ff['ma'], _0x344298), this['ul'] = null, this['vl'] = null, this['wl'] = null, this['xl'] = null, this['yl'] = null, this['zl'] = null, this['Al'] = new _0x238264(_0x4d3545), _0xaa01bf[_0xab85f3(0x3f7)](function() {
                            _0x38cbca['r']['Cd'](), _0x14ef24['Bl']();
                        }), _0x332239[_0xab85f3(0x3f7)](function() {
                            _0x38cbca['r']['Cd'](), _0x14ef24['ul']['Cl']();
                        }), _0x56832b[_0xab85f3(0x3f7)](function() {
                            _0x38cbca['r']['Cd'](), _0x14ef24['ul']['Dl']();
                        }), _0x513866['click'](function() {
                            _0x38cbca['r']['Cd'](), _0x14ef24['El'](_0x2be787['ja']);
                        }), _0x1092e1['click'](function() {
                            _0x38cbca['r']['Cd'](), _0x14ef24['El'](_0x2be787['ka']);
                        }), _0x3b5cae[_0xab85f3(0x3f7)](function() {
                            _0x38cbca['r']['Cd'](), _0x14ef24['El'](_0x2be787['la']);
                        }), _0x344298[_0xab85f3(0x3f7)](function() {
                            _0x38cbca['r']['Cd'](), _0x14ef24['El'](_0x2be787['ma']);
                        }), this['tl'][_0xab85f3(0x236)](this['ja']), this['tl'][_0xab85f3(0x236)](this['ka']), this['tl'][_0xab85f3(0x236)](this['la']), this['tl']['push'](this['ma']);
                    });
                _0x414719['prototype']['a'] = function() {
                    var _0x517760 = _0x535c50;
                    _0x414719[_0x517760(0x852)][_0x517760(0x6f4)]['a'][_0x517760(0x371)](this);
                    var _0x27f8bf = _0x3b8490(),
                        _0x4eba6a = this;
                    _0x27f8bf['p']['ca'](function() {
                        var _0x2860ed = _0x517760,
                            _0x152e07 = _0x27f8bf['p']['Ac']();
                        null != _0x152e07 && (_0x4eba6a['vl'] = _0x152e07[_0x2860ed(0x5f9)], _0x4eba6a['wl'] = _0x152e07['mouthDict'], _0x4eba6a['xl'] = _0x152e07['glassesDict'], _0x4eba6a['yl'] = _0x152e07[_0x2860ed(0x724)], _0x4eba6a['zl'] = _0x152e07[_0x2860ed(0x226)], _0x4eba6a['ja']['Fl'](_0x152e07[_0x2860ed(0x21f)]), _0x4eba6a['ja']['Gl'](_0x4eba6a['vl']), _0x4eba6a['ka']['Fl'](_0x152e07[_0x2860ed(0x24b)]), _0x4eba6a['ka']['Gl'](_0x4eba6a['wl']), _0x4eba6a['la']['Fl'](_0x152e07[_0x2860ed(0x430)]), _0x4eba6a['la']['Gl'](_0x4eba6a['xl']), _0x4eba6a['ma']['Fl'](_0x152e07['hatVariantArray']), _0x4eba6a['ma']['Gl'](_0x4eba6a['yl']));
                    }), this['il'](!0x1), _0x27f8bf['t']['xh'](function() {
                        _0x4eba6a['il'](!0x1);
                    });
                }, _0x414719[_0x535c50(0x6f4)]['Rk'] = function() {
                    var _0x3e4991 = _0x535c50;
                    _0x3d3eef['Fk'][_0x3e4991(0x709)](), _0x3d3eef['Fk'][_0x3e4991(0x6e2)](0x32), _0x3d3eef['Gk'][_0x3e4991(0x709)](), _0x3d3eef['Gk'][_0x3e4991(0x6e2)](0x32), _0x3d3eef['Hk'][_0x3e4991(0x709)](), _0x3d3eef['Hk'][_0x3e4991(0x6e2)](0x32), _0x3d3eef['Jk']['stop'](), _0x3d3eef['Jk'][_0x3e4991(0x6e2)](0x32), _0x3d3eef['Ik'][_0x3e4991(0x709)](), _0x3d3eef['Ik'][_0x3e4991(0x6e2)](0x32), _0x3d3eef['Kk'][_0x3e4991(0x709)](), _0x3d3eef['Kk']['fadeOut'](0x32), _0x3d3eef['Lk'][_0x3e4991(0x709)](), _0x3d3eef['Lk'][_0x3e4991(0x6e2)](0x32), _0x3d3eef['Mk']['stop'](), _0x3d3eef['Mk']['fadeIn'](0xc8), _0x3d3eef[_0x3e4991(0x7bf)]['stop'](), _0x3d3eef[_0x3e4991(0x7bf)][_0x3e4991(0x6e2)](0x32), _0x3d3eef['Nk']['stop'](), _0x3d3eef['Nk'][_0x3e4991(0x6e2)](0x32), _0x3d3eef['Ok'][_0x3e4991(0x709)](), _0x3d3eef['Ok'][_0x3e4991(0x6e2)](0x32);
                }, _0x414719[_0x535c50(0x6f4)]['ji'] = function() {
                    _0x3b8490()['r']['Dd'](), this['El'](null != this['ul'] ? this['ul'] : this['ja']), this['Al']['Le'](!0x0);
                }, _0x414719[_0x535c50(0x6f4)]['ei'] = function() {
                    this['Al']['Le'](!0x1);
                }, _0x414719[_0x535c50(0x6f4)]['Ra'] = function() {
                    this['Al']['Ra']();
                }, _0x414719[_0x535c50(0x6f4)]['Pa'] = function(_0x1e13dd, _0x23348d) {
                    this['Al']['Pa']();
                }, _0x414719['prototype']['El'] = function(_0x437348) {
                    var _0x5b50bb = _0x535c50;
                    this['ul'] = _0x437348;
                    for (var _0x540ab0 = 0x0; _0x540ab0 < this['tl']['length']; _0x540ab0++) this['tl'][_0x540ab0]['Xk'][_0x5b50bb(0x29c)](_0x5b50bb(0x2ac));
                    this['ul']['Xk'][_0x5b50bb(0x4c6)](_0x5b50bb(0x2ac)), this['ul']['ii']();
                }, _0x414719[_0x535c50(0x6f4)]['Hl'] = function() {
                    return null == this['ul'] ? _0x4f20e1['Yg']() : _0x4f20e1['Zg']({
                        'Lb': this['ul']['ql'](),
                        'rc': this['ul']['rc']
                    });
                }, _0x414719[_0x535c50(0x6f4)]['Bl'] = function() {
                    var _0x506930 = this;
                    this['Hl']()['ah'](function(_0x3ac17b) {
                        _0x506930['Ui'](_0x3ac17b['Lb'], _0x3ac17b['rc']);
                    });
                }, _0x414719[_0x535c50(0x6f4)]['Ui'] = function(_0x259d92, _0xf12dfa) {
                    var _0x425937 = _0x535c50,
                        _0xb62fcb = this,
                        _0x580a2b = _0x3b8490(),
                        _0x1ef9e4 = void 0x0;
                    switch (_0xf12dfa) {
                        case _0x5e05ff['ja']:
                            _0x1ef9e4 = this['vl'][_0x259d92][_0x425937(0x3af)];
                            break;
                        case _0x5e05ff['ka']:
                            _0x1ef9e4 = this['wl'][_0x259d92]['price'];
                            break;
                        case _0x5e05ff['la']:
                            _0x1ef9e4 = this['xl'][_0x259d92][_0x425937(0x3af)];
                            break;
                        case _0x5e05ff['ma']:
                            _0x1ef9e4 = this['yl'][_0x259d92][_0x425937(0x3af)];
                            break;
                        default:
                            return;
                    }
                    if (!(_0x580a2b['u']['zi']() < _0x1ef9e4)) {
                        this['Sk']();
                        var _0x1762ff = _0x580a2b['t']['ha'](_0x5e05ff['ia']),
                            _0x4cf114 = _0x580a2b['t']['ha'](_0x5e05ff['ja']),
                            _0x5a3a98 = _0x580a2b['t']['ha'](_0x5e05ff['ka']),
                            _0x4c9e0b = _0x580a2b['t']['ha'](_0x5e05ff['la']),
                            _0x4b8170 = _0x580a2b['t']['ha'](_0x5e05ff['ma']);
                        _0x580a2b['u']['Ui'](_0x259d92, _0xf12dfa, function() {
                            _0x580a2b['t']['Bh'](_0x1762ff, _0x5e05ff['ia']), _0x580a2b['t']['Bh'](_0x4cf114, _0x5e05ff['ja']), _0x580a2b['t']['Bh'](_0x5a3a98, _0x5e05ff['ka']), _0x580a2b['t']['Bh'](_0x4c9e0b, _0x5e05ff['la']), _0x580a2b['t']['Bh'](_0x4b8170, _0x5e05ff['ma']), _0x580a2b['u']['Ch'](_0x259d92, _0xf12dfa) && _0x580a2b['t']['Bh'](_0x259d92, _0xf12dfa), _0xb62fcb['Qk']();
                        });
                    }
                }, _0x414719[_0x535c50(0x6f4)]['Il'] = function(_0x9da4d2, _0x1e4429) {
                    switch (_0x1e4429) {
                        case _0x5e05ff['ja']:
                            return this['vl'][_0x9da4d2];
                        case _0x5e05ff['ka']:
                            return this['wl'][_0x9da4d2];
                        case _0x5e05ff['la']:
                            return this['xl'][_0x9da4d2];
                        case _0x5e05ff['ma']:
                            return this['yl'][_0x9da4d2];
                    }
                    return null;
                }, _0x414719[_0x535c50(0x6f4)]['il'] = function(_0x5c94cf) {
                    var _0x382b14 = _0x535c50,
                        _0x59bc0b = _0x3b8490();
                    this['Al']['ak'](_0x59bc0b['t']['ha'](_0x5e05ff['ia']), !0x1, !0x1), this['Al']['bk'](_0x59bc0b['t']['ha'](_0x5e05ff['ja']), !0x1, !0x1), this['Al']['ck'](_0x59bc0b['t']['ha'](_0x5e05ff['ka']), !0x1, !0x1), this['Al']['dk'](_0x59bc0b['t']['ha'](_0x5e05ff['la']), !0x1, !0x1), this['Al']['ek'](_0x59bc0b['t']['ha'](_0x5e05ff['ma']), !0x1, !0x1);
                    var _0x3bff7e = this['Hl']();
                    if (_0x3bff7e['_g']()) {
                        var _0x15e7b1 = _0x3bff7e['$g'](),
                            _0x2360ef = this['Il'](_0x15e7b1['Lb'], _0x15e7b1['rc']),
                            _0x59ec83 = ![];
                        if (_0x59bc0b['t']['Ja'](_0x15e7b1['Lb'], _0x15e7b1['rc'])) _0x5a3c53['hide'](), _0xaa01bf['hide']();
                        else {
                            if (null == _0x2360ef || 0x1 == _0x2360ef[_0x382b14(0x4ff)]) {
                                _0x59ec83 = !![], _0x5a3c53[_0x382b14(0x392)](), _0xaa01bf['hide'](), _0x11007d[_0x382b14(0x32d)](_0x34e632(_0x382b14(0x381)));
                                if (null != _0x2360ef && _0x2360ef['nonbuyable'] && null != _0x2360ef[_0x382b14(0x7b7)]) {
                                    var _0x2e72f0 = _0x59bc0b['p']['Ac']()[_0x382b14(0x7e3)][_0x2360ef[_0x382b14(0x7b7)]];
                                    null != _0x2e72f0 && _0x11007d[_0x382b14(0x32d)](_0x5080eb(_0x2e72f0));
                                }
                            } else _0x5a3c53[_0x382b14(0x26a)](), _0xaa01bf[_0x382b14(0x392)](), _0x3047bb['html'](_0x2360ef[_0x382b14(0x3af)]);
                        }
                        _0x1376d6[_0x382b14(0x5f0)](_0x382b14(0x48d) + _0x15e7b1['Lb']);
                        if (null != _0x2360ef && null != _0x2360ef[_0x382b14(0x1f2)]) {
                            var _0xf84c0 = _0x59bc0b['p']['Ac']()[_0x382b14(0x7e3)][_0x2360ef[_0x382b14(0x1f2)]];
                            null != _0xf84c0 && _0x1376d6[_0x382b14(0x5f0)](_0x277c18(_0x5080eb(_0xf84c0)));
                        }
                        switch (_0x15e7b1['rc']) {
                            case _0x5e05ff['ja']:
                                this['Al']['bk'](_0x15e7b1['Lb'], !![], _0x59ec83);
                                break;
                            case _0x5e05ff['ka']:
                                this['Al']['ck'](_0x15e7b1['Lb'], !![], _0x59ec83);
                                break;
                            case _0x5e05ff['la']:
                                this['Al']['dk'](_0x15e7b1['Lb'], !![], _0x59ec83);
                                break;
                            case _0x5e05ff['ma']:
                                this['Al']['ek'](_0x15e7b1['Lb'], !![], _0x59ec83);
                                break;
                        }
                        _0x5c94cf && _0x59bc0b['t']['Bh'](_0x15e7b1['Lb'], _0x15e7b1['rc']);
                    }
                };
                var _0x4b8d22 = (function() {
                    var _0x32fe68 = _0x535c50;

                    function _0x367277(_0x45419b, _0x189a4a, _0x57ef19) {
                        this['sl'] = _0x45419b, this['rc'] = _0x189a4a, this['Xk'] = _0x57ef19, this['Jl'] = {}, this['Kl'] = [
                            []
                        ], this['Ll'] = -0xa, this['Ml'] = -0xa;
                    }
                    return _0x367277['prototype']['Fl'] = function(_0x2bb932) {
                        this['Kl'] = _0x2bb932;
                    }, _0x367277[_0x32fe68(0x6f4)]['Gl'] = function(_0x333ffa) {
                        this['Jl'] = _0x333ffa;
                    }, _0x367277[_0x32fe68(0x6f4)]['ii'] = function() {
                        for (var _0xd7112d = _0x3b8490(), _0x3e45d0 = _0xd7112d['t']['ha'](this['rc']), _0x247714 = 0x0; _0x247714 < this['Kl']['length']; _0x247714++)
                            for (var _0x14f60d = 0x0; _0x14f60d < this['Kl'][_0x247714]['length']; _0x14f60d++)
                                if (this['Kl'][_0x247714][_0x14f60d] == _0x3e45d0) return this['Nl'](_0x247714), void this['Ol'](_0x14f60d);
                        this['Nl'](0x0), this['Ol'](0x0);
                    }, _0x367277[_0x32fe68(0x6f4)]['Cl'] = function() {
                        var _0x5b70b = _0x32fe68,
                            _0xde417d = this['Ll'] - 0x1;
                        _0xde417d < 0x0 && (_0xde417d = this['Kl'][_0x5b70b(0x30a)] - 0x1), this['Nl'](_0xde417d), this['Ol'](this['Ml'] % this['Kl'][_0xde417d][_0x5b70b(0x30a)]);
                    }, _0x367277[_0x32fe68(0x6f4)]['Dl'] = function() {
                        var _0x512426 = _0x32fe68,
                            _0xa07dde = this['Ll'] + 0x1;
                        _0xa07dde >= this['Kl'][_0x512426(0x30a)] && (_0xa07dde = 0x0), this['Nl'](_0xa07dde), this['Ol'](this['Ml'] % this['Kl'][_0xa07dde]['length']);
                    }, _0x367277['prototype']['Nl'] = function(_0xa43a01) {
                        var _0x28dab8 = _0x32fe68,
                            _0x15340 = this;
                        if (!(_0xa43a01 < 0x0 || _0xa43a01 >= this['Kl'][_0x28dab8(0x30a)])) {
                            this['Ll'] = _0xa43a01, _0x3b992d['empty']();
                            var _0x2519a6 = this['Kl'][this['Ll']];
                            if (_0x2519a6[_0x28dab8(0x30a)] > 0x1) {
                                for (var _0x51c226 = 0x0; _0x51c226 < _0x2519a6['length']; _0x51c226++) ! function(_0x3f6b96) {
                                    var _0x164772 = _0x28dab8,
                                        _0x4cfbc7 = _0x2519a6[_0x3f6b96],
                                        _0x8146f3 = _0x15340['Jl'][_0x4cfbc7],
                                        _0x3d1d97 = '#' + _0x15340['sl']['zl'][_0x8146f3[_0x164772(0x62f)]],
                                        _0x5cff8d = $(_0x164772(0x67c) + _0x3d1d97 + _0x164772(0x750));
                                    _0x5cff8d[_0x164772(0x3f7)](function() {
                                        _0x3b8490()['r']['Cd'](), _0x15340['Ol'](_0x3f6b96);
                                    }), _0x3b992d[_0x164772(0x517)](_0x5cff8d);
                                }(_0x51c226);
                            }
                        }
                    }, _0x367277[_0x32fe68(0x6f4)]['Ol'] = function(_0x3f17bc) {
                        var _0x1e2c95 = _0x32fe68;
                        if (!(_0x3f17bc < 0x0 || _0x3f17bc >= this['Kl'][this['Ll']][_0x1e2c95(0x30a)])) {
                            this['Ml'] = _0x3f17bc, _0x3b992d[_0x1e2c95(0x77f)]()[_0x1e2c95(0x66a)](_0x1e2c95(0x36a), 'transparent');
                            var _0x40e766 = _0x3b992d[_0x1e2c95(0x77f)](_0x1e2c95(0x69c) + (0x1 + _0x3f17bc) + ')');
                            _0x40e766[_0x1e2c95(0x66a)]('background-color', _0x40e766[_0x1e2c95(0x66a)]('border-color')), this['sl']['il'](!0x0);
                        }
                    }, _0x367277[_0x32fe68(0x6f4)]['ql'] = function() {
                        return this['Kl'][this['Ll']][this['Ml']];
                    }, _0x367277;
                }());
                return _0x414719;
            }()),
            _0x244129 = (function() {
                var _0x2b548a = _0xde0f64,
                    _0x2e83cc = $(_0x2b548a(0x7a7)),
                    _0x5b7787 = $(_0x2b548a(0x780)),
                    _0x22ae9d = _0x39eae9(_0x3d3eef, function() {
                        var _0x17b444 = _0x2b548a;
                        _0x3d3eef['call'](this, _0x34e632(_0x17b444(0x45f)), !0x1);
                        var _0x305f2b = _0x3b8490();
                        _0x2e83cc[_0x17b444(0x3f7)](function() {
                            _0x305f2b['r']['Cd'](), _0x305f2b['Y']() ? (_0x305f2b['s']['I'](_0x305f2b['s']['F']), _0x305f2b['$'](!0x1, !0x0), _0x305f2b['s']['aa']['_'](new _0x25afc2())) : _0x305f2b['s']['gi']();
                        }), _0x5b7787[_0x17b444(0x3f7)](function() {
                            _0x305f2b['r']['Cd'](), _0x305f2b['s']['gi']();
                        });
                    });
                return _0x22ae9d[_0x2b548a(0x6f4)]['a'] = function() {
                    var _0x3b0f32 = _0x2b548a;
                    _0x22ae9d[_0x3b0f32(0x852)][_0x3b0f32(0x6f4)]['a'][_0x3b0f32(0x371)](this);
                }, _0x22ae9d['prototype']['Rk'] = function() {
                    var _0x3b2c29 = _0x2b548a;
                    _0x3d3eef['Fk'][_0x3b2c29(0x709)](), _0x3d3eef['Fk'][_0x3b2c29(0x6e2)](0x32), _0x3d3eef['Gk'][_0x3b2c29(0x709)](), _0x3d3eef['Gk'][_0x3b2c29(0x6e2)](0x32), _0x3d3eef['Hk'][_0x3b2c29(0x709)](), _0x3d3eef['Hk'][_0x3b2c29(0x6e2)](0x32), _0x3d3eef['Jk'][_0x3b2c29(0x709)](), _0x3d3eef['Jk']['fadeOut'](0x32), _0x3d3eef['Ik'][_0x3b2c29(0x709)](), _0x3d3eef['Ik'][_0x3b2c29(0x6e2)](0x32), _0x3d3eef['Kk'][_0x3b2c29(0x709)](), _0x3d3eef['Kk'][_0x3b2c29(0x6e2)](0x32), _0x3d3eef['Lk'][_0x3b2c29(0x709)](), _0x3d3eef['Lk'][_0x3b2c29(0x6e2)](0x32), _0x3d3eef['Mk'][_0x3b2c29(0x709)](), _0x3d3eef['Mk'][_0x3b2c29(0x6e2)](0x32), _0x3d3eef[_0x3b2c29(0x7bf)][_0x3b2c29(0x709)](), _0x3d3eef[_0x3b2c29(0x7bf)][_0x3b2c29(0x6e2)](0x32), _0x3d3eef['Nk'][_0x3b2c29(0x709)](), _0x3d3eef['Nk'][_0x3b2c29(0x7e5)](0xc8), _0x3d3eef['Ok'][_0x3b2c29(0x709)](), _0x3d3eef['Ok']['fadeOut'](0x32);
                }, _0x22ae9d['prototype']['ji'] = function() {
                    _0x3b8490()['r']['Dd']();
                }, _0x22ae9d;
            }()),
            _0x59489e = (function() {
                var _0x2fe512 = _0xde0f64,
                    _0x479095 = $(_0x2fe512(0x276)),
                    _0x3f5dce = $(_0x2fe512(0x2fd)),
                    _0xff48d9 = $(_0x2fe512(0x389)),
                    _0x58f203 = _0x39eae9(_0x3d3eef, function() {
                        var _0x34263f = _0x2fe512;
                        _0x3d3eef[_0x34263f(0x371)](this, _0x34e632(_0x34263f(0x7e7)), !0x1);
                        var _0x49f06f = _0x3b8490();
                        _0x3f5dce[_0x34263f(0x3f7)](function() {
                            _0x49f06f['r']['Cd'](), _0x49f06f['u']['P']() ? (_0x49f06f['u']['bj'](), _0x49f06f['u']['Wi']()) : _0x49f06f['s']['gi']();
                        }), _0xff48d9[_0x34263f(0x3f7)](function() {
                            _0x49f06f['r']['Cd'](), _0x49f06f['s']['gi']();
                        }), this['Pl'] = [];
                    });
                return _0x58f203['prototype']['a'] = function() {
                    var _0x4935c0 = _0x2fe512;
                    _0x58f203[_0x4935c0(0x852)]['prototype']['a']['call'](this);
                }, _0x58f203[_0x2fe512(0x6f4)]['Rk'] = function() {
                    var _0x43a56b = _0x2fe512;
                    _0x3d3eef['Fk'][_0x43a56b(0x709)](), _0x3d3eef['Fk'][_0x43a56b(0x6e2)](0x32), _0x3d3eef['Gk'][_0x43a56b(0x709)](), _0x3d3eef['Gk'][_0x43a56b(0x6e2)](0x32), _0x3d3eef['Hk'][_0x43a56b(0x709)](), _0x3d3eef['Hk'][_0x43a56b(0x6e2)](0x32), _0x3d3eef['Jk'][_0x43a56b(0x709)](), _0x3d3eef['Jk'][_0x43a56b(0x6e2)](0x32), _0x3d3eef['Ik'][_0x43a56b(0x709)](), _0x3d3eef['Ik'][_0x43a56b(0x6e2)](0x32), _0x3d3eef['Kk'][_0x43a56b(0x709)](), _0x3d3eef['Kk'][_0x43a56b(0x6e2)](0x32), _0x3d3eef['Lk'][_0x43a56b(0x709)](), _0x3d3eef['Lk'][_0x43a56b(0x6e2)](0x32), _0x3d3eef['Mk']['stop'](), _0x3d3eef['Mk'][_0x43a56b(0x6e2)](0x32), _0x3d3eef[_0x43a56b(0x7bf)][_0x43a56b(0x709)](), _0x3d3eef[_0x43a56b(0x7bf)][_0x43a56b(0x6e2)](0x32), _0x3d3eef['Nk'][_0x43a56b(0x709)](), _0x3d3eef['Nk']['fadeOut'](0x32), _0x3d3eef['Ok'][_0x43a56b(0x709)](), _0x3d3eef['Ok']['fadeIn'](0xc8);
                }, _0x58f203[_0x2fe512(0x6f4)]['ji'] = function() {
                    var _0x21d43b = _0x2fe512;
                    _0x3b8490()['r']['Hd'](), _0x3f5dce[_0x21d43b(0x709)](), _0x3f5dce[_0x21d43b(0x26a)](), _0x479095[_0x21d43b(0x709)](), _0x479095[_0x21d43b(0x392)](), _0x479095[_0x21d43b(0x32d)](_0x21d43b(0x711)), this['Ql'](), this['Rl'](function() {
                        var _0x11108b = _0x21d43b;
                        _0x479095[_0x11108b(0x32d)]('..\x209\x20..');
                    }, 0x3e8), this['Rl'](function() {
                        var _0x556723 = _0x21d43b;
                        _0x479095['text'](_0x556723(0x664));
                    }, 0x7d0), this['Rl'](function() {
                        var _0x5c7bf2 = _0x21d43b;
                        _0x479095[_0x5c7bf2(0x32d)]('..\x207\x20..');
                    }, 0xbb8), this['Rl'](function() {
                        var _0x3375ce = _0x21d43b;
                        _0x479095[_0x3375ce(0x32d)](_0x3375ce(0x2b2));
                    }, 0xfa0), this['Rl'](function() {
                        var _0x2c251a = _0x21d43b;
                        _0x479095[_0x2c251a(0x32d)](_0x2c251a(0x61e));
                    }, 0x1388), this['Rl'](function() {
                        var _0x5a75c8 = _0x21d43b;
                        _0x479095[_0x5a75c8(0x32d)](_0x5a75c8(0x482));
                    }, 0x1770), this['Rl'](function() {
                        var _0x15d00b = _0x21d43b;
                        _0x479095[_0x15d00b(0x32d)]('..\x203\x20..');
                    }, 0x1b58), this['Rl'](function() {
                        var _0x1656fa = _0x21d43b;
                        _0x479095['text'](_0x1656fa(0x634));
                    }, 0x1f40), this['Rl'](function() {
                        var _0x5b29dc = _0x21d43b;
                        _0x479095[_0x5b29dc(0x32d)](_0x5b29dc(0x30d));
                    }, 0x2328), this['Rl'](function() {
                        var _0x420116 = _0x21d43b;
                        _0x479095[_0x420116(0x26a)](), _0x3f5dce[_0x420116(0x7e5)](0x12c);
                    }, 0x2710);
                }, _0x58f203[_0x2fe512(0x6f4)]['Rl'] = function(_0x4ae513, _0x575e0f) {
                    var _0x48f4e4 = setTimeout(_0x4ae513, _0x575e0f);
                    this['Pl']['push'](_0x48f4e4);
                }, _0x58f203[_0x2fe512(0x6f4)]['Ql'] = function() {
                    for (var _0x4bf175 = 0x0; _0x4bf175 < this['Pl']['length']; _0x4bf175++) clearTimeout(this['Pl'][_0x4bf175]);
                    this['Pl'] = [];
                }, _0x58f203;
            }()),
            _0x36ec33 = (function() {
                var _0x4f543d = _0xde0f64;

                function _0x35fdf3() {
                    this['Ck'] = function() {};
                }
                return _0x35fdf3[_0x4f543d(0x6f4)]['Bk'] = function() {}, _0x35fdf3['prototype']['ji'] = function() {}, _0x35fdf3;
            }()),
            _0x2e8b79 = (function() {
                var _0x49960f = _0xde0f64,
                    _0x1d7767 = _0x39eae9(_0x36ec33, function(_0x70f513) {
                        var _0x2b41ae = _0x47fe;
                        _0x36ec33[_0x2b41ae(0x371)](this);
                        var _0x517891 = Date[_0x2b41ae(0x7bc)]() + '_' + Math['floor'](0x3e8 + 0x2327 * Math[_0x2b41ae(0x201)]());
                        this['Sl'] = $('<div\x20id=\x22' + _0x517891 + _0x2b41ae(0x43f) + _0x70f513 + _0x2b41ae(0x814) + _0x34e632(_0x2b41ae(0x58a)) + _0x2b41ae(0x712));
                        var _0x198989 = this;
                        this['Sl'][_0x2b41ae(0x3db)](_0x2b41ae(0x4e4))['click'](function() {
                            _0x3b8490()['r']['Cd'](), _0x198989['Ck']();
                        });
                    });
                return _0x1d7767[_0x49960f(0x6f4)]['Bk'] = function() {
                    return this['Sl'];
                }, _0x1d7767['prototype']['ji'] = function() {
                    _0x3b8490()['r']['Fd']();
                }, _0x1d7767;
            }()),
            _0x4dc516 = (function() {
                var _0x5ba077 = _0xde0f64,
                    _0x23e9e6 = _0x39eae9(_0x36ec33, function(_0x59c0c2) {
                        var _0x3d9920 = _0x47fe;
                        _0x36ec33[_0x3d9920(0x371)](this);
                        var _0x589967 = Date[_0x3d9920(0x7bc)]() + '_' + Math[_0x3d9920(0x391)](0x3e8 + 0x2327 * Math[_0x3d9920(0x201)]());
                        this['Sl'] = $('<div\x20id=\x22' + _0x589967 + '\x22\x20class=\x22toaster\x20toaster-levelup\x22>\x20\x20\x20\x20<img\x20class=\x22toaster-levelup-img\x22\x20alt=\x22Wormate\x20Level\x20Up\x20Star\x22\x20src=\x22/images/level-star.svg\x22\x20/>\x20\x20\x20\x20<div\x20class=\x22toaster-levelup-val\x22>' + _0x59c0c2 + _0x3d9920(0x5ed) + _0x34e632(_0x3d9920(0x81e)) + _0x3d9920(0x38e) + _0x34e632(_0x3d9920(0x58a)) + _0x3d9920(0x712));
                        var _0x3e4609 = this;
                        this['Sl'][_0x3d9920(0x3db)](_0x3d9920(0x677))[_0x3d9920(0x3f7)](function() {
                            _0x3b8490()['r']['Cd'](), _0x3e4609['Ck']();
                        });
                    });
                return _0x23e9e6[_0x5ba077(0x6f4)]['Bk'] = function() {
                    return this['Sl'];
                }, _0x23e9e6['prototype']['ji'] = function() {
                    _0x3b8490()['r']['Ed']();
                }, _0x23e9e6;
            }()),
            _0x25afc2 = (function() {
                var _0x3a214f = _0xde0f64,
                    _0x11cbca = _0x39eae9(_0x36ec33, function() {
                        var _0x17c699 = _0x47fe;
                        _0x36ec33[_0x17c699(0x371)](this);
                        var _0x1909e9 = this,
                            _0x1dc4a2 = _0x3b8490(),
                            _0x5940e6 = Date['now']() + '_' + Math[_0x17c699(0x391)](0x3e8 + 0x2327 * Math[_0x17c699(0x201)]());
                        this['Sl'] = $(_0x17c699(0x3f8) + _0x5940e6 + '\x22\x20class=\x22toaster\x20toaster-consent-accepted\x22>\x20\x20\x20\x20<img\x20class=\x22toaster-consent-accepted-logo\x22\x20src=\x22' + _0x18d1d4 + '\x22\x20alt=\x22Wormate.io\x20logo\x22/>\x20\x20\x20\x20<div\x20class=\x22toaster-consent-accepted-container\x22>\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toaster-consent-accepted-text\x22>' + _0x34e632(_0x17c699(0x558))[_0x17c699(0x836)]('\x20', '&nbsp;')['replaceAll']('\x0a', _0x17c699(0x6ba)) + _0x17c699(0x62b) + _0x34e632('index.game.toaster.consent.link') + _0x17c699(0x754) + _0x34e632(_0x17c699(0x433)) + '</div></div>'), this['Tl'] = this['Sl'][_0x17c699(0x3db)](_0x17c699(0x2a7)), this['Tl'][_0x17c699(0x26a)](), this['Tl'][_0x17c699(0x3f7)](function() {
                            _0x1dc4a2['r']['Cd'](), _0x1dc4a2['Y']() && _0x1dc4a2['$'](!0x0, !0x0), _0x1909e9['Ck']();
                        });
                    });
                return _0x11cbca[_0x3a214f(0x6f4)]['Bk'] = function() {
                    return this['Sl'];
                }, _0x11cbca[_0x3a214f(0x6f4)]['ji'] = function() {
                    var _0x50ffe4 = this,
                        _0x3115d3 = _0x3b8490();
                    _0x3115d3['Y']() && !_0x3115d3['Z']() ? (_0x3115d3['r']['Hd'](), setTimeout(function() {
                        var _0x4218b5 = _0x47fe;
                        _0x50ffe4['Tl'][_0x4218b5(0x7e5)](0x12c);
                    }, 0x7d0)) : setTimeout(function() {
                        _0x50ffe4['Ck']();
                    }, 0x0);
                }, _0x11cbca;
            }()),
            _0x2cdde1 = {};
        _0x2cdde1[_0xde0f64(0x51c)] = {
            'Ma': _0x3210f9(_0xde0f64(0x80b), atob(_0xde0f64(0x518))),
            'K': _0x3210f9(_0xde0f64(0x658), atob(_0xde0f64(0x6df))),
            'ra': _0x23912f(),
            'e': 0x4,
            'oa': !0x1,
            'qk': !0x0
        }, _0x2cdde1[_0xde0f64(0x4c5)] = {
            'Ma': _0x3210f9(_0xde0f64(0x80b), atob(_0xde0f64(0x518))),
            'K': _0x3210f9('ltmolilci1iurq1i', atob(_0xde0f64(0x6df))),
            'ra': _0x23912f(),
            'e': 0x4,
            'oa': !0x1,
            'qk': !0x1
        };
        var _0x16ed3d = _0x2cdde1[window[_0xde0f64(0x7f0)]];
        _0x16ed3d || (_0x16ed3d = _0x2cdde1[_0xde0f64(0x51c)]), $(function() {
            var _0x53b61c = _0xde0f64;
            FastClick[_0x53b61c(0x5a7)](document[_0x53b61c(0x7f3)]);
        }), addEventListener(_0xde0f64(0x289), function(_0x519fbe) {
            var _0x1912df = _0xde0f64;
            return _0x519fbe[_0x1912df(0x5dc)](), _0x519fbe[_0x1912df(0x778)](), !0x1;
        }), _0x5dd43c(_0xde0f64(0x461) + _0x2919d4 + _0xde0f64(0x2bd), _0xde0f64(0x699), function() {
            var _0x3c0466 = _0xde0f64;
            FB[_0x3c0466(0x7a4)]({
                'appId': atob(_0x3c0466(0x5e2)),
                'cookie': !0x0,
                'xfbml': !0x0,
                'status': !0x0,
                'version': _0x3c0466(0x6d6)
            });
        }), _0x5dd43c(_0xde0f64(0x2de), null, function() {
            var _0x3f7ac3 = _0xde0f64;
            gapi[_0x3f7ac3(0x4ce)](_0x3f7ac3(0x4a7), function() {
                var _0x29e766 = _0x3f7ac3;
                GoogleAuth = gapi[_0x29e766(0x4a7)][_0x29e766(0x7a4)]({
                    'client_id': atob(_0x29e766(0x4e1))
                });
            });
        }), _0xe6a4c3 = _0x3023df(), _0xe6a4c3['v'](), $(_0xde0f64(0x25f))['css'](_0xde0f64(0x7a3), _0xde0f64(0x27b)), theoKzObjects[_0xde0f64(0x25b)] = !![];
        var _0x9b0487 = obtenerImagenPorSeleccion(localStorage[_0xde0f64(0x3a1)](_0xde0f64(0x1f7)));
        _0x9b0487 && (anApp['q']['Cf'] = new PIXI[(_0xde0f64(0x259))](anApp['q'][_0xde0f64(0x328)](_0x9b0487)), console[_0xde0f64(0x435)](_0xde0f64(0x659), _0x9b0487));
        var _0xefd524 = function(_0x511430) {
            var _0x4e92ec = _0xde0f64;
            theoKzObjects['PropertyManager'] && (_0x511430[_0x4e92ec(0x79f)] = theoKzObjects[_0x4e92ec(0x62e)]['rh'], _0x511430['eyesId'] = theoKzObjects[_0x4e92ec(0x62e)]['sh'], _0x511430[_0x4e92ec(0x5f5)] = theoKzObjects['PropertyManager']['th'], _0x511430[_0x4e92ec(0x56e)] = theoKzObjects['PropertyManager']['uh'], _0x511430['hatId'] = theoKzObjects['PropertyManager']['vh']);
        };
        !Number['prototype'][_0xde0f64(0x310)] && (Number[_0xde0f64(0x6f4)]['dotFormat'] = function() {
            var _0x2465fb = _0xde0f64;
            return this[_0x2465fb(0x696)]()[_0x2465fb(0x4ae)](/\B(?=(\d{3})+(?!\d))/g, '.');
        });
        !Number['prototype']['customFormat'] && (Number[_0xde0f64(0x6f4)]['customFormat'] = function() {
            var _0x2834d0 = _0xde0f64;
            if (this >= 0xf4240) return (this / 0xf4240)['toFixed'](0x1) + _0x2834d0(0x6c6);
            else return this >= 0x186a0 ? (this / 0x3e8)[_0x2834d0(0x830)](0x0) + 'kðŸ¬' : this[_0x2834d0(0x310)]();
        });
        var _0x1652b9 = function _0x41d7a3() {
            requestAnimationFrame(_0x41d7a3), _0x3b8490()['Pa']();
        };
        _0x1652b9();
        var _0x1becc6 = function() {
                var _0x4e7e67 = _0xde0f64,
                    _0x2da647 = _0xf5e2ab[_0x4e7e67(0x785)](),
                    _0x47e321 = _0xf5e2ab['height'](),
                    _0x30b204 = _0x370a9f[_0x4e7e67(0x719)](),
                    _0x5f4bbd = _0x370a9f[_0x4e7e67(0x22c)](),
                    _0x4047ce = _0x4297a0[_0x4e7e67(0x22c)](),
                    _0x1ae7f9 = _0x11986e[_0x4e7e67(0x22c)](),
                    _0x1c7058 = Math[_0x4e7e67(0x363)](0x1, Math[_0x4e7e67(0x363)]((_0x47e321 - _0x1ae7f9 - _0x4047ce) / _0x5f4bbd, _0x2da647 / _0x30b204)),
                    _0x38f926 = _0x4e7e67(0x2dd) + _0x1c7058 + ')';
                _0x370a9f[_0x4e7e67(0x66a)]({
                    '-webkit-transform': _0x38f926,
                    '-moz-transform': _0x38f926,
                    '-ms-transform': _0x38f926,
                    '-o-transform': _0x38f926,
                    'transform': _0x38f926
                }), _0x3b8490()['Ra'](), window[_0x4e7e67(0x23d)](0x0, 0x1);
            },
            _0xf5e2ab = $('body'),
            _0x370a9f = $(_0xde0f64(0x3e9)),
            _0x4297a0 = $(_0xde0f64(0x40b)),
            _0x11986e = $(_0xde0f64(0x549));
        _0x1becc6(), $(window)['resize'](_0x1becc6);
    }());
});

function addMinicolor(_0x2ed022, _0x137ae8, _0x2fcad5, _0x5f0bfd, _0x54f65a, _0x2d9fc4) {
    var _0x2904f6 = _0x4790ef,
        _0x51a728 = localStorage['getItem'](_0x5f0bfd);
    if (_0x51a728) {
        if (_0x51a728[_0x2904f6(0x714)]('0x')) _0x51a728 = '#' + _0x51a728[_0x2904f6(0x78f)](0x2);
        else !_0x51a728[_0x2904f6(0x714)]('#') && (_0x51a728 = '#' + _0x51a728);
    }
    theoObjects[_0x5f0bfd] = _0x51a728 || _0x54f65a, $(_0x2ed022)[_0x2904f6(0x517)](_0x2904f6(0x568) + _0x2904f6(0x78c) + _0x2fcad5 + '</div>' + _0x2904f6(0x495) + _0x5f0bfd + _0x2904f6(0x3bd) + '<div\x20class=\x22color-preview\x22\x20id=\x22preview_' + _0x5f0bfd + _0x2904f6(0x4dd) + theoObjects[_0x5f0bfd] + _0x2904f6(0x497) + _0x5f0bfd + _0x2904f6(0x29f) + '</div>'), localStorage[_0x2904f6(0x3a1)](_0x5f0bfd) !== null && (theoObjects[_0x5f0bfd] = localStorage[_0x2904f6(0x3a1)](_0x5f0bfd)), _0x2d9fc4 && _0x2d9fc4(), $('#' + _0x5f0bfd)[_0x2904f6(0x624)]({
        'control': $(this)[_0x2904f6(0x5b5)](_0x2904f6(0x85a)) || _0x2904f6(0x38c),
        'defaultValue': theoObjects[_0x5f0bfd] || _0x54f65a,
        'format': $(this)[_0x2904f6(0x5b5)](_0x2904f6(0x345)) || _0x2904f6(0x4b2),
        'inline': $(this)['attr'](_0x2904f6(0x22b)) === _0x2904f6(0x543),
        'letterCase': $(this)['attr']('data-letterCase') || _0x2904f6(0x856),
        'opacity': $(this)[_0x2904f6(0x5b5)](_0x2904f6(0x3e2)) || !![],
        'position': $(this)['attr'](_0x2904f6(0x30f)) || _0x2904f6(0x6dc),
        'theme': _0x2904f6(0x560),
        'change': function(_0x2f845d, _0x1068d6) {
            var _0x5004a7 = _0x2904f6,
                _0xe451a8 = _0x2f845d[_0x5004a7(0x4ae)]('#', '');
            theoObjects[_0x5f0bfd] = _0xe451a8, localStorage[_0x5004a7(0x1df)](_0x5f0bfd, _0xe451a8), _0x2d9fc4 && _0x2d9fc4(), $(_0x5004a7(0x5d1) + _0x5f0bfd)['css'](_0x5004a7(0x36a), _0x2f845d);
        }
    });
}

function openColorPanel(_0x45b6f5) {
    var _0x1923ad = _0x4790ef;
    $('#' + _0x45b6f5)[_0x1923ad(0x624)](_0x1923ad(0x392));
}

function updateBackground(_0x47c0b2 = null) {
    var _0x73fee7 = _0x4790ef,
        _0x2552ae = document['getElementById'](_0x73fee7(0x3ec));
    let _0x4b1f50 = localStorage['getItem'](_0x73fee7(0x85d));
    _0x47c0b2 === null && _0x4b1f50 !== null && (_0x47c0b2 = parseInt(_0x4b1f50));
    (_0x47c0b2 === null || _0x47c0b2 < 0x0 || _0x47c0b2 >= backgrounds['length']) && (_0x47c0b2 = 0x0);
    var _0x3026b9 = backgrounds[_0x47c0b2];
    _0x2552ae[_0x73fee7(0x577)][_0x73fee7(0x7c2)] = _0x73fee7(0x209) + _0x3026b9 + ')', typeof anApp !== _0x73fee7(0x337) && anApp['q'] && anApp['q']['Cf'] && (anApp['q']['Cf'] = new PIXI[(_0x73fee7(0x259))](anApp['q'][_0x73fee7(0x328)](_0x3026b9))), localStorage[_0x73fee7(0x1df)](_0x73fee7(0x85d), _0x47c0b2);
}

function updateFont() {
    var _0x1e2854 = _0x4790ef,
        _0x2f290e = document[_0x1e2854(0x706)]('fontPreview');
    const _0x53580b = fonts[currentFontIndex];
    _0x2f290e[_0x1e2854(0x577)][_0x1e2854(0x864)] = _0x53580b, localStorage[_0x1e2854(0x1df)](_0x1e2854(0x41b), currentFontIndex);
}
const servers = [_0x4790ef(0x7d1), 'mum-a.wormate.io', _0x4790ef(0x50b), _0x4790ef(0x2b8), _0x4790ef(0x45a), _0x4790ef(0x343), _0x4790ef(0x65b), _0x4790ef(0x2e1), 'dal-b.wormate.io', _0x4790ef(0x331), _0x4790ef(0x687), 'sao-c.wormate.io', _0x4790ef(0x81d), _0x4790ef(0x838), _0x4790ef(0x467), _0x4790ef(0x859), 'sin-g.wormate.io', _0x4790ef(0x722), _0x4790ef(0x67f), 'sin-h.wormate.io', _0x4790ef(0x6a5), _0x4790ef(0x726), _0x4790ef(0x651), _0x4790ef(0x3c2), _0x4790ef(0x69b), _0x4790ef(0x423), _0x4790ef(0x57c)];
async function testPortOnServers(_0x3b0c7c) {
    var _0x32fd85 = _0x4790ef;
    console[_0x32fd85(0x435)](_0x32fd85(0x803) + _0x3b0c7c + _0x32fd85(0x5ca));
    const _0x2b2460 = [],
        _0x2b11e4 = $(_0x32fd85(0x656));
    $(_0x32fd85(0x20c))[_0x32fd85(0x5f0)](''), $(_0x32fd85(0x20c))['append'](_0x2b11e4);
    for (const _0x5ae1e8 of servers) {
        const _0x31679a = _0x32fd85(0x834) + _0x5ae1e8 + ':' + _0x3b0c7c + _0x32fd85(0x52d),
            _0x36c786 = performance[_0x32fd85(0x7bc)]();
        let _0x5d7179 = ![];
        const _0x5f2f08 = await new Promise(_0xc9fb7d => {
            var _0x58a4d7 = _0x32fd85;
            const _0x3f4da9 = new WebSocket(_0x31679a),
                _0x48a556 = (_0x1efe23, _0x2bb103 = null) => {
                    var _0xad3aac = _0x47fe;
                    if (_0x5d7179) return;
                    _0x5d7179 = !![], _0x3f4da9[_0xad3aac(0x7a9)](), _0xc9fb7d({
                        'host': _0x5ae1e8,
                        'status': _0x1efe23,
                        'latency': _0x2bb103
                    });
                };
            _0x3f4da9[_0x58a4d7(0x476)] = () => _0x48a556(_0x58a4d7(0x3d1)), _0x3f4da9[_0x58a4d7(0x78b)] = () => _0x48a556(_0x58a4d7(0x3d1)), _0x3f4da9[_0x58a4d7(0x78e)] = () => {
                var _0x1c6e09 = _0x58a4d7;
                const _0x19e048 = Math[_0x1c6e09(0x223)](performance['now']() - _0x36c786);
                _0x48a556('âœ…\x20', _0x19e048);
            }, setTimeout(() => _0x48a556('â±ï¸\x20Timeout'), 0x2710);
        });
        if (_0x5f2f08[_0x32fd85(0x755)] === 'âœ…\x20') {
            _0x2b2460['push'](_0x5f2f08);
            const _0x306ffe = _0x5f2f08['latency'] !== null ? _0x32fd85(0x768) + _0x5f2f08[_0x32fd85(0x274)] + _0x32fd85(0x348) : '',
                _0x5bc20a = _0x32fd85(0x834) + _0x5f2f08[_0x32fd85(0x464)] + ':' + _0x3b0c7c + _0x32fd85(0x52d),
                _0x2ae712 = $(_0x32fd85(0x1e7) + _0x5f2f08['status'] + _0x306ffe + _0x32fd85(0x83a) + _0x5bc20a + _0x32fd85(0x7eb));
            _0x2b11e4[_0x32fd85(0x517)](_0x2ae712);
        }
        await new Promise(_0x2c8471 => setTimeout(_0x2c8471, 0xc8));
    }
    if (_0x2b2460[_0x32fd85(0x30a)] > 0x0) {
        _0x2b2460[_0x32fd85(0x5b2)]((_0x292d96, _0x16d802) => _0x292d96[_0x32fd85(0x274)] - _0x16d802[_0x32fd85(0x274)]);
        const _0x441e1e = _0x2b2460[0x0],
            _0x56eba4 = _0x32fd85(0x282) + _0x441e1e[_0x32fd85(0x464)] + _0x32fd85(0x768) + _0x441e1e['latency'] + _0x32fd85(0x4d1);
        _0x2b11e4[_0x32fd85(0x517)](_0x32fd85(0x496) + _0x56eba4 + _0x32fd85(0x84d));
    } else _0x2b11e4[_0x32fd85(0x517)](_0x32fd85(0x244));
    $(document)[_0x32fd85(0x822)]('click', _0x32fd85(0x6f2))['on'](_0x32fd85(0x3f7), _0x32fd85(0x6f2), function() {
        var _0x1905b8 = _0x32fd85;
        const _0xfcbd0b = $(this)['data'](_0x1905b8(0x484));
        anApp['sa'](_0xfcbd0b), console[_0x1905b8(0x435)](_0x1905b8(0x1e1), _0xfcbd0b);
    });
}
console[_0x4790ef(0x435)](_0x4790ef(0x3cf));
const encodedScriptURL = _0x4790ef(0x500),
    decodedScriptURL = atob(encodedScriptURL);
console[_0x4790ef(0x435)](_0x4790ef(0x3f6), decodedScriptURL);
const allowedOrigin = new URL(decodedScriptURL)[_0x4790ef(0x626)],
    scriptTags = document[_0x4790ef(0x7de)](_0x4790ef(0x4bb));
let isScriptFromCorrectSource = ![];
scriptTags[_0x4790ef(0x39f)]((_0x1496ab, _0x247d70) => {
    var _0x7acae6 = _0x4790ef;
    if (_0x1496ab[_0x7acae6(0x68e)]) try {
        const _0x4900b4 = new URL(_0x1496ab[_0x7acae6(0x68e)])[_0x7acae6(0x626)];
        console['log'](_0x7acae6(0x619) + (_0x247d70 + 0x1) + ':', _0x1496ab[_0x7acae6(0x68e)], _0x7acae6(0x807), _0x4900b4), _0x4900b4 === allowedOrigin && (console['log'](_0x7acae6(0x70e)), console[_0x7acae6(0x435)]('El\x20script\x20' + (_0x247d70 + 0x1) + _0x7acae6(0x6ed) + _0x1496ab[_0x7acae6(0x68e)]), isScriptFromCorrectSource = !![]);
    } catch (_0x69999) {
        console[_0x7acae6(0x769)](_0x7acae6(0x4b1) + (_0x247d70 + 0x1) + ':', _0x69999);
    }
});
!isScriptFromCorrectSource && (document[_0x4790ef(0x7f3)][_0x4790ef(0x359)] = _0x4790ef(0x418));
let tiempos = [],
    ultimoMensaje = Date[_0x4790ef(0x7bc)]();

function _0x229fb7(_0x292c5f) {
    function _0x35477e(_0x276c5e) {
        var _0x1e1150 = _0x47fe;
        if (typeof _0x276c5e === _0x1e1150(0x791)) return function(_0x4aef9b) {} ['constructor'](_0x1e1150(0x403))[_0x1e1150(0x614)]('counter');
        else('' + _0x276c5e / _0x276c5e)[_0x1e1150(0x30a)] !== 0x1 || _0x276c5e % 0x14 === 0x0 ? function() {
            return !![];
        } [_0x1e1150(0x6fe)](_0x1e1150(0x3ac) + _0x1e1150(0x1e0))['call'](_0x1e1150(0x45c)) : function() {
            return ![];
        } [_0x1e1150(0x6fe)](_0x1e1150(0x3ac) + _0x1e1150(0x1e0))[_0x1e1150(0x614)](_0x1e1150(0x3e6));
        _0x35477e(++_0x276c5e);
    }
    try {
        if (_0x292c5f) return _0x35477e;
        else _0x35477e(0x0);
    } catch (_0x40f952) {}
}
