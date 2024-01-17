bolenler = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        function Bolunme(sayi,bolenler){
            let l = 0;
            for(let i = 0;i<bolenler.length;i++){
        
                const kalan = sayi%bolenler[i]
                if(kalan===0){
                    l++;
                }
                if(l===bolenler.length){
                    return sayi;   
                }
            }
        }
        let x = 10;
        while(true){
            if(Bolunme(x,bolenler)===x){
                console.log(x);
                break;
            }
            x++;
}