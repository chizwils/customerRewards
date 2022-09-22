
export const getAllCustomers = (data) => {
  return new Promise((res, rej) => {
    setTimeout(res(data), 3000);
  });
};

export const getCustomer = (customerName, data) => {
  let customer = data?.find(name=> customerName === name.name ) || null
  return customer;
};

export const calculateRewards =(amount)=>{
    let sum = 0
    while(amount > 50){
      if(amount%100 === 0 ){
        sum += ((amount -100) * 2)
        amount = amount - 100  
      }
      else{
        sum += ((amount -50) * 1)
        amount  = amount - 50
      }
    }
    return sum
}
