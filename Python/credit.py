accounts = {

    "Amex": = "378282246310005",
    "Amex": = "371449635398431",
    "MASTERCARD": = "5555555555554444",
    "MASTERCARD": = "5105105105105100",
    "VISA": = "4111111111111111",
    "VISA": = "4012888888881881",
    "INVALID": = "1234567890"
}
cnumber = int("Enter account No. ? ")
if cnumber in accounts:
    number = cnumber[accounts]
    print(number)