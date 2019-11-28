---
id: MessagingCard
title: Messaging Card
sidebar_label: Messaging Card
---

Messaging card component from UDS, built using our Foundation conponnets.

## How to use?

### Step 1 - Import

```jsx
import { MessagingCard } from "../uds"; //Path to UDS folder
```

### Step 2 - Use component

to run the example below you must import Stack also.

```jsx
<Stack bg="neutral__200" p="2">
      <MessagingCard
        icon
        heading="This is a Heading"
        text="A long form body test can be added here to have a high impact"
      />
    </Stack>
```

## Live Playground

You can play with the code below to understand how this component works. You can apply any property to it listed in the section below.

export const Embed = ()=>(
<embed
src="https://codesandbox.io/embed/messagingcard-dgkqz?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fmain.js&theme=dark"
style={{width:"100%", height: "500px"}}
/>
)

<Embed />

## Properties

| Description   | value                        | Example                                                                  | notes                                                        |
| ------------- | ---------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------ |
| Add Heading   | heading="add your text here" | `<MessagingCard heading="this is a heading" />`                          |                                                              |
| Add Body Text | 200px                        | `<MessagingCard text="you can add a long text here as a sub heading" />` | by default if no text value is defined a dummy text is hsown |
| Add Icon      | icon={add icon name here}    | `<MessagingCard icon={heart} />`                                         |                                                            
| Dummy Icon   | icon | `<MessagingCard icon />`                          | 