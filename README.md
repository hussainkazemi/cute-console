# cute console
* `cute console` is a package for print your message in nodejs application
* Use this package if you want to print a message different from other messages 

**Installation**

`npm i --save cute-console`

## how to use:

###### in nodejs:

```javascript
const { Nconsole, Lconsole, Uconsole } = require('cute-console');

Nconsole("Your Message");
Uconsole("Your Message");
Lconsole("Your Message");
```

##### output:
```
* * * * * * * * * * * * * * * * 
*                             * 
*   Y o u r   M e s s a g e   * 
*                             * 
* * * * * * * * * * * * * * * * 

% % % % % % % % % % % % % % % % 
%                             % 
%   Y O U R   M E S S A G E   % 
%                             % 
% % % % % % % % % % % % % % % % 

^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ 
^                             ^ 
^   y o u r   m e s s a g e   ^ 
^                             ^ 
^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ 
```
##### note:
The table below shows the use of each function

| function |    uset  |
|  :-----: |  :----:  |
|Nconsole  |print your message original  |
|Uconsole. |print your message Upper case|
|Lconsole. |print hour message Lower case|

* by default your message will be printed in a border with random char 
* you can pass any char in secend argument for create your own border for example

```javascript
const { Nconsole, Lconsole, Uconsole } = require('cute-console');

Nconsole("Your Message",'#');
Uconsole("Your Message",'#');
Lconsole("Your Message",'#');
```

##### output
```
# # # # # # # # # # # # # # # # 
#                             # 
#   Y o u r   M e s s a g e   # 
#                             # 
# # # # # # # # # # # # # # # # 

# # # # # # # # # # # # # # # # 
#                             # 
#   Y O U R   M E S S A G E   # 
#                             # 
# # # # # # # # # # # # # # # # 

# # # # # # # # # # # # # # # # 
#                             # 
#   y o u r   m e s s a g e   # 
#                             # 
# # # # # # # # # # # # # # # # 
```