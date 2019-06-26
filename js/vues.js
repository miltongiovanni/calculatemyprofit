$(document).ready(function () {
    $('[data-toggle="popover"]').popover();   
});

var rep = "";

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
        '<form  class="form-font" id="form">' +
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
        '<label for="cout" class="col-form-label d-flex justify-content-start align-items-baseline">Coût ou prix d\'achat&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Votre coût total du produit que vous allez revendre."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="prix" class="col-form-label d-flex justify-content-start align-items-baseline">Prix de vente&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="C’est le prix que vous facturez à vos clients. Ce montant est toujours calculé, sur la base soit du pourcentage de marge brute, soit du pourcentage de majoration."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start align-items-baseline">Majoration de prix en %&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Le pourcentage de votre coût que le prix du produit est augmenté pour déterminer le prix de vente pour vos clients.' +
        ' Par exemple, si vous avez une majoration de 50 % sur un produit dont le prix est de 10 $, votre prix de vente serait de 15 $."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 col-12 px-lg-1  px-5 form-group">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start align-items-baseline">Marge brute en %&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Ce pourcentage est le bénéfice brut de votre produit.' +
        ' Par exemple, si vous avez un produit dont le prix de gros est de 10 $ et un prix de vente de 15 $, votre marge brute est de 33,33 %."></i></label>' +
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
        '  Si vous voulez calculer le prix de vente et le marge bruit vous devrez écrire la majoration de prix en %.' +
        '  Si vous voulez savoir la majoration de prix en % et la majoration de prix en % vous devrez entrer le prix de vente.</p>' +
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
        '<form  class="form-font" id="form">' +
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
        '<label for="coutm" class="col-form-label d-flex justify-content-start align-items-baseline">Coût main d\'œuvre par heure&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Votre coût de main d\'œuvre par heure."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="coutm"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);calculMain()" placeholder="">' +
        '</div>' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="heures" class="col-form-label d-flex justify-content-start align-items-baseline">Nombre des heures&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Votre nombre total des heures."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="heures"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDThH(eeparseFloatTh(this.value),2);calculMain()" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start align-items-baseline">Coût main d\'œuvre&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Votre coût total de main d\'œuvre."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="" readonly>' +
        '</div>' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="prix" class="col-form-label d-flex justify-content-start align-items-baseline">Prix de vente&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="C’est le prix que vous facturez à vos clients. Ce montant est toujours calculé, sur la base soit du pourcentage de marge brute, soit du pourcentage de majoration."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start align-items-baseline">Majoration de prix en %&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Le pourcentage de votre coût de main d\'œuvre qui est augmenté pour déterminer le prix de vente pour vos clients.' +
        ' Par exemple, si vous avez une majoration de 50 % sur un produit dont le prix est de 10 $, votre prix de vente serait de 15 $."></i></label>' +
        '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-6 px-lg-1  px-5 form-group">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start align-items-baseline">Marge brute en %&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Ce pourcentage est le bénéfice brut de votre produit. Par exemple, si vous avez un produit dont le prix de gros est de 10 $ et un prix de vente de 15 $, votre marge brute est de 33,33 %."></i></label>' +
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
        '<form  class="form-font" id="form">' +
        '<div class="d-flex flex-wrap subtitle d-flex justify-content-center">' +
        'Revenus' +
        '</div>' +
        '<hr class="barGrey">' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="ventes" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Ventes Brutes&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Chiffre d\'affaires brut provenant de la vente des produits et des services."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="ventes"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="autres" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Affaires hors exploitation&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Montant des autres revenus tels que les intérêts de dépôts bancaires, les ristournes de titres, les loyers perçus de tiers."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="autres"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="retours" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Retours&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Valeur totale des produits retournés par votre clientèle (retours) ou portés au crédit de cette dernière."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="retours"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="revenus" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Total de vos revenus&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Le chiffre des ventes net plus le chiffre d\'affaires hors exploitation."></i></label>' +
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
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="cout" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Coût produits vendus &nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="La somme de votre stock d\'ouverture et de vos achats moins la valeur de votre stock de clôture."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="cout"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="entretien" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Coût d\'Entretien&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="C\'est la valeur que vous payez pour l\'entretien de l\'entreprise."></i></label>' +
        '<input type="text" class="form-control greenBorder py- form-font" id="entretien"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="salaires" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Traitements et salaires&nbsp;' +
        '<i class="fas fa-question-circle"  data-toggle="popover" data-placement="top" data-content="Comptez aussi le vôtre à l\'échelle de ce que vous devriez payer à quelqu\'un d\'autre pour faire votre travail."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="salaires"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5  ">' +
        '<label for="amortissement" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Amortissement&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Perte de valeur subie par un bien et l\'attribution du coût des biens à leur durée d\'utilisation."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="amortissement"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="loyer" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Loyer&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Incluez la valeur de votre loyer si c\'est le cas."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="loyer"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5  ">' +
        '<label for="impots" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Impôts et licences&nbsp;'+
        '<i class="fas fa-question-circle"  data-toggle="popover" data-placement="top" data-content="La valeur que vous payez pour les impôts et les licences."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="impots"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5  ">' +
        '<label for="services" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Services publics&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Électricité, gaz, téléphone, eau, etc."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="services"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="interets" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Frais d\'intérêts&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Frais d\'intérêts sur les emprunts."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="interets"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1 "></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="web" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Frais présence Web &nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Boutique en ligne, hébergement de votre site Web, enregistrement des noms de domaine."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="web"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="creances" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Créances irrécouvrables&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Créance considérée comme étant perdue définitivement."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="creances"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="assurances" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Assurances&nbsp;' +
        '<i class="fas fa-question-circle"  data-toggle="popover" data-placement="top" data-content="Les frais de vos assurances."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="assurances"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="assistance" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Assistance externe&nbsp;' +
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Comptables, avocats, spécialistes en technologie de l\'information, etc."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="assistance"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-md-1"></div>' +
        '</div>' +
        '<div class="d-flex flex-wrap">' +
        '<div class="col-lg-1"></div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="pub" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Publicité&nbsp;' +
        '<i class="fas fa-question-circle"  data-toggle="popover" data-placement="top" data-content="Frais de publicité et de promotion."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="pub"' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">' +
        '</div>' +
        '<div class="col-lg-5 form-group px-lg-1  px-5 ">' +
        '<label for="despenses" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Total dêpenses&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="C\'est le total de vos dêpenses."></i></label>' +
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
        '<label for="profit" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Profit ou perte&nbsp;<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="C\'est la différence entre le total de vos revenus et le total de vos dépenses."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="profit" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-4 col-12 px-lg-1  px-5 ">' +
        '<label for="majoration" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Majoration en %&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Le pourcentage de votre profit par rapport vos dêpenses."></i></label>' +
        '<input type="text" class="form-control greenBorder py-2 form-font" id="majoration" readonly' +
        'onKeyPress="return acceptNum(event)"' +
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">' +
        '</div>' +
        '<div class="col-lg-4 col-12 px-lg-1  px-5  ">' +
        '<label for="marge" class="col-form-label d-flex justify-content-start mb-0 pb-0  align-items-baseline">Marge brute en %&nbsp;'+
        '<i class="fas fa-question-circle" data-toggle="popover" data-placement="top" data-content="Ce pourcentage est le bénéfice brut de votre entreprise par rapport le total de vos revenus."></i></label>' +
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
        case 'entreprise':
            $("#barProduit, #barMain, #barEntrep").removeClass("barActive");
            $("#barProduit, #barMain, #barEntrep").removeClass("barInactive");
            $("#barEntrep").addClass("barActive");
            $("#barMain, #barProduit").addClass("barInactive");
            $("#navbarProduit, #navbarMain, #navbarEntrep").removeClass("active", );
            $("#navbarEntrep").addClass("active");
            entreprise();
            $(document).ready(function () {
                $('[data-toggle="popover"]').popover();   
            });
            break;
    }

}