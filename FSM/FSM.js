let s=require('fs').readFileSync('text.txt').toString();
let t = process.argv[2];
m = t.length;
alph=new Array();
let del=new Array (m+1);

for (i = 0; i < m; i++)
	alph[t.charAt(i)] = 0;
	

for (i = 0; i <= m; i++) del[i] = new Array();
for (i in alph) del[0][i]=0;

for(i = 0; i < m; i++)
{
	prev=del[i][t.charAt(i)];
	del[i][t.charAt(i)] = i + 1;
	for (i in alph)
		del[i + 1][i] = del[prev][i];
}

var ans = new Array();
var currentState = 0;

for (i = 0; i < s.length; i++) 
{
	if(s.charAt(i) in alph)
		currentState = del[currentState][s.charAt(i)];
	else currentState=0;
	if (currentState == m)
		ans.push (i-m+1);
}
console.log(ans);