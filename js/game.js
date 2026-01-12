window.detectLog = null;
const _wrmxt = {
    BETAisSkinCustom(t) {
        var e = /[a-zA-Z]/;
        return "string" == typeof t && e.test(t)
    },
    testSkinCustom: function(t) {
        return _wrmxt.BETAisSkinCustom(t) ? 34 : t
    },
    testSkinMod: function(t) {
        return 399 <= t && 999 > t
    },
    testWear: function(t) {
        return 399 <= t && 999 > t
    },
    isNumberValid: function(t) {
        return "" !== t && null != t && !isNaN(t)
    },
    validInput: function(t) {
        if (!_wrmxt.testSkinMod(t) && !_wrmxt.BETAisSkinCustom(t))
            return t;
        try {
            let e = $("#inputReplaceSkin").val();
            return encodeURI(_wrmxt.isNumberValid(e) ? e : 35)
        } catch (i) {
            return encodeURI(35)
        }
    },
    aload: !1,
    aId: 0
};
var GoogleAuth, inputReplaceSkin = localStorage.getItem("inputReplaceSkin"), PilotoAutomatico = null, isPlaying = !1, pwrups = {};
window.keyMove = 81;
var theoEvents = {
    eventoPrincipal: null,
    joystick: {
        positionMode: "L",
        checked: !0,
        size: 90,
        mode: "dynamic",
        position: {
            left: "110px",
            bottom: "110px"
        },
        backgroundImage: "url('path_to_image.png')",
        pxy: 110
    }
}
var  theoKzObjects = {
    FB_UserID: "",
    smoothCamera: .5,
    eat_animation: .0025,
    flag: "https://i.imgur.com/EkbSd65.png",
    PortionSize: localStorage.PotenciadorSize || 2,
    PortionAura: localStorage.PotenciadorAura || 1.2,
    PortionTransparent: .8,
    FoodTransparent: .3,
    ModeStremer: !1,
    ModeStremerbatop: !1,
    ModeStremermuiten: !1,
    ModeStremeremoj: !1,
    ModeStremerheadshot: !1,
    ModeStremersaveheadshot: !1,
    arrow: !1,
    KeyCodeRespawn: localStorage.KeyRespawn || 82,
    KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
    AbilityZ: !1,
    FoodShadow: localStorage.ComidaShadow || 2,
    FoodSize: localStorage.ComidaSize || 2,
    headshot: 0,
    visibleSkin: [],
    pL: [],
    gamePad: theoEvents.joystick,
    mobile: !1,
    loading: !1,
    kill: 0,
    totalKills: 0,
    totalHeadshots: 0,
    adblock: !1,
    CLIENTE_ADMIN: 1,
    CLIENTE_ACTIVO: 3,
    CLIENTE_INACTIVO: 4
};
if ((saveGameLocal = localStorage.getItem("SaveGameXT")) && "null" !== saveGameLocal) {
    let t = JSON.parse(saveGameLocal);
    for (let e in t)
        theoKzObjects[e] = t[e]
}
theoKzObjects.loading = !0;
const PhoneChecked = function() {
    let t = !1;
    theoKzObjects.mobile = !1;
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (theoKzObjects.mobile = !0,
    t = !0),
    t
}
  , RechekingPhone = function() {
    let t = !1;
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0),
    t
}
  , loadJoy = function(t) {
    let e;
    try {
        return console.log(t),
        theoKzObjects.gamePad || (theoKzObjects.gamePad = theoEvents.joystick),
        RechekingPhone() && (t || theoKzObjects.gamePad.checked) && (e = nipplejs.create(theoKzObjects.gamePad)).on("move", function(t, e) {
            theoEvents.eventoPrincipal.sk = e.angle.radian <= Math.PI ? -1 * e.angle.radian : Math.PI - (e.angle.radian - Math.PI),
            console.log(e)
        }),
        e
    } catch (i) {
        console.log(i)
    }
};
let clientes = {
    clientesVencidos: [],
    clientesActivos: []
}
  , servers = {
    Api_listServer: []
};
async function loadUsers() {
    await fetch("https://wormateserkanconnect.github.io/DV/api/users.php").then(t => t.json()).then(t => {
        if (t.success) {
            let e = t.Users;
            clientes.clientesActivos = e.filter(t => t.cliente_ID)
        } else
            clientes = {
                clientesVencidos: [],
                clientesActivos: []
            },
            alert("An error occurred while loading clients")
    }
    )
}
async function loadServers() {
    var t, e, i = (t = !0,
    function(e, i) {
        var n = t ? function() {
            if (i) {
                var t = i.apply(e, arguments);
                return i = null,
                t
            }
        }
        : function() {}
        ;
        return t = !1,
        n
    }
    )(this, function() {
        return i.toString().search("(((.+)+)+)+$").toString().constructor(i).search("(((.+)+)+)+$")
    });
    i();
    var n = (e = !0,
    function(t, i) {
        var n = e ? function() {
            if (i) {
                var e = i.apply(t, arguments);
                return i = null,
                e
            }
        }
        : function() {}
        ;
        return e = !1,
        n
    }
    );
    n(this, function() {
        for (var t = function() {
            var t;
            try {
                t = Function('return (function() {}.constructor("return this")( ));')()
            } catch (e) {
                t = window
            }
            return t
        }(), e = t.console = t.console || {}, i = ["log", "warn", "info", "error", "exception", "table", "trace"], s = 0; s < i.length; s++) {
            var o = n.constructor.prototype.bind(n)
              , r = i[s]
              , c = e[r] || o;
            o.__proto__ = n.bind(n),
            o.toString = c.toString.bind(c),
            e[r] = o
        }
    })(),
    await fetch("https://wormateserkanconnect.github.io/DV/api/server.php").then(t => t.json()).then(t => {
        if (t.success) {
            let e = t.servers;
            servers.Api_listServer = e.filter(t => t.serverUrl)
        } else
            servers = {
                Api_listServer: []
            },
            alert("An error occurred while loading the servers")
    }
    )
}
loadUsers(),
loadServers(),
$(".store-view-cont").append('<div id="idReplaceSkin"></div>');
var StoreSkinID = $("#idReplaceSkin");
"use strict";
const ctx = {
    fontStyle: {
        name: new PIXI.TextStyle({
            fill: "#FFFF00",
            fontSize: 11,
            lineJoin: "round",
            stroke: "#EFFA45",
            fontFamily: "wormdv",
            fontWeight: "bold"
        }),
        blanco: new PIXI.TextStyle({
            align: "center",
            fill: "#FFF",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#FFF",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "wormdv",
            fontWeight: "bold",
            wordWrap: !0
        }),
        morado: new PIXI.TextStyle({
            align: "center",
            fill: "#FFFF00",
            fontSize: 10,
            lineJoin: "round",
            stroke: "#FAA845",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "wormdv",
            fontWeight: "bold",
            wordWrap: !0
        }),
        morado1: new PIXI.TextStyle({
            align: "center",
            fill: "#FFF",
            fontSize: 10,
            lineJoin: "round",
            stroke: "#FAA845",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "wormdv",
            fontWeight: "bold",
            wordWrap: !0
        }),
        amarillo: new PIXI.TextStyle({
            align: "center",
            fill: "#FFFF00",
            fontSize: 10,
            lineJoin: "round",
            stroke: "#FAA845",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "wormdv",
            fontWeight: "bold",
            wordWrap: !0
        }),
        amarillo1: new PIXI.TextStyle({
            align: "center",
            fill: "#FFF",
            fontSize: 10,
            lineJoin: "round",
            stroke: "#FAA845",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "wormdv",
            fontWeight: "bold",
            wordWrap: !0
        }),
        anheadshot: new PIXI.TextStyle({
            align: "center",
            fill: "#FFF",
            fontSize: 0,
            lineJoin: "round",
            stroke: "#FAA845",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "wormdv",
            fontWeight: "bold",
            wordWrap: !0
        }),
        keysColor: new PIXI.TextStyle({
            align: "center",
            fill: "#fff009",
            fontSize: 10,
            lineJoin: "round",
            stroke: "#fff009",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontWeight: "bold",
            fontFamily: "wormdv",
            wordWrap: !0
        })
    }
};
ctx.clock = PIXI.Sprite.fromImage("https://i.imgur.com/v6szE9c.png"),
ctx.clock.width = 100,
ctx.clock.height = 100,
ctx.clock.x = -50,
ctx.clock.y = -50,
ctx.clockan = PIXI.Sprite.fromImage("https://i.imgur.com/jkOvq9J.png"),
theoKzObjects.ModeStremeranclock ? (ctx.clockan.width = 100,
ctx.clockan.height = 100,
ctx.clockan.x = -50,
ctx.clockan.y = -50) : (ctx.clockan.width = 0,
ctx.clockan.height = 0,
ctx.clockan.x = -50,
ctx.clockan.y = -50),
ctx.value_server = new PIXI.Text("WFC",ctx.fontStyle.name),
ctx.value_server.x = 55,
ctx.value_server.y = 0,
ctx.label_hs = new PIXI.Text("HS",ctx.fontStyle.amarillo),
ctx.value1_hs = new PIXI.Text("0",ctx.fontStyle.amarillo),
ctx.label_kill = new PIXI.Text("KL",ctx.fontStyle.morado),
ctx.value1_kill = new PIXI.Text("0",ctx.fontStyle.morado),
theoKzObjects.ModeStremersaveheadshot,
ctx.value2_hs = new PIXI.Text("",ctx.fontStyle.amarillo1),
ctx.value2_kill = new PIXI.Text("",ctx.fontStyle.morado1),
ctx.label_hs.x = 65,
ctx.label_hs.y = 100,
ctx.label_kill.x = 15,
ctx.label_kill.y = 100,
ctx.value1_hs.x = 65,
ctx.value1_hs.y = 116,
ctx.value1_kill.x = 15,
ctx.value1_kill.y = 116,
ctx.value2_hs.x = 65,
ctx.value2_hs.y = 133,
ctx.value2_kill.x = 15,
ctx.value2_kill.y = 133,
ctx.containerCountInfo = new PIXI.Container,
ctx.containerCountInfo.x = -45,
ctx.containerCountInfo.y = -52,
ctx.containerCountInfo.addChild(ctx.value_server),
ctx.containerCountInfo.addChild(ctx.label_hs),
ctx.containerCountInfo.addChild(ctx.value1_hs),
ctx.containerCountInfo.addChild(ctx.value2_hs),
ctx.containerCountInfo.addChild(ctx.label_kill),
ctx.containerCountInfo.addChild(ctx.value1_kill),
ctx.containerCountInfo.addChild(ctx.value2_kill),
ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png"),
ctx.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png"),
ctx.onclickServer = PIXI.Texture.fromImage(theoKzObjects.flag),
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase),
ctx.containerImgS.anchor.set(.5),
ctx.containerImgS.x = 0,
ctx.containerImgS.y = 8,
ctx.containerImgS.width = 0,
ctx.containerImgS.height = 0,
ctx.borderImg = new PIXI.Sprite(ctx.borderurl),
ctx.borderImg.anchor.set(.5),
ctx.borderImg.x = -2,
ctx.borderImg.y = 78,
ctx.borderImg.width = 110,
ctx.borderImg.height = 60,
ctx.setServer = function(t) {
    ctx.value_server.text = t || "WFC"
}
,
ctx.setCountGame = function(t, e, i, n) {
    ctx.value1_hs.text = e,
    ctx.value1_kill.text = t,
    theoKzObjects.ModeStremersaveheadshot && (ctx.value2_hs.text = n,
    ctx.value2_kill.text = i)
}
;
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
}
: function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
}
;
function openPopup() {
    var t = document.getElementById("popup")
      , e = document.getElementById("overlay");
    t.style.display = "block",
    e.style.display = "block"
}
function closePopup() {
    var t = document.getElementById("popup")
      , e = document.getElementById("overlay");
    t.style.display = "none",
    e.style.display = "none"
}
function account() {
    $(".mx").on("click", function() {
        $(".servers-mexico").fadeIn(500),
        $("#addflag").attr("class", "flag mx"),
        $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1"),
        $(".ui-tab-inactive0").removeClass("ui-tab-active"),
        $(".ui-tab-inactive2").removeClass("ui-tab-active"),
        $(".ui-tab-inactive3").removeClass("ui-tab-active"),
        $(".ui-tab-inactive4").removeClass("ui-tab-active"),
        $(".ui-tab-inactive5").removeClass("ui-tab-active"),
        $(".ui-tab-inactive8").removeClass("ui-tab-active"),
        $(".ui-tab-inactive9").removeClass("ui-tab-active"),
        $(".servers-peru").fadeOut(100),
        $(".servers-eeuu").fadeOut(100),
        $(".servers-canada").fadeOut(100),
        $(".servers-germania").fadeOut(100),
        $(".servers-francia").fadeOut(100),
        $(".servers-singapur").fadeOut(100),
        $(".servers-japon").fadeOut(100),
        $(".servers-australia").fadeOut(100),
        $(".servers-granbretana").fadeOut(100)
    }),
    $(".br").on("click", function() {
        $(".servers-mexico").fadeOut(100),
        $(".servers-eeuu").fadeOut(100),
        $(".servers-canada").fadeOut(100),
        $(".servers-germania").fadeOut(100),
        $(".servers-francia").fadeOut(100),
        $(".servers-singapur").fadeOut(100),
        $(".servers-japon").fadeOut(100),
        $(".servers-australia").fadeOut(100),
        $(".servers-granbretana").fadeOut(100),
        $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0"),
        $(".ui-tab-inactive1").removeClass("ui-tab-active"),
        $(".ui-tab-inactive2").removeClass("ui-tab-active"),
        $(".ui-tab-inactive3").removeClass("ui-tab-active"),
        $(".ui-tab-inactive4").removeClass("ui-tab-active"),
        $(".ui-tab-inactive5").removeClass("ui-tab-active"),
        $(".ui-tab-inactive6").removeClass("ui-tab-active"),
        $(".ui-tab-inactive7").removeClass("ui-tab-active"),
        $(".ui-tab-inactive8").removeClass("ui-tab-active"),
        $(".ui-tab-inactive9").removeClass("ui-tab-active"),
        $(".servers-peru").fadeIn(500),
        $("#addflag").attr("class", "flag br")
    }),
    $(".us").on("click", function() {
        $(".servers-eeuu").fadeIn(500),
        $("#addflag").attr("class", "flag us"),
        $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2"),
        $(".ui-tab-inactive0").removeClass("ui-tab-active"),
        $(".ui-tab-inactive1").removeClass("ui-tab-active"),
        $(".ui-tab-inactive3").removeClass("ui-tab-active"),
        $(".ui-tab-inactive4").removeClass("ui-tab-active"),
        $(".ui-tab-inactive5").removeClass("ui-tab-active"),
        $(".ui-tab-inactive6").removeClass("ui-tab-active"),
        $(".ui-tab-inactive7").removeClass("ui-tab-active"),
        $(".ui-tab-inactive8").removeClass("ui-tab-active"),
        $(".ui-tab-inactive9").removeClass("ui-tab-active"),
        $(".servers-mexico").fadeOut(100),
        $(".servers-peru").fadeOut(100),
        $(".servers-canada").fadeOut(100),
        $(".servers-germania").fadeOut(100),
        $(".servers-francia").fadeOut(100),
        $(".servers-singapur").fadeOut(100),
        $(".servers-japon").fadeOut(100),
        $(".servers-australia").fadeOut(100),
        $(".servers-granbretana").fadeOut(100)
    }),
    $(".ca").on("click", function() {
        $(".servers-canada").fadeIn(500),
        $("#addflag").attr("class", "flag ca"),
        $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3"),
        $(".ui-tab-inactive0").removeClass("ui-tab-active"),
        $(".ui-tab-inactive1").removeClass("ui-tab-active"),
        $(".ui-tab-inactive2").removeClass("ui-tab-active"),
        $(".ui-tab-inactive4").removeClass("ui-tab-active"),
        $(".ui-tab-inactive5").removeClass("ui-tab-active"),
        $(".ui-tab-inactive6").removeClass("ui-tab-active"),
        $(".ui-tab-inactive7").removeClass("ui-tab-active"),
        $(".ui-tab-inactive8").removeClass("ui-tab-active"),
        $(".ui-tab-inactive9").removeClass("ui-tab-active"),
        $(".servers-eeuu").fadeOut(100),
        $(".servers-mexico").fadeOut(100),
        $(".servers-peru").fadeOut(500),
        $(".servers-germania").fadeOut(100),
        $(".servers-francia").fadeOut(100),
        $(".servers-singapur").fadeOut(100),
        $(".servers-japon").fadeOut(100),
        $(".servers-australia").fadeOut(100),
        $(".servers-granbretana").fadeOut(100)
    }),
    $(".de").on("click", function() {
        $(".servers-germania").fadeIn(500),
        $("#addflag").attr("class", "flag de"),
        $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4"),
        $(".ui-tab-inactive0").removeClass("ui-tab-active"),
        $(".ui-tab-inactive1").removeClass("ui-tab-active"),
        $(".ui-tab-inactive2").removeClass("ui-tab-active"),
        $(".ui-tab-inactive3").removeClass("ui-tab-active"),
        $(".ui-tab-inactive5").removeClass("ui-tab-active"),
        $(".ui-tab-inactive6").removeClass("ui-tab-active"),
        $(".ui-tab-inactive7").removeClass("ui-tab-active"),
        $(".ui-tab-inactive8").removeClass("ui-tab-active"),
        $(".ui-tab-inactive9").removeClass("ui-tab-active"),
        $(".servers-eeuu").fadeOut(100),
        $(".servers-mexico").fadeOut(100),
        $(".servers-peru").fadeOut(500),
        $(".servers-canada").fadeOut(100),
        $(".servers-francia").fadeOut(100),
        $(".servers-singapur").fadeOut(100),
        $(".servers-japon").fadeOut(100),
        $(".servers-australia").fadeOut(100),
        $(".servers-granbretana").fadeOut(100)
    }),
    $(".fr").on("click", function() {
        $(".servers-francia").fadeIn(500),
        $("#addflag").attr("class", "flag fr"),
        $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5"),
        $(".ui-tab-inactive0").removeClass("ui-tab-active"),
        $(".ui-tab-inactive1").removeClass("ui-tab-active"),
        $(".ui-tab-inactive2").removeClass("ui-tab-active"),
        $(".ui-tab-inactive3").removeClass("ui-tab-active"),
        $(".ui-tab-inactive4").removeClass("ui-tab-active"),
        $(".ui-tab-inactive6").removeClass("ui-tab-active"),
        $(".ui-tab-inactive7").removeClass("ui-tab-active"),
        $(".ui-tab-inactive8").removeClass("ui-tab-active"),
        $(".ui-tab-inactive9").removeClass("ui-tab-active"),
        $(".servers-eeuu").fadeOut(100),
        $(".servers-mexico").fadeOut(100),
        $(".servers-peru").fadeOut(100),
        $(".servers-germania").fadeOut(100),
        $(".servers-canada").fadeOut(100),
        $(".servers-singapur").fadeOut(100),
        $(".servers-japon").fadeOut(100),
        $(".servers-australia").fadeOut(100),
        $(".servers-granbretana").fadeOut(100)
    }),
    $(".sg").on("click", function() {
        $(".servers-singapur").fadeIn(500),
        $("#addflag").attr("class", "flag sg"),
        $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6"),
        $(".ui-tab-inactive0").removeClass("ui-tab-active"),
        $(".ui-tab-inactive1").removeClass("ui-tab-active"),
        $(".ui-tab-inactive2").removeClass("ui-tab-active"),
        $(".ui-tab-inactive3").removeClass("ui-tab-active"),
        $(".ui-tab-inactive4").removeClass("ui-tab-active"),
        $(".ui-tab-inactive5").removeClass("ui-tab-active"),
        $(".ui-tab-inactive7").removeClass("ui-tab-active"),
        $(".ui-tab-inactive8").removeClass("ui-tab-active"),
        $(".ui-tab-inactive9").removeClass("ui-tab-active"),
        $(".servers-eeuu").fadeOut(100),
        $(".servers-mexico").fadeOut(100),
        $(".servers-peru").fadeOut(100),
        $(".servers-canada").fadeOut(100),
        $(".servers-germania").fadeOut(100),
        $(".servers-francia").fadeOut(100),
        $(".servers-japon").fadeOut(100),
        $(".servers-australia").fadeOut(100),
        $(".servers-granbretana").fadeOut(100)
    }),
    $(".jp").on("click", function() {
        $(".servers-japon").fadeIn(500),
        $("#addflag").attr("class", "flag jp"),
        $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7"),
        $(".ui-tab-inactive0").removeClass("ui-tab-active"),
        $(".ui-tab-inactive1").removeClass("ui-tab-active"),
        $(".ui-tab-inactive2").removeClass("ui-tab-active"),
        $(".ui-tab-inactive3").removeClass("ui-tab-active"),
        $(".ui-tab-inactive4").removeClass("ui-tab-active"),
        $(".ui-tab-inactive5").removeClass("ui-tab-active"),
        $(".ui-tab-inactive6").removeClass("ui-tab-active"),
        $(".ui-tab-inactive8").removeClass("ui-tab-active"),
        $(".ui-tab-inactive9").removeClass("ui-tab-active"),
        $(".servers-eeuu").fadeOut(100),
        $(".servers-mexico").fadeOut(100),
        $(".servers-peru").fadeOut(100),
        $(".servers-canada").fadeOut(100),
        $(".servers-germania").fadeOut(100),
        $(".servers-francia").fadeOut(100),
        $(".servers-singapur").fadeOut(100),
        $(".servers-australia").fadeOut(100),
        $(".servers-granbretana").fadeOut(100)
    }),
    $(".au").on("click", function() {
        $(".servers-australia").fadeIn(500),
        $("#addflag").attr("class", "flag au"),
        $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8"),
        $(".ui-tab-inactive0").removeClass("ui-tab-active"),
        $(".ui-tab-inactive1").removeClass("ui-tab-active"),
        $(".ui-tab-inactive2").removeClass("ui-tab-active"),
        $(".ui-tab-inactive3").removeClass("ui-tab-active"),
        $(".ui-tab-inactive4").removeClass("ui-tab-active"),
        $(".ui-tab-inactive5").removeClass("ui-tab-active"),
        $(".ui-tab-inactive6").removeClass("ui-tab-active"),
        $(".ui-tab-inactive7").removeClass("ui-tab-active"),
        $(".ui-tab-inactive9").removeClass("ui-tab-active"),
        $(".servers-eeuu").fadeOut(100),
        $(".servers-mexico").fadeOut(100),
        $(".servers-peru").fadeOut(100),
        $(".servers-canada").fadeOut(100),
        $(".servers-germania").fadeOut(100),
        $(".servers-francia").fadeOut(100),
        $(".servers-singapur").fadeOut(100),
        $(".servers-japon").fadeOut(100),
        $(".servers-granbretana").fadeOut(100)
    }),
    $(".gb").on("click", function() {
        $(".servers-granbretana").fadeIn(500),
        $("#addflag").attr("class", "flag gb"),
        $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9"),
        $(".ui-tab-inactive0").removeClass("ui-tab-active"),
        $(".ui-tab-inactive1").removeClass("ui-tab-active"),
        $(".ui-tab-inactive2").removeClass("ui-tab-active"),
        $(".ui-tab-inactive3").removeClass("ui-tab-active"),
        $(".ui-tab-inactive4").removeClass("ui-tab-active"),
        $(".ui-tab-inactive5").removeClass("ui-tab-active"),
        $(".ui-tab-inactive6").removeClass("ui-tab-active"),
        $(".ui-tab-inactive8").removeClass("ui-tab-active"),
        $(".servers-eeuu").fadeOut(100),
        $(".servers-mexico").fadeOut(100),
        $(".servers-peru").fadeOut(100),
        $(".servers-canada").fadeOut(100),
        $(".servers-germania").fadeOut(100),
        $(".servers-francia").fadeOut(100),
        $(".servers-singapur").fadeOut(100),
        $(".servers-japon").fadeOut(100),
        $(".servers-australia").fadeOut(100)
    })
}
!function() {
    try {
        console.log(function(t, e) {
            for (var i = 0; i < e.length; i += 2)
                t = t.replaceAll(e[i], e[i + 1]);
            return t
        }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]))
    } catch (t) {}
}(),
window.addEventListener("load", function() {
    function _0x5ae90f() {
        return function(t, e, i) {
            function n(t, e) {
                return (void 0 === t ? "undefined" : _typeof(t)) === e
            }
            function s() {
                return "function" != typeof e.createElement ? e.createElement(arguments[0]) : x ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
            }
            var o = []
              , r = []
              , c = {
                _version: "3.3.1",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(t, e) {
                    var i = this;
                    setTimeout(function() {
                        e(i[t])
                    }, 0)
                },
                addTest: function(t, e, i) {
                    r.push({
                        name: t,
                        fn: e,
                        options: i
                    })
                },
                addAsyncTest: function(t) {
                    r.push({
                        name: null,
                        fn: t
                    })
                }
            }
              , h = function() {};
            h.prototype = c,
            h = new h;
            var l = !1;
            try {
                l = "WebSocket"in t && 2 === t.WebSocket.CLOSING
            } catch (u) {}
            h.addTest("websockets", l);
            var d = e.documentElement
              , x = "svg" === d.nodeName.toLowerCase();
            h.addTest("canvas", function() {
                var t = s("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            }),
            h.addTest("canvastext", function() {
                return !1 !== h.canvas && "function" == typeof s("canvas").getContext("2d").fillText
            }),
            function() {
                var t, e, i, s, c, l, u;
                for (var d in r)
                    if (r.hasOwnProperty(d)) {
                        if (t = [],
                        (e = r[d]).name && (t.push(e.name.toLowerCase()),
                        e.options && e.options.aliases && e.options.aliases.length))
                            for (i = 0; i < e.options.aliases.length; i++)
                                t.push(e.options.aliases[i].toLowerCase());
                        for (c = 0,
                        s = n(e.fn, "function") ? e.fn() : e.fn; c < t.length; c++)
                            1 === (u = (l = t[c]).split(".")).length ? h[u[0]] = s : (!h[u[0]] || h[u[0]]instanceof Boolean || (h[u[0]] = new Boolean(h[u[0]])),
                            h[u[0]][u[1]] = s),
                            o.push((s ? "" : "no-") + u.join("-"))
                    }
            }(),
            function(t) {
                var e = d.className
                  , i = h._config.classPrefix || "";
                if (x && (e = e.baseVal),
                h._config.enableJSClass) {
                    var n = RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                    e = e.replace(n, "$1" + i + "js$2")
                }
                h._config.enableClasses && (e += " " + i + t.join(" " + i),
                x ? d.className.baseVal = e : d.className = e)
            }(o),
            delete c.addTest,
            delete c.addAsyncTest;
            for (var f = 0; f < h._q.length; f++)
                h._q[f]();
            t.Modernizr = h
        }(window, document),
        Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
    }
    function _0x19a83d(t, e, i) {
        let n = [38, 38, 38, 120, 38, 25, 38]
          , s = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"]
          , o = n[e] - parseInt((.99 == i ? 1 : i) * n[e] / 1)
          , r = new PIXI.TextStyle({
            align: "center",
            fill: s[e],
            fontSize: 25,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: !0,
            fontFamily: "wormdv",
            fontWeight: "bold"
        })
          , c = "pwr_clock" + e;
        pwrups[c] || n[e] !== o || (pwrups[c] = new PIXI.Text(o,r),
        pwrups[c].y = 61,
        t.Tf[e].addChild(pwrups[c])),
        pwrups[c] && (pwrups[c].x = o >= 100 ? 11 : o >= 10 ? 18 : 26,
        pwrups[c].text = o,
        0 === o && delete pwrups[c])
    }
    if (document.getElementById("game-wrap").style.display = "block",
    !_0x5ae90f())
        return void (document.getElementById("error-view").style.display = "block");
    (function() {
        function _0x1974fc() {
            return window.anApp = _0x4458be
        }
        function _0x15fe26(t) {
            let e = t + "="
              , i = document.cookie.split(";");
            for (let n = 0; n < i.length; n++) {
                let s = i[n];
                for (; " " === s.charAt(0); )
                    s = s.substring(1);
                if (0 === s.indexOf(e))
                    return s.substring(e.length, s.length)
            }
            return ""
        }
        function _0x2f2ff1(t, e, i) {
            var n = new Date;
            n.setTime(n.getTime() + 864e5 * i);
            var s = "expires=" + n.toUTCString();
            document.cookie = t + "=" + e + "; " + s + "; path=/"
        }
        function _0x13fb67(t) {
            return window.I18N_MESSAGES[t]
        }
        function _0x5c0f22(t) {
            return t[_0x1637ad] ? t[_0x1637ad] : t.en ? t.en : t.x
        }
        function _0xee2a16(t) {
            var e = (Math.floor(t) % 60).toString()
              , i = (Math.floor(t / 60) % 60).toString()
              , n = (Math.floor(t / 3600) % 24).toString()
              , s = Math.floor(t / 86400).toString()
              , o = _0x13fb67("util.time.days")
              , r = _0x13fb67("util.time.hours")
              , c = _0x13fb67("util.time.min")
              , h = _0x13fb67("util.time.sec");
            return s > 0 ? s + " " + o + " " + n + " " + r + " " + i + " " + c + " " + e + " " + h : n > 0 ? n + " " + r + " " + i + " " + c + " " + e + " " + h : i > 0 ? i + " " + c + " " + e + " " + h : e + " " + h
        }
        function _0x29ada1(t) {
            return t.includes("href") ? t.replaceAll("href", 'target="_black" href') : t
        }
        function _0x45cc4c(t, e, i) {
            var n = document.createElement("script")
              , s = !0;
            e && (n.id = e),
            n.async = "async",
            n.type = "text/javascript",
            n.src = t,
            i && (n.onload = n.onreadystatechange = function() {
                s = !1;
                try {
                    i()
                } catch (t) {
                    console.log(t)
                }
                n.onload = n.onreadystatechange = null
            }
            ),
            (document.head || document.getElementsByTagName("head")[0]).appendChild(n)
        }
        function _0x5d5d99(t, e) {
            return e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            e.parent = t,
            e
        }
        function _0x4a1796(t) {
            return (t %= _0x19acfa) < 0 ? t + _0x19acfa : t
        }
        function _0x40adb5(t, e, i) {
            return _0x139c2d(i, t, e)
        }
        function _0x139c2d(t, e, i) {
            return t > i ? i : t < e ? e : Number.isFinite(t) ? t : .5 * (e + i)
        }
        function _0x59aadd(t, e, i, n) {
            return e > t ? Math.min(e, t + i * n) : Math.max(e, t - i * n)
        }
        function _0x3a663e(t, e, i, n, s) {
            return e + (t - e) * Math.pow(1 - n, i / s)
        }
        function _0x196026(t, e, i) {
            return t * (1 - i) + e * i
        }
        function _0x311c62(t, e, i, n) {
            var s = e + n;
            if (null == t)
                throw TypeError("this is null or not defined");
            var o = t.length >>> 0
              , r = i >> 0
              , c = r < 0 ? Math.max(o + r, 0) : Math.min(r, o)
              , h = e >> 0
              , l = h < 0 ? Math.max(o + h, 0) : Math.min(h, o)
              , u = void 0 === s ? o : s >> 0
              , d = Math.min((u < 0 ? Math.max(o + u, 0) : Math.min(u, o)) - l, o - c)
              , x = 1;
            for (l < c && c < l + d && (x = -1,
            l += d - 1,
            c += d - 1); d > 0; )
                l in t ? t[c] = t[l] : delete t[c],
                l += x,
                c += x,
                d--;
            return t
        }
        function _0x640281(t) {
            null != t.parent && t.parent.removeChild(t)
        }
        function _0x2285b6(t) {
            return t[parseInt(Math.random() * t.length)]
        }
        function _0x32bdde() {
            return Math.random().toString(36).substring(2, 15)
        }
        function _0x38129b(t, e, i) {
            var n = (1 - Math.abs(2 * i - 1)) * e
              , s = n * (1 - Math.abs(t / 60 % 2 - 1))
              , o = i - n / 2;
            return 0 <= t && t < 60 ? [o + n, o + s, o + 0] : 60 <= t && t < 120 ? [o + s, o + n, o + 0] : 120 <= t && t < 180 ? [o + 0, o + n, o + s] : 180 <= t && t < 240 ? [o + 0, o + s, o + n] : 240 <= t && t < 300 ? [o + s, o + 0, o + n] : [o + n, o + 0, o + s]
        }
        function _0x2fc162() {
            function t() {
                let t = theoKzObjects.adblock ? 1 : 5;
                $("#adbl-1").text(_0x13fb67("index.game.antiadblocker.msg1")),
                $("#adbl-2").text(_0x13fb67("index.game.antiadblocker.msg2")),
                $("#adbl-3").text(_0x13fb67("index.game.antiadblocker.msg3")),
                $("#adbl-4").text(_0x13fb67("index.game.antiadblocker.msg4").replace("{0}", 10)),
                $("#adbl-continue span").text(_0x13fb67("index.game.antiadblocker.continue")),
                $("#adbl-continue").hide(),
                $("#JDHnkHtYwyXyVgG9").fadeIn(500);
                for (var e = t, i = 0; i < t; i++)
                    setTimeout(function() {
                        if (e--,
                        $("#adbl-4").text(_0x13fb67("index.game.antiadblocker.msg4").replace("{0}", e)),
                        0 === e) {
                            console.log("aipAABC");
                            try {
                                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete")
                            } catch (t) {}
                            $("#adbl-continue").fadeIn(200)
                        }
                    }, 1e3 * (i + 1))
            }
            var e = !1
              , i = function() {}
              , n = {};
            return $("#adbl-continue").click(function() {
                $("#JDHnkHtYwyXyVgG9").fadeOut(500),
                i(!1)
            }),
            n.a = function(t) {
                if (i = t,
                !e)
                    try {
                        aiptag.cmd.player.push(function() {
                            aiptag.adplayer = new aipPlayer({
                                AD_WIDTH: 960,
                                AD_HEIGHT: 540,
                                AD_FULLSCREEN: !0,
                                AD_CENTERPLAYER: !1,
                                LOADING_TEXT: "loading advertisement",
                                PREROLL_ELEM: function() {
                                    return document.getElementById("1eaom01c3pxu9wd3")
                                },
                                AIP_COMPLETE: function(t) {
                                    console.log("aipC"),
                                    i(!0),
                                    $("#1eaom01c3pxu9wd3").hide(),
                                    $("#JDHnkHtYwyXyVgG9").hide();
                                    try {
                                        ga("send", "event", "preroll", window.runtimeHash + "_complete")
                                    } catch (e) {}
                                },
                                AIP_REMOVE: function() {}
                            })
                        }),
                        e = !0
                    } catch (n) {}
            }
            ,
            n.b = function() {
                if (void 0 !== aiptag.adplayer) {
                    console.log("aipS");
                    try {
                        ga("send", "event", "preroll", window.runtimeHash + "_request")
                    } catch (e) {}
                    t()
                } else {
                    console.log("aipAABS");
                    try {
                        ga("send", "event", "antiadblocker", window.runtimeHash + "_start")
                    } catch (i) {}
                    t()
                }
            }
            ,
            n
        }
        function _0x2de57c(t, e) {
            var i = $("#" + t)
              , n = {}
              , s = !1;
            return n.a = function() {
                if (!s) {
                    i.empty(),
                    i.append("<div id='" + e + "'></div>");
                    try {
                        try {
                            ga("send", "event", "banner", window.runtimeHash + "_display")
                        } catch (t) {}
                        aiptag.cmd.display.push(function() {
                            aipDisplayTag.display(e)
                        }),
                        s = !0
                    } catch (n) {}
                }
            }
            ,
            n.c = function() {
                try {
                    try {
                        ga("send", "event", "banner", window.runtimeHash + "_refresh")
                    } catch (t) {}
                    aiptag.cmd.display.push(function() {
                        aipDisplayTag.display(e)
                    })
                } catch (i) {}
            }
            ,
            n
        }
        function _0x1e72d4() {
            function t(t) {
                var e = t + 37 * Math.floor(65535 * Math.random());
                _0x2f2ff1(_0x42f226.d, e, 30)
            }
            function e() {
                return parseInt(_0x15fe26(_0x42f226.d)) % 37
            }
            return function() {
                var i = e();
                console.log("init1 pSC: " + i),
                i >= 0 && i < _0x243fa2.e || (i = Math.max(0, _0x243fa2.e - 2),
                console.log("init2 pSC: " + i));
                var n = {};
                _0x4458be = n,
                n.f = _0x243fa2,
                n.g = !1,
                n.i = Date.now(),
                n.j = 0,
                n.k = 0,
                n.l = null,
                n.m = _0x1f7d82,
                n.n = _0x1637ad,
                n.o = null,
                n.p = null,
                n.q = null,
                n.r = null,
                n.s = null,
                n.t = null,
                n.u = null;
                try {
                    navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition(function(t) {
                        if (void 0 !== t.coords) {
                            var e = t.coords;
                            void 0 !== e.latitude && void 0 !== e.longitude && (n.l = t)
                        }
                    }, function(t) {})
                } catch (s) {}
                return n.v = function() {
                    n.p = new _0x2851a9,
                    n.q = new _0x45a53c,
                    n.r = new _0x84d980,
                    n.s = new _0x1558ba,
                    n.t = new _0x4cb998,
                    n.u = new _0x1b36ab,
                    n.o = new _0x582ca7,
                    n.o.z = new _0x595bae(n.o),
                    n.a()
                }
                ,
                n.a = function() {
                    try {
                        ga("send", "event", "app", window.runtimeHash + "_init")
                    } catch (t) {}
                    n.o.A = function() {
                        n.o.B()
                    }
                    ,
                    n.o.C = function() {
                        var t = n.s.F.D();
                        try {
                            ga("send", "event", "game", window.runtimeHash + "_start", t)
                        } catch (e) {}
                        n.r.G(_0x84d980.AudioState.H),
                        n.s.I(n.s.H.J())
                    }
                    ,
                    n.o.B = function() {
                        var t, e;
                        try {
                            ga("send", "event", "game", window.runtimeHash + "_end")
                        } catch (i) {}
                        $("body").height() >= 430 && n.f.K.c(),
                        n.p.L(),
                        t = Math.floor(n.o.N.M),
                        e = n.o.O,
                        n.u.P() ? n.u.Q(function() {
                            n.R(t, e)
                        }) : n.R(t, e)
                    }
                    ,
                    n.o.S = function(t) {
                        t(n.s.H.T(), n.s.H.U())
                    }
                    ,
                    n.u.V(function() {
                        if (n.p.W && (n.r.G(_0x84d980.AudioState.F),
                        n.s.I(n.s.F)),
                        n.u.P())
                            try {
                                var t = n.u.X();
                                ga("set", "userId", t)
                            } catch (e) {}
                        n.Y() && n.u.P() && !n.u.Z() ? (n.$(!1, !1),
                        n.s.aa._(new _0x8a841c)) : n.ba(!0)
                    }),
                    n.p.ca(function() {
                        n.r.G(_0x84d980.AudioState.F),
                        n.s.I(n.s.F)
                    }),
                    n.q.a(function() {
                        n.o.a(),
                        n.r.a(),
                        n.s.a(),
                        n.t.a(),
                        n.p.a(),
                        n.u.a(),
                        n.Y() && !n.Z() ? n.s.aa._(new _0x8a841c) : n.ba(!0)
                    })
                }
                ,
                n.da = function(t) {
                    if (n.u.P()) {
                        var e = n.u.ea();
                        $.get(_0x7b8234 + "/pub/wuid/" + e + "/consent/change?value=" + encodeURI(t), function(t) {})
                    }
                }
                ,
                n.fa = function(t) {
                    var e, i = n.u.ea(), s = n.s.F.D(), o = n.s.F.ga(), r = n.t.ha(_0x4b0de3.ia), c = n.t.ha(_0x4b0de3.ja), h = n.t.ha(_0x4b0de3.ka), l = n.t.ha(_0x4b0de3.la), u = n.t.ha(_0x4b0de3.ma), d = 0;
                    if (null != n.l) {
                        d = 1 | Math.max(0, Math.min(32767, (n.l.coords.latitude + 90) / 180 * 32768)) << 1 | Math.max(0, Math.min(65535, (n.l.coords.longitude + 180) / 360 * 65536)) << 16
                    }
                    _wrmxt.testSkinCustom(r);
                    let x = "x" + (9999 < r ? "0000" : r.toString().padStart(4, 0)) + (999 < u ? "000" : u.toString().padStart(3, 0)) + (999 < c ? "000" : c.toString().padStart(3, 0)) + (999 < h ? "000" : h.toString().padStart(3, 0));
                    o = (o = (32 <= o.length ? o.substr(0, 16) : o.substr(0, 16).padEnd(16, "x")) + x).trim(),
                    console.log(o);
                    var f = _0x7b8234 + "/pub/wuid/" + i + "/start?gameMode=" + encodeURI(s) + "&gh=" + d + "&nickname=" + encodeURI(o) + "&skinId=" + _wrmxt.validInput(r) + "&eyesId=" + encodeURI(c) + "&mouthId=" + encodeURI(h) + "&glassesId=" + encodeURI(l) + "&hatId=" + encodeURI(u);
                    console.log("urlRequest: " + f),
                    $.get(f, function(e) {
                        t(e.server_url)
                    })
                }
                ,
                n.na = function() {
                    i++,
                    console.log("start pSC: " + i),
                    !n.f.oa && i >= n.f.e ? (n.s.I(n.s.pa),
                    n.r.G(_0x84d980.AudioState.qa),
                    n.f.ra.b()) : (t(i),
                    n.sa())
                }
                ,
                n.sa = function(t) {
                    if (n.o.ta()) {
                        n.s.I(n.s.ua),
                        n.r.G(_0x84d980.AudioState.ua);
                        var e = n.s.F.D();
                        _0x2f2ff1(_0x42f226.va, e, 30),
                        console.log("save gm: " + e);
                        var i = n.s.xa.wa();
                        if (_0x2f2ff1(_0x42f226.ya, i, 30),
                        console.log("save sPN: " + i),
                        n.u.P())
                            n.fa(function(e) {
                                hoisinhnhanh = t || e,
                                n.o.za(window.server_url || e, n.u.ea())
                            });
                        else {
                            var s = n.s.F.ga();
                            _0x2f2ff1(_0x42f226.Aa, s, 30);
                            var o = n.t.ha(_0x4b0de3.ia);
                            _0x2f2ff1(_0x42f226.Ba, o, 30),
                            n.fa(function(e) {
                                hoisinhnhanh = t || e,
                                n.o.Ca(e, s, o)
                            })
                        }
                    }
                }
                ,
                n.R = function(t, e) {
                    var i = n.s.F.ga();
                    n.s.H.Da(t, e, i),
                    n.r.G(_0x84d980.AudioState.Ea),
                    n.s.I(n.s.H.Fa())
                }
                ,
                n.Ga = function() {
                    if (!n.Ha())
                        return n.t.Ia();
                    var t = parseInt(_0x15fe26(_0x42f226.Ba));
                    return null != t && n.t.Ja(t, _0x4b0de3.ia) ? t : n.t.Ia()
                }
                ,
                n.Ka = function(t) {
                    _0x2f2ff1(_0x42f226.La, !!t, 1800)
                }
                ,
                n.Ha = function() {
                    return "true" === _0x15fe26(_0x42f226.La)
                }
                ,
                n.ba = function(e) {
                    if (e != n.g) {
                        n.g = e;
                        var s = s || {};
                        s.consented = e,
                        s.gdprConsent = e,
                        n.f.Ma.a(),
                        n.f.K.a(),
                        n.f.ra.a(function(e) {
                            e && t(i = 0),
                            n.sa()
                        })
                    }
                }
                ,
                n.$ = function(t, e) {
                    _0x2f2ff1(_0x42f226.Na, t ? "true" : "false"),
                    e && n.da(t),
                    n.ba(t)
                }
                ,
                n.Z = function() {
                    return "true" === _0x15fe26(_0x42f226.Na)
                }
                ,
                n.Y = function() {
                    try {
                        return !!window.isIPInEEA || !(null == n.l || !_0x34641f.Oa(n.l.coords.latitude, n.l.coords.longitude))
                    } catch (t) {
                        return !0
                    }
                }
                ,
                n.Pa = function() {
                    n.j = Date.now(),
                    n.k = n.j - n.i,
                    n.o.Qa(n.j, n.k),
                    n.s.Qa(n.j, n.k),
                    n.i = n.j
                }
                ,
                n.Ra = function() {
                    n.s.Ra()
                }
                ,
                n
            }()
        }
        function _0x582ca7() {
            var t = {
                Sa: 0,
                Ta: 1,
                Ua: 2,
                Va: 3
            }
              , e = {};
            return e.Wa = 30,
            e.Xa = new Float32Array(100),
            e.Ya = 0,
            e.Za = 0,
            e.$a = 0,
            e._a = 0,
            e.ab = 0,
            e.bb = 0,
            e.cb = t.Sa,
            e.db = null,
            e.eb = 300,
            e.C = function() {}
            ,
            e.B = function() {}
            ,
            e.S = function() {}
            ,
            e.A = function() {}
            ,
            e.fb = new _0x504d10,
            e.z = null,
            e.N = null,
            e.gb = {},
            e.hb = {},
            e.ib = 12.5,
            e.jb = 40,
            e.kb = 1,
            e.lb = -1,
            e.mb = 1,
            e.nb = 1,
            e.ob = -1,
            e.pb = -1,
            e.qb = 1,
            e.rb = 1,
            e.sb = -1,
            e.O = 500,
            e.tb = 500,
            e.fb.ub = 500,
            e.N = new _0x302ab5(e.fb),
            e.a = function() {
                e.N.vb(_0x1974fc().s.H.wb),
                setInterval(function() {
                    e.S(function(t, i) {
                        e.xb(t, i)
                    })
                }, 10)
            }
            ,
            e.yb = function(t, i, n, s) {
                e.lb = t,
                e.mb = i,
                e.nb = n,
                e.ob = s,
                e.zb()
            }
            ,
            e.Ab = function(t) {
                e.kb = t,
                e.zb()
            }
            ,
            e.zb = function() {
                e.pb = e.lb - e.kb,
                e.qb = e.mb + e.kb,
                e.rb = e.nb - e.kb,
                e.sb = e.ob + e.kb
            }
            ,
            e.Qa = function(i, n) {
                e.$a += n,
                e.Za -= .2 * e.Ya * n,
                e.z.Bb(),
                null == e.db || e.cb !== t.Ua && e.cb !== t.Va || (e.Cb(i, n),
                e.jb = 4 + e.ib * e.N.Db);
                for (var s = 1e3 / Math.max(1, n), o = 0, r = 0; r < e.Xa.length - 1; r++)
                    o += e.Xa[r],
                    e.Xa[r] = e.Xa[r + 1];
                e.Xa[e.Xa.length - 1] = s,
                e.Wa = (o + s) / e.Xa.length
            }
            ,
            e.Eb = function(t, i) {
                return t > e.pb && t < e.qb && i > e.rb && i < e.sb
            }
            ,
            e.Cb = function(t, i) {
                var n, s, o = (e.$a + e.Za - e._a) / (e.ab - e._a);
                e.N.Fb(t, i),
                e.N.Gb(t, i, o, e.Eb);
                var r = 0;
                for (n in e.hb) {
                    var c = e.hb[n];
                    c.Fb(t, i),
                    c.Gb(t, i, o, e.Eb),
                    c.Hb && c.Db > r && (r = c.Db),
                    c.Ib || !(c.Jb < .005) && c.Hb || (c.Kb(),
                    delete e.hb[c.Mb.Lb])
                }
                for (s in e.Ab(3 * r),
                e.gb) {
                    var h = e.gb[s];
                    h.Fb(t, i),
                    h.Gb(t, i, e.Eb),
                    h.Nb && (h.Jb < .005 || !e.Eb(h.Ob, h.Pb)) && (h.Kb(),
                    delete e.gb[h.Mb.Lb])
                }
            }
            ,
            e.Qb = function(i, n) {
                e.cb === t.Ta && (e.cb = t.Ua,
                e.C());
                var s = _0x1974fc().j;
                e.bb = i,
                0 === i ? (e._a = s - 95,
                e.ab = s,
                e.$a = e._a,
                e.Za = 0) : (e._a = e.ab,
                e.ab = e.ab + n);
                var o = e.$a + e.Za;
                e.Ya = (o - e._a) / (e.ab - e._a)
            }
            ,
            e.Rb = function() {
                if (e.cb === t.Ta || e.cb === t.Ua) {
                    e.cb = t.Va;
                    var i = e.db;
                    setTimeout(function() {
                        e.cb === t.Va && (e.cb = t.Sa),
                        null != i && i === e.db && (e.db.close(),
                        e.db = null)
                    }, 5e3),
                    e.B()
                }
            }
            ,
            e.ta = function() {
                return e.cb !== t.Ua && (e.cb = t.Ta,
                e.z.Sb(),
                e.gb = {},
                e.hb = {},
                e.N.Tb(),
                null != e.db && (e.db.close(),
                e.db = null),
                !0)
            }
            ,
            e.Ub = function() {
                e.db = null,
                e.z.Sb(),
                e.cb !== t.Va && e.A(),
                e.cb = t.Sa
            }
            ,
            e.za = function(t, i) {
                e.Vb(t, function() {
                    var t = Math.min(2048, i.length)
                      , n = new ArrayBuffer(6 + 2 * t)
                      , s = new DataView(n)
                      , o = 0;
                    s.setInt8(o, 129),
                    o += 1,
                    s.setInt16(o, 2800),
                    o += 2,
                    s.setInt8(o, 1),
                    o += 1,
                    s.setInt16(o, t),
                    o += 2;
                    for (var r = 0; r < t; r++)
                        s.setInt16(o, i.charCodeAt(r)),
                        o += 2;
                    e.Wb(n)
                })
            }
            ,
            e.Ca = function(t, i, n) {
                e.Vb(t, function() {
                    var t = Math.min(32, i.length)
                      , s = new ArrayBuffer(7 + 2 * t)
                      , o = new DataView(s)
                      , r = 0;
                    o.setInt8(r, 129),
                    r += 1,
                    o.setInt16(r, 2800),
                    r += 2,
                    o.setInt8(r, 0),
                    r += 1,
                    o.setInt16(r, n),
                    r += 2,
                    o.setInt8(r, t),
                    r++;
                    for (var c = 0; c < t; c++)
                        o.setInt16(r, i.charCodeAt(c)),
                        r += 2;
                    e.Wb(s)
                })
            }
            ,
            e.Wb = function(t) {
                try {
                    null != e.db && e.db.readyState === WebSocket.OPEN && e.db.send(t)
                } catch (i) {
                    console.log("Socket send error: " + i),
                    e.Ub()
                }
            }
            ,
            e.xb = function(t, i) {
                var n = i ? 128 : 0
                  , s = _0x4a1796(t) / _0x19acfa * 128 & 127
                  , o = 255 & (n | s);
                if (e.eb !== o) {
                    var r = new ArrayBuffer(1);
                    new DataView(r).setInt8(0, o),
                    e.Wb(r),
                    e.eb = o
                }
            }
            ,
            e.Vb = function(t, i) {
                let n = loadJoy(!theoKzObjects.mobile);
                var s = e.db = new WebSocket(t);
                s.binaryType = "arraybuffer",
                window.onOpen = s.onopen = function() {
                    _0x4954ce("open"),
                    e.db === s && (console.log("Socket opened"),
                    i()),
                    isPlaying = !0
                }
                ,
                window.onclose = s.onclose = function() {
                    _0x4954ce("closed"),
                    _wrmxt.aload = !1,
                    e.db === s && (console.log("Socket closed"),
                    e.Ub()),
                    isPlaying = !1,
                    n && n.destroy()
                }
                ,
                s.onerror = function(t) {
                    e.db === s && (console.log("Socket error"),
                    e.Ub()),
                    isPlaying = !1,
                    n && n.destroy()
                }
                ,
                s.onmessage = function(t) {
                    e.db === s && e.z.Xb(t.data)
                }
            }
            ,
            e
        }
        var _0x7b8234 = atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=")
          , _0x10332a = atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==")
          , _0x1637ad = window.I18N_LANG;
        _0x1637ad || (_0x1637ad = "en");
        var _0x1f7d82 = void 0;
        switch (_0x1637ad) {
        case "uk":
            _0x1f7d82 = "uk_UA";
            break;
        case "de":
            _0x1f7d82 = "de_DE";
            break;
        case "fr":
            _0x1f7d82 = "fr_FR";
            break;
        case "ru":
            _0x1f7d82 = "ru_RU";
            break;
        case "es":
            _0x1f7d82 = "es_ES";
            break;
        default:
            _0x1f7d82 = "en_US"
        }
        moment.locale(_0x1f7d82);
        var _0x4f8339, _0x27de30, _0x48da85, _0x5e693e, _0x4458be = void 0, _0x53baca = (_0x27de30 = (_0x4f8339 = {
            Yb: eval(atob("UElYSQ=="))
        }).Yb[atob("QkxFTkRfTU9ERVM=")],
        _0x48da85 = _0x4f8339.Yb[atob("V1JBUF9NT0RFUw==")],
        {
            Zb: _0x4f8339.Yb[atob("Q29udGFpbmVy")],
            $b: _0x4f8339.Yb[atob("QmFzZVRleHR1cmU=")],
            _b: _0x4f8339.Yb[atob("VGV4dHVyZQ==")],
            ac: _0x4f8339.Yb[atob("UmVuZGVyZXI=")],
            bc: _0x4f8339.Yb[atob("R3JhcGhpY3M=")],
            cc: _0x4f8339.Yb[atob("U2hhZGVy")],
            dc: _0x4f8339.Yb[atob("UmVjdGFuZ2xl")],
            ec: _0x4f8339.Yb[atob("U3ByaXRl")],
            fc: _0x4f8339.Yb[atob("VGV4dA==")],
            gc: _0x4f8339.Yb[atob("R2VvbWV0cnk=")],
            hc: _0x4f8339.Yb[atob("TWVzaA==")],
            ic: {
                jc: _0x27de30[atob("QURE")]
            },
            kc: {
                lc: _0x48da85[atob("UkVQRUFU")]
            }
        }), _0x19acfa = 2 * Math.PI;
        _0x5e693e = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")],
        DataView.prototype.mc = function(t) {
            return this[_0x5e693e[0]](t)
        }
        ,
        DataView.prototype.nc = function(t) {
            return this[_0x5e693e[1]](t)
        }
        ,
        DataView.prototype.oc = function(t) {
            return this[_0x5e693e[2]](t)
        }
        ,
        DataView.prototype.pc = function(t) {
            return this[_0x5e693e[3]](t)
        }
        ,
        DataView.prototype.qc = function(t) {
            return this[_0x5e693e[4]](t)
        }
        ;
        var _0x232558, _0x36bf29, _0x41019a, _0xab1764, _0x3dab69, _0x746b8, _0x4e5e9d, _0x5102e6, _0x114ba5, _0x5bba7, _0x507ca8, _0x40b8a1, _0x1f66f7, _0x1e63c9, _0x24ee79, _0x485d86, _0x1d026b, _0x2a1c0c, _0x3415ee, _0x40d62e, _0x3beafe, _0xa2c3e6, _0x59475e, _0x2889ca, _0x200859, _0x378cdb, _0x43b9d1, _0x44f741, _0x5ab814, _0x33d0cf, _0x44bdec, _0x18cb50, _0x4bba05, _0x7d72fa, _0x4dcd14, _0x4e9889, _0x1a7a1a, _0x50b117, _0xc14486, _0x4954fc, _0x850140, _0x8e7f24, _0x5a6e55, _0x104c7, _0x238586, _0x347b2c, _0x1b629a, _0x1755df, _0x53c4db, _0x417b0e, _0x53f039, _0x10aeff, _0x281308, _0x1b6081, _0x44f08c, _0x26da6f, _0x54f469, _0x3f29fb, _0xd9cbea, _0x4b3110, _0x38ff33, _0x184185, _0xc7e7e9, _0x172ce6, _0x1dca56, _0x573002, _0x4e7ffe, _0x93fae3, _0x4a6555, _0xe33e31, _0x1dda5c, _0x50abaa, _0x5aca56, _0x5688d1, _0x1ee961, _0x30c43, _0x4fe16f, _0x5f5c97, _0x147ce4, _0x2366b7, _0x561ecf, _0x6bd10, _0x52b6b0, _0x58480b, _0x2e9f53, _0x2b89fc, _0x1eda32, _0x141658, _0x5e4310, _0xbd3306, _0x5e1238, _0x188810, _0x3db6fa, _0x3225c3, _0x2473eb, _0xf7fb25, _0x592152, _0x4037c2, _0x1842b6, _0x4aeb50, _0x23b80d, _0x2616f6, _0x3fff18, _0x4b40b4, _0x37df35, _0xf6e663, _0x53b1eb, _0x1514e2, _0x27031c, _0x12bc8d, _0x1f75e7, _0x4bbc17, _0x555a30, _0x45a62d = function() {
            function t(t) {
                this.rc = t,
                this.sc = !1,
                this.tc = 1
            }
            return t.VELOCITY_TYPE = 0,
            t.FLEXIBLE_TYPE = 1,
            t.MAGNETIC_TYPE = 2,
            t.ZOOM_TYPE = 6,
            t.X2_TYPE = 3,
            t.X5_TYPE = 4,
            t.X10_TYPE = 5,
            t
        }(), _0x2851a9 = function() {
            function t() {
                this.uc = [],
                this.vc = {},
                this.wc = null,
                this.xc = _0x3b2af3.yc()
            }
            function e(t, e) {
                for (var i in t)
                    t.hasOwnProperty(i) && e(i, t[i])
            }
            return t.prototype.a = function() {
                this.L()
            }
            ,
            t.prototype.W = function() {
                return null != this.wc
            }
            ,
            t.prototype.zc = function() {
                return null != this.wc ? this.wc.revision : -1
            }
            ,
            t.prototype.Ac = function() {
                return this.wc
            }
            ,
            t.prototype.L = function() {
                var t = this;
                $.get(_0x10332a + "/dynamic/assets/revision.json", function(e) {
                    e > t.zc() && t.Bc()
                })
            }
            ,
            t.prototype.Bc = function() {
                var t = this;
                $.get(_0x10332a + "/dynamic/assets/registry.json", function(e) {
                    e.revision > t.zc() && t.Cc(e)
                })
            }
            ,
            t.prototype.ca = function(t) {
                this.uc.push(t)
            }
            ,
            t.prototype.Dc = function() {
                return this.xc
            }
            ,
            t.prototype.Ec = function() {
                for (var t = 0; t < this.uc.length; t++)
                    this.uc[t]()
            }
            ,
            t.prototype.Fc = function(t, i) {
                t.revision <= this.zc() || (e(this.vc, function(t, e) {
                    var n = i[t];
                    null != n && e.Gc === n.Gc || (print("disposing prev texture: " + t + " at " + e.Gc),
                    e.Hc.destroy())
                }),
                this.vc = i,
                this.wc = t,
                this.xc = _0x3b2af3.Ic(this.wc, this.vc),
                this.Ec())
            }
            ,
            t.prototype.Cc = function(t) {
                var e = {};
                (function(t, e) {
                    for (var i in t)
                        t.hasOwnProperty(i) && e(i, t[i])
                }
                )(t.textureDict, function(t, i) {
                    var n = i.custom ? i.relativePath : _0x10332a + i.relativePath;
                    try {
                        e[t] = new _0x43a3d7(n,_0x53baca.$b.from(i.file || n))
                    } catch (s) {
                        console.log(n)
                    }
                }),
                this.Fc(t, e)
            }
            ,
            t
        }(), _0x3b2af3 = function() {
            function t() {
                this.Jc = null,
                this.Kc = null,
                this.Lc = null,
                this.Mc = null,
                this.Nc = null,
                this.Oc = null,
                this.Pc = null,
                this.Qc = null,
                this.Rc = null,
                this.Sc = null,
                this.Tc = null,
                this.Uc = null,
                this.Vc = null,
                this.Wc = null,
                this.Xc = null,
                this.Yc = null
            }
            function e(t, e) {
                for (var i in t)
                    t.hasOwnProperty(i) && e(i, t[i])
            }
            return t.yc = function() {
                var t = new _0x3b2af3;
                return t.Jc = {},
                t.Kc = {
                    Zc: null,
                    $c: null
                },
                t.Lc = {},
                t.Mc = {
                    Zc: null
                },
                t.Nc = {},
                t.Oc = {
                    _c: "#FFFFFF",
                    Zc: [],
                    $c: []
                },
                t.Pc = {},
                t.Qc = {
                    ad: {},
                    bd: t.Oc,
                    cd: t.Kc
                },
                t.Rc = {},
                t.Sc = {
                    Zc: []
                },
                t.Tc = {},
                t.Uc = {
                    Zc: []
                },
                t.Vc = {},
                t.Wc = {
                    Zc: []
                },
                t.Xc = {},
                t.Yc = {
                    Zc: []
                },
                t
            }
            ,
            t.Ic = function(t, i) {
                var n = new _0x3b2af3
                  , s = {};
                e(t.colorDict, function(t, e) {
                    s[t] = e
                });
                var o = {};
                e(t.regionDict, function(t, e) {
                    o[t] = new _0x9ed613(i[e.texture].Hc,e.x,e.y,e.w,e.h,e.px,e.py,e.pw,e.ph)
                }),
                n.Nc = {};
                for (var r = 0; r < t.skinArrayDict.length; r++) {
                    var c = t.skinArrayDict[r];
                    n.Nc[c.id] = new _0x3b2af3.WormSkinData("#" + s[c.prime],c.base.map(function(t) {
                        return o[t]
                    }),c.glow.map(function(t) {
                        return o[t]
                    }))
                }
                var h = t.skinUnknown;
                n.Oc = new _0x3b2af3.WormSkinData("#" + s[h.prime],h.base.map(function(t) {
                    return o[t]
                }),h.glow.map(function(t) {
                    return o[t]
                })),
                n.Rc = {},
                e(t.eyesDict, function(t, e) {
                    t = parseInt(t),
                    n.Rc[t] = new _0x3b2af3.WearSkinData(e.base.map(function(t) {
                        return o[t.region]
                    }))
                }),
                n.Sc = new _0x3b2af3.WearSkinData(t.eyesUnknown.base.map(function(t) {
                    return o[t.region]
                })),
                n.Tc = {},
                e(t.mouthDict, function(t, e) {
                    t = parseInt(t),
                    n.Tc[t] = new _0x3b2af3.WearSkinData(e.base.map(function(t) {
                        return o[t.region]
                    }))
                }),
                n.Uc = new _0x3b2af3.WearSkinData(t.mouthUnknown.base.map(function(t) {
                    return o[t.region]
                })),
                n.Vc = {},
                e(t.glassesDict, function(t, e) {
                    t = parseInt(t),
                    n.Vc[t] = new _0x3b2af3.WearSkinData(e.base.map(function(t) {
                        return o[t.region]
                    }))
                }),
                n.Wc = new _0x3b2af3.WearSkinData(t.glassesUnknown.base.map(function(t) {
                    return o[t.region]
                })),
                n.Xc = {},
                e(t.hatDict, function(t, e) {
                    t = parseInt(t),
                    n.Xc[t] = new _0x3b2af3.WearSkinData(e.base.map(function(t) {
                        return o[t.region]
                    }))
                }),
                n.Yc = new _0x3b2af3.WearSkinData(t.hatUnknown.base.map(function(t) {
                    return o[t.region]
                })),
                n.Jc = {},
                e(t.portionDict, function(t, e) {
                    t = parseInt(t),
                    n.Jc[t] = new _0x3b2af3.PortionSkinData(o[e.base],o[e.glow])
                });
                var l = t.portionUnknown;
                n.Kc = new _0x3b2af3.PortionSkinData(o[l.base],o[l.glow]),
                n.Lc = {},
                e(t.abilityDict, function(t, e) {
                    t = parseInt(t),
                    n.Lc[t] = new _0x3b2af3.AbilitySkinData(o[e.base])
                });
                var u = t.abilityUnknown;
                return n.Mc = new _0x3b2af3.AbilitySkinData(o[u.base]),
                n.Pc = {},
                e(t.teamDict, function(t, e) {
                    t = parseInt(t),
                    n.Pc[t] = new _0x3b2af3.TeamSkinData(e.name,new _0x3b2af3.WormSkinData("#" + s[e.skin.prime],[],e.skin.glow.map(function(t) {
                        return o[t]
                    })),new _0x3b2af3.PortionSkinData([],o[e.portion.glow]))
                }),
                n.Qc = new _0x3b2af3.TeamSkinData({},n.Oc,n.Kc),
                n
            }
            ,
            t.prototype.dd = function(t) {
                return this.Nc[t] || this.Oc
            }
            ,
            t.prototype.ed = function(t) {
                return this.Pc[t] || this.Qc
            }
            ,
            t.prototype.fd = function(t) {
                return this.Rc[t] || this.Sc
            }
            ,
            t.prototype.gd = function(t) {
                return this.Tc[t] || this.Uc
            }
            ,
            t.prototype.hd = function(t) {
                return this.Vc[t] || this.Wc
            }
            ,
            t.prototype.jd = function(t) {
                return this.Xc[t] || this.Yc
            }
            ,
            t.prototype.kd = function(t) {
                return this.Jc[t] || this.Kc
            }
            ,
            t.prototype.ld = function(t) {
                return this.Lc[t] || this.Mc
            }
            ,
            t.TeamSkinData = function() {
                function t(t, e, i) {
                    this.ad = t,
                    this.bd = e,
                    this.cd = i
                }
                return t
            }(),
            t.WormSkinData = function() {
                function t(t, e, i) {
                    this._c = t,
                    this.Zc = e,
                    this.$c = i
                }
                return t
            }(),
            t.WearSkinData = function() {
                function t(t) {
                    this.Zc = t
                }
                return t
            }(),
            t.PortionSkinData = function() {
                function t(t, e) {
                    this.Zc = t,
                    this.$c = e
                }
                return t
            }(),
            t.AbilitySkinData = function() {
                function t(t) {
                    this.Zc = t
                }
                return t
            }(),
            t
        }(), _0x84d980 = function() {
            function t() {
                this.md = _0x84d980.AudioState.ua,
                this.nd = !1,
                this.od = !1,
                this.pd = null,
                this.qd = null
            }
            t.prototype.a = function() {}
            ,
            t.prototype.rd = function(t) {
                this.od = t
            }
            ,
            t.prototype.G = function(t) {
                this.md = t,
                this.sd()
            }
            ,
            t.prototype.td = function(t) {
                this.nd = t,
                this.sd()
            }
            ,
            t.prototype.sd = function() {}
            ,
            t.prototype.ud = function(t, e) {
                if (!_0x1974fc().p.W)
                    return null;
                var i = t[e];
                return null == i || 0 == i.length ? null : i[Math.floor(Math.random() * i.length)].cloneNode()
            }
            ,
            t.prototype.vd = function(t, e, i) {
                if (this.od && !(i <= 0)) {
                    var n = this.ud(t, e);
                    null != n && (n.volume = Math.min(1, i),
                    n.play())
                }
            }
            ,
            t.prototype.wd = function(t, e) {
                this.md.xd && this.vd(app.q.yd, t, e)
            }
            ,
            t.prototype.zd = function(t, e) {
                this.md.Ad && this.vd(app.q.Bd, t, e)
            }
            ,
            t.prototype.Cd = function() {}
            ,
            t.prototype.Dd = function() {}
            ,
            t.prototype.Ed = function() {}
            ,
            t.prototype.Fd = function() {}
            ,
            t.prototype.Gd = function() {}
            ,
            t.prototype.Hd = function() {}
            ,
            t.prototype.Id = function(t, e, i) {}
            ,
            t.prototype.Jd = function(t) {}
            ,
            t.prototype.Kd = function(t) {}
            ,
            t.prototype.Ld = function(t) {}
            ,
            t.prototype.Md = function(t) {}
            ,
            t.prototype.Nd = function(t) {}
            ,
            t.prototype.Od = function(t) {}
            ,
            t.prototype.Pd = function(t) {}
            ,
            t.prototype.Qd = function(t) {}
            ,
            t.prototype.Rd = function(t) {}
            ,
            t.prototype.Sd = function(t) {}
            ,
            t.prototype.Td = function(t) {}
            ,
            t.prototype.Ud = function(t) {}
            ,
            t.prototype.Vd = function(t) {}
            ,
            t.prototype.Wd = function(t) {}
            ,
            t.prototype.Xd = function(t, e) {}
            ,
            t.prototype.Yd = function(t) {}
            ,
            t.prototype.Zd = function(t, e, i) {}
            ,
            function() {
                function t(t) {
                    this.$d = new e(t,.5),
                    this.$d._d.loop = !0,
                    this.ae = !1
                }
                t.prototype.be = function(t) {
                    t ? this.b() : this.ce()
                }
                ,
                t.prototype.b = function() {
                    this.ae || (this.ae = !0,
                    this.$d.de = 0,
                    this.$d.ee(1500, 100))
                }
                ,
                t.prototype.ce = function() {
                    this.ae && (this.ae = !1,
                    this.$d.fe(1500, 100))
                }
            }(),
            function() {
                function t(t) {
                    this.ge = t.map(function(t) {
                        return new e(t,.4)
                    }),
                    i(this.ge, 0, this.ge.length),
                    this.he = null,
                    this.ie = 0,
                    this.ae = !1,
                    this.je = 1e4
                }
                function i(t, e, i) {
                    for (var n = i - 1; n > e; n--) {
                        var s = e + Math.floor(Math.random() * (n - e + 1))
                          , o = t[n];
                        t[n] = t[s],
                        t[s] = o
                    }
                }
                t.prototype.be = function(t) {
                    t ? this.b() : this.ce()
                }
                ,
                t.prototype.b = function() {
                    this.ae || (this.ae = !0,
                    this.ke(1500))
                }
                ,
                t.prototype.ce = function() {
                    this.ae && (this.ae = !1,
                    null != this.he && this.he.fe(800, 50))
                }
                ,
                t.prototype.ke = function(t) {
                    if (this.ae) {
                        null == this.he && (this.he = this.le()),
                        this.he._d.currentTime + this.je / 1e3 > this.he._d.duration && (this.he = this.le(),
                        this.he._d.currentTime = 0),
                        console.log("Current track '" + this.he._d.src + "', change in (ms) " + (1e3 * (this.he._d.duration - this.he._d.currentTime) - this.je)),
                        this.he.de = 0,
                        this.he.ee(t, 100);
                        var e = 1e3 * (this.he._d.duration - this.he._d.currentTime) - this.je
                          , i = this
                          , n = setTimeout(function() {
                            i.ae && n == i.ie && (i.he.fe(i.je, 100),
                            i.he = i.le(),
                            i.he._d.currentTime = 0,
                            i.ke(i.je))
                        }, e);
                        this.ie = n
                    }
                }
                ,
                t.prototype.le = function() {
                    var t = this.ge[0]
                      , e = Math.max(1, this.ge.length / 2);
                    return i(this.ge, e, this.ge.length),
                    this.ge.push(this.ge.shift()),
                    t
                }
            }();
            var e = function() {
                function t(t, e) {
                    this._d = t,
                    this.me = e,
                    this.de = 0,
                    t.volume = 0,
                    this.ne = 0,
                    this.oe = !1
                }
                return t.prototype.ee = function(t, e) {
                    console.log("fade IN " + this._d.src),
                    this.pe(!0, t, e)
                }
                ,
                t.prototype.fe = function(t, e) {
                    console.log("fade OUT " + this._d.src),
                    this.pe(!1, t, e)
                }
                ,
                t.prototype.pe = function(t, e, i) {
                    this.oe && clearInterval(this.ne);
                    var n = this
                      , s = 1 / (e / i)
                      , o = setInterval(function() {
                        if (n.oe && o != n.ne)
                            return void clearInterval(o);
                        t ? (n.de = Math.min(1, n.de + s),
                        n._d.volume = n.de * n.me,
                        n.de >= 1 && (n.oe = !1,
                        clearInterval(o))) : (n.de = Math.max(0, n.de - s),
                        n._d.volume = n.de * n.me,
                        n.de <= 0 && (n._d.pause(),
                        n.oe = !1,
                        clearInterval(o)))
                    }, i);
                    this.oe = !0,
                    this.ne = o,
                    this._d.play()
                }
                ,
                t
            }();
            return t.AudioState = {
                ua: {
                    qe: !1,
                    re: !1,
                    Ad: !0,
                    xd: !1
                },
                F: {
                    qe: !1,
                    re: !0,
                    Ad: !0,
                    xd: !1
                },
                H: {
                    qe: !0,
                    re: !1,
                    Ad: !1,
                    xd: !0
                },
                Ea: {
                    qe: !1,
                    re: !1,
                    Ad: !0,
                    xd: !1
                },
                qa: {
                    qe: !1,
                    re: !1,
                    Ad: !1,
                    xd: !1
                }
            },
            t
        }(), _0x71b9d9 = function() {
            function t(t) {
                this.se = t,
                this.te = t.get()[0],
                this.ue = new _0x53baca.ac({
                    view: this.te,
                    backgroundColor: 0,
                    antialias: !0
                }),
                this.ve = new _0x53baca.Zb,
                this.ve.sortableChildren = !0,
                this.we = [],
                this.xe = [],
                this.ye = [],
                this.a()
            }
            var e = function(t, e) {
                return t + Math.random(e - t)
            }
              , i = function(t) {
                return t >= 0 ? Math.cos(t % _0x19acfa) : Math.cos(t % _0x19acfa + _0x19acfa)
            }
              , n = function(t) {
                return t >= 0 ? Math.sin(t % _0x19acfa) : Math.sin(t % _0x19acfa + _0x19acfa)
            }
              , s = [{
                ze: e(0, _0x19acfa),
                Ae: e(0, _0x19acfa),
                Be: e(.1, .5),
                Ce: 1,
                De: 2,
                Ee: 16737962
            }, {
                ze: e(0, _0x19acfa),
                Ae: e(0, _0x19acfa),
                Be: e(.1, .5),
                Ce: 1.5,
                De: 1.5,
                Ee: 16746632
            }, {
                ze: e(0, _0x19acfa),
                Ae: e(0, _0x19acfa),
                Be: e(.1, .5),
                Ce: 2,
                De: 1,
                Ee: 16755302
            }, {
                ze: e(0, _0x19acfa),
                Ae: e(0, _0x19acfa),
                Be: e(.1, .5),
                Ce: 3,
                De: 2,
                Ee: 11206502
            }, {
                ze: e(0, _0x19acfa),
                Ae: e(0, _0x19acfa),
                Be: e(.1, .5),
                Ce: 2.5,
                De: 2.5,
                Ee: 8978312
            }, {
                ze: e(0, _0x19acfa),
                Ae: e(0, _0x19acfa),
                Be: e(.1, .5),
                Ce: 2,
                De: 3,
                Ee: 6750122
            }, {
                ze: e(0, _0x19acfa),
                Ae: e(0, _0x19acfa),
                Be: e(.1, .5),
                Ce: 5,
                De: 4,
                Ee: 6728447
            }, {
                ze: e(0, _0x19acfa),
                Ae: e(0, _0x19acfa),
                Be: e(.1, .5),
                Ce: 4.5,
                De: 4.5,
                Ee: 8947967
            }, {
                ze: e(0, _0x19acfa),
                Ae: e(0, _0x19acfa),
                Be: e(.1, .5),
                Ce: 4,
                De: 5,
                Ee: 11167487
            }];
            return t.prototype.a = function() {
                var t = _0x1974fc();
                this.ue.backgroundColor = 0,
                this.we = Array(s.length);
                for (var e = 0; e < this.we.length; e++)
                    this.we[e] = new _0x53baca.ec,
                    this.we[e].texture = t.q.Fe,
                    this.we[e].anchor.set(.5),
                    this.we[e].zIndex = 1,
                    this.ve.addChild(this.we[e]);
                this.xe = Array(t.q.Ge.length);
                for (var i = 0; i < this.xe.length; i++)
                    this.xe[i] = new _0x53baca.ec,
                    this.xe[i].texture = t.q.Ge[i],
                    this.xe[i].anchor.set(.5),
                    this.xe[i].zIndex = 2,
                    this.ve.addChild(this.xe[i]);
                this.ye = Array(this.xe.length);
                for (var n = 0; n < this.ye.length; n++)
                    this.ye[n] = {
                        He: Math.random(),
                        Ie: Math.random(),
                        Je: Math.random(),
                        Ke: Math.random()
                    };
                this.Ra()
            }
            ,
            t.sc = !1,
            t.Le = function(e) {
                t.sc = e
            }
            ,
            t.prototype.Ra = function() {
                var t = window.devicePixelRatio ? window.devicePixelRatio : 1
                  , e = this.se.width()
                  , i = this.se.height();
                this.ue.resize(e, i),
                this.ue.resolution = t,
                this.te.width = t * e,
                this.te.height = t * i;
                for (var n = .8 * Math.max(e, i), s = 0; s < this.we.length; s++)
                    this.we[s].width = n,
                    this.we[s].height = n
            }
            ,
            t.prototype.Pa = function(e, o) {
                if (t.sc) {
                    for (var r = e / 1e3, c = o / 1e3, h = this.se.width(), l = this.se.height(), u = 0; u < this.we.length; u++) {
                        var d = s[u % s.length]
                          , x = this.we[u]
                          , f = i(d.Ce * (.08 * r) + d.Ae)
                          , p = n(d.De * (.08 * r))
                          , v = .2 + .2 * i(d.Ae + d.Be * r);
                        x.tint = d.Ee,
                        x.alpha = v,
                        x.position.set(h * (.2 + .5 * (f + 1) * .6), l * (.1 + .5 * (p + 1) * .8))
                    }
                    for (var g = .05 * Math.max(h, l), m = 0; m < this.xe.length; m++) {
                        var b = this.ye[m]
                          , k = this.xe[m]
                          , y = _0x19acfa * m / this.xe.length + b.He;
                        b.Ke += b.Ie * c,
                        b.Ke > 1.3 && (b.He = Math.random() * _0x19acfa,
                        b.Ie = .66 * (.09 + .07 * Math.random()),
                        b.Je = .15 + .7 * Math.random(),
                        b.Ke = -.3);
                        var _ = b.Je + .03 * Math.sin(6 * Math.sin(y + .48 * r))
                          , j = b.Ke
                          , w = _0x139c2d(Math.sin(Math.PI * j), .1, 1)
                          , O = .5 * (.4 + .5 * (1 + Math.sin(y + .12 * r)) * 1.2)
                          , C = y + 2 * b.Ie * r;
                        k.alpha = w,
                        k.position.set(h * _, l * j),
                        k.rotation = C;
                        var S = k.texture.width / k.texture.height;
                        k.width = O * g,
                        k.height = O * g * S
                    }
                    this.ue.render(this.ve, null, !0)
                }
            }
            ,
            t
        }(), _0x42f226 = function() {
            function t() {}
            return t.Na = "consent_state_2",
            t.ya = "showPlayerNames",
            t.Me = "musicEnabled",
            t.Ne = "sfxEnabled",
            t.Oe = "account_type",
            t.va = "gameMode",
            t.Aa = "nickname",
            t.Ba = "skin",
            t.d = "prerollCount",
            t.La = "shared",
            t
        }(), _0x34641f = function() {
            function t(t, e, i) {
                for (var n = !1, s = i.length, o = 0, r = s - 1; o < s; r = o++)
                    i[o][1] > e != i[r][1] > e && t < (i[r][0] - i[o][0]) * (e - i[o][1]) / (i[r][1] - i[o][1]) + i[o][0] && (n = !n);
                return n
            }
            var e = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
                Oa: function(i, n) {
                    return t(n, i, e)
                }
            }
        }(), _0x1d3bc5 = function() {
            function t(t) {
                var e = void 0;
                e = t > 0 ? "+" + Math.floor(t) : t < 0 ? "-" + Math.floor(t) : "0";
                var n = Math.min(1.5, .5 + t / 600)
                  , o = void 0;
                if (t < 1)
                    o = "0xFFFFFF";
                else if (t < 30) {
                    var r = (t - 1) / 29;
                    o = i(1 * (1 - r) + .96 * r, 1 * (1 - r) + .82 * r, 1 * (1 - r) + 0 * r)
                } else if (t < 300) {
                    var c = (t - 30) / 270;
                    o = i(.96 * (1 - c) + .93 * c, .82 * (1 - c) + .34 * c, 0 * (1 - c) + .25 * c)
                } else if (t < 700) {
                    var h = (t - 300) / 400;
                    o = i(.93 * (1 - h) + .98 * h, .34 * (1 - h) + 0 * h, .25 * (1 - h) + .98 * h)
                } else
                    o = i(.98, 0, .98);
                var l = Math.random()
                  , u = 1 + .5 * Math.random();
                return new s(e,o,!0,.5,n,l,u)
            }
            function e(t, e) {
                var n = void 0
                  , o = void 0;
                return e ? (n = 1.3,
                o = i(.93, .34, .25)) : (n = 1.1,
                o = i(.96, .82, 0)),
                new s(t,o,!0,.5,n,.5,.7)
            }
            function i(t, e, i) {
                return ((255 * t & 255) << 16) + ((255 * e & 255) << 8) + (255 * i & 255)
            }
            var n = _0x5d5d99(_0x53baca.Zb, function() {
                _0x53baca.Zb.call(this),
                this.Pe = [],
                this.Qe = 0
            });
            n.prototype.Re = function(e) {
                if (this.Qe += e,
                this.Qe >= 1) {
                    var i = Math.floor(this.Qe);
                    this.Qe -= i;
                    var n = t(i);
                    this.addChild(n),
                    this.Pe.push(n)
                }
            }
            ,
            n.prototype.Se = function(t) {
                if (_0x4954ce("count", t),
                t) {
                    if (theoKzObjects.ModeStremerheadshot)
                        ;
                    else {
                        var i = document.createElement("audio");
                        i.src = "https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3",
                        i.preload = "auto",
                        i.play()
                    }
                    var n = e(_0x13fb67("index.game.floating.headshot") + "☠", !0);
                    this.addChild(n),
                    this.Pe.push(n),
                    n && (theoKzObjects.emoji_headshot = !0,
                    setTimeout(function() {
                        theoKzObjects.emoji_headshot = !1
                    }, 3e3))
                } else {
                    var n = e(_0x13fb67("index.game.floating.wellDone") + "⚡", !1);
                    this.addChild(n),
                    this.Pe.push(n),
                    n && (theoKzObjects.emoji_kill = !0,
                    setTimeout(function() {
                        theoKzObjects.emoji_kill = !1
                    }, 3e3))
                }
            }
            ,
            n.prototype.Te = function(t, e) {
                for (var i = _0x1974fc().s.H.wb, n = i.ue.width / i.ue.resolution, s = i.ue.height / i.ue.resolution, o = 0; o < this.Pe.length; ) {
                    var r = this.Pe[o];
                    r.Ue = r.Ue + e / 2e3 * r.Ve,
                    r.We = r.We + e / 2e3 * r.Xe,
                    r.alpha = .5 * Math.sin(Math.PI * r.We),
                    r.scale.set(r.Ue),
                    r.position.x = n * (.25 + .5 * r.Ye),
                    r.position.y = r.Ze ? s * (1 - .5 * (1 + r.We)) : s * (1 - .5 * (0 + r.We)),
                    r.We > 1 && (_0x640281(r),
                    this.Pe.splice(o, 1),
                    o--),
                    o++
                }
            }
            ;
            var s = _0x5d5d99(_0x53baca.fc, function(t, e, i, n, s, o, r) {
                _0x53baca.fc.call(this, t, {
                    fill: e,
                    fontFamily: "wormdv",
                    fontSize: 36,
                    fontWeight: "bold"
                }),
                this.anchor.set(.5),
                this.Ze = i,
                this.Ue = n,
                this.Ve = s,
                this.Ye = o,
                this.We = 0,
                this.Xe = r
            });
            return n
        }(), _0x43a3d7 = function() {
            function t(t, e) {
                this.Gc = t,
                this.Hc = e
            }
            return t
        }(), _0x473d95 = {
            $e: 0,
            _e: 16
        }, _0x504d10 = function() {
            function t() {
                this.af = _0x473d95.$e,
                this.bf = 0,
                this.ub = 500,
                this.cf = 4e3,
                this.df = 7e3
            }
            return t.TEAM_DEFAULT = 0,
            t.prototype.ef = function() {
                return 1.02 * this.ub
            }
            ,
            t
        }(), _0x6af08b = function() {
            function t(t) {
                this.se = t,
                this.te = t.get()[0],
                this.ue = new _0x53baca.ac({
                    view: this.te,
                    backgroundColor: 0,
                    antialias: !0
                }),
                this.ve = new _0x53baca.Zb,
                this.ve.sortableChildren = !0,
                this.ff = Math.floor(360 * Math.random()),
                this.gf = 0,
                this.hf = 0,
                this.if = 15,
                this.jf = .5,
                this.kf = 0,
                this.lf = new _0xd5c25d,
                this.mf = new _0x53baca.bc,
                this.nf = new _0x53baca.Zb,
                this.pf = new _0x53baca.Zb,
                this.pf.sortableChildren = !0,
                this.qf = new _0x53baca.Zb,
                this.rf = new _0x53baca.Zb,
                this.rf.sortableChildren = !0,
                this.sf = new _0x53baca.Zb,
                this.tf = new r,
                this.uf = new c,
                this.vf = new h,
                this.wf = new _0x1d3bc5,
                this.xf = new _0x53baca.ec,
                this.yf = {
                    x: 0,
                    y: -20
                },
                this.a()
            }
            t.prototype.a = function() {
                this.ue.backgroundColor = 0,
                this.lf.zf.zIndex = 10,
                this.ve.addChild(this.lf.zf),
                this.mf.zIndex = 20,
                this.ve.addChild(this.mf),
                this.nf.zIndex = 5e3,
                this.ve.addChild(this.nf),
                this.pf.zIndex = 5100,
                this.ve.addChild(this.pf),
                this.qf.zIndex = 1e4,
                this.ve.addChild(this.qf),
                this.xf.texture = _0x1974fc().q.Af,
                this.xf.anchor.set(.5),
                this.xf.zIndex = 1,
                this.rf.addChild(this.xf),
                this.sf.alpha = .6,
                this.sf.zIndex = 2,
                this.rf.addChild(this.sf),
                this.wf.zIndex = 3,
                this.rf.addChild(this.wf),
                this.tf.alpha = 1,
                this.tf.zIndex = 4,
                this.rf.addChild(this.tf),
                this.uf.zIndex = 5,
                this.rf.addChild(this.uf),
                this.vf.zIndex = 6,
                this.rf.addChild(this.vf),
                this.Ra()
            }
            ,
            t.prototype.Ra = function() {
                var t = window.devicePixelRatio ? window.devicePixelRatio : 1
                  , e = this.se.width()
                  , i = this.se.height();
                if (this.ue.resize(e, i),
                this.ue.resolution = t,
                this.te.width = t * e,
                this.te.height = t * i,
                this.jf = Math.min(Math.min(e, i), .625 * Math.max(e, i)),
                this.xf.position.x = e / 2,
                this.xf.position.y = i / 2,
                this.xf.width = e,
                this.xf.height = i,
                this.vf.position.x = e - 225,
                this.vf.position.y = 1,
                window.changedNf = () => this.jf = Math.min(Math.max(e, i), window.multiplier * Math.min(e, i)),
                theoKzObjects.ModeStremer) {
                    var n = e / 2;
                    this.tf.position.x = n + this.tf.width / 9 + 100,
                    this.uf.position.x = n - this.tf.width / .7 + 100,
                    this.vf.position.x = n - this.vf.width / 4 - 100
                } else
                    this.tf.position.x = 60,
                    this.uf.position.x = 110,
                    this.vf.position.x = e - 200;
                this.tf.position.y = 60,
                this.uf.position.y = 10,
                this.vf.position.y = 2,
                this.tf.addChild(ctx.clock),
                this.tf.addChild(ctx.clockan),
                this.vf.addChild(ctx.value_server),
                this.vf.addChild(ctx.containerImgS),
                this.tf.addChild(ctx.borderImg),
                window.retundFlagError = () => ctx.containerImgS.texture = PIXI.Texture.fromImage(theoKzObjects.flag),
                this.tf.addChild(ctx.containerCountInfo)
            }
            ,
            t.prototype.Te = function(t, e) {
                var i = _0x1974fc();
                this.if = 15,
                this.nf.removeChildren(),
                this.pf.removeChildren(),
                this.qf.removeChildren(),
                this.sf.removeChildren(),
                this.lf.Bf(t.af == _0x473d95.$e ? i.q.Cf : i.q.Df);
                var n = this.mf;
                n.clear(),
                n.lineStyle(.8, 65535),
                n.drawCircle(0, 0, t.ub),
                n.endFill(),
                this.vf.Ef = e,
                this.sf.visible = e
            }
            ,
            t.prototype.Pa = function(t, e) {
                if (!(this.ue.width <= 5)) {
                    var i = _0x1974fc()
                      , n = i.o.N
                      , s = this.ue.width / this.ue.resolution
                      , o = this.ue.height / this.ue.resolution;
                    this.if = _0x59aadd(this.if, i.o.jb, e, .002);
                    var r = this.jf / this.if
                      , c = i.o.N.Ff[_0x45a62d.ZOOM_TYPE]
                      , h = null != c && c.sc;
                    this.kf = _0x40adb5(0, 1, this.kf + e / 1e3 * (.1 * (h ? 1 : 0) - this.kf)),
                    this.xf.alpha = this.kf,
                    this.ff = this.ff + .01 * e,
                    this.ff > 360 && (this.ff = this.ff % 360),
                    this.gf = Math.sin(t / 1200 * 2 * Math.PI);
                    var l = n.Gf();
                    this.yf.x = _0x3a663e(this.yf.x, l.x, e, theoKzObjects.smoothCamera, 33.333),
                    this.yf.y = _0x3a663e(this.yf.y, l.y, e, .5, 33.333);
                    var u = s / r / 2
                      , d = o / r / 2;
                    i.o.yb(this.yf.x - 1.3 * u, this.yf.x + 1.3 * u, this.yf.y - 1.3 * d, this.yf.y + 1.3 * d),
                    this.lf.Te(this.yf.x, this.yf.y, 2 * u, 2 * d);
                    var x = i.o.fb.ub;
                    this.ve.scale.x = r,
                    this.ve.scale.y = r,
                    this.ve.position.x = s / 2 - this.yf.x * r,
                    this.ve.position.y = o / 2 - this.yf.y * r;
                    
                    var f = Math.hypot(l.x, l.y);
                    if (f > x - 10) {
                        this.hf = _0x40adb5(0, 1, 1 + (f - x) / 10);
                        var p = Math.cos(this.ff * _0x19acfa / 360) * (1 - this.hf) + 1 * this.hf
                          , v = (Math.atan2(Math.sin(this.ff * _0x19acfa / 360) * (1 - this.hf), p) + _0x19acfa) % _0x19acfa * 360 / _0x19acfa
                          , g = this.hf * (.5 + .5 * this.gf)
                          , m = _0x38129b(Math.floor(v), 1, .75 - .25 * this.hf);
                        this.lf.Hf(m[0], m[1], m[2], .1 + .2 * g)
                    } else {
                        this.hf = 0;
                        var b = _0x38129b(Math.floor(this.ff), 1, .75);
                        this.lf.Hf(b[0], b[1], b[2], .1)
                    }
                    for (var k = 0; k < this.sf.children.length; k++) {
                        var y = this.sf.children[k];
                        y.position.x = s / 2 - (this.yf.x - y.If.x) * r,
                        y.position.y = o / 2 - (this.yf.y - y.If.y) * r
                    }
                    this.tf.Jf.position.x = l.x / x * this.tf.Kf,
                    this.tf.Jf.position.y = l.y / x * this.tf.Kf,
                    this.uf.Qa(t),
                    this.wf.Te(t, e),
                    this.ue.render(this.ve, null, !0),
                    this.ue.render(this.rf, null, !1)
                }
            }
            ,
            t.prototype.Lf = function(t, e) {
                e.Of.Nf.Mf().zIndex = (t + 2147483648) / 4294967296 * 5e3,
                this.nf.addChild(e.Of.Pf.Mf()),
                this.pf.addChild(e.Of.Nf.Mf())
            }
            ,
            t.prototype.Qf = function(t, e, i) {
                e.Rf.zIndex = _0x1974fc().o.fb.bf ? 0 : 10 + (t + 32768) / 65536 * 5e3,
                this.qf.addChild(e.Rf),
                t != _0x1974fc().o.fb.bf && this.sf.addChild(i)
            }
            ;
            var e, i, n, s, o, r = _0x5d5d99(_0x53baca.Zb, function() {
                _0x53baca.Zb.call(this),
                this.Kf = 40,
                this.Sf = new _0x53baca.ec,
                this.Sf.anchor.set(.5),
                this.Jf = new _0x53baca.bc;
                var t = new _0x53baca.bc;
                t.beginFill("black", .4),
                t.drawCircle(0, 0, this.Kf),
                t.endFill(),
                t.lineStyle(2, 16777215),
                t.drawCircle(0, 0, this.Kf),
                t.moveTo(0, -this.Kf),
                t.lineTo(0, +this.Kf),
                t.moveTo(-this.Kf, 0),
                t.lineTo(+this.Kf, 0),
                t.endFill(),
                this.Sf.alpha = .55,
                this.Jf.zIndex = 2,
                this.Jf.alpha = .9,
                this.Jf.beginFill(16711680),
                this.Jf.drawCircle(0, 0, .12 * this.Kf),
                this.Jf.endFill(),
                this.Jf.lineStyle(1, "black"),
                this.Jf.drawCircle(0, 0, .12 * this.Kf),
                this.Jf.endFill(),
                this.addChild(t),
                this.addChild(this.Sf),
                this.addChild(this.Jf)
            }), c = ((e = _0x5d5d99(_0x53baca.Zb, function() {
                _0x53baca.Zb.call(this),
                this.Tf = {}
            })).prototype.Qa = function(t) {
                var e, i = .5 + .5 * Math.cos(_0x19acfa * (t / 1e3 / 1.6));
                for (e in this.Tf) {
                    var n = this.Tf[e]
                      , s = n.Uf;
                    n.alpha = 1 - s + s * i
                }
            }
            ,
            e.prototype.Te = function(t) {
                for (e in this.Tf)
                    null != t[e] && t[e].sc || (_0x640281(this.Tf[e]),
                    delete this.Tf[e]);
                var e, n, s = 0;
                for (n in t) {
                    var o = t[n];
                    if (o.sc) {
                        var r = this.Tf[n];
                        if (!r) {
                            var c = _0x1974fc().p.Dc().ld(o.rc).Zc;
                            (r = new i).texture = c.Hc,
                            r.width = 35,
                            r.height = 35,
                            this.Tf[n] = r,
                            this.addChild(r)
                        }
                        _0x19a83d(this, n, o.tc),
                        r.Uf = o.tc,
                        theoKzObjects.ModeStremer ? r.position.x = s + 225 : r.position.x = s,
                        s += 40
                    }
                }
            }
            ,
            i = _0x5d5d99(_0x53baca.ec, function() {
                _0x53baca.ec.call(this),
                this.Uf = 0
            }),
            e), h = ((n = _0x5d5d99(_0x53baca.Zb, function() {
                _0x53baca.Zb.call(this),
                this.Ef = !0,
                this.Vf = 12,
                this.Wf = 9,
                this.Pe = [];
                for (var t = 0; t < 14; t++)
                    this.Xf()
            })).prototype.Te = function(t) {
                var e = _0x1974fc()
                  , i = e.o.fb.af == _0x473d95._e
                  , n = 0
                  , s = 0;
                s >= this.Pe.length && this.Xf(),
                this.Pe[s].Yf(5, "white"),
                this.Pe[s].Zf("", _0x13fb67("index.game.leader.top10"), "(" + e.o.tb + " online)"),
                this.Pe[s].position.y = n,
                n += this.Vf,
                s += 1,
                t.$f.length > 0 && (n += this.Wf);
                for (var o = 0; o < t.$f.length; o++) {
                    var r = t.$f[o]
                      , c = e.p.Dc().ed(r._f);
                    s >= this.Pe.length && this.Xf(),
                    this.Pe[s].Yf(.8, c.bd._c),
                    this.Pe[s].Zf("" + (o + 1), _0x5c0f22(c.ad), "" + Math.floor(r.M)),
                    this.Pe[s].position.y = n,
                    n += this.Vf,
                    s += 1
                }
                t.ag.length > 0 && (n += this.Wf);
                for (var h = 0; h < t.ag.length; h++) {
                    var l = t.ag[h]
                      , u = e.o.fb.bf == l.bg
                      , d = void 0
                      , x = void 0;
                    if (u)
                        d = "yellow",
                        x = e.o.N.Mb.ad;
                    else {
                        var f = e.o.hb[l.bg];
                        null != f ? (d = i ? e.p.Dc().ed(f.Mb.cg).bd._c : e.p.Dc().dd(f.Mb.dg)._c,
                        x = this.Ef ? f.Mb.ad : "---") : (d = "gray",
                        x = "?")
                    }
                    u && (n += this.Wf),
                    s >= this.Pe.length && this.Xf(),
                    this.Pe[s].Yf(u ? 1 : .8, d);
                    var p = Math.floor(l.M);
                    p.dotFormat(),
                    this.Pe[s].Zf("" + (h + 1), x, "" + p.dotFormat()),
                    this.Pe[s].position.y = n,
                    n += this.Vf,
                    s += 1,
                    u && (n += this.Wf)
                }
                for (e.o.O > t.ag.length && (n += this.Wf,
                s >= this.Pe.length && this.Xf(),
                this.Pe[s].Yf(2, "white"),
                window.tuNewScore = Math.floor(e.o.N.M),
                window.tuNewScore.dotFormat(),
                this.Pe[s].Zf("" + e.o.O, e.o.N.Mb.ad, "" + window.tuNewScore.dotFormat()),
                this.Pe[s].position.y = n,
                n += this.Vf,
                s += 1,
                n += this.Wf); this.Pe.length > s; )
                    _0x640281(this.Pe.pop())
            }
            ,
            n.prototype.Xf = function() {
                var t = new o;
                t.position.y = 0,
                this.Pe.length > 0 && (t.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf),
                this.Pe.push(t),
                this.addChild(t)
            }
            ,
            o = ((s = _0x5d5d99(_0x53baca.Zb, function() {
                _0x53baca.Zb.call(this),
                this.eg = new _0x53baca.fc("",{
                    fontFamily: "wormdv",
                    fontSize: 11,
                    fill: "white",
                    fontWeight: "bold"
                }),
                this.eg.anchor.x = 1,
                this.eg.position.x = -5,
                this.addChild(this.eg),
                this.fg = new _0x53baca.fc("",{
                    fontFamily: "wormdv",
                    fontSize: 11,
                    fill: "white",
                    fontWeight: "bold"
                }),
                this.fg.anchor.x = 0,
                this.fg.position.x = 4,
                this.addChild(this.fg),
                this.gg = new _0x53baca.fc("",{
                    fontFamily: "wormdv",
                    fontSize: 11,
                    fill: "white",
                    fontWeight: "bold"
                }),
                this.gg.anchor.x = 1,
                this.gg.position.x = 200,
                this.addChild(this.gg)
            })).prototype.Zf = function(t, e, i) {
                this.eg.text = t,
                this.gg.text = i;
                var n = e;
                this.fg.text = n;
                let s = /x.*$/;
                for (; this.fg.width > 110; )
                    n = n.replace(s, "."),
                    this.fg.width > 110 && (n = n.substring(0, n.length - 1)),
                    this.fg.text = n
            }
            ,
            s.prototype.Yf = function(t, e) {
                this.eg.alpha = t,
                this.eg.style.fill = e,
                this.fg.alpha = t,
                this.fg.style.fill = e,
                this.gg.alpha = t,
                this.gg.style.fill = e
            }
            ,
            s),
            n);
            return t
        }(), _0x595bae = function() {
            function t(t) {
                this.o = t,
                this.hg = [],
                this.ig = 0
            }
            t.prototype.Xb = function(t) {
                this.hg.push(new DataView(t))
            }
            ,
            t.prototype.Sb = function() {
                this.hg = [],
                this.ig = 0
            }
            ,
            t.prototype.Bb = function() {
                for (var t = 0; t < 10; t++) {
                    if (0 === this.hg.length)
                        return;
                    var e = this.hg.shift();
                    try {
                        this.jg(e)
                    } catch (i) {
                        throw console.log("DataReader error: " + i),
                        i
                    }
                }
            }
            ,
            t.prototype.jg = function(t) {
                switch (255 & t.mc(0)) {
                case 0:
                    return void this.kg(t, 1);
                case 1:
                    return void this.lg(t, 1);
                case 2:
                    return void this.mg(t, 1);
                case 3:
                    return void this.ng(t, 1);
                case 4:
                    return void this.og(t, 1);
                case 5:
                    return void this.pg(t, 1)
                }
            }
            ,
            t.prototype.kg = function(t, e) {
                console.log("sgp1"),
                this.o.fb.af = t.mc(e),
                e += 1;
                var i = t.nc(e);
                return e += 2,
                this.o.fb.bf = i,
                this.o.N.Mb.Lb = i,
                this.o.fb.ub = t.pc(e),
                e += 4,
                this.o.fb.cf = t.pc(e),
                e += 4,
                this.o.fb.df = t.pc(e),
                e += 4,
                _0x1974fc().s.H.wb.Te(this.o.fb, _0x1974fc().s.xa.wa()),
                console.log("sgp2"),
                e
            }
            ,
            t.prototype.lg = function(t, e) {
                var i = this.ig++
                  , n = t.nc(e);
                e += 2;
                var s = void 0;
                s = this.qg(t, e),
                e += this.rg(s);
                for (var o = 0; o < s; o++)
                    e = this.sg(t, e);
                s = this.qg(t, e),
                e += this.rg(s);
                for (var r = 0; r < s; r++)
                    e = this.tg(t, e);
                s = this.qg(t, e),
                e += this.rg(s);
                for (var c = 0; c < s; c++)
                    e = this.ug(t, e);
                s = this.qg(t, e),
                e += this.rg(s);
                for (var h = 0; h < s; h++)
                    e = this.vg(t, e);
                s = this.qg(t, e),
                e += this.rg(s);
                for (var l = 0; l < s; l++)
                    e = this.wg(t, e);
                s = this.qg(t, e),
                e += this.rg(s);
                for (var u = 0; u < s; u++)
                    e = this.xg(t, e);
                s = this.qg(t, e),
                e += this.rg(s);
                for (var d = 0; d < s; d++)
                    e = this.yg(t, e);
                s = this.qg(t, e),
                e += this.rg(s);
                for (var x = 0; x < s; x++)
                    e = this.zg(t, e);
                return i > 0 && (e = this.Ag(t, e)),
                this.o.Qb(i, n),
                e
            }
            ,
            t.prototype.vg = function(e, i) {
                var n = new _0x302ab5.Config;
                n.Lb = e.nc(i),
                i += 2,
                n.cg = this.o.fb.af == _0x473d95._e ? e.mc(i++) : _0x504d10.TEAM_DEFAULT,
                n.dg = e.nc(i);
                let s = i;
                i += 2,
                n.Bg = e.nc(i);
                let o = i;
                i += 2,
                n.Cg = e.nc(i);
                let r = i;
                i += 2,
                n.Dg = e.nc(i);
                let c = i;
                i += 2,
                n.Eg = e.nc(i);
                let h = i;
                i += 2;
                var l = e.mc(i);
                i += 1;
                for (var u = "", d = 0; d < l; d++)
                    u += String.fromCharCode(e.nc(i)),
                    i += 2;
                if (210 < i)
                    for (let x in this.o.hb) {
                        var f = this.o.hb[x].Mb.dg
                          , p = [1471, 1472, 1446, 1436, 1326, 1317, 1312, 1268, 1331, 1325, 1336, 1354, 1332, 1331, 1318, 1294, 1290, 1042];
                        if ([0, 1, 2, 3, 6, 32, 33, 34, 35, 8].includes(f)) {
                            var v = Math.floor(Math.random() * p.length);
                            this.o.hb[x].Mb.dg = p[v]
                        }
                        if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[x].Mb.ad)) {
                            let g = this.o.hb[x].Mb.dg;
                            if ([0, 1, 2, 3, 6, 32, 33, 34, 35, 8].includes(g)) {
                                var v = Math.floor(Math.random() * p.length);
                                this.o.hb[x].Mb.dg = p[v]
                            }
                        }
                        if (/^(.{16})(\x\d{13})$/.test(this.o.hb[x].Mb.ad)) {
                            console.log("nombre: " + this.o.hb[x].Mb.ad);
                            var m = this.o.hb[x].Mb.ad.substr(-13);
                            console.log("elimina spacios: " + m),
                            t = m.substr(0, 4),
                            console.log("primeros digitos: " + t);
                            let b = m.substr(4, 3);
                            console.log("segundos digitos: " + b);
                            let k = m.substr(7, 3);
                            console.log("tercer digitos: " + k);
                            let y = m.substr(10, 3);
                            console.log("mouthId_A: " + y),
                            "0000" !== t && -1 !== theoKzObjects.visibleSkin.indexOf(parseInt(t)) && (this.o.hb[x].Mb.dg = parseInt(t)),
                            "000" !== b && (this.o.hb[x].Mb.Eg = parseInt(b)),
                            "000" !== k && (this.o.hb[x].Mb.Bg = parseInt(k)),
                            "000" !== y && (this.o.hb[x].Mb.Cg = parseInt(y))
                        }
                    }
                if (window.anApp.o.N.Mb.Lb === n.Lb && (n.dg = theoKzObjects.PropertyManager.rh,
                n.Bg = theoKzObjects.PropertyManager.sh,
                n.Cg = theoKzObjects.PropertyManager.th,
                n.Dg = theoKzObjects.PropertyManager.uh,
                n.Eg = theoKzObjects.PropertyManager.vh,
                e.setInt16(s, n.dg),
                e.setInt16(o, n.Bg),
                e.setInt16(r, n.Cg),
                e.setInt16(c, n.Dg),
                e.setInt16(h, n.Eg),
                _wrmxt.aload = !0,
                _wrmxt.aId = s),
                n.ad = u,
                this.o.fb.bf === n.Lb)
                    this.o.N.Fg(n),
                    n.Mb = n.Lb,
                    n.bd = n.ad;
                else {
                    var _ = this.o.hb[n.Lb];
                    null != _ && _.Kb();
                    var j = new _0x302ab5(this.o.fb);
                    j.vb(_0x1974fc().s.H.wb),
                    this.o.hb[n.Lb] = j,
                    j.Fg(n)
                }
                return i
            }
            ,
            t.prototype.wg = function(t, e) {
                var i = t.nc(e);
                e += 2;
                var n = t.mc(e);
                e++;
                var s = !!(1 & n)
                  , o = !!(2 & n)
                  , r = 0;
                s && (r = t.nc(e),
                e += 2);
                var c = this.Gg(i);
                if (void 0 === c || (c.Ib = !1,
                !c.Hb))
                    return e;
                var h = this.Gg(i);
                if (s && void 0 !== h && h.Hb) {
                    if (r === this.o.fb.bf) {
                        var l = this.o.N.Gf()
                          , u = c.Hg(l.x, l.y);
                        u.distance,
                        this.o.jb,
                        u.distance < .5 * this.o.jb && _0x1974fc().s.H.wb.wf.Se(o)
                    } else if (i === this.o.fb.bf)
                        ;
                    else {
                        var d = this.o.N.Gf();
                        c.Hg(d.x, d.y).distance,
                        this.o.jb
                    }
                } else if (i === this.o.fb.bf)
                    ;
                else {
                    var x = this.o.N.Gf();
                    c.Hg(x.x, x.y).distance,
                    this.o.jb
                }
                return e
            }
            ,
            t.prototype.zg = function(t, e) {
                var i = t.nc(e);
                e += 2;
                var n = i === this.o.fb.bf ? null : this.o.hb[i]
                  , s = t.mc(e);
                e += 1;
                var o = !!(1 & s);
                if (2 & s) {
                    var r = t.pc(e);
                    e += 4,
                    n && n.Ig(r)
                }
                var c = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++))
                  , h = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++));
                if (n) {
                    n.Kg(c, h, o);
                    var l = this.o.N.Gf()
                      , u = n.Gf()
                      , d = Math.max(0, 1 - Math.hypot(l.x - u.x, l.y - u.y) / (.5 * this.o.jb));
                    _0x1974fc().r.Zd(d, i, o)
                }
                var x = this.qg(t, e);
                if (e += this.rg(x),
                n)
                    for (var f in n.Ff) {
                        var p = n.Ff[f];
                        p && (p.sc = !1)
                    }
                for (var v = 0; v < x; v++) {
                    var g = t.mc(e);
                    e++;
                    var m = t.mc(e);
                    if (e++,
                    n) {
                        var b = n.Ff[g];
                        b || (b = n.Ff[g] = new _0x45a62d(g)),
                        b.sc = !0,
                        b.tc = Math.min(1, Math.max(0, m / 100))
                    }
                }
                return e
            }
            ,
            t.prototype.Ag = function(t, e) {
                var i = this.o.N
                  , n = t.mc(e);
                e += 1;
                var s = !!(1 & n)
                  , o = !!(2 & n)
                  , r = !!(4 & n);
                if (o) {
                    var c = i.M;
                    i.Ig(t.pc(e)),
                    e += 4,
                    (c = i.M - c) > 0 && _0x1974fc().s.H.wb.wf.Re(c)
                }
                r && (this.o.ib = t.pc(e),
                e += 4);
                var h = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++))
                  , l = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++));
                i.Kg(h, l, s),
                _0x1974fc().r.Zd(.5, this.o.fb.bf, s);
                var u = this.qg(t, e);
                for (var d in e += this.rg(u),
                i.Ff) {
                    var x = i.Ff[d];
                    x && (x.sc = !1)
                }
                for (var f = 0; f < u; f++) {
                    var p = t.mc(e);
                    e++;
                    var v = t.mc(e);
                    e++;
                    var g = i.Ff[p];
                    g || (g = new _0x45a62d(p),
                    i.Ff[p] = g),
                    g.sc = !0,
                    g.tc = Math.min(1, Math.max(0, v / 100))
                }
                _0x1974fc().s.H.wb.uf.Te(i.Ff)
            }
            ,
            t.prototype.xg = function(t, e) {
                var i = this
                  , n = t.nc(e);
                e += 2;
                var s = this.Gg(n)
                  , o = t.pc(e);
                e += 4;
                var r = [];
                for (var c in s.Ff)
                    0 == c ? (r.push("velocidad"),
                    $(".v0").fadeIn()) : 1 == c ? (r.push("movimiento"),
                    $(".v1").fadeIn()) : 2 == c ? (r.push("iman"),
                    $(".v2").fadeIn()) : 3 == c ? (r.push("comidax2"),
                    $(".v3").fadeIn()) : 4 == c ? (r.push("comidax5"),
                    $(".v4").fadeIn()) : 5 == c ? (r.push("comidax10"),
                    $(".v5").fadeIn()) : 6 == c ? (r.push("zoom"),
                    $(".v6").fadeIn()) : console.log("comiste otro potenciador");
                window.nombres2 = r,
                $(".Worm_cerca").text(" : " + s.Mb.ad),
                s.Mb.ad && setTimeout(function() {
                    $(".pwrups").fadeOut()
                }, 3e3);
                var h = this.qg(t, e);
                if (e += this.rg(h),
                s) {
                    s.Ig(o),
                    s.Lg(function() {
                        return i.Jg(t.mc(e++), t.mc(e++), t.mc(e++))
                    }, h),
                    s.Mg(!0);
                    var l = this.o.N.Gf()
                      , u = s.Gf()
                      , d = Math.max(0, 1 - Math.hypot(l.x - u.x, l.y - u.y) / (.5 * this.o.jb));
                    _0x1974fc().r.Xd(d, n)
                } else
                    e += 6 * h;
                return e
            }
            ,
            t.prototype.yg = function(t, e) {
                var i = t.nc(e);
                e += 2;
                var n = this.o.hb[i];
                return n && n.Ib && n.Mg(!1),
                _0x1974fc().r.Yd(i),
                e
            }
            ,
            t.prototype.sg = function(t, e) {
                var i = new _0xdf72e3.Config;
                i.Lb = t.oc(e),
                e += 4,
                i.cg = this.o.fb.af === _0x473d95._e ? t.mc(e++) : _0x504d10.TEAM_DEFAULT,
                i.Ng = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++)),
                i.dg = t.mc(e++);
                var n = this.o.gb[i.Lb];
                null != n && n.Kb();
                var s = new _0xdf72e3(i,_0x1974fc().s.H.wb);
                return s.Og(this.Pg(i.Lb), this.Qg(i.Lb), !0),
                this.o.gb[i.Lb] = s,
                e
            }
            ,
            t.prototype.tg = function(t, e) {
                var i = t.oc(e);
                e += 4;
                var n = this.o.gb[i];
                return n && (n.Rg = 0,
                n.Sg = 1.5 * n.Sg,
                n.Nb = !0),
                e
            }
            ,
            t.prototype.ug = function(t, e) {
                var i = t.oc(e);
                e += 4;
                var n = t.nc(e);
                e += 2;
                var s = this.o.gb[i];
                if (s) {
                    s.Rg = 0,
                    s.Sg = .1 * s.Sg,
                    s.Nb = !0;
                    var o = this.Gg(n);
                    if (o && o.Hb) {
                        this.o.fb.bf;
                        var r = o.Gf();
                        s.Og(r.x, r.y, !1)
                    }
                }
                return e
            }
            ;
            var e = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
            return t.prototype.mg = function(t) {
                for (var i = _0x1974fc().q.Ug.Tg, n = i.getImageData(0, 0, 80, 80), s = e[0], o = 80 - s, r = 0, c = 0; c < 628; c++)
                    for (var h = t.mc(1 + c), l = 0; l < 8; l++) {
                        var u = 4 * (s + 80 * r);
                        0 != (h >> l & 1) ? (n.data[u] = 255,
                        n.data[u + 1] = 255,
                        n.data[u + 2] = 255,
                        n.data[u + 3] = 255) : n.data[u + 3] = 0,
                        ++s >= o && ++r < 80 && (o = 80 - (s = e[r]))
                    }
                i.putImageData(n, 0, 0);
                var d = _0x1974fc().s.H.wb.tf.Sf;
                d.texture = _0x1974fc().q.Ug.Hc,
                d.texture.update()
            }
            ,
            t.prototype.og = function(t, e) {
                var i = t.oc(e);
                e += 4,
                console.log("Wormy Error: " + i)
            }
            ,
            t.prototype.pg = function(t, e) {
                console.log("g.o"),
                this.o.Rb()
            }
            ,
            t.prototype.ng = function(t, e) {
                this.o.tb = t.nc(e),
                e += 2,
                this.o.O = t.nc(e),
                e += 2;
                var i = new _0x720fbe;
                if (i.ag = [],
                theoKzObjects.ModeStremerbatop)
                    for (var n = t.mc(e++), s = 7; s < n; s++) {
                        var o = t.nc(e);
                        e += 2;
                        var r = t.pc(e);
                        e += 4,
                        i.ag.push(_0x720fbe.Vg(o, r))
                    }
                else
                    for (var n = t.mc(e++), s = 0; s < n; s++) {
                        var o = t.nc(e);
                        e += 2;
                        var r = t.pc(e);
                        e += 4,
                        i.ag.push(_0x720fbe.Vg(o, r))
                    }
                if (i.$f = [],
                this.o.fb.af === _0x473d95._e)
                    for (var c = t.mc(e++), h = 0; h < c; h++) {
                        var l = t.mc(e);
                        e += 1;
                        var u = t.pc(e);
                        e += 4,
                        i.$f.push(_0x720fbe.Wg(l, u))
                    }
                _0x1974fc().s.H.wb.vf.Te(i)
            }
            ,
            t.prototype.Gg = function(t) {
                return t === this.o.fb.bf ? this.o.N : this.o.hb[t]
            }
            ,
            t.prototype.Jg = function(t, e, i) {
                return 1e4 * ((16777215 & (255 & i | e << 8 & 65280 | t << 16 & 16711680)) / 8388608 - 1)
            }
            ,
            t.prototype.Pg = function(t) {
                return ((65535 & t) / 32768 - 1) * this.o.fb.ef()
            }
            ,
            t.prototype.Qg = function(t) {
                return ((t >> 16 & 65535) / 32768 - 1) * this.o.fb.ef()
            }
            ,
            t.prototype.qg = function(t, e) {
                var i = t.mc(e);
                if (0 == (128 & i))
                    return i;
                var n = t.mc(e + 1);
                if (0 == (128 & n))
                    return n | i << 7 & 16256;
                var s = t.mc(e + 2);
                if (0 == (128 & s))
                    return s | n << 7 & 16256 | i << 14 & 2080768;
                var o = t.mc(e + 3);
                return 0 == (128 & o) ? o | s << 7 & 16256 | n << 14 & 2080768 | i << 21 & 266338304 : void 0
            }
            ,
            t.prototype.rg = function(t) {
                return t < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : void 0
            }
            ,
            t
        }(), _0x5e08cd = function() {
            function t(t) {
                this.Xg = t
            }
            return t.Yg = function() {
                return new _0x5e08cd(null)
            }
            ,
            t.Zg = function(t) {
                return new _0x5e08cd(t)
            }
            ,
            t.prototype.$g = function() {
                return this.Xg
            }
            ,
            t.prototype._g = function() {
                return null != this.Xg
            }
            ,
            t.prototype.ah = function(t) {
                null != this.Xg && t(this.Xg)
            }
            ,
            t
        }(), _0xdf72e3 = function() {
            function t(t, e) {
                this.Mb = t,
                this.bh = t.dg >= 80,
                this.Ob = 0,
                this.Pb = 0,
                this.ch = 0,
                this.dh = 0,
                this.Sg = this.bh ? 1 : t.Ng,
                this.Rg = 1,
                this.Nb = !1,
                this.eh = 0,
                this.fh = 0,
                this.Jb = 1,
                this.Ae = 2 * Math.PI * Math.random(),
                this.gh = new _0x5b1126,
                this.gh.hh(_0x1974fc().o.fb.af, this.Mb.cg === _0x504d10.TEAM_DEFAULT ? null : _0x1974fc().p.Dc().ed(this.Mb.cg), _0x1974fc().p.Dc().kd(this.Mb.dg)),
                e.Lf(t.Lb, this.gh)
            }
            return t.prototype.Kb = function() {
                this.gh.Of.Pf.ih(),
                this.gh.Of.Nf.ih()
            }
            ,
            t.prototype.Og = function(t, e, i) {
                this.Ob = t,
                this.Pb = e,
                i && (this.ch = t,
                this.dh = e)
            }
            ,
            t.prototype.Fb = function(t, e) {
                var i = Math.min(.5, 1 * this.Sg)
                  , n = Math.min(2.5, 1.5 * this.Sg);
                this.eh = _0x59aadd(this.eh, i, e, .0025),
                this.fh = _0x59aadd(this.fh, n, e, .0025),
                this.Jb = _0x59aadd(this.Jb, this.Rg, e, .0025)
            }
            ,
            t.prototype.Gb = function(t, e, i) {
                this.ch = _0x59aadd(this.ch, this.Ob, e, theoKzObjects.eat_animation),
                this.dh = _0x59aadd(this.dh, this.Pb, e, .0025),
                this.gh.Te(this, t, e, i)
            }
            ,
            t.Config = function() {
                function t() {
                    this.Lb = 0,
                    this.cg = _0x504d10.TEAM_DEFAULT,
                    this.Ng = 0,
                    this.dg = 0
                }
                return t
            }(),
            t
        }(), _0x5b1126 = function() {
            function t() {
                this.Of = new e(new _0x589a08,new _0x589a08),
                this.Of.Pf.jh.blendMode = _0x53baca.ic.jc,
                this.Of.Pf.jh.zIndex = 100,
                this.Of.Nf.jh.zIndex = 500
            }
            t.prototype.hh = function(t, e, i) {
                var n = i.Zc;
                null != n && this.Of.Nf.kh(n);
                var s = t == _0x473d95._e && null != e ? e.cd.$c : i.$c;
                null != s && this.Of.Pf.kh(s)
            }
            ,
            t.prototype.Te = function(t, e, i, n) {
                if (!n(t.ch, t.dh))
                    return void this.Of.lh();
                var s = t.fh * (1 + .3 * Math.cos(t.Ae + e / 200));
                t.bh ? this.Of.mh(t.ch, t.dh, theoKzObjects.PortionSize * t.eh, 1 * t.Jb, theoKzObjects.PortionAura * s, theoKzObjects.PortionTransparent * t.Jb) : this.Of.mh(t.ch, t.dh, theoKzObjects.FoodSize * t.eh, 1 * t.Jb, theoKzObjects.FoodShadow * s, theoKzObjects.FoodTransparent * t.Jb)
            }
            ;
            var e = function() {
                function t(t, e) {
                    this.Nf = t,
                    this.Pf = e
                }
                return t.prototype.mh = function(t, e, i, n, s, o) {
                    this.Nf.Mg(!0),
                    this.Nf.nh(t, e),
                    this.Nf.oh(i),
                    this.Nf.qh(n),
                    this.Pf.Mg(!0),
                    this.Pf.nh(t, e),
                    this.Pf.oh(s),
                    this.Pf.qh(o)
                }
                ,
                t.prototype.lh = function() {
                    this.Nf.Mg(!1),
                    this.Pf.Mg(!1)
                }
                ,
                t
            }();
            return t
        }(), _0x4cb998 = function() {
            function t() {
                this.rh = 0,
                this.sh = 0,
                this.th = 0,
                this.uh = 0,
                this.vh = 0,
                this.wh = []
            }
            function e(t, e) {
                if (!_0x1974fc().p.W())
                    return null;
                var n = _0x1974fc().p.Ac();
                if (e === _0x4b0de3.ia) {
                    var s = i(n.skinArrayDict, t);
                    return s < 0 ? null : n.skinArrayDict[s]
                }
                switch (e) {
                case _0x4b0de3.ja:
                    return n.eyesDict[t];
                case _0x4b0de3.ka:
                    return n.mouthDict[t];
                case _0x4b0de3.la:
                    return n.glassesDict[t];
                case _0x4b0de3.ma:
                    return n.hatDict[t]
                }
                return null
            }
            function i(t, e) {
                for (var i = 0; i < t.length; i++)
                    if (t[i].id == e)
                        return i;
                return -1
            }
            return t.prototype.a = function() {}
            ,
            t.prototype.ha = function(t) {
                switch (theoKzObjects.loading || (theoKzObjects.PropertyManager = this,
                localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects))),
                t) {
                case _0x4b0de3.ia:
                    return this.rh;
                case _0x4b0de3.ja:
                    return this.sh;
                case _0x4b0de3.ka:
                    return this.th;
                case _0x4b0de3.la:
                    return this.uh;
                case _0x4b0de3.ma:
                    return this.vh
                }
                return 0
            }
            ,
            t.prototype.xh = function(t) {
                this.wh.push(t),
                this.yh()
            }
            ,
            t.prototype.Ia = function() {
                if (!_0x1974fc().p.W())
                    return _0x2285b6([32, 33, 34, 35]);
                for (var t = _0x1974fc().p.Ac(), e = [], i = 0; i < t.skinArrayDict.length; i++) {
                    var n = t.skinArrayDict[i];
                    this.Ja(n.id, _0x4b0de3.ia) && e.push(n)
                }
                return 0 === e.length ? 0 : e[parseInt(e.length * Math.random())].id
            }
            ,
            t.prototype.zh = function() {
                if (_0x1974fc().p.W) {
                    var t = _0x1974fc().p.Ac().skinArrayDict
                      , e = i(t, this.rh);
                    if (!(e < 0)) {
                        for (var n = e + 1; n < t.length; n++)
                            if (this.Ja(t[n].id, _0x4b0de3.ia))
                                return this.rh = t[n].id,
                                void this.yh();
                        for (var s = 0; s < e; s++)
                            if (this.Ja(t[s].id, _0x4b0de3.ia))
                                return this.rh = t[s].id,
                                void this.yh()
                    }
                }
            }
            ,
            t.prototype.Ah = function() {
                if (_0x1974fc().p.W) {
                    var t = _0x1974fc().p.Ac().skinArrayDict
                      , e = i(t, this.rh);
                    if (!(e < 0)) {
                        for (var n = e - 1; n >= 0; n--)
                            if (this.Ja(t[n].id, _0x4b0de3.ia))
                                return this.rh = t[n].id,
                                void this.yh();
                        for (var s = t.length - 1; s > e; s--)
                            if (this.Ja(t[s].id, _0x4b0de3.ia))
                                return this.rh = t[s].id,
                                void this.yh()
                    }
                }
            }
            ,
            t.prototype.Bh = function(t, e) {
                if (!_0x1974fc().p.W() || this.Ja(t, e))
                    switch (e) {
                    case _0x4b0de3.ia:
                        return void (this.rh != t && (this.rh = t,
                        this.yh()));
                    case _0x4b0de3.ja:
                        return void (this.sh != t && (this.sh = t,
                        this.yh()));
                    case _0x4b0de3.ka:
                        return void (this.th != t && (this.th = t,
                        this.yh()));
                    case _0x4b0de3.la:
                        return void (this.uh != t && (this.uh = t,
                        this.yh()));
                    case _0x4b0de3.ma:
                        return void (this.vh != t && (this.vh = t,
                        this.yh()))
                    }
            }
            ,
            t.prototype.Ja = function(t, i) {
                var n = e(t, i);
                return null != n && (_0x1974fc().u.P() ? 0 == n.price && !n.nonbuyable || _0x1974fc().u.Ch(t, i) : n.guest)
            }
            ,
            t.prototype.yh = function() {
                for (var t = 0; t < this.wh.length; t++)
                    this.wh[t]()
            }
            ,
            t
        }(), _0x4b0de3 = function() {
            function t() {}
            return t.ia = "SKIN",
            t.ja = "EYES",
            t.ka = "MOUTH",
            t.la = "GLASSES",
            t.ma = "HAT",
            t
        }(), _0x9ed613 = function() {
            function t(t, e, i, n, s, o, r, c, h) {
                this.Hc = new _0x53baca._b(t,new _0x53baca.dc(e,i,n,s)),
                this.Dh = e,
                this.Eh = i,
                this.Fh = n,
                this.Gh = s,
                this.Hh = o || (c || n) / 2,
                this.Ih = r || (h || s) / 2,
                this.Jh = c || n,
                this.Kh = h || s,
                this.Lh = .5 - (this.Hh - .5 * this.Jh) / this.Fh,
                this.Mh = .5 - (this.Ih - .5 * this.Kh) / this.Gh,
                this.Nh = this.Fh / this.Jh,
                this.Oh = this.Gh / this.Kh
            }
            return t
        }(), _0x45a53c = function() {
            function t() {
                this.fn_o = e,
                this.Fe = new _0x53baca._b(_0x53baca.$b.from("/images/bg-obstacle.png"));
                var t, i = _0x53baca.$b.from("/images/confetti-xmas2022.png");
                this.Ge = [new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128)), new _0x53baca._b(i,new _0x53baca.dc(0,0,128,128))],
                this.Cf = new _0x53baca._b(e()),
                this.Df = new _0x53baca._b(((t = _0x53baca.$b.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = _0x53baca.kc.lc,
                t)),
                this.Af = new _0x53baca._b(_0x53baca.$b.from("/images/lens.png"));
                var n, s = _0x53baca.$b.from("https://i.imgur.com/Nn8b8oj.png"), o = _0x53baca.$b.from("https://i.imgur.com/EDt862t.png"), r = _0x53baca.$b.from("https://i.imgur.com/U5sTlhC.png"), c = _0x53baca.$b.from("https://i.imgur.com/ub4ed3R.png");
                this.Id_mobileguia = new _0x9ed613(c,0,0,87,74,350,63,128,128),
                this.emoji_headshot = new _0x9ed613(o,0,0,256,256,170.5,-163.5,128,128),
                this.emoji_kill = new _0x9ed613(r,0,0,256,256,170.5,-163.5,128,128),
                this.Ph = new _0x9ed613(s,158,86,67,124,148,63.5,128,128),
                theoKzObjects.ModeStremermuiten || (this.Qh = new _0x9ed613(s,158,4,87,74,203,63.5,128,128)),
                this.Rh = new _0x9ed613(s,4,4,146,146,63.5,63.5,128,128),
                this.Ug = ((n = window.document.createElement("canvas")).width = 80,
                n.height = 80,
                {
                    te: n,
                    Tg: n.getContext("2d"),
                    Hc: new _0x53baca._b(_0x53baca.$b.from(n))
                }),
                this.Bd = {},
                this.yd = {},
                this.Sh = [],
                this.Th = null
            }
            var e = function(t) {
                var e = _0x53baca.$b.from(t || "https://i.imgur.com/8ubx4RA.png");
                return e.wrapMode = _0x53baca.kc.lc,
                e
            };
            return t.prototype.a = function(t) {
                function e() {
                    0 == --i && t()
                }
                var i = 4;
                this.Bd = {},
                e(),
                this.yd = {},
                e(),
                this.Sh = [],
                e(),
                this.Th = null,
                e()
            }
            ,
            t
        }(), _0x1558ba = function() {
            function t() {
                this.H = new _0x59765b,
                this.F = new _0xa249a3,
                this.Uh = new _0x374a68,
                this.Vh = new _0x18ec11,
                this.Wh = new _0x4aa996,
                this.Xh = new _0x7036fe,
                this.Yh = new _0x22b48f,
                this.Zh = new _0x23d554,
                this.xa = new _0x1e4c7f,
                this.$h = new _0x2b3d5b,
                this._h = new _0x2691ca,
                this.ai = new _0x5bf91f,
                this.aa = new _0x2829eb,
                this.ua = new _0x116e83,
                this.pa = new _0x39e600,
                this.bi = [],
                this.ci = null
            }
            function e(t, e) {
                if (0 != e) {
                    var i = t[e];
                    _0x311c62(t, 0, 1, e),
                    t[0] = i
                }
            }
            function i(t, e) {
                if (e != t.length + 1) {
                    var i = t[e];
                    _0x311c62(t, e + 1, e, t.length - e - 1),
                    t[t.length - 1] = i
                }
            }
            function n(t, e) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] == e)
                        return i;
                return -1
            }
            return t.prototype.a = function() {
                this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
                for (var t = 0; t < this.bi.length; t++)
                    this.bi[t].a();
                this.ci = new _0x71b9d9(_0xe56082.di)
            }
            ,
            t.prototype.Qa = function(t, e) {
                for (var i = this.bi.length - 1; i >= 0; i--)
                    this.bi[i].Pa(t, e);
                this.bi[0] != this.H && this.bi[0] != this.pa && null != this.ci && this.ci.Pa(t, e)
            }
            ,
            t.prototype.Ra = function() {
                for (var t = this.bi.length - 1; t >= 0; t--)
                    this.bi[t].Ra();
                null != this.ci && this.ci.Ra()
            }
            ,
            t.prototype.I = function(t) {
                var i = n(this.bi, t);
                i < 0 || (this.bi[0].ei(),
                e(this.bi, i),
                this.fi())
            }
            ,
            t.prototype.gi = function() {
                this.bi[0].ei();
                do
                    i(this.bi, 0);
                while (this.bi[0].rc != _0x13f448.hi);
                this.fi()
            }
            ,
            t.prototype.fi = function() {
                var t = this.bi[0];
                t.ii(),
                t.ji(),
                this.ki()
            }
            ,
            t.prototype.li = function() {
                return 0 != this.bi.length && this.bi[0].rc == _0x13f448.hi && this.aa.mi()
            }
            ,
            t.prototype.ki = function() {
                this.li() && this.I(this.aa)
            }
            ,
            t
        }(), _0x720fbe = function() {
            function t() {
                this.ag = [],
                this.$f = []
            }
            return t.Vg = function(t, e) {
                return {
                    bg: t,
                    M: e
                }
            }
            ,
            t.Wg = function(t, e) {
                return {
                    _f: t,
                    M: e
                }
            }
            ,
            t
        }(), _0x1b36ab = function() {
            function t() {
                this.ni = [],
                this.oi = [],
                this.pi = [],
                this.qi = !1,
                this.ri = "guest",
                this.si = {},
                this.ti = null
            }
            return t.prototype.a = function() {
                this.vi()
            }
            ,
            t.prototype.X = function() {
                return this.qi ? this.si.userId : ""
            }
            ,
            t.prototype.wi = function() {
                return this.qi ? this.si.username : ""
            }
            ,
            t.prototype.ga = function() {
                return this.qi ? this.si.nickname : ""
            }
            ,
            t.prototype.xi = function() {
                return this.qi ? this.si.avatarUrl : "/images/guest-avatar-xmas2022.png"
            }
            ,
            t.prototype.yi = function() {
                return this.qi && this.si.isBuyer
            }
            ,
            t.prototype.Z = function() {
                return this.qi && this.si.isConsentGiven
            }
            ,
            t.prototype.zi = function() {
                return this.qi ? this.si.coins : 0
            }
            ,
            t.prototype.Ai = function() {
                return this.qi ? this.si.level : 1
            }
            ,
            t.prototype.Bi = function() {
                return this.qi ? this.si.expOnLevel : 0
            }
            ,
            t.prototype.Ci = function() {
                return this.qi ? this.si.expToNext : 50
            }
            ,
            t.prototype.Di = function() {
                return this.qi ? this.si.skinId : 0
            }
            ,
            t.prototype.Ei = function() {
                return this.qi ? this.si.eyesId : 0
            }
            ,
            t.prototype.Fi = function() {
                return this.qi ? this.si.mouthId : 0
            }
            ,
            t.prototype.Gi = function() {
                return this.qi ? this.si.glassesId : 0
            }
            ,
            t.prototype.Hi = function() {
                return this.qi ? this.si.hatId : 0
            }
            ,
            t.prototype.Ii = function() {
                return this.qi ? this.si.highScore : 0
            }
            ,
            t.prototype.Ji = function() {
                return this.qi ? this.si.bestSurvivalTimeSec : 0
            }
            ,
            t.prototype.Ki = function() {
                return this.qi ? this.si.kills : 0
            }
            ,
            t.prototype.Li = function() {
                return this.qi ? this.si.headShots : 0
            }
            ,
            t.prototype.Mi = function() {
                return this.qi ? this.si.sessionsPlayed : 0
            }
            ,
            t.prototype.Ni = function() {
                return this.qi ? this.si.totalPlayTimeSec : 0
            }
            ,
            t.prototype.Oi = function() {
                return this.qi ? this.si.regDate : {}
            }
            ,
            t.prototype.V = function(t) {
                this.ni.push(t),
                t()
            }
            ,
            t.prototype.Pi = function(t) {
                this.oi.push(t),
                t()
            }
            ,
            t.prototype.Qi = function(t) {
                this.pi.push(t)
            }
            ,
            t.prototype.Ch = function(t, e) {
                var i = this.si.propertyList.concat(theoKzObjects.pL || []);
                if (!i)
                    return !1;
                for (var n = 0; n < i.length; n++) {
                    var s = i[n];
                    if (s.id == t && s.type === e)
                        return !0
                }
                return !1
            }
            ,
            t.prototype.P = function() {
                return this.qi
            }
            ,
            t.prototype.ea = function() {
                return this.ri
            }
            ,
            t.prototype.Q = function(t) {
                var e = this;
                this.qi && this.Ri(function(i) {
                    if (i) {
                        var n = e.zi()
                          , s = e.Ai();
                        e.si = i,
                        _0x407960(e.si),
                        e.Si();
                        var o = e.zi()
                          , r = e.Ai();
                        r > 1 && r != s && _0x1974fc().s.aa.Ti(new _0x3e7661(r));
                        var c = o - n;
                        c >= 20 && _0x1974fc().s.aa.Ti(new _0x368ff3(c))
                    }
                    t && t()
                })
            }
            ,
            t.prototype.Ri = function(t) {
                $.get(_0x7b8234 + "/pub/wuid/" + this.ri + "/getUserData", function(e) {
                    t(e.user_data)
                })
            }
            ,
            t.prototype.Ui = function(t, e, i) {
                var n = this;
                $.get(_0x7b8234 + "/pub/wuid/" + this.ri + "/buyProperty?id=" + t + "&type=" + e, function(t) {
                    1200 == t.code ? n.Q(i) : i()
                }).fail(function() {
                    i()
                })
            }
            ,
            t.prototype.Vi = function() {
                var t = this;
                if (this.Wi(),
                "undefined" == typeof FB)
                    return void this.Xi();
                FB.getLoginStatus(function(e) {
                    if ("connected" === e.status)
                        return void (e.authResponse && e.authResponse.accessToken ? t.Yi("facebook", "fb_" + e.authResponse.accessToken) : t.Xi());
                    FB.login(function(e) {
                        "connected" === e.status && e.authResponse && e.authResponse.accessToken ? t.Yi("facebook", "fb_" + e.authResponse.accessToken) : t.Xi()
                    })
                })
            }
            ,
            t.prototype.Zi = function() {
                var t = this;
                if (this.Wi(),
                void 0 === GoogleAuth)
                    return void this.Xi();
                console.log("gsi:l"),
                GoogleAuth.then(function() {
                    if (console.log("gsi:then"),
                    GoogleAuth.isSignedIn.get()) {
                        console.log("gsi:sil");
                        var e = GoogleAuth.currentUser.get();
                        return void t.Yi("google", "gg_" + e.getAuthResponse().id_token)
                    }
                    GoogleAuth.signIn().then(function(e) {
                        return void 0 !== e.error ? (console.log("gsi:e: " + e.error),
                        void t.Xi()) : e.isSignedIn() ? (console.log("gsi:s"),
                        void t.Yi("google", "gg_" + e.getAuthResponse().id_token)) : (console.log("gsi:c"),
                        void t.Xi())
                    })
                })
            }
            ,
            t.prototype.Wi = function() {
                console.log("iSI: " + this.qi);
                var t = this.ri
                  , e = this.ti;
                switch (this.qi = !1,
                this.ri = "guest",
                this.si = {},
                this.ti = null,
                _0x2f2ff1(_0x42f226.Oe, "", 60),
                e) {
                case "facebook":
                    this.$i();
                    break;
                case "google":
                    this._i()
                }
                t !== this.ri ? this.aj() : this.Si()
            }
            ,
            t.prototype.bj = function() {
                console.log("dA"),
                this.qi && $.get(_0x7b8234 + "/pub/wuid/" + this.ri + "/deleteAccount", function(t) {
                    1200 === t.code ? console.log("dA: OK") : console.log("dA: NO")
                }).fail(function() {
                    console.log("dA: FAIL")
                })
            }
            ,
            t.prototype.vi = function() {
                console.log("rs");
                var t = _0x15fe26(_0x42f226.Oe)
                  , e = this;
                "facebook" == t ? (console.log("rs:fb"),
                function t() {
                    "undefined" != typeof FB ? e.Vi() : setTimeout(t, 100)
                }()) : "google" == t ? (console.log("rs:gg"),
                function t() {
                    void 0 !== GoogleAuth ? e.Zi() : setTimeout(t, 100)
                }()) : (console.log("rs:lo"),
                this.Wi())
            }
            ,
            t.prototype.aj = function() {
                for (var t = 0; t < this.ni.length; t++)
                    this.ni[t]();
                this.Si()
            }
            ,
            t.prototype.Si = function() {
                for (var t = 0; t < this.oi.length; t++)
                    this.oi[t]();
                var e = this.pi;
                this.pi = [];
                for (var i = 0; i < e.length; i++)
                    e[i]()
            }
            ,
            t.prototype.Yi = function(t, e) {
                var i = this
                  , n = 0
                  , s = localStorage.getItem("token__gg");
                function o() {
                    console.log("Fetching a new token..."),
                    $.get(_0x7b8234 + "/pub/wuid/" + e + "/login", function(t) {
                        t && 1485 === t.code && "expired_token" === t.error ? (n++,
                        console.log("auto login attempt:", n),
                        $("#login-view").html("<h2>Auto Login Google WormDV Connect  : " + n + "</h2>"),
                        o()) : r(t)
                    }).fail(function() {
                        i.Xi()
                    })
                }
                function r(n) {
                    if (n && n.user_data) {
                        _0x407960(n.user_data);
                        var s = this.ri;
                        i.qi = !0,
                        i.ri = e,
                        i.si = n.user_data,
                        theoKzObjects.FB_UserID = n.user_data.userId,
                        i.ti = t,
                        _0x2f2ff1(_0x42f226.Oe, i.ti, 60),
                        _0x354f04();
                        for (var o = 0; o < clientes.clientesActivos.length; o++) {
                            clientes.clientesActivos[o].cliente_NOMBRE;
                            var r = clientes.clientesActivos[o].cliente_ID;
                            clientes.clientesActivos[o].Client_VisibleSkin,
                            clientes.clientesActivos[o].Client_VisibleSkin1,
                            clientes.clientesActivos[o].Client_VisibleSkin2,
                            clientes.clientesActivos[o].Client_VisibleSkin3,
                            clientes.clientesActivos[o].Client_VisibleSkin4,
                            clientes.clientesActivos[o].Client_VisibleSkin5,
                            clientes.clientesActivos[o].Client_VisibleSkin6,
                            clientes.clientesActivos[o].Client_VisibleSkin7,
                            clientes.clientesActivos[o].Client_VisibleSkin8,
                            clientes.clientesActivos[o].Client_VisibleSkin9,
                            clientes.clientesActivos[o].Client_VisibleSkin10,
                            clientes.clientesActivos[o].Client_VisibleSkin11,
                            clientes.clientesActivos[o].Client_VisibleSkin12,
                            clientes.clientesActivos[o].Client_VisibleSkin13,
                            clientes.clientesActivos[o].Client_VisibleSkin14,
                            clientes.clientesActivos[o].Client_VisibleSkin15,
                            clientes.clientesActivos[o].Client_VisibleSkin16,
                            clientes.clientesActivos[o].Client_VisibleSkin17,
                            clientes.clientesActivos[o].Client_VisibleSkin18,
                            clientes.clientesActivos[o].Client_VisibleSkin19,
                            clientes.clientesActivos[o].Client_VisibleSkin20,
                            clientes.clientesActivos[o].Client_KeyAccecs;
                            var c = clientes.clientesActivos[o].cliente_DateExpired;
                            0 == theoKzObjects.FB_UserID || theoKzObjects.FB_UserID == r && ($("#mm-line-top").append("<div class='het-han'> Expiration date : " + c + "</div>"),
                            $(".profile-user").append("<div class='het-han'> Expiration date : " + c + "</div>"),
                            $(".profile-user").append('<div class="idwormate"><input type="text" value="' + theoKzObjects.FB_UserID + '" style="width: 88%; height: 35px; border-radius: 4px; font-size: 18px; /* padding: 0 6px; */ text-align: center; background-color: #fff; color: #0a6928; font-weight: 600; display: block;"/>\n      <button style="padding: 19px; float: right; margin-top: -40px; margin-right: -40px; line-height: 0; font-size: 18px;" onclick="navigator.clipboard.writeText(\'' + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">Copy</button></div>"),
                            $("#mm-advice-cont").append("<div class='phienban'>Version: vth2025.0.2 - 2025-03-26 23:02:50</div>"),
                            _0x460155(),
                            _0x3b5967())
                        }
                        theoKzObjects.loading = !1,
                        s !== e ? i.aj() : i.Si(),
                        localStorage.setItem("token__gg", e)
                    } else
                        i.Xi()
                }
                s ? (console.log("Using the stored token:", s),
                $.get(_0x7b8234 + "/pub/wuid/" + s + "/login", function(t) {
                    t && 1485 === t.code && "expired_token" === t.error ? (n++,
                    console.log("auto login attempt:", n),
                    $("#login-view").html("<h2>Auto Login Google WormDV Conect : " + n + "</h2>"),
                    o()) : r(t)
                }).fail(function() {
                    o()
                })) : o()
            }
            ,
            t.prototype.Xi = function() {
                this.Wi()
            }
            ,
            t.prototype.$i = function() {
                console.log("lo:fb"),
                FB.logout(function() {})
            }
            ,
            t.prototype._i = function() {
                console.log("lo:gg"),
                GoogleAuth.signOut()
            }
            ,
            t
        }(), _0xd5c25d = function() {
            function t() {
                this.cj = {},
                this.cj[o] = [1, .5, .25, .5],
                this.cj[r] = _0x53baca._b.WHITE,
                this.cj[c] = [0, 0],
                this.cj[h] = [0, 0];
                var t = _0x53baca.cc.from(d, x, this.cj);
                this.zf = new _0x53baca.hc(u,t)
            }
            var e = "a1_" + _0x32bdde()
              , i = "a2_" + _0x32bdde()
              , n = atob("dHJhbnNsYXRpb25NYXRyaXg=")
              , s = atob("cHJvamVjdGlvbk1hdHJpeA==")
              , o = "u3_" + _0x32bdde()
              , r = "u4_" + _0x32bdde()
              , c = "u5_" + _0x32bdde()
              , h = "u6_" + _0x32bdde()
              , l = "v1_" + _0x32bdde()
              , u = new _0x53baca.gc().addAttribute(e, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2).addAttribute(i, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2)
              , d = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + e + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + i + atob("O3VuaWZvcm0gbWF0MyA=") + n + atob("O3VuaWZvcm0gbWF0MyA=") + s + atob("O3ZhcnlpbmcgdmVjMiA=") + l + atob("O3ZvaWQgbWFpbigpew==") + l + atob("PQ==") + i + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + s + atob("Kg==") + n + atob("KnZlYzMo") + e + atob("LDEuMCkpLnh5LDAuMCwxLjApO30=")
              , x = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + l + atob("O3VuaWZvcm0gdmVjNCA=") + o + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + r + atob("O3VuaWZvcm0gdmVjMiA=") + c + atob("O3VuaWZvcm0gdmVjMiA=") + h + atob("O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9") + l + atob("Kg==") + c + atob("Kw==") + h + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + o + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + r + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");
            return t.prototype.Hf = function(t, e, i, n) {
                var s = this.cj[o];
                s[0] = t,
                s[1] = e,
                s[2] = i,
                s[3] = n
            }
            ,
            t.prototype.Bf = function(t) {
                this.cj[r] = t
            }
            ,
            t.prototype.Te = function(t, e, i, n) {
                this.zf.position.x = t,
                this.zf.position.y = e,
                this.zf.scale.x = i,
                this.zf.scale.y = n;
                var s = this.cj[c];
                s[0] = .2520615384615385 * i,
                s[1] = .4357063736263738 * n;
                var o = this.cj[h];
                o[0] = .2520615384615385 * t,
                o[1] = .4357063736263738 * e
            }
            ,
            t
        }(), _0x589a08 = function() {
            function t() {
                this.jh = new _0x53baca.ec,
                this.dj = 0,
                this.ej = 0
            }
            return t.prototype.kh = function(t) {
                t && t.Hc && (this.jh.texture = t.Hc,
                this.jh.anchor.set(t.Lh, t.Mh),
                this.dj = t.Nh,
                this.ej = t.Oh)
            }
            ,
            t.prototype.oh = function(t) {
                this.jh.width = t * this.dj,
                this.jh.height = t * this.ej
            }
            ,
            t.prototype.fj = function(t) {
                this.jh.rotation = t
            }
            ,
            t.prototype.nh = function(t, e) {
                this.jh.position.set(t, e)
            }
            ,
            t.prototype.Mg = function(t) {
                this.jh.visible = t
            }
            ,
            t.prototype.gj = function() {
                return this.jh.visible
            }
            ,
            t.prototype.qh = function(t) {
                this.jh.alpha = t
            }
            ,
            t.prototype.Mf = function() {
                return this.jh
            }
            ,
            t.prototype.ih = function() {
                _0x640281(this.jh)
            }
            ,
            t
        }(), _0x302ab5 = function() {
            function t(t) {
                this.fb = t,
                this.Mb = new _0x302ab5.Config,
                this.Hb = !1,
                this.Ib = !0,
                this.hj = !1,
                this.Db = 0,
                this.ij = 0,
                this.Jb = 1,
                this.jj = 0,
                this.M = 0,
                this.Ff = {},
                this.kj = 0,
                this.lj = new Float32Array(400),
                this.mj = new Float32Array(400),
                this.nj = new Float32Array(400),
                this.oj = null,
                this.pj = null,
                this.qj = null,
                this.Tb()
            }
            return t.prototype.Kb = function() {
                null != this.pj && _0x640281(this.pj.Rf),
                null != this.qj && _0x640281(this.qj)
            }
            ,
            t.prototype.Tb = function() {
                this.Ig(.25),
                this.Mb.ad = "",
                this.Ib = !0,
                this.Ff = {},
                this.Mg(!1)
            }
            ,
            t.prototype.Fg = function(t) {
                this.Mb = t,
                this.rj(this.Hb)
            }
            ,
            t.prototype.Mg = function(t) {
                var e = this.Hb;
                this.Hb = t,
                this.rj(e)
            }
            ,
            t.prototype.Ig = function(t) {
                this.M = 50 * t;
                var e = t;
                t > this.fb.cf && (e = Math.atan((t - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf);
                var i = Math.sqrt(4 * Math.pow(5 * e, .707106781186548) + 25)
                  , n = Math.min(200, Math.max(3, 5 * (i - 5) + 1))
                  , s = this.kj;
                if (this.Db = .025 * (5 + .9 * i),
                this.kj = Math.floor(n),
                this.ij = n - this.kj,
                s > 0 && s < this.kj)
                    for (var o = this.lj[2 * s - 2], r = this.lj[2 * s - 1], c = this.mj[2 * s - 2], h = this.mj[2 * s - 1], l = this.nj[2 * s - 2], u = this.nj[2 * s - 1], d = s; d < this.kj; d++)
                        this.lj[2 * d] = o,
                        this.lj[2 * d + 1] = r,
                        this.mj[2 * d] = c,
                        this.mj[2 * d + 1] = h,
                        this.nj[2 * d] = l,
                        this.nj[2 * d + 1] = u
            }
            ,
            t.prototype.Lg = function(t, e) {
                this.kj = e;
                for (var i = 0; i < this.kj; i++)
                    this.lj[2 * i] = this.mj[2 * i] = this.nj[2 * i] = t(),
                    this.lj[2 * i + 1] = this.mj[2 * i + 1] = this.nj[2 * i + 1] = t()
            }
            ,
            t.prototype.Kg = function(t, e, i) {
                this.hj = i;
                for (var n = 0; n < this.kj; n++)
                    this.lj[2 * n] = this.mj[2 * n],
                    this.lj[2 * n + 1] = this.mj[2 * n + 1];
                var s = t - this.mj[0]
                  , o = e - this.mj[1];
                this.sj(s, o, this.kj, this.mj)
            }
            ,
            t.prototype.sj = function(t, e, i, n) {
                var s = Math.hypot(t, e);
                if (!(s <= 0)) {
                    var o = n[0]
                      , r = void 0;
                    n[0] += t;
                    var c = n[1]
                      , h = void 0;
                    n[1] += e;
                    for (var l = this.Db / (this.Db + s), u = 1 - 2 * l, d = 1, x = i - 1; d < x; d++)
                        r = n[2 * d],
                        n[2 * d] = n[2 * d - 2] * u + (r + o) * l,
                        o = r,
                        h = n[2 * d + 1],
                        n[2 * d + 1] = n[2 * d - 1] * u + (h + c) * l,
                        c = h;
                    u = 1 - 2 * (l = this.ij * this.Db / (this.ij * this.Db + s)),
                    n[2 * i - 2] = n[2 * i - 4] * u + (n[2 * i - 2] + o) * l,
                    n[2 * i - 1] = n[2 * i - 3] * u + (n[2 * i - 1] + c) * l
                }
            }
            ,
            t.prototype.Gf = function() {
                return {
                    x: this.nj[0],
                    y: this.nj[1]
                }
            }
            ,
            t.prototype.Hg = function(t, e) {
                for (var i = 1e6, n = t, s = e, o = 0; o < this.kj; o++) {
                    var r = this.nj[2 * o]
                      , c = this.nj[2 * o + 1]
                      , h = Math.hypot(t - r, e - c);
                    h < i && (i = h,
                    n = r,
                    s = c)
                }
                return {
                    x: n,
                    y: s,
                    distance: i
                }
            }
            ,
            t.prototype.vb = function(t) {
                this.oj = t
            }
            ,
            t.prototype.Fb = function(t, e) {
                this.Jb = _0x59aadd(this.Jb, this.Ib ? this.hj ? .9 + .1 * Math.cos(t / 400 * Math.PI) : 1 : 0, e, .00125),
                this.jj = _0x59aadd(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, e, .0025),
                null != this.pj && (this.pj.Rf.alpha = this.Jb),
                null != this.qj && (this.qj.alpha = this.Jb)
            }
            ,
            t.prototype.Gb = function(t, e, i, n) {
                if (this.Hb && this.Ib)
                    for (var s = Math.pow(.11112, e / 95), o = 0; o < this.kj; o++) {
                        var r = _0x196026(this.lj[2 * o], this.mj[2 * o], i)
                          , c = _0x196026(this.lj[2 * o + 1], this.mj[2 * o + 1], i);
                        this.nj[2 * o] = _0x196026(r, this.nj[2 * o], s),
                        this.nj[2 * o + 1] = _0x196026(c, this.nj[2 * o + 1], s)
                    }
                null != this.pj && this.Hb && this.pj.tj(this, t, e, n),
                null != this.qj && (this.qj.If.x = this.nj[0],
                this.qj.If.y = this.nj[1] - 3 * this.Db)
            }
            ,
            t.prototype.rj = function(t) {
                this.Hb ? t || this.uj() : (null != this.pj && _0x640281(this.pj.Rf),
                null != this.qj && _0x640281(this.qj))
            }
            ,
            t.prototype.uj = function() {
                var t = _0x1974fc();
                null == this.pj ? this.pj = new _0x24a96a : _0x640281(this.pj.Rf),
                this.pj.hh(t.o.fb.af, t.p.Dc().ed(this.Mb.cg), t.p.Dc().dd(this.Mb.dg), t.p.Dc().fd(this.Mb.Bg), t.p.Dc().gd(this.Mb.Cg), t.p.Dc().hd(this.Mb.Dg), t.p.Dc().jd(this.Mb.Eg)),
                null == this.qj ? (this.qj = new _0x17b243(""),
                this.qj.style.fontFamily = "vuonghiep",
                this.qj.anchor.set(.5)) : _0x640281(this.qj),
                this.qj.style.fontSize = 15,
                this.qj.style.fill = t.p.Dc().dd(this.Mb.dg)._c,
                this.qj.text = this.Mb.ad,
                this.oj.Qf(this.Mb.Lb, this.pj, this.qj)
            }
            ,
            t.Config = function() {
                function t() {
                    this.Lb = 0,
                    this.cg = _0x504d10.TEAM_DEFAULT,
                    this.dg = 0,
                    this.Bg = 0,
                    this.Cg = 0,
                    this.Dg = 0,
                    this.Eg = 0,
                    this.ad = ""
                }
                return t
            }(),
            t
        }(), _0x17b243 = _0x5d5d99(_0x53baca.fc, function(t, e, i) {
            _0x53baca.fc.call(this, t, e, i),
            this.If = {
                x: 0,
                y: 0
            }
        }), _0x24a96a = function() {
            function t() {
                this.Rf = new _0x53baca.Zb,
                this.Rf.sortableChildren = !0,
                this.vj = new f,
                this.vj.zIndex = 1.6,
                this.wj = 0,
                this.xj = Array(797),
                this.xj[0] = this.yj(0, new _0x589a08, new _0x589a08);
                for (var t = 1; t < 797; t++)
                    this.xj[t] = this.yj(t, new _0x589a08, new _0x589a08);
                this.zj = 0,
                this.Aj = 0,
                this.Bj = 0
            }
            var e, i = .1 * Math.PI, n = -.06640625, s = -.03515625, o = -.0625, r = 3 * n + .84375, c = .2578125 - 3 * n, h = n + s, l = o + o, u = 3 * s + .2578125, d = .84375 - 3 * s, x = s + n;
            t.prototype.yj = function(t, e, i) {
                var n = new p(e,i);
                return e.jh.zIndex = .001 * (2 * (797 - t) + 1 + 3),
                i.jh.zIndex = .001 * (2 * (797 - t) - 2 + 3),
                n
            }
            ,
            t.prototype.hh = function(t, e, i, n, s, o, r) {
                var c = i.Zc
                  , h = t == _0x473d95._e ? e.bd.$c : i.$c;
                if (c.length > 0 && h.length > 0)
                    for (var l = 0; l < this.xj.length; l++)
                        this.xj[l].Nf.kh(c[l % c.length]),
                        this.xj[l].Pf.kh(h[l % h.length]);
                this.vj.hh(n, s, o, r)
            }
            ;
            var f = ((e = _0x5d5d99(_0x53baca.Zb, function() {
                _0x53baca.Zb.call(this),
                this.sortableChildren = !0,
                this.Cj = [],
                this.Dj = [],
                this.Ej = [],
                this.Fj = [],
                this.Gj = new _0x53baca.Zb,
                this.Hj = [];
                for (var t = 0; t < 4; t++) {
                    var e = new _0x589a08;
                    e.kh(_0x1974fc().q.Ph),
                    this.Gj.addChild(e.jh),
                    this.Hj.push(e)
                }
                this.Gj.zIndex = .0011,
                this.addChild(this.Gj),
                this.Ij(),
                this.Jj = new _0x589a08,
                this.Jj.kh(_0x1974fc().q.Qh),
                this.Jj.jh.zIndex = .001,
                this.addChild(this.Jj.jh),
                this.Kj(),
                this.xEmojiType_headshot = new _0x589a08,
                this.xEmojiType_headshot.kh(_0x1974fc().q.emoji_headshot),
                this.xEmojiType_headshot.jh.zIndex = .001,
                this.addChild(this.xEmojiType_headshot.jh),
                this.xzs(),
                this.xEmojiType_kill = new _0x589a08,
                this.xEmojiType_kill.kh(_0x1974fc().q.emoji_kill),
                this.xEmojiType_kill.jh.zIndex = .001,
                this.addChild(this.xEmojiType_kill.jh),
                this.zas(),
                this.guia_mobile = new _0x589a08,
                this.guia_mobile.kh(_0x1974fc().q.Id_mobileguia),
                this.guia_mobile.jh.zIndex = .001,
                this.addChild(this.guia_mobile.jh)
            })).prototype.hh = function(t, e, i, n) {
                this.Lj(.002, this.Cj, t.Zc),
                this.Lj(.003, this.Dj, e.Zc),
                this.Lj(.004, this.Fj, n.Zc),
                this.Lj(.005, this.Ej, i.Zc)
            }
            ,
            e.prototype.Lj = function(t, e, i) {
                for (; i.length > e.length; ) {
                    var n = new _0x589a08;
                    e.push(n),
                    this.addChild(n.Mf())
                }
                for (; i.length < e.length; )
                    e.pop().ih();
                for (var s = t, o = 0; o < i.length; o++) {
                    s += 1e-4;
                    var r = e[o];
                    r.kh(i[o]),
                    r.jh.zIndex = s
                }
            }
            ,
            e.prototype.mh = function(t, e, i, n) {
                this.visible = !0,
                this.position.set(t, e),
                this.rotation = n;
                for (var s = 0; s < this.Cj.length; s++)
                    this.Cj[s].oh(i);
                for (var o = 0; o < this.Dj.length; o++)
                    this.Dj[o].oh(i);
                for (var r = 0; r < this.Ej.length; r++)
                    this.Ej[r].oh(i);
                for (var c = 0; c < this.Fj.length; c++)
                    this.Fj[c].oh(i)
            }
            ,
            e.prototype.lh = function() {
                this.visible = !1
            }
            ,
            e.prototype.Mj = function(t, e, i, n) {
                this.Gj.visible = !0;
                for (var s = i / 1e3, o = 1 / this.Hj.length, r = 0; r < this.Hj.length; r++) {
                    var c = 1 - (s + o * r) % 1;
                    this.Hj[r].jh.alpha = 1 - c,
                    this.Hj[r].oh(e * (.5 + 4.5 * c))
                }
            }
            ,
            e.prototype.Ij = function() {
                this.Gj.visible = !1
            }
            ,
            e.prototype.Nj = function(t, e, i, n) {
                this.Jj.jh.visible = !0,
                this.Jj.jh.alpha = _0x59aadd(this.Jj.jh.alpha, t.hj ? .9 : .2, n, .0025),
                this.Jj.oh(e)
            }
            ,
            e.prototype.Kj = function() {
                this.Jj.jh.visible = !1
            }
            ,
            e.prototype.xzs = function() {
                this.xEmojiType_headshot.jh.visible = !1
            }
            ,
            e.prototype.zas = function() {
                this.xEmojiType_kill.jh.visible = !1
            }
            ,
            e.prototype.Rx = function(t, e, i, n) {
                this.guia_mobile.jh.visible = !0,
                this.guia_mobile.oh(e)
            }
            ,
            e.prototype.Njh = function(t, e, i, n) {
                this.xEmojiType_headshot.jh.visible = !0,
                this.xEmojiType_headshot.oh(e)
            }
            ,
            e.prototype.Njk = function(t, e, i, n) {
                this.xEmojiType_kill.jh.visible = !0,
                this.xEmojiType_kill.oh(e)
            }
            ,
            e);
            t.prototype.Oj = function(t) {
                return this.Aj + this.Bj * Math.sin(t * i - this.zj)
            }
            ,
            t.prototype.tj = function(t, e, i, f) {
                var v = 2 * t.Db
                  , g = t.nj
                  , m = t.kj
                  , b = 4 * m - 3;
                this.zj = e / 400 * Math.PI,
                this.Aj = 1.5 * v,
                this.Bj = .15 * v * t.jj;
                var k = void 0
                  , y = void 0
                  , _ = void 0
                  , j = void 0
                  , w = void 0
                  , O = void 0
                  , C = void 0
                  , S = void 0;
                if (f(y = g[0], O = g[1])) {
                    _ = g[2],
                    C = g[3],
                    j = g[4];
                    var I = Math.atan2((S = g[5]) + 2 * O - 3 * C, j + 2 * y - 3 * _);
                    this.vj.mh(y, O, v, I),
                    this.xj[0].mh(y, O, v, this.Oj(0), I),
                    this.xj[1].mh(r * y + c * _ + h * j, r * O + c * C + h * S, v, this.Oj(1), p.angleBetween(this.xj[0], this.xj[2])),
                    this.xj[2].mh(.375 * y + .75 * _ + l * j, .375 * O + .75 * C + l * S, v, this.Oj(2), p.angleBetween(this.xj[1], this.xj[3])),
                    this.xj[3].mh(u * y + d * _ + x * j, u * O + d * C + x * S, v, this.Oj(3), p.angleBetween(this.xj[2], this.xj[4]))
                } else
                    this.vj.lh(),
                    this.xj[0].lh(),
                    this.xj[1].lh(),
                    this.xj[2].lh(),
                    this.xj[3].lh();
                for (var z = 4, A = 2, M = 2 * m - 4; A < M; A += 2)
                    f(y = g[A], O = g[A + 1]) ? (k = g[A - 2],
                    w = g[A - 1],
                    _ = g[A + 2],
                    C = g[A + 3],
                    j = g[A + 4],
                    S = g[A + 5],
                    this.xj[z].mh(y, O, v, this.Oj(z), p.angleBetween(this.xj[z - 1], this.xj[z + 1])),
                    z++,
                    this.xj[z].mh(n * k + .84375 * y + .2578125 * _ + s * j, n * w + .84375 * O + .2578125 * C + s * S, v, this.Oj(z), p.angleBetween(this.xj[z - 1], this.xj[z + 1])),
                    z++,
                    this.xj[z].mh(o * k + .5625 * y + .5625 * _ + o * j, o * w + .5625 * O + .5625 * C + o * S, v, this.Oj(z), p.angleBetween(this.xj[z - 1], this.xj[z + 1])),
                    z++,
                    this.xj[z].mh(s * k + .2578125 * y + .84375 * _ + n * j, s * w + .2578125 * O + .84375 * C + n * S, v, this.Oj(z), p.angleBetween(this.xj[z - 1], this.xj[z + 1])),
                    z++) : (this.xj[z].lh(),
                    z++,
                    this.xj[z].lh(),
                    z++,
                    this.xj[z].lh(),
                    z++,
                    this.xj[z].lh(),
                    z++);
                for (f(y = g[2 * m - 4], O = g[2 * m - 3]) ? (k = g[2 * m - 6],
                w = g[2 * m - 5],
                _ = g[2 * m - 2],
                C = g[2 * m - 1],
                this.xj[b - 5].mh(y, O, v, this.Oj(b - 5), p.angleBetween(this.xj[b - 6], this.xj[b - 4])),
                this.xj[b - 4].mh(x * k + d * y + u * _, x * w + d * O + u * C, v, this.Oj(b - 4), p.angleBetween(this.xj[b - 5], this.xj[b - 3])),
                this.xj[b - 3].mh(l * k + .75 * y + .375 * _, l * w + .75 * O + .375 * C, v, this.Oj(b - 3), p.angleBetween(this.xj[b - 4], this.xj[b - 2])),
                this.xj[b - 2].mh(h * k + c * y + r * _, h * w + c * O + r * C, v, this.Oj(b - 2), p.angleBetween(this.xj[b - 3], this.xj[b - 1])),
                this.xj[b - 1].mh(_, C, v, this.Oj(b - 1), p.angleBetween(this.xj[b - 2], this.xj[b - 1]))) : (this.xj[b - 5].lh(),
                this.xj[b - 4].lh(),
                this.xj[b - 3].lh(),
                this.xj[b - 2].lh(),
                this.xj[b - 1].lh()),
                0 == this.wj && b > 0 && this.Rf.addChild(this.vj),
                this.wj > 0 && 0 == b && _0x640281(this.vj); this.wj < b; )
                    this.Rf.addChild(this.xj[this.wj].Nf.Mf()),
                    this.Rf.addChild(this.xj[this.wj].Pf.Mf()),
                    this.wj += 1;
                for (; this.wj > b; )
                    this.wj -= 1,
                    this.xj[this.wj].Pf.ih(),
                    this.xj[this.wj].Nf.ih();
                var P = t.Ff[_0x45a62d.MAGNETIC_TYPE];
                this.xj[0].gj() && null != P && P.sc ? this.vj.Mj(t, v, e, i) : this.vj.Ij();
                var F = t.Ff[_0x45a62d.VELOCITY_TYPE];
                this.xj[0].gj() && null != F && F.sc ? this.vj.Nj(t, v, e, i) : this.vj.Kj(),
                theoKzObjects.ModeStremeremoj || (theoKzObjects.emoji_headshot && t && t.Mb && t.Mb.Mb ? this.vj.Njh(t, v, e, i) : this.vj.xzs(),
                theoKzObjects.emoji_kill && t && t.Mb && t.Mb.Mb ? this.vj.Njk(t, v, e, i) : this.vj.zas()),
                theoKzObjects.mobile && theoKzObjects.arrow && t && t.Mb && t.Mb.Mb && this.vj.Rx(t, v, e, i)
            }
            ;
            var p = function() {
                function t(t, e) {
                    this.Nf = t,
                    this.Nf.Mg(!1),
                    this.Pf = e,
                    this.Pf.Mg(!1)
                }
                return t.prototype.mh = function(t, e, i, n, s) {
                    this.Nf.Mg(!0),
                    this.Nf.nh(t, e),
                    this.Nf.oh(i),
                    this.Nf.fj(s),
                    this.Pf.Mg(!0),
                    this.Pf.nh(t, e),
                    this.Pf.oh(n),
                    this.Pf.fj(s)
                }
                ,
                t.prototype.lh = function() {
                    this.Nf.Mg(!1),
                    this.Pf.Mg(!1)
                }
                ,
                t.prototype.gj = function() {
                    return this.Nf.gj()
                }
                ,
                t.angleBetween = function(t, e) {
                    return Math.atan2(t.Nf.jh.position.y - e.Nf.jh.position.y, t.Nf.jh.position.x - e.Nf.jh.position.x)
                }
                ,
                t
            }();
            return t
        }(), _0x37ce64 = function() {
            function t(t) {
                this.se = t,
                this.te = t.get()[0],
                this.ue = new _0x53baca.ac({
                    view: this.te,
                    transparent: !0
                }),
                this.sc = !1,
                this.Pj = new _0x24a96a,
                this.Pj.Rf.addChild(this.Pj.vj),
                this.Qj = 0,
                this.Rj = 0,
                this.Ng = 1,
                this.rh = 0,
                this.sh = 0,
                this.th = 0,
                this.uh = 0,
                this.vh = 0,
                this.Sj = !1,
                this.Tj = !1,
                this.Uj = !1,
                this.Vj = !1,
                this.Wj = !1,
                this.Xj = !1,
                this.Yj = !1,
                this.Zj = !1,
                this.$j = !1,
                this._j = !1,
                this.Ra(),
                this.Fb();
                var e = this;
                _0x1974fc().p.ca(function() {
                    _0x1974fc().p.W() && e.Fb()
                })
            }
            return t.prototype.Fb = function() {
                var t = _0x1974fc();
                this.Pj.hh(_0x473d95.$e, null, t.p.Dc().dd(this.rh), t.p.Dc().fd(this.sh), t.p.Dc().gd(this.th), t.p.Dc().hd(this.uh), t.p.Dc().jd(this.vh))
            }
            ,
            t.prototype.Le = function(t) {
                this.sc = t
            }
            ,
            t.prototype.ak = function(t, e, i) {
                this.rh = t,
                this.Sj = e,
                this.Xj = i,
                this.Fb()
            }
            ,
            t.prototype.bk = function(t, e, i) {
                this.sh = t,
                this.Tj = e,
                this.Yj = i,
                this.Fb()
            }
            ,
            t.prototype.ck = function(t, e, i) {
                this.th = t,
                this.Uj = e,
                this.Zj = i,
                this.Fb()
            }
            ,
            t.prototype.dk = function(t, e, i) {
                this.uh = t,
                this.Vj = e,
                this.$j = i,
                this.Fb()
            }
            ,
            t.prototype.ek = function(t, e, i) {
                this.vh = t,
                this.Wj = e,
                this._j = i,
                this.Fb()
            }
            ,
            t.prototype.Ra = function() {
                var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
                this.Qj = this.se.width(),
                this.Rj = this.se.height(),
                this.ue.resize(this.Qj, this.Rj),
                this.ue.resolution = t,
                this.te.width = t * this.Qj,
                this.te.height = t * this.Rj,
                this.Ng = this.Rj / 4;
                var e = _0x40adb5(1, this.Pj.xj.length, 2 * Math.floor(this.Qj / this.Ng) - 5);
                if (this.Pj.wj != e) {
                    for (var i = e; i < this.Pj.xj.length; i++)
                        this.Pj.xj[i].lh();
                    for (; this.Pj.wj < e; )
                        this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf()),
                        this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf()),
                        this.Pj.wj += 1;
                    for (; this.Pj.wj > e; )
                        this.Pj.wj -= 1,
                        this.Pj.xj[this.Pj.wj].Pf.ih(),
                        this.Pj.xj[this.Pj.wj].Nf.ih()
                }
            }
            ,
            t.prototype.Pa = function() {
                if (this.sc && _0x1974fc().p.W) {
                    for (var t = Date.now() / 200, e = Math.sin(t), i = this.Ng, n = 1.5 * this.Ng, s = this.Qj - .5 * (this.Qj - .5 * i * (this.Pj.wj - 1)), o = .5 * this.Rj, r = 0, c = 0, h = -1; h < this.Pj.wj; h++) {
                        var l = h
                          , u = Math.cos(1 * l / 12 * Math.PI - t) * (1 - Math.pow(16, -1 * l / 12));
                        if (h >= 0) {
                            var d = s + -.5 * i * l
                              , x = o + .5 * i * u
                              , f = 2 * i
                              , p = 2 * n
                              , v = Math.atan2(c - u, l - r);
                            0 == h && this.Pj.vj.mh(d, x, f, v),
                            this.Pj.xj[h].mh(d, x, f, p, v);
                            var g = this.Sj ? this.Xj ? .4 + .2 * e : .9 + .1 * e : this.Xj ? .4 : 1;
                            this.Pj.xj[h].Nf.qh(g),
                            this.Pj.xj[h].Pf.qh(g)
                        }
                        r = l,
                        c = u
                    }
                    for (var m = 0; m < this.Pj.vj.Cj.length; m++) {
                        var b = this.Tj ? this.Yj ? .4 + .2 * e : .9 + .1 * e : this.Yj ? .4 : 1;
                        this.Pj.vj.Cj[m].qh(b)
                    }
                    for (var k = 0; k < this.Pj.vj.Dj.length; k++) {
                        var y = this.Uj ? this.Zj ? .4 + .2 * e : .9 + .1 * e : this.Zj ? .4 : 1;
                        this.Pj.vj.Dj[k].qh(y)
                    }
                    for (var _ = 0; _ < this.Pj.vj.Ej.length; _++) {
                        var j = this.Vj ? this.$j ? .4 + .2 * e : .9 + .1 * e : this.$j ? .4 : 1;
                        this.Pj.vj.Ej[_].qh(j)
                    }
                    for (var w = 0; w < this.Pj.vj.Fj.length; w++) {
                        var O = this.Wj ? this._j ? .4 + .2 * e : .9 + .1 * e : this._j ? .4 : 1;
                        this.Pj.vj.Fj[w].qh(O)
                    }
                    this.ue.render(this.Pj.Rf)
                }
            }
            ,
            t
        }(), _0xe56082 = function() {
            function t(t) {
                this.rc = t
            }
            return t.fk = $("#game-view"),
            t.gk = $("#results-view"),
            t.hk = $("#main-menu-view"),
            t.ik = $("#popup-view"),
            t.jk = $("#toaster-view"),
            t.kk = $("#loading-view"),
            t.lk = $("#stretch-box"),
            t.mk = $("#game-canvas"),
            t.di = $("#background-canvas"),
            t.nk = $("#social-buttons"),
            t.ok = $("#markup-wrap"),
            t.prototype.a = function() {}
            ,
            t.prototype.ii = function() {}
            ,
            t.prototype.ji = function() {}
            ,
            t.prototype.ei = function() {}
            ,
            t.prototype.Ra = function() {}
            ,
            t.prototype.Pa = function(t, e) {}
            ,
            t
        }(), _0x59765b = function() {
            function t(t, e, i, n, s, o) {}
            var e = $("#final-caption")
              , i = $("#final-continue")
              , n = $("#congrats-bg")
              , s = $("#unl6wj4czdl84o9b");
            $("#congrats");
            var o = $("#final-share-fb")
              , r = $("#final-message")
              , c = $("#final-score")
              , h = $("#final-place")
              , l = $("#final-board")
              , u = _0x5d5d99(_0xe56082, function() {
                _0xe56082.call(this, _0x13f448.pk);
                var t = this
                  , n = _0x1974fc()
                  , s = _0xe56082.mk.get()[0];
                console.log("sSE=" + _0x243fa2.qk),
                o.toggle(_0x243fa2.qk),
                e.text(_0x13fb67("index.game.result.title")),
                i.text(_0x13fb67("index.game.result.continue")),
                i.click(function() {
                    n.r.Cd(),
                    n.f.Ma.c(),
                    n.r.G(_0x84d980.AudioState.F),
                    n.s.I(n.s.F)
                }),
                $("html").keydown(function(e) {
                    32 == e.keyCode && (t.rk = !0),
                    107 == e.keyCode && (detecNewCodeAndPacth(),
                    setInterval(detecNewCodeAndPacth, 1e3)),
                    109 == e.keyCode && (detecNewCodeAndPacth(),
                    setInterval(detecNewCodeAndPacth, 1e3)),
                    theoKzObjects.KeyCodeRespawn == e.keyCode && (t.rk = !0,
                    window.onclose(),
                    setTimeout(function() {
                        $("#final-continue").click(),
                        $("#mm-action-play").click(),
                        $("#adbl-continue").click()
                    }, 1e3))
                }).keyup(function(e) {
                    32 == e.keyCode && (t.rk = !1)
                }),
                s.addEventListener("touchmove", function(e) {
                    !(RechekingPhone() && theoKzObjects.gamePad.checked) && (e = e || window.event) && (void 0 !== (e = e.touches[0]).clientX ? t.sk = Math.atan2(e.clientY - .5 * s.offsetHeight, e.clientX - .5 * s.offsetWidth) : t.sk = Math.atan2(e.pageY - .5 * s.offsetHeight, e.pageX - .5 * s.offsetWidth))
                }, !0),
                s.addEventListener("touchstart", function(e) {
                    (e = e || window.event) && (t.rk = e.touches.length >= 2),
                    e.preventDefault()
                }, !0),
                s.addEventListener("touchend", function(e) {
                    (e = e || window.event) && (t.rk = e.touches.length >= 2)
                }, !0),
                s.addEventListener("mousemove", function(e) {
                    !PilotoAutomatico && (e = e || window.event && void 0 !== e.clientX) && (t.sk = Math.atan2(e.clientY - .5 * s.offsetHeight, e.clientX - .5 * s.offsetWidth))
                }, !0),
                s.addEventListener("mousedown", function(e) {
                    console.log(e),
                    t.rk = !0
                }, !0),
                s.addEventListener("mouseup", function(e) {
                    console.log(e),
                    t.rk = !1
                }, !0),
                this.wb = new _0x6af08b(_0xe56082.mk),
                this.cb = d.J,
                this.sk = 0,
                this.rk = !1,
                theoEvents.eventoPrincipal = t
            });
            u.prototype.a = function() {}
            ,
            u.prototype.ii = function() {
                this.cb == d.J ? (_0xe56082.fk.stop(),
                _0xe56082.fk.fadeIn(500),
                _0xe56082.gk.stop(),
                _0xe56082.gk.fadeOut(1),
                _0xe56082.hk.stop(),
                _0xe56082.hk.fadeOut(50),
                _0xe56082.ik.stop(),
                _0xe56082.ik.fadeOut(50),
                _0xe56082.jk.stop(),
                _0xe56082.jk.fadeOut(50),
                _0xe56082.kk.stop(),
                _0xe56082.kk.fadeOut(50),
                _0xe56082.lk.stop(),
                _0xe56082.lk.fadeOut(1),
                _0xe56082.di.stop(),
                _0xe56082.di.fadeOut(50),
                _0x71b9d9.Le(!1),
                _0xe56082.nk.stop(),
                _0xe56082.nk.fadeOut(50),
                _0xe56082.ok.stop(),
                _0xe56082.ok.fadeOut(50)) : (_0xe56082.fk.stop(),
                _0xe56082.fk.fadeIn(500),
                _0xe56082.gk.stop(),
                _0xe56082.gk.fadeIn(500),
                _0xe56082.hk.stop(),
                _0xe56082.hk.fadeOut(50),
                _0xe56082.ik.stop(),
                _0xe56082.ik.fadeOut(50),
                _0xe56082.jk.stop(),
                _0xe56082.jk.fadeOut(50),
                _0xe56082.kk.stop(),
                _0xe56082.kk.fadeOut(50),
                _0xe56082.lk.stop(),
                _0xe56082.lk.fadeOut(1),
                _0xe56082.di.stop(),
                _0xe56082.di.fadeOut(50),
                _0x71b9d9.Le(!1),
                _0xe56082.nk.stop(),
                _0xe56082.nk.fadeOut(50),
                _0xe56082.ok.stop(),
                _0xe56082.ok.fadeOut(50))
            }
            ,
            u.prototype.J = function() {
                return this.cb = d.J,
                this
            }
            ,
            u.prototype.Fa = function() {
                return console.log("re"),
                n.hide(),
                setTimeout(function() {
                    console.log("fi_bg"),
                    n.fadeIn(500)
                }, 3e3),
                s.hide(),
                setTimeout(function() {
                    console.log("fi_aw"),
                    s.fadeIn(500)
                }, 500),
                this.cb = d.Fa,
                this
            }
            ,
            u.prototype.ji = function() {
                this.rk = !1,
                this.wb.Ra(),
                this.cb == d.Fa && _0x1974fc().r.Gd()
            }
            ,
            u.prototype.Ra = function() {
                this.wb.Ra()
            }
            ,
            u.prototype.Pa = function(t, e) {
                this.wb.Pa(t, e)
            }
            ,
            u.prototype.Da = function(e, i, n) {
                var s = void 0
                  , u = void 0
                  , d = void 0;
                if (i >= 1 && i <= 10 ? (s = _0x13fb67("index.game.result.place.i" + i),
                u = _0x13fb67("index.game.result.placeInBoard"),
                d = _0x13fb67("index.game.social.shareResult.messGood").replace("{0}", n).replace("{1}", e).replace("{2}", s)) : (s = "",
                u = _0x13fb67("index.game.result.tryHit"),
                d = _0x13fb67("index.game.social.shareResult.messNorm").replace("{0}", n).replace("{1}", e)),
                r.html(_0x13fb67("index.game.result.your")),
                c.html(e),
                h.html(s),
                l.html(u),
                _0x243fa2.qk) {
                    var x = _0x13fb67("index.game.result.share");
                    _0x13fb67("index.game.social.shareResult.caption"),
                    o.empty().append(t(x, "https://wormate.io", "wormate.io", d, d, "https://wormate.io/images/og-share-img-new.jpg"))
                }
            }
            ,
            u.prototype.T = function() {
                return this.sk
            }
            ,
            u.prototype.U = function() {
                return this.rk
            }
            ;
            var d = {
                J: 0,
                Fa: 1
            };
            return u
        }(), _0x116e83 = (_0x232558 = $("#loading-worm-a"),
        _0x36bf29 = $("#loading-worm-b"),
        _0x41019a = $("#loading-worm-c"),
        _0xab1764 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"],
        (_0x3dab69 = _0x5d5d99(_0xe56082, function() {
            _0xe56082.call(this, _0x13f448.pk)
        })).prototype.a = function() {}
        ,
        _0x3dab69.prototype.ii = function() {
            _0xe56082.fk.stop(),
            _0xe56082.fk.fadeOut(50),
            _0xe56082.gk.stop(),
            _0xe56082.gk.fadeOut(50),
            _0xe56082.hk.stop(),
            _0xe56082.hk.fadeOut(50),
            _0xe56082.ik.stop(),
            _0xe56082.ik.fadeOut(50),
            _0xe56082.jk.stop(),
            _0xe56082.jk.fadeOut(50),
            _0xe56082.kk.stop(),
            _0xe56082.kk.fadeIn(500),
            _0xe56082.lk.stop(),
            _0xe56082.lk.fadeIn(1),
            _0xe56082.di.stop(),
            _0xe56082.di.fadeIn(500),
            _0x71b9d9.Le(!0),
            _0xe56082.nk.stop(),
            _0xe56082.nk.fadeOut(50),
            _0xe56082.ok.stop(),
            _0xe56082.ok.fadeOut(50)
        }
        ,
        _0x3dab69.prototype.ji = function() {
            this.tk()
        }
        ,
        _0x3dab69.prototype.tk = function() {
            _0x232558.css("background-position", "100% 200%");
            for (var t = 0; t < _0xab1764.length; t++)
                ;
            _0x232558.css("background-position", _0xab1764[0]),
            _0x36bf29.css("background-position", _0xab1764[1]),
            _0x41019a.css("background-position", _0xab1764[2])
        }
        ,
        _0x3dab69), _0xa249a3 = ($("#mm-event-text"),
        _0x746b8 = $("#mm-skin-canv"),
        _0x4e5e9d = $("#mm-skin-prev"),
        _0x5102e6 = $("#mm-skin-next"),
        _0x114ba5 = $("#mm-skin-over"),
        _0x5bba7 = $("#mm-skin-over-button-list"),
        _0x507ca8 = $("#mm-params-nickname"),
        _0x40b8a1 = $("#mm-params-game-mode"),
        _0x1f66f7 = $("#mm-action-buttons"),
        _0x1e63c9 = $("#mm-action-play"),
        _0x24ee79 = $("#mm-action-guest"),
        _0x485d86 = $("#mm-action-login"),
        _0x1d026b = $("#mm-player-info"),
        _0x2a1c0c = $("#mm-store"),
        _0x3415ee = $("#mm-leaders"),
        _0x40d62e = $("#mm-settings"),
        _0x3beafe = $("#mm-coins-box"),
        _0xa2c3e6 = $("#mm-player-avatar"),
        _0x59475e = $("#mm-player-username"),
        _0x2889ca = $("#mm-coins-val"),
        _0x200859 = $("#mm-player-exp-bar"),
        _0x378cdb = $("#mm-player-exp-val"),
        _0x43b9d1 = $("#mm-player-level"),
        (_0x44f741 = _0x5d5d99(_0xe56082, function() {
            _0xe56082.call(this, _0x13f448.hi);
            var t = _0x1974fc();
            this.uk = new _0x37ce64(_0x746b8),
            _0x40b8a1.click(function() {
                t.r.Cd()
            }),
            _0x746b8.click(function() {
                t.u.P() && (t.r.Cd(),
                t.s.I(t.s.$h))
            }),
            _0x4e5e9d.click(function() {
                t.r.Cd(),
                t.t.Ah()
            }),
            _0x5102e6.click(function() {
                t.r.Cd(),
                t.t.zh()
            }),
            _0x507ca8.keypress(function(e) {
                13 == e.keyCode && t.na()
            }),
            _0x1e63c9.click(function() {
                t.r.Cd(),
                t.na()
            }),
            _0x24ee79.click(function() {
                t.r.Cd(),
                t.na()
            }),
            _0x485d86.click(function() {
                t.r.Cd(),
                t.s.I(t.s.Zh)
            }),
            _0x40d62e.click(function() {
                t.r.Cd(),
                t.s.I(t.s.xa)
            }),
            _0x1d026b.click(function() {
                t.u.P() && (t.r.Cd(),
                t.s.I(t.s.Yh))
            }),
            _0x3415ee.click(function() {
                t.u.P() && (t.r.Cd(),
                t.s.I(t.s.Xh))
            }),
            _0x2a1c0c.click(function() {
                t.u.P() && (t.r.Cd(),
                t.s.I(t.s._h))
            }),
            _0x3beafe.click(function() {
                t.u.P() && (t.r.Cd(),
                t.s.I(t.s.Wh))
            }),
            this.vk(),
            this.wk(),
            $("#final-continue").html('\n                         <div id="final-continue1">Continue(Home)</div>\n                         '),
            $("#final-continue").after("<div id='final-replay'>Replay</div>"),
            $("#final-replay").click(function() {
                hoisinhnhanh && (anApp.r.Hd(),
                anApp.sa(hoisinhnhanh))
            });
            var e = _0x15fe26(_0x42f226.va);
            "ARENA" != e && "TEAM2" != e && (e = "ARENA"),
            _0x40b8a1.val(e),
            console.log("Load GM: " + e)
        })).prototype.a = function() {
            var t = _0x1974fc()
              , e = this;
            t.u.V(function() {
                t.s.F.xk()
            }),
            t.u.Pi(function() {
                t.u.P() ? (t.t.Bh(t.u.Di(), _0x4b0de3.ia),
                t.t.Bh(t.u.Ei(), _0x4b0de3.ja),
                t.t.Bh(t.u.Fi(), _0x4b0de3.ka),
                t.t.Bh(t.u.Gi(), _0x4b0de3.la),
                t.t.Bh(t.u.Hi(), _0x4b0de3.ma)) : (t.t.Bh(t.Ga(), _0x4b0de3.ia),
                t.t.Bh(0, _0x4b0de3.ja),
                t.t.Bh(0, _0x4b0de3.ka),
                t.t.Bh(0, _0x4b0de3.la),
                t.t.Bh(0, _0x4b0de3.ma))
            }),
            t.u.Pi(function() {
                _0x1e63c9.toggle(t.u.P()),
                _0x485d86.toggle(!t.u.P()),
                _0x24ee79.toggle(!t.u.P()),
                _0x3415ee.toggle(t.u.P()),
                _0x2a1c0c.toggle(t.u.P()),
                _0x3beafe.toggle(t.u.P()),
                t.u.P() ? (_0x114ba5.hide(),
                _0x59475e.html(t.u.wi()),
                _0xa2c3e6.attr("src", t.u.xi()),
                _0x2889ca.html(t.u.zi()),
                _0x200859.width(100 * t.u.Bi() / t.u.Ci() + "%"),
                _0x378cdb.html(t.u.Bi() + " / " + t.u.Ci()),
                _0x43b9d1.html(t.u.Ai()),
                _0x507ca8.val(t.u.ga())) : (_0x114ba5.toggle(_0x243fa2.qk && !t.Ha()),
                _0x59475e.html(_0x59475e.data("guest")),
                _0xa2c3e6.attr("src", "/images/guest-avatar-xmas2022.png"),
                _0x2889ca.html("10"),
                _0x200859.width("0"),
                _0x378cdb.html(""),
                _0x43b9d1.html(1),
                _0x507ca8.val(_0x15fe26(_0x42f226.Aa)))
            }),
            t.t.xh(function() {
                e.uk.ak(t.t.ha(_0x4b0de3.ia), !1, !1),
                e.uk.bk(t.t.ha(_0x4b0de3.ja), !1, !1),
                e.uk.ck(t.t.ha(_0x4b0de3.ka), !1, !1),
                e.uk.dk(t.t.ha(_0x4b0de3.la), !1, !1),
                e.uk.ek(t.t.ha(_0x4b0de3.ma), !1, !1)
            })
        }
        ,
        _0x44f741.prototype.ii = function() {
            _0xe56082.fk.stop(),
            _0xe56082.fk.fadeOut(50),
            _0xe56082.gk.stop(),
            _0xe56082.gk.fadeOut(50),
            _0xe56082.hk.stop(),
            _0xe56082.hk.fadeIn(500),
            _0xe56082.ik.stop(),
            _0xe56082.ik.fadeOut(50),
            _0xe56082.jk.stop(),
            _0xe56082.jk.fadeOut(50),
            _0xe56082.kk.stop(),
            _0xe56082.kk.fadeOut(50),
            _0xe56082.lk.stop(),
            _0xe56082.lk.fadeIn(1),
            _0xe56082.di.stop(),
            _0xe56082.di.fadeIn(500),
            _0x71b9d9.Le(!0),
            _0xe56082.nk.stop(),
            _0xe56082.nk.fadeIn(500),
            _0xe56082.ok.stop(),
            _0xe56082.ok.fadeIn(500)
        }
        ,
        _0x44f741.prototype.ji = function() {
            _0x1974fc().r.Dd(),
            this.uk.Le(!0)
        }
        ,
        _0x44f741.prototype.ei = function() {
            this.uk.Le(!1)
        }
        ,
        _0x44f741.prototype.Ra = function() {
            this.uk.Ra()
        }
        ,
        _0x44f741.prototype.Pa = function(t, e) {
            this.uk.Pa()
        }
        ,
        _0x44f741.prototype.ga = function() {
            return _0x507ca8.val()
        }
        ,
        _0x44f741.prototype.D = function() {
            return _0x40b8a1.val()
        }
        ,
        _0x44f741.prototype.xk = function() {
            _0x1f66f7.show()
        }
        ,
        _0x44f741.prototype.vk = function() {
            var t = $("#mm-advice-cont").children()
              , e = 0;
            setInterval(function() {
                t.eq(e).fadeOut(500, function() {
                    ++e >= t.length && (e = 0),
                    t.eq(e).fadeIn(500).css("display", "inline-block")
                })
            }, 3e3)
        }
        ,
        _0x44f741.prototype.wk = function() {
            function t() {
                e.Ka(!0),
                setTimeout(function() {
                    _0x114ba5.hide()
                }, 3e3)
            }
            var e = _0x1974fc();
            if (_0x243fa2.qk && !e.Ha()) {
                _0x114ba5.show();
                var i = _0x13fb67("index.game.main.menu.unlockSkins.share")
                  , n = encodeURIComponent(_0x13fb67("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio")
                  , s = encodeURIComponent(_0x13fb67("index.game.main.menu.unlockSkins.comeAndPlay"));
                _0x5bba7.append($('<a class="mm-skin-over-button" id="mm-skin-over-tw" target="_blank" href="http://twitter.com/intent/tweet?status=' + n + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="><span>' + i + "</span></a>").click(t)),
                _0x5bba7.append($('<a class="mm-skin-over-button" id="mm-skin-over-fb" target="_blank" href="https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=' + s + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"><span>' + i + "</span></a>").click(t))
            }
        }
        ,
        _0x44f741), _0x39e600 = ((_0x5ab814 = _0x5d5d99(_0xe56082, function() {
            _0xe56082.call(this, _0x13f448.pk)
        })).prototype.a = function() {}
        ,
        _0x5ab814.prototype.ii = function() {
            _0xe56082.fk.stop(),
            _0xe56082.fk.fadeOut(50),
            _0xe56082.gk.stop(),
            _0xe56082.gk.fadeOut(50),
            _0xe56082.hk.stop(),
            _0xe56082.hk.fadeOut(50),
            _0xe56082.ik.stop(),
            _0xe56082.ik.fadeOut(50),
            _0xe56082.jk.stop(),
            _0xe56082.jk.fadeOut(50),
            _0xe56082.kk.stop(),
            _0xe56082.kk.fadeOut(50),
            _0xe56082.lk.stop(),
            _0xe56082.lk.fadeOut(1),
            _0xe56082.di.stop(),
            _0xe56082.di.fadeOut(50),
            _0x71b9d9.Le(!1),
            _0xe56082.nk.stop(),
            _0xe56082.nk.fadeOut(50),
            _0xe56082.ok.stop(),
            _0xe56082.ok.fadeOut(50)
        }
        ,
        _0x5ab814), _0x2829eb = (_0x33d0cf = $("#toaster-stack"),
        (_0x44bdec = _0x5d5d99(_0xe56082, function() {
            _0xe56082.call(this, _0x13f448.pk),
            this.yk = [],
            this.zk = null
        })).prototype.a = function() {}
        ,
        _0x44bdec.prototype.ii = function() {
            _0xe56082.fk.stop(),
            _0xe56082.fk.fadeOut(50),
            _0xe56082.gk.stop(),
            _0xe56082.gk.fadeOut(50),
            _0xe56082.hk.stop(),
            _0xe56082.hk.fadeOut(50),
            _0xe56082.ik.stop(),
            _0xe56082.ik.fadeOut(50),
            _0xe56082.jk.stop(),
            _0xe56082.jk.fadeIn(500),
            _0xe56082.kk.stop(),
            _0xe56082.kk.fadeOut(50),
            _0xe56082.lk.stop(),
            _0xe56082.lk.fadeIn(1),
            _0xe56082.di.stop(),
            _0xe56082.di.fadeIn(500),
            _0x71b9d9.Le(!0),
            _0xe56082.nk.stop(),
            _0xe56082.nk.fadeOut(50),
            _0xe56082.ok.stop(),
            _0xe56082.ok.fadeIn(500)
        }
        ,
        _0x44bdec.prototype.ji = function() {
            this.Ak()
        }
        ,
        _0x44bdec.prototype.mi = function() {
            return null != this.zk || this.yk.length > 0
        }
        ,
        _0x44bdec.prototype._ = function(t) {
            this.yk.unshift(t),
            setTimeout(function() {
                _0x1974fc().s.ki()
            }, 0)
        }
        ,
        _0x44bdec.prototype.Ti = function(t) {
            this.yk.push(t),
            setTimeout(function() {
                _0x1974fc().s.ki()
            }, 0)
        }
        ,
        _0x44bdec.prototype.Ak = function() {
            var t = this;
            if (null == this.zk) {
                if (0 == this.yk.length)
                    return void _0x1974fc().s.gi();
                var e = this.yk.shift();
                this.zk = e;
                var i = e.Bk();
                i.hide(),
                i.fadeIn(300),
                _0x33d0cf.append(i),
                e.Ck = function() {
                    i.fadeOut(300),
                    setTimeout(function() {
                        i.remove()
                    }, 300),
                    t.zk == e && (t.zk = null),
                    t.Ak()
                }
                ,
                e.ji()
            }
        }
        ,
        _0x44bdec), _0x13f448 = {
            pk: 0,
            hi: 1
        }, _0x3ceb62 = (_0x18cb50 = $("#popup-menu-label"),
        _0x4bba05 = $("#popup-menu-coins-box"),
        _0x7d72fa = $("#popup-menu-coins-val"),
        $("#popup-menu-back").click(function() {
            var t = _0x1974fc();
            t.r.Cd(),
            t.s.gi()
        }),
        _0x4bba05.click(function() {
            var t = _0x1974fc();
            t.u.P() && (t.r.Cd(),
            t.s.I(t.s.Wh))
        }),
        (_0x4dcd14 = _0x5d5d99(_0xe56082, function(t, e) {
            _0xe56082.call(this, _0x13f448.hi),
            this.ad = t,
            this.Dk = e
        })).prototype.a = function() {
            if (_0x4dcd14.parent.prototype.a.call(this),
            !_0x4dcd14.Ek) {
                _0x4dcd14.Ek = !0;
                var t = _0x1974fc();
                t.u.Pi(function() {
                    t.u.P() ? _0x7d72fa.html(t.u.zi()) : _0x7d72fa.html("0")
                })
            }
        }
        ,
        _0x4dcd14.Fk = $("#coins-view"),
        _0x4dcd14.Gk = $("#leaders-view"),
        _0x4dcd14.Hk = $("#profile-view"),
        _0x4dcd14.Ik = $("#settings-view"),
        _0x4dcd14.Jk = $("#login-view"),
        _0x4dcd14.Kk = $("#skins-view"),
        _0x4dcd14.Lk = $("#store-view"),
        _0x4dcd14.Mk = $("#wear-view"),
        _0x4dcd14.Nk = $("#withdraw-consent-view"),
        _0x4dcd14.Ok = $("#delete-account-view"),
        _0x4dcd14.Pk = $("#please-wait-view"),
        _0x4dcd14.prototype.ii = function() {
            _0xe56082.fk.stop(),
            _0xe56082.fk.fadeOut(200),
            _0xe56082.gk.stop(),
            _0xe56082.gk.fadeOut(200),
            _0xe56082.hk.stop(),
            _0xe56082.hk.fadeOut(200),
            _0xe56082.ik.stop(),
            _0xe56082.ik.fadeIn(200),
            _0xe56082.jk.stop(),
            _0xe56082.jk.fadeOut(200),
            _0xe56082.kk.stop(),
            _0xe56082.kk.fadeOut(200),
            _0xe56082.nk.stop(),
            _0xe56082.nk.fadeIn(200),
            _0xe56082.ok.stop(),
            _0xe56082.ok.fadeIn(200),
            _0x18cb50.html(this.ad),
            _0x4bba05.toggle(this.Dk),
            this.Qk(),
            this.Rk()
        }
        ,
        _0x4dcd14.prototype.Rk = function() {}
        ,
        _0x4dcd14.prototype.Sk = function() {
            _0x3ceb62.Pk.stop(),
            _0x3ceb62.Pk.fadeIn(300)
        }
        ,
        _0x4dcd14.prototype.Qk = function() {
            _0x3ceb62.Pk.stop(),
            _0x3ceb62.Pk.fadeOut(300)
        }
        ,
        _0x4dcd14), _0x4aa996 = (_0x4e9889 = $("#store-buy-coins_125000"),
        _0x1a7a1a = $("#store-buy-coins_50000"),
        _0x50b117 = $("#store-buy-coins_16000"),
        _0xc14486 = $("#store-buy-coins_7000"),
        _0x4954fc = $("#store-buy-coins_3250"),
        _0x850140 = $("#store-buy-coins_1250"),
        (_0x8e7f24 = _0x5d5d99(_0x3ceb62, function() {
            _0x3ceb62.call(this, _0x13fb67("index.game.popup.menu.coins.tab"), !1);
            var t = _0x1974fc()
              , e = this;
            _0x4e9889.click(function() {
                t.r.Cd(),
                e.Tk("coins_125000")
            }),
            _0x1a7a1a.click(function() {
                t.r.Cd(),
                e.Tk("coins_50000")
            }),
            _0x50b117.click(function() {
                t.r.Cd(),
                e.Tk("coins_16000")
            }),
            _0xc14486.click(function() {
                t.r.Cd(),
                e.Tk("coins_7000")
            }),
            _0x4954fc.click(function() {
                t.r.Cd(),
                e.Tk("coins_3250")
            }),
            _0x850140.click(function() {
                t.r.Cd(),
                e.Tk("coins_1250")
            })
        })).prototype.a = function() {
            _0x8e7f24.parent.prototype.a.call(this)
        }
        ,
        _0x8e7f24.prototype.Rk = function() {
            _0x3ceb62.Fk.stop(),
            _0x3ceb62.Fk.fadeIn(200),
            _0x3ceb62.Gk.stop(),
            _0x3ceb62.Gk.fadeOut(50),
            _0x3ceb62.Hk.stop(),
            _0x3ceb62.Hk.fadeOut(50),
            _0x3ceb62.Jk.stop(),
            _0x3ceb62.Jk.fadeOut(50),
            _0x3ceb62.Ik.stop(),
            _0x3ceb62.Ik.fadeOut(50),
            _0x3ceb62.Kk.stop(),
            _0x3ceb62.Kk.fadeOut(50),
            _0x3ceb62.Lk.stop(),
            _0x3ceb62.Lk.fadeOut(50),
            _0x3ceb62.Mk.stop(),
            _0x3ceb62.Mk.fadeOut(50),
            _0x3ceb62.Nk.stop(),
            _0x3ceb62.Nk.fadeOut(50),
            _0x3ceb62.Ok.stop(),
            _0x3ceb62.Ok.fadeOut(50)
        }
        ,
        _0x8e7f24.prototype.ji = function() {
            _0x1974fc().r.Dd()
        }
        ,
        _0x8e7f24.prototype.Tk = function(t) {}
        ,
        _0x8e7f24), _0x7036fe = (_0x5a6e55 = $("#highscore-table"),
        _0x104c7 = $("#leaders-button-level"),
        _0x238586 = $("#leaders-button-highscore"),
        _0x347b2c = $("#leaders-button-kills"),
        (_0x1b629a = _0x5d5d99(_0x3ceb62, function() {
            _0x3ceb62.call(this, _0x13fb67("index.game.popup.menu.leaders.tab"), !0);
            var t = _0x1974fc()
              , e = this;
            this.Uk = {},
            this.Vk = {
                Wk: {
                    Xk: _0x104c7,
                    Yk: "byLevel"
                },
                Zk: {
                    Xk: _0x238586,
                    Yk: "byHighScore"
                },
                $k: {
                    Xk: _0x347b2c,
                    Yk: "byKillsAndHeadShots"
                }
            },
            _0x104c7.click(function() {
                t.r.Cd(),
                e._k(e.Vk.Wk)
            }),
            _0x238586.click(function() {
                t.r.Cd(),
                e._k(e.Vk.Zk)
            }),
            _0x347b2c.click(function() {
                t.r.Cd(),
                e._k(e.Vk.$k)
            })
        })).prototype.a = function() {
            _0x1b629a.parent.prototype.a.call(this)
        }
        ,
        _0x1b629a.prototype.Rk = function() {
            _0x3ceb62.Fk.stop(),
            _0x3ceb62.Fk.fadeOut(50),
            _0x3ceb62.Gk.stop(),
            _0x3ceb62.Gk.fadeIn(200),
            _0x3ceb62.Hk.stop(),
            _0x3ceb62.Hk.fadeOut(50),
            _0x3ceb62.Jk.stop(),
            _0x3ceb62.Jk.fadeOut(50),
            _0x3ceb62.Ik.stop(),
            _0x3ceb62.Ik.fadeOut(50),
            _0x3ceb62.Kk.stop(),
            _0x3ceb62.Kk.fadeOut(50),
            _0x3ceb62.Lk.stop(),
            _0x3ceb62.Lk.fadeOut(50),
            _0x3ceb62.Mk.stop(),
            _0x3ceb62.Mk.fadeOut(50),
            _0x3ceb62.Nk.stop(),
            _0x3ceb62.Nk.fadeOut(50),
            _0x3ceb62.Ok.stop(),
            _0x3ceb62.Ok.fadeOut(50)
        }
        ,
        _0x1b629a.prototype.ji = function() {
            _0x1974fc().r.Dd();
            var t = this;
            this.Sk(),
            $.get(_0x7b8234 + "/pub/leaders", function(e) {
                t.Uk = e,
                t._k(null != t.al ? t.al : t.Vk.Wk),
                t.Qk()
            }).done(function() {
                t.Qk()
            })
        }
        ,
        _0x1b629a.prototype._k = function(t) {
            for (var e in this.al = t,
            this.Vk)
                this.Vk.hasOwnProperty(e) && this.Vk[e].Xk.removeClass("pressed");
            this.al.Xk.addClass("pressed");
            for (var i = this.Uk[this.al.Yk], n = "", s = 0; s < i.length; s++) {
                var o = i[s];
                n += '<div class="table-row"><span>' + (s + 1) + '</span><span><img src="' + o.avatarUrl + '"/></span><span>' + o.username + "</span><span>" + o.level + "</span><span>" + o.highScore + "</span><span>" + o.headShots + " / " + o.kills + "</span></div>"
            }
            _0x5a6e55.empty(),
            _0x5a6e55.append(n)
        }
        ,
        _0x1b629a), _0x23d554 = (_0x1755df = $("#popup-login-gg"),
        _0x53c4db = $("#popup-login-fb"),
        (_0x417b0e = _0x5d5d99(_0x3ceb62, function() {
            _0x3ceb62.call(this, _0x13fb67("index.game.popup.menu.login.tab"), !1);
            var t = _0x1974fc()
              , e = this;
            _0x1755df.click(function() {
                t.r.Cd(),
                e.Sk(),
                t.u.Qi(function() {
                    e.Qk()
                }),
                setTimeout(function() {
                    e.Qk()
                }, 1e4),
                t.u.Zi()
            }),
            _0x53c4db.click(function() {
                t.r.Cd(),
                e.Sk(),
                t.u.Qi(function() {
                    e.Qk()
                }),
                setTimeout(function() {
                    e.Qk()
                }, 1e4),
                t.u.Vi()
            })
        })).prototype.a = function() {
            _0x417b0e.parent.prototype.a.call(this)
        }
        ,
        _0x417b0e.prototype.Rk = function() {
            _0x3ceb62.Fk.stop(),
            _0x3ceb62.Fk.fadeOut(50),
            _0x3ceb62.Gk.stop(),
            _0x3ceb62.Gk.fadeOut(50),
            _0x3ceb62.Hk.stop(),
            _0x3ceb62.Hk.fadeOut(50),
            _0x3ceb62.Jk.stop(),
            _0x3ceb62.Jk.fadeIn(200),
            _0x3ceb62.Ik.stop(),
            _0x3ceb62.Ik.fadeOut(50),
            _0x3ceb62.Kk.stop(),
            _0x3ceb62.Kk.fadeOut(50),
            _0x3ceb62.Lk.stop(),
            _0x3ceb62.Lk.fadeOut(50),
            _0x3ceb62.Mk.stop(),
            _0x3ceb62.Mk.fadeOut(50),
            _0x3ceb62.Nk.stop(),
            _0x3ceb62.Nk.fadeOut(50),
            _0x3ceb62.Ok.stop(),
            _0x3ceb62.Ok.fadeOut(50)
        }
        ,
        _0x417b0e.prototype.ji = function() {
            _0x1974fc().r.Dd()
        }
        ,
        _0x417b0e), _0x22b48f = (_0x53f039 = $("#profile-avatar"),
        _0x10aeff = $("#profile-username"),
        _0x281308 = $("#profile-experience-bar"),
        _0x1b6081 = $("#profile-experience-val"),
        _0x44f08c = $("#profile-level"),
        _0x26da6f = $("#profile-stat-highScore"),
        _0x54f469 = $("#profile-stat-bestSurvivalTime"),
        _0x3f29fb = $("#profile-stat-kills"),
        _0xd9cbea = $("#profile-stat-headshots"),
        _0x4b3110 = $("#profile-stat-gamesPlayed"),
        _0x38ff33 = $("#profile-stat-totalTimeSpent"),
        _0x184185 = $("#profile-stat-registrationDate"),
        (_0xc7e7e9 = _0x5d5d99(_0x3ceb62, function() {
            _0x3ceb62.call(this, _0x13fb67("index.game.popup.menu.profile.tab"), !0)
        })).prototype.a = function() {
            _0xc7e7e9.parent.prototype.a.call(this)
        }
        ,
        _0xc7e7e9.prototype.Rk = function() {
            _0x3ceb62.Fk.stop(),
            _0x3ceb62.Fk.fadeOut(50),
            _0x3ceb62.Gk.stop(),
            _0x3ceb62.Gk.fadeOut(50),
            _0x3ceb62.Hk.stop(),
            _0x3ceb62.Hk.fadeIn(200),
            _0x3ceb62.Jk.stop(),
            _0x3ceb62.Jk.fadeOut(50),
            _0x3ceb62.Ik.stop(),
            _0x3ceb62.Ik.fadeOut(50),
            _0x3ceb62.Kk.stop(),
            _0x3ceb62.Kk.fadeOut(50),
            _0x3ceb62.Lk.stop(),
            _0x3ceb62.Lk.fadeOut(50),
            _0x3ceb62.Mk.stop(),
            _0x3ceb62.Mk.fadeOut(50),
            _0x3ceb62.Nk.stop(),
            _0x3ceb62.Nk.fadeOut(50),
            _0x3ceb62.Ok.stop(),
            _0x3ceb62.Ok.fadeOut(50)
        }
        ,
        _0xc7e7e9.prototype.ji = function() {
            var t = _0x1974fc();
            t.r.Dd();
            var e = t.u.Oi()
              , i = moment([e.year, e.month - 1, e.day]).format("LL");
            _0x10aeff.html(t.u.wi()),
            _0x53f039.attr("src", t.u.xi()),
            _0x281308.width(100 * t.u.Bi() / t.u.Ci() + "%"),
            _0x1b6081.html(t.u.Bi() + " / " + t.u.Ci()),
            _0x44f08c.html(t.u.Ai()),
            _0x26da6f.html(t.u.Ii()),
            _0x54f469.html(_0xee2a16(t.u.Ji())),
            _0x3f29fb.html(t.u.Ki()),
            _0xd9cbea.html(t.u.Li()),
            _0x4b3110.html(t.u.Mi()),
            _0x38ff33.html(_0xee2a16(t.u.Ni())),
            _0x184185.html(i)
        }
        ,
        _0xc7e7e9), _0x1e4c7f = (_0x172ce6 = $("#settings-music-enabled-switch"),
        _0x1dca56 = $("#settings-sfx-enabled-switch"),
        _0x573002 = $("#settings-show-names-switch"),
        _0x4e7ffe = $("#popup-logout"),
        _0x93fae3 = $("#popup-logout-container"),
        _0x4a6555 = $("#popup-delete-account"),
        _0xe33e31 = $("#popup-delete-account-container"),
        _0x1dda5c = $("#popup-withdraw-consent"),
        (_0x50abaa = _0x5d5d99(_0x3ceb62, function() {
            _0x3ceb62.call(this, _0x13fb67("index.game.popup.menu.settings.tab"), !1);
            var t = this
              , e = _0x1974fc();
            _0x172ce6.click(function() {
                var t = !!_0x172ce6.prop("checked");
                _0x2f2ff1(_0x42f226.Me, t, 30),
                e.r.td(t),
                e.r.Cd()
            }),
            _0x1dca56.click(function() {
                var t = !!_0x1dca56.prop("checked");
                _0x2f2ff1(_0x42f226.Ne, t, 30),
                e.r.rd(t),
                e.r.Cd()
            }),
            _0x573002.click(function() {
                e.r.Cd()
            }),
            _0x4e7ffe.click(function() {
                e.r.Cd(),
                t.Sk(),
                setTimeout(function() {
                    t.Qk()
                }, 2e3),
                e.u.Wi()
            }),
            _0x4a6555.click(function() {
                e.u.P() ? (e.r.Cd(),
                e.s.I(e.s.Vh)) : e.r.Hd()
            }),
            _0x1dda5c.click(function() {
                e.Y() ? (e.r.Cd(),
                e.s.I(e.s.Uh)) : e.r.Hd()
            })
        })).prototype.a = function() {
            _0x50abaa.parent.prototype.a.call(this);
            var t = _0x1974fc()
              , e = void 0;
            e = "false" !== _0x15fe26(_0x42f226.Me),
            _0x172ce6.prop("checked", e),
            t.r.td(e);
            var i = void 0;
            i = "false" !== _0x15fe26(_0x42f226.Ne),
            _0x1dca56.prop("checked", i),
            t.r.rd(i);
            var n = void 0;
            n = "false" !== _0x15fe26(_0x42f226.ya),
            console.log("Load sPN: " + n),
            _0x573002.prop("checked", n),
            t.u.V(function() {
                _0x93fae3.toggle(t.u.P()),
                _0xe33e31.toggle(t.u.P())
            })
        }
        ,
        _0x50abaa.prototype.Rk = function() {
            _0x3ceb62.Fk.stop(),
            _0x3ceb62.Fk.fadeOut(50),
            _0x3ceb62.Gk.stop(),
            _0x3ceb62.Gk.fadeOut(50),
            _0x3ceb62.Hk.stop(),
            _0x3ceb62.Hk.fadeOut(50),
            _0x3ceb62.Jk.stop(),
            _0x3ceb62.Jk.fadeOut(50),
            _0x3ceb62.Ik.stop(),
            _0x3ceb62.Ik.fadeIn(200),
            _0x3ceb62.Kk.stop(),
            _0x3ceb62.Kk.fadeOut(50),
            _0x3ceb62.Lk.stop(),
            _0x3ceb62.Lk.fadeOut(50),
            _0x3ceb62.Mk.stop(),
            _0x3ceb62.Mk.fadeOut(50),
            _0x3ceb62.Nk.stop(),
            _0x3ceb62.Nk.fadeOut(50),
            _0x3ceb62.Ok.stop(),
            _0x3ceb62.Ok.fadeOut(50)
        }
        ,
        _0x50abaa.prototype.ji = function() {
            var t = _0x1974fc();
            t.r.Dd(),
            t.Y() ? _0x1dda5c.show() : _0x1dda5c.hide()
        }
        ,
        _0x50abaa.prototype.wa = function() {
            return _0x573002.prop("checked")
        }
        ,
        _0x50abaa), _0x2b3d5b = (_0x5aca56 = $("#store-view-canv"),
        _0x5688d1 = $("#skin-description-text"),
        _0x1ee961 = $("#skin-group-description-text"),
        _0x30c43 = $("#store-locked-bar"),
        _0x4fe16f = $("#store-locked-bar-text"),
        _0x5f5c97 = $("#store-buy-button"),
        _0x147ce4 = $("#store-item-price"),
        _0x2366b7 = $("#store-groups"),
        _0x561ecf = $("#store-view-prev"),
        _0x6bd10 = $("#store-view-next"),
        (_0x52b6b0 = _0x5d5d99(_0x3ceb62, function() {
            _0x3ceb62.call(this, _0x13fb67("index.game.popup.menu.skins.tab"), !0);
            var t = this
              , e = _0x1974fc();
            this.bl = null,
            this.cl = [],
            this.dl = {},
            this.el = new _0x37ce64(_0x5aca56),
            _0x5f5c97.click(function() {
                e.r.Cd(),
                t.fl()
            }),
            _0x561ecf.click(function() {
                e.r.Cd(),
                t.bl.gl()
            }),
            _0x6bd10.click(function() {
                e.r.Cd(),
                t.bl.hl()
            })
        })).prototype.a = function() {
            _0x52b6b0.parent.prototype.a.call(this);
            var t = this
              , e = _0x1974fc();
            e.p.ca(function() {
                var i = e.p.Ac();
                if (null != i) {
                    t.cl = [];
                    for (var n = 0; n < i.skinGroupArrayDict.length; n++)
                        t.cl.push(new _0x58480b(t,i.skinGroupArrayDict[n]));
                    t.dl = {};
                    for (var s = 0; s < i.skinArrayDict.length; s++) {
                        var o = i.skinArrayDict[s];
                        t.dl[o.id] = o
                    }
                }
            }),
            this.il(!1),
            e.t.xh(function() {
                t.il(!1)
            })
        }
        ,
        _0x52b6b0.prototype.Rk = function() {
            _0x3ceb62.Fk.stop(),
            _0x3ceb62.Fk.fadeOut(50),
            _0x3ceb62.Gk.stop(),
            _0x3ceb62.Gk.fadeOut(50),
            _0x3ceb62.Hk.stop(),
            _0x3ceb62.Hk.fadeOut(50),
            _0x3ceb62.Jk.stop(),
            _0x3ceb62.Jk.fadeOut(50),
            _0x3ceb62.Ik.stop(),
            _0x3ceb62.Ik.fadeOut(50),
            _0x3ceb62.Kk.stop(),
            _0x3ceb62.Kk.fadeIn(200),
            _0x3ceb62.Lk.stop(),
            _0x3ceb62.Lk.fadeOut(50),
            _0x3ceb62.Mk.stop(),
            _0x3ceb62.Mk.fadeOut(50),
            _0x3ceb62.Nk.stop(),
            _0x3ceb62.Nk.fadeOut(50),
            _0x3ceb62.Ok.stop(),
            _0x3ceb62.Ok.fadeOut(50)
        }
        ,
        _0x52b6b0.prototype.ji = function() {
            _0x1974fc().r.Dd(),
            this.jl(),
            this.el.Le(!0)
        }
        ,
        _0x52b6b0.prototype.ei = function() {
            this.el.Le(!1)
        }
        ,
        _0x52b6b0.prototype.Ra = function() {
            this.el.Ra()
        }
        ,
        _0x52b6b0.prototype.Pa = function(t, e) {
            this.el.Pa()
        }
        ,
        _0x52b6b0.prototype.jl = function() {
            var t = this
              , e = this
              , i = _0x1974fc();
            _0x2366b7.empty();
            for (var n = 0; n < this.cl.length; n++)
                !function(n) {
                    var s = t.cl[n]
                      , o = document.createElement("li");
                    _0x2366b7.append(o);
                    var r = $(o);
                    r.html(s.kl()),
                    r.click(function() {
                        i.r.Cd(),
                        e.ll(s)
                    }),
                    s.ml = r
                }(n);
            if (this.cl.length > 0) {
                for (var s = i.t.ha(_0x4b0de3.ia), n = 0; n < this.cl.length; n++)
                    for (var o = this.cl[n], r = o.nl.list, c = 0; c < r.length; c++)
                        if (r[c] == s)
                            return o.ol = c,
                            void this.ll(o);
                this.ll(this.cl[0])
            }
        }
        ,
        _0x52b6b0.prototype.ll = function(t) {
            if (this.bl != t) {
                var e = _0x1974fc();
                if (this.bl = t,
                _0x2366b7.children().removeClass("pressed"),
                this.bl.ml && this.bl.ml.addClass("pressed"),
                _0x1ee961.html(""),
                null != t.nl) {
                    var i = e.p.Ac().textDict[t.nl.description];
                    null != i && _0x1ee961.html(_0x29ada1(_0x5c0f22(i)))
                }
                this.il(!0)
            }
        }
        ,
        _0x52b6b0.prototype.pl = function() {
            return null == this.bl ? _0x5e08cd.Yg() : this.bl.ql()
        }
        ,
        _0x52b6b0.prototype.fl = function() {
            var t = this;
            this.pl().ah(function(e) {
                t.rl(e)
            })
        }
        ,
        _0x52b6b0.prototype.rl = function(t) {
            var e = this
              , i = _0x1974fc()
              , n = this.dl[t].price;
            if (!(i.u.zi() < n)) {
                this.Sk();
                var s = i.t.ha(_0x4b0de3.ia)
                  , o = i.t.ha(_0x4b0de3.ja)
                  , r = i.t.ha(_0x4b0de3.ka)
                  , c = i.t.ha(_0x4b0de3.la)
                  , h = i.t.ha(_0x4b0de3.ma);
                i.u.Ui(t, _0x4b0de3.ia, function() {
                    i.t.Bh(s, _0x4b0de3.ia),
                    i.t.Bh(o, _0x4b0de3.ja),
                    i.t.Bh(r, _0x4b0de3.ka),
                    i.t.Bh(c, _0x4b0de3.la),
                    i.t.Bh(h, _0x4b0de3.ma),
                    i.u.Ch(t, _0x4b0de3.ia) && i.t.Bh(t, _0x4b0de3.ia),
                    e.Qk()
                })
            }
        }
        ,
        _0x52b6b0.prototype.il = function(t) {
            var e = _0x1974fc();
            this.el.bk(e.t.ha(_0x4b0de3.ja), !1, !1),
            this.el.ck(e.t.ha(_0x4b0de3.ka), !1, !1),
            this.el.dk(e.t.ha(_0x4b0de3.la), !1, !1),
            this.el.ek(e.t.ha(_0x4b0de3.ma), !1, !1);
            var i = this.pl();
            if (i._g()) {
                var n = i.$g()
                  , s = this.dl[n]
                  , o = !1;
                if (e.t.Ja(n, _0x4b0de3.ia))
                    _0x30c43.hide(),
                    _0x5f5c97.hide();
                else if (null == s || 1 == s.nonbuyable) {
                    if (o = !0,
                    _0x30c43.show(),
                    _0x5f5c97.hide(),
                    _0x4fe16f.text(_0x13fb67("index.game.popup.menu.store.locked")),
                    null != s && s.nonbuyable && null != s.nonbuyableCause) {
                        var r = e.p.Ac().textDict[s.nonbuyableCause];
                        null != r && _0x4fe16f.text(_0x5c0f22(r))
                    }
                } else
                    _0x30c43.hide(),
                    _0x5f5c97.show(),
                    _0x147ce4.html(s.price);
                if (_0x5688d1.html(""),
                null != s && null != s.description) {
                    var c = e.p.Ac().textDict[s.description];
                    null != c && _0x5688d1.html(_0x29ada1(_0x5c0f22(c)))
                }
                StoreSkinID.html(s.id),
                this.el.ak(n, !0, o),
                t && e.t.Bh(n, _0x4b0de3.ia)
            }
        }
        ,
        _0x58480b = function() {
            function t(t, e) {
                this.sl = t,
                this.ol = 0,
                this.nl = e
            }
            return t.prototype.gl = function() {
                --this.ol < 0 && (this.ol = this.nl.list.length - 1),
                this.sl.il(!0)
            }
            ,
            t.prototype.hl = function() {
                ++this.ol >= this.nl.list.length && (this.ol = 0),
                this.sl.il(!0)
            }
            ,
            t.prototype.kl = function() {
                let t = _0x5c0f22(this.nl.name);
                if (this.nl.img) {
                    var e = '<img src="';
                    e = e + "https://wormateserkanconnect.github.io/DV/images/paths/" + this.nl.img,
                    t = e += '" height="43" width="220" />'
                }
                return t
            }
            ,
            t.prototype.ql = function() {
                return this.ol >= this.nl.list.length ? _0x5e08cd.Yg() : _0x5e08cd.Zg(this.nl.list[this.ol])
            }
            ,
            t
        }(),
        _0x52b6b0), _0x2691ca = (_0x2e9f53 = $("#store-go-coins-button"),
        _0x2b89fc = $("#store-go-skins-button"),
        _0x1eda32 = $("#store-go-wear-button"),
        (_0x141658 = _0x5d5d99(_0x3ceb62, function() {
            _0x3ceb62.call(this, _0x13fb67("index.game.popup.menu.store.tab"), !0);
            var t = _0x1974fc();
            _0x2e9f53.click(function() {
                t.r.Cd(),
                t.s.I(t.s.Wh)
            }),
            _0x2b89fc.click(function() {
                t.r.Cd(),
                t.s.I(t.s.$h)
            }),
            _0x1eda32.click(function() {
                t.r.Cd(),
                t.s.I(t.s.ai)
            })
        })).prototype.a = function() {
            _0x141658.parent.prototype.a.call(this)
        }
        ,
        _0x141658.prototype.Rk = function() {
            _0x3ceb62.Fk.stop(),
            _0x3ceb62.Fk.fadeOut(50),
            _0x3ceb62.Gk.stop(),
            _0x3ceb62.Gk.fadeOut(50),
            _0x3ceb62.Hk.stop(),
            _0x3ceb62.Hk.fadeOut(50),
            _0x3ceb62.Jk.stop(),
            _0x3ceb62.Jk.fadeOut(50),
            _0x3ceb62.Ik.stop(),
            _0x3ceb62.Ik.fadeOut(50),
            _0x3ceb62.Kk.stop(),
            _0x3ceb62.Kk.fadeOut(50),
            _0x3ceb62.Lk.stop(),
            _0x3ceb62.Lk.fadeIn(200),
            _0x3ceb62.Mk.stop(),
            _0x3ceb62.Mk.fadeOut(50),
            _0x3ceb62.Nk.stop(),
            _0x3ceb62.Nk.fadeOut(50),
            _0x3ceb62.Ok.stop(),
            _0x3ceb62.Ok.fadeOut(50)
        }
        ,
        _0x141658.prototype.ji = function() {
            _0x1974fc().r.Dd()
        }
        ,
        _0x141658), _0x5bf91f = (_0x5e4310 = $("#wear-view-canv"),
        _0xbd3306 = $("#wear-description-text"),
        _0x5e1238 = $("#wear-locked-bar"),
        _0x188810 = $("#wear-locked-bar-text"),
        _0x3db6fa = $("#wear-buy-button"),
        _0x3225c3 = $("#wear-item-price"),
        _0x2473eb = $("#wear-eyes-button"),
        _0xf7fb25 = $("#wear-mouths-button"),
        _0x592152 = $("#wear-glasses-button"),
        _0x4037c2 = $("#wear-hats-button"),
        _0x1842b6 = $("#wear-tint-chooser"),
        _0x4aeb50 = $("#wear-view-prev"),
        _0x23b80d = $("#wear-view-next"),
        (_0x2616f6 = _0x5d5d99(_0x3ceb62, function() {
            var t = this;
            _0x3ceb62.call(this, _0x13fb67("index.game.popup.menu.wear.tab"), !0);
            var e = _0x1974fc()
              , i = this;
            this.tl = [],
            this.ja = new _0x3fff18(this,_0x4b0de3.ja,_0x2473eb),
            this.ka = new _0x3fff18(this,_0x4b0de3.ka,_0xf7fb25),
            this.la = new _0x3fff18(this,_0x4b0de3.la,_0x592152),
            this.ma = new _0x3fff18(this,_0x4b0de3.ma,_0x4037c2),
            this.ul = null,
            this.vl = null,
            this.wl = null,
            this.xl = null,
            this.yl = null,
            this.zl = null,
            this.Al = new _0x37ce64(_0x5e4310),
            _0x3db6fa.click(function() {
                e.r.Cd(),
                i.Bl()
            }),
            _0x4aeb50.click(function() {
                e.r.Cd(),
                i.ul.Cl()
            }),
            _0x23b80d.click(function() {
                e.r.Cd(),
                i.ul.Dl()
            }),
            _0x2473eb.click(function() {
                e.r.Cd(),
                i.El(t.ja)
            }),
            _0xf7fb25.click(function() {
                e.r.Cd(),
                i.El(t.ka)
            }),
            _0x592152.click(function() {
                e.r.Cd(),
                i.El(t.la)
            }),
            _0x4037c2.click(function() {
                e.r.Cd(),
                i.El(t.ma)
            }),
            this.tl.push(this.ja),
            this.tl.push(this.ka),
            this.tl.push(this.la),
            this.tl.push(this.ma)
        })).prototype.a = function() {
            _0x2616f6.parent.prototype.a.call(this);
            var t = _0x1974fc()
              , e = this;
            t.p.ca(function() {
                var i = t.p.Ac();
                null != i && (e.vl = i.eyesDict,
                e.wl = i.mouthDict,
                e.xl = i.glassesDict,
                e.yl = i.hatDict,
                e.zl = i.colorDict,
                e.ja.Fl(i.eyesVariantArray),
                e.ja.Gl(e.vl),
                e.ka.Fl(i.mouthVariantArray),
                e.ka.Gl(e.wl),
                e.la.Fl(i.glassesVariantArray),
                e.la.Gl(e.xl),
                e.ma.Fl(i.hatVariantArray),
                e.ma.Gl(e.yl))
            }),
            this.il(!1),
            t.t.xh(function() {
                e.il(!1)
            })
        }
        ,
        _0x2616f6.prototype.Rk = function() {
            _0x3ceb62.Fk.stop(),
            _0x3ceb62.Fk.fadeOut(50),
            _0x3ceb62.Gk.stop(),
            _0x3ceb62.Gk.fadeOut(50),
            _0x3ceb62.Hk.stop(),
            _0x3ceb62.Hk.fadeOut(50),
            _0x3ceb62.Jk.stop(),
            _0x3ceb62.Jk.fadeOut(50),
            _0x3ceb62.Ik.stop(),
            _0x3ceb62.Ik.fadeOut(50),
            _0x3ceb62.Kk.stop(),
            _0x3ceb62.Kk.fadeOut(50),
            _0x3ceb62.Lk.stop(),
            _0x3ceb62.Lk.fadeOut(50),
            _0x3ceb62.Mk.stop(),
            _0x3ceb62.Mk.fadeIn(200),
            _0x3ceb62.Nk.stop(),
            _0x3ceb62.Nk.fadeOut(50),
            _0x3ceb62.Ok.stop(),
            _0x3ceb62.Ok.fadeOut(50)
        }
        ,
        _0x2616f6.prototype.ji = function() {
            _0x1974fc().r.Dd(),
            this.El(null != this.ul ? this.ul : this.ja),
            this.Al.Le(!0)
        }
        ,
        _0x2616f6.prototype.ei = function() {
            this.Al.Le(!1)
        }
        ,
        _0x2616f6.prototype.Ra = function() {
            this.Al.Ra()
        }
        ,
        _0x2616f6.prototype.Pa = function(t, e) {
            this.Al.Pa()
        }
        ,
        _0x2616f6.prototype.El = function(t) {
            this.ul = t;
            for (var e = 0; e < this.tl.length; e++)
                this.tl[e].Xk.removeClass("pressed");
            this.ul.Xk.addClass("pressed"),
            this.ul.ii()
        }
        ,
        _0x2616f6.prototype.Hl = function() {
            return null == this.ul ? _0x5e08cd.Yg() : _0x5e08cd.Zg({
                Lb: this.ul.ql(),
                rc: this.ul.rc
            })
        }
        ,
        _0x2616f6.prototype.Bl = function() {
            var t = this;
            this.Hl().ah(function(e) {
                t.Ui(e.Lb, e.rc)
            })
        }
        ,
        _0x2616f6.prototype.Ui = function(t, e) {
            var i = this
              , n = _0x1974fc()
              , s = void 0;
            switch (e) {
            case _0x4b0de3.ja:
                s = this.vl[t].price;
                break;
            case _0x4b0de3.ka:
                s = this.wl[t].price;
                break;
            case _0x4b0de3.la:
                s = this.xl[t].price;
                break;
            case _0x4b0de3.ma:
                s = this.yl[t].price;
                break;
            default:
                return
            }
            if (!(n.u.zi() < s)) {
                this.Sk();
                var o = n.t.ha(_0x4b0de3.ia)
                  , r = n.t.ha(_0x4b0de3.ja)
                  , c = n.t.ha(_0x4b0de3.ka)
                  , h = n.t.ha(_0x4b0de3.la)
                  , l = n.t.ha(_0x4b0de3.ma);
                n.u.Ui(t, e, function() {
                    n.t.Bh(o, _0x4b0de3.ia),
                    n.t.Bh(r, _0x4b0de3.ja),
                    n.t.Bh(c, _0x4b0de3.ka),
                    n.t.Bh(h, _0x4b0de3.la),
                    n.t.Bh(l, _0x4b0de3.ma),
                    n.u.Ch(t, e) && n.t.Bh(t, e),
                    i.Qk()
                })
            }
        }
        ,
        _0x2616f6.prototype.Il = function(t, e) {
            switch (e) {
            case _0x4b0de3.ja:
                return this.vl[t];
            case _0x4b0de3.ka:
                return this.wl[t];
            case _0x4b0de3.la:
                return this.xl[t];
            case _0x4b0de3.ma:
                return this.yl[t]
            }
            return null
        }
        ,
        _0x2616f6.prototype.il = function(t) {
            var e = _0x1974fc();
            this.Al.ak(e.t.ha(_0x4b0de3.ia), !1, !1),
            this.Al.bk(e.t.ha(_0x4b0de3.ja), !1, !1),
            this.Al.ck(e.t.ha(_0x4b0de3.ka), !1, !1),
            this.Al.dk(e.t.ha(_0x4b0de3.la), !1, !1),
            this.Al.ek(e.t.ha(_0x4b0de3.ma), !1, !1);
            var i = this.Hl();
            if (i._g()) {
                var n = i.$g()
                  , s = this.Il(n.Lb, n.rc)
                  , o = !1;
                if (e.t.Ja(n.Lb, n.rc))
                    _0x5e1238.hide(),
                    _0x3db6fa.hide();
                else if (null == s || 1 == s.nonbuyable) {
                    if (o = !0,
                    _0x5e1238.show(),
                    _0x3db6fa.hide(),
                    _0x188810.text(_0x13fb67("index.game.popup.menu.store.locked")),
                    null != s && s.nonbuyable && null != s.nonbuyableCause) {
                        var r = e.p.Ac().textDict[s.nonbuyableCause];
                        null != r && _0x188810.text(_0x5c0f22(r))
                    }
                } else
                    _0x5e1238.hide(),
                    _0x3db6fa.show(),
                    _0x3225c3.html(s.price);
                if (_0xbd3306.html(""),
                null != s && null != s.description) {
                    var c = e.p.Ac().textDict[s.description];
                    null != c && _0xbd3306.html(_0x29ada1(_0x5c0f22(c)))
                }
                switch (n.rc) {
                case _0x4b0de3.ja:
                    this.Al.bk(n.Lb, !0, o);
                    break;
                case _0x4b0de3.ka:
                    this.Al.ck(n.Lb, !0, o);
                    break;
                case _0x4b0de3.la:
                    this.Al.dk(n.Lb, !0, o);
                    break;
                case _0x4b0de3.ma:
                    this.Al.ek(n.Lb, !0, o)
                }
                t && e.t.Bh(n.Lb, n.rc)
            }
        }
        ,
        _0x3fff18 = function() {
            function t(t, e, i) {
                this.sl = t,
                this.rc = e,
                this.Xk = i,
                this.Jl = {},
                this.Kl = [[]],
                this.Ll = -10,
                this.Ml = -10
            }
            return t.prototype.Fl = function(t) {
                this.Kl = t
            }
            ,
            t.prototype.Gl = function(t) {
                this.Jl = t
            }
            ,
            t.prototype.ii = function() {
                for (var t = _0x1974fc().t.ha(this.rc), e = 0; e < this.Kl.length; e++)
                    for (var i = 0; i < this.Kl[e].length; i++)
                        if (this.Kl[e][i] == t)
                            return this.Nl(e),
                            void this.Ol(i);
                this.Nl(0),
                this.Ol(0)
            }
            ,
            t.prototype.Cl = function() {
                var t = this.Ll - 1;
                t < 0 && (t = this.Kl.length - 1),
                this.Nl(t),
                this.Ol(this.Ml % this.Kl[t].length)
            }
            ,
            t.prototype.Dl = function() {
                var t = this.Ll + 1;
                t >= this.Kl.length && (t = 0),
                this.Nl(t),
                this.Ol(this.Ml % this.Kl[t].length)
            }
            ,
            t.prototype.Nl = function(t) {
                var e = this;
                if (!(t < 0 || t >= this.Kl.length)) {
                    this.Ll = t,
                    _0x1842b6.empty();
                    var i = this.Kl[this.Ll];
                    if (i.length > 1)
                        for (var n = 0; n < i.length; n++)
                            !function(t) {
                                var n = i[t]
                                  , s = e.Jl[n]
                                  , o = $('<div style="border-color:#' + e.sl.zl[s.prime] + '"></div>');
                                o.click(function() {
                                    _0x1974fc().r.Cd(),
                                    e.Ol(t)
                                }),
                                _0x1842b6.append(o)
                            }(n)
                }
            }
            ,
            t.prototype.Ol = function(t) {
                if (!(t < 0 || t >= this.Kl[this.Ll].length)) {
                    this.Ml = t,
                    _0x1842b6.children().css("background-color", "transparent");
                    var e = _0x1842b6.children(":nth-child(" + (1 + t) + ")");
                    e.css("background-color", e.css("border-color")),
                    this.sl.il(!0)
                }
            }
            ,
            t.prototype.ql = function() {
                return this.Kl[this.Ll][this.Ml]
            }
            ,
            t
        }(),
        _0x2616f6), _0x374a68 = (_0x4b40b4 = $("#withdraw-consent-yes"),
        _0x37df35 = $("#withdraw-consent-no"),
        (_0xf6e663 = _0x5d5d99(_0x3ceb62, function() {
            _0x3ceb62.call(this, _0x13fb67("index.game.popup.menu.consent.tab"), !1);
            var t = _0x1974fc();
            _0x4b40b4.click(function() {
                t.r.Cd(),
                t.Y() ? (t.s.I(t.s.F),
                t.$(!1, !0),
                t.s.aa._(new _0x8a841c)) : t.s.gi()
            }),
            _0x37df35.click(function() {
                t.r.Cd(),
                t.s.gi()
            })
        })).prototype.a = function() {
            _0xf6e663.parent.prototype.a.call(this)
        }
        ,
        _0xf6e663.prototype.Rk = function() {
            _0x3ceb62.Fk.stop(),
            _0x3ceb62.Fk.fadeOut(50),
            _0x3ceb62.Gk.stop(),
            _0x3ceb62.Gk.fadeOut(50),
            _0x3ceb62.Hk.stop(),
            _0x3ceb62.Hk.fadeOut(50),
            _0x3ceb62.Jk.stop(),
            _0x3ceb62.Jk.fadeOut(50),
            _0x3ceb62.Ik.stop(),
            _0x3ceb62.Ik.fadeOut(50),
            _0x3ceb62.Kk.stop(),
            _0x3ceb62.Kk.fadeOut(50),
            _0x3ceb62.Lk.stop(),
            _0x3ceb62.Lk.fadeOut(50),
            _0x3ceb62.Mk.stop(),
            _0x3ceb62.Mk.fadeOut(50),
            _0x3ceb62.Nk.stop(),
            _0x3ceb62.Nk.fadeIn(200),
            _0x3ceb62.Ok.stop(),
            _0x3ceb62.Ok.fadeOut(50)
        }
        ,
        _0xf6e663.prototype.ji = function() {
            _0x1974fc().r.Dd()
        }
        ,
        _0xf6e663), _0x18ec11 = (_0x53b1eb = $("#delete-account-timer"),
        _0x1514e2 = $("#delete-account-yes"),
        _0x27031c = $("#delete-account-no"),
        (_0x12bc8d = _0x5d5d99(_0x3ceb62, function() {
            _0x3ceb62.call(this, _0x13fb67("index.game.popup.menu.delete.tab"), !1);
            var t = _0x1974fc();
            _0x1514e2.click(function() {
                t.r.Cd(),
                t.u.P() ? (t.u.bj(),
                t.u.Wi()) : t.s.gi()
            }),
            _0x27031c.click(function() {
                t.r.Cd(),
                t.s.gi()
            }),
            this.Pl = []
        })).prototype.a = function() {
            _0x12bc8d.parent.prototype.a.call(this)
        }
        ,
        _0x12bc8d.prototype.Rk = function() {
            _0x3ceb62.Fk.stop(),
            _0x3ceb62.Fk.fadeOut(50),
            _0x3ceb62.Gk.stop(),
            _0x3ceb62.Gk.fadeOut(50),
            _0x3ceb62.Hk.stop(),
            _0x3ceb62.Hk.fadeOut(50),
            _0x3ceb62.Jk.stop(),
            _0x3ceb62.Jk.fadeOut(50),
            _0x3ceb62.Ik.stop(),
            _0x3ceb62.Ik.fadeOut(50),
            _0x3ceb62.Kk.stop(),
            _0x3ceb62.Kk.fadeOut(50),
            _0x3ceb62.Lk.stop(),
            _0x3ceb62.Lk.fadeOut(50),
            _0x3ceb62.Mk.stop(),
            _0x3ceb62.Mk.fadeOut(50),
            _0x3ceb62.Nk.stop(),
            _0x3ceb62.Nk.fadeOut(50),
            _0x3ceb62.Ok.stop(),
            _0x3ceb62.Ok.fadeIn(200)
        }
        ,
        _0x12bc8d.prototype.ji = function() {
            _0x1974fc().r.Hd(),
            _0x1514e2.stop(),
            _0x1514e2.hide(),
            _0x53b1eb.stop(),
            _0x53b1eb.show(),
            _0x53b1eb.text(".. 10 .."),
            this.Ql(),
            this.Rl(function() {
                _0x53b1eb.text(".. 9 ..")
            }, 1e3),
            this.Rl(function() {
                _0x53b1eb.text(".. 8 ..")
            }, 2e3),
            this.Rl(function() {
                _0x53b1eb.text(".. 7 ..")
            }, 3e3),
            this.Rl(function() {
                _0x53b1eb.text(".. 6 ..")
            }, 4e3),
            this.Rl(function() {
                _0x53b1eb.text(".. 5 ..")
            }, 5e3),
            this.Rl(function() {
                _0x53b1eb.text(".. 4 ..")
            }, 6e3),
            this.Rl(function() {
                _0x53b1eb.text(".. 3 ..")
            }, 7e3),
            this.Rl(function() {
                _0x53b1eb.text(".. 2 ..")
            }, 8e3),
            this.Rl(function() {
                _0x53b1eb.text(".. 1 ..")
            }, 9e3),
            this.Rl(function() {
                _0x53b1eb.hide(),
                _0x1514e2.fadeIn(300)
            }, 1e4)
        }
        ,
        _0x12bc8d.prototype.Rl = function(t, e) {
            var i = setTimeout(t, e);
            this.Pl.push(i)
        }
        ,
        _0x12bc8d.prototype.Ql = function() {
            for (var t = 0; t < this.Pl.length; t++)
                clearTimeout(this.Pl[t]);
            this.Pl = []
        }
        ,
        _0x12bc8d), _0x181106 = function() {
            function t() {
                this.Ck = function() {}
            }
            return t.prototype.Bk = function() {}
            ,
            t.prototype.ji = function() {}
            ,
            t
        }(), _0x368ff3 = ((_0x1f75e7 = _0x5d5d99(_0x181106, function(t) {
            _0x181106.call(this);
            var e = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
            this.Sl = $('<div id="' + e + '" class="toaster toaster-coins">    <img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" />    <div class="toaster-coins-val">+' + t + '</div>    <div class="toaster-coins-close">' + _0x13fb67("index.game.toaster.continue") + "</div></div>");
            var i = this;
            this.Sl.find(".toaster-coins-close").click(function() {
                _0x1974fc().r.Cd(),
                i.Ck()
            })
        })).prototype.Bk = function() {
            return this.Sl
        }
        ,
        _0x1f75e7.prototype.ji = function() {
            _0x1974fc().r.Fd()
        }
        ,
        _0x1f75e7), _0x3e7661 = ((_0x4bbc17 = _0x5d5d99(_0x181106, function(t) {
            _0x181106.call(this);
            var e = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
            this.Sl = $('<div id="' + e + '" class="toaster toaster-levelup">    <img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" />    <div class="toaster-levelup-val">' + t + '</div>    <div class="toaster-levelup-text">' + _0x13fb67("index.game.toaster.levelup") + '</div>    <div class="toaster-levelup-close">' + _0x13fb67("index.game.toaster.continue") + "</div></div>");
            var i = this;
            this.Sl.find(".toaster-levelup-close").click(function() {
                _0x1974fc().r.Cd(),
                i.Ck()
            })
        })).prototype.Bk = function() {
            return this.Sl
        }
        ,
        _0x4bbc17.prototype.ji = function() {
            _0x1974fc().r.Ed()
        }
        ,
        _0x4bbc17), _0x8a841c = ((_0x555a30 = _0x5d5d99(_0x181106, function() {
            _0x181106.call(this);
            var t = this
              , e = _0x1974fc()
              , i = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
            this.Sl = $('<div id="' + i + '" class="toaster toaster-consent-accepted">    <img class="toaster-consent-accepted-logo" src="https://wormate.io/images/linelogo-xmas2022.png" alt="Wormate.io logo"/>    <div class="toaster-consent-accepted-container">        <span class="toaster-consent-accepted-text">' + _0x13fb67("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + '</span>        <a class="toaster-consent-accepted-link" href="/privacy-policy">' + _0x13fb67("index.game.toaster.consent.link") + '</a>    </div>    <div class="toaster-consent-close">' + _0x13fb67("index.game.toaster.consent.iAccept") + "</div></div>"),
            this.Tl = this.Sl.find(".toaster-consent-close"),
            this.Tl.hide(),
            this.Tl.click(function() {
                e.r.Cd(),
                e.Y() && e.$(!0, !0),
                t.Ck()
            })
        })).prototype.Bk = function() {
            return this.Sl
        }
        ,
        _0x555a30.prototype.ji = function() {
            var t = this
              , e = _0x1974fc();
            e.Y() && !e.Z() ? (e.r.Hd(),
            setTimeout(function() {
                t.Tl.fadeIn(300)
            }, 2e3)) : setTimeout(function() {
                t.Ck()
            }, 0)
        }
        ,
        _0x555a30), _0x2a2d68 = {};
        _0x2a2d68.main = {
            Ma: _0x2de57c("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
            K: _0x2de57c("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
            ra: _0x2fc162(),
            e: 4,
            oa: !1,
            qk: !0
        },
        _0x2a2d68.miniclip = {
            Ma: _0x2de57c("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
            K: _0x2de57c("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
            ra: _0x2fc162(),
            e: 4,
            oa: !1,
            qk: !1
        };
        var _0x243fa2 = _0x2a2d68[window.ENV];
        _0x243fa2 || (_0x243fa2 = _0x2a2d68.main),
        $(function() {
            FastClick.attach(document.body)
        }),
        addEventListener("contextmenu", function(t) {
            return t.preventDefault(),
            t.stopPropagation(),
            !1
        }),
        _0x45cc4c("//connect.facebook.net/" + _0x1f7d82 + "/sdk.js", "facebook-jssdk", function() {
            FB.init({
                appId: atob("ODYxOTI2ODUwNjE5MDUx"),
                cookie: !0,
                xfbml: !0,
                status: !0,
                version: "v8.0"
            })
        }),
        _0x45cc4c("//apis.google.com/js/api:client.js", null, function() {
            gapi.load("auth2", function() {
                GoogleAuth = gapi.auth2.init({
                    client_id: atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
                })
            })
        }),
        (_0x4458be = _0x1e72d4()).v(),
        PhoneChecked() && _0x45cc4c("https://haylamday.com/js/joy.min.js", "mobileconfig", function() {
            _0x22057b()
        });
        let _0x22057b = function() {
            $("#game-canvas").after('<div id="key-container"><div class="key">Q</div></div>\n        <div id=\'zoom-container\'>\n        \n                                 <input id="zoom-slider" type="range" min="10" max="100" value="70" step="1">\n  <div id="zoom-percentage">50%</div>\n  \n                                         </div>\n               \n                                         \n                                         \n                                         \n                                         ')
        };
        window.addEventListener("keydown", function(t) {
            if (console.log("event.keyCode " + t.keyCode),
            113 !== (t = t.which || t.keyCode || 0) && window.keyMove !== t || !isPlaying || PilotoAutomatico)
                clearInterval(PilotoAutomatico),
                PilotoAutomatico = null;
            else {
                let e = theoEvents.eventoPrincipal.sk = 0;
                PilotoAutomatico = setInterval(function() {
                    let t = parseFloat(theoEvents.eventoPrincipal.sk);
                    theoEvents.eventoPrincipal.sk = (t >= Math.PI ? -t : t) + (20 === e ? 0 : Math.PI / 20),
                    e++
                }, 120 + (1e5 <= (t = window.tuNewScore) ? 5 : 1e4 <= t ? 10 : 0))
            }
            localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects))
        }, !1);
        let _0x1d2d36 = [{
            nombre: "chuot 1",
            url: "https://i.imgur.com/SjFtyqp.png"
        }, {
            nombre: "chuot 2",
            url: "https://i.imgur.com/4QC2Exd.png"
        }, {
            nombre: "chuot 3",
            url: "https://i.imgur.com/PfdBkc2.png"
        }, {
            nombre: "chuot 4",
            url: "https://i.imgur.com/vD4zoMk.png"
        }, {
            nombre: "chuot 5",
            url: "https://i.imgur.com/n4N79UI.png"
        }, {
            nombre: "arrow",
            url: "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
        }, {
            nombre: "Superman",
            url: "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
        }, {
            nombre: "Kratos",
            url: "https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png"
        }, {
            nombre: "Pusheen_Ca",
            url: "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
        }, {
            nombre: "lipstick",
            url: "https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png"
        }, {
            nombre: "AKM",
            url: "https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png"
        }, {
            nombre: "Cherries_Pointer",
            url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
        }, {
            nombre: "Tom_and_JerryCurso",
            url: "https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png"
        }, {
            nombre: "JerryPointer",
            url: "https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png"
        }]
          , _0xd82be1 = [{
            nombre: "Default",
            url: "https://i.imgur.com/8ubx4RA.png"
        }, {
            nombre: "Schwarze Background",
            url: "https://i.imgur.com/3cxXwZ6.png"
        }, {
            nombre: "light blue",
            url: "https://i.imgur.com/dWtJFIx.png"
        }, {
            nombre: "woman",
            url: "https://i.imgur.com/19YALRi.png"
        }, {
            nombre: "Navidad",
            url: "https://i.imgur.com/qAO9LgC.png"
        }, {
            nombre: "Mal3ab",
            url: "https://i.imgur.com/MlCgOma.png"
        }, {
            nombre: "Galaxy_Star",
            url: "https://i.imgur.com/yayb9Ru.png"
        }, {
            nombre: "Desert",
            url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
        }];
        theoKzObjects.loading = !0;
        var _0xb5bea = "";
        _0xb5bea += "</div>",
        _0xb5bea += "</div>",
        _0xb5bea += "</div>",
        _0xb5bea += '<div id="wormcerca">',
        _0xb5bea += '<img class="pwrups v0" style="display: none;" src="https://i.imgur.com/M1LFPpp.png">',
        _0xb5bea += '<img class="pwrups v1" style="display: none;" src="https://i.imgur.com/z162iYa.png">',
        _0xb5bea += '<img class="pwrups v2" style="display: none;" src="https://i.imgur.com/kXlF32q.png">',
        _0xb5bea += '<img class="pwrups v3" style="display: none;" src="https://i.imgur.com/kJ6oz7e.png">',
        _0xb5bea += '<img class="pwrups v4" style="display: none;" src="https://i.imgur.com/l3ds43O.png">',
        _0xb5bea += '<img class="pwrups v5" style="display: none;" src="https://i.imgur.com/FqA56k6.png">',
        _0xb5bea += '<img class="pwrups v6" style="display: none;" src="https://i.imgur.com/mSCZeEp.png">',
        _0xb5bea += "</div>",
        _0xb5bea += '<img class="worm_1" src="https://i.imgur.com/iekrYYm.png"><span class="Worm_cerca"></span>',
        _0xb5bea += '\n      \n      \n        \n        \n        <input style="display:none" id="zoom-slider" type="range" min="0" max="100" value="50" step="1">\n        <div style="display:none" class="key">Q</div>\n        <div class="worm_2">\n        <button id="settingBtn"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color:yellow;font-size: 23px;"></i></button>\n        \n        <div id="settingContent">\n        \n        \n        <div class="container1">\n                    <span class="settings_span">Spin-Fast: </span>\n                    <input id="smoothCamera" class="range" type="range" min="0.3" max="0.6" value="\' + theoKzObjects.smoothCamera + \'" step="0.1" onmousemove="smoothCameraValue.value=value" />\n        </div>         \n        \n        <div class="container1">\n        <span class="settings_span">Power-ups-Size: </span>\n        <input id="PortionSize" class="range" type="range" min="1" max="6" value="\' + theoKzObjects.PortionSize + \'" step="1" onmousemove="rangevalue1.value=value" />\n        </div>\n        \n      <div class="container1">\n      <span class="settings_span">Power-ups-Aura: </span>\n      <input id="PortionAura" class="range" type="range" min="1.2" max="3.2" value="\' + theoKzObjects.PortionAura + \'" step="0.2" onmousemove="PortionAuravalue.value=value" />\n      </div>\n       \n      <div class="container1">\n                    <span class="settings_span">Food-Size: </span>\n                    <input id="FoodSize" class="range" type="range" min="0.5" max="3" value="\' + theoKzObjects.FoodSize + \'" step="0.5" onmousemove="rangevalue2.value=value" />\n                    </div>\n                    <div class="container1">\n                    <span class="settings_span">Food-Shadow: </span>\n                    <input id="FoodShadow" class="range" type="range" min="0.5" max="3" value="\' + theoKzObjects.FoodShadow + \'" step="0.5" onmousemove="FoodShadowvalue.value=value" />\n                    </div>\n    </div>\n    </div>',
        $("#game-view").append(_0xb5bea);
        var _0x407960 = function(t) {
            theoKzObjects.PropertyManager && (t.skinId = theoKzObjects.PropertyManager.rh,
            t.eyesId = theoKzObjects.PropertyManager.sh,
            t.mouthId = theoKzObjects.PropertyManager.th,
            t.glassesId = theoKzObjects.PropertyManager.uh,
            t.hatId = theoKzObjects.PropertyManager.vh)
        }
          , _0x354f04 = function() {
            $("#mm-event-text").replaceWith("<div class=\"text-FDZ\"> ❤️ Love you WormDV Connect ❤️</div>"),
            $(".mm-merchant-cont").replaceWith("<div class='youid'><button style=\"float: right;position: relative;min-width: 95px;background:#ff0000;height: 50px;\" onclick=\"navigator.clipboard.writeText('" + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + " copiado! copied!'));\">YOUR ID</button></div>"),
            $(".column-left").append("<div class='contact'><i class='fa fa-phone'></i> Zalo, Whatapp : 0924623650</div>"),
            $("#loa831pibur0w4gv").replaceWith('\n           \n           \n           \n           <div style="margin: 0;" id="loa831pibur0w4gv">\n  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />\n  \n    <div class="label" id="titleSetings">Notification</div>\n    <div class="bao-list1">\n      \n      <input type="text" value="' + theoKzObjects.FB_UserID + '" style="width: 85%;height: 23px;border-radius: 4px;font-size: 12px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;"/>\n      <button style="height: 25px;float: right;margin-top: -24px;margin-right: -6px;line-height: 1.2;font-size: 14px;" onclick="navigator.clipboard.writeText(\'' + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + ' copiado! copied!\'));">Copy</button>\n      <center>\n        <div class="hg"><a target="_blank" href="https://thanhtoan.vuonghiep.com/">Activated</a> </div>\n      </center>\n     <i class="fa fa-book" aria-hidden="true" style="color:48ff00;"></i> Instructions for installing on IOS and iPad New 2024: <a style="color: #2ae1eb; font-weight: 600;" href="https://www.youtube.com/watch?v=uyHHXWKHgRw">https://www.youtube.com/watch?v=uyHHXWKHgRw</a> </div>\n      \n    \n</div>');
            var t = document.getElementById("settingBtn")
              , e = document.getElementById("settingContent");
            function i() {
                "none" === window.getComputedStyle(e).getPropertyValue("display") ? e.style.display = "block" : e.style.display = "none"
            }
            function n() {
                let t = new KeyboardEvent("keydown",{
                    key: "q",
                    code: "KeyQ",
                    keyCode: 81,
                    charCode: 0,
                    which: 81,
                    bubbles: !0
                });
                document.dispatchEvent(t)
            }
            t.addEventListener("click", i),
            t.addEventListener("touchstart", function(t) {
                t.preventDefault(),
                i()
            });
            let s = document.querySelector(".key");
            for (s.addEventListener("click", n),
            s.addEventListener("touchstart", t => {
                t.preventDefault(),
                n()
            }
            ),
            $("#PortionSize").on("input", function() {
                theoKzObjects.PortionSize = $(this).val(),
                localStorage.PotenciadorSize = theoKzObjects.PortionSize
            }),
            $("#PortionAura").on("input", function() {
                theoKzObjects.PortionAura = $(this).val(),
                localStorage.PotenciadorAura = theoKzObjects.PortionAura
            }),
            $("#smoothCamera").on("input", function() {
                theoKzObjects.smoothCamera = $(this).val(),
                localStorage.smoothCamera = theoKzObjects.smoothCamera
            }),
            $("#FoodSize").on("input", function() {
                theoKzObjects.FoodSize = $(this).val(),
                localStorage.ComidaSize = theoKzObjects.FoodSize
            }),
            $("#FoodShadow").on("input", function() {
                theoKzObjects.FoodShadow = $(this).val(),
                localStorage.ComidaShadow = theoKzObjects.FoodShadow
            }),
            $("#mm-advice-cont").html('\n            \n            \n            \n            <div class="vietnam" style="display: grid !important; grid-template-columns: 1fr 1fr 1fr 1fr;gap: 8.5px;">\n            \n            \n    <input type="button" value="F.SCREEN" class="fullscreen_button">\n    \n    \n    <input type="button" value="RESPAWN" id="hoisinh" class="fullscreen_respawn">\n    \n    <input type="button" value="SKINS LAB" onclick="window.location.href=\'https://skinlab.haylamday.com/\'" class="fullscreen_contact">\n    \n'),
            $(".mm-merchant-cont").html("\n "),
            $(document).ready(function() {
                $(".fullscreen_button").on("click", function() {
                    (!document.fullScreenElement || null === document.fullScreenElement) && (document.mozFullScreen || document.webkitIsFullScreen) ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                })
            }),
            $("#hoisinh").click(function() {
                hoisinhnhanh && (anApp.r.Hd(),
                anApp.sa(hoisinhnhanh))
            }),
            $(".mm-merchant").replaceWith(""),
            $(".description-text").replaceWith('\n  <div class="description-text">\n  <div class="title-wormate-friends-connect" style="position: absolute; top: 0; z-index: 1; width: 95.5%;margin-top: 10px;">\n<img src="https://i.imgur.com/FVK3Q8c.png" width="20" align="center" alt="">Wormate Friends Connect</div>\n  <div class="description-text-hiep">\n  <ul class="ui-tabs-nav">\n    <li class="ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active" style="margin: -5px">\n      <a> <span class="flag br" value="https://i.imgur.com/dixYLjk.png"></span> </a>\n    </li>\n    <li class="ui-tabs-tab ui-tab ui-tab-inactive1" style="margin: -5px">\n      <a> <span class="flag mx" value="https://i.imgur.com/JMAvuFN.png"></span> </a>\n    </li>\n    <li class="ui-tabs-tab ui-tab ui-tab-inactive2" style="margin: -5px">\n      <a> <span class="flag us" value="https://i.imgur.com/Jb2FF0y.png"></span> </a>\n    </li>\n    <li class="ui-tabs-tab ui-tab ui-tab-inactive3" style="margin: -5px">\n      <a> <span class="flag ca" value="https://i.imgur.com/m1skEsB.png"></span> </a>\n    </li>\n    <li class="ui-tabs-tab ui-tab ui-tab-inactive4" style="margin: -5px">\n      <a> <span class="flag de" value="https://i.imgur.com/VgCH8iy.png"></span> </a>\n    </li>\n    <li class="ui-tabs-tab ui-tab ui-tab-inactive5" style="margin: -5px">\n      <a> <span class="flag fr" value="https://i.imgur.com/QuEjBr0.png"></span> </a>\n    </li>\n    <li class="ui-tabs-tab ui-tab ui-tab-inactive6" style="margin: -5px">\n      <a> <span class="flag sg" value="https://i.imgur.com/bT3xWqF.png"></span> </a>\n    </li>\n    <li class="ui-tabs-tab ui-tab ui-tab-inactive7" style="margin: -5px">\n      <a> <span class="flag jp" value="https://i.imgur.com/P2rYk1k.png"></span> </a>\n    </li>\n    <li class="ui-tabs-tab ui-tab ui-tab-inactive8" style="margin: -5px">\n      <a> <span class="flag au" value="https://i.imgur.com/X0co8Ao.png"></span> </a>\n    </li>\n    <li class="ui-tabs-tab ui-tab ui-tab-inactive9" style="margin: -5px">\n      <a> <span class="flag gb" value="https://i.imgur.com/8pQY6RW.png"></span> </a>\n    </li>\n  </ul>\n  <div class="gachngang"></div>\n    <div id=\'mapsv\'><div class=\'tensv\'>Name</div><div class=\'valusv\'>Region</div><div class=\'onlinesv\'>On/Off</div><div class=\'img-teamsv\'>Streamer</div></div>\n    \n    <div class="gachngang"></div>\n    <div class="servers-container">\n      <div class="servers-peru"></div>\n      <div class="servers-mexico" style="display: none;"></div>\n      <div class="servers-eeuu" style="display: none;"></div>\n      <div class="servers-canada" style="display: none;"></div>\n      <div class="servers-germania" style="display: none;"></div>\n      <div class="servers-francia" style="display: none;"></div>\n      <div class="servers-singapur" style="display: none;"></div>\n      <div class="servers-japon" style="display: none;"></div>\n      <div class="servers-australia" style="display: none;"></div>\n      <div class="servers-granbretana" style="display: none;"></div>\n    </div>\n  </div>\n            \n             \n                    '),
            $(".ui-tab").on("click", account),
            $(".flag").click(function() {
                let t = $(this).attr("value");
                theoKzObjects.flag = t,
                ctx.containerImgS.texture = ctx.onclickServer,
                retundFlagError(),
                console.log(t)
            }),
            a = 0; a < servers.Api_listServer.length; a++) {
                var o = servers.Api_listServer[a].serverUrl
                  , r = servers.Api_listServer[a].name
                  , c = servers.Api_listServer[a].region;
                let h = document.createElement("p");
                h.value = o,
                h.innerHTML = r,
                "peru" == c ? $(".servers-peru").prepend(h) : "mexico" == c ? $(".servers-mexico").prepend(h) : "eeuu" == c ? $(".servers-eeuu").prepend(h) : "canada" == c ? $(".servers-canada").prepend(h) : "germania" == c ? $(".servers-germania").prepend(h) : "francia" == c ? $(".servers-francia").prepend(h) : "singapur" == c ? $(".servers-singapur").prepend(h) : "japon" == c ? $(".servers-japon").prepend(h) : "australia" == c ? $(".servers-australia").prepend(h) : "granbretana" == c && $(".servers-granbretana").prepend(h),
                $(h).attr("id", c),
                $(h).attr("class", "selectSala"),
                $(h).attr("value", r),
                $(h).click(function() {
                    let t = $(this).find("#svhiep .valu").text().trim();
                    ctx.setServer(t);
                    let e = $(this).val();
                    ctx.containerImgS.texture = ctx.onclickServer,
                    retundFlagError(),
                    window.server_url = e,
                    $("#mm-action-play").click(),
                    $("#adbl-continue").click()
                })
            }
        }
          , _0x3b5967 = function() {
            $("#getskin").on("click", function() {
                for (var t = 0; t < clientes.clientesActivos.length; t++) {
                    clientes.clientesActivos[t].cliente_NOMBRE;
                    var e = clientes.clientesActivos[t].cliente_ID
                      , i = clientes.clientesActivos[t].Client_VisibleSkin
                      , n = clientes.clientesActivos[t].Client_VisibleSkin1
                      , s = clientes.clientesActivos[t].Client_VisibleSkin2
                      , o = clientes.clientesActivos[t].Client_VisibleSkin3
                      , r = clientes.clientesActivos[t].Client_VisibleSkin4
                      , c = clientes.clientesActivos[t].Client_VisibleSkin5
                      , h = clientes.clientesActivos[t].Client_VisibleSkin6
                      , l = clientes.clientesActivos[t].Client_VisibleSkin7
                      , u = clientes.clientesActivos[t].Client_VisibleSkin8
                      , d = clientes.clientesActivos[t].Client_VisibleSkin9
                      , x = clientes.clientesActivos[t].Client_VisibleSkin10
                      , f = clientes.clientesActivos[t].Client_VisibleSkin11
                      , p = clientes.clientesActivos[t].Client_VisibleSkin12
                      , v = clientes.clientesActivos[t].Client_VisibleSkin13
                      , g = clientes.clientesActivos[t].Client_VisibleSkin14
                      , m = clientes.clientesActivos[t].Client_VisibleSkin15
                      , b = clientes.clientesActivos[t].Client_VisibleSkin16
                      , k = clientes.clientesActivos[t].Client_VisibleSkin17
                      , y = clientes.clientesActivos[t].Client_VisibleSkin18
                      , _ = clientes.clientesActivos[t].Client_VisibleSkin19
                      , j = clientes.clientesActivos[t].Client_VisibleSkin20
                      , w = clientes.clientesActivos[t].Client_KeyAccecs;
                    if (0 == theoKzObjects.FB_UserID)
                        ;
                    else if (theoKzObjects.FB_UserID == e && "XTPRIVATESKIN" == w)
                        for (let O = 0; O < theoKzObjects.idSkin.length; O++) {
                            let C = theoKzObjects.idSkin[O];
                            (C.id == i || C.id == n || C.id == s || C.id == o || C.id == r || C.id == c || C.id == h || C.id == l || C.id == u || C.id == d || C.id == x || C.id == f || C.id == p || C.id == v || C.id == g || C.id == m || C.id == b || C.id == k || C.id == y || C.id == _ || C.id == j) && (C.nonbuyable = !1)
                        }
                }
            })
        }
          , _0x460155 = function() {
            function t() {
                window.zoomLevel++,
                window.multiplier *= .8,
                changedNf(),
                i()
            }
            function e() {
                window.zoomLevel > 0 && (window.zoomLevel--,
                window.multiplier /= .8,
                changedNf(),
                i())
            }
            function i() {
                var t = Math.round(window.multiplier / .625 * 100);
                t = Math.min(100, t),
                document.getElementById("zoom-percentage").textContent = t + "%"
            }
            for (theoKzObjects.adblock = !0,
            $(".youid").css("display", "none"),
            $("#mm-store").after('\n            \n            <link href=\'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\' rel=\'stylesheet\'/>\n            \n           \n        <div id="mm-store" style="float: right;position: relative;min-width: 95px;background:#ff0000" onclick="openPopup()"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color:yellow;font-size: 23px;"></i> Tool</div>\n        <div id="popup" class="popup">\n        \n        <div class="phdr1"> \n        <button style="float: right;background: #00000000;float: right;height: 40px;border: none;font-size: 16px;font-weight: 600;" onclick="navigator.clipboard.writeText(\'' + theoKzObjects.FB_UserID + "').then(()=> alert('You ID " + theoKzObjects.FB_UserID + ' copied!\'));">نسخ الهوية</button>\n        \n        \n        </div>\n        <div class="close-button" onclick="closePopup()"></div>\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">\n                   <div class="layout">\n      <div class="sidebar">\n          <ul>\n              <li><div class="hii" style="background: none; border: none;" id="click-btn"><i class="fas fa-user"></i> حساب تعريفي</div></li>\n              <li id="toolgame-btn" class="selected" onclick="displayContent(\'toolgame\', this)">\n            <i class="fas fa-cogs"></i> لعبة الأدوات\n        </li>\n        <li id="skins-btn" onclick="displayContent(\'skins\', this)">\n            <i class="fas fa-paint-brush"></i> جلود\n        </li>\n        <li id="chuot-btn" onclick="displayContent(\'chuot\', this)">\n            <i class="fas fa-mouse"></i> المؤشر\n        </li>\n        <li id="gioithieu-btn" onclick="displayContent(\'gioithieu\', this)">\n            <i class="fas fa-info-circle"></i> Version Change\n        </li>\n          </ul>\n      </div>\n\n      <div class="main-content">\n      \n          <div id="toolgame" class="content-section">\n              \n        <!-- Container cho 2 ph\xe1\xba\xa7n t\xe1\xbb\xad (h\xc3 ng 1) -->\n<div class="settings-row">\n    <div class="settings-lineZoom">\n        <span class="settings-labelZoom">\n             <i class="fas fa-bolt yellow-icon"></i> تناول الطعام بسرعة:\n        </span>\n        <input class="settings-switchZoom" id="settings-Abilityzoom-switch" type="checkbox"/>\n        <label for="settings-Abilityzoom-switch"></label>\n    </div>\n\n    <div class="settings-lineZoom">\n        <span class="settings-labelZoom">\n            <i class="fas fa-video yellow-icon"></i> مركز البث :\n        </span>\n        <input class="settings-switchZoom" id="settings-stremingmode-switch" type="checkbox"/>\n        <label for="settings-stremingmode-switch"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 ph\xe1\xba\xa7n t\xe1\xbb\xad (h\xc3 ng 2) -->\n<div class="settings-row">\n    <div class="settings-lineZoom">\n        <span class="settings-labelZoom">\n             <i class="fas fa-trophy yellow-icon"></i> 3 أعلى نتيجة :\n        </span>\n        <input class="settings-switchZoom" id="settings-stremingmodebatop-switch" type="checkbox"/>\n        <label for="settings-stremingmodebatop-switch"></label>\n    </div>\n\n    <div class="settings-lineZoom">\n        <span class="settings-labelZoom">\n            <i class="fas fa-toggle-off yellow-icon"></i> إيقاف التشغيل <img style="height: 18px;" src="https://i.imgur.com/cOrk9pM.png" alt="Turn on"/> :\n        </span>\n        <input class="settings-switchZoom" id="settings-stremingmodemuiten-switch" type="checkbox"/>\n        <label for="settings-stremingmodemuiten-switch"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 ph\xe1\xba\xa7n t\xe1\xbb\xad (h\xc3 ng 2) -->\n<div class="settings-row">\n    <div class="settings-lineZoom">\n        <span class="settings-labelZoom">\n             <i class="fas fa-chart-bar yellow-icon"></i> إجمالي القتل :\n        </span>\n        <input class="settings-switchZoom" id="settings-stremingmodesaveheadshot-switch" type="checkbox"/>\n        <label for="settings-stremingmodesaveheadshot-switch"></label>\n    </div>\n\n    <div class="settings-lineZoom">\n        <span class="settings-labelZoom">\n             <i class="fas fa-smile yellow-icon"></i> إيقاف الرموز التعبيرية:\n        </span>\n        <input class="settings-switchZoom" id="settings-stremingmodeemoj-switch" type="checkbox"/>\n        <label for="settings-stremingmodeemoj-switch"></label>\n    </div>\n</div>\n\n<!-- Container cho 2 ph\xe1\xba\xa7n t\xe1\xbb\xad (h\xc3 ng 2) -->\n<div class="settings-row">\n     <div class="settings-lineZoom">\n        <span class="settings-labelZoom">\n             <i class="fas fa-volume-mute yellow-icon"></i> إيقاف الأصوات:\n        </span>\n        <input class="settings-switchZoom" id="settings-stremingmodeheadshot-switch" type="checkbox"/>\n        <label for="settings-stremingmodeheadshot-switch"></label>\n    </div>\n\n    <div class="settings-lineZoom">\n        <span class="settings-labelZoom">\n             <i class="fa fa-eye-slash"></i> إخفاء الخريطة\n        </span>\n        <input class="settings-switchZoom" id="settings-stremingmodeanclock-switch" type="checkbox"/>\n        <label for="settings-stremingmodeanclock-switch"></label>\n    </div>\n</div>\n\n\n\n<div class="spancursor"> Select Background</div>\n<div class="background-container"></div>\n    \n          </div>\n          \n          \n          \n          <div id="skins" class="content-section">\n           <div style="margin-bottom: 10px;margin-top: -10px;" class="spancursor">تحميل الجلود</div>\n               <iframe style="width: 100%; height: 43px;" src="https://haylamday.com/api/skins_upload.php" scrolling="no" frameborder="0"></iframe>\n               \n           <div style="margin-top: 20px;margin-bottom: 20px;" class="spancursor"> تحميل القبعة</div>\n <iframe style="width: 100%; height: 40px;" src="https://haylamday.com/api/hat_upload.php" scrolling="no" frameborder="0"></iframe>\n \n  <div class="spancursor">NOTE : </div>\n                <ul><li>\n                 يُمنع تحميل صور جنسية لمن هم فوق ١٨ عامًا. سيتم قفل الهوية في حال المخالفة.</li>\n                 <li>\n                 </li></ul>\n            \n \n          </div>\n          \n         \n          <div id="chuot" class="content-section">\n              <div class="spancursor"> حدد المؤشر</div>\n        <div class="cursor-container">\n            <div id="default-cursor-btn">\n                <img src="https://i.imgur.com/rI522o3.png">\n            </div>\n        </div>\n          </div>\n          <div id="gioithieu" class="content-section">\n              <h2>Version Change</h2>\n              <button id="resetScript" class="reset-button">Cache Delete</button>\n          </div>\n      </div>\n  </div>\n\n  <script>\n      function displayContent(sectionId, element) {\n          // \xe1\xba\xa8n t\xe1\xba\xa5t c\xe1\xba\xa3 c\xc3\xa1c m\xe1\xbb\xa5c n\xe1\xbb�i dung\n          let sections = document.querySelectorAll(\'.content-section\');\n          sections.forEach(section => section.style.display = \'none\');\n\n          // Hi\xe1\xbb�n th\xe1\xbb� m\xe1\xbb\xa5c n\xe1\xbb�i dung t\xc6\xb0\xc6\xa1ng \xe1\xbb\xa9ng\n          let activeSection = document.getElementById(sectionId);\n          if (activeSection) {\n              activeSection.style.display = \'block\';\n          }\n\n          // \xc4\x90\xe1\xbb�i m\xc3 u m\xe1\xbb\xa5c \xc4�\xc3\xa3 ch\xe1\xbb\x8dn\n          let menuItems = document.querySelectorAll(\'.sidebar ul li\');\n          menuItems.forEach(item => item.classList.remove(\'selected\')); // Lo\xe1\xba\xa1i b\xe1\xbb\x8f class \'selected\' kh\xe1\xbb\x8fi t\xe1\xba\xa5t c\xe1\xba\xa3 m\xe1\xbb\xa5c\n          \n          // Th\xc3\xaam class \'selected\' cho m\xe1\xbb\xa5c \xc4�\xc6\xb0\xe1\xbb\xa3c ch\xe1\xbb\x8dn\n          element.classList.add(\'selected\');\n      }\n\n      // Hi\xe1\xbb�n th\xe1\xbb� n\xe1\xbb�i dung m\xe1\xba\xb7c \xc4�\xe1\xbb�nh khi t\xe1\xba\xa3i trang\n      window.onload = function() {\n          displayContent(\'toolgame\', document.getElementById(\'toolgame-btn\'));\n      };\n      \n       // L\xe1\xba\xa5y ph\xe1\xba\xa7n t\xe1\xbb\xad n\xc3\xbat v\xc3  div\n        const button = document.getElementById("click-btn");\n        const playerInfo = document.getElementById("mm-player-info");\n\n        // X\xe1\xbb\xad l\xc3\xbd s\xe1\xbb\xb1 ki\xe1\xbb�n click v\xc3 o n\xc3\xbat\n        button.addEventListener("click", function() {\n            // M\xc3\xb4 ph\xe1\xbb\x8fng click v\xc3 o div khi nh\xe1\xba\xa5n n\xc3\xbat\n            playerInfo.click();\n        });\n\n        // X\xe1\xbb\xad l\xc3\xbd s\xe1\xbb\xb1 ki\xe1\xbb�n click tr\xe1\xbb\xb1c ti\xe1\xba\xbfp v\xc3 o div\n        playerInfo.addEventListener("click", function() {\n            // T\xe1\xba\xa1i \xc4�\xc3\xa2y b\xe1\xba\xa1n c\xc3\xb3 th\xe1\xbb� th\xe1\xbb\xb1c hi\xe1\xbb�n h\xc3 nh \xc4�\xe1\xbb�ng kh\xc3\xa1c khi click v\xc3 o div, v\xc3\xad d\xe1\xbb\xa5:\n            console.log("Div \xc4�\xc3\xa3 \xc4�\xc6\xb0\xe1\xbb\xa3c click!");\n        });\n\n      \n      \n      \n  </script>\n        <style>\n        .yellow-icon {\n    color: gold;  /* Ch\xe1\xbb�nh m\xc3 u v\xc3 ng */\n}\n        .layout {\n          display: flex;\n          width: 100%;\n          height: 90%;\n      }\n\n      .sidebar {\n          width: 140px;\n          background: #252535;\n          box-shadow: 0px 0px 10px #252535;\n          color: #fff;\n      }\n\n      .sidebar ul {\n          list-style-type: none;\n          padding: 0;\n          margin: 0;\n      }\n\n      .sidebar ul li {\n          padding: 12px;\n          cursor: pointer;\n          border-bottom: 1px solid #ddd;\n          width: 140px;\n      }\n\n      .sidebar ul li:hover {\n          background-color: #666;\n      }\n\n      .sidebar ul li.selected {\n          background-color: #000; /* M\xc3 u n\xe1\xbb\x81n khi m\xe1\xbb\xa5c \xc4�\xc6\xb0\xe1\xbb\xa3c ch\xe1\xbb\x8dn */\n          color: white;\n      }\n\n      .main-content {\n          flex-grow: 1;\n          padding: 20px;\n          background: #393e43;\n          color: #fff;\n      }\n\n      .content-section {\n          display: none;\n          transition: display 0.3s ease-in-out;\n      }\n\n      #toolgame {\n          display: block; /* M\xe1\xba\xb7c \xc4�\xe1\xbb�nh hi\xe1\xbb�n th\xe1\xbb� n\xe1\xbb�i dung Tool Game */\n      }\n\n      h2 {\n          margin-top: 0;\n      }\n\n      /* Th\xc3\xaam hi\xe1\xbb�u \xe1\xbb\xa9ng cho hover */\n      .sidebar ul li:hover {\n          background-color: #666;\n      }</style>\n        </div>'),
            $("#loa831pibur0w4gv").replaceWith('\n              \n              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />\n              <div style="margin: 0;" id="loa831pibur0w4gv">\n              <div class="label" id="titleSetings">Notification</div>\n                \n                 <div class="bao-list1">\n                <div class="list1"><li>\n                 11/05/2025: Updated !</li>\n                </div>\n                <div class="list1"><li>\n                 Uploading 18+ sex skins is prohibited. ID will be locked if violated. Thank you !</li>\n                </div>\n                <div class="list1"><li>\n                 WormDV Connect Devloper DV-PLATEN</li>\n                </div>\n                \n                   <div class="list1"><li>  <a href=""> </a></li> </div></div>\n              \n                   '),
            $("#mm-coins-box").replaceWith("<div style=\"margin: 0;\" id=\"mm-coins-box\">\n                \n                <button style='width: 140px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;display:none' id='getskin'>Unlock Skins</button>\n                </div>\n                </div>"),
            window.multiplier = .625,
            window.zoomLevel = 5,
            document.getElementById("zoom-slider").addEventListener("input", function(t) {
                let e = t.target.value;
                window.zoomLevel = Math.round(e / 10),
                window.multiplier = .625 * (e / 50),
                changedNf(),
                i()
            }),
            window.onwheel = i => {
                i.preventDefault(),
                i.deltaY < 0 ? t() : e()
            }
            ,
            $("#settings-Abilityzoom-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.eat_animation = 1,
                localStorage.setItem("mySwitch", "on")) : (console.log("I'm not checked"),
                theoKzObjects.eat_animation = .0025,
                localStorage.setItem("mySwitch", "off"))
            }),
            $(document).ready(function() {
                "on" === localStorage.getItem("mySwitch") ? ($("#settings-Abilityzoom-switch").prop("checked", !0),
                theoKzObjects.eat_animation = 1) : ($("#settings-Abilityzoom-switch").prop("checked", !1),
                theoKzObjects.eat_animation = .0025)
            }),
            $("#settings-stremingmode-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremer = !0,
                localStorage.setItem("ModeStremer", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremer = !1,
                localStorage.setItem("ModeStremer", "false"))
            }),
            $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremer") ? (theoKzObjects.ModeStremer = !0,
                $("#settings-stremingmode-switch").prop("checked", !0)) : (theoKzObjects.ModeStremer = !1,
                $("#settings-stremingmode-switch").prop("checked", !1))
            }),
            $("#settings-stremingmodebatop-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremerbatop = !0,
                localStorage.setItem("ModeStremerbatop", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremerbatop = !1,
                localStorage.setItem("ModeStremerbatop", "false"))
            }),
            $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremerbatop") ? (theoKzObjects.ModeStremerbatop = !0,
                $("#settings-stremingmodebatop-switch").prop("checked", !0)) : (theoKzObjects.ModeStremerbatop = !1,
                $("#settings-stremingmodebatop-switch").prop("checked", !1))
            }),
            $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremeranclock") ? (theoKzObjects.ModeStremeranclock = !0,
                $("#settings-stremingmodeanclock-switch").prop("checked", !0)) : (theoKzObjects.ModeStremeranclock = !1,
                $("#settings-stremingmodeanclock-switch").prop("checked", !1)),
                theoKzObjects.ModeStremeranclock ? (ctx.clockan.width = 100,
                ctx.clockan.height = 100,
                ctx.clockan.x = -50,
                ctx.clockan.y = -50) : (ctx.clockan.width = 0,
                ctx.clockan.height = 0,
                ctx.clockan.x = -50,
                ctx.clockan.y = -50)
            }),
            $("#settings-stremingmodeanclock-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremeranclock = !0,
                localStorage.setItem("ModeStremeranclock", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremeranclock = !1,
                localStorage.setItem("ModeStremeranclock", "false")),
                theoKzObjects.ModeStremeranclock ? (ctx.clockan.width = 100,
                ctx.clockan.height = 100,
                ctx.clockan.x = -50,
                ctx.clockan.y = -50) : (ctx.clockan.width = 0,
                ctx.clockan.height = 0,
                ctx.clockan.x = -50,
                ctx.clockan.y = -50)
            }),
            $("#settings-stremingmodemuiten-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremermuiten = !0,
                localStorage.setItem("ModeStremermuiten", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremermuiten = !1,
                localStorage.setItem("ModeStremermuiten", "false")),
                $("#svhiep").click(),
                setTimeout(function() {
                    location.reload()
                }, 1e3)
            }),
            $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremermuiten") ? (theoKzObjects.ModeStremermuiten = !0,
                $("#settings-stremingmodemuiten-switch").prop("checked", !0)) : (theoKzObjects.ModeStremermuiten = !1,
                $("#settings-stremingmodemuiten-switch").prop("checked", !1))
            }),
            $("#settings-stremingmodeemoj-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremeremoj = !0,
                localStorage.setItem("ModeStremeremoj", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremeremoj = !1,
                localStorage.setItem("ModeStremeremoj", "false"))
            }),
            $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremeremoj") ? (theoKzObjects.ModeStremeremoj = !0,
                $("#settings-stremingmodeemoj-switch").prop("checked", !0)) : (theoKzObjects.ModeStremeremoj = !1,
                $("#settings-stremingmodeemoj-switch").prop("checked", !1))
            }),
            $("#settings-stremingmodeheadshot-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremerheadshot = !0,
                localStorage.setItem("ModeStremerheadshot", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremerheadshot = !1,
                localStorage.setItem("ModeStremerheadshot", "false"))
            }),
            $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremerheadshot") ? (theoKzObjects.ModeStremerheadshot = !0,
                $("#settings-stremingmodeheadshot-switch").prop("checked", !0)) : (theoKzObjects.ModeStremerheadshot = !1,
                $("#settings-stremingmodeheadshot-switch").prop("checked", !1))
            }),
            $("#settings-stremingmodeheadshot-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremerheadshot = !0,
                localStorage.setItem("ModeStremerheadshot", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremerheadshot = !1,
                localStorage.setItem("ModeStremerheadshot", "false"))
            }),
            $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremerheadshot") ? (theoKzObjects.ModeStremerheadshot = !0,
                $("#settings-stremingmodeheadshot-switch").prop("checked", !0)) : (theoKzObjects.ModeStremerheadshot = !1,
                $("#settings-stremingmodeheadshot-switch").prop("checked", !1))
            }),
            $("#settings-stremingmodesaveheadshot-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.ModeStremersaveheadshot = !0,
                localStorage.setItem("ModeStremersaveheadshot", "true")) : (console.log("I'm not checked"),
                theoKzObjects.ModeStremersaveheadshot = !1,
                localStorage.setItem("ModeStremersaveheadshot", "false")),
                location.reload()
            }),
            $(document).ready(function() {
                "true" === localStorage.getItem("ModeStremersaveheadshot") ? (theoKzObjects.ModeStremersaveheadshot = !0,
                $("#settings-stremingmodesaveheadshot-switch").prop("checked", !0)) : (theoKzObjects.ModeStremersaveheadshot = !1,
                $("#settings-stremingmodesaveheadshot-switch").prop("checked", !1))
            }),
            $("#settings-arrowmobile-switch").on("click", function() {
                this.checked ? (console.log("I am checked"),
                theoKzObjects.arrow = !1) : (console.log("I'm not checked"),
                theoKzObjects.arrow = !0)
            }),
            $("#PortionSize").on("input", function() {
                theoKzObjects.PortionSize = $(this).val(),
                localStorage.PotenciadorSize = theoKzObjects.PortionSize
            }),
            $("#PortionAura").on("input", function() {
                theoKzObjects.PortionAura = $(this).val(),
                localStorage.PotenciadorAura = theoKzObjects.PortionAura
            }),
            $("#smoothCamera").on("input", function() {
                theoKzObjects.smoothCamera = $(this).val(),
                localStorage.smoothCamera = theoKzObjects.smoothCamera
            }),
            $("#FoodSize").on("input", function() {
                theoKzObjects.FoodSize = $(this).val(),
                localStorage.ComidaSize = theoKzObjects.FoodSize
            }),
            $("#FoodShadow").on("input", function() {
                theoKzObjects.FoodShadow = $(this).val(),
                localStorage.ComidaShadow = theoKzObjects.FoodShadow
            }),
            a = 0; a < _0x1d2d36.length; a++) {
                var n = _0x1d2d36[a].url;
                _0x1d2d36[a].nombre;
                let s = document.createElement("img");
                s.src = n,
                $(".cursor-container").prepend(s),
                $(s).attr("class", "cursor"),
                $(s).click(function() {
                    let t = $(this).attr("src");
                    localStorage.cursorSeleccionado = t,
                    $("#game-cont").css({
                        cursor: "url(" + t + "), default"
                    }),
                    $("#game-canvas").css({
                        cursor: "url(" + t + "), default"
                    }),
                    $("body").css({
                        cursor: "url(" + t + "), default"
                    })
                }),
                $("#default-cursor-btn").click(function() {
                    delete localStorage.cursorSeleccionado,
                    $("#game-cont, #game-canvas, body").css("cursor", "default")
                })
            }
            for ($("#game-cont").css({
                cursor: "url(" + localStorage.cursorSeleccionado + "), default"
            }),
            $("#game-canvas").css({
                cursor: "url(" + localStorage.cursorSeleccionado + "), default"
            }),
            $("body").css({
                cursor: "url(" + localStorage.cursorSeleccionado + "), default"
            }),
            a = 0; a < _0xd82be1.length; a++) {
                var o = _0xd82be1[a].url
                  , r = _0xd82be1[a].nombre;
                let c = document.createElement("img");
                c.src = o,
                $(".background-container").prepend(c),
                $(c).attr("class", "background"),
                $(c).attr("value", r),
                $(c).click(function() {
                    let t = $(this).attr("src")
                      , e = $(this).attr("value");
                    backgroundIMG = t,
                    localStorage.fondoSeleccionado = backgroundIMG,
                    alert("You selected the background: " + e),
                    _0x4458be.q.Cf = new _0x53baca._b(_0x4458be.q.fn_o(t))
                })
            }
            $(".background-container").prepend(""),
            _0x4458be.q.Cf = new _0x53baca._b(_0x4458be.q.fn_o(localStorage.fondoSeleccionado))
        };
        function _0x3cec9c() {
            localStorage.setItem("totalKills", theoKzObjects.totalKills),
            localStorage.setItem("totalHeadshots", theoKzObjects.totalHeadshots)
        }
        function _0x83ea23() {
            theoKzObjects.totalKills = parseInt(localStorage.getItem("totalKills")) || 0,
            theoKzObjects.totalHeadshots = parseInt(localStorage.getItem("totalHeadshots")) || 0
        }
        var _0x3a39d4, _0x4954ce = function(t, e) {
            let i = function(t, e, i, n) {
                ctx.setCountGame(t, e, i, n)
            };
            _0x83ea23(),
            "count" === t && (theoKzObjects.kill = (theoKzObjects.kill || 0) + (e ? 0 : 1),
            theoKzObjects.headshot = (theoKzObjects.headshot || 0) + (e ? 1 : 0),
            theoKzObjects.totalKills = theoKzObjects.totalKills + (e ? 0 : 1),
            theoKzObjects.totalHeadshots = theoKzObjects.totalHeadshots + (e ? 1 : 0),
            _0x3cec9c(),
            i(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots)),
            "open" === t && (theoKzObjects.kill = 0,
            theoKzObjects.headshot = 0,
            $("#contadorKill_12").show(),
            i(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots)),
            "closed" === t && (pwrups = {}),
            "cerrar" === t && (theoKzObjects.kill = 0,
            theoKzObjects.headshot = 0,
            theoKzObjects.totalKills = 0,
            theoKzObjects.totalHeadshots = 0,
            _0x3cec9c())
        };
        Number.prototype.dotFormat || (Number.prototype.dotFormat = function() {
            return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
        ),
        Number.prototype.dotFormatSelect2 || (Number.prototype.dotFormatSelect2 = function() {
            return this.toString().substr(3, 2)
        }
        ),
        setTimeout(function() {
            var t = ["fuck you", "\xc4�\xe1\xbb�t", "c\xc3\xa1i l\xe1\xbb�n", "ch\xc3\xb3", "\xc4�\xc3\xa9o", "l\xe1\xbb�n", "\xc4�\xc3\xa9o", "\xc4�\xe1\xbb�t", "v\xc3\xa3i l\xe1\xbb�n", "c\xe1\xba\xb7c"];
            let e = document.getElementById("mm-params-nickname")
              , i = e.value
              , n = i.indexOf("x");
            if (-1 !== n) {
                let s = i.substring(0, n);
                e.value = s
            }
            $("#mm-action-play").on("click", function() {
                var e = $("#mm-params-nickname").val();
                t.some(function(t) {
                    return e.toLowerCase().includes(t.toLowerCase())
                }) && $("#mm-params-nickname").val("I Love Vi\xe1\xbb�t Nam")
            }),
            $(document).ready(function() {
                $("#getskin").click()
            }),
            $("#final-share-fb").css("display", "none"),
            $("#unl6wj4czdl84o9b").css("display", "none"),
            $("#mm-action-guest").css("display", "none"),
            $("#mm-menu-cont").css("display", "block"),
            $("#mm-bottom-buttons").css("display", "block"),
            $("#mm-player-info").css("display", "block"),
            $("#relojHelp").css("position", "absolute"),
            $("#relojHelp").css("top", "12px"),
            $("#relojHelp").css("left", "5px"),
            $("#delete-account-view").css("display", "none")
        }, 3e3),
        function t() {
            requestAnimationFrame(t),
            _0x1974fc().Pa()
        }();
        var _0x5bc2ab = function() {
            var t = _0x557b1d.width()
              , e = _0x557b1d.height()
              , i = _0x3714e5.outerWidth()
              , n = _0x3714e5.outerHeight()
              , s = _0x50052c.outerHeight()
              , o = "translate(-50%, -50%) scale(" + Math.min(1, Math.min((e - _0x2eca9d.outerHeight() - s) / n, t / i)) + ")";
            _0x3714e5.css({
                "-webkit-transform": o,
                "-moz-transform": o,
                "-ms-transform": o,
                "-o-transform": o,
                transform: o
            }),
            _0x1974fc().Ra(),
            window.scrollTo(0, 1)
        }
          , _0x557b1d = $("body")
          , _0x3714e5 = $("#stretch-box")
          , _0x50052c = $("#markup-header")
          , _0x2eca9d = $("#markup-footer");
        _0x5bc2ab(),
        $(window).resize(_0x5bc2ab)
    }
    )(),
    window.anApp.p.Bc = function() {
        var t = window.anApp.p
          , e = {};
        $.get("https://resources.wormate.io/dynamic/assets/registry.json", function(i) {
            e = i,
            $.ajax({
                url: "https://wormateserkanconnect.github.io/DV/api/skin.php",
                method: "GET",
                dataType: "json",
                success: function(e) {
                    for (let n in theoKzObjects.visibleSkin = e.visibleSkin,
                    delete e.visibleSkin,
                    e)
                        "propertyList" !== n && (Array.isArray(e[n]) ? i[n] = i[n].concat(e[n]) : i[n] = {
                            ...i[n],
                            ...e[n]
                        });
                    theoKzObjects.pL = e.propertyList,
                    theoKzObjects.idSkin = e.skinArrayDict,
                    t.Cc(i)
                },
                error: function(i, n, s) {
                    console.error(s),
                    t.Cc(e)
                }
            })
        })
    }
    ,
    $("#background-canvas").replaceWith('<canvas id="background-canvas">\n   </canvas>\n   '),
    $("#popup-login-gg").html('<div class="settings-line" id="popup-login-gg1">Login via Google</div>'),
    $("#social-buttons").replaceWith(""),
    $("#markup-footer");
}),
sessionStorage.getItem("visited") || (sessionStorage.setItem("visited", "true"),
location.reload(!0)),
getPresedKey = function(t) {
    var e = "";
    return 9 == t.keyCode ? e += "TAB" : 13 == t.keyCode ? e += "ENTER" : 16 == t.keyCode ? e += "SHIFT" : e += String.fromCharCode(t.keyCode),
    e
}
,
getStringKey = function(t) {
    var e = "";
    return 9 == t ? e += "TAB" : 13 == t ? e += "ENTER" : 16 == t ? e += "SHIFT" : 32 == t ? e += "SPACE" : 27 == t ? e += "ESC" : e += String.fromCharCode(t),
    e
}
,
isValidHotkey = function(t) {
    return !!(t.keyCode >= 48 && t.keyCode <= 57 || t.keyCode >= 65 && t.keyCode <= 90 || 9 == t.keyCode || 13 == t.keyCode || 16 == t.keyCode || 32 == t.keyCode || 27 == t.keyCode)
}
,
console.log("Core 2022 THEO Update 2023");
          /*zoom by DV-PLATEN*/ 
// "z" tuÅŸuna basÄ±ldÄ±ÄŸÄ±nda zoom iÅŸlemini durdurma fonksiyonu

function stopZoom(event) {

if (event.key === 'z') {

    window.multiplier = 1.00; // BaÅŸlangÄ±Ã§ zoom seviyesine geri dÃ¶n

    window.changedNf();

}
}

// TuÅŸ olayÄ±nÄ± dinleyiciye baÄŸlama

window.addEventListener('keydown', stopZoom);

           /*zoom by DV-PLATEN*/
           // Reset butonuna tıklama olayı
document.getElementById("resetScript").addEventListener("click", async function() {
    // localStorage ve sessionStorage temizle
    localStorage.clear();
    sessionStorage.clear();

    // IndexedDB tüm veritabanlarını sil
    if (window.indexedDB && indexedDB.databases) {
        let databases = await indexedDB.databases();
        for (let dbInfo of databases) {
            if (dbInfo.name) {
                await indexedDB.deleteDatabase(dbInfo.name);
            }
        }
    }

    // Web SQL uyarısı
    if (window.openDatabase) {
        console.warn("Web SQL otomatik olarak JavaScript ile temizlenemez.");
    }

    // Çerezleri temizle
    document.cookie.split(";").forEach(function(cookie) {
        document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
    });

    // Cache API temizle
    if ("caches" in window) {
        let cacheNames = await caches.keys();
        for (let cacheName of cacheNames) {
            await caches.delete(cacheName);
        }
    }

    // Service worker kayıtlarını kaldır
    if ("serviceWorker" in navigator) {
        let registrations = await navigator.serviceWorker.getRegistrations();
        for (let registration of registrations) {
            await registration.unregister();
        }
    }

    // Özel localStorage anahtarını kaldır ve sayfayı yenile
    localStorage.removeItem("scriptSeleccionado");
    location.reload();
});
