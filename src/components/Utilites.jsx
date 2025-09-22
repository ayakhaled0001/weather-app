// Temperature
export function toF(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function toC(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Wind Speed
export function kmhToMph(kmh) {
  return kmh * 0.621371;
}

export function mphToKmh(mph) {
  return mph / 0.621371;
}

// Precipitation
export function mmToIn(mm) {
  return mm / 25.4;
}

export function inToMm(inches) {
  return inches * 25.4;
}
