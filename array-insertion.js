
// const sortedArray = [3, 5, 9, 13, 17, 19, 21];


const insertElements = async function () {
    let sortedArray = [];
    for (let i = 0; i < 1000000; i++) {
        sortedArray.push(i);
    }
    return sortedArray;
}

const binarySearchAlogrithm = async function (searchElement) {
    let start = 0, end = (sortedArray.length - 1);
    while (start <= end) {
        let mid = (start + end) / 2;
        if (sortedArray[mid] === searchElement) {
            return true;
        }
        if (searchElement < sortedArray[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}

const start = async function () {
    let startTimeToInsertion = new Date().getMilliseconds();
    const result = await insertElements();
    let endTimeToInsertion = new Date().getMilliseconds();
    console.log('Total time to insert 10,00,000 numbers in an array => ', endTimeToInsertion - startTimeToInsertion);


    const found = await binarySearchAlogrithm(12, result);
    if (result) {

    }

}
start();

