## STRING 

- How do you print duplicate characters from a string?
- How do you check if two strings are anagrams of each other?
- How do you print the first non-repeated character from a string?
- How can a given string be reversed using recursion?

```
const reverseRecursive = (str) =>{
    if(str == ""){
        return "";
    }
    let rev =  reverseRecursive(str.substr(1));
    //console.log(rev,str)
    return rev + str[0];
}

console.log(reverseRecursive('hello'));
```
- How do you check if a string contains only digits?
- How are duplicate characters found in a string?
- How do you count the number of vowels and consonants in a given string?
- How do you count the occurrence of a given character in a string?
- How do you find all the permutations of a string?
- How do you reverse words in a given sentence without using any library method?
- How do you check if two strings are a rotation of each other? 
- How do you check if a given string is a palindrome? 

## ARRAY
- How do you find the missing number in a given integer array of 1 to 100?
- How do you find the duplicate number on a given integer array?
- How do you find the largest and smallest number in an unsorted integer array?
- How do you find all pairs of an integer array whose sum is equal to a given number?
- How do you find duplicate numbers in an array if it contains multiple duplicates?
- How are duplicates removed from a given array in Java?
- How is an integer array sorted in place using the quicksort algorithm?
- How do you remove duplicates from an array in place?
- How do you reverse an array
- How are duplicates removed from an array without using any library
- Write a program to find intersection of two sorted arrays in Java?
- There is an array with every element repeated twice except one. Find that element?
{1, 1, 2, 2, 3, 4, 4, 5, 5} output 3"
- How to find kth smallest element in unsorted array? 
 For example if given array is {1, 2, 3, 9, 4} and k=2 then you need to find the 2nd smallest number in the array, which is 2."
- How to find kth largest element in unsorted array? 
- How to find common elements in three sorted array?
input1 = {1, 5, 10, 20, 40, 80}
input2 = {6, 7, 20, 80, 100}
input3 = {3, 4, 15, 20, 30, 70, 80, 120}
Output: 20, 80"
- How find the first repeating element in an array of integers?
Input:  input [] = {10, 5, 3, 4, 3, 5, 6}
Output: 5 [5 is the first element that repeats]"
- How to find first non-repeating element in array of integers?
- How to find top two numbers from an integer array?
       This is another one of the easy array questions you will find on telephonic round of Interviews, but its also little bit tricky. You are asked to find top two numbers not just the top or highest numbers? Can you think of how you would do it without sorting? before looking at solution."
 - How to find the smallest positive integer value that cannot be represented as sum of any subset of a given array?
- How to rearrange array in alternating positive and negative number?
- How to find if there is a sub array with sum equal to zero?
 How to remove duplicates from array in place?
 How to remove a given element from array in
- How to merge sorted array?
- How to find sub array with maximum sum in an array of positive and negative number? 
- How to find sub array with largest product in array of both positive and negative number?
- Write a program to find length of longest consecutive sequence in array of integers
- How to find minimum value in a rotated sorted array
 Given an array of of size n and a number k, find all elements that appear more than n/k times?


## LinkedList
- How do you find the middle element of a singly linked list in one pass?
- How do you check if a given linked list contains a cycle? How do you find the starting node of the cycle?
- How do you reverse a linked list?
- How do you reverse a singly linked list without recursion?
 - How are duplicate nodes removed in an unsorted linked list?
 - How do you find the length of a singly linked list?-->
 - How do you find the third node from the end in a singly linked list?
- How do you find the sum of two linked lists using Stack?

