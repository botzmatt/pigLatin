### The program should add "ay" to words that begin with a vowel.
⋅⋅* Example Input: animal
⋅⋅* Example Output: animalay
### For words that begin with a single consonant, the program should move the first consonant to the end of the word, then add "ay".
⋅⋅* Example Input: cat
⋅⋅* Example Output: atcay
### For words that start with multiple consonants, move all grouped consonants to the end and add "ay"
⋅⋅* Example Input: sphynx
⋅⋅* Example Output: ynxsphay
### For Words that start with qu, the program should move both to the end of the word, then add "ay"
⋅⋅* Example Input: quant
⋅⋅* Example Output: antquay
### For words that have qu in them, but don't start with qu, move the first letters as well as the qu
⋅⋅* Example Input: squeal
⋅⋅* Example Output: ealsquay
### For words that start with 'Y', treat 'Y' as a consonant
⋅⋅* Example Input: yam
⋅⋅* Example Output: amyay
### string of multiple words
⋅⋅* Example Input: Pig latin sucks
⋅⋅* Example Output: igpay atinlay uckssay
