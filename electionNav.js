var currentPath;

var head = document.querySelector('head');
var link = document.createElement('link'),
    linkDisabled = 'javascript: void(0)';

link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'http://interactive.guim.co.uk/2015/04/election-nav/electionNav.css');
//link.setAttribute('href', 'style.css'); //test

head.appendChild(link);

var links = {
    "2247270" : {
        headline:"Election 2015: The Guardian poll projection",
        url:"http://theguardian.com/politics/ng-interactive/2015/feb/27/guardian-poll-projection",
        title: "Poll projection",
        img: "http://interactive.guim.co.uk/2015/04/election-nav/imgs/proj_projection.png"
        //img: "http://i.guim.co.uk/media/w-300/h--/q-95/5f52472633631108ef17992c6b58753c8dc4e2ef/0_0_4614_2770/2000.jpg"
    },
    "2272795" : {
        headline: "Mapping the polls",
        url:"http://www.theguardian.com/politics/ng-interactive/2015/apr/20/election-2015-constituency-map",
        title: "Mapping the polls",
        img: "http://interactive.guim.co.uk/2015/04/election-nav/imgs/proj_cartogram.png"
        //img: "http://i.guim.co.uk/media/w-300/h--/q-95/5f52472633631108ef17992c6b58753c8dc4e2ef/0_0_4614_2770/2000.jpg"
    }
};

function createLink(txt, url, cn) {
    // "p"arent node, "t"ext note, "a" element
    var p = document.createElement('div'),
        t = document.createTextNode(txt),
        a = document.createElement('a');

    a.appendChild(t);
    a.href = url;
    
    p.appendChild(a);
    p.className = cn; 
    
    return p;
}

function renderHead(){
    var headContainer = document.createElement('div');
        headContainer.setAttribute('class','electionNav-head-container');

    var innerContainer = document.createElement('div');
        innerContainer.setAttribute('class','electionNav-inner-container');
    
    // Add head title
    var headTitleContainer = createLink(
        'Election 2015',
        'http://www.theguardian.com/politics/general-election-2015',
        'electionNav-head-title' 
    );
    innerContainer.appendChild(headTitleContainer);

    // Add head items
    for (var key in links){
        var headItem, 
            url = links[key].url, 
            cn = 'electionNav-head-item'; 
                
        if (key === currentPath) {
            // disable the active link
            url = linkDisabled;
            cn += ' electionNav-head-item-active'; 
        }

        headItem = createLink(links[key].title, url, cn);
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

    // Add footer title
    var footerTitle = createLink(
        'Election 2015',
        'http://www.theguardian.com/politics/general-election-2015',
        'electionNav-footer-title' 
    );
    innerContainer.appendChild(footerTitle);

    // Add footer items
    for (var key in links){
        var footerItem = document.createElement('div');

        var linkImage = document.createElement('img');
            linkImage.setAttribute('src',links[key].img);
            linkImage.setAttribute('alt',links[key].title);

        var link = document.createElement('a');
            link.setAttribute('title',links[key].headline);
            link.innerHTML = "<span>" + links[key].title + "</span>" + linkImage.outerHTML;

        if(key === currentPath){
            footerItem.setAttribute('class','electionNav-footer-item electionNav-footer-item-active');
            link.setAttribute('href', linkDisabled);
        }else{
            footerItem.setAttribute('class','electionNav-footer-item');
            link.setAttribute('href', links[key].url);
        }
        
        footerItem.appendChild(link);
        innerContainer.appendChild(footerItem);
    }

    footerContainer.appendChild(innerContainer);

    var footerPlaceholder = document.querySelector('#election-nav-footer');
    //console.log(footerPlaceholder,footerContainer);
    footerPlaceholder.innerHTML = footerContainer.outerHTML;
}


var pageId = window.guardian ? window.guardian.config.page.pageCode : undefined;

function initElectionNav(pageId){
    //currentPath = "2272795"; //test
    currentPath = pageId;
    renderHead();
    renderFooter();
}

initElectionNav(pageId);
