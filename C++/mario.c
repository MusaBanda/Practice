#include <stdio.h>

int main() {
    int height;

    do {
        printf("Height: ");
        scanf("%d", &height);
    } while (height < 1 || height > 8);

    for (int row = 1; row <= height; row++) {
        for (int space = height - row; space > 0; space--) {
            printf(" ");
        }
        for (int hash = 1; hash <= row; hash++) {
            printf("#");
        }
        printf("\n");
    }

    return 0;
}