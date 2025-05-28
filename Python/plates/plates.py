def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")


def is_valid(s):
    return (
        is_correct_length(s)
        and starts_with_two_letters(s)
        and only_letters_and_numbers(s)
        and numbers_at_end(s)
    )


def is_correct_length(s):
    return 2 <= len(s) <= 6


def starts_with_two_letters(s):
    return len(s) >= 2 and s[0].isalpha() and s[1].isalpha()


def only_letters_and_numbers(s):
    return s.isalnum()


def numbers_at_end(s):
    number_started = False
    for i, char in enumerate(s):
        if char.isdigit():
            if not number_started:
                if char == '0':
                    return False
                number_started = True
        else:
            if number_started:
                # If letters come after numbers, it's invalid
                return False
    return True


main()
