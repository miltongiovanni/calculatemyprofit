//var nav4 = window.Event ? true : false;
function acceptNum(evt) {
    var nav4 = window.Event ? true : false;
    var key = nav4 ? evt.which : evt.keyCode;
    return (key <= 13 || key == 46 || (key >= 48 && key <= 57));
}
var eedecreg = new RegExp(",", "g");
var eethreg = new RegExp(" ", "g");
var eedec = ",";
var eeth = " ";

function eeparseFloatTh(str) {
    str = String(str).replace('$', "");
    str = String(str).replace(eethreg, "");
    str = String(str).replace(eedecreg, ".");
    var res = parseFloat(str);
    if (isNaN(res)) {
        return 0;
    } else {
        return res;
    }
};
function eeparseFloatThH(str) {
    str = String(str).replace('h', "");
    str = String(str).replace(eethreg, "");
    str = String(str).replace(eedecreg, ".");
    var res = parseFloat(str);
    if (isNaN(res)) {
        return 0;
    } else {
        return res;
    }
};

function eedisplayPercent(x) {
    if (myIsNaN(x)) {
        return Number.NaN;
    } else {
        return eedisplayFloat(x * 100) + '%';
    }
};

function eedisplayPercentND(x, nd) {
    if (myIsNaN(x)) {
        return Number.NaN;
    } else {
        return eedisplayFloatND(x * 100, nd) + '%';
    }
}

function eeparseFloatTh(str) {
    str = String(str).replace(eethreg, "");
    str = String(str).replace(eedecreg, ".");
    var res = parseFloat(str);
    if (isNaN(res)) {
        return 0;
    } else {
        return res;
    }
};

function eedisplayFloatNDTh(x, nd) {
    if (myIsNaN(x)) {
        return Number.NaN;
    } else {
        var res = round(x, nd);
        if (nd > 0) {
            var str = String(res);
            if (str.indexOf('e') != -1) return str;
            if (str.indexOf('E') != -1) return str;
            var parts = str.split('.');
            var res2 = eeinsertThousand(parts[0].toString());
            if (parts.length < 2) {
                var decimals = ('00000000000000').substring(0, nd);
                return (res2 + eedec + decimals + '$');
            } else {
                var decimals = ((parts[1]).toString() + '00000000000000').substring(0, nd);
                return (res2 + eedec + decimals + '$');
            }
        } else {
            return (eeinsertThousand(res.toString()));
        }
    }
};
function eedisplayFloatNDThH(x, nd) {
    if (myIsNaN(x)) {
        return Number.NaN;
    } else {
        var res = round(x, nd);
        if (nd > 0) {
            var str = String(res);
            if (str.indexOf('e') != -1) return str;
            if (str.indexOf('E') != -1) return str;
            var parts = str.split('.');
            var res2 = eeinsertThousand(parts[0].toString());
            if (parts.length < 2) {
                var decimals = ('00000000000000').substring(0, nd);
                return (res2 + eedec + decimals + 'h');
            } else {
                var decimals = ((parts[1]).toString() + '00000000000000').substring(0, nd);
                return (res2 + eedec + decimals + 'h');
            }
        } else {
            return (eeinsertThousand(res.toString()));
        }
    }
};
function eedisplayPercentNDTh(x, nd) {
    if (myIsNaN(x)) {
        return Number.NaN;
    } else {
        return eedisplayFloatNDTh(x * 100, nd) + '%';
    }
}


function myIsNaN(x) {
    return (isNaN(x) || (typeof x == 'number' && !isFinite(x)));
};


function round(n, nd) {
    if (isFinite(n) && isFinite(nd)) {
        var sign_n = (n < 0) ? -1 : 1;
        var abs_n = Math.abs(n);
        var factor = Math.pow(10, nd);
        return sign_n * Math.round(abs_n * factor) / factor;
    } else {
        return NaN;
    }
};


//Add spaces for thousand numbers
function eeinsertThousand(whole) {
    if (whole == "" || whole.indexOf("e") >= 0) {
        return whole;
    } else {
        var minus_sign = "";
        if (whole.charAt(0) == "-") {
            minus_sign = "-";
            whole = whole.substring(1);
        };
        var res = "";
        var str_length = whole.length - 1;
        for (var ii = 0; ii <= str_length; ii++) {
            if (ii > 0 && ii % 3 == 0) {
                res = eeth + res;
            };
            res = whole.charAt(str_length - ii) + res;
        };
        return minus_sign + res;
    }
};


function calculate1() {
    var co = new Object;
    //Capture the fields values
    co['cout'] = eeparseFloatTh(document.getElementById('cout').value);
    co['prix'] = eeparseFloatTh(document.getElementById('prix').value);
    co['majoration'] = eeparsePercent(document.getElementById('majoration').value);
    co['marge'] = eeparsePercent(document.getElementById('marge').value);
    calc1(co);
    document.getElementById('majoration').value = eedisplayPercentND(co['majoration'], 2);
    document.getElementById('marge').value = eedisplayPercentND(co['marge'], 2);
    document.getElementById('prix').value = eedisplayFloatNDTh(co['prix'], 2);
    document.getElementById('cout').value = eedisplayFloatNDTh(co['cout'], 2);
};

function calc1(data) {
    var marge = data['marge'];
    var majoration = data['majoration'];
    var prix = data['prix'];
    var cout = data['cout'];
    if (prix > 0 && cout > 0) {
        majoration = (((((cout) == (0))) ? (0) : (((((prix) - (cout))) / (cout)))));
        marge = (((((prix) == (0))) ? (0) : (((((prix) - (cout))) / (prix)))));
        data['marge'] = marge;
        data['majoration'] = majoration;
    }
    if (majoration > 0 && cout > 0) {
        prix = (((((cout) == (0))) ? (0) : ((cout) * (1 + majoration))));
        marge = (((((prix) == (0))) ? (0) : (((((prix) - (cout))) / (prix)))));
        data['marge'] = marge;
        data['prix'] = prix;
    }

    if (marge > 0 && cout > 0) {
        prix = (((((cout) == (0))) ? (0) : ((cout) / (1 - marge))));
        majoration = (((((cout) == (0))) ? (0) : (((((prix) - (cout))) / (cout)))));
        data['majoration'] = majoration;
        data['prix'] = prix;
    }
    if(marge>0 && majoration>0 && prix==0 && cout==0){
        montrerAlerte();
    }
    if (majoration > 0 && prix > 0) {
        cout = (((((prix) == (0))) ? (0) : ((prix) / (1 + majoration))));
        marge = (((((prix) == (0))) ? (0) : (((((prix) - (cout))) / (prix)))));
        data['marge'] = marge;
        data['cout'] = cout;
    }
    if (marge > 0 && prix > 0) {
        cout = (((((prix) == (0))) ? (0) : ((prix) * (1 - marge))));
        majoration = (((((cout) == (0))) ? (0) : (((((prix) - (cout))) / (cout)))));
        data['majoration'] = majoration;
        data['cout'] = cout;
    }

};


function calculMain(){
    coutm = eeparseFloatTh(document.getElementById('coutm').value);
    heures = eeparseFloatThH(document.getElementById('heures').value);
    cout = coutm * heures;
    document.getElementById('cout').value = eedisplayFloatNDTh(cout, 2);
}


function calculate2() {
    var co = new Object;
    //Capture the fields values
    co['cout'] = eeparseFloatTh(document.getElementById('cout').value);
    co['prix'] = eeparseFloatTh(document.getElementById('prix').value);
    co['majoration'] = eeparsePercent(document.getElementById('majoration').value);
    co['marge'] = eeparsePercent(document.getElementById('marge').value);
    calc2(co);
    document.getElementById('majoration').value = eedisplayPercentND(co['majoration'], 2);
    document.getElementById('marge').value = eedisplayPercentND(co['marge'], 2);
    document.getElementById('prix').value = eedisplayFloatNDTh(co['prix'], 2);
    document.getElementById('cout').value = eedisplayFloatNDTh(co['cout'], 2);
};

function calc2(data) {
    var marge = data['marge'];
    var majoration = data['majoration'];
    var prix = data['prix'];
    var cout = data['cout'];
    if(cout==0){
        montrerAlerte();
    }
    if (prix > 0 && cout > 0) {
        majoration = (((((cout) == (0))) ? (0) : (((((prix) - (cout))) / (cout)))));
        marge = (((((prix) == (0))) ? (0) : (((((prix) - (cout))) / (prix)))));
        data['marge'] = marge;
        data['majoration'] = majoration;
    }
    if (majoration > 0 && cout > 0) {
        prix = (((((cout) == (0))) ? (0) : ((cout) * (1 + majoration))));
        marge = (((((prix) == (0))) ? (0) : (((((prix) - (cout))) / (prix)))));
        data['marge'] = marge;
        data['prix'] = prix;
    }

    if (marge > 0 && cout > 0) {
        prix = (((((cout) == (0))) ? (0) : ((cout) / (1 - marge))));
        majoration = (((((cout) == (0))) ? (0) : (((((prix) - (cout))) / (cout)))));
        data['majoration'] = majoration;
        data['prix'] = prix;
    }
};


function calcul3(){
    ventes = eeparseFloatTh(document.getElementById('ventes').value);
    autres = eeparseFloatTh(document.getElementById('autres').value);
    retours = eeparseFloatTh(document.getElementById('retours').value);
    revenus = ventes - retours + autres;
    document.getElementById('revenus').value = eedisplayFloatNDTh(revenus, 2);
    cout = eeparseFloatTh(document.getElementById('cout').value);
    entretien = eeparseFloatTh(document.getElementById('entretien').value);
    salaires = eeparseFloatTh(document.getElementById('salaires').value);
    amortissement = eeparseFloatTh(document.getElementById('amortissement').value);
    loyer = eeparseFloatTh(document.getElementById('loyer').value);
    impots = eeparseFloatTh(document.getElementById('impots').value);
    services = eeparseFloatTh(document.getElementById('services').value);
    interets = eeparseFloatTh(document.getElementById('interets').value);
    web = eeparseFloatTh(document.getElementById('web').value);
    creances = eeparseFloatTh(document.getElementById('creances').value);
    assurances = eeparseFloatTh(document.getElementById('assurances').value);
    assistance = eeparseFloatTh(document.getElementById('assistance').value);
    pub = eeparseFloatTh(document.getElementById('pub').value);
    despenses = cout + entretien + salaires + amortissement + loyer + impots + services + interets + web + creances + assurances + assistance + pub;
    document.getElementById('despenses').value = eedisplayFloatNDTh(despenses, 2);
    profit = revenus - despenses;
    document.getElementById('profit').value = eedisplayFloatNDTh(profit, 2);
    majoration = (((((despenses) == (0))) ? (0) : (((((revenus) - (despenses))) / (despenses)))));
    marge = (((((revenus) == (0))) ? (0) : (((((revenus) - (despenses))) / (revenus)))));
    document.getElementById('majoration').value = eedisplayPercentND(majoration, 2);
    document.getElementById('marge').value = eedisplayPercentND(marge, 2);
}



function eeparsePercent(str) {
    var parts = String(str).split('%');
    var tmp = String(parts[0]).replace(eedecreg, ".");
    var res = parseFloat(tmp) / 100;
    if (isNaN(res)) {
        return 0;
    } else {
        return res;
    }
};

var near0RegExp = new RegExp("[.](.*0000000|.*9999999)");

function eedisplayFloat(x) {
    if (myIsNaN(x)) {
        return Number.NaN;
    } else {
        var str = String(x);
        if (near0RegExp.test(str)) {
            x = round(x, 8);
            str = String(x);
        }
        return str.replace(/\./g, eedec);
    }
};

function eedisplayFloatND(x, nd) {
    if (myIsNaN(x)) {
        return Number.NaN;
    } else {
        var res = round(x, nd);
        if (nd > 0) {
            var str = String(res);
            if (str.indexOf('e') != -1) return str;
            if (str.indexOf('E') != -1) return str;
            var parts = str.split('.');
            if (parts.length < 2) {
                var decimals = ('00000000000000').substring(0, nd);
                return (parts[0]).toString() + eedec + decimals;
            } else {
                var decimals = ((parts[1]).toString() + '00000000000000').substring(0, nd);
                return (parts[0]).toString() + eedec + decimals;
            }
        } else {
            return res;
        }
    }
};

function eedisplayPercent(x) {
    if (myIsNaN(x)) {
        return Number.NaN;
    } else {
        return eedisplayFloat(x * 100) + '%';
    }
};

function eedisplayPercentND(x, nd) {
    if (myIsNaN(x)) {
        return Number.NaN;
    } else {
        return eedisplayFloatND(x * 100, nd) + '%';
    }
}

function montrerAlerte() {
    // Montre l'alerte
    document.getElementById("alerte").style.display = "block";
    // Cache l'alerte au bout de 2 secondes
    setTimeout(function () {
        document.getElementById('alerte').style.display = 'none';
        document.getElementById("form").reset();
    }, 2500);

}