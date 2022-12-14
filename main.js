const generateList = function (myArr) {
 
    let firstList = document.createElement('ul');

    let count = 0;
    let count2 = 0;
    let b = 0.1;
     let rez = 0;
    for (let i in myArr) {

        if (Array.isArray(myArr[i])) {
            count2++
     
            let secondList = document.createElement('ul');
            let li2 = document.createElement('li');

            firstList.appendChild(li2);
            let mynewList = li2.appendChild(secondList);

            for (let j = 0; j < myArr[i].length; j++) {
                let li3 = document.createElement('li');

                rez += (b + b) - 0.1;

                mynewList.appendChild(li3).innerHTML = count2 + rez;
              
            }
            rez = 0;
        } else {
            let li = document.createElement('li');
            count++;
            firstList.appendChild(li).innerHTML = count;
        }

    }
    console.log(firstList);

}
generateList([1, 2, 3, [1, 2, 3], 4, [1, 2, 3],[1, 2, ]]);