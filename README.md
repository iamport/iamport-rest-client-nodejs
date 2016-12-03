# Iamport
[![Build Status](https://travis-ci.org/iamport/iamport-rest-client-nodejs.svg?branch=master)](https://travis-ci.org/iamport/iamport-rest-client-nodejs)
[![npm version](https://badge.fury.io/js/iamport.svg)](https://badge.fury.io/js/iamport)
[![Dependency Status](https://david-dm.org/iamport/iamport-rest-client-nodejs.svg)](https://david-dm.org/iamport/iamport-rest-client-nodejs)

아임포트는 특정 서비스와 국내 PG사와의 연동을 간편하게 연결해주는 서비스입니다.
이 모듈은 아임포트에서 제공하는 REST API를 [Node.js®](https://nodejs.org/)로 구현한 클라이언트입니다.
아임포트의 자세한 내용은 [여기](http://iamport.kr/)를 참고하시기 바랍니다.

## Features
- 모든 함수는 [Promise](http://www.html5rocks.com/ko/tutorials/es6/promises/)를 반환

## Requirements
- [nodejs](https://github.com/nodejs/node) >= 0.12.x

## Installation
```
$ npm install --save iamport
```

## Usage
```javascript
var Iamport = require('iamport');
var iamport = new Iamport({
  impKey: 'your API key',
  impSecret: 'your API Secret key'
});

// 아임포트 고유 아이디로 결제 정보를 조회
iamport.payment.getByImpUid({
  imp_uid: 'your imp_uid'  
}).then(function(result){
  // To do
}).catch(function(error){
  // handle error
});

// 상점 고유 아이디로 결제 정보를 조회
iamport.payment.getByMerchant({
  merchant_uid: 'your merchant_uid'  
})

// 상태별 결제 정보 조회
iamport.payment.getByStatus({
  payment_status: 'your payment_status'  
})

```

## Available resources & methods
*Where you see `params` it is a plain JavaScript object*
- certification
 * [`get(params)`](https://api.iamport.kr/#!/certifications/getCertification)
 * [`delete(params)`](https://api.iamport.kr/#!/certifications/deleteCertification)
- payment
 * [`getByImpUid(params)`](https://api.iamport.kr/#!/payments/getPaymentByImpUid)
 * [`getByMerchant(params)`](https://api.iamport.kr/#!/payments/getPaymentByMerchantUid)
 * [`getByStatus(params)`](https://api.iamport.kr/#!/payments/getPaymentsByStatus)
 * [`cancel(params)`](https://api.iamport.kr/#!/payments/cancelPayment)
 * [`prepare(params)`](https://api.iamport.kr/#!/payments.validation/preparePayment)
 * [`getPrepare(params)`](https://api.iamport.kr/#!/payments.validation/getPaymentPrepareByMerchantUid)
- subscribe
 * [`onetime(params)`](https://api.iamport.kr/#!/subscribe/payments/onetime)
 * [`again(params)`](https://api.iamport.kr/#!/subscribe/payments/again)
 * [`schedule(params)`](https://api.iamport.kr/#!/subscribe/payments/schedule)
 * [`unschedule(params)`](https://api.iamport.kr/#!/subscribe/payments/unschedule)
- subscribe_customer
 * [`get(params)`](https://api.iamport.kr/#!/subscribe.customer/customer_view)
 * [`create(params)`](https://api.iamport.kr/#!/subscribe.customer/customer_save)
 * [`delete(params)`](https://api.iamport.kr/#!/subscribe.customer/customer_delete)
- vbank
 * [`create(params)`](https://api.iamport.kr/#!/vbanks)

## Contribution
- 이 프로젝트는 누구나 참여 가능합니다.
- 버그나 개선점 및 의견 등은 [이슈](https://github.com/iamport/iamport-rest-client-nodejs/issues) 및 [Pull Request](https://github.com/iamport/iamport-rest-client-nodejs/compare)를 활용해주세요.

## Conventions
- [ES5](https://github.com/airbnb/javascript/tree/master/es5)
- [ES6](https://github.com/airbnb/javascript)

## Links
- I'amport; 공식 사이트: http://www.iamport.kr/
- I'amport; API(swagger): https://api.iamport.kr/
- I'amport; 메뉴얼: http://www.iamport.kr/manual/

## License
- [MIT](https://github.com/iamport/iamport-rest-client-nodejs/blob/master/LICENSE)
