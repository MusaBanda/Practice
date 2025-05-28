#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int compute_score(string word);

int main(void)
{
    // Get words from players
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Calculate scores
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    // Determine the winner
    if (score1 > score2)
    {
        printf("Player 1 wins!\n");
    }
    else if (score2 > score1)
    {
        printf("Player 2 wins!\n");
    }
    else
    {
        printf("Tie!\n");
    }

    return 0;
}

int compute_score(string word)
{
    int score = 0;
    int n = strlen(word);

    for (int i = 0; i < n; i++)
    {
        char c = word[i];

        // Convert uppercase to lowercase
        if (isupper(c))
        {
            c = tolower(c);
        }

        // Calculate score for letters only
        if (c >= 'a' && c <= 'z')
        {
            score += c - 'a' + 1;
        }
    }

    return score;
}
