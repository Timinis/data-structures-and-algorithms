#Day 01

## Reverse an Array

Code Challenge 01

### Challenge

Takes in an array and reverse the order of that array

### Solution

![alt text](./assets/array_reverse.jpg)

#Day 02

# Insert Shift an Array

## Code Challenge 02

### Challenge

Takes in an array and a value and return a new array with the middle value inserted into the old array

### Solution

![alt text](./assets/insert_shift_array.jpg)

#Day 03

# Binary Search to find the object

## Code Challenge 03

### Challenge

Takes in and looks to either right or left for the object and goes from middle point everytime, returns the index

### Solution

![alt text](./assets/array_binary_search.jpg)

#Day 04

# Linked Lists

## Code Challenge 04

### Challenge

Create a linked list and testing its functionalities

![alt text](./assets/ll_insertions.jpeg)

#Day 06

#Linked List Insertions

## Code Challenge 06

## Challenge

Created 3 methods, one that takes in a value and append the value on the very last of linked lists.

Another method that is called beforeInsertion (2 airty), looks for the specific value and add it before the value.

Another method that is called AfterInsertion (2 airty), looks for the specific value and add it after the value.

![alt text](./assets/kth_from_end.jpg)
#Day 07

#linked List K-th from the end

## Code Challenge 07

## Challenge

Create a kth from end method that takes in 1 airty value (distance), to find the node that is the distance away from the last linked node.

Solved it by adding a follower tracker and starting it when it reach the threshold of the distance. It reads the value of that node and return exception when the distance is greater than the actual link length

Checked up on the structure and debugged some errors.

#Day 08

#linked List K-th from the end

## Code Challenge 08

## Challenge

Create a merge method that takes 2 airty, 2 linked list as the parameter. It returns a brand new linked list with the values appended.

We accomplished this by keeping 2 current trackers and using while loop to itterate through each of them. We use an || to identify the actual longest length that needs to go forward and set an if so that the one that has the shorter length doesn't keep moving down a non-existent list. Then we append those values inside the while loop to return the linked list.

## Day 10

# Stacks and Queues

## Challenge

Make stack and queues and their methods

## Approach & Efficiency

took the array approach for stack: because it is O(1);
took the node approach for queue: because it is O(1) as well;

## API

Stack.push(value)= add item to the last of the stack
stack.pop()= remove item to the last of the stack
stack.peek()= look at the last of the stack;

queue.enque(value)= add item to the last of the list;
queue.dequeue = remove item from the first of the list;
queue.peek()= look at the first item
