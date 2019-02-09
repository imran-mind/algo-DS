

async function elementFactory() {
    let arr = [];
    for (let i = 0; i < 1000000; i++) {
        arr.push(i);
    }
    return arr;
}

const binarySearchAlogrithm = async function (searchElement, sortedArray) {
    let start = 0, end = (sortedArray.length - 1);
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (sortedArray[mid] === searchElement) {
            return true;
        }
        searchElement < sortedArray[mid] ? end = mid - 1 : start = mid + 1;
    }
    return false;
}

const linearSearchAlogrithm = async function (searchElement, arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === searchElement) {
            return true;
        }
        i++;
    }
    return false;
}

const linearSearchAlogrithmForLoop = async function (searchElement, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (searchElement === arr[i]) {
            return true;
        }
    }
    return false;
}

const searchItem = 99999999;
const start = async function () {
    try {
        const result = await elementFactory();
        const st = new Date().getMilliseconds();
        const Bfound = await binarySearchAlogrithm(searchItem, result);
        const et = new Date().getMilliseconds();
        console.log('Bfound => ', Bfound)

        if (Bfound) {
            console.log('FOUND Time Taken BY Binary Search : ', et - st);
        } else {
            console.log('NOT FOUND Time BY Binary Search : ', et - st);
        }
        
        const stl = new Date().getMilliseconds();
        const Lfound = await linearSearchAlogrithm(searchItem, result);
        const etl = new Date().getMilliseconds();
        if (Lfound) {
            console.log('FOUND Time Taken BY Linear Search : ', etl - stl);
        } else {
            console.log('NOT FOUND Time BY Linear Search : ', etl - stl);
        }

        const stfl = new Date().getMilliseconds();
        const FLfound = await linearSearchAlogrithmForLoop(searchItem, result);
        const etfl = new Date().getMilliseconds();
        if (FLfound) {
            console.log('FOUND Time Taken BY Linear Search For loop : ', etfl - stfl);
        } else {
            console.log('NOT FOUND Time BY Linear Search For loop: ', etfl - stfl);
        }


    } catch (error) {
        console.log('-error-', error);
    }

}
start();

