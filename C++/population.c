#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt for start size
    int start_size;
    do
    {
        start_size = get_int("Start size: ");
    }
    while (start_size < 9);

    // Prompt for end size
    int end_size;
    do
    {
        end_size = get_int("End size: ");
    }
    while (end_size < start_size);

    // Calculate number of years until we reach threshold
    int years = 0;
    int population = start_size;

    while (population < end_size)
    {
        int new_llamas_born = population / 3;
        int llamas_passing_away = population / 4;
        population = population + new_llamas_born - llamas_passing_away;
        years++;
    }

    // Print number of years
    printf("Years: %d\n", years);

    return 0;
}
