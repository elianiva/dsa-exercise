#include "game.c"

int main(void) {
    Game *game = TT_game_init();
    TT_print_board(game);
    for (;;)
    {
        int position;
        printf("[Player: %c] Enter Position: ", game->current_player);
        scanf("%d", &position);
        TT_move_with_number(game, position);
        TT_print_board(game);
        if (TT_evalute_board(game) == 1) {
            TT_game_free(game);
            return 0;
        }
    }
}
