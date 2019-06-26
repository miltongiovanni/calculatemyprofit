$(document).ready(function () {
    $('[data-toggle="popover"]').popover();   
});

var rep = "";

function producto() {
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
        '<h1 class="text-center py-sm-4 py-4 font-weight-bold titre-font"> <span class="greenTitle">Calcular </span>utilidad de un Producto</h1>' +
        '<form  class="form-font" id="form">' +
        '<div class="form-group d-flex flex-wrap">' +
        '<div class="alert alert-danger col-12 col-md-12" id="alerte">' +
        'Debe seleccionar el precio de compra o el precio de venta' +
        '<button type="button" class="close"' +
        'onclick="document.getElementById(\'alerte\').style.display = \'none\';">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start align-items-baseline">Costo/precio de compra&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Costo total del producto que quiere vender."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="prix" class="col-form-label d-flex justify-content-start align-items-baseline">Precio de venta&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Es el precio que va a facturar a sus clientes. Éste monto es siempre calculado, ya sea en función del margen bruto o del porcentaje de incremento."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start align-items-baseline">Incremento del precio %&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="El porcentaje de incremento del costo utilizado para determinar el precio de venta a sus clientes.' +
        ' Por ejemplo, si usted tiene un incremento de 50% sobre un producto cuyo precio es 10$, su precio de venta sería de 15$."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start align-items-baseline">Margen bruto en %&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Éste porcentaje es el beneficio bruto de su producto.' +
        ' Por ejemolo, si usted tiene un producto cuyo costo es de 10$ y el precio de venta es de 15$, su margen bruto es de 33,33 %."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="marge"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-6 d-flex justify-content-end">' +
        '<button class="btn greenButton py-2  px-3 my-4 btn-success form-font"' +
        'type="reset">Reiniciar&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>' +
        '</div>' +
        '<div class="col-6 d-flex justify-content-start">' +
        '<button class="btn blueButton py-2 px-2 px-lg-3 my-4 btn-info form-font" onclick="calculate1();"' +
        'type="button">Calcular&nbsp;&nbsp;&nbsp; <i class="fas fa-calculator"></i>&nbsp;</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '<p class="px-lg-4 px-3 pt-lg-4 text-justify form-font">Ésta herramienta le permitirá calcular el precio de venta, el incremento del precio en % o el margen bruto en %.' +
        '  Debe llenar dos campos, uno de los cuáles debe ser una de las opciones de la izquierda.</p>' +
        '<p class="px-lg-4 px-3 pb-lg-4 text-justify form-font">' +'Si quiere conocer el incremento del precio en % y el margen bruto en % debe indicar el precio de venta.'+
        ' Si quiere calcular el precio de venta y el margen bruto en % debe indicar el incremento del precio en %.  Si quiere saber el precio de venta y el incremento del precio en % debe indicar el margen bruto en %.</p>';
    $('#main').html(rep);
}

function principal() {
    rep = '<div class="d-flex justify-content-center" id="pub1" >' +
        '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
        '<!-- header-regledetrois -->' +
        '<ins class="adsbygoogle"' +
        'style="display:inline-block;width:375px;height:90px"' +
        'data-ad-client="ca-pub-0508437232650285"' +
        'data-ad-slot="2107932848"></ins>' +
        '<script>' +
        '(adsbygoogle = window.adsbygoogle || []).push({});' +
        '</script>' +
        '</div>' +
        '<h1 class="text-center py-sm-4 py-4 font-weight-bold titre-font"> <span class="greenTitle">Calcular </span>utilidad con mano de obra</h1>' +
        '<form  class="form-font" id="form">' +
        '<div class="form-group d-flex flex-wrap">' +
        '<div class="alert alert-danger col-12 col-md-12" id="alerte">' +
        'Debe entrar el costo de mano de obra por hora y el número de horas!' +
        '<button type="button" class="close"' +
        'onclick="document.getElementById(\'alerte\').style.display = \'none\';">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="coutm" class="col-form-label d-flex justify-content-start align-items-baseline">Costo mano de obra por hora&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Su costo de mano de obra por hora."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="coutm"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);calculMain()" placeholder="">' +
        '</div>' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="heures" class="col-form-label d-flex justify-content-start align-items-baseline">Número de horas&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Su número de horas totales."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="heures"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDThH(eeparseFloatTh(this.value),2);calculMain()" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start align-items-baseline">Costo mano de obra&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Costo total de mano de obra."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="" readonly>' +
        '</div>' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="prix" class="col-form-label d-flex justify-content-start align-items-baseline">Precio de venta&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Es el precio que va a facturar a sus clientes. Éste monto es siempre calculado, ya sea en función del margen bruto o del porcentaje de incremento."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start align-items-baseline">Incremento del precio en %&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="El porcentaje de incremento del costo utilizado para determinar el precio de venta a sus clientes.' +
        ' Por ejemplo, si usted tiene un incremento de 50% sobre el costo de mano de obra cuyo valor es 10$, su precio de venta sería de 15$."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start align-items-baseline">Margen bruto en %&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Éste porcentaje es el beneficio bruto de su producto.' +
        ' Por ejemolo, si su mano de obra tiene un costo es de 10$ y el precio de venta es de 15$, su margen bruto es de 33,33 %."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="marge"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-6 d-flex justify-content-end">' +
        '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"' +
        'type="reset">Reiniciar&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>' +
        '</div>' +
        '<div class="col-6 d-flex justify-content-start">' +
        '<button class="btn blueButton py-2 px-3 my-4 btn-info form-font" onclick="calculate2();"' +
        'type="button">Calcular&nbsp;&nbsp; <i class="fas fa-calculator"></i>&nbsp;&nbsp;</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '<p class="px-lg-4 px-3 pt-lg-4 text-justify form-font ">Ésta herramienta le permitirá calcular el precio de venta, el incremento del precio en % o el margen bruto en %.' +
        '  Puede cambiar el costo de mano de obra pour hora o el número de horas para calcular el costo total de mano de obra.</p>' +
        '<p class="px-lg-4 px-3 pb-lg-4 text-justify form-font">' +'Si quiere conocer el incremento del precio en % y el margen bruto en % debe indicar el precio de venta.'+
        ' Si quiere calcular el precio de venta y el margen bruto en % debe indicar el incremento del precio en %.  Si quiere saber el precio de venta y el incremento del precio en % debe indicar el margen bruto en %.</p>';
    $('#main').html(rep);
}

function empresa() {
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
        '<h1 class="text-center py-sm-0 py-2 my-sm-0 font-weight-bold titre-font"> <span class="greenTitle">Calcular </span>utilidad de una empresa</h1>' +
        '<form  class="form-font" id="form">' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Ingresos' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="ventes" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Ventas Brutas&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Cifra de los ingresos brutos procedentes de la venta de productos o de servicios."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="ventes"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="autres" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Ingresos no operativos&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Monto de otros ingresos procedentes de otras fuentes, como por ejemplo, intereses derivados de depósitos, dividendos procedentes de valores o alquileres de propiedades arrendadas a terceros."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="autres"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="retours" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Devoluciones&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Valor total de los productos devueltos/abonados a los clientes."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="retours"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="revenus" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Ingresos totales&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Los ingresos totales corresponden a las ventas netas más los ingresos no operativos."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="revenus"' +
        'onKeyPress="return acceptNum(event)" readonly' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Gastos' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Costo inventario&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Corresponde al inventario inicial más las compras menos el inventario final."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="entretien" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Costo de mantenimiento&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Es el valor que paga pour el manteminento de la empresa."></i></label>' +
        '<input type="text" class="form-control greenBorder py- form-font" id="entretien"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="salaires" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Sueldos y salarios&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Se incluye su propio sueldo al precio real que tendría que pagar a un tercero para que desempeñara su trabajo."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="salaires"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5  ">' +
        '<label for="amortissement" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Depreciación&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Reducción del valor de activos y la distribución del coste de los activos en los periodos en que se utilizaron."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="amortissement"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="loyer" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Arriendo&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Incluya el valor del arriendo si es el caso."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="loyer"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5  ">' +
        '<label for="impots" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Impuestos y licencias&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="El valor que usted paga por los impuestos y las licencias."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="impots"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5  ">' +
        '<label for="services" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Servicios públicos&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Luz, gas, teléfono, agua, etc."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="services"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="interets" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Gastos de interés&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Gastos de interés por capital adeudado."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="interets"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="web" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Gastos precencia Web&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Tiendas en línea, alojamiento de sitios Web, registro de nombre de un dominio."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="web"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="creances" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Deudas incobrables&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Pérdida para la empresa que se clasifica como un gasto puesto que la deuda no puede cobrarse."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="creances"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="assurances" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Pólizas de seguros&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Los gastos de sus pólizas de seguros."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="assurances"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="assistance" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Asesoría externa&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Contador, abogado, especialista en tecnologías de la información, etc."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="assistance"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="pub" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Publicidad&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Gastos promocionales y de publicidad."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="pub"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5  form-group px-lg-1  px-5 ">' +
        '<label for="despenses" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Gastos totales&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-placement="top" data-content="Es el total de sus gastos."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="despenses" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Resultados' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-4 col-12 px-lg-1  px-5 ">' +
        '<label for="profit" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Utilidad o pérdida&nbsp;<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Es la diferencia entre el total de sus ingresos y el total de sus gastos."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="profit" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-4 col-12 px-lg-1  px-5 ">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Incremento en %&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Porcentaje de utilidad con respecto a sus gastos."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="majoration" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-4 col-12 px-lg-1  px-5  ">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Margen bruto en %&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Éste porcentaje es la utilidad bruta de su empresa con respecto a sus ingresos."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="marge" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-12 d-flex justify-content-center">' +
        '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"' +
        'type="reset">Reiniciar&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>' +
        '</div>' +
        '</div>' +
        '</form>';
    $('#main').html(rep);
}
var vista = function (action) {
    switch (action) {
        case 'producto':
            $("#barProduit, #barMain, #barEntrep").removeClass("barActive", );
            $("#barProduit, #barMain, #barEntrep").removeClass("barInactive");
            $("#barProduit").addClass("barActive");
            $("#barMain, #barEntrep").addClass("barInactive");
            $("#navbarProduit, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarProduit").addClass("active");
            producto();
            $(document).ready(function () {
                $('[data-toggle="popover"]').popover();   
            });
            break;
        case 'principal':
            $("#barProduit, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduit, #barMain, #barEntrep").removeClass("barInactive");
            $("#barMain").addClass("barActive");
            $("#barProduit, #barEntrep").addClass("barInactive");
            $("#navbarProduit, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarMain").addClass("active");
            principal();
            $(document).ready(function () {
                $('[data-toggle="popover"]').popover();   
            });
            break;
        case 'empresa':
            $("#barProduit, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduit, #barMain, #barEntrep").removeClass("barInactive");
            $("#barEntrep").addClass("barActive");
            $("#barMain, #barProduit").addClass("barInactive");
            $("#navbarProduit, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarEntrep").addClass("active");
            empresa();
            $(document).ready(function () {
                $('[data-toggle="popover"]').popover();   
            });
            break;
    }

}