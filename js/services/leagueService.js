var app = angular.module("oddsgeir");

app.service("leagueService", function() {



  //Returnerer urlene til noen testligaer
  this.testData = function() {
    var urls = [];

    //England
    urls.push(new League("Premier League", "England", "http://www.betexplorer.com/soccer/england/premier-league/results"));
    urls.push(new League("Championship", "England", "http://www.betexplorer.com/soccer/england/championship/results"));
    /*urls.push(new League("League One", "England", "http://www.betexplorer.com/soccer/england/league-one/results"));
    urls.push(new League("League Two", "England", "http://www.betexplorer.com/soccer/england/league-two/results"));
    urls.push(new League("Vanarama National League", "England", "http://www.betexplorer.com/soccer/england/vanarama-national-league/results"));
    urls.push(new League("Vanarama National League North", "England", "http://www.betexplorer.com/soccer/england/vanarama-national-league-north/results"));
    urls.push(new League("Vanarama National League South", "England", "http://www.betexplorer.com/soccer/england/vanarama-national-league-south/results"));
    urls.push(new League("Southern Premier League", "England", "http://www.betexplorer.com/soccer/england/southern-premier-league/results"));
    urls.push(new League("Northern Premier League", "England", "http://www.betexplorer.com/soccer/england/northern-premier-league/results"));
    urls.push(new League("Ryman League", "England", "http://www.betexplorer.com/soccer/england/ryman-league/results"));
*/

    return urls;
  }

  //Returnerer urlene til alle ligaer som ønskes
  this.allLeagues = function() {
    var urls = [];

    //Albania
    urls.push(new League("Super League", "Albania", "http://www.betexplorer.com/soccer/albania/super-league/results"));

    //Argentina
    urls.push(new League("Primera Division", "Argentina", "http://www.betexplorer.com/soccer/argentina/primera-division/results"));
    urls.push(new League("Primera B Nacional", "Argentina", "http://www.betexplorer.com/soccer/argentina/primera-b-nacional//results"));
    urls.push(new League("Primera B Metropolitana", "Argentina", "http://www.betexplorer.com/soccer/argentina/primera-b-metropolitana/results"));
    urls.push(new League("Primera C Metropolitana", "Argentina", "http://www.betexplorer.com/soccer/argentina/primera-c-metropolitana/results"));

    //Australia
    urls.push(new League("A League", "Australia", "http://www.betexplorer.com/soccer/australia/a-league/results"));

    //Austria
    urls.push(new League("Tipico Bundesliga", "Austria", "http://www.betexplorer.com/soccer/austria/tipico-bundesliga/results"));
    urls.push(new League("Erste Liga", "Austria", "http://www.betexplorer.com/soccer/austria/erste-liga/results"));

    //Belarus
    urls.push(new League("Vysshaya Liga", "Belarus", "http://www.betexplorer.com/soccer/belarus/vysshaya-liga/results"));

    //Belgium
    urls.push(new League("Jupiler League", "Belgium", "http://www.betexplorer.com/soccer/belgium/jupiler-league/results"));
    urls.push(new League("Proximus League", "Belgium", "http://www.betexplorer.com/soccer/belgium/proximus-league/results"));
    urls.push(new League("First Amateur Division", "Belgium", "http://www.betexplorer.com/soccer/belgium/first-amateur-division/results"));

    //Bolivia
    urls.push(new League("Liga de Futbol Prof", "Bolivia", "http://www.betexplorer.com/soccer/bolivia/liga-de-futbol-prof/results"));

    //Bosnia
    urls.push(new League("Premier League", "Bosnia", "http://www.betexplorer.com/soccer/bosnia-and-herzegovina/premier-league/results"));

    //Brazil
    urls.push(new League("Premier League", "Brazil", "http://www.betexplorer.com/soccer/brazil/serie-a/results"));
    urls.push(new League("Premier League", "Brazil", "http://www.betexplorer.com/soccer/brazil/serie-b/results"));
    urls.push(new League("Premier League", "Brazil", "http://www.betexplorer.com/soccer/brazil/serie-c/results"));

    //Bulgaria
    urls.push(new League("Parva Liga", "Bulgaria", "http://www.betexplorer.com/soccer/bulgaria/parva-liga/results"));
    urls.push(new League("Vtora Liga", "Bulgaria", "http://www.betexplorer.com/soccer/bulgaria/vtora-liga/results"));

    //Chile
    urls.push(new League("Primera Division", "Chile", "http://www.betexplorer.com/soccer/chile/primera-division/results"));

    //China
    urls.push(new League("Super League", "China", "http://www.betexplorer.com/soccer/china/super-league/results"));
    urls.push(new League("Jia League", "China", "http://www.betexplorer.com/soccer/china/jia-league/results"));

    //Colombia
    urls.push(new League("Liga Aguila", "Colombia", "http://www.betexplorer.com/soccer/colombia/liga-aguila/results"));

    //Croatia
    urls.push(new League("1. HNL", "Croatia", "http://www.betexplorer.com/soccer/croatia/1-hnl/results"));

    //Cyprus
    urls.push(new League("First Division", "Cyprus", "http://www.betexplorer.com/soccer/cyprus/first-division/results"));

    //Czech Republic
    urls.push(new League("1. Liga", "Czech Republic", "http://www.betexplorer.com/soccer/czech-republic/1-liga/results"));
    urls.push(new League("Division 2", "Czech Republic", "http://www.betexplorer.com/soccer/czech-republic/division-2/results"));

    //Denmark
    urls.push(new League("Superliga", "Denmark", "http://www.betexplorer.com/soccer/denmark/superliga/results"));
    urls.push(new League("1st Division", "Denmark", "http://www.betexplorer.com/soccer/denmark/1st-division/results"));
    urls.push(new League("2nd Division - Group 1", "Denmark", "http://www.betexplorer.com/soccer/denmark/2nd-division-group-1/results"));
    urls.push(new League("2nd Division - Group 2", "Denmark", "http://www.betexplorer.com/soccer/denmark/2nd-division-group-2/results"));
    urls.push(new League("2nd Division - Group 3", "Denmark", "http://www.betexplorer.com/soccer/denmark/2nd-division-group-3/results"));

    //Ecuador
    urls.push(new League("Serie A", "Ecuador", "http://www.betexplorer.com/soccer/ecuador/serie-a/results"));

    //Egypt
    urls.push(new League("Premier League", "Egypt", "http://www.betexplorer.com/soccer/egypt/premier-league/results"));

    //England
    urls.push(new League("Premier League", "England", "http://www.betexplorer.com/soccer/england/premier-league/results"));
    urls.push(new League("Championship", "England", "http://www.betexplorer.com/soccer/england/championship/results"));
    urls.push(new League("League One", "England", "http://www.betexplorer.com/soccer/england/league-one/results"));
    urls.push(new League("League Two", "England", "http://www.betexplorer.com/soccer/england/league-two/results"));
    urls.push(new League("Vanarama National League", "England", "http://www.betexplorer.com/soccer/england/vanarama-national-league/results"));
    urls.push(new League("Vanarama National League North", "England", "http://www.betexplorer.com/soccer/england/vanarama-national-league-north/results"));
    urls.push(new League("Vanarama National League South", "England", "http://www.betexplorer.com/soccer/england/vanarama-national-league-south/results"));
    urls.push(new League("Southern Premier League", "England", "http://www.betexplorer.com/soccer/england/southern-premier-league/results"));
    urls.push(new League("Northern Premier League", "England", "http://www.betexplorer.com/soccer/england/northern-premier-league/results"));
    urls.push(new League("Ryman League", "England", "http://www.betexplorer.com/soccer/england/ryman-league/results"));

    //Estonia
    urls.push(new League("Meistrliiga", "Estonia", "http://www.betexplorer.com/soccer/estonia/meistriliiga/results"));
    urls.push(new League("Esiliiga", "Estonia", "http://www.betexplorer.com/soccer/estonia/esiliiga/results"));

    //Farao Islands
    urls.push(new League("Premier League", "Farao Islands", "http://www.betexplorer.com/soccer/faroe-islands/premier-league/results/"));

    //Finland
    urls.push(new League("Veikkausliiga", "Finland", "http://www.betexplorer.com/soccer/finland/veikkausliiga/results"));
    urls.push(new League("Ykkonen", "Finland", "http://www.betexplorer.com/soccer/finland/ykkonen/results"));
    urls.push(new League("Kakkonen Group A", "Finland", "http://www.betexplorer.com/soccer/finland/kakkonen-group-a/results"));
    urls.push(new League("Kakkonen Group B", "Finland", "http://www.betexplorer.com/soccer/finland/kakkonen-group-b/results"));
    urls.push(new League("Kakkonen Group C", "Finland", "http://www.betexplorer.com/soccer/finland/kakkonen-group-c/results"));

    //France
    urls.push(new League("Ligue 1", "France", "http://www.betexplorer.com/soccer/france/ligue-1/results"));
    urls.push(new League("Ligue 2", "France", "http://www.betexplorer.com/soccer/france/ligue-2/results"));
    urls.push(new League("National", "France", "http://www.betexplorer.com/soccer/france/national/results"));

    //FYR of Macedonia
    urls.push(new League("First League", "FYR of Macedonia", "http://www.betexplorer.com/soccer/fyr-of-macedonia/first-league/results"));

    //Georgia
    urls.push(new League("Erovnuli Liga", "Georgia", "http://www.betexplorer.com/soccer/georgia/erovnuli-liga/results"));

    //Germany
    urls.push(new League("Bundesliga", "Germany", "http://www.betexplorer.com/soccer/germany/bundesliga/results"));
    urls.push(new League("2. Bundesliga", "Germany", "http://www.betexplorer.com/soccer/germany/2-bundesliga/results"));
    urls.push(new League("3. Liga", "Germany", "http://www.betexplorer.com/soccer/germany/3-liga/results"));
    urls.push(new League("Regionalliga North", "Germany", "http://www.betexplorer.com/soccer/germany/regionalliga-north/results"));
    urls.push(new League("Regionalliga Nordost", "Germany", "http://www.betexplorer.com/soccer/germany/regionalliga-nordost/results"));
    urls.push(new League("Regionalliga West", "Germany", "http://www.betexplorer.com/soccer/germany/regionalliga-west/results"));
    urls.push(new League("Regionalliga Sudwest", "Germany", "http://www.betexplorer.com/soccer/germany/regionalliga-sudwest/results"));
    urls.push(new League("Regionalliga Bayern", "Germany", "http://www.betexplorer.com/soccer/germany/regionalliga-bayern/results"));

    //Greece
    urls.push(new League("Super League", "Greece", "http://www.betexplorer.com/soccer/greece/super-league/results"));
    urls.push(new League("Football League", "Greece", "http://www.betexplorer.com/soccer/greece/football-league/results"));

    //Hungary
    urls.push(new League("OTP Bank liga", "Hungary", "http://www.betexplorer.com/soccer/hungary/otp-bank-liga/results"));

    //Iceland
    urls.push(new League("Pepsideild", "Iceland", "http://www.betexplorer.com/soccer/iceland/pepsideild/results"));
    urls.push(new League("Inkasso-deildin", "Iceland", "http://www.betexplorer.com/soccer/iceland/inkasso-deildin/results"));

    //Ireland
    urls.push(new League("Premier Division", "Ireland", "http://www.betexplorer.com/soccer/ireland/premier-division/results"));
    urls.push(new League("Division 1", "Ireland", "http://www.betexplorer.com/soccer/ireland/division-1/results"));

    //Israel
    urls.push(new League("Ligat ha'Al", "Israel", "http://www.betexplorer.com/soccer/israel/ligat-ha-al/results"));

    //Italy
    urls.push(new League("Serie A", "Italy", "http://www.betexplorer.com/soccer/italy/serie-a/results"));
    urls.push(new League("Serie B", "Italy", "http://www.betexplorer.com/soccer/italy/serie-b/results"));
    urls.push(new League("Lega Pro - Group A", "Italy", "http://www.betexplorer.com/soccer/italy/lega-pro-group-a/results"));
    urls.push(new League("Lega Pro - Group B", "Italy", "http://www.betexplorer.com/soccer/italy/lega-pro-group-b/results"));
    urls.push(new League("Lega Pro - Group C", "Italy", "http://www.betexplorer.com/soccer/italy/lega-pro-group-c/results"));

    //Japan
    urls.push(new League("J-League", "Japan", "http://www.betexplorer.com/soccer/japan/j-league/results"));
    urls.push(new League("J-League Division 2", "Japan", "http://www.betexplorer.com/soccer/japan/j-league-division-2/results"));

    //Latvia
    urls.push(new League("SynotTip Virsliga", "Latvia", "http://www.betexplorer.com/soccer/latvia/synottip-virsliga/results"));

    //Lithuania
    urls.push(new League("A Lyga", "Lithuania", "http://www.betexplorer.com/soccer/lithuania/a-lyga/results"));

    //Luxembourg
    urls.push(new League("National Division", "Luxembourg", "http://www.betexplorer.com/soccer/luxembourg/national-division/results"));

    //Malaysia
    urls.push(new League("Super League", "Malaysia", "http://www.betexplorer.com/soccer/malaysia/super-league/results"));

    //Malta
    urls.push(new League("Premier League", "Malta", "http://www.betexplorer.com/soccer/malta/premier-league/results"));

    //Morocco
    urls.push(new League("Botola Pro", "Morocco", "http://www.betexplorer.com/soccer/morocco/botola-pro/results/"));

    //Mexico
    urls.push(new League("Primera Division", "Mexico", "http://www.betexplorer.com/soccer/mexico/primera-division/results"));
    urls.push(new League("Primera Division", "Mexico", "http://www.betexplorer.com/soccer/mexico/liga-de-ascenso/results"));

    //Netherlands
    urls.push(new League("Eredivisie", "Netherlands", "http://www.betexplorer.com/soccer/netherlands/eredivisie/results"));
    urls.push(new League("Eerste Divisie", "Netherlands", "http://www.betexplorer.com/soccer/netherlands/eerste-divisie/results"));

    //New Zealand
    urls.push(new League("Football Championship", "New Zealand", "http://www.betexplorer.com/soccer/new-zealand/football-championship/results"));

    //Northern Ireland
    urls.push(new League("NIFL Premiership", "Northern Ireland", "http://www.betexplorer.com/soccer/northern-ireland/nifl-premiership/results"));

    //Norway
    urls.push(new League("Eliteserien", "Norway", "http://www.betexplorer.com/soccer/norway/eliteserien/results"));
    urls.push(new League("OBOS-ligaen", "Norway", "http://www.betexplorer.com/soccer/norway/obos-ligaen/results"));
    urls.push(new League("Division 2 - Group 1", "Norway", "http://www.betexplorer.com/soccer/norway/division-2-group-1/results"));
    urls.push(new League("Division 2 - Group 2", "Norway", "http://www.betexplorer.com/soccer/norway/division-2-group-2/results"));

    //Peru
    urls.push(new League("Primera Division", "Peru", "http://www.betexplorer.com/soccer/peru/primera-division/results"));

    //Poland
    urls.push(new League("Ekstraklasa", "Poland", "http://www.betexplorer.com/soccer/poland/ekstraklasa/results"));
    urls.push(new League("Division 1", "Poland", "http://www.betexplorer.com/soccer/poland/division-1/results"));

    //Portugal
    urls.push(new League("Primeira Liga", "Portugal", "http://www.betexplorer.com/soccer/portugal/primeira-liga/results"));
    urls.push(new League("Segunda Liga", "Portugal", "http://www.betexplorer.com/soccer/portugal/segunda-liga/results"));

    //Romania
    urls.push(new League("Liga 1", "Romania", "http://www.betexplorer.com/soccer/romania/liga-1/results"));

    //Russia
    urls.push(new League("Premier League", "Russia", "http://www.betexplorer.com/soccer/russia/premier-league/results"));
    urls.push(new League("Division 1", "Russia", "http://www.betexplorer.com/soccer/russia/division-1/results"));
    urls.push(new League("Division 2 - South", "Russia", "http://www.betexplorer.com/soccer/russia/division-2-south/results/"));
    urls.push(new League("Division 2 - East", "Russia", "http://www.betexplorer.com/soccer/russia/division-2-east/results/"));
    urls.push(new League("Division 2 - Center", "Russia", "http://www.betexplorer.com/soccer/russia/division-2-center/results/"));
    urls.push(new League("Division 2 - West", "Russia", "http://www.betexplorer.com/soccer/russia/division-2-west/results/"));
    urls.push(new League("Division 2 - Ural-Povolzhye", "Russia", "http://www.betexplorer.com/soccer/russia/division-2-ural-povolzhye/results/"));

    //Saudi Arabia
    urls.push(new League("Saudi Professional League", "Saudi Arabia", "http://www.betexplorer.com/soccer/saudi-arabia/saudi-professional-league/results/"));


    //Scotland
    urls.push(new League("Premiership", "Scotland", "http://www.betexplorer.com/soccer/scotland/premiership/results"));
    urls.push(new League("Championship", "Scotland", "http://www.betexplorer.com/soccer/scotland/championship/results"));
    urls.push(new League("League One", "Scotland", "http://www.betexplorer.com/soccer/scotland/league-one/results"));
    urls.push(new League("League Two", "Scotland", "http://www.betexplorer.com/soccer/scotland/league-two/results"));
    urls.push(new League("Lowland League", "Scotland", "http://www.betexplorer.com/soccer/scotland/lowland-league/results"));
    urls.push(new League("Highland League", "Scotland", "http://www.betexplorer.com/soccer/scotland/highland-league/results"));

    //Serbia
    urls.push(new League("Super Liga", "Serbia", "http://www.betexplorer.com/soccer/serbia/super-liga/results"));
    urls.push(new League("Prva Liga", "Serbia", "http://www.betexplorer.com/soccer/serbia/prva-liga/results"));

    //Slovakia
    urls.push(new League("Fortuna Liga", "Slovakia", "http://www.betexplorer.com/soccer/slovakia/fortuna-liga/results"));
    urls.push(new League("2. Liga - West", "Slovakia", "http://www.betexplorer.com/soccer/slovakia/2-liga-west/results"));
    urls.push(new League("2. Liga - East", "Slovakia", "http://www.betexplorer.com/soccer/slovakia/2-liga-east/results"));

    //Slovenia
    urls.push(new League("Prva Liga", "Slovenia", "http://www.betexplorer.com/soccer/slovenia/prva-liga/results"));

    //South Africa
    urls.push(new League("Premier League", "South Africa", "http://www.betexplorer.com/soccer/south-africa/premier-league/results"));

    //South-Korea
    urls.push(new League("K-League Classic", "South-Korea", "http://www.betexplorer.com/soccer/south-korea/k-league-classic/results"));
    urls.push(new League("K-League Challenge", "South-Korea", "http://www.betexplorer.com/soccer/south-korea/k-league-challenge/results"));
    urls.push(new League("National League", "South-Korea", "http://www.betexplorer.com/soccer/south-korea/national-league/results"));

    //Spain
    urls.push(new League("LaLiga", "Spain", "http://www.betexplorer.com/soccer/spain/laliga/results"));
    urls.push(new League("LaLiga2", "Spain", "http://www.betexplorer.com/soccer/spain/laliga2/results"));
    urls.push(new League("Segunda Division B - Group 1", "Spain", "http://www.betexplorer.com/soccer/spain/segunda-division-b-group-1/results"));
    urls.push(new League("Segunda Division B - Group 2", "Spain", "http://www.betexplorer.com/soccer/spain/segunda-division-b-group-2/results"));
    urls.push(new League("Segunda Division B - Group 3", "Spain", "http://www.betexplorer.com/soccer/spain/segunda-division-b-group-3/results"));
    urls.push(new League("Segunda Division B - Group 4", "Spain", "http://www.betexplorer.com/soccer/spain/segunda-division-b-group-4/results"));

    //Sweden
    urls.push(new League("Allsvenskan", "Sweden", "http://www.betexplorer.com/soccer/sweden/allsvenskan/results"));
    urls.push(new League("Superettan", "Sweden", "http://www.betexplorer.com/soccer/sweden/superettan/results"));
    urls.push(new League("Division 1 - Norra", "Sweden", "http://www.betexplorer.com/soccer/sweden/division-1-norra/results"));
    urls.push(new League("Division 1 - Södra", "Sweden", "http://www.betexplorer.com/soccer/sweden/division-1-sodra/results"));

    //Switzerland
    urls.push(new League("Super League", "Switzerland", "http://www.betexplorer.com/soccer/switzerland/super-league/results"));
    urls.push(new League("Challenge League", "Switzerland", "http://www.betexplorer.com/soccer/switzerland/challenge-league/results"));

    //Thailand
    urls.push(new League("Thai Premier League", "Thailand", "http://www.betexplorer.com/soccer/thailand/thai-premier-league/results/"));

    //Turkey
    urls.push(new League("Super Lig", "Turkey", "http://www.betexplorer.com/soccer/turkey/super-lig/results"));
    urls.push(new League("TFF 1. Lig", "Turkey", "http://www.betexplorer.com/soccer/turkey/tff-1-lig/results"));

    //Ukraine
    urls.push(new League("Pari-Match League", "Ukraine", "http://www.betexplorer.com/soccer/ukraine/pari-match-league/results"));

    //USA
    urls.push(new League("MLS", "USA", "http://www.betexplorer.com/soccer/usa/mls/results"));
    urls.push(new League("North American Soccer League", "USA", "http://www.betexplorer.com/soccer/usa/north-american-soccer-league/results"));

    //Wales
    urls.push(new League("Premier League", "Wales", "http://www.betexplorer.com/soccer/wales/premier-league/results"));


    //ca 166 ligaer

    return urls;
  }

});
