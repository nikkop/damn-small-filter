# damn-small-filter
A damn small library for filtering data based upon multiple parameters in a "or" fashion.

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
    classes: ['Programming', 'Mathematics', 'Drama'],
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
```javascript
var studentQuery = {
  classes: ['Programming', 'Drama'],
  graduated: [true]
}
// Filter on classes 'Programming' or 'Drama' and 'graduated: true'
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
// Returns the object for students 'Douglas' and 'Jessica'.

```
