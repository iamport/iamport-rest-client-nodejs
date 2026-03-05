# Iamport
[![Build Status](https://travis-ci.org/iamport/iamport-rest-client-nodejs.svg?branch=master)](https://travis-ci.org/iamport/iamport-rest-client-nodejs)
[![npm version](https://badge.fury.io/js/iamport.svg)](https://badge.fury.io/js/iamport)
[![Dependency Status](https://david-dm.org/iamport/iamport-rest-client-nodejs.svg)](https://david-dm.org/iamport/iamport-rest-client-nodejs)

> **⚠️ DEPRECATED**: 이 레포지토리는 2026년 3월 4일부로 deprecated 되었으며, 공식 지원이 되지 않습니다.
> 본 클라이언트는 함께 포함된 [openapi.json](./openapi.json) Swagger spec 기준으로 동작합니다.
> 추가/수정이 필요한 경우 본 레포지토리를 fork하여 수정하거나,
> [PortOne V1 REST API 문서](https://developers.portone.io/api/rest-v1?v=v1)를 참고하여 REST client를 직접 구현해주세요.

아임포트는 특정 서비스와 국내 PG사와의 연동을 간편하게 연결해주는 서비스입니다.
- 이 모듈은 아임포트에서 제공하는 REST API를 [Node.js](https://nodejs.org/)로 구현한 샘플프로그램입니다.
- 아임포트의 자세한 내용은 [여기](http://iamport.kr/)를 참고하시기 바랍니다.

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
 * [`otpRequest(params)`](https://api.iamport.kr/#!/certifications/requestOtp)
 * [`otpConfirm(params)`](https://api.iamport.kr/#!/certifications/confirmOtp)
- payment
 * [`getByImpUid(params)`](https://api.iamport.kr/#!/payments/getPaymentByImpUid)
 * [`getByMerchant(params)`](https://api.iamport.kr/#!/payments/getPaymentByMerchantUid)
 * [`getByStatus(params)`](https://api.iamport.kr/#!/payments/getPaymentsByStatus)
 * [`cancel(params)`](https://api.iamport.kr/#!/payments/cancelPayment)
 * [`prepare(params)`](https://api.iamport.kr/#!/payments.validation/preparePayment)
 * [`getPrepare(params)`](https://api.iamport.kr/#!/payments.validation/getPaymentPrepareByMerchantUid)
 * [`getBalance(params)`](https://api.iamport.kr/#!/payments/getPaymentBalanceByImpUid)
 * [`getByImpUids(params)`](https://api.iamport.kr/#!/payments/getPaymentsByImpUid)
 * [`getAllByMerchant(params)`](https://api.iamport.kr/#!/payments/getAllPaymentsByMerchantUid)
 * [`updatePrepare(params)`](https://api.iamport.kr/#!/payments.validation/updatePaymentPrepare)
- subscribe
 * [`onetime(params)`](https://api.iamport.kr/#!/subscribe/payments/onetime)
 * [`again(params)`](https://api.iamport.kr/#!/subscribe/payments/again)
 * [`schedule(params)`](https://api.iamport.kr/#!/subscribe/payments/schedule)
 * [`unschedule(params)`](https://api.iamport.kr/#!/subscribe/payments/unschedule)
 * [`getSchedules(params)`](https://api.iamport.kr/#!/subscribe/payments/schedule)
 * [`getScheduleByMerchantUid(params)`](https://api.iamport.kr/#!/subscribe/payments/schedule/merchant_uid)
 * [`updateSchedule(params)`](https://api.iamport.kr/#!/subscribe/payments/schedule/merchant_uid)
 * [`retrySchedule(params)`](https://api.iamport.kr/#!/subscribe/payments/schedule/merchant_uid/retry)
 * [`rescheduleSchedule(params)`](https://api.iamport.kr/#!/subscribe/payments/schedule/merchant_uid/reschedule)
 * [`getSchedulesByCustomerUid(params)`](https://api.iamport.kr/#!/subscribe/payments/schedule/customers/customer_uid)
- subscribe_customer
 * [`get(params)`](https://api.iamport.kr/#!/subscribe.customer/customer_view)
 * [`create(params)`](https://api.iamport.kr/#!/subscribe.customer/customer_save)
 * [`delete(params)`](https://api.iamport.kr/#!/subscribe.customer/customer_delete)
 * [`getPayments(params)`](https://api.iamport.kr/#!/subscribe.customer/customer_payments)
 * [`getMultiple(params)`](https://api.iamport.kr/#!/subscribe.customer/customer_view_multiple)
 * [`getSchedules(params)`](https://api.iamport.kr/#!/subscribe.customer/customer_schedules)
- vbank
 * [`create(params)`](https://api.iamport.kr/#!/vbanks)
 * [`getHolder(params)`](https://api.iamport.kr/#!/vbanks/queryBankHolder)
 * [`update(params)`](https://api.iamport.kr/#!/vbanks/updateVbank)
 * [`delete(params)`](https://api.iamport.kr/#!/vbanks/deleteVbank)
- escrows
 * [`create(params)`](https://api.iamport.kr/#!/escrow.logis/escrow_logis_save)
 * [`get(params)`](https://api.iamport.kr/#!/escrow.logis/escrow_logis_get)
 * [`update(params)`](https://api.iamport.kr/#!/escrow.logis/escrow_logis_update)
- benepia
 * [`getPoint(params)`](https://api.iamport.kr/#!/benepia/queryBenepiaPoint)
 * [`payment(params)`](https://api.iamport.kr/#!/benepia/payBenepiaPoint)
- bank
 * [`getAll()`](https://api.iamport.kr/#!/codes/allBanks)
 * [`getByCode(params)`](https://api.iamport.kr/#!/codes/bankByCode)
- card
 * [`getAll()`](https://api.iamport.kr/#!/codes/allCards)
 * [`getByCode(params)`](https://api.iamport.kr/#!/codes/cardByCode)
- cvs
 * [`create(params)`](https://api.iamport.kr/#!/cvs/issueCvs)
 * [`delete(params)`](https://api.iamport.kr/#!/cvs/cancelCvs)
- kcpQuick
 * [`deleteMember(params)`](https://api.iamport.kr/#!/kcpquick/deleteKcpQuickMember)
 * [`payMoney(params)`](https://api.iamport.kr/#!/kcpquick/payKcpQuickMoney)
- naver
 * [`getProductOrder(params)`](https://api.iamport.kr/#!/naver/getProductOrder)
 * [`getReviews(params)`](https://api.iamport.kr/#!/naver/getReviews)
- naverPayment
 * [`getProductOrders(params)`](https://api.iamport.kr/#!/naver/getNaverProductOrders)
 * [`getCashAmount(params)`](https://api.iamport.kr/#!/naver/getNaverCashAmount)
 * [`place(params)`](https://api.iamport.kr/#!/naver/placeNaverOrder)
 * [`ship(params)`](https://api.iamport.kr/#!/naver/shipNaverOrder)
 * [`confirm(params)`](https://api.iamport.kr/#!/naver/confirmNaverOrder)
 * [`approveCancel(params)`](https://api.iamport.kr/#!/naver/approveCancelNaverOrder)
 * [`approveReturn(params)`](https://api.iamport.kr/#!/naver/approveReturnNaverOrder)
 * [`cancel(params)`](https://api.iamport.kr/#!/naver/cancelNaverOrder)
 * [`requestReturn(params)`](https://api.iamport.kr/#!/naver/requestReturnNaverOrder)
 * [`rejectReturn(params)`](https://api.iamport.kr/#!/naver/rejectReturnNaverOrder)
 * [`resolveReturn(params)`](https://api.iamport.kr/#!/naver/resolveReturnNaverOrder)
 * [`withholdReturn(params)`](https://api.iamport.kr/#!/naver/withholdReturnNaverOrder)
 * [`collectExchanged(params)`](https://api.iamport.kr/#!/naver/collectExchangedNaverOrder)
 * [`shipExchanged(params)`](https://api.iamport.kr/#!/naver/shipExchangedNaverOrder)
 * [`point(params)`](https://api.iamport.kr/#!/naver/pointNaverOrder)
- partner
 * [`issueReceipt(params)`](https://api.iamport.kr/#!/partners/issuePartnerReceipt)
- payco
 * [`updateOrderStatus(params)`](https://api.iamport.kr/#!/payco/updatePaycoOrderStatus)
- receipt
 * [`get(params)`](https://api.iamport.kr/#!/receipts/getReceipt)
 * [`create(params)`](https://api.iamport.kr/#!/receipts/issueReceipt)
 * [`delete(params)`](https://api.iamport.kr/#!/receipts/cancelReceipt)
 * [`getExternal(params)`](https://api.iamport.kr/#!/receipts/getExternalReceipt)
 * [`createExternal(params)`](https://api.iamport.kr/#!/receipts/issueExternalReceipt)
 * [`deleteExternal(params)`](https://api.iamport.kr/#!/receipts/cancelExternalReceipt)
- tier
 * [`get(params)`](https://api.iamport.kr/#!/tiers/getTier)
- user
 * [`getPg()`](https://api.iamport.kr/#!/users/getPgSettings)
- paymentwall
 * [`sendDelivery(params)`](https://api.iamport.kr/#!/paymentwall/sendPaymentwallDelivery)

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
