def on_countdown_end():
    game.show_long_text("Wow! Your highscore is", DialogLayout.CENTER)
info.on_countdown_end(on_countdown_end)

scene.set_background_color(11)
info.start_countdown(60)