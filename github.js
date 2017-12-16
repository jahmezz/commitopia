var github = require('octonode');
var fs = require('fs');

// Then we instantiate a client with or without a token (as show in a later section)

var ghme           = client.me();
var ghuser         = client.user('pksunkara');
var ghrepo         = client.repo('pksunkara/hub');
var ghorg          = client.org('flatiron');
var ghissue        = client.issue('pksunkara/hub', 37);
var ghmilestone    = client.milestone('pksunkara/hub', 37);
var ghlabel        = client.label('pksunkara/hub', 'todo');
var ghpr           = client.pr('pksunkara/hub', 37);
var ghrelease      = client.release('pksunkara/hub', 37);
var ghgist         = client.gist();
var ghteam         = client.team(37);
var ghproject      = client.project('pksunkara/hub', 37);
var ghnotification = client.notification(37);

var ghsearch = client.search();

var scopes = {
  'add_scopes': ['user', 'repo', 'gist'],
  'note': 'admin script'
};

var config = fs.readFileSync('DATA', 'utf8');
