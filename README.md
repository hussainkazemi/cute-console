# cute console
-‍‍‍`cute console` is a package for print your message in nodejs application
-Use this package if you want to print a message different from other messages 

**Installation**

`npm i --save cute-console`

## how to use:

###### in nodejs:

```javascript
const { Nconsole, Lconsole, Uconsole } = require('cute-console');`

Nconsole("Your Message"); 
Nconsole("Your Message", '#');
Uconsole("Your Message", '#');
Lconsole("Your Message", '#');
```
##### note:
The table below shows the use of each function

| function |    uset  |
|  :-----: |  :----:  |
|Nconsole  |print your message original  |
|Uconsole. |print your message Upper case|
|Lconsole. |print hour message Lower case| 
