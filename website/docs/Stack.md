---
id: Stack
title: Stack
sidebar_label: Stack
---
Stack is are Base Layout Component which is used to create all other Layout devices like Rows, Columns, Page etc. It works on a very simple premise that all layouts can be thought of as Stacks. They can be Vertical or Horizontal and can be nested into each other.



## How to use?

```jsx 
<Stack horizontal top left  >
    <Box width="200px" height="200px" borderRadius="5" bg="neutral__200"/> 
    <Text type500 regular color="neutral__700">
        This Box is Horizontally centered in a top aligned box
    </Text>      
</Stack>
```

## Properties


|      Description          | value | Example|
|--------------------------------|-------|--------|
| Stack type| horizontal or vertical | ```<Stack horizontal top left>...</Stack>```|
| Y Alignment  | top, bottom, mid|```<Stack vertical top center>...</Stack>```|
| X Alignment  | left, right, center|```<Stack vertical center mid>...</Stack>```|


## Aditional Properties

It is designed using the Box Component so it shares all the properties that Box component has, such as padding, margin, width, height etc.








