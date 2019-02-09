
const sortedArray = [3, 5, 9, 13, 17, 19, 21];

/* 
 searchElement => The element which we want to search
 from an array.
*/
const binarySearchAlogrithm = (searchElement) => {
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

const result = binarySearchAlogrithm(12);

if(result){
    console.log('Element FOUND');
}else{
    console.log('Element Not FOUND');
}