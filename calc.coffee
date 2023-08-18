_ = require('lodash')

TOTAL = 9

shuffle = (array) ->
  for i in [0...array.length]
    j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j]] = [array[j], array[i]]
  array
double = (games)->
  for teams in games
    members = []
    for team in teams
      for member in team
        if member in members
          return true
        members.push member
  return false
exist = (games, search)->
  for teams in games
    for team in teams
      if ( team[0] is search[0] and team[1] is search[1] ) or ( team[1] is search[0] and team[0] is search[1] )
        return true
  return false

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
    for z in [1..TOTAL]
      if parseInt(player) isnt z and !opponents_all[z]
        return false
    for opponent, played of opponents_all
      # if played isnt 2
      if played > 2
        return false
  return true


teams = []
[1...TOTAL].forEach (i)->
  [(i + 1)..TOTAL].forEach (j)-> teams.push [i, j]
console.info teams


# do =>
#   permutator = (inputArr)=>
#     result = []
#     permute = (arr, m = []) =>
#       if (arr.length is 0)
#         result.push(m)
#         return
#       for i in [0...arr.length]
#         curr = arr.slice()
#         next = curr.splice(i, 1)
#         permute(curr.slice(), m.concat(next))
#     permute(inputArr)
#     result
#   console.info permutator [1, 2, 3]

do =>
  return
  result = []
  permute = (teams, games = [], stats = {})=>
    if teams.length < 1
      if validate(games, true)
        console.info 'got', games
      # result.push games
      return
    for i in [0...teams.length]
      for j in [i...teams.length]
        if i is j# or exist(games, teams[i]) or exist(games, teams[j])
          continue
        game = [ teams[i], teams[j] ]
        teams_new = []
        for _z, z in teams
          if z isnt i and z isnt j
            teams_new.push _z
        if !double(games.concat [game])
          permute teams_new, games.concat [ _.cloneDeep( [ teams[i], teams[j] ] ) ]
  permute teams
  # console.info result[0], result[1], result[2]
  # console.info result.forEach (r)-> console.info r
  # console.info result.length


do =>
  return
  result = []
  find_opponent = (teams, team)->

  permute = (teams, games = [])=>
    if teams.length < 1
      return result.push games
    for i in [0...teams.length]
      for j in [0...teams.length]
        if i is j or exist(games, teams[i]) or exist(games, teams[j])
          continue
        game = [ teams[i], teams[j] ]
        if !double(games.concat [game])
          games.push _.cloneDeep( [ teams[i], teams[j] ] )
  
  # console.info games.length, games

do =>
  # return
  for i in [0...5000000000]
    t = shuffle( _.cloneDeep teams )
    # console.info 't', t
    games = do =>
      games = []
      z = 0
      while t[z]
        games.push [t[z], t[z + 1] ]
        z = z + 2
      return games
    # console.info 'games', games, double(games)
    if !double(_.cloneDeep(games)) and validate(games, true)
      console.info games, validate(games)
      return
    # console.info games, double(games)
