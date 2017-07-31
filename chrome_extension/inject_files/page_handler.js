var DOMAIN = 'http://discussions.youdaxue.com';
var DATE = ['7月', '天'];
var FENDCATE = ['提问', 'FEND', '精品'];
var ANDCATE = ['ABND', 'AND', 'Android', '纳米新生', '我的应用'];

// functions
function getForumData() {
    var items = $(".item");
    var datas = [];
    for (var index = 0; index < items.length; index++) {
        var item = items[index];
        var title = getTitle(item);
        var link = DOMAIN + getLink(item);
        var date = getDate(item);
        var cate = getCate(item);
        var data = {
            "title": title,
            "link": link,
            "date": date,
            "category": cate
        };
        datas.push(data);
    }
    return datas;
}

function include(arr, obj) {
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        if (obj.indexOf(element) !== -1) {
            return true;
        }
    }
    return false;
}

function filterDate(forumData) {
    return forumData.filter(function(elem) {
        return include(DATE, elem.date);
    });
}

function filterCate(forumData, cate) {
    return forumData.filter(function(elem) {
        return include(cate, elem.category);
    });
}

function getPTagText(item) {
    var text = $($(item).find('p')[0]).text();
    return text;
}

function getTitle(item) {
    var title = $($(item).find('.title a')[0]).text();
    return title;
}

function getLink(item) {
    var link = $($(item).find('.title a')[0]).attr("href");
    return link;
}

function getDate(item) {
    var date = $($(item).find('.time span')[0]).text();
    return date;
}

function getCate(item) {
    var cate = $($(item).find('.category .badge-category')[0]).text();
    return cate;
}

function jsonToFile(jsonObject) {
    var data = JSON.stringify(jsonObject);
    var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
    console.log(url);
    window.open(url, '_blank');
    window.focus();
}

//main
var datas = filterDate(getForumData());
var fendDatas = filterCate(datas, FENDCATE);
var andDatas = filterCate(datas, ANDCATE);
jsonToFile(fendDatas);
jsonToFile(andDatas);