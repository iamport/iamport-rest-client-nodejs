/*!
 * iamport
 * Copyright(c) 2015 Seungjae Lee
 * MIT Licensed
 */
'use strict';

Iamport.DEFAULT_HOST = 'https://api.iamport.kr';
Iamport.DEFAULT_KEY = 'imp_apiKey';
Iamport.DEFAULT_SECRET = 'ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f'

var resources = {
  Payment : require('./resources/Payments'),
  Subscribe : require('./resources/Subscribe'),
  Subscribe_customer: require('./resources/Subscribe_customer'),
  Certification: require('./resources/Certifications'),
  Vbank : require('./resources/Vbank')
};

Iamport.resources = resources;

/**
 * Iamport constructor.
 *
 * @param {object} options {impKey, impSecret}
 * @property {string} impKey REST API Key (default: 아임포트 테스트 키)
 * @property {string} impSecret REST API Secret Key (default: 아임포트 테스트 시크릿 키)
 * @constructor
 */
function Iamport(options) {
  if(!(this instanceof Iamport)) {
    return new Iamport(options);
  }
  options || (options = {});
  this._host = Iamport.DEFAULT_HOST;
  this._impKey = options.impKey || Iamport.DEFAULT_KEY;
  this._impSecret = options.impSecret || Iamport.DEFAULT_SECRET;
  this._preResources();
}

Iamport.prototype._preResources = function() {
  for (var name in resources) {
    this [
      name[0].toLowerCase() + name.substring(1)
    ] = new resources[name](this);
  }
};

Iamport.prototype._getTokenCache = function() {
  // check token expire
  if( this.token && this.token.expired_at &&
      this.token.expired_at <= Math.floor( Date.now()/1000 )) {
    return null;
  } else {
    return this.token;
  }
};
Iamport.prototype._setTokenCache = function(token) {
  this.token = token;
};

/**
 * Module exports.
 * @public
 */
module.exports = Iamport;
