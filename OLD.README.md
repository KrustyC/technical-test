# Technical Test

Hello!

Welcome to the Technical Test for School Explained.

This repository contains a description of a PHP and JavaScript Test we'd like you to complete. In addition we have provided data files for both.

**Important**  
Do **not** push your results into this repository. Either fork it and send us a link to your github repository or zip it up and send it to us.


Feel free to do any extra work to improve the code such as testing etc.  
Also, if you have any questions, feel free to ask!

# PHP Test

We would like you to build a simple PHP API using the [SLIM Framework](https://www.slimframework.com).

The API will have only one endpoint named `subject-data` and it takes in an ID as parameter.  
For example, on my machine the full URL to the API endpoint for subject with the ID 1 looks like this:  
`http://0.0.0.0:8080/subject-data/1`

The API should output the content for the given subject ID in JSON format.  
You will have to read in the CSV file (subject-data.csv) and filter it down to the required subject.  

**Here is an example output:**  
```
{
    subjectId: 1,
    content: [
        { id: 1, name: 'Content 1' },
        { id: 2, name: 'Content 2' },
        { id: 3, name: 'Content 3' }
    ]
}
```

If no subject is given, it should return an error with the status code 400.

## Requirements

- Use version PHP 5.6 (minimum)
- Use SLIM Framework version 3 (install via composer)


# JavaScript / React.js Test

This test has two parts. The first part covers basic React Fundamentals while the second
part will test your problem solving skills. If you're not familiar with React yet, make use of the [React Documentation](https://facebook.github.io/react/)


## Interface Mockup

This is a mockup of what the interface should look like in the end. Don't worry if yours looks
a bit different. It's about functionality.

![Mockup](https://s3-eu-west-1.amazonaws.com/ll-info-blog-images/test-mockup.png)


## Part 1

The first part is creating a Subject Selector.  
As you can see above in the Mockup, there is a dropdown for the user to select a subject.  
The selector will contain 3 subjects (Reading, Writing, Maths).

**We have two use cases:**  
1. If the user hasn't selected anything you should display a message "Select a subject above to view content" (or similar).
2. If the user has selected a subject it should display a standard HTML list with the results for the selected subject.

**How to fetch the data**  
We have provided a JSON file with example content (subject-data.js) that you can use to populate the data after subject selection. However, 
if you want to, you could also hook the javascript component up to the PHP API you created earlier.

## Part 2

This part is creating the Roman Numeral Generator.  
The user will be able to enter a number between **1 and 99** into the textfield. When you click convert you will
be able to see the equivalent in roman numerals.

**Example**:  
```
Input: 5
Output: V
```

If you are not quite sure what roman numerals are or how they work, feel free to have a look [here](https://en.wikipedia.org/wiki/Roman_numerals)

**Requirements**  
Use the two objects we have provided in the roman-numerals.js file.  
The first object contains the numbers and their roman numerals from 1 - 9 while the second object contains
the numbers 10 to 90 (in increments of 10) and their roman numeral equivalents.


## Requirements for both JS Tests

- Use React
- Do *not* use any JQuery
