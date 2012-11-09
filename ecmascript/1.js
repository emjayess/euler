// 1) Add all the natural numbers below one thousand that are multiples of 3 or 5.
(function(n, sum){

  while (--n) {
    if ( n % 3 == 0  ||  n % 5 == 0 ) sum += n;
  }

  return sum;
}(1000, 0));
​
