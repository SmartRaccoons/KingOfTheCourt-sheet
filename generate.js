// Generated by CoffeeScript 2.5.1
(function() {
  var indexOf = [].indexOf;

  window.generate_combinations = {
    4: [[[1, 2], [3, 4]], [[1, 3], [2, 4]], [[1, 4], [2, 3]]],
    5: [[[1, 2], [3, 5]], [[1, 3], [4, 5]], [[2, 5], [3, 4]], [[1, 5], [2, 4]], [[1, 4], [2, 3]]],
    6: [[[1, 3], [4, 6]], [[1, 4], [2, 5]], [[2, 4], [3, 6]], [[1, 6], [3, 5]], [[4, 5], [2, 6]], [[1, 5], [2, 3]]],
    7: [[[1, 6], [2, 3]], [[5, 7], [2, 4]], [[4, 7], [1, 3]], [[6, 7], [1, 5]], [[2, 7], [3, 5]], [[4, 6], [1, 7]], [[2, 6], [3, 7]], [[3, 6], [4, 5]], [[1, 4], [2, 5]]],
    '7-all': [[[1, 3], [6, 7]], [[2, 4], [5, 7]], [[1, 6], [4, 7]], [[1, 2], [4, 5]], [[3, 4], [5, 6]], [[1, 5], [2, 6]], [[4, 6], [3, 7]], [[2, 7], [3, 6]], [[1, 7], [3, 5]], [[1, 4], [2, 3]], [[4, 7], [2, 5]]],
    8: [[[1, 3], [6, 8]], [[2, 4], [5, 7]], [[1, 6], [4, 7]], [[3, 8], [2, 5]], [[1, 2], [7, 8]], [[3, 4], [5, 6]], [[1, 5], [2, 6]], [[4, 8], [3, 7]], [[1, 8], [4, 5]], [[2, 7], [3, 6]], [[1, 7], [3, 5]], [[4, 6], [2, 8]], [[1, 4], [2, 3]], [[6, 7], [5, 8]]],
    9: [[['A', 'B'], ['C', 'D']], [[2, 5], [3, 4]], [['A', 'C'], ['B', 'D']], [[1, 5], [2, 4]], [['A', 'D'], ['B', 'C']], [[1, 2], [3, 5]], [['B', 2], ['A', 'C']], [[1, 3], [4, 5]], [['A', 5], ['B', 'D']], [[1, 4], [2, 3]], [['A', 4], [2, 3]], [['D', 1], ['C', 5]], [['B', 5], ['D', 3]], [['C', 2], [1, 4]], [['A', 3], [1, 2]], [['C', 4], ['B', 'D']], [['A', 'D'], [1, 5]], [['B', 'C'], [3, 4]]].map(function(teams) {
      return teams.map(function(team) {
        return team.map(function(player) {
          return {
            '1': 1,
            '2': 3,
            '3': 6,
            '4': 8,
            '5': 9,
            'A': 2,
            'B': 4,
            'C': 5,
            'D': 7
          }[player];
        });
      });
    }),
    // '9-all-Valentoros': [
    //   [ [ 1, 4 ], [ 2, 8 ] ]
    //   [ [ 4, 5 ], [ 6, 9 ] ]
    //   [ [ 7, 8 ], [ 2, 9 ] ]
    //   [ [ 5, 7 ], [ 1, 6 ] ]
    //   [ [ 2, 4 ], [ 3, 7 ] ]
    //   [ [ 1, 3 ], [ 8, 9 ] ]
    //   [ [ 2, 5 ], [ 3, 8 ] ]
    //   [ [ 4, 8 ], [ 6, 7 ] ]
    //   [ [ 1, 9 ], [ 2, 6 ] ]
    //   [ [ 3, 4 ], [ 1, 5 ] ]
    //   [ [ 7, 9 ], [ 3, 6 ] ]
    //   [ [ 1, 2 ], [ 4, 7 ] ]
    //   [ [ 4, 6 ], [ 2, 3 ] ]
    //   [ [ 5, 8 ], [ 3, 9 ] ]
    //   [ [ 1, 7 ], [ 5, 9 ] ]
    //   [ [ 3, 5 ], [ 2, 7 ] ]
    //   [ [ 6, 8 ], [ 4, 9 ] ]
    //   [ [ 1, 8 ], [ 5, 6 ] ]

    // ]
    '9-all-Tuoma': [[[1, 4], [2, 8]], [[4, 5], [6, 9]], [[7, 8], [2, 9]], [[5, 7], [1, 6]], [[2, 4], [3, 7]], [[1, 3], [8, 9]], [[2, 5], [3, 8]], [[4, 8], [6, 7]], [[1, 9], [2, 6]], [[3, 4], [1, 5]], [[7, 9], [3, 6]], [[1, 2], [4, 7]], [[4, 6], [2, 3]], [[5, 8], [3, 9]], [[1, 7], [5, 9]], [[3, 5], [2, 7]], [[6, 8], [4, 9]], [[1, 8], [5, 6]]],
    10: [[[1, 2], [3, 5]], [['A', 'B'], ['C', 'E']], [[1, 3], [4, 5]], [['A', 'C'], ['D', 'E']], [[1, 5], [2, 4]], [['A', 'E'], ['B', 'D']], [[2, 5], [3, 4]], [['B', 'D'], ['C', 'E']], [[1, 4], [2, 3]], [['A', 'D'], ['B', 'C']], [[1, 2], ['C', 'E']], [['A', 'B'], [3, 5]], [[1, 3], ['D', 'E']], [['A', 'C'], [4, 5]], [[1, 5], ['B', 'D']], [['A', 'E'], [2, 4]], [[2, 5], ['C', 'D']], [['B', 'E'], [3, 4]], [[1, 4], ['B', 'C']], [['A', 'D'], [2, 3]]].map(function(teams) {
      return teams.map(function(team) {
        return team.map(function(player) {
          return {
            '1': 1,
            '2': 3,
            '3': 6,
            '4': 8,
            '5': 10,
            'A': 2,
            'B': 4,
            'C': 5,
            'D': 7,
            'E': 9
          }[player];
        });
      });
    }),
    // '10-all': [
    //   [ [6,	10],		[ 4,	5	] ]
    //   [ [ 7,	9	],		[ 5,	8	] ]
    //   [ [1,	2],		[ 3,	4	] ]
    //   [ [1,	7],		[ 2,	6	] ]
    //   [ [3,	5],		[ 4,	6	] ]
    //   [ [2,	3],		[ 5,	6	] ]
    //   [ [3, 6],		[ 4,	10	] ]
    //   [ [7,	8],		[ 6,	9	] ]
    //   [ [6,	8],		[ 5,	10	] ]
    //   [ [1,	3],		[ 2,	4	] ]
    //   [ [1,	5],		[ 7,	10	] ]
    //   [ [2,	7],		[ 8,	9	] ]
    //   [ [1,	8],		[ 3,	7	] ]
    //   [ [8,	10],		[ 4,	9	] ]
    //   [ [3,	9],		 [4,	7]]
    //   [ [1,	6],		[ 2,	5	] ]
    //   [ [1,	4],		[ 5,	7	] ]
    //   [ [4,	8],		[ 2,	10	] ]
    //   [ [3,	10],		[5,	9] ]
    //   [ [9,	10],		[ 6,	7	] ]
    //   [ [2,	9],		[ 3,	8	] ]
    //   [ [1,	9],		[ 2,	8	] ]
    //   # [ [1,	10],		[ 4,	7	] ]
    // ]
    11: [[['A', 'B'], ['C', 'E']], [[1, 3], [2, 5]], [['A', 'C'], ['D', 'E']], [[1, 4], [2, 6]], [['A', 'D'], ['B', 'C']], [[1, 6], [3, 5]], [['A', 'E'], ['B', 'D']], [[4, 6], [2, 5]], [['B', 'E'], ['C', 'D']], [[1, 5], [2, 4]], [['A', 'B'], [1, 2]], [[3, 6], [4, 5]], [['D', 'E'], [5, 6]], [['A', 'C'], [1, 3]], [['A', 'E'], [2, 4]], [['B', 'C'], [3, 5]], [['C', 'D'], [3, 4]], [['B', 'E'], [1, 6]], [['A', 'D'], [1, 5]], [[3, 4], [2, 6]], [['B', 'D'], [2, 3]], [['C', 'E'], [4, 6]]].map(function(teams) {
      return teams.map(function(team) {
        return team.map(function(player) {
          return {
            '1': 1,
            '2': 4,
            '3': 6,
            '4': 8,
            '5': 10,
            '6': 11,
            'A': 2,
            'B': 3,
            'C': 5,
            'D': 7,
            'E': 9
          }[player];
        });
      });
    }),
    '11-all': [[[10, 11], [4, 5]], [[9, 11], [5, 8]], [[1, 2], [3, 4]], [[1, 7], [2, 6]], [[3, 5], [4, 6]], [[2, 3], [5, 6]], [[7, 11], [4, 10]], [[8, 11], [3, 6]], [[7, 8], [6, 9]], [[5, 9], [3, 11]], [[6, 8], [5, 10]], [[6, 11], [7, 9]], [[1, 3], [2, 4]], [[1, 5], [7, 10]], [[2, 7], [8, 9]], [[1, 8], [3, 7]], [[8, 10], [4, 9]], [[3, 9], [1, 11]], [[1, 6], [2, 5]], [[1, 4], [5, 7]], [[4, 8], [2, 10]], [[6, 10], [5, 11]], [[4, 7], [2, 11]], [[3, 10], [4, 11]], [[9, 10], [6, 7]], [[2, 9], [3, 8]], [[1, 9], [2, 8]], [[1, 10], [4, 7]]]
  };

  (() => {
    var combinations;
    combinations = Object.keys(window.generate_combinations);
    return combinations.forEach((combination) => {
      return window.generate_combinations[combination].map(function(teams) {
        var members;
        members = [];
        return teams.forEach(function(team) {
          return team.forEach(function(member) {
            if (indexOf.call(members, member) >= 0) {
              alert('duplicate');
              console.info('duplicate', combination, teams);
            }
            return members.push(member);
          });
        });
      });
    });
  })();

  (() => {
    var combinations, sum;
    sum = function(a) {
      return a.reduce((function(acc, b) {
        return acc + (Array.isArray(b) ? sum(b) : b);
      }), 0);
    };
    combinations = Object.keys(window.generate_combinations);
    return combinations.forEach((combination) => {
      var comrades, opponents, winrate, winrate_average;
      console.info('Combination: ', combination);
      comrades = {};
      opponents = {};
      winrate = {};
      window.generate_combinations[combination].map(function(teams) {
        return [teams, teams.slice(0).reverse()].forEach(function(teams) {
          var j, k, len, len1, opponent, player, player2, ref, ref1, results;
          ref = teams[0];
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            player = ref[j];
            comrades[player] = comrades[player] || [];
            ref1 = teams[0];
            for (k = 0, len1 = ref1.length; k < len1; k++) {
              player2 = ref1[k];
              if (player2 !== player) {
                comrades[player].push(player2);
              }
            }
            opponents[player] = opponents[player] || {};
            winrate[player] = winrate[player] || [];
            winrate[player].push(Math.round(100 * sum(teams[1]) / sum(teams)));
            results.push((function() {
              var l, len2, ref2, results1;
              ref2 = teams[1];
              results1 = [];
              for (l = 0, len2 = ref2.length; l < len2; l++) {
                opponent = ref2[l];
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
      console.info('Comrades: ', comrades);
      console.info('Opponents: ', opponents);
      console.info('Winrate: ', winrate);
      return console.info('WinrateAverage: ', winrate_average);
    });
  })();

  window.generate = function(combination, language = 'en') {
    var _l, _l_strings, cell_pro, columns, game, i, j, k, l, len, len1, len2, max, n, o, player, players, ref, ref1, ref2, ref3, ref4, row, table, team;
    _l_strings = {
      en: {
        Name: 'Name',
        Left: 'Left',
        Played: 'Played',
        Wins: 'Wins',
        Points: 'Points',
        Top: 'Top',
        Nr: 'Nr',
        Game: 'Game',
        Result: 'Result'
      },
      lg: {
        Name: 'Vuords',
        Left: 'Palyka',
        Played: 'Nūspieļuots',
        Wins: 'Uzvarys',
        Points: 'Punkti',
        Top: 'Tops',
        Nr: 'Nr',
        Game: 'Spēle',
        Result: 'Rezultats'
      }
    };
    _l = function(str) {
      return _l_strings[language][str] || str;
    };
    max = function(a) {
      return a.reduce((function(acc, b) {
        var m;
        m = Array.isArray(b) ? max(b) : b;
        if (m > acc) {
          return m;
        } else {
          return acc;
        }
      }), 0);
    };
    players = max(window.generate_combinations[combination]);
    columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    table = [[_l('Name'), _l('Nr')]];
    for (i = j = 1, ref = players; (1 <= ref ? j <= ref : j >= ref); i = 1 <= ref ? ++j : --j) {
      table[0][i + 1] = i;
    }
    table[0][players + 2] = _l('Left');
    table[0][players + 3] = _l('Played');
    table[0][players + 4] = _l('Wins');
    table[0][players + 5] = _l('Points');
    table[0][players + 6] = _l('Top');
    table[0][players + 7] = `${_l('Wins')}`;
    table[0][players + 8] = `${_l('Points')}`;
    table[0][players + 9] = `${_l('Left')}`;
    for (i = k = 1, ref1 = players; (1 <= ref1 ? k <= ref1 : k >= ref1); i = 1 <= ref1 ? ++k : --k) {
      table[i] = ['', i];
      table[i][players + 4] = `=COUNTIF(C${i + 1}:${columns[players + 1]}${i + 1}, ">0")`;
      table[i][players + 5] = `=sum(C${i + 1}:${columns[players + 1]}${i + 1})`;
    }
    table[1][players + 6] = `=SORT(A2:A${players + 1}, ${columns[players + 4]}2:${columns[players + 4]}${players + 1}, FALSE, ${columns[players + 5]}2:${columns[players + 5]}${players + 1}, FALSE)`;
    table[1][players + 7] = `=SORT(${columns[players + 4]}2:${columns[players + 4]}${players + 1}, ${columns[players + 4]}2:${columns[players + 4]}${players + 1}, FALSE, ${columns[players + 5]}2:${columns[players + 5]}${players + 1}, FALSE)`;
    table[1][players + 8] = `=SORT(${columns[players + 5]}2:${columns[players + 5]}${players + 1}, ${columns[players + 4]}2:${columns[players + 4]}${players + 1}, FALSE, ${columns[players + 5]}2:${columns[players + 5]}${players + 1}, FALSE)`;
    table[1][players + 9] = `=SORT(${columns[players + 3]}2:${columns[players + 3]}${players + 1}, ${columns[players + 4]}2:${columns[players + 4]}${players + 1}, FALSE, ${columns[players + 5]}2:${columns[players + 5]}${players + 1}, FALSE)`;
    row = players + 1;
    table[row] = [_l('Nr'), _l('Game'), _l('Result')];
    ref2 = window.generate_combinations[combination];
    for (i = l = 0, len = ref2.length; l < len; i = ++l) {
      game = ref2[i];
      row++;
      table[row] = [i + 1, `${game[0].join('&')} vs ${game[1].join('&')}`];
      table[row][4] = `=CONCATENATE(A${game[0][0] + 1}, " & ", A${game[0][1] + 1}, " vs ", A${game[1][0] + 1}, " & ", A${game[1][1] + 1})`;
      cell_pro = function(value, sign = '+') {
        var cell, cell_prev;
        cell = `${sign}C${row + 1}`;
        if (!value) {
          return `=0${cell}`;
        }
        cell_prev = value.substr(2);
        return `=0+IF(${cell}>${cell_prev}, ${cell}, ${cell_prev})`;
      };
      table[game[0][0]][game[0][1] + 1] = table[game[0][1]][game[0][0] + 1] = cell_pro(table[game[0][0]][game[0][1] + 1]);
      table[game[1][0]][game[1][1] + 1] = table[game[1][1]][game[1][0] + 1] = cell_pro(table[game[1][0]][game[1][1] + 1], '-');
      ref3 = [0, 1];
      for (n = 0, len1 = ref3.length; n < len1; n++) {
        team = ref3[n];
        ref4 = [0, 1];
        for (o = 0, len2 = ref4.length; o < len2; o++) {
          player = ref4[o];
          table[game[team][player]][players + 2] = `=IF(C${row + 1}<>0, 0, 1)${table[game[team][player]][players + 2] ? `+${table[game[team][player]][players + 2].substr(1)}` : ''}`;
          table[game[team][player]][players + 3] = `=IF(C${row + 1}<>0, 1, 0)${table[game[team][player]][players + 3] ? `+${table[game[team][player]][players + 3].substr(1)}` : ''}`;
        }
      }
    }
    table[row + 1] = [
      (() => {
        return {
          '7-all': '4+7 pair have additional game together (the last one) - in the table we take only one game in to count (better one)',
          '11-all': '4+7 pair have additional game together (the last one) - in the table we take only one game in to count (better one)'
        }[combination] || '';
      })()
    ];
    return table.map(function(row) {
      return row.join("\t");
    }).join("\n");
  };

}).call(this);
