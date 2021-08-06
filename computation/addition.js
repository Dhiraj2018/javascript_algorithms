class Addition{
    constructor(){

    }
    addUpto(n){
            let total =0;
            for(let i=0;i<=n;i++){
                total+=i
            }
            return total
    
    }
    addUptoByFormula (n){
        return n*(n+1)/2
    }
    

}

module.exports = Addition;