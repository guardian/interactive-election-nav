var currentPath;

var head = document.querySelector('head');
var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'http://localhost:8080/style.css');
    // link.setAttribute('href', 'http://interactive.guim.co.uk/2015/04/election-nav/style.css');

head.appendChild(link);

var links = {
    "pollprojection" : {
        headline:"Election 2015: The Guardian poll projection",
        url:"http://theguardian.com/politics/ng-interactive/2015/feb/27/guardian-poll-projection",
        title: "Poll projection",
        img: "http://i.guim.co.uk/media/w-300/h--/q-95/5f52472633631108ef17992c6b58753c8dc4e2ef/0_0_4614_2770/2000.jpg"
    },
    "liveblog" : {
        headline: "Election live 2015",
        url:"http://theguardian.com/politics/live/2015/mar/30/election-2015-official-campaign-starts-as-parties-clash-over-eu-referendum-live",
        title: "Live blog",
        img: "http://i.guim.co.uk/media/w-300/h--/q-95/5f52472633631108ef17992c6b58753c8dc4e2ef/0_0_4614_2770/2000.jpg"
    },
    "test":{
        headline: "Test page",
        url: "http://localhost:9000",
        title: "Test",
        img:"http://i.guim.co.uk/media/w-300/h--/q-95/5f52472633631108ef17992c6b58753c8dc4e2ef/0_0_4614_2770/2000.jpg"
    }
}

function initElectionNav(pathName){
    currentPath = pathName;
    renderHead();
    renderFooter();
}

function renderHead(){
    var headContainer = document.createElement('div');
        headContainer.setAttribute('class','electionNav-head-container');

    var innerContainer = document.createElement('div');
        innerContainer.setAttribute('class','electionNav-inner-container');

    var headTitleContainer = document.createElement('div');
        headTitleContainer.setAttribute('class','electionNav-head-title')
        headTitleContainer.innerHTML = "<p>Election 2015</p>"
    
    innerContainer.appendChild(headTitleContainer);

    for (var key in links){
        var headItem = document.createElement('div');
        var link = document.createElement('a');
            link.setAttribute('href',links[key].url);
            link.setAttribute('title',links[key].headline);
            link.innerHTML = links[key].title;

        if(key === currentPath){
            headItem.setAttribute('class','electionNav-head-item electionNav-head-item-active')
        }else{
            headItem.setAttribute('class','electionNav-head-item');
        }
        
        headItem.appendChild(link);
        innerContainer.appendChild(headItem);
    }

    headContainer.appendChild(innerContainer);

    var headPlaceholder = document.querySelector('#election-nav-head');
    headPlaceholder.innerHTML = headContainer.outerHTML;
}

function renderFooter(){
    var footerContainer = document.createElement('div');
        footerContainer.setAttribute('class','electionNav-footer-container');

    var innerContainer = document.createElement('div');
        innerContainer.setAttribute('class','electionNav-inner-container');

    var footerTitle = document.createElement('p');
        footerTitle.setAttribute('class','electionNav-footer-title')
        footerTitle.innerHTML = "Election 2015";

    innerContainer.appendChild(footerTitle);

    for (var key in links){
        var footerItem = document.createElement('div');

        var linkImage = document.createElement('img');
            linkImage.setAttribute('src',links[key].img);
            linkImage.setAttribute('alt',links[key].title)

        var link = document.createElement('a');
            link.setAttribute('href', links[key].url);
            link.setAttribute('title',links[key].headline);
            link.innerHTML = "<span>" + links[key].title + "</span>" + linkImage.outerHTML;

        if(key === currentPath){
            footerItem.setAttribute('class','electionNav-footer-item electionNav-footer-item-active')
        }else{
            footerItem.setAttribute('class','electionNav-footer-item');
        }
        
        footerItem.appendChild(link);
        innerContainer.appendChild(footerItem);
    }

    footerContainer.appendChild(innerContainer);

    var footerPlaceholder = document.querySelector('#election-nav-footer');
    console.log(footerPlaceholder,footerContainer);
    footerPlaceholder.innerHTML = footerContainer.outerHTML;
}
