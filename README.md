# React-Basics
Road to React Mastry

Course link - [Chai aur React](https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige)

Course source code - url [https://github.com/hiteshchoudhary/chai-aur-react]

1. Capatlize functions
2. Capatlize components
3. Take care of extensions
4. If return something in DOM captilize the file and catious with extension.
5. css imports in main file


## Interview Questions

**Q. Counter value**

```js
    if (counter<20) {
        // counter = 1
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      // What will be the value of counter after this?
      // Correct ans is counter = 2
    };//else {setCounter(counter=20)}
  ```
  The counter wont be 5 coz the react updates the counter in batch using fiber - dipping algo.

  Q. How to do it if I really wanna do it?

  ```js
  if (true){
    // counter = 1
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    // now its counter = 5
    // setCounter take a call back function.
    // Thus does the counter update one by one 
  }
  ```

  ### Learnings:

 **1. BG Changer :**

      - In the project bgchanger we used react usestate and onlclick. Where we understand how state of color is being updated and how onclick funtion takes the setColor function and changes the background of the page.

  2. **Password generator :**

      - In this we will learn about useEffect, useRef and useCallBack.
      - 

  
  3. 