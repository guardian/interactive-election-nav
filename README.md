# Election navigation

Add an election navigation to election interactive projects

## How to get this working
You just have to load the script and call the function 

### Add placeholders to your interactive
Add two placeholder div's in your interactive ```<div id="election-nav-head"></div>``` for the header and ```<div id="election-nav-footer"></div>``` for the footer

### Load the script and call the function
Load the script by adding a script tag in the page
```<script src="http://interactive.guim.co.uk/2015/04/election-nav/electionNav.js" type="text/javascript"></script>``` and call the function ```initElectionNav(pathName)``` where pathname is the path of the page url.

Alternatively, you can load the script tag via javascript:

```
> var head = document.querySelector('head');
> var script = document.createElement('script');
        
> script.setAttribute('src','http://localhost:8080/boot.js');
> script.setAttribute('type','text/javascript');
> script.onreadystatechange = loadNav;
> script.onload = loadNav;
        
> function loadNav(){
	> initElectionNav('/global/ng-interactive/2015/mar/31/election-navigation-test')
> }

> head.appendChild(script);
```