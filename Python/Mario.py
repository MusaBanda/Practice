def main():
    hight = get_hight()
    for i in range(hight):
            print("#")

def get_hight():
    while True:
          try:
               n = int(input("enter hight: "))
               if n >= 2:
                    return n
          except ValueError:
            print("not correct")
    

main()