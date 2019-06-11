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
        '<h1 class="text-left py-sm-4 font-weight-bold titre-font"> <span class="greenTitle">Calcul </span>du profit d\'un Produit</h1>'+
        '<form action="" class="form-font" id="form">'+
        '<div class="form-group row">'+
        '<div class="alert alert-danger col-12 col-md-12" id="alerte">'+
        'Vous devez choisir le prix d\'achat ou le prix de vente'+
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
        'title="Votre coût total du produit que vous allez revendre">Coût ou prix d\'achat</label>'+
        '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"'+
        'onKeyPress="return acceptNum(event)"'+
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
        '</div>'+
        '<div class="col-lg-5 form-group">'+
        '<label for="majoration" class="col-form-label d-flex justify-content-start"'+
        'title="Le pourcentage de votre coût que le prix du produit est augmenté pour déterminer le prix de vente pour vos clients.' + 
        ' Par exemple, si vous avez une majoration de 50 % sur un produit dont le prix est de 10 $, votre prix de vente serait de 15 $.">Majoration de prix en %</label>'+
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
        'title="C’est le prix que vous facturez à vos clients. Ce montant est toujours calculé, sur la base soit du pourcentage de marge brute, soit du pourcentage de majoration.">Prix de vente</label>'+
        '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"'+
        'onKeyPress="return acceptNum(event)"'+
        'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
        '</div>'+
        '<div class="col-lg-5 form-group">'+
        '<label for="marge" class="col-form-label d-flex justify-content-start"'+
        'title="Ce pourcentage est le bénéfice brut de votre produit.' +
        ' Par exemple, si vous avez un produit dont le prix de gros est de 10 $ et un prix de vente de 15 $, votre marge brute est de 33,33 %.">Marge brute en %</label>'+
        '<input type="text" class="form-control greenBorder py-4 form-font" id="marge"'+
        'onKeyPress="return acceptNum(event)"'+
        'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">'+
        '</div>'+
        '<div class="col-md-1"></div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-6 d-flex justify-content-end">'+
        '<button class="btn greenButton py-2  px-3 my-4 btn-success form-font"'+
        'type="reset">Réinitialiser&nbsp;<i class="fas fa-redo-alt"></i></button>'+
        '</div>'+
        '<div class="col-6 d-flex justify-content-start">'+
        '<button class="btn blueButton py-2 px-2 px-lg-3 my-4 btn-info form-font" onclick="calculate1();"'+
        'type="button">Calculer&nbsp;&nbsp;&nbsp; <i class="fas fa-calculator"></i>&nbsp;&nbsp;</button>'+
        '</div>'+
        '</div>'+
        '</form>'+
        '<p class="px-lg-4 pt-lg-4 text-justify form-font">Cette outil vous permettra calculer le prix de vente, la majoration de prix en % ou le marge bruit en %.'+
        '  Si vous voulez calculer le prix de vente vous devrez écrire la majoration de prix en %.'+
        '  Si vous voulez savoir la majoration de prix en % vous devrez entrer le prix de vente.</p>'+
        '<p class="px-lg-4 pb-lg-4 pb-2 text-justify mb-5 form-font">Vous devez remplir deux champs, un champ doit être une des options de gauche.</p>'+
        '<!-- Copyright -->'+
        '<div class="footer-copyright text-left mt-5 mb-0 font-footer"><small>© 2019 Copyright:'+
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
    '<h1 class="text-left py-sm-4 font-weight-bold titre-font"> <span class="greenTitle">Calcul </span>du profit avec main d\'œuvre</h1>'+
    '<form action="" class="form-font" id="form">'+
    '<div class="form-group row">'+
    '<div class="alert alert-danger col-12 col-md-12" id="alerte">'+
    'Vous devez écrire le coût main d\'œuvre par heure et le nombre de heures!'+
    '<button type="button" class="close"'+
    'onclick="document.getElementById(\'alerte\').style.display = \'none\';">'+
    '<span aria-hidden="true">&times;</span>'+
    '</button>'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-6 form-group">'+
    '<label for="coutm" class="col-form-label d-flex justify-content-start">Coût main d\'œuvre par heure</label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="coutm"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);calculMain()" placeholder="">'+
    '</div>'+
    '<div class="col-lg-6 form-group">'+
    '<label for="heures" class="col-form-label d-flex justify-content-start">Nombre des heures </label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="heures"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDThH(eeparseFloatTh(this.value),2);calculMain()" placeholder="">'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-6 form-group">'+
    '<label for="cout" class="col-form-label d-flex justify-content-start"'+
    'title="Votre coût total de main d\'œuvre">Coût main d\'œuvre</label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="cout"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="" readonly>'+
    '</div>'+
    '<div class="col-lg-6 form-group">'+
    '<label for="prix" class="col-form-label d-flex justify-content-start"'+
    'title="C’est le prix que vous facturez à vos clients. Ce montant est toujours calculé, sur la base soit du pourcentage de marge brute, soit du pourcentage de majoration.">'+
    'Prix de vente</label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="prix"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-6 form-group">'+
    '<label for="majoration" class="col-form-label d-flex justify-content-start"'+
    'title="Le pourcentage de votre coût de main d\'œuvre qui est augmenté pour déterminer le prix de vente pour vos clients.' + 
    ' Par exemple, si vous avez une majoration de 50 % sur un produit dont le prix est de 10 $, votre prix de vente serait de 15 $.">Majoration de prix en %</label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="majoration"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">'+
    '</div>'+
    '<div class="col-lg-6 form-group">'+
    '<label for="marge" class="col-form-label d-flex justify-content-start"'+
    'title="Ce pourcentage est le bénéfice brut de votre produit. Par exemple, si vous avez un produit dont le prix de gros est de 10 $ et un prix de vente de 15 $, votre marge brute est de 33,33 %.">'+
    'Marge brute en %</label>'+
    '<input type="text" class="form-control greenBorder py-4 form-font" id="marge"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayPercentND(eeparsePercent(this.value),2);" placeholder="">'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-6 d-flex justify-content-end">'+
    '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"'+
    'type="reset">Réinitialiser&nbsp;<i class="fas fa-redo-alt"></i></button>'+
    '</div>'+
    '<div class="col-6 d-flex justify-content-start">'+
    '<button class="btn blueButton py-2 px-3 my-4 btn-info form-font" onclick="calculate2();"'+
    'type="button">Calculer&nbsp;&nbsp; <i class="fas fa-calculator"></i>&nbsp;&nbsp;</button>'+
    '</div>'+
    '</div>'+
    '</form>'+
    '<p class="px-lg-4 pt-lg-4 text-justify form-font ">Cette outil vous permettra calculer le prix de vente, la majoration de prix en % ou le marge bruit en %.'+
    '  Si vous voulez calculer le prix de vente vous devrez écrire la majoration de prix en %.'+
    '  Si vous voulez savoir la majoration de prix en % vous devrez entrer le prix de vente.</p>'+
    '<p class="px-lg-4 pb-lg-4 text-justify mb-5 form-font">Vous pouvez changer le coût de main d\'œuvre par heure ou nombre de heures pour calculer le coût.'+
    '  Vous devez remplir un champs de la droite pour calculer les autres.</p>'+
    ''+
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
    '<h1 class="text-left py-sm-0 py-2 my-sm-0 font-weight-bold titre-font"> <span class="greenTitle">Calcul </span>du'+
    'profit d\'une Entreprise</h1>'+
    ''+
    '<form action="" class="form-font" id="form">'+
    '<div class="row subtitle d-flex justify-content-center">'+
    'Revenus'+
    '</div>'+
    '<hr class="barGrey">'+
    '<div class="row">'+
    '<div class="col-lg-1 "></div>'+
    '<div class="col-lg-5">'+
    '<label for="ventes" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Chiffre d\'affaires brut provenant de la vente des produits et des services?">Ventes Brutes</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="ventes"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 ">'+
    '<label for="autres" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Montant des autres revenus tels que les intérêts de dépôts bancaires, les ristournes de titres, les loyers perçus de tiers?">Affaires hors exploitation</label>'+
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
    'title="Valeur totale des produits retournés par votre clientèle (retours) ou portés au crédit de cette dernière?">Retours</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="retours"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 form-group">'+
    '<label for="revenus" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Le chiffre des ventes net plus le chiffre d\'affaires hors exploitation.">Total de vos revenus</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="revenus"'+
    'onKeyPress="return acceptNum(event)" readonly'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '<div class="col-md-1"></div>'+
    '</div>'+
    '<div class="row subtitle d-flex justify-content-center">'+
    'Dépenses'+
    '</div>'+
    '<hr class="barGrey">'+
    '<div class="row">'+
    '<div class="col-lg-1 "></div>'+
    '<div class="col-lg-5">'+
    '<label for="cout" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="La somme de votre stock d\'ouverture et de vos achats moins la valeur de votre stock de clôture">Coût des produits vendus </label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="cout"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5">'+
    '<label for="entretien" class="col-form-label d-flex justify-content-start mb-0 pb-0">Coût d\'Entretien</label>'+
    '<input type="text" class="form-control greenBorder py- form-font" id="entretien"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-1"></div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-lg-1"></div>'+
    '<div class="col-lg-5 ">'+
    '<label for="salaires" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Comptez aussi le vôtre à l\'échelle de ce que vous devriez payer à quelqu\'un d\'autre pour faire votre travail">Traitements et salaires</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="salaires"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 ">'+
    '<label for="amortissement" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Perte de valeur subie par un bien et l\'attribution du coût des biens à leur durée d\'utilisation">Amortissement</label>'+
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
    'title="Incluez la valeur de votre loyer si c\'est le cas">Loyer</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="loyer"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 ">'+
    '<label for="impots" class="col-form-label d-flex justify-content-start mb-0 pb-0">Impôts et licences</label>'+
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
    'title="Électricité, gaz, téléphone, eau, etc.">Services publics</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="services"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 ">'+
    '<label for="interets" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Frais d\'intérêts sur les emprunts">Frais d\'intérêts</label>'+
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
    'title="Boutique en ligne, hébergement de votre site Web, enregistrement des noms de domaine">Frais présence sur le Web </label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="web"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 ">'+
    '<label for="creances" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Créance considérée comme étant perdue définitivement.">Créances irrécouvrables</label>'+
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
    'title="Les frais de vos assurances.">Assurances</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="assurances"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5">'+
    '<label for="assistance" class="col-form-label d-flex justify-content-start mb-0 pb-0"'+
    'title="Comptables, avocats, spécialistes en technologie de l\'information, etc.">Assistance externe</label>'+
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
    'title="Frais de publicité et de promotion.">Publicité</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="pub"'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2); calcul3();" placeholder="">'+
    '</div>'+
    '<div class="col-lg-5 form-group">'+
    '<label for="despenses" class="col-form-label d-flex justify-content-start mb-0 pb-0">Total dêpenses</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="despenses" readonly'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '<div class="col-md-1"></div>'+
    '</div>'+
    '<div class="row subtitle d-flex justify-content-center">'+
    'Résultats'+
    '</div>'+
    '<hr class="barGrey">'+
    '<div class="row">'+
    '<div class="col-lg-4 ">'+
    '<label for="profit" class="col-form-label d-flex justify-content-start mb-0 pb-0" title="C\'est la différence entre le total de vos revenus et le total de vos dépenses">Profit ou perte</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="profit" readonly'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '<div class="col-lg-4 ">'+
    '<label for="majoration" class="col-form-label d-flex justify-content-start mb-0 pb-0">Majoration en %</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="majoration" readonly'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '<div class="col-lg-4 ">'+
    '<label for="marge" class="col-form-label d-flex justify-content-start mb-0 pb-0">Marge brute en %</label>'+
    '<input type="text" class="form-control greenBorder py-2 form-font" id="marge" readonly'+
    'onKeyPress="return acceptNum(event)"'+
    'onchange="this.value=eedisplayFloatNDTh(eeparseFloatTh(this.value),2);" placeholder="">'+
    '</div>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-12 d-flex justify-content-center">'+
    '<button class="btn greenButton py-2 px-3 my-4 btn-success form-font"'+
    'type="reset">Réinitialiser&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-redo-alt"></i></button>'+
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