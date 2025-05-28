scores = []
for i in range(3):
    score = float(input("scores: "))
    scores += [score]

avarange = sum(scores) / len(scores)
print(avarange)