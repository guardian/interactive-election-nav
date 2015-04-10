# Election navigation

Add an election navigation to election interactive projects

## How to get this working

##### Add placeholders to your interactive
Add placeholder div's in your interactive ```<div id="election-nav-head"></div>``` for the header and ```<div id="election-nav-footer"></div>``` for the footer

##### Load the script and call the function
Load the script by adding a script tag in the page
```<script src="http://interactive.guim.co.uk/2015/04/election-nav/electionNav.js" type="text/javascript"></script>``` and call the function ```initElectionNav(interactiveId)``` where interactiveId is the id of the interactive that you want to highlight.

Alternatively, you can load the script tag via javascript:

```
var head = document.querySelector('head');
var script = document.createElement('script');
        
script.setAttribute('src','http://interactive.guim.co.uk/2015/04/election-nav/electionNav.js');
script.setAttribute('type','text/javascript');

head.appendChild(script);
```