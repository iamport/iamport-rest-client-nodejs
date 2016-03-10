
# 0.2.0 #
- refactored Iamport-sdk for resource extension mechanism
- Token caching
- implement all REST api functions
- [MODIFY] getPaymentByImpUid(String) -> payment.getByImpUid(Object)
- [MODIFY] cancelPayment(String) -> payment.cancel(Object)
- [ADD] payment.getByImpUid(Object)
- [ADD] payment.getByMerchant(Object)
- [ADD] payment.getByStatus(Object)
- [ADD] payment.cancel(Object)
- [ADD] payment.prepare(Object)
- [ADD] payment.getPrepare(Object)
- [ADD] subscribe.onetime(Object)
- [ADD] subscribe.again(Object)
- [ADD] subscribe.schedule(Object)
- [ADD] subscribe.unschedule(Object)
- [ADD] subscribe.getCustomers(Object)
- [ADD] subscribe.createCustomers(Object)
- [ADD] subscribe.deleteCustomers(Object)

# 0.1.0 #
- first version
- Set code convention
- Iamport constructor design
- [ADD] getPaymentByImpUid(), 
- [ADD] cancelPayment(), 
- [ADD] getToken()
