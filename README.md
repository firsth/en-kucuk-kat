# En Küçük Kat

Bugün yapacağımız şey aşağıdaki soruya çözüm bulmak.

```
1’den 10’a kadar bütün sayılara kalansız bölünen en küçük sayı 2520’dir.

1’den 20’ye kadar bütün sayılara kalansız bölünen en küçük positif sayı kaçtır?
```

Öncelikle sorunun javascript ile nasıl çözülebildiğine bakalım.
```javascript
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
```

Burada yaptığımız şey herhangi bir sayının, bir bölenden kalan sonucunu kontrol eden bir fonksiyon yazmak. Daha sonra fonksiyon içerisinde bir l değişkeni oluşturuyoruz. Bu l değişkeni verdiğimiz sayının bolenler dizisindeki sayılardan kaç tanesine tam bölünebildiğini test ediyor. Daha sonra l değişkeniyle bolenler dizimizin büyüklüğünün eşitliğini kontrol ediyoruz. Bir eşitlik durumu olması halinde girdiğimiz sayının tüm bölenlere tam olarak bölündüğünü anlayabiliyoruz ve en son olarak sonsuz bir while döngüsünde sürekli sayı değerimizi 1 arttırarak 1den20e kadar tüm sayılara tam bölünecek sayımızı arıyoruz. Sayı bulunduktan sonra programın sonsuza kadar çalışmaması için break komutuyla döngüyü bitiriyoruz.
