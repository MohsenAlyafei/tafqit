![GitHub](https://img.shields.io/github/license/MohsenAlyafei/tafqit?style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/MohsenAlyafei/tafqit)
![npm](https://img.shields.io/npm/v/tafqit?color=g&style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/tafqit?label=npm%20size)
![npm](https://img.shields.io/npm/dw/tafqit?label=npm%20downloads)
[![](https://data.jsdelivr.com/v1/package/npm/tafqit/badge)](https://www.jsdelivr.com/package/npm/tafqit)

![Twitter Follow](https://img.shields.io/twitter/follow/maalyafei?style=social)


![page logo](https://dev-to-uploads.s3.amazonaws.com/i/m2f1bxvzsugb0xn8a0ya.png)

### **Table of Contents**
[1. Introduction](#introduction)

[2. Syntax and Parameters](#syntax)

[3. Examples of General Use](#general)

[4. Default Values](#defaults)

[5. Option Settings](#options)

[6. Increasing the Scale](#scales)

[7. Using Arabic-Indic Numbers](indic)

[8. General Notes on Code](#notes)

[9. Number to Arabic Words Translation Table](#table)

### **1️⃣ Introduction** <a name="introduction"></a>

The intention of the exercise was to provide a **general-purpose** function that is simple yet accurate for converting Numbers (Integers) to Arabic Words in compliance with (*and with options for*) the Arabic grammar rules/settings.

The function must not be tied to a particular subject count (such as limited to currencies, etc.) and must handle (through options) all types of subjects that are to be counted using all forms of Arabic grammar.

Sadly, the majority of websites providing such facilities generally produce inaccurate and/or grammatically inaccurate outputs that cannot be reliably and confidently used for any official purposes.

While Arabic grammar rules for pronouncing and writing numbers may be difficult to remember; they are nevertheless consistent and precise for the many hundreds of years; with only very minor modern variances.

The purpose was therefore to produce a **standalone general-purpose javascript utility function** that provides the ability to correctly produce and handle the following:

- Grammatically correct Arabic text for integer numbers from 0 up to 10^21 and more.
- Gender-Sensitive Subjects (Masculine and Feminine (مذكر ومؤنث)).
- Nominative, Accusative, and Genitive Arabic grammar cases (رفع، جر، ونصب).
- Correct positioning of subject names for ones and twos.
- The facility to include the subject name to be counted in the output text; correctly positioned for the appropriate number.
- Address and cover the different forms and standards of writing numbers in words as used in the different Arabic-speaking countries.
- Be self-contained and not rely on any external dependencies (other libraries).
- Use Vanilla JavaScript code only (ES6).
- Be sufficiently short and simple so that it can (if needed) be simply copied and pasted in one's own code for immediate use.
- Provides features as options with the defaults being the most accepted forms of standards for simple use and call of the function.
- Provide the ability to produce output in a legally unambiguous form.

### **2️⃣ Syntax and Parameters** <a name="syntax"></a>

### Syntax:
```javascript
    tafqit(number [, {options} ])
```
### Parameters:

**number**: Integer in Numeric or String form.
Large numbers may be passed in a string form if required.
Numbers may be passed in Arabic-Indic format (i.e. numbers ٠١٢٣٤٥٦٧٨٩) (as a string), if required.

**options**: Options are passed as object {name:value}. See below summary table and detailed explanation of each option.

### Return Value:

An Arabic text string representation of the number.





### **3️⃣ Examples of General Use** <a name="general"></a>

In it's basic form, the function can simply be invoked for an integer number by passing only the first parameter; as follows:

```javascript
console.log( tafqit(2000) );     // "ألفان"
console.log( tafqit(15000120) ); // "خمسة عشر مليونًا ومائة وعشرون"
console.log( tafqit(2020) );     // "ألفان وعشرون"

```
Output:
```javascript
ألفان
خمسة عشر مليونًا ومائة وعشرون
ألفان وعشرون
```

If the number is too large to be handled by the system/javascript, place the number in quotes, for example:

```javascript
console.log( tafqit("233000000000000000000000") ); // مائتان وثلاثة وثلاثون سكستليونًا
```
Output:
```javascript
مائتان وثلاثة وثلاثون سكستليونًا
```

*As can be seen from the above, the **default** output uses the Nominative grammar case (حالة الرفع).*




### **4️⃣ Default Values** <a name="defaults"></a>

The function uses the following common grammar rules as its defaults:

1. Nominative Grammar Case (حالة الرفع).
2. Masculine Subject.
3. The Arabic Short Scale Numbering Systems (*i.e. Short Scale with Miliard (مليار)*).
4. The word "مائة" for Hundreds. *Note hundred when written as "مائة" must always be pronounced as "مئة".*
5. Standalone number; i.e. no text is assumed to be added after the resulting output text.
6. Maximum scale of Sextillion (سكستليون) i.e. 10^21.

All of the above defaults (and more) may be changed with the option settings (see below).




### **5️⃣ Option Settings** <a name="options"></a>

### Summary Options Table

| No.| Option |Default|Purpose
|:---:|:---|:---:|:-----
|1|[Feminine](#feminine)|off| Produce output text for a feminine subject. Default is masculine.
|2|[Miah](#miah)|off| Selects between "مئة" (off) and "مائة" (on) style. Default is "مائة".
|3|[SplitHund](#splithund)|off| Use separation between the unit number and the hundred word (e.g. ثلاثمائة becomes ثلاث مائة).
|4|[Comma](#comma)|off| Inserts commas between triplet number strings.
|5|[Billions](#billions)|off| Use Billions (بليون) instead of Millard (مليار).
|6|[AG](#ag)|off| Text is produced in the Accusative/Genitive (جر/نصب) case. Default is Nominative (رفع).
|7|[TextToFollow](#texttofollow)|off| Indicates that there will be text to follow the resulting number text. This permits the proper subject name to be added after the resulting text and the grammatically correct text to be generated for the number.
|8|[Subject](#subject)|off| Produce output text including the subject name. The Subject name is passed as an array holding the 4 textual forms. The correct form and text are then used for the type of number.
|9|[Legal](#legal)          |off| Output in a legal non-ambiguous form.




#### **⚙ Option `{Feminine : "on"}`** <a name="feminine"></a>

If the "subject" to be counted is "feminine" then use this option to produce the grammatically correct result.

Examples with both the default and with the option **{Feminine : "on"}**:

```javascript
console.log( tafqit(12) );                     // "اثنا عشر"
console.log( tafqit(12, {Feminine:"on"}) );    // "اثنتا عشرة"

console.log( tafqit(23) );                     // "ثلاثة وعشرون"
console.log( tafqit(23,{Feminine:"on"}) );     // "ثلاث وعشرون"

console.log( tafqit(13013) );                  // "ثلاثة عشر ألفًا وثلاثة عشر"
console.log( tafqit(13013 ,{Feminine:"on"}) ); // "ثلاثة عشر ألفًا وثلاث عشرة"

console.log( tafqit(200011) );                 // "مائتا ألف وأحد عشر"
console.log( tafqit(200011,{Feminine:"on"}) ); // "مائتا ألف وإحدى عشرة"
```



#### **⚙ Option `{Miah : "on"}`**<a name="miah"></a>

With this option, the default word "مائة" (for hundreds) is replaced with "مئة". Many Arabic-speaking countries' official documents prefer the use of the word "مئة".

This option affects all places where the word Hundred is used.

Examples with both the default and with the option **{Miah: "on"}**:

With the defaults:

```javascript
console.log( tafqit(100) );             // "مائة"
console.log( tafqit(100,{Miah:"on"}) ); // "مئة"

console.log( tafqit(200) );             // "مائتان"
console.log( tafqit(200,{Miah:"on"}) ); // "مئتان"

console.log( tafqit(350) );             // "ثلاثمائة وخمسون"
console.log( tafqit(350,{Miah:"on"}) ); // "ثلاثمئة وخمسون"
```



#### **⚙ Option `{SplitHund : "on"}`** <a name="splithund"></a>

This option permits the splitting/separation of the unit name from the hundred words.

Some Arabic-speaking countries consider this to be the correct method for writing the numbers from 300 to 900. The "ثلاثمائة" becomes "ثلاث مائة" and "أربعمائة" becomes "أربع مائة", and so on.

When combined with the options `{Miah: "on"}`, this option produces the combined result of (for example) "ثلاث مئة" and "أربع مئة".

The flowing diagram illustrates the effect of this option:

![Split undred Image](https://dev-to-uploads.s3.amazonaws.com/i/85g9713rnssfiorpj6uz.png)

Examples with both the default and with the option **{SplitHund: "on"}**:

```javascript
console.log( tafqit(300) );                    // "ثلاثمائة"
console.log( tafqit(300, {SplitHund:"on"}) );  // "ثلاث مائة"

console.log( tafqit(500) );                    // "خمسمائة"
console.log( tafqit(500, {SplitHund:"on"}) );  // "خمس مائة"

console.log( tafqit(600) );                    // "ستمائة"
console.log( tafqit(600, {SplitHund:"on"}) );  // "ست مائة"

console.log( tafqit(2700) );                   // "ألفان وسبعمائة"
console.log( tafqit(2700, {SplitHund:"on"}) ); // "ألفان وسبع مائة"
```



#### **⚙ Option `{Comma : "on"}`**<a name="comma"></a>

This option adds a comma "،" between the triplet number strings. This assists in having a more readable and better-interpreted text, especially for large numbers.

Examples with both the default and with the option **{Comma: "on"}**:

With the defaults:

```javascript
console.log( tafqit(122500) );                  // "مائة واثنان وعشرون ألفًا وخمسمائة"
console.log( tafqit(122500    ,{Comma:"on"}) ); // "مائة واثنان وعشرون ألفًا، وخمسمائة"

console.log( tafqit(100100100) );               // "مائة مليون ومائة ألف ومائة"
console.log( tafqit(100100100 ,{Comma:"on"}) ); // "مائة مليون، ومائة ألف، ومائة"
```



#### **⚙ Option `{Billions : "on"}`**<a name="billions"></a>

This option permits the use of the (official) Short Scale Numbering System (using Billions) (UK/USA system) rather than the Arabic Short Scale System. It is to be noted that the *Arabic Short Scale System* **is an exact Short Scale System** except that the word Billion (بليون) at position 10^9 is replaced with the word milyar (مليار) (all other scale names remain unchanged). Most Arabic-language countries and regions use the short scale with 10^9 being مليار (milyar), except for a few countries like Saudi Arabia and the UAE which use the word بليون billion for 10^9. More information on countries using the system can be found here on Wikipedia: [Arabic_Speaking_Long_and_Short_Scales](https://en.wikipedia.org/wiki/Long_and_short_scales#Arabic-speaking).

The following diagram illustrates the difference between the two systems:

![Arabic Short Scale](https://dev-to-uploads.s3.amazonaws.com/i/jsx9dc5e2ug9xbqhxt9y.png)

Examples with both the default and with the option **{Billions: "on"}**:

With the defults:

```javascript
console.log( tafqit(2002002000) );                   // "ملياران ومليونان وألفان"
console.log( tafqit(2002002000  ,{Billions:"on"}) ); // "بليونان ومليونان وألفان"

console.log( tafqit(2452452000) );                   // "ملياران وأربعمائة واثنان وخمسون مليونًا وأربعمائة واثنان وخمسون ألفًا"
console.log( tafqit(2452452000  ,{Billions:"on"}) ); // "بليونان وأربعمائة واثنان وخمسون مليونًا وأربعمائة واثنان وخمسون ألفًا"

console.log( tafqit(2452002000) );                   // "ملياران وأربعمائة واثنان وخمسون مليونًا وألفان"
console.log( tafqit(2452002000  ,{Billions:"on"}) ); // "بليونان وأربعمائة واثنان وخمسون مليونًا وألفان"

console.log( tafqit(255000000000) );                 // "مائتان وخمسة وخمسون مليارًا"
console.log( tafqit(255000000000,{Billions:"on"}) ); // "مائتان وخمسة وخمسون بليونًا"
```




#### **⚙ Option `{AG : "on"}`**<a name="ag"></a>

When using this option, the output text is produced in the Accusative/Genitive (جر/نصب) case. The default being the Nominative case (رفع).

Examples with both the default and with the option **{AG: "on"}**:

```javascript
console.log( tafqit(2) );                    // "اثنان"
console.log( tafqit(2,{AG:"on"}) );          // "اثنين"

console.log( tafqit(12) );                   // "اثنا عشر"
console.log( tafqit(12,{AG:"on"}) );         // "اثني عشر"

console.log( tafqit(122) );                  // "مائة واثنان وعشرون"
console.log( tafqit(122,{AG:"on"}) );        // "مائة واثنين وعشرين"

console.log( tafqit(2452452000) );           // "ملياران وأربعمائة واثنان وخمسون مليونًا وأربعمائة واثنان وخمسون ألفًا"
console.log( tafqit(2452452000,{AG:"on"}) ); // "مليارين وأربعمائة واثنين وخمسين مليونًا وأربعمائة واثنين وخمسين ألفًا"
```

- The following table summarizes the conditions under which numbers are converted from Nominative to Accusative/Genitive.

![AG_Affected](https://dev-to-uploads.s3.amazonaws.com/i/84n9iyyjr0t5p1ra5e2b.png)





#### **⚙ Option `{TextToFollow : "on"}`**<a name="texttofollow"></a>

The output text assumes by default that there will be no text is added or to follow the converted number text. Therefore, the output text may not be suitable for adding inside a sentence or to be concatenated to a follow-on text.

Consider the following example:

The number 2000 will normally be converted to "ألفان". This is the correct output for a standalone text.

However, if we want to write the sentence "2000 books" (Arabic: "ألفا كتاب". You cannot simply say "ألفان كتاب". This is incorrect Arabic.

The output should be "**ألفا كتاب**".

Another example: The sentence "20,000 Dollars" should be written as "**عشرون ألف دولار**" and not "عشرون ألفًا دولار".

This Option, therefore, permits the converted output text to be made suitable for a text to follow it.


Examples with both the default and with the option **{TextAfter: "on"}**:

```javascript

console.log( tafqit(200) +"دينار" );                         // Incorrect output: "مائتان دينار"
console.log( tafqit(200 ,{TextToFollow:"on"}) +"دينار" );    // Correct output : "مائتا دينار"

console.log( tafqit(2000) +"جنيه" );                         // Incorrect output:"ألفان جنيه"
console.log( tafqit(2000 ,{TextToFollow:"on"}) +"جنيه" );    // Correct output :"ألفا جنيه"

console.log( tafqit(2000000) +"كتاب" );                      // Incorrect output:"مليونان كتاب"
console.log( tafqit(2000000 ,{TextToFollow:"on"}) +"كتاب" ); // Correct output :"مليونا كتاب"

console.log( tafqit(20000) +"دولار" );                        // Incorrect output:"عشرون ألفًا دولار"
console.log( tafqit(20000 ,{TextToFollow:"on"}) +"دولار" );   // Correct output :"عشرون ألف دولار"
```




#### **⚙ Option `{Subject : [array]}`**<a name="subject"></a>

This option permits the name of the "subject" that is to be counted to be passed as an array in its four (4) textual grammar forms (for the singular, duo, plural, and tanween). The function picks up the correct form of subject name for the number and the output text is produced using text that contains the proper subject name appropriately selected for the number in question.

Not only does this ensure that the correct subject/number text is properly associated but it will also ensure that the subject name and the number text are appropriately reversed for numbers containing 1's and 2's.

The array holding the subject name shall be in the following form:

Array element **[0]** = Subject Name **Singular**

Array element **[1]** = Subject Name for 2's (**double**)

Array element **[2]** = Subject Name for **Plural**

Array element **[3]** = Subject Name **Singular Tanween**


Examples of arrays:

| Array Element| Usage |Example 1|Example 2|Example 3|Example 4|Example 5|Example 6
|:---:|:---|:-----|:-----|:-----|:-----|:-----|:-----
|[0]|Name **Singular**       |دينار|تفاحة|كتاب|طالب|بنت|ليرة
|[1]|Name for 2's (**double**)(\*)  |ديناران|تفاحتان|كتابان|طالبان|بنتان|ليرتان
|[2]|Name for **Plural**      |دنانير|تفاحات|كتب|طلاب|بنات|ليرات
|[3]|Name **Singular Tanween**      |دينارًا|تفاحةً|كتابًا|طالبًا|بنتًا|ليرةً

The subject name will be added to the resulting string in accordance with the grammar rules that apply to the specific number.

*(\*) Note: When combining this option with the **{AG: "on"}** option for Accusative/Genitive (جر/نصب) cases, the subject names for 2's need to be adjusted appropriately.*

The array must contain the four (4) elements; if the array is incomplete, this option will be ignored

For example:

```javascript
let Students = ["طالب",
                "طالبان",
                "طلاب",
                "طالبًا"];

console.log( tafqit(1, {Subject:Students}) );    // "طالب واحد"
console.log( tafqit(2, {Subject:Students}) );    // "طالبان اثنان"
console.log( tafqit(3, {Subject:Students}) );    // "ثلاثة طلاب"
console.log( tafqit(10, {Subject:Students}) );   // "عشرة طلاب"
console.log( tafqit(21, {Subject:Students}) );   // "واحد وعشرون طالبًا"
console.log( tafqit(350, {Subject:Students}) );  // "ثلاثمائة وخمسون طالبًا"
```

As can be seen from the above example, the appropriate form of the subject name is selected and inserted in the number in accordance with Arabic grammar.

Of course, if the subject is "feminine", you will also need to enable the "Feminine" Option **{Feminine:"on"}**.

An example for a feminine subject name (the currency "Lira"):

```javascript
let Money = ["ليرة",
             "ليرتان",
             "ليرات",
             "ليرةً"];

console.log( tafqit(1,  {Subject:Money, Feminine:"on"}) );    // "ليرة واحدة"
console.log( tafqit(2,  {Subject:Money, Feminine:"on"}) );    // "ليرتان اثنتان"
console.log( tafqit(3,  {Subject:Money, Feminine:"on"}) );    // "ثلاثة ليرات"
console.log( tafqit(10,  {Subject:Money, Feminine:"on"}) );   // "عشر ليرات"
console.log( tafqit(21,  {Subject:Money, Feminine:"on"}) );   // "واحد وعشرون ليرةً"
console.log( tafqit(350, {Subject:Money, Feminine:"on"}) );   // "ثلاثمائة وخمسون ليرةً"
```




#### **⚙ Option `{Legal : "on"}`**<a name="legal"></a>

The output text is produced in a legal non-ambiguous form.

Consider the following examples:

```javascript
console.log( tafqit(101,000) );                 // "مائة وألف"
console.log( tafqit(102,010) );                 // "مائة وألفان وعشرة"
```

In the above examples, the output "مائة وألف" could be interpreted to mean 100 plus 1000 giving a total of 1,100. This of courses is not what is intended; what is intended is 101,000.

Similarly, the second example could be interpreted to mean 100 + 2000 + 10 giving a total 2,110 instead of meaning 102,010.

The above situations are unacceptable when writing legal or official documents (especially when writing cheque books). It is a common legal practise that where there exists an ambiguity or a dispute in the interstation of a number, then the number in words overrides the number in figures. Therefore, the words must be clear and unambiguous.

This option permits such situations of ambiguity to be avoided.

The above examples cab ne re-done with the option **{Legal: "on"}**:

```javascript
console.log( tafqit(101000, {Legal:"on"}) );   // "مائة ألف وألف"
console.log( tafqit(102010, {Legal:"on"}) );   // "مائةألف وألفان وعشرة"
```

As additional protection against any ambiguity, it is advisable to enable the option **{Comma: "on"}** to clearly indicate the separation between triplets.




### **6️⃣ Increasing the Scale** <a name="scales"></a>

The Scale can be increased beyond Sextillion (سكستليون) by adding additional elements to the first array `const TableScales =[]`.

Do not change the array for *Plurals* (the constant variable `TableScalesP`) as the conversion of Scale Names to plurals is taken care of by the code itself.

For example to increase the Scale to Quattuordecillion (كواتوردسليون) (i.e. 10^45):
```javascript
const TableScales =["","ألف","مليون","مليار","ترليون","كوادرليون","كوينتليون","سكستليون","سبتليون","وكتليون","نونليون","دسليون","وندسليون","ديودسليون","تريدسليون","كواتوردسليون"],

```

### **7️⃣ Using Arabic-Indic Numbers** <a name="indic"></a>

Arabic-Indic Numbers can be used instead of Arabic numbers if needed. In fact, a mix of Arabic and Arabic-Indic numbers is permitted.

Example:

```javascript
console.log( tafqit("٢٤٥٢٤٥٢٠٠٠") ); // out: "ملياران وأربعمائة واثنان وخمسون مليونًا وأربعمائة واثنان وخمسون ألفًا"
```


### **8️⃣ General Notes on Code** <a name="notes"></a>

1. Purposely, the function code is made short and heavily commented (see description above for reasons). Most of the code had been added to cater for the various options.

2. Although the function handles integers only, a factional number (float) may be split and the function is called for each part separately (the Whole Part and the Fractional Part).

3. With the feature and option using **{Subject [array]}**, a simple wrapper function can be added to create a tool for converting currency numbers to the equivalent Arabic text.




### **9️⃣ Number to Arabic Words Translation Tables** <a name="table"></a>

![Table 01](https://dev-to-uploads.s3.amazonaws.com/i/8nwxqperlxsj3zp5cig8.png)

![Table 02](https://dev-to-uploads.s3.amazonaws.com/i/9p0kt6n4u7phof7obupv.png)

![Table 03](https://dev-to-uploads.s3.amazonaws.com/i/6d48h2w6nmkrfhk4hbhx.png)

![Tabel 04](https://dev-to-uploads.s3.amazonaws.com/i/51rwqqxpymzlgr1zuxm2.png)

![Tabel 05](https://dev-to-uploads.s3.amazonaws.com/i/wxzzb5odmel6o0f3j0dm.png)

![Table 06](https://dev-to-uploads.s3.amazonaws.com/i/etqxmc62oasp4mtimar6.png)

The following table provides a summary of the numbers to Arabic words basic conversion rules.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/5rdg9hmtrkxg3m3rxe8e.png)


