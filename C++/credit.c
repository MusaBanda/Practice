#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt for credit card number
    long long card_number = get_long_long("Number: ");

    int sum = 0;
    int digit_count = 0;
    int prev_digit = -1;

    while (card_number > 0)
    {
        int digit = card_number % 10;
        card_number /= 10;
        digit_count++;

        if (digit_count % 2 == 0)
        {
            int doubled_digit = digit * 2;
            sum += doubled_digit / 10 + doubled_digit % 10;
        }
        else
        {
            sum += digit;
            prev_digit = digit;
        }
    }

    if (sum % 10 == 0)
    {
        if (digit_count == 15 && (prev_digit == 3))
        {
            printf("AMEX\n");
        }
        else if (digit_count == 13 || digit_count == 16)
        {
            if (prev_digit == 4)
            {
                printf("VISA\n");
            }
            else if (prev_digit == 5)
            {
                printf("MASTERCARD\n");
            }
            else
            {
                printf("INVALID\n");
            }
        }
        else
        {
            printf("INVALID\n");
        }
    }
    else
    {
        printf("INVALID\n");
    }

    return 0;
}