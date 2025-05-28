import re

def get_credit_card_number():
    while True:
        credit_card_number = input("Number: ")
        if re.match("^[0-9]+$", credit_card_number):
            return credit_card_number
        else:
            print("Please enter a valid numeric credit card number.")

def check_card_type(credit_card_number):
    if re.match("^3[47][0-9]{13}$", credit_card_number):
        return "AMEX"
    elif re.match("^5[1-5][0-9]{14}$", credit_card_number):
        return "MASTERCARD"
    elif re.match("^4[0-9]{12}([0-9]{3})?$", credit_card_number):
        return "VISA"
    else:
        return "INVALID"

def main():
    credit_card_number = get_credit_card_number()
    card_type = check_card_type(credit_card_number)
    print(card_type)

if __name__ == "__main__":
    main()
