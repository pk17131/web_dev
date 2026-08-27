// function avg(a,b,c){
//     sum= a+b+c;
//     average=sum/3;
// }
// avg(2,3,4);
// avg(4,8,8);
// console.log(sum);
// console.log(average);

// const f= typeof(avg);
// const g= typeof(sum);

// console.log(f,g);

// console.log(Math.max(2,6));
// console.log(Math.floor(2.8));
// console.log(Math.round(2.7));

// const res=2+4;
// const b="p" +  40 ;
// console.log(res,b);

// console.log(result=3-4);

// console.log(d=3/1.5);
// console.log(e=3/0);

// console.log(4===4);
// console.log(3==4);
// console.log("p"=23); single = give error

// const odd=[1,3,5,7,9];
// var sum=0;
// for(i=0;i<odd.length;i++)
// sum=sum+odd[i];
// console.log(sum);

// const employee=["jhon",24,false,150000];
// console.log(typeof(employee[0]));
// console.log(typeof(employee[2]));

// var age=[18,20,22,21,20];
// age[5]=25;
// console.log(age);
// console.log(age.length);

// var books=new Array();
// books[2]="THINK AND GROW RICH";
// console.log(books)

// const role=`there is no role for hero in another life`;
// console.log(role);

//    Array Method:

// const nums=[40,23,67,39,36];
// console.log("Nums Before Reverse",nums);
// for( i=0;i<nums.length; i++){
//     console.log(nums[i]);
//     nums.reverse();
//     console.log(" After Reverse:");
//     for(i=0;i<nums.length;i++)
//     {
//         console.log(nums[i]);
//     }
// }

// var a=[1,3,5] , b=[7,9,11],c=[13,15];
// var d=a.concat(b);
// console.log(d);
// var e=a.concat(7,9,11);
// console.log(e);
// var f=a.concat(c,b);
// console.log(f);

// var protocol=['SMTP','HTTP','FTP','HTTPS'];
// console.log("Before Sorting:");
// for(i=0;i<protocol.length;i++)
// {
//     console.log(protocol[i]);
//     protocol.sort();
// }
//     console.log("After Sorting:");


//     for(i=0;i<protocol.length;i++){
//         console.log(protocol[i]);
//     }

// function age(x,y){
//     return x-y;
// }
// var a=[1,3,5,7,9,11]
// a.sort(age);
// console.log(a)
var a=[1,7,30,5,9,12,129];
a.sort(function criteria(x,y) {
    return y-x;
})
console.log(a)
