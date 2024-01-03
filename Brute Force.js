T = process.argv[2].toString();
S = process.argv[3].toString();
for (i = 0; i < S.length - T.length;i++)
{
	var count = 0;
	for (j = 0; j < T.length;j++)
		if (T[j] = S[i + j])
			count++;
	if (count == T.length)
	{
		console.log(true);
		return;
	}
}
console.log(false);