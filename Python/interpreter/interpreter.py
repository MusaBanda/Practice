def main():
    expression = input("Expression: ")
    x, operator, z = expression.split()
    x = int(x)
    z = int(z)

    if operator == "+":
        result = x + z
    elif operator == "-":
        result = x - z
    elif operator == "*":
        result = x * z
    elif operator == "/":
        result = x / z  # This is already a float division

    print(f"{float(result):.1f}")

if __name__ == "__main__":
    main()
