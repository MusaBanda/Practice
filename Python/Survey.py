import time

name = input("what is your username? ")
print("hello ", name)

place = input("where are you from " + name +"? ")

age = int(input("so "+ name + " how old are you "))
time.sleep(1)

print("please check if the following information is corret ")
time.sleep(3)
print("your name is ", name + " ,your from ", place + " ,you are ", age ,"old")
time.sleep(3)
print("if correct enter yes and if not enter no ")

answer = input("? ")
if answer == "yes":
    print("ok lets proceed ", name)

if answer == "no":
    print("re-run")
    
print(" welcome to my survey ")
time.sleep(3)
print("today i'll be asking you a few qeustion please only answer using the number's provided in multiple qeustions")
time.sleep(5)
print("NOTE THE FOLLOWING QEUSTIONS ARE BASED ON FOOTBALL")
time.sleep(4)

print("Question 1")
time.sleep(1)

print("who is the best player(goat) betweem; ")
time.sleep(3)
print("1.cristiano ronaldo")
print("2.leo messi")
print("3.benzema")
answer = input("? ")

if answer == "1":
    print("your answer is ,ronaldo is the best")
if answer == "2":
    print("your answer is ,leo messi is the best")
if answer == "3":
    print("your answer is ,benzema is the best")
time.sleep(3)
print("proceed to the next question")

print("QEUSTION 2")
time.sleep(1)

print("who will be the next goat between mbabe and halland after your answer in question 1 ")
input("? ")

print("Question 2")
time.sleep(1) 
print("who is most likely to win the balon d'or")
q1 = input("? ")
print("your answer is," , q1 + " is most likely")
print("proceed to the next question")
time.sleep(2)
