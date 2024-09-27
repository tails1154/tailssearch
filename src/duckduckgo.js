var http = require('http');
var url = require('url');
var dbterms = ["example", "webtv revival", "google", "google search"];
var dburls = ["https://example.com", "https://webtv.zone", "https://www.google.com", "https://www.google.com"];
http.createServer(function (req, res) {
    console.log("Got request");
    var qstuff = url.parse(req.url, true);
    var q = url.parse(req.url, true).query;
    if (qstuff.pathname == "/") {
        if (q.q) {
            res.write("<!DOCTYPE html>\n<html>\n<h1>Tails1154 Search Engine</h1>\n");
            var count = 0;
            for (const val of dbterms) {
                    count++;
                    if (val.includes(q.q)) {
                        res.write('<a href="' + dburls[dbterms.indexOf(val)] + '">' + val + '</a>\n<p> </p>\n');
                }
            }
	    res.write('<form action="/">\n<input type=submit value="Back">\n</form>\n</html>');
            res.end();
        }
        else {
        res.write('<!DOCTYPE html>\n<html>\n<h1>Tails1154 Search Engine</h1>\n<form action="/">\n<label for="q">Search Query:</label>\n<input type="text" id="q" name="q" value="example">\n<input type="submit" value="Search!">\n</form>\n</html>');
        res.end();
            }
        }
    if (qstuff.pathname == "/search") {
        if (q.searchquery) {
            res.write("<!DOCTYPE html>\n<html>\n<h1>Tails1154 Search Engine</h1>\n");
            var count = 0;
            for (const val of dbterms) {
                    count++;
                    if (val.includes(q.searchquery)) {
                        res.write('<a href="' + dburls[dbterms.indexOf(val)] + '">' + val + '</a>\n<p> </p>\n');
                }
            }
	    res.write('<form action="/">\n<input type=submit value="Back">\n</form>\n</html>');
            res.end();
        }
        }
}).listen(80);
console.log("Waiting on port 80");
