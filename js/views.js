$(document).ready(function () {
    $('[data-toggle="popover"]').popover();  
});

var rep = "";

function product() {
    rep = '<div class="d-flex justify-content-center" id="pub1" >' +
        '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
        '<!-- header-regledetrois -->' +
        '<ins class="adsbygoogle"' +
        ' style="display:inline-block;width:375px;height:90px"' +
        ' data-ad-client="ca-pub-0508437232650285"' +
        ' data-ad-slot="2107932848"></ins>' +
        '<script>' +
        '(adsbygoogle = window.adsbygoogle || []).push({});' +
        '</script>' +
        '</div>' +
        '<h1 class="text-center py-sm-4 py-4 font-weight-bold titre-font"> <span class="greenTitle">Calculate </span>product\'s profit</h1>' +
        '<form  class="form-font" id="form">' +
        '<div class="form-group d-flex flex-wrap">' +
        '<div class="alert alert-danger col-12 col-md-12" id="alerte">' +
        'You have to select either the wholesale cost or the selling price!' +
        '<button type="button" class="close"' +
        'onclick="document.getElementById(\'alerte\').style.display = \'none\';">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 col-12 form-group px-lg-1  px-5">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start align-items-baseline">  '+
        'Wholesale cost&nbsp;<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Your total wholesale cost of the product that you are going to resell."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 col-12 form-group px-lg-1  px-5">' +
        '<label for="prix" class="col-form-label d-flex justify-content-start align-items-baseline">Selling price&nbsp;<i class="fas fa-question-circle"  ' +
        'data-toggle="popover" data-placement="top" data-content="This is the price you charge your customers. This amount is always calculated, based on either the entered gross margin percent or markup percent."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 col-12 form-group px-lg-1  px-5">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start align-items-baseline">Markup percent&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="The percentage of your wholesale cost that the product\'s price is increased by to determine the selling price for your customers.' +
        ' For example, if you have a 50% markup on a product with a wholesale cost of $10, your selling price would be $15.00."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 col-12 form-group px-lg-1  px-5">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start align-items-baseline">Gross margin percent&nbsp; ' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="This percentage is the gross profit for your product. For example, if you have a product that has a wholesale cost of $10 and a selling price of $15, ' +
        ' your gross margin is 33.33%."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="marge"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-6 d-flex justify-content-end">' +
        '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"' +
        'type="reset">Reset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>' +
        '</div>' +
        '<div class="col-6 d-flex justify-content-start">' +
        '<button class="btn blueButton py-2 px-3 my-4 btn-info form-font" onclick="calculate1();"' +
        'type="button">Calculate&nbsp;&nbsp; <i class="fas fa-calculator"></i>&nbsp;&nbsp;</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '<p class="px-lg-4 px-3 pt-lg-4 text-justify form-font">This tool can help you to determine the selling price, the profit margin or the gross margin.' +
        '  If you want to calculate the selling price you should enter the wholesale cost and the profit margin or the gross margin.' +
        '  If you want to know the profit margin or the gross margin you have to enter the wholesale cost and the selling price.</p>' +
        '<p class="px-lg-4 px-3 pb-2 pt-lg-4 text-justify form-font ">You should fill two fields, one field has to be one of the left options.</p>';
    $('#main').html(rep);
}

function main() {
    
    rep = '<div class="d-flex justify-content-center" id="pub1" >' +
        '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
        '<!-- header-regledetrois -->' +
        '<ins class="adsbygoogle"' +
        ' style="display:inline-block;width:500px;height:90px"' +
        ' data-ad-client="ca-pub-0508437232650285"' +
        ' data-ad-slot="2107932848"></ins>' +
        '<script>' +
        '(adsbygoogle = window.adsbygoogle || []).push({});' +
        '</script>' +
        '</div>' +
        '<h1 class="text-center py-sm-4 py-4 font-weight-bold titre-font"> <span class="greenTitle">Calculate </span>workforce\'s profit</h1>' +
        '<form  class="form-font" id="form">' +
        '<div class="form-group d-flex flex-wrap">' +
        '<div class="alert alert-danger col-12 col-md-12" id="alerte">' +
        'You have to write the workforce cost per hour and the number of hours!' +
        '<button type="button" class="close"' +
        'onclick="document.getElementById(\'alerte\').style.display = \'none\';">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="coutm" class="col-form-label d-flex justify-content-start align-items-baseline">Workforce cost per hour&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="This is the cost of workforce per hour."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="coutm"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);calculMain()" placeholder="">' +
        '</div>' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="heures" class="col-form-label d-flex justify-content-start align-items-baseline">Number of hours&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="This is the number of hours worked."></i> </label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="heures"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDThH(eeparseFloatTh(this.value),2);calculMain()" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start align-items-baseline">Workforce cost&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Your total Workforce cost."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="" readonly>' +
        '</div>' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="prix" class="col-form-label d-flex justify-content-start align-items-baseline">Selling price&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="This is the price you charge your customers. ' + 
        ' This amount is always calculated, based on either the entered gross margin percent or markup percent."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start align-items-baseline">Markup percent&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="The percentage of your workforce cost is increased by to determine the selling price for your customers."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start align-items-baseline">Gross margin percent&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="This percentage is the gross profit for your product. ' + 
        ' For example, if you have a product that has a wholesale cost of $10 and a selling price of $15, your gross margin is 33.33%."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="marge"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-6 d-flex justify-content-end">' +
        '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"' +
        'type="reset">Reset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>' +
        '</div>' +
        '<div class="col-6 d-flex justify-content-start">' +
        '<button class="btn blueButton py-2 px-3 my-4 btn-info form-font" onclick="calculate2();"' +
        'type="button">Calculate&nbsp;&nbsp; <i class="fas fa-calculator"></i>&nbsp;&nbsp;</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '<p class="px-lg-4 pt-lg-4 px-3 text-justify form-font  ">This tool will allow you to calculate the selling price, the markup % or the gross margin %.' +
        ' You can change the workforce cost per hour or the number of hours to calculate the cost.</p>' +
        '<p class="px-lg-4 pt-lg-4 px-3 text-justify form-font ">If you want to calculate the selling price and the gross margin you have to write the markup %. '+
        ' If you want to know the gross margin % and the markup % you have to enter the selling price. ' +
        ' </p>';
    $('#main').html(rep);
}

function enterprise() {
    rep = '<div class="d-flex justify-content-center" id="pub1" >' +
        '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
        '<!-- header-regledetrois -->' +
        '<ins class="adsbygoogle"' +
        ' style="display:inline-block;width:500px;height:90px"' +
        ' data-ad-client="ca-pub-0508437232650285"' +
        ' data-ad-slot="2107932848"></ins>' +
        '<script>' +
        '(adsbygoogle = window.adsbygoogle || []).push({});' +
        '</script>' +
        '</div>' +
        '<h1 class="text-center py-sm-2 py-2 my-sm-0 font-weight-bold titre-font"> <span class="greenTitle">Calculate </span>enterprise\'s profit</h1>' +
        '' +
        '<form  class="form-font" id="form">' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Revenues' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="ventes" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Gross Sales&nbsp;' +
        '<i class="fas fa-question-circle"  data-toggle="popover" data-placement="top" data-content="The amount of gross revenue from the products or services that were sold."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="ventes"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="autres" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Non-operating Income&nbsp; ' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="The amount of income from other sources like interest on bank deposits, dividends from securities or rent on property leased to others."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="autres"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="retours" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Returns&nbsp; ' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="The amount of the products returned to your customers."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="retours"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="revenus" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Total revenue&nbsp; ' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Your total revenue is your net sales plus your non-operating income."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="revenus"' +
        'onKeyPress="return acceptNum(event)" readonly' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Expenses' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Cost of products sold &nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Cost of products sold is your beginning inventory plus your purchases minus the ending inventory."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="entretien" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Maintenance cost&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="This is the maintenance cost of your enterprise."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="entretien"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="salaires" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Wages and salaries&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Include your own at the actual rate you would have to pay someone else to do your job."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="salaires"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="amortissement" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Depreciation&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="A decline in the value of assets and allocating the cost of assets to the periods of time they were used."></i> </label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="amortissement"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="loyer" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Rent&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Include your rent if that is the case."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="loyer"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="impots" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Taxes and licences&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Include the amount you pay for taxes and licences."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="impots"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="services" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Utilities &nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Electricity, gas, telephone, water, etc."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="services"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="interets" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline"' +
        '>Interest charges&nbsp;<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Interest charges for money owed."></i> </label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="interets"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="web" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Costs of web presence&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Online stores, website hosting, domain name registration."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="web"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="creances" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Bad debts&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="A loss to the business that is classified as an expense because the debt cannot be collected."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="creances"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="assurances" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Insurance&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="The cost of your insurance."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="assurances"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="assistance" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Professional assistance&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Accountant, lawyer, information technology specialist, etc."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="assistance"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="pub" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Advertising&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Advertising and promotional costs."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="pub"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="despenses" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Total expenses&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Your total expenses."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="despenses" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Results' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-4 px-lg-1  px-5">' +
        '<label for="profit" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Profit or loss&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Difference between your total revenue and total expenses."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="profit" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-4 px-lg-1  px-5">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Markup %&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="The percentage of your profit in relation to your expenses."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="majoration" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-4 px-lg-1  px-5">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start mb-0 pb-0 align-items-baseline">Gross margin %&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="This percentage is the gross profit for your enterprise in relation to your revenue total."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="marge" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-12 d-flex justify-content-center">' +
        '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"' +
        'type="reset">Reset&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>' +
        '</div>' +
        '</div>' +
        '</form>';
    $('#main').html(rep);
}
var view = function (action) {
    switch (action) {
        case 'product':
            $("#barProduct, #barMain, #barEntrep").removeClass("barActive", );
            $("#barProduct, #barMain, #barEntrep").removeClass("barInactive");
            $("#barProduct").addClass("barActive");
            $("#barMain, #barEntrep").addClass("barInactive");
            $("#navbarProduct, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarProduct").addClass("active");
            product();
            $(document).ready(function () {
                $('[data-toggle="popover"]').popover(); 
            });
            break;
        case 'main':
            $("#barProduct, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduct, #barMain, #barEntrep").removeClass("barInactive");
            $("#barMain").addClass("barActive");
            $("#barProduct, #barEntrep").addClass("barInactive");
            $("#navbarProduct, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarMain").addClass("active");
            main();
            $(document).ready(function () {
                $('[data-toggle="popover"]').popover();
            });
            break;
        case 'enterprise':
            $("#barProduct, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduct, #barMain, #barEntrep").removeClass("barInactive");
            $("#barEntrep").addClass("barActive");
            $("#barMain, #barProduct").addClass("barInactive");
            $("#navbarProduct, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarEntrep").addClass("active");
            enterprise();
            $(document).ready(function () {
                $('[data-toggle="popover"]').popover(); 
            });
            break;

    }

}