//imports and constants
var express = require("express");
var fs = require("fs");
var url = require("url");
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var upload = multer();
var port = process.env.PORT || 3000;
const badWords = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];

//setup/configure express server 
var app = express();
app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
app.use(upload.array());
app.use(cors());
app.get("/", function (req, res) {
    res.send(JSON.stringify({
        Hello: "World"
    }));
});

//custom functions
function fixProfanity(string) {
    badWords.forEach((str) => {
        console.log(str);
        var pattern = new RegExp(str, 'gi');
        string = string.replace(pattern, new Array(str.length + 1).join('*'));
    })
    return string;
}

//endpoints
//writes a review from form data to a json text, filters out bad words
//returns json of all form entries
app.post("/writeReview", function (req, res) {
    filePath = __dirname + '/public/data.json';
    var first_name = fixProfanity(req.body.first_name);
    newEntry = {
        "first_name": first_name,
    };

    // fs.truncate('/public/data.txt', 0, function(){console.log('done')})
    // fs.writeFile('/public/data.txt', '', function(){console.log('done')})

    const splut = first_name.split(' ');
    var conjoined = splut.join();
    var maybe = first_name.replace('and ','')
    var s;
    for(s = 1; s < splut.length; s+= 2){
        if(splut[s] != 'and' ||
        splut[s] != 'AND' ||
        splut[s] != 'or' ||
        splut[s] != 'OR' ||
        splut[s] != '&' ||
        splut[s] != '&&' ||
        splut[s] != '|' ||
        splut[s] != 'xor' ||
        splut[s] != 'XOR' ||
        splut[s] != '||' ){
            console.warn('invalid input');
        }


    }

    for(s = 0; s < splut.length; s++){
        maybe = maybe.replace('AND ','')
        maybe = maybe.replace('& ','')
        maybe = maybe.replace('&& ','')
        maybe = maybe.replace('or ','')
        maybe = maybe.replace('OR ','')
        maybe = maybe.replace('| ','')
        maybe = maybe.replace('|| ','')
        maybe = maybe.replace('xor ','')
        maybe = maybe.replace('XOR ','')
    }
    maybe = maybe.split(' ');
    console.log(splut);
    console.log(maybe);
    var answer = tTable(maybe.length, 0, maybe,0,conjoined)
    // fs.writeFile(filepath,'{ "full" : "' + first_name+'"}')
    // var answer = tTable(splut.length,0,splut);
    console.log(answer);
    console.log(maybe.length);
    fs.writeFile(filePath,splut.join(), (error) => {
        if(error){
            console.log('error', error);
        }
        else{
            console.log("GOOD!");
            console.log(splut.join());
        }
    })
    // fs.truncate('filePath', 0, function(){console.log('done')})
    // fs.readFile(filePath, function (err, data) {
    //     var json = JSON.parse(data);
    //     json.entries.push(newEntry);
    //     fs.writeFile(filePath, JSON.stringify(json), (error) => {
    //         if (error) {
    //             console.log('error', error);
    //             next(error);
    //         }
    //         console.log('file saved');
    //         res.sendFile(filePath);
    //     });
    // });
});
function tTable(N, index, tVals,initial,start){
    var i;
    var ret = "";
    console.log("starts: " + start);
    if(index == N){
        for(i = 0; i < N; i++){
            ret = ret + tVals[i] + " ";
        }
        console.log(ret);

        // fs.readFile(__dirname + '/public/data.txt', 'utf8', function(err,data){
        //     console.log("stuff");
        //     console.log(data);
        //     console.log(ret);
        //     var stuff = data + ret;
        //     console.log("stuff: "+ stuff);
            fs.appendFile(__dirname + '/public/data.txt',ret + "|" +start+"| ", (error) => {
                if (error) {
                    console.log('error', error);
                    next(error);
                }
            });
        // })
        return ret;
    }else{
        for(i =0; i < 2; i++){
            tVals[index] = i;
            tTable(N,index + 1, tVals,index + 1, start);
        }
    }
}
//returns all form entries
app.post("/readReviews", function (req, res) {
    // filePath = __dirname + '/public/data.txt';
    // var filePath2 = __dirname + '/public/data.json';
    console.log("stuff going on?");
    fs.readFile(__dirname + '/public/data.txt', function(err,data){
        var newEntrie = '{ "entries": "' +data+'"}'; 
        console.log("newEntrie: " + newEntrie)
        fs.writeFile(__dirname + '/public/data.json', newEntrie,(error) =>{
            if(error){
                console.log('error: ' , error);
                res.sendFile(__dirname + '/public/data.json');
            }else{
                res.sendFile(__dirname + '/public/data.json');
            }
        })
    });
    res.sendFile(__dirname + '/public/data.json');
});

//clears all reviews
app.post("/clearReviews", function (req, res) {
    filePath = __dirname + '/public/data.json';
    console.log('file read');
    var json = {
        "entries": []
    };
    fs.writeFile(filePath, JSON.stringify(json), (error) => {
        if (error) {
            console.log('error clearing files');
            next(error);
        }else{

        }
        console.log('cleared entries');
        res.sendFile(filePath);
    });
});
app.post("/clearText", function (req, res) {
    filePath = __dirname + '/public/data.txt';
    console.log('file read');
    fs.truncate(filePath, 0, function(){console.log('CLEARED TEXT')})
});

//starts up server on port
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});