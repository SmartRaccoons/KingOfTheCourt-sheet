window.generate = (players)->
  combinations =
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
  columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
  table = [['name', 'nr']]
  for i in [1..players]
    table[0][i + 1] = i
  table[0][players + 2] = 'Wins'
  table[0][players + 3] = 'Points'
  table[0][players + 4] = 'Order'
  for i in [1..players]
    table[i] = ['', i]
    # table[i][i + 1] = ''
    table[i][players + 2] = """=countif(C#{i + 1}:#{columns[players + 1]}#{i + 1}, ">0")"""
    table[i][players + 3] = """=sum(C#{i + 1}:#{columns[players + 1]}#{i + 1})"""
    # table[i][players + 3] = """=sumif(C#{i + 1}:#{columns[players + 1]}#{i + 1}, ">0", $C$#{players + 2}:$#{columns[players + 1]}$#{players+2}) + sum(C#{i + 1}:#{columns[players + 1]}#{i + 1})"""
  table[1][players + 4] = """=SORT(B2:B#{players + 1}, #{columns[players + 2]}2:#{columns[players + 2]}#{players + 1}, FALSE, #{columns[players + 3]}2:#{columns[players + 3]}#{players + 1}, FALSE)"""
  table[1][players + 5] = """=SORT(A2:A#{players + 1}, #{columns[players + 2]}2:#{columns[players + 2]}#{players + 1}, FALSE, #{columns[players + 3]}2:#{columns[players + 3]}#{players + 1}, FALSE)"""
  row = players + 1
  # table[row] = ['', 'Win points']
  # for i in [1..players]
  #   table[players + 1][i + 1] = 1000
  # row++
  table[row] = ['Nr', 'Game', 'Result']
  for game, i in combinations[players]
    row++
    table[row] = [i + 1, "#{game[0].join('&')} VS #{game[1].join('&')}"]
    table[row][4] = """=CONCATENATE(A#{game[0][0] + 1}, " & ", A#{game[0][1] + 1}, " VS ", A#{game[1][0] + 1}, " & ", A#{game[1][1] + 1})"""
    table[game[0][0]][game[0][1] + 1] = table[game[0][1]][game[0][0] + 1] = "=0+C#{row + 1}"
    table[game[1][0]][game[1][1] + 1] = table[game[1][1]][game[1][0] + 1] = """=0-C#{row + 1}"""


  return table.map( (row)->
    row.join "\t"
  ).join "\n"
