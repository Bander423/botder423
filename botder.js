const tmi = require('tmi.js');
const pass = require('./password.js');
 
 
 
const opts = {
  identity: {
    username: "BotderJC",
    password: pass.password
  },
  channels: [
    "fabzeef", "griphthefrog", "ebbel", "banderjc"
  ]
};
 
const client = new tmi.client(opts);
 
 
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
 
 
client.connect();
 
var lastCommandTime = 0; 
 
var longEmotes = ["LULWide", "KKoooona", "WideHardest1", "WideHardest2", "paaaajaCmon", "AndKnuckles", "YetiZ", "TaxiBro", "AngelThump", "FireSpeed", "FishMoley"]
 
var smolEmotes = ["ppL", "miniJulia", "Kapp"];
 
var useEmotes = [
// Globals 
 
  // TWITCH
    "4Head", ":(", ":)", ":/", ":D", ":O", ":P", ":Z", ";)", ";P", "<3", ">(", "ANELE", "ArgieB8", "ArsonNoSexy", "AsexualPride", "AsianGlow", "B)", "BCWarrior", "BOP", "BabyRage", "BatChest", "BegWan", "BibleThump", "BigBrother", "BigPhish", "BisexualPride", "BlargNaut", "BloodTrail", "BrainSlug", "BrokeBack", "BuddhaBar", "CarlSmile", "ChefFrank", "CoolCat", "CoolStoryBob", "CorgiDerp", "CrreamAwk", "CurseLit", "DAESuppy", "DBstyle", "DansGame", "DarkMode", "DatSheffy", "DendiFace", "DogFace", "DoritosChip", "DrinkPurple", "DxCat", "EarthDay", "EleGiggle", "EntropyWins", "FBBlock", "FBCatch", "FBChallenge", "FBPass", "FBPenalty", "FBRun", "FBSpiral", "FBtouchdown", "FUNgineer", "FailFish", "FrankerZ", "FreakinStinkin", "FutureMan", "GayPride", "GenderFluidPride", "GingerPower", "GivePLZ", "GrammarKing", "GreenTeam", "GunRun", "HSCheers", "HSWP", "HassaanChop", "HassanChop", "HeyGuys", "HolidayCookie", "HolidayLog", "HolidayOrnament", "HolidayPresent", "HolidaySanta", "HolidayTree", "HotPokket", "HumbleLife", "IntersexPride", "InuyoFace", "ItsBoshyTime", "JKanStyle", "Jebaited", "JonCarnage", "KAPOW", "Kappa", "KappaClaus", "KappaPride", "KappaRoss", "KappaWealth", "Kappu", "Keepo", "KevinTurtle", "Kippa", "KomodoHype", "KonCha", "Kreygasm", "LUL", "LesbianPride", "MVGame", "Mau5", "MaxLOL", "MercyWing1", "MercyWing2", "MikeHogu", "MingLee", "MorphinTime", "MrDestructoid", "NinjaGrumpy", "NomNom", "NonBinaryPride", "NotATK", "NotLikeThis", "OSFrog", "O_o", "OhMyDog", "OneHand", "OpieOP", "OptimizePrime", "PJSalt", "PJSugar", "PMSTwin", "PRChase", "PanicVis", "PansexualPride", "PartyHat", "PartyTime", "PeoplesChamp", "PermaSmug", "PicoMause", "PinkMercy", "PipeHype", "PixelBob", "PogChamp", "Poooound", "PopCorn", "PorscheWIN", "PowerUpL", "PowerUpR", "PraiseIt", "PrimeMe", "PunOko", "PunchTrees", "PurpleStar", "R)", "RaccAttack", "RalpherZ", "RedCoat", "RedTeam", "ResidentSleeper", "RitzMitz", "RlyTho", "RuleFive", "SMOrc", "SSSsss", "SabaPing", "SeemsGood", "SeriousSloth", "ShadyLulu", "ShazBotstix", "SingsMic", "SingsNote", "SmoocherZ", "SoBayed", "SoonerLater", "Squid1", "Squid2", "Squid3", "Squid4", "StinkyCheese", "StoneLightning", "StrawBeary", "SuperVinlin", "SwiftRage", "TBAngel", "TF2John", "TPFufun", "TPcrunchyroll", "TTours", "TakeNRG", "TearGlove", "TehePelo", "ThankEgg", "TheIlluminati", "TheRinger", "TheTarFu", "TheThing", "ThunBeast", "TinyFace", "TombRaid", "TooSpicy", "TransgenderPride", "TriHard", "TwitchLit", "TwitchRPG", "TwitchSings", "TwitchUnity", "TwitchVotes", "UWot", "UnSane", "UncleNox", "VirtualHug", "VoHiYo", "VoteNay", "VoteYea", "WTRuck", "WholeWheat", "WutFace", "YouDontSay", "YouWHY", "bleedPurple", "cmonBruh", "copyThis", "duDudu", "imGlitch", "mcaT", "panicBasket", "pastaThat", "riPepperonis", "twitchRaid",
  // BTTV
    ":tf:", "AngelThump", "ariW", "BaconEffect", "BasedGod", "BroBalt", "bttvNice", "bUrself", "ButterSauce", "CandianRage", "CiGrip", "ConcernDoge", "CruW", "cvHazmat", "cvL", "cvMask", "cvR", "D:", "DatSauce", "DuckerZ", "FCreep", "FeelsAmazingMan", "FeelsBadMan", "FeelsBirthdayMan", "FeelsGoodMan", "FireSpeed", "FishMoley", "ForeverAlone", "GabeN", "haHAA", "HailHelix", "HerbPerve", "Hhhehehe", "HHydro", "iamsocal", "iDog", "KappaCool", "KaRappa", "KKona", "LuL", "M&Mjc", "miniJulia", "monkaS", "NaM", "notsquishY", "PedoBear", "PoleDoge", "RarePepe", "RebeccaBlack", "RonSmug", "rStrike", "SaltyCorn", "SavageJerky", "She'llBeRight", "ShoopDaWhoop", "sosGame", "SourPls", "SqShy", "SuchFraud", "SwedSwag", "TaxiBro", "tehPoleCat", "TopHam", "TwaT", "VapeNation", "VisLaud", "WatChuSay", "Wowee", "WubTF", "YetiZ", "Zappa",
  // FFZ
    "AndKnuckles", "BeanieHipster", "BORT", "CatBag", "LaterSooner", "LilZ", "ManChicken", "OBOY", "OiMinna", "YellowFever", "YooHoo", "ZliL", "ZrehplaR", "ZreknarF",
 
// CHANNELS
 
  // FABZEEF
 
  // BTTV
    "ABDULpls", "AlienPls", "AlienPls2", "AlienPls3", "ApuApproved", "ApuDisapprove", "ApuDisco", "ApuRip", "ApuTrump", "ApuVittu", "BBaper", "BBoomer", "Bonked", "chinWTF", "Clap", "cmonbRuh", "dankChat", "dankCircle", "dankClappers", "dankCrayon", "DankFeelsMan", "dankGeo", "DANKHACKERMAN", "dankIgnore", "dankJAM", "dankPeek", "DoctorPls", "DonaldPls", "DonaldTackle", "DwaneAWAY", "EatPooPoo", "EGGMAN", "fabzeeCoom", "fabzeeLove", "FeelsBingMan", "FeelsBrainMan", "FeelsDankU", "FeelsDentMan", "FeelsDinkMan", "FeelsDoonkMan", "FeelsKnadMan", "FeelsLagMan", "FEELSWAYTOODANKMAN", "Forsen7", "forsenApprove", "forsenArmL", "forsenChin", "forsenCoomer", "forsenCute", "forsenDeer", "forsenDisco", "forsenDiscoSnake", "forsenEmo", "forsenEnter", "forsenFlex", "forsenGa", "forsenGaGun", "forsenLeave", "ForsenLookingAtYou", "forsenMALD", "forsenParty", "forsenPeek", "forsenPls", "forsenReady", "forsenRNG", "forsenShuffle", "forsenSoy", "forsenSWA", "forsenTurbo", "ForsenY", "gachiBASS", "gachiBLAST", "gachiBOP", "gachiHop", "gachiHYPER", "GachiPls", "gachiPRIDE", "GuitarTime", "hackerCD", "headBang", "HYPERBRUH", "HYPERCLAP", "Kissahomie", "KKaper", "KKool", "KKrikool", "Maldge", "MEGADANK", "MODS", "monkaE", "monkaOMEGA", "NOIDONTTHINKSO", "NotSureZeef", "nymnCorn", "okayL", "PartyTubby", "peepoBandit", "peepoGreedDank", "peepoNerdDank", "peepoSadDown", "peepoSpookDank", "pepeB", "pepehandsL", "PepeL3D", "PepeS", "PETTHEBEEF", "PETTHEEGG", "PETTHETRUMP", "ppBouncer", "ppDone", "ppFlip", "ppHop", "ppSlide", "sadgeCoom", "sadL", "SIPBEEF", "Slapp", "STONKS", "sumSmash", "SUPREMELEADER", "TeaTime", "THINKZEEF", "triangD", "triangPride", "TriBridge", "TriKool", "TriRun", "TrumpWeird", "WAYTOODANK", "WAYYTOOAPU", "WeirdDank", "weirdU", "YOURMOM", "ZULUL", "zyzzPls", "ZZoomer",
  // FFZ
    "4HEad", "4House", "Apu", "bathro1JAM", "DankFix", "dankHug", "eShrug", "EZY", "FDM", "FeelsDankMan", "FeelsOkayMan", "FeelsWeirdMan", "forsenCD", "forsenScoots", "forsenSheffE", "gachiGASM", "Grabahomie", "HandsUp", "HONEYDETECTED", "HYPERDANSGAME", "Kapp", "KKomrade", "KKonaS", "KKoooona", "KKrikey", "LULWide", "MegaLUL", "Okayge", "OMEGALUL", "paaaajaCmon", "PagChomp", "pajaPirate", "PAJAS", "peepoMadDank", "peepoSadDank", "peepoZ", "Pepege", "PepeHands", "pepeL", "pepeLaugh", "Pepepains", "pepoDank", "Pog", "ppL", "Sadge", "TriChomp", "TriDank", "TriSom", "WeebsOut", "weirdL",
 
  // GRIPHTHEFROG
 
  // BTTV
    "ANYGIFTERS", "BBaper", "Clap", "dankCrayon", "dankgachiJAM", "Dankge", "dankHug", "dankJAM", "dankPeek", "dankS", "dankSenor", "DonaldPls", "EatPooPoo", "EVENDANKERTHANWAYTOODANK", "FeelsBingMan", "FeelsBirthdayDank", "FeelsKnadMan", "FeelsOhWait", "FeelsRainMan", "forsenCoomer", "forsenDeer", "forsenDiscoSnake", "forsenGaGun", "forsenPls", "forsenShuffle", "forsenSWA", "forsenWC", "forsenYM", "forsSmash", "gachiANGEL", "gachiBASS", "gachiBOP", "gachiCOOL", "gachiGold", "gachiHop", "gachiHYPER", "gachiLOCKER", "gachiOnFIRE", "GachiPls", "gachiPRIDE", "gachiSAIYAN", "griphBATMAN", "griphJoy", "griphLOVE", "griphLUL", "griphRAGE", "GuitarTime", "headBang", "KKalinka", "KKool", "MODS", "nymnCorn", "pepeBASS", "pepeMeltdown", "ppBounce", "ppHop", "ppHopper", "Slapp", "TeaTime", "THATSREALLYTOODANK", "TriFi", "TriKool", "WAYTOODANK", "ZULUL",
  // FFZ
    "4HEad", "4House", "5Head", "earGASM", "EZY", "FDM", "FeelsDankMan", "FeelsOkayMan", "FeelsSexMan", "forsenFist", "forsenPirate", "forsenScoots", "forsenSheffy", "gachiGASM", "gachiSANTA", "griphBING", "griphCD", "griphT", "griphV", "griphW", "gShrug", "HandsUp", "HONEYDETECTED", "HYPERDANSGAMEW", "Kapp", "KKomrade", "KKoooona", "LULW", "MaN", "MEGAZULUL", "miniDank", "monkaOMEGA", "monkaS", "noxSorry", "noxWhat", "OMEGALUL", "PagChomp", "pajaCMON", "pajaDank", "peepoSadDank", "Pepega", "PepeHands", "pepeL", "PepeLaugh", "Pepepains", "qcxGoodMan", "qcxScoots", "VaN", "WeebsOut", "WeirdChamp",
 
  // EBBEL
 
  // BTTV
    "Clap", "forsenPls", "forsenReady", "forsenSWA", "gachiBASS", "GachiPls", "GuitarTime", "KKool", "PepeS", "pepeSheffyL", "ppHop", "TeaTime", "triangD", "TriKool", "WAYTOODANK", "YOURMOM", "ZULUL",
 
  // FFZ
    "4HEad", "eShrug", "ezDank", "FDM", "FeelsDankMan", "FeelsDonkMan", "FeelsNotsureMan", "FeelsOkayMan", "forsenCD", "forsenChin", "forsenComfy", "forsenScoots", "forsenSheffy", "forsenSmug", "gachiGASM", "HandsUp", "Kapp", "Kissahomie", "KKomrade", "LULW", "MaN", "ManFeels", "MegaLUL", "monakS", "monkaGIGA", "monkaOMEGA", "noxSorry", "noxWhat", "obamaWTF", "Okayge", "OMEGALUL", "paaaajaCmon", "PagChomp", "peepoOkay", "peepoSadDank", "PeepoWeird", "peepoZ", "PepeDead", "Pepege", "PepeHands", "pepeL", "pepeLaugh", "Pepepains", "ppL", "REEeee", "Sadge", "tooDank", "TriChomp", "WeebsOut", "weirdL",
 
// OTHER
 
  // EMOJIS
    "#⃣", "*⃣", "0⃣", "1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣", "9⃣", "©", "®", "🀄", "🃏", "🅰", "🅱", "🅾", "🅿", "🆎", "🆑", "🆒", "🆓", "🆔", "🆕", "🆖", "🆗", "🆘", "🆙", "🆚", "🇦🇨", "🇦🇩", "🇦🇪", "🇦🇫", "🇦🇬", "🇦🇮", "🇦🇱", "🇦🇲", "🇦🇴", "🇦🇶", "🇦🇷", "🇦🇸", "🇦🇹", "🇦🇺", "🇦🇼", "🇦🇽", "🇦🇿", "🇧🇦", "🇧🇧", "🇧🇩", "🇧🇪", "🇧🇫", "🇧🇬", "🇧🇭", "🇧🇮", "🇧🇯", "🇧🇱", "🇧🇲", "🇧🇳", "🇧🇴", "🇧🇶", "🇧🇷", "🇧🇸", "🇧🇹", "🇧🇻", "🇧🇼", "🇧🇾", "🇧🇿", "🇨🇦", "🇨🇨", "🇨🇩", "🇨🇫", "🇨🇬", "🇨🇭", "🇨🇮", "🇨🇰", "🇨🇱", "🇨🇲", "🇨🇳", "🇨🇴", "🇨🇵", "🇨🇷", "🇨🇺", "🇨🇻", "🇨🇼", "🇨🇽", "🇨🇾", "🇨🇿", "🇩🇪", "🇩🇬", "🇩🇯", "🇩🇰", "🇩🇲", "🇩🇴", "🇩🇿", "🇪🇦", "🇪🇨", "🇪🇪", "🇪🇬", "🇪🇭", "🇪🇷", "🇪🇸", "🇪🇹", "🇪🇺", "🇫🇮", "🇫🇯", "🇫🇰", "🇫🇲", "🇫🇴", "🇫🇷", "🇬🇦", "🇬🇧", "🇬🇩", "🇬🇪", "🇬🇫", "🇬🇬", "🇬🇭", "🇬🇮", "🇬🇱", "🇬🇲", "🇬🇳", "🇬🇵", "🇬🇶", "🇬🇷", "🇬🇸", "🇬🇹", "🇬🇺", "🇬🇼", "🇬🇾", "🇭🇰", "🇭🇲", "🇭🇳", "🇭🇷", "🇭🇹", "🇭🇺", "🇮🇨", "🇮🇩", "🇮🇪", "🇮🇱", "🇮🇲", "🇮🇳", "🇮🇴", "🇮🇶", "🇮🇷", "🇮🇸", "🇮🇹", "🇯🇪", "🇯🇲", "🇯🇴", "🇯🇵", "🇰🇪", "🇰🇬", "🇰🇭", "🇰🇮", "🇰🇲", "🇰🇳", "🇰🇵", "🇰🇷",
    "🇰🇼", "🇰🇾", "🇰🇿", "🇱🇦", "🇱🇧", "🇱🇨", "🇱🇮", "🇱🇰", "🇱🇷", "🇱🇸", "🇱🇹", "🇱🇺", "🇱🇻", "🇱🇾", "🇲🇦", "🇲🇨", "🇲🇩", "🇲🇪", "🇲🇫", "🇲🇬", "🇲🇭", "🇲🇰", "🇲🇱", "🇲🇲", "🇲🇳", "🇲🇴", "🇲🇵", "🇲🇶", "🇲🇷", "🇲🇸", "🇲🇹", "🇲🇺", "🇲🇻", "🇲🇼", "🇲🇽", "🇲🇾", "🇲🇿", "🇳🇦", "🇳🇨", "🇳🇪", "🇳🇫", "🇳🇬", "🇳🇮", "🇳🇱", "🇳🇴", "🇳🇵", "🇳🇷", "🇳🇺", "🇳🇿", "🇴🇲", "🇵🇦", "🇵🇪", "🇵🇫", "🇵🇬", "🇵🇭", "🇵🇰", "🇵🇱", "🇵🇲", "🇵🇳", "🇵🇷", "🇵🇸", "🇵🇹", "🇵🇼", "🇵🇾", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇸", "🇷🇺", "🇷🇼", "🇸🇦", "🇸🇧", "🇸🇨", "🇸🇩", "🇸🇪", "🇸🇬", "🇸🇭", "🇸🇮", "🇸🇯", "🇸🇰", "🇸🇱", "🇸🇲", "🇸🇳", "🇸🇴", "🇸🇷", "🇸🇸", "🇸🇹", "🇸🇻", "🇸🇽", "🇸🇾", "🇸🇿", "🇹🇦", "🇹🇨", "🇹🇩", "🇹🇫", "🇹🇬", "🇹🇭", "🇹🇯", "🇹🇰", "🇹🇱", "🇹🇲", "🇹🇳", "🇹🇴", "🇹🇷", "🇹🇹", "🇹🇻", "🇹🇼", "🇹🇿", "🇺🇦", "🇺🇬", "🇺🇲", "🇺🇳", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇦", "🇻🇨", "🇻🇪", "🇻🇬", "🇻🇮", "🇻🇳", "🇻🇺", "🇼🇫", "🇼🇸", "🇽🇰", "🇾🇪", "🇾🇹", "🇿🇦", "🇿🇲", "🇿🇼", "🈁", "🈂", "🈚", "🈯", "🈲", "🈳", "🈴", "🈵", "🈶", "🈷", "🈸", "🈹", "🈺", "🉐", "🉑", "🌀", "🌁", "🌂", "🌃", "🌄", "🌅", "🌆", "🌇", "🌈", "🌉", "🌊", "🌋",
    "🌌", "🌍", "🌎", "🌏", "🌐", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌝", "🌞", "🌟", "🌠", "🌡", "🌤", "🌥", "🌦", "🌧", "🌨", "🌩", "🌪", "🌫", "🌬", "🌭", "🌮", "🌯", "🌰", "🌱", "🌲", "🌳", "🌴", "🌵", "🌶", "🌷", "🌸", "🌹", "🌺", "🌻", "🌼", "🌽", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🍄", "🍅", "🍆", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍠", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨", "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "🍶", "🍷", "🍸", "🍹", "🍺", "🍻", "🍼", "🍽", "🍾", "🍿", "🎀", "🎁", "🎂", "🎃", "🎄", "🎅", "🎅🏻", "🎅🏼", "🎅🏽", "🎅🏾", "🎅🏿", "🎆", "🎇", "🎈", "🎉", "🎊", "🎋", "🎌", "🎍", "🎎", "🎏", "🎐", "🎑", "🎒", "🎓", "🎖", "🎗", "🎙", "🎚", "🎛", "🎞", "🎟", "🎠", "🎡",
    "🎢", "🎣", "🎤", "🎥", "🎦", "🎧", "🎨", "🎩", "🎪", "🎫", "🎬", "🎭", "🎮", "🎯", "🎰", "🎱", "🎲", "🎳", "🎴", "🎵", "🎶", "🎷", "🎸", "🎹", "🎺", "🎻", "🎼", "🎽", "🎾", "🎿", "🏀", "🏁", "🏂", "🏂🏻", "🏂🏼", "🏂🏽", "🏂🏾", "🏂🏿", "🏃", "🏃🏻", "🏃🏻‍♀", "🏃🏻‍♂", "🏃🏼", "🏃🏼‍♀", "🏃🏼‍♂", "🏃🏽", "🏃🏽‍♀", "🏃🏽‍♂", "🏃🏾", "🏃🏾‍♀", "🏃🏾‍♂", "🏃🏿", "🏃🏿‍♀", "🏃🏿‍♂", "🏃‍♀", "🏃‍♂", "🏄", "🏄🏻", "🏄🏻‍♀", "🏄🏻‍♂", "🏄🏼", "🏄🏼‍♀", "🏄🏼‍♂", "🏄🏽", "🏄🏽‍♀", "🏄🏽‍♂", "🏄🏾", "🏄🏾‍♀", "🏄🏾‍♂", "🏄🏿", "🏄🏿‍♀", "🏄🏿‍♂", "🏄‍♀", "🏄‍♂", "🏅", "🏆", "🏇", "🏇🏻", "🏇🏼", "🏇🏽", "🏇🏾", "🏇🏿", "🏈", "🏉", "🏊", "🏊🏻", "🏊🏻‍♀", "🏊🏻‍♂", "🏊🏼", "🏊🏼‍♀", "🏊🏼‍♂", "🏊🏽", "🏊🏽‍♀", "🏊🏽‍♂", "🏊🏾", "🏊🏾‍♀", "🏊🏾‍♂", "🏊🏿", "🏊🏿‍♀", "🏊🏿‍♂", "🏊‍♀", "🏊‍♂", "🏋🏻", "🏋🏻‍♀", "🏋🏻‍♂", "🏋🏼", "🏋🏼‍♀", "🏋🏼‍♂", "🏋🏽", "🏋🏽‍♀", "🏋🏽‍♂", "🏋🏾", "🏋🏾‍♀", "🏋🏾‍♂", "🏋🏿", "🏋🏿‍♀", "🏋🏿‍♂", "🏋", "🏋️‍♀️", "🏋️‍♂️", "🏌🏻", "🏌🏻‍♀", "🏌🏻‍♂", "🏌🏼", "🏌🏼‍♀", "🏌🏼‍♂", "🏌🏽", "🏌🏽‍♀", "🏌🏽‍♂", "🏌🏾", "🏌🏾‍♀", "🏌🏾‍♂", "🏌🏿", "🏌🏿‍♀", "🏌🏿‍♂", "🏌", "🏌️‍♀️", "🏌️‍♂️", "🏍", "🏎", "🏏", "🏐", "🏑", "🏒", "🏓", "🏔", "🏕",
    "🏖", "🏗", "🏘", "🏙", "🏚", "🏛", "🏜", "🏝", "🏞", "🏟", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🏰", "🏳", "🏳‍🌈", "🏴", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "🏵", "🏷", "🏸", "🏹", "🏺", "🏻", "🏼", "🏽", "🏾", "🏿", "🐀", "🐁", "🐂", "🐃", "🐄", "🐅", "🐆", "🐇", "🐈", "🐉", "🐊", "🐋", "🐌", "🐍", "🐎", "🐏", "🐐", "🐑", "🐒", "🐓", "🐔", "🐕", "🐖", "🐗", "🐘", "🐙", "🐚", "🐛", "🐜", "🐝", "🐞", "🐟", "🐠", "🐡", "🐢", "🐣", "🐤", "🐥", "🐦", "🐧", "🐨", "🐩", "🐪", "🐫", "🐬", "🐭", "🐮", "🐯", "🐰", "🐱", "🐲", "🐳", "🐴", "🐵", "🐶", "🐷", "🐸", "🐹", "🐺", "🐻", "🐼", "🐽", "🐾", "🐿", "👀", "👁", "👁️‍🗨️", "👂", "👂🏻", "👂🏼", "👂🏽", "👂🏾", "👂🏿", "👃", "👃🏻", "👃🏼", "👃🏽", "👃🏾", "👃🏿", "👄", "👅", "👆", "👆🏻", "👆🏼", "👆🏽", "👆🏾", "👆🏿", "👇", "👇🏻", "👇🏼", "👇🏽", "👇🏾", "👇🏿", "👈", "👈🏻", "👈🏼", "👈🏽", "👈🏾", "👈🏿", "👉", "👉🏻", "👉🏼", "👉🏽", "👉🏾", "👉🏿",
    "👊", "👊🏻", "👊🏼", "👊🏽", "👊🏾", "👊🏿", "👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿", "👌", "👌🏻", "👌🏼", "👌🏽", "👌🏾", "👌🏿", "👍", "👍🏻", "👍🏼", "👍🏽", "👍🏾", "👍🏿", "👎", "👎🏻", "👎🏼", "👎🏽", "👎🏾", "👎🏿", "👏", "👏🏻", "👏🏼", "👏🏽", "👏🏾", "👏🏿", "👐", "👐🏻", "👐🏼", "👐🏽", "👐🏾", "👐🏿", "👑", "👒", "👓", "👔", "👕", "👖", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "👞", "👟", "👠", "👡", "👢", "👣", "👤", "👥", "👦", "👦🏻", "👦🏼", "👦🏽", "👦🏾", "👦🏿", "👧", "👧🏻", "👧🏼", "👧🏽", "👧🏾", "👧🏿", "👨", "👨🏻", "👨🏻‍🌾", "👨🏻‍🍳", "👨🏻‍🎓", "👨🏻‍🎤", "👨🏻‍🎨", "👨🏻‍🏫", "👨🏻‍🏭", "👨🏻‍💻", "👨🏻‍💼", "👨🏻‍🔧", "👨🏻‍🔬", "👨🏻‍🚀", "👨🏻‍🚒", "👨🏻‍⚕", "👨🏻‍⚖", "👨🏻‍✈", "👨🏼", "👨🏼‍🌾", "👨🏼‍🍳", "👨🏼‍🎓", "👨🏼‍🎤", "👨🏼‍🎨", "👨🏼‍🏫", "👨🏼‍🏭", "👨🏼‍💻", "👨🏼‍💼", "👨🏼‍🔧", "👨🏼‍🔬", "👨🏼‍🚀", "👨🏼‍🚒", "👨🏼‍⚕", "👨🏼‍⚖", "👨🏼‍✈", "👨🏽", "👨🏽‍🌾", "👨🏽‍🍳", "👨🏽‍🎓", "👨🏽‍🎤", "👨🏽‍🎨", "👨🏽‍🏫", "👨🏽‍🏭", "👨🏽‍💻", "👨🏽‍💼", "👨🏽‍🔧", "👨🏽‍🔬", "👨🏽‍🚀", "👨🏽‍🚒", "👨🏽‍⚕", "👨🏽‍⚖", "👨🏽‍✈", "👨🏾", "👨🏾‍🌾", "👨🏾‍🍳", "👨🏾‍🎓", "👨🏾‍🎤", "👨🏾‍🎨", "👨🏾‍🏫", "👨🏾‍🏭", "👨🏾‍💻", "👨🏾‍💼", "👨🏾‍🔧", "👨🏾‍🔬", "👨🏾‍🚀", "👨🏾‍🚒", "👨🏾‍⚕", "👨🏾‍⚖", "👨🏾‍✈", "👨🏿", "👨🏿‍🌾", "👨🏿‍🍳",
    "👨🏿‍🎓", "👨🏿‍🎤", "👨🏿‍🎨", "👨🏿‍🏫", "👨🏿‍🏭", "👨🏿‍💻", "👨🏿‍💼", "👨🏿‍🔧", "👨🏿‍🔬", "👨🏿‍🚀", "👨🏿‍🚒", "👨🏿‍⚕", "👨🏿‍⚖", "👨🏿‍✈", "👨‍🌾", "👨‍🍳", "👨‍🎓", "👨‍🎤", "👨‍🎨", "👨‍🏫", "👨‍🏭", "👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👧‍👧", "👨‍👩‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👧‍👧", "👨‍💻", "👨‍💼", "👨‍🔧", "👨‍🔬", "👨‍🚀", "👨‍🚒", "👨‍⚕", "👨‍⚖", "👨‍✈", "👨‍❤‍👨", "👨‍❤‍💋‍👨", "👩", "👩🏻", "👩🏻‍🌾", "👩🏻‍🍳", "👩🏻‍🎓", "👩🏻‍🎤", "👩🏻‍🎨", "👩🏻‍🏫", "👩🏻‍🏭", "👩🏻‍💻", "👩🏻‍💼", "👩🏻‍🔧", "👩🏻‍🔬", "👩🏻‍🚀", "👩🏻‍🚒", "👩🏻‍⚕", "👩🏻‍⚖", "👩🏻‍✈", "👩🏼", "👩🏼‍🌾", "👩🏼‍🍳", "👩🏼‍🎓", "👩🏼‍🎤", "👩🏼‍🎨", "👩🏼‍🏫", "👩🏼‍🏭", "👩🏼‍💻", "👩🏼‍💼", "👩🏼‍🔧", "👩🏼‍🔬", "👩🏼‍🚀", "👩🏼‍🚒", "👩🏼‍⚕", "👩🏼‍⚖", "👩🏼‍✈", "👩🏽", "👩🏽‍🌾", "👩🏽‍🍳", "👩🏽‍🎓", "👩🏽‍🎤", "👩🏽‍🎨", "👩🏽‍🏫", "👩🏽‍🏭", "👩🏽‍💻", "👩🏽‍💼", "👩🏽‍🔧", "👩🏽‍🔬", "👩🏽‍🚀", "👩🏽‍🚒", "👩🏽‍⚕", "👩🏽‍⚖", "👩🏽‍✈", "👩🏾", "👩🏾‍🌾", "👩🏾‍🍳", "👩🏾‍🎓", "👩🏾‍🎤", "👩🏾‍🎨", "👩🏾‍🏫", "👩🏾‍🏭", "👩🏾‍💻", "👩🏾‍💼", "👩🏾‍🔧", "👩🏾‍🔬", "👩🏾‍🚀", "👩🏾‍🚒", "👩🏾‍⚕", "👩🏾‍⚖", "👩🏾‍✈", "👩🏿", "👩🏿‍🌾", "👩🏿‍🍳", "👩🏿‍🎓", "👩🏿‍🎤", "👩🏿‍🎨", "👩🏿‍🏫", "👩🏿‍🏭", "👩🏿‍💻", "👩🏿‍💼", "👩🏿‍🔧", "👩🏿‍🔬", "👩🏿‍🚀", "👩🏿‍🚒", "👩🏿‍⚕", "👩🏿‍⚖", "👩🏿‍✈", "👩‍🌾", "👩‍🍳", "👩‍🎓", "👩‍🎤", "👩‍🎨", "👩‍🏫", "👩‍🏭", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧",
    "👩‍👩‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👧‍👧", "👩‍💻", "👩‍💼", "👩‍🔧", "👩‍🔬", "👩‍🚀", "👩‍🚒", "👩‍⚕", "👩‍⚖", "👩‍✈", "👩‍❤‍👨", "👩‍❤‍👩", "👩‍❤‍💋‍👨", "👩‍❤‍💋‍👩", "👪", "👫", "👬", "👭", "👮", "👮🏻", "👮🏻‍♀", "👮🏻‍♂", "👮🏼", "👮🏼‍♀", "👮🏼‍♂", "👮🏽", "👮🏽‍♀", "👮🏽‍♂", "👮🏾", "👮🏾‍♀", "👮🏾‍♂", "👮🏿", "👮🏿‍♀", "👮🏿‍♂", "👮‍♀", "👮‍♂", "👯", "👯‍♀", "👯‍♂", "👰", "👰🏻", "👰🏼", "👰🏽", "👰🏾", "👰🏿", "👱", "👱🏻", "👱🏻‍♀", "👱🏻‍♂", "👱🏼", "👱🏼‍♀", "👱🏼‍♂", "👱🏽", "👱🏽‍♀", "👱🏽‍♂", "👱🏾", "👱🏾‍♀", "👱🏾‍♂", "👱🏿", "👱🏿‍♀", "👱🏿‍♂", "👱‍♀", "👱‍♂", "👲", "👲🏻", "👲🏼", "👲🏽", "👲🏾", "👲🏿", "👳", "👳🏻", "👳🏻‍♀", "👳🏻‍♂", "👳🏼", "👳🏼‍♀", "👳🏼‍♂", "👳🏽", "👳🏽‍♀", "👳🏽‍♂", "👳🏾", "👳🏾‍♀", "👳🏾‍♂", "👳🏿", "👳🏿‍♀", "👳🏿‍♂", "👳‍♀", "👳‍♂", "👴", "👴🏻", "👴🏼", "👴🏽", "👴🏾", "👴🏿", "👵", "👵🏻", "👵🏼", "👵🏽", "👵🏾", "👵🏿", "👶", "👶🏻", "👶🏼", "👶🏽", "👶🏾", "👶🏿", "👷", "👷🏻", "👷🏻‍♀", "👷🏻‍♂", "👷🏼", "👷🏼‍♀", "👷🏼‍♂", "👷🏽", "👷🏽‍♀", "👷🏽‍♂", "👷🏾", "👷🏾‍♀", "👷🏾‍♂", "👷🏿", "👷🏿‍♀", "👷🏿‍♂", "👷‍♀", "👷‍♂", "👸", "👸🏻", "👸🏼", "👸🏽", "👸🏾", "👸🏿", "👹", "👺", "👻", "👼", "👼🏻", "👼🏼", "👼🏽", "👼🏾", "👼🏿", "👽", "👾", "👿", "💀",
    "💁", "💁🏻", "💁🏻‍♀", "💁🏻‍♂", "💁🏼", "💁🏼‍♀", "💁🏼‍♂", "💁🏽", "💁🏽‍♀", "💁🏽‍♂", "💁🏾", "💁🏾‍♀", "💁🏾‍♂", "💁🏿", "💁🏿‍♀", "💁🏿‍♂", "💁‍♀", "💁‍♂", "💂", "💂🏻", "💂🏻‍♀", "💂🏻‍♂", "💂🏼", "💂🏼‍♀", "💂🏼‍♂", "💂🏽", "💂🏽‍♀", "💂🏽‍♂", "💂🏾", "💂🏾‍♀", "💂🏾‍♂", "💂🏿", "💂🏿‍♀", "💂🏿‍♂", "💂‍♀", "💂‍♂", "💃", "💃🏻", "💃🏼", "💃🏽", "💃🏾", "💃🏿", "💄", "💅", "💅🏻", "💅🏼", "💅🏽", "💅🏾", "💅🏿", "💆", "💆🏻", "💆🏻‍♀", "💆🏻‍♂", "💆🏼", "💆🏼‍♀", "💆🏼‍♂", "💆🏽", "💆🏽‍♀", "💆🏽‍♂", "💆🏾", "💆🏾‍♀", "💆🏾‍♂", "💆🏿", "💆🏿‍♀", "💆🏿‍♂", "💆‍♀", "💆‍♂", "💇", "💇🏻", "💇🏻‍♀", "💇🏻‍♂", "💇🏼", "💇🏼‍♀", "💇🏼‍♂", "💇🏽", "💇🏽‍♀", "💇🏽‍♂", "💇🏾", "💇🏾‍♀", "💇🏾‍♂", "💇🏿", "💇🏿‍♀", "💇🏿‍♂", "💇‍♀", "💇‍♂", "💈", "💉", "💊", "💋", "💌", "💍", "💎", "💏", "💐", "💑", "💒", "💓", "💔", "💕", "💖", "💗", "💘", "💙", "💚", "💛", "💜", "💝", "💞", "💟", "💠", "💡", "💢", "💣", "💤", "💥", "💦", "💧", "💨", "💩", "💪", "💪🏻", "💪🏼", "💪🏽", "💪🏾", "💪🏿", "💫", "💬", "💭", "💮", "💯", "💰", "💱", "💲", "💳", "💴", "💵", "💶", "💷", "💸", "💹", "💺", "💻", "💼", "💽", "💾", "💿", "📀",
    "📁", "📂", "📃", "📄", "📅", "📆", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "📏", "📐", "📑", "📒", "📓", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📛", "📜", "📝", "📞", "📟", "📠", "📡", "📢", "📣", "📤", "📥", "📦", "📧", "📨", "📩", "📪", "📫", "📬", "📭", "📮", "📯", "📰", "📱", "📲", "📳", "📴", "📵", "📶", "📷", "📸", "📹", "📺", "📻", "📼", "📽", "📿", "🔀", "🔁", "🔂", "🔃", "🔄", "🔅", "🔆", "🔇", "🔈", "🔉", "🔊", "🔋", "🔌", "🔍", "🔎", "🔏", "🔐", "🔑", "🔒", "🔓", "🔔", "🔕", "🔖", "🔗", "🔘", "🔙", "🔚", "🔛", "🔜", "🔝", "🔞", "🔟", "🔠", "🔡", "🔢", "🔣", "🔤", "🔥", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "🔬", "🔭", "🔮", "🔯", "🔰", "🔱", "🔲", "🔳", "🔴", "🔵", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "🔼", "🔽", "🕉", "🕊", "🕋", "🕌", "🕍", "🕎", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠",
    "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧", "🕯", "🕰", "🕳", "🕴🏻", "🕴🏼", "🕴🏽", "🕴🏾", "🕴🏿", "🕴", "🕵🏻", "🕵🏻‍♀", "🕵🏻‍♂", "🕵🏼", "🕵🏼‍♀", "🕵🏼‍♂", "🕵🏽", "🕵🏽‍♀", "🕵🏽‍♂", "🕵🏾", "🕵🏾‍♀", "🕵🏾‍♂", "🕵🏿", "🕵🏿‍♀", "🕵🏿‍♂", "🕵", "🕵️‍♀️", "🕵️‍♂️", "🕶", "🕷", "🕸", "🕹", "🕺", "🕺🏻", "🕺🏼", "🕺🏽", "🕺🏾", "🕺🏿", "🖇", "🖊", "🖋", "🖌", "🖍", "🖐🏻", "🖐🏼", "🖐🏽", "🖐🏾", "🖐🏿", "🖐", "🖕", "🖕🏻", "🖕🏼", "🖕🏽", "🖕🏾", "🖕🏿", "🖖", "🖖🏻", "🖖🏼", "🖖🏽", "🖖🏾", "🖖🏿", "🖤", "🖥", "🖨", "🖱", "🖲", "🖼", "🗂", "🗃", "🗄", "🗑", "🗒", "🗓", "🗜", "🗝", "🗞", "🗡", "🗣", "🗨", "🗯", "🗳", "🗺", "🗻", "🗼", "🗽", "🗾", "🗿", "😀", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", "😋", "😌", "😍", "😎", "😏", "😐", "😑", "😒", "😓", "😔", "😕", "😖", "😗", "😘", "😙", "😚", "😛", "😜", "😝", "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥", "😦", "😧", "😨", "😩", "😪", "😫", "😬", "😭", "😮", "😯", "😰", "😱", "😲", "😳", "😴", "😵", "😶", "😷", "😸", "😹",
    "😺", "😻", "😼", "😽", "😾", "😿", "🙀", "🙁", "🙂", "🙃", "🙄", "🙅", "🙅🏻", "🙅🏻‍♀", "🙅🏻‍♂", "🙅🏼", "🙅🏼‍♀", "🙅🏼‍♂", "🙅🏽", "🙅🏽‍♀", "🙅🏽‍♂", "🙅🏾", "🙅🏾‍♀", "🙅🏾‍♂", "🙅🏿", "🙅🏿‍♀", "🙅🏿‍♂", "🙅‍♀", "🙅‍♂", "🙆", "🙆🏻", "🙆🏻‍♀", "🙆🏻‍♂", "🙆🏼", "🙆🏼‍♀", "🙆🏼‍♂", "🙆🏽", "🙆🏽‍♀", "🙆🏽‍♂", "🙆🏾", "🙆🏾‍♀", "🙆🏾‍♂", "🙆🏿", "🙆🏿‍♀", "🙆🏿‍♂", "🙆‍♀", "🙆‍♂", "🙇", "🙇🏻", "🙇🏻‍♀", "🙇🏻‍♂", "🙇🏼", "🙇🏼‍♀", "🙇🏼‍♂", "🙇🏽", "🙇🏽‍♀", "🙇🏽‍♂", "🙇🏾", "🙇🏾‍♀", "🙇🏾‍♂", "🙇🏿", "🙇🏿‍♀", "🙇🏿‍♂", "🙇‍♀", "🙇‍♂", "🙈", "🙉", "🙊", "🙋", "🙋🏻", "🙋🏻‍♀", "🙋🏻‍♂", "🙋🏼", "🙋🏼‍♀", "🙋🏼‍♂", "🙋🏽", "🙋🏽‍♀", "🙋🏽‍♂", "🙋🏾", "🙋🏾‍♀", "🙋🏾‍♂", "🙋🏿", "🙋🏿‍♀", "🙋🏿‍♂", "🙋‍♀", "🙋‍♂", "🙌", "🙌🏻", "🙌🏼", "🙌🏽", "🙌🏾", "🙌🏿", "🙍", "🙍🏻", "🙍🏻‍♀", "🙍🏻‍♂", "🙍🏼", "🙍🏼‍♀", "🙍🏼‍♂", "🙍🏽", "🙍🏽‍♀", "🙍🏽‍♂", "🙍🏾", "🙍🏾‍♀", "🙍🏾‍♂", "🙍🏿", "🙍🏿‍♀", "🙍🏿‍♂", "🙍‍♀", "🙍‍♂", "🙎", "🙎🏻", "🙎🏻‍♀", "🙎🏻‍♂", "🙎🏼", "🙎🏼‍♀", "🙎🏼‍♂", "🙎🏽", "🙎🏽‍♀", "🙎🏽‍♂", "🙎🏾", "🙎🏾‍♀", "🙎🏾‍♂", "🙎🏿", "🙎🏿‍♀", "🙎🏿‍♂", "🙎‍♀", "🙎‍♂", "🙏", "🙏🏻", "🙏🏼", "🙏🏽", "🙏🏾", "🙏🏿", "🚀", "🚁", "🚂", "🚃", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚋", "🚌",
    "🚍", "🚎", "🚏", "🚐", "🚑", "🚒", "🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜", "🚝", "🚞", "🚟", "🚠", "🚡", "🚢", "🚣", "🚣🏻", "🚣🏻‍♀", "🚣🏻‍♂", "🚣🏼", "🚣🏼‍♀", "🚣🏼‍♂", "🚣🏽", "🚣🏽‍♀", "🚣🏽‍♂", "🚣🏾", "🚣🏾‍♀", "🚣🏾‍♂", "🚣🏿", "🚣🏿‍♀", "🚣🏿‍♂", "🚣‍♀", "🚣‍♂", "🚤", "🚥", "🚦", "🚧", "🚨", "🚩", "🚪", "🚫", "🚬", "🚭", "🚮", "🚯", "🚰", "🚱", "🚲", "🚳", "🚴", "🚴🏻", "🚴🏻‍♀", "🚴🏻‍♂", "🚴🏼", "🚴🏼‍♀", "🚴🏼‍♂", "🚴🏽", "🚴🏽‍♀", "🚴🏽‍♂", "🚴🏾", "🚴🏾‍♀", "🚴🏾‍♂", "🚴🏿", "🚴🏿‍♀", "🚴🏿‍♂", "🚴‍♀", "🚴‍♂", "🚵", "🚵🏻", "🚵🏻‍♀", "🚵🏻‍♂", "🚵🏼", "🚵🏼‍♀", "🚵🏼‍♂", "🚵🏽", "🚵🏽‍♀", "🚵🏽‍♂", "🚵🏾", "🚵🏾‍♀", "🚵🏾‍♂", "🚵🏿", "🚵🏿‍♀", "🚵🏿‍♂", "🚵‍♀", "🚵‍♂", "🚶", "🚶🏻", "🚶🏻‍♀", "🚶🏻‍♂", "🚶🏼", "🚶🏼‍♀", "🚶🏼‍♂", "🚶🏽", "🚶🏽‍♀", "🚶🏽‍♂", "🚶🏾", "🚶🏾‍♀", "🚶🏾‍♂", "🚶🏿", "🚶🏿‍♀", "🚶🏿‍♂", "🚶‍♀", "🚶‍♂", "🚷", "🚸", "🚹", "🚺", "🚻", "🚼", "🚽", "🚾", "🚿", "🛀", "🛀🏻", "🛀🏼", "🛀🏽", "🛀🏾", "🛀🏿", "🛁", "🛂", "🛃", "🛄", "🛅", "🛋", "🛌", "🛌🏻", "🛌🏼", "🛌🏽", "🛌🏾", "🛌🏿", "🛍", "🛎", "🛏", "🛐", "🛑", "🛒", "🛠", "🛡", "🛢", "🛣", "🛤",
    "🛥", "🛩", "🛫", "🛬", "🛰", "🛳", "🛴", "🛵", "🛶", "🛷", "🛸", "🤐", "🤑", "🤒", "🤓", "🤔", "🤕", "🤖", "🤗", "🤘", "🤘🏻", "🤘🏼", "🤘🏽", "🤘🏾", "🤘🏿", "🤙", "🤙🏻", "🤙🏼", "🤙🏽", "🤙🏾", "🤙🏿", "🤚", "🤚🏻", "🤚🏼", "🤚🏽", "🤚🏾", "🤚🏿", "🤛", "🤛🏻", "🤛🏼", "🤛🏽", "🤛🏾", "🤛🏿", "🤜", "🤜🏻", "🤜🏼", "🤜🏽", "🤜🏾", "🤜🏿", "🤝", "🤞", "🤞🏻", "🤞🏼", "🤞🏽", "🤞🏾", "🤞🏿", "🤟", "🤟🏻", "🤟🏼", "🤟🏽", "🤟🏾", "🤟🏿", "🤠", "🤡", "🤢", "🤣", "🤤", "🤥", "🤦", "🤦🏻", "🤦🏻‍♀", "🤦🏻‍♂", "🤦🏼", "🤦🏼‍♀", "🤦🏼‍♂", "🤦🏽", "🤦🏽‍♀", "🤦🏽‍♂", "🤦🏾", "🤦🏾‍♀", "🤦🏾‍♂", "🤦🏿", "🤦🏿‍♀", "🤦🏿‍♂", "🤦‍♀", "🤦‍♂", "🤧", "🤨", "🤩", "🤪", "🤫", "🤬", "🤭", "🤮", "🤯", "🤰", "🤰🏻", "🤰🏼", "🤰🏽", "🤰🏾", "🤰🏿", "🤱", "🤱🏻", "🤱🏼", "🤱🏽", "🤱🏾", "🤱🏿", "🤲", "🤲🏻", "🤲🏼", "🤲🏽", "🤲🏾", "🤲🏿", "🤳", "🤳🏻", "🤳🏼", "🤳🏽", "🤳🏾", "🤳🏿", "🤴", "🤴🏻", "🤴🏼", "🤴🏽", "🤴🏾", "🤴🏿", "🤵", "🤵🏻", "🤵🏼", "🤵🏽", "🤵🏾", "🤵🏿", "🤶", "🤶🏻", "🤶🏼", "🤶🏽", "🤶🏾", "🤶🏿", "🤷", "🤷🏻", "🤷🏻‍♀", "🤷🏻‍♂", "🤷🏼", "🤷🏼‍♀", "🤷🏼‍♂", "🤷🏽", "🤷🏽‍♀", "🤷🏽‍♂", "🤷🏾", "🤷🏾‍♀",
    "🤷🏾‍♂", "🤷🏿", "🤷🏿‍♀", "🤷🏿‍♂", "🤷‍♀", "🤷‍♂", "🤸", "🤸🏻", "🤸🏻‍♀", "🤸🏻‍♂", "🤸🏼", "🤸🏼‍♀", "🤸🏼‍♂", "🤸🏽", "🤸🏽‍♀", "🤸🏽‍♂", "🤸🏾", "🤸🏾‍♀", "🤸🏾‍♂", "🤸🏿", "🤸🏿‍♀", "🤸🏿‍♂", "🤸‍♀", "🤸‍♂", "🤹", "🤹🏻", "🤹🏻‍♀", "🤹🏻‍♂", "🤹🏼", "🤹🏼‍♀", "🤹🏼‍♂", "🤹🏽", "🤹🏽‍♀", "🤹🏽‍♂", "🤹🏾", "🤹🏾‍♀", "🤹🏾‍♂", "🤹🏿", "🤹🏿‍♀", "🤹🏿‍♂", "🤹‍♀", "🤹‍♂", "🤺", "🤼", "🤼‍♀", "🤼‍♂", "🤽", "🤽🏻", "🤽🏻‍♀", "🤽🏻‍♂", "🤽🏼", "🤽🏼‍♀", "🤽🏼‍♂", "🤽🏽", "🤽🏽‍♀", "🤽🏽‍♂", "🤽🏾", "🤽🏾‍♀", "🤽🏾‍♂", "🤽🏿", "🤽🏿‍♀", "🤽🏿‍♂", "🤽‍♀", "🤽‍♂", "🤾", "🤾🏻", "🤾🏻‍♀", "🤾🏻‍♂", "🤾🏼", "🤾🏼‍♀", "🤾🏼‍♂", "🤾🏽", "🤾🏽‍♀", "🤾🏽‍♂", "🤾🏾", "🤾🏾‍♀", "🤾🏾‍♂", "🤾🏿", "🤾🏿‍♀", "🤾🏿‍♂", "🤾‍♀", "🤾‍♂", "🥀", "🥁", "🥂", "🥃", "🥄", "🥅", "🥇", "🥈", "🥉", "🥊", "🥋", "🥌", "🥐", "🥑", "🥒", "🥓", "🥔", "🥕", "🥖", "🥗", "🥘", "🥙", "🥚", "🥛", "🥜", "🥝", "🥞", "🥟", "🥠", "🥡", "🥢", "🥣", "🥤", "🥥", "🥦", "🥧", "🥨", "🥩", "🥪", "🥫", "🦀", "🦁", "🦂", "🦃", "🦄", "🦅", "🦆", "🦇", "🦈", "🦉", "🦊", "🦋", "🦌", "🦍", "🦎", "🦏", "🦐", "🦑", "🦒", "🦓", "🦔", "🦕", "🦖",
    "🧀", "🧐", "🧑", "🧑🏻", "🧑🏼", "🧑🏽", "🧑🏾", "🧑🏿", "🧒", "🧒🏻", "🧒🏼", "🧒🏽", "🧒🏾", "🧒🏿", "🧓", "🧓🏻", "🧓🏼", "🧓🏽", "🧓🏾", "🧓🏿", "🧔", "🧔🏻", "🧔🏼", "🧔🏽", "🧔🏾", "🧔🏿", "🧕", "🧕🏻", "🧕🏼", "🧕🏽", "🧕🏾", "🧕🏿", "🧖", "🧖🏻", "🧖🏻‍♀", "🧖🏻‍♂", "🧖🏼", "🧖🏼‍♀", "🧖🏼‍♂", "🧖🏽", "🧖🏽‍♀", "🧖🏽‍♂", "🧖🏾", "🧖🏾‍♀", "🧖🏾‍♂", "🧖🏿", "🧖🏿‍♀", "🧖🏿‍♂", "🧖‍♀", "🧖‍♂", "🧗", "🧗🏻", "🧗🏻‍♀", "🧗🏻‍♂", "🧗🏼", "🧗🏼‍♀", "🧗🏼‍♂", "🧗🏽", "🧗🏽‍♀", "🧗🏽‍♂", "🧗🏾", "🧗🏾‍♀", "🧗🏾‍♂", "🧗🏿", "🧗🏿‍♀", "🧗🏿‍♂", "🧗‍♀", "🧗‍♂", "🧘", "🧘🏻", "🧘🏻‍♀", "🧘🏻‍♂", "🧘🏼", "🧘🏼‍♀", "🧘🏼‍♂", "🧘🏽", "🧘🏽‍♀", "🧘🏽‍♂", "🧘🏾", "🧘🏾‍♀", "🧘🏾‍♂", "🧘🏿", "🧘🏿‍♀", "🧘🏿‍♂", "🧘‍♀", "🧘‍♂", "🧙", "🧙🏻", "🧙🏻‍♀", "🧙🏻‍♂", "🧙🏼", "🧙🏼‍♀", "🧙🏼‍♂", "🧙🏽", "🧙🏽‍♀", "🧙🏽‍♂", "🧙🏾", "🧙🏾‍♀", "🧙🏾‍♂", "🧙🏿", "🧙🏿‍♀", "🧙🏿‍♂", "🧙‍♀", "🧙‍♂", "🧚", "🧚🏻", "🧚🏻‍♀", "🧚🏻‍♂", "🧚🏼", "🧚🏼‍♀", "🧚🏼‍♂", "🧚🏽", "🧚🏽‍♀", "🧚🏽‍♂", "🧚🏾", "🧚🏾‍♀", "🧚🏾‍♂", "🧚🏿", "🧚🏿‍♀", "🧚🏿‍♂", "🧚‍♀", "🧚‍♂", "🧛", "🧛🏻", "🧛🏻‍♀", "🧛🏻‍♂", "🧛🏼", "🧛🏼‍♀", "🧛🏼‍♂", "🧛🏽", "🧛🏽‍♀", "🧛🏽‍♂", "🧛🏾", "🧛🏾‍♀", "🧛🏾‍♂", "🧛🏿", "🧛🏿‍♀", "🧛🏿‍♂", "🧛‍♀", "🧛‍♂", "🧜", "🧜🏻", "🧜🏻‍♀", "🧜🏻‍♂", "🧜🏼", "🧜🏼‍♀", "🧜🏼‍♂", "🧜🏽",
    "🧜🏽‍♀", "🧜🏽‍♂", "🧜🏾", "🧜🏾‍♀", "🧜🏾‍♂", "🧜🏿", "🧜🏿‍♀", "🧜🏿‍♂", "🧜‍♀", "🧜‍♂", "🧝", "🧝🏻", "🧝🏻‍♀", "🧝🏻‍♂", "🧝🏼", "🧝🏼‍♀", "🧝🏼‍♂", "🧝🏽", "🧝🏽‍♀", "🧝🏽‍♂", "🧝🏾", "🧝🏾‍♀", "🧝🏾‍♂", "🧝🏿", "🧝🏿‍♀", "🧝🏿‍♂", "🧝‍♀", "🧝‍♂", "🧞", "🧞‍♀", "🧞‍♂", "🧟", "🧟‍♀", "🧟‍♂", "🧠", "🧡", "🧢", "🧣", "🧤", "🧥", "🧦", "‼", "⁉", "™", "ℹ", "↔", "↕", "↖", "↗", "↘", "↙", "↩", "↪", "⌚", "⌛", "⌨", "⏏", "⏩", "⏪", "⏫", "⏬", "⏭", "⏮", "⏯", "⏰", "⏱", "⏲", "⏳", "⏸", "⏹", "⏺", "Ⓜ", "▪", "▫", "▶", "◀", "◻", "◼", "◽", "◾", "☀", "☁", "☂", "☃", "☄", "☎", "☑", "☔", "☕", "☘", "☝🏻", "☝🏼", "☝🏽", "☝🏾", "☝🏿", "☝", "☠", "☢", "☣", "☦", "☪", "☮", "☯", "☸", "☹", "☺", "♀", "♂", "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓", "♠", "♣", "♥", "♦", "♨", "♻", "♿", "⚒", "⚓", "⚔", "⚕", "⚖", "⚗", "⚙", "⚛", "⚜", "⚠", "⚡", "⚪", "⚫", "⚰", "⚱", "⚽", "⚾", "⛄", "⛅", "⛈", "⛎", "⛏", "⛑", "⛓", "⛔", "⛩", "⛪", "⛰", "⛱", "⛲", "⛳", "⛴",
    "⛵", "⛷", "⛸", "⛹🏻", "⛹🏻‍♀", "⛹🏻‍♂", "⛹🏼", "⛹🏼‍♀", "⛹🏼‍♂", "⛹🏽", "⛹🏽‍♀", "⛹🏽‍♂", "⛹🏾", "⛹🏾‍♀", "⛹🏾‍♂", "⛹🏿", "⛹🏿‍♀", "⛹🏿‍♂", "⛹", "⛹️‍♀️", "⛹️‍♂️", "⛺", "⛽", "✂", "✅", "✈", "✉", "✊", "✊🏻", "✊🏼", "✊🏽", "✊🏾", "✊🏿", "✋", "✋🏻", "✋🏼", "✋🏽", "✋🏾", "✋🏿", "✌🏻", "✌🏼", "✌🏽", "✌🏾", "✌🏿", "✌", "✍🏻", "✍🏼", "✍🏽", "✍🏾", "✍🏿", "✍", "✏", "✒", "✔", "✖", "✝", "✡", "✨", "✳", "✴", "❄", "❇", "❌", "❎", "❓", "❔", "❕", "❗", "❣", "❤", "➕", "➖", "➗", "➡", "➰", "➿", "⤴", "⤵", "⬅", "⬆", "⬇", "⬛", "⬜", "⭐", "⭕", "〰", "〽", "㊗", "㊙"
];
 
var forbiddenEcho = ['$remind', '$notify', '!filters', '!set', '.help', '.w', '.disconnect', '.mod', '.vip', '.color', '.user', '.ban', '.unban', '.timeout', '.untimeout', '.slow', '.slowoff', '.r9kbeta', '.r9kbetaoff', '.emoteonly', '.emoteonlyoff', '.clear', '.subscribers', '.subscribersoff', '.followers', '.followersoff', '.part', '.unmod', '.unvip', '.block', '.unblock', '!cancelraffle', '!closestore', '!disablesfx', '!editcounter', '!enablesfx', '!kappagen', '!openstore', '!pause', '!permit', '!ping', '!play', '!removesong', '!skip', '!songqueue', '!srclear', '/ignore', '/unignore', '!cmd', '!command', '!slots', '!roulette','/help', '/w', '/disconnect', '/mod', '/vip', '/color', '/user', '/ban', '/unban', '/timeout', '/untimeout', '/slow', '/slowoff', '/r9kbeta', '/r9kbetaoff', '/emoteonly', '/emoteonlyoff', '/clear', '/subscribers', '/subscribersoff', '/followers', '/followersoff', '/part', '/unmod', '/unvip', '/block', '/unblock',];
 
function coolDownCheck(channel, seconds, callback, params){
  let now = Math.round(new Date().getTime() / 1000);
  if (now >= lastCommandTime+seconds){
    lastCommandTime = Math.round(new Date().getTime() / 1000);
    callback(...params);
  }
}
 
function onMessageHandler (target, context, msg, self) {
  if (self) { 
    return; 
  } 
 
  const commandName = msg.trim().split(" ");
 
  switch(commandName[0]) {
 
/*    case '>test':
      client.say(target, `${context['display-name'].toLowerCase()}`);
      break; */
 
      case '>logs':
        coolDownCheck(target, 5, function(){
          var logname = commandName[1];
          var logchannel = commandName[2];
          var logmonth = commandName[3];
          var logyear = commandName[4];
 
            if (typeof logchannel === 'undefined') {
              logchannel = target.substring(1);
            };
            if (typeof logname === 'undefined') {
              logname = context['display-name'].toLowerCase();
            };
            if (typeof logmonth === 'undefined') {
              logmonth = new Date().getMonth() + 1;
            };
            if (typeof logyear === 'undefined') {
              logyear = new Date().getFullYear();
            };
          client.say(target, `https://logs.ivr.fi/channel/${logchannel.toLowerCase()}/user/${logname.toLowerCase()}/${logyear}/${logmonth}`); }, []);
      break;
 
      case '>channellogs':
        coolDownCheck(target, 5, function(){
          var logchannel = commandName[1];
          var logday = commandName[2];
          var logmonth = commandName[3];
          var logyear = commandName[4];
 
            if (typeof logchannel === 'undefined') {
              logchannel = target.substring(1);
            };
            if (typeof logday === 'undefined') {
              logday = new Date().getDate()
            };
            if (typeof logmonth === 'undefined') {
              logmonth = new Date().getMonth() + 1;
            };
            if (typeof logyear === 'undefined') {
              logyear = new Date().getFullYear();
            };
          client.say(target, `https://logs.ivr.fi/channel/${logchannel.toLowerCase()}/${logyear}/${logmonth}/${logday}`); }, []);
      break;
      case '>roll':
      function rollDice () {  
        const sides = parseInt(commandName[1]);
        return Math.floor(Math.random() * sides) + 1;
      }
      const num = rollDice();
      coolDownCheck(target, 5, function(){
      client.say(target, `${num}`); }, []);
      break;
 
      case '>ping':
      coolDownCheck(target, 3, function(){
      client.say(target, `pong! 🏓 ppHop 🏓`); }, []);
      break;
 
      case '>commands':
      coolDownCheck(target, 5, function(){
      client.say(target, `Current Commands are: >roll, >ping, >commands, >echo, >DoctorPls, >forsenReady, >triangD, >forsenPls, >forsenDiscoSnake, >WAYTOODANK, >eprint, >cube, >pyramid, >help, >logs, >spread, >dna, >channellogs [Last Updated: 1/05/2020]`); }, []);
      break;
 
      case '>echo':
      commandName.shift();
      if (commandName[0] === '!givepoints') {
        if (context['display-name'] !== 'Bander423') {
          coolDownCheck(target, 5, function(){
          client.say(target, `!givepoints Bander423 all`); }, []);
        return;
        } else {
          coolDownCheck(target, 5, function(){
          client.say(target, commandName.join(" ")); }, []);
          return; 
        }
      }
      if (commandName[0] === '!give') {
        if (context['display-name'] !== 'Bander423') {
          coolDownCheck(target, 5, function(){
          client.say(target, `!give Bander423 all`); }, []);
        return;
        } else {
          coolDownCheck(target, 5, function(){
          client.say(target, commandName.join(" ")); }, []);
          return; 
        }
      }
      if (forbiddenEcho.includes(commandName[0])) {
        client.say(target, `@` + context['display-name'] + ` FeelsWeirdMan`);
        return;
        } else {
          coolDownCheck(target, 5, function(){
          client.say(target, commandName.join(" ")); }, []);
        }
      coolDownCheck(target, 5, function(){
      client.say(target, commandName.join(" ")); }, []);
      break;
 
      case '>DoctorPls':
      coolDownCheck(target, 5, function(){
      DoctorPls(target); }, []);
      break;
 
      case '>forsenDiscoSnake':
      coolDownCheck(target, 5, function(){
      forsenDiscoSnake(target); }, []);
      break;
 
      case '>triangD':
      coolDownCheck(target, 5, function(){
      triangD(target); }, []);
      break;  
 
      case '>WAYTOODANK':
      coolDownCheck(target, 5, function(){
      WAYTOODANK(target); }, []);
      break;  
 
      case '>forsenReady':
      coolDownCheck(target, 5, function(){
      forsenReady(target); }, []); 
      break; 
 
      case '>forsenPls':
      coolDownCheck(target, 5, function(){
      forsenPls(target); }, []);  
      break;
 
      case '>flashbang':
      coolDownCheck(target, 5, function(){
      flashbang(target); }, []); 
      break;
 
      case '>help':
        switch(commandName[1]) {
          case commandName[1] = undefined:
            coolDownCheck(target, 5, function(){
              client.say(target, `This command is to be used with another command name (>help {command name})`); }, []); 
            break;
          case 'roll':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >roll {number} | Def: Rolls a dice with the number of faces used | Info: Only use positive integer numbers`); }, []); 
            break;
 
          case 'ping':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >ping | Def: Pings the bot | Info: eShrug`); }, []); 
            break;
 
          case 'commands':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >commands | Def: Gives a full list of commands | Info: Including this command forsenScoots`); }, []); 
            break;
 
          case 'echo':
            coolDownCheck(target, 1, function(){
              client.say(target, `Use: >echo {phrase} | Def: Repeats the phrase given | Info: Don't try anything stupid paaaajaCmon`); }, []); 
            break;
 
          case 'DoctorPls':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >DoctorPls | Def: Prints the DoctorPls ascii | Info: 5 second cooldown`); }, []); 
            break;
 
          case 'forsenReady':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >forsenReady | Def: Prints the forsenReady ascii | Info: 5 second cooldown`); }, []); 
            break;
 
          case 'triangD':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >triangD | Def: Prints the triangD ascii | Info: 5 second cooldown`); }, []); 
            break;
 
          case 'forsenPls':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >forsenPls | Def: Prints the forsenPls ascii | Info: 5 second cooldown`); }, []); 
            break;
 
          case 'forsenDiscoSnake':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >forsenDiscoSnake | Def: Prints the forsenDiscoSnake ascii | Info: 5 second cooldown`); }, []); 
            break;
 
          case 'WAYTOODANK':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >WAYTOODANK | Def: Prints the WAYTOODANK ascii | Info: 5 second cooldown`); }, []); 
            break;
 
          case 'eprint':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >eprint {word} {emote} | Def: Prints a word out using an emote | Info: 5 second cooldown, Sub emotes cannot be used, wide and small emotes cannot be used, word length limit is 5`); }, []); 
            break;
 
          case 'cube':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >cube {emote} | Def: Prints a square out using an emote | Info: Sub emotes cannot be used, wide and small emotes cannot be used`); }, []); 
            break;
 
          case 'pyramid':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >pyramid {emote} | Def: Prints a pyramid out using an emote | Info: Sub emotes cannot be used, wide and small emotes cannot be used`); }, []); 
            break;
 
          case 'spread':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >spread {emote} | Def: Spreads an emote in a message | Info: Sub emotes cannot be used, wide and small emotes cannot be used`); }, []); 
            break;
 
          case 'dna':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >dna {emote} | Def: Prints a DNA pattern of an Emote | Info: Sub emotes cannot be used, wide and small emotes cannot be used`); }, []); 
            break;
 
          case 'logs':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >logs {name} {channel} {month} {year} | Def: Shows the logs from the input given | Info: Only works with channels that have logs.ivr.fi logs, month must be an integer (March = 3)`); }, []); 
            break;
          case 'channellogs':
            coolDownCheck(target, 5, function(){
              client.say(target, `Use: >logs {day} {channel} {month} {year} | Def: Shows the entire logs for the channel given for the day provided | Info: Only works with channels that have logs.ivr.fi logs, month and day must be an integer (March = 3)`); }, []); 
            break;
        }
 
      case '>pyramid':
        if (longEmotes.includes(commandName[1])) {
          coolDownCheck(target, 5, function(){
          client.say(target, `That emote is too long NaM`); }, []);
          return;
        }
        if (smolEmotes.includes(commandName[1])) {
          coolDownCheck(target, 5, function(){
          client.say(target, `That emote is too smol NaM`); }, []);
          return;
        }
        if (useEmotes.includes(commandName[1])) {
          coolDownCheck(target, 5, pyramider, [target, commandName[1]]);
          return;
        } else {
            coolDownCheck(target, 5, function(){
            client.say(target, `That is not an emote NaM`); 
            return; }, []); }
        break;  
 
        case '>cube':
        if (longEmotes.includes(commandName[1])) {
          coolDownCheck(target, 5, function(){
          client.say(target, `That emote is too long NaM`); }, []);
          return;
        }
        if (smolEmotes.includes(commandName[1])) {
          coolDownCheck(target, 5, function(){
          client.say(target, `That emote is too smol NaM`); }, []);
          return;
        }
        if (useEmotes.includes(commandName[1])) {
          coolDownCheck(target, 5, cube, [target, commandName[1]]);
          return;
        } else {
            coolDownCheck(target, 5, function(){
            client.say(target, `That is not an emote NaM`); 
            return; }, []); }
        break;            
 
        case '>spread':
        if (longEmotes.includes(commandName[1])) {
          coolDownCheck(target, 5, function(){
          client.say(target, `That emote is too long NaM`); }, []);
          return;
        }
        if (smolEmotes.includes(commandName[1])) {
          coolDownCheck(target, 5, function(){
          client.say(target, `That emote is too smol NaM`); }, []);
          return;
        }
        if (useEmotes.includes(commandName[1])) {
          coolDownCheck(target, 5, spreader, [target, commandName[1]]);
          return;
        } else {
            coolDownCheck(target, 5, function(){
            client.say(target, `That is not an emote NaM`); 
            return; }, []); }
        break;
 
        case '>dna':
          if (longEmotes.includes(commandName[1])) {
            coolDownCheck(target, 5, function(){
            client.say(target, `That emote is too long NaM`); }, []);
            return;
          }
          if (smolEmotes.includes(commandName[1])) {
            coolDownCheck(target, 5, function(){
            client.say(target, `That emote is too smol NaM`); }, []);
            return;
          }
          if (useEmotes.includes(commandName[1])) {
            coolDownCheck(target, 5, DNA, [target, commandName[1]]);
            return;
          } else {
              coolDownCheck(target, 5, function(){
              client.say(target, `That is not an emote NaM`); 
              return; }, []); }
          break;
 
        case '>eprint':
          if (commandName[1].length > 5) {
          coolDownCheck(target, 5, function(){
          client.say(target, `That word is too long NaM`); }, []);
          return;
        }
        if (longEmotes.includes(commandName[2])) {
          coolDownCheck(target, 5, function(){
          client.say(target, `That emote is too long NaM`); }, []);
          return;
        }
        if (smolEmotes.includes(commandName[2])) {
          coolDownCheck(target, 5, function(){
          client.say(target, `That emote is too smol NaM`); }, []);
          return;
        }
        if (useEmotes.includes(commandName[2])) {
          coolDownCheck(target, 5, textPrinter, [target, commandName[1], commandName[2]]);
          return;
        } else {
          coolDownCheck(target, 5, function(){
          client.say(target, `That is either a sub emote or not an emote NaM`); 
          return; }, []); }
        break;          
      }
/*  if (msg === 'PogChamp a Multi-Raffle has begun for 10000 UgandaShilling PogChamp it will end in 30 Seconds. Enter by typing "!join" OpieOP' ) {
    if (context['display-name'] === 'StreamElements') {
      client.say(target, `!join`);
    } else {
      coolDownCheck(target, 5, function(){
      client.say(target, `weirdL nice try retard`); }, []);
    } 
  } */
  if (new RegExp("OH ZOINKS YOU JUST GOT FLIPPIN' PONGED NaM [0-9]+ ms", "i").test(msg)) {
    if (context['display-name'] === 'spergbot02') {
      client.say(target, `@spergbot02 Kissahomie`);
      return;
    } else {
        return;
    }
  }
  if (new RegExp("BONG WAYTOODANK [0-9]+ ms", "i").test(msg)) {
    if (context['display-name'] === 'spergbot02') {
      client.say(target, `@spergbot02 Kissahomie`);
      return;
    } else {
        return;
    }
  }
  if (new RegExp("DONG gachiGASM [0-9]+ ms", "i").test(msg)) {
    if (context['display-name'] === 'spergbot02') {
      client.say(target, `@spergbot02 Kissahomie`);
      return;
    } else {
        return;
    }
  }
  if (msg === '🚨 WAYTOODANK ALERT 🚨') {
    if (context['display-name'] === 'TriChompBot') {
      client.action(target, `WAYTOODANK 🚨 AAAAAA`);
      return;
    } else {
        return;
    }
  }
  if (msg === '🚨 WAYTOODONK ALORT 🚨') {
    if (context['display-name'] === 'TriChompBot') {
      client.action(target, `WAYTOODONK 🚨 OOOOOO`);
      return;
    } else {
        return;
    }
  }
  if (msg === '🚨 HYPERDANK HELP ME 🚨') {
    if (context['display-name'] === 'TriChompBot') {
      client.action(target, `🚨 HYPERDANK ᛏ̸̨̛̛̛͈̮̼̖̤̩͚̓̇̈̍̉̎̈́̕ᚻ̵̟̺̟͖̩̘̒́͋͒̾̒̃̑̃̂͗͘ᛖ̷̲͛̀͋̅̀̊͌̚ ̴̛̤̦̐͂̀̆͂̔͒͌̏̎̍̇͜͜͜͠ᚪ̴͖̬͔̤̪͈͙̣͚̜̥̠̉̅́͗̎̄̄̽̾̃̒͒̀̈́ᚾ̷̢̘̟̬͉͓̪̟̹́̔͗̈́͑̚̚͠ᛞ̶̢̑͆̏̎͐̕͝ ̷̖̮͆̌͌ᛁ̵̜̯̩̻̦̖̙̋͐ᛋ̶̧̖̝̙̬̠͎̋͜ ̶̢͇͚̟̟̣͕̦͇̰̲͓͚̹͕̔͋̿̾̐̇̑̇̂̿̄̑̔ᚾ̷̫͛̾̈̔̀̊̓͆͗͒͝ͅᛖ̸̨̛̖̲͍̜̞͇̥͇̱̫̫͉̠̑̿̊͛͠ᚪ̶̨͎̙̙͉͓͙͖̥̭̮̪̍̌͑͛͛̒͑̓͂̄̚͘͜͝ᚱ̷̢̼̦̜̬̣͙̬̖̰̪̉̇̽̂͗̉͘  🚨`);
      return;
    } else {
        return;
    }
  }
  if (new RegExp("BING! ([0-9]+ms)", "i").test(msg)) {
    if (context['display-name'] === 'VJBotardo') {
      client.say(target, `VJBotardo ZULUL 7`);
      return;
    } else {
        return;
    }
  }
  if (commandName[0] === 'Pong!') {
    commandName.shift()
    if (context['display-name'] === 'Supibot') {
      client.say(target, `pepeLaugh 👆 top left stupibot`);
      return;
    } else {
        return;
    }
  }
}  
 
 
function DoctorPls(target) {
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠿⠛⠛⠿⠯⠿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠃⠒⠄⡀⠄⠄⣀⣹⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠁⠰⠐⠛⠚⠒⠄⠄⢹⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⠄⠄⣠⣀⣠⣀⣠⠄⠄⠈⠻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡿⠏⢿⣿⣀⠄⠈⠉⣉⡉⠉⠄⠄⠄⠄⠈⣿⣿ ⣿⣿⣿⣿⣿⣿⡏⠄⠄⠄⠸⣿⣧⣤⣤⡄⣠⣤⣭⣅⡀⠄⠄⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠄⠄⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣁⡀⠄⠹⣿ ⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⠄⣽⣽⣿⣿⣿⣿⣿⣷⠏⢹⣷⠄⠄⣿ ⣿⣿⣿⣿⣿⣿⠄⠄⠄⣠⡖⠑⠻⣿⣿⡿⡻⠛⠁⠄⠄⠙⡧⠄⢻ ⣿⣿⣿⣿⣿⣿⠄⢀⣸⣿⠂⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠿⠄⢸ ⣿⣿⣿⣿⣿⣿⠄⣾⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣦⣿⣿ ⣿⣿⣿⣿⣿⣿⣼⣿⣿⢧⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣇⣾⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠐⣻⣿ ⣿⣿⣿⣿⣿⣿⣿⢛⣽⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣘⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿ ⣿⣽⣿⣿⢥⣷⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿ ⣿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⠄⠄⡆⠄⠄⠄⠄⠄⢟⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⢀⣷⠄⠄⠄⠄⠄⢀⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⡿⠫⢊⠛⠙⠛⠫⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣟⠃⢈⢠⣤⣷⡠⠠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡃⠄⠈⠄⠄⠄⠄⠁⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡿⠛⠥⠏⢁⣀⠰⡶⠾⠶⠇⠄⠄⠉⢻⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡿⠄⠄⠄⠄⢸⠆⡄⠄⠘⠣⣤⣶⣷⡄⠈⢹⣿⣿⣿⣿⣿⣿ ⣿⡟⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠛⣿⣿⣿⣿⣿ ⡏⠄⠄⢀⡠⣤⡄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣧⣅⣤⣬⣿⣿⣿⣿ ⠁⠄⢠⣿⣷⢿⡇⠄⢘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⡇⠠⣿⣿⣿⡏⢻⡆⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣧⣼⣿⣿⣿⡽⣦⣄⡿⠿⠛⠛⠛⠃⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⢿⣿⣿⠿⣿⡻⠿⠇⠄⠄⠄⠄⠄⠄⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⡯⣿⣿⣾⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢹⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⠟⠋⡿⠟⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠉⠈⢱⡐⠄⠄⠈⠄⠿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡏⠁⠄⠄⠄⠄⠈⠄⠐⠐⠐⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣧⡄⠄⠄⠄⢠⣄⢀⣠⣼⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠟⢋⣿⡿⣿⠊⠄⠄⠘⠿⣟⣉⢨⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡿⠁⠄⠸⠇⠆⠁⠊⠄⣴⣤⣀⠐⠄⠸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡟⠁⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣜⢢⢰⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠝⠁⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⢧⣲⣿⣿⣿⣿⣿⣿⣿ ⣿⠿⠈⠄⠄⠄⠄⢀⣤⡎⠄⢠⣿⣿⣿⣿⣶⣿⡽⣹⣿⣾⣿⣿⣿ ⠋⠄⠄⠄⠄⠄⠄⠘⠟⠁⣴⣾⣿⣿⣿⡏⣿⣿⣿⣾⣿⣿⣿⣿⣿ ⣦⡀⠄⠄⠄⠄⠄⢲⠄⠸⠿⠿⠟⠛⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣦⣀⠄⠄⠄⠄⠁⣂⣀⠄⠄⠄⠄⠉⢻⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠄⢀⡀⢀⣼⣿⡟⠄⠄⠄⠄⠄⠸⠿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠄⠸⢿⣿⡿⠋⠁⠄⠄⠄⠄⠄⠄⠄⠈⢿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿ ⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⢿⣿ ⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣄⠄⠄⠄⠄⠄⠄⠄⠈⠻ ⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄⠄⢀⣾⣿⣿⣦⣀⠄⠄⠄⠄⠄⠄ ⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⡿⠻⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡏⠄⡀⠄⠈⠉⠉⠰⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡿⠁⠄⠁⠄⠄⠄⠄⠄⠄⠉⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⠛⠉⠄⠄⠄⠄⠈⠄⠂⠒⠂⠄⠁⠄⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⠄⠄⠄⠄⠄⠄⢠⣴⣦⣤⣼⠄⠄⠄⠄⠄⠘⠛⢻⣿⣿⣿⣿⣿ ⣏⣾⡤⠄⢴⡦⣀⠄⡀⠠⠍⠁⢀⡐⡀⠄⠄⠄⠄⠄⠉⢿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣷⡧⡠⠄⣀⣹⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿ ⡿⣿⣿⣿⡹⢿⣿⣿⣷⣷⣷⣿⣿⣿⡇⢀⣀⣀⣀⡀⠄⠄⠄⠈⠿ ⣷⣻⡿⠿⠷⡝⣿⣿⣿⣿⣿⣿⣿⣿⡇⠸⠏⣹⣿⣷⣀⡀⠄⠄⠄ ⣿⣿⣿⣿⣷⠚⠹⣿⣿⣿⣿⣿⣿⡿⡗⣦⣜⢿⣿⣿⣿⣿⡆⠄⠄ ⣿⣿⣿⣿⣿⠄⠄⠙⠛⠛⠛⠛⠛⠁⠄⠘⠋⢺⣿⣿⣿⣿⡆⠄⠄ ⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⣿⣿⣿⣿⣿⡆⠄ ⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣹⣿⣿⣿⣿⡇⠄ ⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢹⣿⣿⣿⣿⣷⡀ ⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢿⠿⠿⠿⣿⢿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠄⠄⡀⠄⠄⠄⠄⢹⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⢀⠸⠖⠤⠌⠄⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣅⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⠈⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠏⠏⠁⠻⠄⠄⠄⠄⠿⠿⠿⠿⠁⠄⠄⠈⠙⢿⣿⣿ ⣿⣿⣿⣿⠋⠄⠄⠄⠄⠄⣤⣀⣀⡀⠄⠛⠄⣠⣤⠄⠄⠄⠘⢿⣿ ⣿⣿⡿⠟⠄⠄⠄⠄⠄⣦⣿⣿⣿⣿⣦⣤⣵⣿⣿⡀⠄⠄⠄⠘⣿ ⣿⣏⡇⠄⠄⠄⠄⡄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣤⣄⠄⠄⢿ ⣿⠁⠄⠄⠄⠄⣄⠄⠐⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⡂⠄⠈ ⣿⠄⠄⠄⢀⣾⣿⡇⡗⣪⣿⣿⣿⣿⣿⣿⣿⡋⢹⣿⣿⣯⡇⠄⣠ ⣗⠄⠄⠄⢸⣿⣿⠇⠄⠄⠉⠻⠿⠿⠿⠛⠁⠄⠘⣿⣿⣿⡆⢀⣿ ⣷⠄⠄⠄⢸⣿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣧⣼⣿ ⣿⡄⠄⠄⠘⣿⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿ ⣿⣿⡆⠄⠄⢻⣷⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣶⡀⠄⣹⣿⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠃⢀⣿⣿⣿⣿⡄⢠⣶⡆⠄⠄⠄⠄⠄⠄⢻⣿⣿⣿⣿ ⣿⣿⣿⡇⠄⠈⢿⣿⣿⣿⣿⣿⣿⣷⡀⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿ ⣿⣿⣿⡇⠄⠄⠘⢿⣿⣿⣿⣿⣿⣿⣇⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿ ⣿⣿⡿⠃⠄⠄⠄⠈⣭⣭⣷⣿⣿⣿⣿⠄⠄⠄⠄⠄⠘⢛⢿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣣⠈⣀⠄⠠⠔⠑⠘⣿⣿⣿⣿⣿⣿ ⣿⣿��⣿⣿⣿⣿⣿⣿⣿⠄⠘⠄⠒⢐⡀⠄⠄⠄⠸⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⠂⠄⠈⠑⠒⠂⠄⠄⠻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠿⣦⢿⣧⡄⠄⢸⠿⠦⠤⢴⠏⠄⠄⠄⠿⣿⣿⣿ ⣿⣿⣿⣿⠄⠄⠄⠁⠈⣿⠄⠄⠄⠄⢠⣤⠄⣤⣴⠄⠄⠄⢸⣿⣿ ⣿⣿⠟⠉⠄⠄⠄⠄⠄⢸⣾⣾⣿⣿⣖⣡⣼⣿⣿⡷⠄⠄⠼⣿⣿ ⣟⠃⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⡄⠘⠿⣻⣿ ⡀⠄⠄⠠⣤⣴⣶⣤⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⢷⣿⣿⡀⠄⠘⢻ ⣿⣆⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⢿⡀⠄⠘ ⣿⣿⣷⣶⣾⣿⡟⠙⠉⢹⣿⣿⣿⣿⣿⣿⡟⠋⣿⣿⢿⣿⣧⡀⢠ ⣿⣿⣿⣿⣿⣿⣿⣦⣤⡟⠟⠛⠛⠛⠛⠃⠄⠄⣻⣿⣿⣿⣿⢧⣾ ⣿⣿⣿⣿⣿⣿⣿⠛⠛⠃⠄⠄⠄⠄⠄⠄⠄⣤⣿⣿⣿⣿⢟⣼⣿ ⣿⣿⣿⣿⣿⣿⣿⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⡿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠄⠈⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢻⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⡿⠟⢛⠻⠿⠽⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠇⢁⡀⠄⠄⠄⠄⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡟⠛⠋⠄⠈⠙⠂⠄⠄⠄⠄⠘⠿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠛⠄⠄⠄⠄⠄⠘⠛⠲⢿⠗⠄⠄⠄⠄⠈⠟⢿⣿⣿⣿⣿⣿ ⠛⠉⠄⠄⢀⡀⠄⣦⣀⠰⠒⠈⢠⣄⣠⡀⠄⠄⠄⠈⠻⣿⣿⣿⣿ ⡀⠄⠄⣀⣿⣷⣤⡿⣿⣷⣤⣾⣿⣿⣿⡇⠄⣀⠄⠄⠘⠛⠟⣿⣿ ⣿⣷⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⠿⣿⣿⣷⣤⠄⠄⠄⠹ ⣿⣿⣿⣿⣿⣿⡟⠋⠫⢿⣿⣿⣿⣿⣿⣿⣶⣿⠉⠉⠄⠄⠄⠄⣠ ⣿⣿⣿⣿⡿⠟⠃⠄⠄⠈⠉⠉⠉⠛⠿⢿⣿⣿⣶⣶⣶⣶⣿⣿⣿ ⣿⣿⣿⣿⡧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠄⠄⠄⠄⠄⣠⠄⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠄⠄⠄⠄⣰⣿⡇⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠋⠄⠄⠄⢠⣿⣿⡇⠄⠄⠄⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⡟⠄⠄⠄⠄⣿⣿⡿⠁⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠄⠄⠄⢸⣿⣿⣇⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠄⠄⢀⣼⣿⣿⣿⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⠟⠛⠛⠛⠻⠟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡅⠐⠃⢠⣴⣶⢖⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠁⠄⠐⠋⣀⡁⠁⠄⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡿⠄⠄⢀⣀⣠⣶⣴⡆⠄⠒⠃⠉⠙⠻⣿⣿⣿⣿⣿⣿ ⣿⣿⠛⠄⠄⠄⠄⠄⠙⠉⣀⣈⠁⣀⣦⠄⠄⠄⠄⠄⠉⠻⣿⣿⣿ ⣿⠁⠄⠄⠄⠄⣴⣴⣤⢈⠉⢩⣴⣿⣿⠄⠄⠄⠄⠄⠄⠄⠉⠛⣿ ⠃⠄⠄⢀⡀⠄⣿⣿⣿⣿⣶⣾⣿⣿⣿⣇⢰⣶⣶⣶⣄⡀⠄⠄⡉ ⠄⠄⣶⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣸⣿⣿⣿⣿⣷⡆⠄⠈ ⠄⢰⣿⣿⣿⣿⡶⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⡏⠄⠄ ⠄⢸⣿⣿⣿⣿⡏⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣡⣿⣿⣿⣿⣤⠄ ⣾⣿⣿⣿⣿⣿⣷⡌⠨⡻⣿⣿⣿⣿⡿⠻⢻⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠘⠛⢻⣿⣿⣿⣿⣿⣿ ⣀⣶⣾⣿⣿⣿⡏⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠄⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⢀⡀⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⣸⡇⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⡟⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠋⠁⠙⠉⠉⠉⠹⠇⠙⠻⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⢯⡆⠄⢰⣤⠄⠁⠄⠄⠄⢀⡉⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⢀⠘⠄⠄⠄⠛⠄⢠⡈⠁⠘⠁⠘⠿⣿⣿⣿⣿ ⣿⣿⣿⣿⡝⠋⠄⠄⠄⠄⠄⠄⠉⠉⠉⢉⠄⠄⠄⠄⠄⠄⠉⢿⣿ ⣿⣿⣿⠻⠄⠄⠄⠄⠄⠄⠐⢢⣤⣤⣴⡟⠄⠄⠄⠄⠄⠄⠄⢸⣿ ⣿⣿⡇⠄⠄⠄⠄⠄⠄⢀⣀⡀⠄⢖⢀⢠⣤⣶⣶⣿⣷⡄⠄⠈⣿ ⣿⣿⣇⠄⠄⠄⠄⠄⠠⢿⣿⣿⣿⣄⣸⣴⣿⣿⣿⣿⣿⡇⠄⠄⢹ ⣿⣿⣿⡄⠄⠄⠄⠄⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠅⠄⠄⢸ ⣿⣿⣿⣿⠄⠄⠄⠄⠄⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠄⠄⠄⢸ ⣿⣿⣿⣿⡀⠄⠄⠄⠄⢨⣾⣿⣿⣿⣿⣿⣿⣿⣿⠹⣰⣿⠄⠄⠸ ⣿⣿⣿⣿⣷⠄⠄⢠⣶⣿⣿⣿⣿⣿⣿⣿⡿⠟⠍⠁⢿⢿⡆⠄⢰ ⣿⣿⣿⣿⣿⠄⠄⢸⣿⣿⣿⣿⣿⠻⠿⠛⠊⠄⠄⠄⠈⣼⣧⠄⢸ ⣿⣿⣿⣿⣿⣷⠄⠈⠹⢿⣿⣿⠿⠄⠄⠄⠄⠄⠄⠄⠄⢘⣶⣿⣟ ⣿⣿⣿⣿⣿⠇⠄⠄⠄⠈⠛⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⣿⣿ ⣿⣿⣿⣿⣿⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⡿⣿⣿⣿ ⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠿⠿⠟⠙⢻⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡋⠁⡜⠃⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠿⠟⠉⠹⠿⠈⣿⡯⠄⠄⠄⠄⠃⠄⠄⢸⣿⣿⣿⣿⣿⣿ ⠟⠉⠁⠄⠄⠄⠄⠄⢀⣿⣅⠄⠐⠶⢶⠦⠄⠄⢸⣿⣿⣿⣿⣿⣿ ⠄⠄⢀⣀⣤⣠⠄⠄⣤⣿⣿⣿⣧⡄⠄⢀⡀⠄⠄⢻⣿⣿⣿⣿⣿ ⡇⠄⣿⣿⣿⣧⠄⢠⣿⣿⣿⣿⣿⣷⣵⣿⠄⠄⠄⠘⣿⣿⣿⣿⣿ ⣷⠄⢻⣿⣿⡏⢠⣼⣿⣿⣿⣿⣿⣿⡿⣯⣶⡀⠄⠄⢹⣿⣿⣿⣿ ⣿⣆⣿⣿⡌⢣⣾⣿⣿⣿⣿⣿⣿⡟⣩⣿⣿⣧⡄⠄⠐⢻⣿⣿⣿ ⣿⣽⣿⣿⣿⣿⠛⠻⣿⣿⣿⡟⠋⢻⣿⣿⣿⣿⣷⣦⠄⠐⣿⣿⣿ ⣷⣿⣾⣾⠻⠿⠄⠄⠄⠄⠄⠄⠄⠸⣿⣿⣿⣿⣿⣿⣷⡀⠪⣿⣿ ⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣿⣿⣿⣿⣷⣶⣼⣿ ⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄⠄⠈⢻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠛⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⢀⣀⡀⠄⠄⠄⠄⠈⠻ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠙⠛⠏⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡿⠃⠁⠦⣲⠒⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡗⠈⢀⢀⢀⣈⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠟⠙⠁⢀⠄⠘⢛⣙⠟⠄⠄⠄⠻⢿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡟⠃⠄⠄⠄⢸⣿⣶⣌⣡⣴⣶⣾⡆⠄⠄⠙⢻⣿⣿⣿⣿⣿ ⣿⠋⠄⠄⢠⡄⠄⣿⣿⣿⣿⣿⣿⣿⣿⡇⢀⡄⠄⠄⠘⣿⣿⣿⣿ ⠁⠠⣾⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⡏⣥⣿⣿⣶⣤⡀⠈⠹⣿⣿ ⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡧⠏⠄⠘⠛⠛⠛⠛⠛⠄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡇⠄⠄⢀⢤⠄⠄⠄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠄⠄⠄⠐⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⢰⡇⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⢸⡇⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡇⠄⡀⡸⡇⠄⠄⠄⠄⣾⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⡿⠋⠼⠿⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠄⠄⠤⠄⠄⠄⠄⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣷⣦⠄⢀⡀⠄⠄⠄⠄⠰⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡟⠋⢻⣿⠃⠄⠄⠈⠄⠄⠄⠈⢻⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⢀⣤⣤⣾⣿⣾⣿⣿⡆⠄⠄⠉⠈⠝⣻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⠸⣿⣿⣿⣿⣿⣿⣿⣧⢠⣢⡄⡀⠄⠁⠐⠛⢿ ⣿⣿⣿⣿⣿⣿⡇⡄⢻⣿⣿⣿⣿⣿⣿⣿⣦⣿⣏⡿⠒⠄⠄⠄⠄ ⣿⣿⣿⣿⣿⡻⠿⠷⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣀⣀⣤⣶⣿ ⣉⣉⢿⠻⡽⠁⠄⠄⠄⠈��⠉⠙⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣷⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⢿⣿⣿⡟⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⣷⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣷⠄⠄⠄⢀⣀⣀⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠄⠄⢀⢸⣿⣿⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣧⠄⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣧⣻⣿⣿⣿⣿⡇⠄⠄⠄⢠⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⡇⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⡇⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣹⣿⣿⣷⣿⣷⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣯⣛⣽⣿⣿⣿⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⠟⠉⠉⠙⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡿⠏⠉⠉⠄⠄⠰⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣅⢠⣤⣤⣤⣤⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡿⠟⢩⡾⣿⣿⣿⣿⣿⣿⣿⣿⡛⡿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡿⠁⠄⠹⠃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡜⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡇⢠⡾⢷⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡿⣠⣿⣾⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣿⣿⣿⣇⡸⣿⣿⣿ ⣿⣿⢿⣿⡟⣿⣿⡭⣽⣯⡁⠄⠄⠄⠄⠄⢹⣿⣿⣿⣿⡇⣿⣿⣿ ⣿⣿⣿⣿⣧⣿⣿⣇⣿⣿⣿⣇⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⢿⣿⣿ ⣿⣿⣿⣿⢿⣿⣿⣿⠄⠉⠉⠉⠁⠄⠄⠄⣸⣿⣿⣿⣾⣿⣿⣿⣿ ⣿⣿⣿⣯⢛⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣯⡮⠛⠁⠄⠄⠄⠄⠄⠄⠄⠄⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠏⠄⠄⠄⠄⠄⠄⣀⣀⣀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢿⠛⠉⠙⠿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⣷⡇⠉⠁⠉⠄⢢⠚ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣙⣠⡀⠄⠄⢠⣀⠄⠄⠄⣠ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣯⡷⡮⠙⢿⣯⣠⣾⣿⣿⡶⢲⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣋⡽⠕⠃⠄⠄⢹⠠⢙⣿⣷⣴⣾⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠙⢞⠔⠉⠄⠄⠄⠄⠄⠄⣿⣸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣇⠟⠈⠄⠄⠄⠄⠄⠄⠄⢠⠻⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡿⠋⠈⠄⠄⠄⣤⡎⠁⠄⢠⣴⡞⣾⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠏⠄⠄⠄⠄⠄⠈⠿⠇⣠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠇⠄⠄⠄⢀⣴⣿⣷⣦⠼⣿⣿⢫⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⡟⠄⠄⠄⠄⠈⠉⠛⠛⠛⠄⠄⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣀⡀⣠⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣦⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡣⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⢿⣿⣿⣿⣿⣿⣿ ⣿⣽⢽⣷⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢛⡘⡉⠛⠛⠛⢿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣀⠢⠄⠢⠙⠁⠄⢿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠏⠇⠄⢀⣀⣠⡦⠄⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡿⠁⠄⠄⢀⣀⡀⠠⠬⢁⣤⣤⠄⠄⣭⢍⡍⢹ ⣿⣿⣿⣿⣿⣿⠟⠄⠄⣠⡄⢸⣿⣿⣤⣤⣿⣿⣿⡇⢠⣬⣽⡅⠘ ⣿⣿⣿⣿⣿⠉⠄⣠⣾⣿⣷⡎⣹⣿⣿⣿⣿⣿⣯⣵⠸⣿⣿⡇⠄ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⢿⣿⣿⣿⣿⡿⠋⣿⣿⣿⣷⣾ ⣿⣿⣿⣾⣿⣻⣿⣿⣿⣿⣿⡏⠄⠄⠄⠉⠁⠄⠄⠄⢿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡯⠄⠄⠄⠄⢰⠄⠄⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⠄⠄⢸⠄⠄⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⣾⠄⠄⠄⠄⠄⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⣿⡆⠄⠄⠄⠄⢹⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⢀⣰⣿⡇⠄⠄⠄⠄⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⠿⠻⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⡀⠄⠢⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡶⢀⣠⣤⠄⠄⠄⠉⠛⣿⢿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⡀⠐⠃⣠⣤⡄⠄⠄⠁⠄⠹⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⣧⣶⣾⣿⣿⣿⠄⠄⢀⠄⠄⠈⢿ ⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⣰⣶⡾⣿⣿⣿⣿⣿⣇⢀⡾⣿⣦⡄⠈ ⣿⢿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⡇⠹⣿⣿⣿⣿⣿⣎⣡⣿⣿⣷⠄ ⣿⣽⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⠄⠄⠄⠄⠄⠄⠄⠿⢿⣿⣿⣿⣄ ⣿⣿⣿⣿⣿⠿⠛⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿ ⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠄⠄⠄⠄⣿⣿⣿⣿⡀⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠄⠄⠄⠄⢸⣿⣿⣿⡇⠄⠄⠄⠄⢀⣾⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣶⣴⡦⣤⣼⣿⣿⣿⠇⠄⠄⠄⠄⣾⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣋⠝⠿⢿⣗⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠲⠄⠄⢀⢀⣀⡄⠹⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡅⠄⠑⢒⡗⠄⠈⠁⠄⠹⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡟⢃⣰⣿⣿⣿⣿⣿⡇⠄⠐⠄⠘⢻⢿⣿⣿⣿ ⣿⣿⣿⡿⠿⠆⣴⣿⣿⣿⣿⣿⡿⠠⠈⢠⣤⣤⣤⣄⠄⠄⢻⣿⣿ ⣿⠟⠊⠄⠄⠄⣘⡿⢏⠉⠍⠁⠄⣀⣴⣿⣿⣿⣿⣿⠄⠄⠄⠻⣿ ⡋⠄⣀⣤⣶⣿⣿⣿⣿⡄⢀⣠⣾⣿⣿⣿⣿⣿⣿⡏⣂⠄⠄⠄⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣧⡀⠄⢻ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡾⣿⣿⣿⣿⣿⣿⣿⣿⠿⢫⣿⡿⠂⠄⠸ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠉⠉⠉⠉⢉⣴⣾⣿⣿⡀⢀⣠⣾ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⢏⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠈⠛⠉⠉⢸⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣟⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⢠⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣾⡄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⣼⣿⡇⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⢸⣿⣿⠃⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠇⠄⠄⠄⠄⣾⣿⣿⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿ `);
}
 
function forsenDiscoSnake(target) {
  client.say(target, `/color red`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢛⢋⣝⠿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⡫⣿⡆⣻⣿⠎⣯⠿⠛⠁⠄⠄⠄⠙⢻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢸⣿⣼⣿⣓⣿⠄⣴⣾⣿⣿⣿⣦⡄⠈⢿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣷⣦⡬⣻⣿⠿⢿⣿⡄⠈⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⡿⠟⢼⣿⣦⣹⡿⢳⠆⠿⢿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠊⢿⣿⣿⡿⡿⣿⠿⠅⢀⣀⠉⣿⣿⣧⣴⣦⢠⡾ ⣿⣿⣿⣿⣿⣿⠟⠉⠄⠄⠄⠄⠈⢿⣿⡇⠄⠈⠄⠄⡌⠹⠄⢿⣿⣿⣿⣯⢾⢶ ⣿⣿⣿⣿⠟⠁⠄⠄⠄⠄⣰⣻⣿⡏⠉⠄⠄⠄⠄⠄⠄⣀⡉⠝⠟⠛⠿⠄⢋⣀ ⣿⣿⣿⠋⠄⠄⠄⠄⡀⣞⣿⣿⠏⠁⠄⠄⠄⠄⢄⣄⡴⣫⣷⠄⠄⢶⣿⣿⣿⣿ ⣿⣿⠏⡀⠄⠄⠄⢄⣮⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠈⢵⣿⠟⠄⠄⠈⠉⠻⣿⣿ `)
  client.say(target, `/color orangered`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢫⣵⣾⣿⣶⣶⣽⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⡀⠘⠻⣿⣿⣿⣿⣿⣿⠉⠛⠛⢻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣈⠆⠄⠄⠄⣿⡿⣿⣿⣯⣤⣴⣤⡄⠈⢻⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡜⠚⠄⢠⢤⢤⣄⣄⢪⠛⡛⠛⣿⣿⣿⣷⠄⢹⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠿⢳⢷⣽⣷⣿⢇⡀⠄⠰⣻⣿⣾⣤⡠⣿⣇⣾⣿⠇⠃⣿ ⣿⣿⣿⣿⣿⡿⣿⢩⢼⠻⣿⣿⡿⢱⣾⣷⣆⠄⠉⣿⣿⣁⠄⠙⠿⣿⡟⠄⢠⣿ ⣿⣿⣿⣿⠟⢧⡿⣭⣇⣿⣿⣿⠇⠄⠈⠉⠉⠄⠄⢽⡿⠉⠉⠶⠚⠻⠃⠄⣼⣿ ⣿⣿⠿⠕⠫⣿⠸⠱⢻⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⣿⡇⠄⠄⠄⢀⣤⣤⣾⣿⣿ ⡿⢟⢤⠸⠃⠁⠈⠁⠟⠕⠁⠄⠄⠄⠄⠄⠄⠄⣀⣿⣇⣤⣤⠄⠸⢿⣿⣿⣿⣿ ⢑⠯⠃⠈⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⠄⠛⠙⠄⠄⠈⠙⠿⣿⣿ `)
  client.say(target, `/color goldenrod`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣻⣵⣾⣷⢹⣿⡟⠛⠛⠛⠛⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣳⣿⣿⣿⣿⠊⠉⢁⣀⣴⣶⣄⡈⠻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⢸⣽⣿⣿⡏⠆⠼⡋⠋⠻⣿⡿⢿⡀⠉⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠄⢺⣿⣿⣇⠄⡰⢷⠶⠶⠿⣿⣿⠣⠄⣉⣹ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡤⣿⣿⣿⠄⠒⢁⣀⢀⠈⢻⣿⣠⣴⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠛⠛⠛⢣⣿⣿⣿⡆⠄⠄⠄⠠⠟⠘⣻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⠄⠄⢈⣿⣿⣿⣇⠄⠄⠄⠄⡄⣍⠿⢿⣿⠵⢻ ⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠨⢼⣿⣿⣿⡟⢳⣿⠫⡀⠱⠂⠻⣠⣿⣿ ⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⡀⡀⠄⡀⠈⠞⣹⡻⡯⡯⢄⢄⠣⠋⠄⠄⠄⠉⠙⢿ `)
  client.say(target, `/color green`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠄⣀⣤⣴⣶⣶⣶⣿⣷⣾⣯⣿⣿⡿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣶⠄⢱⣿⡿⢻⣿⣿⡏⠈⠄⠉⢿⣿⣿⣿⣭⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠸⣷⣤⣿⣿⣿⣧⡄⠄⣀⣀⣘⡻⣿⣿⣾ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⢀⣼⣿⣿⣿⣿⣿⠽⡏⠄⣿⣿⣿⣿⣿⣍⣫ ⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⢷⣶⣿⣿⣿⣿⣿⣿⡗⠄⢁⣴⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠋⠁⠄⠄⠄⠄⢀⣸⣿⣿⣿⣿⣿⣿⣿⠍⠁⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠃⠄⢀⣠⣤⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣳⠂⠄⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿ ⣿⡿⣠⣿⣿⣿⣿⣿⣿⣿⣿⣻⠿⣿⡿⠏⠋⠄⠄⠄⠄⠄⠄⠄⠈⢻⣿⣿⣿⣿ ⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⠯⠫⠁⠉⠉⠄⠄⣀⣶⣶⣾⣿⣶⣄⠄⢸⣿⣿⣿⣿ `)
  client.say(target, `/color dodgerblue`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⠛⠛⠛⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⣀⣀⣀⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠄⠄⣤⣴⣾⣿⣿⣿⣷⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⠄⠨⣿⣿⣟⠓⢈⡻⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣄⠄⠄⠄⠄⣸⣿⣿⡿⠟⣿⢿⣶⣝⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡆⣦⡀⠄⠛⠑⠅⢃⣀⣾⣿⠿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿ ⠟⠛⠛⠛⠛⠛⠛⠫⣾⣿⣷⡄⠄⣦⣶⣾⣿⠟⠄⢸⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿⣿⣾⣿⣿⣿⣯⠄⠄⠉⣿⣧⠿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⣠⣤⣿⣿⣿⣮⠄⣼⣿⣿⣿⣾⣽⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣹⣿⣿⣿⠿⠉⠄⠄⠈⠉⠉⣫⣣⢻⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣴⣿⣿⡿⠃⠄⠄⠄⠄⠄⠄⠸⣯⢟⠻⣿⣿⣿⣿ `)
  client.say(target, `/color blue`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠄⠉⠛⠛⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⠄⠄⢀⣤⣤⣀⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠟⠄⠄⡀⠄⠲⣾⣿⣿⣿⣿⣷⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⣿⣿⣿⡑⢢⡟⢸⣿⣿⣿⣿⣿⣿⣟⣯⡿⣿⣿ ⣿⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⢠⣿⣿⣿⠛⠻⢿⣿⣿⣿⣿⣿⣿⣧⣾⣿⣿⣼⢻ ⣿⣿⣿⣿⣿⣿⢠⣿⣤⡀⠄⠈⠁⠁⠂⠄⠄⣀⣿⣿⣿⣿⣿⣣⣾⣿⣿⣿⣿⣿ ⠿⠿⠿⠛⠛⣽⣿⣿⣿⣇⡀⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⢹ ⠄⠄⠄⠄⠄⠻⣿⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠈⠻⢿⣿⣿⣇⢿⣿⣿⣿⣿⡇⢸ ⠄⠄⠄⠄⢀⢠⣿⣿⠟⡉⠄⠾⡇⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣦⠹⠻⡿⢿⣇⣿ ⠄⠄⠄⠄⢀⡿⣫⣿⡶⡑⠄⠄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⡇⣤⣤⢠⣹⣿ ⠄⠄⠄⠄⠄⠄⣽⡿⠯⠄⠄⣾⣦⡄⠄⠄⠄⠄⠄⠄⠄⠄⠉⢿⡇⣿⣿⠸⢸⣿ `)
  client.say(target, `/color blueviolet`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⠛⠛⠛⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⣀⣀⣀⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠄⠄⣤⣴⣾⣿⣿⣿⣷⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⠄⠨⣿⣿⣟⠓⢈⡻⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣄⠄⠄⠄⠄⣸⣿⣿⡿⠟⣿⢿⣶⣝⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡆⣦⡀⠄⠛⠑⠅⢃⣀⣾⣿⠿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿ ⠟⠛⠛⠛⠛⠛⠛⠫⣾⣿⣷⡄⠄⣦⣶⣾⣿⠟⠄⢸⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿⣿⣾⣿⣿⣿⣯⠄⠄⠉⣿⣧⠿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⣠⣤⣿⣿⣿⣮⠄⣼⣿⣿⣿⣾⣽⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣹⣿⣿⣿⠿⠉⠄⠄⠈⠉⠉⣫⣣⢻⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣴⣿⣿⡿⠃⠄⠄⠄⠄⠄⠄⠸⣯⢟⠻⣿⣿⣿⣿ `)
  client.say(target, `/color red`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠄⣀⣤⣴⣶⣶⣶⣿⣷⣾⣯⣿⣿⡿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣶⠄⢱⣿⡿⢻⣿⣿⡏⠈⠄⠉⢿⣿⣿⣿⣭⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠸⣷⣤⣿⣿⣿⣧⡄⠄⣀⣀⣘⡻⣿⣿⣾ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⢀⣼⣿⣿⣿⣿⣿⠽⡏⠄⣿⣿⣿⣿⣿⣍⣫ ⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⢷⣶⣿⣿⣿⣿⣿⣿⡗⠄⢁⣴⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠋⠁⠄⠄⠄⠄⢀⣸⣿⣿⣿⣿⣿⣿⣿⠍⠁⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠃⠄⢀⣠⣤⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣳⠂⠄⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿ ⣿⡿⣠⣿⣿⣿⣿⣿⣿⣿⣿⣻⠿⣿⡿⠏⠋⠄⠄⠄⠄⠄⠄⠄⠈⢻⣿⣿⣿⣿ ⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⠯⠫⠁⠉⠉⠄⠄⣀⣶⣶⣾⣿⣶⣄⠄⢸⣿⣿⣿⣿ `)
  client.say(target, `/color orangered`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣻⣵⣾⣷⢹⣿⡟⠛⠛⠛⠛⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣳⣿⣿⣿⣿⠊⠉⢁⣀⣴⣶⣄⡈⠻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⢸⣽⣿⣿⡏⠆⠼⡋⠋⠻⣿⡿⢿⡀⠉⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠄⢺⣿⣿⣇⠄⡰⢷⠶⠶⠿⣿⣿⠣⠄⣉⣹ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡤⣿⣿⣿⠄⠒⢁⣀⢀⠈⢻⣿⣠⣴⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠛⠛⠛⢣⣿⣿⣿⡆⠄⠄⠄⠠⠟⠘⣻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⠄⠄⢈⣿⣿⣿⣇⠄⠄⠄⠄⡄⣍⠿⢿⣿⠵⢻ ⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠨⢼⣿⣿⣿⡟⢳⣿⠫⡀⠱⠂⠻⣠⣿⣿ ⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⡀⡀⠄⡀⠈⠞⣹⡻⡯⡯⢄⢄⠣⠋⠄⠄⠄⠉⠙⢿ `)
  client.say(target, `/color goldenrod`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢫⣵⣾⣿⣶⣶⣽⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⡀⠘⠻⣿⣿⣿⣿⣿⣿⠉⠛⠛⢻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣈⠆⠄⠄⠄⣿⡿⣿⣿⣯⣤⣴⣤⡄⠈⢻⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡜⠚⠄⢠⢤⢤⣄⣄⢪⠛⡛⠛⣿⣿⣿⣷⠄⢹⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠿⢳⢷⣽⣷⣿⢇⡀⠄⠰⣻⣿⣾⣤⡠⣿⣇⣾⣿⠇⠃⣿ ⣿⣿⣿⣿⣿⡿⣿⢩⢼⠻⣿⣿⡿⢱⣾⣷⣆⠄⠉⣿⣿⣁⠄⠙⠿⣿⡟⠄⢠⣿ ⣿⣿⣿⣿⠟⢧⡿⣭⣇⣿⣿⣿⠇⠄⠈⠉⠉⠄⠄⢽⡿⠉⠉⠶⠚⠻⠃⠄⣼⣿ ⣿⣿⠿⠕⠫⣿⠸⠱⢻⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⣿⡇⠄⠄⠄⢀⣤⣤⣾⣿⣿ ⡿⢟⢤⠸⠃⠁⠈⠁⠟⠕⠁⠄⠄⠄⠄⠄⠄⠄⣀⣿⣇⣤⣤⠄⠸⢿⣿⣿⣿⣿ ⢑⠯⠃⠈⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⠄⠛⠙⠄⠄⠈⠙⠿⣿⣿ `)
  client.say(target, `/color green`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣻⣵⣾⣷⢹⣿⡟⠛⠛⠛⠛⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣳⣿⣿⣿⣿⠊⠉⢁⣀⣴⣶⣄⡈⠻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⢸⣽⣿⣿⡏⠆⠼⡋⠋⠻⣿⡿⢿⡀⠉⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠄⢺⣿⣿⣇⠄⡰⢷⠶⠶⠿⣿⣿⠣⠄⣉⣹ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡤⣿⣿⣿⠄⠒⢁⣀⢀⠈⢻⣿⣠⣴⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠛⠛⠛⢣⣿⣿⣿⡆⠄⠄⠄⠠⠟⠘⣻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⠄⠄⢈⣿⣿⣿⣇⠄⠄⠄⠄⡄⣍⠿⢿⣿⠵⢻ ⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠨⢼⣿⣿⣿⡟⢳⣿⠫⡀⠱⠂⠻⣠⣿⣿ ⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⡀⡀⠄⡀⠈⠞⣹⡻⡯⡯⢄⢄⠣⠋⠄⠄⠄⠉⠙⢿ `)
  client.say(target, `/color dodgerblue`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠄⣀⣤⣴⣶⣶⣶⣿⣷⣾⣯⣿⣿⡿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣶⠄⢱⣿⡿⢻⣿⣿⡏⠈⠄⠉⢿⣿⣿⣿⣭⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠸⣷⣤⣿⣿⣿⣧⡄⠄⣀⣀⣘⡻⣿⣿⣾ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⢀⣼⣿⣿⣿⣿⣿⠽⡏⠄⣿⣿⣿⣿⣿⣍⣫ ⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⢷⣶⣿⣿⣿⣿⣿⣿⡗⠄⢁⣴⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠋⠁⠄⠄⠄⠄⢀⣸⣿⣿⣿⣿⣿⣿⣿⠍⠁⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠃⠄⢀⣠⣤⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣳⠂⠄⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿ ⣿⡿⣠⣿⣿⣿⣿⣿⣿⣿⣿⣻⠿⣿⡿⠏⠋⠄⠄⠄⠄⠄⠄⠄⠈⢻⣿⣿⣿⣿ ⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⠯⠫⠁⠉⠉⠄⠄⣀⣶⣶⣾⣿⣶⣄⠄⢸⣿⣿⣿⣿ `)
  client.say(target, `/color blue`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⠛⠛⠛⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⣀⣀⣀⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠄⠄⣤⣴⣾⣿⣿⣿⣷⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⠄⠨⣿⣿⣟⠓⢈⡻⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣄⠄⠄⠄⠄⣸⣿⣿⡿⠟⣿⢿⣶⣝⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡆⣦⡀⠄⠛⠑⠅⢃⣀⣾⣿⠿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿ ⠟⠛⠛⠛⠛⠛⠛⠫⣾⣿⣷⡄⠄⣦⣶⣾⣿⠟⠄⢸⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿⣿⣾⣿⣿⣿⣯⠄⠄⠉⣿⣧⠿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⣠⣤⣿⣿⣿⣮⠄⣼⣿⣿⣿⣾⣽⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣹⣿⣿⣿⠿⠉⠄⠄⠈⠉⠉⣫⣣⢻⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣴⣿⣿⡿⠃⠄⠄⠄⠄⠄⠄⠸⣯⢟⠻⣿⣿⣿⣿ `)
  client.say(target, `/color blueviolet`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠄⠉⠛⠛⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⠄⠄⢀⣤⣤⣀⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠟⠄⠄⡀⠄⠲⣾⣿⣿⣿⣿⣷⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⣿⣿⣿⡑⢢⡟⢸⣿⣿⣿⣿⣿⣿⣟⣯⡿⣿⣿ ⣿⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⢠⣿⣿⣿⠛⠻⢿⣿⣿⣿⣿⣿⣿⣧⣾⣿⣿⣼⢻ ⣿⣿⣿⣿⣿⣿⢠⣿⣤⡀⠄⠈⠁⠁⠂⠄⠄⣀⣿⣿⣿⣿⣿⣣⣾⣿⣿⣿⣿⣿ ⠿⠿⠿⠛⠛⣽⣿⣿⣿⣇⡀⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⢹ ⠄⠄⠄⠄⠄⠻⣿⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠈⠻⢿⣿⣿⣇⢿⣿⣿⣿⣿⡇⢸ ⠄⠄⠄⠄⢀⢠⣿⣿⠟⡉⠄⠾⡇⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣦⠹⠻⡿⢿⣇⣿ ⠄⠄⠄⠄⢀⡿⣫⣿⡶⡑⠄⠄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⡇⣤⣤⢠⣹⣿ ⠄⠄⠄⠄⠄⠄⣽⡿⠯⠄⠄⣾⣦⡄⠄⠄⠄⠄⠄⠄⠄⠄⠉⢿⡇⣿⣿⠸⢸⣿ `)
  client.say(target, `/color red`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠄⣀⣤⣴⣶⣶⣶⣿⣷⣾⣯⣿⣿⡿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣶⠄⢱⣿⡿⢻⣿⣿⡏⠈⠄⠉⢿⣿⣿⣿⣭⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠸⣷⣤⣿⣿⣿⣧⡄⠄⣀⣀⣘⡻⣿⣿⣾ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⢀⣼⣿⣿⣿⣿⣿⠽⡏⠄⣿⣿⣿⣿⣿⣍⣫ ⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⢷⣶⣿⣿⣿⣿⣿⣿⡗⠄⢁⣴⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠋⠁⠄⠄⠄⠄⢀⣸⣿⣿⣿⣿⣿⣿⣿⠍⠁⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠃⠄⢀⣠⣤⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣳⠂⠄⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿ ⣿⡿⣠⣿⣿⣿⣿⣿⣿⣿⣿⣻⠿⣿⡿⠏⠋⠄⠄⠄⠄⠄⠄⠄⠈⢻⣿⣿⣿⣿ ⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⠯⠫⠁⠉⠉⠄⠄⣀⣶⣶⣾⣿⣶⣄⠄⢸⣿⣿⣿⣿ `)
  client.say(target, `/color orangered`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣻⣵⣾⣷⢹⣿⡟⠛⠛⠛⠛⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣳⣿⣿⣿⣿⠊⠉⢁⣀⣴⣶⣄⡈⠻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⢸⣽⣿⣿⡏⠆⠼⡋⠋⠻⣿⡿⢿⡀⠉⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠄⢺⣿⣿⣇⠄⡰⢷⠶⠶⠿⣿⣿⠣⠄⣉⣹ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡤⣿⣿⣿⠄⠒⢁⣀⢀⠈⢻⣿⣠⣴⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠛⠛⠛⢣⣿⣿⣿⡆⠄⠄⠄⠠⠟⠘⣻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⠄⠄⢈⣿⣿⣿⣇⠄⠄⠄⠄⡄⣍⠿⢿⣿⠵⢻ ⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠨⢼⣿⣿⣿⡟⢳⣿⠫⡀⠱⠂⠻⣠⣿⣿ ⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⡀⡀⠄⡀⠈⠞⣹⡻⡯⡯⢄⢄⠣⠋⠄⠄⠄⠉⠙⢿ `)
  client.say(target, `/color goldenrod`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢫⣵⣾⣿⣶⣶⣽⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⡀⠘⠻⣿⣿⣿⣿⣿⣿⠉⠛⠛⢻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣈⠆⠄⠄⠄⣿⡿⣿⣿⣯⣤⣴⣤⡄⠈⢻⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡜⠚⠄⢠⢤⢤⣄⣄⢪⠛⡛⠛⣿⣿⣿⣷⠄⢹⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠿⢳⢷⣽⣷⣿⢇⡀⠄⠰⣻⣿⣾⣤⡠⣿⣇⣾⣿⠇⠃⣿ ⣿⣿⣿⣿⣿⡿⣿⢩⢼⠻⣿⣿⡿⢱⣾⣷⣆⠄⠉⣿⣿⣁⠄⠙⠿⣿⡟⠄⢠⣿ ⣿⣿⣿⣿⠟⢧⡿⣭⣇⣿⣿⣿⠇⠄⠈⠉⠉⠄⠄⢽⡿⠉⠉⠶⠚⠻⠃⠄⣼⣿ ⣿⣿⠿⠕⠫⣿⠸⠱⢻⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⣿⡇⠄⠄⠄⢀⣤⣤⣾⣿⣿ ⡿⢟⢤⠸⠃⠁⠈⠁⠟⠕⠁⠄⠄⠄⠄⠄⠄⠄⣀⣿⣇⣤⣤⠄⠸⢿⣿⣿⣿⣿ ⢑⠯⠃⠈⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⠄⠛⠙⠄⠄⠈⠙⠿⣿⣿ `)
  client.say(target, `/color green`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢛⢋⣝⠿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⡫⣿⡆⣻⣿⠎⣯⠿⠛⠁⠄⠄⠄⠙⢻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢸⣿⣼⣿⣓⣿⠄⣴⣾⣿⣿⣿⣦⡄⠈⢿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣷⣦⡬⣻⣿⠿⢿⣿⡄⠈⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⡿⠟⢼⣿⣦⣹⡿⢳⠆⠿⢿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠊⢿⣿⣿⡿⡿⣿⠿⠅⢀⣀⠉⣿⣿⣧⣴⣦⢠⡾ ⣿⣿⣿⣿⣿⣿⠟⠉⠄⠄⠄⠄⠈⢿⣿⡇⠄⠈⠄⠄⡌⠹⠄⢿⣿⣿⣿⣯⢾⢶ ⣿⣿⣿⣿⠟⠁⠄⠄⠄⠄⣰⣻⣿⡏⠉⠄⠄⠄⠄⠄⠄⣀⡉⠝⠟⠛⠿⠄⢋⣀ ⣿⣿⣿⠋⠄⠄⠄⠄⡀⣞⣿⣿⠏⠁⠄⠄⠄⠄⢄⣄⡴⣫⣷⠄⠄⢶⣿⣿⣿⣿ ⣿⣿⠏⡀⠄⠄⠄⢄⣮⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠈⢵⣿⠟⠄⠄⠈⠉⠻⣿⣿ `)
  client.say(target, `/color blue`)
}
 
function triangD(target) {
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡠⣪⣙⠢⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡔⣝⣜⢖⡕⡕⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡸⣜⢮⢮⡣⡇⡇⡳⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⢠⠤⢤⠄⠄⠄⠄⠄⠄⡴⡕⡇⢗⢕⠯⡪⠪⡪⣃⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⢠⢖⠕⡑⡑⢝⠢⠰⠒⢒⢪⢮⠢⡈⢆⢇⠕⠠⢣⢱⢘⢂⠂⡐⢐⠠⢢⠄⠄⠄ ⡕⡅⡣⡨⡨⣂⣌⡤⠵⡔⣕⢯⡪⡪⡪⡢⡣⡣⡣⡪⡪⡐⡴⠬⠴⡐⠄⡓⣄⡀ ⠣⣣⡣⠪⠊⠁⠄⠄⠠⡊⢎⢇⢯⡫⣞⢮⡳⣕⢧⢣⢣⢣⢱⡀⠄⠧⡑⢜⢖⢕ ⠄⠄⠄⠄⠄⠄⠄⢠⠢⡣⡱⡱⡱⡱⡱⡕⣝⢜⢎⢇⢇⢇⢇⢦⠄⠘⡌⢌⢯⢲ ⠄⠄⠄⠄⠄⠄⢀⢎⢎⢆⢇⢇⢇⢇⢧⢓⢕⢕⢇⢇⢇⢇⡣⢕⠆⠄⢎⠆⢝⢼ ⠄⠄⠄⠄⠄⠄⠈⠒⠓⢎⠢⠑⣑⣑⡕⡱⡱⢱⠱⡱⢱⢱⢪⢪⢪⠄⢰⡱⡱⠊ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠇⠠⡹⠁⠄⠄⠄⠈⢹⠈⠄⡵⠁⠓⠒⠚⠃⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠣⢁⠳⣄⠄⠄⠄⠄⠸⡌⢀⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⣀⢔⢍⢎⠢⢊⢐⠙⡄⠄⠄⡠⡐⡄⠍⢆⢄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⢐⢕⣕⢅⠢⣨⠠⠢⠬⠂⠄⡠⡪⡪⡊⢎⠢⢑⡆⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠈⠁⠁⠁⠉⠄⠄⠄⠄⠄⠄⣕⢽⡪⡨⣂⡬⠒⠁⠄⠄⠄⠄⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⢫⡪⡓⢄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⣕⣗⢽⡸⡘⡆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡰⣕⢧⡳⣕⢇⢇⢖⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⣀⢪⢱⢢⠄⠄⠄⠄⠄⡐⡵⠣⡣⡣⣳⠹⡘⡔⡣⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⡔⡢⡊⡢⢂⠝⠆⢀⢀⢀⢔⡕⡇⡡⠢⡣⡢⢈⠢⡣⡩⢂⠉⠅⡉⡉⠢⣀⠄⠄ ⡕⡝⡌⡢⡑⢌⣨⠤⠦⡄⡇⡯⣪⡪⡪⡪⡢⡣⡣⡱⡸⡠⡡⢵⢰⢐⢁⢢⢕⢄ ⠱⠘⠪⠪⠎⠋⠄⠄⡰⠨⡊⡎⣎⢮⡳⣝⢮⡺⣜⢜⢜⢜⠤⠈⡜⡜⢔⠱⣕⢇ ⠄⠄⠄⠄⠄⠄⢀⠔⢅⢣⠣⡣⡣⡣⡣⡣⡇⡗⣕⢝⢜⢜⢬⢁⠈⢸⢐⡑⡜⣕ ⠄⠄⠄⠄⠄⢀⡢⡫⡊⡆⡇⡇⡇⡇⡏⡎⡞⡜⡜⡜⡜⡬⡒⡕⢄⠄⢇⢎⠜⡔ ⠄⠄⠄⠄⠄⠃⠊⠊⠊⢪⠘⠨⣘⣘⢜⡸⡸⢸⠸⡸⢸⢸⢸⢸⢸⡀⢰⢡⢃⠇ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⡄⠌⡸⠁⠄⠄⠄⠄⠉⠌⡐⡸⠊⠚⠚⠒⠁⠄⠑⠉⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⢀⠳⣀⠄⠄⠄⠄⠄⡅⠄⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⢀⢔⢕⠱⡐⠔⡠⠑⡆⠄⠄⠄⡪⡠⡉⡣⢆⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⢠⢱⡕⡅⠅⣂⡅⠤⠡⠇⠄⡀⡣⡣⡪⢊⠔⠡⡂⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠁⠈⠈⠉⠁⠄⠄⠄⠄⠄⡜⡺⡕⣌⢢⠬⠒⠃⠄⠄⠄⠄⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡐⣎⢖⢒⢤⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡰⣱⡳⡵⡱⡳⣑⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡠⡳⡕⣗⣝⢮⡪⡢⢳⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⡀⣀⠄⠄⠄⠄⠄⠄⡔⡎⠝⡨⡒⡕⠅⠣⡫⡪⢕⢍⠲⣀⠄⠄⠄⠄⠄ ⠄⠄⠠⣑⢆⠣⡠⠤⠄⠖⢪⢺⡪⡰⡰⡑⡕⡌⡪⡂⡇⡇⡕⡱⡨⠪⡒⡒⡄⡀ ⢔⠬⡱⠨⡊⡌⡂⢌⢐⢅⢗⣽⣺⡺⣜⡮⣺⢼⣕⢇⢧⢣⢣⢣⢣⠣⡊⢌⢎⢣ ⡎⡪⡘⡌⡆⡇⠧⠓⢒⠎⡇⡗⣕⢝⢵⢹⡱⣣⢳⡹⡜⡜⡜⡎⡪⡪⡊⢆⢕⡱ ⠘⠘⠒⠑⠊⠁⠄⢠⢢⢑⢕⢕⢕⢝⢜⢕⢵⢱⢕⢕⢕⢕⢕⢕⢕⠼⠘⠒⠉⠄ ⠄⠄⠄⠄⠄⠄⢠⢑⠥⠱⡡⡣⠣⠣⡣⠣⠣⡃⢇⢇⠇⡇⢇⢇⠇⢇⢣⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠈⠁⠉⠉⢸⠄⡁⣱⠉⠉⠉⠉⠉⠄⠇⢂⣱⠁⠉⠉⠁⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢘⠠⢀⡇⠄⠄⠄⠄⠄⠨⢑⢀⡇⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠰⡔⠐⢣⠄⠄⠄⠄⠄⡏⠄⡊⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠠⢔⠔⡌⢆⢑⠌⢓⠄⠄⠄⠄⠨⣂⠪⡢⢄⡀⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⢠⢨⣪⡣⡑⠨⡐⡠⣈⡤⠋⠄⢀⠜⡜⡔⢕⢌⠢⢒⡀⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠘⠐⠊⠊⠉⠄⠄⠄⠄⠄⠄⢆⢯⢞⢜⣐⢰⠨⠖⠁⠄⠄⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⠩⡪⢒⠤⢀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣎⢮⡣⡣⡣⣣⢣⢃⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⢪⣪⡳⣝⢮⡚⡮⡳⣕⢣⡀⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡠⡣⡳⡵⡹⣪⢞⢎⢮⢳⡱⣕⢖⢵⢕⢕⢍⠦⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⡕⡍⢊⢜⢸⢘⠐⢌⢪⢪⢪⠪⡪⡘⢌⢎⠪⡊⢎⢦ ⠄⠄⣀⠄⠄⢀⢄⢒⠨⢱⡹⣔⢥⢢⢣⢣⢹⢸⡸⡸⡰⡱⡑⡜⡰⡐⢅⢇⢕⡼ ⠄⡈⡆⡍⡢⡁⣂⣐⢬⡳⣽⣺⣵⡻⣮⣳⢽⢵⢯⡺⣱⢱⢱⢑⢌⢎⢦⠃⠁⠄ ⠈⢜⠜⡌⡎⣆⠣⡱⡕⣟⢞⢮⡺⣪⡳⣕⢏⡗⡵⡹⡸⡸⡸⡪⡣⡣⡕⡀⠄⠄ ⡎⢆⢣⠱⣱⢡⠪⡸⡸⡕⣏⢗⡝⣜⢎⢎⢇⢗⢝⢜⢜⢜⢼⢸⢪⡪⡪⡪⡀⠄ ⠚⢌⢢⠵⠁⠰⠱⠡⠣⢣⠣⠃⠇⣣⠱⠱⠱⠡⠣⠕⢕⠍⠪⠪⡱⢱⢑⢕⢭⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⡜⢈⠈⢜⠁⠄⠄⠄⠄⠄⠄⡬⠨⢐⡏⠈⠉⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢳⡠⠈⡺⠄⠄⠄⠄⠄⠄⠄⡅⡂⡞⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⢠⢐⠔⡌⢕⠐⢌⢙⠲⡀⠄⠄⠄⢀⢜⠠⡘⠢⡠⡄⠄⠄⠄⠄ ⠄⠄⠄⠄⡄⣇⡧⡣⢑⠨⡐⡈⣐⣠⠢⠏⠄⢀⢐⢱⢸⢘⢌⠕⡰⠈⣆⠄⠄⠄ ⠄⠄⠄⠄⠐⠃⠑⠚⠚⠉⠄⠄⠄⠄⠄⠄⠄⢜⡸⡵⢇⢣⢂⢅⡆⠵⠊⠄⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡔⣝⢬⢩⢣⠢⢄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡜⡼⣕⢧⡣⡳⣝⢵⢌⡇⢤⢠⣀⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢜⢼⢝⢮⡳⣕⢧⢳⡹⡵⡽⣜⣖⣆⢇⢖⢄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡔⣵⡫⡝⡵⣝⠮⡓⡕⡕⡍⡎⢎⠢⡃⢏⠇⡇⡍⡢ ⠄⠄⠄⠄⠄⠄⠄⠄⢀⢔⢕⠡⠨⡘⡌⡆⡑⡕⡕⡱⡌⡎⡪⡨⢌⠢⡃⢕⢌⢺ ⠄⠄⠄⠄⠄⡤⠒⡐⢩⢪⡳⡅⡇⡎⡎⡆⡇⣎⢎⢎⢆⠇⡇⡪⢢⢱⢨⠢⡒⣜ ⢀⡀⣀⢠⠞⡀⢅⢢⢳⢽⣺⡽⣽⣺⢮⢷⡽⡮⣗⣯⡺⡜⡎⡞⡜⡜⡔⡍⠈⠁ ⡬⡪⡖⡕⡔⡔⡱⡸⡽⣝⡮⡯⣳⢽⢝⡽⡺⣝⢵⢕⢵⢱⢹⢸⢜⢜⢜⢜⠄⠄ ⡜⡜⢌⢎⢎⠎⡜⡼⣝⢮⡺⡝⣎⢗⡝⡮⡫⡺⡸⡪⡪⣪⢪⡪⡎⡮⡣⡣⣃⠄ ⢎⢌⠆⡣⡑⢅⢣⢣⢳⢝⢎⢏⠎⡇⡇⡇⡇⡇⡇⡗⢝⢜⠜⡎⠮⡳⡹⢜⢜⠄ ⠓⠱⣌⠦⠎⠖⠱⠅⢧⡂⢂⢐⢨⠖⠊⠒⠒⠊⠒⠊⢪⢂⠅⠄⣑⠇⠉⠈⠈⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⣀⢘⡇⠄⡙⡄⠄⠄⠄⠄⠄⠄⠘⡆⡂⡈⣖⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⢀⢀⢆⠪⠌⢆⠪⢐⠐⠌⠍⠲⣀⠄⠄⠄⡐⡇⡐⢄⢌⠣⡲⡀⠄⠄ ⠄⠄⠄⡔⣕⡵⡱⢑⠡⠁⢄⠡⡈⢌⡨⡴⠃⠄⡀⡣⣱⢸⠸⡨⠢⡑⡐⢍⡆⠄ ⠄⠄⠄⠑⠱⠩⠜⠐⠚⠚⠉⠉⠈⠉⠁⠄⠄⠠⡕⣝⢾⢱⢑⢌⣂⡦⠖⠒⠃⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢐⢝⢬⢓⠲⡀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡰⣱⡫⡧⡳⡹⣜⢮⡑⡄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢔⢼⡺⣪⢗⣝⢮⢪⢗⡯⣒⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⢔⢕⠏⡎⢮⡛⠎⡣⢓⢝⢮⢺⡸⡠⡀⢀⢀⢀⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⢀⢌⢮⢂⠡⡊⡆⡇⡅⡢⡃⡇⡗⣕⢝⢜⢪⠪⡘⢌⢒⢤ ⠄⠄⠄⠄⠄⡤⢒⢉⢅⣗⣽⣪⢞⣜⣜⣜⣜⡼⣜⢼⡸⡜⡜⡬⡢⡑⢌⠢⢡⠢ ⠄⡀⡄⡴⡑⡡⢰⢸⢜⣞⣞⣞⢯⣗⣗⣗⢗⢯⡳⡳⡱⡱⡹⡸⡰⡨⢢⠡⡑⣜ ⡰⢸⢸⢸⢸⢘⢔⢕⡟⣞⢼⣪⡳⣕⢧⡳⡝⡵⡹⡸⡱⡹⡸⡸⡘⡌⡆⢕⡼⠁ ⢜⡐⢅⠣⡃⡊⢆⢇⢏⢮⡳⣕⢵⢱⢱⢱⢱⢱⢹⢸⢪⢺⢸⢜⢜⢜⠬⡂⠄⠄ ⠣⡪⣨⣊⣌⢜⣐⣅⡕⡑⠜⠠⢁⢣⣑⣅⣣⣑⢅⡣⣑⢅⠑⠌⣪⢪⣑⡵⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠈⢸⡐⢸⡉⠁⠄⠄⠄⠄⠄⠄⢘⠄⢂⡱⠁⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⡐⠄⢇⠄⠄⠄⠄⠄⠄⠄⢨⠐⡀⣳⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⡄⢔⢄⠢⡡⢑⠌⡂⢆⢄⠄⠄⠄⠄⡸⢐⠄⡔⠤⢀⡀⠄⠄⠄ ⠄⠄⠄⢠⢸⣸⢜⢌⠂⠅⢂⠡⠐⡐⣐⠼⠂⢀⠰⣑⢜⠜⡌⡪⢘⠐⢥⠄⠄⠄ ⠄⠄⠄⠈⠎⠎⠮⠔⠞⠚⠈⠉⠉⠉⠁⠄⠄⢜⢜⠾⡕⢕⢰⣈⡤⠵⠎⠁⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢌⢧⢓⡢⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⢪⢮⡳⣣⢣⢇⢆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⣕⢽⢕⢯⢮⣣⢣⢣⢣⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⢣⠓⠕⡍⢗⠝⡘⢌⢧⢣⢡⠄⠄⣀⡀⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⡠⠤⠔⡒⡔⡧⡡⡪⡘⡜⢔⢄⢣⢪⢪⡢⡩⠨⠠⡈⠍⡒⡄⠄ ⠄⢠⢢⠪⡢⡃⠌⢄⢕⢜⣮⢯⣞⡼⣜⣼⣱⢵⡣⣇⢇⢇⢎⢜⢌⢢⢑⡐⠥⡀ ⡠⡑⡔⡕⣕⢕⢕⠱⡸⣝⢞⡽⣪⢏⢯⡺⡺⣝⢽⡸⡜⡜⡜⣜⢜⢌⢂⠪⡨⡅ ⡣⡊⡢⠣⡱⡸⢊⠣⡱⡸⡱⡝⡼⡹⡕⡝⡞⡜⡎⡎⡎⡎⡎⡎⡎⡆⡇⢅⢕⢱ ⠣⣊⢢⢑⡼⠄⡢⡃⡎⢜⢜⠜⡎⡎⡎⡎⡎⡎⡎⡮⡪⡎⡮⡪⡪⡪⡪⡢⣑⠕ ⠄⠄⠁⠁⠄⠄⠄⠄⠈⠁⡇⠐⢠⠖⠒⠒⠒⠒⠓⡊⡐⠐⡸⠘⠼⠸⠜⠈⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡇⠈⡼⠄⠄⠄⠄⠄⠄⡆⠂⢱⠃⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⠁⢦⠄⠄⠄⠄⠄⠄⡆⠡⢸⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⢄⢔⠔⡑⡑⠌⡊⡢⠄⠄⠄⠠⢍⢢⠨⢣⢠⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⡆⣵⢣⢑⢐⠐⡠⠡⡐⡤⠏⠄⢄⢇⢇⠇⡍⡢⢂⢳⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠘⠬⠪⠒⠒⠋⠉⠄⠄⠄⠄⢆⡕⡯⡣⣑⣰⠰⠖⠚⠄⠄⠄⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡠⣪⣙⠢⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡔⣝⣜⢖⡕⡕⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡸⣜⢮⢮⡣⡇⡇⡳⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⢠⠤⢤⠄⠄⠄⠄⠄⠄⡴⡕⡇⢗⢕⠯⡪⠪⡪⣃⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⢠⢖⠕⡑⡑⢝⠢⠰⠒⢒⢪⢮⠢⡈⢆⢇⠕⠠⢣⢱⢘⢂⠂⡐⢐⠠⢢⠄⠄⠄ ⡕⡅⡣⡨⡨⣂⣌⡤⠵⡔⣕⢯⡪⡪⡪⡢⡣⡣⡣⡪⡪⡐⡴⠬⠴⡐⠄⡓⣄⡀ ⠣⣣⡣⠪⠊⠁⠄⠄⠠⡊⢎⢇⢯⡫⣞⢮⡳⣕⢧⢣⢣⢣⢱⡀⠄⠧⡑⢜⢖⢕ ⠄⠄⠄⠄⠄⠄⠄⢠⠢⡣⡱⡱⡱⡱⡱⡕⣝⢜⢎⢇⢇⢇⢇⢦⠄⠘⡌⢌⢯⢲ ⠄⠄⠄⠄⠄⠄⢀⢎⢎⢆⢇⢇⢇⢇⢧⢓⢕⢕⢇⢇⢇⢇⡣⢕⠆⠄⢎⠆⢝⢼ ⠄⠄⠄⠄⠄⠄⠈⠒⠓⢎⠢⠑⣑⣑⡕⡱⡱⢱⠱⡱⢱⢱⢪⢪⢪⠄⢰⡱⡱⠊ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠇⠠⡹⠁⠄⠄⠄⠈⢹⠈⠄⡵⠁⠓⠒⠚⠃⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠣⢁⠳⣄⠄⠄⠄⠄⠸⡌⢀⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⣀⢔⢍⢎⠢⢊⢐⠙⡄⠄⠄⡠⡐⡄⠍⢆⢄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⢐⢕⣕⢅⠢⣨⠠⠢⠬⠂⠄⡠⡪⡪⡊⢎⠢⢑⡆⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠈⠁⠁⠁⠉⠄⠄⠄⠄⠄⠄⣕⢽⡪⡨⣂⡬⠒⠁⠄⠄⠄⠄⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⢫⡪⡓⢄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⣕⣗⢽⡸⡘⡆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡰⣕⢧⡳⣕⢇⢇⢖⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⣀⢪⢱⢢⠄⠄⠄⠄⠄⡐⡵⠣⡣⡣⣳⠹⡘⡔⡣⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⡔⡢⡊⡢⢂⠝⠆⢀⢀⢀⢔⡕⡇⡡⠢⡣⡢⢈⠢⡣⡩⢂⠉⠅⡉⡉⠢⣀⠄⠄ ⡕⡝⡌⡢⡑⢌⣨⠤⠦⡄⡇⡯⣪⡪⡪⡪⡢⡣⡣⡱⡸⡠⡡⢵⢰⢐⢁⢢⢕⢄ ⠱⠘⠪⠪⠎⠋⠄⠄⡰⠨⡊⡎⣎⢮⡳⣝⢮⡺⣜⢜⢜⢜⠤⠈⡜⡜⢔⠱⣕⢇ ⠄⠄⠄⠄⠄⠄⢀⠔⢅⢣⠣⡣⡣⡣⡣⡣⡇⡗⣕⢝⢜⢜⢬⢁⠈⢸⢐⡑⡜⣕ ⠄⠄⠄⠄⠄⢀⡢⡫⡊⡆⡇⡇⡇⡇⡏⡎⡞⡜⡜⡜⡜⡬⡒⡕⢄⠄⢇⢎⠜⡔ ⠄⠄⠄⠄⠄⠃⠊⠊⠊⢪⠘⠨⣘⣘⢜⡸⡸⢸⠸⡸⢸⢸⢸⢸⢸⡀⢰⢡⢃⠇ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⡄⠌⡸⠁⠄⠄⠄⠄⠉⠌⡐⡸⠊⠚⠚⠒⠁⠄⠑⠉⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⢀⠳⣀⠄⠄⠄⠄⠄⡅⠄⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⢀⢔⢕⠱⡐⠔⡠⠑⡆⠄⠄⠄⡪⡠⡉⡣⢆⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⢠⢱⡕⡅⠅⣂⡅⠤⠡⠇⠄⡀⡣⡣⡪⢊⠔⠡⡂⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠁⠈⠈⠉⠁⠄⠄⠄⠄⠄⡜⡺⡕⣌⢢⠬⠒⠃⠄⠄⠄⠄⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡐⣎⢖⢒⢤⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡰⣱⡳⡵⡱⡳⣑⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡠⡳⡕⣗⣝⢮⡪⡢⢳⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⡀⣀⠄⠄⠄⠄⠄⠄⡔⡎⠝⡨⡒⡕⠅⠣⡫⡪⢕⢍⠲⣀⠄⠄⠄⠄⠄ ⠄⠄⠠⣑⢆⠣⡠⠤⠄⠖⢪⢺⡪⡰⡰⡑⡕⡌⡪⡂⡇⡇⡕⡱⡨⠪⡒⡒⡄⡀ ⢔⠬⡱⠨⡊⡌⡂⢌⢐⢅⢗⣽⣺⡺⣜⡮⣺⢼⣕⢇⢧⢣⢣⢣⢣⠣⡊⢌⢎⢣ ⡎⡪⡘⡌⡆⡇⠧⠓⢒⠎⡇⡗⣕⢝⢵⢹⡱⣣⢳⡹⡜⡜⡜⡎⡪⡪⡊⢆⢕⡱ ⠘⠘⠒⠑⠊⠁⠄⢠⢢⢑⢕⢕⢕⢝⢜⢕⢵⢱⢕⢕⢕⢕⢕⢕⢕⠼⠘⠒⠉⠄ ⠄⠄⠄⠄⠄⠄⢠⢑⠥⠱⡡⡣⠣⠣⡣⠣⠣⡃⢇⢇⠇⡇⢇⢇⠇⢇⢣⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠈⠁⠉⠉⢸⠄⡁⣱⠉⠉⠉⠉⠉⠄⠇⢂⣱⠁⠉⠉⠁⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢘⠠⢀⡇⠄⠄⠄⠄⠄⠨⢑⢀⡇⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠰⡔⠐⢣⠄⠄⠄⠄⠄⡏⠄⡊⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠠⢔⠔⡌⢆⢑⠌⢓⠄⠄⠄⠄⠨⣂⠪⡢⢄⡀⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⢠⢨⣪⡣⡑⠨⡐⡠⣈⡤⠋⠄⢀⠜⡜⡔⢕⢌⠢⢒⡀⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠘⠐⠊⠊⠉⠄⠄⠄⠄⠄⠄⢆⢯⢞⢜⣐⢰⠨⠖⠁⠄⠄⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⠩⡪⢒⠤⢀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣎⢮⡣⡣⡣⣣⢣⢃⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⢪⣪⡳⣝⢮⡚⡮⡳⣕⢣⡀⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡠⡣⡳⡵⡹⣪⢞⢎⢮⢳⡱⣕⢖⢵⢕⢕⢍⠦⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⡕⡍⢊⢜⢸⢘⠐⢌⢪⢪⢪⠪⡪⡘⢌⢎⠪⡊⢎⢦ ⠄⠄⣀⠄⠄⢀⢄⢒⠨⢱⡹⣔⢥⢢⢣⢣⢹⢸⡸⡸⡰⡱⡑⡜⡰⡐⢅⢇⢕⡼ ⠄⡈⡆⡍⡢⡁⣂⣐⢬⡳⣽⣺⣵⡻⣮⣳⢽⢵⢯⡺⣱⢱⢱⢑⢌⢎⢦⠃⠁⠄ ⠈⢜⠜⡌⡎⣆⠣⡱⡕⣟⢞⢮⡺⣪⡳⣕⢏⡗⡵⡹⡸⡸⡸⡪⡣⡣⡕⡀⠄⠄ ⡎⢆⢣⠱⣱⢡⠪⡸⡸⡕⣏⢗⡝⣜⢎⢎⢇⢗⢝⢜⢜⢜⢼⢸⢪⡪⡪⡪⡀⠄ ⠚⢌⢢⠵⠁⠰⠱⠡⠣⢣⠣⠃⠇⣣⠱⠱⠱⠡⠣⠕⢕⠍⠪⠪⡱⢱⢑⢕⢭⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⡜⢈⠈⢜⠁⠄⠄⠄⠄⠄⠄⡬⠨⢐⡏⠈⠉⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢳⡠⠈⡺⠄⠄⠄⠄⠄⠄⠄⡅⡂⡞⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⢠⢐⠔⡌⢕⠐⢌⢙⠲⡀⠄⠄⠄⢀⢜⠠⡘⠢⡠⡄⠄⠄⠄⠄ ⠄⠄⠄⠄⡄⣇⡧⡣⢑⠨⡐⡈⣐⣠⠢⠏⠄⢀⢐⢱⢸⢘⢌⠕⡰⠈⣆⠄⠄⠄ ⠄⠄⠄⠄⠐⠃⠑⠚⠚⠉⠄⠄⠄⠄⠄⠄⠄⢜⡸⡵⢇⢣⢂⢅⡆⠵⠊⠄⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡔⣝⢬⢩⢣⠢⢄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡜⡼⣕⢧⡣⡳⣝⢵⢌⡇⢤⢠⣀⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢜⢼⢝⢮⡳⣕⢧⢳⡹⡵⡽⣜⣖⣆⢇⢖⢄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡔⣵⡫⡝⡵⣝⠮⡓⡕⡕⡍⡎⢎⠢⡃⢏⠇⡇⡍⡢ ⠄⠄⠄⠄⠄⠄⠄⠄⢀⢔⢕⠡⠨⡘⡌⡆⡑⡕⡕⡱⡌⡎⡪⡨⢌⠢⡃⢕⢌⢺ ⠄⠄⠄⠄⠄⡤⠒⡐⢩⢪⡳⡅⡇⡎⡎⡆⡇⣎⢎⢎⢆⠇⡇⡪⢢⢱⢨⠢⡒⣜ ⢀⡀⣀⢠⠞⡀⢅⢢⢳⢽⣺⡽⣽⣺⢮⢷⡽⡮⣗⣯⡺⡜⡎⡞⡜⡜⡔⡍⠈⠁ ⡬⡪⡖⡕⡔⡔⡱⡸⡽⣝⡮⡯⣳⢽⢝⡽⡺⣝⢵⢕⢵⢱⢹⢸⢜⢜⢜⢜⠄⠄ ⡜⡜⢌⢎⢎⠎⡜⡼⣝⢮⡺⡝⣎⢗⡝⡮⡫⡺⡸⡪⡪⣪⢪⡪⡎⡮⡣⡣⣃⠄ ⢎⢌⠆⡣⡑⢅⢣⢣⢳⢝⢎⢏⠎⡇⡇⡇⡇⡇⡇⡗⢝⢜⠜⡎⠮⡳⡹⢜⢜⠄ ⠓⠱⣌⠦⠎⠖⠱⠅⢧⡂⢂⢐⢨⠖⠊⠒⠒⠊⠒⠊⢪⢂⠅⠄⣑⠇⠉⠈⠈⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⣀⢘⡇⠄⡙⡄⠄⠄⠄⠄⠄⠄⠘⡆⡂⡈⣖⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⢀⢀⢆⠪⠌⢆⠪⢐⠐⠌⠍⠲⣀⠄⠄⠄⡐⡇⡐⢄⢌⠣⡲⡀⠄⠄ ⠄⠄⠄⡔⣕⡵⡱⢑⠡⠁⢄⠡⡈⢌⡨⡴⠃⠄⡀⡣⣱⢸⠸⡨⠢⡑⡐⢍⡆⠄ ⠄⠄⠄⠑⠱⠩⠜⠐⠚⠚⠉⠉⠈⠉⠁⠄⠄⠠⡕⣝⢾⢱⢑⢌⣂⡦⠖⠒⠃⠄ `);
  client.say(target, `⠄⠄⠄⠄��⠄⠄⠄⠄⠄⠄⠄⠄⢐⢝⢬⢓⠲⡀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡰⣱⡫⡧⡳⡹⣜⢮⡑⡄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢔⢼⡺⣪⢗⣝⢮⢪⢗⡯⣒⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⢔⢕⠏⡎⢮⡛⠎⡣⢓⢝⢮⢺⡸⡠⡀⢀⢀⢀⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⢀⢌⢮⢂⠡⡊⡆⡇⡅⡢⡃⡇⡗⣕⢝⢜⢪⠪⡘⢌⢒⢤ ⠄⠄⠄⠄⠄⡤⢒⢉⢅⣗⣽⣪⢞⣜⣜⣜⣜⡼⣜⢼⡸⡜⡜⡬⡢⡑⢌⠢⢡⠢ ⠄⡀⡄⡴⡑⡡⢰⢸⢜⣞⣞⣞⢯⣗⣗⣗⢗⢯⡳⡳⡱⡱⡹⡸⡰⡨⢢⠡⡑⣜ ⡰⢸⢸⢸⢸⢘⢔⢕⡟⣞⢼⣪⡳⣕⢧⡳⡝⡵⡹⡸⡱⡹⡸⡸⡘⡌⡆⢕⡼⠁ ⢜⡐⢅⠣⡃⡊⢆⢇⢏⢮⡳⣕⢵⢱⢱⢱⢱⢱⢹⢸⢪⢺⢸⢜⢜⢜⠬⡂⠄⠄ ⠣⡪⣨⣊⣌⢜⣐⣅⡕⡑⠜⠠⢁⢣⣑⣅⣣⣑⢅⡣⣑⢅⠑⠌⣪⢪⣑⡵⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠈⢸⡐⢸⡉⠁⠄⠄⠄⠄⠄⠄⢘⠄⢂⡱⠁⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⡐⠄⢇⠄⠄⠄⠄⠄⠄⠄⢨⠐⡀⣳⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⡄⢔⢄⠢⡡⢑⠌⡂⢆⢄⠄⠄⠄⠄⡸⢐⠄⡔⠤⢀⡀⠄⠄⠄ ⠄⠄⠄⢠⢸⣸⢜⢌⠂⠅⢂⠡⠐⡐⣐⠼⠂⢀⠰⣑⢜⠜⡌⡪⢘⠐⢥⠄⠄⠄ ⠄⠄⠄⠈⠎⠎⠮⠔⠞⠚⠈⠉⠉⠉⠁⠄⠄⢜⢜⠾⡕⢕⢰⣈⡤⠵⠎⠁⠄⠄ `);
  client.say(target, `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢌⢧⢓⡢⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⢪⢮⡳⣣⢣⢇⢆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⣕⢽⢕⢯⢮⣣⢣⢣⢣⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⢣⠓⠕⡍⢗⠝⡘⢌⢧⢣⢡⠄⠄⣀⡀⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⡠⠤⠔⡒⡔⡧⡡⡪⡘⡜⢔⢄⢣⢪⢪⡢⡩⠨⠠⡈⠍⡒⡄⠄ ⠄⢠⢢⠪⡢⡃⠌⢄⢕⢜⣮⢯⣞⡼⣜⣼⣱⢵⡣⣇⢇⢇⢎⢜⢌⢢⢑⡐⠥⡀ ⡠⡑⡔⡕⣕⢕⢕⠱⡸⣝⢞⡽⣪⢏⢯⡺⡺⣝⢽⡸⡜⡜⡜⣜⢜⢌⢂⠪⡨⡅ ⡣⡊⡢⠣⡱⡸⢊⠣⡱⡸⡱⡝⡼⡹⡕⡝⡞⡜⡎⡎⡎⡎⡎⡎⡎⡆⡇⢅⢕⢱ ⠣⣊⢢⢑⡼⠄⡢⡃⡎⢜⢜⠜⡎⡎⡎⡎⡎⡎⡎⡮⡪⡎⡮⡪⡪⡪⡪⡢⣑⠕ ⠄⠄⠁⠁⠄⠄⠄⠄⠈⠁⡇⠐⢠⠖⠒⠒⠒⠒⠓⡊⡐⠐⡸⠘⠼⠸⠜⠈⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡇⠈⡼⠄⠄⠄⠄⠄⠄⡆⠂⢱⠃⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⠁⢦⠄⠄⠄⠄⠄⠄⡆⠡⢸⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⢄⢔⠔⡑⡑⠌⡊⡢⠄⠄⠄⠠⢍⢢⠨⢣⢠⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⡆⣵⢣⢑⢐⠐⡠⠡⡐⡤⠏⠄⢄⢇⢇⠇⡍⡢⢂⢳⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠘⠬⠪⠒⠒⠋⠉⠄⠄⠄⠄⢆⡕⡯⡣⣑⣰⠰⠖⠚⠄⠄⠄⠄⠄ `);
}
 
function WAYTOODANK(target) {
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠛⡟⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣶⣿⣷⣎⡙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⢿⣿⣿⣿⣿⣷⣎⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⣉⣉⣩⣭⣭⣭⡅⢀⡀⡀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣧⣸⣿⣷⣆⡐⠁⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡻⠿⢿⣿⣯⣿⣿⣭⡥⠄⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣶⣶⣶⣶⣶⣶⣶⣤⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠿⠛⠛⣛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠄⢀⣀⣿⣤⣀⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣟⠤⣿⣿⣿⣿⣿⣶⣦⣌⡙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡿⠄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣧⣄⣀⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣗⠄⠙⠛⠛⠛⠛⠛⢛⣛⣛⡛⠛⠛⠄⠄⠉⠙⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣧⣤⣤⣤⣶⣶⣿⣿⠛⣿⣿⣧⣤⣤⠒⠄⣶⡞⠄⢸⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣿⣿⣿⣿⣿⣤⠄⠉⠁⠄⢸⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⠛⠛⠛⠛⠛⠛⠛⠉⠄⠄⢐⣤⣼⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣤⣈⣩⠉⠛⠛⠛⠛⠛⠛⠛⢛⣛⠉⠄⣶⣾⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣤⣭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣥⣤⣤⣶⣤⣤⣭⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡏⠁⠄⠄⢰⡆⠄⠘⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠁⢀⣰⣶⣾⣿⣿⣧⡆⠄⠈⠉⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⠄⠘⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠅⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⡌⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠁⠨⢽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⡆⠄⠉⠹⢿⣿⣿⣿⣿⣿ ⣿⣿⠄⠘⠛⠛⠛⠉⠉⠉⠉⢉⣀⣀⣀⣤⣤⠄⠄⠄⠄⠄⠄⠄⠄⠄⢹⣿⣿⣿ ⣿⣿⡀⢀⣀⣀⣰⣶⣶⣾⣿⡿⠿⣿⣿⣿⣿⣶⣶⣀⣁⠿⠿⠄⣿⣶⠃⠄⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠹⠿⠄⠄⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣿⣿⣿⣿⣿⣿⣿⣿⣤⣤⠁⠄⠄⠄⠄⣿⣿ ⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⡿⠿⠿⢿⣿⣿⣿⠿⠿⠟⠛⠄⠄⠄⠄⠠⢆⣀⣿⣿ ⣿⣿⣀⡈⠹⠿⠿⢿⣿⣿⣿⣿⣶⣦⣤⣤⣤⣬⣭⣴⡶⠞⠃⢄⣀⣿⣿⣿⣿⣿ ⣿⣿⠛⠳⠶⠶⠦⠤⠤⠤⠤⠤⢤⣀⣉⣉⣉⣉⡩⣭⡄⠄⠄⠘⠛⠛⠻⠿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⠄⠄⠄⠄⣿⣧⣤⣤⠄⠘⠛⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣤⣴⣶⣶⣿⣿⣿⣿⣶⣆⣀⣀⠄⠈⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣤⠄⠈⠉⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣆⣀⣀⠉⠉⣿⣿⣿⣿⣿⣿⣿⣿ ⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⡄⠄⠘⠿⣿⣿⣿⣿ ⠒⢺⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠟⠛⠉⠉⠉⠉⠉⠉⠉⠉⠓⠄⠄⠄⠉⠉⢻⣿ ⠉⠉⠉⠉⠉⠉⠄⢀⣀⣀⣤⣶⣾⣿⣿⣿⣿⣇⣀⣀⠠⣀⠄⢀⣀⠄⠄⣀⠄⠄ ⠤⠄⠄⢠⣤⣤⣤⣿⣿⡿⠿⠟⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣄⡸⠿⣿⠄⣿⣇⠄ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⢸⣿⠄ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⡏⠁⠄⠄ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠘⠄⠄ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠉⠄⠄⠄⠄⠠ ⠛⢻⣿⣿⣿⣿⣿⣿⣷⣤⣭⣍⣙⣛⡛⠛⠛⢏⠉⠉⢡⣤⣀⣠⣴⠄⡀⠄⢰⣶ ⣀⣀⣀⣀⠄⠘⠛⠛⠛⠛⠻⠿⠿⠿⢿⣿⣶⣾⣿⣿⣿⡿⠏⠉⠄⠈⣶⣶⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣩⣤⣬⣾⡶⠶⢼⠿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⢿⣿⣷⣂⣹⣇⣸ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⣵⣆⣹⣿⣷⣶⣄⣏⣉⣿⡇⠄⣿⡹⠿⠿⠏⣘ ⣿⣿⣿⣿⡟⠛⣿⣿⠿⣿⣟⡛⣿⣿⣏⣹⣿⣿⣿⣿⡯⣽⣇⠛⣻⡗⠒⠊⢕⠄ ⡿⠿⢏⠹⢀⣸⣿⣏⣠⣿⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣶⣄⣸⣄ ⠁⢀⣼⣶⣮⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏ ⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣟⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣾⡿⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⢁⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⡟⠛⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⡧⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⡇⠌⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⡇⢻⣷⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣻⣿⣿⣿⣿ ⣿⣿⣉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
}
 
function forsenReady(target) {
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠿⠿⠟⠛⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⠄⢀⣀⠄⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠈⣿⠧⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡇⠄⠄⠄⣰⣶⠞⠸⣆⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡟⠃⠄⠄⠄⢻⣿⣦⣦⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠟⠛⠉⠄⠄⠄⠄⠄⣀⡀⠄⠹⠛⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⡀⠄⠻⢷⣦⣤⠄⠛⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⣠⣤⣤⡄⠄⡜⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⠄⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠸⣿⣿⣿⣿⣆⢹⠁⣶⠆⠄⢀⡖⠄⠘⠇⠄⣀⣀⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠈⣿⣿⣿⣷⡤⠄⠄⠄⠘⢺⠛⠂⠄⠄⠘⣿⣿⣿⣿⡽⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠽⣿⣿⣿⡉⠄⠄⠄⢀⢸⡀⢷⠄⡀⠄⣉⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠏⠉⠉⠉⠉⠉⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⢴⣶⣆⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⢠⣀⣀⣿⡛⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡏⠄⠄⠄⢰⣿⣿⣁⣽⣿⣾⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⠿⠋⠉⠉⠁⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠁⠄⠄⠄⠄⢀⣀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠙⠉⠿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⣀⣰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⣀⣀⠄⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⢠⣶⣿⠿⠛⠉⠉⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣶⡽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣼⣿⠉⠄⠄⠄⠄⠄⠄⠄⠈⠉⠛⠿⠿⢿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿ ⠙⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠉⠄⠰⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠉⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠿⠁⠄⠄⢀⣀⣀⣶⣶⣍⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡏⠄⠄⢀⣴⣾⣿⣿⣿⣿⣿⣞⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠃⣀⣶⣿⣿⣿⣿⣿⠿⣿⣿⣿⡏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠟⠁⣴⣿⣿⣿⣿⣿⣏⣡⣤⣿⣿⣿⣿⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠿⠉⠄⠸⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⡿⠋⣴⠄⠄⠄⠄⠄⠈���⠻⠿⠿⠿⣿⢿⣿⣿��⣷⣟⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⢃⠶⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⢿⠿⠿⠿⡿⢎⡽⢿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⡀⠄⠄⠄⠄⠄⠄⠸⠇⢸⣿⣿⣿⣿⣿⣿ ⡀⠄⠄⠄⠄⠄⠄⠄⠄⣀⣤⡀⢸⣿⣿⣆⠄⢀⡀⠄⢠⣤⣠⣼⣿⣿⣿⣿⣿⣿ ⣷⡀⠄⠄⠄⠄⢠⣶⣶⣿⣿⣷⣾⣿⣿⣿⣿⣿⣷⣆⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠄⠄⠠⠶⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⠃⢠⣠⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠿⠏⠁⠄⠄⠄⢀⣺⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡿⠟⠉⠄⠄⠄⠄⠄⢀⣹⣿⣿⣿⣷⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠿⠛⠁⠄⠄⠄⠄⣠⣠⣾⣿⣿⣿⣿⣿⣿⣷⡽⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠛⠄⠄⠄⠄⠄⣠⣿⣿⣿⣿⡿⠟⠛⠿⣿⣿⣿⣷⣻⣿⣿⣿⣿⣿⣿⣿⣿ ⠟⠛⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⠁⠄⠄⠄⠙⠻⣿⣿⣧⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠈⠙⠃⠄⠄⠄⠄⠄⠄⠄⣄⠄⢹⣿⣽⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⠇⠄⠐⠄⠄⠄⠄⠿⢿⢾⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⡀⠄⠄⢀⣀⣀⠄⠄⠄⠄⣀⣾⣾⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⣠⣿⣿⣿⣿⣦⣼⣿⣿⣿⣶⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⡀⠄⠄⠄⣀⣶⣾⡟⠉⠙⣿⣿⣿⣿⣿⣿⡿⠉⠻⣆⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣶⠄⢠⣿⣿⣿⣷⣤⣴⣿⣿⣿⣿⣿⣿⣷⣤⣴⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠄⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣈⢹⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣀⡀⠄⠄⠄⣰⣿⣿⣸⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠄⠠⣾⡀⠄⠄⠄⠄⠄⠄⣀⣿⣿⣷⡆⠄⢀⣿⣿⣏⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡏⠄⠄⢑⣯⠄⠄⠄⠄⠄⠄⠈⢻⡿⠿⠇⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠁⠄⠄⠄⠘⣦⠄⠄⠄⢀⣿⠿⢾⣷⣶⣦⣼⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠄⢀⡀⠄⢀⣿⣆⠄⠄⠸⢿⣀⢀⣹⢿⣿⣿⣿⣿⢯⣾⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⠄⣸⣷⡆⣸⣿⣿⣆⣀⠄⠈⠷⠋⣰⣾⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡿⠄⣿⣿⣷⣿⣿⣿⣿⣿⣷⣶⣤⣶⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡇⠄⣿⣿⣿⣷⡿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡇⠄⢿⣿⣿⣿⣧⣀⣠⣿⣿⣿⣿⣿⣿⠉⠉⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡇⠄⠱⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠁⠄⠄⠘⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠉⠉⠹⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⣀⣴⣾⣧⠄⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⢠⣤⣈⣩⡿⠻⣸⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⣼⣿⡿⠿⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠉⠉⠿⢿⣿⣿⣿⣿⣿⣿⣿⣷⣀⠄⠈⠿⣿⡤⣀⡸⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠈⠙⠿⠿⠿⠿⠿⠟⢛⡉⣁⡀⠄⠈⠿⠋⢱⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠠⣤⣯⣤⡀⠄⠄⢼⣾⣿⣿⣷⣶⣶⣾⣿⣾⣿⣿⣿⡿⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⣀⢾⣿⣿⣷⣿⣾⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣸⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠝⠿⠿⠿⠿⠿⠻⣿⢿⣿⣿⠿⠁⢸⣿⣿⣿⣿⣿ `);
}
 
function forsenPls(target) {
  client.say(target, `/color red`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠄⡀⠔⡔⢕⢕⢜⢔⢄⠄⡈⢹⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠄⠄⢁⢐⢕⢕⢔⠔⠥⡑⠡⠑⠐⢘⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⣀⠄⡐⠨⠢⡣⠡⡑⠅⡇⠍⠂⠁⣸⣿⣿⣿⣿ ⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⠟⠛⠉⠔⡐⡈⠄⠌⠊⠐⠑⠈⠄⣠⣴⣿⣿⣿⣿⣿ ⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠐⠈⠈⠂⠁⡁⠁⠄⠈⠍⢉⠻⠿⢿⣿⣿ ⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⡀⠄⠄⢀⠄⠄⢀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠐⠈⢻⣿ ⠏⠄⠄⠄⠄⠄⠄⠂⠄⠂⢁⠁⡐⠐⠁⡈⠄⡂⠂⡐⡐⠄⠈⠄⠄⠠⠄⠈⠄⢻ ⣀⡀⢐⢐⢅⠢⡢⢄⠄⠄⠁⠁⠄⢁⠐⢀⠢⠐⠄⡂⡂⠄⠂⠄⠄⠄⠄⢀⠨⠄ ⣿⣇⠠⡑⢔⢑⠕⢅⢅⠄⡂⡈⠨⠠⠄⠄⠂⠐⡐⠐⠄⠄⠠⡠⡠⡡⡠⡠⠄⡂ ⣿⣿⡄⠂⠅⡂⠅⡑⡐⡑⠌⠜⡘⡘⡸⠘⠜⠌⡊⢎⢎⢆⣅⢪⢸⢨⢢⠑⣠⣴ ⣿⣿⣇⣀⠁⠄⠐⠄⠠⠐⢈⠐⡀⢂⢀⢁⢈⠄⠄⠡⢱⢱⢸⢸⢸⢸⢐⢡⣿⣿ ⠉⡉⠄⡢⠨⡨⡨⡊⣌⠪⡢⡑⡌⠆⠆⠕⡐⠡⠈⠄⡑⠔⠡⠣⡱⡘⡐⢸⣿⣿ ⠄⠠⢑⠨⠨⠢⠑⠌⡂⠑⠐⠐⠄⠁⠁⠁⠄⠄⠁⠄⠄⠈⠄⠁⡂⠪⠐⢸⣿⣿ ⣿⣶⠆⢀⠁⠈⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⢀⠄⠄⠄⢀⠄⢶⣾⣿⣿⣿ ⠛⠁⡀⠄⠄⠄⠄⠈⠄⠄⠈⠄⠄⠁⠄⠈⠄⠄⠄⠄⠄⠄⠁⠄⠄⢸⣿⣿⣿⣿ `);
  client.say(target, `/color orangered`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠉⠄⠠⡢⢃⠇⡇⡆⡂⡈⢻⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠨⡨⡪⡢⢪⠨⡨⠂⡂⢸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡄⠡⠪⡨⠨⡂⡣⠡⠁⠄⣼⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⠛⠉⠉⠔⡡⠐⠈⠌⠂⠌⠄⢰⣼⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠿⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠁⠈⠄⠄⠂⠩⠙⠻⣿⣿⣿⣿⣿⣿ ⣿⣿⡿⠋⠄⠄⠄⠄⠄⢀⠄⠄⠠⡀⡀⢀⠄⠄⢀⠄⠄⠄⠄⠈⢀⠛⣿⣿⣿⣿ ⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⡡⠈⠔⠄⠌⠠⠡⠈⠠⠄⠄⠠⠄⠄⠄⠐⠘⢿⣿⣿ ⣿⠁⡀⡀⠄⠄⠠⠄⠄⠄⠐⡈⡈⠄⠄⠕⢀⠨⠨⠄⠄⠄⠄⠄⠠⠄⠁⠊⢻⣿ ⠄⢌⠢⡂⠅⠂⠆⠄⠂⠐⢀⢁⠐⠡⠨⠨⠄⠨⠄⠄⠄⢈⢀⠂⠄⠄⠄⠈⠄⣿ ⣄⠡⢑⠌⡌⢌⢐⠄⠡⠐⠠⠠⠡⠄⠕⠄⢁⠐⠄⠄⠄⠂⣿⣷⣔⠄⡂⢅⠅⠻ ⣿⣷⡄⠑⡈⡢⠡⠊⠌⢌⠈⠄⠄⠁⠁⠄⠁⠄⠄⢀⠄⠅⣿⣿⣿⠨⡐⢅⠪⠄ ⣿⣿⣿⣷⡤⠐⡁⠅⠑⠄⠄⠁⠄⠄⠄⠄⠄⠄⠂⠠⠠⠠⢹⣿⡿⡐⢌⢐⠌⣠ ⣿⣿⣿⣿⠁⠂⢀⠈⠄⠄⡀⠄⠄⠄⠂⠁⠄⠄⡈⠄⡑⡡⡑⡘⢔⢌⠢⢂⣼⣿ ⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠐⢀⠢⠨⠨⠂⠢⣰⣿⣿⣿ ⣿⣿⣿⣅⡀⠄⢀⠄⠄⡀⠄⠄⠂⠄⠄⢀⠠⠄⠄⠄⠄⠄⠄⢲⣶⣿⣿⣿⣿⣿ `);
  client.say(target, `/color goldenrod`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠄⢄⢢⢰⢠⢄⡀⡀⢈⢿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⢑⢌⢎⠪⡱⡱⢕⠢⢂⠈⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⡱⡱⡱⡱⠱⡌⡆⡑⠄⢁⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠟⢒⢐⠐⠱⡨⠢⡩⠊⠄⠠⢂⣾⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⢀⠁⠣⠡⡁⠄⠅⠌⠰⢦⣵⣿⣿⣿⣿ ⣿⣿⣿⣿⡿⠟⠁⠄⠄⠄⠠⠄⠐⠄⠈⠄⠄⠄⠄⡀⠈⠄⠈⠄⠐⠉⠛⢿⣿⣿ ⣿⣿⣿⠋⠄⠄⠄⠄⠄⠂⠄⢀⠰⡐⢀⠢⢠⢀⠁⡀⠄⠄⠂⠄⠠⠄⠂⠁⠹⣿ ⠿⠛⡡⡠⠄⠄⡀⠈⠄⠄⠄⡐⠐⠄⡂⡂⠄⠂⡂⠌⠄⢊⠄⢀⠄⠄⠄⠄⠐⢿ ⠄⡎⡢⡊⢄⢁⣀⣠⡄⠂⢀⢀⠈⠠⠂⠄⠂⠂⢅⠁⢈⢐⠄⠄⠄⠄⠂⠄⢈⢸ ⠐⡑⠬⡨⢂⢸⣿⣿⡇⠠⠄⠂⠄⠅⡁⠅⠡⠨⠂⡀⠅⠄⠄⢀⠐⠄⠄⠄⠄⠈ ⠄⢕⠱⡨⠂⣸⣿⣿⠐⠄⠐⡀⠌⠄⠌⠄⠌⡂⢁⠄⠂⠁⠄⠄⣀⡠⠐⢀⠌⠸ ⣧⠐⡑⢜⡈⢹⣿⡏⠄⠄⠄⠄⠄⠄⠂⠁⠄⠄⡀⠈⠄⠄⠄⠁⠘⡇⠌⡐⢅⠅ ⣿⡄⢊⠆⢇⢅⢹⠑⠄⠄⠄⠐⠄⠄⠄⠄⢀⠄⠄⠄⠄⠈⠄⠄⠐⠄⠡⢈⢂⠂ ⣿⣇⠂⠕⠡⡂⠊⠠⠄⠄⠂⠄⠄⠄⠁⠄⠄⠄⠄⠄⠁⠄⠄⠄⠈⠸⢠⠑⢌⠂ ⣿⣿⣀⣁⣈⡀⠄⠂⠄⠄⠄⠄⠄⠁⠄⠄⠄⠂⠈⠄⠄⢀⠄⠄⠄⢁⠢⠨⡐⡁ `);
  client.say(target, `/color green`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⢄⢔⢄⢄⠄⡈⢻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠄⢅⢇⢝⢪⢳⢱⠄⠂⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⣿⣿⣿⠄⠨⡸⡪⡪⣪⢢⡑⠨⠐⣿⣿⣿ ⠰⡰⡐⡢⣒⠔⠄⠄⠄⠄⠄⠄⡀⠄⢀⠨⠉⠡⡠⠑⡕⢬⠸⡨⠄⡐⣰⣿⣿⣿ ⠁⠢⠡⠑⠢⠁⢀⠠⠐⠄⠁⠄⠄⢀⠄⠄⠄⠄⠪⢐⠨⡠⢁⣤⣤⣼⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣷⣤⣤⣄⣀⢀⠠⠐⠄⢠⠄⠈⠄⠄⠄⠁⠈⠄⠹⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⡅⢁⠑⢄⠁⡀⠐⠄⠄⠁⠠⠹⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠠⢀⠁⡈⠢⠡⠠⠨⠠⢐⠄⠐⠄⠄⠠⢸⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄⡁⠂⠠⠊⡁⡂⢘⠈⢀⠆⠄⠄⠄⠂⠄⢺⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠄⠂⡂⠠⠡⠨⠂⠨⠐⡈⠄⠄⠄⠄⠄⠄⠄⡁⣿⣿⠟ ⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⠁⠡⠡⠁⢁⠠⠄⠄⠂⠈⠄⠄⠄⢀⠟⡣⠊ ⣿⣿⣿⣿⣿⣿⣿⠃⠄⠠⠄⠄⠐⠄⠄⠄⠐⠄⠄⠄⠄⢡⡈⡢⡑⢌⠔⡑⡈⡢ ⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⡀⠠⠄⠁⠄⠄⠄⠈⢀⢸⠐⠐⠨⠐⢐⢐⠐⣠ ⣿⣿⣿⣿⣿⣿⠇⠄⠠⠐⠄⠁⠄⠄⠄⠄⠄⠄⠁⠄⢀⣼⣎⡀⢂⠌⣂⣴⣾⣿ ⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠄⠄⠄⢸⣿⣿⣶⣾⣿⣿⣿⣿ `);
  client.say(target, `/color dodgerblue`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠋⡀⢀⢀⠄⠄⢈⠙⢿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠁⢂⢌⢎⢮⢺⠬⡄⠄⠂ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⢈⢰⢱⢅⢎⢎⠕⢕⠁⠄ ⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠛⠛⠛⠛⠛⠛⠛⠧⢀⠠⠪⡪⡊⢌⠮⡪⠂⢈⢀ ⣿⡿⠿⠛⡋⠄⠄⠄⠂⠐⠄⠄⠄⠄⠄⡀⠄⡀⠄⠂⢕⠄⠊⡘⢐⠑⠠⠄⢢⣿ ⠁⡢⢡⢑⢄⠁⠄⠠⠄⠄⠄⡀⠄⠄⡀⠄⠄⠄⠄⡀⠄⠈⠈⠂⡁⠌⠿⣿⣿⣿ ⡀⡊⡆⡕⡐⠌⢀⠠⠄⠄⠁⠄⠄⠄⢀⢀⠪⠄⢄⠄⡀⠈⠄⠄⠄⠄⠄⠜⢿⣿ ⣧⠐⡕⢜⠄⠅⢾⣿⣿⣿⠃⢀⠄⠄⢐⠠⠢⠨⠠⠁⠂⠄⠄⠂⠄⠠⠄⠄⠠⢻ ⣿⡆⢪⢱⢩⠢⢸⣿⣿⡇⠄⠄⢀⠄⠄⠄⠤⡁⡡⠈⠄⠅⢂⠐⠄⠄⠄⢀⠠⠘ ⣿⣧⣀⠣⡣⡫⡢⠻⡟⠁⠄⠁⡀⠄⠈⡐⢁⠐⠄⠠⡁⠠⠐⠄⠄⠄⠄⠄⠄⡀ ⣿⣿⣧⠈⡢⢣⢣⠡⠃⠄⠐⠄⠂⠠⠐⢁⠌⡂⡈⡂⠄⡁⠠⠄⠐⠄⠄⠄⠄⡀ ⣿⣿⣿⣷⣀⠕⡨⢊⠊⠄⠄⠄⠄⠄⠄⡀⠄⠐⠄⠠⠠⢐⢐⠰⢡⠨⡐⡄⣡⣤ ⣿⣿⣿⣿⣿⣦⣄⠁⠌⠄⠐⠄⠄⠄⠄⠄⠄⢀⠈⠄⡱⢐⢔⢅⢐⠅⡪⢐⢸⣿ ⣿⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⢀⠄⠁⠄⠄⠄⠄⢁⢂⢑⢐⠅⠅⠌⠄⢂⣸⣿ ⣿⣿⣿⣿⣿⣿⡆⠄⠠⠄⠁⠄⠄⠄⠄⠄⠄⢀⠄⠄⡀⠄⠄⠰⢶⣶⣾⣿⣿⣿ `);
  client.say(target, `/color blue`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⡀⡢⢢⢲⢰⡠⡄⡀⡀⢻⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠂⢌⢌⡪⢪⠱⡱⢱⠑⢄⢸⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠁⡂⢇⠣⡣⢳⢱⠡⡁⡂⣸⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⠉⠉⠉⠉⠉⡢⠨⠘⠌⡆⠕⢅⢡⢐⣤⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠋⠄⠄⢀⠠⠄⠄⠄⠄⠄⠃⠑⠔⠠⡑⠄⠙⠿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠟⠁⠄⠄⡀⠄⠄⠄⠄⡀⠄⠄⠄⠄⠄⢀⠄⠄⡀⠁⠈⠛⣿⣿⣿⣿ ⣿⠿⠟⠁⠄⠄⢀⠄⠄⠄⠄⡀⠕⠂⢐⠰⠠⢀⢀⠄⠄⠄⠄⠄⠄⠂⢈⢻⣿⣿ ⠟⠄⢔⠔⡄⡈⠄⠄⠄⠄⠄⠂⠸⠠⢡⠂⢈⢐⠐⡀⠡⠄⠐⠄⠁⠄⠄⠠⢻⣿ ⠄⠕⢅⢣⠱⢀⣶⠆⠠⠄⠄⠨⠄⢰⢀⢂⠄⡢⠁⠄⠕⠄⠄⠄⠄⠄⠄⠐⠈⣿ ⡈⠌⠪⡘⢜⢔⠩⡀⠄⡀⡈⠄⡐⠐⠠⠂⡐⡐⡈⠌⠄⠄⡀⣧⡈⠄⠂⡀⢅⢹ ⣿⣦⣅⡈⠐⠡⠣⡊⡆⡢⡂⡁⡨⢀⠣⠁⢄⠂⠄⠄⠄⡀⢄⣿⣿⠌⡢⠢⡒⠄ ⣿⣿⣿⣿⣶⣥⠐⠈⠌⠪⡸⡨⡢⡢⢂⠈⠄⠄⠁⠄⢄⢄⡘⣛⢑⢌⠪⠨⡨⢂ ⣿⣿⣿⣿⣿⣿⢀⠄⠈⠨⠐⡁⡃⠪⢐⠈⠄⠨⡘⢜⠔⡕⠜⢔⢑⠌⠌⢈⣠⣿ ⣿⣿⣿⣿⣿⡏⠄⠄⠄⡀⠄⠄⠄⠁⠄⠄⠠⠁⠌⢂⠑⢈⢨⣤⣶⣶⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠁⠄⠄⡀⠄⠄⠈⠄⠄⠄⢀⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `/color blueviolet`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⡟⢁⠠⡐⡔⡔⣖⢲⡐⠄⠠⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⠄⢂⠪⢘⢜⢸⢸⢸⠡⢁⠁⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣷⡀⠐⠨⡊⠎⠮⡪⡎⢆⠄⠌⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡷⠦⠅⠨⢘⠜⢌⠪⡂⠄⠄⠄⠄⠌⢉⠙⠛⢿⣿⣿⣿⣿⣿ ⣿⣿⣿⡿⠋⠁⠄⠄⡀⠄⠈⠄⠐⠐⠁⠄⠄⠄⠄⠄⠄⠄⠄⠈⠄⠹⣿⣿⣿⣿ ⣿⣿⠏⠄⠄⡀⠄⠄⠄⠄⠄⡀⠄⠄⡀⠠⠐⠄⠁⠄⠁⠄⠐⠄⠄⠈⠄⡉⡙⣿ ⠿⠁⠠⠈⠄⠄⠄⠄⢌⠢⠁⠂⢊⠐⡐⠄⠂⠅⠄⠄⠠⠐⠄⢀⠄⠂⠁⢠⠠⠿ ⠄⡐⡁⠄⠄⡀⠄⠐⠐⠄⠅⠕⠄⠌⢔⠄⡁⡃⠄⠐⠄⢀⢸⣶⡤⢂⢪⢊⢎⠢ ⠐⢔⢜⢜⢕⠄⡀⠈⡀⠄⡑⠄⢅⠨⢂⠐⢈⠂⠄⠄⠄⠄⣿⡟⡑⡕⢅⠣⠂⣡ ⡈⠸⡰⡱⡱⡀⠄⠄⡀⠂⠄⠅⠂⢌⢐⠐⠠⠄⠠⢠⠠⡅⡯⡸⡘⠌⠂⣡⣼⣿ ⣿⡈⠐⠅⡃⢇⢣⢣⢢⢣⢣⢣⢡⠡⠄⠐⠄⠠⠑⢔⢱⠱⡱⠡⣨⣶⣿⣿⣿⣿ ⣿⣷⣮⣤⡈⠄⠂⠈⢘⠸⡸⡸⡸⡐⠄⠄⢀⠄⠄⠁⠂⡑⣨⣤⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠁⠄⠄⠄⠄⠨⠘⠌⡊⢌⠂⠈⠄⠄⠄⠐⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡟⠄⠄⠄⠄⠁⠄⠈⠄⠐⠄⠂⠄⠄⠄⡀⠄⠄⠂⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡇⠄⠄⡀⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⠁⠄⠄⠄⠁⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `/color red`);
  client.say(target, `/me ⣿⣿⣿⣿⣧⡐⢄⢢⢪⡺⣜⢜⢔⠠⡀⢐⠐⡈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣷⠈⠪⡘⣌⡪⣪⢳⡑⡀⠂⠨⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣆⠑⠕⡱⢱⢱⢣⢓⠔⡌⣆⢅⠛⢛⠛⠛⠻⢿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣷⣄⠌⠢⠃⠅⡢⡣⡫⠊⠄⠄⠄⠄⠁⠈⠄⠂⢉⠻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠟⠣⠈⠈⠄⠂⠄⢀⠄⠄⠄⠄⠄⠂⠐⠄⠠⠄⠐⠌⢿⣿ ⣿⣿⣿⣿⣿⣿⠟⠁⠈⠄⡀⠈⠄⠠⠈⠄⠄⠠⠄⠠⠄⠄⠄⠄⠄⠄⠐⠈⠌⣿ ⣿⣿⣿⣿⣿⣿⠄⠈⢀⠂⡐⠌⠌⠔⢈⠈⠄⠄⡀⠄⢀⠠⠄⠄⠄⠄⠠⠄⡁⢿ ⣿⣿⣿⣿⣿⣿⠄⢁⢀⠢⠐⡨⠄⠅⢂⠁⢀⠄⠄⡀⠄⠄⠄⠄⡀⠐⡀⢄⢐⠘ ⣿⣿⣿⣿⣿⣿⠄⠄⠠⠐⡀⢂⢁⠑⠐⠄⢀⠠⠄⠄⠠⠄⠄⡁⢜⢜⢜⡜⣜⡂ ⣿⣿⣿⣿⣿⣿⡄⢂⠂⠡⢐⠠⠄⠄⠠⠐⠄⠄⠄⠈⠄⠄⢂⢀⡪⣪⢪⢎⢆⠇ ⣿⣿⣿⣿⠿⢛⢄⢕⠨⡈⡄⣐⡐⡄⡄⣄⢄⡢⡨⡄⣎⢜⢼⢸⢜⢎⠎⢎⢊⠂ ⠟⡋⡡⡐⡌⡆⢇⠢⢡⠨⡌⡖⡜⡜⡮⡪⡳⡹⡪⡣⠣⠣⢃⠣⠑⣐⣡⣵⣶⣿ ⣤⣬⣤⣤⣔⡈⠔⡈⡂⡑⢌⠢⢃⠣⢑⠑⠡⠁⠂⠄⠈⠄⠄⠄⠐⢿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡿⠐⠄⠄⠄⠄⢀⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⠄⠄⠂⡸⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡇⢁⠄⠂⠄⠈⠄⠄⠄⠐⠄⠄⠂⠄⠁⠄⠄⠄⠄⠄⡂⣿⣿⣿⣿ `);
  client.say(target, `/color orangered`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⡟⠁⠄⢔⢔⢦⢳⡲⡔⢄⢐⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡇⠈⠌⡊⢎⣓⢝⡪⡳⡡⢀⠂⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣷⡐⠄⡪⠪⡪⢺⡪⡏⡆⠠⠈⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡷⠦⠄⡑⠜⡔⢕⢱⢑⠄⠂⠐⠄⠘⠉⡙⠛⢿⣿⣿⣿⣿⣿ ⣿⣿⣿⡿⠋⠁⠄⡀⠄⠄⠄⠁⠠⠁⢁⠄⠄⠄⠄⠂⠁⠄⠄⠈⠄⠹⣿⣿⣿⣿ ⣿⣿⠏⢀⠠⠐⠄⠄⠄⡀⠈⢀⠄⠄⠄⠠⠄⡀⠄⠄⠄⠄⠈⠄⠈⠄⠂⢉⠙⣿ ⠿⠁⠠⠄⠄⠄⠄⢀⠢⠢⢈⢂⠊⡂⠕⡐⡨⠠⠄⠄⠠⠐⠄⡀⢀⠠⠄⡰⡐⠿ ⠄⢌⠔⡠⢂⠄⠂⠄⠌⠢⢑⢐⠐⡈⢆⠂⡈⠆⢀⠈⠄⠠⢸⣶⡤⡐⡌⡎⡎⡆ ⢀⠇⡎⣎⢦⠁⡀⠄⡈⠐⠔⡐⠄⢌⠢⠐⢈⠊⠄⠄⠄⠂⣿⡟⡅⡇⢇⠣⠊⣠ ⡀⠣⡣⡣⡳⣀⢀⠄⡀⠡⢁⢂⢑⠐⠅⠊⠄⠂⠄⡌⡄⣎⢭⢢⢣⠣⠑⣡⣼⣿ ⣿⡈⠢⢑⠕⠕⢕⢕⢆⢧⡣⡕⡔⢅⠁⠈⡀⠠⢑⠜⡜⡜⡜⡅⣡⣶⣿⣿⣿⣿ ⣿⣷⣦⣤⡈⡈⠄⠁⠱⠱⡕⣝⢎⢆⢂⠄⠄⠄⢀⠈⠂⠕⣡⣦⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠁⠄⠄⠄⠄⠡⠣⡑⠕⡑⠄⡀⠄⠂⠄⠄⠄⠂⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡟⠄⠄⠄⠄⠂⠄⠠⠄⠁⠄⠁⠄⠄⠄⠄⠄⠄⡁⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠄⣿⣿⣿⣿⣿⣿⣿⣿ `);
  client.say(target, `/color goldenrod`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠋⢀⢀⢀⠄⠄⠈⡙⢿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠁⡈⢔⠜⡆⡧⡣⣂⠄⠄ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠐⡨⡢⡣⡸⡨⢊⠢⡁⠄ ⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠛⠛⠛⠛⠛⠛⠛⠧⠄⡐⢘⢌⢊⠌⡪⡪⠠⠄⢂ ⣿⡿⠿⠛⢋⠄⠠⠄⠂⠄⠂⠄⠄⠄⠄⠄⠄⠄⠄⡈⠆⡂⢈⠂⡑⡈⠠⠄⢠⣿ ⠁⢔⠨⡨⠂⠄⠄⠄⡀⠄⠄⡀⠄⠈⠄⠄⠈⠄⠄⠄⠄⠈⠐⠐⠐⠈⠿⣿⣿⣿ ⡀⠅⡕⢌⢊⠄⠂⠁⠄⠄⠄⠄⠄⠄⢀⠐⠬⠄⠄⡂⠄⠐⠄⠄⠄⠄⠐⠘⢿⣿ ⣧⠨⡊⡪⡠⠂⢾⣿⣿⣿⠃⠠⠄⠄⢐⠠⠢⢐⢁⠠⠁⢄⠄⢀⠄⠄⠄⠄⠐⢻ ⣿⡆⢊⢪⠢⡅⢸⣿⣿⡇⠄⡀⠠⠐⢀⠄⢔⠈⡀⢀⠊⠄⡀⠅⠄⠄⠄⠁⠄⠜ ⣿⣧⡐⡡⢣⠣⡅⠻⡟⠁⠄⠄⡀⡈⠄⠰⠈⡐⠄⠐⠄⡁⠐⠄⠄⠄⠠⠄⠄⠄ ⣿⣿⣧⠈⠢⡣⠣⡃⡃⠄⠈⠄⠐⠄⠐⡁⠌⠄⡈⠌⠠⠈⠄⡀⠄⠄⢀⠄⠄⠄ ⣿⣿⣿⣷⣁⠌⠪⠨⠠⠄⠄⠐⠄⠄⠄⠄⠈⠐⠈⢀⠐⡈⠄⡰⢐⠨⢠⠠⢢⣤ ⣿⣿⣿⣿⣿⣦⣅⠁⠁⠄⠐⠄⠄⠄⠂⠁⠄⠄⠠⢀⢂⠢⡱⢠⢐⠅⡑⠨⢸⣿ ⣿⣿⣿⣿⣿⣿⠏⠄⠄⠈⠄⠄⠄⠄⠄⠄⠄⠄⠂⠐⠠⠑⠨⠢⢁⠂⢈⢐⣸⣿ ⣿⣿⣿⣿⣿⣿⡆⠄⠠⠄⠄⠄⠄⠄⠄⠄⠠⠄⠄⠁⠄⠁⠈⠰⢶⣶⣾⣿⣿⣿ `);
  client.say(target, `/color green`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⡠⣐⢄⢄⠄⢈⢻⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠄⡡⡪⡘⡜⡜⡜⡀⢀⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⣿⣿⣿⠄⠐⡸⡸⡘⢬⢢⠊⠠⠄⣿⣿⣿ ⡐⠔⠔⡔⡔⠔⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠍⠁⡄⢑⠅⡆⠕⠕⠈⠄⣱⣿⣿⣿ ⠐⠁⠣⠨⠘⠠⠄⠄⠄⡀⠄⠄⠂⠈⠄⠄⢀⠄⠊⠄⢌⠠⠑⣤⣤⣽⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣷⣤⣬⣄⣀⠄⠄⠄⠄⡠⡀⠄⠄⠄⠈⠄⠁⠁⠹⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄⢀⠢⡈⠄⡊⠄⢂⠄⢀⠄⠄⠐⠄⠹⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠠⠄⠂⢈⠔⠠⢈⠐⠄⢐⠄⠄⠄⠄⢈⢸⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄⡈⠐⠠⠑⢐⠄⢐⠁⢈⠂⠄⠄⠄⠄⢀⢸⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠄⠐⠠⠄⡊⢨⠄⠌⡐⠈⠄⠄⠄⠠⠄⠁⠄⡀⣿⣿⠟ ⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠈⠄⠄⠐⠁⠄⠅⠄⠌⠄⠄⠄⠄⠄⠄⠄⠄⢟⠣⠊ ⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⡀⠄⠄⠄⠈⠄⠄⠄⢤⢈⠢⡑⢌⠂⠅⡊⠌ ⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄⠄⠂⠄⠠⠄⠠⢸⠠⠁⠌⠐⡈⡐⠌⣠ ⣿⣿⣿⣿⣿⣿⠇⠄⠄⠈⠄⠄⠐⠄⠐⠄⠄⢀⠄⠄⢀⣼⣆⡐⠠⠁⣂⣴⣾⣿ ⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣶⣾⣿⣿⣿⣿ `);
  client.say(target, `/color dodgerblue`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠄⢄⢢⢢⢤⢠⢀⠄⡈⢿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⢡⢱⡑⡑⡕⡝⡎⡆⠢⠈⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠨⢰⢱⢹⠸⡸⡰⡨⠐⠡⢁⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠟⢒⠨⢐⠱⡡⡃⢎⢊⠂⡁⢂⣾⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠑⠑⠅⢄⠄⢌⠐⠰⢦⣴⣿⣿⣿⣿ ⣿⣿⣿⣿⡿⠟⠁⠄⠄⠄⠄⡀⠄⠄⠂⠄⠂⠄⠁⠄⠄⠄⠄⠁⠄⠩⠛⢿⣿⣿ ⣿⣿⣿⠋⠄⠄⠄⠄⠄⠂⠁⠄⠠⡂⢐⠠⠄⢄⠠⠄⠄⠁⠄⠄⠄⠄⠄⠐⠹⣿ ⠿⠛⡡⡠⠄⠄⡀⠈⠄⠄⠄⢐⠐⠌⠠⡂⠁⢂⠌⠌⠄⠅⡂⠄⠄⠄⠐⠄⠁⢿ ⠄⡎⡒⡌⡂⢂⣀⣠⡄⠄⢀⠠⠐⢈⠔⡀⡁⠰⢘⠄⡈⠢⠄⠄⠈⠄⠄⠄⢈⢸ ⠄⡇⡕⢅⢂⢺⣿⣿⡇⠄⠄⠂⠐⢀⢂⠔⠠⠡⡁⠄⠨⠄⠠⠄⠠⠄⠐⠈⠄⠈ ⠄⠪⡘⢔⠁⣸⣿⣿⠄⠁⠨⠄⠌⠄⠢⠠⠨⡂⠐⠈⠐⠄⠄⢀⢀⡂⢀⠠⡈⠸ ⣧⠑⡘⡔⢅⢹⣿⡏⠄⠄⠄⢀⠄⠄⠁⠄⠁⠄⠄⠁⠂⠄⠄⢀⠘⡇⠢⠨⡊⡂ ⣿⡄⠪⡸⡨⡢⢹⠁⠂⠄⠄⠄⠄⠄⠄⠄⢀⠠⠄⠄⡀⠄⠈⠄⠄⡀⠅⡑⠌⠄ ⣿⣇⠡⠂⢕⠨⠈⠠⠄⠄⠄⠂⠄⢀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⠸⠠⢂⠣⡁ ⣿⣿⣀⣁⣂⡈⠄⠠⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠈⠄⠄⢂⢑⠄⠕⡠ `);
  client.say(target, `/color blue`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠉⢀⢐⢌⠮⢺⢸⢔⢄⠈⢻⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⢂⢜⢜⢬⢲⢑⡑⡑⡈⢸⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡄⡂⠕⡍⢎⠢⡣⡃⠂⠄⣼⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⠛⠉⠉⠔⡐⡈⡈⢂⠡⠁⠄⢠⣼⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠿⠉⠄⠄⠄⠄⠄⠄⠄⠠⠐⠈⠄⠂⠈⠄⠐⠩⢙⠻⣿⣿⣿⣿⣿⣿ ⣿⣿⡿⠋⠄⠄⠄⠄⠄⠠⡀⠂⢁⢀⠄⠄⡀⠄⠄⠄⡀⠄⠄⠄⢁⠛⣿⣿⣿⣿ ⣿⡿⠁⠄⠄⠄⠄⠄⠂⠨⡈⡈⢄⠠⠁⠅⠢⠄⠕⠄⠄⠄⠄⠂⠄⠐⡘⢿⣿⣿ ⣿⠁⡀⡀⠄⢀⠄⠂⠄⠁⢀⢌⠠⠄⠢⢑⠁⢈⠌⡀⠄⠈⠄⠄⠄⠄⠐⡈⢻⣿ ⠄⡌⢆⠪⢐⠄⠆⠄⠌⠠⠠⠐⠨⠈⠌⠔⢈⠠⠁⠄⠄⢀⢈⢀⠄⠁⠄⠄⠅⣿ ⣄⠨⢊⠪⠢⡨⢂⢀⢂⠄⡂⠌⢌⠠⡑⠈⠠⠄⡀⠄⠄⠄⣿⣷⣄⠄⢂⢅⢅⠻ ⣿⣷⡄⠑⡑⢌⠢⡂⢅⠂⡂⠁⠄⠈⠄⠈⠈⠄⠄⢀⠄⠅⣿⣿⣿⠨⠢⡑⢔⠄ ⣿⣿⣿⣷⡤⠡⠨⠐⡁⠐⠄⠄⠄⠄⠄⠄⠄⠄⢈⠠⠠⡐⢹⣿⡿⡨⠊⢌⠔⣠ ⣿⣿⣿⣿⠁⠄⠁⠂⠄⠄⠄⠄⠄⠁⠄⠈⠄⠄⢂⠨⢨⠨⡢⢪⠢⡊⠎⢂⣼⣿ ⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠂⠄⠄⠄⠄⠠⠈⠄⠐⡐⠡⢊⠢⠃⠕⣱⣿⣿⣿ ⣿⣿⣿⣅⡀⠄⠐⠈⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⠐⠄⢲⣶⣿⣿⣿⣿⣿ `);
  client.say(target, `/color blueviolet`);
  client.say(target, `/me ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠃⠠⢀⠰⡰⡱⡱⡪⡢⡄⠄⠙⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠠⠄⡐⡕⡕⡔⡌⡎⢜⢘⠨⠄⢸⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣀⠄⡐⠨⡪⡊⡊⢌⢪⢢⠡⠄⢂⣾⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠟⠛⡁⡂⡁⠠⠈⠊⠌⠂⠁⠄⣠⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠈⠈⠨⠈⠈⠄⠐⠈⠉⠻⠿⣿⣿⣿⣿ ⣿⣿⠟⠄⠄⡀⠄⠄⠄⠄⢄⠄⠄⢀⠠⠄⠠⠄⠄⠄⠁⠄⠄⠄⠂⠄⠄⢿⣿⣿ ⣿⠇⠄⠄⠁⠄⠄⠄⠁⠈⡐⠁⡐⡈⠐⡀⢂⠕⠄⠔⡐⠄⠈⠄⠄⠄⠄⠄⢹⣿ ⡏⠄⠠⠠⠠⡠⠠⠄⠄⠁⠈⡐⡈⢀⠐⢀⠢⠂⠁⡂⡂⠈⠄⠄⠄⠁⠄⠠⠈⢿ ⡿⠄⢕⠩⡪⡘⢌⢀⢐⠈⡀⠐⡁⡐⡀⡂⢌⠐⠐⠔⠄⠠⠄⢀⠁⡀⠠⢀⠡⠈ ⠁⠨⢐⠡⠂⠅⠕⠑⠌⡪⢘⢘⠌⡊⡪⢊⠇⡏⡎⡖⡄⡄⠄⡂⢌⢆⢣⢱⠸⡀ ⡀⠁⠐⠄⠁⠨⠠⠡⡑⢔⡑⡢⡣⡪⡢⡂⢅⠕⡑⡱⡑⢕⢕⢔⢕⢸⠨⡢⢣⠁ ⣿⣿⣿⣿⠇⠨⠄⡑⡈⡂⠪⠨⠊⠌⠂⠑⠐⠈⠂⠂⡑⠑⠔⠑⠌⡂⠕⢌⠢⠁ ⣿⣿⣿⡏⠄⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⠄⠄⠄⠄⠄⠄⠁⡀⢰⣶⣶⣾⣿ ⣿⣿⣿⠁⠐⠄⠄⠁⠄⠐⠄⠄⠄⠄⠁⠄⠄⠄⠄⠁⠄⠄⠂⠄⠄⢸⣿⣿⣿⣿ ⣿⣿⡟⠄⠄⠄⠄⠄⡀⠄⠄⠄⠄⠁⠄⠄⠄⠄⠄⠄⠐⠄⠄⠄⠄⢸⣿⣿⣿⣿ `);
  client.say(target, `/color blue`);
}
 
function flashbang(target) {
  client.say(target, '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜');
}
 
function cube(channel, emote) {
  var cubed = "{emote} {emote} {emote} {emote} ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ {emote} {emote} {emote} {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} {emote} {emote} {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀⠀⠀⠀ ⠀ {emote} {emote} {emote} {emote} 󠀀";
    let letterString = cubed
      letterString = letterString.replace(/\{emote\}/g, emote);
      let lineArr = letterString.split("\n");
      for (const line of lineArr){
      client.say(channel, line);
    }
}
 
function pyramider(channel, emote) {
  var pyramid = "{emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} {emote} ⠀ ⠀ ⠀ ⠀⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀ {emote} {emote} {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀⠀ ⠀⠀ ⠀ ⠀ {emote} {emote} {emote} {emote} 󠀀"
    let letterString = pyramid
      letterString = letterString.replace(/\{emote\}/g, emote);
      let lineArr = letterString.split("\n");
      for (const line of lineArr){
      client.say(channel, line);
    }
}
 
function spreader(channel, emote) {
  var spread = "{emote}  ⠀ ⠀ ⠀ ⠀ ⠀ {emote}  ⠀ ⠀ ⠀ ⠀ ⠀ {emote}  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}  ⠀ ⠀ ⠀ ⠀ ⠀ {emote}  ⠀ ⠀ ⠀ ⠀ ⠀ {emote}  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}  ⠀ ⠀ ⠀ ⠀ ⠀ {emote}  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}";
    let letterString = spread
      letterString = letterString.replace(/\{emote\}/g, emote);
      let lineArr = letterString.split("\n");
      for (const line of lineArr){
      client.say(channel, line);
    }
}
 
function DNA(channel, emote) {
  var dnaPattern = "{emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  ⠀ ⠀ ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} ⠀ ⠀ {emote}\n  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} {emote}\n  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} ⠀ ⠀ {emote}\n  ⠀ ⠀ ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n ⠀ ⠀ ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} ⠀ ⠀ {emote}\n  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} {emote}\n ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} ⠀ ⠀ {emote}\n  ⠀ ⠀ ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  ⠀ ⠀ ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} ⠀ ⠀ {emote}\n  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} {emote}\n  ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote} ⠀ ⠀ {emote}\n  ⠀ ⠀ ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n ⠀ {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}\n  {emote} ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ ⠀ {emote}";
    let dnaString = dnaPattern.replace(/\{emote\}/g, emote);
    let dnaArr = dnaString.split("\n");
    for (const line of dnaArr){
      client.say(channel, line);
    }
}
 
function textPrinter(channel, input, emote) {
  var letters = {
      'A': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀  ",
      'B': "⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ",
      'C': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ",
      'D': " ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n     ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ",
      'E': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ",
      'F': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ",
      'G': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀  ",
      'H': "⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀  ",
      'I': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀  ",
      'J': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀  ",
      'K': "⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀  ",
      'L': "⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀  ",
      'M': "⠀ ⠀⠀ {emote} {emote} ⠀ ⠀⠀ {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ",
      'N': "⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀  ",
      'O': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀  ",
      'P': "⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀  ",
      'Q': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀  ",
      'R': "⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀  ",
      'S': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀  ",
      'T': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀  ",
      'U': "⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀  ",
      'V': "⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀  ",
      'W': "⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} ⠀ ⠀⠀ {emote} {emote}\n ⠀ ⠀⠀  ",
      'X': "⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀  ",
      'Y': "⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀  ",
      'Z': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀  ",
      '1': "⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} {emote} {emote}\n ⠀ ⠀⠀",
      '2': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀",
      '3': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ",
      '4': "⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n⠀ ⠀⠀",
      '5': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀",
      '6': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀",
      '7': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀",
      '8': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀",
      '9': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀",
      '0': "⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} ⠀ ⠀⠀ ⠀ ⠀⠀ ⠀ ⠀⠀ {emote}\n ⠀ ⠀⠀ {emote} {emote} {emote} {emote} {emote}\n ⠀ ⠀⠀  "
  }
  for (let i = 0; i < input.length; i++){
    if (!letters.hasOwnProperty(input[i].toUpperCase())){
      return;
    }
    let letterString = letters[input[i].toUpperCase()];
      letterString = letterString.replace(/\{emote\}/g, emote);
      let lineArr = letterString.split("\n");
      for (const line of lineArr){
      client.say(channel, line);
    }
  }
}
 
function onConnectedHandler (addr, port) {
  for (const channelName of opts.channels){
    //client.action(channelName, "ppHop running... ppHop");
  }
  console.log(`* Connected to ${addr}:${port}`);
}