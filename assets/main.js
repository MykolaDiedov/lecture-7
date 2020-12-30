var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function myMap (elem, callback) {
    var result = [];
     for (var index = 0; index < elem.length; index++) {
      var calc = callback(elem[index], index, arr);
        result.push(calc);
    } return result;
}
function calc (x) {
   return x ** 2;
}
console.log(myMap(arr, calc));

/*--------------------------------------------------------*/ 

var array = [1,'two',3,4,'five','six', 7, 8, 9, 'ten'];
function myFilter (elem, callback) {
    var result =[];
    for (var index = 0; index < elem.length; index++) {
        var isFiltered = callback(elem[index], index, array);
        if (isFiltered === true) {
            result.push(elem[index])
        } 
    }
    return result;
}
function filter (x) {
    return typeof x === 'number';
}
console.log(myFilter(array, filter));


/*--------------------------------------------------------*/ 


var notification = [
        {
        date: '31/07/2020',
        msg: 'Hello, bro'
    },
        {
        date: '31/07/2020',
        msg: 'how are you'
    },
        {
        date: '31/07/2020',
        msg: 'who are you?!'
    },
        {
        date: '31/08/2020',
        msg: 'hi Ivan'
    },
        {
        date: '31/07/2021',
        msg: 'message from the future'
    }
];
var Group = notification.reduce(function(group, notification) {
    if(!group[notification.date]) {
        group[notification.date] = [];
    } 
    group[notification.date].push(notification);
    return group;
}, {})
console.log(Group);

