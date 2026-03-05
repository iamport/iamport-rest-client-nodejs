
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

// Naver standalone endpoints
describe('naver.getProductOrder', function(){
  it('Should return error when product_order_id is missing', function(done){
    iamport.naver.getProductOrder()
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

describe('naver.getReviews', function(){
  it('Should return error when channel_key is missing', function(done){
    iamport.naver.getReviews()
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

// NaverPayment endpoints
describe('naverPayment.getProductOrders', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.getProductOrders()
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

describe('naverPayment.getCashAmount', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.getCashAmount()
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

describe('naverPayment.place', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.place()
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

describe('naverPayment.ship', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.ship()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when delivery_method is missing', function(done){
    iamport.naverPayment.ship({imp_uid: 'test_imp_uid'})
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

describe('naverPayment.confirm', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.confirm()
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

describe('naverPayment.approveCancel', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.approveCancel()
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

describe('naverPayment.approveReturn', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.approveReturn()
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

describe('naverPayment.cancel', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.cancel()
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

describe('naverPayment.requestReturn', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.requestReturn()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when delivery_method is missing', function(done){
    iamport.naverPayment.requestReturn({imp_uid: 'test_imp_uid'})
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

describe('naverPayment.rejectReturn', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.rejectReturn()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when memo is missing', function(done){
    iamport.naverPayment.rejectReturn({imp_uid: 'test_imp_uid'})
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

describe('naverPayment.resolveReturn', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.resolveReturn()
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

describe('naverPayment.withholdReturn', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.withholdReturn()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when memo is missing', function(done){
    iamport.naverPayment.withholdReturn({imp_uid: 'test_imp_uid'})
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

describe('naverPayment.collectExchanged', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.collectExchanged()
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

describe('naverPayment.shipExchanged', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.shipExchanged()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when delivery_method is missing', function(done){
    iamport.naverPayment.shipExchanged({imp_uid: 'test_imp_uid'})
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

describe('naverPayment.point', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.naverPayment.point()
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
