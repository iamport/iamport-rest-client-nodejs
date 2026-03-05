/* tslint:disable */
interface IamportResponse<T = any> {
    code: number
    message: string
    response?: T
}

type iamportStatus = 'ready' | 'paid' | 'failed' | 'cancelled';
type vbankCode =
    '004' | // KB국민은행
    '023' | // SC제일은행
    '039' | // 경남은행
    '034' | // 광주은행
    '003' | // 기업은행
    '011' | // 농협
    '031' | // 대구은행
    '032' | // 부산은행
    '002' | // 산업은행
    '007' | // 수협
    '088' | // 신한은행
    '048' | // 신협
    '005' | // 외환은행
    '020' | // 우리은행
    '071' | // 우체국
    '037' | // 전북은행
    '035' | // 제주은행
    '012' | // 축협
    '081' | // 하나은행(서울은행)
    '027' | // 한국씨티은행(한미은행)
    '089' | // K뱅크
    '090' | // 카카오뱅크
    '209' | // 유안타증권
    '218' | // 현대증권
    '230' | // 미래에셋증권
    '238' | // 대우증권
    '240' | // 삼성증권
    '243' | // 한국투자증권
    '247' | // 우리투자증권
    '261' | // 교보증권
    '262' | // 하이투자증권
    '263' | // 에이치엠씨투자증권
    '264' | // 키움증권
    '265' | // 이트레이드증권
    '266' | // 에스케이증권
    '267' | // 대신증권
    '268' | // 솔로몬투자증권
    '269' | // 한화증권
    '270' | // 하나대투증권
    '278' | // 굿모닝신한증권
    '279' | // 동부증권
    '280' | // 유진투자증권
    '287' | // 메리츠증권
    '289' | // 엔에이치투자증권
    '290'; // 부국증권

interface IamportPayment {
    imp_uid: string
    merchant_uid: string
    pay_method?: string
    channel?: 'pc' | 'mobile' | 'api'
    pg_provider?: string
    pg_tid?: string
    pg_id?: string
    escrow?: boolean
    apply_num?: string
    bank_code?: string
    bank_name?: string
    card_code?: string
    card_name?: string
    card_quota?: number
    card_number?: string
    card_type?: number | null
    vbank_code?: string
    vbank_name?: string
    vbank_num?: string
    vbank_holder?: string
    vbank_date?: number
    vbank_issued_at?: number
    name?: string
    amount?: number
    cancel_amount?: number
    currency?: string
    buyer_name?: string
    buyer_email?: string
    buyer_tel?: string
    buyer_addr?: string
    buyer_postcode?: string
    custom_data?: string
    user_agent?: string
    status?: iamportStatus
    started_at?: number
    paid_at?: number
    failed_at?: number
    cancelled_at?: number
    fail_reason?: string
    cancel_reason?: string
    receipt_url?: string
    cancel_history?: Array<{
        pg_tid: string
        amount: 0
        cancelled_at: 0
        reason: string
        receipt_url?: string
    }>
    cancel_receipt_urls?: string[]
    cash_receipt_issued?: boolean
}

interface IamportScheduleResult {
    customer_uid?: string
    merchant_uid?: string
    imp_uid?: string
    schedule_at?: number
    executed_at?: number
    revoked_at?: number
    amount?: number
    name?: string
    buyer_name?: string
    buyer_email?: string
    buyer_tel?: string
    buyer_addr?: string
    buyer_postcode?: string
    custom_data?: string
    schedule_status?: 'scheduled' | 'executed' | 'revoked'
    payment_status?: null | 'paid' | 'failed' | 'cancelled'
    fail_reason?: string
}

interface IamportCustomer {
    customer_uid: string
    pg_provider?: string
    pg_id?: string
    card_name?: string
    card_code?: string
    card_number?: string
    card_type?: number
    customer_name?: string
    customer_tel?: string
    customer_email?: string
    customer_addr?: string
    customer_postcode?: string
    inserted: number
    updated: number
}

interface IamportCertification {
    imp_uid: string
    merchant_uid?: string
    pg_tid?: string
    pg_provider?: string
    name?: string
    gender?: string
    birth?: number
    birthday?: string
    foreigner?: boolean
    certified?: boolean
    certified_at?: number
    unique_key?: string
    unique_in_site?: string
    origin?: string
}

interface EscrowsLogisSenderAndReceiver {
    name: string,
    tel: string,
    addr: string,
    postcode: string,
}

interface EscrowLogis {
    company: string,
    invoice: string,
    sent_at: number,
}

interface IamportPaymentBalance {
    amount?: number
    cash_receipt?: object
}

interface IamportPrepare {
    merchant_uid?: string
    amount?: number
}

interface IamportBankCode {
    code?: string
    name?: string
}

interface IamportCardCode {
    code?: string
    name?: string
}

interface IamportReceipt {
    imp_uid?: string
    merchant_uid?: string
    apply_num?: string
    type?: string
    amount?: number
    vat?: number
    receipt_url?: string
    company_name?: string
    company_tel?: string
    registered_at?: number
    state?: string
    cancelled_at?: number
}

interface IamportNaverProductOrder {
    product_order_id?: string
    product_order_status?: string
    claim_type?: string
    claim_status?: string
    product_id?: string
    product_name?: string
    product_option_id?: string
    product_option_name?: string
    product_amount?: number
    delivery_amount?: number
    quantity?: number
}

class Payments {
    getByImpUid(params:{imp_uid: string}): Promise<IamportResponse<IamportPayment>>

    getByMerchant(params:{
        merchant_uid: string
        payment_status?: iamportStatus
        sorting?: '-started' | 'started' | '-paid' | 'paid' | '-updated' | 'updated'
    }): Promise<IamportResponse<IamportPayment>>

    getByStatus(params:{
        payment_status: 'all' | iamportStatus
        page?: number
        limit?: number
        from?: number
        to?: number
        sorting?: '-started' | 'started' | '-paid' | 'paid' | '-updated' | 'updated'
    }): Promise<IamportResponse<{
        total: number
        previous: number
        next: number
        list: IamportPayment[]
    }>>

    cancel(params:{
        imp_uid?: string
        merchant_uid?: string
        amount?: number
        tax_free?: number
        vat_amount?: number
        checksum?: number
        reason?: string
        refund_holder?: string
        refund_bank?: string
        refund_account?: string
        refund_tel?: string
    }): Promise<IamportResponse<IamportPayment>>

    prepare(params:{
        merchant_uid: string
        amount: number
        currency?: string
    }): Promise<IamportResponse<IamportPrepare>>

    getPrepare(params:{
        merchant_uid: string
    }): Promise<IamportResponse<IamportPrepare>>

    getBalance(params:{
        imp_uid: string
    }): Promise<IamportResponse<IamportPaymentBalance>>

    getByImpUids(params?:{
        'imp_uid[]'?: string[]
        'merchant_uid[]'?: string[]
    }): Promise<IamportResponse<IamportPayment[]>>

    getAllByMerchant(params:{
        merchant_uid: string
        payment_status?: iamportStatus
        page?: number
        limit?: number
        sorting?: '-started' | 'started' | '-paid' | 'paid' | '-updated' | 'updated'
    }): Promise<IamportResponse<{
        total: number
        previous: number
        next: number
        list: IamportPayment[]
    }>>

    updatePrepare(params:{
        merchant_uid: string
        amount: number
        currency?: string
    }): Promise<IamportResponse<IamportPrepare>>
}

class Subscribe {
    onetime(params:{
        merchant_uid: string
        amount: number
        tax_free?: number
        vat_amount?: number
        card_number: string
        expiry: string
        birth?: string
        pwd_2digit?: string
        cvc?: string
        customer_uid?: string
        pg?: string
        name?: string
        buyer_name?: string
        buyer_email?: string
        buyer_tel?: string
        buyer_addr?: string
        buyer_postcode?: string
        card_quota?: number
        interest_free_by_merchant?: boolean
        use_card_point?: boolean
        custom_data?: string
        notice_url?: string
        browser_ip?: string
        product_type?: string
        promotion_id?: string
    }): Promise<IamportResponse<IamportPayment>>

    again(params:{
        customer_uid: string
        merchant_uid: string
        amount: number
        tax_free?: number
        vat_amount?: number
        name: string
        buyer_name?: string
        buyer_email?: string
        buyer_tel?: string
        buyer_addr?: string
        buyer_postcode?: string
        card_quota?: number
        interest_free_by_merchant?: boolean
        use_card_point?: boolean
        custom_data?: string
        notice_url?: string
        browser_ip?: string
        product_type?: string
        product_count?: number
        promotion_id?: string
    }): Promise<IamportResponse<IamportPayment>>

    schedule(params:{
        customer_uid: string
        checking_amount?: number
        card_number?: string
        expiry?: string
        birth?: string
        pwd_2digit?: string
        cvc?: string
        pg?: string
        schedules: Array<{
            merchant_uid: string
            schedule_at: number
            amount: number
            tax_free?: number
            name?: string
            buyer_name?: string
            buyer_email?: string
            buyer_tel?: string
            buyer_addr?: string
            buyer_postcode?: string
            custom_data?: string
            notice_url?: string
        }>
    }): Promise<IamportResponse<IamportScheduleResult[]>>

    unschedule(params:{
        customer_uid: string
        merchant_uid?: string | string[]
    }): Promise<IamportResponse<IamportScheduleResult[]>>

    getSchedules(params:{
        schedule_from: number
        schedule_to: number
        schedule_status?: 'scheduled' | 'executed' | 'revoked'
        page?: number
        limit?: number
        sorting?: '-started' | 'started' | '-paid' | 'paid' | '-updated' | 'updated'
    }): Promise<IamportResponse<{
        total: number
        previous: number
        next: number
        list: IamportScheduleResult[]
    }>>

    getScheduleByMerchantUid(params:{
        merchant_uid: string
    }): Promise<IamportResponse<IamportScheduleResult>>

    updateSchedule(params:{
        merchant_uid: string
        schedule_at: number
    }): Promise<IamportResponse<IamportScheduleResult>>

    retrySchedule(params:{
        merchant_uid: string
    }): Promise<IamportResponse<IamportScheduleResult>>

    rescheduleSchedule(params:{
        merchant_uid: string
        schedule_at: number
    }): Promise<IamportResponse<IamportScheduleResult>>

    getSchedulesByCustomerUid(params:{
        customer_uid: string
        from: number
        to: number
        page?: number
        'schedule-status'?: 'scheduled' | 'executed' | 'revoked'
    }): Promise<IamportResponse<IamportScheduleResult[]>>
}

class SubscribeCustomer {
    get(params:{
        customer_uid: string
    }): Promise<IamportResponse<IamportCustomer>>

    create(params:{
        customer_uid: string
        pg?: string
        card_number: string
        expiry: string
        birth?: string
        pwd_2digit?: string
        cvc?: string
        customer_name?: string
        customer_tel?: string
        customer_email?: string
        customer_addr?: string
        customer_postcode?: string
    }): Promise<IamportResponse<IamportCustomer>>

    delete(params:{
        customer_uid: string
        reason?: string
    }): Promise<IamportResponse<IamportCustomer>>

    getPayments(params:{
        customer_uid: string
        page?: number
    }): Promise<IamportResponse<IamportPayment[]>>

    getMultiple(params?:{
        'customer_uid[]'?: string[]
    }): Promise<IamportResponse<IamportCustomer[]>>

    getSchedules(params:{
        customer_uid: string
        from: number
        to: number
        page?: number
        'schedule-status'?: 'scheduled' | 'executed' | 'revoked'
    }): Promise<IamportResponse<IamportScheduleResult[]>>
}

class Certifications {
    get(params:{imp_uid: string}): Promise<IamportResponse<IamportCertification>>

    delete(params:{imp_uid: string}): Promise<IamportResponse<IamportCertification>>

    otpRequest(params?:object): Promise<IamportResponse<any>>

    otpConfirm(params:{imp_uid: string}): Promise<IamportResponse<any>>
}

class Vbank {
    create(params:{
        merchant_uid: string
        amount: number
        vbank_code: string
        vbank_due: number
        vbank_holder?: string
        channel_key?: string
        name?: string
        buyer_name?: string
        buyer_email?: string
        buyer_tel?: string
        buyer_addr?: string
        buyer_postcode?: string
        pg?: string
        notice_url?: string | string[]
        custom_data?: string
        tax_free?: number
        vat_amount?: number
    }): Promise<IamportResponse<IamportPayment>>

    getHolder(params: {
        bank_code: vbankCode,
        bank_num: string,
    }): Promise<IamportResponse<any>>

    update(params:{
        imp_uid: string
        amount?: number
        vbank_due?: number
    }): Promise<IamportResponse<IamportPayment>>

    delete(params:{
        imp_uid: string
        pg_api_key?: string
    }): Promise<IamportResponse<IamportPayment>>
}

class Escrows {
    create(params:{
        imp_uid: string
        sender: EscrowsLogisSenderAndReceiver
        receiver: EscrowsLogisSenderAndReceiver
        logis: EscrowLogis
    }): Promise<IamportResponse<any>>

    get(params:{
        imp_uid: string
    }): Promise<IamportResponse<any>>

    update(params:{
        imp_uid: string
        sender: EscrowsLogisSenderAndReceiver
        receiver: EscrowsLogisSenderAndReceiver
        logis: EscrowLogis
    }): Promise<IamportResponse<any>>
}

class Benepia {
    getPoint(params:{
        benepia_user: string
        benepia_password: string
        channel_key: string
    }): Promise<IamportResponse<any>>

    payment(params:{
        benepia_user: string
        benepia_password: string
        merchant_uid: string
        amount: number
        name: string
        channel_key: string
        benepia_member_code?: string
        buyer_name?: string
        buyer_email?: string
        buyer_tel?: string
        buyer_addr?: string
        buyer_postcode?: string
        notice_url?: string
        custom_data?: string
    }): Promise<IamportResponse<IamportPayment>>
}

class Bank {
    getAll(): Promise<IamportResponse<IamportBankCode[]>>

    getByCode(params:{
        bank_standard_code: string
    }): Promise<IamportResponse<IamportBankCode>>
}

class Card {
    getAll(): Promise<IamportResponse<IamportCardCode[]>>

    getByCode(params:{
        card_standard_code: string
    }): Promise<IamportResponse<IamportCardCode>>
}

class Cvs {
    create(params:{
        channel_key: string
        merchant_uid: string
        amount: number
        barcode?: string
        expired_at?: number
        name?: string
        buyer_name?: string
        buyer_email?: string
        buyer_tel?: string
        buyer_addr?: string
        buyer_postcode?: string
        confirm_url?: string
        notice_url?: string
        custom_data?: string
    }): Promise<IamportResponse<IamportPayment>>

    delete(params:{
        imp_uid: string
    }): Promise<IamportResponse<IamportPayment>>
}

class KcpQuick {
    deleteMember(params:{
        member_id: string
        site_code: string
        partner_type: string
        partner_subtype: string
    }): Promise<IamportResponse<any>>

    payMoney(params:{
        member_id: string
        channel_key: string
        merchant_uid: string
        name: string
        amount: number
        notice_url?: string
    }): Promise<IamportResponse<IamportPayment>>
}

class Naver {
    getProductOrder(params:{
        product_order_id: string
    }): Promise<IamportResponse<IamportNaverProductOrder>>

    getReviews(params:{
        channel_key: string
        from: number
        to: number
        review_type: string
    }): Promise<IamportResponse<any>>
}

class NaverPayment {
    getProductOrders(params:{
        imp_uid: string
    }): Promise<IamportResponse<IamportNaverProductOrder[]>>

    getCashAmount(params:{
        imp_uid: string
    }): Promise<IamportResponse<any>>

    place(params:{
        imp_uid: string
        product_order_id?: string | string[]
    }): Promise<IamportResponse<any>>

    ship(params:{
        imp_uid: string
        delivery_method: string
        dispatched_at: number
        product_order_id?: string | string[]
        delivery_company?: string
        tracking_number?: string
    }): Promise<IamportResponse<any>>

    confirm(params:{
        imp_uid: string
        requester?: string
    }): Promise<IamportResponse<any>>

    approveCancel(params:{
        imp_uid: string
        product_order_id?: string | string[]
    }): Promise<IamportResponse<any>>

    approveReturn(params:{
        imp_uid: string
        product_order_id?: string | string[]
        memo?: string
    }): Promise<IamportResponse<any>>

    cancel(params:{
        imp_uid: string
        product_order_id?: string | string[]
        reason?: string
    }): Promise<IamportResponse<any>>

    requestReturn(params:{
        imp_uid: string
        delivery_method: string
        product_order_id?: string | string[]
        reason?: string
        delivery_company?: string
        tracking_number?: string
    }): Promise<IamportResponse<any>>

    rejectReturn(params:{
        imp_uid: string
        memo: string
        product_order_id?: string | string[]
    }): Promise<IamportResponse<any>>

    resolveReturn(params:{
        imp_uid: string
        product_order_id?: string | string[]
    }): Promise<IamportResponse<any>>

    withholdReturn(params:{
        imp_uid: string
        memo: string
        product_order_id?: string | string[]
        reason?: string
        extra_charge?: number
    }): Promise<IamportResponse<any>>

    collectExchanged(params:{
        imp_uid: string
        product_order_id?: string | string[]
    }): Promise<IamportResponse<any>>

    shipExchanged(params:{
        imp_uid: string
        delivery_method: string
        product_order_id?: string | string[]
        delivery_company?: string
        tracking_number?: string
    }): Promise<IamportResponse<any>>

    point(params:{
        imp_uid: string
    }): Promise<IamportResponse<any>>
}

class Partner {
    issueReceipt(params:{
        imp_uid: string
        data: object
    }): Promise<IamportResponse<any>>
}

class Payco {
    updateOrderStatus(params:{
        imp_uid: string
        status: string
    }): Promise<IamportResponse<any>>
}

class Receipt {
    get(params:{
        imp_uid: string
    }): Promise<IamportResponse<IamportReceipt>>

    create(params:{
        imp_uid: string
        identifier: string
        identifier_type?: string
        type?: string
        buyer_name?: string
        buyer_email?: string
        buyer_tel?: string
        tax_free?: number
        vat_amount?: number
        product_type?: string
        company_tel?: string
        company_name?: string
        corp_reg_no?: string
    }): Promise<IamportResponse<IamportReceipt>>

    delete(params:{
        imp_uid: string
    }): Promise<IamportResponse<IamportReceipt>>

    getExternal(params:{
        merchant_uid: string
    }): Promise<IamportResponse<IamportReceipt>>

    createExternal(params:{
        merchant_uid: string
        channel_key: string
        name: string
        amount: number
        identifier: string
        identifier_type?: string
        type?: string
        buyer_name?: string
        buyer_email?: string
        buyer_tel?: string
        tax_free?: number
        vat_amount?: number
        product_type?: string
        corp_reg_no?: string
        pay_method?: string
    }): Promise<IamportResponse<IamportReceipt>>

    deleteExternal(params:{
        merchant_uid: string
    }): Promise<IamportResponse<IamportReceipt>>
}

class Tier {
    get(params:{
        tier_code: string
    }): Promise<IamportResponse<any>>
}

class User {
    getPg(): Promise<IamportResponse<any>>
}

class Paymentwall {
    sendDelivery(params:{
        imp_uid: string
        merchant_uid: string
        type: string
        status: string
        estimated_delivery_datetime: string
        estimated_update_datetime: string
        refundable: boolean
        shipping_address_email: string
        carrier_tracking_id?: string
        carrier_type?: string
        reason?: string
        details?: string
        shipping_address_country?: string
        shipping_address_city?: string
        shipping_address_zip?: string
        shipping_address_state?: string
        shipping_address_street?: string
        shipping_address_phone?: string
        shipping_address_firstname?: string
        shipping_address_lastname?: string
    }): Promise<IamportResponse<any>>
}

class Iamport {
    readonly payment: Payments;
    readonly subscribe: Subscribe;
    readonly subscribe_customer: SubscribeCustomer;
    readonly certification: Certifications;
    readonly vbank: Vbank;
    readonly escrows: Escrows;
    readonly benepia: Benepia;
    readonly bank: Bank;
    readonly card: Card;
    readonly cvs: Cvs;
    readonly kcpQuick: KcpQuick;
    readonly naver: Naver;
    readonly naverPayment: NaverPayment;
    readonly partner: Partner;
    readonly payco: Payco;
    readonly receipt: Receipt;
    readonly tier: Tier;
    readonly user: User;
    readonly paymentwall: Paymentwall;
    constructor(options?: {
        impKey: string
        impSecret: string
    });
}

export default Iamport;
