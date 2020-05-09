window.generate_combinations =
  4: [
      [[1, 2], [3, 4]]
      [[1, 3], [2, 4]]
      [[1, 4], [2, 3]]
    ]
  5: [
    [[1, 2], [3, 5]]
    [[1, 3], [4, 5]]
    [[2, 5], [3, 4]]
    [[1, 5], [2, 4]]
    [[1, 4], [2, 3]]
  ]
  6: [
    [[1, 3], [4, 6]]
    [[1, 4], [2, 5]]
    [[2, 4], [3, 6]]
    [[1, 6], [3, 5]]
    [[4, 5], [2, 6]]
    [[1, 5], [2, 3]]
  ]
  7: [
    [[1, 6], [2, 3]]
    [[5, 7], [2, 4]]
    [[4, 7], [1, 3]]
    [[6, 7], [1, 5]]
    [[2, 7], [3, 5]]
    [[4, 6], [1, 7]]
    [[2, 6], [3, 7]]
    [[3, 6], [4, 5]]
    [[1, 4], [2, 5]]
  ]
  8: [
    [[1, 3], [6, 8]]
    [[2, 4], [5, 7]]
    [[1, 6], [4, 7]]
    [[3, 8], [2, 5]]
    [[1, 2], [7, 8]]
    [[3, 4], [5, 6]]
    [[1, 5], [2, 6]]
    [[4, 8], [3, 7]]
    [[1, 8], [4, 5]]
    [[2, 7], [3, 6]]
    [[1, 7], [3, 5]]
    [[4, 6], [2, 8]]
    [[1, 4], [2, 3]]
    [[6, 7], [5, 8]]
  ]
  9: [
    [['A', 'B'], ['C', 'D']]
    [[2, 5], [3, 4]]
    [['A', 'C'], ['B', 'D']]
    [[1, 5], [2, 4]]
    [['A', 'D'], ['B', 'C']]
    [[1, 2], [3, 5]]
    [['B', 2], ['A', 'C']]
    [[1, 3], [4, 5]]
    [['A', 5], ['B', 'D']]
    [[1, 4], [2, 3]]
    [['A', 4], [2, 3]]
    [['D', 1], ['C', 5]]
    [['B', 5], ['D', 3]]
    [['C', 2], [1, 4]]
    [['A', 3], [1, 2]]
    [['C', 4], ['B', 'D']]
    [['A', 'D'], [1, 5]]
    [['B', 'C'], [3, 4]]
  ].map (teams)->
    teams.map (team)->
      team.map (player)->
        {
          '1': 1
          '2': 3
          '3': 6
          '4': 8
          '5': 9
          'A': 2
          'B': 4
          'C': 5
          'D': 7
         }[player]

# do =>
#   combinations = Object.keys(window.generate_combinations)
#   combinations.forEach (combination)=>
#     window.generate_combinations[combination].map (teams)->
#       members = []
#       teams.forEach (team)->
#         team.forEach (member)->
#           if member in members
#             alert 'duplicate'
#             console.info combination, teams
#           members.push member

window.generate = (players)->
  columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  table = [['name', 'nr']]
  for i in [1..players]
    table[0][i + 1] = i
  table[0][players + 2] = 'Games'
  table[0][players + 3] = 'Wins'
  table[0][players + 4] = 'Points'
  table[0][players + 5] = 'Order'
  for i in [1..players]
    table[i] = ['', i]
    # table[i][i + 1] = ''
    table[i][players + 2] = """=countif(C#{i + 1}:#{columns[players + 1]}#{i + 1}, "<>0")"""
    table[i][players + 3] = """=countif(C#{i + 1}:#{columns[players + 1]}#{i + 1}, ">0")"""
    table[i][players + 4] = """=sum(C#{i + 1}:#{columns[players + 1]}#{i + 1})"""
    # table[i][players + 3] = """=sumif(C#{i + 1}:#{columns[players + 1]}#{i + 1}, ">0", $C$#{players + 2}:$#{columns[players + 1]}$#{players+2}) + sum(C#{i + 1}:#{columns[players + 1]}#{i + 1})"""
  table[1][players + 5] = """=SORT(B2:B#{players + 1}, #{columns[players + 2]}2:#{columns[players + 2]}#{players + 1}, FALSE, #{columns[players + 3]}2:#{columns[players + 3]}#{players + 1}, FALSE)"""
  table[1][players + 6] = """=SORT(A2:A#{players + 1}, #{columns[players + 2]}2:#{columns[players + 2]}#{players + 1}, FALSE, #{columns[players + 3]}2:#{columns[players + 3]}#{players + 1}, FALSE)"""
  row = players + 1
  # table[row] = ['', 'Win points']
  # for i in [1..players]
  #   table[players + 1][i + 1] = 1000
  # row++
  table[row] = ['Nr', 'Game', 'Result']
  for game, i in window.generate_combinations[players]
    row++
    table[row] = [i + 1, "#{game[0].join('&')} VS #{game[1].join('&')}"]
    table[row][4] = """=CONCATENATE(A#{game[0][0] + 1}, " & ", A#{game[0][1] + 1}, " VS ", A#{game[1][0] + 1}, " & ", A#{game[1][1] + 1})"""
    table[game[0][0]][game[0][1] + 1] = table[game[0][1]][game[0][0] + 1] = "=0+C#{row + 1}#{if table[game[0][0]][game[0][1] + 1] then table[game[0][0]][game[0][1] + 1].substr(2) else ''}"
    table[game[1][0]][game[1][1] + 1] = table[game[1][1]][game[1][0] + 1] = """=0-C#{row + 1} #{if table[game[1][0]][game[1][1] + 1] then table[game[1][0]][game[1][1] + 1].substr(2) else ''}"""


  return table.map( (row)->
    row.join "\t"
  ).join "\n"
