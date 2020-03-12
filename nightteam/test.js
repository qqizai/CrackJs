htmlKit = {
    _tags: [], html: [],
    _createAttrs: function (attrs) {
        var attrStr = [];
        for (var key in attrs) {
            if (!attrs.hasOwnProperty(key)) continue;
            attrStr.push(key + "=" + attrs[key] + "")
        }
        return attrStr.join(" ")
    }, _createTag: function (tag, attrs, isStart) {
        if (isStart) {
            return "<" + tag + " " + this._createAttrs(attrs) + ">"
        } else {
            return "</" + tag + ">"
        }
    }, start: function (tag, attrs) {
        this._tags.push(tag);
        this.html.push(this._createTag(tag, attrs, true));
        return this;
    }, end: function () {
        this.html.push(this._createTag(this._tags.pop(), null, false));
        return this;
    }, tag: function (tag, attr, text) {
        this.html.push(this._createTag(tag, attr, true) + text + this._createTag(tag, null, false));
        return this;
    },
    create: function () {
        var t = this.html.join("");
        this.clear();
        return t;
    },
    clear: function () {
        this._tags = [];
        this.html = [];
    }
};

function json2Html(data) {
    var hk = htmlKit;
    hk.start("table", {"cellpadding": "10", "border": "1"});
    hk.start("thead");
    hk.start("tr");
    data["heads"].forEach(function (head) {
        hk.tag("th", {"bgcolor": "AntiqueWhite"}, head)
    });
    hk.end();
    hk.end();
    hk.start("tbody");
    data["data"].forEach(function (dataList, i) {
        dataList.forEach(function (_data) {
            hk.start("tr");
            data["dataKeys"][i].forEach(function (key) {
                var rowsAndCol = key.split(":");
                if (rowsAndCol.length === 1) {
                    hk.tag("td", null, _data[rowsAndCol[0]])
                } else if (rowsAndCol.length === 3) {
                    hk.tag("td", {"rowspan": rowsAndCol[0], "colspan": rowsAndCol[1]}, _data[rowsAndCol[2]])
                }
            });
            hk.end()
        })
    });
    hk.end();
    hk.end();
    return hk.create()
}



// var data = [
//     {
//         "chinese": 80,
//         "mathematics": 89,
//         "english": 90
//     }
// ];

var data = [{"id":146,"pid":1,"key":"jcwdfjb312","value":"检测位点附表","content":null,"path":"/0/1/146/","seq":1,"status":1,"children":[{"id":153,"pid":146,"key":"xdrd169","value":"EGFR基因18-21外显子突变检测（荧光PCR法）","content":null,"path":"/0/1/146/153/","seq":10,"status":1,"children":[{"id":154,"pid":153,"key":"qita203","value":"18","content":null,"path":"/0/1/146/153/154/","seq":9,"status":1,"children":[{"id":155,"pid":154,"key":"jpjh337","value":"G719X","content":null,"path":"/0/1/146/153/154/155/","seq":10,"status":1,"children":[{"id":258,"pid":155,"key":"fndw755","value":"2155G>T","content":null,"path":"/0/1/146/153/154/155/258/","seq":10,"status":1,"children":[{"id":259,"pid":258,"key":"ouhq446","value":"G719C","content":null,"path":"/0/1/146/153/154/155/258/259/","seq":10,"status":1,"children":[{"id":260,"pid":259,"key":"hfnf838","value":"6253","content":null,"path":"/0/1/146/153/154/155/258/259/260/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":156,"pid":155,"key":"euzk704","value":"2156G>C","content":null,"path":"/0/1/146/153/154/155/156/","seq":10,"status":1,"children":[{"id":157,"pid":156,"key":"lcxr544","value":"G719A","content":null,"path":"/0/1/146/153/154/155/156/157/","seq":10,"status":1,"children":[{"id":158,"pid":157,"key":"srju663","value":"6239","content":null,"path":"/0/1/146/153/154/155/156/157/158/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":160,"pid":155,"key":"oqvi936","value":"2155G>A","content":null,"path":"/0/1/146/153/154/155/160/","seq":10,"status":1,"children":[{"id":255,"pid":160,"key":"gegx585","value":"G719S","content":null,"path":"/0/1/146/153/154/155/160/255/","seq":10,"status":1,"children":[{"id":256,"pid":255,"key":"klad971","value":"6252","content":null,"path":"/0/1/146/153/154/155/160/255/256/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5}],"level":4}],"level":3},{"id":261,"pid":153,"key":"pjpx599","value":"19","content":null,"path":"/0/1/146/153/261/","seq":10,"status":1,"children":[{"id":262,"pid":261,"key":"vevi761","value":"Exon 19 del","content":null,"path":"/0/1/146/153/261/262/","seq":10,"status":1,"children":[{"id":263,"pid":262,"key":"rrsq596","value":"2235_2249del15","content":null,"path":"/0/1/146/153/261/262/263/","seq":10,"status":1,"children":[{"id":264,"pid":263,"key":"nxaa248","value":"E746_A750del","content":null,"path":"/0/1/146/153/261/262/263/264/","seq":10,"status":1,"children":[{"id":265,"pid":264,"key":"lmgf824","value":"6223","content":null,"path":"/0/1/146/153/261/262/263/264/265/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":266,"pid":262,"key":"bnmp134","value":"2236_2250del15","content":null,"path":"/0/1/146/153/261/262/266/","seq":10,"status":1,"children":[{"id":267,"pid":266,"key":"vfha569","value":"E746_A750del","content":null,"path":"/0/1/146/153/261/262/266/267/","seq":10,"status":1,"children":[{"id":268,"pid":267,"key":"chzu477","value":"6225","content":null,"path":"/0/1/146/153/261/262/266/267/268/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":269,"pid":262,"key":"bqxd113","value":"2240_2257del18","content":null,"path":"/0/1/146/153/261/262/269/","seq":10,"status":1,"children":[{"id":270,"pid":269,"key":"jorm106","value":"L747_P753>S","content":null,"path":"/0/1/146/153/261/262/269/270/","seq":10,"status":1,"children":[{"id":271,"pid":270,"key":"aeod677","value":"12370","content":null,"path":"/0/1/146/153/261/262/269/270/271/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":272,"pid":262,"key":"yizn234","value":"2235_2252>AAT","content":null,"path":"/0/1/146/153/261/262/272/","seq":10,"status":1,"children":[{"id":273,"pid":272,"key":"vmsc371","value":"E746_T751>I","content":null,"path":"/0/1/146/153/261/262/272/273/","seq":10,"status":1,"children":[{"id":274,"pid":273,"key":"yxjy154","value":"13551","content":null,"path":"/0/1/146/153/261/262/272/273/274/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":275,"pid":262,"key":"ngfd447","value":"2236_2253del18","content":null,"path":"/0/1/146/153/261/262/275/","seq":10,"status":1,"children":[{"id":276,"pid":275,"key":"rnsw415","value":"E746_T751del","content":null,"path":"/0/1/146/153/261/262/275/276/","seq":10,"status":1,"children":[{"id":277,"pid":276,"key":"zyga605","value":"12728","content":null,"path":"/0/1/146/153/261/262/275/276/277/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":278,"pid":262,"key":"uejg241","value":"2237_2255>T","content":null,"path":"/0/1/146/153/261/262/278/","seq":10,"status":1,"children":[{"id":279,"pid":278,"key":"nwyk373","value":"E746_S752>V","content":null,"path":"/0/1/146/153/261/262/278/279/","seq":10,"status":1,"children":[{"id":280,"pid":279,"key":"daog127","value":"12384","content":null,"path":"/0/1/146/153/261/262/278/279/280/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":281,"pid":262,"key":"rcsw873","value":"2238_2252>GCA","content":null,"path":"/0/1/146/153/261/262/281/","seq":10,"status":1,"children":[{"id":282,"pid":281,"key":"pktb816","value":"L747_T751>Q","content":null,"path":"/0/1/146/153/261/262/281/282/","seq":10,"status":1,"children":[{"id":283,"pid":282,"key":"ywmh521","value":"12419","content":null,"path":"/0/1/146/153/261/262/281/282/283/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":284,"pid":262,"key":"qghd803","value":"2239_2247del9","content":null,"path":"/0/1/146/153/261/262/284/","seq":10,"status":1,"children":[{"id":285,"pid":284,"key":"jccg636","value":"L747_E749del","content":null,"path":"/0/1/146/153/261/262/284/285/","seq":10,"status":1,"children":[{"id":286,"pid":285,"key":"bkrq857","value":"6218","content":null,"path":"/0/1/146/153/261/262/284/285/286/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":287,"pid":262,"key":"jnav386","value":"2239_2256del18","content":null,"path":"/0/1/146/153/261/262/287/","seq":10,"status":1,"children":[{"id":288,"pid":287,"key":"tjkk565","value":"L747_S752del","content":null,"path":"/0/1/146/153/261/262/287/288/","seq":10,"status":1,"children":[{"id":289,"pid":288,"key":"iqxa601","value":"6255","content":null,"path":"/0/1/146/153/261/262/287/288/289/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":290,"pid":262,"key":"mxmc546","value":"2239_2248>C","content":null,"path":"/0/1/146/153/261/262/290/","seq":10,"status":1,"children":[{"id":291,"pid":290,"key":"ocke833","value":"L747_A750>P","content":null,"path":"/0/1/146/153/261/262/290/291/","seq":10,"status":1,"children":[{"id":292,"pid":291,"key":"dmcc270","value":"12382","content":null,"path":"/0/1/146/153/261/262/290/291/292/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":293,"pid":262,"key":"rbyr362","value":"2239_2258>CA","content":null,"path":"/0/1/146/153/261/262/293/","seq":10,"status":1,"children":[{"id":294,"pid":293,"key":"azew338","value":"L747_P753>Q","content":null,"path":"/0/1/146/153/261/262/293/294/","seq":10,"status":1,"children":[{"id":295,"pid":294,"key":"zayz759","value":"12387","content":null,"path":"/0/1/146/153/261/262/293/294/295/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":296,"pid":262,"key":"qfaf161","value":"2240_2254del15","content":null,"path":"/0/1/146/153/261/262/296/","seq":10,"status":1,"children":[{"id":297,"pid":296,"key":"hbwr983","value":"L747_T751del","content":null,"path":"/0/1/146/153/261/262/296/297/","seq":10,"status":1,"children":[{"id":298,"pid":297,"key":"znij136","value":"12369","content":null,"path":"/0/1/146/153/261/262/296/297/298/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5},{"id":299,"pid":262,"key":"qkzo728","value":"2239_2251>C","content":null,"path":"/0/1/146/153/261/262/299/","seq":10,"status":1,"children":[{"id":300,"pid":299,"key":"pwhy236","value":"L747_T751>P","content":null,"path":"/0/1/146/153/261/262/299/300/","seq":10,"status":1,"children":[{"id":301,"pid":300,"key":"jpyk205","value":"12383","content":null,"path":"/0/1/146/153/261/262/299/300/301/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5}],"level":4}],"level":3},{"id":302,"pid":153,"key":"ucxs380","value":"20","content":null,"path":"/0/1/146/153/302/","seq":11,"status":1,"children":[{"id":308,"pid":302,"key":"khnw322","value":"T790M","content":null,"path":"/0/1/146/153/302/308/","seq":10,"status":1,"children":[{"id":309,"pid":308,"key":"zbvz845","value":"2369C>T","content":null,"path":"/0/1/146/153/302/308/309/","seq":10,"status":1,"children":[{"id":310,"pid":309,"key":"mmfp334","value":"T790M","content":null,"path":"/0/1/146/153/302/308/309/310/","seq":10,"status":1,"children":[{"id":311,"pid":310,"key":"ywxg228","value":"6240","content":null,"path":"/0/1/146/153/302/308/309/310/311/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5}],"level":4},{"id":312,"pid":302,"key":"gllq183","value":"S768I","content":null,"path":"/0/1/146/153/302/312/","seq":10,"status":1,"children":[{"id":313,"pid":312,"key":"owxv719","value":"2303G>T","content":null,"path":"/0/1/146/153/302/312/313/","seq":10,"status":1,"children":[{"id":314,"pid":313,"key":"wedd271","value":"6241","content":null,"path":"/0/1/146/153/302/312/313/314/","seq":10,"status":1,"children":null,"level":6}],"level":5}],"level":4},{"id":315,"pid":302,"key":"vkax585","value":"Exon 20 ins","content":null,"path":"/0/1/146/153/302/315/","seq":10,"status":1,"children":[{"id":316,"pid":315,"key":"jivr429","value":"2310_2311insGGT","content":null,"path":"/0/1/146/153/302/315/316/","seq":10,"status":1,"children":[{"id":317,"pid":316,"key":"uyas243","value":"D770_N771insG","content":null,"path":"/0/1/146/153/302/315/316/317/","seq":10,"status":1,"children":[{"id":318,"pid":317,"key":"thrl530","value":"12378","content":null,"path":"/0/1/146/153/302/315/316/317/318/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5}],"level":4}],"level":3},{"id":319,"pid":153,"key":"fpjn655","value":"21","content":null,"path":"/0/1/146/153/319/","seq":12,"status":1,"children":[{"id":321,"pid":319,"key":"wfjs894","value":"L858R","content":null,"path":"/0/1/146/153/319/321/","seq":10,"status":1,"children":[{"id":322,"pid":321,"key":"cpkw539","value":"2573T>G","content":null,"path":"/0/1/146/153/319/321/322/","seq":10,"status":1,"children":[{"id":323,"pid":322,"key":"cpfi482","value":"L858R","content":null,"path":"/0/1/146/153/319/321/322/323/","seq":10,"status":1,"children":[{"id":324,"pid":323,"key":"yimk989","value":"6224","content":null,"path":"/0/1/146/153/319/321/322/323/324/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5}],"level":4},{"id":325,"pid":319,"key":"vtmz681","value":"L861Q","content":null,"path":"/0/1/146/153/319/325/","seq":10,"status":1,"children":[{"id":326,"pid":325,"key":"ezgs715","value":"2582T>A","content":null,"path":"/0/1/146/153/319/325/326/","seq":10,"status":1,"children":[{"id":328,"pid":326,"key":"pkql458","value":"L861Q","content":null,"path":"/0/1/146/153/319/325/326/328/","seq":10,"status":1,"children":[{"id":329,"pid":328,"key":"kdaf738","value":"6213","content":null,"path":"/0/1/146/153/319/325/326/328/329/","seq":10,"status":1,"children":null,"level":7}],"level":6}],"level":5}],"level":4}],"level":3}],"level":2}],"level":1}];


var total = 0;
data.forEach(function (value) {
    for (key in value) {
        total += value[key];
    }
});

var htmlMetadata = {
    "heads": ["外显子", "类别", "碱基变化", "氨基酸变化", "Cosmic ID"],  /*["语文", "数学", "英语"],*/
    "dataKeys": [["chinese", "mathematics", "english"], ["text","1:2:total"]], // rowspan:colspan:value
    "data": [data, [{"text": "合计","total": total}]]
};

var html = json2Html(htmlMetadata);

console.info(html);


