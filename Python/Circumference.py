
name = input("what's your name? ")
print("hello", name)

print("first shape is circle")
rr = int(input("radius: "))
cir1 = rr * 2 * 3.142

print("second shape is triangle")
pp1 = int(input("sides1: "))
pp2 = int(input("sides2: "))
pp3 = int(input("sides3: "))
cir2 = pp1 + pp2 + pp3

print("third shape is square")
p2 = int(input("side: "))
cir3 = p2 * 4

print("last shape is rectangle")
s1 = int(input("side1: "))
s2 = int(input("side2: "))
cir4 = 2 * s1 + 2 * s2


print("cir forcircle =", cir1 , "cm")
print("cir for triangle =", cir2 , "cm")
print("cir for square =", cir3 , "cm")
print("cir for rectangle =", cir4 , "cm")