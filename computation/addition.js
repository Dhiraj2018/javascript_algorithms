class Addition{
    constructor(){

    }

    // BigO O(n)
    addUpto(n){
            let total =0;
            for(let i=0;i<=n;i++){
                total+=i
            }
            return total
    
    }

    //BigO O(1)
    addUptoByFormula (n){
        return n*(n+1)/2
    }
    

}

module.exports = Addition;