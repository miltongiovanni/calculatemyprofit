$(document).ready(function () {
    fr();
});

function eng()
{
    view('menuen');
    view('product');
}

function fr()
{
    vue('menufr');
    vue('produit');
}
var rep = "";

function menufr() {
    rep = '<button class="navbar-toggler" type="button" data-toggle="collapse"' +
        'data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"' +
        'aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse w-100" id="navbarSupportedContent">' +
        '<!--<ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">-->' +
        '<ul class="navbar-nav d-block w-100">' +
        '<li class="nav-item" id="menuProduit">' +
        '<a class="nav-link active" href="javascript:void(0);" onClick="eng(); $(\'.collapse\').collapse(\'hide\'); " role="button">EN</a>' +
        '</li>' +
        '<li class="nav-item" id="menuProduit">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-3 col-sm-2 col-2 px-0">' +
        '<hr class="barActive" id="barProduit">' +
        '</div>' +
        '<div class="col-lg-9 col-sm-10 col-10 px-0">' +
        '<a class="nav-link " href="javascript:void(0);" id="navbarProduit" onClick="vue(\'produit\'); $(\'.collapse\').collapse(\'hide\'); " role="button">Profit Produit</a>' +
        '</div>' +
        '</div>' +
        '</li>' +
        '<li class="nav-item" id="menuMain">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-3 col-sm-2 col-2 px-0">' +
        '<hr class="barInactive" id="barMain">' +
        '</div>' +
        '<div class="col-lg-9 col-sm-10 col-10 px-0">' +
        '<a class="nav-link " href="javascript:void(0);" id="navbarMain" onClick="vue(\'principal\'); $(\'.collapse\').collapse(\'hide\');" role="button">Profit Main d\'œuvre</a>' +
        '</div>' +
        '</div>' +
        '</li>' +
        '<li class="nav-item" id="menuEntrep">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-3 col-sm-2 col-2 px-0">' +
        '<hr class="barInactive" id="barEntrep">' +
        '</div>' +
        '<div class="col-lg-9 col-sm-10 col-10 px-0">' +
        '<a class="nav-link" href="javascript:void(0);" id="navbarEntrep" onClick="vue(\'entreprise\'); $(\'.collapse\').collapse(\'hide\'); " role="button" >Profit Entreprise</a>' +
        '</div>' +
        '</div>' +
        '' +
        '</li>' +
        '</ul>' +
        '</div>';
        $('#menu').html(rep);

}

function produit() {
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
        '<h1 class="text-center py-sm-4 py-4 font-weight-bold titre-font"> <span class="greenTitle">Calcul </span>du profit d\'un Produit</h1>' +
        '<form action="" class="form-font" id="form">' +
        '<div class="form-group d-flex flex-wrap">' +
        '<div class="alert alert-danger col-12 col-md-12" id="alerte">' +
        'Vous devez choisir le prix d\'achat ou le prix de vente' +
        '<button type="button" class="close"' +
        'onclick="document.getElementById(\'alerte\').style.display = \'none\';">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start"' +
        'title="Votre coût total du produit que vous allez revendre">Coût ou prix d\'achat</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="prix" class="col-form-label d-flex justify-content-start"' +
        'title="C’est le prix que vous facturez à vos clients. Ce montant est toujours calculé, sur la base soit du pourcentage de marge brute, soit du pourcentage de majoration.">Prix de vente</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start"' +
        'title="Le pourcentage de votre coût que le prix du produit est augmenté pour déterminer le prix de vente pour vos clients.' +
        ' Par exemple, si vous avez une majoration de 50 % sur un produit dont le prix est de 10 $, votre prix de vente serait de 15 $.">Majoration de prix en %</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start"' +
        'title="Ce pourcentage est le bénéfice brut de votre produit.' +
        ' Par exemple, si vous avez un produit dont le prix de gros est de 10 $ et un prix de vente de 15 $, votre marge brute est de 33,33 %.">Marge brute en %</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="marge"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-6 d-flex justify-content-end">' +
        '<button class="btn greenButton py-2  px-3 my-4 btn-success form-font"' +
        'type="reset">Réinitialiser&nbsp;<i class="fas fa-redo-alt"></i></button>' +
        '</div>' +
        '<div class="col-6 d-flex justify-content-start">' +
        '<button class="btn blueButton py-2 px-2 px-lg-3 my-4 btn-info form-font" onclick="calculate1();"' +
        'type="button">Calculer&nbsp;&nbsp;&nbsp; <i class="fas fa-calculator"></i>&nbsp;&nbsp;</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '<p class="px-lg-4 px-3 pt-lg-4 text-justify form-font">Cette outil vous permettra calculer le prix de vente, la majoration de prix en % ou le marge bruit en %.' +
        '  Si vous voulez calculer le prix de vente vous devrez écrire la majoration de prix en %.' +
        '  Si vous voulez savoir la majoration de prix en % vous devrez entrer le prix de vente.</p>' +
        '<p class="px-lg-4 pb-lg-4 pb-2 px-3 text-justify form-font">Vous devez remplir deux champs, un champ doit être une des options de gauche.</p>';
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
        '<h1 class="text-center py-sm-4 py-4 font-weight-bold titre-font"> <span class="greenTitle">Calcul </span>du profit avec main d\'œuvre</h1>' +
        '<form action="" class="form-font" id="form">' +
        '<div class="form-group d-flex flex-wrap">' +
        '<div class="alert alert-danger col-12 col-md-12" id="alerte">' +
        'Vous devez écrire le coût main d\'œuvre par heure et le nombre de heures!' +
        '<button type="button" class="close"' +
        'onclick="document.getElementById(\'alerte\').style.display = \'none\';">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="coutm" class="col-form-label d-flex justify-content-start">Coût main d\'œuvre par heure</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="coutm"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);calculMain()" placeholder="">' +
        '</div>' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="heures" class="col-form-label d-flex justify-content-start">Nombre des heures </label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="heures"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDThH(eeparseFloatTh(this.value),2);calculMain()" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start"' +
        'title="Votre coût total de main d\'œuvre">Coût main d\'œuvre</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="" readonly>' +
        '</div>' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="prix" class="col-form-label d-flex justify-content-start"' +
        'title="C’est le prix que vous facturez à vos clients. Ce montant est toujours calculé, sur la base soit du pourcentage de marge brute, soit du pourcentage de majoration.">' +
        'Prix de vente</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start"' +
        'title="Le pourcentage de votre coût de main d\'œuvre qui est augmenté pour déterminer le prix de vente pour vos clients.' +
        ' Par exemple, si vous avez une majoration de 50 % sur un produit dont le prix est de 10 $, votre prix de vente serait de 15 $.">Majoration de prix en %</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start"' +
        'title="Ce pourcentage est le bénéfice brut de votre produit. Par exemple, si vous avez un produit dont le prix de gros est de 10 $ et un prix de vente de 15 $, votre marge brute est de 33,33 %.">' +
        'Marge brute en %</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="marge"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-6 d-flex justify-content-end">' +
        '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"' +
        'type="reset">Réinitialiser&nbsp;<i class="fas fa-redo-alt"></i></button>' +
        '</div>' +
        '<div class="col-6 d-flex justify-content-start">' +
        '<button class="btn blueButton py-2 px-3 my-4 btn-info form-font" onclick="calculate2();"' +
        'type="button">Calculer&nbsp;&nbsp; <i class="fas fa-calculator"></i>&nbsp;&nbsp;</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '<p class="px-lg-4 px-3 pt-lg-4 text-justify form-font ">Cette outil vous permettra calculer le prix de vente, la majoration de prix en % ou le marge bruit en %.' +
        '  Si vous voulez calculer le prix de vente vous devrez écrire la majoration de prix en %.' +
        '  Si vous voulez savoir la majoration de prix en % vous devrez entrer le prix de vente.</p>' +
        '<p class="px-lg-4 px-3 pb-lg-4 text-justify form-font">Vous pouvez changer le coût de main d\'œuvre par heure ou nombre de heures pour calculer le coût.' +
        '  Vous devez remplir un champs de la droite pour calculer les autres.</p>';
    $('#main').html(rep);
}

function entreprise() {
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
        '<h1 class="text-center py-sm-0 py-2 my-sm-0 font-weight-bold titre-font"> <span class="greenTitle">Calcul </span>du' +
        'profit d\'une Entreprise</h1>' +
        '' +
        '<form action="" class="form-font" id="form">' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Revenus' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="ventes" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Chiffre d\'affaires brut provenant de la vente des produits et des services?">Ventes Brutes</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="ventes"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="autres" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Montant des autres revenus tels que les intérêts de dépôts bancaires, les ristournes de titres, les loyers perçus de tiers?">Affaires hors exploitation</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="autres"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="retours" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Valeur totale des produits retournés par votre clientèle (retours) ou portés au crédit de cette dernière?">Retours</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="retours"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="revenus" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Le chiffre des ventes net plus le chiffre d\'affaires hors exploitation.">Total de vos revenus</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="revenus"' +
        'onKeyPress="return acceptNum(event)" readonly' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Dépenses' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="La somme de votre stock d\'ouverture et de vos achats moins la valeur de votre stock de clôture">Coût des produits vendus </label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="entretien" class="col-form-label d-flex justify-content-start mb-0 pb-0">Coût d\'Entretien</label>' +
        '<input type="text" class="form-control greenBorder py- form-font" id="entretien"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="salaires" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Comptez aussi le vôtre à l\'échelle de ce que vous devriez payer à quelqu\'un d\'autre pour faire votre travail">Traitements et salaires</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="salaires"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5  ">' +
        '<label for="amortissement" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Perte de valeur subie par un bien et l\'attribution du coût des biens à leur durée d\'utilisation">Amortissement</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="amortissement"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="loyer" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Incluez la valeur de votre loyer si c\'est le cas">Loyer</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="loyer"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5  ">' +
        '<label for="impots" class="col-form-label d-flex justify-content-start mb-0 pb-0">Impôts et licences</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="impots"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 px-lg-1  px-5  ">' +
        '<label for="services" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Électricité, gaz, téléphone, eau, etc.">Services publics</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="services"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="interets" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Frais d\'intérêts sur les emprunts">Frais d\'intérêts</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="interets"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="web" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Boutique en ligne, hébergement de votre site Web, enregistrement des noms de domaine">Frais présence sur le Web </label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="web"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="creances" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Créance considérée comme étant perdue définitivement.">Créances irrécouvrables</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="creances"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="assurances" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Les frais de vos assurances.">Assurances</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="assurances"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="assistance" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Comptables, avocats, spécialistes en technologie de l\'information, etc.">Assistance externe</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="assistance"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="pub" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Frais de publicité et de promotion.">Publicité</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="pub"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="despenses" class="col-form-label d-flex justify-content-start mb-0 pb-0">Total dêpenses</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="despenses" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Résultats' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-4 col-12 px-lg-1  px-5 ">' +
        '<label for="profit" class="col-form-label d-flex justify-content-start mb-0 pb-0" title="C\'est la différence entre le total de vos revenus et le total de vos dépenses">Profit ou perte</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="profit" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-4 col-12 px-lg-1  px-5 ">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start mb-0 pb-0">Majoration en %</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="majoration" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-4 col-12 px-lg-1  px-5  ">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start mb-0 pb-0">Marge brute en %</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="marge" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-12 d-flex justify-content-center">' +
        '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"' +
        'type="reset">Réinitialiser&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>' +
        '</div>' +
        '</div>' +
        '</form>';
    $('#main').html(rep);
}
var vue = function (action) {
    switch (action) {
        case 'produit':
            $("#barProduit, #barMain, #barEntrep").removeClass("barActive", );
            $("#barProduit, #barMain, #barEntrep").removeClass("barInactive");
            $("#barProduit").addClass("barActive");
            $("#barMain, #barEntrep").addClass("barInactive");
            $("#navbarProduit, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarProduit").addClass("active");
            produit();
            //$("#main").css("margin-bottom", "11%");
            break;
        case 'principal':
            $("#barProduit, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduit, #barMain, #barEntrep").removeClass("barInactive");
            $("#barMain").addClass("barActive");
            $("#barProduit, #barEntrep").addClass("barInactive");
            $("#navbarProduit, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarMain").addClass("active");
            principal();
            //$("#main").css("margin-bottom", "30px");
            break;
        case 'entreprise':
            $("#barProduit, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduit, #barMain, #barEntrep").removeClass("barInactive");
            $("#barEntrep").addClass("barActive");
            $("#barMain, #barProduit").addClass("barInactive");
            $("#navbarProduit, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarEntrep").addClass("active");
            entreprise();
            //$("#main").css("margin-bottom", "60px");
            break;
        case 'menufr':
            menufr();
            break;
    }

}

//English version

function menuen() {
    rep = '<button class="navbar-toggler" type="button" data-toggle="collapse"' +
        'data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"' +
        'aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse w-100" id="navbarSupportedContent">' +
        '<!--<ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">-->' +
        '<ul class="navbar-nav d-block w-100">' +
        '<li class="nav-item" id="menuProduct">' +
        '<a class="nav-link active" href="javascript:void(0);" onClick="fr(); $(\'.collapse\').collapse(\'hide\'); " role="button">FR</a>' +
        '</li>' +
        '<li class="nav-item" id="menuProduct">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-3 col-sm-2 col-2 px-0">' +
        '<hr class="barActive" id="barProduct">' +
        '</div>' +
        '<div class="col-lg-9 col-sm-10 col-10 px-0">' +
        '<a class="nav-link " href="javascript:void(0);" id="navbarProduct"' +
        'onClick="view(\'product\'); $(\'.collapse\').collapse(\'hide\');"' +
        'role="button">Product\'s Profit</a>' +
        '</div>' +
        '</div>' +
        '</li>' +
        '<li class="nav-item" id="menuMain">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-3 col-sm-2 col-2 px-0">' +
        '<hr class="barInactive" id="barMain">' +
        '</div>' +
        '<div class="col-lg-9 col-sm-10 col-10 px-0">' +
        '<a class="nav-link " href="javascript:void(0);" id="navbarMain"' +
        'onClick="view(\'main\'); $(\'.collapse\').collapse(\'hide\');"' +
        'role="button">Workforce\'s Profit</a>' +
        '</div>' +
        '</div>' +
        '</li>' +
        '<li class="nav-item" id="menuEntrep">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-3 col-sm-2 col-2 px-0">' +
        '<hr class="barInactive" id="barEntrep">' +
        '</div>' +
        '<div class="col-lg-9 col-sm-10 col-10 px-0">' +
        '<a class="nav-link" href="javascript:void(0);" id="navbarEntrep"' +
        'onClick="view(\'enterprise\'); $(\'.collapse\').collapse(\'hide\');"' +
        'role="button">Enterprise\'s Profit</a>' +
        '</div>' +
        '</div>' +
        '' +
        '</li>' +
        '</ul>' +
        '</div>';
        $('#menu').html(rep);
}

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
        '<form action="" class="form-font" id="form">' +
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
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start"' +
        'title="Your total wholesale cost of the product that you are going to resell.">Wholesale cost</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="prix" class="col-form-label d-flex justify-content-start"' +
        'title="This is the price you charge your customers. This amount is always calculated, based on either the entered gross margin percent or markup percent.">Selling price</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start"' +
        'title="The percentage of your wholesale cost that the product\'s price is increased by to determine the selling price for your customers.' +
        ' For example, if you have a 50% markup on a product with a wholesale cost of $10, your selling price would be $15.00.">Markup percent</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start"' +
        'title="This percentage is the gross profit for your product. For example, if you have a product that has a wholesale cost of $10 and a selling price of $15, ' +
        ' your gross margin is 33.33%.">Gross margin percent</label>' +
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
        '<p class="px-lg-4 px-3 pt-lg-4 text-justify form-font">This tool can help you to determine the selling price, the  profit margin  or the gross margin.' +
        '  If you want to calculate the selling price you should enter the profit margin or the gross margin.' +
        '  If you want to know the profit margin you have to enter the sellig price.</p>' +
        '<p class="px-lg-4 px-3 pb-2 pt-lg-4 text-justify form-font ">You should fill two fields, one field has to be one of the gauche options.</p>';
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
        '<form action="" class="form-font" id="form">' +
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
        '<label for="coutm" class="col-form-label d-flex justify-content-start">Workforce cost per hour</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="coutm"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);calculMain()" placeholder="">' +
        '</div>' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="heures" class="col-form-label d-flex justify-content-start">Number of hours </label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="heures"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDThH(eeparseFloatTh(this.value),2);calculMain()" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start"' +
        'title="Your total Workforce cost">Workforce cost</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="" readonly>' +
        '</div>' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="prix" class="col-form-label d-flex justify-content-start"' +
        'title="This is the price you charge your customers. This amount is always calculated, based on either the entered gross margin percent or markup percent.">' +
        'Selling price</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start"' +
        'title="The percentage of your workforce cost is increased by to determine the selling price for your customers.">Markup percent</label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-6 form-group px-lg-1  px-5">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start"' +
        'title="This percentage is the gross profit for your product. For example, if you have a product that has a wholesale cost of $10 and a selling price of $15, ' +
        ' your gross margin is 33.33%.">' +
        'Gross margin percent</label>' +
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
        ' If you want to calculate the selling price you will have to write the markup %. If you want to know the gross margin % you will have to enter the selling price.</p>' +
        '<p class="px-lg-4 pt-lg-4 px-3 text-justify form-font ">You can change the workforce cost per hour or the number of hours to calculate the cost. ' +
        ' You must fill in one field from the right to calculate the others.</p>';
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
        '<form action="" class="form-font" id="form">' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Revenues' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="ventes" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="The amount of gross revenue from the products or services that were sold">Gross Sales</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="ventes"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="autres" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="The amount of income from other sources like interest on bank deposits, dividends from securities or rent on property leased to others">Non-operating Income</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="autres"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="retours" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="The amount of the products returned to your customers">Returns</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="retours"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="revenus" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Your total revenue is your net sales plus your non-operating income.">Total revenue</label>' +
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
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Cost of products sold is your beginning inventory plus your purchases minus the ending inventory.">Cost of products sold </label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="entretien" class="col-form-label d-flex justify-content-start mb-0 pb-0">Maintenance cost</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="entretien"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 px-lg-1  px-5 ">' +
        '<label for="salaires" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Include your own at the actual rate you would have to pay someone else to do your job">Wages and salaries</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="salaires"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="amortissement" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="A decline in the value of assets and allocating the cost of assets to the periods of time they were used">Depreciation </label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="amortissement"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="loyer" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Include your rent if that is the case">Rent</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="loyer"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="impots" class="col-form-label d-flex justify-content-start mb-0 pb-0">Taxes and licences</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="impots"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="services" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Electricity, gas, telephone, water, etc.">Utilities </label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="services"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="interets" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Interest charges for money owed">Interest charges</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="interets"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="web" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Online stores, website hosting, domain name registration">Costs of web presence</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="web"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="creances" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="A loss to the business that is classified as an expense because the debt cannot be collected">Bad debts</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="creances"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="assurances" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="The cost of your insurance.">Insurance</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="assurances"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 px-lg-1  px-5">' +
        '<label for="assistance" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Accountant, lawyer, information technology specialist, etc.">Professional assistance</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="assistance"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="pub" class="col-form-label d-flex justify-content-start mb-0 pb-0"' +
        'title="Advertising and promotional costs">Advertising</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="pub"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5">' +
        '<label for="despenses" class="col-form-label d-flex justify-content-start mb-0 pb-0">Total expenses</label>' +
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
        '<label for="profit" class="col-form-label d-flex justify-content-start mb-0 pb-0" title="Difference between your total revenue and total expenses">Profit or loss</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="profit" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-4 px-lg-1  px-5">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start mb-0 pb-0">Markup %</label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="majoration" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-4 px-lg-1  px-5">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start mb-0 pb-0">Gross margin %</label>' +
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
            //$("#main").css("margin-bottom", "11%");
            break;
        case 'main':
            $("#barProduct, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduct, #barMain, #barEntrep").removeClass("barInactive");
            $("#barMain").addClass("barActive");
            $("#barProduct, #barEntrep").addClass("barInactive");
            $("#navbarProduct, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarMain").addClass("active");
            main();
            //$("#main").css("margin-bottom", "30px");
            break;
        case 'enterprise':
            $("#barProduct, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduct, #barMain, #barEntrep").removeClass("barInactive");
            $("#barEntrep").addClass("barActive");
            $("#barMain, #barProduct").addClass("barInactive");
            $("#navbarProduct, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarEntrep").addClass("active");
            enterprise();
            //$("#main").css("margin-bottom", "60px");
            break;
        case 'menuen':
            menuen();
            break;
    }

}