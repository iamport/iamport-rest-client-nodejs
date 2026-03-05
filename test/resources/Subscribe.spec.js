
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('subscribe_customer.create', function(){
  it('create customer param check', function(done){
    iamport.subscribe_customer.create()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });
});

describe('subscribe.getSchedules', function(){
  it('Should return error when schedule_from is missing', function(done){
    iamport.subscribe.getSchedules()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when schedule_to is missing', function(done){
    iamport.subscribe.getSchedules({schedule_from: 1234567890})
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });
});

describe('subscribe.getScheduleByMerchantUid', function(){
  it('Should return error when merchant_uid is missing', function(done){
    iamport.subscribe.getScheduleByMerchantUid()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });
});

describe('subscribe.updateSchedule', function(){
  it('Should return error when merchant_uid is missing', function(done){
    iamport.subscribe.updateSchedule()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when schedule_at is missing', function(done){
    iamport.subscribe.updateSchedule({merchant_uid: 'test_merchant'})
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });
});

describe('subscribe.retrySchedule', function(){
  it('Should return error when merchant_uid is missing', function(done){
    iamport.subscribe.retrySchedule()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });
});

describe('subscribe.rescheduleSchedule', function(){
  it('Should return error when merchant_uid is missing', function(done){
    iamport.subscribe.rescheduleSchedule()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when schedule_at is missing', function(done){
    iamport.subscribe.rescheduleSchedule({merchant_uid: 'test_merchant'})
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });
});

describe('subscribe.getSchedulesByCustomerUid', function(){
  it('Should return error when customer_uid is missing', function(done){
    iamport.subscribe.getSchedulesByCustomerUid()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when from is missing', function(done){
    iamport.subscribe.getSchedulesByCustomerUid({customer_uid: 'test_customer'})
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });
});

describe('subscribe_customer.getMultiple', function(){
  it('Should be a function', function(){
    expect(iamport.subscribe_customer.getMultiple).to.be.a('function');
  });
});

describe('subscribe_customer.getSchedules', function(){
  it('Should return error when customer_uid is missing', function(done){
    iamport.subscribe_customer.getSchedules()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when from is missing', function(done){
    iamport.subscribe_customer.getSchedules({customer_uid: 'test_customer'})
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });
});
