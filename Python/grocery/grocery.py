def main():
    menu = {
        "piza": 90.25,
        "Burger": 60.50,
        "doritos": 22.50,
        "water": 11.00,
        "switch": 9.50,
        "coke": 15.50,
        "pie": 30.50,
        "Taco": 50.00,
        "Salad": 40.00
    }

    total = 0.0

    try:
        while True:
            item = input("Item: ").title()
            if item in menu:
                total += menu[item]
                print(f"${total:.2f}")
    except EOFError:
        print()
        pass

if __name__ == "__main__":
    main()
