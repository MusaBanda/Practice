from fractions import Fraction

def main():
    x = get_percentage()
    percent = round(x * 100)

    if percent <= 1:
        print("E")
    elif percent >= 99:
        print("F")
    else:
        print(f"{percent}%")

def get_percentage():
    while True:
        try:
            frac = Fraction(input("Fraction: "))
            if frac.numerator > frac.denominator:
                raise ValueError
            return frac
        except (ValueError, ZeroDivisionError):
            pass

main()
