/*
Input: N = 6, array= [5,10,42, 55, 2, 4]
Output:2, 4, 5, 10, 42, 55
*/
var arr = [5, 10, 42, 55, 2, 4];
function bubble_sort(arr) {
    var i, j;
    var len = arr.length;
    var swapped = false; 

    for (i = 0; i < len; i++) {
        swapped = false; 
        for (j =0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp= arr[j];
                arr[j] = arr[j + 1] ;
               arr[j + 1] = tmp;
                swapped = true;
            }
        }
        // if no two elements are swapped then break
        if (!swapped) {
            break;
        }
    }
    // Print the array
    console.log(arr);
}

bubble_sort(arr)
