#include <stdlib.h>
#include <stdio.h>

#define BOARD_SIZE 3
#define HORIZONTAL_LINE printf("-------------\n")
#define VERTICAL_LINE printf("|")

typedef enum CurrentPlayer
{
    X = 'X',
    O = 'O'
} CurrentPlayer;

typedef struct Game
{
    CurrentPlayer current_player;
    char board[BOARD_SIZE][BOARD_SIZE];
    int has_finished;
} Game;

Game *TT_game_init()
{
    Game *board = (Game *)(malloc(sizeof(Game)));
    board->current_player = X;
    board->has_finished = 0;

    // fill up the board with empty spaces
    for (size_t i = 0; i < BOARD_SIZE; i++)
    {
        for (size_t j = 0; j < BOARD_SIZE; j++)
        {
            board->board[i][j] = ' ';
        }
    }

    return board;
}

void TT_move(Game *game, size_t x, size_t y)
{
    if (game->board[y][x] == ' ')
    {
        if (game->current_player == X)
        {
            game->board[y][x] = X;
            game->current_player = O;
        }
        else
        {
            game->board[y][x] = O;
            game->current_player = X;
        }
    }
}

void TT_move_with_number(Game *game, int position)
{
    int x = (position - 1) % 3;
    int y = (position - 1) / 3;
    TT_move(game, x, y);
}

void TT_print_board(Game *game)
{
    // clear the screen
    printf("\033[H\033[J");
    HORIZONTAL_LINE;
    for (size_t i = 0; i < 3; i++)
    {
        VERTICAL_LINE;
        for (size_t j = 0; j < 3; j++)
        {
            printf(" %c ", game->board[i][j]);
            if (j < 2)
            {
                VERTICAL_LINE;
            }
        }
        VERTICAL_LINE;
        printf("\n");
        if (i < 2)
        {
            HORIZONTAL_LINE;
        }
    }
    HORIZONTAL_LINE;
}

static inline int is_equal(const int is_matched, const char left, const char right)
{
    return left != ' ' && (left == right) && is_matched;
}

int TT_evalute_board(Game *game)
{
    int horizontal_match[BOARD_SIZE];
    int vertical_match[BOARD_SIZE];
    // we need to check for both tl to br and tr to bl
    int diagonal_match[2][BOARD_SIZE];

    for (size_t i = 0; i < BOARD_SIZE; i++)
    {
        for (size_t j = 0; j < BOARD_SIZE; j++)
        {
            horizontal_match[j] = game->board[i][j];
            vertical_match[j] = game->board[j][i];
            // tl to br
            diagonal_match[0][j] = game->board[j][j];
            // tr to bl
            diagonal_match[1][j] = game->board[BOARD_SIZE - j - 1][j];
        }

        // after checking each row, we need to make sure if we have any matching symbols
        int is_horizontal_matched = 1;
        int is_vertical_matched = 1;
        int is_diagonal_matched[2] = {1, 1};
        for (size_t ii = 0; ii < BOARD_SIZE; ii++)
        {
            is_horizontal_matched = is_equal(is_horizontal_matched, horizontal_match[0], horizontal_match[ii]);
            is_vertical_matched = is_equal(is_vertical_matched, vertical_match[0], vertical_match[ii]);
            is_diagonal_matched[0] = is_equal(is_diagonal_matched[0], diagonal_match[0][0], diagonal_match[0][ii]);
            is_diagonal_matched[1] = is_equal(is_diagonal_matched[1], diagonal_match[1][0], diagonal_match[1][ii]);
        }

        // quickly return if we found the winner
        if (is_horizontal_matched || is_vertical_matched || is_diagonal_matched[0] || is_diagonal_matched[1])
        {
            game->has_finished = 1;
            printf("We got a winner!\nWinner is: %c\n", game->current_player);
            return 1;
        }
    }

    return -1;
}

void TT_game_free(Game *game)
{
    free(game);
}
