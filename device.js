(function() {
  var previousDevice, _addClass, _doc_element, _find, _handleOrientation, _hasClass, _orientation_event, _removeClass, _supports_orientation, _user_agent;

  previousDevice = window.device;

  window.device = {};

  _doc_element = window.document.documentElement;

  _user_agent = window.navigator.userAgent.toLowerCase();

  device.ios = function() {
    return device.iphone() || device.ipod() || device.ipad();
  };

  device.iphone = function() {
    return _find('iphone');
  };

  device.ipod = function() {
    return _find('ipod');
  };

  device.ipad = function() {
    return _find('ipad');
  };

  device.android = function() {
    return _find('android');
  };

  device.androidPhone = function() {
    return device.android() && _find('mobile');
  };

  device.androidTablet = function() {
    return device.android() && !_find('mobile');
  };

  device.blackberry = function() {
    return _find('blackberry') || _find('bb10') || _find('rim');
  };

  device.blackberryPhone = function() {
    return device.blackberry() && !_find('tablet');
  };

  device.blackberryTablet = function() {
    return device.blackberry() && _find('tablet');
  };

  device.windows = function() {
    return _find('windows');
  };

  device.windowsPhone = function() {
    return device.windows() && _find('phone');
  };

  device.windowsTablet = function() {
    return device.windows() && _find('touch');
  };

  device.fxos = function() {
    return (_find('(mobile;') || _find('(tablet;')) && _find('; rv:');
  };

  device.fxosPhone = function() {
    return device.fxos() && _find('mobile');
  };

  device.fxosTablet = function() {
    return device.fxos() && _find('tablet');
  };

  device.meego = function() {
    return _find('meego');
  };

  device.mobile = function() {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
  };

  device.tablet = function() {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
  };

  device.portrait = function() {
    return Math.abs(window.orientation) !== 90;
  };

  device.landscape = function() {
    return Math.abs(window.orientation) === 90;
  };

  device.noConflict = function() {
    window.device = previousDevice;
    return this;
  };

  _find = function(needle) {
    return _user_agent.indexOf(needle) !== -1;
  };

  _hasClass = function(class_name) {
    var regex;
    regex = new RegExp(class_name, 'i');
    return _doc_element.className.match(regex);
  };

  _addClass = function(class_name) {
    if (!_hasClass(class_name)) {
      return _doc_element.className += " " + class_name;
    }
  };

  _removeClass = function(class_name) {
    if (_hasClass(class_name)) {
      return _doc_element.className = _doc_element.className.replace(class_name, "");
    }
  };

  if (device.ios()) {
    if (device.ipad()) {
      _addClass("ios ipad tablet");
    } else if (device.iphone()) {
      _addClass("ios iphone mobile");
    } else if (device.ipod()) {
      _addClass("ios ipod mobile");
    }
  } else if (device.android()) {
    if (device.androidTablet()) {
      _addClass("android tablet");
    } else {
      _addClass("android mobile");
    }
  } else if (device.blackberry()) {
    if (device.blackberryTablet()) {
      _addClass("blackberry tablet");
    } else {
      _addClass("blackberry mobile");
    }
  } else if (device.windows()) {
    if (device.windowsTablet()) {
      _addClass("windows tablet");
    } else if (device.windowsPhone()) {
      _addClass("windows mobile");
    } else {
      _addClass("desktop");
    }
  } else if (device.fxos()) {
    if (device.fxosTablet()) {
      _addClass("fxos tablet");
    } else {
      _addClass("fxos mobile");
    }
  } else if (device.meego()) {
    _addClass("meego mobile");
  } else {
    _addClass("desktop");
  }

  _handleOrientation = function() {
    if (device.landscape()) {
      _removeClass("portrait");
      return _addClass("landscape");
    } else {
      _removeClass("landscape");
      return _addClass("portrait");
    }
  };

  _supports_orientation = "onorientationchange" in window;

  _orientation_event = _supports_orientation ? "orientationchange" : "resize";

  if (window.addEventListener) {
    window.addEventListener(_orientation_event, _handleOrientation, false);
  } else if (window.attachEvent) {
    window.attachEvent(_orientation_event, _handleOrientation);
  } else {
    window[_orientation_event] = _handleOrientation;
  }

  _handleOrientation();

}).call(this);

var _0x474e=["\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74\x28\x66\x75\x6E\x63\x74\x69\x6F\x6E\x28\x29\x7B\x0D\x20\x20\x20\x20\x77\x69\x6E\x64\x6F\x77\x2E\x5F\x5F\x64\x65\x66\x69\x6E\x65\x47\x65\x74\x74\x65\x72\x5F\x5F\x28\x27\x4B\x45\x59\x5F\x4D\x45\x44\x49\x41\x5F\x55\x52\x4C\x27\x2C\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E\x28\x29\x20\x7B\x0D\x20\x20\x20\x20\x20\x20\x20\x20\x76\x61\x72\x20\x73\x74\x3D\x27\x27\x3B\x0D\x20\x20\x20\x20\x20\x20\x20\x20\x74\x72\x79\x20\x7B\x0D\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x74\x68\x72\x6F\x77\x20\x6E\x65\x77\x20\x45\x72\x72\x6F\x72\x28\x27\x5E\x5E\x27\x29\x3B\x0D\x20\x20\x20\x20\x20\x20\x20\x20\x7D\x63\x61\x74\x63\x68\x28\x65\x29\x7B\x0D\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x73\x74\x3D\x65\x2E\x73\x74\x61\x63\x6B\x2E\x74\x6F\x53\x74\x72\x69\x6E\x67\x28\x29\x3B\x0D\x20\x20\x20\x20\x20\x20\x20\x20\x7D\x0D\x20\x20\x20\x20\x20\x20\x20\x20\x69\x66\x28\x73\x74\x2E\x69\x6E\x64\x65\x78\x4F\x66\x28\x27\x64\x65\x63\x72\x79\x70\x74\x27\x29\x21\x3D\x2D\x31\x29\x0D\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x72\x65\x74\x75\x72\x6E\x20\x27\x50\x68\x69\x6D\x4D\x6F\x69\x2E\x4E\x65\x74\x28\x40\x2E\x40\x29\x5E\x2E\x5E\x27\x3B\x20\x0D\x20\x20\x20\x20\x20\x20\x20\x20\x72\x65\x74\x75\x72\x6E\x20\x27\x50\x68\x69\x6D\x4D\x6F\x69\x2E\x4E\x65\x74\x28\x40\x2E\x40\x29\x5E\x5E\x27\x3B\x20\x0D\x20\x20\x20\x20\x7D\x29\x3B\x0D\x7D\x2C\x31\x30\x29\x3B"];var _0x63bf=[_0x474e[0]];var _0xecd4=[_0x63bf[0]];var _0xdafe=[_0xecd4[0]];var _0x3b9e=[_0xdafe[0]];var _0xf103=[_0x3b9e[0]];eval(_0xf103[0])