let foods = ["Eidotter", "Wachteleier", "Butter:Süssrahmbutter", "Butterkäse", "Frischkäse", "Geheimratskäse", "Gouda ,jung",
            "Haltebarmilch (Past;UHT)", "Mascarpone Käse", "Molke", "Mozzarella", "Quark", "Ricotta Käse","Schafsmilch", "Ziegenmilch", "Ente","Geflügel","Kalbfleisch , frisch","Pute","Poulet","Rindfleisch ,frisch","Strauß","Trute","Wachtel","Zunge Kalb/Rind", "Forelle Süßwasser, Seeforelle, Bachforelle, alle Forellen","Amarant","Dinkel","Edelkastanie Esskastanie,frisch o. TK","Hafer","Hanfproteinpulver","Hanfsamen","Hirse","Kamut, Khorasan – Weizen ","Kartoffeln, frisch geerntet,gelagert geschält","Kukuruz getrocknet, Maisgrieß – Mehl","Maiskolben, frisch/PAST, Dosen Mais","Maltodextrin","Maronen ,frisch/TK","Perlsago","Quinoa","Reis","Reisnudeln/Waffeln","Sago","Süßkartoffel","Wildreis","Fisch fangfrisch oder TK","Erdmandel","Macadamia Nuss","Paranuss","Pistazie","Tiegernuss","Distelöl,Safloröl","Kokosöl, fett","Kürbiskernöl","Olivenöl","Palmfett/Öl – Kern","Rapsöl","Schwarzkümmelöl","Ackersalat","Artischocke","Blattsalat","Blaukraut","Bleichsellerie","Blumenkohl", "Brokkoli","Chicorée","Chinakohl","Eisbergsalat","Endiviensalat","Feldsalat","Fenchel","Salatgurke","Weißkohl","Karfiol , Blumenkohl ","Knollensellerie","Kürbisse,div.Sorten","Möhren","Nüsslisalat","Pak Choi","Paprika,Peperoni milde Sorten","Pastinaken","Radieschen","Rettich,mild","Rote Bete","Rotkohl","Senfkohl","Spargel","Stangensellerie","Weißkohl","Zucchini","Zwiebeln,Weiße Zwiebel", "Basilikum",
            "Bohnenkraut","Oregano","Petersilie","Pfefferminze","Rosmarin","Salbei","Kirschen ,Acerolakirsche","Apfel","Aprikosen",
            "Blaubeeren","Boysenbeere","Bocksdorn-Beeren,Goji-Beeren", "Brombeeren","Cassis","Cranberry","Datteln,getrocknet",
            "Drachenfrucht, Pitahaya","Granatapfel","Großfrüchtige Moosbeere","Heidelbeere","Schwarzerdholunder","Holunderbeeren",
            "Johannisbeeren,rot","Jostabeeren","Kakaobutter","Kaki","Kirschen","Kokosnuss,Kokosraspel,Kokosmilch","Litschi",
            "Marillen","Melone(außer Wassermelone)","Nektarinen","Oemeli","Persimone","Pfirsich","Drachenfrucht,Pitahaya",
            "Preiselbeeren","Quitten","Rote Johannisbeeren, Ribisel,rot","Rosinen","Sanddorn","Sauerkirchen","Schwarze Johannisbeeren","Schwarzer Holunderbeere","Stachelbeeren","Sternfrucht, Karambole","Stachelbeeren", "Trauben , Weintrauben","Chia-Samen ","Flohsamen","Kürbiskerne",
            "Agavendicksaft",
            "Ahornsirup",
            "Birkenzucker,Xylit Xyliol,E967",
            "Caramel",
           "Dextrose",
            "E420 Sorbit,Sorbitol",
            "E967 Birkenzucker",
            "Fruchtzucker",
           "Gebranterzucker",
            "Glucose/Sirup",
           "Honig",
           "Invertzucker/Sirup",
           "Karamell",
           "Kristallzucker",
           "Lactose",
           "Maltose",
           "Malzzucker,rein",
            "Milchzucker ",
            "Rohrzucker ",
            "Rübenzucker ",
            "Saccharose",
            "Glucitol,Hexanhexol,E420",
            "Stevia/Blätter-flüssig-pulverförmig",
            "Zucker",
            "Brandweinessig",
            "Curcuma",
            "Essig: Alkoholessig,Brandweinessig,Weingeistessieg,Essigessenz",
            "Gelbwurz ,Curcuma longa",
            "Gewürznelken",
            "Kardamom",
            "Koriander, Coriandrum sativum",
            "Kümmel, Echter Kümmel, Carum carvi",
            "Kurkuma",
            "Paprikapulver,mild",
            "Quendel,Thymian",
            "Schwarzkümmel, Nigella sativa",
            "Thymian, Thymus vulgaris",
            "Wacholderbeeren",
            "Weingeistessieg",
            "Zimt,Stangen-pulver",
            "Leitungswasser",
          "Mineralwasser ohne Kohlensäure",
          "Wein ,Histamin-frei < 0,1 mg/L  (1)",
          "Eisenkraut-Tee",
          "Kamillentee",
          "Lindenblütentee",
          "Pfefferminz-Tee",
          "Rooibostee ",
          "Salbei-Tee",
          "Verveine - Tee (Wirkt beruhigend Darm/Nerven)",
          "Cranberry Nektar",
          "Kaffee (1)",
          "Haferdrink (1)",
          "Holunderblühtensirup",
          "Acidum- hydrochloricum, Salzsäure, Chlorwasserstoffsäure,E507",
          "Alpha - Tocopherol, Vitamin E, E307",
          "Ammoniumcarbonat, E503",
          "Anthocyane, E163",
          "Apfelsäure, Äpfel-säure, E296",
          "Ascorbinsäure, E300",
          "Ascorbylpalmitat, E304",
          "Betanin, Betanoin, Betenrot, Beetenrot, E162",
          "Bienenwachs, E901",
          "Calciumacetat, Calciumethanoat, Kalziumacetat, E262",
          "Calciumascorbat, Calciumdiascorbat, Calcium-L-Ascorbat,E302",
          "Calciumcarbonat, Kalziumkarbonat, Kalk, E170",
          "Calciumlactat, Kalziumlaktat, E327",
          "Capsanthin, Paprikaextrakt, E160c",
          "Cellulose, Cellulosepulver, mikrokristalline Cellulose, E460",
          "Celluloseethylether, Ethylcellulose, Ethylzellulose, E462",
          "Cellulosemethylether, Methylcellulose, Methylzellulose, E461",
         "Curcumin, E100",
          "Delta - Tocopherol, Vitamin E, E309",
          "E100, Curcumin",
          "E1103, Invertase, β-Fructofuranosidase, Saccharase",
         "E140, Chlorophylle, Chlorophylline",
         "E141, kupferhaltige Komplexe der Chlorophylle & Chlorophylline",
          "E150, E150a: Zuckercouleur",
          "E150b, Sulfitlaugen-Zuckerkulör",
          "E150c, Ammoniak-Zuckerkulör",
          "E150d: Ammoniumsulfit-Zuckerkulör",
          "E153, Pflanzenkohle, Holzkohle",
          "E160a, Carotine, Beta-Carotin, β-Carotin",
          "E160c, Capsanthin, Paprikaextrakt",
          "E162, Betanin, Betanoin, Betenrot, Beetenrot",
          "E163, Anthocyane",
          "E170, Calciumcarbonat, Kalziumkarbonat, Kalk, kohlensaurer,Kalk",
          "E171, Titandioxid, Titan(IV)-oxid, Titansäureanhydrid, Rutil ,Anatas, Brookit, C.I	Pigment White 6, C.I. 77891",
          "E172, Eisenoxide, Eisenhydroxide",
          "E175, Gold",
          "E250, Natriumnitrit",
          "E260, Essigsäure, Eisessig",
          "E261, Kaliumacetat, Kaliumethanoat",
          "E262, Natriumacetat, Natriumethanoat",
          "E263, Calciumacetat, Calciumethanoat, Kalziumacetat,Calciumdiacetat",
          
          "E270, Milchsäure, 2-Hydroxypropansäure, 2-Hydroxypropionsäure, acidum lacticu		",
          "E290, Kohlendioxid gasförmig, Kohlenstoffdioxid,Kohlensäureanhydrid",
          "E296, Apfelsäure, Äpfel säure, 2-Hydroxybutandisäure, 2-Hydroxybernsteinsäure",
          "E300, Ascorbinsäure, Vitamin C",
          "E304, Ascorbylpalmitat",
          "E306, Tocopherol, Vitamin E, tocopherolhaltige Extrakte",
          "E307, alpha - Tocopherol, α -Tocopherol, Vitamin E",
          "E308, gamma - Tocopherol, γ -Tocopherol, Vitamin E",
          "E309, delta- Tocopherol, Vitamin E",
          "E315, Isoascorbinsäure, Erythorbinsäure, Isovitamin C",
          "E316, Natriumisoascorbat, Natriumerythorbat",
          "E322, Lecithine, Lezithine",
          "E325, Natriumlactat",
          "E326, Kaliumlactat",
          "E327, Calciumlactat, Kalziumlaktat",
          "E334, Weinsäure, 2,3-Dihydroxybernsteinsäure, Dihydroxybutandisäure, 2,3-Threarsäure, Traubensäure (Racemat)	",
          "E335, Natriumtartrat",
          "E336, Weinsteinbackpulver, Kaliumtartrat",
          "E415, Xanthan, Xantan, Xanthangummi",
          "E421, Mannit, Mannitol",
          "E422, Glycerin, Glycerol, Glyzerin, Propan-1,2,3-triol, 1,2,3- Propantriol, Propantriol	",
          "E440, Pektin",
          "E460, Cellulose, Zellulose, mikrokristalline Cellulose, Cellulosepulver",
          "E461, Methylcellulose, Methylzellulose, Cellulosemethylether",

          "E462, Ethylcellulose, Ethylzellulose, Celluloseethylether",
          "E463, Hydroxypropylcellulose",
          "E464, Hydroxypropylmethylcellulose, Hypromellose,Hypromellosum, Methylhydroxypropylzellulose, 2-Hydroxypropylmethylcellulose, 2-Hydroxypropylcellulosemethylether, Cellulosehydroxypropylmethylether, HPMC",
          "E465, Ethyl Methylcellulose, Ethylmethylcellulose",
          "E500, Natriumcarbonat, Natriumkarbonat, Soda, calcinierte Soda, einfach kohlensaures Natron, Na2CO3",
          "E500ii, Natron, Natriumhydrogencarbonat,Natriumhydrogenkarbonat,Natriumbicarbonat,Natriumbikarbonat, Backsoda, doppeltkohlensaures Natron,NaHCO3",
         "E501, Kaliumcarbonat, Kaliumkarbonat, Pottasche, K2CO3",
          "E503, Ammoniumcarbonat, kohlensaures Ammonium,Diammoniumcarbonat	 ",
          "E504, Magnesiumcarbonat",
          "E507, Salzsäure, Chlorwasserstoffsäure, acidum hydrochloricum	 ",
          "E579, Eisengluconat",
          "E626, Guanosinmonophosphat, Guanylsäure, Guanylat,Guanosin-5′-monophosphat",
          "E650, Zinkacetat",
          "E901, Bienenwachs, cera flava, cera alba",
          "E955, Sucralose",
          "E960, Steviosid, Steviol-Glykosid ",
          "Eisengluconat, E579",
          "Eisenoxide, Eisenhydroxide, E172",
          "Essigsäure, E260",
          "Ethyl Methylcellulose, E465",
          "Ethylcellulose, Ethylzellulose, Celluloseethylether, E462",

          "gamma-Tocopherol, Vitamin E, E308",
          "Glycerin, Glycerol, Glyzerin, Propan-1,2,3-triol, 1,2,3-Propantriol, Propantriol, E422",
          "Gold, E175",
          "Guanosinmonophosphat, Guanylsäure, Guanylat, E626",
          "Holzkohle, Pflanzenkohle, E153",
          "Holzkohle, Pflanzenkohle, E153",
          "Hydroxypropylcellulose, E463",
          "Hydroxypropylmethylcellulose, Hypromellose, E464",
          "Hypromellose, Hydroxypropylmethylcellulose, E464",
          "Invertase, E1103",
          "Isoascorbinsäure, E315",
          "Kaliumacetat, E261",
          "Kaliumtartrat, E336",
          "Kalziumacetat, Calciumacetat, Calciumethanoat, E263",
          "Kohle, Pflanzenkohle, Holzkohle, E153",
          "kupferhaltige Komplexe der Chlorophylle und Chlorophylline,E141",
          "Lecithine, Lezithine, E322",
          "Magnesiumcarbonat, E504",
          "Mannit, Mannitol, E421",
          "Methylcellulose, Methylzellulose, Cellulosemethylether, E461",
          "mikrokristalline Cellulose, Cellulosepulver, E460",
          "Milchsäure, 2-Hydroxypropansäure, 2-Hydroxypropionsäure, acidum lacticum, E260",
          "Natriumacetat, E262",
          "Natriumascorbat, E301",
          "Natriumcarbonat, Natriumkarbonat, Soda, E500",
         "Natriumisoascorbat, Natriumerythorbat, E316",
         "Natriumlactat, E325",
          "Natriumnitrit, E250",
          "Natriumtartrat, E335",
          "Natron, Natriumhydrogencarbonat,",


          "Natriumhydrogenkarbonat, Natriumbicarbonat,",
          "Natriumbikarbonat, Backsoda, E500ii",
          "Pektin, Pektine, amidiertes Pektin, E440",
          "Pflanzenkohle, Holzkohle, E153",
          "Salzsäure, Chlorwasserstoffsäure, acidum hydrochloricum,E507",
          "Stärke (Kartoffelstärke, Maisstärke, Reisstärke,",
          "Tapiokastärke, Weizenstärke, …)",
         "Steviosid, Steviol-Glykosid, E960",
          "Sucralose, E955",
          "Titandioxid, Titan(IV)-oxid, E171",
          "Tocopherol, Vitamin E, E306",
         "Vanillin (synthetisch), Vanillinzucker",
          "Vitamin C, E300",
          "Vitamin E, alpha-Tocopherol, E307",
         "Vitamin E, delta-Tocopherol, E309",
         "Vitamin E, gamma-Tocopherol, E308",
          "Vitamin E, Tocopherol, E306",
          "Weinsäure, E334",
          "Weinsteinbackpulver, E336",
         "Xanthan, Xantan, E415",
          "Zellulose, Cellulose, mikrokristalline Cellulose, Cellulosepulver, E460",
          "Zinkacetat, E650",
         "Zuckercouleur, Zuckerkulör, E150, E150a",
          "Zuckercouleur: Ammoniak-Zuckerkulör, E150c",
          "Zuckercouleur: Ammoniumsulfit-Zuckerkulör, E150d",
          "Zuckercouleur: Sulfitlaugen-Zuckerkulör, E150b",


          ]
          
          






            function autocomplete(inp, arr) {
                /*the autocomplete function takes two arguments,
                the text field element and an array of possible autocompleted values:*/
                var currentFocus;
                /*execute a function when someone writes in the text field:*/
                inp.addEventListener("input", function(e) {
                    var a, b, i, val = this.value;
                    /*close any already open lists of autocompleted values*/
                    closeAllLists();
                    if (!val) { return false;}
                    currentFocus = -1;
                    /*create a DIV element that will contain the items (values):*/
                    a = document.createElement("DIV");
                    a.setAttribute("id", this.id + "autocomplete-list");
                    a.setAttribute("class", "autocomplete-items");
                    /*append the DIV element as a child of the autocomplete container:*/
                    this.parentNode.appendChild(a);
                    /*for each item in the array...*/
                    for (i = 0; i < arr.length; i++) {
                      /*check if the item starts with the same letters as the text field value:*/
                      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                            b.addEventListener("click", function(e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                        });
                        a.appendChild(b);
                      }
                    }
                });
                /*execute a function presses a key on the keyboard:*/
                inp.addEventListener("keydown", function(e) {
                    var x = document.getElementById(this.id + "autocomplete-list");
                    if (x) x = x.getElementsByTagName("div");
                    if (e.keyCode == 40) {
                      /*If the arrow DOWN key is pressed,
                      increase the currentFocus variable:*/
                      currentFocus++;
                      /*and and make the current item more visible:*/
                      addActive(x);
                    } else if (e.keyCode == 38) { //up
                      /*If the arrow UP key is pressed,
                      decrease the currentFocus variable:*/
                      currentFocus--;
                      /*and and make the current item more visible:*/
                      addActive(x);
                    } else if (e.keyCode == 13) {
                      /*If the ENTER key is pressed, prevent the form from being submitted,*/
                      e.preventDefault();
                      if (currentFocus > -1) {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                      }
                    }
                });
                function addActive(x) {
                  /*a function to classify an item as "active":*/
                  if (!x) return false;
                  /*start by removing the "active" class on all items:*/
                  removeActive(x);
                  if (currentFocus >= x.length) currentFocus = 0;
                  if (currentFocus < 0) currentFocus = (x.length - 1);
                  /*add class "autocomplete-active":*/
                  x[currentFocus].classList.add("autocomplete-active");
                }
                function removeActive(x) {
                  /*a function to remove the "active" class from all autocomplete items:*/
                  for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("autocomplete-active");
                  }
                }
                function closeAllLists(elmnt) {
                  /*close all autocomplete lists in the document,
                  except the one passed as an argument:*/
                  var x = document.getElementsByClassName("autocomplete-items");
                  for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                  }
                }
              }
              /*execute a function when someone clicks in the document:*/
              document.addEventListener("click", function (e) {
                  closeAllLists(e.target);
              });
            }


            autocomplete(document.getElementById("myInput"), foods);





