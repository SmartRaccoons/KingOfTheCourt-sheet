// Generated by CoffeeScript 2.5.1
(function() {
  var TOTAL, _, double, exist, shuffle, sum, teams, validate,
    indexOf = [].indexOf;

  _ = require('lodash');

  TOTAL = 9;

  shuffle = function(array) {
    var i, j, k, ref;
    for (i = k = 0, ref = array.length; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
      j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  double = function(games) {
    var k, l, len, len1, len2, m, member, members, team, teams;
    for (k = 0, len = games.length; k < len; k++) {
      teams = games[k];
      members = [];
      for (l = 0, len1 = teams.length; l < len1; l++) {
        team = teams[l];
        for (m = 0, len2 = team.length; m < len2; m++) {
          member = team[m];
          if (indexOf.call(members, member) >= 0) {
            return true;
          }
          members.push(member);
        }
      }
    }
    return false;
  };

  exist = function(games, search) {
    var k, l, len, len1, team, teams;
    for (k = 0, len = games.length; k < len; k++) {
      teams = games[k];
      for (l = 0, len1 = teams.length; l < len1; l++) {
        team = teams[l];
        if ((team[0] === search[0] && team[1] === search[1]) || (team[1] === search[0] && team[0] === search[1])) {
          return true;
        }
      }
    }
    return false;
  };

  sum = function(a) {
    return a.reduce((function(acc, b) {
      return acc + (Array.isArray(b) ? sum(b) : b);
    }), 0);
  };

  validate = function(games, silent = false) {
    var comrades, id, k, opponent, opponents, opponents_all, played, player, ref, win, winrate, winrate_average, z;
    comrades = {};
    opponents = {};
    winrate = {};
    games.map(function(teams) {
      return [teams, teams.slice(0).reverse()].forEach(function(teams) {
        var k, l, len, len1, opponent, player, player2, ref, ref1, results;
        ref = teams[0];
        results = [];
        for (k = 0, len = ref.length; k < len; k++) {
          player = ref[k];
          comrades[player] = comrades[player] || [];
          ref1 = teams[0];
          for (l = 0, len1 = ref1.length; l < len1; l++) {
            player2 = ref1[l];
            if (player2 !== player) {
              comrades[player].push(player2);
            }
          }
          opponents[player] = opponents[player] || {};
          winrate[player] = winrate[player] || [];
          winrate[player].push(Math.round(100 * sum(teams[1]) / sum(teams)));
          results.push((function() {
            var len2, m, ref2, results1;
            ref2 = teams[1];
            results1 = [];
            for (m = 0, len2 = ref2.length; m < len2; m++) {
              opponent = ref2[m];
              results1.push(opponents[player][opponent] = (opponents[player][opponent] || 0) + 1);
            }
            return results1;
          })());
        }
        return results;
      });
    });
    comrades = Object.keys(comrades).reduce(function(acc, player) {
      return Object.assign(acc, {
        [player]: comrades[player].sort(function(a, b) {
          return a - b;
        })
      });
    }, {});
    winrate_average = Object.keys(winrate).reduce(function(acc, player) {
      return Object.assign(acc, {
        [player]: Math.round(sum(winrate[player]) / winrate[player].length)
      });
    }, {});
    if (!silent) {
      console.info('Comrades: ', comrades);
      console.info('Opponents: ', opponents);
      console.info('Winrate: ', winrate);
      console.info('WinrateAverage: ', winrate_average);
    }
    for (id in winrate_average) {
      win = winrate_average[id];
      if (parseInt(id) > 1 && winrate_average[parseInt(id) - 1] < winrate_average[parseInt(id)]) {
        return false;
      }
    }
    for (player in opponents) {
      opponents_all = opponents[player];
      for (z = k = 1, ref = TOTAL; (1 <= ref ? k <= ref : k >= ref); z = 1 <= ref ? ++k : --k) {
        if (parseInt(player) !== z && !opponents_all[z]) {
          return false;
        }
      }
      for (opponent in opponents_all) {
        played = opponents_all[opponent];
        // if played isnt 2
        if (played > 2) {
          return false;
        }
      }
    }
    return true;
  };

  teams = [];

  (function() {
    var results = [];
    for (var k = 1; 1 <= TOTAL ? k < TOTAL : k > TOTAL; 1 <= TOTAL ? k++ : k--){ results.push(k); }
    return results;
  }).apply(this).forEach(function(i) {
    var ref;
    return (function() {
      var results = [];
      for (var k = ref = i + 1; ref <= TOTAL ? k <= TOTAL : k >= TOTAL; ref <= TOTAL ? k++ : k--){ results.push(k); }
      return results;
    }).apply(this).forEach(function(j) {
      return teams.push([i, j]);
    });
  });

  console.info(teams);

  (() => {    // do =>
    //   permutator = (inputArr)=>
    //     result = []
    //     permute = (arr, m = []) =>
    //       if (arr.length is 0)
    //         result.push(m)
    //         return
    //       for i in [0...arr.length]
    //         curr = arr.slice()
    //         next = curr.splice(i, 1)
    //         permute(curr.slice(), m.concat(next))
    //     permute(inputArr)
    //     result
    //   console.info permutator [1, 2, 3]
    var permute, result;
    return;
    result = [];
    permute = (teams, games = [], stats = {}) => {
      var _z, game, i, j, k, ref, results, teams_new, z;
      if (teams.length < 1) {
        if (validate(games, true)) {
          console.info('got', games);
        }
        return;
      }
// result.push games
      results = [];
      for (i = k = 0, ref = teams.length; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
        results.push((function() {
          var l, len, m, ref1, ref2, results1;
          results1 = [];
          for (j = l = ref1 = i, ref2 = teams.length; (ref1 <= ref2 ? l < ref2 : l > ref2); j = ref1 <= ref2 ? ++l : --l) {
            if (i === j) { // or exist(games, teams[i]) or exist(games, teams[j])
              continue;
            }
            game = [teams[i], teams[j]];
            teams_new = [];
            for (z = m = 0, len = teams.length; m < len; z = ++m) {
              _z = teams[z];
              if (z !== i && z !== j) {
                teams_new.push(_z);
              }
            }
            if (!double(games.concat([game]))) {
              results1.push(permute(teams_new, games.concat([_.cloneDeep([teams[i], teams[j]])])));
            } else {
              results1.push(void 0);
            }
          }
          return results1;
        })());
      }
      return results;
    };
    return permute(teams);
  })();

  (() => {    // console.info result[0], result[1], result[2]
    // console.info result.forEach (r)-> console.info r
    // console.info result.length
    var find_opponent, permute, result;
    return;
    result = [];
    find_opponent = function(teams, team) {};
    return permute = (teams, games = []) => {
      var game, i, j, k, ref, results;
      if (teams.length < 1) {
        return result.push(games);
      }
      results = [];
      for (i = k = 0, ref = teams.length; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
        results.push((function() {
          var l, ref1, results1;
          results1 = [];
          for (j = l = 0, ref1 = teams.length; (0 <= ref1 ? l < ref1 : l > ref1); j = 0 <= ref1 ? ++l : --l) {
            if (i === j || exist(games, teams[i]) || exist(games, teams[j])) {
              continue;
            }
            game = [teams[i], teams[j]];
            if (!double(games.concat([game]))) {
              results1.push(games.push(_.cloneDeep([teams[i], teams[j]])));
            } else {
              results1.push(void 0);
            }
          }
          return results1;
        })());
      }
      return results;
    };
  })();

  (() => {    
    // console.info games.length, games
    var games, i, k, t;
// return
    for (i = k = 0; k < 5000000000; i = ++k) {
      t = shuffle(_.cloneDeep(teams));
      // console.info 't', t
      games = (() => {
        var z;
        games = [];
        z = 0;
        while (t[z]) {
          games.push([t[z], t[z + 1]]);
          z = z + 2;
        }
        return games;
      })();
      if (!double(_.cloneDeep(games)) && validate(games, true)) {
        console.info(games, validate(games));
        return;
      }
    }
  })();

  // console.info games, double(games)

}).call(this);
