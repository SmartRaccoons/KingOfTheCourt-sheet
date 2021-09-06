_ = require('lodash')


players = 9
teams = []
[1...players].forEach (i)->
  [(i + 1)..players].forEach (j)-> teams.push [i, j]

shuffle = (array) ->
  for i in [0...array.length]
    j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j]] = [array[j], array[i]]
  array
double = (games)->
  _double = false
  games.map (teams)->
    members = []
    teams.forEach (team)->
      team.forEach (member)->
        if member in members
          _double = true
        members.push member
  return _double
  # for teams in games
  #   members = []
  #   for team in teams
  #     for member in team
  #       if member in members
  #         return true
  #       members.push member
  # return false

sum = (a)->
  a.reduce ((acc, b)-> acc + if Array.isArray(b) then sum(b) else b ), 0
validate = (games, silent = false)->
  comrades = {}
  opponents = {}
  winrate = {}
  games.map (teams)->
    [ teams, teams.slice(0).reverse() ].forEach (teams)->
      for player in teams[0]
        comrades[player] = comrades[player] or []
        for player2 in teams[0]
          if player2 isnt player
            comrades[player].push player2
        opponents[player] = opponents[player] or {}
        winrate[player] = winrate[player] or []
        winrate[player].push Math.round( 100 * sum( teams[1] ) / sum(teams) )
        for opponent in teams[1]
          opponents[player][opponent] = ( opponents[player][opponent] or 0 ) + 1
  comrades = Object.keys(comrades).reduce (acc, player)->
    Object.assign acc, {
      [player]: comrades[player].sort (a, b)-> a - b
    }
  , {}
  winrate_average = Object.keys(winrate).reduce (acc, player)->
    Object.assign acc, {
      [player]: Math.round( sum(winrate[player]) / winrate[player].length )
    }
  , {}
  if !silent
    console.info 'Comrades: ', comrades
    console.info 'Opponents: ', opponents
    console.info 'Winrate: ', winrate
    console.info 'WinrateAverage: ', winrate_average
  for id, win of winrate_average
    if parseInt(id) > 1 and winrate_average[parseInt(id) - 1] < winrate_average[parseInt(id) ]
      return false
  for player, opponents_all of opponents
    for z in [1..9]
      if parseInt(player) isnt z and !opponents_all[z]
        return false
    for opponent, played of opponents_all
      # if played isnt 2
      if played > 3
        return false
  return true




for i in [0..500000000]
  t = shuffle( _.cloneDeep teams )
  # console.info 't', t
  games = do =>
    games = []
    z = 0
    while t[z]
      games.push [t[z], t[z + 1] ]
      z = z + 2
    return games
  # console.info 'games', games
  if !double(_.cloneDeep(games)) and validate(games, true)
    console.info games, validate(games)
    return
  # console.info games, double(games)
