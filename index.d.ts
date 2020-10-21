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

class Payments {
    getByImpUid(params:{imp_uid: string[]}): Promise<IamportResponse<IamportPayment[]>>

    getByMerchant(params:{
        merchant_uid: string
        payment_status: iamportStatus
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
        checksum?: number
        reason?: string
        refund_holder?: string
        refund_bank?: string
        refund_account?: string
    }): Promise<IamportResponse<IamportPayment>>

    prepare(params:{
        merchant_uid: string
        amount: number
    }): Promise<IamportResponse<{
        merchant_uid?: string
        amount?: number
    }>>

    getPrepare(params:{
        merchant_uid: string
    }): Promise<IamportResponse<{
        merchant_uid?: string
        amount?: number
    }>>
}

class Subscribe {
    onetime(params:{
        merchant_uid: string
        amount: number
        tax_free?: number
        card_number: string
        expiry: string
        birth: string
        pwd_2digit: string
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
        custom_data?: string
        notice_url?: string
    }): Promise<IamportResponse<IamportPayment>>

    again(params:{
        customer_uid: string
        merchant_uid: string
        amount: number
        tax_free?: number
        name: string
        buyer_name?: string
        buyer_email?: string
        buyer_tel?: string
        buyer_addr?: string
        buyer_postcode?: string
        card_quota?: number
        interest_free_by_merchant?: boolean
        custom_data?: string
        notice_url?: string
    }): Promise<IamportResponse<IamportPayment>>

    schedule(params:{
        customer_uid: string
        checking_amount?: number
        card_number: string
        expiry: string
        birth: string
        pwd_2digit: string
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
        merchant_uid?: string[]
    }): Promise<IamportResponse<IamportScheduleResult[]>>
}

class SubscribeCustomer {
    get(params:{
        customer_uid: string[] | string
    }): Promise<IamportResponse<IamportCustomer[]>>

    create(params:{
        customer_uid: string
        pg?: string
        card_number: string
        expiry: string
        birth: string
        pwd_2digit?: string
        customer_name?: string
        customer_tel?: string
        customer_email?: string
        customer_addr?: string
        customer_postcode?: string
    }): Promise<IamportResponse<IamportCustomer>>

    delete(params:{
        customer_uid: string
    }): Promise<IamportResponse<IamportCustomer>>

}

class Certifications {
    get(params:{imp_uid: string}): Promise<IamportResponse<IamportCertification>>

    delete(params:{imp_uid: string}): Promise<IamportResponse<IamportCertification>>
}

class Vbank {
    create(params:{
        merchant_uid: string
        amount: number
        vbank_code: string
        vbank_due: number
        vbank_holder: string
        name?: string
        buyer_name?: string
        buyer_email?: string
        buyer_tel?: string
        buyer_addr?: string
        buyer_postcode?: string
        pg?: string
        notice_url?: string[]
        custom_data?: string
    }): Promise<IamportResponse<IamportPayment>>

    getHolder(params: {
        bank_code: vbankCode,
        bank_num: string,
    }): Promise<IamportResponse<IamportPayment>>
}

class Iamport {
    readonly payment: Payments;
    readonly subscribe: Subscribe;
    readonly subscribe_customer: SubscribeCustomer;
    readonly certification: Certifications;
    readonly vbank: Vbank;
    constructor(options?: {
        impKey: string
        impSecret: string
    });
}

export default Iamport;

