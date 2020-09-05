/* tslint:disable */
interface IamportResponse<T = any> {
    code: number
    message: string
    response?: T
}

type iamportStatus = 'ready' | 'paid' | 'failed' | 'cancelled';

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

