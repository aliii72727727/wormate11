// Check if the file is being accessed directly in a browser
if (typeof window !== 'undefined' && window.location && window.location.protocol.startsWith('http') && window.location.pathname === '/game.js') {
  // Try to redirect to show error instead of code
  try {
    document.open();
    document.write('<html><body>{"e":"error"}</body></html>');
    document.close();
  } catch(e) {
    // If that fails, at least show something
    console.log('{"e":"error"}');
  }
  // Stop further execution
  throw new Error('Direct access not allowed');
}

var v;
var v2;
window.sectorSystem = {
  settings: {
    lineWidth: 0.15,
    lineColor: 16711680,
    lineAlpha: 0.3,
    backgroundColor: 0,
    backgroundAlpha: 0.6,
    sectorTextStyle: {
      fontFamily: "Arial",
      fontSize: 14,
      fill: 16777215
    },
    quarterTextStyle: {
      fontFamily: "Arial",
      fontSize: 20,
      fill: 16777215
    },
    showLines: true
  },
  state: {
    container: null,
    graphics: null,
    isActive: false,
    currentMode: null,
    texts: [],
    initialized: false,
    renderContainer: null,
    restored: false,
    // Activation state
    activated: false,
    activationKey: null
  },
  findRenderContainer: function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }
    if (window.laserGraphics?.parent) {
      this.state.renderContainer = window.laserGraphics.parent;
      return this.state.renderContainer;
    }
    if (window.ooo?.Mh?.Lh?.Wf) {
      this.state.renderContainer = window.ooo.Mh.Lh.Wf;
      return this.state.renderContainer;
    }
    const vF = (p, p2 = new Set(), p3 = 0) => {
      if (!p || typeof p !== "object" || p3 > 3 || p2.has(p)) {
        return null;
      }
      p2.add(p);
      if (p.Wf instanceof PIXI.Container) {
        this.state.renderContainer = p.Wf;
        return p.Wf;
      }
      for (let v3 in p) {
        if (v3 !== "parent" && v3 !== "children" && p[v3] && typeof p[v3] === "object") {
          const vVF = vF(p[v3], p2, p3 + 1);
          if (vVF) {
            return vVF;
          }
        }
      }
      return null;
    };
    return vF(window.ooo);
  },
  cachedRadius: 0,
  lastRadiusTime: 0,
  getRadius: function () {
    const v4 = Date.now();
    if (v4 - this.lastRadiusTime > 1000) {
      this.cachedRadius = window.ooo?.Mh?.Qh?.gh || window.ooo?.Mh?.Lh?.Qh?.gh || 500;
      this.lastRadiusTime = v4;
    }
    return this.cachedRadius;
  },
  clearTexts: function () {
    this.state.texts.forEach(p4 => {
      if (p4 && p4.parent) {
        p4.parent.removeChild(p4);
      }
    });
    this.state.texts = [];
  },
  initDrawing: function (p5) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0, 0, p5);
    this.state.graphics.endFill();
    return p5;
  },
  drawSectors: function () {
    const v5 = this.initDrawing(this.getRadius());
    const v6 = v5 / 3;
    if (this.settings.showLines) {
      for (let vLN1 = 1; vLN1 < 3; vLN1++) {
        this.state.graphics.drawCircle(0, 0, v5 - vLN1 * v6);
      }
      for (let vLN0 = 0; vLN0 < 4; vLN0++) {
        const v7 = vLN0 * Math.PI / 2;
        this.state.graphics.moveTo(0, 0);
        this.state.graphics.lineTo(Math.cos(v7) * v5, Math.sin(v7) * v5);
      }
    }
    for (let vLN02 = 0; vLN02 < 4; vLN02++) {
      const v8 = vLN02 * Math.PI / 2;
      for (let vLN03 = 0; vLN03 < 3; vLN03++) {
        const v9 = v5 - (vLN03 * v6 + v6 / 2);
        const v10 = v8 + Math.PI / 4;
        const v11 = ["S", "D", "F"][vLN03] + (vLN02 + 1);
        const v12 = new PIXI.Text(v11, this.settings.sectorTextStyle);
        v12.anchor.set(0.5);
        v12.position.set(Math.cos(v10) * v9, Math.sin(v10) * v9);
        this.state.container.addChild(v12);
        this.state.texts.push(v12);
      }
    }
  },
  drawQuarters: function () {
    const v13 = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      this.state.graphics.moveTo(-v13, 0);
      this.state.graphics.lineTo(v13, 0);
      this.state.graphics.moveTo(0, -v13);
      this.state.graphics.lineTo(0, v13);
    }
    [{
      n: "wormxt 1",
      x: 1,
      y: -1
    }, {
      n: "wormxt 2",
      x: -1,
      y: -1
    }, {
      n: "wormxt 3",
      x: -1,
      y: 1
    }, {
      n: "wormxt 4",
      x: 1,
      y: 1
    }].forEach(p6 => {
      const v14 = new PIXI.Text(p6.n, this.settings.quarterTextStyle);
      v14.anchor.set(0.5);
      v14.position.set(p6.x * v13 / 3, p6.y * v13 / 3);
      this.state.container.addChild(v14);
      this.state.texts.push(v14);
    });
  },
  initGraphics: function () {
    if (this.state.initialized) {
      return true;
    }
    const v15 = this.findRenderContainer();
    if (!v15) {
      return false;
    }
    this.state.container = new PIXI.Container();
    this.state.graphics = new PIXI.Graphics();
    this.state.container.addChild(this.state.graphics);
    v15.addChild(this.state.container);
    this.state.container.zIndex = 10;
    this.state.container.visible = false;
    this.state.initialized = true;
    return true;
  },
  toggleMode: function (p7) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === p7) {
      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;
      if (document.getElementById("sector_system_toggle")) {
        document.getElementById("sector_system_toggle").checked = false;
      }
      this.saveSettings();
      return;
    }
    this.state.isActive = true;
    this.state.currentMode = p7;
    this.state.container.visible = true;
    if (document.getElementById("sector_system_toggle")) {
      document.getElementById("sector_system_toggle").checked = true;
    }
    if (p7 === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  setupKeyboardEvents: function () {
    const vO = {
      83: () => this.toggleMode("sectors"),
      187: () => this.toggleMode("sectors"),
      61: () => this.toggleMode("sectors"),
      88: () => this.toggleMode("quarters")
    };
    document.addEventListener("keydown", p8 => {
      const v16 = p8.keyCode || p8.which;
      if (vO[v16]) {
        vO[v16]();
        if (typeof this.initUserInterface === "function") {
          this.initUserInterface();
        }
      }
    });
  },
  saveSettings: function () {
    try {
      localStorage.setItem("sectorSystemSettings", JSON.stringify(this.settings));
      localStorage.setItem("sectorSystemActive", this.state.isActive ? "1" : "0");
      if (this.state.currentMode) {
        localStorage.setItem("sectorSystemMode", this.state.currentMode);
      }
      console.log("Saved sector system state:", {
        active: this.state.isActive,
        mode: this.state.currentMode
      });
    } catch (e) {
      console.error("Error saving sector system settings:", e);
    }
  },
  loadSettings: function () {
    try {
      const v17 = JSON.parse(localStorage.getItem("sectorSystemSettings"));
      if (v17) {
        this.settings = {
          ...this.settings,
          ...v17
        };
      }
      const v18 = localStorage.getItem("sectorSystemActive") === "1";
      let v19 = localStorage.getItem("sectorSystemMode");
      if (!v19) {
        v19 = "sectors";
      }
      this.savedState = {
        isActive: v18,
        currentMode: v19
      };
    } catch (e2) {
      console.error("Error loading sector system settings:", e2);
    }
  },
  applySettings: function () {
    if (this.state.isActive && this.state.currentMode) {
      if (this.state.currentMode === "sectors") {
        this.drawSectors();
      } else {
        this.drawQuarters();
      }
    }
  },
  init: function () {
    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 1000);
      return;
    }
    this.loadSettings();
    // Check for activation
    this.checkActivation();
    const v20 = this.initGraphics();
    this.setupKeyboardEvents();
    if (!v20) {
      setTimeout(() => this.init(), 1000);
      return;
    }
    setTimeout(() => {
      if (this.savedState && this.savedState.isActive) {
        this.state.isActive = true;
        this.state.currentMode = this.savedState.currentMode;
        this.state.container.visible = true;
        if (this.state.currentMode === "sectors") {
          this.drawSectors();
        } else {
          this.drawQuarters();
        }
        if (document.getElementById("sector_system_toggle")) {
          document.getElementById("sector_system_toggle").checked = true;
        }
        this.state.restored = true;
        if ($("#sector_system_toggle").length > 0) {
          this.initUserInterface();
        }
      }
    }, 1000);
  },
  checkActivation: function () {
    if (this.settings.activation && !this.settings.activationChecked) {
      alert(
        "The sector system is still in experimental testing and may be removed without warning."
      );
      this.settings.activationChecked = true;
      this.saveSettings();
    }
  },
  initGraphics: function () {
    if (PIXI === "undefined") {
      return false;
    }
    this.state.container = new PIXI.Container();
    this.state.container.visible = false;
    this.app.stage.addChild(this.state.container);
    this.drawSectors();
    return true;
  },
  setupKeyboardEvents: function () {
    document.addEventListener("keydown", (event) => {
      if (event.key === "s") {
        this.toggleActive();
      }
    });
  },
  initUserInterface: function () {
    if (this.state.restored) {
      return;
    }
    const v21 = `
    <label class="label label-green">
      <input id="sector_system_toggle" type="checkbox">
      <span class="label-text">Sector System</span>
    </label>
    <label class="label label-green">
      <input id="sector_system_mode_sectors" type="radio" name="sector_system_mode" value="sectors" checked>
      <span class="label-text">Sectors</span>
    </label>
    <label class="label label-green">
      <input id="sector_system_mode_quarters" type="radio" name="sector_system_mode" value="quarters">
      <span class="label-text">Quarters</span>
    </label>
    `;
    document.getElementById("sector_system_ui").innerHTML = v21;
    document.getElementById("sector_system_toggle").addEventListener("change", (event) => {
      this.toggleActive();
    });
    document.getElementById("sector_system_mode_sectors").addEventListener("change", (event) => {
      if (event.target.checked) {
        this.setMode("sectors");
      }
    });
    document.getElementById("sector_system_mode_quarters").addEventListener("change", (event) => {
      if (event.target.checked) {
        this.setMode("quarters");
      }
    });
  },
  toggleActive: function () {
    this.state.isActive = !this.state.isActive;
    this.state.container.visible = this.state.isActive;
    this.applySettings();
    this.saveSettings();
  },
  setMode: function (mode) {
    this.state.currentMode = mode;
    this.applySettings();
    this.saveSettings();
  },
  drawSectors: function () {
    this.state.container.removeChildren();
    const v22 = [
      "North West",
      "North",
      "North East",
      "West",
      "East",
      "South West",
      "South",
      "South East"
    ];
    for (const [i, label] of v22.entries()) {
      const v23 = this.createLabel(label, this.settings.sectorFontFamily, this.settings.sectorFontSize);
      v23.pivot.x = v23.width / 2;
      v23.pivot.y = v23.height / 2;
      v23.x = this.settings.sectorSpacingX * (i % 4 - 1.5);
      v23.y = this.settings.sectorSpacingY * Math.floor(i / 4 - 0.5);
      this.state.container.addChild(v23);
    }
  },
  drawQuarters: function () {
    this.state.container.removeChildren();
    const v24 = [
      "Top Left",
      "Top Right",
      "Bottom Left",
      "Bottom Right"
    ];
    for (const [i, label] of v24.entries()) {
      const v25 = this.createLabel(label, this.settings.quarterFontFamily, this.settings.quarterFontSize);
      v25.pivot.x = v25.width / 2;
      v25.pivot.y = v25.height / 2;
      v25.x = this.settings.quarterSpacingX * (i % 2 - 0.5);
      v25.y = this.settings.quarterSpacingY * Math.floor(i / 2 - 0.5);
      this.state.container.addChild(v25);
    }
  },
  initUserInterface: function () {
    function f(p9) {
      return "#" + p9.toString(16).padStart(6, "0");
    }
    function f2(p10) {
      return parseInt(p10.replace("#", ""), 16);
    }
    // Check if activation UI needs to be added
    this.checkActivationUI();
    
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      console.log("Restoring state from UI initialization");
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }
    const vF2 = () => {
      $("#sector_system_toggle").prop("checked", this.state.isActive);
      $("#sector_display_mode").val(this.state.currentMode || "sectors");
      $("#sector_bg_color").val(f(this.settings.backgroundColor));
      $("#sector_line_color").val(f(this.settings.lineColor));
      $("#sector_bg_opacity").val(this.settings.backgroundAlpha * 100);
      $("#sector_bg_opacity_value").text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      $("#sector_line_opacity").val(this.settings.lineAlpha * 100);
      $("#sector_line_opacity_value").text(Math.round(this.settings.lineAlpha * 100) + "%");
      $("#sector_show_lines").prop("checked", this.settings.showLines);
      if (!this.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      if (this.state.isActive) {
        $("#sector_settings_panel").slideDown(300);
      } else {
        $("#sector_settings_panel").slideUp(200);
      }
      // Update activation UI state
      this.updateActivationUI();
    };
    $("#sector_system_toggle").off("change").on("change", function () {
      const v21 = $(this).prop("checked");
      if (v21) {
        const v22 = $("#sector_display_mode").val() || "sectors";
        window.sectorSystem.toggleMode(v22);
      } else if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
      }
      vF2();
    });
    $("#sector_display_mode").off("change").on("change", function () {
      const v23 = $(this).val();
      if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
        window.sectorSystem.toggleMode(v23);
        vF2();
      }
    });
    $("#sector_bg_color").off("change").on("change", function () {
      window.sectorSystem.settings.backgroundColor = f2($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", function () {
      window.sectorSystem.settings.lineColor = f2($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", function () {
      const v24 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.backgroundAlpha = v24;
      $("#sector_bg_opacity_value").text(Math.round(v24 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", function () {
      const v25 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.lineAlpha = v25;
      $("#sector_line_opacity_value").text(Math.round(v25 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", function () {
      window.sectorSystem.settings.showLines = $(this).prop("checked");
      if (!window.sectorSystem.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    vF2();
  },
  
  // Activation methods
  checkActivation: function() {
    // Check if activation key exists in localStorage
    const savedKey = localStorage.getItem("sectorSystemActivationKey");
    const activationStatus = localStorage.getItem("sectorSystemActivated");
    
    if (savedKey && activationStatus === "true") {
      this.state.activated = true;
      this.state.activationKey = savedKey;
      return true;
    }
    return false;
  },
  
  activate: function(key) {
    // Simple validation - in a real implementation, you would check this against a server
    if (key && key.length >= 8) {
      this.state.activated = true;
      this.state.activationKey = key;
      localStorage.setItem("sectorSystemActivationKey", key);
      localStorage.setItem("sectorSystemActivated", "true");
      this.showActivationMessage("Activation successful!", "success");
      return true;
    } else {
      this.showActivationMessage("Invalid activation key!", "error");
      return false;
    }
  },
  
  deactivate: function() {
    this.state.activated = false;
    this.state.activationKey = null;
    localStorage.removeItem("sectorSystemActivationKey");
    localStorage.setItem("sectorSystemActivated", "false");
    this.showActivationMessage("Deactivated successfully!", "info");
  },
  
  showActivationMessage: function(message, type) {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // In a real implementation, you would show this in the UI
  },
  
  checkActivationUI: function() {
    // Add activation UI if it doesn't exist
    if ($("#sector_activation_panel").length === 0) {
      const activationHTML = `
        <div id="sector_activation_panel" style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
          <h3>Extension Activation</h3>
          <div id="activation_status" style="margin-bottom: 10px; font-weight: bold;"></div>
          <div id="activation_form">
            <input type="text" id="activation_key" placeholder="Enter activation key" style="width: 200px; padding: 5px; margin-right: 10px;">
            <button id="activate_btn" style="padding: 5px 10px;">Activate</button>
            <button id="deactivate_btn" style="padding: 5px 10px; margin-left: 5px;">Deactivate</button>
          </div>
        </div>
      `;
      $("#sector_settings_panel").after(activationHTML);
      
      // Bind events
      const self = this;
      $("#activate_btn").on("click", function() {
        const key = $("#activation_key").val().trim();
        self.activate(key);
        self.updateActivationUI();
      });
      
      $("#deactivate_btn").on("click", function() {
        self.deactivate();
        $("#activation_key").val("");
        self.updateActivationUI();
      });
    }
  },
  
  updateActivationUI: function() {
    if (this.checkActivation()) {
      $("#activation_status").text("Status: Activated").css("color", "green");
      $("#activation_key").val(this.state.activationKey);
      $("#activate_btn").prop("disabled", true);
      $("#deactivate_btn").prop("disabled", false);
    } else {
      $("#activation_status").text("Status: Not Activated").css("color", "red");
      $("#activate_btn").prop("disabled", false);
      $("#deactivate_btn").prop("disabled", true);
    }
  },
  
  saveSettings: function () {
    try {
      localStorage.setItem("sectorSystemSettings", JSON.stringify(this.settings));
      localStorage.setItem("sectorSystemActive", this.state.isActive ? "1" : "0");
      if (this.state.currentMode) {
        localStorage.setItem("sectorSystemMode", this.state.currentMode);
      }
      console.log("Saved sector system state:", {
        active: this.state.isActive,
        mode: this.state.currentMode
      });
    } catch (e) {
      console.error("Error saving sector system settings:", e);
    }
  },
  loadSettings: function () {
    try {
      const v17 = JSON.parse(localStorage.getItem("sectorSystemSettings"));
      if (v17) {
        this.settings = {
          ...this.settings,
          ...v17
        };
      }
      const v18 = localStorage.getItem("sectorSystemActive") === "1";
      let v19 = localStorage.getItem("sectorSystemMode");
      if (!v19) {
        v19 = "sectors";
      }
      this.savedState = {
        isActive: v18,
        currentMode: v19
      };
    } catch (e2) {
      console.error("Error loading sector system settings:", e2);
    }
  },
  applySettings: function () {
    if (this.state.isActive && this.state.currentMode) {
      if (this.state.currentMode === "sectors") {
        this.drawSectors();
      } else {
        this.drawQuarters();
      }
    }
  },
  init: function () {
    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 1000);
      return;
    }
    this.loadSettings();
    const v20 = this.initGraphics();
    this.setupKeyboardEvents();
    if (!v20) {
      setTimeout(() => this.init(), 1000);
      return;
    }
    setTimeout(() => {
      if (this.savedState && this.savedState.isActive) {
        this.state.isActive = true;
        this.state.currentMode = this.savedState.currentMode;
        this.state.container.visible = true;
        if (this.state.currentMode === "sectors") {
          this.drawSectors();
        } else {
          this.drawQuarters();
        }
        if (document.getElementById("sector_system_toggle")) {
          document.getElementById("sector_system_toggle").checked = true;
        }
        this.state.restored = true;
        if ($("#sector_system_toggle").length > 0) {
          this.initUserInterface();
        }
      }
    }, 1000);
  },
  initUserInterface: function () {
    function f(p9) {
      return "#" + p9.toString(16).padStart(6, "0");
    }
    function f2(p10) {
      return parseInt(p10.replace("#", ""), 16);
    }
    // Check if activation UI needs to be added
    this.checkActivationUI();
    
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      console.log("Restoring state from UI initialization");
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }
    const vF2 = () => {
      $("#sector_system_toggle").prop("checked", this.state.isActive);
      $("#sector_display_mode").val(this.state.currentMode || "sectors");
      $("#sector_bg_color").val(f(this.settings.backgroundColor));
      $("#sector_line_color").val(f(this.settings.lineColor));
      $("#sector_bg_opacity").val(this.settings.backgroundAlpha * 100);
      $("#sector_bg_opacity_value").text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      $("#sector_line_opacity").val(this.settings.lineAlpha * 100);
      $("#sector_line_opacity_value").text(Math.round(this.settings.lineAlpha * 100) + "%");
      $("#sector_show_lines").prop("checked", this.settings.showLines);
      if (!this.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      if (this.state.isActive) {
        $("#sector_settings_panel").slideDown(300);
      } else {
        $("#sector_settings_panel").slideUp(200);
      }
      // Update activation UI state
      this.updateActivationUI();
    };
    $("#sector_system_toggle").off("change").on("change", function () {
      const v21 = $(this).prop("checked");
      if (v21) {
        const v22 = $("#sector_display_mode").val() || "sectors";
        window.sectorSystem.toggleMode(v22);
      } else if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
      }
      vF2();
    });
    $("#sector_display_mode").off("change").on("change", function () {
      const v23 = $(this).val();
      if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
        window.sectorSystem.toggleMode(v23);
        vF2();
      }
    });
    $("#sector_bg_color").off("change").on("change", function () {
      window.sectorSystem.settings.backgroundColor = f2($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", function () {
      window.sectorSystem.settings.lineColor = f2($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", function () {
      const v24 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.backgroundAlpha = v24;
      $("#sector_bg_opacity_value").text(Math.round(v24 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", function () {
      const v25 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.lineAlpha = v25;
      $("#sector_line_opacity_value").text(Math.round(v25 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", function () {
      window.sectorSystem.settings.showLines = $(this).prop("checked");
      if (!window.sectorSystem.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    vF2();
  }
};
var v26;
$(document).ready(function () {
  if ($(".store-view-cont").length) {
    $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
    v26 = $("#idReplaceSkin");
  }
});
var vO2 = {
  unlimitedRespawn: false,
  respawnDelay: 50
};
window.laserOptions = {
  enabled: false,
  color: 16766720,
  opacity: 0.5,
  thickness: 0.1
};
window.laserGraphics = null;
const vO3 = {
  fontStyle: {
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FF0000",
      fontSize: 14,
      fontWeight: "bold",
      lineJoin: "round",
      stroke: "#FFFFFF",
      strokeThickness: 1.5,
      whiteSpace: "normal",
      wordWrap: true
    })
  }
};
vO3.pointsContainer = new PIXI.Container();
let vO4 = {
  x: null,
  y: null
};
let v27 = null;
let v28 = null;
const vF3 = function () {
  if (!window.coords || typeof window.coords.playerX === "undefined" || typeof window.coords.playerY === "undefined") {
    return;
  }
  let vLSM_2 = "m_2";
  if (vO4.x !== null) {
    const v29 = Math.sqrt(Math.pow(window.coords.playerX - vO4.x, 2) + Math.pow(window.coords.playerY - vO4.y, 2));
    if (v29 > 100) {
      if (vO3[vLSM_2]) {
        if (vO3.pointsContainer && vO3.pointsContainer.children.includes(vO3[vLSM_2])) {
          vO3.pointsContainer.removeChild(vO3[vLSM_2]);
        }
        vO3[vLSM_2] = null;
      }
      if (v27) {
        clearInterval(v27);
        v27 = null;
      }
      if (v28) {
        clearTimeout(v28);
        v28 = null;
      }
    }
  }
  vO4.x = window.coords.playerX;
  vO4.y = window.coords.playerY;
  if (!vO3[vLSM_2]) {
    vO3[vLSM_2] = new PIXI.Text("X", vO3.fontStyle.blanco);
    vO3[vLSM_2].zIndex = 2;
    vO3[vLSM_2].alpha = 0.9;
    vO3[vLSM_2].anchor.set(0.5, 0.5);
    if (vO3.pointsContainer) {
      vO3.pointsContainer.sortableChildren = true;
      vO3.pointsContainer.zIndex = 2;
    }
    if (!v27) {
      let v30 = true;
      v27 = setInterval(() => {
        if (vO3[vLSM_2]) {
          v30 = !v30;
          vO3[vLSM_2].visible = v30;
        } else {
          clearInterval(v27);
          v27 = null;
        }
      }, 500);
    }
    if (!v28) {
      v28 = setTimeout(() => {
        if (vO3[vLSM_2]) {
          if (vO3.pointsContainer && vO3.pointsContainer.children.includes(vO3[vLSM_2])) {
            vO3.pointsContainer.removeChild(vO3[vLSM_2]);
          }
          vO3[vLSM_2] = null;
        }
        if (v27) {
          clearInterval(v27);
          v27 = null;
        }
        v28 = null;
      }, 20000);
    }
  }
  if (vO3[vLSM_2]) {
    vO3[vLSM_2].x = window.coords.playerX;
    vO3[vLSM_2].y = window.coords.playerY;
    if (vO3.pointsContainer && !vO3.pointsContainer.children.includes(vO3[vLSM_2])) {
      vO3.pointsContainer.addChild(vO3[vLSM_2]);
    }
  }
  if (window.ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah && ooo.Xg.Kf.Wg.Ah.Sh) {
    ooo.Xg.Kf.Wg.Ah.Sh.zIndex = 9999;
    if (ooo.Xg.Kf.Wg.Ah.sortableChildren !== true) {
      ooo.Xg.Kf.Wg.Ah.sortableChildren = true;
    }
    if (ooo.Xg.Kf.Wg.sortableChildren !== true) {
      ooo.Xg.Kf.Wg.sortableChildren = true;
    }
  }
};
function f3(p11) {
  return (f3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p12) {
    return typeof p12;
  } : function (p13) {
    if (p13 && typeof Symbol == "function" && p13.constructor === Symbol && p13 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof p13;
    }
  })(p11);
}
(function () {
  var vO5 = {};
  var vO6 = {};
  var vO7 = {};
  var vO8 = {};
  vO7.a = function (p14) {
    var v31 = new String();
    var vParseInt = parseInt(p14.substring(0, 2), 16);
    for (var vLN2 = 2; vLN2 < p14.length; vLN2 += 2) {
      var vParseInt2 = parseInt(p14.substring(vLN2, vLN2 + 2), 16);
      v31 += String.fromCharCode(vParseInt2 ^ (vParseInt = 3793 + vParseInt * 4513 & 255));
    }
    ;
    return v31;
  };
  vO7.b = function (p15) {
    return Function("return " + p15 + "; ")();
  };
  vO5.c = vO7.b("window");
  vO5.d = vO5.c.document;
  vO7.e = function () {
    return vO5.c.devicePixelRatio || 1;
  };
  vO5.c.addEventListener("load", function () {
    let vO9 = {
      eie: null,
      joystick: {
        positionMode: "L",
        checked: true,
        size: 90,
        mode: "dynamic",
        position: {
          left: "110px",
          bottom: "110px"
        },
        color: "red",
        pxy: 110
      },
      on: false,
      vj: null,
      uj: null,
      m: null,
      n: null
    };
    var vO10 = {
      id_user: "",
      nickname: "wormxt",
      enemyNameHs: "No Name Player",
      teamCode: "",
      playerX: 0,
      playerY: 0,
      hs: 0,
      kill: 0,
      message: "",
      teamColor: localStorage.getItem("teamColor") || "0xffffff",
      wssServer: ""
    };
    let vLN04 = 0;
    const vLN1000 = 1000;
    function f4(p16) {
      const v32 = Date.now();
      if (v32 - vLN04 > vLN1000) {
        debugLog(p16);
        vLN04 = v32;
      }
    }
    let v33;
    const vO11 = {
      YT: new Map()
    };

    let v35 = false;
    const vLN5000 = 5000;

    window.addEventListener("beforeunload", () => {
      if (v33 && v33.readyState === WebSocket.OPEN) {
        v33.close();
      }
    });
    function f7(p18) {
      if (p18.id_user === "gg_116823912010482082044") {
        createServerMessage("[By YıLdo OWNER]", p18.message);
        debugLog("Servidor " + p18.id_user + " ha enviado un mensaje: " + p18.message);
      }
      if (p18.wssServer !== vO10.wssServer) {
        return;
      }
      switch (p18.type) {
        case "initialState":
          f10(p18.YT);
          break;
        case "playerUpdate":
          f11(p18);
          break;
        case "hsKillUpdate":
          f12(p18);
          break;
        case "playerDeath":
          f13(p18);
          break;
        case "playerDisconnect":
          f14(p18.id);
          break;
        default:
          debugLog("Mensaje desconocido:", p18);
      }
    }
    function f8() {
      if (!v35) {
        debugLog("No conectado, esperando a que se restablezca la conexión...");
        return;
      }
      const v36 = $("#chat-input").val().trim();
      if (v36 === "") {
        return;
      }
      const v37 = vO10.nickname.substring(0, 16);
      const vGetUserData = getUserData(vO10.id_user);
      const vO12 = {
        type: "chatMessage",
        id_user: vO10.id_user,
        nickname: v37,
        message: v36,
        wssServer: vO10.wssServer,
        color: vGetUserData ? vGetUserData.color : "rgba(255, 255, 255, 0.1)",
        image: vGetUserData ? vGetUserData.image : "default_icon.png"
      };
      v33.send(JSON.stringify(vO12));
      f9(v37, v36, vO10.id_user, vO12.color, vO12.image, true);
      $("#chat-input").val("");
    }
    function f9(p19, p20, p21, p22, p23, p24 = false) {
      const v38 = p23 ? "<img src=\"" + p23 + "\" alt=\"User Icon\" style=\"width: 20px; height: 20px; margin-right: 5px; border-radius: 50%;\">" : "";
      const v39 = p24 ? "lightblue" : "white";
      const v40 = "\n        <div class=\"chat-message\" style=\"background: " + (p22 || "rgba(255, 255, 255, 0.1)") + ";\">\n            " + v38 + "\n            <strong id=\"" + p21 + "\" style=\"color: " + v39 + "\">" + p19 + ":</strong>\n            <span>" + p20 + "</span>\n        </div>\n    ";
      $("#chat-history").append(v40).scrollTop($("#chat-history")[0].scrollHeight);
    }
    function f10(p25) {
      p25.forEach(p26 => vO11.players.set(p26.id_user, p26));
      debugLog("Estado inicial recibido:", p25);
    }
    function f11(p27) {
      vO11.YT.set(p27.id_user, {
        ...p27
      });
      updateTop8Hs();
      if (p27.teamCode === vO10.teamCode) {
        createTeamUbication(p27.teamCode, p27.teamColor);
        createTeamMessage(p27.teamCode, p27.nickname, p27.message);
      }
    }
    function f12(p28) {
      debugLog("🎯 HS Güncelleme: " + p28.nickname);
      const v41 = vO11.YT.get(p28.id_user);
      if (v41) {
        v41.hskill.hs += p28.hskill.hs;
        v41.hskill.kill += p28.hskill.kill;
      } else {
        vO11.YT.set(p28.id_user, {
          ...p28,
          hskill: {
            ...p28.hskill
          },
          position: {
            x: 0,
            y: 0
          }
        });
      }
      const v42 = vO11.YT.get(p28.id_user);
      debugLog("🧠 Player state:", v42);
      updateTop8Hs();
    }
    function f13(p29) {
      vO11.YT.delete(p29.id_user);
      debugLog("El jugador " + p29.nickname + " ha muerto.");
      updateTop8Hs();
      clearTeamUbication();
    }
    function f14(p30) {
      vO11.YT.delete(p30);
      debugLog("Jugador " + p30 + " desconectado.");
    }
    function f15(p31, p32 = {}) {
      if (!v35) {
        debugLog("WebSocket bağlı değil.");
        return;
      }
      if (p31 === "playerUpdate" && (!vO10.teamCode || vO10.teamCode === "")) {
        debugLog("🛑 Pozisyon güncellemesi yapılmadı: teamCode yok.");
        return;
      }
      const vO13 = {
        type: p31,
        id_user: vO10.id_user,
        nickname: vO10.nickname,
        enemyNameHs: vO10.enemyNameHs,
        hskill: {
          hs: vO10.hs,
          kill: vO10.kill
        },
        position: {
          x: vO10.playerX,
          y: vO10.playerY
        },
        message: vO10.message,
        teamCode: vO10.teamCode,
        teamColor: vO10.teamColor,
        wssServer: vO10.wssServer,
        ...p32
      };
      debugLog("📤 Veri gönderiliyor:", vO13);
      v33.send(JSON.stringify(vO13));
    }
    let vLN05 = 0;
    let vA = [];
    const vLN100 = 100;
    const vLN10 = 10;
    function f16() {
      if (vA.length > 0) {
        const v43 = vA.splice(0, vLN10);
        f15("playerUpdate", {
          batch: v43
        });
      }
    }
    setInterval(() => {
      f16();
    }, vLN100);
    function f17(p33, p34) {
      const v44 = Date.now();
      if (v44 - vLN05 < 100) {
        return;
      }
      vLN05 = v44;
      if (!vO10.teamCode || vO10.teamCode === "") {
        debugLog("Jugador " + vO10.id_user + " no tiene teamCode. No se enviará la actualización de posición.");
        return;
      }
      vO10.playerX = p33;
      vO10.playerY = p34;
      vA.push({
        x: p33,
        y: p34
      });
      debugLog("Jugador " + vO10.id_user + " se movió a (" + p33 + ", " + p34 + ")");
    }
    function f18(p35, p36) {
      f15("playerDeath", {
        hskill: {
          hs: p35,
          kill: p36
        }
      });
      debugLog("Jugador " + vO10.id_user + " ha muerto.");
    }
    function f19(p37, p38) {
      debugLog("🟡 sendHSKillUpdate çağrıldı");
      f15("hsKillUpdate", {
        hskill: {
          hs: p37,
          kill: p38
        }
      });
      debugLog("🟢 Gönderildi HS: " + p37 + ", Kill: " + p38);
      debugLog("Jugador " + vO10.id_user + " HS/Kill actualizado: HS " + p37 + ", Kill " + p38);
    }
    var v45;
    let vO14 = {
      s_l: "https://wormx.store",
      fullscreen: null,
      headshot: 0,
      s_headshot: 0,
      mobile: false,
      mo: 1,
      mo1: {
        x: -1,
        y: -1
      },
      mo2: {
        x: -1,
        y: -1
      },
      s_kill: 0,
      kill: 0,
      died: 0,
      saveGame: false,
      forceUseLocalImages: false,
      localStorageEnabled: true,
      pm: {},
      joystick: vO9.joystick,
      j: null,
      pk: 0,
      pk0: "",
      pk1: "",
      pk2: "",
      pk3: "",
      pk4: "",
      pk5: "",
      pk6: "",
      z: 1,
      c_v: 222,
      c_1: "WFT",
      c_2: "TeamWFT",
      c_3: "teamwft",
      c_4: "wormate.io",
      c_5: "please don't copy my code",
      d_1: "VlZBPQ==",
      d_2: "VkdWaGJWVlE=",
      d_3: "ZDI5eWJYVnc=",
      d_4: "VjI5eWJXRjBaUzVwYnc9PQ==",
      d_5: "VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09",
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: "",
      g: 36,
      s_w: false,
      s_n: "",
      v_z: 0,
      h: false,
      sn: true,
      s: false,
      hz: false,
      fz: true,
      tt: false,
      vh: false,
      vp: false,
      iq: false,
      ctrl: false,
      r1: true,
      sc: 0,
      wi: 0,
      to: 10,
      sm: 20,
      pi: "",
      pn: "",
      se: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: []
      },
      st: false,
      hh: 0,
      sh: [],
      ws: [],
      we: [],
      wm: [],
      wg: [],
      wh: [],
      sg: [],
      gg: null,
      ig: -1,
      so: 1,
      re: false,
      dg: null,
      zigzag: 0
    };
    let v46 = localStorage.getItem("SaveGamewft");
    if (v46 && v46 !== "null") {
      let v47 = JSON.parse(v46);
      for (let v48 in v47) {
        vO14[v48] = v47[v48];
      }
    }
    
    // 🎯 فتح جميع العناصر من 0 إلى 9999
    // Unlock all items immediately after loading game data
    try {
      // إجباري: تعديل خاصية customer إلى true قبل أي شيء آخر
      if (typeof _0x9a89dc !== 'undefined') {
        _0x9a89dc.customer = true;
        console.log("✅ تم إجبار customer = true في البيانات");
      }
      
      // التأكد من وجود البيانات وإنشاءها إذا لم تكن موجودة
      if (typeof _0x9a89dc === 'undefined') { 
        _0x9a89dc = {}; 
        _0x9a89dc.tk = ""; 
        _0x9a89dc.customer = true;
      }
      
      // Ensure all item arrays exist and are populated
      if (!vO14.sg) vO14.sg = [];
      if (!vO14.hg) vO14.hg = [];
      if (!vO14.eg) vO14.eg = [];
      if (!vO14.mg) vO14.mg = [];
      if (!vO14.gg) vO14.gg = [];
      
      // Populate all arrays with items 0-9999
      for (let i = 0; i <= 9999; i++) {
        if (!vO14.sg.includes(i)) vO14.sg.push(i);
        if (!vO14.hg.includes(i)) vO14.hg.push(i);
        if (!vO14.eg.includes(i)) vO14.eg.push(i);
        if (!vO14.mg.includes(i)) vO14.mg.push(i);
        if (!vO14.gg.includes(i)) vO14.gg.push(i);
      }
      
      // 🎯 إجبار customer = true في جميع الأماكن
      vO14.customer = true;
      if (typeof bbs !== 'undefined') {
        bbs.customer = true;
      }
      window.customer = true;
      
      // 🎯 فتح جميع العناصر من 0 إلى 9999
      const allProperties = [];
      const types = ["HAT", "SKIN", "EYES", "GLASSES", "MOUTH"];
      
      types.forEach(type => {
        for (let i = 0; i <= 9999; i++) {
          allProperties.push({
            "id": i.toString(),
            "type": type
          });
        }
      });
      
      console.log("🎯 تم فتح " + allProperties.length + " عنصر!");
      console.log("🎨 HAT: 0-9999, SKIN: 0-9999, EYES: 0-9999, GLASSES: 0-9999, MOUTH: 0-9999");
      
      // Set property lists
      if (typeof _0x9a89dc !== 'undefined') {
        _0x9a89dc.propertyList = allProperties;
      }
      if (typeof _0x2b92bd !== 'undefined') {
        _0x2b92bd.propertyList = allProperties;
      }
      
      // Save the updated data
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
      
      // ✅ حفظ البيانات مع التوكن المحمي
      if (typeof bbs !== 'undefined') {
        const tokenToUse = bbs.tk || "";
        const bbsToSave = {...bbs};
        bbsToSave.tk = tokenToUse;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbsToSave));
        
        console.log("✅ تم إجبار customer = true في جميع المتغيرات");
        console.log("🔐 التوكن المحفوظ:", tokenToUse ? tokenToUse.substring(0, 20) + "..." : "غير موجود");
        console.log("bbs.customer:", bbs.customer);
      }
      
      // Additional localStorage flags
      localStorage.setItem("allSkinsUnlocked", "true");
      localStorage.setItem("allHatsUnlocked", "true");
      localStorage.setItem("allEyesUnlocked", "true");
      localStorage.setItem("allMouthsUnlocked", "true");
      localStorage.setItem("allGlassesUnlocked", "true");
      
      // عرض معلومات إضافية
      if (typeof _0x9a89dc !== 'undefined' && _0x9a89dc.propertyList && Array.isArray(_0x9a89dc.propertyList)) {
        console.log("📦 تحليل مفصل للعناصر:");
        console.log("  📊 العدد الإجمالي:", _0x9a89dc.propertyList.length);
        
        // عرض أول 10 عناصر كمثال
        console.log("  📋 أول 10 عناصر:");
        _0x9a89dc.propertyList.slice(0, 10).forEach((item, index) => {
          console.log("    " + (index + 1) + ":", item);
        });
        
        // إحصائيات الأنواع
        var typeCount = {};
        _0x9a89dc.propertyList.forEach(item => {
          if (item.type) {
            typeCount[item.type] = (typeCount[item.type] || 0) + 1;
          }
        });
        
        console.log("  📊 إحصائيات الأنواع:");
        for (var type in typeCount) {
          console.log("    " + type + ": " + typeCount[type] + " عنصر");
        }
      }
      
      console.log("🎉 جميع العناصر تم فتحها بنجاح!");
    } catch (e) {
      console.error("Failed to unlock items during initialization:", e);
    }
    ;
    if (!vO14.favoriteSkins) {
      vO14.favoriteSkins = [];
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
    }
    if (vO14.currentFavSkinIndex === undefined) {
      vO14.currentFavSkinIndex = 0;
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
    }
    if (!vO14.selectedHats) {
      vO14.selectedHats = [];
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
    }
    if (vO14.currentHatIndex === undefined) {
      vO14.currentHatIndex = 0;
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
    }
    if (!window.globalHatTextureCache) {
      window.globalHatTextureCache = {};
    }
    try {
      if (localStorage.SaveGameXT) {
        const v49 = JSON.parse(localStorage.SaveGameXT);
        for (const v50 in v49) {
          if (wftObjects.hasOwnProperty(v50)) {
            wftObjects[v50] = v49[v50];
          }
        }
      }
    } catch (e4) {
      console.error("Error loading settings:", e4);
    }
    ;
    function f20() {
      try {
        if (typeof localStorage === "undefined") {
          console.error("Wormx Error 3");
          return false;
        }
        var v51 = localStorage.getItem("wfti");
        var v52 = localStorage.getItem("wftit");
        if (v51 && v52) {
          if (typeof vO14 !== "undefined") {
            vO14.v_z = v52;
            vO14.forceUseLocalImages = true;
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          }
          return true;
        } else {
          console.log("Wormx Error 2");
          return false;
        }
      } catch (e5) {
        console.error("Wormx Error 1", e5);
        return false;
      }
      
      // 🎯 فتح جميع العناصر من 0 إلى 9999 بعد تهيئة اللعبة
      try {
        // إجباري: تعديل خاصية customer إلى true قبل أي شيء آخر
        if (typeof _0x9a89dc !== 'undefined') {
          _0x9a89dc.customer = true;
          console.log("✅ تم إجبار customer = true في البيانات");
        }
        
        // التأكد من وجود البيانات وإنشاءها إذا لم تكن موجودة
        if (typeof _0x9a89dc === 'undefined') { 
          _0x9a89dc = {}; 
          const tokenToUse = (typeof bbs !== 'undefined' && bbs.tk) ? bbs.tk : "";
          _0x9a89dc.tk = tokenToUse; 
          _0x9a89dc.customer = true;
        }
        
        // Ensure all item arrays exist and are populated in vO14
        if (typeof vO14 !== 'undefined') {
          if (!vO14.sg) vO14.sg = [];
          if (!vO14.hg) vO14.hg = [];
          if (!vO14.eg) vO14.eg = [];
          if (!vO14.mg) vO14.mg = [];
          if (!vO14.gg) vO14.gg = [];
          
          // Populate all arrays with items 0-9999
          for (let i = 0; i <= 9999; i++) {
            if (!vO14.sg.includes(i)) vO14.sg.push(i);
            if (!vO14.hg.includes(i)) vO14.hg.push(i);
            if (!vO14.eg.includes(i)) vO14.eg.push(i);
            if (!vO14.mg.includes(i)) vO14.mg.push(i);
            if (!vO14.gg.includes(i)) vO14.gg.push(i);
          }
          
          // Set customer status
          vO14.customer = true;
          
          // Save to localStorage
          localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
        }
        
        // Also handle bbs object if it exists
        if (typeof bbs !== 'undefined') {
          // Ensure all item arrays exist
          if (!bbs.sg) bbs.sg = [];
          if (!bbs.hg) bbs.hg = [];
          if (!bbs.eg) bbs.eg = [];
          if (!bbs.mg) bbs.mg = [];
          if (!bbs.gg) bbs.gg = [];
          
          // Populate all arrays with items 0-9999
          for (let i = 0; i <= 9999; i++) {
            if (!bbs.sg.includes(i)) bbs.sg.push(i);
            if (!bbs.hg.includes(i)) bbs.hg.push(i);
            if (!bbs.eg.includes(i)) bbs.eg.push(i);
            if (!bbs.mg.includes(i)) bbs.mg.push(i);
            if (!bbs.gg.includes(i)) bbs.gg.push(i);
          }
          
          // Set customer status
          bbs.customer = true;
          
          // Save to localStorage
          const tokenToUse = bbs.tk || "";
          const bbsToSave = {...bbs};
          bbsToSave.tk = tokenToUse;
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbsToSave));
        }
        
        // Set global customer status
        window.customer = true;
        
        // 🎯 فتح جميع العناصر من 0 إلى 9999
        const allProperties = [];
        const types = ["HAT", "SKIN", "EYES", "GLASSES", "MOUTH"];
        
        types.forEach(type => {
          for (let i = 0; i <= 9999; i++) {
            allProperties.push({
              "id": i.toString(),
              "type": type
            });
          }
        });
        
        console.log("🎯 تم فتح " + allProperties.length + " عنصر!");
        console.log("🎨 HAT: 0-9999, SKIN: 0-9999, EYES: 0-9999, GLASSES: 0-9999, MOUTH: 0-9999");
        
        // Set property lists
        if (typeof _0x9a89dc !== 'undefined') {
          _0x9a89dc.propertyList = allProperties;
        }
        if (typeof _0x2b92bd !== 'undefined') {
          _0x2b92bd.propertyList = allProperties;
        }
        
        // Set specific localStorage flags
        localStorage.setItem("allSkinsUnlocked", "true");
        localStorage.setItem("allHatsUnlocked", "true");
        localStorage.setItem("allEyesUnlocked", "true");
        localStorage.setItem("allMouthsUnlocked", "true");
        localStorage.setItem("allGlassesUnlocked", "true");
        
        // Create comprehensive unlock data
        localStorage.setItem("unlockedItems", JSON.stringify(allProperties));
        
        // Create SaveGamewft with all items
        const saveGameData = {
          sg: Array.from({length: 10000}, (_, i) => i), // Skins
          hg: Array.from({length: 10000}, (_, i) => i), // Hats
          eg: Array.from({length: 10000}, (_, i) => i), // Eyes
          mg: Array.from({length: 10000}, (_, i) => i), // Mouths
          gg: Array.from({length: 10000}, (_, i) => i), // Glasses
          customer: true
        };
        
        // Merge with existing data if it exists
        let existingSave = {};
        try {
          const existing = localStorage.getItem("SaveGamewft");
          if (existing && existing !== "null") {
            existingSave = JSON.parse(existing);
          }
        } catch (e) {}
        
        const mergedSave = {...existingSave, ...saveGameData};
        localStorage.setItem("SaveGamewft", JSON.stringify(mergedSave));
        
        // ✅ حفظ البيانات مع التوكن المحمي
        if (typeof bbs !== 'undefined') {
          const tokenToUse = bbs.tk || "";
          const bbsToSave = {...bbs};
          bbsToSave.tk = tokenToUse;
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbsToSave));
          
          console.log("✅ تم إجبار customer = true في جميع المتغيرات");
          console.log("🔐 التوكن المحفوظ:", tokenToUse ? tokenToUse.substring(0, 20) + "..." : "غير موجود");
          console.log("bbs.customer:", bbs.customer);
        }
        
        // عرض معلومات إضافية
        if (typeof _0x9a89dc !== 'undefined' && _0x9a89dc.propertyList && Array.isArray(_0x9a89dc.propertyList)) {
          console.log("📦 تحليل مفصل للعناصر:");
          console.log("  📊 العدد الإجمالي:", _0x9a89dc.propertyList.length);
          
          // عرض أول 10 عناصر كمثال
          console.log("  📋 أول 10 عناصر:");
          _0x9a89dc.propertyList.slice(0, 10).forEach((item, index) => {
            console.log("    " + (index + 1) + ":", item);
          });
          
          // إحصائيات الأنواع
          var typeCount = {};
          _0x9a89dc.propertyList.forEach(item => {
            if (item.type) {
              typeCount[item.type] = (typeCount[item.type] || 0) + 1;
            }
          });
          
          console.log("  📊 إحصائيات الأنواع:");
          for (var type in typeCount) {
            console.log("    " + type + ": " + typeCount[type] + " عنصر");
          }
        }
        
        console.log("🎉 جميع العناصر تم فتحها بنجاح!");
      } catch (unlockError) {
        console.error("❌ فشل في فتح العناصر:", unlockError);
      }
    }
    f20();
    let vF4 = function () {
      let v53 = false;
      vO14.mobile = false;
      var v54 = navigator.userAgent || navigator.vendor || window.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v54) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v54.substr(0, 4))) {
        v53 = true;
        vO14.mobile = true;
      }
      return v53;
    };
    let v55 = vO14.z || 1;
    let v56 = vO14.z;
    Object.defineProperty(vO14, "z", {
      get: function () {
        return v56;
      },
      set: function (p39) {
        if (Math.abs(p39 - v56) > 0.1) {
          console.log("Zoom changing from", v56, "to", p39);
          console.trace();
        }
        v56 = p39;
      }
    });
    let vF5 = function (p40) {
      vO14.joystick ||= vO9.joystick;
      vO14.joystick.checked = p40.checked;
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
    };
    let vF6 = function (p41) {
      vO14.joystick ||= vO9.joystick;
      vO14.joystick.color = p41.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
    };
    let vF7 = function (p42) {
      vO14.joystick ||= vO9.joystick;
      vO14.joystick.mode = p42.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
    };
    let vF8 = function (p43) {
      vO14.joystick ||= vO9.joystick;
      vO14.joystick.position = {
        left: "75px",
        bottom: "75px"
      };
      if (p43.value === "R") {
        vO14.joystick.position = {
          right: "75px",
          bottom: "75px"
        };
      }
      vO14.joystick.positionMode = p43.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
    };
    let vF9 = function (p44) {
      vO14.joystick ||= vO9.joystick;
      vO14.joystick.position = {
        left: (parseInt(p44.value) + 10).toString() + "px",
        bottom: p44.value + "px"
      };
      if (vO14.joystick.positionMode === "R") {
        vO14.joystick.position = {
          right: (parseInt(p44.value) + 10).toString() + "px",
          bottom: p44.value + "px"
        };
      }
      vO14.joystick.pxy = p44.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
    };
    let vF10 = function (p45) {
      vO14.joystick ||= vO9.joystick;
      vO14.joystick.size = p45.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
    };
    let vF11 = function (p46, p47, p48, p49, p50, p51) {
      let vO15 = {
        a: "",
        b: 0,
        c: ""
      };
      if (p46 > vO14.g * 100 + 100 || p46 < vO14.g * 10 || p46 === undefined) {
        vO14.a = p46;
        if (p46 === undefined) {
          vO14.a = Math.floor(Math.random() * (vO14.g / 9) + (vO14.g - vO14.g / 9));
        }
        vO15.a = "00";
      } else {
        vO14.a = p46 - vO14.g * 10;
        vO15.b = vO14.a;
        vO14.a = vO14.a % (vO14.g / 9);
        vO15.b = (vO15.b - vO14.a) / (vO14.g / 9) + 1;
        vO14.a = vO14.a + (vO14.g - vO14.g / 9);
        vO15.a = vO15.b.toString(vO14.g).padStart(2, 0);
      }
      if (p47 > vO14.g * 20 || p47 < vO14.g / 9 * 100 || p47 === undefined) {
        if (p47 > vO14.g * 20 && p47 < vO14.g * 30) {
          vO14.b = p47 - vO14.g * 20;
          vO15.a = vO15.a + vO14.b.toString(vO14.g);
          vO14.b = 0;
          vO15.c = vO15.c + "1";
        } else {
          vO14.b = p47;
          if (p47 === undefined) {
            vO14.b = 0;
          }
          vO15.a = vO15.a + "0";
          vO15.c = vO15.c + "0";
        }
      } else {
        vO14.b = p47 - vO14.g / 9 * 100 + vO14.g / vO14.g;
        vO15.a = vO15.a + vO14.b.toString(vO14.g);
        vO14.b = 0;
        vO15.c = vO15.c + "0";
      }
      if (p48 > vO14.g * 20 || p48 < vO14.g / 9 * 100 || p48 === undefined) {
        if (p48 > vO14.g * 20 && p48 < vO14.g * 30) {
          vO14.c = p48 - vO14.g * 20;
          vO15.a = vO15.a + vO14.c.toString(vO14.g);
          vO14.c = 0;
          vO15.c = vO15.c + "1";
        } else {
          vO14.c = p48;
          if (p48 === undefined) {
            vO14.c = 0;
          }
          vO15.a = vO15.a + "0";
          vO15.c = vO15.c + "0";
        }
      } else {
        vO14.c = p48 - vO14.g / 9 * 100 + vO14.g / vO14.g;
        vO15.a = vO15.a + vO14.c.toString(vO14.g);
        vO14.c = 0;
        vO15.c = vO15.c + "0";
      }
      if (p49 > vO14.g * 20 || p49 < vO14.g / 9 * 100 || p49 === undefined) {
        if (p49 > vO14.g * 20 && p49 < vO14.g * 30) {
          vO14.d = p49 - vO14.g * 20;
          if (vO14.d.toString(vO14.g) === "N") {
            vO15.a = vO15.a + "0";
          } else {
            vO15.a = vO15.a + vO14.d.toString(vO14.g);
          }
          vO14.d = 0;
          vO15.c = vO15.c + "1";
        } else {
          vO14.d = p49;
          if (p49 === undefined) {
            vO14.d = 0;
          }
          vO15.a = vO15.a + "0";
          vO15.c = vO15.c + "0";
        }
      } else {
        vO14.d = p49 - vO14.g / 9 * 100 + vO14.g / vO14.g;
        if (vO14.d.toString(vO14.g) === "N") {
          vO15.a = vO15.a + "0";
        } else {
          vO15.a = vO15.a + vO14.d.toString(vO14.g);
        }
        vO14.d = 0;
        vO15.c = vO15.c + "0";
      }
      if (p50 > vO14.g * 20 || p50 < vO14.g / 9 * 100 || p50 === undefined) {
        if (p50 > vO14.g * 20 && p50 < vO14.g * 30) {
          vO15.b = vO14.g / vO14.g;
          if (p50 <= vO14.g * 20 + (vO14.g - 1)) {
            vO14.e = p50 - vO14.g * 20;
          } else if (p50 <= vO14.g * 20 + (vO14.g - 1) * 2) {
            vO15.b = vO15.b * 2;
            vO14.e = p50 - vO14.g * 20 - (vO14.g - 1);
          } else if (p50 <= vO14.g * 20 + (vO14.g - 1) * 3) {
            vO14.e = p50 - vO14.g * 20 - (vO14.g - 1) * 2;
          } else if (p50 <= vO14.g * 20 + (vO14.g - 1) * 4) {
            vO15.b = vO15.b * 2;
            vO14.e = p50 - vO14.g * 20 - (vO14.g - 1) * 3;
          } else {
            vO14.e = 0;
          }
          if (vO14.e >= vO14.g) {
            vO15.b = 2;
            vO14.e = vO14.e - (vO14.g - 1);
          }
          vO15.a = vO15.a + vO14.e.toString(vO14.g);
          vO14.e = 0;
          vO15.c = vO15.c + "1";
        } else {
          vO14.e = p50;
          if (p50 === undefined) {
            vO14.e = 0;
          }
          vO15.a = vO15.a + "0";
          vO15.c = vO15.c + "0";
          vO15.b = 0;
        }
      } else {
        vO15.b = vO14.g / vO14.g;
        if (p50 - vO14.g / 9 * 100 + 1 >= vO14.g) {
          vO14.e = p50 - (vO14.g / 9 * 100 + (vO14.g - 1));
          vO15.b = vO15.b * 2;
        } else {
          vO14.e = p50 - vO14.g / 9 * 100 + vO15.b;
        }
        vO15.a = vO15.a + vO14.e.toString(vO14.g);
        vO14.e = 0;
        vO15.c = vO15.c + "0";
      }
      if (vO15.a == "000000") {
        vO14.f = p51.substr(0, 22).padEnd(22);
      } else {
        let vParseInt3 = parseInt(vO15.c, 2);
        if (p50 > 790 && p50 <= 860) {
          vParseInt3 += 16;
        }
        if (vO15.b <= 1) {
          vO15.a = vO15.a.substr(0, 5) + "." + vO15.a.substr(5, 1);
        } else {
          vO15.a = vO15.a.substr(0, 4) + "." + vO15.a.substr(4, 2);
        }
        if (p51 == "") {
          p51 = ".                       .";
        }
        if (vO15.c == "0000") {
          if (p51.substr(23, 1) == ".") {
            p51 = p51.substr(0, 23).padEnd(23) + " " + p51.substr(24, 1).padEnd(1);
          }
          vO14.f = (p51.length >= 32 ? p51.substr(0, 25) : p51.substr(0, 25).padEnd(25)) + vO15.a;
        } else {
          vO14.f = (p51.length >= 32 ? p51.substr(0, 23) : p51.substr(0, 23).padEnd(23)) + "." + vParseInt3.toString(vO14.g) + vO15.a;
        }
        vO14.f = vO14.f.replaceAll(" ", "_");
      }
    };
    let vF12 = function (p52) {
      let v57;
      try {
        vO14.joystick ||= vO9.joystick;
        if (vF4() && p52 && vO14.joystick.checked) {
          (v57 = nipplejs.create(vO14.joystick)).on("move", function (p53, p54) {
            vO9.eie.fo = p54.angle.radian <= Math.PI ? p54.angle.radian * -1 : Math.PI - (p54.angle.radian - Math.PI);
          });
        }
        return v57;
      } catch (e6) {
        console.error(e6);
      }
    };
    let vF13 = function (p55) {
      let vO16 = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: "",
        g: 0,
        h: "",
        i: ""
      };
      let vLN06 = 0;
      vO16.h = p55.substr(-9);
      if (vO16.h.substr(0, 1) != ".") {
        vO16.i = "0000";
      } else if ((vLN06 = parseInt(vO16.h.substr(1, 1), vO14.g)) > 15) {
        vLN06 -= 16;
        vO16.i = vLN06.toString(2).padStart(4, 0);
      } else {
        vO16.i = vLN06.toString(2).padStart(4, 0);
        vLN06 = 0;
      }
      vO16.f = p55.substr(-7);
      if (vO16.f.substr(0, 2) != "00") {
        vO16.a = parseInt(vO16.f.substr(0, 2), vO14.g);
        vO16.a = (vO16.a - 1) * (vO14.g / 9) + vO14.g * 10 - (vO14.g - 4);
      }
      if (vO16.f.substr(5, 1) == ".") {
        if (vO16.f.substr(6, 1) != "0") {
          vO16.e = parseInt(vO16.f.substr(6, 1), vO14.g);
          if (vO16.i.substr(3, 1) != "0") {
            if (vLN06 > 0) {
              vO16.e = vO16.e + vO14.g * 20 + (vO14.g - 1) * 2;
            } else {
              vO16.e = vO16.e + vO14.g * 20;
            }
          } else {
            vO16.e = vO16.e - 1 + vO14.g / 9 * 100;
          }
        }
      } else {
        vO16.e = parseInt(vO16.f.substr(6, 1), vO14.g);
        if (vO16.i.substr(3, 1) != "0") {
          if (vLN06 > 0) {
            vO16.e = vO16.e + vO14.g * 20 + (vO14.g - 1) * 3;
          } else {
            vO16.e = vO16.e + vO14.g * 20 + (vO14.g - 1);
          }
        } else {
          vO16.e = vO16.e + (vO14.g / 9 * 100 + (vO14.g - 1));
        }
      }
      vO16.f = vO16.f.replace(".", "");
      if (vO16.f.substr(2, 1) != "0") {
        vO16.b = parseInt(vO16.f.substr(2, 1), vO14.g);
        if (vO16.i.substr(0, 1) != "0") {
          vO16.b = vO16.b + vO14.g * 20;
        } else {
          vO16.b = vO16.b - 1 + vO14.g / 9 * 100;
        }
      }
      if (vO16.f.substr(3, 1) != "0") {
        vO16.c = parseInt(vO16.f.substr(3, 1), vO14.g);
        if (vO16.i.substr(1, 1) != "0") {
          vO16.c = vO16.c + vO14.g * 20;
        } else {
          vO16.c = vO16.c - 1 + vO14.g / 9 * 100;
        }
      }
      if (vO16.f.substr(4, 1) != "0") {
        vO16.d = parseInt(vO16.f.substr(4, 1), vO14.g);
        if (vO16.i.substr(2, 1) != "0") {
          vO16.d = vO16.d + vO14.g * 20;
        } else {
          vO16.d = vO16.d - 1 + vO14.g / 9 * 100;
        }
      }
      return vO16;
    };
    let vF14 = function (p56) {
      return !(p56 > vO14.g * 30) && !(p56 < vO14.g / 9 * 100) || p56 == 0;
    };
    let vF15 = function (p57) {
      return /^(.{25})(\w{5}\.\w{1})$/.test(p57) || /^(.{25})(\w{4}\.\w{2})$/.test(p57);
    };
    let vF16 = function (p58) {
      p58 = p58.replaceAll("_", " ");
      if (/^(.{25})(\w{7})$/.test(p58)) {
        for (p58 = p58.substr(0, 15).trim(); p58.substr(p58.length - 1, 1) == ".";) {
          p58 = p58.substr(0, p58.length - 1);
        }
        ;
        return p58;
      }
      ;
      if (/^(.{25})(\w{5}\.\w{1})$/.test(p58) || /^(.{25})(\w{4}\.\w{2})$/.test(p58)) {
        if (p58.substr(-9).substr(0, 1) != ".") {
          return p58.substr(0, 25).trim();
        } else {
          return p58.substr(0, 23).trim();
        }
      } else {
        return p58;
      }
    };
    vO14.loading = true;
    var v58 = localStorage.getItem("oco");
    localStorage.setItem("ccg_0", "Kill and Headshot stats will be removed?");
    localStorage.setItem("ccg_1", "There was a problem connecting!");
    localStorage.setItem("ccg_2", "Your account has been locked.");
    var v59 = localStorage.getItem("wftsw");
    var v60 = localStorage.getItem("wfti") != null ? localStorage.getItem("wfti").split(",") : localStorage.getItem("wfti");
    var v61 = localStorage.getItem("wftit");
    var v62 = localStorage.getItem("custom_wear");
    var v63 = localStorage.getItem("custom_skin");
    $("<input type=\"hidden\" id=\"port_id\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_id_s\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name_s\" value=\"\">").insertAfter(".description-text");
    $("#mm-action-buttons").hover(function () {
      $("#port_id").val("");
      $("#port_name").val("");
    });
    $("#final-share-fb").css("display", "none");
    $("#unl6wj4czdl84o9b").css("display", "none");
    $("#mm-action-guest").css("display", "none");
    $("#mm-menu-cont").css("display", "block");
    $("#mm-bottom-buttons").css("display", "block");
    $("#mm-player-info").css("display", "block");
    $("#mm-player-avatar").after();
    $("#mm-player-info").css("display", "block");
    $("#relojHelp").css("position", "absolute");
    $("#relojHelp").css("top", "12px");
    $("#relojHelp").css("left", "5px");
    $("#delete-account-view").css("display", "none");
    var v64 = null;
    var v65 = null;
    var v66 = false;
    var vLN55 = 55;
    var vLN12 = 1;
    var v67 = true;
    if (v60 && v61 && v61 == vO14.v_z) ;else {
      fetch("https://wormx.store/store/index.php", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          img: "i2"
        })
      }).then(async function (p59) {
        v60 = (p59 = await p59.json()).i.split(".");
        localStorage.setItem("wfti", v60);
        localStorage.setItem("wftit", p59.vs);
        vO14.v_z = p59.vs;
        window.location.reload();
      }).catch(function (p60) {});
    }
    ;
    var v68 = PIXI.Texture.from(vO14.s_l + "/get_store.phpitem=close_q.png");
    var v69 = PIXI.Texture.from(vO14.s_l + "/get_store.phpitem=open_q.png");
    var v70 = PIXI.Texture.from(vO14.s_l + "/get_store.phpitem=close_w.png");
    var v71 = PIXI.Texture.from(vO14.s_l + "/get_store.phpitem=open_w.png");
    var v72 = PIXI.Texture.from(vO14.s_l + "/get_store.phpitem=close_z.png");
    var v73 = PIXI.Texture.from(vO14.s_l + "/get_store.phpitem=open_z.png");
    var v74 = PIXI.Texture.from(vO14.s_l + "/get_store.phpitem=z_i.png");
    var v75 = PIXI.Texture.from(vO14.s_l + "/get_store.phpitem=z_o.png");
    var v76 = new PIXI.Sprite(v68);
    v76.buttonMode = true;
    v76.anchor.set(0.5);
    v76.x = -65;
    v76.y = 25;
    v76.interactive = true;
    v76.buttonMode = true;
    var v77 = new PIXI.Sprite(v70);
    v77.buttonMode = true;
    v77.anchor.set(0.5);
    v77.x = -33;
    v77.y = 25;
    v77.interactive = true;
    v77.buttonMode = true;
    var v78 = new PIXI.Sprite(v72);
    v78.buttonMode = true;
    v78.anchor.set(0.5);
    v78.x = -1;
    v78.y = 25;
    v78.interactive = true;
    v78.buttonMode = true;
    var v79 = new PIXI.Sprite(v75);
    v79.buttonMode = true;
    v79.anchor.set(0.5);
    v79.x = -1;
    v79.y = 25;
    v79.interactive = true;
    v79.buttonMode = true;
    var v80 = new PIXI.Sprite(v74);
    v80.buttonMode = true;
    v80.anchor.set(0.5);
    v80.x = -33;
    v80.y = 25;
    v80.interactive = true;
    v80.buttonMode = true;
    v77.alpha = 0.25;
    v76.alpha = 0.25;
    v78.alpha = 0.25;
    v80.alpha = 0.25;
    v79.alpha = 0.25;
    var v81 = new PIXI.Text("SRV WFT", {
      fontFamily: "PTSans",
      fill: "#fff009",
      fontSize: 12
    });
    v81.anchor.x = 0.5;
    v81.position.x = 110;
    var v82 = document.getElementById("game-cont");
    var v83 = document.getElementById("game-view");
    var v$ = $("#mm-params-game-mode");
    vO5.d.getElementById("game-wrap").style.display = "block";
    (function (p61, p62, p63) {
      function f21(p64, p65) {
        return f3(p64) === p65;
      }
      function f22() {
        if (f3(p62.createElement) != "function") {
          return p62.createElement(arguments[0]);
        } else if (v86) {
          return p62.createElementNS.call(p62, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p62.createElement.apply(p62, arguments);
        }
      }
      var vA2 = [];
      var vA3 = [];
      var vO17 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p66, p67) {
          var vThis = this;
          setTimeout(function () {
            p67(vThis[p66]);
          }, 0);
        },
        addTest: function (p68, p69, p70) {
          vA3.push({
            name: p68,
            fn: p69,
            options: p70
          });
        },
        addAsyncTest: function (p71) {
          vA3.push({
            name: null,
            fn: p71
          });
        }
      };
      function f23() {}
      f23.prototype = vO17;
      f23 = new f23();
      var v84 = false;
      try {
        v84 = "WebSocket" in p61 && p61.WebSocket.CLOSING === 2;
      } catch (e7) {}
      ;
      f23.addTest("websockets", v84);
      var v85 = p62.documentElement;
      var v86 = v85.nodeName.toLowerCase() === "svg";
      f23.addTest("canvas", function () {
        var vF22 = f22("canvas");
        return !!vF22.getContext && !!vF22.getContext("2d");
      });
      f23.addTest("canvastext", function () {
        return f23.canvas !== false && f3(f22("canvas").getContext("2d").fillText) == "function";
      });
      (function () {
        var v87;
        var v88;
        var v89;
        var v90;
        var v91;
        var v92;
        var v93;
        for (var v94 in vA3) {
          if (vA3.hasOwnProperty(v94)) {
            v87 = [];
            if ((v88 = vA3[v94]).name && (v87.push(v88.name.toLowerCase()), v88.options && v88.options.aliases && v88.options.aliases.length)) {
              for (v89 = 0; v89 < v88.options.aliases.length; v89++) {
                v87.push(v88.options.aliases[v89].toLowerCase());
              }
            }
            ;
            v90 = f21(v88.fn, "function") ? v88.fn() : v88.fn;
            v91 = 0;
            for (; v91 < v87.length; v91++) {
              if ((v93 = (v92 = v87[v91]).split(".")).length === 1) {
                f23[v93[0]] = v90;
              } else {
                if (!!f23[v93[0]] && !(f23[v93[0]] instanceof Boolean)) {
                  f23[v93[0]] = new Boolean(f23[v93[0]]);
                }
                f23[v93[0]][v93[1]] = v90;
              }
              vA2.push((v90 ? "" : "no-") + v93.join("-"));
            }
          }
        }
      })();
      (function (p72) {
        var v95 = v85.className;
        var v96 = f23._config.classPrefix || "";
        if (v86) {
          v95 = v95.baseVal;
        }
        if (f23._config.enableJSClass) {
          var vRegExp = RegExp("(^|\\s)" + v96 + "no-js(\\s|$)");
          v95 = v95.replace(vRegExp, "$1" + v96 + "js$2");
        }
        ;
        if (f23._config.enableClasses) {
          v95 += " " + v96 + p72.join(" " + v96);
          if (v86) {
            v85.className.baseVal = v95;
          } else {
            v85.className = v95;
          }
        }
      })(vA2);
      delete vO17.addTest;
      delete vO17.addAsyncTest;
      for (var vLN07 = 0; vLN07 < f23._q.length; vLN07++) {
        f23._q[vLN07]();
      }
      ;
      p61.Modernizr = f23;
    })(window, document);
    if (!Modernizr.websockets || !Modernizr.canvas || !Modernizr.canvastext) {
      vO5.d.getElementById("error-view").style.display = "block";
      return;
    }
    ;
    vO8.f = {
      g: function (p73, p74, p75) {
        p73.stop();
        p73.fadeIn(p74, p75);
      },
      h: function (p76, p77, p78) {
        p76.stop();
        p76.fadeOut(p77, p78);
      }
    };
    vO8.i = vO7.b("WebSocket");
    vO8.j = vO7.b("Float32Array");
    v735 = (v734 = vO7.b("PIXI")).BLEND_MODES;
    v736 = v734.WRAP_MODES;
    vO8.k = {
      l: v734.Container,
      m: v734.BaseTexture,
      n: v734.Texture,
      o: v734.Renderer,
      p: v734.Graphics,
      q: v734.Shader,
      r: v734.Rectangle,
      s: v734.Sprite,
      t: v734.Text,
      u: v734.Geometry,
      v: v734.Mesh,
      w: {
        z: v735.ADD,
        A: v735.SCREEN,
        B: v735.MULTIPLY
      },
      C: {
        D: v736.REPEAT
      },
      F: {
        G: function (p79) {
          var v97 = p79.parent;
          if (v97 != null) {
            v97.removeChild(p79);
          }
        }
      }
    };
    vO6.H = {
      I: vO5.c.runtimeHash,
      J: "https://gateway.wormate.io",
      K: "https://resources.wormate.io",
      L: "/images/linelogo-valday2024.png",
      M: "/images/guest-avatar-valday2024.png",
      N: "/images/confetti-valday2024.png",
      O: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
    };
    function f24() {
      function f25(p80) {
        var v98 = p80 + Math.floor(Math.random() * 65535) * 37;
        _0x3fba9f(_0x4bdabb.d, v98, 30);
      }
      function f26() {
        return parseInt(_0x339a99(_0x4bdabb.d)) % 37;
      }
      return function () {
        var vF26 = f26();
        console.log("init1 pSC: " + vF26);
        if (!(vF26 >= 0) || !(vF26 < _0x1edbd9.e)) {
          vF26 = Math.max(0, _0x1edbd9.e - 2);
          console.log("init2 pSC: " + vF26);
        }
        var vO18 = {};
        vUndefined2 = vO18;
        vO18.f = _0x1edbd9;
        vO18.g = false;
        vO18.i = Date.now();
        vO18.j = 0;
        vO18.k = 0;
        vO18.l = null;
        vO18.m = vUndefined;
        vO18.n = v152;
        vO18.o = null;
        vO18.p = null;
        vO18.q = null;
        vO18.r = null;
        vO18.s = null;
        vO18.t = null;
        vO18.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p81) {
              if (p81.coords !== undefined) {
                var v99 = p81.coords;
                if (v99.latitude !== undefined && v99.longitude !== undefined) {
                  vO18.l = p81;
                }
              }
            }, function (p82) {});
          }
        } catch (e8) {}
        vO18.v = function () {
          vO18.p = new _0x465145();
          vO18.q = new _0x3e967f();
          vO18.r = new _0x31335b();
          vO18.s = new _0x25ae10();
          vO18.t = new _0x5225d3();
          vO18.u = new _0x283c2e();
          vO18.o = new f27();
          vO18.o.z = new _0x3960fd(vO18.o);
          vO18.a();
        };
        vO18.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e9) {}
          vO18.o.A = function () {
            vO18.o.B();
          };
          vO18.o.C = function () {
            var v100 = vO18.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v100);
            } catch (e10) {}
            vO18.r.G(_0x31335b.AudioState.H);
            vO18.s.I(vO18.s.H.J());
          };
          vO18.o.B = function () {
            var v101;
            var v102;
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e11) {}
            if ($("body").height() >= 430) {
              vO18.f.K.c();
            }
            vO18.p.L();
            v101 = Math.floor(vO18.o.N.M);
            v102 = vO18.o.O;
            if (vO18.u.P()) {
              vO18.u.Q(function () {
                vO18.R(v101, v102);
              });
            } else {
              vO18.R(v101, v102);
            }
          };
          vO18.o.S = function (p83) {
            p83(vO18.s.H.T(), vO18.s.H.U());
          };
          vO18.u.V(function () {
            if (vO18.p.W) {
              vO18.r.G(_0x31335b.AudioState.F);
              vO18.s.I(vO18.s.F);
            }
            if (vO18.u.P()) {
              try {
                var v103 = vO18.u.X();
                ga("set", "userId", v103);
              } catch (e12) {}
            }
            if (vO18.Y() && vO18.u.P() && !vO18.u.Z()) {
              vO18.$(false, false);
              vO18.s.aa._(new _0x4359e7());
            } else {
              vO18.ba(true);
            }
          });
          vO18.p.ca(function () {
            vO18.r.G(_0x31335b.AudioState.F);
            vO18.s.I(vO18.s.F);
          });
          vO18.q.a(function () {
            vO18.o.a();
            vO18.r.a();
            vO18.s.a();
            vO18.t.a();
            vO18.p.a();
            vO18.u.a();
            if (vO18.Y() && !vO18.Z()) {
              vO18.s.aa._(new _0x4359e7());
            } else {
              vO18.ba(true);
            }
          });
        };
        vO18.da = function (p84) {
          if (vO18.u.P()) {
            var v104 = vO18.u.ea();
            $.get(vAtob + "/pub/wuid/" + v104 + "/consent/change?value=" + encodeURI(p84), function (p85) {});
          }
        };
        vO18.fa = function (p86) {
          var v105 = vO18.u.ea();
          var v106 = vO18.s.F.D();
          var v107 = vO18.s.F.ga();
          var v108 = vO18.t.ha(_0x34bccb.ia);
          var v109 = vO18.t.ha(_0x34bccb.ja);
          var v110 = vO18.t.ha(_0x34bccb.ka);
          var v111 = vO18.t.ha(_0x34bccb.la);
          var v112 = vO18.t.ha(_0x34bccb.ma);
          var vLN08 = 0;
          if (vO18.l != null) {
            vLN08 = Math.max(0, Math.min(32767, (vO18.l.coords.latitude + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (vO18.l.coords.longitude + 180) / 360 * 65536)) << 16;
          }
          _wrmxt.testSkinCustom(v108);
          let v113 = "WFT_" + (v108 > 9999 ? "0000" : v108.toString().padStart(4, 0)) + (v112 > 99999 ? "00000" : v112.toString().padStart(5, 0));
          v107 = (v107 = (v107.length >= 32 ? v107.substr(0, 16) : v107.substr(0, 16).padEnd(16)) + v113).trim().replace(/\s/g, "_");
          console.log(v107);
          if (theoKzObjects.Incognito) {
            v107 = "";
          }
          var v114 = document.getElementById("teamNickname");
          if (v114 !== null) {
            var v115 = v114.value;
            if (theoKzObjects.hideYouNameInMinimap) {
              vO10.nickname = v115;
            } else {
              vO10.nickname = v107;
            }
          } else {
            console.warn("âš ï¸ Advertencia: No se encontrÃ³ el elemento 'teamNickname'.");
          }
          var v116 = vAtob + "/pub/wuid/" + v105 + "/start?gameMode=" + encodeURI(v106) + "&gh=" + vLN08 + "&nickname=" + encodeURI(v107) + "&skinId=" + _wrmxt.validInput(v108) + "&eyesId=" + encodeURI(v109) + "&mouthId=" + encodeURI(v110) + "&glassesId=" + encodeURI(v111) + "&hatId=" + encodeURI(v112);
          console.log("urlRequest: " + v116);
          $.get(v116, function (p87) {
            p86(p87.server_url);
          });
        };
        vO18.na = function () {
          vF26++;
          console.log("start pSC: " + vF26);
          if (!vO18.f.oa && vF26 >= vO18.f.e) {
            vO18.s.I(vO18.s.pa);
            vO18.r.G(_0x31335b.AudioState.qa);
            vO18.f.ra.b();
          } else {
            f25(vF26);
            vO18.sa();
            lxpdservertext.text = "";
          }
        };
        vO18.sa = function (p88) {
          lxpdkillcount = 0;
          lxpdhscount = 0;
          if (vO18.o.ta()) {
            vO18.s.I(vO18.s.ua);
            vO18.r.G(_0x31335b.AudioState.ua);
            var v117 = vO18.s.F.D();
            _0x3fba9f(_0x4bdabb.va, v117, 30);
            console.log("save gm: " + v117);
            var v118 = vO18.s.xa.wa();
            _0x3fba9f(_0x4bdabb.ya, v118, 30);
            console.log("save sPN: " + v118);
            if (vO18.u.P()) {
              vO18.fa(function (p89) {
                lxpdlastserver = p88 || p89;
                vO10.wssServer = lxpdlastserver;
                vO18.o.za(p88 || p89, vO18.u.ea());
              });
            } else {
              var v119 = vO18.s.F.ga();
              _0x3fba9f(_0x4bdabb.Aa, v119, 30);
              var v120 = vO18.t.ha(_0x34bccb.ia);
              _0x3fba9f(_0x4bdabb.Ba, v120, 30);
              vO18.fa(function (p90) {
                lxpdlastserver = p88 || p90;
                vO10.wssServer = lxpdlastserver;
                vO18.o.Ca(p88 || p90, v119, v120);
              });
            }
          }
        };
        vO18.R = function (p91, p92) {
          var v121 = vO18.s.F.ga();
          vO18.s.H.Da(p91, p92, v121);
          vO18.r.G(_0x31335b.AudioState.Ea);
          vO18.s.I(vO18.s.H.Fa());
        };
        vO18.Ga = function () {
          if (!vO18.Ha()) {
            return vO18.t.Ia();
          }
          var vParseInt4 = parseInt(_0x339a99(_0x4bdabb.Ba));
          if (vParseInt4 != null && vO18.t.Ja(vParseInt4, _0x34bccb.ia)) {
            return vParseInt4;
          } else {
            return vO18.t.Ia();
          }
        };
        vO18.Ka = function (p93) {
          _0x3fba9f(_0x4bdabb.La, !!p93, 1800);
        };
        vO18.Ha = function () {
          return _0x339a99(_0x4bdabb.La) === "true";
        };
        vO18.ba = function (p94) {
          if (p94 != vO18.g) {
            vO18.g = p94;
            var v122 = v122 || {};
            v122.consented = p94;
            v122.gdprConsent = p94;
            vO18.f.Ma.a();
            vO18.f.K.a();
            vO18.f.ra.a(function (p95) {
              if (p95) {
                f25(vF26 = 0);
              }
              vO18.sa();
            });
          }
        };
        vO18.$ = function (p96, p97) {
          _0x3fba9f(_0x4bdabb.Na, p96 ? "true" : "false");
          if (p97) {
            vO18.da(p96);
          }
          vO18.ba(p96);
        };
        vO18.Z = function () {
          return _0x339a99(_0x4bdabb.Na) === "true";
        };
        vO18.Y = function () {
          try {
            return !!window.isIPInEEA || vO18.l != null && !!_0x27e576.Oa(vO18.l.coords.latitude, vO18.l.coords.longitude);
          } catch (e13) {
            return true;
          }
        };
        vO18.Pa = function () {
          vO18.j = Date.now();
          vO18.k = vO18.j - vO18.i;
          vO18.o.Qa(vO18.j, vO18.k);
          vO18.s.Qa(vO18.j, vO18.k);
          vO18.i = vO18.j;
        };
        vO18.Ra = function () {
          vO18.s.Ra();
        };
        return vO18;
      }();
    }
    
    var vAtob = "https://gateway.wormate.io";
    var vAtob2 = "https://resources.wormate.io";
    var v152 = window.I18N_LANG;
    if (!v152) {
      v152 = "en";
    }
    var vUndefined = undefined;
    switch (v152) {
      case "uk":
        vUndefined = "uk_UA";
        break;
      case "de":
        vUndefined = "de_DE";
        break;
      case "fr":
        vUndefined = "fr_FR";
        break;ءغغغغ
      case "ru":
        vUndefined = "ru_RU";
        break;
      case "es":
        vUndefined = "es_ES";
        break;
      default:
        vUndefined = "en_US";
    }
    moment.locale(vUndefined);
    var v153;
    var v154;
    var v155;
    var v156;
    var vUndefined2 = undefined;
    v154 = (v153 = {
      Yb: eval("PIXI")
    }).Yb["BLEND_MODES"];
    v155 = v153.Yb["WRAP_MODES"];
    var vO20 = {
      Zb: v153.Yb["Container"],
      $b: v153.Yb["BaseTexture"],
      _b: v153.Yb["Texture"],
      ac: v153.Yb["Renderer"],
      bc: v153.Yb["Graphics"],
      cc: v153.Yb["Shader"],
      dc: v153.Yb["Rectangle"],
      ec: v153.Yb["Sprite"],
      fc: v153.Yb["Text"],
      gc: v153.Yb["Geometry"],
      hc: v153.Yb["Mesh"],
      ic: {
        jc: v154["ADD"]
      },
      kc: {
        lc: v155["REPEAT"],
        CLAMP: v153.Yb.WRAP_MODES.CLAMP
      }
    };
    var v157 = Math.PI * 2;
    v156 = ["getInt8", "getInt16", "getInt32", "getFloat32", "getFloat64"];
    DataView.prototype.mc = function (p130) {
      return this[v156[0]](p130);
    };
    DataView.prototype.nc = function (p131) {
      return this[v156[1]](p131);
    };
    DataView.prototype.oc = function (p132) {
      return this[v156[2]](p132);
    };
    DataView.prototype.pc = function (p133) {
      return this[v156[3]](p133);
    };
    DataView.prototype.qc = function (p134) {
      return this[v156[4]](p134);
    };
    vO6.H.P = ((v737 = vO5.c.I18N_LANG) || (v737 = "en"), v737);
    vO6.H.Q = function () {
      var v158;
      switch (vO6.H.P) {
        case "uk":
          v158 = "uk_UA";
          break;
        case "de":
          v158 = "de_DE";
          break;
        case "fr":
          v158 = "fr_FR";
          break;
        case "es":
          v158 = "es_ES";
          break;
        default:
          v158 = "en_US";
      }
      ;
      return v158;
    }();
    moment.locale(vO6.H.Q);
    ooo = null;
    vO6.S = 6.283185307179586;
    vO6.T = 3.141592653589793;
    v738 = vO5.c.I18N_MESSAGES;
    vO7.U = function (p135) {
      return v738[p135];
    };
    vO7.V = function (p136) {
      if (p136[vO6.H.P]) {
        return p136[vO6.H.P];
      } else if (p136.en) {
        return p136.en;
      } else {
        return p136.x;
      }
    };
    vO7.W = function (p137) {
      return encodeURI(p137);
    };
    vO7.X = function (p138, p139) {
      return setInterval(p138, p139);
    };
    vO7.Y = function (p140, p141) {
      return setTimeout(p140, p141);
    };
    vO7.Z = function (p142) {
      clearTimeout(p142);
    };
    vO7.$ = function (p143) {
      var v159 = (vO7._(p143) % 60).toString();
      var v160 = (vO7._(p143 / 60) % 60).toString();
      var v161 = (vO7._(p143 / 3600) % 24).toString();
      var v162 = vO7._(p143 / 86400).toString();
      var v163 = vO7.U("util.time.days");
      var v164 = vO7.U("util.time.hours");
      var v165 = vO7.U("util.time.min");
      var v166 = vO7.U("util.time.sec");
      if (v162 > 0) {
        return v162 + " " + v163 + " " + v161 + " " + v164 + " " + v160 + " " + v165 + " " + v159 + " " + v166;
      } else if (v161 > 0) {
        return v161 + " " + v164 + " " + v160 + " " + v165 + " " + v159 + " " + v166;
      } else if (v160 > 0) {
        return v160 + " " + v165 + " " + v159 + " " + v166;
      } else {
        return v159 + " " + v166;
      }
    };
    vO7.aa = function (p144) {
      if (p144.includes("href")) {
        return p144.replaceAll("href", "target=\"_black\" href");
      } else {
        return p144;
      }
    };
    vO7.ba = function (p145, p146, p147) {
      var v167 = vO5.d.createElement("script");
      var v168 = true;
      if (f3(p146) !== "undefined" && p146 !== null) {
        if (f3(p146.id) !== "undefined") {
          v167.id = p146.id;
        }
        if (f3(p146.async) !== "undefined" && p146.async) {
          v167.async = "async";
        }
        if (f3(p146.defer) !== "undefined" && p146.defer) {
          v167.defer = "defer";
        }
        if (f3(p146.crossorigin) !== "undefined") {
          v167.crossorigin = p146.crossorigin;
        }
      }
      v167.type = "text/javascript";
      v167.src = p145;
      if (p147) {
        v167.onload = v167.onreadystatechange = function () {
          v168 = false;
          try {
            p147();
          } catch (e15) {}
          ;
          v167.onload = v167.onreadystatechange = null;
        };
      }
      (vO5.d.head || vO5.d.getElementsByTagName("head")[0]).appendChild(v167);
    };
    vO7.ca = function (p148, p149) {
      var vP149 = p149;
      vP149.prototype = Object.create(p148.prototype);
      vP149.prototype.constructor = vP149;
      vP149.parent = p148;
      return vP149;
    };
    vO7.da = function (p150) {
      if ((p150 %= vO6.S) < 0) {
        return p150 + vO6.S;
      } else {
        return p150;
      }
    };
    vO7.ea = function (p151, p152, p153) {
      return vO7.fa(p153, p151, p152);
    };
    vO7.fa = function (p154, p155, p156) {
      if (p154 > p156) {
        return p156;
      } else if (p154 < p155) {
        return p155;
      } else if (Number.isFinite(p154)) {
        return p154;
      } else {
        return (p155 + p156) * 0.5;
      }
    };
    vO7.ga = function (p157, p158, p159, p160) {
      if (p158 > p157) {
        return vO7.ha(p158, p157 + p159 * p160);
      } else {
        return vO7.ia(p158, p157 - p159 * p160);
      }
    };
    vO7.ja = function (p161, p162, p163, p164, p165) {
      return p162 + (p161 - p162) * Math.pow(1 - p164, p163 / p165);
    };
    vO7.ka = function (p166, p167, p168) {
      return p166 - (p166 - p167) * p168;
    };
    vO7.la = function (p169, p170) {
      return Math.sqrt(p169 * p169 + p170 * p170);
    };
    vO7.ma = function () {
      return Math.random();
    };
    vO7._ = function (p171) {
      return Math.floor(p171);
    };
    vO7.na = function (p172) {
      return Math.abs(p172);
    };
    vO7.ha = function (p173, p174) {
      return Math.min(p173, p174);
    };
    vO7.ia = function (p175, p176) {
      return Math.max(p175, p176);
    };
    vO7.oa = function (p177) {
      return Math.sin(p177);
    };
    vO7.pa = function (p178) {
      return Math.cos(p178);
    };
    vO7.qa = function (p179) {
      return Math.sqrt(p179);
    };
    vO7.ra = function (p180, p181) {
      return Math.pow(p180, p181);
    };
    vO7.sa = function (p182) {
      return Math.atan(p182);
    };
    vO7.ta = function (p183, p184) {
      return Math.atan2(p183, p184);
    };
    vO7.ua = function (p185, p186, p187, p188) {
      var v169 = p186 + p188;
      if (p185 == null) {
        throw TypeError();
      }
      ;
      var v170 = p185.length >>> 0;
      var v171 = p187 >> 0;
      var v172 = v171 < 0 ? Math.max(v170 + v171, 0) : Math.min(v171, v170);
      var v173 = p186 >> 0;
      var v174 = v173 < 0 ? Math.max(v170 + v173, 0) : Math.min(v173, v170);
      var v175 = v169 === undefined ? v170 : v169 >> 0;
      var v176 = Math.min((v175 < 0 ? Math.max(v170 + v175, 0) : Math.min(v175, v170)) - v174, v170 - v172);
      var vLN13 = 1;
      for (v174 < v172 && v172 < v174 + v176 && (vLN13 = -1, v174 += v176 - 1, v172 += v176 - 1); v176 > 0;) {
        if (v174 in p185) {
          p185[v172] = p185[v174];
        } else {
          delete p185[v172];
        }
        v174 += vLN13;
        v172 += vLN13;
        v176--;
      }
      ;
      return p185;
    };
    vO7.va = function (p189, p190) {
      return p189 + (p190 - p189) * vO7.ma();
    };
    vO7.wa = function (p191) {
      return p191[parseInt(vO7.ma() * p191.length)];
    };
    v739 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].map(function (p192) {
      return p192.charCodeAt(0);
    });
    vO7.xa = function (p193) {
      if (f3(p193) == "undefined") {
        p193 = 16;
      }
      var vLS = "";
      for (var vLN019 = 0; vLN019 < p193; vLN019++) {
        vLS += String.fromCharCode(v739[vO7._(vO7.ma() * v739.length)]);
      }
      ;
      return vLS;
    };
    vO7.ya = function (p194, p195, p196) {
      var v177 = p196 * (1 - p195 * 0.5);
      var v178 = Math.min(v177, 1 - v177);
      return vO7.za(p194, v178 ? (p196 - v177) / v178 : 0, v177);
    };
    vO7.za = function (p197, p198, p199) {
      var v179 = (1 - vO7.na(p199 * 2 - 1)) * p198;
      var v180 = v179 * (1 - vO7.na(p197 / 60 % 2 - 1));
      var v181 = p199 - v179 / 2;
      if (p197 >= 0 && p197 < 60) {
        return [v181 + v179, v181 + v180, v181];
      } else if (p197 >= 60 && p197 < 120) {
        return [v181 + v180, v181 + v179, v181];
      } else if (p197 >= 120 && p197 < 180) {
        return [v181, v181 + v179, v181 + v180];
      } else if (p197 >= 180 && p197 < 240) {
        return [v181, v181 + v180, v181 + v179];
      } else if (p197 >= 240 && p197 < 300) {
        return [v181 + v180, v181, v181 + v179];
      } else {
        return [v181 + v179, v181, v181 + v180];
      }
    };
    vO7.Aa = function (p200, p201, p202) {
      $.get(p200).fail(p201).done(p202);
    };
    vO7.Ba = function (p203, p204, p205, p206) {
      var vO21 = {
        type: "GET",
        url: p203
      };
      var vO22 = {
        responseType: "arraybuffer"
      };
      vO22.onprogress = function (p207) {
        if (p207.lengthComputable) {
          p206(p207.loaded / p207.total * 100);
        }
      };
      vO21.xhrFields = vO22;
      $.ajax(vO21).fail(p204).done(p205);
    };
    vO7.Ca = function () {
      return Date.now();
    };
    vO7.Da = function (p208, p209) {
      for (var v182 in p208) {
        if (p208.hasOwnProperty(v182)) {
          p209(v182, p208[v182]);
        }
      }
    };
    vO7.Ea = function (p210) {
      for (var v183 = p210.length - 1; v183 > 0; v183--) {
        var v184 = vO7._(vO7.ma() * (v183 + 1));
        var v185 = p210[v183];
        p210[v183] = p210[v184];
        p210[v184] = v185;
      }
      ;
      return p210;
    };
    vO5.Fa = vO7.b("ArrayBuffer");
    vO5.Ga = vO7.b("DataView");
    vO5.Ha = function () {
      function f31(p211) {
        this.Ia = p211;
        this.Ja = 0;
      }
      var vLSGetInt8 = "getInt8";
      f31.prototype.Ka = function () {
        var v186 = this.Ia[vLSGetInt8](this.Ja);
        this.Ja += 1;
        return v186;
      };
      var vLSGetInt16 = "getInt16";
      f31.prototype.La = function () {
        var v187 = this.Ia[vLSGetInt16](this.Ja);
        this.Ja += 2;
        return v187;
      };
      var vLSGetInt32 = "getInt32";
      f31.prototype.Ma = function () {
        var v188 = this.Ia[vLSGetInt32](this.Ja);
        this.Ja += 4;
        return v188;
      };
      var vLSGetFloat32 = "getFloat32";
      f31.prototype.Na = function () {
        var v189 = this.Ia[vLSGetFloat32](this.Ja);
        this.Ja += 4;
        return v189;
      };
      return f31;
    }();
    vO5.Oa = function () {
      function f32(p212) {
        this.Ia = p212;
        this.Ja = 0;
      }
      var vLSSetInt8 = "setInt8";
      f32.prototype.Pa = function (p213) {
        this.Ia[vLSSetInt8](this.Ja, p213);
        this.Ja += 1;
      };
      var vLSSetInt16 = "setInt16";
      f32.prototype.Qa = function (p214) {
        this.Ia[vLSSetInt16](this.Ja, p214);
        this.Ja += 2;
      };
      return f32;
    }();
    vO7.Ra = function () {
      var v190 = false;
      function f33() {}
      var vO23 = {};
      var vLS1eaom01c3pxu9wd3 = "1eaom01c3pxu9wd3";
      var v$2 = $("#" + vLS1eaom01c3pxu9wd3);
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      var v$3 = $("#" + vLSJDHnkHtYwyXyVgG9);
      $("#adbl-continue").click(function () {
        v$3.fadeOut(500);
        f33(false);
      });
      vO23.Sa = function (p215) {
        f33 = p215;
        if (!v190) {
          try {
            aiptag.cmd.player.push(function () {
              var vO24 = {
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false
              };
              vO24.LOADING_TEXT = "loading advertisement";
              vO24.PREROLL_ELEM = function () {
                return vO5.d.getElementById(vLS1eaom01c3pxu9wd3);
              };
              vO24.AIP_COMPLETE = function (p216) {
                f33(true);
                vO8.f.h(v$2, 1);
                vO8.f.h(v$3, 1);
                try {
                  ga("send", "event", "preroll", vO6.H.I + "_complete");
                } catch (e16) {}
              };
              vO24.AIP_REMOVE = function () {};
              aiptag.adplayer = new aipPlayer(vO24);
            });
            v190 = true;
          } catch (e17) {}
        }
      };
      vO23.Ta = function () {
        if (f3(aiptag.adplayer) !== "undefined") {
          try {
            ga("send", "event", "preroll", vO6.H.I + "_request");
          } catch (e18) {}
          ;
          vO8.f.g(v$2, 1);
          if (!vO9.on) {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer.startPreRoll();
            });
          }
        } else {
          try {
            ga("send", "event", "antiadblocker", vO6.H.I + "_start");
          } catch (e19) {}
          ;
          (function f34() {
            $("#adbl-1").text(vO7.U("index.game.antiadblocker.msg1"));
            $("#adbl-2").text(vO7.U("index.game.antiadblocker.msg2"));
            $("#adbl-3").text(vO7.U("index.game.antiadblocker.msg3"));
            $("#adbl-4").text(vO7.U("index.game.antiadblocker.msg4").replace("{0}", 10));
            $("#adbl-continue span").text(vO7.U("index.game.antiadblocker.continue"));
            vO8.f.h($("#adbl-continue"), 1);
            vO8.f.g(v$3, 500);
            var vLN102 = 10;
            for (var vLN020 = 0; vLN020 < 10; vLN020++) {
              vO7.Y(function () {
                vLN102--;
                $("#adbl-4").text(vO7.U("index.game.antiadblocker.msg4").replace("{0}", vLN102));
                if (vLN102 === 0) {
                  try {
                    ga("send", "event", "antiadblocker", vO6.H.I + "_complete");
                  } catch (e20) {}
                  ;
                  vO8.f.g($("#adbl-continue"), 200);
                }
              }, (vLN020 + 1) * 1000);
            }
          })();
        }
      };
      return vO23;
    };
    vO7.Ua = function (p217, p218) {
      var v$4 = $("#" + p217);
      var vP218 = p218;
      var vO25 = {};
      var v191 = false;
      vO25.Sa = function () {
        if (!v191) {
          v$4.empty();
          v$4.append("<div id='" + vP218 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", vO6.H.I + "_display");
            } catch (e21) {}
            ;
            if (!vO9.on) {
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(vP218);
              });
            }
            v191 = true;
          } catch (e22) {}
        }
      };
      vO25.Va = function () {
        try {
          try {
            ga("send", "event", "banner", vO6.H.I + "_refresh");
          } catch (e23) {}
          ;
          if (!vO9.on) {
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP218);
            });
          }
        } catch (e24) {}
      };
      return vO25;
    };
    vO5.Wa = function () {
      function f35(p219, p220, p221, p222, p223, p224, p225, p226, p227, p228) {
        this.Xa = p219;
        this.Ya = p220;
        this.Za = null;
        this.$a = false;
        this._a = p221;
        this.ab = p222;
        this.bb = p223;
        this.cb = p224;
        this.db = p225 || (p227 || p223) / 2;
        this.eb = p226 || (p228 || p224) / 2;
        this.fb = p227 || p223;
        this.gb = p228 || p224;
        this.hb = 0.5 - (this.db - this.fb * 0.5) / this.bb;
        this.ib = 0.5 - (this.eb - this.gb * 0.5) / this.cb;
        this.jb = this.bb / this.fb;
        this.kb = this.cb / this.gb;
      }
      f35.lb = function () {
        return new f35("", null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      f35.mb = function (p229, p230, p231) {
        return new f35(p229, p230, p231.x, p231.y, p231.w, p231.h, p231.px, p231.py, p231.pw, p231.ph);
      };
      f35.prototype.nb = function () {
        if (!this.$a) {
          if (this.Ya != null) {
            this.Za = new vO8.k.n(this.Ya, new vO8.k.r(this._a, this.ab, this.bb, this.cb));
          }
          this.$a = true;
        }
        return this.Za;
      };
      f35.prototype.ob = function () {
        if (this.Za != null) {
          this.Za.destroy();
        }
      };
      return f35;
    }();
    vO5.pb = function () {
      function f36(p232, p233, p234, p235, p236, p237, p238, p239, p240, p241, p242, p243, p244, p245, p246, p247, p248, p249) {
        this.qb = p232;
        this.rb = p233;
        this.sb = p234;
        this.tb = p235;
        this.ub = p236;
        this.vb = p237;
        this.wb = p238;
        this.xb = p239;
        this.yb = p240;
        this.zb = p241;
        this.Ab = p242;
        this.Bb = p243;
        this.Cb = p244;
        this.Db = p245;
        this.Eb = p246;
        this.Fb = p247;
        this.Gb = p248;
        this.Hb = p249;
      }
      f36.prototype.ob = function () {
        for (var vLN021 = 0; vLN021 < this.qb.length; vLN021++) {
          this.qb[vLN021].dispose();
          this.qb[vLN021].destroy();
        }
        ;
        this.qb = [];
        for (var vLN022 = 0; vLN022 < this.rb.length; vLN022++) {
          this.rb[vLN022].ob();
        }
        ;
        this.rb = [];
      };
      f36.lb = function () {
        var v192 = new f36.Ib(vO5.Kb.Jb, vO5.Kb.Jb);
        var v193 = new f36.Lb("#ffffff", [vO5.Kb.Jb], [vO5.Kb.Jb]);
        return new f36([], [], {}, v192, {}, new f36.Mb(vO5.Kb.Jb), {}, v193, {}, new f36.Nb("", v193, v192), {}, new f36.Ob([vO5.Kb.Jb]), {}, new f36.Ob([vO5.Kb.Jb]), {}, new f36.Ob([vO5.Kb.Jb]), {}, new f36.Ob([vO5.Kb.Jb]));
      };
      f36.Pb = function (p250, p251, p252, p253) {
        var v194 = new f36.Ib(vO5.Kb.Jb, vO5.Kb.Jb);
        var v195 = new f36.Lb("#ffffff", [p250], [p251]);
        return new f36([], [], {}, v194, {}, new f36.Mb(vO5.Kb.Jb), {}, v195, {}, new f36.Nb("", v195, v194), {}, new f36.Ob([p252]), {}, new f36.Ob([p253]), {}, new f36.Ob([vO5.Kb.Jb]), {}, new f36.Ob([vO5.Kb.Jb]));
      };
      f36.Qb = function (p254, p255, p256, p257) {
        var vO26 = {};
        vO7.Da(p254.colorDict, function (p258, p259) {
          vO26[p258] = "#" + p259;
        });
        var vO27 = {};
        for (var vLN023 = 0; vLN023 < p254.skinArrayDict.length; vLN023++) {
          var v196 = p254.skinArrayDict[vLN023];
          vO27[v196.id] = new f36.Lb(vO26[v196.prime], v196.base.map(function (p260) {
            return p255[p260];
          }), v196.glow.map(function (p261) {
            return p255[p261];
          }));
        }
        ;
        var v197;
        var v198 = p254.skinUnknown;
        v197 = new f36.Lb(vO26[v198.prime], v198.base.map(function (p262) {
          return p255[p262];
        }), v198.glow.map(function (p263) {
          return p255[p263];
        }));
        var vO28 = {};
        vO7.Da(p254.eyesDict, function (p264, p265) {
          vO28[parseInt(p264)] = new f36.Ob(p265.base.map(function (p266) {
            return p255[p266.region];
          }));
        });
        var v199 = new f36.Ob(p254.eyesUnknown.base.map(function (p267) {
          return p255[p267.region];
        }));
        var vO29 = {};
        vO7.Da(p254.mouthDict, function (p268, p269) {
          vO29[parseInt(p268)] = new f36.Ob(p269.base.map(function (p270) {
            return p255[p270.region];
          }));
        });
        var v200 = new f36.Ob(p254.mouthUnknown.base.map(function (p271) {
          return p255[p271.region];
        }));
        var vO30 = {};
        vO7.Da(p254.hatDict, function (p272, p273) {
          vO30[parseInt(p272)] = new f36.Ob(p273.base.map(function (p274) {
            return p255[p274.region];
          }));
        });
        var v201 = new f36.Ob(p254.hatUnknown.base.map(function (p275) {
          return p255[p275.region];
        }));
        var vO31 = {};
        vO7.Da(p254.glassesDict, function (p276, p277) {
          vO31[parseInt(p276)] = new f36.Ob(p277.base.map(function (p278) {
            return p255[p278.region];
          }));
        });
        var v202 = new f36.Ob(p254.glassesUnknown.base.map(function (p279) {
          return p255[p279.region];
        }));
        var vO32 = {};
        vO7.Da(p254.portionDict, function (p280, p281) {
          vO32[p280 = parseInt(p280)] = new f36.Ib(p255[p281.base], p255[p281.glow]);
        });
        var v203;
        var v204 = p254.portionUnknown;
        v203 = new f36.Ib(p255[v204.base], p255[v204.glow]);
        var vO33 = {};
        vO7.Da(p254.abilityDict, function (p282, p283) {
          vO33[p282 = parseInt(p282)] = new f36.Mb(p255[p283.base]);
        });
        var v205;
        var v206 = p254.abilityUnknown;
        v205 = new f36.Mb(p255[v206.base]);
        var vO34 = {};
        vO7.Da(p254.teamDict, function (p284, p285) {
          vO34[p284 = parseInt(p284)] = new f36.Nb(p285.title, new f36.Lb(vO26[p285.skin.prime], null, p285.skin.glow.map(function (p286) {
            return p255[p286];
          })), new f36.Ib(null, p255[p285.portion.glow]));
        });
        var v207 = new f36.Nb({}, v197, v203);
        return new f36(p256, p257, vO32, v203, vO33, v205, vO27, v197, vO34, v207, vO28, v199, vO29, v200, vO30, v201, vO31, v202);
      };
      f36.prototype.Rb = function (p287) {
        var v208 = vO7.Ea(Object.keys(this.wb)).slice(0, p287);
        var v209 = vO7.Ea(Object.keys(this.Ab)).slice(0, p287);
        var v210 = vO7.Ea(Object.keys(this.Cb)).slice(0, p287);
        var v211 = vO7.Ea(Object.keys(this.Eb)).slice(0, p287);
        var v212 = vO7.Ea(Object.keys(this.Gb)).slice(0, p287);
        var vA4 = [];
        for (var vLN024 = 0; vLN024 < p287; vLN024++) {
          var v213 = v208.length > 0 ? v208[vLN024 % v208.length] : 0;
          var v214 = v209.length > 0 ? v209[vLN024 % v209.length] : 0;
          var v215 = v210.length > 0 ? v210[vLN024 % v210.length] : 0;
          var v216 = v211.length > 0 ? v211[vLN024 % v211.length] : 0;
          var v217 = v212.length > 0 ? v212[vLN024 % v212.length] : 0;
          vA4.push(new vO5.Sb(v213, v214, v215, v216, v217));
        }
        ;
        return vA4;
      };
      f36.prototype.Tb = function (p288) {
        if (this.wb.hasOwnProperty(p288)) {
          return this.wb[p288];
        } else {
          return this.xb;
        }
      };
      f36.prototype.Ub = function (p289) {
        if (this.yb.hasOwnProperty(p289)) {
          return this.yb[p289];
        } else {
          return this.zb;
        }
      };
      f36.prototype.Vb = function (p290) {
        if (this.Ab.hasOwnProperty(p290)) {
          return this.Ab[p290];
        } else {
          return this.Bb;
        }
      };
      f36.prototype.Wb = function (p291) {
        if (this.Cb.hasOwnProperty(p291)) {
          return this.Cb[p291];
        } else {
          return this.Db;
        }
      };
      f36.prototype.Xb = function (p292) {
        if (this.Gb.hasOwnProperty(p292)) {
          return this.Gb[p292];
        } else {
          return this.Hb;
        }
      };
      f36.prototype.Yb = function (p293) {
        if (this.Eb.hasOwnProperty(p293)) {
          return this.Eb[p293];
        } else {
          return this.Fb;
        }
      };
      f36.prototype.Zb = function (p294) {
        if (this.sb.hasOwnProperty(p294)) {
          return this.sb[p294];
        } else {
          return this.tb;
        }
      };
      f36.prototype.$b = function (p295) {
        if (this.ub.hasOwnProperty(p295)) {
          return this.ub[p295];
        } else {
          return this.vb;
        }
      };
      f36.Nb = function f37(p296, p297, p298) {
        this._b = p296;
        this.ac = p297;
        this.bc = p298;
      };
      f36.Lb = function f38(p299, p300, p301) {
        this.cc = p299;
        this.dc = p300;
        this.ec = p301;
      };
      f36.Ob = function f39(p302) {
        this.dc = p302;
      };
      f36.Ib = function f40(p303, p304) {
        this.dc = p303;
        this.ec = p304;
      };
      f36.Mb = function f41(p305) {
        this.dc = p305;
      };
      return f36;
    }();
    vO5.Kb = function () {
      function f42() {
        var v218 = vO8.k.m.from("/images/wear-ability.png");
        this.fc = new vO5.Wa("magnet_ability", v218, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.gc = new vO5.Wa("velocity_ability", v218, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.hc = new vO5.Wa("flex_ability", v218, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        
        // Zigzag 0 - Default zigzag ability
        var zigzag0 = vO8.k.m.from("https://wormup.in/assets/images/zigzagability.png");
        this.pwrFlex0 = new vO5.Wa("flex_ability", zigzag0, 158, 4, 87, 74, 203, 63.5, 128, 128);
        
        // Zigzag 1 - Custom zigzag ability
        var zigzag1 = vO8.k.m.from("https://i.imgur.com/LFiCido.png");
        this.pwrFlex1 = new vO5.Wa("flex_ability", zigzag1, 156, 140, 87, 60, 170, 128.5, 128, 128);
        
        // Zigzag 2 - Custom zigzag ability
        var zigzag2 = vO8.k.m.from("https://i.imgur.com/LvJ1RxC.png");
        this.pwrFlex2 = new vO5.Wa("flex_ability2", zigzag2, 156, 4, 87, 74, 285, 63.5, 128, 128);
        
        // Zigzag 3 - Custom zigzag ability
        var zigzag3 = vO8.k.m.from("https://wormup.in/assets/images/zigzagability1.png");
        this.pwrFlex3 = new vO5.Wa("flex_ability", zigzag3, 158, 4, 87, 74, 203, 63.5, 128, 128);
        
        var v219 = vO8.k.m.from("https://i.imgur.com/LFiCido.png");
        this.pwrFlex = new vO5.Wa("flex_ability", v219, 156, 140, 87, 60, 170, 128.5, 128, 128);
        var v220;
        var v221 = vO8.k.m.from("/images/def-look.png");
        var v222 = new vO5.Wa("def_eyes", v221, 0, 0, 42, 80, 75, 64, 128, 128);
        var v223 = new vO5.Wa("def_mouth", v221, 46, 0, 20, 48, 109, 63, 128, 128);
        var v224 = new vO5.Wa("def_skin_glow", v221, 70, 0, 32, 32, 0, 0, 0, 0);
        var v225 = new vO5.Wa("def_skin_base", v221, 46, 52, 64, 64, 0, 0, 0, 0);
        var v226 = vO5.pb.Pb(v225, v224, v222, v223);
        this.ic = new vO5.jc({}, v226);
        this.kc = -10000;
        this.lc = -10000;
        this.mc = ((v220 = vO5.c.document.createElement("canvas")).width = 80, v220.height = 80, {
          nc: v220,
          oc: v220.getContext("2d"),
          Za: new vO8.k.n(vO8.k.m.from(v220))
        });
        this.pc = null;
        this.qc = [];
      }
      f42.Jb = vO5.Wa.lb();
      f42.prototype.Sa = function () {};
      f42.prototype.rc = function (p306, p307, p308) {
        var vThis2 = this;
        var v227 = this.ic.sc();
        if (v227 > 0 && vO7.Ca() - this.kc < 1200000) {
          if (p306 != null) {
            p306();
          }
          return;
        }
        ;
        if (this.pc != null && !this.pc.tc()) {
          if (vO7.Ca() - this.kc < 300000) {
            if (p306 != null) {
              p306();
            }
            return;
          }
          ;
          this.pc.uc();
          this.pc = null;
        }
        ;
        var v228 = new vO5.vc(v227);
        v228.wc(function (p309, p310) {
          if (v228 === vThis2.pc && p308 != null) {
            p308(p309, p310);
          }
        });
        v228.xc(function (p311) {
          if (v228 === vThis2.pc && p307 != null) {
            p307(p311);
          }
        });
        v228.yc(function () {
          if (v228 === vThis2.pc && p307 != null) {
            p307(Error());
          }
        });
        v228.zc(function () {
          if (v228 === vThis2.pc && p306 != null) {
            p306();
          }
        });
        v228.Ac(function (p312) {
          if (v228 === vThis2.pc) {
            vThis2.lc = vO7.Ca();
            vThis2.pc = null;
            vThis2.Bc();
            vThis2.ic.Cc().ob();
            vThis2.ic = p312;
            if (p306 != null) {
              p306();
            }
            vThis2.Dc();
            return;
          }
          ;
          try {
            p312.Cc().ob();
          } catch (e25) {}
        });
        v228.Ec();
        this.kc = vO7.Ca();
        this.pc = v228;
      };
      f42.prototype.Bc = function () {};
      f42.prototype.Fc = function () {
        return this.ic.sc() > 0;
      };
      f42.prototype.Gc = function () {
        return this.ic.Hc();
      };
      f42.prototype.Ic = function () {
        return this.mc;
      };
      f42.prototype.Jc = function (p313) {
        this.qc.push(p313);
      };
      f42.prototype.Dc = function () {
        for (var vLN025 = 0; vLN025 < this.qc.length; vLN025++) {
          this.qc[vLN025]();
        }
      };
      f42.prototype.Cc = function () {
        return this.ic.Cc();
      };
      return f42;
    }();
    vO5.Kc = function () {
      function f43(p314) {
        this.Lc = p314;
      }
      f43.prototype.Mc = function (p315) {
        return this.Lc[p315];
      };
      f43.Nc = function () {
        function f44() {
          this.Oc = [];
        }
        f44.prototype.Pc = function (p316, p317) {
          for (var vLN026 = 0; vLN026 < this.Oc.length; vLN026++) {
            if (this.Oc[vLN026].Qc === p316) {
              throw Error();
            }
          }
          ;
          this.Oc.push(new f43.Rc(p316, p317));
          return this;
        };
        f44.prototype.Sc = function () {
          var vLN027 = 0;
          for (var vLN028 = 0; vLN028 < this.Oc.length; vLN028++) {
            vLN027 += this.Oc[vLN028].Tc;
          }
          ;
          var vO35 = {};
          var vLN029 = 0;
          for (var vLN030 = 0; vLN030 < this.Oc.length; vLN030++) {
            var v229 = this.Oc[vLN030];
            v229.Tc = v229.Tc / vLN027;
            v229.Uc = vLN029;
            v229.Vc = vLN029 + v229.Tc;
            vLN029 = v229.Vc;
            vO35[v229.Qc] = v229;
          }
          ;
          return new f43(vO35);
        };
        return f44;
      }();
      f43.Rc = function () {
        function f45(p318, p319) {
          this.Qc = p318;
          this.Tc = p319;
          this.Uc = 0;
          this.Vc = 0;
        }
        f45.prototype.Wc = function (p320) {
          return this.Uc + (this.Vc - this.Uc) * p320;
        };
        return f45;
      }();
      return f43;
    }();
    vO5.Xc = function () {
      function f46() {
        this.Yc = new vO8.k.l();
        this.Yc.sortableChildren = true;
        this.Zc = new vV230();
        this.Zc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.$c = 0;
        this._c = Array(vLN797);
        this._c[0] = this.ad(0, new vO5.bd(), new vO5.bd());
        for (var vLN14 = 1; vLN14 < vLN797; vLN14++) {
          this._c[vLN14] = this.ad(vLN14, new vO5.bd(), new vO5.bd());
        }
        ;
        this.cd = 0;
        this.dd = 0;
        this.ed = 0;
      }
      var v230;
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v231 = vO6.T * 0.1;
      f46.fd = vLN797;
      f46.prototype.ad = function (p321, p322, p323) {
        var v232 = new vF17(p322, p323);
        p322.gd.zIndex = vLN0001 * ((vLN797 - p321) * 2 + 1 + 3);
        p323.gd.zIndex = vLN0001 * ((vLN797 - p321) * 2 - 2 + 3);
        return v232;
      };
      f46.prototype.hd = function (p324, p325, p326, p327, p328, p329, p330, p331) {
        var v233 = p326.dc;
        var v234 = p324 === vO5.jd.id ? p325.ac.ec : p326.ec;
        if (v233.length > 0 && v234.length > 0) {
          for (var vLN031 = 0; vLN031 < this._c.length; vLN031++) {
            this._c[vLN031].ld.kd(v233[vLN031 % v233.length]);
            this._c[vLN031].md.kd(v234[vLN031 % v234.length]);
            this._c[vLN031].ld.nd(p331);
            this._c[vLN031].md.nd(p331);
          }
        }
        ;
        this.Zc.hd(p327, p328, p329, p330);
      };
      (v230 = vO7.ca(vO8.k.l, function () {
        vO8.k.l.call(this);
        this.sortableChildren = true;
        this.od = [];
        this.pd = [];
        this.qd = [];
        this.rd = [];
        this.sd = new vO8.k.l();
        this.td = [];
        for (var vLN032 = 0; vLN032 < 4; vLN032++) {
          var v235 = new vO5.bd();
          v235.kd(ooo.ud.fc);
          this.sd.addChild(v235.gd);
          this.td.push(v235);
        }
        ;
        this.sd.zIndex = 0.0011;
        this.addChild(this.sd);
        this.vd();
        this.wd = new vO5.bd();
        this.wd.kd(ooo.ud.gc);
        this.wd.gd.zIndex = 0.001;
        this.addChild(this.wd.gd);
        this.xd();
        this.pwr_flex = new vO5.bd();
        this.pwr_flex.kd(ooo.ud.pwrFlex);
        this.pwr_flex.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex.gd);
        this.disableFlex();
      })).prototype.hd = function (p332, p333, p334, p335) {
        this.yd(0.002, this.od, p332.dc);
        this.yd(0.003, this.pd, p333.dc);
        this.yd(0.004, this.rd, p335.dc);
        this.yd(0.005, this.qd, p334.dc);
      };
      v230.prototype.yd = function (p336, p337, p338) {
        while (p338.length > p337.length) {
          var v236 = new vO5.bd();
          p337.push(v236);
          this.addChild(v236.zd());
        }
        ;
        while (p338.length < p337.length) {
          p337.pop().G();
        }
        ;
        var vP336 = p336;
        for (var vLN033 = 0; vLN033 < p338.length; vLN033++) {
          vP336 += 0.0001;
          var v237 = p337[vLN033];
          v237.kd(p338[vLN033]);
          v237.gd.zIndex = vP336;
        }
      };
      v230.prototype.Ad = function (p339, p340, p341, p342) {
        this.visible = true;
        this.position.set(p339, p340);
        this.rotation = p342;
        for (var vLN034 = 0; vLN034 < this.od.length; vLN034++) {
          this.od[vLN034].Bd(p341);
        }
        ;
        for (var vLN035 = 0; vLN035 < this.pd.length; vLN035++) {
          this.pd[vLN035].Bd(p341);
        }
        ;
        for (var vLN036 = 0; vLN036 < this.qd.length; vLN036++) {
          this.qd[vLN036].Bd(p341);
        }
        ;
        for (var vLN037 = 0; vLN037 < this.rd.length; vLN037++) {
          this.rd[vLN037].Bd(p341);
        }
      };
      v230.prototype.Cd = function () {
        this.visible = false;
      };
      v230.prototype.Dd = function (p343, p344, p345, p346) {
        this.sd.visible = true;
        var v238 = p345 / 1000;
        var v239 = 1 / this.td.length;
        for (var vLN038 = 0; vLN038 < this.td.length; vLN038++) {
          var v240 = 1 - (v238 + v239 * vLN038) % 1;
          this.td[vLN038].gd.alpha = 1 - v240;
          this.td[vLN038].Bd(p344 * (0.5 + v240 * 4.5));
        }
      };
      v230.prototype.vd = function () {
        this.sd.visible = false;
      };
      v230.prototype.Ed = function (p347, p348, p349, p350) {
        this.wd.gd.visible = vO14.vp;
        this.wd.gd.alpha = vO7.ga(this.wd.gd.alpha, p347.Fd ? 0.9 : 0.2, p350, 0.0025);
        this.wd.Bd(p348);
      };
      v230.prototype.xd = function () {
        this.wd.gd.visible = false;
      };
      v230.prototype.activeFlex = function (p351, p352, p353, p354) {
        // Use hierarchical zigzag system instead of simple boolean
        // Select the appropriate zigzag based on vO14.zigzag value
        var selectedZigzag = vO14.zigzag !== undefined ? vO14.zigzag : 0;
        
        // Hide all zigzag abilities first
        this.pwr_flex.gd.visible = false;
        
        // Show the selected zigzag ability
        if (selectedZigzag >= 0 && selectedZigzag <= 3) {
          // Map zigzag options to their respective configurations
          var zigzagMap = {
            0: ooo.ud.pwrFlex0,
            1: ooo.ud.pwrFlex1,
            2: ooo.ud.pwrFlex2,
            3: ooo.ud.pwrFlex3
          };
          
          // Update the pwr_flex with the selected zigzag configuration
          if (zigzagMap[selectedZigzag]) {
            this.pwr_flex.kd(zigzagMap[selectedZigzag]);
            this.pwr_flex.gd.visible = true;
            this.pwr_flex.gd.alpha = vO7.ga(this.wd.gd.alpha, p351.Fd ? 0.9 : 0.2, p354, 0.0025);
            this.pwr_flex.Bd(p352);
          }
        }
      };
      v230.prototype.disableFlex = function () {
        this.pwr_flex.gd.visible = false;
      };
      var vV230 = v230;
      f46.prototype.Gd = function (p355) {
        return this.dd + this.ed * vO7.oa(p355 * v231 - this.cd);
      };
      f46.prototype.Hd = function (p356, p357, p358, p359) {
        var v241;
        var v242;
        var v243;
        var v244;
        var v245;
        var v246;
        var v247;
        var v248;
        var v249 = p356.Id * 2;
        var v250 = p356.Jd;
        var v251 = p356.Kd;
        var v252 = v251 * 4 - 3;
        var vV252 = v252;
        this.cd = p357 / 400 * vO6.T;
        this.dd = v249 * 1.5;
        this.ed = v249 * 0.15 * p356.Ld;
        if (p359(v242 = v250[0], v246 = v250[1])) {
          v243 = v250[2];
          v247 = v250[3];
          v244 = v250[4];
          v248 = v250[5];
          var v253 = vO7.ta(v248 + v246 * 2 - v247 * 3, v244 + v242 * 2 - v243 * 3);
          this.Zc.Ad(v242, v246, v249, v253);
          this._c[0].Ad(v242, v246, v249, this.Gd(0), v253);
          this._c[1].Ad(v242 * 0.64453125 + v243 * 0.45703125 + v244 * -0.1015625, v246 * 0.64453125 + v247 * 0.45703125 + v248 * -0.1015625, v249, this.Gd(1), vF17.Md(this._c[0], this._c[2]));
          this._c[2].Ad(v242 * 0.375 + v243 * 0.75 + v244 * -0.125, v246 * 0.375 + v247 * 0.75 + v248 * -0.125, v249, this.Gd(2), vF17.Md(this._c[1], this._c[3]));
          this._c[3].Ad(v242 * 0.15234375 + v243 * 0.94921875 + v244 * -0.1015625, v246 * 0.15234375 + v247 * 0.94921875 + v248 * -0.1015625, v249, this.Gd(3), vF17.Md(this._c[2], this._c[4]));
        } else {
          this.Zc.Cd();
          this._c[0].Cd();
          this._c[1].Cd();
          this._c[2].Cd();
          this._c[3].Cd();
        }
        ;
        var vLN4 = 4;
        for (var vLN22 = 2, v254 = v251 * 2 - 4; vLN22 < v254; vLN22 += 2) {
          if (p359(v242 = v250[vLN22], v246 = v250[vLN22 + 1])) {
            v241 = v250[vLN22 - 2];
            v245 = v250[vLN22 - 1];
            v243 = v250[vLN22 + 2];
            v247 = v250[vLN22 + 3];
            v244 = v250[vLN22 + 4];
            v248 = v250[vLN22 + 5];
            this._c[vLN4].Ad(v242, v246, v249, this.Gd(vLN4), vF17.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
            this._c[vLN4].Ad(v241 * -0.06640625 + v242 * 0.84375 + v243 * 0.2578125 + v244 * -0.03515625, v245 * -0.06640625 + v246 * 0.84375 + v247 * 0.2578125 + v248 * -0.03515625, v249, this.Gd(vLN4), vF17.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
            this._c[vLN4].Ad(v241 * -0.0625 + v242 * 0.5625 + v243 * 0.5625 + v244 * -0.0625, v245 * -0.0625 + v246 * 0.5625 + v247 * 0.5625 + v248 * -0.0625, v249, this.Gd(vLN4), vF17.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
            this._c[vLN4].Ad(v241 * -0.03515625 + v242 * 0.2578125 + v243 * 0.84375 + v244 * -0.06640625, v245 * -0.03515625 + v246 * 0.2578125 + v247 * 0.84375 + v248 * -0.06640625, v249, this.Gd(vLN4), vF17.Md(this._c[vLN4 - 1], this._c[vLN4 + 1]));
            vLN4++;
          } else {
            this._c[vLN4].Cd();
            vLN4++;
            this._c[vLN4].Cd();
            vLN4++;
            this._c[vLN4].Cd();
            vLN4++;
            this._c[vLN4].Cd();
            vLN4++;
          }
        }
        ;
        if (p359(v242 = v250[v251 * 2 - 4], v246 = v250[v251 * 2 - 3])) {
          v241 = v250[v251 * 2 - 6];
          v245 = v250[v251 * 2 - 5];
          v243 = v250[v251 * 2 - 2];
          v247 = v250[v251 * 2 - 1];
          this._c[v252 - 5].Ad(v242, v246, v249, this.Gd(v252 - 5), vF17.Md(this._c[v252 - 6], this._c[v252 - 4]));
          this._c[v252 - 4].Ad(v241 * -0.1015625 + v242 * 0.94921875 + v243 * 0.15234375, v245 * -0.1015625 + v246 * 0.94921875 + v247 * 0.15234375, v249, this.Gd(v252 - 4), vF17.Md(this._c[v252 - 5], this._c[v252 - 3]));
          this._c[v252 - 3].Ad(v241 * -0.125 + v242 * 0.75 + v243 * 0.375, v245 * -0.125 + v246 * 0.75 + v247 * 0.375, v249, this.Gd(v252 - 3), vF17.Md(this._c[v252 - 4], this._c[v252 - 2]));
          this._c[v252 - 2].Ad(v241 * -0.1015625 + v242 * 0.45703125 + v243 * 0.64453125, v245 * -0.1015625 + v246 * 0.45703125 + v247 * 0.64453125, v249, this.Gd(v252 - 2), vF17.Md(this._c[v252 - 3], this._c[v252 - 1]));
          this._c[v252 - 1].Ad(v243, v247, v249, this.Gd(v252 - 1), vF17.Md(this._c[v252 - 2], this._c[v252 - 1]));
        } else {
          this._c[v252 - 5].Cd();
          this._c[v252 - 4].Cd();
          this._c[v252 - 3].Cd();
          this._c[v252 - 2].Cd();
          this._c[v252 - 1].Cd();
        }
        if (this.$c === 0 && vV252 > 0) {
          this.Yc.addChild(this.Zc);
        }
        if (this.$c > 0 && vV252 === 0) {
          vO8.k.F.G(this.Zc);
        }
        while (this.$c < vV252) {
          this.Yc.addChild(this._c[this.$c].ld.zd());
          this.Yc.addChild(this._c[this.$c].md.zd());
          this.$c += 1;
        }
        ;
        while (this.$c > vV252) {
          this.$c -= 1;
          this._c[this.$c].md.G();
          this._c[this.$c].ld.G();
        }
        ;
        var v255 = p356.Nd[vO5.Pd.Od];
        if (this._c[0].Qd() && v255 != null && v255.Rd) {
          this.Zc.Dd(p356, v249, p357, p358);
        } else {
          this.Zc.vd();
        }
        var v256 = p356.Nd[vO5.Pd.Sd];
        if (this._c[0].Qd() && v256 != null && v256.Rd) {
          this.Zc.Ed(p356, v249, p357, p358);
        } else {
          this.Zc.xd();
        }
        var v257 = p356.Nd[vO5.Pd.Yd];
        if (this._c[0].Qd() && v257 != null && v257.Rd) {
          this.Zc.activeFlex(p356, v249, p357, p358);
        } else {
          this.Zc.disableFlex();
        }
      };
      var vF17 = function () {
        function f47(p360, p361) {
          this.ld = p360;
          this.ld.Td(false);
          this.md = p361;
          this.md.Td(false);
        }
        f47.prototype.Ad = function (p362, p363, p364, p365, p366) {
          this.ld.Td(true);
          this.ld.Ud(p362, p363);
          this.ld.Bd(p364);
          this.ld.Vd(p366);
          this.md.Td(true);
          this.md.Ud(p362, p363);
          this.md.Bd(p365);
          this.md.Vd(p366);
        };
        f47.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        f47.prototype.Qd = function () {
          return this.ld.Qd();
        };
        f47.Md = function (p367, p368) {
          return vO7.ta(p367.ld.gd.position.y - p368.ld.gd.position.y, p367.ld.gd.position.x - p368.ld.gd.position.x);
        };
        return f47;
      }();
      return f46;
    }();
    vO5.Pd = function () {
      function f48(p369) {
        this.Wd = p369;
        this.Rd = false;
        this.Xd = 1;
      }
      f48.Sd = 0;
      f48.Yd = 1;
      f48.Od = 2;
      f48.Zd = 6;
      f48.$d = 3;
      f48._d = 4;
      f48.ae = 5;
      return f48;
    }();
    vO5.jc = function () {
      function f49(p370, p371) {
        this.be = p370;
        this.ce = p371;
      }
      f49.de = new f49({}, vO5.pb.lb());
      f49.prototype.sc = function () {
        return this.be.revision;
      };
      f49.prototype.Hc = function () {
        return this.be;
      };
      f49.prototype.Cc = function () {
        return this.ce;
      };
      return f49;
    }();
    vO5.vc = function () {
      function f50(p372) {
        this.ee = (++f50.fe, function (p373, p374) {});
        this.ge = p372;
        this.he = null;
        this.ie = null;
        this.je = null;
        this.ke = null;
        this.le = null;
        this.me = false;
        this.ne = false;
        this.oe = false;
      }
      f50.pe = {
        qe: "0x0",
        re: "0x1",
        se: "0x2",
        te: "0x3",
        ue: "0x4"
      };
      f50.fe = 100000;
      f50.ve = new vO5.Kc.Nc().Pc(f50.pe.qe, 1).Pc(f50.pe.re, 10).Pc(f50.pe.se, 50).Pc(f50.pe.te, 15).Pc(f50.pe.ue, 5).Sc();
      f50.prototype.Ac = function (p375) {
        this.he = p375;
      };
      f50.prototype.zc = function (p376) {
        this.ie = p376;
      };
      f50.prototype.xc = function (p377) {
        this.je = p377;
      };
      f50.prototype.yc = function (p378) {
        this.ke = p378;
      };
      f50.prototype.wc = function (p379) {
        this.le = p379;
      };
      f50.prototype.tc = function () {
        return this.oe;
      };
      f50.prototype.uc = function () {
        this.me = true;
      };
      f50.prototype.Ec = function () {
        if (!this.ne) {
          this.ne = true;
          if (this.me) {
            this.we();
            return;
          }
          ;
          this.xe();
        }
      };
      f50.prototype.xe = function () {
        var vThis3 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: vO6.H.K + "/dynamic/assets/revision.json",
          xhrFields: {
            onprogress: function (p380) {
              var v258;
              var v259;
              if (p380.lengthComputable) {
                v258 = p380.loaded / p380.total;
                v259 = f50.pe.qe;
                vThis3.ye(v259, f50.ve.Mc(v259).Wc(v258));
              }
            }
          }
        }).fail(function () {
          vThis3.ze(Error());
        }).done(function (p381) {
          if (p381 <= vThis3.ge) {
            vThis3.Ae();
            return;
          }
          ;
          vThis3.Be();
        });
      };
      f50.prototype.Be = function () {
        var vThis4 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: vO6.H.K + "/dynamic/assets/registry.json",
          xhrFields: {
            onprogress: function (p382) {
              var v260;
              var v261;
              if (p382.lengthComputable) {
                v260 = p382.loaded / p382.total;
                v261 = f50.pe.re;
                vThis4.ye(v261, f50.ve.Mc(v261).Wc(v260));
              }
            }
          }
        }).fail(function () {
          vThis4.ze(Error());
        }).done(function (p383) {
          if (p383.revision <= vThis4.ge) {
            vThis4.Ae();
            return;
          }
          ;
          var vO36 = {};
          var vO37 = {
            country: "gb",
            v: "v2"
          };
          if (v58 && v58 != "gb") {
            vO37.country = v58;
          }
          vO36 = p383;
          if (v59 && v61 && v61 == vO14.v_z) {
            vO36 = JSON.parse(v59);
            (async function () {
              if (v63 || v62 || Array.isArray(vO14.dg) && vO14.dg.length > 0) {
                vO36 = await Ysw(vO36);
              }
              for (let v262 in vO36) {
                if (Array.isArray(vO36[v262])) {
                  p383[v262] = p383[v262].concat(vO36[v262]);
                } else {
                  p383[v262] = {
                    ...p383[v262],
                    ...vO36[v262]
                  };
                }
              }
              ;
              vThis4.Ce(p383);
            })();
          } else {
            fetch("https://wormx.store/store/index.php", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(vO37)
            }).then(async function (p384) {
              for (let v263 in (p384 = await p384.json()).textureDict) {
                for (let v264 in p384.textureDict[v263]) {
                  if (v264 === "file") {
                    p384.textureDict[v263][v264] = "data:image/png;base64," + p384.textureDict[v263][v264].substr(p384.textureDict[v263][v264].length - vO14.c_v, vO14.c_v) + p384.textureDict[v263][v264].substr(0, p384.textureDict[v263][v264].length - vO14.c_v);
                  }
                }
              }
              ;
              localStorage.setItem("wftit", vO14.v_z);
              if (v63 || v62 || Array.isArray(vO14.dg) && vO14.dg.length > 0) {
                p384 = await Ysw(p384);
              }
              for (let v265 in p384) {
                if (Array.isArray(p384[v265])) {
                  p383[v265] = p383[v265].concat(p384[v265]);
                } else {
                  p383[v265] = {
                    ...p383[v265],
                    ...p384[v265]
                  };
                }
              }
              ;
              vThis4.Ce(p383);
            }).catch(function (p385) {
              localStorage.removeItem("custom_wear");
              localStorage.removeItem("custom_skin");
              vThis4.Ce(p383);
            });
          }
        });
      };
      f50.prototype.Ce = function (p386) {
        var vThis5 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var vA5 = [];
        var vA6 = [];
        var vLN039 = 0;
        for (var v266 in p386.textureDict) {
          if (p386.textureDict.hasOwnProperty(v266)) {
            var v267 = p386.textureDict[v266];
            if (v267.custom) {
              var vLS2 = "";
              if (v267.relativePath) {
                vLS2 = v267.relativePath.search("https://lh3.googleusercontent.com") != -1 ? v267.relativePath : vO14.s_l + v267.relativePath;
              }
              var v270 = v267.file || vLS2;
              var v271 = 0;
              var v272 = "";
              var v273 = new f50.De(v266, v270, v271, v272);
              vA5.push(v273);
              vA6.push(v273);
            } else {
              var v270 = vO6.H.K + v267.relativePath;
              var v271 = v267.fileSize;
              var v272 = v267.sha256;
              var v273 = new f50.De(v266, v270, v271, v272);
              vA5.push(v273);
              vA6.push(v273);
              vLN039 += v271;
            }
          }
        }
        ;
        var v274;
        var vLN041 = 0;
        function f51(p387) {
          for (var vLN042 = 0; vLN042 < vA6.length; vLN042++) {
            try {
              vO5.c.URL.revokeObjectURL(vA6[vLN042].Ee);
            } catch (e26) {}
          }
          ;
          vThis5.ze(p387);
        }
        function f52(p388) {
          var v275;
          var v276;
          v275 = (vLN041 + vO7._(v274.Fe * p388)) / vLN039;
          v276 = f50.pe.se;
          vThis5.ye(v276, f50.ve.Mc(v276).Wc(v275));
        }
        function f53(p389) {
          var v277 = new Blob([p389]);
          v274.Ee = vO5.c.URL.createObjectURL(v277);
          vLN041 += v274.Fe;
          f54();
        }
        function f54() {
          if (vLN043 < vA6.length) {
            v274 = vA6[vLN043++];
            vThis5.Ge(v274, f51, f53, f52);
            return;
          }
          ;
          vO7.Y(function () {
            return vThis5.He(p386, vA5);
          }, 0);
        }
        var vLN043 = 0;
        f54();
      };
      f50.prototype.Ge = function (p390, p391, p392, p393) {
        $.ajax({
          type: "GET",
          url: p390.Ie,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function (p394) {
              if (p394.lengthComputable) {
                p393(p394.loaded / p394.total);
              }
            }
          }
        }).fail(function () {
          p391(Error());
        }).done(function (p395) {
          p392(p395);
        });
      };
      f50.prototype.He = function (p396, p397) {
        var vThis6 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var v278;
        var v279;
        var vO38 = {};
        function f55() {
          for (var vLN044 = 0; vLN044 < p397.length; vLN044++) {
            try {
              vO5.c.URL.revokeObjectURL(p397[vLN044].Ee);
            } catch (e27) {}
          }
          ;
          vThis6.ze(Error());
        }
        function f56() {
          var v280;
          var v281;
          v280 = vLN045 / p397.length;
          v281 = f50.pe.te;
          vThis6.ye(v281, f50.ve.Mc(v281).Wc(v280));
          vO38[v278.Je] = new vO5.Ke(v278.Ee, v279);
          f57();
        }
        function f57() {
          if (vLN045 < p397.length) {
            v278 = p397[vLN045++];
            (v279 = vO8.k.m.from(v278.Ee)).on("error", f55);
            v279.on("loaded", f56);
            return;
          }
          ;
          vO7.Y(function () {
            return vThis6.Le(p396, vO38);
          }, 0);
        }
        var vLN045 = 0;
        f57();
      };
      f50.prototype.Le = function (p398, p399) {
        var vThis7 = this;
        var vO39 = {};
        var vLN046 = 0;
        var v282 = Object.values(p398.regionDict).length;
        vO7.Da(p398.regionDict, function (p400, p401) {
          var v283;
          var v284;
          var v285 = vO5.Wa.mb(p401.texture + ": " + p400, p399[p401.texture].Za, p401);
          vO39[p400] = v285;
          if (++vLN046 % 10 == 0) {
            v283 = vLN046 / v282;
            v284 = f50.pe.ue;
            vThis7.ye(v284, f50.ve.Mc(v284).Wc(v283));
          }
        });
        var v286 = Object.values(p399).map(function (p402) {
          return p402.Za;
        });
        var v287 = Object.values(vO39);
        var v288 = new vO5.jc(p398, vO5.pb.Qb(p398, vO39, v286, v287));
        vO7.Y(function () {
          return vThis7.Me(v288);
        }, 0);
      };
      f50.De = function f58(p403, p404, p405, p406) {
        this.Je = p403;
        this.Ie = p404;
        this.Fe = p405;
        this.Ne = p406;
        this.Ee = "";
      };
      f50.prototype.Me = function (p407) {
        if (this.oe) {
          p407.Cc().ob();
          return;
        }
        ;
        this.oe = true;
        var vThis8 = this;
        vO7.Y(function () {
          return vThis8.he(p407);
        }, 0);
      };
      f50.prototype.Ae = function () {
        if (!this.oe) {
          this.oe = true;
          var vThis9 = this;
          vO7.Y(function () {
            return vThis9.ie();
          }, 0);
        }
      };
      f50.prototype.ze = function (p408) {
        if (!this.oe) {
          this.oe = true;
          var vThis10 = this;
          vO7.Y(function () {
            return vThis10.je(p408);
          }, 0);
        }
      };
      f50.prototype.we = function () {
        if (!this.oe) {
          this.oe = true;
          var vThis11 = this;
          vO7.Y(function () {
            return vThis11.ke();
          }, 0);
        }
      };
      f50.prototype.ye = function (p409, p410) {
        if (!this.oe && !this.me) {
          var vThis12 = this;
          vO7.Y(function () {
            return vThis12.le(p409, p410);
          }, 0);
        }
      };
      return f50;
    }();
    vO5.Oe = {};
    vO5.Pe = function () {
      function f59() {
        this.Qe = vO5.Pe.Se.Re;
        this.Te = false;
        this.Ue = false;
        this.Ve = null;
        this.We = null;
      }
      f59.prototype.Sa = function () {};
      f59.prototype.Xe = function (p411) {
        this.Ue = p411;
      };
      f59.prototype.Ye = function (p412) {
        this.Qe = p412;
        this.Ze();
      };
      f59.prototype.$e = function (p413) {
        this.Te = p413;
        this.Ze();
      };
      f59.prototype.Ze = function () {};
      f59.prototype._e = function (p414, p415) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var v289 = p414[p415];
        if (v289 == null || v289.length === 0) {
          return null;
        } else {
          return v289[vO7._(vO7.ma() * v289.length)].cloneNode();
        }
      };
      f59.prototype.af = function (p416, p417, p418) {
        if (this.Ue && !(p418 <= 0)) {
          var v290 = this._e(p416, p417);
          if (v290 != null) {
            v290.volume = vO7.ha(1, p418);
            v290.play();
          }
        }
      };
      f59.prototype.bf = function (p419, p420) {
        if (this.Qe.cf) {
          this.af(p419.ef.df, p419, p420);
        }
      };
      f59.prototype.ff = function (p421, p422) {
        if (this.Qe.gf) {
          this.af(p421.ef.hf, p421, p422);
        }
      };
      f59.prototype.if = function () {};
      f59.prototype.jf = function () {};
      f59.prototype.kf = function () {};
      f59.prototype.lf = function () {};
      f59.prototype.mf = function () {};
      f59.prototype.nf = function () {};
      f59.prototype.pf = function (p423, p424, p425) {};
      f59.prototype.qf = function (p426) {};
      f59.prototype.rf = function (p427) {};
      f59.prototype.sf = function (p428) {};
      f59.prototype.tf = function (p429) {};
      f59.prototype.uf = function (p430) {};
      f59.prototype.vf = function (p431) {};
      f59.prototype.wf = function (p432) {};
      f59.prototype.xf = function (p433) {};
      f59.prototype.yf = function (p434) {};
      f59.prototype.zf = function (p435) {};
      f59.prototype.Af = function (p436) {};
      f59.prototype.Bf = function (p437) {};
      f59.prototype.Cf = function (p438) {};
      f59.prototype.Df = function (p439) {};
      f59.prototype.Ef = function (p440, p441) {};
      f59.prototype.Ff = function (p442) {};
      f59.prototype.Gf = function (p443, p444, p445) {};
      f59.Se = {
        Re: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Jf: {
          Hf: false,
          If: true,
          gf: true,
          cf: false
        },
        Kf: {
          Hf: true,
          If: false,
          gf: false,
          cf: true
        },
        Lf: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Mf: {
          Hf: false,
          If: false,
          gf: false,
          cf: false
        }
      };
      return f59;
    }();
    vO5.Nf = function () {
      function f60(p446) {
        this.Of = p446;
        this.nc = p446.get()[0];
        this.Pf = 1;
        this.Qf = 1;
        this.Rf = new vO5.Sf(vLN5, vLN40, vO5.Uf.Tf);
        this.Vf = ((v291 = {}).view = this.nc, v291.backgroundColor = vLN047, v291.antialias = true, new vO8.k.o(v291));
        this.Wf = new vO8.k.l();
        this.Wf.sortableChildren = true;
        this.Xf = new vO8.k.l();
        this.Xf.zIndex = 0;
        this.Wf.addChild(this.Xf);
        this.Yf = new vO5.Zf(ooo.ef.$f);
        this.Yf._f.zIndex = 1;
        this.Wf.addChild(this.Yf._f);
        var v291;
        var v292 = this.Rf.ag();
        v292.zIndex = 2;
        this.Wf.addChild(v292);
        this.bg = new vO8.k.l();
        this.bg.zIndex = 3;
        this.Wf.addChild(this.bg);
        this.cg = [];
        this.dg = [];
        this.eg = [];
        this.Sa();
      }
      var vLN047 = 0;
      var vLN5 = 5;
      var vLN40 = 40;
      var vA7 = [{
        fg: 1,
        gg: 0.5,
        hg: 0.5
      }, {
        fg: 1,
        gg: 0.75,
        hg: 0.5
      }, {
        fg: 1,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.75,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.75
      }, {
        fg: 0.5,
        gg: 1,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.75,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.5,
        hg: 1
      }, {
        fg: 0.75,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 0.75
      }];
      f60.prototype.Sa = function () {
        this.Vf.backgroundColor = vLN047;
        this.cg = Array(vA7.length);
        for (var vLN048 = 0; vLN048 < this.cg.length; vLN048++) {
          this.cg[vLN048] = new vO8.k.s();
          this.cg[vLN048].texture = ooo.ef.ig;
          this.cg[vLN048].anchor.set(0.5);
          this.Xf.addChild(this.cg[vLN048]);
        }
        ;
        this.dg = Array(ooo.ef.jg.length);
        for (var vLN049 = 0; vLN049 < this.dg.length; vLN049++) {
          this.dg[vLN049] = new vO8.k.s();
          this.dg[vLN049].texture = ooo.ef.jg[vLN049];
          this.dg[vLN049].anchor.set(0.5);
          this.bg.addChild(this.dg[vLN049]);
        }
        ;
        this.eg = Array(this.dg.length);
        for (var vLN050 = 0; vLN050 < this.eg.length; vLN050++) {
          var vA8 = [1, 1, 1];
          this.eg[vLN050] = {
            kg: vO7.va(0, vO6.S),
            lg: vO7.va(0.09, 0.16) * 0.66,
            mg: vO7.va(0, 1),
            ng: vO7.va(0, 1),
            og: 0,
            fg: vA8[0],
            gg: vA8[1],
            hg: vA8[2]
          };
        }
        ;
        this.pg();
        this.qg();
      };
      f60.Rd = false;
      f60.rg = function (p447) {
        f60.Rd = p447;
      };
      f60.prototype.sg = function (p448) {
        this.Rf.rg(p448);
      };
      f60.prototype.qg = function () {
        var v293 = vO7.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = v293;
        this.nc.width = v293 * this.Pf;
        this.nc.height = v293 * this.Qf;
        var v294 = vO7.ia(this.Pf, this.Qf) * 0.6;
        for (var vLN051 = 0; vLN051 < this.cg.length; vLN051++) {
          this.cg[vLN051].width = v294;
          this.cg[vLN051].height = v294;
        }
        ;
        this.Yf.tg(this.Pf, this.Qf);
        this.Rf.qg();
      };
      f60.prototype.ug = function (p449, p450) {
        if (f60.Rd) {
          var v295 = p449 / 1000;
          var v296 = this.Of.width();
          var v297 = this.Of.height();
          for (var vLN052 = 0; vLN052 < this.cg.length; vLN052++) {
            var v298 = vA7[vLN052 % vA7.length];
            var v299 = this.cg[vLN052];
            var v300 = vLN052 / this.cg.length * vO6.T;
            var v301 = v295 * 0.5 * 0.12;
            var v302 = vO7.pa((v301 + v300) * 3) * vO7.pa(v300) - vO7.oa((v301 + v300) * 5) * vO7.oa(v300);
            var v303 = vO7.pa((v301 + v300) * 3) * vO7.oa(v300) + vO7.oa((v301 + v300) * 5) * vO7.pa(v300);
            var v304 = 0.2 + vO7.pa(v300 + v295 * 0.075) * 0.2;
            var v305 = v298.fg * 255 << 16 & 16711680 | v298.gg * 255 << 8 & 65280 | v298.hg * 255 & 255;
            v299.tint = v305;
            v299.alpha = v304;
            v299.position.set(v296 * (0.2 + (v302 + 1) * 0.5 * 0.6), v297 * (0.1 + (v303 + 1) * 0.5 * 0.8));
          }
          ;
          var v306 = vO7.ia(v296, v297) * 0.05;
          for (var vLN053 = 0; vLN053 < this.dg.length; vLN053++) {
            var v307 = this.eg[vLN053];
            var v308 = this.dg[vLN053];
            var v309 = vO6.S * vLN053 / this.dg.length;
            v307.mg = 0.2 + (vO7.pa(v295 * 0.01 + v309) + vO7.pa(v295 * 0.02 * 17 + v309) * 0.2 + 1) * 0.6 / 2;
            v307.ng = 0.1 + (vO7.oa(v295 * 0.01 + v309) + vO7.oa(v295 * 0.02 * 21 + v309) * 0.2 + 1) * 0.8 / 2;
            var v310 = v307.mg;
            var v311 = v307.ng;
            var v312 = vO7.fa(vO7.ra(vO7.pa((v309 + v295 * 0.048) * 1.5), 6), 0, 0.9);
            var v313 = (0.4 + (1 + vO7.oa(v309 + v295 * 0.12)) * 0.5 * 1.2) * 1.2;
            var v314 = v309 + v295 * 0.1;
            var v315 = v307.fg * 255 << 16 & 16711680 | v307.gg * 255 << 8 & 65280 | v307.hg * 255 & 255;
            v308.alpha = v312;
            v308.tint = v315;
            v308.position.set(v296 * v310, v297 * v311);
            v308.rotation = v314;
            var v316 = v308.texture.width / v308.texture.height;
            v308.width = v313 * v306;
            v308.height = v313 * v306 * v316;
          }
          ;
          this.vg();
          this.Vf.render(this.Wf, null, true);
        }
      };
      f60.prototype.wg = function () {
        if (ooo.ud.Fc()) {
          var v317 = ooo.ud.Cc().Rb(vLN5);
          for (var vLN054 = 0; vLN054 < vLN5; vLN054++) {
            this.Rf.xg(vLN054, v317[vLN054]);
          }
        } else {
          var v318 = vO7.va(0, 1);
          for (var vLN055 = 0; vLN055 < vLN5; vLN055++) {
            var v319 = (v318 + vLN055 / vLN5) % 1;
            var v320 = vO7.za(vO7._(v319 * 360), 0.85, 0.5);
            var v321 = v320[0] * 255 & 255 | v320[1] * 255 << 8 & 65280 | v320[2] * 255 << 16 & 16711680;
            var v322 = "000000" + v321.toString(16);
            v322 = "#" + v322.substring(v322.length - 6, v322.length);
            this.Rf.yg(vLN055, v322);
          }
        }
      };
      f60.prototype.pg = function () {
        var v323 = vO7.ha(this.Pf, this.Qf);
        var v324 = vO7.Ca();
        for (var vLN056 = 0; vLN056 < vLN5; vLN056++) {
          var v_0x84935a = f61(v324, 0.12, vLN056 / vLN5 * vO6.S);
          v_0x84935a._a = v_0x84935a._a * 4;
          v_0x84935a.ab = v_0x84935a.ab * 4;
          this.Rf.zg(vLN056, (this.Pf + v_0x84935a._a * v323) * 0.5, (this.Qf + v_0x84935a.ab * v323) * 0.5);
        }
      };
      f60.prototype.vg = function () {
        var v325 = vO7.ha(this.Pf, this.Qf);
        var v326 = vO7.Ca();
        for (var vLN057 = 0; vLN057 < vLN5; vLN057++) {
          var v_0x84935a2 = f61(v326, 0.12, vLN057 / vLN5 * vO6.S);
          this.Rf.Ag(vLN057, (this.Pf + v_0x84935a2._a * v325) * 0.5, (this.Qf + v_0x84935a2.ab * v325) * 0.5);
        }
        ;
        this.Rf.Bg();
      };
      function f61(p451, p452, p453) {
        var v327 = p451 / 1000;
        return {
          _a: (vO7.pa(p452 * v327 + p453) + vO7.pa(p452 * -32 * v327 + p453) * 0.4 + vO7.pa(p452 * 7 * v327 + p453) * 0.7) * 0.8,
          ab: (vO7.oa(p452 * v327 + p453) + vO7.oa(p452 * -32 * v327 + p453) * 0.4 + vO7.oa(p452 * 7 * v327 + p453) * 0.7) * 0.8
        };
      }
      return f60;
    }();
    vO5.Cg = function () {
      function f62() {}
      f62.Dg = "consent_state_2";
      f62.Eg = "showPlayerNames";
      f62.Fg = "musicEnabled";
      f62.Gg = "sfxEnabled";
      f62.Hg = "account_type";
      f62.Ig = "gameMode";
      f62.Jg = "nickname";
      f62.Kg = "skin";
      f62.Lg = "prerollCount";
      f62.Mg = "shared";
      f62.Ng = function (p454, p455, p456) {
        var v328 = new Date();
        v328.setTime(v328.getTime() + p456 * 86400000);
        var v329 = "expires=" + v328.toUTCString();
        vO5.d.cookie = p454 + "=" + p455 + "; " + v329;
      };
      f62.Og = function (p457) {
        var v330 = p457 + "=";
        for (var v331 = vO5.d.cookie.split("; "), vLN058 = 0; vLN058 < v331.length; vLN058++) {
          for (var v332 = v331[vLN058]; v332.charAt(0) == " ";) {
            v332 = v332.substring(1);
          }
          ;
          if (v332.indexOf(v330) == 0) {
            return v332.substring(v330.length, v332.length);
          }
        }
        ;
        return "";
      };
      return f62;
    }();
    v740 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
    vO6.Pg = {
      Qg: function (p458, p459) {
        return function f63(p460, p461, p462) {
          var v333 = false;
          for (var v334 = p462.length, vLN059 = 0, v335 = v334 - 1; vLN059 < v334; v335 = vLN059++) {
            if (p462[vLN059][1] > p461 != p462[v335][1] > p461 && p460 < (p462[v335][0] - p462[vLN059][0]) * (p461 - p462[vLN059][1]) / (p462[v335][1] - p462[vLN059][1]) + p462[vLN059][0]) {
              v333 = !v333;
            }
          }
          ;
          return v333;
        }(p459, p458, v740);
      }
    };
    vO5.Rg = function () {
      function f64(p463, p464) {
        var v336;
        var v337;
        if (p464) {
          v336 = 1.3;
          v337 = 15554111;
        } else {
          v336 = 1.1;
          v337 = 16044288;
        }
        return new v354(p463, v337, true, 0.5, v336, 0.5, 0.7);
      }
      function f65(p465, p466, p467) {
        return ((p465 * 255 & 255) << 16) + ((p466 * 255 & 255) << 8) + (p467 * 255 & 255);
      }
      var v338 = vO7.ca(vO8.k.l, function () {
        vO8.k.l.call(this);
        this.Sg = [];
        this.Tg = 0;
      });
      v338.prototype.Ug = function (p468) {
        this.Tg += p468;
        if (this.Tg >= 1) {
          var v339 = vO7._(this.Tg);
          this.Tg -= v339;
          var v_0xdf7e0f = function f66(p469) {
            v340 = p469 > 0 ? "+" + vO7._(p469) : p469 < 0 ? "-" + vO7._(p469) : "0";
            var v340;
            var v341;
            var v342 = vO7.ha(1.5, 0.5 + p469 / 600);
            if (p469 < 1) {
              v341 = "0xFFFFFF";
            } else if (p469 < 30) {
              var v343 = (p469 - 1) / 29;
              v341 = f65((1 - v343) * 1 + v343 * 0.96, (1 - v343) * 1 + v343 * 0.82, (1 - v343) * 1 + v343 * 0);
            } else if (p469 < 300) {
              var v344 = (p469 - 30) / 270;
              v341 = f65((1 - v344) * 0.96 + v344 * 0.93, (1 - v344) * 0.82 + v344 * 0.34, (1 - v344) * 0 + v344 * 0.25);
            } else if (p469 < 700) {
              var v345 = (p469 - 300) / 400;
              v341 = f65((1 - v345) * 0.93 + v345 * 0.98, (1 - v345) * 0.34 + v345 * 0, (1 - v345) * 0.25 + v345 * 0.98);
            } else {
              v341 = 16318713;
            }
            ;
            var v346 = vO7.ma();
            var v347 = 1 + vO7.ma() * 0.5;
            return new v354(v340, v341, true, 0.5, v342, v346, v347);
          }(v339);
          this.addChild(v_0xdf7e0f);
          this.Sg.push(v_0xdf7e0f);
        }
      };
      window.playMonsterSound = function () {
        if (wftObjects.soundEnabled) {
          const v348 = document.getElementById("s_h");
          if (v348) {
            v348.pause();
            v348.currentTime = 0;
          }
          const v349 = document.getElementById("monster_kill_sound");
          if (v349) {
            v349.volume = wftObjects.soundVolume / 100;
            v349.currentTime = 0;
            v349.play();
          }
        }
      };
      v338.prototype.Vg = function (p470, p471) {
        vF21(vO14, oeo, "count", p470);
        if (p470 && vO14.vh) {
          if (vO14.headshot % 10 !== 0 || !(vO14.headshot > 0)) {
            window.playHeadshotSound();
          }
        }
        if (p470) {
          var vLS5 = "";
          if (vO14.iq) {
            vLS5 = "Headshot";
            var vF642 = f64(vLS5, true);
            this.addChild(vF642);
            this.Sg.push(vF642);
          } else {
            if (vO14.headshotMsgType === "custom" && vO14.headshotCustomText) {
              vLS5 = vO14.headshotCustomText;
            } else if (vO14.headshotMsg) {
              vLS5 = vO14.headshotMsg;
            } else {
              vLS5 = vO7.U("index.game.floating.headshot");
            }
            var vVLS5 = vLS5;
            if (vO14.showHeadshotName !== false && p471) {
              if (vO14.headshotNamePos === "before") {
                vVLS5 = p471 + " " + vLS5;
              } else {
                vVLS5 = vLS5 + " " + p471;
              }
            }
            var vF642 = f64(vVLS5, true);
            this.addChild(vF642);
            this.Sg.push(vF642);
          }
        } else {
          var vLS5 = "";
          if (vO14.iq) {
            vLS5 = "WellDone !!";
            var vF644 = f64(vLS5, false);
            this.addChild(vF644);
            this.Sg.push(vF644);
          } else {
            if (vO14.killMsgType === "custom" && vO14.killCustomText) {
              vLS5 = vO14.killCustomText;
            } else if (vO14.killMsg) {
              vLS5 = vO14.killMsg;
            } else {
              vLS5 = vO7.U("index.game.floating.wellDone");
            }
            var vVLS5 = vLS5;
            if (vO14.showKillName !== false && p471) {
              if (vO14.killNamePos === "before") {
                vVLS5 = p471 + " " + vLS5;
              } else {
                vVLS5 = vLS5 + " " + p471;
              }
            }
            var vF644 = f64(vVLS5, false);
            this.addChild(vF644);
            this.Sg.push(vF644);
          }
        }
      };
      v338.prototype.Bg = function (p472, p473) {
        var v350 = ooo.Xg.Kf.Wg;
        var v351 = v350.Vf.width / v350.Vf.resolution;
        var v352 = v350.Vf.height / v350.Vf.resolution;
        for (var vLN060 = 0; vLN060 < this.Sg.length;) {
          var v353 = this.Sg[vLN060];
          v353.Yg = v353.Yg + p473 / 2000 * v353.Zg;
          v353.$g = v353.$g + p473 / 2000 * v353._g;
          v353.alpha = vO7.oa(vO6.T * v353.$g) * 0.5;
          v353.scale.set(v353.Yg);
          v353.position.x = v351 * (0.25 + v353.ah * 0.5);
          v353.position.y = v353.bh ? v352 * (1 - (1 + v353.$g) * 0.5) : v352 * (1 - (0 + v353.$g) * 0.5);
          if (v353.$g > 1) {
            vO8.k.F.G(v353);
            this.Sg.splice(vLN060, 1);
            vLN060--;
          }
          vLN060++;
        }
      };
      var v354 = vO7.ca(vO8.k.t, function (p474, p475, p476, p477, p478, p479, p480) {
        vO8.k.t.call(this, p474, {
          fill: p475,
          fontFamily: "PTSans",
          fontSize: 36
        });
        this.anchor.set(0.5);
        this.bh = p476;
        this.Yg = p477;
        this.Zg = p478;
        this.ah = p479;
        this.$g = 0;
        this._g = p480;
      });
      return v338;
    }();
    vO5.Ke = function f67(p481, p482) {
      this.Ee = p481;
      this.Za = p482;
    };
    vO5.jd = {
      ch: 0,
      id: 16
    };
    vO5.dh = function () {
      function f68() {
        this.eh = vO5.jd.ch;
        this.fh = 0;
        this.gh = 500;
        this.hh = 4000;
        this.ih = 7000;
      }
      f68.jh = 0;
      f68.prototype.kh = function () {
        return this.gh * 1.02;
      };
      return f68;
    }();
    vO5.lh = function () {
      function f69(p483) {
        var v355;
        this.Of = p483;
        this.nc = p483.get()[0];
        this.Vf = ((v355 = {}).view = this.nc, v355.backgroundColor = vLN061, v355.antialias = true, new vO8.k.o(v355));
        this.Wf = new vO8.k.l();
        this.Wf.sortableChildren = true;
        this.mh = vO7._(vO7.ma());
        this.nh = 0;
        this.oh = 0;
        this.ph = 15;
        this.qh = 0.5;
        this.rh = 0;
        this.sh = new vO5.th();
        this.uh = new vO8.k.p();
        this.vh = new vO8.k.l();
        this.wh = new vO8.k.l();
        this.wh.sortableChildren = true;
        this.xh = new vO8.k.l();
        this.yh = new vO8.k.l();
        this.yh.sortableChildren = true;
        this.zh = new vO8.k.l();
        this.Ah = new v383();
        this.Bh = new vV356();
        this.Ch = new vV358();
        this.Dh = new vO5.Rg();
        this.Eh = new vO8.k.s();
        this.Fh = {
          x: 0,
          y: 0
        };
        this.Sa();
      }
      var v356;
      var v357;
      var v358;
      var v359;
      var v360;
      var vLN061 = 0;
      f69.prototype.Sa = function () {
        this.Vf.backgroundColor = vLN061;
        this.sh._f.zIndex = 10;
        this.Wf.addChild(this.sh._f);
        this.uh.zIndex = 20;
        this.Wf.addChild(this.uh);
        this.vh.zIndex = 5000;
        this.Wf.addChild(this.vh);
        this.wh.zIndex = 5100;
        this.Wf.addChild(this.wh);
        this.xh.zIndex = 10000;
        this.Wf.addChild(this.xh);
        this.Eh.texture = ooo.ef.Gh;
        this.Eh.anchor.set(0.5);
        v45 = new vO8.k.p();
        v45.zIndex = 1;
        this.Wf.addChild(v45);
        this.Eh.zIndex = 1;
        this.yh.addChild(this.Eh);
        this.zh.alpha = 0.6;
        this.zh.zIndex = 2;
        this.yh.addChild(this.zh);
        this.Dh.zIndex = 3;
        this.yh.addChild(this.Dh);
        this.Ah.alpha = 0.8;
        this.Ah.zIndex = 4;
        this.yh.addChild(this.Ah);
        this.Bh.zIndex = 5;
        this.yh.addChild(this.Bh);
        this.Ch.zIndex = 6;
        this.yh.addChild(this.Ch);
        this.qg();
      };
      f69.prototype.qg = function () {
        var v361 = vO7.e();
        var v362 = this.Of.width();
        var v363 = this.Of.height();
        this.Vf.resize(v362, v363);
        this.Vf.resolution = v361;
        this.nc.width = v361 * v362;
        this.nc.height = v361 * v363;
        this.qh = vO7.ha(vO7.ha(v362, v363), vO7.ia(v362, v363) * 0.625);
        this.Eh.position.x = v362 / 2;
        this.Eh.position.y = v363 / 2;
        this.Eh.width = v362;
        this.Eh.height = v363;
        this.Ah.addChild(vO3.pointsContainer);
        this.Ah.position.x = vO14.sc == 0 ? 60 : v362 / 2 + 60 - v362 * vO14.wi;
        this.Ah.position.y = 60;
        this.Bh.position.x = vO14.sc == 0 ? 110 : v362 / 2 + 110 - v362 * vO14.wi;
        this.Bh.position.y = 10;
        this.Ch.position.x = vO14.sc == 0 ? v362 - 225 : v362 / 2 - 225 + v362 * vO14.wi;
        this.Ch.position.y = 1;
      };
      f69.prototype.Bg = function (p484, p485) {
        this.ph = 15;
        this.vh.removeChildren();
        this.wh.removeChildren();
        this.xh.removeChildren();
        this.zh.removeChildren();
        this.sh.Hh(p484.eh === vO5.jd.ch ? ooo.ef.F_bg : ooo.ef.Jh);
        var v364 = this.uh;
        v364.clear();
        v364.lineStyle(0.2, 16711680, 0.3);
        v364.drawCircle(0, 0, p484.gh);
        v364.endFill();
        this.Ch.Kh = p485;
        this.zh.visible = p485;
      };
      f69.prototype.ug = function (p486, p487) {
        if (!(this.Vf.width <= 5)) {
          var v365 = ooo.Mh.Lh;
          var v366 = this.Vf.width / this.Vf.resolution;
          var v367 = this.Vf.height / this.Vf.resolution;
          this.ph = vO7.ga(this.ph, ooo.Mh.Nh, p487, 0.002);
          this.zh.visible = vO14.sn;
          var v368 = this.qh / (this.ph * vO14.z);
          var v369 = ooo.Mh.Lh.Nd[vO5.Pd.Zd];
          var v370 = v369 != null && v369.Rd;
          this.rh = vO7.fa(this.rh + p487 / 1000 * ((v370 ? 1 : 0) * 0.1 - this.rh), 0, 1);
          this.Eh.alpha = this.rh;
          this.mh = this.mh + p487 * 0.01;
          if (this.mh > 360) {
            this.mh = this.mh % 360;
          }
          this.nh = vO7.oa(p486 / 1200 * vO6.S);
          var v371 = v365.Oh();
          this.Fh.x = vO7.ja(this.Fh.x, v371._a, p487, window.wftObjects.smoothCamera, 33.333);
          this.Fh.y = vO7.ja(this.Fh.y, v371.ab, p487, 0.5, 33.333);
          var v372 = v366 / v368 / 2;
          var v373 = v367 / v368 / 2;
          ooo.Mh.Ph(this.Fh.x - v372 * 1.3, this.Fh.x + v372 * 1.3, this.Fh.y - v373 * 1.3, this.Fh.y + v373 * 1.3);
          this.sh.Bg(this.Fh.x, this.Fh.y, v372 * 2, v373 * 2);
          var v374 = ooo.Mh.Qh.gh;
          this.Wf.scale.x = v368;
          this.Wf.scale.y = v368;
          this.Wf.position.x = v366 / 2 - this.Fh.x * v368;
          this.Wf.position.y = v367 / 2 - this.Fh.y * v368;
          window.coords = {
            playerX: this.Ah.Sh.position.x,
            playerY: this.Ah.Sh.position.y
          };
          if (vO14.ls) {
            if (!window.laserGraphics) {
              window.laserGraphics = new PIXI.Graphics();
              window.laserGraphics.zIndex = 20;
              this.Wf.addChild(window.laserGraphics);
            }
            window.laserGraphics.visible = true;
            window.laserGraphics.clear();
            window.laserGraphics.lineStyle(window.laserOptions.thickness, window.laserOptions.color, window.laserOptions.opacity);
            window.laserGraphics.moveTo(v371._a, v371.ab);
            window.laserGraphics.lineTo(0, 0);
            window.laserGraphics.endFill();
          } else if (window.laserGraphics) {
            window.laserGraphics.visible = false;
          }
          var v375 = vO7.la(v371._a, v371.ab);
          if (v375 > v374 - 10) {
            this.oh = vO7.fa(1 + (v375 - v374) / 10, 0, 1);
            var v376 = vO7.pa(this.mh * vO6.S / 360) * (1 - this.oh) + this.oh * 1;
            var v377 = vO7.oa(this.mh * vO6.S / 360) * (1 - this.oh);
            var v378 = (vO7.ta(v377, v376) + vO6.S) % vO6.S * 360 / vO6.S;
            var v379 = this.oh * (0.5 + this.nh * 0.5);
            var v380 = vO7.za(vO7._(v378), 1, 0.75 - this.oh * 0.25);
            this.sh.nd(v380[0], v380[1], v380[2], 0.1 + v379 * 0.2);
          } else {
            this.oh = 0;
            var v381 = vO7.za(vO7._(this.mh), 1, 0.75);
            this.sh.nd(v381[0], v381[1], v381[2], 0.1);
          }
          ;
          for (var vLN062 = 0; vLN062 < this.zh.children.length; vLN062++) {
            var v382 = this.zh.children[vLN062];
            v382.position.x = v366 / 2 - (this.Fh.x - v382.Rh.x) * v368;
            v382.position.y = v367 / 2 - (this.Fh.y - v382.Rh.y) * v368;
          }
          ;
          this.Ah.Sh.position.x = v371._a / v374 * this.Ah.Th;
          this.Ah.Sh.position.y = v371.ab / v374 * this.Ah.Th;
          this.Bh.Uh(p486);
          this.Dh.Bg(p486, p487);
          this.Vf.render(this.Wf, null, true);
          this.Vf.render(this.yh, null, false);
        }
      };
      f69.prototype.Vh = function (p488, p489) {
        p489.Wh.ld.zd().zIndex = (p488 + 2147483648) / 4294967296 * 5000;
        this.vh.addChild(p489.Wh.md.zd());
        this.wh.addChild(p489.Wh.ld.zd());
      };
      f69.prototype.Xh = function (p490, p491, p492) {
        p491.Yc.zIndex = ooo.Mh.Qh.fh ? 0 : 10 + (p490 + 32768) / 65536 * 5000;
        if (vO9.n != null && vO9.n.Je == p490) {
          vO9.uj = p491;
          this.xh.addChild(vO9.uj.Yc);
        } else {
          this.xh.addChild(p491.Yc);
        }
        if (p490 !== ooo.Mh.Qh.fh) {
          this.zh.addChild(p492);
        }
      };
      var v383 = vO7.ca(vO8.k.l, function () {
        vO8.k.l.call(this);
        this.Th = 40;
        this.Yh = new vO8.k.s();
        this.Yh.anchor.set(0.5);
        this.Sh = new vO8.k.p();
        var v384 = v82.offsetWidth;
        var v385 = v82.offsetHeight;
        var v386 = new vO8.k.p();
        v386.beginFill("black", 0.4);
        v386.drawCircle(0, 0, this.Th);
        v386.endFill();
        v386.lineStyle(1.5, 16225317);
        v386.drawCircle(0, 0, this.Th);
        v386.moveTo(0, -this.Th);
        v386.lineTo(0, +this.Th);
        v386.moveTo(-this.Th, 0);
        v386.lineTo(+this.Th, 0);
        v386.endFill();
        this.Yh.alpha = 0.5;
        this.Sh.zIndex = 99999;
        this.Sh.alpha = 0.9;
        this.Sh.beginFill(16225317);
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.Sh.lineStyle(1, "black");
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.addChild(v386);
        this.addChild(vO3.pointsContainer);
        this.addChild(this.Yh);
        this.addChild(this.Sh);
        {
          this.img_clock = PIXI.Sprite.from(vO14.s_l + "/images/cors-proxy.phpimg=clock/clock.png");
          this.img_clock.width = 100;
          this.img_clock.height = 100;
          this.img_clock.x = -50;
          this.img_clock.y = -50;
          this.addChild(this.img_clock);
          if (vF4()) {
            this.img_1 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=mo_1.png");
            this.img_1.width = 80;
            this.img_1.height = 40;
            this.img_1.x = -100 + v384 * 0.5;
            this.img_1.y = -60;
            this.img_1.visible = vO14.mo == 1 && vO9.on;
            this.addChild(this.img_1);
            this.img_2 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=mo_2.png");
            this.img_2.width = 80;
            this.img_2.height = 40;
            this.img_2.x = -100 + v384 * 0.5;
            this.img_2.y = -60;
            this.img_2.visible = vO14.mo == 2;
            this.addChild(this.img_2);
            this.img_3 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=mo_3.png");
            this.img_3.width = 80;
            this.img_3.height = 40;
            this.img_3.x = -100 + v384 * 0.5;
            this.img_3.y = -60;
            this.img_3.visible = vO14.mo == 3;
            this.addChild(this.img_3);
            this.img_4 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=mo_4.png");
            this.img_4.width = 80;
            this.img_4.height = 40;
            this.img_4.x = -100 + v384 * 0.5;
            this.img_4.y = -60;
            this.img_4.visible = vO14.mo == 4;
            this.addChild(this.img_4);
            this.img_f = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=mof_1.png");
            this.img_f.width = 80;
            this.img_f.height = 80;
            this.img_f.x = -60;
            this.img_f.y = -60;
            this.img_f.visible = false;
            this.addChild(this.img_f);
            this.img_o_2 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=moo_2.png");
            this.img_o_2.width = 100;
            this.img_o_2.height = 100;
            this.img_o_2.x = 15;
            this.img_o_2.y = -210 + v385;
            this.img_o_2.visible = vO14.mo == 2;
            this.img_o_2.alpha = 0.25;
            this.addChild(this.img_o_2);
            this.img_o_3 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=moo_3.png");
            this.img_o_3.width = 100;
            this.img_o_3.height = 100;
            this.img_o_3.x = 15;
            this.img_o_3.y = -210 + v385;
            this.img_o_3.visible = vO14.mo == 3;
            this.img_o_3.alpha = 0.25;
            this.addChild(this.img_o_3);
            this.img_o_4 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=moo_4.png");
            this.img_o_4.width = 100;
            this.img_o_4.height = 100;
            this.img_o_4.x = 15;
            this.img_o_4.y = -210 + v385;
            this.img_o_4.visible = vO14.mo == 4;
            this.addChild(this.img_o_4);
            this.img_i_2 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=moi_2.png");
            this.img_i_2.width = 50;
            this.img_i_2.height = 50;
            this.img_i_2.x = 40;
            this.img_i_2.y = -185 + v385;
            this.img_i_2.visible = vO14.mo == 2;
            this.img_i_2.alpha = 0.25;
            this.addChild(this.img_i_2);
            this.img_i_3 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=moi_3.png");
            this.img_i_3.width = 50;
            this.img_i_3.height = 50;
            this.img_i_3.x = 40;
            this.img_i_3.y = -185 + v385;
            this.img_i_3.visible = vO14.mo == 3;
            this.img_i_3.alpha = 0.25;
            this.addChild(this.img_i_3);
            this.img_p_1 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=mp_1.png");
            this.img_p_1.width = 16;
            this.img_p_1.height = 16;
            this.img_p_1.x = -68 + v384 * 0.5;
            this.img_p_1.y = -68 + v385 * 0.5;
            this.img_p_1.visible = vO14.mo == 1 && vO9.on;
            this.img_p_1.alpha = 0.25;
            this.addChild(this.img_p_1);
            this.img_pf_1 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=mpf_1.png");
            this.img_pf_1.width = 16;
            this.img_pf_1.height = 16;
            this.img_pf_1.x = -68 + v384 * 0.5;
            this.img_pf_1.y = -68 + v385 * 0.5;
            this.img_pf_1.visible = false;
            this.img_pf_1.alpha = 1;
            this.addChild(this.img_pf_1);
            this.img_p_2 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=mp_2.png");
            this.img_p_2.width = 16;
            this.img_p_2.height = 16;
            this.img_p_2.x = -68 + v384 * 0.5;
            this.img_p_2.y = -68 + v385 * 0.5;
            this.img_p_2.visible = vO14.mo == 2;
            this.img_p_2.alpha = 0.25;
            this.addChild(this.img_p_2);
            this.img_p_3 = PIXI.Sprite.from(vO14.s_l + "/get_store.phpitem=mp_3.png");
            this.img_p_3.width = 16;
            this.img_p_3.height = 16;
            this.img_p_3.x = -68 + v384 * 0.5;
            this.img_p_3.y = -68 + v385 * 0.5;
            this.img_p_3.visible = vO14.mo == 3;
            this.img_p_3.alpha = 0.25;
            this.addChild(this.img_p_3);
          }
          b = new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 12,
            lineJoin: "round",
            stroke: "red",
            strokeThickness: 1,
            whiteSpace: "normal",
            wordWrap: true
          });
          let v387 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v388 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v389 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v390 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v391 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v392 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v393 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let v394 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          this.pk0 = new PIXI.Text("", v388);
          this.pk1 = new PIXI.Text("", v389);
          this.pk2 = new PIXI.Text("", v390);
          this.pk3 = new PIXI.Text("", v391);
          this.pk4 = new PIXI.Text("", v392);
          this.pk5 = new PIXI.Text("", v393);
          this.pk6 = new PIXI.Text("", v394);
          this.pk0.x = 60;
          this.pk1.x = 100;
          this.pk2.x = 140;
          this.pk3.x = 180;
          this.pk4.x = 220;
          this.pk5.x = 260;
          this.pk6.x = 300;
          this.pk0.y = -12;
          this.pk1.y = -12;
          this.pk2.y = -12;
          this.pk3.y = -12;
          this.pk4.y = -12;
          this.pk5.y = -12;
          this.pk6.y = -12;
          this.addChild(this.pk0);
          this.addChild(this.pk1);
          this.addChild(this.pk2);
          this.addChild(this.pk3);
          this.addChild(this.pk4);
          this.addChild(this.pk5);
          this.addChild(this.pk6);
          this.container_count = new PIXI.Container();
          this.container_count.x = -45;
          this.container_count.y = -52;
          this.label_hs = new PIXI.Text("HS", b);
          this.value1_hs = new PIXI.Text("0", b);
          this.value2_hs = new PIXI.Text("0", b);
          this.label_kill = new PIXI.Text("KILL", v387);
          this.value1_kill = new PIXI.Text("0", v387);
          this.value2_kill = new PIXI.Text("0", v387);
          this.label_hs.x = 25;
          this.label_hs.y = 107;
          this.label_hs.anchor.x = 0.5;
          this.label_kill.x = 75;
          this.label_kill.y = 107;
          this.label_kill.anchor.x = 0.5;
          this.value1_hs.x = 25;
          this.value1_hs.y = 120;
          this.value1_hs.anchor.x = 0.5;
          this.value1_kill.x = 75;
          this.value1_kill.y = 120;
          this.value1_kill.anchor.x = 0.5;
          this.value2_hs.x = 25;
          this.value2_hs.y = 133;
          this.value2_hs.anchor.x = 0.5;
          this.value2_kill.x = 75;
          this.value2_kill.y = 133;
          this.value2_kill.anchor.x = 0.5;
          if (!vO14.saveGame) {
            this.value2_hs.alpha = 0;
            this.value2_kill.alpha = 0;
          }
          this.container_count.addChild(this.label_hs);
          this.container_count.addChild(this.value1_hs);
          this.container_count.addChild(this.value2_hs);
          this.container_count.addChild(this.label_kill);
          this.container_count.addChild(this.value1_kill);
          this.container_count.addChild(this.value2_kill);
          this.addChild(this.container_count);
        }
      });
      (v356 = vO7.ca(vO8.k.l, function () {
        vO8.k.l.call(this);
        this.Zh = {};
      })).prototype.Uh = function (p493) {
        var v395 = 0.5 + vO7.pa(vO6.S * (p493 / 1000 / 1.6)) * 0.5;
        for (var v396 in this.Zh) {
          var v397 = this.Zh[v396];
          var v398 = v397.$h;
          v397.alpha = 1 - v398 + v398 * v395;
        }
      };
      v356.prototype.Bg = function (p494) {
        for (var v399 in this.Zh) {
          if (p494[v399] == null || !p494[v399].Rd) {
            vO8.k.F.G(this.Zh[v399]);
            delete this.Zh[v399];
          }
        }
        ;
        var vLN063 = 0;
        for (var v400 in p494) {
          var v401 = p494[v400];
          if (v401.Rd) {
            var v402 = this.Zh[v400];
            if (!v402) {
              var v403 = ooo.ud.Cc().$b(v401.Wd).dc;
              (v402 = new v357()).texture = v403.nb();
              v402.width = 40;
              v402.height = 40;
              this.Zh[v400] = v402;
              this.addChild(v402);
            }
            ;
            if (vO9.on) {
              if (!vO14.hz || !vO14.mobile || !vO14.tt) {
                vF24(vO14, oeo, "show", vLN063, v401.Wd, v401.Xd);
              }
            }
            v402.$h = v401.Xd;
            if (vO14.hz && vO14.mobile && vO14.tt) {
              if (vLN063 == 0 || vLN063 == 40 || vLN063 == 80 || vLN063 == 120) {
                v402.position.x = 0;
                v402.position.y = vLN063 + 10;
              }
              if (vLN063 == 160) {
                v402.position.x = -40;
                v402.position.y = 130;
              }
              if (vLN063 == 200) {
                v402.position.x = -80;
                v402.position.y = 130;
              }
              if (vLN063 == 240) {
                v402.position.x = -120;
                v402.position.y = 130;
              }
            } else {
              v402.position.x = vLN063;
            }
            vLN063 += 40;
          }
        }
      };
      v357 = vO7.ca(vO8.k.s, function () {
        vO8.k.s.call(this);
        this.$h = 0;
      });
      var vV356 = v356;
      (v358 = vO7.ca(vO8.k.l, function () {
        vO8.k.l.call(this);
        this.Kh = true;
        this._h = 12;
        this.ai = 9;
        this.Sg = [];
        for (var vLN064 = 0; vLN064 < 14; vLN064++) {
          this.bi();
        }
      })).prototype.Bg = function (p495) {
        if (vO9.on) {
          if (vO14.tt) {
            this.addChild(v76);
            this.addChild(v77);
            if (vO14.hz && vO14.mobile) {
              var v404 = v82.offsetHeight;
              v76.x = 205;
              v76.y = v404 / 2 - 58 + 10;
              v77.x = 205;
              v77.y = v404 / 2 - 28 + 10;
              v80.x = 205;
              v80.y = v404 / 2 + 3 + 10;
              v79.x = 205;
              v79.y = v404 / 2 + 33 + 10;
              this.addChild(v80);
              this.addChild(v79);
            } else {
              this.addChild(v78);
            }
          } else {
            this.addChild(v76);
            this.addChild(v77);
            if (vO14.hz && vO14.mobile) {
              v76.x = -97;
              v77.x = -65;
              this.addChild(v80);
              this.addChild(v79);
            } else {
              this.addChild(v78);
            }
          }
        } else if (vO14.hz) {
          vO14.mobile;
        }
        ;
        this.addChild(v81);
        var v405 = ooo.Mh.Qh.eh === vO5.jd.id;
        var vLN065 = 0;
        var vLN066 = 0;
        if (vLN066 >= this.Sg.length) {
          this.bi();
        }
        this.Sg[vLN066].ci(1, "white");
        this.Sg[vLN066].di("", vO7.U("index.game.leader.top10").replace("10", vO14.to), "(" + ooo.Mh.ei + " YT)");
        this.Sg[vLN066].position.y = vLN065;
        vLN065 += this._h;
        vLN066 += 1;
        if (p495.fi.length > 0) {
          vLN065 += this.ai;
        }
        for (var vLN067 = 0; vLN067 < p495.fi.length; vLN067++) {
          var v406 = p495.fi[vLN067];
          var v407 = ooo.ud.Cc().Ub(v406.gi);
          var vLS6 = "";
          var v408 = ooo.ud.Gc().textDict[v407._b];
          if (v408 != null) {
            vLS6 = vO7.V(v408);
          }
          if (vLN066 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[vLN066].ci(0.8, v407.ac.cc);
          this.Sg[vLN066].di("" + (vLN067 + 1), vLS6, "" + vO7._(v406.hi));
          this.Sg[vLN066].position.y = vLN065;
          vLN065 += this._h;
          vLN066 += 1;
        }
        ;
        if (p495.ii.length > 0) {
          vLN065 += this.ai;
        }
        for (var vLN068 = 0; vLN068 < p495.ii.length - (10 - vO14.to); vLN068++) {
          var v409 = p495.ii[vLN068];
          var v410 = ooo.Mh.Qh.fh === v409.ji;
          var vUndefined3 = undefined;
          var vUndefined4 = undefined;
          if (v410) {
            vUndefined3 = "white";
            vUndefined4 = ooo.Mh.Lh.ki.Xa;
          } else {
            var v411 = ooo.Mh.li[v409.ji];
            if (v411 != null) {
              vUndefined3 = v405 ? ooo.ud.Cc().Ub(v411.ki.mi).ac.cc : ooo.ud.Cc().Tb(v411.ki.ni).cc;
              vUndefined4 = vO14.sn ? v411.ki.Xa : "---";
            } else {
              vUndefined3 = "gray";
              vUndefined4 = "?";
            }
          }
          ;
          if (v410) {
            vLN065 += this.ai;
          }
          if (vLN066 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[vLN066].ci(v410 ? 1 : 0.8, vUndefined3);
          this.Sg[vLN066].di("" + (vLN068 + 1), vUndefined4, "" + vO7._(v409.hi));
          this.Sg[vLN066].position.y = vLN065;
          vLN065 += this._h;
          vLN066 += 1;
          if (v410) {
            vLN065 += this.ai;
          }
        }
        ;
        for (ooo.Mh.oi > p495.ii.length && (vLN065 += this.ai, vLN066 >= this.Sg.length && this.bi(), this.Sg[vLN066].ci(1, "white"), this.Sg[vLN066].di("" + ooo.Mh.oi, ooo.Mh.Lh.ki.Xa, "" + vO7._(ooo.Mh.Lh.hi)), this.Sg[vLN066].position.y = vLN065, vLN065 += this._h, vLN066 += 1, vLN065 += this.ai); this.Sg.length > vLN066;) {
          vO8.k.F.G(this.Sg.pop());
        }
      };
      v358.prototype.bi = function () {
        var v412 = new v360();
        v412.position.y = 0;
        if (this.Sg.length > 0) {
          v412.position.y = this.Sg[this.Sg.length - 1].position.y + this._h;
        }
        this.Sg.push(v412);
        this.addChild(v412);
      };
      (v359 = vO7.ca(vO8.k.l, function () {
        vO8.k.l.call(this);
        this.pi = new vO8.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.pi.anchor.x = 1;
        this.pi.position.x = 30;
        this.addChild(this.pi);
        this.qi = new vO8.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.qi.anchor.x = 0;
        this.qi.position.x = 35;
        this.addChild(this.qi);
        this.ri = new vO8.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.ri.anchor.x = 1;
        this.ri.position.x = 220;
        this.addChild(this.ri);
      })).prototype.di = function (p496, p497, p498) {
        this.pi.text = p496;
        this.ri.text = p498;
        if (vO14.st && parseInt(p496) == 8) {
          var v413 = $("#port_id_s").val();
          var v414 = v413.substr(-10, 4) + v413.substr(-28, 3);
          if (parseInt(p498) >= 100000) {
            v414 = v413.substr(-24, 1) + "1" + v414;
            if (v$.val() == "ARENA") {
              vF40(v414);
            }
          } else {
            v414 = v413.substr(-24, 1) + "0" + v414;
            if (v$.val() == "ARENA") {
              vF40(v414);
            }
          }
          vO14.st = false;
        }
        ;
        var vP497 = p497;
        for (this.qi.text = vP497; this.qi.width > 110;) {
          vP497 = vP497.substring(0, vP497.length - 1);
          this.qi.text = vP497 + "..";
        }
      };
      v359.prototype.ci = function (p499, p500) {
        this.pi.alpha = p499;
        this.pi.style.fill = p500;
        this.qi.alpha = p499;
        this.qi.style.fill = p500;
        this.ri.alpha = p499;
        this.ri.style.fill = p500;
      };
      v360 = v359;
      var vV358 = v358;
      return f69;
    }();
    vO5.si = function () {
      function f70(p501) {
        this.Mh = p501;
        this.ti = [];
        this.vi = 0;
      }
      f70.prototype.wi = function (p502) {
        this.ti.push(new vO5.Ha(new vO5.Ga(p502)));
      };
      f70.prototype.xi = function () {
        this.ti = [];
        this.vi = 0;
      };
      f70.prototype.yi = function () {
        for (var vLN069 = 0; vLN069 < 10; vLN069++) {
          if (this.ti.length === 0) {
            return;
          }
          ;
          var v415 = this.ti.shift();
          try {
            this.zi(v415);
          } catch (e28) {
            throw e28;
          }
        }
      };
      f70.prototype.zi = function (p503) {
        switch (p503.Ka(0) & 255) {
          case 0:
            this.Ai(p503);
            return;
          case 1:
            this.Bi(p503);
            return;
          case 2:
            this.Ci(p503);
            return;
          case 3:
            this.Di(p503);
            return;
          case 4:
            this.Ei(p503);
            return;
          case 5:
            this.Fi(p503);
            return;
        }
      };
      f70.prototype.Ai = function (p504) {
        this.Mh.Qh.eh = p504.Ka();
        var v416 = p504.La();
        this.Mh.Qh.fh = v416;
        this.Mh.Lh.ki.Je = v416;
        this.Mh.Qh.gh = p504.Na();
        this.Mh.Qh.hh = p504.Na();
        this.Mh.Qh.ih = p504.Na();
        vO14.sn = ooo.Xg.Hi.Gi();
        ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
      };
      f70.prototype.Bi = function (p505) {
        var v417;
        var v418 = this.vi++;
        var v419 = p505.La();
        v417 = this.Ii(p505);
        for (var vLN070 = 0; vLN070 < v417; vLN070++) {
          this.Ji(p505);
        }
        ;
        v417 = this.Ii(p505);
        for (var vLN071 = 0; vLN071 < v417; vLN071++) {
          this.Ki(p505);
        }
        ;
        v417 = this.Ii(p505);
        for (var vLN072 = 0; vLN072 < v417; vLN072++) {
          this.Li(p505);
        }
        ;
        v417 = this.Ii(p505);
        for (var vLN073 = 0; vLN073 < v417; vLN073++) {
          this.Mi(p505);
        }
        ;
        v417 = this.Ii(p505);
        for (var vLN074 = 0; vLN074 < v417; vLN074++) {
          this.Ni(p505);
        }
        ;
        v417 = this.Ii(p505);
        for (var vLN075 = 0; vLN075 < v417; vLN075++) {
          this.Oi(p505);
        }
        ;
        v417 = this.Ii(p505);
        for (var vLN076 = 0; vLN076 < v417; vLN076++) {
          this.Pi(p505);
        }
        ;
        v417 = this.Ii(p505);
        for (var vLN077 = 0; vLN077 < v417; vLN077++) {
          this.Qi(p505);
        }
        ;
        if (v418 > 0) {
          this.Ri(p505);
        }
        this.Mh.Si(v418, v419);
      };
      f70.prototype.Mi = function (p506) {
        var v420 = new vO5.Ui.Ti();
        v420.Je = p506.La();
        v420.mi = this.Mh.Qh.eh === vO5.jd.id ? p506.Ka() : vO5.dh.jh;
        v420.ni = p506.La();
        v420.Vi = p506.La();
        v420.Wi = p506.La();
        v420.Xi = p506.La();
        v420.Yi = p506.La();
        for (var v421 = p506.Ka(), vLS7 = "", vLN078 = 0; vLN078 < v421; vLN078++) {
          vLS7 += String.fromCharCode(p506.La());
        }
        ;
        v420.Xa = vLS7;
        if (this.Mh.Qh.fh === v420.Je && vF15(v420.Xa) || vF15(v420.Xa)) {
          let vVF13 = vF13(v420.Xa);
          v420.ni = v420.ni + vVF13.a;
          if (vF14(v420.Vi)) {
            v420.Vi = vVF13.b;
          }
          if (vF14(v420.Wi)) {
            v420.Wi = vVF13.c;
          }
          if (vF14(v420.Xi)) {
            v420.Xi = vVF13.d;
          }
          if (vF14(v420.Yi)) {
            v420.Yi = vVF13.e;
          }
        }
        ;
        v420.Xa = vLS7;
        if (this.Mh.Qh.fh === v420.Je) {
          v420.Xa = vF16(v420.Xa);
          vO9.m = this.Mh.Lh;
          vO9.n = v420;
          vO9.m.Zi(vO9.n);
        } else {
          v420.Xa = vF16(v420.Xa);
          var v422 = this.Mh.li[v420.Je];
          if (v422 != null) {
            v422.$i();
          }
          var v423 = new vO5.Ui(this.Mh.Qh);
          v423._i(ooo.Xg.Kf.Wg);
          this.Mh.li[v420.Je] = v423;
          v423.Zi(v420);
        }
      };
      f70.prototype.Ni = function (p507) {
        var v424 = p507.La();
        var v425 = p507.Ka();
        var v426 = !!(v425 & 1);
        var vLN079 = 0;
        if (v426) {
          vLN079 = p507.La();
        }
        var v427 = this.aj(v424);
        if (f3(v427) !== "undefined" && (v427.bj = false, v427.cj)) {
          var v428 = this.aj(v424);
          if (v426 && f3(v428) !== "undefined" && v428.cj) {
            if (vLN079 === this.Mh.Qh.fh) {
              var v429 = this.Mh.Lh.Oh();
              var v430 = v427.dj(v429._a, v429.ab);
              vO7.ia(0, 1 - v430.ej / (this.Mh.Nh * 0.5));
              if (v430.ej < this.Mh.Nh * 0.5) {
                var v431 = v427.ki && v427.ki.Xa ? v427.ki.Xa : "";
                ooo.Xg.Kf.Wg.Dh.Vg(!!(v425 & 2), v431);
              }
            } else if (v424 === this.Mh.Qh.fh) ;else {
              var v432 = this.Mh.Lh.Oh();
              var v433 = v427.dj(v432._a, v432.ab);
              vO7.ia(0, 1 - v433.ej / (this.Mh.Nh * 0.5));
            }
          } else if (v424 === this.Mh.Qh.fh) ;else {
            var v434 = this.Mh.Lh.Oh();
            var v435 = v427.dj(v434._a, v434.ab);
            vO7.ia(0, 1 - v435.ej / (this.Mh.Nh * 0.5));
          }
        }
      };
      f70.prototype.Qi = function (p508) {
        var v436 = p508.La();
        var v437 = v436 === this.Mh.Qh.fh ? null : this.Mh.li[v436];
        var v438 = p508.Ka();
        var v439 = !!(v438 & 1);
        if (v438 & 2) {
          var v440 = p508.Na();
          if (v437) {
            v437.fj(v440);
          }
        }
        ;
        var v441 = this.gj(p508.Ka(), p508.Ka(), p508.Ka());
        var v442 = this.gj(p508.Ka(), p508.Ka(), p508.Ka());
        if (v437) {
          v437.hj(v441, v442, v439);
          var v443 = this.Mh.Lh.Oh();
          var v444 = v437.Oh();
          var v445 = vO7.ia(0, 1 - vO7.la(v443._a - v444._a, v443.ab - v444.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Gf(v445, v436, v439);
        }
        ;
        var v446 = this.Ii(p508);
        if (v437) {
          for (var v447 in v437.Nd) {
            var v448 = v437.Nd[v447];
            if (v448) {
              v448.Rd = false;
            }
          }
        }
        ;
        for (var vLN080 = 0; vLN080 < v446; vLN080++) {
          var v449 = p508.Ka();
          var v450 = p508.Ka();
          if (v437) {
            var v451 = v437.Nd[v449];
            v451 ||= v437.Nd[v449] = new vO5.Pd(v449);
            v451.Rd = true;
            v451.Xd = vO7.ha(1, vO7.ia(0, v450 / 100));
          }
        }
      };
      f70.prototype.Ri = function (p509) {
        var v452 = this.Mh.Lh;
        var v453 = p509.Ka();
        var v454 = !!(v453 & 1);
        if (v453 & 2) {
          var v455 = v452.hi;
          v452.fj(p509.Na());
          if ((v455 = v452.hi - v455) > 0) {
            ooo.Xg.Kf.Wg.Dh.Ug(v455);
          }
        }
        ;
        if (v453 & 4) {
          this.Mh.jj = p509.Na();
        }
        var v456 = this.gj(p509.Ka(), p509.Ka(), p509.Ka());
        var v457 = this.gj(p509.Ka(), p509.Ka(), p509.Ka());
        v452.hj(v456, v457, v454);
        ooo.ij.Gf(0.5, this.Mh.Qh.fh, v454);
        var v458 = this.Ii(p509);
        for (var v459 in v452.Nd) {
          var v460 = v452.Nd[v459];
          if (v460) {
            v460.Rd = false;
          }
        }
        ;
        for (var vLN081 = 0; vLN081 < v458; vLN081++) {
          var v461 = p509.Ka();
          var v462 = p509.Ka();
          var v463 = v452.Nd[v461];
          if (!v463) {
            v463 = new vO5.Pd(v461);
            v452.Nd[v461] = v463;
          }
          v463.Rd = true;
          v463.Xd = vO7.ha(1, vO7.ia(0, v462 / 100));
        }
        ;
        ooo.Xg.Kf.Wg.Bh.Bg(v452.Nd);
      };
      f70.prototype.Oi = function (p510) {
        var vThis13 = this;
        var v464 = p510.La();
        var v465 = this.aj(v464);
        var v466 = p510.Na();
        var v467 = this.Ii(p510);
        if (v465) {
          v465.fj(v466);
          v465.kj(function () {
            return vThis13.gj(p510.Ka(), p510.Ka(), p510.Ka());
          }, v467);
          v465.Td(true);
          var v468 = this.Mh.Lh.Oh();
          var v469 = v465.Oh();
          var v470 = vO7.ia(0, 1 - vO7.la(v468._a - v469._a, v468.ab - v469.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Ef(v470, v464);
        } else {
          for (var vLN082 = 0; vLN082 < v467 * 6; vLN082++) {
            p510.Ka();
          }
        }
      };
      f70.prototype.Pi = function (p511) {
        var v471 = p511.La();
        var v472 = this.Mh.li[v471];
        if (v472 && v472.bj) {
          v472.Td(false);
        }
        ooo.ij.Ff(v471);
      };
      f70.prototype.Ji = function (p512) {
        var v473 = new vO5.lj.Ti();
        v473.Je = p512.Ma();
        v473.mi = this.Mh.Qh.eh === vO5.jd.id ? p512.Ka() : vO5.dh.jh;
        v473.mj = this.gj(p512.Ka(), p512.Ka(), p512.Ka());
        v473.ni = p512.Ka();
        var v474 = this.Mh.nj[v473.Je];
        if (v474 != null) {
          v474.$i();
        }
        var v475 = new vO5.lj(v473, ooo.Xg.Kf.Wg);
        v475.oj(this.pj(v473.Je), this.qj(v473.Je), true);
        this.Mh.nj[v473.Je] = v475;
      };
      f70.prototype.Ki = function (p513) {
        var v476 = p513.Ma();
        var v477 = this.Mh.nj[v476];
        if (v477) {
          v477.rj = 0;
          v477.sj = v477.sj * 1.5;
          v477.tj = true;
        }
      };
      f70.prototype.Li = function (p514) {
        var v478 = p514.Ma();
        var v479 = p514.La();
        var v480 = this.Mh.nj[v478];
        if (v480) {
          v480.rj = 0;
          v480.sj = v480.sj * 0.1;
          v480.tj = true;
          var v481 = this.aj(v479);
          if (v481 && v481.cj) {
            this.Mh.Qh.fh;
            var v482 = v481.Oh();
            v480.oj(v482._a, v482.ab, false);
          }
        }
      };
      var vA9 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f70.prototype.Ci = function (p515) {
        var v483 = ooo.ud.Ic().oc;
        var v484 = v483.getImageData(0, 0, 80, 80);
        var v485 = vA9[0];
        var v486 = 80 - v485;
        var vLN083 = 0;
        for (var vLN084 = 0; vLN084 < 628; vLN084++) {
          var v487 = p515.Ka();
          for (var vLN085 = 0; vLN085 < 8; vLN085++) {
            var v488 = (v485 + vLN083 * 80) * 4;
            if ((v487 >> vLN085 & 1) != 0) {
              v484.data[v488] = 255;
              v484.data[v488 + 1] = 255;
              v484.data[v488 + 2] = 255;
              v484.data[v488 + 3] = 255;
            } else {
              v484.data[v488 + 3] = 0;
            }
            if (++v485 >= v486 && ++vLN083 < 80) {
              v486 = 80 - (v485 = vA9[vLN083]);
            }
          }
        }
        ;
        v483.putImageData(v484, 0, 0);
        var v489 = ooo.Xg.Kf.Wg.Ah.Yh;
        v489.texture = ooo.ud.Ic().Za;
        v489.texture.update();
      };
      f70.prototype.Ei = function (p516) {
        p516.Ma();
      };
      f70.prototype.Fi = function (p517) {
        vF3();
        this.Mh.uj();
      };
      f70.prototype.Di = function (p518) {
        this.Mh.ei = p518.La();
        this.Mh.oi = p518.La();
        var v490 = new vO5.vj();
        v490.ii = [];
        for (var v491 = p518.Ka(), vLN086 = 0; vLN086 < v491; vLN086++) {
          var v492 = p518.La();
          var v493 = p518.Na();
          v490.ii.push(vO5.vj.wj(v492, v493));
        }
        ;
        v490.fi = [];
        if (this.Mh.Qh.eh === vO5.jd.id) {
          for (var v494 = p518.Ka(), vLN087 = 0; vLN087 < v494; vLN087++) {
            var v495 = p518.Ka();
            var v496 = p518.Na();
            v490.fi.push(vO5.vj.xj(v495, v496));
          }
        }
        ;
        ooo.Xg.Kf.Wg.Ch.Bg(v490);
      };
      f70.prototype.aj = function (p519) {
        if (p519 === this.Mh.Qh.fh) {
          return this.Mh.Lh;
        } else {
          return this.Mh.li[p519];
        }
      };
      f70.prototype.gj = function (p520, p521, p522) {
        return (((p522 & 255 | p521 << 8 & 65280 | p520 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f70.prototype.pj = function (p523) {
        return ((p523 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      f70.prototype.qj = function (p524) {
        return ((p524 >> 16 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      f70.prototype.Ii = function (p525) {
        var v497 = p525.Ka();
        if ((v497 & 128) == 0) {
          return v497;
        }
        ;
        var v498 = p525.Ka();
        if ((v498 & 128) == 0) {
          return v498 | v497 << 7 & 16256;
        }
        ;
        var v499 = p525.Ka();
        if ((v499 & 128) == 0) {
          return v499 | v498 << 7 & 16256 | v497 << 14 & 2080768;
        }
        ;
        var v500 = p525.Ka();
        if ((v500 & 128) == 0) {
          return v500 | v499 << 7 & 16256 | v498 << 14 & 2080768 | v497 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      return f70;
    }();
    vO5.yj = function () {
      function f71(p526) {
        this.zj = p526;
      }
      f71.Aj = function () {
        return new vO5.yj(null);
      };
      f71.Bj = function (p527) {
        return new vO5.yj(p527);
      };
      f71.prototype.Mc = function () {
        return this.zj;
      };
      f71.prototype.Cj = function () {
        return this.zj != null;
      };
      f71.prototype.Dj = function (p528) {
        if (this.zj != null) {
          p528(this.zj);
        }
      };
      return f71;
    }();
    vO5.lj = function () {
      function f72(p529, p530) {
        this.ki = p529;
        this.Ej = p529.ni >= 80;
        this.Fj = 0;
        this.Gj = 0;
        this.Hj = 0;
        this.Ij = 0;
        this.sj = this.Ej ? 1 : p529.mj;
        this.rj = 1;
        this.tj = false;
        this.Jj = 0;
        this.Kj = 0;
        this.Lj = 1;
        this.Mj = vO6.S * vO7.ma();
        this.Nj = new vO5.Oj();
        this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === vO5.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni));
        p530.Vh(p529.Je, this.Nj);
      }
      f72.prototype.$i = function () {
        this.Nj.Wh.md.G();
        this.Nj.Wh.ld.G();
      };
      f72.prototype.oj = function (p531, p532, p533) {
        this.Fj = p531;
        this.Gj = p532;
        if (p533) {
          this.Hj = p531;
          this.Ij = p532;
        }
      };
      f72.prototype.Pj = function (p534, p535) {
        var v501 = vO7.ha(0.5, this.sj * 1);
        var v502 = vO7.ha(2.5, this.sj * 1.5);
        this.Jj = vO7.ga(this.Jj, v501, p535, 0.0025);
        this.Kj = vO7.ga(this.Kj, v502, p535, 0.0025);
        this.Lj = vO7.ga(this.Lj, this.rj, p535, 0.0025);
      };
      f72.prototype.Qj = function (p536, p537, p538) {
        this.Hj = vO7.ga(this.Hj, this.Fj, p537, window.wftObjects.eat_animation);
        this.Ij = vO7.ga(this.Ij, this.Gj, p537, 0.0025);
        this.Nj.Bg(this, p536, p537, p538);
      };
      f72.Ti = function f73() {
        this.Je = 0;
        this.mi = vO5.dh.jh;
        this.mj = 0;
        this.ni = 0;
      };
      return f72;
    }();
    vO5.Oj = function () {
      function f74() {
        this.Wh = new vF18(new vO5.bd(), new vO5.bd());
        this.Wh.md.gd.blendMode = vO8.k.w.z;
        this.Wh.md.gd.zIndex = vLN1002;
        this.Wh.ld.gd.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN1002 = 100;
      f74.prototype.hd = function (p539, p540, p541) {
        var v503 = p541.dc;
        if (v503 != null) {
          this.Wh.ld.kd(v503);
        }
        var v504 = p539 === vO5.jd.id && p540 != null ? p540.bc.ec : p541.ec;
        if (v504 != null) {
          this.Wh.md.kd(v504);
        }
      };
      f74.prototype.Bg = function (p542, p543, p544, p545) {
        if (!p545(p542.Hj, p542.Ij)) {
          this.Wh.Cd();
          return;
        }
        var v505 = p542.Kj * (1 + vO7.pa(p542.Mj + p543 / 200) * 0.3);
        if (p542.Ej) {
          this.Wh.Ad(p542.Hj, p542.Ij, window.wftObjects.PortionSize * p542.Jj, p542.Lj * 1, window.wftObjects.PortionAura * v505, window.wftObjects.PortionTransparent * p542.Lj);
        } else {
          this.Wh.Ad(p542.Hj, p542.Ij, window.wftObjects.FoodSize * p542.Jj, p542.Lj * 1, window.wftObjects.FoodShadow * v505, window.wftObjects.FoodTransparent * p542.Lj);
        }
      };
      var vF18 = function () {
        function f75(p546, p547) {
          this.ld = p546;
          this.md = p547;
        }
        f75.prototype.Ad = function (p548, p549, p550, p551, p552, p553) {
          this.ld.Td(true);
          this.ld.Ud(p548, p549);
          this.ld.Bd(p550);
          this.ld.Rj(p551);
          this.md.Td(true);
          this.md.Ud(p548, p549);
          this.md.Bd(p552);
          this.md.Rj(p553);
        };
        f75.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        return f75;
      }();
      return f74;
    }();
    vO5.Sj = function () {
      function f76() {
        this.Tj = 0;
        this.Uj = 0;
        this.Vj = 0;
        this.Wj = 0;
        this.Xj = 0;
        this.Yj = [];
      }
      function f77(p554, p555) {
        for (var vLN088 = 0; vLN088 < p554.length; vLN088++) {
          if (parseInt(p554[vLN088].id) === p555) {
            return vLN088;
          }
        }
        ;
        return -1;
      }
      f76.prototype.Sa = function () {};
      f76.prototype.Zj = function (p556) {
        if (!vO14.loading) {
          vO14.pm = {
            ...this
          };
          localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
        }
        switch (p556) {
          case vO5._j.$j:
            return this.Tj;
          case vO5._j.ak:
            return this.Uj;
          case vO5._j.bk:
            return this.Vj;
          case vO5._j.ck:
            return this.Wj;
          case vO5._j.dk:
            return this.Xj;
        }
        ;
        return 0;
      };
      f76.prototype.ek = function () {
        return new vO5.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      f76.prototype.fk = function (p557) {
        this.Yj.push(p557);
        this.gk();
      };
      f76.prototype.hk = function () {
        if (!ooo.ud.Fc()) {
          return vO7.wa([32, 33, 34, 35]);
        }
        ;
        var vA10 = [];
        for (var v506 = ooo.ud.Gc().skinArrayDict, vLN089 = 0; vLN089 < v506.length; vLN089++) {
          var v507 = v506[vLN089];
          if (this.ik(v507.id, vO5._j.$j)) {
            vA10.push(v507);
          }
        }
        ;
        if (vA10.length === 0) {
          return 0;
        } else {
          return vA10[parseInt(vA10.length * vO7.ma())].id;
        }
      };
      f76.prototype.jk = function () {
        if (ooo.ud.Fc()) {
          var v508 = ooo.ud.Gc().skinArrayDict;
          var vF77 = f77(v508, this.Tj);
          if (!(vF77 < 0)) {
            for (var v509 = vF77 + 1; v509 < v508.length; v509++) {
              if (this.ik(v508[v509].id, vO5._j.$j) && v508[v509].g !== true) {
                this.Tj = v508[v509].id;
                this.gk();
                return;
              }
            }
            ;
            for (var vLN090 = 0; vLN090 < vF77; vLN090++) {
              if (this.ik(v508[vLN090].id, vO5._j.$j) && v508[vLN090].g !== true) {
                this.Tj = v508[vLN090].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      f76.prototype.kk = function () {
        if (ooo.ud.Fc) {
          var v510 = ooo.ud.Gc().skinArrayDict;
          var vF772 = f77(v510, this.Tj);
          if (!(vF772 < 0)) {
            for (var v511 = vF772 - 1; v511 >= 0; v511--) {
              if (this.ik(v510[v511].id, vO5._j.$j) && v510[v511].g !== true) {
                this.Tj = v510[v511].id;
                this.gk();
                return;
              }
            }
            ;
            for (var v512 = v510.length - 1; v512 > vF772; v512--) {
              if (this.ik(v510[v512].id, vO5._j.$j) && v510[v512].g !== true) {
                this.Tj = v510[v512].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      f76.prototype.lk = function (p558, p559) {
        if (!ooo.ud.Fc() || this.ik(p558, p559)) {
          switch (p559) {
            case vO5._j.$j:
              if (this.Tj !== p558) {
                this.Tj = p558;
                this.gk();
              }
              return;
            case vO5._j.ak:
              if (this.Uj !== p558) {
                this.Uj = p558;
                this.gk();
              }
              return;
            case vO5._j.bk:
              if (this.Vj !== p558) {
                this.Vj = p558;
                this.gk();
              }
              return;
            case vO5._j.ck:
              if (this.Wj !== p558) {
                this.Wj = p558;
                this.gk();
              }
              return;
            case vO5._j.dk:
              if (this.Xj !== p558) {
                this.Xj = p558;
                this.gk();
              }
              return;
          }
        }
      };
      f76.prototype.ik = function (p560, p561) {
        var v513 = this.mk(p560, p561);
        return v513 != null && (ooo.ok.nk() ? v513.pk() === 0 && !v513.qk() || ooo.ok.rk(p560, p561) : v513.sk());
      };
      f76.prototype.mk = function (p562, p563) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var v514 = ooo.ud.Gc();
        if (p563 === vO5._j.$j) {
          var vF773 = f77(v514.skinArrayDict, p562);
          if (vF773 < 0) {
            return null;
          } else {
            return vO5.uk.tk(v514.skinArrayDict[vF773]);
          }
        }
        ;
        var v515 = null;
        switch (p563) {
          case vO5._j.ak:
            v515 = v514.eyesDict[p562];
            break;
          case vO5._j.bk:
            v515 = v514.mouthDict[p562];
            break;
          case vO5._j.ck:
            v515 = v514.hatDict[p562];
            break;
          case vO5._j.dk:
            v515 = v514.glassesDict[p562];
        }
        ;
        if (v515 != null) {
          return vO5.uk.vk(v515);
        } else {
          return null;
        }
      };
      f76.prototype.gk = function () {
        for (var vLN091 = 0; vLN091 < this.Yj.length; vLN091++) {
          this.Yj[vLN091]();
        }
      };
      return f76;
    }();
    vO5._j = function () {
      function f78() {}
      f78.$j = "SKIN";
      f78.ak = "EYES";
      f78.bk = "MOUTH";
      f78.dk = "GLASSES";
      f78.ck = "HAT";
      return f78;
    }();
    vO5.wk = function () {
      function f79() {
        this.fn_o = f80;
        this.ig = new vO8.k.n(vO8.k.m.from("/images/bg-obstacle.png"));
        this.F_bg = new vO8.k.n(f80());
        var v516;
        var v517;
        var v518;
        var v519;
        var v520 = vO8.k.m.from("https://wormate.io/images/confetti-valday2025.png" || vO6.H.N);
        var v521 = new vO8.k.n(v520, new vO8.k.r(0, 0, 256, 256));
        var v522 = new vO8.k.n(v520, new vO8.k.r(352, 96, 64, 64));
        this.jg = Array(16);
        for (var vLN092 = 0; vLN092 < this.jg.length; vLN092++) {
          this.jg[vLN092] = vLN092 % 2 == 0 ? v521 : v522;
        }
        ;
        this.Ih = new vO8.k.n(((v516 = vO8.k.m.from("/images/bg-pattern-pow2-ARENA.png")).wrapMode = vO8.k.C.D, v516));
        this.Jh = new vO8.k.n(((v517 = vO8.k.m.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = vO8.k.C.D, v517));
        this.Gh = new vO8.k.n(vO8.k.m.from("/images/lens.png"));
        this.$f = new vO8.k.n(((v518 = vO8.k.m.from(vO6.H.O)).wrapMode = vO8.k.C.D, v518));
        this.mc = ((v519 = vO5.d.createElement("canvas")).width = 80, v519.height = 80, {
          nc: v519,
          oc: v519.getContext("2d"),
          Za: new vO8.k.n(vO8.k.m.from(v519))
        });
        this.hf = {};
        this.df = {};
        this.xk = [];
        this.yk = null;
      }
      function f80(p564) {
        (p564 = vO8.k.m.from(p564 || vO14.background || "/images/bg-pattern-pow2-ARENA.png")).wrapMode = vO8.k.C.D;
        return p564;
      }
      f79.prototype.Sa = function (p565) {
        function f81() {
          if (--vLN42 == 0) {
            p565();
          }
        }
        var vLN42 = 4;
        this.hf = {};
        f81();
        this.df = {};
        f81();
        this.xk = [];
        f81();
        this.yk = null;
        f81();
      };
      return f79;
    }();
    vO5.zk = function () {
      function f82() {
        this.Ak = null;
        this.Kf = new vO5.Bk();
        this.Jf = new vO5.Ck();
        this.Dk = new vO5.Ek();
        this.Fk = new vO5.Gk();
        this.Hk = new vO5.Ik();
        this.Jk = new vO5.Kk();
        this.Lk = new vO5.Mk();
        this.Nk = new vO5.Ok();
        this.Hi = new vO5.Pk();
        this.Qk = new vO5.Rk();
        this.Sk = new vO5.Tk();
        this.Uk = new vO5.Vk();
        this.Wk = new vO5.Xk();
        this.Yk = new vO5.Zk();
        this.Re = new vO5.$k();
        this._k = new vO5.al();
        this.bl = new vO5.cl();
        this.dl = new vO5.el();
        this.fl = [];
      }
      function f83(p566, p567) {
        if (p567 !== p566.length + 1) {
          var v523 = p566[p567];
          vO7.ua(p566, p567 + 1, p567, p566.length - p567 - 1);
          p566[p566.length - 1] = v523;
        }
      }
      f82.prototype.Sa = function () {
        this.Ak = new vO5.Nf(vO5.Uf.Tf);
        this.fl = [this.Kf, this.Jf, this.Dk, this.Fk, this.Hk, this.Jk, this.Lk, this.Nk, this.Hi, this.Qk, this.Sk, this.Uk, this.Wk, this.Yk, this.Re, this._k, this.bl, this.dl];
        for (var vLN093 = 0; vLN093 < this.fl.length; vLN093++) {
          this.fl[vLN093].Sa();
        }
      };
      f82.prototype.Uh = function (p568, p569) {
        for (var v524 = this.fl.length - 1; v524 >= 0; v524--) {
          this.fl[v524].ug(p568, p569);
        }
        ;
        if (this.fl[0] !== this.Kf && this.fl[0] !== this.dl && this.Ak != null) {
          this.Ak.ug(p568, p569);
        }
      };
      f82.prototype.qg = function () {
        for (var v525 = this.fl.length - 1; v525 >= 0; v525--) {
          this.fl[v525].qg();
        }
        ;
        if (this.Ak != null) {
          this.Ak.qg();
        }
      };
      f82.prototype.gl = function (p570) {
        var v_0x3621de = function f84(p571, p572) {
          for (var vLN094 = 0; vLN094 < p571.length; vLN094++) {
            if (p571[vLN094] === p572) {
              return vLN094;
            }
          }
          ;
          return -1;
        }(this.fl, p570);
        if (!(v_0x3621de < 0)) {
          this.fl[0].hl();
          (function f85(p573, p574) {
            if (p574 !== 0) {
              var v526 = p573[p574];
              vO7.ua(p573, 0, 1, p574);
              p573[0] = v526;
            }
          })(this.fl, v_0x3621de);
          this.il();
        }
      };
      f82.prototype.jl = function () {
        this.fl[0].hl();
        do {
          f83(this.fl, 0);
        } while (this.fl[0].Wd !== vO5.ll.kl);
        ;
        this.il();
      };
      f82.prototype.il = function () {
        var v527 = this.fl[0];
        v527.ml();
        v527.nl();
        this.ol();
      };
      f82.prototype.pl = function () {
        return this.fl.length !== 0 && this.fl[0].Wd === vO5.ll.kl && this.Yk.ql();
      };
      f82.prototype.rl = function () {
        if (this.fl.length === 0) {
          return null;
        } else {
          return this.fl[0];
        }
      };
      f82.prototype.ol = function () {
        if (this.pl()) {
          this.gl(this.Yk);
        }
      };
      return f82;
    }();
    vO5.vj = function () {
      function f86() {
        this.ii = [];
        this.fi = [];
      }
      f86.wj = function (p575, p576) {
        return {
          ji: p575,
          hi: p576
        };
      };
      f86.xj = function (p577, p578) {
        return {
          gi: p577,
          hi: p578
        };
      };
      return f86;
    }();
    vO5.sl = function () {
      function f87() {
        this.tl = [];
        this.ul = [];
        this.vl = false;
        this.wl = vLSGuest;
        this.xl = {};
      }
      var vLSGuest = "guest";
      var vLSGuest2 = "guest";
      var vLSFb = "fb";
      var vLSGg = "gg";
      f87.yl = new (function () {
        function f88() {}
        f88.zl = function f89(p579) {
          this.Al = p579;
        };
        f88.prototype.Bl = function () {
          return (typeof FB == "undefined" ? "undefined" : f3(FB)) != "undefined";
        };
        f88.prototype.Cl = function (p580, p581, p582) {
          var v528 = "https://graph.facebook.com/me?access_token=" + p580;
          $.get(v528).fail(function () {
            p581();
          }).done(function () {
            p582();
          });
        };
        f88.prototype.Dl = function (p583, p584) {
          if (!this.Bl()) {
            p583();
            return;
          }
          ;
          this.El(function () {
            FB.login(function (p585) {
              if (p585.status !== "connected") {
                p583();
                return;
              }
              ;
              var v529 = p585.authResponse.accessToken;
              p584(new f88.zl(v529));
            });
          }, function (p586) {
            p584(p586);
          });
        };
        f88.prototype.El = function (p587, p588) {
          var vThis14 = this;
          if (!this.Bl()) {
            p587();
            return;
          }
          ;
          FB.getLoginStatus(function (p589) {
            if (p589.status !== "connected") {
              p587();
              return;
            }
            ;
            var v530 = p589.authResponse.accessToken;
            vThis14.Cl(v530, function () {
              p587();
            }, function () {
              p588(new f88.zl(v530));
            });
          });
        };
        f88.prototype.Fl = function () {
          if (this.Bl()) {
            FB.logout();
          }
        };
        return f88;
      }())();
      f87.Gl = new (function () {
        function f90() {}
        f90.Hl = function f91(p590, p591) {
          this.Al = p590;
          this.Il = p591;
        };
        f90.prototype.Bl = function () {
          return f3(v) != "undefined";
        };
        f90.prototype.Dl = function (p592, p593) {
          if (f3(v) == "undefined") {
            p592();
            return;
          }
          ;
          v.then(function () {
            if (v.isSignedIn.get()) {
              var v531 = v.currentUser.get();
              var v532 = v531.getAuthResponse().id_token;
              var v533 = new Date().getTime() + v531.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v533) {
                p593(new f90.Hl(v532, v533));
                return;
              }
            }
            ;
            v.signIn().then(function (p594) {
              if (f3(p594.error) !== "undefined" || !p594.isSignedIn()) {
                p592();
                return;
              }
              ;
              var v534 = p594.getAuthResponse().id_token;
              var v535 = new Date().getTime() + p594.getAuthResponse().expires_in * 1000;
              p593(new f90.Hl(v534, v535));
            });
          });
        };
        f90.prototype.El = function (p595, p596) {
          if (f3(v) == "undefined") {
            p595();
            return;
          }
          ;
          v.then(function () {
            if (v.isSignedIn.get()) {
              var v536 = v.currentUser.get();
              var v537 = v536.getAuthResponse().id_token;
              var v538 = new Date().getTime() + v536.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v538) {
                p596(new f90.Hl(v537, v538));
                return;
              }
            }
            ;
            p595();
          });
        };
        f90.prototype.Fl = function () {
          if (f3(v) != "undefined") {
            v.signOut();
          }
        };
        return f90;
      }())();
      f87.prototype.Sa = function () {
        this.Jl();
      };
      f87.prototype.Kl = function () {
        if (this.vl) {
          return this.xl.userId;
        } else {
          return "";
        }
      };
      f87.prototype.Ll = function () {
        if (this.vl) {
          return this.xl.username;
        } else {
          return "";
        }
      };
      f87.prototype.Ml = function () {
        if (this.vl) {
          return this.xl.nickname;
        } else {
          return "";
        }
      };
      f87.prototype.Nl = function () {
        if (this.vl) {
          return this.xl.avatarUrl;
        } else {
          return vO6.H.M;
        }
      };
      f87.prototype.Ol = function () {
        return this.vl && this.xl.isBuyer;
      };
      f87.prototype.Pl = function () {
        return this.vl && this.xl.isConsentGiven;
      };
      f87.prototype.Ql = function () {
        if (this.vl) {
          return this.xl.coins;
        } else {
          return 0;
        }
      };
      f87.prototype.Rl = function () {
        if (this.vl) {
          return this.xl.level;
        } else {
          return 1;
        }
      };
      f87.prototype.Sl = function () {
        if (this.vl) {
          return this.xl.expOnLevel;
        } else {
          return 0;
        }
      };
      f87.prototype.Tl = function () {
        if (this.vl) {
          return this.xl.expToNext;
        } else {
          return 50;
        }
      };
      f87.prototype.Ul = function () {
        if (this.vl) {
          return this.xl.skinId;
        } else {
          return 0;
        }
      };
      f87.prototype.Vl = function () {
        if (this.vl) {
          return this.xl.eyesId;
        } else {
          return 0;
        }
      };
      f87.prototype.Wl = function () {
        if (this.vl) {
          return this.xl.mouthId;
        } else {
          return 0;
        }
      };
      f87.prototype.Xl = function () {
        if (this.vl) {
          return this.xl.glassesId;
        } else {
          return 0;
        }
      };
      f87.prototype.Yl = function () {
        if (this.vl) {
          return this.xl.hatId;
        } else {
          return 0;
        }
      };
      f87.prototype.Zl = function () {
        if (this.vl) {
          return this.xl.highScore;
        } else {
          return 0;
        }
      };
      f87.prototype.$l = function () {
        if (this.vl) {
          return this.xl.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f87.prototype._l = function () {
        if (this.vl) {
          return this.xl.kills;
        } else {
          return 0;
        }
      };
      f87.prototype.am = function () {
        if (this.vl) {
          return this.xl.headShots;
        } else {
          return 0;
        }
      };
      f87.prototype.bm = function () {
        if (this.vl) {
          return this.xl.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f87.prototype.cm = function () {
        if (this.vl) {
          return this.xl.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f87.prototype.dm = function () {
        if (this.vl) {
          return this.xl.regDate;
        } else {
          return {};
        }
      };
      f87.prototype.em = function (p597) {
        this.tl.push(p597);
        p597();
      };
      f87.prototype.fm = function (p598) {
        this.ul.push(p598);
        p598();
      };
      f87.prototype.rk = function (p599, p600) {
        var v539 = this.xl.propertyList.concat(vO14.pL || []);
        if (v539 == null) {
          return false;
        }
        ;
        for (vLSGuest2 = 0; vLSGuest2 < v539.length; vLSGuest2++) {
          var v540 = v539[vLSGuest2];
          if (v540.id == p599 && v540.type === p600) {
            return true;
          }
        }
        ;
        return false;
      };
      f87.prototype.nk = function () {
        return this.vl;
      };
      f87.prototype.gm = function () {
        return this.wl;
      };
      f87.prototype.hm = function (p601) {
        var vThis15 = this;
        var v541 = this.Kl();
        var v542 = this.Ql();
        var v543 = this.Rl();
        this.im(function () {
          if (p601 != null) {
            p601();
          }
        }, function (p602) {
          vThis15.xl = p602.user_data;
          vThis15.jm();
          var v544 = vThis15.Kl();
          var v545 = vThis15.Ql();
          var v546 = vThis15.Rl();
          if (v541 === v544) {
            if (v546 > 1 && v546 !== v543) {
              ooo.Xg.Yk.km(new vO5.lm(v546));
            }
            var v547 = v545 - v542;
            if (v547 >= 20) {
              ooo.Xg.Yk.km(new vO5.mm(v547));
            }
          }
          ;
          if (p601 != null) {
            p601();
          }
        });
      };
      f87.prototype.im = function (p603, p604) {
        var v548 = vO6.H.J + "/pub/wuid/" + this.wl + "/getUserData";
        vO7.Aa(v548, p603, function (p605) {
          if (p605.code !== 1200) {
            p603();
          } else {
            p604(p605);
          }
        });
      };
      f87.prototype.nm = function (p606, p607, p608, p609) {
        var v549 = vO6.H.J + "/pub/wuid/" + this.wl + "/buyProperty?id=" + p606 + "&type=" + p607;
        vO7.Aa(v549, function () {
          p608();
        }, function (p610) {
          if (p610.code !== 1200) {
            p608();
          } else {
            p609();
          }
        });
      };
      f87.prototype.om = function (p611, p612) {
        var v550 = vO6.H.J + "/pub/wuid/" + this.wl + "/deleteAccount";
        vO7.Aa(v550, p611, function (p613) {
          if (p613.code !== 1200) {
            p611();
          } else {
            p612();
          }
        });
      };
      f87.prototype.pm = function (p614) {
        var vThis16 = this;
        if (this.vl) {
          this.qm();
        }
        f87.yl.Dl(function () {
          p614();
        }, function (p615) {
          vThis16.rm(vLSFb, p615.Al, p614);
        });
      };
      f87.prototype.sm = function (p616) {
        var vThis17 = this;
        if (this.vl) {
          this.qm();
        }
        f87.Gl.Dl(function () {
          p616();
        }, function (p617) {
          vThis17.rm(vLSGg, p617.Al, p616);
        });
      };
      f87.prototype.rm = function (p618, p619, p620) {
        var vThis18 = this;
        var v551 = p618 + "_" + p619;
        var v552 = vO6.H.J + "/pub/wuid/" + v551 + "/login";
        vO7.Aa(v552, function () {
          vThis18.tm();
        }, function (p621) {
          if (p621.code !== 1200) {
            vThis18.tm();
          } else {
            vThis18.um(p618, p619, p621.user_data);
            if (p620 != null) {
              p620();
            }
          }
        });
      };
      f87.prototype.qm = function () {
        try {
          this.vm();
          this.wm();
        } catch (e29) {}
        ;
        this.xm();
      };
      f87.prototype.ym = function () {
        if (this.vl) {
          this.om(function () {}, function () {});
        }
      };
      f87.prototype.tm = function () {
        ooo.Xg.gl(ooo.Xg._k);
      };
      f87.prototype.um = function (p622, p623, p624) {
        var vThis19 = this;
        vF44(p624, function (p625) {
          var v553 = vThis19.vl ? vThis19.xl.userId : p625;
          vThis19.vl = true;
          vThis19.wl = p622 + "_" + p623;
          vThis19.xl = p625;
          vO5.Cg.Ng(vO5.Cg.Hg, p622, 60);
          if (v553 !== vThis19.xl.userId) {
            vThis19.zm();
          } else {
            vThis19.jm();
          }
          ooo.Xp(true, true);
          vO14.loading = false;
        });
      };
      f87.prototype.xm = function () {
        var v554 = this.vl ? this.xl.userId : vLSGuest2;
        this.vl = false;
        this.wl = vLSGuest;
        this.xl = {};
        vO5.Cg.Ng(vO5.Cg.Hg, "", 60);
        if (v554 !== this.xl.userId) {
          this.zm();
        } else {
          this.jm();
        }
      };
      f87.prototype.Jl = function () {
        var v555 = vO5.Cg.Og(vO5.Cg.Hg);
        var vThis20 = this;
        if (vLSFb === v555) {
          var vLN15 = 1;
          (function f92() {
            if (!f87.yl.Bl() && vLN15++ < 5) {
              vO7.Y(f92, 1000);
              return;
            }
            ;
            f87.yl.El(function () {}, function (p626) {
              vThis20.rm(vLSFb, p626.Al);
            });
          })();
        } else if (vLSGg === v555) {
          var vLN16 = 1;
          (function f93() {
            if (!f87.Gl.Bl() && vLN16++ < 5) {
              vO7.Y(f93, 1000);
              return;
            }
            ;
            f87.Gl.El(function () {}, function (p627) {
              vThis20.rm(vLSGg, p627.Al);
            });
          })();
        }
      };
      f87.prototype.zm = function () {
        for (var vLN095 = 0; vLN095 < this.tl.length; vLN095++) {
          this.tl[vLN095]();
        }
        ;
        this.jm();
      };
      f87.prototype.jm = function () {
        for (var vLN096 = 0; vLN096 < this.ul.length; vLN096++) {
          this.ul[vLN096]();
        }
      };
      f87.prototype.vm = function () {
        f87.yl.Fl();
      };
      f87.prototype.wm = function () {
        f87.Gl.Fl();
      };
      return f87;
    }();
    vO5.Sf = function () {
      function f94(p628, p629, p630) {
        this.Of = p630;
        this.Rd = false;
        this.Yc = new vO8.k.l();
        this.Yc.visible = false;
        this.Am = Array(p628);
        for (var vLN097 = 0; vLN097 < this.Am.length; vLN097++) {
          var v556 = new vO5.Bm(new vO8.j(p629 * 3));
          v556.Cm(p629);
          this.Am[vLN097] = v556;
          this.Yc.addChild(v556.ag());
        }
        ;
        this.Pf = 1;
        this.Qf = 1;
        this.qg();
      }
      f94.prototype.ag = function () {
        return this.Yc;
      };
      f94.prototype.rg = function (p631) {
        this.Rd = p631;
        this.Yc.visible = p631;
      };
      f94.prototype.qg = function () {
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        var v557 = this.Qf / 30;
        for (var vLN098 = 0; vLN098 < this.Am.length; vLN098++) {
          this.Am[vLN098].Dm(v557);
        }
      };
      f94.prototype.Bg = function () {
        if (this.Rd) {
          for (var vLN099 = 0; vLN099 < this.Am.length; vLN099++) {
            this.Am[vLN099].Bg(this.Vf);
          }
        }
      };
      f94.prototype.Em = function () {
        return this.Pf;
      };
      f94.prototype.Fm = function () {
        return this.Qf;
      };
      f94.prototype.xg = function (p632, p633) {
        this.Am[p632].Gm(p633);
      };
      f94.prototype.yg = function (p634, p635) {
        this.Am[p634].Hm(p635);
      };
      f94.prototype.zg = function (p636, p637, p638) {
        var v558 = this.Am[p636];
        for (var v559 = v558.Im(), v560 = v558.Jm, vLN0100 = 0; vLN0100 < v559; vLN0100++) {
          v560[vLN0100 * 3] = p637;
          v560[vLN0100 * 3 + 1] = p638;
          v560[vLN0100 * 3 + 2] = 0;
        }
      };
      f94.prototype.Ag = function (p639, p640, p641) {
        var v561;
        var v562;
        var v563 = this.Am[p639];
        var v564 = v563.Im();
        var v565 = v563.Jm;
        var v566 = v563.Km();
        var v567 = v565[0];
        var v568 = v565[1];
        var v569 = p640 - v567;
        var v570 = p641 - v568;
        var v571 = vO7.la(v569, v570);
        if (v571 > 0) {
          v565[0] = p640;
          v565[1] = p641;
          v565[2] = vO7.ta(v570, v569);
          var v572 = v566 * 0.25 / (v566 * 0.25 + v571);
          var v573 = 1 - v572 * 2;
          for (var vLN17 = 1, vV564 = v564; vLN17 < vV564; vLN17++) {
            v561 = v565[vLN17 * 3];
            v565[vLN17 * 3] = v565[vLN17 * 3 - 3] * v573 + (v561 + v567) * v572;
            v567 = v561;
            v562 = v565[vLN17 * 3 + 1];
            v565[vLN17 * 3 + 1] = v565[vLN17 * 3 - 2] * v573 + (v562 + v568) * v572;
            v568 = v562;
            v565[vLN17 * 3 + 2] = vO7.ta(v565[vLN17 * 3 - 2] - v565[vLN17 * 3 + 1], v565[vLN17 * 3 - 3] - v565[vLN17 * 3]);
          }
        }
      };
      return f94;
    }();
    vO5.Lm = function () {
      function f95(p642) {
        var v574;
        var vThis21 = this;
        this.Of = p642;
        this.nc = p642.get()[0];
        this.Vf = ((v574 = {}).view = vThis21.nc, v574.transparent = true, new vO8.k.o(v574));
        this.Rd = false;
        this.Mm = new vO5.Bm(new vO8.j(v575 * 3));
        this.Pf = 1;
        this.Qf = 1;
        this.Nm = vO40.Om;
        this.Pm = vO40.Om;
        this.Qm = vO40.Om;
        this.Rm = vO40.Om;
        this.Sm = vO40.Om;
        this.qg();
        ooo.ud.Jc(function () {
          vThis21.Mm.Tm();
        });
      }
      var v575 = vO7.ha(100, vO5.Xc.fd);
      var vO40 = {
        Om: "0lt0",
        Um: "0lt1",
        Vm: "0lt2"
      };
      f95.prototype.rg = function (p643) {
        this.Rd = p643;
      };
      f95.prototype.qg = function () {
        var v576 = vO7.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = v576;
        this.nc.width = v576 * this.Pf;
        this.nc.height = v576 * this.Qf;
        var v577 = this.Qf / 4;
        this.Mm.Dm(v577);
        var v578 = vO7.fa(vO7._(this.Pf / v577) * 2 - 5, 1, v575);
        this.Mm.Cm(v578);
      };
      f95.prototype.ug = function () {
        if (this.Rd) {
          var v579 = vO7.Ca() / 200;
          var v580 = vO7.oa(v579);
          this.Mm.Wm(this.Xm(this.Nm, v580), this.Ym(this.Nm, v580));
          this.Mm.Zm(this.$m(this.Pm, v580), this.$m(this.Qm, v580), this.$m(this.Rm, v580), this.$m(this.Sm, v580));
          var v581 = this.Mm.Km();
          for (var v582 = this.Mm.Im(), v583 = this.Mm.Jm, v584 = this.Pf - (this.Pf - v581 * 0.5 * (v582 - 1)) * 0.5, v585 = this.Qf * 0.5, vLN0101 = 0, vLN0102 = 0, v586 = -1; v586 < v582; v586++) {
            var vV586 = v586;
            var v587 = vO7.pa(vV586 * 1 / 12 * vO6.T - v579) * (1 - vO7.ra(16, vV586 * -1 / 12));
            if (v586 >= 0) {
              v583[v586 * 3] = v584 - v581 * 0.5 * vV586;
              v583[v586 * 3 + 1] = v585 + v581 * 0.5 * v587;
              v583[v586 * 3 + 2] = vO7.ta(vLN0102 - v587, vV586 - vLN0101);
            }
            vLN0101 = vV586;
            vLN0102 = v587;
          }
          ;
          this.Mm.Bg();
          this.Mm._m(this.Vf);
        }
      };
      f95.prototype.Gm = function (p644) {
        this.Mm.Gm(p644);
      };
      f95.prototype.an = function (p645) {
        this.Nm = p645 ? vO40.Vm : vO40.Um;
        this.Pm = vO40.Om;
        this.Qm = vO40.Om;
        this.Rm = vO40.Om;
        this.Sm = vO40.Om;
      };
      f95.prototype.bn = function (p646) {
        this.Nm = vO40.Om;
        this.Pm = p646 ? vO40.Vm : vO40.Um;
        this.Qm = vO40.Om;
        this.Rm = vO40.Om;
        this.Sm = vO40.Om;
      };
      f95.prototype.cn = function (p647) {
        this.Nm = vO40.Om;
        this.Pm = vO40.Om;
        this.Qm = p647 ? vO40.Vm : vO40.Um;
        this.Rm = vO40.Om;
        this.Sm = vO40.Om;
      };
      f95.prototype.dn = function (p648) {
        this.Nm = vO40.Om;
        this.Pm = vO40.Om;
        this.Qm = vO40.Om;
        this.Rm = p648 ? vO40.Vm : vO40.Um;
        this.Sm = vO40.Om;
      };
      f95.prototype.en = function (p649) {
        this.Nm = vO40.Om;
        this.Pm = vO40.Om;
        this.Qm = vO40.Om;
        this.Rm = vO40.Om;
        this.Sm = p649 ? vO40.Vm : vO40.Um;
      };
      f95.prototype.Xm = function (p650, p651) {
        switch (p650) {
          case vO40.Um:
            return 0.9 + p651 * 0.1;
          case vO40.Vm:
            return 0.4 + p651 * 0.3;
        }
        ;
        return 1;
      };
      f95.prototype.Ym = function (p652, p653) {
        switch (p652) {
          case vO40.Um:
            return 0.6 + p653 * 0.5;
          case vO40.Vm:
            return 0.3 + p653 * 0.3;
        }
        ;
        return 1;
      };
      f95.prototype.$m = function (p654, p655) {
        switch (p654) {
          case vO40.Um:
            return 0.9 + p655 * 0.1;
          case vO40.Vm:
            return 0.6 + p655 * 0.4;
        }
        ;
        return 1;
      };
      return f95;
    }();
    vO5.uk = function () {
      function f96(p656, p657, p658, p659, p660) {
        this.gn = p656;
        this.hn = p657;
        this.in = p658;
        this.jn = p659;
        this.kn = p660;
      }
      f96.tk = function (p661) {
        return new f96(p661.price, p661.guest, p661.nonbuyable, p661.nonbuyableCause, p661.description);
      };
      f96.vk = function (p662) {
        return new f96(p662.price, p662.guest, p662.nonbuyable, p662.nonbuyableCause, p662.description);
      };
      f96.prototype.pk = function () {
        return this.gn;
      };
      f96.prototype.sk = function () {
        return this.hn;
      };
      f96.prototype.qk = function () {
        return this.in;
      };
      f96.prototype.ln = function () {
        return this.jn;
      };
      f96.prototype.mn = function () {
        return this.kn;
      };
      return f96;
    }();
    vO5.Zf = function () {
      function f97(p663) {
        this.nn = {};
        function f98() {
          var vA11 = ["https://wormx.store/images/arkaplan/bg1.jpg", "https://wormx.store/images/arkaplan/bg2.jpg", "https://wormx.store/images/arkaplan/bg3.jpg"];
          var v588 = localStorage.getItem("lastBackground");
          var v589 = vA11.filter(p664 => p664 !== v588);
          var v590 = v589[Math.floor(Math.random() * v589.length)];
          localStorage.setItem("lastBackground", v590);
          return v590;
        }
        var v591 = vO8.k.m.from(f98());
        this.nn[v595] = v591;
        var v592 = vO8.k.q.from(v599, v600, this.nn);
        this._f = new vO8.k.v(v598, v592);
        this._f.blendMode = vO8.k.w.B;
        this._f.alpha = 0.6;
      }
      var v593 = "a1_" + vO7.xa();
      var v594 = "a2_" + vO7.xa();
      var vLSTranslationMatrix = "translationMatrix";
      var vLSProjectionMatrix = "projectionMatrix";
      var v595 = "u3_" + vO7.xa();
      var v596 = "u4_" + vO7.xa();
      var v597 = "v1_" + vO7.xa();
      var v598 = new vO8.k.u().addAttribute(v593, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v594, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var v599 = "precision mediump float; attribute vec2 " + v593 + "; attribute vec2 " + v594 + "; uniform mat3 " + vLSTranslationMatrix + "; uniform mat3 " + vLSProjectionMatrix + "; uniform vec4 " + v596 + "; varying vec2 " + v597 + "; const float ROT_ANGLE_DEG = 7.5; const float ROT_COS = cos(ROT_ANGLE_DEG/180.0*3.14159265358979); const float ROT_SIN = sin(ROT_ANGLE_DEG/180.0*3.14159265358979); void main() { " + v597 + " = " + v594 + "; gl_Position = vec4((" + vLSProjectionMatrix + " * " + vLSTranslationMatrix + " * vec3(" + v593 + ", 1.0)).xy, 0.0, 1.0); vec4 ScreenParams = " + v596 + "; vec2 uv = " + v594 + "; vec2 mul = 0.5 * vec2(ScreenParams.x * (ScreenParams.w - 1.0) + 1.0, ScreenParams.y * (ScreenParams.z - 1.0) + 1.0); vec2 v2 = uv * vec2(1.0, 1.0); v2 = v2 * vec2(1.0, 1.0); " + v597 + " = v2; }";
      var v600 = "precision highp float; varying vec2 " + v597 + "; uniform sampler2D " + v595 + "; void main() { gl_FragColor = texture2D(" + v595 + ", " + v597 + "); }";
      f97.prototype.tg = function (p665, p666) {
        this._f.scale.x = p665;
        this._f.scale.y = p666;
        this.nn[v596] = [p665, p666, 1 / p665 + 1, 1 / p666 + 1];
      };
      return f97;
    }();
    vO5.th = function () {
      function f99() {
        this.nn = {};
        this.nn[v604] = [1, 0.5, 0.25, 0.5];
        this.nn[v605] = vO8.k.n.WHITE;
        this.nn[v606] = [0, 0];
        this.nn[v607] = [0, 0];
        var v601 = vO8.k.q.from(v610, v611, this.nn);
        this._f = new vO8.k.v(v609, v601);
      }
      var v602 = "a1_" + vO7.xa();
      var v603 = "a2_" + vO7.xa();
      var vLSTranslationMatrix2 = "translationMatrix";
      var vLSProjectionMatrix2 = "projectionMatrix";
      var v604 = "u3_" + vO7.xa();
      var v605 = "u4_" + vO7.xa();
      var v606 = "u5_" + vO7.xa();
      var v607 = "u6_" + vO7.xa();
      var v608 = "v1_" + vO7.xa();
      var v609 = new vO8.k.u().addAttribute(v602, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v603, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v610 = "precision mediump float; attribute vec2 " + v602 + "; attribute vec2 " + v603 + "; uniform mat3 " + vLSTranslationMatrix2 + "; uniform mat3 " + vLSProjectionMatrix2 + "; varying vec2 " + v608 + "; void main(){" + v608 + "=" + v603 + "; gl_Position=vec4((" + vLSProjectionMatrix2 + "*" + vLSTranslationMatrix2 + "*vec3(" + v602 + ", 1.0)).xy, 0.0, 1.0); }";
      var v611 = "precision highp float; varying vec2 " + v608 + "; uniform vec4 " + v604 + "; uniform sampler2D " + v605 + "; uniform vec2 " + v606 + "; uniform vec2 " + v607 + "; void main(){vec4 color=texture2D(" + v605 + ", " + v608 + "*" + v606 + "+" + v607 + "); vec4 colorMix=" + v604 + "; gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb, 0.0); }";
      f99.prototype.nd = function (p667, p668, p669, p670) {
        var v612 = this.nn[v604];
        v612[0] = p667;
        v612[1] = p668;
        v612[2] = p669;
        v612[3] = p670;
      };
      f99.prototype.Hh = function (p671) {
        this.nn[v605] = p671;
      };
      f99.prototype.Bg = function (p672, p673, p674, p675) {
        this._f.position.x = p672;
        this._f.position.y = p673;
        this._f.scale.x = p674;
        this._f.scale.y = p675;
        var v613 = this.nn[v606];
        v613[0] = p674 * 0.2520615384615385;
        v613[1] = p675 * 0.4357063736263738;
        var v614 = this.nn[v607];
        v614[0] = p672 * 0.2520615384615385;
        v614[1] = p673 * 0.4357063736263738;
      };
      return f99;
    }();
    vO5.bd = function () {
      function f100() {
        this.gd = new vO8.k.s();
        this.pn = 0;
        this.qn = 0;
      }
      f100.prototype.kd = function (p676) {
        this.gd.texture = p676.nb();
        this.gd.anchor.set(p676.hb, p676.ib);
        this.pn = p676.jb;
        this.qn = p676.kb;
      };
      f100.prototype.nd = function (p677) {
        this.gd.tint = parseInt(p677.substring(1), 16);
      };
      f100.prototype.Bd = function (p678) {
        this.gd.width = p678 * this.pn;
        this.gd.height = p678 * this.qn;
      };
      f100.prototype.Vd = function (p679) {
        this.gd.rotation = p679;
      };
      f100.prototype.Ud = function (p680, p681) {
        this.gd.position.set(p680, p681);
      };
      f100.prototype.Td = function (p682) {
        this.gd.visible = p682;
      };
      f100.prototype.Qd = function () {
        return this.gd.visible;
      };
      f100.prototype.Rj = function (p683) {
        this.gd.alpha = p683;
      };
      f100.prototype.zd = function () {
        return this.gd;
      };
      f100.prototype.G = function () {
        vO8.k.F.G(this.gd);
      };
      return f100;
    }();
    vO5.Ui = function () {
      function f101(p684) {
        this.Qh = p684;
        this.ki = new vO5.Ui.Ti();
        this.cj = false;
        this.bj = true;
        this.Fd = false;
        this.Id = 0;
        this.rn = 0;
        this.Lj = 1;
        this.Ld = 0;
        this.hi = 0;
        this.Nd = {};
        this.Kd = 0;
        this.sn = new vO8.j(vLN200 * 2);
        this.tn = new vO8.j(vLN200 * 2);
        this.Jd = new vO8.j(vLN200 * 2);
        this.un = null;
        this.vn = null;
        this.wn = null;
        this.xn();
      }
      var vLN200 = 200;
      f101.prototype.$i = function () {
        if (this.vn != null) {
          vO8.k.F.G(this.vn.Yc);
        }
        if (this.wn != null) {
          vO8.k.F.G(this.wn);
        }
      };
      f101.prototype.xn = function () {
        this.fj(0.25);
        this.ki.Xa = "";
        this.bj = true;
        this.Nd = {};
        this.Td(false);
      };
      f101.prototype.Zi = function (p685) {
        this.ki = p685;
        this.yn(this.cj);
      };
      f101.prototype.Td = function (p686) {
        var v615 = this.cj;
        this.cj = p686;
        this.yn(v615);
      };
      f101.prototype.fj = function (p687) {
        this.hi = p687 * 50;
        var vP687 = p687;
        if (p687 > this.Qh.hh) {
          vP687 = vO7.sa((p687 - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh;
        }
        var v616 = vO7.qa(vO7.ra(vP687 * 5, 0.707106781186548) * 4 + 25);
        var v617 = vO7.ha(vLN200, vO7.ia(3, (v616 - 5) * 5 + 1));
        var v618 = this.Kd;
        this.Id = (5 + v616 * 0.9) * 0.025;
        this.Kd = vO7._(v617);
        this.rn = v617 - this.Kd;
        if (v618 > 0 && v618 < this.Kd) {
          var v619 = this.sn[v618 * 2 - 2];
          var v620 = this.sn[v618 * 2 - 1];
          var v621 = this.tn[v618 * 2 - 2];
          var v622 = this.tn[v618 * 2 - 1];
          var v623 = this.Jd[v618 * 2 - 2];
          var v624 = this.Jd[v618 * 2 - 1];
          for (var vV618 = v618; vV618 < this.Kd; vV618++) {
            this.sn[vV618 * 2] = v619;
            this.sn[vV618 * 2 + 1] = v620;
            this.tn[vV618 * 2] = v621;
            this.tn[vV618 * 2 + 1] = v622;
            this.Jd[vV618 * 2] = v623;
            this.Jd[vV618 * 2 + 1] = v624;
          }
        }
      };
      f101.prototype.kj = function (p688, p689) {
        this.Kd = p689;
        for (var vLN0103 = 0; vLN0103 < this.Kd; vLN0103++) {
          this.sn[vLN0103 * 2] = this.tn[vLN0103 * 2] = this.Jd[vLN0103 * 2] = p688();
          this.sn[vLN0103 * 2 + 1] = this.tn[vLN0103 * 2 + 1] = this.Jd[vLN0103 * 2 + 1] = p688();
        }
      };
      f101.prototype.hj = function (p690, p691, p692) {
        this.Fd = p692;
        for (var vLN0104 = 0; vLN0104 < this.Kd; vLN0104++) {
          this.sn[vLN0104 * 2] = this.tn[vLN0104 * 2];
          this.sn[vLN0104 * 2 + 1] = this.tn[vLN0104 * 2 + 1];
        }
        ;
        var v625 = p690 - this.tn[0];
        var v626 = p691 - this.tn[1];
        this.zn(v625, v626, this.Kd, this.tn);
      };
      f101.prototype.zn = function (p693, p694, p695, p696) {
        var v627 = vO7.la(p693, p694);
        if (!(v627 <= 0)) {
          var v628;
          var v629 = p696[0];
          p696[0] += p693;
          var v630;
          var v631 = p696[1];
          p696[1] += p694;
          var v632 = this.Id / (this.Id + v627);
          var v633 = 1 - v632 * 2;
          for (var vLN18 = 1, v634 = p695 - 1; vLN18 < v634; vLN18++) {
            v628 = p696[vLN18 * 2];
            p696[vLN18 * 2] = p696[vLN18 * 2 - 2] * v633 + (v628 + v629) * v632;
            v629 = v628;
            v630 = p696[vLN18 * 2 + 1];
            p696[vLN18 * 2 + 1] = p696[vLN18 * 2 - 1] * v633 + (v630 + v631) * v632;
            v631 = v630;
          }
          ;
          v633 = 1 - (v632 = this.rn * this.Id / (this.rn * this.Id + v627)) * 2;
          p696[p695 * 2 - 2] = p696[p695 * 2 - 4] * v633 + (p696[p695 * 2 - 2] + v629) * v632;
          p696[p695 * 2 - 1] = p696[p695 * 2 - 3] * v633 + (p696[p695 * 2 - 1] + v631) * v632;
        }
      };
      f101.prototype.Oh = function () {
        return {
          _a: this.Jd[0],
          ab: this.Jd[1]
        };
      };
      f101.prototype.dj = function (p697, p698) {
        var vLN1000000 = 1000000;
        var vP697 = p697;
        var vP698 = p698;
        for (var vLN0105 = 0; vLN0105 < this.Kd; vLN0105++) {
          var v635 = this.Jd[vLN0105 * 2];
          var v636 = this.Jd[vLN0105 * 2 + 1];
          var v637 = vO7.la(p697 - v635, p698 - v636);
          if (v637 < vLN1000000) {
            vLN1000000 = v637;
            vP697 = v635;
            vP698 = v636;
          }
        }
        ;
        return {
          _a: vP697,
          ab: vP698,
          ej: vLN1000000
        };
      };
      f101.prototype._i = function (p699) {
        this.un = p699;
      };
      f101.prototype.Pj = function (p700, p701) {
        this.Lj = vO7.ga(this.Lj, this.bj ? this.Fd ? 0.9 + vO7.pa(p700 / 400 * vO6.T) * 0.1 : 1 : 0, p701, 1 / 800);
        this.Ld = vO7.ga(this.Ld, this.bj ? this.Fd ? 1 : 0 : 1, p701, 0.0025);
        if (this.vn != null) {
          this.vn.Yc.alpha = this.Lj;
        }
        if (this.wn != null) {
          this.wn.alpha = this.Lj;
        }
      };
      f101.prototype.Qj = function (p702, p703, p704, p705) {
        if (this.cj && this.bj) {
          var v638 = vO7.ra(0.11112, p703 / 95);
          for (var vLN0106 = 0; vLN0106 < this.Kd; vLN0106++) {
            var v639 = vO7.ka(this.sn[vLN0106 * 2], this.tn[vLN0106 * 2], p704);
            var v640 = vO7.ka(this.sn[vLN0106 * 2 + 1], this.tn[vLN0106 * 2 + 1], p704);
            this.Jd[vLN0106 * 2] = vO7.ka(v639, this.Jd[vLN0106 * 2], v638);
            this.Jd[vLN0106 * 2 + 1] = vO7.ka(v640, this.Jd[vLN0106 * 2 + 1], v638);
          }
        }
        ;
        if (this.vn != null && this.cj) {
          this.vn.Hd(this, p702, p703, p705);
        }
        if (this.wn != null) {
          this.wn.Rh.x = this.Jd[0];
          this.wn.Rh.y = this.Jd[1] - this.Id * 3;
        }
      };
      f101.prototype.yn = function (p706) {
        if (this.cj) {
          if (!p706) {
            this.An();
          }
        } else {
          if (this.vn != null) {
            vO8.k.F.G(this.vn.Yc);
          }
          if (this.wn != null) {
            vO8.k.F.G(this.wn);
          }
        }
      };
      f101.prototype.An = function () {
        if (this.vn == null) {
          this.vn = new vO5.Xc();
        } else {
          vO8.k.F.G(this.vn.Yc);
        }
        this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), "#ffffff");
        if (this.wn == null) {
          this.wn = new vO5.Bn("");
          this.wn.style.fontFamily = "PTSans";
          this.wn.anchor.set(0.5);
        } else {
          vO8.k.F.G(this.wn);
        }
        this.wn.style.fontSize = 14;
        this.wn.style.fill = ooo.ud.Cc().Tb(this.ki.ni).cc;
        this.wn.text = this.ki.Xa;
        this.un.Xh(this.ki.Je, this.vn, this.wn);
        if (vO9.n != null && vO9.n.Je == this.ki.Je) {
          vO9.vj = this.wn;
          let v641 = vO14.sg.indexOf(vO9.n.ni);
          if (v641 == -1) {
            if (vO14.ig != -1) {
              vO14.ig = -1;
            }
          } else {
            vO14.ig = vO14.gg[v641].s;
            vO14.re = false;
            vF31();
          }
        }
      };
      f101.Ti = function f102() {
        this.Je = 0;
        this.mi = vO5.dh.jh;
        this.ni = 0;
        this.Vi = 0;
        this.Wi = 0;
        this.Xi = 0;
        this.Yi = 0;
        this.Xa = "";
      };
      return f101;
    }();
    vO5.Bn = vO7.ca(vO8.k.t, function (p707, p708, p709) {
      vO8.k.t.call(this, p707, p708, p709);
      this.Rh = {
        x: 0,
        y: 0
      };
    });
    vO5.Sb = function () {
      function f103(p710, p711, p712, p713, p714) {
        this.Tj = p710;
        this.Uj = p711;
        this.Vj = p712;
        this.Wj = p713;
        this.Xj = p714;
      }
      f103.prototype.Cn = function (p715) {
        return new f103(p715, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      f103.prototype.Dn = function (p716) {
        return new f103(this.Tj, p716, this.Vj, this.Wj, this.Xj);
      };
      f103.prototype.En = function (p717) {
        return new f103(this.Tj, this.Uj, p717, this.Wj, this.Xj);
      };
      f103.prototype.Fn = function (p718) {
        return new f103(this.Tj, this.Uj, this.Vj, p718, this.Xj);
      };
      f103.prototype.Gn = function (p719) {
        return new f103(this.Tj, this.Uj, this.Vj, this.Wj, p719);
      };
      return f103;
    }();
    vO5.Bm = function () {
      function f104(p720) {
        this.Hn = new vO5.Xc();
        this.Hn.Yc.addChild(this.Hn.Zc);
        this.In = null;
        this.Jn = null;
        this.Jm = p720;
        this.$c = 0;
        this.mj = 1;
        this.Kn = 1;
        this.Ln = 1;
        this.Mn = 1;
        this.Nn = 1;
        this.On = 1;
        this.Pn = 1;
        this.Hm("#ffffff");
      }
      var v642 = new vO5.Sb(0, 0, 0, 0, 0);
      f104.prototype.ag = function () {
        return this.Hn.Yc;
      };
      f104.prototype.Cm = function (p721) {
        this.$c = p721;
        if (this.Hn.$c !== p721) {
          for (var vP721 = p721; vP721 < this.Hn._c.length; vP721++) {
            this.Hn._c[vP721].Cd();
          }
          ;
          while (this.Hn.$c > p721) {
            this.Hn.$c -= 1;
            var v643 = this.Hn._c[this.Hn.$c];
            v643.md.G();
            v643.ld.G();
          }
          ;
          while (this.Hn.$c < p721) {
            var v644 = this.Hn._c[this.Hn.$c];
            this.Hn.$c += 1;
            this.Hn.Yc.addChild(v644.ld.zd());
            this.Hn.Yc.addChild(v644.md.zd());
            v644.ld.Rj(this.Kn);
            v644.md.Rj(this.Ln);
          }
          ;
          for (var vLN0107 = 0; vLN0107 < this.Hn.Zc.od.length; vLN0107++) {
            this.Hn.Zc.od[vLN0107].Rj(this.Mn);
          }
          ;
          for (var vLN0108 = 0; vLN0108 < this.Hn.Zc.pd.length; vLN0108++) {
            this.Hn.Zc.pd[vLN0108].Rj(this.Nn);
          }
          ;
          for (var vLN0109 = 0; vLN0109 < this.Hn.Zc.rd.length; vLN0109++) {
            this.Hn.Zc.rd[vLN0109].Rj(this.On);
          }
          ;
          for (var vLN0110 = 0; vLN0110 < this.Hn.Zc.qd.length; vLN0110++) {
            this.Hn.Zc.qd[vLN0110].Rj(this.Pn);
          }
        }
      };
      f104.prototype.Im = function () {
        return this.$c;
      };
      f104.prototype.Gm = function (p722) {
        this.In = p722;
        this.Jn = "#ffffff";
        this.Tm();
      };
      f104.prototype.Hm = function (p723) {
        this.In = v642;
        this.Jn = p723;
        this.Tm();
      };
      f104.prototype.Tm = function () {
        this.Hn.hd(vO5.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
      };
      f104.prototype.Dm = function (p724) {
        this.mj = p724;
      };
      f104.prototype.Km = function () {
        return this.mj;
      };
      f104.prototype.Wm = function (p725, p726) {
        this.Kn = p725;
        this.Ln = p726;
        for (var vLN0111 = 0; vLN0111 < this.$c; vLN0111++) {
          var v645 = this.Hn._c[vLN0111];
          v645.ld.Rj(this.Kn);
          v645.md.Rj(this.Ln);
        }
      };
      f104.prototype.Zm = function (p727, p728, p729, p730) {
        this.Mn = p727;
        this.Nn = p728;
        this.On = p729;
        this.Pn = p730;
        for (var vLN0112 = 0; vLN0112 < this.Hn.Zc.od.length; vLN0112++) {
          this.Hn.Zc.od[vLN0112].Rj(this.Mn);
        }
        ;
        for (var vLN0113 = 0; vLN0113 < this.Hn.Zc.pd.length; vLN0113++) {
          this.Hn.Zc.pd[vLN0113].Rj(this.Nn);
        }
        ;
        for (var vLN0114 = 0; vLN0114 < this.Hn.Zc.rd.length; vLN0114++) {
          this.Hn.Zc.rd[vLN0114].Rj(this.On);
        }
        ;
        for (var vLN0115 = 0; vLN0115 < this.Hn.Zc.qd.length; vLN0115++) {
          this.Hn.Zc.qd[vLN0115].Rj(this.Pn);
        }
      };
      f104.prototype.Bg = function () {
        var v646 = this.mj * 2;
        var v647 = this.mj * 2 * 1.5;
        if (this.$c > 0) {
          var v648 = this.Jm[0];
          var v649 = this.Jm[1];
          var v650 = this.Jm[2];
          this.Hn._c[0].Ad(v648, v649, v646, v647, v650);
          this.Hn.Zc.Ad(v648, v649, v646, v650);
        }
        ;
        for (var vLN19 = 1; vLN19 < this.$c; vLN19++) {
          var v651 = this.Jm[vLN19 * 3];
          var v652 = this.Jm[vLN19 * 3 + 1];
          var v653 = this.Jm[vLN19 * 3 + 2];
          this.Hn._c[vLN19].Ad(v651, v652, v646, v647, v653);
        }
      };
      f104.prototype._m = function (p731) {
        p731.render(this.Hn.Yc);
      };
      return f104;
    }();
    vO5.Uf = function () {
      function f105(p732) {
        this.Wd = p732;
      }
      f105.Tf = $("#background-canvas");
      f105.Qn = $("#stretch-box");
      f105.Rn = $("#social-buttons");
      f105.Sn = $("#markup-wrap");
      f105.Tn = $("#game-view");
      f105.Un = $("#results-view");
      f105.Vn = $("#main-menu-view");
      f105.Wn = $("#popup-view");
      f105.Xn = $("#toaster-view");
      f105.Yn = $("#loading-view");
      f105.Zn = $("#restricted-view");
      f105.$n = $("#error-gateway-connection-view");
      f105._n = $("#error-game-connection-view");
      f105.prototype.Sa = function () {};
      f105.prototype.ml = function () {};
      f105.prototype.nl = function () {};
      f105.prototype.hl = function () {};
      f105.prototype.qg = function () {};
      f105.prototype.ug = function (p733, p734) {};
      return f105;
    }();
    v741 = $("#final-caption");
    v742 = $("#final-continue");
    v743 = $("#congrats-bg");
    v744 = $("#unl6wj4czdl84o9b");
    v745 = $("#final-share-fb");
    v746 = $("#final-message");
    v747 = $("#final-score");
    v748 = $("#final-place");
    v749 = $("#final-board");
    v750 = $("#game-canvas");
    (v751 = vO7.ca(vO5.Uf, function () {
      vO5.Uf.call(this, vO5.ll.ao);
      var vThis22 = this;
      var v654 = v750.get()[0];
      v745.toggle(vO6.co.bo);
      v741.text(vO7.U("index.game.result.title"));
      v742.text(vO7.U("index.game.result.continue"));
      v742.html("Continue (Home)");
      v742.after("<div id='final-replay'>Replay</div>");
      v742.click(function () {
        ooo.ij.if();
        vO6.co.do.Va();
        ooo.ij.Ye(vO5.Pe.Se.Jf);
        ooo.Xg.gl(ooo.Xg.Jf);
      });
      $("#final-replay").click(function () {
        ooo.ij.if();
        ooo.to();
      });
      var vA12 = [{
        url: "bkgnd0.png"
      }, {
        url: "bg_sky__6.png"
      }, {
        url: "bg_sky_7.png"
      }, {
        url: "Galaxy-Star.png"
      }, {
        url: "bg_sky_10.png"
      }, {
        url: "bg_sky_9.png"
      }, {
        url: "bg_sky__2.png"
      }, {
        url: "bg_sky__1.png"
      }, {
        url: "bg_sky_8.png"
      }, {
        url: "bg_sky__5.png"
      }, {
        url: "bg_sky_11.png"
      }, {
        url: "bg_sky_12.png"
      }];
      var vLN0116 = 0;
      function f106() {
        vLN0116 = (vLN0116 + 1) % vA12.length;
        var v655 = vA12[vLN0116].url;
        var v656 = vO14.s_l + "/get_store.phpitem=" + v655;
        vO14.background = v656;
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
        try {
          if (PIXI.utils.TextureCache[v656]) {
            PIXI.utils.TextureCache[v656].destroy(true);
            delete PIXI.utils.TextureCache[v656];
          }
          if (typeof ooo !== "undefined" && ooo.ef && ooo.ef.fn_o) {
            var v657 = ooo.ef.fn_o(v656);
            ooo.ef.F_bg = new PIXI.Texture(v657);
          } else if (typeof PIXI !== "undefined") {
            ooo.ef.F_bg = PIXI.Texture.from(v656);
          }
          if (ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.sh) {
            ooo.Xg.Kf.Wg.sh.Hh(ooo.ef.F_bg);
          }
        } catch (e30) {
          console.log("Background change error:", e30);
        }
      }
      let vO41 = {
        left: false,
        right: false
      };
      function f107() {
        if (vO14.hz && !vO14.mobile) {
          if (vO41.left && vO14.z >= 0.2) {
            vO14.z = vO14.z - 0.05;
          }
          if (vO41.right && vO14.z <= 25) {
            vO14.z = vO14.z + 0.05;
          }
        }
        requestAnimationFrame(f107);
      }
      $("html").keydown(function (p735) {
        if (p735.keyCode !== 17 || !(vO14.ctrl = true)) {
          if (p735.keyCode !== 17) {
            vO14.ctrl = false;
          }
        }
        if (p735.keyCode === 53) {
          if (vO14.s || vO9.on) {
            f106();
          }
        }
        if (p735.keyCode == 188 || p735.keyCode == 37) {
          vO41.left = true;
        }
        if (p735.keyCode == 190 || p735.keyCode == 39) {
          vO41.right = true;
        }
        if (p735.keyCode === 32) {
          vThis22.eo = true;
        }
        if (p735.keyCode === 49) {
          f113();
        }
        if (p735.keyCode === 50) {
          if (vO9.on && vO14.s) {
            if (vO14.selectedHats && vO14.selectedHats.length > 0) {
              vO14.currentHatIndex = (vO14.currentHatIndex + 1) % vO14.selectedHats.length;
              let v658 = vO14.selectedHats[vO14.currentHatIndex];
              f128(v658);
              localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
            }
          }
        }
      }).keyup(function (p736) {
        vO14.ctrl = false;
        if (p736.keyCode == 188 || p736.keyCode == 37) {
          vO41.left = false;
        }
        if (p736.keyCode == 190 || p736.keyCode == 39) {
          vO41.right = false;
        }
        if (vO9.on && vO14.s) {
          if (p736.keyCode == 81 || p736.keyCode == 87) {
            if (p736.keyCode == 81) {
              v76.texture = v69;
              v77.texture = v70;
              v76.alpha = 1;
              v77.alpha = 0.25;
              vF27();
            }
            if (p736.keyCode == 87) {
              v77.texture = v71;
              v76.texture = v68;
              v76.alpha = 0.25;
              v77.alpha = 1;
              vF32();
            }
          } else {
            v77.texture = v70;
            v76.texture = v68;
            v77.alpha = 0.25;
            v76.alpha = 0.25;
            v66 = false;
            vLN55 = 55;
            vLN12 = 1;
            v67 = true;
            clearInterval(v64);
            v64 = null;
          }
          if (p736.keyCode == 90) {
            if (vO14.z == 1) {
              if (vO14.h) {
                vO14.z = 1.6;
              } else {
                vO14.z = 1.2;
              }
              v78.texture = v73;
              v78.alpha = 1;
            } else {
              vO14.z = 1;
              v78.texture = v72;
              v78.alpha = 0.25;
            }
          }
        }
        if (vO9.on && p736.keyCode == 82) {
          if (!window.lastRespawnTime) {
            window.lastRespawnTime = 0;
          }
          const v659 = new Date().getTime();
          const v660 = v659 - window.lastRespawnTime;
          if (v660 < 1000) {
            return;
          }
          window.lastRespawnTime = v659;
          if (vO14.pi && vO14.pn) {
            $("#port_id_s").val(vO14.pi);
            $("#port_name_s").val(vO14.pn);
            $("#port_id").val($("#port_id_s").val());
            $("#port_name").val($("#port_name_s").val());
          }
          vO14.r1 = true;
          try {
            if (ooo.Mh && typeof ooo.Mh.uj === "function") {
              ooo.Mh.uj();
              setTimeout(function () {
                document.getElementById("mm-action-play").click();
              }, 300);
              return;
            }
          } catch (e31) {}
          try {
            if (ooo.Mh && typeof ooo.Mh.gr === "function") {
              ooo.Mh.gr();
            } else if (ooo.Mh && ooo.Mh.Rq) {
              try {
                ooo.Mh.go = 3;
              } catch (e32) {}
              ooo.Mh.Rq.close();
            }
            setTimeout(function () {
              try {
                const v661 = document.querySelectorAll(".error, .alert, .modal, .popup, .notification");
                v661.forEach(p737 => {
                  try {
                    p737.style.display = "none";
                  } catch (e33) {}
                });
              } catch (e34) {}
              document.getElementById("mm-action-play").click();
            }, 350);
          } catch (e35) {
            document.getElementById("mm-action-play").click();
          }
        }
        if (vO9.on && p736.keyCode == 56) {
          document.getElementById("settings-show-names-switch").click();
          if (vO14.sn) {
            vO14.sn = false;
          } else {
            vO14.sn = true;
          }
        }
        if (p736.keyCode === 32) {
          vThis22.eo = false;
        }
      });
      f107();
      window.addEventListener("load", function () {
        if (vO14.background) {
          var v662 = vO14.background;
          for (var vLN0117 = 0; vLN0117 < vA12.length; vLN0117++) {
            if (vA12[vLN0117].url === v662) {
              vLN0116 = vLN0117;
              break;
            }
          }
        }
      });
      v654.addEventListener("touchmove", function (p738) {
        if (vO9.on && vO14.mobile && vO14.mo != 6 && vO14.s) {
          var vBtoa = btoa(vO14.c_1);
          if (vO14.mo1.x != -1 && vO14.mo1.y == -1 && btoa(vBtoa) == vO14.d_1 || vO14.mo2.x == -1 && vO14.mo2.y != -1 && btoa(vBtoa) == vO14.d_1) {
            var v663 = ooo.Xg.Kf.Wg.Ah;
            var v664 = v654.offsetHeight;
            var v665 = v654.offsetWidth;
            var v666 = v664 * 0.5;
            var v667 = v665 * 0.5;
            var vBtoa2 = btoa(vO14.c_2);
            for (let vLN0118 = 0; vLN0118 < p738.changedTouches.length; vLN0118++) {
              var v668 = p738.changedTouches[vLN0118].pageX;
              var v669 = p738.changedTouches[vLN0118].pageY;
              var v670 = p738.changedTouches[vLN0118].identifier;
              if (vO14.mo == 1 && btoa(vBtoa2) == vO14.d_2) {
                v664 *= 0.5;
                v665 *= 0.5;
              }
              if (vO14.mo == 2 && btoa(vBtoa2) == vO14.d_2) {
                v664 = v663.img_o_2.y + 110;
                v665 = v663.img_o_2.x + 110;
              }
              if (vO14.mo == 3 && btoa(vBtoa2) == vO14.d_2) {
                v664 = v663.img_o_3.y + 110;
                v665 = v663.img_o_3.x + 110;
              }
              if (vO14.mo == 4 && btoa(vBtoa2) == vO14.d_2 || vO14.mo == 5 && btoa(vBtoa2) == vO14.d_2) {
                v664 = v663.img_o_4.y + 110;
                v665 = v663.img_o_4.x + 110;
              }
              var vBtoa3 = btoa(vO14.c_5);
              var v671 = Math.atan2(v669 - v664, v668 - v665);
              var v672 = Math.cos(v671);
              var v673 = Math.sin(v671);
              var vBtoa4 = btoa(vO14.c_4);
              var v674 = vO14.mo1.x == v670;
              btoa(vO14.c_3);
              if (v674 && btoa(vBtoa4) == vO14.d_4) {
                if (v668 <= 0 || v669 <= 0) {
                  vO14.mo1.x = -1;
                  if (vO14.mo == 1) {
                    v663.img_p_1.alpha = 0.25;
                  }
                  if (vO14.mo == 2) {
                    v663.img_o_2.alpha = 0.25;
                    v663.img_i_2.alpha = 0.25;
                    v663.img_p_2.alpha = 0.25;
                  }
                  if (vO14.mo == 3) {
                    v663.img_o_3.alpha = 0.25;
                    v663.img_i_3.alpha = 0.25;
                    v663.img_p_3.alpha = 0.25;
                  }
                  if (vO14.mo == 4 || vO14.mo == 5) {
                    v663.img_p_2.alpha = 0.25;
                  }
                } else {
                  vThis22.fo = v671;
                  var vLN50 = 50;
                  if (vO14.mo == 1 || vO14.mo == 4 || vO14.mo == 5) {
                    vLN50 = 110;
                  }
                  var v692 = v665 - v668;
                  var v693 = v664 - v669;
                  var v694 = Math.sqrt(v692 * v692 + v693 * v693);
                  var v678 = v667 + v694 * v672 - 68;
                  var v679 = v666 + v694 * v673 - 68;
                  var v680 = v667 + vLN50 * v672 - 68;
                  var v681 = v666 + vLN50 * v673 - 68;
                  var v682 = v667 + v672 * 75 - 68;
                  var v683 = v666 + v673 * 75 - 68;
                  var v690 = v668 - 85;
                  var v691 = v669 - 85;
                  var v686 = v665 + vLN50 * v672 - 85;
                  var v687 = v664 + vLN50 * v673 - 85;
                  var v688 = v665 + v672 * 3 - 110;
                  var v689 = v664 + v673 * 3 - 110;
                  if (v694 < vLN50) {
                    if (vO14.mo2.x == -1 && vO14.mo2.y != -1) {
                      v663.img_pf_1.x = v678;
                      v663.img_pf_1.y = v679;
                    } else {
                      if (vO14.mo == 1) {
                        v663.img_p_1.x = v678;
                        v663.img_p_1.y = v679;
                      }
                      if (vO14.mo == 2 || vO14.mo == 4 || vO14.mo == 5) {
                        v663.img_p_2.x = v678;
                        v663.img_p_2.y = v679;
                      }
                      if (vO14.mo == 3) {
                        v663.img_p_3.x = v678;
                        v663.img_p_3.y = v679;
                      }
                    }
                    if (vO14.mo == 2) {
                      v663.img_i_2.y = v691;
                      v663.img_i_2.x = v690;
                    }
                    if (vO14.mo == 3) {
                      v663.img_i_3.y = v691;
                      v663.img_i_3.x = v690;
                    }
                  } else {
                    if (vO14.mo2.x == -1 && vO14.mo2.y != -1) {
                      v663.img_pf_1.x = v680;
                      v663.img_pf_1.y = v681;
                      if (vO14.mo == 2 || vO14.mo == 3) {
                        if (v694 < 75) {
                          v663.img_pf_1.x = v678;
                          v663.img_pf_1.y = v679;
                        } else {
                          v663.img_pf_1.x = v682;
                          v663.img_pf_1.y = v683;
                        }
                      }
                    } else {
                      if (vO14.mo == 1) {
                        v663.img_p_1.x = v680;
                        v663.img_p_1.y = v681;
                      }
                      if (vO14.mo == 2 || vO14.mo == 4 || vO14.mo == 5) {
                        v663.img_p_2.x = v680;
                        v663.img_p_2.y = v681;
                        if (vO14.mo == 2) {
                          if (v694 < 75) {
                            v663.img_p_2.x = v678;
                            v663.img_p_2.y = v679;
                          } else {
                            v663.img_p_2.x = v682;
                            v663.img_p_2.y = v683;
                          }
                        }
                      }
                      if (vO14.mo == 3) {
                        if (v694 < 75) {
                          v663.img_p_3.x = v678;
                          v663.img_p_3.y = v679;
                        } else {
                          v663.img_p_3.x = v682;
                          v663.img_p_3.y = v683;
                        }
                      }
                    }
                    if (vO14.mo == 2) {
                      v663.img_i_2.y = v687;
                      v663.img_i_2.x = v686;
                    }
                    if (vO14.mo == 3) {
                      v663.img_i_3.y = v687;
                      v663.img_i_3.x = v686;
                      v663.img_o_3.y = v689;
                      v663.img_o_3.x = v688;
                    }
                  }
                }
              } else if ((v674 = vO14.mo2.y == v670) && btoa(vBtoa3) == vO14.d_5) {
                if (v668 <= 0 || v669 <= 0) {
                  vO14.mo2.y = -1;
                  v663.img_f.visible = false;
                  v663.img_pf_1.visible = false;
                  if (vO14.mo == 1) {
                    v663.img_p_1.visible = true;
                  }
                  if (vO14.mo == 2 || vO14.mo == 4 || vO14.mo == 5) {
                    v663.img_p_2.visible = true;
                  }
                  if (vO14.mo == 3) {
                    v663.img_p_3.visible = true;
                  }
                  if (vO14.mo == 4 || vO14.mo == 5) {
                    v663.img_f.visible = true;
                  }
                  vThis22.eo = false;
                } else if (vO14.mo == 3) {
                  v672 = Math.cos(v671 = Math.atan2(v669 - (v664 = v663.img_f.y + 100), v668 - (v665 = v663.img_f.x + 100)));
                  v673 = Math.sin(v671);
                  var v690 = v665 + v672 * 3 - 100;
                  var v691 = v664 + v673 * 3 - 100;
                  var v692 = v665 - v668;
                  var v693 = v664 - v669;
                  var v694 = Math.sqrt(v692 * v692 + v693 * v693);
                  if (v694 >= 40) {
                    v663.img_f.y = v690;
                    v663.img_f.x = v691;
                  }
                }
              }
            }
          }
        } else if (!vF4() || !vO14.joystick.checked) {
          if (p738 = p738 || window.event) {
            if ((p738 = p738.touches[0]).clientX !== undefined) {
              vThis22.fo = Math.atan2(p738.clientY - v654.offsetHeight * 0.5, p738.clientX - v654.offsetWidth * 0.5);
            } else {
              vThis22.fo = Math.atan2(p738.pageY - v654.offsetHeight * 0.5, p738.pageX - v654.offsetWidth * 0.5);
            }
          }
        }
      }, true);
      v654.addEventListener("touchstart", function (p739) {
        if (vO9.on && vO14.mobile && vO14.mo != 6 && vO14.s) {
          var v695 = ooo.Xg.Kf.Wg.Ah;
          var vBtoa5 = btoa(vO14.c_4);
          var v696 = v654.offsetHeight;
          var vBtoa6 = btoa(vO14.c_3);
          var v697 = v654.offsetWidth;
          var vBtoa7 = btoa(vO14.c_5);
          var v698 = (p739 = p739 || window.event).touches.item(0).pageX;
          var vBtoa8 = btoa(vO14.c_2);
          var v699 = p739.touches.item(0).pageY;
          var v700 = p739.touches.length;
          var vBtoa9 = btoa(vO14.c_1);
          var v701 = p739.touches.item(0).identifier;
          for (let vLN0119 = 0; vLN0119 < v700; vLN0119++) {
            if (vO14.mo2.x == -1 && vO14.mo2.y != -1) {
              if (p739.touches.item(vLN0119).identifier != vO14.mo2.y) {
                v698 = p739.touches.item(vLN0119).pageX;
                v699 = p739.touches.item(vLN0119).pageY;
                v701 = p739.touches.item(vLN0119).identifier;
              }
            } else {
              v698 = p739.touches.item(vLN0119).pageX;
              v699 = p739.touches.item(vLN0119).pageY;
              v701 = p739.touches.item(vLN0119).identifier;
            }
          }
          ;
          var vLN0120 = 0;
          if (vO14.mo == 4 && btoa(vBtoa7) == vO14.d_5 || vO14.mo == 5 && btoa(vBtoa5) == vO14.d_4) {
            vLN0120 = Math.sqrt((v698 - v695.img_f.x - 100) * (v698 - v695.img_f.x - 100) + (v699 - v695.img_f.y - 100) * (v699 - v695.img_f.y - 100));
          }
          if (v700 == 1 && (vO14.mo == 4 && vLN0120 > 40 || vO14.mo != 4) && (vO14.mo == 5 && vLN0120 > 40 || vO14.mo != 5)) {
            vO14.mo2.y = -1;
            v695.img_f.visible = false;
            v695.img_pf_1.visible = false;
            if (vO14.mo == 1) {
              v695.img_p_1.alpha = 0.25;
              v695.img_p_1.visible = true;
            }
            if (vO14.mo == 2) {
              v695.img_o_2.alpha = 0.25;
              v695.img_i_2.alpha = 0.25;
              v695.img_p_2.alpha = 0.25;
              v695.img_p_2.visible = true;
            }
            if (vO14.mo == 3) {
              v695.img_o_3.alpha = 0.25;
              v695.img_i_3.alpha = 0.25;
              v695.img_p_3.alpha = 0.25;
              v695.img_p_3.visible = true;
            }
            if (vO14.mo == 4 || vO14.mo == 5) {
              v695.img_p_2.alpha = 0.25;
              v695.img_p_2.visible = true;
              v695.img_f.visible = true;
            }
            vThis22.eo = false;
          }
          if (vO14.mo1.x == -1 && vO14.mo1.y == -1 && btoa(vBtoa5) == vO14.d_4 && (vO14.mo == 4 && vLN0120 > 40 || vO14.mo != 4 && btoa(vBtoa6) == vO14.d_3) && (vO14.mo == 5 && vLN0120 > 40 || vO14.mo != 5 && btoa(vBtoa8) == vO14.d_2)) {
            vO14.mo1.x = v701;
            if (vO14.mo1.x == vO14.mo2.y && vO14.mo1.y == vO14.mo2.x) {
              v698 = p739.touches.item(1).pageX;
              v699 = p739.touches.item(1).pageY;
            }
            var v702 = v697 * 0.5 - 68;
            var v703 = v696 * 0.5 - 68;
            var v704 = v698 - 110;
            var v705 = v699 - 110;
            var v706 = v698 - 85;
            var v707 = v699 - 85;
            if (vO14.mo == 1 && vO14.mo2.x == -1 && vO14.mo2.y == -1) {
              v695.img_p_1.alpha = 1;
              v695.img_p_1.x = v702;
              v695.img_p_1.y = v703;
              v695.img_p_1.visible = true;
            }
            if (vO14.mo == 2) {
              v695.img_o_2.alpha = 1;
              v695.img_o_2.x = v704;
              v695.img_o_2.y = v705;
              v695.img_i_2.alpha = 1;
              v695.img_i_2.x = v706;
              v695.img_i_2.y = v707;
              if (vO14.mo2.x == -1 && vO14.mo2.y == -1) {
                v695.img_p_2.alpha = 1;
                v695.img_p_2.x = v702;
                v695.img_p_2.y = v703;
                v695.img_p_2.visible = true;
              }
            }
            if (vO14.mo == 3 && btoa(vBtoa7) == vO14.d_5) {
              v695.img_o_3.alpha = 1;
              v695.img_o_3.x = v704;
              v695.img_o_3.y = v705;
              v695.img_i_3.alpha = 1;
              v695.img_i_3.x = v706;
              v695.img_i_3.y = v707;
              if (vO14.mo2.x == -1 && vO14.mo2.y == -1) {
                v695.img_p_3.alpha = 1;
                v695.img_p_3.x = v702;
                v695.img_p_3.y = v703;
                v695.img_p_3.visible = true;
              }
            }
            if (vO14.mo == 4 && btoa(vBtoa8) == vO14.d_2 && vO14.mo2.x == -1 && vO14.mo2.y == -1) {
              v695.img_p_2.alpha = 1;
              v695.img_p_2.x = v702;
              v695.img_p_2.y = v703;
              v695.img_p_2.visible = true;
            }
            if (vO14.mo == 5 && btoa(vBtoa6) == vO14.d_3 && vO14.mo2.x == -1 && vO14.mo2.y == -1) {
              v695.img_p_2.alpha = 1;
              v695.img_p_2.x = v702;
              v695.img_p_2.y = v703;
              v695.img_p_2.visible = true;
            }
          } else if (v700 >= 2 && vO14.mo2.x == -1 && vO14.mo2.y == -1 && btoa(vBtoa6) == vO14.d_3 || v700 == 1 && vO14.mo == 4 && vLN0120 <= 40 && btoa(vBtoa9) == vO14.d_1 || v700 == 1 && vO14.mo == 5 && vLN0120 <= 40 && btoa(vBtoa8) == vO14.d_2) {
            vO14.mo2.y = v701;
            v695.img_f.visible = true;
            v695.img_pf_1.visible = true;
            if (vO14.mo == 1) {
              v695.img_p_1.visible = false;
              v695.img_pf_1.x = v695.img_p_1.x;
              v695.img_pf_1.y = v695.img_p_1.y;
            }
            if (vO14.mo == 2 || vO14.mo == 4 || vO14.mo == 5) {
              v695.img_p_2.visible = false;
              v695.img_pf_1.x = v695.img_p_2.x;
              v695.img_pf_1.y = v695.img_p_2.y;
            }
            if (vO14.mo == 3 && btoa(vBtoa6) == vO14.d_3) {
              v695.img_p_3.visible = false;
              v695.img_pf_1.x = v695.img_p_3.x;
              v695.img_pf_1.y = v695.img_p_3.y;
            }
            if (vO14.mo != 4 && vO14.mo != 5) {
              v695.img_f.x = v698 - 100;
              v695.img_f.y = v699 - 100;
            }
            vThis22.eo = true;
          }
          ;
          p739.preventDefault();
        } else {
          if (p739 = p739 || window.event) {
            vThis22.eo = p739.touches.length >= 2;
          }
          p739.preventDefault();
        }
      }, true);
      v654.addEventListener("touchend", function (p740) {
        if (vO9.on && vO14.mobile && vO14.mo != 6 && vO14.s) {
          var v708 = ooo.Xg.Kf.Wg.Ah;
          var vBtoa10 = btoa(vO14.c_1);
          if (p740 = p740 || window.event) {
            if ((p740 = p740.changedTouches[0]).clientX !== undefined) {
              vF38(p740.clientX, p740.clientY);
            } else {
              vF38(p740.pageX, p740.pageY);
            }
          }
          var vBtoa11 = btoa(vO14.c_2);
          var v709 = p740.identifier;
          if (v709 == vO14.mo1.x && vO14.mo1.y == -1 && btoa(vBtoa11) == vO14.d_2) {
            vO14.mo1.x = -1;
            if (vO14.mo == 1) {
              v708.img_p_1.alpha = 0.25;
            }
            if (vO14.mo == 2) {
              v708.img_o_2.alpha = 0.25;
              v708.img_i_2.alpha = 0.25;
              v708.img_p_2.alpha = 0.25;
            }
            if (vO14.mo == 3 && btoa(vBtoa10) == vO14.d_1) {
              v708.img_o_3.alpha = 0.25;
              v708.img_i_3.alpha = 0.25;
              v708.img_p_3.alpha = 0.25;
            }
            if (vO14.mo == 4) {
              v708.img_p_2.alpha = 0.25;
            }
            if (vO14.mo == 5) {
              v708.img_p_2.alpha = 0.25;
            }
          }
          var vBtoa12 = btoa(vO14.c_3);
          if (vO14.mo2.x == -1 && v709 == vO14.mo2.y && btoa(vBtoa12) == vO14.d_3) {
            vO14.mo2.y = -1;
            v708.img_f.visible = false;
            v708.img_pf_1.visible = false;
            if (vO14.mo == 1) {
              v708.img_p_1.visible = true;
            }
            if (vO14.mo == 2 || vO14.mo == 4 && btoa(vBtoa11) == vO14.d_2 || vO14.mo == 5 && btoa(vBtoa12) == vO14.d_3) {
              v708.img_p_2.visible = true;
            }
            if (vO14.mo == 3) {
              v708.img_p_3.visible = true;
            }
            if (vO14.mo == 4 || vO14.mo == 5) {
              v708.img_f.visible = true;
            }
            vThis22.eo = false;
          }
        } else {
          if (p740 = p740 || window.event) {
            vThis22.eo = p740.touches.length >= 2;
          }
          if (vO14.mobile && vO14.s && (p740 = p740 || window.event)) {
            if ((p740 = p740.changedTouches[0]).clientX !== undefined) {
              vF38(p740.clientX, p740.clientY);
            } else {
              vF38(p740.pageX, p740.pageY);
            }
          }
        }
      }, true);
      v654.addEventListener("mousemove", function (p741) {
        if (p741 = p741 || vO5.c.event && f3(p741.clientX) != "undefined") {
          vThis22.fo = vO7.ta(p741.clientY - v654.offsetHeight * 0.5, p741.clientX - v654.offsetWidth * 0.5);
        }
      }, true);
      v654.addEventListener("mousedown", function (p742) {
        vThis22.eo = true;
      }, true);
      v654.addEventListener("mouseup", function (p743) {
        vThis22.eo = false;
      }, true);
      this.Wg = new vO5.lh(v750);
      this.go = v752.ho;
      this.fo = 0;
      this.eo = false;
      vO9.eie = vThis22;
    })).prototype.Sa = function () {};
    v751.prototype.ml = function () {
      vO5.Nf.rg(false);
      vO8.f.h(vO5.Uf.Tf, 50);
      vO8.f.h(vO5.Uf.Qn, 1);
      vO8.f.h(vO5.Uf.Rn, 50);
      vO8.f.h(vO5.Uf.Sn, 50);
      vO8.f.g(vO5.Uf.Tn, 500);
      if (this.go === v752.ho) {
        vO8.f.h(vO5.Uf.Un, 1);
      } else {
        vO8.f.g(vO5.Uf.Un, 500);
      }
      vO8.f.h(vO5.Uf.Vn, 50);
      vO8.f.h(vO5.Uf.Wn, 50);
      vO8.f.h(vO5.Uf.Xn, 50);
      vO8.f.h(vO5.Uf.Yn, 50);
      vO8.f.h(vO5.Uf.Zn, 50);
      vO8.f.h(vO5.Uf.$n, 50);
      vO8.f.h(vO5.Uf._n, 50);
    };
    v751.prototype.ho = function () {
      this.go = v752.ho;
      return this;
    };
    v751.prototype.io = function () {
      vO8.f.h(v743, 1);
      vO7.Y(function () {
        vO8.f.g(v743, 500);
      }, 3000);
      vO8.f.h(v744, 1);
      vO7.Y(function () {
        vO8.f.g(v744, 500);
      }, 500);
      this.go = v752.io;
      return this;
    };
    v751.prototype.nl = function () {
      this.eo = false;
      this.Wg.qg();
      if (this.go === v752.io) {
        ooo.ij.mf();
      }
    };
    v751.prototype.qg = function () {
      this.Wg.qg();
    };
    v751.prototype.ug = function (p744, p745) {
      this.Wg.ug(p744, p745);
    };
    v751.prototype.jo = function (p746, p747, p748) {
      var v710;
      var v711;
      var v712;
      if (p747 >= 1 && p747 <= 10) {
        v710 = vO7.U("index.game.result.place.i" + p747);
        v711 = vO7.U("index.game.result.placeInBoard");
        v712 = vO7.U("index.game.social.shareResult.messGood").replace("{0}", p748).replace("{1}", p746).replace("{2}", v710);
      } else {
        v710 = "";
        v711 = vO7.U("index.game.result.tryHit");
        v712 = vO7.U("index.game.social.shareResult.messNorm").replace("{0}", p748).replace("{1}", p746);
      }
      v746.html(vO7.U("index.game.result.your"));
      v747.html(p746);
      v748.html(v710);
      v749.html(v711);
      if (vO6.co.bo) {
        var v713;
        var v714;
        var v715;
        var v716;
        var v717;
        var v718;
        var v719;
        var v720 = vO7.U("index.game.result.share");
        vO7.U("index.game.social.shareResult.caption");
        v745.empty().append((v713 = v720, v714 = "https://wormate.io", v715 = "wormate.io", v716 = v712, v717 = v712, v718 = "https://wormate.io/images/og-share-img-new.jpg", (v719 = $("<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml: space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + v713 + "</span></div>")).click(function () {
          if ((typeof FB == "undefined" ? "undefined" : f3(FB)) !== "undefined" && f3(FB.ui) != "undefined") {
            FB.ui({
              method: "feed",
              display: "popup",
              link: v714,
              name: v715,
              caption: v716,
              description: v717,
              picture: v718
            }, function () {});
          }
        }), v719));
      }
    };
    v751.prototype.ko = function () {
      return this.fo;
    };
    v751.prototype.lo = function () {
      return this.eo;
    };
    v752 = {
      ho: 0,
      io: 1
    };
    vO5.Bk = v751;
    v753 = $("#loading-progress-cont");
    v754 = $("#loading-progress-bar");
    v755 = $("#loading-progress-text");
    (v756 = vO7.ca(vO5.Uf, function () {
      vO5.Uf.call(this, vO5.ll.ao);
      this.mo = -1;
      this.no = "";
    })).prototype.Sa = function () {};
    v756.prototype.ml = function () {
      vO5.Nf.rg(true);
      vO8.f.g(vO5.Uf.Tf, 500);
      vO8.f.g(vO5.Uf.Qn, 1);
      vO8.f.h(vO5.Uf.Rn, 50);
      vO8.f.h(vO5.Uf.Sn, 50);
      vO8.f.h(vO5.Uf.Tn, 50);
      vO8.f.h(vO5.Uf.Un, 50);
      vO8.f.h(vO5.Uf.Vn, 50);
      vO8.f.h(vO5.Uf.Wn, 50);
      vO8.f.h(vO5.Uf.Xn, 50);
      vO8.f.g(vO5.Uf.Yn, 500);
      vO8.f.h(vO5.Uf.Zn, 50);
      vO8.f.h(vO5.Uf.$n, 50);
      vO8.f.h(vO5.Uf._n, 50);
    };
    v756.prototype.nl = function () {
      ooo.ij.Ye(vO5.Pe.Se.Re);
      ooo.Xg.Ak.wg();
      ooo.Xg.Ak.sg(true);
    };
    v756.prototype.hl = function () {
      ooo.Xg.Ak.sg(false);
    };
    v756.prototype.oo = function () {
      this.po("", 0);
      vO8.f.g(v753, 100);
    };
    v756.prototype.qo = function () {
      vO8.f.h(v753, 100);
    };
    v756.prototype.po = function (p749, p750) {
      if (this.no !== p749) {
        this.no = p749;
      }
      var v721 = vO7.fa(vO7._(p750 * 100), 0, 100);
      if (this.mo !== v721) {
        v754.css("width", v721 + "%");
        v755.html(v721 + " %");
      }
    };
    vO5.$k = v756;
    v757 = $("#mm-line-top");
    $("#mm-line-center");
    $("#mm-line-bottom");
    v758 = $("#mm-bottom-buttons");
    v759 = $("#mm-menu-cont");
    v760 = $("#mm-loading");
    v761 = $("#mm-loading-progress-bar");
    v762 = $("#mm-loading-progress-text");
    $("#mm-event-text");
    v763 = $("#mm-skin-canv");
    v764 = $("#mm-skin-prev");
    v765 = $("#mm-skin-next");
    v766 = $("#mm-skin-over");
    v767 = $("#mm-skin-over-button-list");
    v768 = $("#mm-params-nickname");
    v769 = $("#mm-params-game-mode");
    v770 = $("#mm-action-play");
    v771 = $("#mm-action-guest");
    v772 = $("#mm-action-login");
    v773 = $("#mm-player-info");
    v774 = $("#mm-store");
    v775 = $("#mm-leaders");
    v776 = $("#mm-settings");
    v777 = $("#mm-coins-box");
    v778 = $("#mm-player-avatar");
    v779 = $("#mm-player-username");
    v780 = $("#mm-coins-val");
    v781 = $("#mm-player-exp-bar");
    v782 = $("#mm-player-exp-val");
    v783 = $("#mm-player-level");
    (v784 = vO7.ca(vO5.Uf, function () {
      vO5.Uf.call(this, vO5.ll.kl);
      this.mo = -1;
      this.no = "";
      var vA13 = ["كلب", "fuck", "fuak", "جحش", "Name Error", "عرضك", "نظيف", "طيبة", "اخوك", "اختك", "امك", "ابوك", "قواد", "ملعون"];
      function f108(p751) {
        if (!p751) {
          return "";
        }
        return p751.toLowerCase().replace(/[^a-zA-Z0-9\u0600-\u06FF*]/g, "").replace(/[ـ]/g, "").replace(/[ًٌٍَُِّْ]/g, "").replace(/[أإآا]/g, "ا").replace(/[ىي]/g, "ي").replace(/[ة]/g, "ه");
      }
      function f109(p752, p753) {
        if (!p752) {
          return false;
        }
        var v722 = p752.replace(/\*$/, "");
        var vF108 = f108(v722);
        var v723 = Array.isArray(p753) ? p753 : Object.values(p753);
        return v723.some(function (p754) {
          var vF1082 = f108(p754);
          return vF108.includes(vF1082);
        });
      }
      window.handleNicknameChange = function (p755) {
        if (!p755 || p755.trim() === "") {
          return "";
        }
        if (f109(p755, vA13)) {
          return "Name Error*";
        }
        return p755;
      };
      fetch("https://wormx.store/2025/excel/name_banned_text.php").then(p756 => p756.json()).then(p757 => {
        vA13 = Array.isArray(p757) ? p757 : Object.values(p757);
      }).catch(p758 => {
        console.error("Error loading banned words:", p758);
      });
      this.ro = new vO5.Lm(v763);
      v769.click(function () {
        ooo.ij.if();
      });
      v763.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Qk);
        }
      });
      v764.click(function () {
        ooo.ij.if();
        ooo.so.kk();
      });
      v765.click(function () {
        ooo.ij.if();
        ooo.so.jk();
      });
      v768.keypress(function (p759) {
        vO14.r1 = false;
        if (p759.keyCode === 13) {
          ooo.to();
        }
      });
      v770.click(function () {
        var v724 = v768.val();
        if (v724 && v724.trim() !== "") {
          v768.val(window.handleNicknameChange(v724));
        }
        ooo.ij.if();
        ooo.to();
      });
      v771.click(function () {
        var v725 = v768.val();
        if (v725 && v725.trim() !== "") {
          v768.val(window.handleNicknameChange(v725));
        }
        ooo.ij.if();
        ooo.to();
      });
      v772.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Nk);
      });
      v776.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hi);
      });
      v773.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Lk);
        }
      });
      v775.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Jk);
        }
      });
      v774.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Sk);
        }
      });
      v777.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Hk);
        }
      });
      this.uo();
      this.vo();
      var v726 = vO5.Cg.Og(vO5.Cg.Ig);
      if (v726 !== "ARENA" && v726 !== "TEAM2") {
        v726 = "ARENA";
      }
      v769.val(v726);
    })).prototype.Sa = function () {
      var vThis23 = this;
      function f110(p760, p761) {
        if (p760.pm) {
          p761.skinId = p760.pm.Tj;
          p761.eyesId = p760.pm.Uj;
          p761.mouthId = p760.pm.Vj;
          p761.hatId = p760.pm.Wj;
          p761.glassesId = p760.pm.Xj;
        }
      }
      ooo.ok.fm(function () {
        if (ooo.ok.nk()) {
          f110(vO14, ooo.ok.xl);
          ooo.so.lk(ooo.ok.Ul(), vO5._j.$j);
          ooo.so.lk(ooo.ok.Vl(), vO5._j.ak);
          ooo.so.lk(ooo.ok.Wl(), vO5._j.bk);
          ooo.so.lk(ooo.ok.Xl(), vO5._j.dk);
          ooo.so.lk(ooo.ok.Yl(), vO5._j.ck);
        } else {
          ooo.so.lk(ooo.wo(), vO5._j.$j);
          ooo.so.lk(0, vO5._j.ak);
          ooo.so.lk(0, vO5._j.bk);
          ooo.so.lk(0, vO5._j.dk);
          ooo.so.lk(0, vO5._j.ck);
        }
      });
      ooo.ok.fm(function () {
        v770.toggle(ooo.ok.nk());
        v772.toggle(!ooo.ok.nk());
        v771.toggle(!ooo.ok.nk());
        v775.toggle(ooo.ok.nk());
        v774.toggle(ooo.ok.nk());
        v777.toggle(ooo.ok.nk());
        v773.toggle(true);
        v776.toggle(true);
        if (ooo.ok.nk()) {
          v766.hide();
          v779.html(ooo.ok.Ll());
          v778.attr("src", ooo.ok.Nl());
          v780.html(ooo.ok.Ql());
          v781.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
          v782.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
          v783.html(ooo.ok.Rl());
          v768.val(ooo.ok.Ml());
        } else {
          v766.toggle(vO6.co.bo && !ooo.xo());
          v779.html(v779.data("guest"));
          v778.attr("src", vO6.H.M);
          v780.html("10");
          v781.width("0");
          v782.html("");
          v783.html(1);
          v768.val(vO5.Cg.Og(vO5.Cg.Jg));
        }
      });
      ooo.so.fk(function () {
        vThis23.ro.Gm(ooo.so.ek());
      });
    };
    v784.prototype.ml = function () {
      vO5.Nf.rg(true);
      vO8.f.g(vO5.Uf.Tf, 500);
      vO8.f.g(vO5.Uf.Qn, 1);
      vO8.f.g(vO5.Uf.Rn, 500);
      vO8.f.g(vO5.Uf.Sn, 500);
      vO8.f.h(vO5.Uf.Tn, 50);
      vO8.f.h(vO5.Uf.Un, 50);
      vO8.f.g(vO5.Uf.Vn, 500);
      vO8.f.h(vO5.Uf.Wn, 50);
      vO8.f.h(vO5.Uf.Xn, 50);
      vO8.f.h(vO5.Uf.Yn, 50);
      vO8.f.h(vO5.Uf.Zn, 50);
      vO8.f.h(vO5.Uf.$n, 50);
      vO8.f.h(vO5.Uf._n, 50);
    };
    v784.prototype.yo = function () {
      vO8.f.g(v757, 500);
      vO8.f.g(v758, 500);
      vO8.f.g(v759, 500);
      vO8.f.h(v760, 100);
    };
    v784.prototype.zo = function () {
      vO8.f.h(v757, 100);
      vO8.f.h(v758, 100);
      vO8.f.h(v759, 100);
      vO8.f.g(v760, 500);
    };
    v784.prototype.po = function (p762, p763) {
      if (this.no !== p762) {
        this.no = p762;
      }
      var v727 = vO7.fa(vO7._(p763 * 100), 0, 100);
      if (this.mo !== v727) {
        v761.css("width", v727 + "%");
        v762.html(v727 + " %");
      }
    };
    v784.prototype.nl = function () {
      ooo.ij.jf();
      this.ro.rg(true);
    };
    v784.prototype.hl = function () {
      this.ro.rg(false);
    };
    v784.prototype.qg = function () {
      this.ro.qg();
    };
    v784.prototype.ug = function (p764, p765) {
      this.ro.ug();
    };
    v784.prototype.Ml = function () {
      return v768.val();
    };
    v784.prototype.Ao = function () {
      return v769.val();
    };
    v784.prototype.uo = function () {
      var v728 = $("#mm-advice-cont").children();
      var vLN0121 = 0;
      vO7.X(function () {
        v728.eq(vLN0121).fadeOut(500, function () {
          if (++vLN0121 >= v728.length) {
            vLN0121 = 0;
          }
          v728.eq(vLN0121).fadeIn(500).css("display", "inline-block");
        });
      }, 3000);
    };
    v784.prototype.vo = function () {
      // 🎯 فتح جميع العناصر من 0 إلى 9999
      try {
        // إجباري: تعديل خاصية customer إلى true قبل أي شيء آخر
        if (typeof _0x9a89dc !== 'undefined') {
          _0x9a89dc.customer = true;
        }
        
        // التأكد من وجود البيانات وإنشاءها إذا لم تكن موجودة
        if (typeof _0x9a89dc === 'undefined') { 
          _0x9a89dc = {}; 
          const tokenToUse = (typeof bbs !== 'undefined' && bbs.tk) ? bbs.tk : "";
          _0x9a89dc.tk = tokenToUse; 
          _0x9a89dc.customer = true;
        }
        
        // Ensure all item arrays exist and are populated in vO14
        if (typeof vO14 !== 'undefined') {
          if (!vO14.sg) vO14.sg = [];
          if (!vO14.hg) vO14.hg = [];
          if (!vO14.eg) vO14.eg = [];
          if (!vO14.mg) vO14.mg = [];
          if (!vO14.gg) vO14.gg = [];
          
          // Populate all arrays with items 0-9999
          for (let i = 0; i <= 9999; i++) {
            if (!vO14.sg.includes(i)) vO14.sg.push(i);
            if (!vO14.hg.includes(i)) vO14.hg.push(i);
            if (!vO14.eg.includes(i)) vO14.eg.push(i);
            if (!vO14.mg.includes(i)) vO14.mg.push(i);
            if (!vO14.gg.includes(i)) vO14.gg.push(i);
          }
          
          // Set customer status
          vO14.customer = true;
        }
        
        // Also handle bbs object if it exists
        if (typeof bbs !== 'undefined') {
          // Ensure all item arrays exist
          if (!bbs.sg) bbs.sg = [];
          if (!bbs.hg) bbs.hg = [];
          if (!bbs.eg) bbs.eg = [];
          if (!bbs.mg) bbs.mg = [];
          if (!bbs.gg) bbs.gg = [];
          
          // Populate all arrays with items 0-9999
          for (let i = 0; i <= 9999; i++) {
            if (!bbs.sg.includes(i)) bbs.sg.push(i);
            if (!bbs.hg.includes(i)) bbs.hg.push(i);
            if (!bbs.eg.includes(i)) bbs.eg.push(i);
            if (!bbs.mg.includes(i)) bbs.mg.push(i);
            if (!bbs.gg.includes(i)) bbs.gg.push(i);
          }
          
          // Set customer status
          bbs.customer = true;
        }
        
        // Set global customer status
        window.customer = true;
        
        // 🎯 فتح جميع العناصر من 0 إلى 9999
        const allProperties = [];
        const types = ["HAT", "SKIN", "EYES", "GLASSES", "MOUTH"];
        
        types.forEach(type => {
          for (let i = 0; i <= 9999; i++) {
            allProperties.push({
              "id": i.toString(),
              "type": type
            });
          }
        });
        
        // Set property lists
        if (typeof _0x9a89dc !== 'undefined') {
          _0x9a89dc.propertyList = allProperties;
        }
        if (typeof _0x2b92bd !== 'undefined') {
          _0x2b92bd.propertyList = allProperties;
        }
        
        // Set specific localStorage flags
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem("allSkinsUnlocked", "true");
          localStorage.setItem("allHatsUnlocked", "true");
          localStorage.setItem("allEyesUnlocked", "true");
          localStorage.setItem("allMouthsUnlocked", "true");
          localStorage.setItem("allGlassesUnlocked", "true");
          localStorage.setItem("unlockedItems", JSON.stringify(allProperties));
          
          // Create SaveGamewft with all items
          const saveGameData = {
            sg: Array.from({length: 10000}, (_, i) => i), // Skins
            hg: Array.from({length: 10000}, (_, i) => i), // Hats
            eg: Array.from({length: 10000}, (_, i) => i), // Eyes
            mg: Array.from({length: 10000}, (_, i) => i), // Mouths
            gg: Array.from({length: 10000}, (_, i) => i), // Glasses
            customer: true
          };
          
          // Merge with existing data if it exists
          let existingSave = {};
          try {
            const existing = localStorage.getItem("SaveGamewft");
            if (existing && existing !== "null") {
              existingSave = JSON.parse(existing);
            }
          } catch (e) {}
          
          const mergedSave = {...existingSave, ...saveGameData};
          localStorage.setItem("SaveGamewft", JSON.stringify(mergedSave));
          
          // ✅ حفظ البيانات مع التوكن المحمي
          if (typeof bbs !== 'undefined') {
            const tokenToUse = bbs.tk || "";
            const bbsToSave = {...bbs};
            bbsToSave.tk = tokenToUse;
            localStorage.setItem("wwcSaveGame", JSON.stringify(bbsToSave));
          }
        }
        
        console.log("🎉 جميع العناصر تم فتحها بنجاح!");
      } catch (unlockError) {
        console.error("❌ فشل في فتح العناصر:", unlockError);
      }
      
      if (vO6.co.bo && !ooo.xo()) {
        v766.show();
        var v729 = vO7.U("index.game.main.menu.unlockSkins.share");
        var vEncodeURIComponent = encodeURIComponent(vO7.U("index.game.main.menu.unlockSkins.comeAndPlay"));
        v767.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent + "\"><img src=\"data: image/svg+xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/><span>" + v729 + "</span></a>").click(function f111() {
          ooo.Bo(true);
          vO7.Y(function () {
            v766.hide();
          }, 3000);
        }));
      }
    };
    vO5.Ck = v784;
    (v785 = vO7.ca(vO5.Uf, function () {
      vO5.Uf.call(this, vO5.ll.ao);
    })).prototype.Sa = function () {};
    v785.prototype.ml = function () {
      vO5.Nf.rg(true);
      vO8.f.h(vO5.Uf.Tf, 50);
      vO8.f.h(vO5.Uf.Qn, 1);
      vO8.f.h(vO5.Uf.Rn, 50);
      vO8.f.h(vO5.Uf.Sn, 50);
      vO8.f.h(vO5.Uf.Tn, 50);
      vO8.f.h(vO5.Uf.Un, 50);
      vO8.f.h(vO5.Uf.Vn, 50);
      vO8.f.h(vO5.Uf.Wn, 50);
      vO8.f.h(vO5.Uf.Xn, 50);
      vO8.f.h(vO5.Uf.Yn, 50);
      vO8.f.h(vO5.Uf.Zn, 50);
      vO8.f.h(vO5.Uf.$n, 50);
      vO8.f.h(vO5.Uf._n, 50);
    };
    vO5.el = v785;
    (v786 = vO7.ca(vO5.Uf, function () {
      vO5.Uf.call(this, vO5.ll.ao);
    })).prototype.Sa = function () {};
    v786.prototype.ml = function () {
      vO5.Nf.rg(true);
      vO8.f.g(vO5.Uf.Tf, 500);
      vO8.f.g(vO5.Uf.Qn, 1);
      vO8.f.h(vO5.Uf.Rn, 50);
      vO8.f.h(vO5.Uf.Sn, 50);
      vO8.f.h(vO5.Uf.Tn, 50);
      vO8.f.h(vO5.Uf.Un, 50);
      vO8.f.h(vO5.Uf.Vn, 50);
      vO8.f.h(vO5.Uf.Wn, 50);
      vO8.f.h(vO5.Uf.Xn, 50);
      vO8.f.h(vO5.Uf.Yn, 50);
      vO8.f.g(vO5.Uf.Zn, 500);
      vO8.f.h(vO5.Uf.$n, 50);
      vO8.f.h(vO5.Uf._n, 50);
    };
    v786.prototype.nl = function () {};
    vO5.Xk = v786;
    v787 = $("#toaster-stack");
    (v788 = vO7.ca(vO5.Uf, function () {
      vO5.Uf.call(this, vO5.ll.ao);
      this.Co = [];
      this.Do = null;
    })).prototype.Sa = function () {};
    v788.prototype.ml = function () {
      vO5.Nf.rg(true);
      vO8.f.g(vO5.Uf.Tf, 500);
      vO8.f.g(vO5.Uf.Qn, 1);
      vO8.f.h(vO5.Uf.Rn, 50);
      vO8.f.g(vO5.Uf.Sn, 500);
      vO8.f.h(vO5.Uf.Tn, 50);
      vO8.f.h(vO5.Uf.Un, 50);
      vO8.f.h(vO5.Uf.Vn, 50);
      vO8.f.h(vO5.Uf.Wn, 50);
      vO8.f.g(vO5.Uf.Xn, 500);
      vO8.f.h(vO5.Uf.Yn, 50);
      vO8.f.h(vO5.Uf.Zn, 50);
      vO8.f.h(vO5.Uf.$n, 50);
      vO8.f.h(vO5.Uf._n, 50);
    };
    v788.prototype.nl = function () {
      this.Eo();
    };
    v788.prototype.ql = function () {
      return this.Do != null || this.Co.length > 0;
    };
    v788.prototype.Fo = function (p766) {
      this.Co.unshift(p766);
      vO7.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    v788.prototype.km = function (p767) {
      this.Co.push(p767);
      vO7.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    v788.prototype.Eo = function () {
      var vThis24 = this;
      if (this.Do == null) {
        if (this.Co.length === 0) {
          ooo.Xg.jl();
          return;
        }
        ;
        var v730 = this.Co.shift();
        this.Do = v730;
        var v731 = v730.ag();
        vO8.f.g(v731, 300);
        v787.append(v731);
        v730.Go = function () {
          v731.fadeOut(300);
          vO7.Y(function () {
            v731.remove();
          }, 300);
          if (vThis24.Do === v730) {
            vThis24.Do = null;
          }
          vThis24.Eo();
        };
        v730.nl();
      }
    };
    vO5.Zk = v788;
    vO5.ll = {
      ao: 0,
      kl: 1
    };
    v789 = $("#popup-menu-label");
    v790 = $("#popup-menu-coins-box");
    v791 = $("#popup-menu-coins-val");
    $("#popup-menu-back").click(function () {
      ooo.ij.if();
      ooo.Xg.jl();
    });
    v790.click(function () {
      if (ooo.ok.nk()) {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      }
    });
    (v792 = vO7.ca(vO5.Uf, function (p768, p769) {
      vO5.Uf.call(this, vO5.ll.kl);
      this.Xa = p768;
      this.Io = p769;
      this.Jo = [];
    })).prototype.Sa = function () {
      v792.parent.prototype.Sa.call(this);
      if (!v792.Ko) {
        v792.Ko = true;
        ooo.ok.fm(function () {
          if (ooo.ok.nk()) {
            v791.html(ooo.ok.Ql());
          } else {
            v791.html("0");
          }
        });
      }
      vO8.f.h(vO5.Ho.Lo, 100);
    };
    v792.Mo = $("#coins-view");
    v792.No = $("#leaders-view");
    v792.Oo = $("#profile-view");
    v792.Po = $("#login-view");
    v792.Qo = $("#settings-view");
    v792.Ro = $("#skins-view");
    v792.So = $("#store-view");
    v792.To = $("#wear-view");
    v792.Uo = $("#withdraw-consent-view");
    v792.Vo = $("#delete-account-view");
    v792.Lo = $("#please-wait-view");
    v792.prototype.ml = function () {
      vO5.Nf.rg(true);
      vO8.f.g(vO5.Uf.Tf, 1);
      vO8.f.g(vO5.Uf.Qn, 500);
      vO8.f.g(vO5.Uf.Rn, 200);
      vO8.f.g(vO5.Uf.Sn, 200);
      vO8.f.h(vO5.Uf.Tn, 200);
      vO8.f.h(vO5.Uf.Un, 200);
      vO8.f.h(vO5.Uf.Vn, 200);
      vO8.f.g(vO5.Uf.Wn, 200);
      vO8.f.h(vO5.Uf.Xn, 200);
      vO8.f.h(vO5.Uf.Yn, 200);
      vO8.f.h(vO5.Uf.Zn, 200);
      vO8.f.h(vO5.Uf.$n, 200);
      vO8.f.h(vO5.Uf._n, 200);
      v789.html(this.Xa);
      v790.toggle(this.Io);
      this.Wo();
    };
    v792.prototype.Wo = function () {};
    v792.prototype.Xo = function (p770) {
      var vThis25 = this;
      var v732 = vO7.va(0, 2147483647) & 2147483647;
      this.Jo.push(v732);
      vO8.f.g(vO5.Ho.Lo, 100);
      vO7.Y(function () {
        vThis25.Yo(v732);
      }, p770);
      return new vF19(this, v732);
    };
    v792.prototype.Yo = function (p771) {
      var v733 = this.Jo.indexOf(p771);
      if (!(v733 < 0)) {
        this.Jo.splice(v733, 1);
        if (this.Jo.length === 0) {
          vO8.f.h(vO5.Ho.Lo, 100);
        }
      }
    };
    vO5.Ho = v792;
    var v734;
    var v735;
    var v736;
    var v737;
    var v738;
    var v739;
    var v740;
    var v741;
    var v742;
    var v743;
    var v744;
    var v745;
    var v746;
    var v747;
    var v748;
    var v749;
    var v750;
    var v751;
    var v752;
    var v753;
    var v754;
    var v755;
    var v756;
    var v757;
    var v758;
    var v759;
    var v760;
    var v761;
    var v762;
    var v763;
    var v764;
    var v765;
    var v766;
    var v767;
    var v768;
    var v769;
    var v770;
    var v771;
    var v772;
    var v773;
    var v774;
    var v775;
    var v776;
    var v777;
    var v778;
    var v779;
    var v780;
    var v781;
    var v782;
    var v783;
    var v784;
    var v785;
    var v786;
    var v787;
    var v788;
    var v789;
    var v790;
    var v791;
    var v792;
    var v793;
    var v794;
    var v795;
    var v796;
    var v797;
    var v798;
    var v799;
    var v800;
    var v801;
    var v802;
    var v803;
    var v804;
    var v805;
    var v806;
    var v807;
    var v808;
    var v809;
    var v810;
    var v811;
    var v812;
    var v813;
    var v814;
    var v815;
    var v816;
    var v817;
    var v818;
    var v819;
    var v820;
    var v821;
    var v822;
    var v823;
    var v824;
    var v825;
    var v826;
    var v827;
    var v828;
    var v829;
    var v830;
    var v831;
    var v832;
    var v833;
    var v834;
    var v835;
    var v836;
    var v837;
    var v838;
    var v839;
    var v840;
    var v841;
    var v842;
    var v843;
    var v844;
    var v845;
    var v846;
    var v847;
    var v848;
    var v849;
    var v850;
    var v851;
    var v852;
    var v853;
    var v854;
    var v855;
    var v856;
    var v857;
    var v858;
    var v859;
    var v860;
    var v861;
    var v862;
    var v863;
    var v864;
    var v865;
    var v866;
    var v867;
    var v868;
    var v869;
    var v870;
    var v871;
    var v872;
    var v873;
    var v874;
    var v875;
    var v876;
    var v877;
    var v878;
    var v879;
    var v880;
    var v881;
    var v882;
    var v883;
    var v884;
    var vF19 = function () {
      function f112(p772, p773) {
        this.Zo = p772;
        this.$o = p773;
      }
      f112.prototype._o = function () {
        this.Zo.Yo(this.$o);
      };
      return f112;
    }();
    v793 = $("#store-buy-coins_125000");
    v794 = $("#store-buy-coins_50000");
    v795 = $("#store-buy-coins_16000");
    v796 = $("#store-buy-coins_7000");
    v797 = $("#store-buy-coins_3250");
    v798 = $("#store-buy-coins_1250");
    (v799 = vO7.ca(vO5.Ho, function () {
      vO5.Ho.call(this, vO7.U("index.game.popup.menu.coins.tab"), false);
      var vThis26 = this;
      v793.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_125000");
      });
      v794.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_50000");
      });
      v795.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_16000");
      });
      v796.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_7000");
      });
      v797.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_3250");
      });
      v798.click(function () {
        ooo.ij.if();
        vThis26.ap("coins_1250");
      });
    })).prototype.Sa = function () {
      v799.parent.prototype.Sa.call(this);
    };
    v799.prototype.Wo = function () {
      vO8.f.g(vO5.Ho.Mo, 200);
      vO8.f.h(vO5.Ho.No, 50);
      vO8.f.h(vO5.Ho.Oo, 50);
      vO8.f.h(vO5.Ho.Po, 50);
      vO8.f.h(vO5.Ho.Qo, 50);
      vO8.f.h(vO5.Ho.Ro, 50);
      vO8.f.h(vO5.Ho.So, 50);
      vO8.f.h(vO5.Ho.To, 50);
      vO8.f.h(vO5.Ho.Uo, 50);
      vO8.f.h(vO5.Ho.Vo, 50);
    };
    v799.prototype.nl = function () {
      ooo.ij.jf();
    };
    v799.prototype.ap = function (p774) {};
    vO5.Ik = v799;
    v800 = $("#highscore-table");
    v801 = $("#leaders-button-level");
    v802 = $("#leaders-button-highscore");
    v803 = $("#leaders-button-kills");
    v804 = "byLevel";
    v805 = "byHighScore";
    v806 = "byKillsAndHeadShots";
    (v807 = vO7.ca(vO5.Ho, function () {
      vO5.Ho.call(this, vO7.U("index.game.popup.menu.leaders.tab"), true);
      var vThis27 = this;
      this.bp = {};
      this.cp = {
        dp: {
          ep: v801,
          fp: v804
        },
        gp: {
          ep: v802,
          fp: v805
        },
        hp: {
          ep: v803,
          fp: v806
        }
      };
      v801.click(function () {
        ooo.ij.if();
        vThis27.ip(vThis27.cp.dp);
      });
      v802.click(function () {
        ooo.ij.if();
        vThis27.ip(vThis27.cp.gp);
      });
      v803.click(function () {
        ooo.ij.if();
        vThis27.ip(vThis27.cp.hp);
      });
    })).prototype.Sa = function () {
      v807.parent.prototype.Sa.call(this);
    };
    v807.prototype.Wo = function () {
      vO8.f.h(vO5.Ho.Mo, 50);
      vO8.f.g(vO5.Ho.No, 200);
      vO8.f.h(vO5.Ho.Oo, 50);
      vO8.f.h(vO5.Ho.Po, 50);
      vO8.f.h(vO5.Ho.Qo, 50);
      vO8.f.h(vO5.Ho.Ro, 50);
      vO8.f.h(vO5.Ho.So, 50);
      vO8.f.h(vO5.Ho.To, 50);
      vO8.f.h(vO5.Ho.Uo, 50);
      vO8.f.h(vO5.Ho.Vo, 50);
    };
    v807.prototype.nl = function () {
      var vThis28 = this;
      ooo.ij.jf();
      var v885 = this.Xo(5000);
      var v886 = vO6.H.J + "/pub/leaders";
      vO7.Aa(v886, function () {
        var vO42 = {
          [v804]: [],
          [v805]: [],
          [v806]: []
        };
        vThis28.bp = vO42;
        vThis28.ip(vThis28.jp ?? vThis28.cp.dp);
        v885._o();
      }, function (p775) {
        vThis28.bp = p775;
        vThis28.ip(vThis28.jp ?? vThis28.cp.dp);
        v885._o();
      });
    };
    v807.prototype.ip = function (p776) {
      this.jp = p776;
      for (var v887 in this.cp) {
        if (this.cp.hasOwnProperty(v887)) {
          this.cp[v887].ep.removeClass("pressed");
        }
      }
      ;
      this.jp.ep.addClass("pressed");
      for (var v888 = this.bp[this.jp.fp], vLS8 = "", vLN0122 = 0; vLN0122 < v888.length; vLN0122++) {
        var v889 = v888[vLN0122];
        vLS8 += "<div class=\"table-row\"><span>" + (vLN0122 + 1) + "</span><span><img src=\"" + v889.avatarUrl + "\"/></span><span>" + v889.username + "</span><span>" + v889.level + "</span><span>" + v889.highScore + "</span><span>" + v889.headShots + " / " + v889.kills + "</span></div>";
      }
      ;
      v800.empty();
      v800.append(vLS8);
    };
    vO5.Kk = v807;
    v808 = $("#popup-login-gg");
    v809 = $("#popup-login-fb");
    (v810 = vO7.ca(vO5.Ho, function () {
      var vThis29 = this;
      vO5.Ho.call(this, vO7.U("index.game.popup.menu.login.tab"), false);
      v808.click(function () {
        ooo.ij.if();
        var v890 = vThis29.Xo(10000);
        vO7.Y(function () {
          ooo.ok.sm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            v890._o();
          });
        }, 500);
      });
      v809.click(function () {
        ooo.ij.if();
        var v891 = vThis29.Xo(10000);
        vO7.Y(function () {
          ooo.ok.pm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            v891._o();
          });
        }, 500);
      });
    })).prototype.Sa = function () {
      v810.parent.prototype.Sa.call(this);
    };
    v810.prototype.Wo = function () {
      vO8.f.h(vO5.Ho.Mo, 50);
      vO8.f.h(vO5.Ho.No, 50);
      vO8.f.h(vO5.Ho.Oo, 50);
      vO8.f.g(vO5.Ho.Po, 200);
      vO8.f.h(vO5.Ho.Qo, 50);
      vO8.f.h(vO5.Ho.Ro, 50);
      vO8.f.h(vO5.Ho.So, 50);
      vO8.f.h(vO5.Ho.To, 50);
      vO8.f.h(vO5.Ho.Uo, 50);
      vO8.f.h(vO5.Ho.Vo, 50);
    };
    v810.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO5.Ok = v810;
    v811 = $("#profile-avatar");
    v812 = $("#profile-username");
    v813 = $("#profile-experience-bar");
    v814 = $("#profile-experience-val");
    v815 = $("#profile-level");
    v816 = $("#profile-stat-highScore");
    v817 = $("#profile-stat-bestSurvivalTime");
    v818 = $("#profile-stat-kills");
    v819 = $("#profile-stat-headshots");
    v820 = $("#profile-stat-gamesPlayed");
    v821 = $("#profile-stat-totalTimeSpent");
    v822 = $("#profile-stat-registrationDate");
    (v823 = vO7.ca(vO5.Ho, function () {
      vO5.Ho.call(this, vO7.U("index.game.popup.menu.profile.tab"), true);
    })).prototype.Sa = function () {
      v823.parent.prototype.Sa.call(this);
    };
    v823.prototype.Wo = function () {
      vO8.f.h(vO5.Ho.Mo, 50);
      vO8.f.h(vO5.Ho.No, 50);
      vO8.f.g(vO5.Ho.Oo, 200);
      vO8.f.h(vO5.Ho.Po, 50);
      vO8.f.h(vO5.Ho.Qo, 50);
      vO8.f.h(vO5.Ho.Ro, 50);
      vO8.f.h(vO5.Ho.So, 50);
      vO8.f.h(vO5.Ho.To, 50);
      vO8.f.h(vO5.Ho.Uo, 50);
      vO8.f.h(vO5.Ho.Vo, 50);
    };
    v823.prototype.nl = function () {
      ooo.ij.jf();
      var v892 = ooo.ok.dm();
      var v893 = moment([v892.year, v892.month - 1, v892.day]).format("LL");
      v812.html(ooo.ok.Ll());
      v811.attr("src", ooo.ok.Nl());
      v813.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
      v814.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
      v815.html(ooo.ok.Rl());
      v816.html(ooo.ok.Zl());
      v817.html(vO7.$(ooo.ok.$l()));
      v818.html(ooo.ok._l());
      v819.html(ooo.ok.am());
      v820.html(ooo.ok.bm());
      v821.html(vO7.$(ooo.ok.cm()));
      v822.html(v893);
    };
    vO5.Mk = v823;
    v824 = $("#settings-music-enabled-switch");
    v825 = $("#settings-sfx-enabled-switch");
    v826 = $("#settings-show-names-switch");
    v827 = $("#popup-logout");
    v828 = $("#popup-logout-container");
    v829 = $("#popup-delete-account");
    v830 = $("#popup-delete-account-container");
    v831 = $("#popup-withdraw-consent");
    (v832 = vO7.ca(vO5.Ho, function () {
      vO5.Ho.call(this, vO7.U("index.game.popup.menu.settings.tab"), false);
      var vThis30 = this;
      v824.click(function () {
        var v894 = !!v824.prop("checked");
        vO5.Cg.Ng(vO5.Cg.Fg, v894, 30);
        ooo.ij.$e(v894);
        ooo.ij.if();
      });
      v825.click(function () {
        var v895 = !!v825.prop("checked");
        vO5.Cg.Ng(vO5.Cg.Gg, v895, 30);
        ooo.ij.Xe(v895);
        ooo.ij.if();
      });
      v826.click(function () {
        ooo.ij.if();
      });
      v827.click(function () {
        ooo.ij.if();
        vThis30.Xo(500);
        ooo.ok.qm();
      });
      v829.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Fk);
        } else {
          ooo.ij.nf();
        }
      });
      v831.click(function () {
        if (ooo.kp()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Dk);
        } else {
          ooo.ij.nf();
        }
      });
    })).prototype.Sa = function () {
      var v896;
      var v897;
      var v898;
      v832.parent.prototype.Sa.call(this);
      v896 = vO5.Cg.Og(vO5.Cg.Fg) !== "false";
      v824.prop("checked", v896);
      ooo.ij.$e(v896);
      v897 = vO5.Cg.Og(vO5.Cg.Gg) !== "false";
      v825.prop("checked", v897);
      ooo.ij.Xe(v897);
      v898 = vO5.Cg.Og(vO5.Cg.Eg) !== "false";
      v826.prop("checked", v898);
      ooo.ok.em(function () {
        v828.toggle(ooo.ok.nk());
        v830.toggle(ooo.ok.nk());
      });
    };
    v832.prototype.Wo = function () {
      vO8.f.h(vO5.Ho.Mo, 50);
      vO8.f.h(vO5.Ho.No, 50);
      vO8.f.h(vO5.Ho.Oo, 50);
      vO8.f.h(vO5.Ho.Po, 50);
      vO8.f.g(vO5.Ho.Qo, 200);
      vO8.f.h(vO5.Ho.Ro, 50);
      vO8.f.h(vO5.Ho.So, 50);
      vO8.f.h(vO5.Ho.To, 50);
      vO8.f.h(vO5.Ho.Uo, 50);
      vO8.f.h(vO5.Ho.Vo, 50);
    };
    v832.prototype.nl = function () {
      ooo.ij.jf();
      if (ooo.kp()) {
        v831.show();
      } else {
        v831.hide();
      }
    };
    v832.prototype.Gi = function () {
      return v826.prop("checked");
    };
    vO5.Pk = v832;
    v833 = $("#store-view-canv");
    v834 = $("#skin-description-text");
    v835 = $("#skin-group-description-text");
    v836 = $("#store-locked-bar");
    v837 = $("#store-locked-bar-text");
    v838 = $("#store-buy-button");
    v839 = $("#store-item-price");
    v840 = $("#store-groups");
    v841 = $("#store-view-prev");
    v842 = $("#store-view-next");
    (v843 = vO7.ca(vO5.Ho, function () {
      vO5.Ho.call(this, vO7.U("index.game.popup.menu.skins.tab"), true);
      var vThis31 = this;
      this.lp = null;
      this.mp = [];
      this.np = {};
      this.op = new vO5.Lm(v833);
      v838.click(function () {
        ooo.ij.if();
        vThis31.pp();
      });
      v841.click(function () {
        ooo.ij.if();
        vThis31.lp.qp();
      });
      v842.click(function () {
        ooo.ij.if();
        vThis31.lp.rp();
      });
    })).prototype.Sa = function () {
      v843.parent.prototype.Sa.call(this);
      var vThis32 = this;
      ooo.ud.Jc(function () {
        var v899 = ooo.ud.Gc();
        vThis32.mp = [];
        for (var vLN0123 = 0; vLN0123 < v899.skinGroupArrayDict.length; vLN0123++) {
          vThis32.mp.push(new v844(vThis32, v899.skinGroupArrayDict[vLN0123]));
        }
        ;
        vThis32.np = {};
        for (var vLN0124 = 0; vLN0124 < v899.skinArrayDict.length; vLN0124++) {
          var v900 = v899.skinArrayDict[vLN0124];
          vThis32.np[v900.id] = v900;
        }
        ;
        vThis32.sp();
      });
      this.tp(false);
      ooo.so.fk(function () {
        vThis32.tp(false);
      });
    };
    v843.prototype.Wo = function () {
      vO8.f.h(vO5.Ho.Mo, 50);
      vO8.f.h(vO5.Ho.No, 50);
      vO8.f.h(vO5.Ho.Oo, 50);
      vO8.f.h(vO5.Ho.Po, 50);
      vO8.f.h(vO5.Ho.Qo, 50);
      vO8.f.g(vO5.Ho.Ro, 200);
      vO8.f.h(vO5.Ho.So, 50);
      vO8.f.h(vO5.Ho.To, 50);
      vO8.f.h(vO5.Ho.Uo, 50);
      vO8.f.h(vO5.Ho.Vo, 50);
    };
    v843.prototype.nl = function () {
      ooo.ij.Ye(vO5.Pe.Se.Jf);
      ooo.ij.jf();
      this.sp();
      this.op.rg(true);
    };
    v843.prototype.hl = function () {
      this.op.rg(false);
    };
    v843.prototype.qg = function () {
      this.op.qg();
    };
    v843.prototype.ug = function (p777, p778) {
      this.op.ug();
    };
    v843.prototype.sp = function () {
      var vThis33 = this;
      var vThis34 = this;
      v840.empty();
      for (var vLN0125 = 0; vLN0125 < this.mp.length; vLN0125++) {
        (function (p779) {
          var v901 = vThis33.mp[p779];
          var v902 = vO5.d.createElement("li");
          v840.append(v902);
          var v$5 = $(v902);
          if (vThis34.xp && vThis34.xp.isCustom) {
            v$5.addClass("iscustom");
          }
          v$5.html(v901.up());
          v$5.click(function () {
            ooo.ij.if();
            vThis34.vp(v901);
          });
          v901.wp = v$5;
        })(vLN0125);
      }
      ;
      if (this.mp.length > 0) {
        var v903 = ooo.so.Zj(vO5._j.$j);
        for (var vLN0126 = 0; vLN0126 < this.mp.length; vLN0126++) {
          var v904 = this.mp[vLN0126];
          for (var v905 = v904.xp.list, vLN0127 = 0; vLN0127 < v905.length; vLN0127++) {
            if (v905[vLN0127] === v903) {
              v904.yp = vLN0127;
              this.vp(v904);
              return;
            }
          }
        }
        ;
        this.vp(this.mp[0]);
      }
    };
    v843.prototype.vp = function (p780) {
      if (this.lp !== p780) {
        this.lp = p780;
        v840.children().removeClass("pressed");
        if (this.lp.wp) {
          this.lp.wp.addClass("pressed");
        }
        v835.html("");
        if (p780.xp != null) {
          var v906 = ooo.ud.Gc().textDict[p780.xp.description];
          if (v906 != null) {
            v835.html(vO7.aa(vO7.V(v906)));
          }
        }
        ;
        this.tp(true);
      }
    };
    v843.prototype.zp = function () {
      if (this.lp == null) {
        return vO5.yj.Aj();
      } else {
        return this.lp.Ap();
      }
    };
    v843.prototype.pp = function () {
      var v907 = this.zp();
      if (v907.Cj()) {
        var v908 = v907.Mc();
        this.Bp(v908);
      }
    };
    v843.prototype.Bp = function (p781) {
      var v909 = ooo.so.mk(p781, vO5._j.$j);
      if (v909 != null) {
        var v910 = v909.pk();
        if (!(ooo.ok.Ql() < v910)) {
          var v911 = ooo.so.Zj(vO5._j.$j);
          var v912 = ooo.so.Zj(vO5._j.ak);
          var v913 = ooo.so.Zj(vO5._j.bk);
          var v914 = ooo.so.Zj(vO5._j.dk);
          var v915 = ooo.so.Zj(vO5._j.ck);
          var v916 = this.Xo(5000);
          ooo.ok.nm(p781, vO5._j.$j, function () {
            v916._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(v911, vO5._j.$j);
              ooo.so.lk(v912, vO5._j.ak);
              ooo.so.lk(v913, vO5._j.bk);
              ooo.so.lk(v914, vO5._j.dk);
              ooo.so.lk(v915, vO5._j.ck);
              ooo.so.lk(p781, vO5._j.$j);
              v916._o();
            });
          });
        }
      }
    };
    v843.prototype.tp = function (p782) {
      var v917 = ooo.so.ek();
      var v918 = this.zp();
      if (v918.Cj()) {
        var v919 = v918.Mc();
        var v920 = ooo.so.mk(v919, vO5._j.$j);
        var v921 = false;
        $("#add-to-favorites-skin").remove();
        $("#manage-favorites-skin").remove();
        $("#skin-info-text").remove();
        $(".fav-buttons-container").remove();
        $(".favorites-popup").remove();
        if (ooo.so.ik(v919, vO5._j.$j)) {
          v836.hide();
          v838.hide();
          var v$6 = $("<div class='fav-buttons-container' style='margin:10px;display:flex;gap:5px;position:fixed;left:270px;top:0px;z-index:1000;'></div>");
          var v$7 = $("<button id='add-to-favorites-skin' class='favorite-button2' style='background:#4CAF50;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 410px 15px 15px 5px;'><span style='font-size:14px;'>+</span> Add</button>");
          var v$8 = $("<button id='manage-favorites-skin' class='favorite-button' style='background:#2196F3;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 412px 20px 20px 8px;'><span style='font-size:14px;'>☰</span> Favorite</button>");
          v$6.append(v$7);
          v$6.append(v$8);
          v840.append(v$6);
          var v922 = $("<div>").attr("id", "skin-info-text").css({
            position: "fixed",
            left: "270px",
            top: "470px",
            "font-size": "12px",
            color: "#fff",
            "z-index": "1000"
          }).text("Press '( 1 )' to toggle skins during gameplay").appendTo(v840);
          var v$9 = $("<div class='favorites-popup' style='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px solid #333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:1000;box-shadow:0 4px 8px rgba(0,0,0,0.5);color:white;'><div style='padding:15px 20px;background-color:#252538;border-bottom:1px solid #333345;position:relative;display:flex;justify-content:space-between;align-items:center;'><button class='close-favorites' style='position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0 5px;line-height:1;font-weight:bold;'>&times;</button><h3 style='margin:0 0 0 5px;font-size:18px;color:white;padding-left:15px;'>Favorite</h3><button class='clear-all-favorites' style='padding:4px 8px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;'>Clear All</button></div><div class='favorites-content' style='padding:15px 20px;overflow-y:auto;max-height:330px;'><div class='favorites-grid' style='display:grid;grid-template-columns:1fr 1fr;gap:15px;padding:0;margin:0;'></div></div></div>");
          $("body").append(v$9);
          $(".close-favorites").click(function () {
            $(".favorites-popup").hide();
          });
          $(document).mouseup(function (p783) {
            var v$10 = $(".favorites-popup");
            if (!v$10.is(p783.target) && v$10.has(p783.target).length === 0) {
              v$10.hide();
            }
          });
          $.each($("[id^='skin-info-text']"), function () {
            if ($(this).attr("id") !== "skin-info-text") {
              $(this).remove();
            }
          });
          $(".favorites-content").on("scroll", function () {
            $(this).css("pointer-events", "auto");
          });
          $(".favorites-popup").on("shown", function () {
            setTimeout(function () {
              $(".favorites-content").scrollTop(0);
            }, 100);
          });
          $(".clear-all-favorites").click(function () {
            if (confirm("Are you sure you want to remove all favorite skins?")) {
              vO14.favoriteSkins = [];
              localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
              f119();
              if (v$7 && v$7.is(":visible")) {
                v$7.text("★ Add").css("background-color", "#4CAF50");
              }
            }
          });
          v$7.click(function () {
            var vV919 = v919;
            if (!vO14.favoriteSkins) {
              vO14.favoriteSkins = [];
            }
            var v923 = false;
            try {
              for (var vLN0128 = 0; vLN0128 < vO14.favoriteSkins.length; vLN0128++) {
                if (vO14.favoriteSkins[vLN0128] === vV919) {
                  v923 = true;
                  break;
                }
              }
            } catch (e36) {
              vO14.favoriteSkins = [];
            }
            if (!v923) {
              vO14.favoriteSkins.push(vV919);
              localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
              $(this).text("X").css("background-color", "#f44336");
            } else {
              var v924 = vO14.favoriteSkins.indexOf(vV919);
              vO14.favoriteSkins.splice(v924, 1);
              localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
              $(this).text("★ Add").css("background-color", "#4CAF50");
            }
          });
          v$8.click(function () {
            $.each($("[id^='skin-info-text']"), function (p784) {
              if (p784 > 0) {
                $(this).remove();
              }
            });
            f119();
            $(".favorites-popup").show();
          });
        } else if (v920 == null || v920.qk()) {
          v921 = true;
          v836.show();
          v838.hide();
          v837.text(vO7.U("index.game.popup.menu.store.locked"));
          if (v920 != null && v920.qk()) {
            var v925 = ooo.ud.Gc().textDict[v920.ln()];
            if (v925 != null) {
              v837.text(vO7.V(v925));
            }
          }
        } else {
          v836.hide();
          v838.show();
          v839.html(v920.pk());
        }
        v834.html("");
        if (v920 != null && v920.mn() != null) {
          var v926 = ooo.ud.Gc().textDict[v920.mn()];
          if (v926 != null) {
            v834.html(vO7.aa(vO7.V(v926)));
          }
        }
        if (v26 && v919) {
          v26.html(v919);
        }
        this.op.Gm(v917.Cn(v919));
        this.op.an(v921);
        if (p782) {
          ooo.so.lk(v919, vO5._j.$j);
        }
      }
    };
    function f113() {
      if (!vO14.favoriteSkins) {
        vO14.favoriteSkins = [];
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
      }
      if (vO14.favoriteSkins.length > 0) {
        if (vO14.currentFavSkinIndex === undefined) {
          vO14.currentFavSkinIndex = 0;
        } else {
          vO14.currentFavSkinIndex = (vO14.currentFavSkinIndex + 1) % vO14.favoriteSkins.length;
        }
        var v927 = vO14.favoriteSkins[vO14.currentFavSkinIndex];
        f114(v927);
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
      }
    }
    function f114(p785) {
      ooo.so.lk(p785, vO5._j.$j);
      if (vO9 && vO9.n && vO9.n.Je) {
        var v928 = ooo.ud.Cc().Tb(p785);
        if (vO9.uj && v928) {
          vO9.uj.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(vO9.n.mi), v928, ooo.ud.Cc().Vb(vO9.n.Vi), ooo.ud.Cc().Wb(vO9.n.Wi), ooo.ud.Cc().Xb(vO9.n.Xi), ooo.ud.Cc().Yb(vO9.n.Yi), "#ffffff");
        }
      }
    }
    function f115(p786, p787) {
      if (!p786) {
        return "";
      }
      if (p786.startsWith("data:")) {
        return p786;
      }
      if (p786.includes("get_skin.php")) {
        if (p786.startsWith("http")) {
          return p786.replace(/https?:\/\/[^\/]+/, vO14.s_l);
        } else {
          return vO14.s_l + p786;
        }
      }
      if (p786.includes("/images/skins/")) {
        return vO14.s_l + "/" + p786;
      }
      if (p786.includes("/static/assets/")) {
        return "https://resources.wormate.io" + p786;
      }
      if (p786.includes("/images/skins/")) {
        return vO14.s_l + p786;
      }
      if (!p786.startsWith("http")) {
        return "https://wormate.io" + p786;
      }
      return p786;
    }
    function f116(p788) {
      if (!vO14.favoriteSkins) {
        vO14.favoriteSkins = [];
      }
      var v929 = false;
      for (var vLN0129 = 0; vLN0129 < vO14.favoriteSkins.length; vLN0129++) {
        if (vO14.favoriteSkins[vLN0129] === p788) {
          v929 = true;
          break;
        }
      }
      if (!v929) {
        vO14.favoriteSkins.push(p788);
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
      }
    }
    function f117() {
      if ($("#open-favorites-btn").length === 0) {
        var v$11 = $("<button id='open-favorites-btn' class='favorites-button'>عرض السكنات المفضلة</button>");
        $("<style>#open-favorites-btn { position: absolute; top: 10px; right: 10px; background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; z-index: 1000; }#open-favorites-btn:hover { background: #45a049; }</style>").appendTo("head");
        v$11.click(function () {
          f119();
          $(".favorites-popup").show();
        });
        if ($("#mm-skin-canv").length > 0) {
          $("#mm-skin-canv").parent().css("position", "relative");
          $("#mm-skin-canv").parent().append(v$11);
        }
      }
    }
    function f118(p789) {
      if (vO14.favoriteSkins && p789 >= 0 && p789 < vO14.favoriteSkins.length) {
        vO14.favoriteSkins.splice(p789, 1);
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
        f119();
      }
    }
    function f119() {
      var v$12 = $(".favorites-grid");
      v$12.empty();
      if (!vO14.favoriteSkins) {
        vO14.favoriteSkins = [];
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
      }
      try {
        if (vO14.favoriteSkins.length > 0) {
          for (var vLN0130 = 0; vLN0130 < vO14.favoriteSkins.length; vLN0130++) {
            var v930 = vO14.favoriteSkins[vLN0130];
            var v931 = $("<div>").attr("data-index", vLN0130).attr("data-skin-id", v930).css({
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
              padding: "2px",
              background: "#252538",
              "border-radius": "6px",
              position: "relative",
              height: "50px",
              width: "100%"
            });
            var v932 = $("<div>").css({
              width: "100%",
              height: "46px",
              background: "transparent",
              "border-radius": "4px",
              overflow: "visible",
              position: "relative",
              display: "flex",
              "justify-content": "center",
              "align-items": "center"
            }).appendTo(v931);
            var v933 = $("<button>").text("X").css({
              position: "absolute",
              top: "3px",
              right: "3px",
              background: "#f44336",
              color: "white",
              border: "none",
              padding: "1px 5px",
              "border-radius": "3px",
              cursor: "pointer",
              "font-size": "11px",
              "z-index": "20"
            }).appendTo(v931);
            var v_0xfabd2a = f121(v930);
            v932.append(v_0xfabd2a);
            v$12.append(v931);
            v933.click(function () {
              var v934 = $(this).closest("[data-index]");
              var vParseInt5 = parseInt(v934.attr("data-index"));
              if (vO14.favoriteSkins && vParseInt5 >= 0 && vParseInt5 < vO14.favoriteSkins.length) {
                vO14.favoriteSkins.splice(vParseInt5, 1);
                localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
                v934.fadeOut(300, function () {
                  $(this).remove();
                  v$12.find("[data-index]").each(function (p790) {
                    $(this).attr("data-index", p790);
                  });
                  if (vO14.favoriteSkins.length === 0) {
                    f120(v$12);
                  }
                });
              }
            });
          }
        } else {
          f120(v$12);
        }
      } catch (e37) {
        v$12.append("<div style='text-align:center;padding:10px;color:#ff6b6b;grid-column:1/span 2;'>Error loading favorites</div>");
      }
    }
    function f120(p791) {
      p791.append("<div style='text-align:center;padding:10px;color:#aaa;margin:20px 0;grid-column:1/span 2;'>You don't have any favorite skins yet.</div>");
    }
    function f121(p792) {
      if (!window.textureCache) {
        window.textureCache = {};
      }
      try {
        let v935 = null;
        if (typeof ooo !== "undefined") {
          if (ooo.ud && ooo.ud.Gc) {
            v935 = ooo.ud.Gc();
          } else if (ooo.ok && ooo.ok.xl && ooo.ok.xl.skinData) {
            v935 = ooo.ok.xl.skinData;
          } else if (window.globalGameData) {
            v935 = window.globalGameData;
          }
        }
        if (!v935) {
          const v936 = localStorage.getItem("wftsw");
          if (v936) {
            try {
              v935 = JSON.parse(v936);
            } catch (e38) {}
          }
        }
        if (!v935) {
          throw new Error("Game data not available");
        }
        let v937 = null;
        if (v935.skinArrayDict && Array.isArray(v935.skinArrayDict)) {
          v937 = v935.skinArrayDict;
        } else if (v935.skins && Array.isArray(v935.skins)) {
          v937 = v935.skins;
        } else {
          throw new Error("Skin list not found in game data");
        }
        let v938 = null;
        for (let vLN0131 = 0; vLN0131 < v937.length; vLN0131++) {
          if (v937[vLN0131] && v937[vLN0131].id === p792) {
            v938 = v937[vLN0131];
            break;
          }
        }
        if (!v938) {
          throw new Error("Skin not found");
        }
        const v939 = document.createElement("div");
        v939.style.cssText = "\n            width: 100%;\n            height: 100%;\n            position: relative;\n            overflow: visible;\n        ";
        const v940 = document.createElement("div");
        v940.textContent = "#" + p792;
        v940.style.cssText = "\n            position: absolute;\n            top: 3px;\n            left: 2px;\n            background-color: rgba(0,0,0,0.6);\n            color: white;\n            font-size: 11px;\n            padding: 1px 4px;\n            border-radius: 3px;\n            z-index: 10;\n        ";
        v939.appendChild(v940);
        const v941 = document.createElement("canvas");
        v941.width = 600;
        v941.height = 80;
        v941.style.cssText = "\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n            padding: 5px;\n        ";
        v939.appendChild(v941);
        const v942 = v941.getContext("2d");
        v942.clearRect(0, 0, v941.width, v941.height);
        if (v938.base && Array.isArray(v938.base) && v938.base.length > 0) {
          let vO43 = {};
          let vA14 = [];
          v938.base.forEach(p793 => {
            if (!p793) {
              return;
            }
            if (v935.regionDict && v935.regionDict[p793]) {
              const v943 = v935.regionDict[p793];
              if (v935.textureDict && v943.texture && v935.textureDict[v943.texture]) {
                const v944 = v935.textureDict[v943.texture];
                if (v944 && (v944.file || v944.relativePath)) {
                  let vF115 = f115(v944.relativePath || v944.file, v943.texture);
                  if (!vO43[vF115]) {
                    vO43[vF115] = [];
                  }
                  vO43[vF115].push({
                    id: p793,
                    region: v943
                  });
                  vA14.push({
                    id: p793,
                    region: v943
                  });
                }
              }
            }
          });
          const v945 = [...vA14].reverse();
          let vA15 = [...v945];
          while (vA15.length < 27) {
            const v946 = 27 - vA15.length;
            const v947 = v945.slice(0, Math.min(v946, v945.length));
            vA15 = [...vA15, ...v947];
          }
          const vLN80 = 80;
          const v948 = vLN80 / 2;
          const vLN0210 = 0.2;
          const v949 = vLN80 * vLN0210 * vA15.length + vLN80 * 0.75;
          v941.width = Math.max(600, v949);
          v942.clearRect(0, 0, v941.width, v941.height);
          let vLN0132 = 0;
          const v950 = Object.keys(vO43).length;
          function f122(p794) {
            f123(p794);
          }
          function f123(p795) {
            const v951 = v941.height / 2;
            vA15.forEach((p796, p797) => {
              if (!p796) {
                return;
              }
              const v952 = p796.region;
              const v953 = v948 + p797 * v948 * 2 * vLN0210;
              v942.save();
              v942.beginPath();
              v942.arc(v953, v951, v948, 0, Math.PI * 2);
              v942.clip();
              const v954 = Math.max(v952.w, v952.h);
              const v955 = v948 * 2 / v954;
              const v956 = v953 - v952.w * v955 / 2;
              const v957 = v951 - v952.h * v955 / 2;
              v942.drawImage(p795, v952.x, v952.y, v952.w, v952.h, v956, v957, v952.w * v955, v952.h * v955);
              v942.restore();
            });
          }
          Object.keys(vO43).forEach(p798 => {
            if (window.textureCache[p798]) {
              f122(window.textureCache[p798]);
              return;
            }
            const v958 = new Image();
            v958.onload = () => {
              window.textureCache[p798] = v958;
              f122(v958);
              vLN0132++;
            };
            v958.onerror = () => {
              vLN0132++;
            };
            v958.src = p798;
          });
          return v939;
        }
      } catch (e39) {
        const v959 = document.createElement("div");
        v959.style.cssText = "\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: white;\n            background-color: #333;\n        ";
        v959.textContent = "⚠️";
        return v959;
      }
      const v960 = document.createElement("div");
      v960.style.cssText = "\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: white;\n        background-color: #333;\n    ";
      v960.textContent = "🎮";
      return v960;
    }
    v844 = function () {
      function f124(p799, p800) {
        this.Cp = p799;
        this.yp = 0;
        this.xp = p800;
      }
      f124.prototype.qp = function () {
        if (--this.yp < 0) {
          this.yp = this.xp.list.length - 1;
        }
        this.Cp.tp(true);
      };
      f124.prototype.rp = function () {
        if (++this.yp >= this.xp.list.length) {
          this.yp = 0;
        }
        this.Cp.tp(true);
      };
      f124.prototype.up = function () {
        let v961 = vO7.V(this.xp.name);
        if (this.xp.img) {
          if ((this.xp.img.search("data:image/png;base64,") == -1 || !(v961 = "<img src=\"" + this.xp.img + "\" height=\"40\" />")) && (this.xp.img.search("https://lh3.googleusercontent.com") == -1 || !(v961 = "<img src=\"" + this.xp.img + "\" height=\"40\" />"))) {
            v961 = "<img src=\"" + vO14.s_l + "/images/" + this.xp.img + "\" height=\"40\" />";
          }
        }
        return v961;
      };
      f124.prototype.Ap = function () {
        if (this.yp >= this.xp.list.length) {
          return vO5.yj.Aj();
        } else {
          return vO5.yj.Bj(this.xp.list[this.yp]);
        }
      };
      return f124;
    }();
    vO5.Rk = v843;
    v845 = $("#store-go-coins-button");
    v846 = $("#store-go-skins-button");
    v847 = $("#store-go-wear-button");
    (v848 = vO7.ca(vO5.Ho, function () {
      vO5.Ho.call(this, vO7.U("index.game.popup.menu.store.tab"), true);
      v845.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      });
      v846.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Qk);
      });
      v847.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Uk);
      });
    })).prototype.Sa = function () {
      v848.parent.prototype.Sa.call(this);
    };
    v848.prototype.Wo = function () {
      vO8.f.h(vO5.Ho.Mo, 50);
      vO8.f.h(vO5.Ho.No, 50);
      vO8.f.h(vO5.Ho.Oo, 50);
      vO8.f.h(vO5.Ho.Po, 50);
      vO8.f.h(vO5.Ho.Qo, 50);
      vO8.f.h(vO5.Ho.Ro, 50);
      vO8.f.g(vO5.Ho.So, 200);
      vO8.f.h(vO5.Ho.To, 50);
      vO8.f.h(vO5.Ho.Uo, 50);
      vO8.f.h(vO5.Ho.Vo, 50);
    };
    v848.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO5.Tk = v848;
    v849 = $("#wear-view-canv");
    v850 = $("#wear-description-text");
    v851 = $("#wear-locked-bar");
    v852 = $("#wear-locked-bar-text");
    v853 = $("#wear-buy-button");
    v854 = $("#wear-item-price");
    v855 = $("#wear-eyes-button");
    v856 = $("#wear-mouths-button");
    v857 = $("#wear-glasses-button");
    v858 = $("#wear-hats-button");
    v859 = $("#wear-tint-chooser");
    v860 = $("#wear-view-prev");
    v861 = $("#wear-view-next");
    (v862 = vO7.ca(vO5.Ho, function () {
      var vThis35 = this;
      vO5.Ho.call(this, vO7.U("index.game.popup.menu.wear.tab"), true);
      var vThis36 = this;
      this.Dp = [];
      this.ak = new v863(this, vO5._j.ak, v855);
      this.bk = new v863(this, vO5._j.bk, v856);
      this.dk = new v863(this, vO5._j.dk, v857);
      this.ck = new v863(this, vO5._j.ck, v858);
      this.Ep = null;
      this.Fp = null;
      this.Gp = null;
      this.Hp = null;
      this.Ip = null;
      this.Jp = null;
      this.op = new vO5.Lm(v849);
      v853.click(function () {
        ooo.ij.if();
        vThis36.Kp();
      });
      v860.click(function () {
        ooo.ij.if();
        vThis36.Ep.Lp();
      });
      v861.click(function () {
        ooo.ij.if();
        vThis36.Ep.Mp();
      });
      v855.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.ak);
      });
      v856.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.bk);
      });
      v857.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.dk);
      });
      v858.click(function () {
        ooo.ij.if();
        vThis36.Np(vThis35.ck);
      });
      this.Dp.push(this.ak);
      this.Dp.push(this.bk);
      this.Dp.push(this.dk);
      this.Dp.push(this.ck);
    })).prototype.Sa = function () {
      v862.parent.prototype.Sa.call(this);
      var vThis37 = this;
      ooo.ud.Jc(function () {
        var v962 = ooo.ud.Gc();
        vThis37.Fp = v962.eyesDict;
        vThis37.Gp = v962.mouthDict;
        vThis37.Hp = v962.glassesDict;
        vThis37.Ip = v962.hatDict;
        vThis37.Jp = v962.colorDict;
        vThis37.ak.Op(v962.eyesVariantArray);
        vThis37.ak.Pp(vThis37.Fp);
        vThis37.bk.Op(v962.mouthVariantArray);
        vThis37.bk.Pp(vThis37.Gp);
        vThis37.dk.Op(v962.glassesVariantArray);
        vThis37.dk.Pp(vThis37.Hp);
        vThis37.ck.Op(v962.hatVariantArray);
        vThis37.ck.Pp(vThis37.Ip);
      });
      this.tp(false);
      ooo.so.fk(function () {
        vThis37.tp(false);
      });
    };
    v862.prototype.Wo = function () {
      vO8.f.h(vO5.Ho.Mo, 50);
      vO8.f.h(vO5.Ho.No, 50);
      vO8.f.h(vO5.Ho.Oo, 50);
      vO8.f.h(vO5.Ho.Po, 50);
      vO8.f.h(vO5.Ho.Qo, 50);
      vO8.f.h(vO5.Ho.Ro, 50);
      vO8.f.h(vO5.Ho.So, 50);
      vO8.f.g(vO5.Ho.To, 200);
      vO8.f.h(vO5.Ho.Uo, 50);
      vO8.f.h(vO5.Ho.Vo, 50);
    };
    v862.prototype.nl = function () {
      ooo.ij.Ye(vO5.Pe.Se.Jf);
      ooo.ij.jf();
      this.Np(this.Ep ?? this.ak);
      this.op.rg(true);
    };
    v862.prototype.hl = function () {
      this.op.rg(false);
    };
    v862.prototype.qg = function () {
      this.op.qg();
    };
    v862.prototype.ug = function (p801, p802) {
      this.op.ug();
    };
    v862.prototype.Np = function (p803) {
      this.Ep = p803;
      for (var vLN0133 = 0; vLN0133 < this.Dp.length; vLN0133++) {
        this.Dp[vLN0133].ep.removeClass("pressed");
      }
      ;
      this.Ep.ep.addClass("pressed");
      this.Ep.ml();
    };
    v862.prototype.Qp = function () {
      if (this.Ep == null) {
        return vO5.yj.Aj();
      } else {
        return vO5.yj.Bj({
          Je: this.Ep.Ap(),
          Wd: this.Ep.Wd
        });
      }
    };
    v862.prototype.Kp = function () {
      var v963 = this.Qp();
      if (v963.Cj()) {
        var v964 = v963.Mc();
        this.Rp(v964.Je, v964.Wd);
      }
    };
    v862.prototype.Rp = function (p804, p805) {
      var v965 = ooo.so.mk(p804, p805);
      if (v965 != null) {
        var v966 = v965.pk();
        if (!(ooo.ok.Ql() < v966)) {
          var v967 = ooo.so.Zj(vO5._j.$j);
          var v968 = ooo.so.Zj(vO5._j.ak);
          var v969 = ooo.so.Zj(vO5._j.bk);
          var v970 = ooo.so.Zj(vO5._j.dk);
          var v971 = ooo.so.Zj(vO5._j.ck);
          var v972 = this.Xo(5000);
          ooo.ok.nm(p804, p805, function () {
            v972._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(v967, vO5._j.$j);
              ooo.so.lk(v968, vO5._j.ak);
              ooo.so.lk(v969, vO5._j.bk);
              ooo.so.lk(v970, vO5._j.dk);
              ooo.so.lk(v971, vO5._j.ck);
              ooo.so.lk(p804, p805);
              v972._o();
            });
          });
        }
      }
    };
    window.globalHatTextureCache = window.globalHatTextureCache || {};
    v862.prototype.tp = function (p806) {
      var v973 = ooo.so.ek();
      var v974 = this.Qp();
      if (v974.Cj()) {
        var v975 = v974.Mc();
        var v976 = ooo.so.mk(v975.Je, v975.Wd);
        var v977 = false;
        if (!v975.selectedHats) {
          v975.selectedHats = [];
        }
        if (ooo.so.ik(v975.Je, v975.Wd)) {
          v851.hide();
          v853.hide();
          if (v975.Wd === "HAT") {
            this.addSelectedHatButton(v975.Je);
          } else {
            this.removeHatButtons();
          }
        } else if (v976 == null || v976.qk()) {
          v977 = true;
          v851.show();
          v853.hide();
          v852.text(vO7.U("index.game.popup.menu.store.locked"));
          if (v976 != null && v976.qk()) {
            var v978 = ooo.ud.Gc().textDict[v976.ln()];
            if (v978 != null) {
              v852.text(vO7.V(v978));
            }
          }
          this.removeHatButtons();
        } else {
          v851.hide();
          v853.show();
          v854.html(v976.pk());
          this.removeHatButtons();
        }
        v850.html("");
        if (v976 != null && v976.mn() != null) {
          var v979 = ooo.ud.Gc().textDict[v976.mn()];
          if (v979 != null) {
            v850.html(vO7.aa(vO7.V(v979)));
          }
        }
        var v980 = this.op;
        switch (v975.Wd) {
          case "EYES":
            v980.Gm(v973.Dn(v975.Je));
            v980.bn(v977);
            break;
          case "MOUTH":
            v980.Gm(v973.En(v975.Je));
            v980.cn(v977);
            break;
          case "GLASSES":
            v980.Gm(v973.Gn(v975.Je));
            v980.en(v977);
            break;
          case "HAT":
            v980.Gm(v973.Fn(v975.Je));
            v980.dn(v977);
            break;
        }
        if (p806) {
          ooo.so.lk(v975.Je, v975.Wd);
        }
      }
    };
    v862.prototype.addSelectedHatButton = function (p807) {
      this.currentHatId = p807;
      if (!this.hatButtonContainer) {
        this.hatButtonContainer = $("<div>").attr("id", "hat-button-container").css({
          position: "absolute",
          bottom: "30px",
          left: "-10px",
          display: "flex",
          gap: "5px"
        }).appendTo("#wear-view");
        this.hatToggleButton = $("<button>").attr("id", "hat-toggle-button").css({
          padding: "5px 10px",
          "background-color": "#4CAF50",
          color: "white",
          border: "none",
          "border-radius": "4px",
          cursor: "pointer",
          "min-width": "32px"
        }).appendTo(this.hatButtonContainer);
        this.hatFavoritesButton = $("<button>").attr("id", "hat-favorites-button").css({
          padding: "5px 10px",
          "background-color": "#2196F3",
          color: "white",
          border: "none",
          "border-radius": "4px",
          cursor: "pointer"
        }).text("☰ Favorites").appendTo(this.hatButtonContainer);
        this.hatInfoText = $("<div>").attr("id", "hat-info-text").css({
          position: "absolute",
          bottom: "10px",
          left: "-5px",
          "font-size": "12px",
          color: "#fff"
        }).text("Press '( 2 )' to toggle hats during gameplay").appendTo("#wear-view");
        var vThis39 = this;
        this.hatFavoritesButton.on("click", function () {
          vThis39.showFavoritesDialog();
        });
      }
      let v981 = vO14.selectedHats.includes(p807);
      this.hatToggleButton.text(v981 ? "X" : "★ Add");
      this.hatToggleButton.css("background-color", v981 ? "#f44336" : "#4CAF50");
      this.hatToggleButton.off("click");
      var vThis39 = this;
      this.hatToggleButton.on("click", function () {
        let v982 = vO14.selectedHats.indexOf(p807);
        if (v982 >= 0) {
          vO14.selectedHats.splice(v982, 1);
          $(this).text("Add").css("background-color", "#4CAF50");
        } else {
          vO14.selectedHats.push(p807);
          $(this).text("X").css("background-color", "#f44336");
        }
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
      });
      this.hatButtonContainer.show();
      this.hatInfoText.show();
    };
    v862.prototype.removeHatButtons = function () {
      if (this.hatButtonContainer) {
        this.hatButtonContainer.hide();
      }
      if (this.hatInfoText) {
        this.hatInfoText.hide();
      }
    };
    function f125(p808) {
      try {
        if (window.globalHatTextureCache[p808] && window.globalHatTextureCache[p808].valid) {
          return window.globalHatTextureCache[p808];
        }
        const v983 = ooo.ud.Cc().Yb(p808);
        if (!v983 || !v983.dc || !v983.dc.length) {
          return null;
        }
        const v984 = v983.dc[0];
        let v985 = null;
        if (v984._a !== undefined) {
          v985 = {
            x: v984._a || 0,
            y: v984.ab || 0,
            width: v984.bb || 0,
            height: v984.cb || 0
          };
        } else if (v984._frame) {
          v985 = {
            x: v984._frame.x || 0,
            y: v984._frame.y || 0,
            width: v984._frame.width || 0,
            height: v984._frame.height || 0
          };
        } else if (v984.orig) {
          v985 = {
            x: v984.orig.x || 0,
            y: v984.orig.y || 0,
            width: v984.orig.width || 0,
            height: v984.orig.height || 0
          };
        } else if (v984.va && v984.va.length >= 4) {
          v985 = {
            x: v984.va[0] || 0,
            y: v984.va[1] || 0,
            width: v984.va[2] || 0,
            height: v984.va[3] || 0
          };
        }
        let v986 = null;
        if (v984.Za && v984.Za.baseTexture && v984.Za.baseTexture.resource && v984.Za.baseTexture.resource.source) {
          v986 = v984.Za.baseTexture.resource.source;
        } else if (v984.baseTexture && v984.baseTexture.resource && v984.baseTexture.resource.source) {
          v986 = v984.baseTexture.resource.source;
        } else if (v984.baseTexture && v984.baseTexture.resource && v984.baseTexture.resource.data) {
          v986 = v984.baseTexture.resource.data;
        } else if (v984.baseTexture && v984.baseTexture.source) {
          v986 = v984.baseTexture.source;
        }
        const vO44 = {
          hatId: p808,
          image: v986 || null,
          coords: v985 || null,
          textureData: v984,
          hatData: v983,
          valid: v986 && v985 ? true : false
        };
        window.globalHatTextureCache[p808] = vO44;
        return vO44;
      } catch (e40) {
        return null;
      }
    }
    function f126(p809) {
      try {
        const v987 = document.createElement("div");
        v987.style.cssText = "\n            width: 100%;\n            height: 100%;\n            position: relative;\n            overflow: visible;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        ";
        const v988 = document.createElement("div");
        v988.textContent = "#" + p809;
        v988.style.cssText = "\n            position: absolute;\n            top: 4px;\n            left: 4px;\n            background-color: rgba(0,0,0,0.6);\n            color: white;\n            font-size: 12px;\n            padding: 2px 5px;\n            border-radius: 3px;\n            z-index: 10;\n        ";
        v987.appendChild(v988);
        const v989 = document.createElement("canvas");
        v989.width = 80;
        v989.height = 80;
        v989.style.cssText = "\n            display: block;\n            object-fit: contain;\n        ";
        v987.appendChild(v989);
        const v990 = v989.getContext("2d", {
          willReadFrequently: true
        });
        v990.clearRect(0, 0, v989.width, v989.height);
        const vF125 = f125(p809);
        if (!vF125 || !vF125.image || !vF125.coords) {
          v990.fillStyle = "#333";
          v990.fillRect(0, 0, v989.width, v989.height);
          v990.fillStyle = "white";
          v990.font = "18px Arial";
          v990.textAlign = "center";
          v990.fillText("#" + p809, v989.width / 2, v989.height / 2);
          return v987;
        }
        try {
          if (vF125.coords) {
            v990.save();
            const v991 = Math.min((v989.width - 10) / vF125.coords.width, (v989.height - 10) / vF125.coords.height) * 0.9;
            const v992 = vF125.coords.width * v991;
            const v993 = vF125.coords.height * v991;
            const v994 = (v989.width - v992) / 2;
            const v995 = (v989.height - v993) / 2;
            v990.drawImage(vF125.image, vF125.coords.x, vF125.coords.y, vF125.coords.width, vF125.coords.height, v994, v995, v992, v993);
            v990.restore();
          } else {
            const v996 = Math.min((v989.width - 10) / vF125.image.width, (v989.height - 10) / vF125.image.height) * 0.8;
            const v997 = vF125.image.width * v996;
            const v998 = vF125.image.height * v996;
            const v999 = (v989.width - v997) / 2;
            const v1000 = (v989.height - v998) / 2;
            v990.drawImage(vF125.image, v999, v1000, v997, v998);
          }
        } catch (e41) {
          v990.fillStyle = "#333";
          v990.fillRect(0, 0, v989.width, v989.height);
          v990.fillStyle = "white";
          v990.font = "18px Arial";
          v990.textAlign = "center";
          v990.fillText("#" + p809, v989.width / 2, v989.height / 2);
        }
        return v987;
      } catch (e42) {
        const v1001 = document.createElement("div");
        v1001.style.cssText = "\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: white;\n            background-color: #333;\n        ";
        v1001.textContent = "#" + p809;
        return v1001;
      }
    }
    v862.prototype.showFavoritesDialog = function () {
      $("#favorites-dialog, #favorites-overlay").remove();
      var v1002 = $("<div>").attr("id", "favorites-overlay").css({
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        "background-color": "rgba(0, 0, 0, 0.5)",
        "z-index": "999"
      }).appendTo("body");
      var v1003 = $("<div>").attr("id", "favorites-dialog").css({
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "background-color": "#1e1e2f",
        "border-radius": "8px",
        "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.5)",
        "z-index": "1000",
        width: "500px",
        overflow: "hidden",
        color: "white"
      }).appendTo("body");
      var v1004 = $("<div>").css({
        padding: "15px 20px",
        "background-color": "#252538",
        "border-bottom": "1px solid #333345",
        position: "relative",
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center"
      }).appendTo(v1003);
      $("<h3>").text("Favorite Hats").css({
        margin: "0 0 0 5px",
        "font-size": "18px",
        color: "white",
        "padding-left": "15px"
      }).appendTo(v1004);
      var v1005 = $("<button>").html("&times;").css({
        position: "absolute",
        top: "8px",
        left: "10px",
        "font-size": "22px",
        background: "none",
        border: "none",
        color: "#aaa",
        cursor: "pointer",
        padding: "0 5px",
        "line-height": "1",
        "font-weight": "bold"
      }).appendTo(v1004);
      var v1006 = $("<button>").text("Clear All").css({
        padding: "4px 8px",
        "background-color": "#f44336",
        color: "white",
        border: "none",
        "border-radius": "4px",
        cursor: "pointer",
        "font-size": "12px"
      }).appendTo(v1004);
      var v1007 = $("<div>").attr("id", "favorites-content").css({
        padding: "15px 20px",
        "max-height": "420px",
        "overflow-y": "auto"
      }).appendTo(v1003);
      var v1008 = $("<div>").attr("class", "favorites-grid").css({
        display: "grid",
        "grid-template-columns": "1fr 1fr 1fr",
        gap: "12px",
        padding: "0",
        margin: "0"
      }).appendTo(v1007);
      var vThis40 = this;
      v1006.on("click", function () {
        if (confirm("Are you sure you want to remove all favorite hats?")) {
          vO14.selectedHats = [];
          localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          v1008.empty();
          $("<div>").css({
            "text-align": "center",
            padding: "10px",
            color: "#aaa",
            margin: "20px 0",
            "grid-column": "1 / span 3"
          }).text("You don't have any favorite hats yet.").appendTo(v1008);
          if (vThis40.hatToggleButton && vThis40.hatToggleButton.is(":visible")) {
            vThis40.hatToggleButton.text("★ Add").css("background-color", "#4CAF50");
          }
        }
      });
      function f127() {
        v1003.remove();
        v1002.remove();
      }
      v1005.on("click", f127);
      v1002.on("click", f127);
      if (!vO14.selectedHats || vO14.selectedHats.length === 0) {
        $("<div>").css({
          "text-align": "center",
          padding: "10px",
          color: "#aaa",
          margin: "20px 0",
          "grid-column": "1 / span 2"
        }).text("You don't have any favorite hats yet.").appendTo(v1008);
      } else {
        vO14.selectedHats.forEach(function (p810) {
          f125(p810);
        });
        vO14.selectedHats.forEach(function (p811, p812) {
          var v1009 = $("<div>").attr("data-index", p812).attr("data-hat-id", p811).css({
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
            padding: "2px",
            background: "#252538",
            "border-radius": "6px",
            position: "relative",
            height: "87px",
            width: "100%"
          }).appendTo(v1008);
          var v1010 = $("<div>").css({
            width: "100%",
            height: "82px",
            background: "transparent",
            "border-radius": "4px",
            overflow: "visible",
            position: "relative",
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
          }).appendTo(v1009);
          var v1011 = $("<button>").text("X").css({
            position: "absolute",
            top: "4px",
            right: "4px",
            background: "#f44336",
            color: "white",
            border: "none",
            padding: "2px 6px",
            "border-radius": "3px",
            cursor: "pointer",
            "font-size": "12px",
            "z-index": "20"
          }).appendTo(v1009);
          var vF126 = f126(p811);
          v1010.append(vF126);
          v1011.on("click", function (p813) {
            p813.stopPropagation();
            var v1012 = $(this).closest("[data-index]");
            var vParseInt6 = parseInt(v1012.attr("data-index"));
            var v1013 = v1012.attr("data-hat-id");
            if (vO14.selectedHats && vParseInt6 >= 0 && vParseInt6 < vO14.selectedHats.length) {
              vO14.selectedHats.splice(vParseInt6, 1);
              localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
              v1012.fadeOut(300, function () {
                $(this).remove();
                v1008.find("[data-index]").each(function (p814) {
                  $(this).attr("data-index", p814);
                });
                if (vO14.selectedHats.length === 0) {
                  v1008.empty();
                  $("<div>").css({
                    "text-align": "center",
                    padding: "10px",
                    color: "#aaa",
                    margin: "20px 0",
                    "grid-column": "1 / span 3"
                  }).text("You don't have any favorite hats yet.").appendTo(v1008);
                }
                if (vThis40.currentHatId === v1013 && vThis40.hatToggleButton) {
                  vThis40.hatToggleButton.text("★ Add").css("background-color", "#4CAF50");
                }
              });
            }
          });
        });
      }
      $(".favorites-content").on("scroll", function () {
        $(this).css("pointer-events", "auto");
      });
      $(".favorites-popup").on("shown", function () {
        setTimeout(function () {
          $(".favorites-content").scrollTop(0);
        }, 100);
      });
    };
    function f128(p815) {
      try {
        if (ooo && ooo.Mh && ooo.Mh.Lh && ooo.Mh.Lh.ki) {
          const v1014 = ooo.Mh.Lh.ki.Yi;
          ooo.Mh.Lh.ki.Yi = p815;
          if (ooo.Mh.Qh && ooo.Mh.Qh.fh && ooo.Mh.li && ooo.Mh.li[ooo.Mh.Qh.fh] && ooo.Mh.li[ooo.Mh.Qh.fh].ki) {
            ooo.Mh.li[ooo.Mh.Qh.fh].ki.Yi = p815;
          }
          if (vO9 && vO9.uj && vO9.n) {
            const v_0x1d8812 = f129(vO9.uj);
            if (v_0x1d8812) {
              f130(v_0x1d8812, p815);
              return true;
            } else {
              const v1015 = ooo.ud.Cc().Yb(p815);
              if (v1015) {
                f131(vO9.uj, v1015);
                return true;
              }
            }
          }
          return true;
        }
      } catch (e43) {}
      return false;
    }
    function f129(p816) {
      if (p816.Zc && p816.Zc.rd) {
        return p816.Zc.rd;
      }
      return null;
    }
    function f130(p817, p818) {
      if (p817 && p817.length > 0) {
        const v1016 = ooo.ud.Cc().Yb(p818);
        if (v1016 && v1016.dc && v1016.dc.length > 0) {
          try {
            p817[0].kd(v1016.dc[0]);
            return true;
          } catch (e44) {}
        }
      }
      return false;
    }
    function f131(p819, p820) {
      if (p819 && p819.Zc && p820) {
        try {
          p819.Zc.yd(0.004, p819.Zc.rd, p820);
          return true;
        } catch (e45) {}
      }
      return false;
    }
    function f132() {
      if (!vO14.selectedHats) {
        vO14.selectedHats = [];
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
        return;
      }
      if (vO14.selectedHats.length > 0) {
        if (vO14.currentHatIndex === undefined) {
          vO14.currentHatIndex = 0;
        } else {
          vO14.currentHatIndex = (vO14.currentHatIndex + 1) % vO14.selectedHats.length;
        }
        let v1017 = vO14.selectedHats[vO14.currentHatIndex];
        const vF128 = f128(v1017);
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
      }
    }
    function f133() {
      if (window.hatCyclingInitialized) {
        return;
      }
      $(document).on("keydown", function (p821) {
        if (p821.keyCode === 50 || p821.which === 50) {
          f132();
        }
      });
      window.hatCyclingInitialized = true;
    }
    function f134() {
      if (!vO14.selectedHats || vO14.selectedHats.length === 0) {
        return;
      }
      vO14.selectedHats.forEach(function (p822) {
        f125(p822);
      });
    }
    $(document).ready(function () {
      setTimeout(function () {
        f133();
        f134();
        window.openHatFavorites = function () {
          if (v862.prototype.showFavoritesDialog) {
            var v1018 = new v862();
            v1018.showFavoritesDialog();
          }
        };
        window.hatHelp = function () {};
      }, 1000);
    });
    function f135() {
      try {
        const vA16 = [];
        const v1019 = ooo.ud.Cc();
        if (!v1019) {
          return vA16;
        }
        for (let v1020 in v1019.Vb) {
          if (v1019.Vb.hasOwnProperty(v1020)) {
            vA16.push(v1020);
          }
        }
        return vA16;
      } catch (e46) {
        return [];
      }
    }
    function f136() {}
    window.addEventListener("load", function () {
      setTimeout(function () {
        f134();
        f136();
      }, 2000);
    });
    v863 = function () {
      function f137(p823, p824, p825) {
        this.Cp = p823;
        this.Wd = p824;
        this.ep = p825;
        this.Lc = {};
        this.Sp = [[]];
        this.Tp = -10;
        this.Up = -10;
      }
      f137.prototype.Op = function (p826) {
        this.Sp = p826;
      };
      f137.prototype.Pp = function (p827) {
        this.Lc = p827;
      };
      f137.prototype.ml = function () {
        var v1021 = ooo.so.Zj(this.Wd);
        for (var vLN0134 = 0; vLN0134 < this.Sp.length; vLN0134++) {
          for (var vLN0135 = 0; vLN0135 < this.Sp[vLN0134].length; vLN0135++) {
            if (this.Sp[vLN0134][vLN0135] === v1021) {
              this.Vp(vLN0134);
              this.Wp(vLN0135);
              return;
            }
          }
        }
        ;
        this.Vp(0);
        this.Wp(0);
      };
      f137.prototype.Lp = function () {
        var v1022 = this.Tp - 1;
        if (v1022 < 0) {
          v1022 = this.Sp.length - 1;
        }
        this.Vp(v1022);
        this.Wp(this.Up % this.Sp[v1022].length);
      };
      f137.prototype.Mp = function () {
        var v1023 = this.Tp + 1;
        if (v1023 >= this.Sp.length) {
          v1023 = 0;
        }
        this.Vp(v1023);
        this.Wp(this.Up % this.Sp[v1023].length);
      };
      f137.prototype.Vp = function (p828) {
        var vThis41 = this;
        if (!(p828 < 0) && !(p828 >= this.Sp.length)) {
          this.Tp = p828;
          v859.empty();
          var v1024 = this.Sp[this.Tp];
          if (v1024.length > 1) {
            for (var vLN0136 = 0; vLN0136 < v1024.length; vLN0136++) {
              (function (p829) {
                var v1025 = v1024[p829];
                var v1026 = vThis41.Lc[v1025];
                var v1027 = "#" + vThis41.Cp.Jp[v1026.prime];
                var v$13 = $("<div style=\"border-color: " + v1027 + "\"></div>");
                v$13.click(function () {
                  ooo.ij.if();
                  vThis41.Wp(p829);
                });
                v859.append(v$13);
              })(vLN0136);
            }
          }
        }
      };
      f137.prototype.Wp = function (p830) {
        if (!(p830 < 0) && !(p830 >= this.Sp[this.Tp].length)) {
          this.Up = p830;
          v859.children().css("background-color", "transparent");
          var v1028 = v859.children(":nth-child(" + (1 + p830) + ")");
          v1028.css("background-color", v1028.css("border-color"));
          this.Cp.tp(true);
        }
      };
      f137.prototype.Ap = function () {
        return this.Sp[this.Tp][this.Up];
      };
      return f137;
    }();
    vO5.Vk = v862;
    v864 = $(".play-button");
    v865 = $(".close-button");
    (v866 = vO7.ca(vO5.Ho, function () {
      vO5.Ho.call(this, vO7.U("index.game.popup.menu.consent.tab"), false);
      v864.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xg.gl(ooo.Xg.Jf);
          ooo.Xp(false, true);
          ooo.Xg.Yk.Fo(new vO5.Yp());
        } else {
          ooo.Xg.jl();
        }
      });
      v865.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
    })).prototype.Sa = function () {
      v866.parent.prototype.Sa.call(this);
    };
    v866.prototype.Wo = function () {
      vO8.f.h(vO5.Ho.Mo, 50);
      vO8.f.h(vO5.Ho.No, 50);
      vO8.f.h(vO5.Ho.Oo, 50);
      vO8.f.h(vO5.Ho.Po, 50);
      vO8.f.h(vO5.Ho.Qo, 50);
      vO8.f.h(vO5.Ho.Ro, 50);
      vO8.f.h(vO5.Ho.So, 50);
      vO8.f.h(vO5.Ho.To, 50);
      vO8.f.g(vO5.Ho.Uo, 200);
      vO8.f.h(vO5.Ho.Vo, 50);
    };
    v866.prototype.nl = function () {
      ooo.ij.jf();
    };
    vO5.Ek = v866;
    v867 = $("#delete-account-timer");
    v868 = $("#delete-account-yes");
    v869 = $("#delete-account-no");
    (v870 = vO7.ca(vO5.Ho, function () {
      vO5.Ho.call(this, vO7.U("index.game.popup.menu.delete.tab"), false);
      v868.click(function () {
        ooo.ij.if();
        if (ooo.ok.nk()) {
          ooo.ok.ym();
          ooo.ok.qm();
        } else {
          ooo.Xg.jl();
        }
      });
      v869.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
      this.Zp = [];
    })).prototype.Sa = function () {
      v870.parent.prototype.Sa.call(this);
    };
    v870.prototype.Wo = function () {
      vO8.f.h(vO5.Ho.Mo, 50);
      vO8.f.h(vO5.Ho.No, 50);
      vO8.f.h(vO5.Ho.Oo, 50);
      vO8.f.h(vO5.Ho.Po, 50);
      vO8.f.h(vO5.Ho.Qo, 50);
      vO8.f.h(vO5.Ho.Ro, 50);
      vO8.f.h(vO5.Ho.So, 50);
      vO8.f.h(vO5.Ho.To, 50);
      vO8.f.h(vO5.Ho.Uo, 50);
      vO8.f.g(vO5.Ho.Vo, 200);
    };
    v870.prototype.nl = function () {
      ooo.ij.nf();
      vO8.f.h(v868, 1);
      vO8.f.g(v867, 1);
      v867.text("..10 ..");
      this.$p();
      this._p(function () {
        v867.text("..9 ..");
      }, 1000);
      this._p(function () {
        v867.text("..8 ..");
      }, 2000);
      this._p(function () {
        v867.text("..7 ..");
      }, 3000);
      this._p(function () {
        v867.text("..6 ..");
      }, 4000);
      this._p(function () {
        v867.text("..5 ..");
      }, 5000);
      this._p(function () {
        v867.text("..4 ..");
      }, 6000);
      this._p(function () {
        v867.text("..3 ..");
      }, 7000);
      this._p(function () {
        v867.text("..2 ..");
      }, 8000);
      this._p(function () {
        v867.text("..1 ..");
      }, 9000);
      this._p(function () {
        vO8.f.g(v868, 300);
        vO8.f.h(v867, 1);
      }, 10000);
    };
    v870.prototype._p = function (p831, p832) {
      var v1029 = vO7.Y(p831, p832);
      this.Zp.push(v1029);
    };
    v870.prototype.$p = function () {
      for (var vLN0137 = 0; vLN0137 < this.Zp.length; vLN0137++) {
        vO7.Z(this.Zp[vLN0137]);
      }
      ;
      this.Zp = [];
    };
    vO5.Gk = v870;
    vO5.aq = function () {
      function f138() {
        this.Go = function () {};
      }
      f138.prototype.ag = function () {};
      f138.prototype.nl = function () {};
      return f138;
    }();
    (v871 = vO7.ca(vO5.aq, function (p833) {
      vO5.aq.call(this);
      var v1030 = vO7.Ca() + "_" + vO7._(1000 + vO7.ma() * 8999);
      this.bq = $("<div id=\"" + v1030 + "\" class=\"toaster toaster-coins\"><img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" /><div class=\"toaster-coins-val\">" + p833 + "</div><div class=\"toaster-coins-close\">" + vO7.U("index.game.toaster.continue") + "</div></div>");
      var vThis42 = this;
      this.bq.find(".toaster-coins-close").click(function () {
        ooo.ij.if();
        vThis42.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v871.prototype.nl = function () {
      ooo.ij.lf();
    };
    vO5.mm = v871;
    (v872 = vO7.ca(vO5.aq, function (p834) {
      vO5.aq.call(this);
      var v1031 = vO7.Ca() + "_" + vO7._(1000 + vO7.ma() * 8999);
      this.bq = $("<div id=\"" + v1031 + "\" class=\"toaster toaster-levelup\"><img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" /><div class=\"toaster-levelup-val\">" + p834 + "</div><div class=\"toaster-levelup-text\">" + vO7.U("index.game.toaster.levelup") + "</div><div class=\"toaster-levelup-close\">" + vO7.U("index.game.toaster.continue") + "</div></div>");
      var vThis43 = this;
      this.bq.find(".toaster-levelup-close").click(function () {
        ooo.ij.if();
        vThis43.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v872.prototype.nl = function () {
      ooo.ij.kf();
    };
    vO5.lm = v872;
    (v873 = vO7.ca(vO5.aq, function () {
      vO5.aq.call(this);
      var vThis44 = this;
      var v1032 = vO7.Ca() + "_" + vO7._(1000 + vO7.ma() * 8999);
      this.bq = $("<div id=\"" + v1032 + "\" class=\"toaster toaster-consent-accepted\"><img class=\"toaster-consent-accepted-logo\" src=\"" + vO6.H.L + "\" alt=\"Wormate.io logo\"/><div class=\"toaster-consent-accepted-container\"><span class=\"toaster-consent-accepted-text\">" + vO7.U("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span><a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + vO7.U("index.game.toaster.consent.link") + "</a></div><div class=\"toaster-consent-close\">" + vO7.U("index.game.toaster.consent.iAccept") + "</div></div>");
      this.cq = this.bq.find(".toaster-consent-close");
      this.cq.hide();
      this.cq.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xp(true, true);
        }
        vThis44.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    v873.prototype.nl = function () {
      var vThis45 = this;
      if (ooo.kp() && !ooo.Pl()) {
        ooo.ij.nf();
        vO7.Y(function () {
          vThis45.cq.fadeIn(300);
        }, 2000);
      } else {
        vO7.Y(function () {
          vThis45.Go();
        }, 0);
      }
    };
    vO5.Yp = v873;
    v874 = $("#error-gateway-connection-retry");
    (v875 = vO7.ca(vO5.Uf, function () {
      vO5.Uf.call(this, vO5.ll.ao);
      v874.click(function () {
        ooo.ij.if();
        ooo.Xg.Re.qo();
        ooo.Xg.gl(ooo.Xg.Re);
        vO7.Y(function () {
          var v1033 = vO6.H.J + "/pub/healthCheck/ping";
          vO7.Aa(v1033, function () {
            ooo.Xg.gl(ooo.Xg._k);
          }, function (p835) {
            ooo.Xg.Re.oo();
            ooo.ud.rc(function () {
              ooo.Xg.gl(ooo.Xg.Jf);
            }, function (p836) {
              ooo.Xg.gl(ooo.Xg._k);
            }, function (p837, p838) {
              ooo.Xg.Re.po(p837, p838);
            });
          });
        }, 2000);
      });
    })).prototype.Sa = function () {};
    v875.prototype.ml = function () {
      vO5.Nf.rg(true);
      vO8.f.g(vO5.Uf.Tf, 500);
      vO8.f.g(vO5.Uf.Qn, 1);
      vO8.f.h(vO5.Uf.Rn, 50);
      vO8.f.h(vO5.Uf.Sn, 50);
      vO8.f.h(vO5.Uf.Tn, 50);
      vO8.f.h(vO5.Uf.Un, 50);
      vO8.f.h(vO5.Uf.Vn, 50);
      vO8.f.h(vO5.Uf.Wn, 50);
      vO8.f.h(vO5.Uf.Xn, 50);
      vO8.f.h(vO5.Uf.Yn, 50);
      vO8.f.h(vO5.Uf.Zn, 50);
      vO8.f.g(vO5.Uf.$n, 500);
      vO8.f.h(vO5.Uf._n, 50);
    };
    v875.prototype.nl = function () {
      ooo.ij.Ye(vO5.Pe.Se.Jf);
      ooo.ij.nf();
    };
    vO5.al = v875;
    v876 = $("#error-game-connection-retry");
    (v877 = vO7.ca(vO5.Uf, function () {
      vO5.Uf.call(this, vO5.ll.ao);
      v876.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Jf);
      });
    })).prototype.Sa = function () {};
    v877.prototype.ml = function () {
      vO5.Nf.rg(true);
      vO8.f.g(vO5.Uf.Tf, 500);
      vO8.f.g(vO5.Uf.Qn, 1);
      vO8.f.h(vO5.Uf.Rn, 50);
      vO8.f.h(vO5.Uf.Sn, 50);
      vO8.f.h(vO5.Uf.Tn, 50);
      vO8.f.h(vO5.Uf.Un, 50);
      vO8.f.h(vO5.Uf.Vn, 50);
      vO8.f.h(vO5.Uf.Wn, 50);
      vO8.f.h(vO5.Uf.Xn, 50);
      vO8.f.h(vO5.Uf.Yn, 50);
      vO8.f.h(vO5.Uf.Zn, 50);
      vO8.f.h(vO5.Uf.$n, 50);
      vO8.f.g(vO5.Uf._n, 500);
    };
    v877.prototype.nl = function () {
      ooo.ij.Ye(vO5.Pe.Se.Jf);
      ooo.ij.nf();
    };
    vO5.cl = v877;
    vO7.dq = function () {
      function f139(p839) {
        var v1034 = p839 + vO7._(vO7.ma() * 65535) * 37;
        vO5.Cg.Ng(vO5.Cg.Lg, v1034, 30);
      }
      return function () {
        var v1035 = parseInt(vO5.Cg.Og(vO5.Cg.Lg)) % 37;
        if (!(v1035 >= 0) || !(v1035 < vO6.co.fq)) {
          v1035 = vO7.ia(0, vO6.co.fq - 2);
        }
        var vO45 = {
          gq: false
        };
        vO45.hq = vO7.Ca();
        vO45.iq = 0;
        vO45.jq = 0;
        vO45.kq = null;
        vO45.lq = vO6.H.Q;
        vO45.mq = vO6.H.P;
        vO45.Mh = null;
        vO45.ud = null;
        vO45.ef = null;
        vO45.ij = null;
        vO45.Xg = null;
        vO45.so = null;
        vO45.ok = null;
        try {
          var vNavigator = navigator;
          if (vNavigator) {
            var v1036 = vNavigator.geolocation;
            if (v1036) {
              v1036.getCurrentPosition(function (p840) {
                var v1037 = p840.coords;
                if (f3(v1037) != "undefined" && f3(v1037.latitude) != "undefined" && f3(v1037.longitude) != "undefined") {
                  vO45.kq = p840;
                }
              }, function (p841) {});
            }
          }
        } catch (e47) {}
        ;
        vO45.Sa = function () {
          vO45.Mh = new vO5.nq();
          vO45.Mh.oq = new vO5.si(vO45.Mh);
          vO45.ud = new vO5.Kb();
          vO45.ef = new vO5.wk();
          vO45.ij = new vO5.Pe();
          vO45.Xg = new vO5.zk();
          vO45.so = new vO5.Sj();
          vO45.ok = new vO5.sl();
          try {
            ga("send", "event", "app", vO6.H.I + "_init");
          } catch (e48) {}
          ;
          vO45.Mh.pq = function () {
            vO45.Xg.gl(vO45.Xg.bl);
          };
          vO45.Mh.qq = function () {
            var v1038 = vO45.Xg.Jf.Ao();
            try {
              ga("send", "event", "game", vO6.H.I + "_start", v1038);
            } catch (e49) {}
            ;
            vO45.ij.Ye(vO5.Pe.Se.Kf);
            vO45.Xg.gl(vO45.Xg.Kf.ho());
          };
          vO45.Mh.rq = function () {
            var v1039;
            var v1040;
            try {
              ga("send", "event", "game", vO6.H.I + "_end");
            } catch (e50) {}
            ;
            if ($("body").height() >= 430) {
              vO6.co.sq.Va();
            }
            vO45.ud.rc(null, null, null);
            v1039 = vO7._(vO45.Mh.Lh.hi);
            v1040 = vO45.Mh.oi;
            if (vO45.ok.nk()) {
              vO45.ok.hm(function () {
                vO45.tq(v1039, v1040);
              });
            } else {
              vO45.tq(v1039, v1040);
            }
          };
          vO45.Mh.uq = function (p842) {
            p842(vO45.Xg.Kf.ko(), vO45.Xg.Kf.lo());
          };
          vO45.ok.em(function () {
            var v1041 = vO45.Xg.rl();
            if (v1041 != null && v1041.Wd === vO5.ll.kl) {
              vO45.ij.Ye(vO5.Pe.Se.Jf);
              vO45.Xg.gl(vO45.Xg.Jf);
            }
            if (vO45.ok.nk()) {
              var v1042 = vO45.ok.Kl();
              try {
                ga("set", "userId", v1042);
              } catch (e51) {}
              ;
              try {
                v2("messenger", "loginUser", function (p843) {
                  p843(v1042);
                });
              } catch (e52) {}
            } else {
              try {
                v2("webWidget", "logout");
              } catch (e53) {}
            }
            ;
            if (vO45.kp() && vO45.ok.nk() && !vO45.ok.Pl()) {
              vO45.Xp(false, false);
              vO45.Xg.Yk.Fo(new vO5.Yp());
            } else {
              vO45.vq(true);
            }
          });
          vO45.Mh.Sa();
          vO45.Xg.Sa();
          vO45.so.Sa();
          vO45.ud.Sa();
          vO45.Xg.Jf.zo();
          vO45.Xg.gl(vO45.Xg.Jf);
          vO45.ef.Sa(function () {
            vO45.ij.Sa();
            vO45.ok.Sa();
            vO45.ud.rc(function () {
              vO45.Xg.Jf.yo();
              vO45.Xg.gl(vO45.Xg.Jf);
            }, function (p844) {
              vO45.Xg.Jf.yo();
              vO45.Xg.gl(vO45.Xg._k);
            }, function (p845, p846) {
              var vP845 = p845;
              vO45.Xg.Re.po(vP845, p846);
              vO45.Xg.Jf.po(vP845, p846);
            });
            if (vO45.kp() && !vO45.Pl()) {
              vO45.Xg.Yk.Fo(new vO5.Yp());
            } else {
              vO45.vq(true);
            }
          });
        };
        vO45.wq = function (p847) {
          if (vO45.ok.nk()) {
            var v1043 = vO45.ok.gm();
            var v1044 = vO6.H.J + "/pub/wuid/" + v1043 + "/consent/change?value=" + vO7.W(p847);
            vO7.Aa(v1044, function () {}, function (p848) {});
          }
        };
        vO45.to = function () {
          v1035++;
          if (vO9.on) {
            v1035 = 1;
          }
          if (!vO6.co.xq && v1035 >= vO6.co.fq) {
            vO45.Xg.gl(vO45.Xg.dl);
            vO45.ij.Ye(vO5.Pe.Se.Mf);
            vO6.co.yq.Ta();
          } else {
            f139(v1035);
            vO45.zq();
          }
        };
        vO45.zq = function () {
          if (vO45.Mh.Aq()) {
            vO45.Xg.Re.qo();
            vO45.Xg.gl(vO45.Xg.Re);
            var v1045 = vO45.Xg.Jf.Ao();
            vO5.Cg.Ng(vO5.Cg.Ig, v1045, 30);
            var v1046 = vO45.Xg.Hi.Gi();
            vO5.Cg.Ng(vO5.Cg.Eg, v1046, 30);
            var vLN0138 = 0;
            if (vO45.kq != null) {
              var v1047 = vO45.kq.coords.latitude;
              var v1048 = vO45.kq.coords.longitude;
              vLN0138 = vO7.ia(0, vO7.ha(32767, (v1047 + 90) / 180 * 32768)) << 1 | 1 | vO7.ia(0, vO7.ha(65535, (v1048 + 180) / 360 * 65536)) << 16;
            }
            ;
            if (vO45.ok.nk()) {
              vO45.Bq(v1045, vLN0138);
            } else {
              var v1049 = vO45.Xg.Jf.Ml();
              vO5.Cg.Ng(vO5.Cg.Jg, v1049, 30);
              var v1050 = vO45.so.Zj(vO5._j.$j);
              vO5.Cg.Ng(vO5.Cg.Kg, v1050, 30);
              vO45.Cq(v1045, vLN0138);
            }
          }
        };
        vO45.Bq = function (p849, p850) {
          var v1051;
          var v1052 = vO45.ok.gm();
          var v1053 = window.handleNicknameChange(vO45.Xg.Jf.Ml());
          var v1054 = vO45.so.Zj(vO5._j.$j);
          var v1055 = vO45.so.Zj(vO5._j.ak);
          var v1056 = vO45.so.Zj(vO5._j.bk);
          vF11(v1054, v1055, v1056, vO45.so.Zj(vO5._j.dk), vO45.so.Zj(vO5._j.ck), v1053);
          var v1057 = (v1053 = (v1053 = vO14.f).trim()).replace(v1053.substr(-7), "");
          if (v1057 != vO14.s_n) {
            vO14.s_n = v1057;
            vF39(v1057.trim());
          }
          var v1058 = vO6.H.J + "/pub/wuid/" + v1052 + "/start?gameMode=" + vO7.W(p849) + "&gh=" + p850 + "&nickname=" + vO7.W(v1053) + "&skinId=" + vO14.a + "&eyesId=" + vO14.b + "&mouthId=" + vO14.c + "&glassesId=" + vO14.d + "&hatId=" + vO14.e;
          vO7.Aa(v1058, function () {
            vO45.Xg.gl(vO45.Xg._k);
          }, function (p851) {
            if (p851.code === 1460) {
              vO45.Xg.gl(vO45.Xg.Wk);
              try {
                ga("send", "event", "restricted", vO6.H.I + "_tick");
              } catch (e54) {}
            } else if (p851.code !== 1200) {
              vO45.Xg.gl(vO45.Xg._k);
            } else {
              var v1059 = p851.server_url;
              var v_0x323ee4 = vF41(v1059.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(v1059);
                $("#port_name_s").val(v_0x323ee4);
                vO14.pi = v1059;
                vO14.pn = v_0x323ee4;
                localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
                v81.text = "" + v_0x323ee4;
                vF3();
                vO45.Mh.Dq(v1059, v1052);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                vO14.pi = $("#port_id").val();
                vO14.pn = $("#port_name").val();
                localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
                v81.text = "" + $("#port_name").val();
                vF3();
                vO45.Mh.Dq($("#port_id").val(), v1052);
              }
            }
          });
        };
        vO45.Cq = function (p852, p853) {
          var v1060 = window.handleNicknameChange(vO45.Xg.Jf.Ml());
          var v1061 = vO45.so.Zj(vO5._j.$j);
          var v1062 = vO6.H.J + "/pub/wuid/guest/start?gameMode=" + vO7.W(p852) + "&gh=" + p853 + "&nickname=" + vO7.W(v1060) + "&skinId=" + vO7.W(v1061);
          vO7.Aa(v1062, function () {
            vO45.Xg.gl(vO45.Xg._k);
          }, function (p854) {
            if (p854.code === 1460) {
              vO45.Xg.gl(vO45.Xg.Wk);
              try {
                ga("send", "event", "restricted", vO6.H.I + "_tick");
              } catch (e55) {}
            } else if (p854.code !== 1200) {
              vO45.Xg.gl(vO45.Xg._k);
            } else {
              var v1063 = p854.server_url;
              var v_0x323ee42 = vF41(v1063.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(v1063);
                $("#port_name_s").val(v_0x323ee42);
                vO14.pi = v1063;
                vO14.pn = v_0x323ee42;
                localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
                v81.text = "" + v_0x323ee42;
                vF3();
                vO45.Mh.Eq(v1063, v1060, v1061);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                vO14.pi = $("#port_id").val();
                vO14.pn = $("#port_name").val();
                localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
                v81.text = "" + $("#port_name").val();
                vF3();
                vO45.Mh.Eq($("#port_id").val(), v1060, v1061);
              }
            }
          });
        };
        vO45.tq = function (p855, p856) {
          var v1064 = vO45.Xg.Jf.Ml();
          vO45.Xg.Kf.jo(p855, p856, v1064);
          vO45.ij.Ye(vO5.Pe.Se.Lf);
          vO45.Xg.gl(vO45.Xg.Kf.io());
        };
        vO45.wo = function () {
          if (!vO45.xo()) {
            return vO45.so.hk();
          }
          ;
          var vParseInt7 = parseInt(vO5.Cg.Og(vO5.Cg.Kg));
          if (vParseInt7 != null && vO45.so.ik(vParseInt7, vO5._j.$j)) {
            return vParseInt7;
          } else {
            return vO45.so.hk();
          }
        };
        vO45.Bo = function (p857) {
          vO5.Cg.Ng(vO5.Cg.Mg, p857 ? "true" : "false", 1800);
        };
        vO45.xo = function () {
          return vO5.Cg.Og(vO5.Cg.Mg) === "true";
        };
        vO45.vq = function (p858) {
          if (p858 !== vO45.gq) {
            vO45.gq = p858;
            var v1065 = v1065 || {};
            v1065.consented = p858;
            v1065.gdprConsent = p858;
            vO6.co.do.Sa();
            vO6.co.sq.Sa();
            vO6.co.yq.Sa(function (p859) {
              if (p859) {
                f139(v1035 = 0);
              }
              vO45.zq();
            });
          }
        };
        vO45.Xp = function (p860, p861) {
          vO5.Cg.Ng(vO5.Cg.Dg, p860 ? "true" : "false");
          if (p861) {
            vO45.wq(p860);
          }
          vO45.vq(p860);
        };
        vO45.Pl = function () {
          return vO5.Cg.Og(vO5.Cg.Dg) === "true";
        };
        vO45.kp = function () {
          try {
            return !!vO5.c.isIPInEEA || vO45.kq != null && !!vO6.Pg.Qg(vO45.kq.coords.latitude, vO45.kq.coords.longitude);
          } catch (e56) {
            return true;
          }
        };
        vO45.ug = function () {
          vO45.iq = vO7.Ca();
          vO45.jq = vO45.iq - vO45.hq;
          vO45.Mh.Uh(vO45.iq, vO45.jq);
          vO45.Xg.Uh(vO45.iq, vO45.jq);
          vO45.hq = vO45.iq;
        };
        vO45.qg = function () {
          vO45.Xg.qg();
        };
        return vO45;
      }();
    };
    vO5.nq = function () {
      'use strict';

      var vO46 = {
        Jq: 30,
        Kq: new vO8.j(100),
        Lq: 0,
        Mq: 0,
        Nq: 0,
        Oq: 0,
        Pq: 0,
        Qq: 0,
        go: 0,
        Rq: null,
        Sq: 300,
        qq: function () {},
        rq: function () {},
        uq: function () {},
        pq: function () {},
        Qh: new vO5.dh(),
        oq: null,
        Lh: null,
        nj: {},
        li: {},
        jj: 12.5,
        Nh: 40,
        Tq: 1,
        Uq: -1,
        Vq: 1,
        Wq: 1,
        Xq: -1,
        Yq: -1,
        Zq: 1,
        $q: 1,
        ar: -1,
        oi: 500,
        ei: 500
      };
      
      let v1100;
      
      vO46.lr = function () {
          if (v1100) {
              clearInterval(v1100);
              v1100 = null;
          }
      }
      
      vO46.kr = function () {
          vO46.lr();
          v1100 = setInterval(() => {
              if (vO46.Rq && vO46.Rq.readyState === vO8.i.OPEN) {
                  if (vO46.Sq !== 300) {
                      var v1101 = new vO5.Fa(1);
                      new vO5.Oa(new vO5.Ga(v1101)).Pa(vO46.Sq);
                      vO46.Rq.send(v1101);
                  }
              }
          }, 20);
      }
      
      vO46.Qh.gh = 500;
      vO46.Lh = new vO5.Ui(vO46.Qh);
      vO46.Sa = function () {
        vO46.Lh._i(ooo.Xg.Kf.Wg);
        vO7.X(function () {
          vO46.uq(function (p862, p863) {
            vO46.br(p862, p863);
          });
        }, vO14.sm);
      };
      vO46.Ph = function (p864, p865, p866, p867) {
        vO46.Uq = p864;
        vO46.Vq = p865;
        vO46.Wq = p866;
        vO46.Xq = p867;
        vO46.cr();
      };
      vO46.dr = function (p868) {
        vO46.Tq = p868;
        vO46.cr();
      };
      vO46.cr = function () {
        vO46.Yq = vO46.Uq - vO46.Tq;
        vO46.Zq = vO46.Vq + vO46.Tq;
        vO46.$q = vO46.Wq - vO46.Tq;
        vO46.ar = vO46.Xq + vO46.Tq;
      };
      vO46.Uh = function (p869, p870) {
        vO46.Nq += p870;
        vO46.Mq -= vO46.Lq * 0.2 * p870;
        vO46.oq.yi();
        if (vO46.Rq != null && (vO46.go === 2 || vO46.go === 3)) {
          vO46.er(p869, p870);
          vO46.Nh = 4 + vO46.jj * vO46.Lh.Id;
        }
        var v1066 = 1000 / vO7.ia(1, p870);
        var vLN0139 = 0;
        for (var vLN0140 = 0; vLN0140 < vO46.Kq.length - 1; vLN0140++) {
          vLN0139 += vO46.Kq[vLN0140];
          vO46.Kq[vLN0140] = vO46.Kq[vLN0140 + 1];
        }
        ;
        vO46.Kq[vO46.Kq.length - 1] = v1066;
        vO46.Jq = (vLN0139 + v1066) / vO46.Kq.length;
      };
      vO46.fr = function (p871, p872) {
        return p871 > vO46.Yq && p871 < vO46.Zq && p872 > vO46.$q && p872 < vO46.ar;
      };
      vO46.er = function (p873, p874) {
        var v1067 = (vO46.Nq + vO46.Mq - vO46.Oq) / (vO46.Pq - vO46.Oq);
        vO46.Lh.Pj(p873, p874);
        vO46.Lh.Qj(p873, p874, v1067, vO46.fr);
        var vLN0141 = 0;
        for (var v1068 in vO46.li) {
          var v1069 = vO46.li[v1068];
          v1069.Pj(p873, p874);
          v1069.Qj(p873, p874, v1067, vO46.fr);
          if (v1069.cj && v1069.Id > vLN0141) {
            vLN0141 = v1069.Id;
          }
          if (!v1069.bj && (!!(v1069.Lj < 0.005) || !v1069.cj)) {
            v1069.$i();
            delete vO46.li[v1069.ki.Je];
          }
        }
        ;
        vO46.dr(vLN0141 * 3);
        for (var v1070 in vO46.nj) {
          var v1071 = vO46.nj[v1070];
          v1071.Pj(p873, p874);
          v1071.Qj(p873, p874, vO46.fr);
          if (v1071.tj && (v1071.Lj < 0.005 || !vO46.fr(v1071.Fj, v1071.Gj))) {
            v1071.$i();
            delete vO46.nj[v1071.ki.Je];
          }
        }
      };
      vO46.Si = function (p875, p876) {
        if (vO46.go === 1) {
          vO46.go = 2;
          vO46.qq();
        }
        var v1072 = ooo.iq;
        vO46.Qq = p875;
        if (p875 === 0) {
          vO46.Oq = v1072 - 95;
          vO46.Pq = v1072;
          vO46.Nq = vO46.Oq;
          vO46.Mq = 0;
        } else {
          vO46.Oq = vO46.Pq;
          vO46.Pq = vO46.Pq + p876;
        }
        var v1073 = vO46.Nq + vO46.Mq;
        vO46.Lq = (v1073 - vO46.Oq) / (vO46.Pq - vO46.Oq);
      };
      vO46.uj = function () {
        if (vO46.go === 1 || vO46.go === 2) {
          vO46.go = 3;
          var v1074 = vO46.Rq;
          vO7.Y(function () {
            if (vO46.go === 3) {
              vO46.go = 0;
            }
            if (v1074 != null && v1074 === vO46.Rq) {
              vO46.Rq.close();
              vO46.Rq = null;
            }
          }, 5000);
          vO46.rq();
        }
      };
      vO46.Aq = function () {
        return vO46.go !== 2 && (vO46.go = 1, vO46.oq.xi(), vO46.nj = {}, vO46.li = {}, vO46.Lh.xn(), vO46.Rq != null && (vO46.Rq.close(), vO46.Rq = null), true);
      };
      vO46.gr = function () {
        vO46.Rq = null;
        vO46.oq.xi();
        vO46.lr();
        if (vO46.go !== 3) {
          vO46.pq();
        }
        vO46.go = 0;
      };
      vO46.Dq = function (p877, p878) {
        vO46.hr(p877, function () {
          if (vO2.unlimitedRespawn) {
            var v1075 = document.getElementById("mm-params-nickname");
            if (v1075) {
              v1075 = v1075.value || "";
            } else {
              v1075 = p878;
            }
            var vLN128 = 128;
            var v1076 = vO7.ha(32, v1075.length);
            var v1080 = new vO5.Fa(7 + v1076 * 2);
            var v1081 = new vO5.Oa(new vO5.Ga(v1080));
            v1081.Pa(129);
            v1081.Qa(2800);
            v1081.Pa(0);
            v1081.Qa(vLN128);
            v1081.Pa(v1076);
            for (var vLN0142 = 0; vLN0142 < v1076; vLN0142++) {
              v1081.Qa(v1075.charCodeAt(vLN0142));
            }
            vO46.ir(v1080);
          } else {
            var v1079 = vO7.ha(2048, p878.length);
            var v1080 = new vO5.Fa(6 + v1079 * 2);
            var v1081 = new vO5.Oa(new vO5.Ga(v1080));
            v1081.Pa(129);
            v1081.Qa(2800);
            v1081.Pa(1);
            v1081.Qa(v1079);
            for (var vLN0143 = 0; vLN0143 < v1079; vLN0143++) {
              v1081.Qa(p878.charCodeAt(vLN0143));
            }
            vO46.ir(v1080);
          }
        });
      };
      vO46.Eq = function (p879, p880, p881) {
        vO46.hr(p879, function () {
          var v1082 = vO7.ha(32, p880.length);
          var v1083 = new vO5.Fa(7 + v1082 * 2);
          var v1084 = new vO5.Oa(new vO5.Ga(v1083));
          v1084.Pa(129);
          v1084.Qa(2800);
          v1084.Pa(0);
          v1084.Qa(p881);
          v1084.Pa(v1082);
          for (var vLN0144 = 0; vLN0144 < v1082; vLN0144++) {
            v1084.Qa(p880.charCodeAt(vLN0144));
          }
          ;
          vO46.ir(v1083);
        });
      };
      vO46.ir = function (p882) {
        try {
          if (vO46.Rq != null && vO46.Rq.readyState === vO8.i.OPEN) {
            vO46.Rq.send(p882);
          }
        } catch (e57) {
          vO46.gr();
        }
      };
      vO46.br = function (p883, p884) {
        var v1085 = ((p884 ? 128 : 0) | vO7.da(p883) / vO6.S * 128 & 127) & 255;
        if (vO46.Sq !== v1085) {
          var v1086 = new vO5.Fa(1);
          new vO5.Oa(new vO5.Ga(v1086)).Pa(v1085);
          vO46.lr();
          vO46.ir(v1086);
          vO46.Sq = v1085;
          vO46.kr();
        }
      };
      vO46.hr = function (p885, p886) {
        let v1087;
        if (!vO9.on && vO14.mobile) {
          v1087 = vF12(vO14.mobile);
        }
        var v1088 = vO46.Rq = new vO8.i(p885);
        v1088.binaryType = "arraybuffer";
        v1088.onopen = function () {
          vF21(vO14, oeo, "open");
          vF24(vO14, oeo, "hidden");
          if (vO46.Rq === v1088) {
                vO46.kr();
                p886();
          }
        };
        v1088.onclose = function () {
          vF21(vO14, oeo, "close");
          vF24(vO14, oeo, "hidden");
          if (!vO9.on && vO14.mobile && v1087) {
            v1087.destroy();
          }
          if (vO46.Rq === v1088) {
                vO46.lr();
                vO46.gr();
          }
        };
        v1088.onerror = function (p887) {
          if (vO46.Rq === v1088) {
                vO46.lr();
                vO46.gr();
          }
          if (!vO9.on && vO14.mobile && v1087) {
            v1087.destroy();
          }
        };
        v1088.onmessage = function (p888) {
          if (vO46.Rq === v1088) {
            vO46.oq.wi(p888.data);
          }
        };
      };
      return vO46;
    };
    v878 = vO5.c.ENV;
    (v879 = {}).main = {
      do: vO7.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: vO7.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: vO7.Ra(),
      fq: 4,
      xq: false,
      bo: true
    };
    v879.miniclip = {
      do: vO7.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: vO7.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: vO7.Ra(),
      fq: 4,
      xq: false,
      bo: false
    };
    if (!(v880 = v879[v878])) {
      v880 = v879.main;
    }
    vO6.co = v880;
    $(function () {
      FastClick.attach(vO5.d.body);
    });
    addEventListener("contextmenu", function (p889) {
      p889.preventDefault();
      p889.stopPropagation();
      return false;
    });
    v881 = false;
    v882 = false;
    vO7.ba("https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54", ((v883 = {}).id = "ze-snippet", v883.async = true, v883), function () {
      v881 = true;
      v882 = false;
      v2("webWidget", "hide");
      v2("webWidget: on", "close", function () {
        v2("webWidget", "hide");
        v882 = false;
      });
    });
    $("#contact-support").click(function () {
      if (v881) {
        if (v882) {
          v2("webWidget", "close");
          v882 = false;
        } else {
          v2("webWidget", "open");
          v2("webWidget", "show");
          v882 = true;
        }
      }
    });
    vO5.c.fbAsyncInit = function () {
      var v1089;
      FB.init(((v1089 = {}).appId = "861926850619051", v1089.cookie = true, v1089.xfbml = true, v1089.status = true, v1089.version = "v14.0", v1089));
    };
    vO7.ba("//connect.facebook.net/" + vO6.H.Q + "/sdk.js", ((v884 = {}).id = "facebook-jssdk", v884.async = true, v884.defer = true, v884.crossorigin = "anonymous", v884));
    vO7.ba("https://apis.google.com/js/platform.js", null, function () {
      gapi.load("auth2", function () {
        var v1090;
        v = gapi.auth2.init(((v1090 = {}).client_id = "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com", v1090));
      });
    });
    vO7.ba("//apis.google.com/js/platform.js");
    (function () {
      try {
        let v1091 = document.getElementsByTagName("head")[0];
        let v1092 = document.createElement("link");
        v1092.rel = "stylesheet";
        v1092.type = "text/css";
        v1092.href = "https://wormx.store/2025/css/gamenew.css";
        v1091.appendChild(v1092);
      } catch (e58) {
        console.error(e58);
      }
    })();
    (ooo = vO7.dq()).Sa();
    oeo = ooo.Xg.Kf.Wg.Ah;
    (function f140() {
      requestAnimationFrame(f140);
      ooo.ug();
    })();
    (function () {
      function f141() {
        var v1093 = v$14.width();
        var v1094 = v$14.height();
        var v1095 = v$15.outerWidth();
        var v1096 = v$15.outerHeight();
        var v1097 = v$16.outerHeight();
        var v1098 = v$17.outerHeight();
        var v1099 = vO7.ha(1, vO7.ha((v1094 - v1098 - v1097) / v1096, v1093 / v1095));
        var v1100 = "translate(-50%, -50%) scale(" + v1099 + ")";
        v$15.css("-webkit-transform", v1100);
        v$15.css("-moz-transform", v1100);
        v$15.css("-ms-transform", v1100);
        v$15.css("-o-transform", v1100);
        v$15.css("transform", v1100);
        ooo.qg();
        vO5.c.scrollTo(0, 1);
      }
      var v$14 = $("body");
      var v$15 = $("#stretch-box");
      var v$16 = $("#markup-header");
      var v$17 = $("#markup-footer");
      f141();
      $(vO5.c).resize(f141);
    })();
    let vF20 = function (p890, p891) {
      var v$18 = $("#saveGame");
      v$18.prop("checked", p890.saveGame);
      v$18.change(function () {
        if (!this.checked) {
          let vConfirm = confirm(localStorage.getItem("ccg_0"));
          $(this).prop("checked", !vConfirm);
          if (!this.checked) {
            vF21(p890, p891, "zero");
          }
        }
        ;
        p890.saveGame = this.checked;
        p891.value2_hs.alpha = this.checked ? 1 : 0;
        p891.value2_kill.alpha = this.checked ? 1 : 0;
        localStorage.setItem("SaveGamewft", this.checked ? JSON.stringify(p890) : null);
      });
    };
    let vF21 = function (p892, p893, p894, p895) {
      let vF23 = function (p896, p897, p898, p899) {
        p893.value1_hs.text = p897;
        p893.value2_hs.text = p898;
        p893.value1_kill.text = p896;
        p893.value2_kill.text = p899;
      };
      if (p894 === "count") {
        p892.kill = (p892.kill || 0) + (p895 ? 0 : 1);
        p892.headshot = (p892.headshot || 0) + (p895 ? 1 : 0);
        p892.s_kill += p895 ? 0 : 1;
        p892.s_headshot += p895 ? 1 : 0;
        vF23(p892.kill, p892.headshot, p892.s_headshot, p892.s_kill);
        if (p895 && wftObjects && wftObjects.soundEnabled) {
          if (p892.headshot % 10 === 0 && p892.headshot > 0) {
            window.playMonsterSound();
          }
        }
      }
      if (p894 === "open") {
        p892.kill = 0;
        p892.headshot = 0;
        p892.s = true;
        p892.st = true;
        v78.texture = v72;
        if (p892.saveGame) {
          vF23(p892.kill, p892.headshot, p892.s_headshot, p892.s_kill);
        }
        vF37();
      }
      if (p894 === "close") {
        p892.s = false;
        v76.texture = v68;
        v77.texture = v70;
        v66 = false;
        vLN55 = 55;
        vLN12 = 1;
        v67 = true;
        clearInterval(v64);
        v64 = null;
        clearInterval(v65);
        v65 = null;
        p892.z = 1;
        p892.fz = true;
        p892.mo1.x = -1;
        p892.mo1.y = -1;
        p892.mo2.x = -1;
        p892.mo2.y = -1;
        const v1101 = document.querySelectorAll("audio");
        v1101.forEach(p900 => {
          p900.pause();
          p900.currentTime = 0;
        });
        if (vO9 && vO9.on && p892.mobile && p892.mo == 6 && p892.j) {
          p892.j.destroy();
        }
        if (p892.saveGame) {
          p892.died = (p892.died || 0) + 1;
        } else {
          vF21(p892, p893, "zero");
        }
      }
      if (p894 === "zero") {
        p892.kill = 0;
        p892.s_kill = 0;
        p892.headshot = 0;
        p892.s_headshot = 0;
        p892.died = 0;
      }
      localStorage.setItem("SaveGamewft", JSON.stringify(p892));
    };
    window.pulseEnabled = true;
    function f142() {
      const v1102 = localStorage.getItem("wftPulseEnabled");
      if (v1102 !== null) {
        window.pulseEnabled = v1102 === "true";
      }
    }
    function f143() {
      localStorage.setItem("wftPulseEnabled", window.pulseEnabled.toString());
    }
    function f144() {
      f142();
      if (window._pulseFunctionInstalled) {
        return;
      }
      window._pulseFunctionInstalled = true;
      function f145() {
        if (!window.pulseEnabled) {
          ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(p901 => {
            const v1103 = globalThis.config?.[p901];
            if (v1103 && v1103._pulseStarted) {
              f147(v1103);
            }
          });
          return;
        }
        ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(p902 => {
          const v1104 = globalThis.config?.[p902];
          if (!v1104 || !v1104.text) {
            return;
          }
          const v1105 = v1104.style && v1104.style.fill === "#f9cc0b";
          const v1106 = v1104.style && v1104.style.fill === "#fdbf5f";
          if (v1105 || v1106) {
            const vParseInt8 = parseInt(v1104.text);
            if (!isNaN(vParseInt8) && vParseInt8 > 0 && vParseInt8 <= 5) {
              f146(v1104);
            } else {
              f147(v1104);
            }
          } else {
            f147(v1104);
          }
        });
      }
      function f146(p903) {
        if (p903._pulseStarted) {
          return;
        }
        p903._originalColor = p903.style.fill;
        p903._originalFontSize = p903.style.fontSize || "16px";
        p903._pulseStarted = true;
        p903._lastPulseTime = 0;
        p903._pulseInterval = setInterval(() => {
          const v1107 = Date.now();
          if (v1107 - p903._lastPulseTime > 800) {
            p903._lastPulseTime = v1107;
            p903.style.fill = "#FF0000";
            p903.style.fontSize = "32px";
            p903.style.dropShadow = true;
            p903.style.dropShadowColor = "#FF0000";
            p903.style.dropShadowDistance = 5;
            p903.style.dropShadowBlur = 6;
            setTimeout(() => {
              if (!p903 || !p903.style) {
                return;
              }
              p903.style.fill = p903._originalColor;
              p903.style.fontSize = p903._originalFontSize;
              p903.style.dropShadow = false;
            }, 400);
          }
        }, 100);
      }
      function f147(p904) {
        if (!p904 || !p904._pulseStarted) {
          return;
        }
        clearInterval(p904._pulseInterval);
        p904._pulseInterval = null;
        p904._pulseStarted = false;
        if (p904._originalColor && p904.style) {
          p904.style.fill = p904._originalColor;
        }
        if (p904._originalFontSize && p904.style) {
          p904.style.fontSize = p904._originalFontSize;
        }
        if (p904.style) {
          p904.style.dropShadow = false;
        }
      }
      window.addEventListener("beforeunload", function () {
        ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(p905 => {
          const v1108 = globalThis.config?.[p905];
          if (v1108 && v1108._pulseStarted) {
            clearInterval(v1108._pulseInterval);
          }
        });
      });
      setInterval(f145, 200);
    }
    let vF24 = function (p906, p907, p908, p909, p910, p911) {
      var v1109;
      var v1110;
      var v1111;
      globalThis.config = p907;
      f144();
      let vF25 = function (p912, p913, p914, p915, p916, p917, p918) {
        if (p907.pk0.text != p912) {
          p907.pk0.text = p912;
        }
        if (p907.pk1.text != p913) {
          p907.pk1.text = p913;
        }
        if (p907.pk2.text != p914) {
          p907.pk2.text = p914;
        }
        if (p907.pk3.text != p915) {
          p907.pk3.text = p915;
        }
        if (p907.pk4.text != p916) {
          p907.pk4.text = p916;
        }
        if (p907.pk5.text != p917) {
          p907.pk5.text = p917;
        }
        if (p907.pk6.text != p918) {
          p907.pk6.text = p918;
        }
      };
      if (p908 === "show") {
        v1109 = p909;
        v1110 = p910;
        v1111 = p911;
        if (v1109 == 0) {
          if (v1110 == 0 || v1110 == 1 || v1110 == 2 || v1110 == 6) {
            p906.pk = 30 - v1111 * 100 * (30 / 99);
            if (p906.pk <= 0.1) {
              p906.pk0 = "";
            } else {
              p906.pk0 = p906.pk.toFixed();
            }
            if (v1110 == 0 && p907.pk0.style.fill != "#f9cc0b") {
              p907.pk0.style.fill = "#f9cc0b";
            }
            if (v1110 == 1 && p907.pk0.style.fill != "#fdbf5f") {
              p907.pk0.style.fill = "#fdbf5f";
            }
            if (v1110 == 2 && p907.pk0.style.fill != "#5dade6") {
              p907.pk0.style.fill = "#5dade6";
            }
            if (v1110 == 6 && p907.pk0.style.fill != "#e74a94") {
              p907.pk0.style.fill = "#e74a94";
            }
          }
          if (v1110 == 3) {
            p906.pk = 80 - v1111 * 100 * (80 / 99);
            if (p906.pk <= 0.1) {
              p906.pk0 = "";
            } else {
              p906.pk0 = p906.pk.toFixed();
            }
            if (p907.pk0.style.fill != "#e03e42") {
              p907.pk0.style.fill = "#e03e42";
            }
          }
          if (v1110 == 4) {
            p906.pk = 40 - v1111 * 100 * (40 / 99);
            if (p906.pk <= 0.1) {
              p906.pk0 = "";
            } else {
              p906.pk0 = p906.pk.toFixed();
            }
            if (p907.pk0.style.fill != "#5dade6") {
              p907.pk0.style.fill = "#5dade6";
            }
          }
          if (v1110 == 5) {
            p906.pk = 20 - v1111 * 100 * (20 / 99);
            if (p906.pk <= 0.1) {
              p906.pk0 = "";
            } else {
              p906.pk0 = p906.pk.toFixed();
            }
            if (p907.pk0.style.fill != "#d4db19") {
              p907.pk0.style.fill = "#d4db19";
            }
          }
          p906.pk1 = "";
          p906.pk2 = "";
          p906.pk3 = "";
          p906.pk4 = "";
          p906.pk5 = "";
          p906.pk6 = "";
        }
        if (v1109 == 40) {
          if (v1110 == 0 || v1110 == 1 || v1110 == 2 || v1110 == 6) {
            p906.pk = 30 - v1111 * 100 * (30 / 99);
            if (p906.pk <= 0.1) {
              p906.pk1 = "";
            } else {
              p906.pk1 = p906.pk.toFixed();
            }
            if (v1110 == 0 && p907.pk1.style.fill != "#f9cc0b") {
              p907.pk1.style.fill = "#f9cc0b";
            }
            if (v1110 == 1 && p907.pk1.style.fill != "#fdbf5f") {
              p907.pk1.style.fill = "#fdbf5f";
            }
            if (v1110 == 2 && p907.pk1.style.fill != "#5dade6") {
              p907.pk1.style.fill = "#5dade6";
            }
            if (v1110 == 6 && p907.pk1.style.fill != "#e74a94") {
              p907.pk1.style.fill = "#e74a94";
            }
          }
          if (v1110 == 3) {
            p906.pk = 80 - v1111 * 100 * (80 / 99);
            if (p906.pk <= 0.1) {
              p906.pk1 = "";
            } else {
              p906.pk1 = p906.pk.toFixed();
            }
            if (p907.pk1.style.fill != "#e03e42") {
              p907.pk1.style.fill = "#e03e42";
            }
          }
          if (v1110 == 4) {
            p906.pk = 40 - v1111 * 100 * (40 / 99);
            if (p906.pk <= 0.1) {
              p906.pk1 = "";
            } else {
              p906.pk1 = p906.pk.toFixed();
            }
            if (p907.pk1.style.fill != "#5dade6") {
              p907.pk1.style.fill = "#5dade6";
            }
          }
          if (v1110 == 5) {
            p906.pk = 20 - v1111 * 100 * (20 / 99);
            if (p906.pk <= 0.1) {
              p906.pk1 = "";
            } else {
              p906.pk1 = p906.pk.toFixed();
            }
            if (p907.pk1.style.fill != "#d4db19") {
              p907.pk1.style.fill = "#d4db19";
            }
          }
          p906.pk2 = "";
          p906.pk3 = "";
          p906.pk4 = "";
          p906.pk5 = "";
          p906.pk6 = "";
        }
        if (v1109 == 80) {
          if (v1110 == 0 || v1110 == 1 || v1110 == 2 || v1110 == 6) {
            p906.pk = 30 - v1111 * 100 * (30 / 99);
            if (p906.pk <= 0.1) {
              p906.pk2 = "";
            } else {
              p906.pk2 = p906.pk.toFixed();
            }
            if (v1110 == 0 && p907.pk2.style.fill != "#f9cc0b") {
              p907.pk2.style.fill = "#f9cc0b";
            }
            if (v1110 == 1 && p907.pk2.style.fill != "#fdbf5f") {
              p907.pk2.style.fill = "#fdbf5f";
            }
            if (v1110 == 2 && p907.pk2.style.fill != "#5dade6") {
              p907.pk2.style.fill = "#5dade6";
            }
            if (v1110 == 6 && p907.pk2.style.fill != "#e74a94") {
              p907.pk2.style.fill = "#e74a94";
            }
          }
          if (v1110 == 3) {
            p906.pk = 80 - v1111 * 100 * (80 / 99);
            if (p906.pk <= 0.1) {
              p906.pk2 = "";
            } else {
              p906.pk2 = p906.pk.toFixed();
            }
            if (p907.pk2.style.fill != "#e03e42") {
              p907.pk2.style.fill = "#e03e42";
            }
          }
          if (v1110 == 4) {
            p906.pk = 40 - v1111 * 100 * (40 / 99);
            if (p906.pk <= 0.1) {
              p906.pk2 = "";
            } else {
              p906.pk2 = p906.pk.toFixed();
            }
            if (p907.pk2.style.fill != "#5dade6") {
              p907.pk2.style.fill = "#5dade6";
            }
          }
          if (v1110 == 5) {
            p906.pk = 20 - v1111 * 100 * (20 / 99);
            if (p906.pk <= 0.1) {
              p906.pk2 = "";
            } else {
              p906.pk2 = p906.pk.toFixed();
            }
            if (p907.pk2.style.fill != "#d4db19") {
              p907.pk2.style.fill = "#d4db19";
            }
          }
          p906.pk3 = "";
          p906.pk4 = "";
          p906.pk5 = "";
          p906.pk6 = "";
        }
        if (v1109 == 120) {
          if (v1110 == 0 || v1110 == 1 || v1110 == 2 || v1110 == 6) {
            p906.pk = 30 - v1111 * 100 * (30 / 99);
            if (p906.pk <= 0.1) {
              p906.pk3 = "";
            } else {
              p906.pk3 = p906.pk.toFixed();
            }
            if (v1110 == 0 && p907.pk3.style.fill != "#f9cc0b") {
              p907.pk3.style.fill = "#f9cc0b";
            }
            if (v1110 == 1 && p907.pk3.style.fill != "#fdbf5f") {
              p907.pk3.style.fill = "#fdbf5f";
            }
            if (v1110 == 2 && p907.pk3.style.fill != "#5dade6") {
              p907.pk3.style.fill = "#5dade6";
            }
            if (v1110 == 6 && p907.pk3.style.fill != "#e74a94") {
              p907.pk3.style.fill = "#e74a94";
            }
          }
          if (v1110 == 3) {
            p906.pk = 80 - v1111 * 100 * (80 / 99);
            if (p906.pk <= 0.1) {
              p906.pk3 = "";
            } else {
              p906.pk3 = p906.pk.toFixed();
            }
            if (p907.pk3.style.fill != "#e03e42") {
              p907.pk3.style.fill = "#e03e42";
            }
          }
          if (v1110 == 4) {
            p906.pk = 40 - v1111 * 100 * (40 / 99);
            if (p906.pk <= 0.1) {
              p906.pk3 = "";
            } else {
              p906.pk3 = p906.pk.toFixed();
            }
            if (p907.pk3.style.fill != "#5dade6") {
              p907.pk3.style.fill = "#5dade6";
            }
          }
          if (v1110 == 5) {
            p906.pk = 20 - v1111 * 100 * (20 / 99);
            if (p906.pk <= 0.1) {
              p906.pk3 = "";
            } else {
              p906.pk3 = p906.pk.toFixed();
            }
            if (p907.pk3.style.fill != "#d4db19") {
              p907.pk3.style.fill = "#d4db19";
            }
          }
          p906.pk4 = "";
          p906.pk5 = "";
          p906.pk6 = "";
        }
        if (v1109 == 160) {
          if (v1110 == 0 || v1110 == 1 || v1110 == 2 || v1110 == 6) {
            p906.pk = 30 - v1111 * 100 * (30 / 99);
            if (p906.pk <= 0.1) {
              p906.pk4 = "";
            } else {
              p906.pk4 = p906.pk.toFixed();
            }
            if (v1110 == 0 && p907.pk4.style.fill != "#f9cc0b") {
              p907.pk4.style.fill = "#f9cc0b";
            }
            if (v1110 == 1 && p907.pk4.style.fill != "#fdbf5f") {
              p907.pk4.style.fill = "#fdbf5f";
            }
            if (v1110 == 2 && p907.pk4.style.fill != "#5dade6") {
              p907.pk4.style.fill = "#5dade6";
            }
            if (v1110 == 6 && p907.pk4.style.fill != "#e74a94") {
              p907.pk4.style.fill = "#e74a94";
            }
          }
          if (v1110 == 3) {
            p906.pk = 80 - v1111 * 100 * (80 / 99);
            if (p906.pk <= 0.1) {
              p906.pk4 = "";
            } else {
              p906.pk4 = p906.pk.toFixed();
            }
            if (p907.pk4.style.fill != "#e03e42") {
              p907.pk4.style.fill = "#e03e42";
            }
          }
          if (v1110 == 4) {
            p906.pk = 40 - v1111 * 100 * (40 / 99);
            if (p906.pk <= 0.1) {
              p906.pk4 = "";
            } else {
              p906.pk4 = p906.pk.toFixed();
            }
            if (p907.pk4.style.fill != "#5dade6") {
              p907.pk4.style.fill = "#5dade6";
            }
          }
          if (v1110 == 5) {
            p906.pk = 20 - v1111 * 100 * (20 / 99);
            if (p906.pk <= 0.1) {
              p906.pk4 = "";
            } else {
              p906.pk4 = p906.pk.toFixed();
            }
            if (p907.pk4.style.fill != "#d4db19") {
              p907.pk4.style.fill = "#d4db19";
            }
          }
          p906.pk5 = "";
          p906.pk6 = "";
        }
        if (v1109 == 200) {
          if (v1110 == 0 || v1110 == 1 || v1110 == 2 || v1110 == 6) {
            p906.pk = 30 - v1111 * 100 * (30 / 99);
            if (p906.pk <= 0.1) {
              p906.pk5 = "";
            } else {
              p906.pk5 = p906.pk.toFixed();
            }
            if (v1110 == 0 && p907.pk5.style.fill != "#f9cc0b") {
              p907.pk5.style.fill = "#f9cc0b";
            }
            if (v1110 == 1 && p907.pk5.style.fill != "#fdbf5f") {
              p907.pk5.style.fill = "#fdbf5f";
            }
            if (v1110 == 2 && p907.pk5.style.fill != "#5dade6") {
              p907.pk5.style.fill = "#5dade6";
            }
            if (v1110 == 6 && p907.pk5.style.fill != "#e74a94") {
              p907.pk5.style.fill = "#e74a94";
            }
          }
          if (v1110 == 3) {
            p906.pk = 80 - v1111 * 100 * (80 / 99);
            if (p906.pk <= 0.1) {
              p906.pk5 = "";
            } else {
              p906.pk5 = p906.pk.toFixed();
            }
            if (p907.pk5.style.fill != "#e03e42") {
              p907.pk5.style.fill = "#e03e42";
            }
          }
          if (v1110 == 4) {
            p906.pk = 40 - v1111 * 100 * (40 / 99);
            if (p906.pk <= 0.1) {
              p906.pk5 = "";
            } else {
              p906.pk5 = p906.pk.toFixed();
            }
            if (p907.pk5.style.fill != "#5dade6") {
              p907.pk5.style.fill = "#5dade6";
            }
          }
          if (v1110 == 5) {
            p906.pk = 20 - v1111 * 100 * (20 / 99);
            if (p906.pk <= 0.1) {
              p906.pk5 = "";
            } else {
              p906.pk5 = p906.pk.toFixed();
            }
            if (p907.pk5.style.fill != "#d4db19") {
              p907.pk5.style.fill = "#d4db19";
            }
          }
          p906.pk6 = "";
        }
        if (v1109 == 240) {
          if (v1110 == 0 || v1110 == 1 || v1110 == 2 || v1110 == 6) {
            p906.pk = 30 - v1111 * 100 * (30 / 99);
            if (p906.pk <= 0.1) {
              p906.pk6 = "";
            } else {
              p906.pk6 = p906.pk.toFixed();
            }
            if (v1110 == 0 && p907.pk6.style.fill != "#f9cc0b") {
              p907.pk6.style.fill = "#f9cc0b";
            }
            if (v1110 == 1 && p907.pk6.style.fill != "#fdbf5f") {
              p907.pk6.style.fill = "#fdbf5f";
            }
            if (v1110 == 2 && p907.pk6.style.fill != "#5dade6") {
              p907.pk6.style.fill = "#5dade6";
            }
            if (v1110 == 6 && p907.pk6.style.fill != "#e74a94") {
              p907.pk6.style.fill = "#e74a94";
            }
          }
          if (v1110 == 3) {
            p906.pk = 80 - v1111 * 100 * (80 / 99);
            if (p906.pk <= 0.1) {
              p906.pk6 = "";
            } else {
              p906.pk6 = p906.pk.toFixed();
            }
            if (p907.pk6.style.fill != "#e03e42") {
              p907.pk6.style.fill = "#e03e42";
            }
          }
          if (v1110 == 4) {
            p906.pk = 40 - v1111 * 100 * (40 / 99);
            if (p906.pk <= 0.1) {
              p906.pk6 = "";
            } else {
              p906.pk6 = p906.pk.toFixed();
            }
            if (p907.pk6.style.fill != "#5dade6") {
              p907.pk6.style.fill = "#5dade6";
            }
          }
          if (v1110 == 5) {
            p906.pk = 20 - v1111 * 100 * (20 / 99);
            if (p906.pk <= 0.1) {
              p906.pk6 = "";
            } else {
              p906.pk6 = p906.pk.toFixed();
            }
            if (p907.pk6.style.fill != "#d4db19") {
              p907.pk6.style.fill = "#d4db19";
            }
          }
        }
        vF25(p906.pk0, p906.pk1, p906.pk2, p906.pk3, p906.pk4, p906.pk5, p906.pk6);
      }
      if (p908 === "hidden") {
        p906.pk0 = "";
        p906.pk1 = "";
        p906.pk2 = "";
        p906.pk3 = "";
        p906.pk4 = "";
        p906.pk5 = "";
        p906.pk6 = "";
        vF25(p906.pk0, p906.pk1, p906.pk2, p906.pk3, p906.pk4, p906.pk5, p906.pk6);
      }
      localStorage.setItem("SaveGamewft", JSON.stringify(p906));
    };
    let vF27 = function () {
      clearInterval(v64);
      v64 = null;
      v64 = setInterval(function () {
        var v1112 = vO9.eie.fo;
        let v1113 = Math.PI;
        var v1114 = v1112 + v1113 / 360 * 9;
        if (v1114 >= v1113) {
          v1114 = -v1112;
        }
        vO9.eie.fo = v1114;
      }, 55);
    };
    let vF28 = function () {
      if (vLN12 >= 40) {
        if (v67) {
          vLN55 += 25;
        } else {
          vLN55 -= 200;
        }
        vLN12 = 1;
      }
    };
    let vF29 = function () {
      if (vLN55 == 55 && vLN12 >= 40) {
        vLN55 += 25;
        vLN12 = 1;
        v67 = true;
      }
      if (vLN55 == 80) {
        vF28();
      }
      if (vLN55 == 105) {
        vF28();
      }
      if (vLN55 == 130) {
        vF28();
      }
      if (vLN55 == 155) {
        vF28();
      }
      if (vLN55 == 180) {
        vF28();
      }
      if (vLN55 == 205) {
        vF28();
      }
      if (vLN55 == 230) {
        vF28();
      }
      if (vLN55 == 255) {
        vF28();
      }
      if (vLN55 == 280) {
        vF28();
      }
      if (vLN55 == 305) {
        vF28();
      }
      if (vLN55 == 330) {
        vF28();
      }
      if (vLN55 == 355) {
        vF28();
      }
      if (vLN55 == 380) {
        vF28();
      }
      if (vLN55 == 405) {
        vF28();
      }
      if (vLN55 == 430) {
        vF28();
      }
      if (vLN55 == 455 && vLN12 >= 40) {
        vLN55 -= 200;
        vLN12 = 1;
        v67 = false;
      }
    };
    let vF30 = function () {
      clearInterval(v64);
      v64 = null;
      {
        var v1115 = vO9.eie.fo;
        let v1116 = Math.PI;
        var v1117 = v1115 + v1116 / 360 * 9;
        if (v1117 >= v1116) {
          v1117 = -v1115;
        }
        vO9.eie.fo = v1117;
        vLN12 += 1;
        vF29();
        if (v66) {
          v64 = setInterval(vF30, vLN55);
        }
      }
    };
    let vF31 = function () {
      clearInterval(v65);
      v65 = null;
      if (vO9.on) {
        var vBtoa13 = btoa(vO14.c_1);
        if (vO14.ig != -1 && btoa(vBtoa13) == vO14.d_1) {
          var vOoo = ooo;
          var v1118 = vO14.sg.indexOf(vO9.n.ni);
          var vBtoa14 = btoa(vO14.c_2);
          if (btoa(vBtoa14) == vO14.d_2) {
            vO9.uj.hd(vOoo.Mh.Qh.eh, vOoo.ud.Cc().Ub(vO9.n.mi), vOoo.ud.Cc().Tb(vO14.ig), vOoo.ud.Cc().Vb(vO9.n.Vi), vOoo.ud.Cc().Wb(vO9.n.Wi), vOoo.ud.Cc().Xb(vO9.n.Xi), vOoo.ud.Cc().Yb(vO9.n.Yi), "#ffffff");
          }
          if (vO14.gg[v1118].r) {
            if (vO14.re) {
              vO14.ig = vO14.ig - 1;
              if (vO14.ig < vO14.gg[v1118].s) {
                vO14.ig = vO14.gg[v1118].s + 1;
                vO14.re = false;
              }
            } else {
              vO14.ig = vO14.ig + 1;
              if (vO14.ig > vO14.gg[v1118].e) {
                vO14.ig = vO14.gg[v1118].e - 1;
                vO14.re = true;
              }
            }
          } else {
            vO14.ig = vO14.ig + 1;
            if (vO14.ig > vO14.gg[v1118].e) {
              vO14.ig = vO14.gg[v1118].s;
            }
          }
          var vBtoa15 = btoa(vO14.c_3);
          if (btoa(vBtoa15) == vO14.d_3) {
            v65 = setInterval(vF31, vO14.gg[v1118].t);
          }
        }
      }
    };
    let vF32 = function () {
      v66 = true;
      vLN55 = 55;
      vLN12 = 1;
      v67 = true;
      vF30();
    };
    let vF33 = function () {
      if (v76.texture == v68) {
        v76.texture = v69;
        v76.alpha = 1;
        v77.texture = v70;
        v77.alpha = 0.25;
        v66 = false;
        vLN55 = 55;
        vLN12 = 1;
        v67 = true;
        clearInterval(v64);
        v64 = null;
        vF27();
      } else {
        v76.texture = v68;
        v76.alpha = 0.25;
        clearInterval(v64);
        v64 = null;
      }
    };
    let vF34 = function () {
      if (v77.texture == v70) {
        v77.texture = v71;
        v77.alpha = 1;
        v76.texture = v68;
        v76.alpha = 0.25;
        clearInterval(v64);
        v64 = null;
        v66 = true;
        vLN55 = 55;
        vLN12 = 1;
        v67 = true;
        vF30();
      } else {
        v77.texture = v70;
        v77.alpha = 0.25;
        v66 = false;
        vLN55 = 55;
        vLN12 = 1;
        v67 = true;
        clearInterval(v64);
        v64 = null;
      }
    };
    let vF35 = function () {
      if (v78.texture == v72) {
        v78.texture = v73;
        v78.alpha = 1;
        if (vO14.h) {
          vO14.z = 1.6;
        } else {
          vO14.z = 1.2;
        }
      } else {
        v78.texture = v72;
        v78.alpha = 0.25;
        vO14.z = 1;
      }
    };
    let vF36 = function () {
      if (vO9.on && vO14.mobile) {
        var v1119 = v82.offsetWidth;
        var v1120 = v82.offsetHeight;
        var v1121 = ooo.Xg.Kf.Wg.Ah;
        if (vO14.mo == 1) {
          vO14.mo = 6;
          vO14.j = vF12(vO14.mobile);
          v1121.img_1.visible = false;
          v1121.img_p_1.visible = false;
          v1121.img_4.visible = true;
        } else if (vO14.mo == 6) {
          vO14.mo = 4;
          v1121.img_o_4.visible = true;
          v1121.img_o_4.x = 50;
          v1121.img_o_4.y = -220 + v1120;
          v1121.img_p_2.visible = true;
          v1121.img_p_2.x = -68 + v1119 * 0.5;
          v1121.img_p_2.y = -68 + v1120 * 0.5;
          v1121.img_f.visible = true;
          v1121.img_f.x = -250 + v1119;
          v1121.img_f.y = -200 + v1120;
          v1121.img_pf_1.visible = false;
          if (vO14.j) {
            vO14.j.destroy();
          }
        } else if (vO14.mo == 4) {
          vO14.mo = 5;
          v1121.img_o_4.x = -270 + v1119;
          v1121.img_o_4.y = -220 + v1120;
          v1121.img_p_2.x = -68 + v1119 * 0.5;
          v1121.img_p_2.y = -68 + v1120 * 0.5;
          v1121.img_f.x = 50;
          v1121.img_f.y = -200 + v1120;
        } else if (vO14.mo == 5) {
          vO14.mo = 2;
          v1121.img_4.visible = false;
          v1121.img_o_4.visible = false;
          v1121.img_2.visible = true;
          v1121.img_o_2.visible = true;
          v1121.img_o_2.x = 50;
          v1121.img_o_2.y = -220 + v1120;
          v1121.img_i_2.visible = true;
          v1121.img_i_2.x = 75;
          v1121.img_i_2.y = -195 + v1120;
          v1121.img_p_2.visible = true;
          v1121.img_p_2.x = -68 + v1119 * 0.5;
          v1121.img_p_2.y = -68 + v1120 * 0.5;
          v1121.img_f.visible = false;
          v1121.img_pf_1.visible = false;
        } else if (vO14.mo == 2) {
          vO14.mo = 3;
          v1121.img_2.visible = false;
          v1121.img_o_2.visible = false;
          v1121.img_i_2.visible = false;
          v1121.img_p_2.visible = false;
          v1121.img_3.visible = true;
          v1121.img_o_3.visible = true;
          v1121.img_o_3.x = 50;
          v1121.img_o_3.y = -220 + v1120;
          v1121.img_i_3.visible = true;
          v1121.img_i_3.x = 75;
          v1121.img_i_3.y = -195 + v1120;
          v1121.img_p_3.visible = true;
          v1121.img_p_3.x = -68 + v1119 * 0.5;
          v1121.img_p_3.y = -68 + v1120 * 0.5;
          v1121.img_pf_1.visible = false;
        } else if (vO14.mo == 3) {
          vO14.mo = 1;
          v1121.img_1.visible = true;
          v1121.img_p_1.visible = true;
          v1121.img_3.visible = false;
          v1121.img_o_3.visible = false;
          v1121.img_i_3.visible = false;
          v1121.img_p_3.visible = false;
          v1121.img_f.visible = false;
          v1121.img_pf_1.visible = false;
        }
      }
    };
    let vF37 = function () {
      if (vO9.on && vO14.mobile) {
        var v1122 = ooo.Xg.Kf.Wg.Ah;
        var v1123 = v82.offsetHeight * 0.5;
        var v1124 = v82.offsetWidth * 0.5;
        v1122.img_1.x = -100 + v1124;
        v1122.img_1.y = -60;
        v1122.img_2.x = -100 + v1124;
        v1122.img_2.y = -60;
        v1122.img_3.x = -100 + v1124;
        v1122.img_3.y = -60;
        v1122.img_4.x = -100 + v1124;
        v1122.img_4.y = -60;
        if (vO14.mo == 1) {
          v1122.img_p_1.alpha = 0.25;
          v1122.img_p_1.x = v1124 - 68;
          v1122.img_p_1.y = v1123 - 68;
        }
        if (vO14.mo == 2) {
          v1122.img_o_2.alpha = 0.25;
          v1122.img_o_2.x = 50;
          v1122.img_o_2.y = -220 + v1123 * 2;
          v1122.img_i_2.alpha = 0.25;
          v1122.img_i_2.x = 75;
          v1122.img_i_2.y = -195 + v1123 * 2;
          v1122.img_p_2.alpha = 0.25;
          v1122.img_p_2.x = v1124 - 68;
          v1122.img_p_2.y = v1123 - 68;
        }
        if (vO14.mo == 3) {
          v1122.img_o_3.alpha = 0.25;
          v1122.img_o_3.x = -50;
          v1122.img_o_3.y = -220 + v1123 * 2;
          v1122.img_i_3.alpha = 0.25;
          v1122.img_i_3.x = 75;
          v1122.img_i_3.y = -195 + v1123 * 2;
          v1122.img_p_3.alpha = 0.25;
          v1122.img_p_3.x = v1124 - 68;
          v1122.img_p_3.y = v1123 - 68;
        }
        if (vO14.mo == 4) {
          v1122.img_f.visible = true;
          v1122.img_f.x = -250 + v1124 * 2;
          v1122.img_f.y = -200 + v1123 * 2;
          v1122.img_o_4.x = 50;
          v1122.img_o_4.y = -220 + v1123 * 2;
          v1122.img_p_2.alpha = 0.25;
          v1122.img_p_2.x = v1124 - 68;
          v1122.img_p_2.y = v1123 - 68;
        }
        if (vO14.mo == 5) {
          v1122.img_f.visible = true;
          v1122.img_f.x = 50;
          v1122.img_f.y = -200 + v1123 * 2;
          v1122.img_o_4.x = -270 + v1124 * 2;
          v1122.img_o_4.y = -220 + v1123 * 2;
          v1122.img_p_2.alpha = 0.25;
          v1122.img_p_2.x = v1124 - 68;
          v1122.img_p_2.y = v1123 - 68;
        }
        if (vO14.mo == 6) {
          vO14.j = vF12(vO14.mobile);
        }
      }
    };
    let vF38 = function (p919, p920) {
      var v1125 = v82.offsetWidth;
      var v1126 = v82.offsetHeight;
      if (vO14.hz && vO14.mobile) {
        if (vO9.on) {
          if (vO14.tt) {
            if (p919 > v1125 - 30 && p919 < v1125 - 5 && p920 < v1126 / 2 - 33 && p920 > v1126 / 2 - 58) {
              vF33();
            }
            if (p919 > v1125 - 30 && p919 < v1125 - 5 && p920 < v1126 / 2 - 3 && p920 > v1126 / 2 - 28) {
              vF34();
            }
            if (p919 > v1125 - 30 && p919 < v1125 - 5 && p920 < v1126 / 2 + 28 && p920 > v1126 / 2 + 3 && vO14.z >= 0.2) {
              vO14.z = vO14.z - 0.1;
            }
            if (p919 > v1125 - 30 && p919 < v1125 - 5 && p920 < v1126 / 2 + 58 && p920 > v1126 / 2 + 33) {
              if (vO14.fz) {
                vO14.z = 1.6;
                vO14.fz = false;
              } else if (vO14.z <= 25) {
                vO14.z = vO14.z + 0.1;
              }
            }
          } else {
            if (p919 > v1125 - 332 && p919 < v1125 - 307 && p920 < 37 && p920 > 12) {
              vF33();
            }
            if (p919 > v1125 - 302 && p919 < v1125 - 277 && p920 < 37 && p920 > 12) {
              vF34();
            }
            if (p919 > v1125 - 272 && p919 < v1125 - 247 && p920 < 37 && p920 > 12 && vO14.z >= 0.2) {
              vO14.z = vO14.z - 0.1;
            }
            if (p919 > v1125 - 242 && p919 < v1125 - 217 && p920 < 37 && p920 > 12) {
              if (vO14.fz) {
                vO14.z = 1.6;
                vO14.fz = false;
              } else if (vO14.z <= 25) {
                vO14.z = vO14.z + 0.1;
              }
            }
          }
        }
      } else if (vO9.on) {
        if (p919 > v1125 - 302 && p919 < v1125 - 277 && p920 < 37 && p920 > 12) {
          vF33();
        }
        if (p919 > v1125 - 272 && p919 < v1125 - 247 && p920 < 37 && p920 > 12) {
          vF34();
        }
        if (p919 > v1125 - 242 && p919 < v1125 - 217 && p920 < 37 && p920 > 12) {
          vF35();
        }
      }
      if (vO9.on && p919 >= 0 && p920 >= 0 && (v1125 = Math.sqrt((p919 - v1125 * 0.5) * (p919 - v1125 * 0.5) + p920 * p920)) <= 40) {
        vF36();
      }
    };
    let vF39 = function (p921) {
      var v1127 = document.getElementById("id_customer");
      if (v1127 != null) {
        var vO47 = {
          id_wormate: v1127.value,
          names: p921
        };
        fetch("https://wormup.in/check", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(vO47)
        });
      }
    };
    let vF40 = function (p922) {
      var vO48 = {
        ao: p922
      };
      fetch("https://wormup.in/check", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(vO48)
      });
    };
    let vF41 = function (p923) {
      var vA17 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      var vA18 = ["SG", "P", "DE", "LT", "US", "BR", "UAE", "FR", "JP", "AU", "IN"];
      var vLS9 = "?";
      for (var vLN0145 = 0; vLN0145 <= 10; vLN0145++) {
        let v1128 = vO14.se[vA17[vLN0145]].indexOf(p923);
        if (v1128 == -1) ;else {
          vLS9 = vA18[vLN0145] + "_" + (v1128 + 1);
          break;
        }
      }
      ;
      return vLS9;
    };
    let vF42 = function (p924) {
      for (var v1129 = p924.length, vLN0146 = 0, vA19 = [], vLN0147 = 0; vLN0147 < v1129; vLN0147 += 4) {
        vA19[vLN0146] = p924.substr(vLN0147, 4);
        vLN0146 += 1;
      }
      ;
      return vA19;
    };
    let vF43 = function (p925) {
      var v1130 = p925.split(".");
      var vA20 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      for (var vLN0148 = 0; vLN0148 <= 10; vLN0148++) {
        if (v1130[vLN0148] != "0") {
          vO14.se[vA20[vLN0148]] = vF42(v1130[vLN0148]);
        }
      }
    };
    let vF44 = async function (p926, p927) {
      var v1131 = document.getElementById("epx_time");
      if (v1131 != null) {
        v1131.remove();
      }
      var v1132 = document.getElementById("btnFullScreen");
      if (v1132 != null) {
        v1132.remove();
      }
      var v1255 = document.getElementById("btn_in_t");
      if (v1255 != null) {
        v1255.remove();
      }
      var v1134 = document.getElementById("btnRePlay");
      if (v1134 != null) {
        v1134.remove();
      }
      var v1135 = document.getElementById("modal_wft");
      if (v1135 != null) {
        v1135.remove();
      }
      var v1136 = document.getElementById("btn_crsw");
      if (v1136 != null) {
        v1136.remove();
      }
      var v1137 = document.getElementById("op_wft");
      if (v1137 != null) {
        v1137.remove();
      }
      var vO49 = {
        id_wormate: p926.userId,
        name: p926.username
      };
      let v1138 = await fetch("https://wormup.in/check", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(vO49)
      }).then(async function (p928) {
        return await p928.json();
      }).catch(function () {
        $(".description-text").html(localStorage.getItem("ccg_1"));
      });
      try {
        const vO50 = {
          streamer: "UP",
          extension: "wormup",
          game: "Wormate.io",
          note: "Please don't copy my code",
          programmer: "TeamUP",
          e: "not_empty",
          z: "c",
          s11: "0.0.0.0.0.0.0.0.0.0.0",
          sw: 1,
          tt: 0,
          vs: 140,
          dsg: [],
          propertyList: [{
            id: 369,
            type: "SKIN"
          }, {
            id: 738,
            type: "SKIN"
          }, {
            id: 748,
            type: "SKIN"
          }, {
            id: 379,
            type: "SKIN"
          }, {
            id: 535,
            type: "SKIN"
          }, {
            id: 592,
            type: "SKIN"
          }, {
            id: 370,
            type: "SKIN"
          }, {
            id: 375,
            type: "SKIN"
          }, {
            id: 382,
            type: "SKIN"
          }, {
            id: 387,
            type: "SKIN"
          }, {
            id: 388,
            type: "SKIN"
          }, {
            id: 390,
            type: "SKIN"
          }, {
            id: 393,
            type: "SKIN"
          }, {
            id: 394,
            type: "SKIN"
          }, {
            id: 395,
            type: "SKIN"
          }, {
            id: 396,
            type: "SKIN"
          }, {
            id: 397,
            type: "SKIN"
          }, {
            id: 400,
            type: "SKIN"
          }, {
            id: 401,
            type: "SKIN"
          }, {
            id: 402,
            type: "SKIN"
          }, {
            id: 403,
            type: "SKIN"
          }, {
            id: 404,
            type: "SKIN"
          }, {
            id: 405,
            type: "SKIN"
          }, {
            id: 406,
            type: "SKIN"
          }, {
            id: 407,
            type: "SKIN"
          }, {
            id: 408,
            type: "SKIN"
          }, {
            id: 409,
            type: "SKIN"
          }, {
            id: 410,
            type: "SKIN"
          }, {
            id: 411,
            type: "SKIN"
          }, {
            id: 412,
            type: "SKIN"
          }, {
            id: 413,
            type: "SKIN"
          }, {
            id: 414,
            type: "SKIN"
          }, {
            id: 415,
            type: "SKIN"
          }, {
            id: 416,
            type: "SKIN"
          }, {
            id: 417,
            type: "SKIN"
          }, {
            id: 418,
            type: "SKIN"
          }, {
            id: 419,
            type: "SKIN"
          }, {
            id: 420,
            type: "SKIN"
          }, {
            id: 421,
            type: "SKIN"
          }, {
            id: 422,
            type: "SKIN"
          }, {
            id: 423,
            type: "SKIN"
          }, {
            id: 424,
            type: "SKIN"
          }, {
            id: 425,
            type: "SKIN"
          }, {
            id: 426,
            type: "SKIN"
          }, {
            id: 427,
            type: "SKIN"
          }, {
            id: 428,
            type: "SKIN"
          }, {
            id: 429,
            type: "SKIN"
          }, {
            id: 430,
            type: "SKIN"
          }, {
            id: 431,
            type: "SKIN"
          }, {
            id: 432,
            type: "SKIN"
          }, {
            id: 433,
            type: "SKIN"
          }, {
            id: 434,
            type: "SKIN"
          }, {
            id: 435,
            type: "SKIN"
          }, {
            id: 436,
            type: "SKIN"
          }, {
            id: 437,
            type: "SKIN"
          }, {
            id: 438,
            type: "SKIN"
          }, {
            id: 439,
            type: "SKIN"
          }, {
            id: 440,
            type: "SKIN"
          }, {
            id: 441,
            type: "SKIN"
          }, {
            id: 442,
            type: "SKIN"
          }, {
            id: 443,
            type: "SKIN"
          }, {
            id: 444,
            type: "SKIN"
          }, {
            id: 445,
            type: "SKIN"
          }, {
            id: 446,
            type: "SKIN"
          }, {
            id: 447,
            type: "SKIN"
          }, {
            id: 448,
            type: "SKIN"
          }, {
            id: 449,
            type: "SKIN"
          }, {
            id: 450,
            type: "SKIN"
          }, {
            id: 451,
            type: "SKIN"
          }, {
            id: 452,
            type: "SKIN"
          }, {
            id: 453,
            type: "SKIN"
          }, {
            id: 454,
            type: "SKIN"
          }, {
            id: 455,
            type: "SKIN"
          }, {
            id: 456,
            type: "SKIN"
          }, {
            id: 457,
            type: "SKIN"
          }, {
            id: 458,
            type: "SKIN"
          }, {
            id: 459,
            type: "SKIN"
          }, {
            id: 460,
            type: "SKIN"
          }, {
            id: 461,
            type: "SKIN"
          }, {
            id: 462,
            type: "SKIN"
          }, {
            id: 463,
            type: "SKIN"
          }, {
            id: 464,
            type: "SKIN"
          }, {
            id: 465,
            type: "SKIN"
          }, {
            id: 466,
            type: "SKIN"
          }, {
            id: 467,
            type: "SKIN"
          }, {
            id: 468,
            type: "SKIN"
          }, {
            id: 471,
            type: "SKIN"
          }, {
            id: 472,
            type: "SKIN"
          }, {
            id: 473,
            type: "SKIN"
          }, {
            id: 474,
            type: "SKIN"
          }, {
            id: 475,
            type: "SKIN"
          }, {
            id: 476,
            type: "SKIN"
          }, {
            id: 477,
            type: "SKIN"
          }, {
            id: 478,
            type: "SKIN"
          }, {
            id: 479,
            type: "SKIN"
          }, {
            id: 480,
            type: "SKIN"
          }, {
            id: 481,
            type: "SKIN"
          }, {
            id: 482,
            type: "SKIN"
          }, {
            id: 483,
            type: "SKIN"
          }, {
            id: 484,
            type: "SKIN"
          }, {
            id: 485,
            type: "SKIN"
          }, {
            id: 486,
            type: "SKIN"
          }, {
            id: 487,
            type: "SKIN"
          }, {
            id: 488,
            type: "SKIN"
          }, {
            id: 489,
            type: "SKIN"
          }, {
            id: 490,
            type: "SKIN"
          }, {
            id: 491,
            type: "SKIN"
          }, {
            id: 492,
            type: "SKIN"
          }, {
            id: 494,
            type: "SKIN"
          }, {
            id: 496,
            type: "SKIN"
          }, {
            id: 498,
            type: "SKIN"
          }, {
            id: 500,
            type: "SKIN"
          }, {
            id: 502,
            type: "SKIN"
          }, {
            id: 503,
            type: "SKIN"
          }, {
            id: 504,
            type: "SKIN"
          }, {
            id: 505,
            type: "SKIN"
          }, {
            id: 506,
            type: "SKIN"
          }, {
            id: 507,
            type: "SKIN"
          }, {
            id: 510,
            type: "SKIN"
          }, {
            id: 515,
            type: "SKIN"
          }, {
            id: 516,
            type: "SKIN"
          }, {
            id: 517,
            type: "SKIN"
          }, {
            id: 522,
            type: "SKIN"
          }, {
            id: 523,
            type: "SKIN"
          }, {
            id: 526,
            type: "SKIN"
          }, {
            id: 527,
            type: "SKIN"
          }, {
            id: 528,
            type: "SKIN"
          }, {
            id: 529,
            type: "SKIN"
          }, {
            id: 530,
            type: "SKIN"
          }, {
            id: 533,
            type: "SKIN"
          }, {
            id: 534,
            type: "SKIN"
          }, {
            id: 537,
            type: "SKIN"
          }, {
            id: 540,
            type: "SKIN"
          }, {
            id: 542,
            type: "SKIN"
          }, {
            id: 543,
            type: "SKIN"
          }, {
            id: 546,
            type: "SKIN"
          }, {
            id: 548,
            type: "SKIN"
          }, {
            id: 550,
            type: "SKIN"
          }, {
            id: 551,
            type: "SKIN"
          }, {
            id: 552,
            type: "SKIN"
          }, {
            id: 553,
            type: "SKIN"
          }, {
            id: 554,
            type: "SKIN"
          }, {
            id: 555,
            type: "SKIN"
          }, {
            id: 556,
            type: "SKIN"
          }, {
            id: 557,
            type: "SKIN"
          }, {
            id: 558,
            type: "SKIN"
          }, {
            id: 560,
            type: "SKIN"
          }, {
            id: 561,
            type: "SKIN"
          }, {
            id: 562,
            type: "SKIN"
          }, {
            id: 563,
            type: "SKIN"
          }, {
            id: 564,
            type: "SKIN"
          }, {
            id: 565,
            type: "SKIN"
          }, {
            id: 566,
            type: "SKIN"
          }, {
            id: 567,
            type: "SKIN"
          }, {
            id: 568,
            type: "SKIN"
          }, {
            id: 569,
            type: "SKIN"
          }, {
            id: 570,
            type: "SKIN"
          }, {
            id: 571,
            type: "SKIN"
          }, {
            id: 572,
            type: "SKIN"
          }, {
            id: 573,
            type: "SKIN"
          }, {
            id: 574,
            type: "SKIN"
          }, {
            id: 575,
            type: "SKIN"
          }, {
            id: 576,
            type: "SKIN"
          }, {
            id: 577,
            type: "SKIN"
          }, {
            id: 578,
            type: "SKIN"
          }, {
            id: 579,
            type: "SKIN"
          }, {
            id: 580,
            type: "SKIN"
          }, {
            id: 582,
            type: "SKIN"
          }, {
            id: 585,
            type: "SKIN"
          }, {
            id: 586,
            type: "SKIN"
          }, {
            id: 587,
            type: "SKIN"
          }, {
            id: 588,
            type: "SKIN"
          }, {
            id: 589,
            type: "SKIN"
          }, {
            id: 590,
            type: "SKIN"
          }, {
            id: 593,
            type: "SKIN"
          }, {
            id: 597,
            type: "SKIN"
          }, {
            id: 599,
            type: "SKIN"
          }, {
            id: 681,
            type: "SKIN"
          }, {
            id: 600,
            type: "SKIN"
          }, {
            id: 601,
            type: "SKIN"
          }, {
            id: 602,
            type: "SKIN"
          }, {
            id: 603,
            type: "SKIN"
          }, {
            id: 604,
            type: "SKIN"
          }, {
            id: 605,
            type: "SKIN"
          }, {
            id: 606,
            type: "SKIN"
          }, {
            id: 608,
            type: "SKIN"
          }, {
            id: 609,
            type: "SKIN"
          }, {
            id: 610,
            type: "SKIN"
          }, {
            id: 611,
            type: "SKIN"
          }, {
            id: 613,
            type: "SKIN"
          }, {
            id: 615,
            type: "SKIN"
          }, {
            id: 617,
            type: "SKIN"
          }, {
            id: 620,
            type: "SKIN"
          }, {
            id: 629,
            type: "SKIN"
          }, {
            id: 630,
            type: "SKIN"
          }, {
            id: 631,
            type: "SKIN"
          }, {
            id: 633,
            type: "SKIN"
          }, {
            id: 635,
            type: "SKIN"
          }, {
            id: 638,
            type: "SKIN"
          }, {
            id: 639,
            type: "SKIN"
          }, {
            id: 640,
            type: "SKIN"
          }, {
            id: 641,
            type: "SKIN"
          }, {
            id: 642,
            type: "SKIN"
          }, {
            id: 643,
            type: "SKIN"
          }, {
            id: 646,
            type: "SKIN"
          }, {
            id: 647,
            type: "SKIN"
          }, {
            id: 648,
            type: "SKIN"
          }, {
            id: 649,
            type: "SKIN"
          }, {
            id: 652,
            type: "SKIN"
          }, {
            id: 655,
            type: "SKIN"
          }, {
            id: 656,
            type: "SKIN"
          }, {
            id: 657,
            type: "SKIN"
          }, {
            id: 658,
            type: "SKIN"
          }, {
            id: 660,
            type: "SKIN"
          }, {
            id: 662,
            type: "SKIN"
          }, {
            id: 665,
            type: "SKIN"
          }, {
            id: 666,
            type: "SKIN"
          }, {
            id: 670,
            type: "SKIN"
          }, {
            id: 671,
            type: "SKIN"
          }, {
            id: 672,
            type: "SKIN"
          }, {
            id: 674,
            type: "SKIN"
          }, {
            id: 679,
            type: "SKIN"
          }, {
            id: 682,
            type: "SKIN"
          }, {
            id: 684,
            type: "SKIN"
          }, {
            id: 685,
            type: "SKIN"
          }, {
            id: 686,
            type: "SKIN"
          }, {
            id: 687,
            type: "SKIN"
          }, {
            id: 688,
            type: "SKIN"
          }, {
            id: 689,
            type: "SKIN"
          }, {
            id: 690,
            type: "SKIN"
          }, {
            id: 691,
            type: "SKIN"
          }, {
            id: 694,
            type: "SKIN"
          }, {
            id: 696,
            type: "SKIN"
          }, {
            id: 698,
            type: "SKIN"
          }, {
            id: 699,
            type: "SKIN"
          }, {
            id: 700,
            type: "SKIN"
          }, {
            id: 703,
            type: "SKIN"
          }, {
            id: 704,
            type: "SKIN"
          }, {
            id: 711,
            type: "SKIN"
          }, {
            id: 713,
            type: "SKIN"
          }, {
            id: 715,
            type: "SKIN"
          }, {
            id: 716,
            type: "SKIN"
          }, {
            id: 718,
            type: "SKIN"
          }, {
            id: 720,
            type: "SKIN"
          }, {
            id: 721,
            type: "SKIN"
          }, {
            id: 724,
            type: "SKIN"
          }, {
            id: 725,
            type: "SKIN"
          }, {
            id: 726,
            type: "SKIN"
          }, {
            id: 727,
            type: "SKIN"
          }, {
            id: 728,
            type: "SKIN"
          }, {
            id: 730,
            type: "SKIN"
          }, {
            id: 731,
            type: "SKIN"
          }, {
            id: 732,
            type: "SKIN"
          }, {
            id: 733,
            type: "SKIN"
          }, {
            id: 734,
            type: "SKIN"
          }, {
            id: 735,
            type: "SKIN"
          }, {
            id: 737,
            type: "SKIN"
          }, {
            id: 740,
            type: "SKIN"
          }, {
            id: 741,
            type: "SKIN"
          }, {
            id: 742,
            type: "SKIN"
          }, {
            id: 743,
            type: "SKIN"
          }, {
            id: 744,
            type: "SKIN"
          }, {
            id: 746,
            type: "SKIN"
          }, {
            id: 747,
            type: "SKIN"
          }, {
            id: 749,
            type: "SKIN"
          }, {
            id: 750,
            type: "SKIN"
          }, {
            id: 751,
            type: "SKIN"
          }, {
            id: 752,
            type: "SKIN"
          }, {
            id: 753,
            type: "SKIN"
          }, {
            id: 754,
            type: "SKIN"
          }, {
            id: 756,
            type: "SKIN"
          }, {
            id: 758,
            type: "SKIN"
          }, {
            id: 760,
            type: "SKIN"
          }, {
            id: 761,
            type: "SKIN"
          }, {
            id: 762,
            type: "SKIN"
          }, {
            id: 770,
            type: "SKIN"
          }, {
            id: 771,
            type: "SKIN"
          }, {
            id: 772,
            type: "SKIN"
          }, {
            id: 773,
            type: "SKIN"
          }, {
            id: 774,
            type: "SKIN"
          }, {
            id: 775,
            type: "SKIN"
          }, {
            id: 776,
            type: "SKIN"
          }, {
            id: 777,
            type: "SKIN"
          }, {
            id: 778,
            type: "SKIN"
          }, {
            id: 779,
            type: "SKIN"
          }, {
            id: 798,
            type: "SKIN"
          }, {
            id: 799,
            type: "SKIN"
          }, {
            id: 800,
            type: "SKIN"
          }, {
            id: 801,
            type: "SKIN"
          }, {
            id: 802,
            type: "SKIN"
          }, {
            id: 807,
            type: "SKIN"
          }, {
            id: 808,
            type: "SKIN"
          }, {
            id: 809,
            type: "SKIN"
          }, {
            id: 848,
            type: "SKIN"
          }, {
            id: 882,
            type: "SKIN"
          }, {
            id: 2200,
            type: "SKIN"
          }, {
            id: 661,
            type: "SKIN"
          }, {
            id: 663,
            type: "SKIN"
          }, {
            id: 705,
            type: "SKIN"
          }, {
            id: 400,
            type: "EYES"
          }, {
            id: 401,
            type: "EYES"
          }, {
            id: 402,
            type: "EYES"
          }, {
            id: 403,
            type: "EYES"
          }, {
            id: 404,
            type: "EYES"
          }, {
            id: 405,
            type: "EYES"
          }, {
            id: 406,
            type: "EYES"
          }, {
            id: 407,
            type: "EYES"
          }, {
            id: 408,
            type: "EYES"
          }, {
            id: 409,
            type: "EYES"
          }, {
            id: 410,
            type: "EYES"
          }, {
            id: 411,
            type: "EYES"
          }, {
            id: 412,
            type: "EYES"
          }, {
            id: 413,
            type: "EYES"
          }, {
            id: 414,
            type: "EYES"
          }, {
            id: 415,
            type: "EYES"
          }, {
            id: 416,
            type: "EYES"
          }, {
            id: 417,
            type: "EYES"
          }, {
            id: 418,
            type: "EYES"
          }, {
            id: 419,
            type: "EYES"
          }, {
            id: 420,
            type: "EYES"
          }, {
            id: 421,
            type: "EYES"
          }, {
            id: 422,
            type: "EYES"
          }, {
            id: 423,
            type: "EYES"
          }, {
            id: 424,
            type: "EYES"
          }, {
            id: 425,
            type: "EYES"
          }, {
            id: 426,
            type: "EYES"
          }, {
            id: 427,
            type: "EYES"
          }, {
            id: 428,
            type: "EYES"
          }, {
            id: 429,
            type: "EYES"
          }, {
            id: 430,
            type: "EYES"
          }, {
            id: 431,
            type: "EYES"
          }, {
            id: 432,
            type: "EYES"
          }, {
            id: 433,
            type: "EYES"
          }, {
            id: 434,
            type: "EYES"
          }, {
            id: 731,
            type: "EYES"
          }, {
            id: 732,
            type: "EYES"
          }, {
            id: 733,
            type: "EYES"
          }, {
            id: 734,
            type: "EYES"
          }, {
            id: 735,
            type: "EYES"
          }, {
            id: 736,
            type: "EYES"
          }, {
            id: 737,
            type: "EYES"
          }, {
            id: 738,
            type: "EYES"
          }, {
            id: 739,
            type: "EYES"
          }, {
            id: 740,
            type: "EYES"
          }, {
            id: 741,
            type: "EYES"
          }, {
            id: 742,
            type: "EYES"
          }, {
            id: 743,
            type: "EYES"
          }, {
            id: 744,
            type: "EYES"
          }, {
            id: 401,
            type: "GLASSES"
          }, {
            id: 402,
            type: "GLASSES"
          }, {
            id: 403,
            type: "GLASSES"
          }, {
            id: 404,
            type: "GLASSES"
          }, {
            id: 405,
            type: "GLASSES"
          }, {
            id: 406,
            type: "GLASSES"
          }, {
            id: 407,
            type: "GLASSES"
          }, {
            id: 409,
            type: "GLASSES"
          }, {
            id: 410,
            type: "GLASSES"
          }, {
            id: 411,
            type: "GLASSES"
          }, {
            id: 412,
            type: "GLASSES"
          }, {
            id: 413,
            type: "GLASSES"
          }, {
            id: 414,
            type: "GLASSES"
          }, {
            id: 415,
            type: "GLASSES"
          }, {
            id: 416,
            type: "GLASSES"
          }, {
            id: 417,
            type: "GLASSES"
          }, {
            id: 418,
            type: "GLASSES"
          }, {
            id: 419,
            type: "GLASSES"
          }, {
            id: 420,
            type: "GLASSES"
          }, {
            id: 421,
            type: "GLASSES"
          }, {
            id: 423,
            type: "GLASSES"
          }, {
            id: 424,
            type: "GLASSES"
          }, {
            id: 425,
            type: "GLASSES"
          }, {
            id: 427,
            type: "GLASSES"
          }, {
            id: 428,
            type: "GLASSES"
          }, {
            id: 478,
            type: "GLASSES"
          }, {
            id: 429,
            type: "GLASSES"
          }, {
            id: 430,
            type: "GLASSES"
          }, {
            id: 431,
            type: "GLASSES"
          }, {
            id: 432,
            type: "GLASSES"
          }, {
            id: 408,
            type: "GLASSES"
          }, {
            id: 426,
            type: "GLASSES"
          }, {
            id: 400,
            type: "HAT"
          }, {
            id: 401,
            type: "HAT"
          }, {
            id: 402,
            type: "HAT"
          }, {
            id: 403,
            type: "HAT"
          }, {
            id: 404,
            type: "HAT"
          }, {
            id: 405,
            type: "HAT"
          }, {
            id: 406,
            type: "HAT"
          }, {
            id: 407,
            type: "HAT"
          }, {
            id: 408,
            type: "HAT"
          }, {
            id: 409,
            type: "HAT"
          }, {
            id: 410,
            type: "HAT"
          }, {
            id: 411,
            type: "HAT"
          }, {
            id: 412,
            type: "HAT"
          }, {
            id: 413,
            type: "HAT"
          }, {
            id: 414,
            type: "HAT"
          }, {
            id: 415,
            type: "HAT"
          }, {
            id: 416,
            type: "HAT"
          }, {
            id: 417,
            type: "HAT"
          }, {
            id: 418,
            type: "HAT"
          }, {
            id: 419,
            type: "HAT"
          }, {
            id: 420,
            type: "HAT"
          }, {
            id: 421,
            type: "HAT"
          }, {
            id: 422,
            type: "HAT"
          }, {
            id: 423,
            type: "HAT"
          }, {
            id: 424,
            type: "HAT"
          }, {
            id: 425,
            type: "HAT"
          }, {
            id: 426,
            type: "HAT"
          }, {
            id: 427,
            type: "HAT"
          }, {
            id: 428,
            type: "HAT"
          }, {
            id: 429,
            type: "HAT"
          }, {
            id: 430,
            type: "HAT"
          }, {
            id: 431,
            type: "HAT"
          }, {
            id: 432,
            type: "HAT"
          }, {
            id: 433,
            type: "HAT"
          }, {
            id: 434,
            type: "HAT"
          }, {
            id: 436,
            type: "HAT"
          }, {
            id: 437,
            type: "HAT"
          }, {
            id: 438,
            type: "HAT"
          }, {
            id: 439,
            type: "HAT"
          }, {
            id: 440,
            type: "HAT"
          }, {
            id: 441,
            type: "HAT"
          }, {
            id: 442,
            type: "HAT"
          }, {
            id: 443,
            type: "HAT"
          }, {
            id: 444,
            type: "HAT"
          }, {
            id: 445,
            type: "HAT"
          }, {
            id: 446,
            type: "HAT"
          }, {
            id: 447,
            type: "HAT"
          }, {
            id: 448,
            type: "HAT"
          }, {
            id: 449,
            type: "HAT"
          }, {
            id: 450,
            type: "HAT"
          }, {
            id: 451,
            type: "HAT"
          }, {
            id: 452,
            type: "HAT"
          }, {
            id: 453,
            type: "HAT"
          }, {
            id: 454,
            type: "HAT"
          }, {
            id: 455,
            type: "HAT"
          }, {
            id: 456,
            type: "HAT"
          }, {
            id: 457,
            type: "HAT"
          }, {
            id: 458,
            type: "HAT"
          }, {
            id: 459,
            type: "HAT"
          }, {
            id: 460,
            type: "HAT"
          }, {
            id: 461,
            type: "HAT"
          }, {
            id: 462,
            type: "HAT"
          }, {
            id: 463,
            type: "HAT"
          }, {
            id: 464,
            type: "HAT"
          }, {
            id: 465,
            type: "HAT"
          }, {
            id: 466,
            type: "HAT"
          }, {
            id: 467,
            type: "HAT"
          }, {
            id: 468,
            type: "HAT"
          }, {
            id: 470,
            type: "HAT"
          }, {
            id: 731,
            type: "HAT"
          }, {
            id: 732,
            type: "HAT"
          }, {
            id: 733,
            type: "HAT"
          }, {
            id: 734,
            type: "HAT"
          }, {
            id: 735,
            type: "HAT"
          }, {
            id: 736,
            type: "HAT"
          }, {
            id: 737,
            type: "HAT"
          }, {
            id: 738,
            type: "HAT"
          }, {
            id: 739,
            type: "HAT"
          }, {
            id: 740,
            type: "HAT"
          }, {
            id: 741,
            type: "HAT"
          }, {
            id: 742,
            type: "HAT"
          }, {
            id: 743,
            type: "HAT"
          }, {
            id: 744,
            type: "HAT"
          }, {
            id: 745,
            type: "HAT"
          }, {
            id: 746,
            type: "HAT"
          }, {
            id: 747,
            type: "HAT"
          }, {
            id: 748,
            type: "HAT"
          }, {
            id: 749,
            type: "HAT"
          }, {
            id: 750,
            type: "HAT"
          }, {
            id: 751,
            type: "HAT"
          }, {
            id: 752,
            type: "HAT"
          }, {
            id: 753,
            type: "HAT"
          }, {
            id: 754,
            type: "HAT"
          }, {
            id: 755,
            type: "HAT"
          }, {
            id: 756,
            type: "HAT"
          }, {
            id: 757,
            type: "HAT"
          }, {
            id: 758,
            type: "HAT"
          }, {
            id: 759,
            type: "HAT"
          }, {
            id: 766,
            type: "HAT"
          }, {
            id: 767,
            type: "HAT"
          }, {
            id: 768,
            type: "HAT"
          }, {
            id: 769,
            type: "HAT"
          }, {
            id: 774,
            type: "HAT"
          }, {
            id: 775,
            type: "HAT"
          }, {
            id: 776,
            type: "HAT"
          }, {
            id: 777,
            type: "HAT"
          }, {
            id: 778,
            type: "HAT"
          }, {
            id: 779,
            type: "HAT"
          }, {
            id: 780,
            type: "HAT"
          }, {
            id: 781,
            type: "HAT"
          }, {
            id: 782,
            type: "HAT"
          }, {
            id: 783,
            type: "HAT"
          }, {
            id: 784,
            type: "HAT"
          }, {
            id: 785,
            type: "HAT"
          }, {
            id: 793,
            type: "HAT"
          }, {
            id: 794,
            type: "HAT"
          }, {
            id: 795,
            type: "HAT"
          }, {
            id: 796,
            type: "HAT"
          }, {
            id: 797,
            type: "HAT"
          }, {
            id: 798,
            type: "HAT"
          }, {
            id: 799,
            type: "HAT"
          }, {
            id: 800,
            type: "HAT"
          }, {
            id: 801,
            type: "HAT"
          }, {
            id: 811,
            type: "HAT"
          }, {
            id: 812,
            type: "HAT"
          }, {
            id: 400,
            type: "MOUTH"
          }, {
            id: 401,
            type: "MOUTH"
          }, {
            id: 402,
            type: "MOUTH"
          }, {
            id: 403,
            type: "MOUTH"
          }, {
            id: 404,
            type: "MOUTH"
          }, {
            id: 405,
            type: "MOUTH"
          }, {
            id: 406,
            type: "MOUTH"
          }],
          cc: "<style>\n    </style><div id=\"div_map\"></div><p id=\"exp_time\" class=\"expiry-date\">Activation: 29/10/2025</p>",
          mb: "<div class='info-message success' style='background-color: rgba(46, 204, 113, 0.1); border-radius: 8px; padding: 15px; margin: 10px 0; border: 1px solid rgba(46, 204, 113, 0.3);'><h4 class='center' style='color: #2ecc71; margin-top: 0;'>مرحباً YT</h4><p style='text-align: right; direction: rtl; margin-bottom: 10px;'>شكراً لاشتراكك في النسخة المميزة! يمكنك الآن الاستمتاع بجميع الميزات والأزياء المتاحة.</p><p style='text-align: left; direction: ltr; margin-bottom: 0;'>Thank you for your premium subscription! You can now enjoy all available features and skins.</p></div>",
          cm: "",
          cr: "",
          ccc: "iq",
          ccg: ["Will Kill and Headshot statistics be removed?", "There was a connection problem!", "Your account has been locked.", "RESPAWN", "Full Screen", "In the game", "⚙️ Settings", "ID", "ID COPY", "COPY ID", "Country", "Remember kill and headshot counts", "ON/OFF", "Background image", "COPY", "Vietnam", "Thailand", "Cambodia", "Indonesia", "Singapore", "Japan", "Mexico", "Brazil", "Canada", "Germany", "France", "England", "Australia", "USA", "Portugal", "Shortcut", "Dark blue sky", "Purple sky", "Clouds", "💡", "Turkey", "Arabs"],
          is_subscriber: true,
          show_discord: false,
          player_name: "YT",
          server_time: "2025-10-03 14:24:14"
        };
        const vF45 = (p929, p930) => {
          if (Array.isArray(p930)) {
            return p930.slice();
          }
          if (p930 && typeof p930 === "object") {
            const vO51 = {
              ...p929
            };
            for (const v1139 of Object.keys(p930)) {
              if (v1139 === "propertyList") {
                const v1140 = Array.isArray(p929?.propertyList) ? p929.propertyList : [];
                const v1141 = Array.isArray(p930.propertyList) ? p930.propertyList : [];
                vO51.propertyList = v1140.concat(v1141);
                continue;
              }
              vO51[v1139] = vF45(p929 ? p929[v1139] : undefined, p930[v1139]);
            }
            return vO51;
          }
          if (p930 === undefined) {
            return p929;
          } else {
            return p930;
          }
        };
        v1138 = vF45(v1138 || {}, vO50);
      } catch (e59) {}
      vO14.pL = [];
      vO14.v_z = v1138.vs;
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
      if (vO14.dg != null && v1138.dsg.join() != vO14.dg.join() || vO14.dg == null && v1138.dsg.join() != "") {
        vO14.dg = v1138.dsg;
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
        window.location.reload();
      }
      if (v61 != vO14.v_z) {
        localStorage.removeItem("wftsw");
        window.location.reload();
      }
      document.getElementById("loa831pibur0w4gv");
      window.currentDisplayMode = "timmap";
      if (typeof window.servers === "undefined") {
        window.servers = {
          Api_listServer: []
        };
      }
      function f148() {
        try {
          const v1142 = localStorage.getItem("cachedServers");
          if (v1142) {
            const v1143 = JSON.parse(v1142);
            const v1144 = v1143.timestamp;
            const v1145 = new Date().getTime();
            if (v1145 - v1144 < 3600000) {
              window.servers = v1143.data;
              return true;
            }
          }
        } catch (e60) {}
        return false;
      }
      async function f149() {
        try {
          const v1146 = await fetch("https://muslimpowa1453.github.io/wormate/api/server.php");
          if (v1146.ok) {
            const v1147 = await v1146.json();
            if (v1147.success && Array.isArray(v1147.servers)) {
              window.servers.Api_listServer = v1147.servers.filter(p931 => p931.serverUrl);
              try {
                const vO52 = {
                  timestamp: new Date().getTime(),
                  data: window.servers
                };
                localStorage.setItem("cachedServers", JSON.stringify(vO52));
              } catch (e61) {}
              return true;
            }
          }
        } catch (e62) {
          setTimeout(f149, 5000);
        }
        return false;
      }
      function f150() {
        setInterval(() => {
          if (typeof loadUsers === "function") {
            loadUsers();
          }
          f149().then(p932 => {
            if (p932 && typeof createServers === "function") {
              createServers();
            }
          });
        }, 300000);
      }
      async function f151() {
        const vF148 = f148();
        if (typeof loadUsers === "function") {
          loadUsers();
        }
        const v1148 = await f149();
        f150();
        return vF148 || v1148;
      }
      if (v1138.e === "not_connect") {
        $(".description-text").html(localStorage.getItem("ccg_2"));
      } else {
        if (v1138.e === "not_empty") {
          $(".description-text").html(v1138.cc);
          if (v1138.cr != "") {
            $("#loa831pibur0w4gv").html("");
          }
          f152();
        } else if (v1138.e === "empty" || v1138.e === "new") {
          f153();
        }
        vO14.pL = [...v1138.propertyList];
      }
      function f152() {
        $(".description-text").append("\n<div class=\"title-wormate-server\">\n          W O R M X T  \n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + gameSettings.s_l + '/images/server-flags/tur.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- زر التبديل أسفل الأعلام مباشرة -->\n      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n        <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n      </div>\n      \n      <div class=\"gachngang\"></div>\n      <div class=\"server-header\">\n        <div class=\"header-name\">SERVER</div>\n        <div class=\"header-region\">REGION</div>\n        <div class=\"header-status\">STATUS</div>\n        <div class=\"header-score\">SCORE</div>\n      </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- إضافة صورة الخلفية هنا قبل حاوية السيرفرات -->\n    <div class=\"background-image-container\">\n      <img src=\"https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\" class=\"background-image\">\n    </div>\n    \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        f154();
      }
      function f153() {
        $(".description-text").html("\n<div class=\"title-wormate-server\">\n          W O R M X T  \n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + gameSettings.s_l + '/images/server-flags/tur.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- زر التبديل أسفل الأعلام مباشرة -->\n      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n        <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n      </div>\n      \n      <div class=\"gachngang\"></div>\n      <div class=\"server-header\">\n        <div class=\"header-name\">SERVER</div>\n        <div class=\"header-region\">REGION</div>\n        <div class=\"header-status\">STATUS</div>\n        <div class=\"header-score\">SCORE</div>\n      </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- إضافة صورة الخلفية هنا قبل حاوية السيرفرات -->\n    <div class=\"background-image-container\">\n      <img src=\"https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\" class=\"background-image\">\n    </div>\n    \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        f154();
      }
      function f154() {
        $("body").append("<div id=\"custom-tooltip\" style=\"display: none; position: absolute; z-index: 9999; background: rgba(0,0,0,0.9); padding: 5px 10px; border-radius: 4px; font-size: 10px; pointer-events: none; text-align: center;\"><div style=\"display: flex; justify-content: space-between; align-items: center;\"><span style=\"color: #ffd700; text-align: right;\">TimMap Servers </span><span style=\"color: white; margin: 0 5px;\">⟷ </span><span style=\"color: #ffd700; text-align: left;\">WormWorld Servers</span></div></div>");
        $("body").append("<div id=\"image-tooltip\" class=\"image-tooltip\"></div>");
        window.currentDisplayMode = "timmap";
        $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
        function f155() {
          const vO53 = {
            mx: "servers-mexico",
            br: "servers-peru",
            us: "servers-eeuu",
            ca: "servers-canada",
            de: "servers-germania",
            fr: "servers-francia",
            sg: "servers-singapur",
            jp: "servers-japon",
            au: "servers-australia",
            gb: "servers-granbretana"
          };
          $("<style>").prop("type", "text/css").html("\n          .ui-tabs-nav .ui-tab:hover, \n          .ui-tabs-nav .ui-tab.ui-tab-active {\n            background-color: white !important;\n          }\n          .ui-tabs-nav .ui-tab {\n            border-color: white !important;\n          }\n        ").appendTo("head");
          Object.keys(vO53).forEach((p933, p934) => {
            $("." + p933).on("click", function () {
              $(".ui-tabs-nav .ui-tab").removeClass("ui-tab-active");
              $(this).closest(".ui-tab").addClass("ui-tab-active");
              $("#addflag").attr("class", "flag " + p933);
              $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").hide();
              $("." + vO53[p933]).fadeIn(300);
            });
          });
        }
        function f156() {
          $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").empty();
          const vO54 = {
            peru: "DE",
            mexico: "UAE",
            eeuu: "USA",
            canada: "LT",
            germania: "BR",
            francia: "FR",
            singapur: "SG",
            japon: "JP",
            australia: "IN",
            granbretana: "UK"
          };
          const vO55 = {
            peru: vO14.s_l + "/images/cors-proxy.phpimg=flg/de.png",
            mexico: vO14.s_l + "/images/cors-proxy.phpimg=flg/mx.png",
            eeuu: vO14.s_l + "/images/cors-proxy.phpimg=flg/us.png",
            canada: vO14.s_l + "/images/cors-proxy.phpimg=flg/ca.png",
            germania: vO14.s_l + "/images/server-flags/tur.png",
            francia: vO14.s_l + "/images/cors-proxy.phpimg=flg/fr.png",
            singapur: vO14.s_l + "/images/cors-proxy.phpimg=flg/sg.png",
            japon: vO14.s_l + "/images/cors-proxy.phpimg=flg/jp.png",
            australia: vO14.s_l + "/images/cors-proxy.phpimg=flg/au.png",
            granbretana: vO14.s_l + "/images/cors-proxy.phpimg=flg/gb.png"
          };
          const vO56 = {};
          Object.keys(vO54).forEach(p935 => {
            vO56[p935] = [];
          });
          if (window.servers && window.servers.Api_listServer && window.servers.Api_listServer.length > 0) {
            let v1149 = window.currentDisplayMode || "timmap";
            window.servers.Api_listServer.forEach(p936 => {
              let v1150 = null;
              if (v1149 === "timmap" && p936.timmap) {
                v1150 = p936.timmap;
              } else if (v1149 === "wormworld" && p936.wormworld) {
                v1150 = p936.wormworld;
              }
              if (v1150 && vO56[p936.region]) {
                p936.displayNumber = v1150;
                vO56[p936.region].push(p936);
              }
            });
            Object.keys(vO56).forEach(p937 => {
              const v1151 = vO56[p937];
              const v1152 = vO54[p937];
              if (v1151.length > 0) {
                v1151.sort((p938, p939) => (p938.displayNumber || 0) - (p939.displayNumber || 0));
                for (let vLN0149 = 0; vLN0149 < v1151.length; vLN0149++) {
                  const v1153 = v1151[vLN0149];
                  const v1154 = v1153.displayNumber;
                  const v1155 = v1153.image || vO14.s_l + "/images/cors-proxy.phpimg=flg/default-server.png";
                  const v1156 = v1153.imageUrl || "";
                  const v1157 = $("<div></div>").addClass("selectSala").attr({
                    id: p937,
                    value: v1153.serverUrl,
                    "data-server-name": v1153.name || "Server " + v1154,
                    "data-region-name": v1152,
                    "data-region-flag": vO55[p937],
                    "data-server-number": v1154,
                    "data-server-image": v1155
                  });
                  const v1158 = v1156 && v1156.trim() !== "";
                  const v1159 = $("<div></div>").addClass("server-image");
                  if (v1158) {
                    const v1160 = v1153.name || "Server " + v1154;
                    v1159.addClass("server-image-with-link").data("url", v1156).attr("data-server-name", v1160);
                    v1159.on("click", function (p940) {
                      p940.stopPropagation();
                      const v1161 = $(this).data("url");
                      if (v1161) {
                        window.open(v1161, "_blank");
                      }
                    });
                    v1159.hover(function () {
                      const v1162 = $(this).data("server-name");
                      $("#server-link-tooltip").remove();
                      $("<div id=\"server-link-tooltip\"></div>").text("Visit " + v1162 + " page").css({
                        position: "fixed",
                        background: "rgba(0,0,0,0.9)",
                        color: "white",
                        padding: "5px 10px",
                        "border-radius": "4px",
                        "font-size": "11px",
                        "white-space": "nowrap",
                        "z-index": "99999",
                        "pointer-events": "none",
                        "box-shadow": "0 0 5px rgba(0,0,0,0.5)"
                      }).appendTo("body");
                      const v1163 = $(this).offset();
                      const v1164 = $(this).width();
                      const v1165 = $(this).height();
                      const v1166 = $("#server-link-tooltip").outerWidth();
                      $("#server-link-tooltip").css({
                        left: v1163.left + v1164 / 2 - v1166 / 2,
                        top: v1163.top + v1165 + 10
                      }).fadeIn(200);
                    }, function () {
                      $("#server-link-tooltip").fadeOut(200, function () {
                        $(this).remove();
                      });
                    });
                  }
                  v1159.append($("<img>").attr("src", v1155));
                  const v1167 = $("<div></div>").addClass("server-info").append($("<span></span>").addClass("server-number").text(v1154 + "."), $("<span></span>").addClass("server-name").text(v1153.name || "Server " + v1154));
                  const v1168 = $("<div></div>").addClass("server-region").text(v1152 + " " + v1154);
                  const v1169 = $("<div></div>").addClass("server-status").append($("<span></span>").addClass("green-dot"));
                  const v1170 = $("<div></div>").addClass("server-score");
                  v1157.append(v1159, v1167, v1168, v1169, v1170);
                  $(".servers-" + p937).append(v1157);
                  v1157.click(function () {
                    const v1171 = $(this).attr("data-region-name");
                    const v1172 = $(this).attr("data-server-number");
                    const v1173 = $(this).attr("value");
                    const v1174 = $(this).attr("data-region-flag");
                    const v1175 = $(this).attr("data-server-image");
                    const v1176 = v1171 + " " + v1172;
                    window.realServerName = v1176;
                    window.selectedServerInfo = {
                      regionName: v1171,
                      serverNumber: v1172,
                      regionFlag: v1174,
                      serverImage: v1175,
                      displayName: v1176
                    };
                    $("#port_id_s").val(v1173);
                    $("#port_name_s").val(v1176);
                    $("#port_id").val($("#port_id_s").val());
                    $("#port_name").val($("#port_name_s").val());
                    try {
                      const v1177 = JSON.parse(localStorage.getItem("SaveGamewft") || "{}");
                      v1177.realServerName = v1176;
                      localStorage.setItem("SaveGamewft", JSON.stringify(v1177));
                    } catch (e63) {
                      console.error("خطأ في حفظ اسم السيرفر:", e63);
                    }
                    if (typeof vO3 !== "undefined") {
                      if (vO3.containerImgS && vO3.onclickServer) {
                        vO3.containerImgS.texture = vO3.onclickServer;
                      }
                    }
                    if (typeof retundFlagError === "function") {
                      retundFlagError();
                    }
                    window.server_url = v1173;
                    $("#mm-action-play").click();
                    $("#adbl-continue").click();
                    setTimeout(f158, 500);
                    setTimeout(f158, 2000);
                  });
                }
              } else {
                $(".servers-" + p937).append("\n            <div style=\"text-align:center; padding:20px; color:#aaa;\">\n              No servers available in this region\n            </div>\n          ");
              }
            });
          } else {
            $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").html("\n        <div style=\"text-align:center; padding:20px; color:#aaa;\">\n          Loading servers... Please wait.\n        </div>\n      ");
          }
          _0x4c9ec5();
        }
        function f157(p941) {
          if (p941 >= 1000000) {
            return (p941 / 1000000).toFixed(2) + "M";
          } else if (p941 >= 1000) {
            return (p941 / 1000).toFixed(1) + "K";
          } else {
            return p941.toFixed(0);
          }
        }
        function f158() {
          if (!window.realServerName) {
            return;
          }
          document.querySelectorAll("text, span, div").forEach(p942 => {
            const v1178 = p942.textContent || "";
            if (v1178.includes("wss://") || v1178.includes(".wormate.io") || v1178.includes("/wormy") || v1178.match(/[a-z]+-\d+/i)) {
              p942.textContent = window.realServerName;
              if (p942.text !== undefined) {
                p942.text = window.realServerName;
              }
            }
          });
          if (window.mapText && window.mapText.text !== undefined) {
            window.mapText.text = window.realServerName;
          }
        }
        function f159() {
          try {
            const v1179 = window.savedData || window.savedData;
            if (v1179 && typeof v1179.Bq === "function") {
              const v1180 = v1179.Bq;
              v1179.Bq = function (p943, p944) {
                const v1181 = v1180.apply(this, arguments);
                setTimeout(function () {
                  try {
                    const v1182 = window.realServerName || function () {
                      try {
                        const v1183 = JSON.parse(localStorage.getItem("SaveGamewft") || "{}");
                        return v1183.realServerName || "";
                      } catch (e64) {
                        return "";
                      }
                    }();
                    if (window.mapText && window.mapText.text && v1182) {
                      window.mapText.text = v1182;
                    }
                  } catch (e65) {
                    console.error("خطأ في تحديث عرض اسم السيرفر:", e65);
                  }
                }, 100);
                return v1181;
              };
              console.log("✅ تم تعديل دالة عرض اسم السيرفر بنجاح");
            }
          } catch (e66) {
            console.error("❌ خطأ في تعديل دالة عرض اسم السيرفر:", e66);
          }
        }
        window._0x4c9ec5 = function () {
          fetch("https://wormmedia.xyz:4000/api/live-scores?t=" + Date.now()).then(p945 => p945.json()).then(p946 => {
            if (p946 && p946.success && Array.isArray(p946.data)) {
              $(".selectSala").each(function () {
                const v$19 = $(this);
                const v1184 = v$19.attr("value").trim();
                const v1185 = p946.data.find(p947 => p947.serverUrl === v1184);
                v$19.find(".green-dot").css("display", "none");
                if (v1185 && v1185.YT.length > 0) {
                  v$19.data("YT", JSON.stringify(v1185.YT));
                  const v1186 = v1185.YT[0];
                  const vF157 = f157(v1186.score);
                  const v1187 = v1186.score >= 1000000;
                  v$19.find(".server-score").html("<span class=\"score-display " + (v1187 ? "million" : "regular") + "\">" + vF157 + "</span>");
                  const v1188 = v1185.YT.filter(p948 => p948.score >= 1000000).length;
                  if (v1188 >= 4) {
                    v$19.find(".green-dot").css("display", "block");
                  }
                } else {
                  v$19.find(".server-score").html("-");
                }
              });
            }
          }).catch(p949 => console.error("API error:", p949));
        };
        function f160() {
          $(document).on("mouseenter", ".server-score", function (p950) {
            $(".player-tooltip").remove();
            const v1189 = $(this).closest(".selectSala");
            const v1190 = v1189.data("YT");
            if (!v1190) {
              return;
            }
            let vA21 = [];
            try {
              vA21 = typeof v1190 === "string" ? JSON.parse(v1190) : v1190;
            } catch (e67) {
              return;
            }
            if (!vA21 || !vA21.length) {
              return;
            }
            let vLStable = "<table>";
            const v1191 = Math.min(vA21.length, 10);
            for (let vLN0150 = 0; vLN0150 < v1191; vLN0150++) {
              const v1192 = vA21[vLN0150];
              vLStable += "<tr>\n          <td class=\"rank\">" + (vLN0150 + 1) + "-</td>\n          <td class=\"name\">" + (v1192.name || "Player_" + v1192.id) + "</td>\n          <td class=\"score\">" + f157(v1192.score) + "</td>\n        </tr>";
            }
            vLStable += "</table>";
            const v1193 = $("<div class=\"player-tooltip\"></div>").html(vLStable).css({
              top: p950.pageY + 10,
              left: p950.pageX + 10
            });
            $("body").append(v1193);
            $(this).data("tooltip", v1193);
          });
          $(document).on("mouseleave", ".server-score", function () {
            const v1194 = $(this).data("tooltip");
            if (v1194) {
              setTimeout(function () {
                v1194.remove();
              }, 100);
            }
          });
          $(document).on("mousemove", ".server-score", function (p951) {
            const v1195 = $(this).data("tooltip");
            if (v1195) {
              v1195.css({
                top: p951.pageY + 10,
                left: p951.pageX + 10
              });
            }
          });
        }
        $("#sort-toggle").on({
          mouseenter: function (p952) {
            var v$20 = $("#custom-tooltip");
            var v1196 = $(this).offset();
            var v1197 = $(this).outerWidth();
            var v1198 = v$20.outerWidth();
            v$20.css({
              left: v1196.left + v1197 / 2 - v1198 / 2,
              top: v1196.top + 30
            }).fadeIn(200);
          },
          mouseleave: function () {
            $("#custom-tooltip").fadeOut(200);
          }
        });
        $("#sort-toggle").click(function () {
          if (window.currentDisplayMode === "timmap") {
            window.currentDisplayMode = "wormworld";
            $(this).addClass("wormworld").text("WormWorld Servers");
            $(".server-number").css("color", "#00a8ff");
          } else {
            window.currentDisplayMode = "timmap";
            $(this).removeClass("wormworld").text("Timmap Servers");
            $(".server-number").css("color", "#f00");
          }
          f156();
          setTimeout(function () {
            if (window.currentDisplayMode === "wormworld") {
              $(".server-number").css("color", "#00a8ff");
            } else {
              $(".server-number").css("color", "#f00");
            }
          }, 100);
        });
        function f161(p953) {
          if (!window.servers || !window.servers.Api_listServer || window.servers.Api_listServer.length === 0) {
            return;
          }
          $(".selectSala").hide();
          Object.keys(regionNames).forEach(p954 => {
            const v1199 = window.servers.Api_listServer.filter(p955 => p955.region === p954);
            if (v1199.length > 0) {
              const v1200 = v1199.filter(p956 => {
                if (p953 === "timmap") {
                  return p956.timmap;
                } else {
                  return p956.wormworld;
                }
              });
              v1200.sort((p957, p958) => {
                const v1201 = p953 === "timmap" ? p957.timmap || 0 : p957.wormworld || 0;
                const v1202 = p953 === "timmap" ? p958.timmap || 0 : p958.wormworld || 0;
                return v1201 - v1202;
              });
              v1200.forEach(p959 => {
                const v1203 = p953 === "timmap" ? p959.timmap : p959.wormworld;
                const v1204 = ".selectSala[value=\"" + p959.serverUrl + "\"]";
                const v$21 = $(v1204);
                if (v$21.length) {
                  v$21.find(".server-number").text(v1203 + ".");
                  v$21.find(".server-region").text(v$21.attr("data-region-name") + " " + v1203);
                  v$21.attr("data-server-number", v1203);
                  if ($(".servers-" + p954).is(":visible")) {
                    v$21.show();
                  }
                }
              });
            }
          });
        }
        function f162() {
          if (window.currentDisplayMode === "wormworld") {
            $(".server-number").css("color", "#00a8ff");
          } else {
            $(".server-number").css("color", "#f00");
          }
        }
        $(".ui-tab").on("click", f155);
        $(".flag").click(function () {
          let v1205 = $(this).attr("value");
          if (typeof theoKzObjects !== "undefined") {
            theoKzObjects.flag = v1205;
          }
          if (typeof vO3 !== "undefined" && vO3.containerImgS) {
            vO3.containerImgS.texture = vO3.onclickServer;
          }
          if (typeof retundFlagError === "function") {
            retundFlagError();
          }
        });
        f155();
        f160();
        f159();
        f151().then(p960 => {
          if (p960) {
            f156();
            setTimeout(function () {
              let vLN0151 = 0;
              let vSetInterval = setInterval(function () {
                if (vLN0151 >= 6) {
                  clearInterval(vSetInterval);
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
                  f156();
                  return;
                }
                if (vLN0151 % 2 === 0) {
                  window.currentDisplayMode = "wormworld";
                  $("#sort-toggle").addClass("wormworld").text("WormWorld Servers");
                  $(".server-number").css("color", "#00a8ff");
                } else {
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
                }
                if (vLN0151 === 0 || vLN0151 === 1) {
                  f156();
                }
                vLN0151++;
              }, 700);
            }, 1500);
          }
        });
      }
      p927(p926);
      window.PerformanceMonitor = {
        lastTime: performance.now(),
        frameCount: 0,
        fps: 0,
        cpuUsage: 0,
        fpsDisplay: null,
        cpuDisplay: null,
        isFpsVisible: false,
        isCpuVisible: false,
        cpuSamples: [],
        cpuSampleSize: 10,
        lastCpuTime: 0,
        isInitialized: false,
        _cpuMonitoringInterval: null,
        _animFrameId: null,
        init() {
          if (this.isInitialized) {
            return;
          }
          this.isInitialized = true;
          const v1206 = localStorage.getItem("showFpsCpu");
          if (v1206 !== null) {
            this.isFpsVisible = v1206 === "true";
            this.isCpuVisible = v1206 === "true";
          }
          this.createDisplayElements();
          if (this.isFpsVisible || this.isCpuVisible) {
            this.startAllMonitoring();
          }
          this.setupKeyboardControls();
          this.updateDisplays();
          this.setupToggleButton();
        },
        startAllMonitoring() {
          if (this.isFpsVisible && !this._animFrameId) {
            this.startMonitoring();
          }
          if (this.isCpuVisible && !this._cpuMonitoringInterval) {
            this.startCpuMonitoring();
          }
        },
        stopAllMonitoring() {
          if (this._cpuMonitoringInterval) {
            console.log("Stopping CPU monitoring completely");
            clearInterval(this._cpuMonitoringInterval);
            this._cpuMonitoringInterval = null;
          }
          if (this._animFrameId) {
            console.log("Stopping FPS monitoring completely");
            cancelAnimationFrame(this._animFrameId);
            this._animFrameId = null;
          }
        },
        setupToggleButton() {
          const v1207 = document.getElementById("performance-monitor-toggle");
          if (v1207) {
            v1207.checked = this.isFpsVisible || this.isCpuVisible;
            v1207.addEventListener("change", () => {
              const v1208 = v1207.checked;
              this.toggle(v1208);
            });
          } else {
            setTimeout(() => {
              const v1209 = document.getElementById("performance-monitor-toggle");
              if (v1209) {
                v1209.checked = this.isFpsVisible || this.isCpuVisible;
                v1209.addEventListener("change", () => {
                  this.toggle(v1209.checked);
                });
              }
            }, 1000);
          }
        },
        createDisplayElements() {
          const v1210 = document.getElementById("performance-monitor-style");
          if (!v1210) {
            const v1211 = document.createElement("style");
            v1211.id = "performance-monitor-style";
            v1211.textContent = "\n                .performance-monitor-container {\n                    position: fixed;\n                    right: 5px;\n                    bottom: 5px;\n                    display: flex;\n                    gap: 5px;\n                    z-index: 9999;\n                    font-family: Arial, sans-serif;\n                    pointer-events: none;\n                    user-select: none;\n                }\n                .monitor-element {\n                    background-color: rgba(0, 0, 0, 0.5);\n                    font-size: 12px;\n                    height: 20px;\n                    line-height: 20px;\n                    border-radius: 4px;\n                    font-weight: bold;\n                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n                    padding: 0 8px;\n                    white-space: nowrap;\n                    box-sizing: border-box;\n                    display: none;\n                }\n            ";
            document.head.appendChild(v1211);
          }
          let v1212 = document.querySelector(".performance-monitor-container");
          if (!v1212) {
            v1212 = document.createElement("div");
            v1212.className = "performance-monitor-container";
            document.body.appendChild(v1212);
          }
          if (!this.fpsDisplay) {
            this.fpsDisplay = document.createElement("div");
            this.fpsDisplay.className = "monitor-element";
            v1212.appendChild(this.fpsDisplay);
          }
          if (!this.cpuDisplay) {
            this.cpuDisplay = document.createElement("div");
            this.cpuDisplay.className = "monitor-element";
            v1212.appendChild(this.cpuDisplay);
          }
        },
        startCpuMonitoring() {
          if (!this.isCpuVisible) {
            return;
          }
          if (this._cpuMonitoringInterval) {
            clearInterval(this._cpuMonitoringInterval);
          }
          this.lastCpuTime = performance.now();
          this.cpuSamples = [];
          this._cpuMonitoringInterval = setInterval(() => {
            if (!this.isCpuVisible) {
              clearInterval(this._cpuMonitoringInterval);
              this._cpuMonitoringInterval = null;
              console.log("CPU monitoring stopped because it was disabled");
              return;
            }
            this.measureCpuUsage();
          }, 500);
        },
        measureCpuUsage() {
          const v1213 = performance.now();
          const v1214 = v1213 - this.lastCpuTime;
          const vLN60 = 60;
          const v1215 = Math.max(0, vLN60 - this.fps) / vLN60;
          let vLN0152 = 0;
          if (window.performance && window.performance.timing) {
            const v1216 = window.performance.timing;
            vLN0152 = v1216.domComplete - v1216.navigationStart;
          }
          const v1217 = Math.min(1, window.anApp ? 0.7 : 0.3);
          const v1218 = Math.min(100, Math.round((v1215 * 70 + vLN0152 / 1000 * 30) * v1217));
          this.cpuSamples.push(v1218);
          if (this.cpuSamples.length > this.cpuSampleSize) {
            this.cpuSamples.shift();
          }
          this.cpuUsage = Math.round(this.cpuSamples.reduce((p961, p962) => p961 + p962, 0) / this.cpuSamples.length);
          this.lastCpuTime = v1213;
          this.updateDisplays();
        },
        startMonitoring() {
          if (!this.isFpsVisible) {
            return;
          }
          if (this._animFrameId) {
            cancelAnimationFrame(this._animFrameId);
          }
          const vF46 = () => {
            if (!this.isFpsVisible) {
              cancelAnimationFrame(this._animFrameId);
              this._animFrameId = null;
              return;
            }
            const v1219 = performance.now();
            const v1220 = v1219 - this.lastTime;
            this.frameCount++;
            if (v1220 >= 1000) {
              this.fps = Math.round(this.frameCount * 1000 / v1220);
              this.frameCount = 0;
              this.lastTime = v1219;
              this.updateDisplays();
            }
            this._animFrameId = requestAnimationFrame(vF46);
          };
          this._animFrameId = requestAnimationFrame(vF46);
        },
        updateDisplays() {
          if (!this.fpsDisplay || !this.cpuDisplay) {
            return;
          }
          if (this.isFpsVisible) {
            this.fpsDisplay.textContent = "FPS: " + this.fps;
            if (this.fps >= 58) {
              this.fpsDisplay.style.color = "white";
            } else if (this.fps >= 30) {
              this.fpsDisplay.style.color = "gold";
            } else {
              this.fpsDisplay.style.color = "red";
            }
            this.fpsDisplay.style.display = "block";
          } else {
            this.fpsDisplay.style.display = "none";
          }
          if (this.isCpuVisible) {
            this.cpuDisplay.textContent = "CPU: " + this.cpuUsage + "%";
            if (this.cpuUsage <= 50) {
              this.cpuDisplay.style.color = "white";
            } else if (this.cpuUsage <= 80) {
              this.cpuDisplay.style.color = "gold";
            } else {
              this.cpuDisplay.style.color = "red";
            }
            this.cpuDisplay.style.display = "block";
          } else {
            this.cpuDisplay.style.display = "none";
          }
        },
        setupKeyboardControls() {
          if (this._hasSetupKeyboardControls) {
            return;
          }
          this._hasSetupKeyboardControls = true;
          document.addEventListener("keydown", p963 => {
            if (p963.key === "F2" || p963.code === "F2" || p963.keyCode === 113) {
              p963.preventDefault();
              this.isCpuVisible = !this.isCpuVisible;
              if (this.isCpuVisible && !this._cpuMonitoringInterval) {
                this.startCpuMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            } else if (p963.key === "F4" || p963.code === "F4" || p963.keyCode === 115) {
              p963.preventDefault();
              this.isFpsVisible = !this.isFpsVisible;
              if (this.isFpsVisible && !this._animFrameId) {
                this.startMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            } else if (p963.altKey && (p963.key === "2" || p963.keyCode === 50)) {
              p963.preventDefault();
              this.isCpuVisible = !this.isCpuVisible;
              if (this.isCpuVisible && !this._cpuMonitoringInterval) {
                this.startCpuMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            } else if (p963.altKey && (p963.key === "4" || p963.keyCode === 52)) {
              p963.preventDefault();
              this.isFpsVisible = !this.isFpsVisible;
              if (this.isFpsVisible && !this._animFrameId) {
                this.startMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            }
          }, true);
        },
        saveSettings() {
          const v1221 = this.isFpsVisible || this.isCpuVisible;
          localStorage.setItem("showFpsCpu", v1221);
        },
        updateToggleButton() {
          const v1222 = document.getElementById("performance-monitor-toggle");
          if (v1222) {
            v1222.checked = this.isFpsVisible || this.isCpuVisible;
          }
        },
        toggle(p964) {
          if (typeof p964 !== "boolean") {
            p964 = !this.isFpsVisible && !this.isCpuVisible;
          }
          const v1223 = this.isFpsVisible;
          const v1224 = this.isCpuVisible;
          this.isFpsVisible = p964;
          this.isCpuVisible = p964;
          this.saveSettings();
          if (p964) {
            if (!v1223 && this.isFpsVisible) {
              this.startMonitoring();
            }
            if (!v1224 && this.isCpuVisible) {
              this.startCpuMonitoring();
            }
          } else {
            this.stopAllMonitoring();
          }
          this.updateDisplays();
        },
        enable(p965) {
          if (p965) {
            if (!this.isInitialized) {
              this.init();
            } else {
              this.toggle(true);
            }
          } else {
            this.toggle(false);
          }
        }
      };
      $(".profile-user").append("<div class=\"idwormate\"><input type=\"text\" value=\"" + p926.userId + "\" style=\"max-width: 300px; width: 350px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; display: inline-block; margin-right: 10px;\"/><button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText('" + p926.userId + "').then(()=> alert('Your ID " + p926.userId + " copied!'));\">Copy</button><button id=\"btn_activate\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #4CAF50; color: white; border: none; cursor: pointer; margin-left: 10px;\" onclick=\"window.open('https://t.me/wormateactivate/', '_blank');\">Activate</button><button id=\"resetScript\" style=\"width: 120px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #2196F3; color: white; border: none; cursor: pointer; margin-left: 10px;\" onclick=\"resetScript();\">Version 🔁</button></div>");
      var vLS10 = "";
      if (v1138.e === "not_empty") {
        vLS10 = "<input type=\"button\" value=\"" + v1138.ccg[3] + "\" id=\"btnRePlay\">";
        vO14.s_w = v1138.sw == 1;
      }
      vF43(v1138.s11);
      $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + v1138.ccg[4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + v1138.ccg[5] + "\" id=\"btn_in_t\" style=\"display:none;\"/>" + vLS10 + "</div>");
      document.getElementById("btnFullScreen").addEventListener("click", function () {
        let v1225 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (v1225 && !vO14.fullscreen) {
          try {
            vO14.fullscreen = true;
            v1225.call(document.documentElement);
          } catch (e68) {}
        } else {
          vO14.fullscreen = false;
          document.exitFullscreen();
        }
      });
      if (v1138.e === "not_empty") {
        document.getElementById("btnRePlay").addEventListener("click", function () {
          $("#port_id_s").val(vO14.pi);
          $("#port_name_s").val(vO14.pn);
          $("#port_id").val($("#port_id_s").val());
          $("#port_name").val($("#port_name_s").val());
          document.getElementById("mm-action-play").click();
        });
      }
      if (!window.wftObjects) {
        window.wftObjects = {
          eat_animation: 0.0025,
          smoothCamera: 0.5,
          PortionSize: 2,
          PortionAura: 1.2,
          PortionTransparent: 0.8,
          FoodTransparent: 0.3,
          FoodSize: 2,
          FoodShadow: 2,
          zoomSpeed: 0.003,
          soundEnabled: false,
          soundVolume: 50,
          soundEffect: "https://wormx.store/video/hs_2.mp3"
        };
      }
      try {
        const v1226 = JSON.parse(localStorage.getItem("wftSettings"));
        if (v1226) {
          for (const v1227 in v1226) {
            if (wftObjects.hasOwnProperty(v1227)) {
              wftObjects[v1227] = v1226[v1227];
            }
          }
        }
      } catch (e69) {
        console.error("Error loading wft settings:", e69);
      }
      function f163() {
        try {
          localStorage.setItem("wftSettings", JSON.stringify(wftObjects));
        } catch (e70) {
          console.error("Error saving wft settings:", e70);
        }
      }
      $("#op_wft").remove();
      $("#modal_wft").remove();
      if (vO14.s_w) {
        $("<link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'/>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\">\n<button id=\"btn_crsw\" style=\"display: none;\">💡</button> \n<button id=\"op_wft\" class=\"op_wft\">⚙️ Settings</button> \n<div id=\"modal_wft\" class=\"modal\"> \n  <div class=\"modal-content\"> \n    <div class=\"modal-header\"> \n      <span class=\"close\">&times;</span> \n      <h2 class=\"modal-title\">WORMXT SETTINGS</h2>\n    </div>\n    \n    <div id=\"modal_wft_body\" class=\"modal-body\">\n      <!-- Settings layout with sidebar and content -->\n      <div class=\"settings-layout\">\n        <!-- Sidebar -->\n        <div class=\"settings-sidebar\">\n          <div class=\"sidebar-item active\" data-tab=\"game-settings\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>\n            </svg>\n            <span>Game Settings</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"mobile-settings\" id=\"mobile-tab-item\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect>\n              <line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"></line>\n            </svg>\n            <span>Mobile Controls</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"sound-laser-settings\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M22 12h-4l-3 9L9 3l-3 9H2\"></path>\n            </svg>\n            <span>Laser Settings</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"power-ups\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n              <polyline points=\"12 6 12 12 16 14\"></polyline>\n            </svg>\n            <span>Power-ups & Zoom</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"messages\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>\n            </svg>\n            <span>Messages</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"backgrounds\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n              <circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle>\n              <polyline points=\"21 15 16 10 5 21\"></polyline>\n            </svg>\n            <span>Backgrounds</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"cursors\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path>\n              <path d=\"M13 13l6 6\"></path>\n            </svg>\n            <span>Cursors</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"about\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n              <line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line>\n              <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>\n            </svg>\n            <span>About</span>\n          </div>\n        </div>\n        \n        <!-- Content Area -->\n        <div class=\"settings-content\">\n          <!-- Game Settings Tab -->\n          <div id=\"game-settings-tab\" class=\"tab-content\">\n            <h3>Wormxt Settings</h3>\n            \n            <div id=\"div_server\" style=\"position: absolute; opacity: 0; top: -9999px; left: -9999px; pointer-events: auto;\">\n              <label for=\"sel_server\">Country</label> \n              <select id=\"sel_country\"></select>\n            </div>\n            \n            <!-- Wormxt Options Section -->\n            <div class=\"section-title\">Wormxt Options</div>\n            <div class=\"settings-grid\">\n              <!-- Fast Eating -->\n              <div class=\"setting-item\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-bolt\" style=\"color: #ffbb00;\"></i>\n                  <label>Fast Eating</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"eating_speed_toggle\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- ZigZag -->\n              <div class=\"setting-item\" id=\"div_zigzag\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-eye\" style=\"color: #ffbb00;\"></i>\n                  <label>ZigZag Type</label>\n                  <img style=\"height: 18px;\" src=\"https://wormx.store/images/cors-proxy.phpimg=img/zigzag.png\">\n                </span>\n                <select id=\"zigzag_selector\">\n                  <option value=\"0\">None</option>\n                  <option value=\"1\">Type 1</option>\n                  <option value=\"2\">Type 2</option>\n                  <option value=\"3\">Type 3</option>\n                </select>\n              </div>\n              \n              <!-- Show Speed -->\n              <div class=\"setting-item\" id=\"div_speed\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-tachometer-alt\" style=\"color: #ffbb00;\"></i>\n                  <label>Show Speed</label>\n                  <img style=\"height: 18px;\" src=\"https://wormx.store/images/cors-proxy.phpimg=img/speed.png\">\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"wftspeed\" value=\"true\" checked>\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Total Kill-Headshot -->\n              <div class=\"setting-item\" id=\"div_save\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-crosshairs\" style=\"color: #ffbb00;\"></i>\n                  <label for=\"saveGame\">Total Kill/Headshot</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"saveGame\" value=\"true\" checked>\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Show FPS/CPU -->\n              <div class=\"setting-item\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-microchip\" style=\"color: #ffbb00;\"></i>\n                  <label>Show FPS/CPU</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"performance-monitor-toggle\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Visual Pulse Effects -->\n              <div class=\"setting-item\" id=\"div_pulse_effects\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-wave-square\" style=\"color: #ffbb00;\"></i>\n                  <label>Visual Pulse Effects</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"pulse_effects_enabled\" checked>\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Screen Mode -->\n              <div class=\"setting-item\" id=\"div_w1\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-desktop\" style=\"color: #ffbb00;\"></i>\n                  <label>Screen Mode</label>\n                </span>\n                <select id=\"sel_sc\">\n                  <option value=\"0\">100%</option>\n                  <option value=\"1\">75%</option>\n                  <option value=\"2\">Center</option>\n                </select>\n              </div>\n              \n              <!-- Smooth Level -->\n              <div class=\"setting-item\" id=\"div_sm\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-sliders-h\" style=\"color: #ffbb00;\"></i>\n                  <label>Smooth movement</label>\n                </span>\n                <select id=\"sel_sm\">\n                  <option value=\"20\">Normal</option>\n                  <option value=\"10\">High</option>\n                </select>\n              </div>\n              \n              <!-- Top YT -->\n              <div class=\"setting-item\" id=\"div_top\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-trophy\" style=\"color: #ffbb00;\"></i>\n                  <label>Top YT</label>\n                </span>\n                <select id=\"sel_top\">\n                  <option value=\"0\">0</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n              </div>\n            </div>\n            \n            <!-- Sound Settings -->\n            <div class=\"sound-settings-container\">\n              <div class=\"setting-group\">\n                <div class=\"settings-row\">\n                  <!-- Sound Effects Label on Left -->\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-volume-up\" style=\"color: #ffbb00;\"></i>\n                    <div class=\"sound-effects-title\">Sound Effects</div>\n                  </span>\n                  \n                <!-- Headshot Sound Selector -->\n                <select id=\"sound_effect_selector\">\n                  <option value=\"https://wormx.store/video/hs_2.mp3\">Default Headshot</option>\n                  <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Headshot Sound</option>\n                  <option value=\"https://wormx.store/video/emaat.mp3\">Emaat</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper Shot</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Headshot 2</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">Alqm</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\">Bye Bye</option>\n                  <option value=\"https://wormx.store/video/Aelo-Adi.MP3\">Adelo Adi</option>\n                  <option value=\"https://wormx.store/video/alalobee.mp3\">Ala Loby</option>\n                  <option value=\"https://wormx.store/video/laugh.mp3\">Laugh</option>\n                  <option value=\"https://wormx.store/video/mario-jump.mp3\">Mario Jump</option>\n                  <option value=\"https://wormx.store/video/pew.mp3\">Pew</option>\n                  <option value=\"https://wormx.store/video/pingo.mp3\">Pingo</option>\n                  <option value=\"https://wormx.store/video/wak-wak.mp3\">Wak Wak</option>\n                </select>\n                \n                <!-- 10th Headshot Sound -->\n                <select id=\"monster_kill_selector\">\n                  <option value=\"https://wormx.store/video/monster-kill-hahaha.MP3\">Monster Kill</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/mk.mp3\">Monster Kill 2</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/hea-hea-headshot.mp3\">Monster Kill 3</option>\n                </select>\n                  \n                  <!-- Volume Control without label -->\n                  <div class=\"volume-slider-container\">\n                    <input type=\"range\" id=\"volume_slider\" min=\"0\" max=\"100\" step=\"1\" value=\"40\">\n                    <span id=\"volume_value\" class=\"slider-value\">40</span>\n                  </div>\n                  \n                  <!-- Toggle Switch on far right -->\n                <div class=\"sound-toggle\">\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"wftsound\" value=\"true\">\n                    <span class=\"slider round\"></span>\n                  </label>\n                </div>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Custom Skin Upload Section -->\n            <div class=\"section-title\">Custom Skin</div>\n            <div class=\"setting-group\" id=\"div_crsw\">\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-file-image\" style=\"color: #ffbb00;\"></i>\n                    <label>Skin File.... Only (skin.json)</label>\n                  </span>\n                  <div style=\"display: flex; flex-grow: 1; gap: 10px;\">\n                    <input type=\"file\" accept=\".json\" id=\"fileSkin\" style=\"flex-grow: 1;\" />\n                    <button id=\"btn_clear_file\">Clear</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Audio elements -->\n            <audio id=\"s_h\"><source src=\"https://wormx.store/video/hs_2.mp3\" type=\"audio/mpeg\"></audio>\n            <audio id=\"monster_kill_sound\"><source src=\"https://wormx.store/video/monster-kill-hahaha.MP3\" type=\"audio/mpeg\"></audio>\n            <audio id=\"sound_test_audio\"></audio>\n          </div>\n          \n          <!-- Mobile Settings Tab -->\n          <div id=\"mobile-settings-tab\" class=\"tab-content\">\n            <h3>Mobile Controls</h3>\n            \n            <div class=\"setting-group\">\n              <div class=\"setting-group-header\">Joystick Settings</div>\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-gamepad\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_checked\">Enable Joystick</label>\n                  </span>\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"joystick_checked\" checked>\n                    <span class=\"slider\"></span>\n                  </label>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_color\">Joystick Color</label>\n                  </span>\n                  <select id=\"joystick_color\">\n                    <option value=\"red\">Red</option>\n                    <option value=\"blue\">Blue</option>\n                    <option value=\"green\">Green</option>\n                    <option value=\"yellow\">Yellow</option>\n                    <option value=\"purple\">Purple</option>\n                    <option value=\"orange\">Orange</option>\n                  </select>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-cog\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_mode\">Joystick Mode</label>\n                  </span>\n                  <select id=\"joystick_mode\">\n                    <option value=\"static\">Static</option>\n                    <option value=\"dynamic\">Dynamic</option>\n                  </select>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-map-marker-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_position\">Position</label>\n                  </span>\n                  <select id=\"joystick_position\">\n                    <option value=\"L\">Left</option>\n                    <option value=\"R\">Right</option>\n                  </select>\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-expand-arrows-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_size\">Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"joystick_size\" min=\"50\" max=\"150\" step=\"10\" value=\"100\">\n                    <span id=\"joystick_size_value\" class=\"slider-value\">100</span>\n                  </div>\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_pxy\">Opacity</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"joystick_pxy\" min=\"50\" max=\"150\" step=\"10\" value=\"100\">\n                    <span id=\"joystick_pxy_value\" class=\"slider-value\">100</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div id=\"config_mobile\">\n              <!-- Additional mobile settings will be loaded here -->\n            </div>\n          </div>\n          \n          <!-- Laser Settings Tab -->\n          <div id=\"sound-laser-settings-tab\" class=\"tab-content\">\n            <h3>Laser Settings</h3>\n            \n            <div class=\"section-title\">Laser Settings</div>\n            <div class=\"setting-group\" id=\"div_Laser\">\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-bullseye\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"Laserup\">Enable Laser</label>\n                  </span>\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"Laserup\" value=\"true\">\n                    <span class=\"slider\"></span>\n                  </label>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"laser_color_picker\">Color</label>\n                  </span>\n                  <input type=\"color\" id=\"laser_color_picker\" value=\"#FFD700\">\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"laser_opacity_slider\">Opacity</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"laser_opacity_slider\" min=\"10\" max=\"100\" step=\"10\" value=\"50\">\n                    <span id=\"laser_opacity_value\" class=\"slider-value\">50</span>\n                    <button id=\"reset_laser_settings\" class=\"reset-btn\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\n                    <label>Keyboard Shortcuts:</label>\n                  </span>\n                  <div style=\"flex-grow: 1; text-align: right;\">\n                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>L</strong> - Toggle laser</span>\n                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>O</strong> - Increase opacity</span>\n                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>P</strong> - Decrease opacity</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <!-- Power-ups Tab -->\n          <div id=\"power-ups-tab\" class=\"tab-content\">\n            <h3>Power-ups & Zoom Settings</h3>\n            \n            <div class=\"section-title\">Advanced Controls</div>\n            <div class=\"setting-group\">\n              <div class=\"setting-group-content\">\n                <!-- Spin Fast -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-sync-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"spin_fast_slider\">Spin Fast</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"spin_fast_slider\" min=\"0.3\" max=\"0.6\" step=\"0.1\" value=\"0.5\">\n                    <span id=\"spin_fast_value\" class=\"slider-value\">0.5</span>\n                    <button class=\"reset-btn\" data-reset=\"spin_fast\" data-default=\"0.5\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Power-ups Size -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-expand\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"portion_size_slider\">Power-ups Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"portion_size_slider\" min=\"1\" max=\"6\" step=\"1\" value=\"2\">\n                    <span id=\"portion_size_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"portion_size\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Power-ups Aura -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-radiation-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"portion_aura_slider\">Power-ups Aura</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"portion_aura_slider\" min=\"1.2\" max=\"3.2\" step=\"0.2\" value=\"1.2\">\n                    <span id=\"portion_aura_value\" class=\"slider-value\">1.2</span>\n                    <button class=\"reset-btn\" data-reset=\"portion_aura\" data-default=\"1.2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Food Size -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-apple-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"food_size_slider\">Food Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"food_size_slider\" min=\"0.5\" max=\"3\" step=\"0.5\" value=\"2\">\n                    <span id=\"food_size_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"food_size\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Food Shadow -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-moon\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"food_shadow_slider\">Food Shadow</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"food_shadow_slider\" min=\"0.5\" max=\"3\" step=\"0.5\" value=\"2\">\n                    <span id=\"food_shadow_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"food_shadow\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"section-title\">Zoom Controls</div>\n            <div class=\"setting-group\">\n              <div class=\"setting-group-content\">\n                <!-- Zoom Speed -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-search-plus\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"zoom_speed_slider\">Zoom Speed</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"zoom_speed_slider\" min=\"0.001\" max=\"0.01\" step=\"0.001\" value=\"0.003\">\n                    <span id=\"zoom_speed_value\" class=\"slider-value\">0.003</span>\n                    <button class=\"reset-btn\" data-reset=\"zoom_speed\" data-default=\"0.003\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div id=\"div_game_enhancements\"></div>\n          </div>\n          \n          <!-- Messages Tab -->\n            <div id=\"messages-tab\" class=\"tab-content\">\n              <h3>Messages</h3>\n              \n              <!-- Default Kill&Headshot Toggle -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-header\">\n                  <div class=\"header-with-toggle\">\n                    <span>Kill&Headshot Settings</span>\n                    <div class=\"toggle-container\">\n                      <span class=\"theo-game-label\">\n                        <i class=\"fas fa-skull\" style=\"color: #ffbb00;\"></i>\n                        <label>Default Kill&Headshot</label>\n                      </span>\n                      <label class=\"switch\">\n                        <input type=\"checkbox\" id=\"wftiq\" value=\"true\">\n                        <span class=\"slider\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n              <!-- New Messages Layout -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-header\">Messages</div>\n                <div class=\"setting-group-content\">\n                  <div class=\"messages-container\" id=\"custom-messages-container\">\n                    <!-- Left side: Kill Messages -->\n                    <div class=\"message-column\">\n                      <div class=\"message-header\">\n                        <i class=\"fas fa-crosshairs\" style=\"color: #ffbb00;\"></i>\n                        <span>Kill Messages</span>\n                      </div>\n                      \n                      <div class=\"message-select-container\">\n                        <select id=\"kill_msg\" class=\"message-select\">\n                          <option value=\"KILLED\">KILLED</option>\n                          <option value=\"WASTED\">WASTED</option>\n                          <option value=\"ELIMINATED\">ELIMINATED</option>\n                          <option value=\"DESTROYED\">DESTROYED</option>\n                          <option value=\"FINISHED\">FINISHED</option>\n                          <option value=\"Well Done!\">Well Done!</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <span>Show Player Name</span>\n                        <label class=\"switch small-switch\">\n                          <input type=\"checkbox\" id=\"kill_show_name\" checked>\n                          <span class=\"slider\"></span>\n                        </label>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <select id=\"kill_name_position\" class=\"message-select\">\n                          <option value=\"after\">After Message</option>\n                          <option value=\"before\">Before Message</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-custom\">\n                        <label for=\"kill_custom_text\" class=\"custom-label\">Custom Message</label>\n                        <input type=\"text\" id=\"kill_custom_text\" maxlength=\"20\" placeholder=\"Maximum 20 characters\" class=\"custom-input\">\n                      </div>\n                    </div>\n                    \n                    <!-- Right side: Headshot Messages -->\n                    <div class=\"message-column\">\n                      <div class=\"message-header\">\n                        <i class=\"fas fa-bullseye\" style=\"color: #ffbb00;\"></i>\n                        <span>Headshot Messages</span>\n                      </div>\n                      \n                      <div class=\"message-select-container\">\n                        <select id=\"headshot_msg\" class=\"message-select\">\n                          <option value=\"HEADSHOT\">HEADSHOT</option>\n                          <option value=\"BOOM! HEADSHOT\">BOOM! HEADSHOT</option>\n                          <option value=\"PERFECT AIM\">PERFECT AIM</option>\n                          <option value=\"CRITICAL HIT\">CRITICAL HIT</option>\n                          <option value=\"BULLSEYE\">BULLSEYE</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <span>Show Player Name</span>\n                        <label class=\"switch small-switch\">\n                          <input type=\"checkbox\" id=\"headshot_show_name\" checked>\n                          <span class=\"slider\"></span>\n                        </label>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <select id=\"headshot_name_position\" class=\"message-select\">\n                          <option value=\"after\">After Message</option>\n                          <option value=\"before\">Before Message</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-custom\">\n                        <label for=\"headshot_custom_text\" class=\"custom-label\">Custom Message</label>\n                        <input type=\"text\" id=\"headshot_custom_text\" maxlength=\"20\" placeholder=\"Maximum 20 characters\" class=\"custom-input\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n              <div id=\"div_messages\"></div>\n            </div>\n          \n          <!-- Backgrounds Tab -->\n          <div id=\"backgrounds-tab\" class=\"tab-content\">\n            <h3>Game Backgrounds</h3>\n            \n            <!-- Sector System Section -->\n            <div class=\"section-title\">Sector System</div>\n            <div class=\"sector-system-container\">\n              <div class=\"sector-toggle-row\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-th-large\" style=\"color: #ffbb00;\"></i>\n                  <div class=\"toggle-label\">Enable Sector System</div>\n                </span>\n                <label class=\"toggle-switch\">\n                  <input type=\"checkbox\" id=\"sector_system_toggle\">\n                  <span class=\"toggle-slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Settings Panel - Hidden until enabled -->\n              <div id=\"sector_settings_panel\" class=\"sector-settings-panel\" style=\"display: none;\">\n                <div class=\"sector-main-settings\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-grip-horizontal\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Display Mode</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <select id=\"sector_display_mode\" class=\"sector-select\">\n                        <option value=\"sectors\">Sectors (12)</option>\n                        <option value=\"quarters\">Quarters (4)</option>\n                      </select>\n                    </div>\n                  </div>\n            \n                  <!-- Background Settings -->\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-fill-drip\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Background Color</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <input type=\"color\" id=\"sector_bg_color\" value=\"#000000\" class=\"color-picker\">\n                    </div>\n                  </div>\n                  \n                  <!-- Background Opacity - Always visible -->\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Background Opacity</div>\n                    </span>\n                    <div class=\"setting-control opacity-control\">\n                      <input type=\"range\" id=\"sector_bg_opacity\" min=\"0\" max=\"100\" step=\"5\" value=\"60\" class=\"small-slider\">\n                      <div class=\"slider-value\" id=\"sector_bg_opacity_value\">60%</div>\n                    </div>\n                  </div>\n            \n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-border-style\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Show Lines</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <label class=\"toggle-switch\">\n                        <input type=\"checkbox\" id=\"sector_show_lines\" checked>\n                        <span class=\"toggle-slider\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n            \n                <!-- Lines Options - Hidden when Show Lines is off -->\n                <div id=\"sector_lines_options\" class=\"sector-lines-options\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Line Color</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <input type=\"color\" id=\"sector_line_color\" value=\"#FF0000\" class=\"color-picker\">\n                    </div>\n                  </div>\n            \n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-low-vision\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Line Opacity</div>\n                    </span>\n                    <div class=\"setting-control opacity-control\">\n                      <input type=\"range\" id=\"sector_line_opacity\" min=\"0\" max=\"100\" step=\"5\" value=\"30\" class=\"small-slider\">\n                      <div class=\"slider-value\" id=\"sector_line_opacity_value\">30%</div>\n                    </div>\n                  </div>\n                </div>\n            \n                <div class=\"sector-shortcuts\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\n                    <div class=\"shortcuts-title\">Keyboard Shortcuts:</div>\n                  </span>\n                  <div class=\"shortcuts-content\">\n                    <span class=\"shortcut-item\"><strong>S</strong> or <strong>=</strong> - Toggle Sectors</span>\n                    <span class=\"shortcut-item\"><strong>X</strong> - Toggle Quarters</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"background-grid\">\n              <!-- Background items will be added dynamically -->\n            </div>\n          </div>\n          \n        <!-- Cursors Tab -->\n        <div id=\"cursors-tab\" class=\"tab-content\">\n          <h3>Game Cursors</h3>\n          \n          <!-- العنوان في سطر -->\n          <div class=\"setting-row\">\n            <span class=\"theo-game-label\">\n              <i class=\"fas fa-mouse-pointer\" style=\"color: #ffbb00;\"></i>\n              <label>Cursor Selection</label>\n            </span>\n          </div>\n          \n          <!-- الزر في سطر منفصل -->\n          <div class=\"setting-row cursor-controls\">\n            <button id=\"default-cursor-btn\" class=\"secondary-button\">Default Cursor</button>\n            <span id=\"current-cursor-name\">Current: Electrical Plug Cursor</span>\n          </div>\n          \n          <div class=\"cursor-container\">\n            <!-- المؤشرات ستضاف ديناميكياً هنا -->\n          </div>\n          \n          <div id=\"div_cursors\"></div>\n        </div>\n          \n          <!-- About Tab -->\n          <div id=\"about-tab\" class=\"tab-content\">\n            <h3>About WORMXT</h3>\n            \n            <div class=\"about-content\">\n              <p>\n                <i class=\"fas fa-info-circle\" style=\"color: #ffbb00;\"></i>\n                wormxt\n                [WORMXT] is a Chrome extension designed to improve your wormate.io gameplay. Quickly select rooms, customize your worm with vibrant skin colors, and enjoy extra features to enhance your experience.\n              </p>\n              <p>\n                <i class=\"fas fa-calendar-alt\" style=\"color: #ffbb00;\"></i>\n                Release Date: 30/03/2025.\n              </p>\n              <p>\n                <i class=\"fas fa-code-branch\" style=\"color: #ffbb00;\"></i>\n                Version: 2.0.1\n                  <div class=\"button-group\">\n               <button id=\"resetScript\" class=\"reset-button\">Versiyon Change</button>\n              </p>\n              <p>\n                <i class=\"fas fa-users\" style=\"color: #ffbb00;\"></i>\n                Designed by:  YT\n              </p>\n              \n              <p style=\"margin-top: 20px;\">\n                <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\n                <strong>Keyboard Shortcuts:</strong><br>\n                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>L</strong> - Toggle laser</span>\n                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>O</strong> - Increase laser opacity</span>\n                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>P</strong> - Decrease laser opacity</span>\n              </p>\n              \n              <!-- User ID Section -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-content\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-id-card\" style=\"color: #ffbb00;\"></i>\n                      <label for=\"id_customer\">ID: </label>\n                    </span>\n                    <input value=\"" + p926.userId + "\" style=\"max-width: 220px;\" type=\"text\" id=\"id_customer\" readonly>\n                    <button id=\"btn_copy\">\n                      <span class=\"tooltiptext\" id=\"myTooltip\">id copy</span>Copy\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n    \n<!-- Headshot Message Display -->\n<div id=\"headshot-message\"></div>\n").insertAfter("#mm-store");
      } else {
        $("    <button id=\"op_wft\" class=\"op_wft\">" + v1138.ccg[6] + "</button> \n    <div id=\"modal_wft\" class=\"modal\"> \n      <div class=\"modal-content wft-modal\" style=\"max-width: 360px !important; width: 360px !important;\"> \n        <div class=\"center wft-header\" style=\"background-color: #ff8a18; background: linear-gradient(145deg, rgb(255, 141, 0), rgb(255, 102, 0)); padding: 0 15px; height: 36px; line-height: 36px; border-radius: 8px 8px 0 0; position: relative; text-align: center;\"> \n          <span class=\"close\" style=\"position: absolute; left: 15px; top: 6px; color: white; font-size: 24px; font-weight: bold; cursor: pointer;\">×</span> \n          <h2 class=\"modal-title\" style=\"margin: 0; font-size: 18px; color: white;\">Settings</h2>\n        </div> \n        <div id=\"modal_wft_body\" class=\"modal-body wft-body\" style=\"padding: 15px; background-color: #1e2339; color: #fff; border-radius: 0 0 8px 8px;\">\n          <!-- سيتم تحديث المحتوى -->\n        </div> \n      </div>\n    </div>\n  ").insertAfter("#mm-store");
      }
      function f164() {
        const v1228 = v1138.e === "not_empty" || v1254;
        if (!v1228) {
          $("#modal_wft .modal-content").addClass("wft-modal").css({
            "max-width": "360px",
            width: "360px",
            "background": "linear-gradient(145deg, #1e2339, #2a3042)",
            "border-radius": "12px",
            "box-shadow": "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 204, 255, 0.2)",
            "border": "1px solid #4a9bff",
            "max-height": "90vh",
            "overflow-y": "auto"
          });
          $(".settings-sidebar, .settings-layout, .settings-content").hide();
          $("#modal_wft_body").html("\n        <div style=\"text-align: center; margin: 10px auto;\">\n          <label for=\"id_customer\" style=\"display: block; margin-bottom: 5px; font-weight: bold; color: #ddd; text-align: center;\">User ID</label> \n          <div style=\"display: flex; margin: 0 auto; justify-content: center;\">\n            <input value=\"" + p926.userId + "\" style=\"max-width: 200px; width: 200px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; margin-right: 10px;\" type=\"text\" id=\"id_customer\" readonly>\n           <button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText('" + p926.userId + "').then(()=> alert('Your ID " + p926.userId + " copied!'));\">Copy</button>\n          </div>\n        </div>\n        \n        <!-- الخط الفاصل الأول فقط -->\n        <div style=\"border-top: 1px solid #3a4061; margin: 15px 0;\"></div>\n        \n        <!-- طريقة تفعيل الاشتراك الرئيسية - رابط الاتصال -->\n        <div style=\"text-align: center; padding: 10px 0;\">\n          <h3 style=\"color: white; margin: 0 0 8px 0; font-size: 16px;\">Premium Activation - تفعيل الاشتراك المميز</h3>\n          <a href=\"https://wormatefriendsturkey.com/contact\" target=\"_blank\" style=\"display: block; background-color: #4CAF50; color: white; padding: 12px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px auto; width: 80%; max-width: 280px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: all 0.3s; border: 2px solid #65d269;\">\n            <span style=\"display: block; font-size: 16px;\">🔗 Click Here To Activate</span>\n            <span style=\"display: block; font-size: 14px; margin-top: 4px;\">اضغط هنا للتفعيل</span>\n          </a>\n        </div>\n        \n        <!-- صورة البريميم قبل زر الديسكورد -->\n        <div style=\"text-align: center; margin: 15px auto 10px;\">\n            <img src=\"https://wormx.store/images/cors-proxy.php?img=img/premium_features.png\" alt=\"Premium Features\" style=\"max-width: 150px; height: auto; border-radius: 4px; display: block; margin: 0 auto;\">\n        </div>\n        \n        <!-- خيار الانضمام للديسكورد كخيار ثانوي -->\n        <div style=\"text-align: center; padding: 10px 0;\">\n          <a href=\"https://discord.gg/NHWXgJpE\" target=\"_blank\" style=\"display: inline-block; background-color: #5865F2; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: background-color 0.3s;\">\n            <svg style=\"width: 16px; height: 16px; margin-right: 6px; display: inline-block; vertical-align: middle;\" viewBox=\"0 0 24 24\" fill=\"white\">\n              <path d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z\"/>\n            </svg>\n            Join Our Discord\n            <span style=\"display: block; font-size: 0.8em; margin-top: 2px;\">انضم إلى مجتمعنا على Discord</span>\n          </a>\n          <p style=\"margin-top: 8px; color: #aaa; font-size: 12px;\">\n            Get premium features by joining our Discord server\n            <span style=\"display: block; font-size: 0.9em; margin-top: 2px;\">للحصول على الميزات المميزة عبر Discord</span>\n          </p>\n        </div>\n        \n        <div style=\"text-align: center;\">\n          <p style=\"color: #ddd; font-size: 14px; margin: 5px 0;\">\n            <i class=\"fas fa-crown\" style=\"color: #ffbb00;\"></i> Premium\n          </p>\n        </div>\n        ");
        } else {
          $("#modal_wft .modal-content").removeClass("wft-modal").css({
            "background": "linear-gradient(145deg, #1e2339, #2a3042)",
            "border-radius": "12px",
            "box-shadow": "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 204, 255, 0.2)",
            "border": "1px solid #4a9bff",
            "max-width": "90%",
            "width": "800px",
            "max-height": "90vh",
            "overflow-y": "auto"
          });
          $(".settings-sidebar, .settings-layout, .settings-content").show();
          const v1229 = $(".sidebar-item.active").data("tab");
          if (v1229) {
            $(".tab-content").hide();
            $("#" + v1229 + "-tab").show();
          } else {
            $("#game-settings-tab").show();
          }
          if (!vO14.mobile) {
            $("#mobile-tab-item").hide();
          }
        }
      }
      window.openSettingsModal = function () {
        f164();
        $("#modal_backdrop").show();
        $("#modal_wft").css({
          "z-index": "9999",
          display: "block"
        });
        $("body").css("overflow", "hidden");
      };
      window.closeSettingsModal = function () {
        $("#modal_wft").css("display", "none");
        $("#modal_backdrop").hide();
        $("body").css("overflow", "");
      };
      f164();
      function f165() {
        const v1230 = v1138.e === "not_empty" || v1254;
        if (!v1230) {
          $(".settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item").hide();
          $("[id^=\"div_\"]").not("#div_customer").hide();
          $("#eating_speed_toggle, #performance-monitor-toggle, #wftspeed, #saveGame, #pulse_effects_enabled").closest(".setting-item").hide();
          $("[id^=\"sel_\"]").hide();
          $(".switch, .slider-control, .section-title").hide();
          $("#backgrounds-tab, .background-grid, .background-item").hide();
          $("#cursors-tab, .cursor-container, .cursor-item").hide();
          $("#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider").hide();
          $("#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider").hide();
        } else {
          $(".settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item").show();
          $("[id^=\"div_\"]").show();
          $("#eating_speed_toggle, #performance-monitor-toggle, #wftspeed, #saveGame, #pulse_effects_enabled").closest(".setting-item").show();
          $("[id^=\"sel_\"]").show();
          $(".switch, .slider-control, .section-title").show();
          $("#backgrounds-tab, .background-grid, .background-item").show();
          $("#cursors-tab, .cursor-container, .cursor-item").show();
          $("#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider").show();
          $("#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider").show();
          if (!vO14.mobile) {
            $("#mobile-tab-item").hide();
          }
        }
      }
      $(document).ready(function () {
        setTimeout(function () {
          f165();
        }, 100);
        $("#btn_copy").click(function () {
          var v1231 = document.getElementById("id_customer");
          v1231.select();
          v1231.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(v1231.value);
          $("#myTooltip").html("" + v1138.ccg[14] + "!");
          $("#myTooltip").css("visibility", "visible");
          $("#myTooltip").css("opacity", "1");
          setTimeout(function () {
            $("#myTooltip").css("visibility", "hidden");
            $("#myTooltip").css("opacity", "0");
          }, 1500);
        });
        document.getElementById("resetScript").addEventListener("click", async function () {
          localStorage.clear();
          sessionStorage.clear();
          if (window.indexedDB && indexedDB.databases) {
            let v1232 = await indexedDB.databases();
            for (let v1233 of v1232) {
              if (v1233.name) {
                await indexedDB.deleteDatabase(v1233.name);
              }
            }
          }
          if (window.openDatabase) {
            console.warn("Web SQL otomatik olarak JavaScript ile temizlenemez.");
          }
          document.cookie.split(";").forEach(function (p966) {
            document.cookie = p966.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
          });
          if ("caches" in window) {
            let v1234 = await caches.keys();
            for (let v1235 of v1234) {
              await caches.delete(v1235);
            }
          }
          if ("serviceWorker" in navigator) {
            let v1236 = await navigator.serviceWorker.getRegistrations();
            for (let v1237 of v1236) {
              await v1237.unregister();
            }
          }
          localStorage.removeItem("scriptSeleccionado");
          location.reload();
        });
        $("#btn_copy").hover(function () {
          $("#myTooltip").css("visibility", "visible");
          $("#myTooltip").css("opacity", "1");
        }, function () {
          if ($("#myTooltip").text() !== v1138.ccg[14] + "!") {
            $("#myTooltip").css("visibility", "hidden");
            $("#myTooltip").css("opacity", "0");
          }
        });
        if (window.modalFixed) {
          return;
        }
        window.modalFixed = true;
        $("#op_wft").off("click").on("click", function (p967) {
          p967.preventDefault();
          window.openSettingsModal();
          return false;
        });
        var v$22 = $("#modal_wft");
        var v1238 = v$22.css("display");
        $("body").append(v$22.detach());
        var v1239 = $("<div id='modal_backdrop'></div>").css({
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          "background-color": "rgba(0, 0, 0, 0.7)",
          "z-index": "9998",
          display: "none"
        });
        v$22.before(v1239);
        function f166() {
          if ($("#op_wft").length && !$("#op_wft").data("hasClickHandler")) {
            $("#op_wft").off("click").on("click", function (p968) {
              p968.preventDefault();
              window.openSettingsModal();
              return false;
            }).data("hasClickHandler", true);
          }
        }
        f166();
        setInterval(f166, 5000);
        $(".close").off("click").on("click", function () {
          window.closeSettingsModal();
        });
        v1239.on("click", function () {
          window.closeSettingsModal();
        });
      });
      var v1240 = document.getElementById("div_save");
      var v1241 = document.getElementById("div_sound");
      var v1242 = document.getElementById("div_speed");
      var v1243 = document.getElementById("div_zigzag");
      var v1244 = document.getElementById("div_w1");
      var v1245 = document.getElementById("div_sm");
      var v1246 = document.getElementById("sel_sc");
      var v1247 = document.getElementById("div_top");
      var v1248 = document.getElementById("sel_top");
      var v1249 = document.getElementById("div_killmsg");
      var v1250 = document.getElementById("div_background");
      var vA22 = [{
        name: "Vietnam",
        val: "vn"
      }, {
        name: "Thailand",
        val: "th"
      }, {
        name: "Cambodia",
        val: "kh"
      }, {
        name: "Indonesia",
        val: "id"
      }, {
        name: "Singapore",
        val: "sg"
      }, {
        name: "Japan",
        val: "jp"
      }, {
        name: "Mexico",
        val: "mx"
      }, {
        name: "Brazil",
        val: "br"
      }, {
        name: "Canada",
        val: "ca"
      }, {
        name: "Germany",
        val: "de"
      }, {
        name: "France",
        val: "fr"
      }, {
        name: "England",
        val: "gb"
      }, {
        name: "Australia",
        val: "au"
      }, {
        name: "USA",
        val: "us"
      }, {
        name: "Portugal",
        val: "pt"
      }, {
        name: "Turkey",
        val: "tr"
      }, {
        name: v1138.ccg[36],
        val: "iq"
      }];
      let v1251 = document.getElementById("sel_country");
      if (v1251) {
        for (p927 = 0; p927 < vA22.length; p927++) {
          let v1252 = document.createElement("option");
          v1252.value = vA22[p927].val;
          v1252.innerHTML = vA22[p927].name;
          v1251.appendChild(v1252);
        }
        if (v58) {
          v1251.value = v58;
        }
        v1251.onchange = function () {
          let v1253 = v1251.value;
          v58 = v1253;
          localStorage.setItem("oco", v1253);
          var vO57 = {
            id_wormate: p926.userId,
            country: v1253
          };
          fetch("https://wormx.store/2025/check/index.php", {
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(vO57)
          });
          localStorage.removeItem("wftsw");
          window.location.reload();
        };
      }
      var v1254 = false;
      if (v1138.cm === "" || v1138.cm === undefined) ;else {
        var v1255 = document.getElementById("btn_in_t");
        var v1256 = document.getElementById("mm-action-play");
        var v1257 = document.getElementById("port_id");
        if (v1255) {
          v1255.style.display = "block";
          v1255.onclick = function () {
            v1257.value = v1138.cm;
            v1256.click();
          };
          v1254 = true;
        }
      }
      if (v1138.e === "not_connect") ;else {
        vO14.h = v1138.z == "b";
        vO14.hz = v1138.z == "c";
        if (v1138.e === "not_empty" || v1254) {
          var v1258 = ooo.Xg.Kf.Wg.Ah;
          if (v1240) {
            v1240.style.display = "block";
          }
          if (v1241) {
            v1241.style.display = "inline-block";
          }
          // Initialize hierarchical zigzag selector
          if (vO14.zigzag !== undefined) {
            $("#zigzag_selector").val(vO14.zigzag);
          } else {
            vO14.zigzag = 0; // Default to option 0
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          }
          
          $("#zigzag_selector").val(vO14.zigzag);
          $("#zigzag_selector").change(function () {
            vO14.zigzag = parseInt($(this).val());
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
            
            // Update worm mouth to reflect selected zigzag ability
            if (window.bbs && window.bbsConfig) {
              window.bbsConfig.zigzag = vO14.zigzag;
              window.bbs.zigzag = vO14.zigzag;
              
              // Update localStorage with selected zigzag
              localStorage.setItem("selectedZigzag", vO14.zigzag);
              
              // Update the worm's mouth visually
              if (ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah) {
                const worm = ooo.Xg.Kf.Wg.Ah;
                if (worm && worm.Vj) {
                  // Map zigzag options to mouth IDs
                  const mouthMap = {0: 0, 1: 1, 2: 2, 3: 3};
                  worm.Vj = mouthMap[vO14.zigzag] || 0;
                  
                  // Trigger visual refresh
                  if (worm.Zi) {
                    worm.Zi(worm.ki);
                  }
                }
              }
            }
          });
          $("#wftspeed").prop("checked", true);
          $("#wftspeed").change(function () {
            vO14.vp = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          $("#saveGame").prop("checked", vO14.cs);
          $("#saveGame").change(function () {
            vO14.cs = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          if (vO14.mobile) {
            if (v1244) {
              v1244.style.display = "none";
            }
            vO14.sc = 0;
            vO14.wi = 0;
          } else {
            if (v1244) {
              v1244.style.display = "inline-block";
            }
            if (v1246) {
              v1246.value = vO14.sc;
              v1246.onchange = function () {
                vO14.sc = parseInt(v1246.value);
                if (vO14.sc == 1) {
                  vO14.wi = screen.height / (screen.width * 2);
                }
                if (vO14.sc == 2) {
                  vO14.wi = 0;
                }
                localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
              };
            }
          }
          if (v1245) {
            v1245.style.display = "inline-block";
          }
          if (sel_sm) {
            sel_sm.value = vO14.sm;
            sel_sm.onchange = function () {
              vO14.sm = parseInt(sel_sm.value);
              localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
            };
          }
          if (v1247) {
            v1247.style.display = "inline-block";
          }
          if (v1248) {
            v1248.value = vO14.to;
            v1248.onchange = function () {
              vO14.to = parseInt(v1248.value);
              localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
            };
          }
          if (v1251 && v1251.value == "iq" && v1249) {
            v1249.style.display = "inline-block";
            var v$23 = $("#wftiq");
            v$23.prop("checked", vO14.iq);
            v$23.change(function () {
              if (this.checked) {
                vO14.iq = true;
              } else {
                vO14.iq = false;
              }
              localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
            });
          } else {
            vO14.iq = false;
            if (v1249) {
              v1249.style.display = "none";
            }
          }
          const v1259 = localStorage.getItem("showFpsCpu") === "true";
          $("#performance-monitor-toggle").prop("checked", v1259);
          $("#performance-monitor-toggle").change(function () {
            const v1260 = $(this).prop("checked");
            localStorage.setItem("showFpsCpu", v1260);
            if (window.PerformanceMonitor) {
              window.PerformanceMonitor.toggle(v1260);
            }
          });
          if (window.PerformanceMonitor) {
            window.PerformanceMonitor.init();
          }
          const v1261 = localStorage.getItem("wftPulseEnabled") === "true" || localStorage.getItem("wftPulseEnabled") === null;
          $("#pulse_effects_enabled").prop("checked", v1261);
          window.pulseEnabled = v1261;
          $("#pulse_effects_enabled").change(function () {
            window.pulseEnabled = $(this).prop("checked");
            localStorage.setItem("wftPulseEnabled", window.pulseEnabled.toString());
          });
          vO14.c_1 = v1138.streamer;
          if (v1250) {
            v1250.style.display = "block";
          }
          vF20(vO14, oeo);
          vO9.on = true;
          if (vF4()) {
            vO14.tt = v1138.tt == 1;
            v1258.img_1.visible = vO9.on && vO14.mo == 1;
            v1258.img_2.visible = vO9.on && vO14.mo == 2;
            v1258.img_3.visible = vO9.on && vO14.mo == 3;
            v1258.img_4.visible = vO9.on && (vO14.mo == 4 || vO14.mo == 5 || vO14.mo == 6);
          } else {
            vO14.tt = false;
          }
          var vA23 = [{
            nome: "Default",
            uri: vO14.s_l + "/get_store.phpitem=bkgnd0.png"
          }, {
            nome: "Stardust",
            uri: vO14.s_l + "/get_store.phpitem=bg_sky__6.png"
          }, {
            nome: "Nightdots",
            uri: vO14.s_l + "/get_store.phpitem=bg_sky_7.png"
          }, {
            nome: "Galaxy Star",
            uri: vO14.s_l + "/get_store.phpitem=Galaxy-Star.png"
          }, {
            nome: "Hexvoid",
            uri: vO14.s_l + "/get_store.phpitem=bg_sky_10.png"
          }, {
            nome: "Crystalblue",
            uri: vO14.s_l + "/get_store.phpitem=bg_sky_9.png"
          }, {
            nome: "Nebula",
            uri: vO14.s_l + "/get_store.phpitem=bg_sky__2.png"
          }, {
            nome: "Bluemist",
            uri: vO14.s_l + "/get_store.phpitem=bg_sky__1.png"
          }, {
            nome: "Prism",
            uri: vO14.s_l + "/get_store.phpitem=bg_sky_8.png"
          }, {
            nome: "Cloudscape",
            uri: vO14.s_l + "/get_store.phpitem=bg_sky__5.png"
          }, {
            nome: "Desert",
            uri: vO14.s_l + "/get_store.phpitem=bg_sky_11.png"
          }, {
            nome: "Crystalblue 2",
            uri: vO14.s_l + "/get_store.phpitem=bg_sky_12.png"
          }];
          vO14.c_2 = v1138.programmer;
          let v$24 = $(".background-grid");
          if (v$24.length > 0) {
            v$24.empty();
            vA23.forEach(function (p969) {
              const v1262 = vO14.background === p969.uri;
              const v$25 = $("\n          <div class=\"background-item " + (v1262 ? "active" : "") + "\" data-bg=\"" + p969.uri + "\" data-bg-name=\"" + p969.nome + "\" style=\"cursor: pointer; border: 2px solid " + (v1262 ? "#ffcc00" : "#333333") + "; border-radius: 8px; overflow: hidden; margin: 5px; background-color: #232339;\">\n            <img src=\"" + p969.uri + "\" alt=\"" + p969.nome + "\" style=\"width: 100%; height: 65px; object-fit: cover;\">\n            <div style=\"text-align: center; padding: 5px; font-size: 10px; color: #ffffff;\">" + p969.nome + "</div>\n          </div>\n        ");
              v$25.click(function () {
                $(".background-item").removeClass("active").css("border-color", "#333333");
                $(this).addClass("active").css("border-color", "#ffcc00");
                const v1263 = $(this).data("bg");
                const v1264 = $(this).data("bg-name");
                vO14.background = v1263;
                localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
                if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
                  ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(v1263));
                }
                $("#backgroundArena").val(v1263);
              });
              v$24.append(v$25);
            });
          }
          let v1265 = document.getElementById("backgroundArena");
          if (v1265) {
            for (p927 = 0; p927 < vA23.length; p927++) {
              let v1266 = document.createElement("option");
              v1266.value = vA23[p927].uri;
              v1266.setAttribute("data-imageSrc", vA23[p927].uri);
              v1266.setAttribute("data-descriptione", vA23[p927].nome);
              v1266.innerHTML = vA23[p927].nome;
              v1265.appendChild(v1266);
            }
            vO14.c_3 = v1138.extension;
            v1265.value = vO14.background || vA23[0].uri;
            if ($.fn.wftsle) {
              $("#backgroundArena").wftsle({
                onSelected: function () {
                  vO14.background = $("#backgroundArena-value").val();
                  localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
                  if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
                    ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(vO14.background));
                  }
                  const v1267 = vO14.background;
                  $(".background-item").removeClass("active").css("border-color", "#333333");
                  $(".background-item[data-bg=\"" + v1267 + "\"]").addClass("active").css("border-color", "#ffcc00");
                }
              });
            }
          }
          const vA24 = [{
            name: "Turquoise Mouse Pointer",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/1.png"
          }, {
            name: "White Mouse Pointer",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/2.png"
          }, {
            name: "Pink Octopus Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/3.png"
          }, {
            name: "Beetle Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/4.png"
          }, {
            name: "TikTok Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/5.png"
          }, {
            name: "Watermelon Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/6.png"
          }, {
            name: "Red Lipstick Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/7.png"
          }, {
            name: "Flame Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/8.png"
          }, {
            name: "Cherries Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/9.png"
          }, {
            name: "Pink Hearts Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/10.png"
          }, {
            name: "Spray Can Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/11.png"
          }, {
            name: "Beach Umbrella Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/12.png"
          }, {
            name: "Three-colored Glove Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/13.png"
          }, {
            name: "Pink Dolphin Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/14.png"
          }, {
            name: "Mushroom Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/15.png"
          }, {
            name: "Octopus Glove Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/16.png"
          }, {
            name: "Yellow Cheese Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/17.png"
          }, {
            name: "Roasting Marshmallow Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/18.png"
          }, {
            name: "White Glove Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/19.png"
          }, {
            name: "Red Pepper Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/20.png"
          }, {
            name: "Magic Wand with Golden Star Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/21.png"
          }, {
            name: "Strawberry and Chocolate Ice Cream Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/22.png"
          }, {
            name: "Dagger Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/23.png"
          }, {
            name: "Pizza Slice Cursor ",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/24.png"
          }, {
            name: "Strawberry Candy Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/25.png"
          }, {
            name: "Rose Branch Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/26.png"
          }, {
            name: "Electrical Plug Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/27.png"
          }, {
            name: "Heart on Stick Cursor",
            url: vO14.s_l + "/images/cors-proxy.phpimg=cursors/28.png"
          }];
          const v1268 = localStorage.getItem("selectedCursor");
          if (v1268) {
            f167(v1268);
            const v1269 = vA24.find(p970 => p970.url === v1268);
            if (v1269) {
              $("#current-cursor-name").text("Current: " + v1269.name);
            }
          }
          const v$26 = $(".cursor-container");
          if (v$26.length > 0) {
            v$26.empty();
            vA24.forEach(function (p971) {
              const v1270 = v1268 === p971.url;
              const v$27 = $("\n              <div class=\"cursor-item " + (v1270 ? "active" : "") + "\" data-cursor=\"" + p971.url + "\" title=\"" + p971.name + "\" style=\"width: 60px; height: 60px; display: inline-block; margin: 5px; cursor: pointer; border: 2px solid " + (v1270 ? "#ffcc00" : "#333333") + "; border-radius: 8px; overflow: hidden; text-align: center; background-color: #232339;\">\n                  <img src=\"" + p971.url + "\" alt=\"" + p971.name + "\" style=\"width: 32px; height: 32px; margin-top: 14px;\">\n              </div>\n          ");
              v$27.click(function () {
                $(".cursor-item").removeClass("active").css("border-color", "#333333");
                $(this).addClass("active").css("border-color", "#ffcc00");
                const v1271 = $(this).data("cursor");
                localStorage.setItem("selectedCursor", v1271);
                f167(v1271);
                $("#current-cursor-name").text("Current: " + p971.name);
              });
              v$26.append(v$27);
            });
          }
          $("#default-cursor-btn").click(function () {
            localStorage.removeItem("selectedCursor");
            $("#game-cont, #game-canvas, body").css("cursor", "default");
            $("#current-cursor-name").text("Current: Default");
            $(".cursor-item").removeClass("active").css("border-color", "#333333");
          });
          function f167(p972) {
            $("#game-cont, #game-canvas, body").css({
              cursor: "url(" + p972 + "), default"
            });
          }
          vO14.c_4 = v1138.game;
          if (vO14.hz) {
            v83.onwheel = function (p973) {
              if (!vO14.ctrl && (vO14.z >= 0.5 && vO14.z <= 25 || vO14.z < 0.5 && p973.deltaY < 0 || vO14.z > 25 && p973.deltaY > 0)) {
                vO14.z = vO14.z + p973.deltaY * -wftObjects.zoomSpeed;
                if (vO14.z < 0.5) {
                  vO14.z = 0.5;
                }
              }
            };
          }
          if (vO14.mobile) {
            $("#config_mobile").html(v1138.mb);
            var v1272 = document.getElementById("joystick_checked");
            var v1273 = document.getElementById("joystick_color");
            var v1274 = document.getElementById("joystick_mode");
            var v1275 = document.getElementById("joystick_position");
            var v1276 = document.getElementById("joystick_size");
            var v1277 = document.getElementById("joystick_pxy");
            if (v1272) {
              v1272.onchange = function () {
                vF5(v1272);
                vF6(v1273);
                vF7(v1274);
                vF8(v1275);
                f169(v1277);
                f168(v1276);
              };
            }
            if (v1273) {
              v1273.onchange = function () {
                vF5(v1272);
                vF6(v1273);
                vF7(v1274);
                vF8(v1275);
                f169(v1277);
                f168(v1276);
              };
            }
            if (v1274) {
              v1274.onchange = function () {
                vF5(v1272);
                vF6(v1273);
                vF7(v1274);
                vF8(v1275);
                f169(v1277);
                f168(v1276);
              };
            }
            if (v1275) {
              v1275.onchange = function () {
                vF5(v1272);
                vF6(v1273);
                vF7(v1274);
                vF8(v1275);
                f169(v1277);
                f168(v1276);
              };
            }
            if (v1276) {
              v1276.onchange = function () {
                vF5(v1272);
                vF6(v1273);
                vF7(v1274);
                vF8(v1275);
                f169(v1277);
                f168(v1276);
              };
            }
            if (v1277) {
              v1277.onchange = function () {
                vF5(v1272);
                vF6(v1273);
                vF7(v1274);
                vF8(v1275);
                f169(v1277);
                f168(v1276);
              };
            }
            if (vO14.joystick) {
              $("#joystick_checked").val(vO14.joystick.checked);
              $("#joystick_color").val(vO14.joystick.color);
              $("#joystick_mode").val(vO14.joystick.mode);
              $("#joystick_position").val(vO14.joystick.positionMode);
              $("#joystick_size").val(vO14.joystick.size);
              $("#joystick_pxy").val(vO14.joystick.pxy);
            } else {
              $("#joystick_checked").val(true);
              $("#joystick_color").val("red");
              $("#joystick_mode").val("dynamic");
              $("#joystick_position").val("L");
              $("#joystick_size").val(100);
              $("#joystick_pxy").val(100);
            }
            if (typeof vF5 === "function" && v1272) {
              vF5(v1272);
            }
            if (typeof vF6 === "function" && v1273) {
              vF6(v1273);
            }
            if (typeof vF7 === "function" && v1274) {
              vF7(v1274);
            }
            if (typeof vF8 === "function" && v1275) {
              vF8(v1275);
            }
            if (typeof f169 === "function" && v1277) {
              f169(v1277);
            }
            if (typeof f168 === "function" && v1276) {
              f168(v1276);
            }
          }
          function f168(p974) {
            if (!vO14.joystick) {
              vO14.joystick = {};
            }
            vO14.joystick.size = parseInt(p974.value);
            $("#joystick_size_value").text(p974.value);
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          }
          function f169(p975) {
            if (!vO14.joystick) {
              vO14.joystick = {};
            }
            vO14.joystick.pxy = parseInt(p975.value);
            $("#joystick_pxy_value").text(p975.value);
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          }
          if (typeof v76 !== "undefined" && typeof v77 !== "undefined" && typeof v78 !== "undefined") {
            if (typeof vF33 === "function") {
              v76.on("mousedown", vF33);
            }
            if (typeof vF34 === "function") {
              v77.on("mousedown", vF34);
            }
            if (typeof vF35 === "function") {
              v78.on("mousedown", vF35);
            }
          }
          vO14.c_5 = v1138.note;
        } else {
          $("#div_server, #div_save, #div_sound, #div_speed, #div_zigzag, #div_w1, #div_top, #div_killmsg, #div_sm, #div_pulse_effects, #div_messages, #div_background, #div_game_enhancements, #config_mobile, #div_Laser, #div_crsw").hide();
        }
        if (v1138.ccc && v1138.ccc != "iq" && v1138.ccc != v58) {
          localStorage.setItem("oco", v1138.ccc);
          localStorage.removeItem("wftsw");
          window.location.reload();
        }
        if (!v58) {
          localStorage.setItem("oco", "iq");
        }
      }
      localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
      $(document).ready(function () {
        if ($(".settings-sidebar").length > 0) {
          $(".sidebar-item").click(function () {
            $(".sidebar-item").removeClass("active");
            $(this).addClass("active");
            $(".tab-content").hide();
            const v1278 = $(this).data("tab") + "-tab";
            $("#" + v1278).show();
          });
          $("#game-settings-tab").show();
          $(".tab-content").not("#game-settings-tab").hide();
          if (!vO14.mobile) {
            $("#mobile-tab-item").hide();
          }
          function f170() {
            if ($("#wftiq").prop("checked")) {
              $("#custom-messages-container").addClass("messages-disabled");
            } else {
              $("#custom-messages-container").removeClass("messages-disabled");
            }
          }
          f170();
          $("#joystick_size").on("input", function () {
            var v1279 = $(this).val();
            $("#joystick_size_value").text(v1279);
            vF10(this);
          });
          $("#joystick_pxy").on("input", function () {
            var v1280 = $(this).val();
            $("#joystick_pxy_value").text(v1280);
            vF9(this);
          });
          $("#wftiq").change(function () {
            f170();
            vO14.iq = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          $("#kill_msg").change(function () {
            vO14.killMsg = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          $("#headshot_msg").change(function () {
            vO14.headshotMsg = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          $("#kill_show_name").change(function () {
            vO14.showKillName = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          $("#headshot_show_name").change(function () {
            vO14.showHeadshotName = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          $("#kill_name_position").change(function () {
            vO14.killNamePos = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          $("#headshot_name_position").change(function () {
            vO14.headshotNamePos = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          $("#kill_custom_text").on("input", function () {
            if ($(this).val() !== "") {
              vO14.killMsgType = "custom";
              vO14.killCustomText = $(this).val();
            } else {
              vO14.killMsgType = "preset";
            }
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          $("#headshot_custom_text").on("input", function () {
            if ($(this).val() !== "") {
              vO14.headshotMsgType = "custom";
              vO14.headshotCustomText = $(this).val();
            } else {
              vO14.headshotMsgType = "preset";
            }
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          if (vO14.killMsg) {
            $("#kill_msg").val(vO14.killMsg);
          }
          if (vO14.headshotMsg) {
            $("#headshot_msg").val(vO14.headshotMsg);
          }
          if (vO14.killMsgType === "custom" && vO14.killCustomText) {
            $("#kill_custom_text").val(vO14.killCustomText || "");
          }
          if (vO14.headshotMsgType === "custom" && vO14.headshotCustomText) {
            $("#headshot_custom_text").val(vO14.headshotCustomText || "");
          }
          $("#kill_show_name").prop("checked", vO14.showKillName !== false);
          $("#headshot_show_name").prop("checked", vO14.showHeadshotName !== false);
          $("#kill_name_position").val(vO14.killNamePos || "after");
          $("#headshot_name_position").val(vO14.headshotNamePos || "after");
          $("#wftsound").prop("checked", wftObjects.soundEnabled || vO14.vh);
          $("#sound_effect_selector").val(wftObjects.soundEffect || "https://wormx.store/video/hs_2.mp3");
          $("#volume_slider").val(wftObjects.soundVolume || 50);
          $("#volume_value").text(wftObjects.soundVolume || 50);
          let v1281 = null;
          function f171(p976, p977) {
            if (v1281) {
              v1281.pause();
              v1281.currentTime = 0;
            }
            p976.volume = p977 / 100;
            p976.currentTime = 0;
            p976.play();
            v1281 = p976;
          }
          $("#wftsound").prop("checked", true);
          $("#wftsound").change(function () {
            wftObjects.soundEnabled = $(this).prop("checked");
            vO14.vh = $(this).prop("checked");
            f163();
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
            if (wftObjects.soundEnabled) {
              const v1282 = document.getElementById("s_h");
              if (v1282) {
                f171(v1282, wftObjects.soundVolume);
              }
            }
          });
          $("#sound_effect_selector").change(function () {
            wftObjects.soundEffect = $(this).val();
            f163();
            const v1283 = document.getElementById("s_h");
            if (v1283) {
              const v1284 = v1283.querySelector("source");
              if (v1284) {
                v1284.src = wftObjects.soundEffect;
                v1283.load();
                if (wftObjects.soundEnabled) {
                  setTimeout(() => {
                    f171(v1283, wftObjects.soundVolume);
                  }, 100);
                }
              }
            }
          });
          $("#monster_kill_selector").change(function () {
            const v1285 = $(this).val();
            const v1286 = document.getElementById("monster_kill_sound");
            if (v1286) {
              const v1287 = v1286.querySelector("source");
              if (v1287) {
                v1287.src = v1285;
                v1286.load();
                if (wftObjects.soundEnabled) {
                  setTimeout(() => {
                    f171(v1286, wftObjects.soundVolume);
                  }, 100);
                }
              }
            }
            if (!wftObjects.monsterKillSound) {
              wftObjects.monsterKillSound = {};
            }
            wftObjects.monsterKillSound = v1285;
            f163();
          });
          $("#volume_slider").on("input", function () {
            wftObjects.soundVolume = parseInt($(this).val());
            $("#volume_value").text(wftObjects.soundVolume);
            const v1288 = document.querySelectorAll("audio");
            v1288.forEach(p978 => {
              p978.volume = wftObjects.soundVolume / 100;
            });
            if (wftObjects.soundEnabled) {
              const v1289 = document.getElementById("s_h");
              if (v1289) {
                f171(v1289, wftObjects.soundVolume);
              }
            }
            f163();
          });
          if (!window.laserOptions) {
            window.laserOptions = {
              enabled: vO14.ls || false,
              color: 16766720,
              opacity: 0.5,
              thickness: 0.1
            };
          }
          try {
            const v1290 = JSON.parse(localStorage.getItem("laserOptions"));
            if (v1290) {
              window.laserOptions = v1290;
            }
          } catch (e71) {
            console.error("Error loading laser options:", e71);
          }
          $("#Laserup").prop("checked", window.laserOptions.enabled);
          const v1291 = "#" + window.laserOptions.color.toString(16).padStart(6, "0");
          $("#laser_color_picker").val(v1291);
          $("#laser_opacity_slider").val(window.laserOptions.opacity * 100);
          $("#laser_opacity_value").text(Math.round(window.laserOptions.opacity * 100));
          $("#Laserup").change(function () {
            window.laserOptions.enabled = $(this).prop("checked");
            vO14.ls = $(this).prop("checked");
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
            localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          });
          $("#laser_color_picker").change(function () {
            const v1292 = $(this).val();
            window.laserOptions.color = parseInt(v1292.replace("#", "0x"));
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
          });
          $("#laser_opacity_slider").on("input", function () {
            const vParseInt9 = parseInt($(this).val());
            window.laserOptions.opacity = vParseInt9 / 100;
            $("#laser_opacity_value").text(vParseInt9);
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
          });
          $("#reset_laser_settings").click(function () {
            window.laserOptions = {
              enabled: vO14.ls,
              color: 16766720,
              opacity: 0.5,
              thickness: 0.1
            };
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
            $("#laser_color_picker").val("#FFD700");
            $("#laser_opacity_slider").val(50);
            $("#laser_opacity_value").text(50);
          });
          $(document).keydown(function (p979) {
            if (p979.which === 76) {
              $("#Laserup").prop("checked", !$("#Laserup").prop("checked")).trigger("change");
            }
            if (p979.which === 79) {
              let vParseInt10 = parseInt($("#laser_opacity_slider").val());
              if (vParseInt10 < 100) {
                $("#laser_opacity_slider").val(vParseInt10 + 10).trigger("input");
              }
            }
            if (p979.which === 80) {
              let vParseInt11 = parseInt($("#laser_opacity_slider").val());
              if (vParseInt11 > 10) {
                $("#laser_opacity_slider").val(vParseInt11 - 10).trigger("input");
              }
            }
          });
          $("#eating_speed_toggle").prop("checked", wftObjects.eat_animation >= 1);
          $("#spin_fast_slider").val(wftObjects.smoothCamera);
          $("#spin_fast_value").text(wftObjects.smoothCamera);
          $("#zoom_speed_slider").val(wftObjects.zoomSpeed);
          $("#zoom_speed_value").text(wftObjects.zoomSpeed);
          $("#portion_size_slider").val(wftObjects.PortionSize);
          $("#portion_size_value").text(wftObjects.PortionSize);
          $("#portion_aura_slider").val(wftObjects.PortionAura);
          $("#portion_aura_value").text(wftObjects.PortionAura);
          $("#food_size_slider").val(wftObjects.FoodSize);
          $("#food_size_value").text(wftObjects.FoodSize);
          $("#food_shadow_slider").val(wftObjects.FoodShadow);
          $("#food_shadow_value").text(wftObjects.FoodShadow);
          $("#eating_speed_toggle").change(function () {
            wftObjects.eat_animation = $(this).prop("checked") ? 1 : 0.0025;
            f163();
          });
          $("#spin_fast_slider").on("input", function () {
            const vParseFloat = parseFloat($(this).val());
            wftObjects.smoothCamera = vParseFloat;
            $("#spin_fast_value").text(vParseFloat);
            f163();
          });
          $("#zoom_speed_slider").on("input", function () {
            const vParseFloat2 = parseFloat($(this).val());
            wftObjects.zoomSpeed = vParseFloat2;
            $("#zoom_speed_value").text(vParseFloat2);
            f163();
          });
          $("#portion_size_slider").on("input", function () {
            const vParseFloat3 = parseFloat($(this).val());
            wftObjects.PortionSize = vParseFloat3;
            $("#portion_size_value").text(vParseFloat3);
            f163();
          });
          $("#portion_aura_slider").on("input", function () {
            const vParseFloat4 = parseFloat($(this).val());
            wftObjects.PortionAura = vParseFloat4;
            $("#portion_aura_value").text(vParseFloat4);
            f163();
          });
          $("#food_size_slider").on("input", function () {
            const vParseFloat5 = parseFloat($(this).val());
            wftObjects.FoodSize = vParseFloat5;
            $("#food_size_value").text(vParseFloat5);
            f163();
          });
          $("#food_shadow_slider").on("input", function () {
            const vParseFloat6 = parseFloat($(this).val());
            wftObjects.FoodShadow = vParseFloat6;
            $("#food_shadow_value").text(vParseFloat6);
            f163();
          });
          $(".reset-btn").click(function () {
            const v1293 = $(this).data("reset");
            const v1294 = $(this).data("default");
            if (v1293 && v1294 !== undefined) {
              switch (v1293) {
                case "spin_fast":
                  $("#spin_fast_slider").val(v1294).trigger("input");
                  break;
                case "portion_size":
                  $("#portion_size_slider").val(v1294).trigger("input");
                  break;
                case "portion_aura":
                  $("#portion_aura_slider").val(v1294).trigger("input");
                  break;
                case "food_size":
                  $("#food_size_slider").val(v1294).trigger("input");
                  break;
                case "food_shadow":
                  $("#food_shadow_slider").val(v1294).trigger("input");
                  break;
                case "zoom_speed":
                  $("#zoom_speed_slider").val(v1294).trigger("input");
                  break;
              }
            }
          });
          function f172() {
            const vSetInterval2 = setInterval(() => {
              if (window.utils && window.utils.prototype && window.config && window.config.prototype && window.savedGame && window.savedGame.prototype) {
                clearInterval(vSetInterval2);
                const v1295 = window.utils.prototype.Qj;
                window.utils.prototype.Qj = function (p980, p981, p982) {
                  this.Hj = window.decoder.ga(this.Hj, this.Fj, p981, window.wftObjects.eat_animation);
                  this.Ij = window.decoder.ga(this.Ij, this.Gj, p981, 0.0025);
                  this.Nj.Bg(this, p980, p981, p982);
                };
                const v1296 = window.config.prototype.Bg;
                window.config.prototype.Bg = function (p983, p984, p985, p986) {
                  if (!p986(p983.Hj, p983.Ij)) {
                    this.Wh.Cd();
                    return;
                  }
                  var v1297 = p983.Kj * (1 + window.decoder.pa(p983.Mj + p984 / 200) * 0.3);
                  if (p983.Ej) {
                    this.Wh.Ad(p983.Hj, p983.Ij, window.wftObjects.PortionSize * p983.Jj, p983.Lj * 1, window.wftObjects.PortionAura * v1297, window.wftObjects.PortionTransparent * p983.Lj);
                  } else {
                    this.Wh.Ad(p983.Hj, p983.Ij, window.wftObjects.FoodSize * p983.Jj, p983.Lj * 1, window.wftObjects.FoodShadow * v1297, window.wftObjects.FoodTransparent * p983.Lj);
                  }
                };
                const v1298 = window.savedGame.prototype.ug;
                window.savedGame.prototype.ug = function (p987, p988) {
                  const v1299 = v1298.apply(this, arguments);
                  if (this.Fh && typeof this.Fh.x !== "undefined" && window.ooo && window.ooo.Mh) {
                    const v1300 = window.ooo.Mh.Oh();
                    if (v1300 && typeof v1300._a !== "undefined") {
                      this.Fh.x = window.decoder.ja(this.Fh.x, v1300._a, p988, window.wftObjects.smoothCamera, 33.333);
                    }
                  }
                  return v1299;
                };
                if (!window.showHeadshotMessage) {
                  window.showHeadshotMessage = function (p989, p990) {
                    if (!document.getElementById("headshot-message")) {
                      const v1301 = document.createElement("div");
                      v1301.id = "headshot-message";
                      v1301.style.position = "fixed";
                      v1301.style.top = "30%";
                      v1301.style.left = "50%";
                      v1301.style.transform = "translate(-50%, -50%)";
                      v1301.style.color = p990 ? "#ff2222" : "#ffcc00";
                      v1301.style.fontSize = "32px";
                      v1301.style.fontWeight = "bold";
                      v1301.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.7)";
                      v1301.style.zIndex = "9999";
                      v1301.style.opacity = "0";
                      v1301.style.transition = "opacity 0.3s ease-in-out";
                      document.body.appendChild(v1301);
                    }
                    const v1302 = p990 ? vO14.headshotMsgType : vO14.killMsgType;
                    const v1303 = document.getElementById("headshot-message");
                    let vLS11 = "";
                    let v1304 = p990 ? vO14.showHeadshotName : vO14.showKillName;
                    let v1305 = p990 ? vO14.headshotNamePos : vO14.killNamePos;
                    if (v1302 === "custom") {
                      vLS11 = p990 ? vO14.headshotCustomText : vO14.killCustomText;
                    } else {
                      vLS11 = p990 ? vO14.headshotMsg : vO14.killMsg;
                    }
                    if (v1304 && p989) {
                      if (v1305 === "before") {
                        vLS11 = p989 + " " + vLS11;
                      } else {
                        vLS11 = vLS11 + " " + p989;
                      }
                    }
                    v1303.textContent = vLS11;
                    v1303.style.color = p990 ? "#ff2222" : "#ffcc00";
                    v1303.style.opacity = "1";
                    if (p990 && wftObjects.soundEnabled) {
                      const v1306 = document.getElementById("s_h");
                      if (v1306) {
                        v1306.volume = wftObjects.soundVolume / 100;
                        v1306.currentTime = 0;
                        v1306.play();
                      }
                    }
                    setTimeout(function () {
                      v1303.style.opacity = "0";
                    }, 2000);
                  };
                }
                console.log("WFT Game modifications applied successfully!");
              }
            }, 1000);
          }
          setTimeout(f172, 1000);
          window.playHeadshotSound = function () {
            if (wftObjects.soundEnabled) {
              const v1307 = document.getElementById("s_h");
              if (v1307) {
                v1307.volume = wftObjects.soundVolume / 100;
                v1307.currentTime = 0;
                v1307.play();
              }
            }
          };
          $("#btn_clear_file").click(function () {
            localStorage.removeItem("custom_wear");
            localStorage.removeItem("custom_skin");
            window.location.reload();
          });
          $("#fileSkin").change(function (p991) {
            const v1308 = p991.target.files[0];
            if (v1308) {
              const v1309 = new FileReader();
              v1309.onload = function (p992) {
                try {
                  const v1310 = p992.target.result;
                  JSON.parse(v1310);
                  if (v1310.indexOf("\"wear\":") !== -1) {
                    localStorage.setItem("custom_wear", v1310);
                  } else {
                    localStorage.setItem("custom_skin", v1310);
                  }
                  window.location.reload();
                } catch (e72) {
                  console.error("Error processing file:", e72);
                }
              };
              v1309.readAsText(v1308);
            }
          });
        }
        if (window.PerformanceMonitor) {
          setTimeout(function () {
            window.PerformanceMonitor.init();
          }, 500);
        }
        setTimeout(() => {
          if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
            window.sectorSystem.init();
          }
        }, 1000);
        $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
          if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === "function") {
            setTimeout(() => window.sectorSystem.initUserInterface(), 100);
          }
        });
      });
    };
    Ysw = async function (p993) {
      var v1311 = await p993;
      try {
        vO14.gg = [];
        vO14.sg = [];
        var vLN0153 = 0;
        if (v62 && (v62 = JSON.parse(v62)).wear) {
          for (var v1324 in v62.wear.textureDict) {
            if (v62.wear.textureDict[v1324].file.search("data:image/png;base64,") == -1) {
              v62.wear.textureDict[v1324].file = "data:image/png;base64," + v62.wear.textureDict[v1324].file.substr(v62.wear.textureDict[v1324].file.length - vO14.c_v, vO14.c_v) + v62.wear.textureDict[v1324].file.substr(0, v62.wear.textureDict[v1324].file.length - vO14.c_v);
            }
            v1311.textureDict[v1324] = v62.wear.textureDict[v1324];
          }
          ;
          for (let v1313 in v62.wear.regionDict) {
            v1311.regionDict[v1313] = v62.wear.regionDict[v1313];
            v1311[(v1324 = v1311.regionDict[v1313]).list][v1324.id] = v1324.obj;
            v1311[v1324.listVariant].push([v1324.id]);
          }
        }
        ;
        if (v63) {
          if ((v63 = JSON.parse(v63)).csg) {
            var vLN0154 = 0;
            var v1314 = false;
            var vLN0155 = 0;
            for (var v1315 in v63.csg["0"]) {
              for (var v1316 = v63.csg["1"][v1315].split("|"), vLN0160 = 0; vLN0160 < v1316.length; vLN0160++) {
                v1311.textureDict["t_wft_" + (vO14.g / 9 * 1000 + vLN0155)] = {
                  custom: true,
                  file: "data:image/png;base64," + v1316[vLN0160].substr(v1316[vLN0160].length - vO14.c_v, vO14.c_v) + v1316[vLN0160].substr(0, v1316[vLN0160].length - vO14.c_v)
                };
                vLN0155++;
              }
              ;
              var v1317 = v63.csg["2"][v1315];
              var vLN0157 = 0;
              var vLSGet_groupphpimgGroup2 = "get_group.phpimg=Group_show_gif.png";
              var vLSGIFSKIN = "GIF SKIN";
              var vLN0158 = 0;
              for (var v1324 in v1317) {
                vLN0158++;
              }
              ;
              for (var v1324 in v1317) {
                if (vLN0157 == 0) {
                  var vO59 = {
                    id: vO14.g * 100 + vLN0154,
                    base: [],
                    guest: false,
                    g: false,
                    price: 0,
                    priceBefore: 0,
                    nonbuyable: false,
                    prime: "c_white",
                    glow: v1317[v1324]
                  };
                  for (var vLN0160 = 0; vLN0160 < v1317[v1324].length; vLN0160++) {
                    vO59.base.push("s_wft_" + (vO14.g / 9 * 1000 + vLN0153) + "_" + (v1317[v1324].length - vLN0160));
                  }
                  ;
                  v1311.skinArrayDict.push(vO59);
                  var v1320 = vO14.sg.indexOf(vO59.id);
                  if (v1320 == -1) {
                    vO14.sg.push(vO59.id);
                    vO14.gg.push({
                      s: vO14.g / 9 * 1000 + vLN0153,
                      e: vO14.g / 9 * 1000 + vLN0153 + vLN0158 - 1,
                      t: parseInt(v63.csg["0"][v1315].substr(0, 1)) * 100,
                      r: v63.csg["0"][v1315].substr(1, 1) == "1"
                    });
                  }
                  if (v1314) {
                    for (var v1321 in v1311.skinGroupArrayDict) {
                      if (v1311.skinGroupArrayDict[v1321].id == vLSGIFSKIN) {
                        v1311.skinGroupArrayDict[v1321].list.push(vO59.id);
                      }
                    }
                  } else {
                    v1311.skinGroupArrayDict.push({
                      isCustom: true,
                      id: vLSGIFSKIN,
                      img: vLSGet_groupphpimgGroup2,
                      name: {
                        de: vLSGIFSKIN,
                        en: vLSGIFSKIN,
                        es: vLSGIFSKIN,
                        fr: vLSGIFSKIN,
                        uk: vLSGIFSKIN
                      },
                      list: [vO59.id]
                    });
                    v1314 = true;
                  }
                  ;
                  vLN0154++;
                }
                ;
                var vO59 = {
                  id: vO14.g / 9 * 1000 + vLN0153,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: v1317[v1324]
                };
                for (var vLN0160 = 0; vLN0160 < v1317[v1324].length; vLN0160++) {
                  vO59.base.push("s_wft_" + vO59.id + "_" + (v1317[v1324].length - vLN0160));
                  v1311.regionDict["s_wft_" + vO59.id + "_" + (vLN0160 + 1)] = {
                    texture: "t_wft_" + vO59.id,
                    h: 96,
                    w: 96,
                    x: (vLN0160 || 0) * 99,
                    y: 0
                  };
                }
                ;
                v1311.skinArrayDict.push(vO59);
                vLN0157++;
                vLN0153++;
              }
            }
          } else {
            var vA25 = [];
            var vLSGet_groupphpimgGroup2 = "get_group.phpimg=Group_customer.png";
            for (let v1322 in v63) {
              if (v1322 != "img") {
                if (v63[v1322].textureDict[v1322].file.search("data:image/png;base64,") == -1) {
                  v63[v1322].textureDict[v1322].file = "data:image/png;base64," + v63[v1322].textureDict[v1322].file.substr(v63[v1322].textureDict[v1322].file.length - vO14.c_v, vO14.c_v) + v63[v1322].textureDict[v1322].file.substr(0, v63[v1322].textureDict[v1322].file.length - vO14.c_v);
                }
                v1311.textureDict[v1322] = v63[v1322].textureDict[v1322];
                for (let v1323 in v63[v1322].regionDict) {
                  v1311.regionDict[v1323] = v63[v1322].regionDict[v1323];
                }
                ;
                v1311.skinArrayDict.push(v63[v1322].skin);
                vA25.push(v63[v1322].skin.id);
              } else if (v63[v1322] != "customer") {
                vLSGet_groupphpimgGroup2 = v63[v1322];
              }
            }
            ;
            v1311.skinGroupArrayDict.push({
              isCustom: true,
              id: "customer",
              img: vLSGet_groupphpimgGroup2,
              name: {
                de: "Customer",
                en: "Customer",
                es: "Customer",
                fr: "Customer",
                uk: "Customer"
              },
              list: vA25
            });
          }
        }
        ;
        if (Array.isArray(vO14.dg) && vO14.dg.length > 0) {
          for (var v1324 in vO14.dg) {
            var v1325 = vO14.dg[v1324].split("|");
            var vO60 = {
              g: v1325["0"]
            };
            await fetch("https://wormx.store/store/check2.php", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(vO60)
            }).then(async function (p994) {
              p994 = await p994.json();
              v1311.textureDict["t_wft_" + v1325["0"] + "_skin_g"] = {
                custom: true,
                relativePath: p994.csg["1"]["0"]
              };
              var v1326 = p994.csg["2"]["0"];
              var vLN0161 = 0;
              for (var v1328 in v1326) {
                vLN0161++;
              }
              ;
              vO14.sg.push(parseInt(v1325["1"]));
              vO14.gg.push({
                s: vO14.g / 9 * 1000 + vLN0153,
                e: vO14.g / 9 * 1000 + vLN0153 + vLN0161 - 1,
                t: parseInt(p994.csg["0"]["0"].substr(0, 1)) * 100,
                r: p994.csg["0"]["0"].substr(1, 1) == "1"
              });
              var vLN0162 = 0;
              for (var v1328 in v1326) {
                var vO61 = {
                  id: vO14.g / 9 * 1000 + vLN0153,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: v1326[v1328]
                };
                for (var vLN0163 = 0; vLN0163 < v1326[v1328].length; vLN0163++) {
                  vO61.base.push("s_wft_" + vO61.id + "_" + (v1326[v1328].length - vLN0163));
                  v1311.regionDict["s_wft_" + vO61.id + "_" + (vLN0163 + 1)] = {
                    texture: "t_wft_" + v1325["0"] + "_skin_g",
                    h: 96,
                    w: 96,
                    x: (vLN0163 || 0) * 99,
                    y: (vLN0162 || 0) * 99
                  };
                }
                ;
                v1311.skinArrayDict.push(vO61);
                vLN0153++;
                vLN0162++;
              }
            }).catch(function (p995) {});
          }
        }
      } catch (e73) {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
      }
      ;
      return v1311;
    };
    var v1329 = false;
    if (v1329) {
      v1329 = false;
      s_h.pause();
    }
    (function (p996) {
      p996.fn.wftsle = function (p997) {
        if (vO62[p997]) {
          return vO62[p997].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof p997 != "object" && p997) {
          p996.error("Method " + p997 + " does not exists.");
          return;
        } else {
          return vO62.init.apply(this, arguments);
        }
      };
      var vO62 = {};
      var vO63 = {
        data: [],
        keepJSONItemsOnTop: false,
        width: 100,
        height: null,
        background: "#eee",
        selectText: "",
        defaultSelectedIndex: null,
        truncateDescription: true,
        imagePosition: "left",
        showSelectedHTML: true,
        clickOffToClose: true,
        embedCSS: true,
        onSelected: function () {}
      };
      function f173(p998, p999) {
        var v1330;
        var v1331;
        var v1332;
        var v1333;
        var v1334 = p998.data("ddslick");
        var v1335 = p998.find(".dd-selected");
        var v1336 = v1335.siblings(".dd-selected-value");
        p998.find(".dd-options");
        v1335.siblings(".dd-pointer");
        var v1337 = p998.find(".dd-option").eq(p999);
        var v1338 = v1337.closest("li");
        var v1339 = v1334.settings;
        var v1340 = v1334.settings.data[p999];
        p998.find(".dd-option").removeClass("dd-option-selected");
        v1337.addClass("dd-option-selected");
        v1334.selectedIndex = p999;
        v1334.selectedItem = v1338;
        v1334.selectedData = v1340;
        if (v1339.showSelectedHTML) {
          v1335.html((v1340.imageSrc ? "<img class=\"dd-selected-image" + (v1339.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + v1340.imageSrc + "\" />" : "") + (v1340.description ? "<small class=\"dd-selected-description dd-desc" + (v1339.truncateDescription ? " dd-selected-description-truncated" : "") + "\" >" + v1340.description + "</small>" : ""));
        } else {
          v1335.html(v1340.text);
        }
        v1336.val(v1340.value);
        v1334.original.val(v1340.value);
        p998.data("ddslick", v1334);
        f176(p998);
        v1331 = (v1330 = p998).find(".dd-select").css("height");
        v1332 = v1330.find(".dd-selected-description");
        v1333 = v1330.find(".dd-selected-image");
        if (v1332.length <= 0 && v1333.length > 0) {
          v1330.find(".dd-selected-text").css("lineHeight", v1331);
        }
        if (typeof v1339.onSelected == "function") {
          v1339.onSelected.call(this, v1334);
        }
      }
      function f174(p1000) {
        var v1341 = p1000.find(".dd-select");
        var v1342 = v1341.siblings(".dd-options");
        var v1343 = v1341.find(".dd-pointer");
        var v1344 = v1342.is(":visible");
        p996(".dd-click-off-close").not(v1342).slideUp(50);
        p996(".dd-pointer").removeClass("dd-pointer-up");
        if (v1344) {
          v1342.slideUp("fast");
          v1343.removeClass("dd-pointer-up");
        } else {
          v1342.slideDown("fast");
          v1343.addClass("dd-pointer-up");
        }
        (function f175(p1001) {
          p1001.find(".dd-option").each(function () {
            var vP996 = p996(this);
            var v1345 = vP996.css("height");
            var v1346 = vP996.find(".dd-option-description");
            var v1347 = p1001.find(".dd-option-image");
            if (v1346.length <= 0 && v1347.length > 0) {
              vP996.find(".dd-option-text").css("lineHeight", v1345);
            }
          });
        })(p1000);
      }
      function f176(p1002) {
        p1002.find(".dd-options").slideUp(50);
        p1002.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up");
      }
      vO62.init = function (v1348) {
        var v1348 = p996.extend({}, vO63, v1348);
        if (p996("#css-ddslick").length <= 0 && v1348.embedCSS) {
          p996("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}​ .dd-selected-text { font-weight:bold}​</style>").appendTo("head");
        }
        return this.each(function () {
          var vP9962 = p996(this);
          if (!vP9962.data("ddslick")) {
            var v1350 = [];
            v1348.data;
            vP9962.find("option").each(function () {
              var vP9963 = p996(this);
              var v1349 = vP9963.data();
              v1350.push({
                text: p996.trim(vP9963.text()),
                value: vP9963.val(),
                selected: vP9963.is(":selected"),
                description: v1349.description,
                imageSrc: v1349.imagesrc
              });
            });
            if (v1348.keepJSONItemsOnTop) {
              p996.merge(v1348.data, v1350);
            } else {
              v1348.data = p996.merge(v1350, v1348.data);
            }
            var vVP9962 = vP9962;
            var vP9964 = p996("<div id=\"" + vP9962.attr("id") + "\"></div>");
            vP9962.replaceWith(vP9964);
            (vP9962 = vP9964).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
            var v1350 = vP9962.find(".dd-select");
            var v1351 = vP9962.find(".dd-options");
            v1351.css({
              width: v1348.width
            });
            v1350.css({
              width: v1348.width,
              background: v1348.background
            });
            vP9962.css({
              width: v1348.width
            });
            if (v1348.height != null) {
              v1351.css({
                height: v1348.height,
                overflow: "auto"
              });
            }
            p996.each(v1348.data, function (p1004, p1005) {
              if (p1005.selected) {
                v1348.defaultSelectedIndex = p1004;
              }
              v1351.append("<li><a class=\"dd-option\">" + (p1005.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + p1005.value + "\" />" : "") + (p1005.imageSrc ? " <img class=\"dd-option-image" + (v1348.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + p1005.imageSrc + "\" />" : "") + "</a></li>");
            });
            var vO64 = {
              settings: v1348,
              original: vVP9962,
              selectedIndex: -1,
              selectedItem: null,
              selectedData: null
            };
            vP9962.data("ddslick", vO64);
            if (v1348.selectText.length > 0 && v1348.defaultSelectedIndex == null) {
              vP9962.find(".dd-selected").html(v1348.selectText);
            } else {
              f173(vP9962, v1348.defaultSelectedIndex != null && v1348.defaultSelectedIndex >= 0 && v1348.defaultSelectedIndex < v1348.data.length ? v1348.defaultSelectedIndex : 0);
            }
            vP9962.find(".dd-select").on("click.ddslick", function () {
              f174(vP9962);
            });
            vP9962.find(".dd-option").on("click.ddslick", function () {
              f173(vP9962, p996(this).closest("li").index());
            });
            if (v1348.clickOffToClose) {
              v1351.addClass("dd-click-off-close");
              vP9962.on("click.ddslick", function (p1006) {
                p1006.stopPropagation();
              });
              p996("body").on("click", function () {
                p996(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up");
              });
            }
          }
        });
      };
      vO62.select = function (p1007) {
        return this.each(function () {
          if (p1007.index !== undefined) {
            f173(p996(this), p1007.index);
          }
        });
      };
      vO62.open = function () {
        return this.each(function () {
          var vP9965 = p996(this);
          if (vP9965.data("ddslick")) {
            f174(vP9965);
          }
        });
      };
      vO62.close = function () {
        return this.each(function () {
          var vP9966 = p996(this);
          if (vP9966.data("ddslick")) {
            f176(vP9966);
          }
        });
      };
      vO62.destroy = function () {
        return this.each(function () {
          var vP9967 = p996(this);
          var v1352 = vP9967.data("ddslick");
          if (v1352) {
            var v1353 = v1352.original;
            vP9967.removeData("ddslick").unbind(".ddslick").replaceWith(v1353);
          }
        });
      };
    })(jQuery);
    if (vF4()) {
      vO7.ba(vO14.s_l + "/js/nipplejs.min.js", "mobileconfig", function () {});
    }
    ooo.pCc = function () {
      var vO65 = {};
      var vO66 = {
        country: "iq"
      };
      if (v58 && v58 != "iq") {
        vO66.country = v58;
      }
      $.get(vO14.s_l + "/dynamic/assets/registry.json", function (p1008) {
        vO65 = p1008;
        fetch("https://wormx.store/store/index.php", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(vO66)
        }).then(async function (p1009) {
          for (let v1354 in (p1009 = await p1009.json()).textureDict) {
            for (let v1355 in p1009.textureDict[v1354]) {
              if (v1355 === "file") {
                p1009.textureDict[v1354][v1355] = "data:image/png;base64," + p1009.textureDict[v1354][v1355].substr(p1009.textureDict[v1354][v1355].length - vO14.c_v, vO14.c_v) + p1009.textureDict[v1354][v1355].substr(0, p1009.textureDict[v1354][v1355].length - vO14.c_v);
              }
            }
          }
          ;
          for (let v1356 in p1009) {
            if (v1356 !== "propertyList") {
              if (Array.isArray(p1009[v1356])) {
                p1008[v1356] = p1008[v1356].concat(p1009[v1356]);
              } else {
                p1008[v1356] = {
                  ...p1008[v1356],
                  ...p1009[v1356]
                };
              }
            }
          }
        }).catch(function (p1010) {});
      });
    };
    ooo.pDc = function (p1011) {
      var vO67 = {};
      (function (p1012, p1013) {
        for (var v1357 in p1012) {
          if (p1012.hasOwnProperty(v1357)) {
            p1013(v1357, p1012[v1357]);
          }
        }
      })(p1011.textureDict, function (p1014, p1015) {
        let v1358 = vO14.s_l + p1015.relativePath;
        if (!p1015.custom) {
          v1358 = vO14.s_l + p1015.relativePath;
        }
        try {
          vO67[p1014] = new PIXI.Texture(v1358);
        } catch (e74) {}
      });
    };
  });
})();
(function () {
  let v1362 = false;
  let v1363 = false;
  let vLN0164 = 0;
  function f177() {
    if (window.ooo && window.ooo.Mh && typeof window.ooo.Mh.Dq === "function") {
      return true;
    }
    return false;
  }
  function f178() {
    const v1369 = Date.now();
    if (v1363 || v1369 - vLN0164 < 1000) {
      return;
    }
    v1363 = true;
    vLN0164 = v1369;
    try {
      if (typeof window.myGameSettings !== "undefined") {
        window.myGameSettings.unlimitedRespawn = true;
      }
      if (typeof window.ooo.Mh.gr === "function") {
        window.ooo.Mh.gr();
      }
      setTimeout(function () {
        try {
          const v1370 = document.getElementById("port_id_s") ? document.getElementById("port_id_s").value || "" : "";
          const v1371 = document.getElementById("port_name_s") ? document.getElementById("port_name_s").value || "Player" : "Player";
          window.ooo.Mh.Dq(v1370, v1371);
          setTimeout(function () {
            v1363 = false;
          }, 1000);
        } catch (e76) {
          v1363 = false;
        }
      }, 300);
    } catch (e77) {
      v1363 = false;
    }
  }
  function f179() {
    v1362 = !v1362;
    if (typeof window.myGameSettings !== "undefined") {
      window.myGameSettings.unlimitedRespawn = v1362;
    }
  }
  document.addEventListener("keydown", function (p1018) {
    if (p1018.key === "F8" || p1018.keyCode === 119) {
      f179();
    }
    if (v1362 && (p1018.key.toLowerCase() === "r" || p1018.keyCode === 82)) {
      if (f177()) {
        p1018.preventDefault();
        p1018.stopPropagation();
        f178();
      } else {}
    }
    
    // Change zigzag when 'S' key is pressed
    if (p1018.key.toLowerCase() === "s" || p1018.keyCode === 83) {
      // Check if settings modal is open and zigzag selector exists
      const zigzagSelector = document.getElementById("zigzag_selector");
      if (zigzagSelector && !zigzagSelector.disabled) {
        // Get current value and increment
        let currentValue = parseInt(zigzagSelector.value) || 0;
        // Cycle through options 0, 1, 2, 3
        currentValue = (currentValue + 1) % 4;
        
        // Update the selector
        zigzagSelector.value = currentValue;
        
        // Trigger the change event to update the game
        const changeEvent = new Event('change', { bubbles: true });
        zigzagSelector.dispatchEvent(changeEvent);
        
        // Update game data
        if (typeof vO14 !== 'undefined') {
          vO14.zigzag = currentValue;
          localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
          localStorage.setItem("selectedZigzag", currentValue);
          
          // Update worm mouth to reflect selected zigzag ability
          if (window.bbs && window.bbsConfig) {
            window.bbsConfig.zigzag = currentValue;
            window.bbs.zigzag = currentValue;
            
            // Update the worm's mouth visually
            if (ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah) {
              const worm = ooo.Xg.Kf.Wg.Ah;
              if (worm && worm.Vj) {
                // Map zigzag options to mouth IDs
                const mouthMap = {0: 0, 1: 1, 2: 2, 3: 3};
                worm.Vj = mouthMap[currentValue] || 0;
                
                // Trigger visual refresh
                if (worm.Zi) {
                  worm.Zi(worm.ki);
                }
              }
            }
          }
        }
        
        // Prevent default behavior to avoid conflicts
        p1018.preventDefault();
        p1018.stopPropagation();
      }
    }
  }, true);
  if (!f177()) {
    const vSetInterval3 = setInterval(function () {
      if (f177()) {
        clearInterval(vSetInterval3);
      }
    }, 1000);
  } else {}
})();

// 🎯 فتح جميع العناصر من 0 إلى 9999
(function() {
  // Function to unlock all items
  function unlockAllItems() {
    try {
      console.log("🔓 محاولة فتح جميع العناصر...");
      
      // إجباري: تعديل خاصية customer إلى true قبل أي شيء آخر
      if (typeof _0x9a89dc !== 'undefined') {
        _0x9a89dc.customer = true;
        console.log("✅ تم إجبار customer = true في البيانات");
      }
      
      // التأكد من وجود البيانات وإنشاءها إذا لم تكن موجودة
      if (typeof _0x9a89dc === 'undefined') { 
        _0x9a89dc = {}; 
        const tokenToUse = (typeof bbs !== 'undefined' && bbs.tk) ? bbs.tk : "";
        _0x9a89dc.tk = tokenToUse; 
        _0x9a89dc.customer = true;
      }
      
      // Unlock items in the main game data structure (vO14)
      if (typeof vO14 !== 'undefined') {
        // Ensure all item arrays exist
        if (!vO14.sg) vO14.sg = [];
        if (!vO14.hg) vO14.hg = [];
        if (!vO14.eg) vO14.eg = [];
        if (!vO14.mg) vO14.mg = [];
        if (!vO14.gg) vO14.gg = [];
        
        // Populate all arrays with items 0-9999
        for (let i = 0; i <= 9999; i++) {
          if (!vO14.sg.includes(i)) vO14.sg.push(i);
          if (!vO14.hg.includes(i)) vO14.hg.push(i);
          if (!vO14.eg.includes(i)) vO14.eg.push(i);
          if (!vO14.mg.includes(i)) vO14.mg.push(i);
          if (!vO14.gg.includes(i)) vO14.gg.push(i);
        }
        
        // Set customer status
        vO14.customer = true;
        
        // Save to localStorage
        localStorage.setItem("SaveGamewft", JSON.stringify(vO14));
        console.log("✅ تم تحديث بيانات اللعبة وفتح جميع العناصر");
      }
      
      // Also unlock items in the bbs object if it exists
      if (typeof bbs !== 'undefined') {
        // Ensure all item arrays exist
        if (!bbs.sg) bbs.sg = [];
        if (!bbs.hg) bbs.hg = [];
        if (!bbs.eg) bbs.eg = [];
        if (!bbs.mg) bbs.mg = [];
        if (!bbs.gg) bbs.gg = [];
        
        // Populate all arrays with items 0-9999
        for (let i = 0; i <= 9999; i++) {
          if (!bbs.sg.includes(i)) bbs.sg.push(i);
          if (!bbs.hg.includes(i)) bbs.hg.push(i);
          if (!bbs.eg.includes(i)) bbs.eg.push(i);
          if (!bbs.mg.includes(i)) bbs.mg.push(i);
          if (!bbs.gg.includes(i)) bbs.gg.push(i);
        }
        
        // Set customer status
        bbs.customer = true;
        
        // Save to localStorage
        const tokenToUse = bbs.tk || "";
        const bbsToSave = {...bbs};
        bbsToSave.tk = tokenToUse;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbsToSave));
        console.log("✅ تم تحديث بيانات bbs وفتح جميع العناصر");
      }
      
      // Set global customer status
      window.customer = true;
      
      // 🎯 فتح جميع العناصر من 0 إلى 9999
      const allProperties = [];
      const types = ["HAT", "SKIN", "EYES", "GLASSES", "MOUTH"];
      
      types.forEach(type => {
        for (let i = 0; i <= 9999; i++) {
          allProperties.push({
            "id": i.toString(),
            "type": type
          });
        }
      });
      
      console.log("🎯 تم فتح " + allProperties.length + " عنصر!");
      console.log("🎨 HAT: 0-9999, SKIN: 0-9999, EYES: 0-9999, GLASSES: 0-9999, MOUTH: 0-9999");
      
      // Set property lists
      if (typeof _0x9a89dc !== 'undefined') {
        _0x9a89dc.propertyList = allProperties;
      }
      if (typeof _0x2b92bd !== 'undefined') {
        _0x2b92bd.propertyList = allProperties;
      }
      
      // Set specific localStorage flags
      localStorage.setItem("allSkinsUnlocked", "true");
      localStorage.setItem("allHatsUnlocked", "true");
      localStorage.setItem("allEyesUnlocked", "true");
      localStorage.setItem("allMouthsUnlocked", "true");
      localStorage.setItem("allGlassesUnlocked", "true");
      
      // Create comprehensive unlock data
      localStorage.setItem("unlockedItems", JSON.stringify(allProperties));
      
      // Create SaveGamewft with all items
      const saveGameData = {
        sg: Array.from({length: 10000}, (_, i) => i), // Skins
        hg: Array.from({length: 10000}, (_, i) => i), // Hats
        eg: Array.from({length: 10000}, (_, i) => i), // Eyes
        mg: Array.from({length: 10000}, (_, i) => i), // Mouths
        gg: Array.from({length: 10000}, (_, i) => i), // Glasses
        customer: true
      };
      
      // Merge with existing data if it exists
      let existingSave = {};
      try {
        const existing = localStorage.getItem("SaveGamewft");
        if (existing && existing !== "null") {
          existingSave = JSON.parse(existing);
        }
      } catch (e) {}
      
      const mergedSave = {...existingSave, ...saveGameData};
      localStorage.setItem("SaveGamewft", JSON.stringify(mergedSave));
      
      // ✅ حفظ البيانات مع التوكن المحمي
      if (typeof bbs !== 'undefined') {
        const tokenToUse = bbs.tk || "";
        const bbsToSave = {...bbs};
        bbsToSave.tk = tokenToUse;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbsToSave));
        
        console.log("✅ تم إجبار customer = true في جميع المتغيرات");
        console.log("🔐 التوكن المحفوظ:", tokenToUse ? tokenToUse.substring(0, 20) + "..." : "غير موجود");
        console.log("bbs.customer:", bbs.customer);
      }
      
      // عرض معلومات إضافية
      if (typeof _0x9a89dc !== 'undefined' && _0x9a89dc.propertyList && Array.isArray(_0x9a89dc.propertyList)) {
        console.log("📦 تحليل مفصل للعناصر:");
        console.log("  📊 العدد الإجمالي:", _0x9a89dc.propertyList.length);
        
        // عرض أول 10 عناصر كمثال
        console.log("  📋 أول 10 عناصر:");
        _0x9a89dc.propertyList.slice(0, 10).forEach((item, index) => {
          console.log("    " + (index + 1) + ":", item);
        });
        
        // إحصائيات الأنواع
        var typeCount = {};
        _0x9a89dc.propertyList.forEach(item => {
          if (item.type) {
            typeCount[item.type] = (typeCount[item.type] || 0) + 1;
          }
        });
        
        console.log("  📊 إحصائيات الأنواع:");
        for (var type in typeCount) {
          console.log("    " + type + ": " + typeCount[type] + " عنصر");
        }
      }
      
      console.log("🎉 جميع العناصر تم فتحها بنجاح!");
      
    } catch (e) {
      console.error("❌ فشل في فتح العناصر:", e);
    }
  }
  
  // Run the unlock function when the game loads
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", unlockAllItems);
  } else {
    // Use a delay to ensure game is initialized
    setTimeout(unlockAllItems, 2000);
  }
  
  // Also expose the function globally so it can be called manually if needed
  window.unlockAllItems = unlockAllItems;
  
  // Run immediately if the game is already loaded
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(unlockAllItems, 3000);
  }
})();
