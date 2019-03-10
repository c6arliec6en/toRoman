//////// 在這裡寫你的答案 /////////

const romanCode = {
	0 : '',
	1 : 'I' ,
	2 : 'II' ,
	3 : 'III' ,
	4 : 'IV' ,
	5 : 'V',
	6 : 'VI',
	7 : 'VII',
	8 : 'VIII',
	9 : 'IX',
	10 : 'X',
	20 : 'XX',
	30 : 'XXX',
	40 : 'XL',
	50 : 'L',
	60 : 'LX',
	70 : 'LXX',
	80 : 'LXXX',
	90 : 'XC',
	100 : 'C',
	200 : 'CC',
	300 : 'CCC',
	400 : 'CD',
	500 : 'D',
	600 : 'DC',
	700 : 'DCC',
	800 : 'DCCC' ,
	900 : 'CM',
	1000 : 'M',
	2000 : 'MM',
	3000 : 'MMM',
}


function toRoman (num) {
	let roman = ''
	let a = num.toString().split('')

	while (a.length > 0) {
		if (a.length === 4) {
			let m = (Number(a[0])*1000).toString()

			for (let [key, value] of Object.entries(romanCode)) {
				if (key === m) {
					roman += value
					a.shift()
				}
			}	

		} else if (a.length === 3) {
			let h = (Number(a[0])*100).toString()

			for (let [key, value] of Object.entries(romanCode)) {
				if (key === h) {
					roman += value
					a.shift()
				}
			}
			
		} else if (a.length === 2) {
			let t = (Number(a[0])*10).toString()

			for (let [key, value] of Object.entries(romanCode)) {
				if (key === t) {
					roman += value
					a.shift()
				}
			}	

		} else if (a.length === 1) {
			let n = (Number(a[0])).toString()

			for (let [key, value] of Object.entries(romanCode)) {
				if (key === n) {
					roman += value
					a.shift()
				}
			}	
		}
	}
	return roman
}



////// 以下是測試程式，請勿更動 /////////
const expect = (name, value, result) => {
  if (value === result) { return true; }

  throw new Error(`${name} failed successfully`);
};

expect('toRoman(1)', toRoman(1), 'I');
expect('toRoman(2)', toRoman(2), 'II');
expect('toRoman(3)', toRoman(3), 'III');
expect('toRoman(4)', toRoman(4), 'IV');
expect('toRoman(5)', toRoman(5), 'V');
expect('toRoman(6)', toRoman(6), 'VI');
expect('toRoman(9)', toRoman(9), 'IX');
expect('toRoman(27)', toRoman(27), 'XXVII');
expect('toRoman(48)', toRoman(48), 'XLVIII');
expect('toRoman(59)', toRoman(59), 'LIX');
expect('toRoman(93)', toRoman(93), 'XCIII');
expect('toRoman(141)', toRoman(141), 'CXLI');
expect('toRoman(163)', toRoman(163), 'CLXIII');
expect('toRoman(402)', toRoman(402), 'CDII');
expect('toRoman(575)', toRoman(575), 'DLXXV');
expect('toRoman(911)', toRoman(911), 'CMXI');
expect('toRoman(1024)', toRoman(1024), 'MXXIV');
expect('toRoman(3000)', toRoman(3000), 'MMM');

console.log('all pass!');