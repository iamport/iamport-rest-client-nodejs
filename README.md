# Iamport
아임포트는 특정 서비스와 국내 PG사와의 연동을 간편하게 연결해주는 서비스입니다.
이 모듈은 아임포트에서 제공하는 REST API를 [Node.js®](https://nodejs.org/)로 구현한 클라이언트입니다.
아임포트의 자세한 내용은 [여기](http://iamport.kr/)를 참고하시기 바랍니다.

## Features
- 인증 토큰 반환
- 결제 정보 반환
- 결제 취소
- 모든 함수는 [Promise](http://www.html5rocks.com/ko/tutorials/es6/promises/) 사용

## Requirements
- [nodejs](https://github.com/nodejs/node) >= 0.12.x
- [request-promise](https://github.com/request/request-promise) >= 1.0.x

## Installation
```
$ npm install git+https://git@github.com/iamport/iamport-rest-client-nodejs.git
```

## Usage
```
var Iamport = require('iamport');
var iamport = new Iamport({
  impKey: 'your API key',
  impSecret: 'your API Secret key'
});

// 결제 정보 반환
iamport.getPaymentByImpUid('impUid-for-info')
  .then(function(response){
    console.log(response);
  }).catch(function(error){
    console.log(error);
  });

// 결제 취소
iamport.cancelPayment('impUid-for-cancel')
  .then(function(response){
    console.log(response);
  }).catch(function(error){
    console.log(error);
  });
```

## Todo
- 테스트 코드(...)
- publish to NPM
- 파라미터 검증
- 결제 취소의 다양한 케이스 대응
- merchantUid로 결제 정보 조회 구현
- 한번에 여러 결제 정보 반환 구현

## Contribution
- 이 프로젝트는 누구나 참여 가능합니다.
- 버그나 개선점 및 의견 등은 [이슈](https://github.com/iamport/iamport-rest-client-nodejs/issues)를 활용 해 주시고 직접 [Pull Request](https://github.com/iamport/iamport-rest-client-nodejs/compare)를 하셔도 됩니다. 

## Links
- I'amport; 공식 사이트: http://www.iamport.kr/
- I'amport; API(swagger): https://api.iamport.kr/
- I'amport; 메뉴얼: http://www.iamport.kr/manual/

## License
- (MIT)[https://github.com/iamport/iamport-rest-client-nodejs/blob/master/LICENSE]

