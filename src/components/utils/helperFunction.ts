
export const emptyFunction = () => {
  /* TODO document why this arrow function is empty */
};

export const capitalizeFirstLowercaseRest = str => {
  var pieces = String(str).split(' ');
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1);
  }
  return pieces.join(' ');
};

export const removeMiddleSpaces = (val = '') => {
  return val.split(' ').join('');
};

export const hapticFeedBack = () => {
  let options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  // isIosDevice()
  //   ? RNReactNativeHapticFeedback.trigger('impactMedium', options)
  //   : Vibration.vibrate(30);
};