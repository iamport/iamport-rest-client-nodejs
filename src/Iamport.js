import { TEST_IMP_KEY, TEST_IMP_SECRET } from './constants';
import API from './API';

class Iamport {
  /**
   * Iamport constructor.
   *
   * @param {object} options {impKey, impSecret}
   * @property {string} impKey REST API Key (default: 아임포트 테스트 키)
   * @property {string} impSecret REST API Secret Key (default: 아임포트 테스트 시크릿 키)
   * @constructor
   */
  constructor(options = {}) {
    this.impKey = options.impKey || TEST_IMP_KEY;
    this.impSecret = options.impSecret || TEST_IMP_SECRET;
  }

  /**
   * 토큰을 발급합니다.
   * @see {@link https://api.iamport.kr/#!/authenticate/getToken}
   *
   * @return {promise} string access token
   * @private
   */
  _getToken() {
    return API.post({
      path: 'users/getToken',
      body: {
        imp_key: this.impKey,
        imp_secret: this.impSecret,
      },
    }).then((response) => response.access_token);
  }

  /**
   * 아임포트 고유 아이디로 결제 정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/payments/getPaymentByImpUid}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  getPaymentByImpUid(impUid) {
    return this._getToken()
      .then((token) => (API.get({
        path: `payments/${impUid}`,
        query: {
          _token: token,
        },
      })));
  }


  /**
   * 상점 고유 아이디로 결제 정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/payments/getPaymentByMerchantUid}
   *
   * @todo 구현
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  getPaymentByMerchantUid(merchantUid) {
    throw new Error("Not implemented");
  }

  /**
   * 여러 결제 정보를 한꺼번에 조회합니다.
   * @see {@link https://api.iamport.kr/#!/payments/getPaymentsByStatus}
   *
   * @todo 구현
   *
   * @param {string} status
   * @param {number} page
   * @returns {promise} array 결제 정보
   * @public
   */
  getPaymentsByStatus(status, page) {
    throw new Error("Not implemented");
  }

  /**
   * 결제를 취소합니다.
   * @see {@link https://api.iamport.kr/#!/payments/cancelPayment}
   *
   * @todo param을 object로 받아서 처리
   * @todo impUid, merchantUid 선택적으로 받을 수 있게
   * @todo 취소사유, 부분취소요청 추가
   *
   * @param {string} impUid
   * @param {object} refundInfo
   * @returns {promise} json 결제 정보
   * @public
   */
  cancelPaymen(impUid, refundInfo = {}) {
    const body = {
      imp_uid: impUid,
    };

    if (refundInfo.refundHolder && refundInfo.refundBankCode && refundInfo.refundAccount) {
      body.refund_holder = refundInfo.refundHolder;
      body.refund_bank = refundInfo.refundBankCode;
      body.refund_account = refundInfo.refundAccount;
    }

    return this._getToken()
      .then((token) => API.post({
        path: 'payments/cancel',
        body,
        query: {
          _token: token,
        },
      }));
  }
}

export default Iamport;
