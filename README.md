## Auto Quote

Auto Quote is a quote simulator for insurance for automobiles.<br>

The form has the following logic:

- calculation basis starts from 2000;
- is added a percentage depending on the brand: 5% for asian car, 15% for american car and 30% for european car;
- from the total of basis and brand is substracted 3% for each year of age of the car;
- after the substraction is added the plan value, 20% for basic plan or 50% for complete plan.

                TOTAL = [ (2000 + brand) -3% ] + 20% (or 50%)

Project created with React Hooks, CSS with Emotion, Styled Components.<br>
The app:

- read the information that the user write
- validate the form
- change the state of inputs
- calculate the value of the quote while the spinner is running
- show the resume and the total

### Deploy

https://auto-quote-simulator.netlify.app/
