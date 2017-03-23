# damn-small-filter
A damn small library for filtering data based upon multiple parameters in a "or" or "and" fashion.

## How to use

- Have an `array` of `objects` that you wish to filter upon
```javascript
var students = [
  {
    name: ['Suzan'],
    classes: ['Biology', 'Mathematics', 'Music', 'Programming'],
    graduated: [false]
  },
  {
    name: ['Michael'],
    classes: ['Music', 'Movies', 'Drama'],
    graduated: [false]
  },
  {
    name: ['Douglas'],
    classes: ['Mathematics', 'Drama'],
    graduated: [true]
  },
  {
    name: ['Jessica'],
    classes: ['Programming'],
    graduated: [true]
  }
]
```

- Create a `query object` with `arrays` of desired results
  - Using the or operator (default if no operator specified)
 ```javascript
 var studentQuery = {
  classes: ['Programming', 'Drama'],
  graduated: [true],
  operator: '||'
}
// Filter on students with classes 'Programming' or 'Drama' and 'graduated: true'
``` 
  - Using the and operator
 ```javascript
 var studentQuery = {
  classes: ['Programming', 'Drama'],
  graduated: [true],
  operator: '&&'
}
// Filter on students with classes 'Programming' and 'Drama' and 'graduated: true'
``` 

- Initiate the filter by creating an instance of it and provide the array and query
```javascript
var filteredStudents = new SmallFilter({
  query: studentQuery,
  items: students
})
```

- Get the filter results
```javascript
filteredStudents.filter();
```
- Results in
  - || operator
  ```javascript
  // Returns students Douglas and Jessica (as they match some of the queried classes)
  ```
  - && operator
  ```javascript
  // Returns student Douglas (as he is the only one matching all the queried classes)
  ```
