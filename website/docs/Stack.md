---
id: Stack
title: Stack
sidebar_label: Stack
---
Stack is are Base Layout Component which is used to create all other Layout devices like Rows, Columns, Page etc. It works on a very simple premise that all layouts can be thought of as Stacks. They can be Vertical or Horizontal and can be nested into each other.



## How to use?

```jsx  {1}
<Stack horizontal top left  width="500px" >
    <Box width="80px" height="80px" borderRadius="5" bg="neutral__200"/> 
    <Text ml="3" type500 regular color="neutral__700" width="90px">
        This Box is Horizontally centered in a top aligned box
    </Text>      
</Stack>
```
export const Embed = ()=>(
    <embed
     src="https://codesandbox.io/embed/stack-w19gk?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fmain.js&theme=dark"
     style={{width:"100%", height: "500px"}}
   />
)

<Embed />

## Properties


|      Description          | value | Example|
|--------------------------------|-------|--------|
| Stack type| horizontal or vertical | ```<Stack horizontal top left>...</Stack>```|
| Y Alignment  | top, bottom, mid|```<Stack vertical top center>...</Stack>```|
| X Alignment  | left, right, center|```<Stack vertical center mid>...</Stack>```|


## Aditional Properties

It is designed using the Box Component so it shares all the properties that Box component has, such as padding, margin, width, height etc.








