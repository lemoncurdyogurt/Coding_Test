def findPascal_number(num_line, idx):
    lineArray = []

    for i in range(num_line):
        num_lineArray = []
        for j in range(i + 1):
            if j == 0 or j == i:
                num_lineArray.append(1)
            else:
                num_lineArray.append(lineArray[i - 1][j - 1] + lineArray[i - 1][j])
        lineArray.append(num_lineArray)

    pascal_number = lineArray[num_line-1][idx-1]
    return(pascal_number)
  


N, k =  map(int,input().split())
print(findPascal_number(N, k))

