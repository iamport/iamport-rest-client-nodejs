/*!
 * iamport
 * MIT Licensed
 */

'use strict';

var resource = require('../resource'),
    iamportMethod = resource.iamportMethod;

var Banks = resource.extend({

  path: 'banks',

  /** method 생성
   * 은행 코드 목록을 조회합니다.
   * @see {@link https://api.iamport.kr/#!/codes/allBanks}
   *
   * @returns {promise} json 은행 코드 목록
   * @public
   */
  getAll: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: null
  }),

  /** method 생성
   * 특정 은행 코드를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/codes/bankByCode}
   *
   * @returns {promise} json 은행 코드 정보
   * @public
   */
  getByCode: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: 'bank_standard_code'
  })

});

var Cards = resource.extend({

  path: 'cards',

  /** method 생성
   * 카드사 코드 목록을 조회합니다.
   * @see {@link https://api.iamport.kr/#!/codes/allCards}
   *
   * @returns {promise} json 카드사 코드 목록
   * @public
   */
  getAll: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: null
  }),

  /** method 생성
   * 특정 카드사 코드를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/codes/cardByCode}
   *
   * @returns {promise} json 카드사 코드 정보
   * @public
   */
  getByCode: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: 'card_standard_code'
  })

});

module.exports = {
  Banks: Banks,
  Cards: Cards
};
