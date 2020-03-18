# bot.py
import os # for importing env vars for the bot to use
from twitchio.ext import commands
from datetime import datetime
command_fired = datetime.now() 

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
    await bot.handle_commands(ctx)


# bot.py, in event_message, below the bot-ignoring stuff
@bot.command(name='echo')
async def echo(ctx):
    await ctx.channel.send(ctx)

@bot.command(name='beef')
async def beef(ctx):
    await ctx.send('GROUND BEEF?!?!?! 4HEad')

@bot.command(name='ping')
async def ping(ctx):
    await ctx.send('pong 🏓 ppHop 🏓 ')

    # Commands use a decorator...
@bot.command(name='hello')
async def hello(ctx):
    await ctx.send(f'Hello {ctx.author.name}!')

# bot.py
if __name__ == "__main__":
    bot.run()

