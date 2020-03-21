
# bot.py
import os  # for importing env vars for the bot to use
from twitchio.ext import commands
import time
import random
command_fired = 0
game = ""
player = ""

bot = commands.Bot(
    # set up the bot
    irc_token=os.environ['TMI_TOKEN'],
    client_id=os.environ['CLIENT_ID'],
    nick=os.environ['BOT_NICK'],
    prefix=os.environ['BOT_PREFIX'],
    initial_channels=[os.environ['CHANNEL']]
)


# bot.py, below bot object
@bot.event
async def event_ready():
    'Called once when the bot goes online.'
    print(f"{os.environ['BOT_NICK']} is online!")
    ws = bot._ws  # this is only needed to send messages within event_ready
    await ws.send_privmsg(os.environ['CHANNEL'], f" ppHop running... ppHop ")

# bot.py, below event_ready
@bot.event
async def event_message(ctx):
    'Runs every time a message is sent in chat.'

    # make sure the bot ignores itself and the streamer
    if ctx.author.name.lower() == os.environ['BOT_NICK'].lower():
        return
 #bot.py, in event_message, below the bot ignore stuffs

    if game == "rps":
         if ctx.author.name == player:
            rps_eval(ctx.author.name, ctx)
    else:
        await bot.handle_commands(ctx)

@bot.command(name='beef')
async def beef(ctx):
    global command_fired
    if time.time() > command_fired + 5:
        command_fired = time.time()
        await ctx.send('GROUND BEEF?!?!?! 4HEad')

@bot.command(name='ping')
async def ping(ctx):
    global command_fired
    if time.time() > command_fired + 5:
        command_fired = time.time()
        await ctx.send('pong 🏓 ppHop 🏓 ')

@bot.command(name='hello')
async def hello(ctx):
    global command_fired
    if time.time() > command_fired + 5:
        command_fired = time.time()
        await ctx.send(f'Hello {ctx.author.name}!')

@bot.command(name='dank')
async def dank(ctx):
    global command_fired
    if time.time() > command_fired + 5:
        command_fired = time.time()
        await ctx.send('FeelsDankMan 👇 this guy is dank')

@bot.command(name='donk')
async def donk(ctx):
    global command_fired
    if time.time() > command_fired + 5:
        command_fired = time.time()
        await ctx.send('FeelsDonkMan 👇 this guy is donk')

@bot.command(name='help')
async def help(ctx):
    global command_fired
    if time.time() > command_fired + 5:
        command_fired = time.time()
        await ctx.send('Current Commands are: >help (commands), >ping, >beef, >hello, >dank, >donk, >roll, >about [Last Updated: 19/03/20]')

@bot.command(name='commands')
async def commands(ctx):
    global command_fired
    if time.time() > command_fired + 5:
        command_fired = time.time()
        await ctx.send('Current Commands are: >help (commands), >ping, >beef, >hello, >dank, >donk, >roll, >about [Last Updated: 19/03/20]')

@bot.command(name='roll')
async def roll(ctx):
    global command_fired
    value = randint(0, 100)
    if time.time() > command_fired + 5:
        command_fired = time.time()
        await ctx.send(value)

@bot.command(name='about')
async def about(ctx):
    global command_fired
    if time.time() > command_fired+5:
        command_fired = time.time()
        await ctx.send("I am a bot made a person who has only just started learning how to program in python so all my commands will be extremely simple sorry if you were expecting more. :)")

@bot.command(name='rps')
async def rps(ctx):
    global command_fired
    if time.time() > command_fired+5:
        command_fired = time.time()
        global game
        global player
        game = rps
        player = ctx.author.name

async def rps_eval(player, user_go):

    rps_ob = ["Rock", "Paper", "Scissors"]
    bot_go = random.choice(rps_ob)

    if user_go == bot_go:
        await ctx.send(f'Draw!')
        game == ""
        player == ""
        return

    if user_go == "Rock":
        test_result("Scissors")
    elif user_go == "Scissors":
        test_result("Paper")
    else:
        test_result("Rock")

    async def test_result(win):
        if bot_go == win:
            await ctx.send(f'You Win!')
        else:
            await ctx.send(f'You Lose!')

        game == ""
        player == ""

    if user_go == "Rock":
        if bot_go == "Rock":
            print(bot_go)
            print("Draw!")
        elif bot_go == "Paper":
            print(bot_go)
            print("You Lose!")
        elif bot_go == "Scissors":
            print(bot_go)
            print("You Win!")

    if user_go == "Paper":
        if bot_go == "Rock":
            print(bot_go)
            print("You Win!")
        elif bot_go == "Paper":
            print(bot_go)
            print("Draw")
        elif bot_go == "Scissors":
            print(bot_go)
            print("You Lose!")

    if user_go == "Scissors":
        if bot_go == "Rock":
            print(bot_go)
            print("You Lose!")
        elif bot_go == "Paper":
            print(bot_go)
            print("You Win!")
        elif bot_go == "Scissors":
            print(bot_go)
            print("Draw!")

    # bot.py
if __name__ == "__main__":
    bot.run()

