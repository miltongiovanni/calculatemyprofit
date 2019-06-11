$(document).ready(function () {
	vue('produit');
});


var rep="";
function produit(){
    rep='<div class="row" id="pub1" >'+
        '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'+
        '<!-- header-regledetrois -->'+
        '<ins class="adsbygoogle"'+
        'style="display:inline-block;width:728px;height:90px"'+
        'data-ad-client="ca-pub-0508437232650285"'+
        'data-ad-slot="2107932848"></ins>'+
        '<script>'+
        '(adsbygoogle = window.adsbygoogle || []).push({});'+
        '</script>'+
        '</div>'+
        '<h1 class="text-left py-sm-4 font-weight-bold titre-font"> <span class="greenTitle">Calculate </span>product\'s profit</h1>'+
        '<form action="" class="form-font" id="form">'+
        '<div class="form-group row">'+
        '<div class="alert alert-danger col-12 col-md-12" id="alerte">'+
        'You have to select either the wholesale cost or the selling price!'+
        '<button type="button" class="close"'+
        'onclick="document.getElementById(\'alerte\').style.display = \'none\';">'+
        '<span aria-hidden="true">&times;</span>'+
        '</button>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-lg-1 "></div>'+
        '<div class="col-lg-5 form-group">'+
        '<label for="cout" class="col-form-label d-flex justify-content-start"'+
        'title="Your total wholesale cost of the product that you are going to resell.">Wholesale cost</label>'+
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"'+
        'onKeyPress="return acceptNum(event)"'+
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
        '</div>'+
        '<div class="col-lg-5 form-group">'+
        '<label for="majoration" class="col-form-label d-flex justify-content-start"'+
        'title="The percentage of your wholesale cost that the product\'s price is increased by to determine the selling price for your customers.'+
        ' For example, if you have a 50% markup on a product with a wholesale cost of $10, your selling price would be $15.00.">Markup percent</label>'+
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"'+
        'onKeyPress="return acceptNum(event)"'+
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">'+
        '</div>'+
        '<div class="col-lg-1"></div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-lg-1"></div>'+
        '<div class="col-lg-5 form-group">'+
        '<label for="prix" class="col-form-label d-flex justify-content-start"'+
        'title="This is the price you charge your customers. This amount is always calculated, based on either the entered gross margin percent or markup percent.">Selling price</label>'+
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"'+
        'onKeyPress="return acceptNum(event)"'+
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
        '</div>'+
        '<div class="col-lg-5 form-group">'+
        '<label for="marge" class="col-form-label d-flex justify-content-start"'+
        'title="This percentage is the gross profit for your product. For example, if you have a product that has a wholesale cost of $10 and a selling price of $15, '+
        ' your gross margin is 33.33%.">Gross margin percent</label>'+
        '<input type="text" class="form-control greenBorder py-4 form-font" id="marge"'+
        'onKeyPress="return acceptNum(event)"'+
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">'+
        '</div>'+
        '<div class="col-md-1"></div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-6 d-flex justify-content-end">'+
        '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"'+
        'type="reset">Reset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>'+
        '</div>'+
        '<div class="col-6 d-flex justify-content-start">'+
        '<button class="btn blueButton py-2 px-3 my-4 btn-info form-font" onclick="calculate1();"'+
        'type="button">Calculate&nbsp;&nbsp; <i class="fas fa-calculator"></i>&nbsp;&nbsp;</button>'+
        '</div>'+
        '</div>'+
        '</form>'+
        '<p class="px-lg-4 pt-lg-4 text-justify form-font">This tool can help you to determine the selling price, the  profit margin  or the gross margin.'+
        '  If you want to calculate the selling price you should enter the profit margin or the gross margin.'+
        '  If you want to know the profit margin you have to enter the sellig price.</p>'+
        '<p class="px-lg-4 pt-lg-4 text-justify form-font mb-5 ">You should fill two fields, one field has to be one of the gauche options.</p>'+
        ''+
        '<!-- Copyright -->'+
        '<div class="footer-copyright text-left mt-5 mb-0"><small>© 2019 Copyright:'+
        '<a href="javascript:void(0);" onclick="location.reload();"'+
        'class="text-black">calculatemyprofit.com</a></small>'+
        '</div>';
	$('#main').html(rep);
}
function main(){
    rep='<div class="row" id="pub1" >'+
    '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'+
    '<!-- header-regledetrois -->'+
    '<ins class="adsbygoogle"'+
    'style="display:inline-block;width:728px;height:90px"'+
    'data-ad-client="ca-pub-0508437232650285"'+
    'data-ad-slot="2107932848"></ins>'+
    '<script>'+
    '(adsbygoogle = window.adsbygoogle || []).push({});'+
    '</script>'+
    '</div>'+
    '<h1 class="text-left py-sm-4 font-weight-bold titre-font"> <span class="greenTitle">Calculate </span>workforce\'s profit</h1>'+
    '<form action="" class="form-font" id="form">'+
    '<div class="form-group row">'+
    '<div class="alert alert-danger col-12 col-md-12" id="alerte">'+
    'You have to write the workforce cost per hour and the number of hours!'+
    '<button type="button" class="close"'+
    'onclick="document.getElementById(\'alerte\').style.display = \'none\';">'+
    '<span aria-hidden="true">&times;</span>'+
    '</button>'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-6 form-group">'+
    '<label for="coutm" class="col-form-label d-flex justify-content-start">Workforce cost per hour</label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="coutm"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);calculMain()" placeholder="">'+
    '</div>'+
    '<div class="col-lg-6 form-group">'+
    '<label for="heures" class="col-form-label d-flex justify-content-start">Number of hours </label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="heures"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDThH(eeparseFloatTh(this.value),2);calculMain()" placeholder="">'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-6 form-group">'+
    '<label for="cout" class="col-form-label d-flex justify-content-start"'+
    'title="Your total Workforce cost">Workforce cost</label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="" readonly>'+
    '</div>'+
    '<div class="col-lg-6 form-group">'+
    '<label for="prix" class="col-form-label d-flex justify-content-start"'+
    'title="This is the price you charge your customers. This amount is always calculated, based on either the entered gross margin percent or markup percent.">'+
    'Selling price</label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-6 form-group">'+
    '<label for="majoration" class="col-form-label d-flex justify-content-start"'+
    'title="The percentage of your workforce cost is increased by to determine the selling price for your customers.">Markup percent</label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">'+
    '</div>'+
    '<div class="col-lg-6 form-group">'+
    '<label for="marge" class="col-form-label d-flex justify-content-start"'+
    'title="This percentage is the gross profit for your product. For example, if you have a product that has a wholesale cost of $10 and a selling price of $15, '+
    ' your gross margin is 33.33%.">'+
    'Gross margin percent</label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="marge"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-6 d-flex justify-content-end">'+
    '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"'+
    'type="reset">Reset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>'+
    '</div>'+
    '<div class="col-6 d-flex justify-content-start">'+
    '<button class="btn blueButton py-2 px-3 my-4 btn-info form-font" onclick="calculate2();"'+
    'type="button">Calculate&nbsp;&nbsp; <i class="fas fa-calculator"></i>&nbsp;&nbsp;</button>'+
    '</div>'+
    '</div>'+
    '</form>'+
    '<p class="px-lg-4 pt-lg-4 text-justify form-font  ">This tool will allow you to calculate the selling price, the markup % or the gross margin %.' +
    ' If you want to calculate the selling price you will have to write the markup %. If you want to know the gross margin % you will have to enter the selling price.</p>'+
    '<p class="px-lg-4 pt-lg-4 text-justify form-font mb-5 ">You can change the workforce cost per hour or the number of hours to calculate the cost. '+
    ' You must fill in one field from the right to calculate the others.</p>'+
    '<!-- Copyright -->'+
    '<div class="footer-copyright text-left mt-5 mb-0"><small>© 2019 Copyright:'+
    '<a href="javascript:void(0);" onclick="location.reload();"'+
    'class="text-black">calculatemyprofit.com</a></small>'+
    '</div>';
    $('#main').html(rep);
}
function entreprise(){
    rep='<div class="row" id="pub1" >'+
    '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'+
    '<!-- header-regledetrois -->'+
    '<ins class="adsbygoogle"'+
    'style="display:inline-block;width:728px;height:90px"'+
    'data-ad-client="ca-pub-0508437232650285"'+
    'data-ad-slot="2107932848"></ins>'+
    '<script>'+
    '(adsbygoogle = window.adsbygoogle || []).push({});'+
    '</script>'+
    '</div>'+
    '<h1 class="text-left py-sm-0 py-2 my-sm-0 font-weight-bold titre-font"> <span class="greenTitle">Calculate </span>enterprise\'s profit</h1>'+
    ''+
    '<form action="" class="form-font" id="form">'+
    '<div class="row subtitle d-flex justify-content-center">'+
    'Revenues'+
    '</div>'+
    '<hr class="barGrey">'+
    '<div class="row">'+
    '<div class="col-lg-1 "></div>'+
    '<div class="col-lg-5">'+
    '<label for="ventes" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="The amount of gross revenue from the products or services that were sold">Gross Sales</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="ventes"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 ">'+
    '<label for="autres" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="The amount of income from other sources like interest on bank deposits, dividends from securities or rent on property leased to others">Non-operating Income</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="autres"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-1"></div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-1"></div>'+
    '<div class="col-lg-5 form-group">'+
    '<label for="retours" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="The amount of the products returned to your customers">Returns</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="retours"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 form-group">'+
    '<label for="revenus" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Your total revenue is your net sales plus your non-operating income.">Total revenue</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="revenus"'+
    'onKeyPress="return acceptNum(event)" readonly'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '<div class="col-md-1"></div>'+
    '</div>'+
    '<div class="row subtitle d-flex justify-content-center">'+
    'Expenses'+
    '</div>'+
    '<hr class="barGrey">'+
    '<div class="row">'+
    '<div class="col-lg-1 "></div>'+
    '<div class="col-lg-5">'+
    '<label for="cout" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Cost of products sold is your beginning inventory plus your purchases minus the ending inventory.">Cost of products sold </label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="cout"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5">'+
    '<label for="entretien" class="col-form-label d-flex justify-content-start mb-0 pb-0">Maintenance cost</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="entretien"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-1"></div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-1"></div>'+
    '<div class="col-lg-5 ">'+
    '<label for="salaires" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Include your own at the actual rate you would have to pay someone else to do your job">Wages and salaries</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="salaires"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 ">'+
    '<label for="amortissement" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="A decline in the value of assets and allocating the cost of assets to the periods of time they were used">Depreciation </label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="amortissement"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-md-1"></div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-1 "></div>'+
    '<div class="col-lg-5 ">'+
    '<label for="loyer" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Include your rent if that is the case">Rent</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="loyer"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 ">'+
    '<label for="impots" class="col-form-label d-flex justify-content-start mb-0 pb-0">Taxes and licences</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="impots"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-1"></div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-1"></div>'+
    '<div class="col-lg-5 ">'+
    '<label for="services" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Electricity, gas, telephone, water, etc.">Utilities </label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="services"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 ">'+
    '<label for="interets" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Interest charges for money owed">Interest charges</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="interets"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-md-1"></div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-1 "></div>'+
    '<div class="col-lg-5 ">'+
    '<label for="web" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Online stores, website hosting, domain name registration">Costs of web presence</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="web"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 ">'+
    '<label for="creances" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="A loss to the business that is classified as an expense because the debt cannot be collected">Bad debts</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="creances"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-1"></div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-1"></div>'+
    '<div class="col-lg-5 ">'+
    '<label for="assurances" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="The cost of your insurance.">Insurance</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="assurances"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5">'+
    '<label for="assistance" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Accountant, lawyer, information technology specialist, etc.">Professional assistance</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="assistance"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-md-1"></div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-1"></div>'+
    '<div class="col-lg-5 form-group">'+
    '<label for="pub" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Advertising and promotional costs">Advertising</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="pub"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 form-group">'+
    '<label for="despenses" class="col-form-label d-flex justify-content-start mb-0 pb-0">Total expenses</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="despenses" readonly'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '<div class="col-md-1"></div>'+
    '</div>'+
    '<div class="row subtitle d-flex justify-content-center">'+
    'Results'+
    '</div>'+
    '<hr class="barGrey">'+
    '<div class="row">'+
    '<div class="col-lg-4 ">'+
    '<label for="profit" class="col-form-label d-flex justify-content-start mb-0 pb-0" title="Difference between your total revenue and total expenses">Profit or loss</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="profit" readonly'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '<div class="col-lg-4 ">'+
    '<label for="majoration" class="col-form-label d-flex justify-content-start mb-0 pb-0">Markup %</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="majoration" readonly'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '<div class="col-lg-4 ">'+
    '<label for="marge" class="col-form-label d-flex justify-content-start mb-0 pb-0">Gross margin %</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="marge" readonly'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-12 d-flex justify-content-center">'+
    '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"'+
    'type="reset">Reset&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>'+
    '</div>'+
    '</div>'+
    '</form>'+
    '<!-- Copyright -->'+
    '<div class="footer-copyright text-left mt-5 mb-0"><small>© 2019 Copyright:'+
    '<a href="javascript:void(0);" onclick="location.reload();"'+
    'class="text-black">calculatemyprofit.com</a></small>'+
    '</div>';
    $('#main').html(rep);
}
var vue = function (action) {
	switch (action) {
		case 'produit':
            $("#barProduit, #barMain, #barEntrep").removeClass("barActive",);
            $("#barProduit, #barMain, #barEntrep").removeClass("barInactive");
            $("#barProduit").addClass("barActive");
            $("#barMain, #barEntrep").addClass("barInactive");
            $("#navbarProduit, #navbarMain, #navbarEntrep").removeClass("active",);
            $("#navbarProduit").addClass("active");
			produit();
			break;
		case 'main':
            $("#barProduit, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduit, #barMain, #barEntrep").removeClass("barInactive");
            $("#barMain").addClass("barActive");
            $("#barProduit, #barEntrep").addClass("barInactive");
            $("#navbarProduit, #navbarMain, #navbarEntrep").removeClass("active",);
            $("#navbarMain").addClass("active");
			main();
			break;
		case 'entreprise':
            $("#barProduit, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduit, #barMain, #barEntrep").removeClass("barInactive");
            $("#barEntrep").addClass("barActive");
            $("#barMain, #barProduit").addClass("barInactive");
            $("#navbarProduit, #navbarMain, #navbarEntrep").removeClass("active",);
            $("#navbarEntrep").addClass("active");
			entreprise();
			break;
	}

}