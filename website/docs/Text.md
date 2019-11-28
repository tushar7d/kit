---
id: Text
title: Text
sidebar_label: Text
---
Basic Text Component for all your typographic needs. This could be used to create any typographic element. Text is created using the Box Component and has all the properties which Box has.

## How to use?

### Step 1 - Import 

```jsx 
import {Text} from '../uds' //Path to UDS folder

```


### Step 2 - Use component
to run the example below you must import Box also.

```jsx 


<Box bg="neutral__200" p="3"> 
      <Text type600 medium color="neutral__700" mb="2">
        This is a text inside a box!
      </Text>
      <Text type200 color="neutral__700">
        This is a another text inside a box!
      </Text>
    </Box>
    
```
## Live Playground
You can play with the code below to understand how this component works. You can apply any property to it listed in the section below.

export const Embed = ()=>(
    <embed
     src="https://codesandbox.io/embed/text-m3xe6?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fmain.js&theme=dark"
     style={{width:"100%", height: "500px"}}
   />
)

<Embed />

## Typographic Properties


| Type                   | value | Example|
|--------------------------------|-------|--------|
| Type Size | UDS Typography Token  | ```<Text type500 regular color="neutral__700"> </Text>```|
| Type Weight  | regular, medium, bold|```<Text type500 bold color="neutral__700"> </Text>```|
| Type Color  | UDS Color Token|```<Text type500 medium color="accent.2"> </Text>```|


## Aditional Properties

It is designed using the Box Component so it shares all the properties that Box component has, such as padding, margin, width, height etc.








