const Discord = require('discord.js');
const { Intents } = require('discord.js');
const dotenv = require('dotenv')
const ytdl = require('ytdl-core');
dotenv.config()
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const guilds = require('./guilds.json'); 

const client = new Discord.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ]
})

client.on('ready', () => {
  console.log('Eclipse has connected to Discord 👀')
})

client.on('messageCreate', (message) => {
  // ping command simple
  if (message.content === 'ping') {
    message.reply({
      content: 'pong',
    })
  }

  // eclipse command

  if (message.content === 'eclipse') {
    const bodyPart = ['eye', 'leg', 'brain', 'toes', 'fingers', 'lips', 'teeth', 'toungue', 'penis', 'fingernail', 'toenail', 'mouth', 'nose', 'throat', 'buttcrack', 'ears', 'stomach', 'liver', 'heart']
    const randomPart = bodyPart[(Math.random() * bodyPart.length) | 0]
    const mad = ["stop saying my name", "i'm about to get very mad if you don't stop saying my name", "if you don't stop saying my name i'll break your " + randomPart, "i will literally find you if you don't stop saying my name.", "i will leave if you don't stop saying my name.", "that's it."]
    const randomMad = mad[(Math.random() * mad.length) | 0]
    message.reply(message.author.username + ', ' + randomMad);
  }
  
    /* if (message.content === 'sus') {
      message.reply('motherfucking dumb among maongretoyntgioreegthorngeofwrnt435g4oeirfjgithrnkelfrmwergbtheijnfvkdmefgrijekfwneogbruefendwfogrebnforge i anm in desperate need of sleep please hlep rgtei0rfjotehrnjgbodfigrjwhetirogpfsjgetdf gefdifgetjpdfer the voiuces the vides the vpices are geting vlosrt and closer everyday and thees nothing anyone can do to sotp them please HELP HELP HELP HELP HEROFJ')
    }
*/
          
  if (message.content === 'b!test') {
    message.reply('test successful');
  }


   if (message.content === 'goodnight') {
    message.channel.send('Goodnight, sleep well!');
  }

  if (message.content === 'Goodnight') {
    message.channel.send('Goodnight, sleep well!');
  }

  // say command
  if (message.content.startsWith('b!say')) {
    if (message.author.bot) return;
    const SayMessage = message.content.slice(5).trim();
    const sayEmbed = new MessageEmbed()
      .setTitle(' ' + SayMessage + ' ')
      .setColor("#0774e9")
      .setDescription(' ')
    message.delete()
    message.channel.send({ embeds: [sayEmbed] });
  }

    if (message.content.startsWith('bb!say')) {
    if (message.author.bot) return;
    const SayMessage = message.content.slice(6).trim();
    message.delete()
    message.channel.send(SayMessage);
  }
  

  if (message.content === 'among us') {
    const amongUsEmbed = new MessageEmbed()
      .setTitle('among us sussy impostor')
      .setColor("#0774e9")
      .setDescription(message.author.username + " is sus")
      .setFooter('among us :)')
    message.channel.send({ embeds: [amongUsEmbed]})
  }

  // ping command
  if (message.content === 'b!ping') {
    const pingEmbed = new MessageEmbed()
      .setTitle('Pong! 🏓')
      .setThumbnail("https://cdn.discordapp.com/avatars/701215176921448508/674b1652b2af92d77ff27c5842acf701.png?size=1024")
      .setColor('#0774e9')
      .setDescription(`Latency is ${Date.now() - message.createdTimestamp}ms*\nAPI Latency is ${Math.round(client.ws.ping)}ms*`)
      .setFooter('*Subject to change');
    message.channel.send({ embeds: [pingEmbed] });
  }

  // kill command
  if (message.content.startsWith('b!kill')) {
    if (message.author.bot) return;
    const kill = message.content.slice(6).trim();
    const weapon = ['knife', 'gun', 'watermelon', 'sword', 'fork', 'spoon', 'book', 'piece of wood', 'among us plush', 'highway roadsign', 'gps', 'apple cloth', 'ipad', 'dog', 'line of javascript code', 'line of python code']
    const method = ['stabbed', 'crushed', 'shot', 'slammed']
    const randomWeapon = weapon[(Math.random() * weapon.length) | 0]
    const randomMethod = method[(Math.random() * method.length) | 0]
    const killEmbed = new MessageEmbed()
      .setTitle("There has been... a murder!")
      .setColor("#0774e9")
      .setDescription(message.author.username + ' has ' + randomMethod + ' ' + kill + ' using a ' + randomWeapon)
    message.channel.send({ embeds: [killEmbed] });
  }
  
 if (message.content === 'b!server-info') {
   const serverEmbed = new MessageEmbed()
    .setTitle(message.guild.name)
    .addField("Member Count", `This server has ${message.guild.memberCount} members`)
    .addField("Owner", `The owner of this server is ${message.guild.owner}`)
    .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
    .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)     
   message.channel.send({embeds: [serverEmbed]});
} 
  
  if (message.content === 'b!user-info') {
   const serverEmbed = new MessageEmbed()
    .setTitle(message.author.username)
    .addField("Your ID", message.author.id)   
    .addField('Roles:', message.author.roles)
   message.channel.send({embeds: [serverEmbed]});
  }

  // injure command 
  if (message.content.startsWith('b!harm')) {
    if (message.author.bot) return;
    const kill = message.content.slice(7).trim();
    const weapon = ['knife', 'gun', 'watermelon', 'sword', 'fork', 'spoon', 'book', 'piece of wood', 'among us plush', 'highway roadsign', 'gps', 'apple cloth', 'ipad', 'dog', 'line of javascript code', 'line of python code', 'magic keyboard', 'apple music subscription', 'spotify premium subscription', 'alarm clock', 'cat', 'chair', 'dr. pepper can', "rubik's cube", '20w charger', 'pair of airpods', 'pair of raycons', 'pkcell']
    const method = ['stabbed', 'crushed', 'shot', 'slammed']
    const bodyPart = ['eye', 'leg', 'brain', 'toes', 'fingers', 'lips', 'teeth', 'toungue', 'penis', 'fingernail', 'toenail', 'mouth', 'nose', 'throat', 'buttcrack', 'ears', 'stomach', 'liver', 'heart']
    const randomWeapon = weapon[(Math.random() * weapon.length) | 0]
    const randomMethod = method[(Math.random() * method.length) | 0]
    const randomPart = bodyPart[(Math.random() * bodyPart.length) | 0]
    const killEmbed = new MessageEmbed()
      .setTitle("Uh oh! Someone's been injured!")
      .setColor("#0774e9")
      .setDescription(message.author.username + ' has ' + randomMethod + ' ' + kill + "'s " + randomPart + ' using a ' + randomWeapon)
    message.channel.send({ embeds: [killEmbed] });
  }

  if (message.content === 'b!rc') {
    const counties = ["Tarrant, TX", "Dallas, TX", "Wise, TX", "Denton, TX", "Love, OK", "Cooke, TX", "Carter, OK", "Murray, OK", "Garvin, OK", "McClain, OK", "Oklahoma, OK", "Cleveland, OK", "Lincoln, OK", "Creek, OK", "Tulsa, OK", "Rogers, OK", "Wagoner, OK", "Mayes, OK", "Craig, OK", "Ottawa, OK", "Newton, MO", "Jasper, MO", "Lawrence, MO", "Greene, MO", "Webster, MO", "Dallas, MO", "Laclede, MO", "Pulaski, MO", "Phelps, MO", "Crawford, MO", "Franklin, MO", "Jefferson, MO", "St, Louis Co,  MO", "St, Clair, IL", "St, Louis, MO", "Macoupin, IL", "Christian, IL", "Montgomery, IL", "Madison, IL", "Sangamon, IL", "Logan, IL", "McLean, IL", "Livingston, IL", "Woodford, IL", "Grundy, IL", "Will, IL", "Cook, IL", "Kankakee, IL", "Iroquois, IL", "Ford, IL", "DuPage, IL", "Kendall, IL", "Kane, IL", "Collin, TX", "Ellis, TX", "Johnson, TX", "Parker, TX", "Navarro, TX", "Freestone, TX", "Leon, TX", "Grimes, TX", "Walker, TX", "Madison, TX", "Montgomery, TX", "Harris, TX", "Hill, TX", "McLennan, TX", "Bell, TX", "Williamson, TX", "Travis, TX", "Hays, TX", "Caldwell, TX", "Bastrop, TX", "Comal, TX", "Bexar, TX", "Guadalupe, TX", "Blanco, TX", "Burnet, TX", "Hunt, TX", "Hopkins, TX", "Rockwall, TX", "Franklin, TX", "Morris, TX", "Titus, TX", "Bowie, TX", "Little River, AR", "Miller, AR", "Hempstead, AR", "Clark, AR", "Hot Spring, AR", "Grant, AR", "Saline, AR", "Pulaski, AR", "Lonoke, AR", "Prairie, AR", "Lee, AR", "Monroe, AR", "St, Francis, AR", "Nevada, AR", "Pike, AR", "Crittenden, AR", "Shelby, TN", "Fayette, TN", "Madison, TN", "Haywood, TN", "Henderson, TN", "Decatur, TN", "Benton, TN", "Humphreys, TN", "Perry, TN", "Lewis, TN", "Hickman, TN", "Dickson, TN", "Williamson, TN", "Davidson, TN", "Cheatham, TN", "Sumner, TN", "Robertson, TN", "Simpson, KY", "Warren, KY", "Allen, KY", "Edmonson, KY", "Barren, KY", "Larue, KY", "Hart, KY", "Hardin, KY", "Bullitt, KY", "Jefferson, KY", "Oldham, KY", "Trimble, KY", "Henry, KY", "Carroll, KY", "Owen, KY", "Gallatin, KY", "Grant, KY", "Boone, KY", "Kenton, KY", "Hamilton, OH", "Butler, OH", "Warren, OH", "Clinton, OH", "Fayette, OH", "Greene, OH", "Madison, OH", "Franklin, OH", "Licking, OH", "Delaware, OH", "Pickaway, OH", "Fairfield, OH", "Union, OH", "Van Zandt, TX", "Kaufman, TX", "Smith, TX", "Gregg, TX", "Harrison, TX", "Caddo, LA", "Bossier, LA", "Webster, LA", "Bienville, LA", "Lincoln, LA", "Claiborne, LA", "Ouachita, LA", "Madison, LA", "Richland, LA", "Warren, MS", "Hinds, MS", "Rankin, MS", "Jasper, MS", "Scott, MS", "Newton, MS", "Smith, MS", "Lauderdale, MS", "Sumter, AL", "Greene, AL", "Tuscaloosa, AL", "Jefferson, AL", "Shelby, AL", "St, Clair, AL", "Talladega, AL", "Calhoun, AL", "Cleburne, AL", "Haralson, GA", "Carroll, GA", "Douglas, GA", "Fulton, GA", "DeKalb, GA", "Fayette, GA", "Clayton, GA", "Henry, GA", "Monroe, GA", "Lamar, GA", "Butts, GA", "Bibb, GA", "Crawford, GA", "Peach, GA", "Houston, GA", "Dooly, GA", "Crisp, GA", "Turner, GA", "Worth, GA", "Cook, GA", "Lowndes, GA", "Tift, GA", "Hamilton, FL", "Columbia, FL", "Suwannee, FL", "Alachua, FL", "Marion, FL", "Sumter, FL", "Lake, FL", "Polk, FL", "Hillsborough, FL", "Pinellas, FL", "Osceola, FL", "Montague, TX", "Grayson, TX", "Fannin, TX", "Rains, TX", "Palo Pinto, TX", "Jack, TX", "Clay, TX", "Somervell, TX", "Erath, TX", "Hood, TX", "Henderson, TX", "Newton, IN", "Jasper, IN", "White, IN", "Tippecanoe, IN", "Boone, IN", "Clinton, IN", "Marion, IN", "Shelby, IN", "Decatur, IN", "Ripley, IN", "Dearborn, IN", "Hancock, IN", "Rush, IN", "Franklin, IN", "Johnson, IN", "Bartholomew, IN", "Jennings, IN", "Ohio, IN", "Bosque, TX", "Wood, TX", "Delta, TX", "Upshur, TX", "Young, TX", "Stephens, TX", "Eastland, TX", "Comanche, TX", "Hamilton, TX", "Coryell, TX", "Falls, TX", "Limestone, TX", "Anderson, TX", "Cherokee, TX", "Wilson, TX", "Gonzales, TX", "Karnes, TX", "Atascosa, TX", "Medina, TX", "Bandera, TX", "Kendall, TX", "Robertson, TX", "Brazos, TX", "Waller, TX", "Fort Bend, TX", "Brazoria, TX", "Galveston, TX", "Chambers, TX", "North Slope, AK", "Northwest Arctic, AK", "Petersburg, AK", "Prince of Wales Hyder, AK", "Ketchikan Gateway, AK", "Wrangell, AK", "Sitka, AK", "Haines, AK", "Juneau, AK", "Skagway, AK", "Hoonah Angoon, AK", "Yakutat, AK", "Aleutians West, AK", "Aleutians East, AK", "Kodiak Island, AK", "Bristol Bay, AK", "Dillingham, AK", "Lake and Peninsula, AK", "Kenai Peninsula, AK", "Anchorage, AK", "Chugach, AK", "Copper River, AK", "Matanuska Susitna, AK", "SE Fairbanks, AK", "Fairbanks North Star, AK", "Denali, AK", "Bethel, AK", "Kusilvak, AK", "Nome, AK", "Yukon Koyukuk, AK", "Houston, AL", "Henry, AL", "Geneva, AL", "Dale, AL", "Coffee, AL", "Covington, AL", "Mobile, AL", "Baldwin, AL", "Escambia, AL", "Conecuh, AL", "Washington, AL", "Choctaw, AL", "Clarke, AL", "Monroe, AL", "Wilcox, AL", "Butler, AL", "Crenshaw, AL", "Pike, AL", "Bullock, AL", "Macon, AL", "Lowndes, AL", "Montgomery, AL", "Elmore, AL", "Autauga, AL", "Dallas, AL", "Marengo, AL", "Perry, AL", "Chilton, AL", "Coosa, AL", "Tallapoosa, AL", "Clay, AL", "Bibb, AL", "Hale, AL", "Pickens, AL", "Walker, AL", "Lamar, AL", "Fayette, AL", "Franklin, AL", "Marion, AL", "Winston, AL", "Cullman, AL", "Blount, AL", "Etowah, AL", "Marshall, AL", "Morgan, AL", "Lawrence, AL", "Colbert, AL", "Lauderdale, AL", "Limestone, AL", "Madison, AL", "Jackson, AL", "DeKalb, AL", "Cherokee, AL", "Randolph, AL", "Chambers, AL", "Lee, AL", "Russell, AL", "Barbour, AL", "Chicot, AR", "Ashley, AR", "Pope, AR", "Newton, AR", "Madison, AR", "Franklin, AR", "Johnson, AR", "Logan, AR", "Yell, AR", "Perry, AR", "Conway, AR", "Faulkner, AR", "Van Buren, AR", "Searcy, AR", "Stone, AR", "Cleburne, AR", "White, AR", "Independence, AR", "Jackson, AR", "Woodruff, AR", "Cross, AR", "Poinsett, AR", "Mississippi, AR", "Craighead, AR", "Izard, AR", "Lawrence, AR", "Sharp, AR", "Greene, AR", "Clay, AR", "Randolph, AR", "Fulton, AR", "Baxter, AR", "Marion, AR", "Boone, AR", "Carroll, AR", "Benton, AR", "Washington, AR", "Crawford, AR", "Sebastian, AR", "Scott, AR", "Montgomery, AR", "Garland, AR", "Phillips, AR", "Jefferson, AR", "Dallas, AR", "Cleveland, AR", "Lincoln, AR", "Arkansas, AR", "Desha, AR", "Drew, AR", "Bradley, AR", "Calhoun, AR", "Ouachita, AR", "Howard, AR", "Polk, AR", "Sevier, AR", "Lafayette, AR", "Columbia, AR", "Union, AR", "Mohave, AZ", "La Paz, AZ", "Cochise, AZ", "Santa Cruz, AZ", "Pima, AZ", "Greenlee, AZ", "Graham, AZ", "Apache, AZ", "Navajo, AZ", "Gila, AZ", "Pinal, AZ", "Yuma, AZ", "Maricopa, AZ", "Coconino, AZ", "Yavapai, AZ", "Del Norte, CA", "Siskiyou, CA", "Imperial, CA", "Riverside, CA", "San Diego, CA", "Orange, CA", "Los Angeles, CA", "Ventura, CA", "Santa Barbara, CA", "San Luis Obispo, CA", "Kern, CA", "San Bernardino, CA", "Inyo, CA", "Tulare, CA", "Kings, CA", "Madera, CA", "Fresno, CA", "Monterey, CA", "San Benito, CA", "Merced, CA", "Santa Cruz, CA", "San Mateo, CA", "Alameda, CA", "Santa Clara, CA", "Stanislaus, CA", "Mariposa, CA", "Tuolumne, CA", "Mono, CA", "Alpine, CA", "Calaveras, CA", "Amador, CA", "San Joaquin, CA", "Contra Costa, CA", "El Dorado, CA", "Sacramento, CA", "Solano, CA", "San Francisco, CA", "Marin, CA", "Napa, CA", "Sonoma, CA", "Yolo, CA", "Placer, CA", "Nevada, CA", "Sierra, CA", "Yuba, CA", "Sutter, CA", "Colusa, CA", "Lake, CA", "Butte, CA", "Glenn, CA", "Plumas, CA", "Tehama, CA", "Mendocino, CA", "Humboldt, CA", "Trinity, CA", "Shasta, CA", "Lassen, CA", "Modoc, CA", "Montezuma, CO", "La Plata, CO", "Prowers, CO", "Bent, CO", "Kiowa, CO", "Cheyenne, CO", "Kit Carson, CO", "Yuma, CO", "Washington, CO", "Phillips, CO", "Sedgwick, CO", "Logan, CO", "Morgan, CO", "Baca, CO", "Otero, CO", "Crowley, CO", "Lincoln, CO", "Elbert, CO", "Arapahoe, CO", "Weld, CO", "Adams, CO", "Denver, CO", "Douglas, CO", "El Paso, CO", "Teller, CO", "Pueblo, CO", "Las Animas, CO", "Huerfano, CO", "Costilla, CO", "Conejos, CO", "Alamosa, CO", "Rio Grande, CO", "Custer, CO", "Fremont, CO", "Saguache, CO", "Chaffee, CO", "Gunnison, CO", "Pitkin, CO", "Lake, CO", "Park, CO", "Jefferson, CO", "Gilpin, CO", "Clear Creek, CO", "Summit, CO", "Eagle, CO", "Boulder, CO", "Grand, CO", "Larimer, CO", "Jackson, CO", "Routt, CO", "Moffat, CO", "Rio Blanco, CO", "Garfield, CO", "Delta, CO", "Mesa, CO", "Montrose, CO", "San Juan, CO", "Dolores, CO", "San Miguel, CO", "Ouray, CO", "Hinsdale, CO", "Mineral, CO", "Archuleta, CO", "Broomfield, CO", "Hartford, CT", "Litchfield, CT", "Fairfield, CT", "New Haven, CT", "Middlesex, CT", "New London, CT", "Tolland, CT", "Windham, CT", "Washington, DC", "New Castle, DE", "Sussex, DE", "Kent, DE", "Bay, FL", "Jackson, FL", "Charlotte, FL", "Lee, FL", "Hendry, FL", "Collier, FL", "Monroe, FL", "Miami Dade, FL", "Broward, FL", "Palm Beach, FL", "Sarasota, FL", "DeSoto, FL", "Glades, FL", "Martin, FL", "St, Lucie, FL", "Indian River, FL", "Okeechobee, FL", "Highlands, FL", "Hardee, FL", "Manatee, FL", "Hernando, FL", "Pasco, FL", "Orange, FL", "Seminole, FL", "Citrus, FL", "Levy, FL", "Volusia, FL", "Brevard, FL", "Washington, FL", "Holmes, FL", "Walton, FL", "Okaloosa, FL", "Santa Rosa, FL", "Escambia, FL", "Calhoun, FL", "Gulf, FL", "Franklin, FL", "Dixie, FL", "Gilchrist, FL", "Putnam, FL", "Flagler, FL", "St, Johns, FL", "Clay, FL", "Bradford, FL", "Union, FL", "Lafayette, FL", "Taylor, FL", "Wakulla, FL", "Liberty, FL", "Gadsden, FL", "Leon, FL", "Jefferson, FL", "Madison, FL", "Baker, FL", "Duval, FL", "Nassau, FL", "Rabun, GA", "Towns, GA", "Mitchell, GA", "Baker, GA", "Miller, GA", "Early, GA", "Seminole, GA", "Decatur, GA", "Grady, GA", "Thomas, GA", "Brooks, GA", "Colquitt, GA", "Lanier, GA", "Echols, GA", "Clinch, GA", "Atkinson, GA", "Berrien, GA", "Irwin, GA", "Dougherty, GA", "Calhoun, GA", "Clay, GA", "Quitman, GA", "Randolph, GA", "Terrell, GA", "Lee, GA", "Ben Hill, GA", "Coffee, GA", "Bacon, GA", "Wayne, GA", "Pierce, GA", "Brantley, GA", "Ware, GA", "Charlton, GA", "Camden, GA", "Glynn, GA", "McIntosh, GA", "Heard, GA", "Polk, GA", "Floyd, GA", "Chattooga, GA", "Whitfield, GA", "Catoosa, GA", "Walker, GA", "Dade, GA", "Long, GA", "Appling, GA", "Jeff Davis, GA", "Stewart, GA", "Webster, GA", "Sumter, GA", "Wilcox, GA", "Telfair, GA", "Wheeler, GA", "Dodge, GA", "Pulaski, GA", "Macon, GA", "Schley, GA", "Marion, GA", "Chattahoochee, GA", "Muscogee, GA", "Taylor, GA", "Talbot, GA", "Harris, GA", "Troup, GA", "Paulding, GA", "Murray, GA", "Gordon, GA", "Bartow, GA", "Cobb, GA", "Coweta, GA", "Meriwether, GA", "Pike, GA", "Upson, GA", "Bleckley, GA", "Laurens, GA", "Wilkinson, GA", "Twiggs, GA", "Baldwin, GA", "Jones, GA", "Spalding, GA", "Cherokee, GA", "Pickens, GA", "Dawson, GA", "Forsyth, GA", "Gwinnett, GA", "Rockdale, GA", "Jasper, GA", "Newton, GA", "Walton, GA", "Barrow, GA", "Jackson, GA", "Clarke, GA", "Oconee, GA", "Morgan, GA", "Putnam, GA", "Hancock, GA", "Taliaferro, GA", "Greene, GA", "Oglethorpe, GA", "Wilkes, GA", "Warren, GA", "McDuffie, GA", "Glascock, GA", "Jefferson, GA", "Washington, GA", "Johnson, GA", "Treutlen, GA", "Montgomery, GA", "Toombs, GA", "Liberty, GA", "Evans, GA", "Tattnall, GA", "Candler, GA", "Emanuel, GA", "Chatham, GA", "Bryan, GA", "Bulloch, GA", "Jenkins, GA", "Effingham, GA", "Screven, GA", "Burke, GA", "Richmond, GA", "Columbia, GA", "Lincoln, GA", "Elbert, GA", "Madison, GA", "Banks, GA", "Hall, GA", "Lumpkin, GA", "Gilmer, GA", "Fannin, GA", "Union, GA", "White, GA", "Habersham, GA", "Hart, GA", "Franklin, GA", "Stephens, GA", "Kauai, HI", "Honolulu, HI", "Maui, HI", "Hawaii, HI", "Kalawao, HI", "Scott, IA", "Clinton, IA", "Lyon, IA", "Sioux, IA", "Plymouth, IA", "Cherokee, IA", "O Brien, IA", "Osceola, IA", "Dickinson, IA", "Clay, IA", "Buena Vista, IA", "Pocahontas, IA", "Palo Alto, IA", "Emmet, IA", "Kossuth, IA", "Humboldt, IA", "Woodbury, IA", "Ida, IA", "Sac, IA", "Calhoun, IA", "Webster, IA", "Greene, IA", "Carroll, IA", "Crawford, IA", "Monona, IA", "Harrison, IA", "Shelby, IA", "Audubon, IA", "Guthrie, IA", "Adair, IA", "Cass, IA", "Pottawattamie, IA", "Fremont, IA", "Mills, IA", "Montgomery, IA", "Page, IA", "Taylor, IA", "Adams, IA", "Union, IA", "Ringgold, IA", "Decatur, IA", "Clarke, IA", "Madison, IA", "Dallas, IA", "Boone, IA", "Hamilton, IA", "Wright, IA", "Hancock, IA", "Winnebago, IA", "Worth, IA", "Cerro Gordo, IA", "Franklin, IA", "Hardin, IA", "Story, IA", "Polk, IA", "Warren, IA", "Lucas, IA", "Wayne, IA", "Appanoose, IA", "Monroe, IA", "Marion, IA", "Jasper, IA", "Marshall, IA", "Grundy, IA", "Butler, IA", "Floyd, IA", "Mitchell, IA", "Howard, IA", "Chickasaw, IA", "Bremer, IA", "Black Hawk, IA", "Tama, IA", "Poweshiek, IA", "Mahaska, IA", "Wapello, IA", "Davis, IA", "Van Buren, IA", "Jefferson, IA", "Benton, IA", "Iowa, IA", "Keokuk, IA", "Washington, IA", "Henry, IA", "Lee, IA", "Des Moines, IA", "Louisa, IA", "Muscatine, IA", "Johnson, IA", "Linn, IA", "Cedar, IA", "Jones, IA", "Buchanan, IA", "Fayette, IA", "Winneshiek, IA", "Allamakee, IA", "Clayton, IA", "Delaware, IA", "Dubuque, IA", "Jackson, IA", "Fremont, ID", "Clark, ID", "Benewah, ID", "Kootenai, ID", "Bonner, ID", "Boundary, ID", "Latah, ID", "Nez Perce, ID", "Lewis, ID", "Adams, ID", "Washington, ID", "Payette, ID", "Boise, ID", "Gem, ID", "Canyon, ID", "Ada, ID", "Elmore, ID", "Owyhee, ID", "Camas, ID", "Gooding, ID", "Jerome, ID", "Twin Falls, ID", "Cassia, ID", "Oneida, ID", "Power, ID", "Bannock, ID", "Franklin, ID", "Bear Lake, ID", "Caribou, ID", "Minidoka, ID", "Lincoln, ID", "Bonneville, ID", "Bingham, ID", "Blaine, ID", "Valley, ID", "Shoshone, ID", "Clearwater, ID", "Idaho, ID", "Custer, ID", "Lemhi, ID", "Butte, ID", "Jefferson, ID", "Madison, ID", "Teton, ID", "Vermilion, IL", "Alexander, IL", "Pulaski, IL", "Massac, IL", "Hardin, IL", "Pope, IL", "Johnson, IL", "Union, IL", "Gallatin, IL", "Saline, IL", "Williamson, IL", "Jackson, IL", "Monroe, IL", "Randolph, IL", "Perry, IL", "Franklin, IL", "Hamilton, IL", "White, IL", "Jefferson, IL", "Washington, IL", "Clinton, IL", "Bond, IL", "Marion, IL", "Wayne, IL", "Wabash, IL", "Edwards, IL", "Lawrence, IL", "Richland, IL", "Clay, IL", "Jasper, IL", "Crawford, IL", "Clark, IL", "Cumberland, IL", "Effingham, IL", "Fayette, IL", "Shelby, IL", "Jersey, IL", "Calhoun, IL", "Greene, IL", "Coles, IL", "Edgar, IL", "Douglas, IL", "Moultrie, IL", "Macon, IL", "Morgan, IL", "Scott, IL", "Pike, IL", "Brown, IL", "Adams, IL", "Hancock, IL", "McDonough, IL", "Schuyler, IL", "Cass, IL", "Menard, IL", "Mason, IL", "De Witt, IL", "Piatt, IL", "Champaign, IL", "Tazewell, IL", "Peoria, IL", "Fulton, IL", "Warren, IL", "Henderson, IL", "Mercer, IL", "Knox, IL", "Stark, IL", "Marshall, IL", "Putnam, IL", "La Salle, IL", "Bureau, IL", "Henry, IL", "Rock Island, IL", "Lee, IL", "Whiteside, IL", "Carroll, IL", "Ogle, IL", "DeKalb, IL", "Lake, IL", "McHenry, IL", "Boone, IL", "Winnebago, IL", "Stephenson, IL", "Jo Daviess, IL", "Doniphan, KS", "Brown, KS", "Stanton, KS", "Morton, KS", "Stevens, KS", "Grant, KS", "Haskell, KS", "Seward, KS", "Meade, KS", "Gray, KS", "Ford, KS", "Clark, KS", "Comanche, KS", "Kiowa, KS", "Edwards, KS", "Pratt, KS", "Barber, KS", "Harper, KS", "Kingman, KS", "Reno, KS", "Harvey, KS", "Sedgwick, KS", "Sumner, KS", "Cowley, KS", "Butler, KS", "Chautauqua, KS", "Elk, KS", "Greenwood, KS", "Montgomery, KS", "Wilson, KS", "Woodson, KS", "Labette, KS", "Neosho, KS", "Allen, KS", "Cherokee, KS", "Crawford, KS", "Bourbon, KS", "Hamilton, KS", "Greeley, KS", "Wallace, KS", "Sherman, KS", "Cheyenne, KS", "Stafford, KS", "Kearny, KS", "Finney, KS", "Hodgeman, KS", "Pawnee, KS", "Coffey, KS", "Anderson, KS", "Linn, KS", "Miami, KS", "Franklin, KS", "Osage, KS", "Lyon, KS", "Chase, KS", "Morris, KS", "Marion, KS", "McPherson, KS", "Rice, KS", "Saline, KS", "Ellsworth, KS", "Barton, KS", "Rush, KS", "Ness, KS", "Lane, KS", "Scott, KS", "Wichita, KS", "Logan, KS", "Gove, KS", "Trego, KS", "Ellis, KS", "Russell, KS", "Lincoln, KS", "Ottawa, KS", "Dickinson, KS", "Geary, KS", "Wabaunsee, KS", "Shawnee, KS", "Douglas, KS", "Johnson, KS", "Wyandotte, KS", "Leavenworth, KS", "Jefferson, KS", "Atchison, KS", "Jackson, KS", "Pottawatomie, KS", "Riley, KS", "Clay, KS", "Cloud, KS", "Mitchell, KS", "Osborne, KS", "Rooks, KS", "Graham, KS", "Sheridan, KS", "Thomas, KS", "Rawlins, KS", "Decatur, KS", "Phillips, KS", "Norton, KS", "Smith, KS", "Jewell, KS", "Republic, KS", "Washington, KS", "Marshall, KS", "Nemaha, KS", "Hickman, KY", "Fulton, KY", "Bell, KY", "Knox, KY", "Whitley, KY", "Laurel, KY", "Clay, KY", "Leslie, KY", "Harlan, KY", "Letcher, KY", "Knott, KY", "Perry, KY", "Owsley, KY", "Jackson, KY", "Estill, KY", "Lee, KY", "Breathitt, KY", "Floyd, KY", "Johnson, KY", "Magoffin, KY", "Wolfe, KY", "Powell, KY", "Clark, KY", "Montgomery, KY", "Menifee, KY", "Morgan, KY", "Elliott, KY", "Rowan, KY", "Bath, KY", "Nicholas, KY", "Fleming, KY", "Robertson, KY", "Bracken, KY", "Mason, KY", "Lewis, KY", "Boyd, KY", "Greenup, KY", "Carter, KY", "Lawrence, KY", "Martin, KY", "Pike, KY", "Harrison, KY", "Bourbon, KY", "Madison, KY", "Rockcastle, KY", "McCreary, KY", "Lincoln, KY", "Garrard, KY", "Jessamine, KY", "Fayette, KY", "Woodford, KY", "Scott, KY", "Franklin, KY", "Anderson, KY", "Mercer, KY", "Boyle, KY", "Casey, KY", "Pulaski, KY", "Wayne, KY", "Russell, KY", "Clinton, KY", "Cumberland, KY", "Adair, KY", "Taylor, KY", "Marion, KY", "Washington, KY", "Spencer, KY", "Shelby, KY", "Pendleton, KY", "Campbell, KY", "Nelson, KY", "Green, KY", "Metcalfe, KY", "Monroe, KY", "Meade, KY", "Hancock, KY", "Breckinridge, KY", "Grayson, KY", "Butler, KY", "Logan, KY", "Todd, KY", "Muhlenberg, KY", "Ohio, KY", "Daviess, KY", "McLean, KY", "Hopkins, KY", "Christian, KY", "Trigg, KY", "Lyon, KY", "Caldwell, KY", "Webster, KY", "Henderson, KY", "Union, KY", "Crittenden, KY", "Livingston, KY", "Calloway, KY", "Marshall, KY", "Graves, KY", "McCracken, KY", "Carlisle, KY", "Ballard, KY", "St, Tammany, LA", "Washington, LA", "Red River, LA", "Jackson, LA", "Winn, LA", "Caldwell, LA", "Franklin, LA", "Tensas, LA", "East Carroll, LA", "West Carroll, LA", "Morehouse, LA", "Union, LA", "De Soto, LA", "Sabine, LA", "Natchitoches, LA", "Grant, LA", "LaSalle, LA", "Catahoula, LA", "Concordia, LA", "Avoyelles, LA", "Rapides, LA", "Vernon, LA", "Evangeline, LA", "Allen, LA", "Beauregard, LA", "Jefferson Davis, LA", "Calcasieu, LA", "Cameron, LA", "Acadia, LA", "St, Landry, LA", "Pointe Coupee, LA", "West Baton Rouge, LA", "Lafayette, LA", "Vermilion, LA", "Iberia, LA", "Iberville, LA", "Assumption, LA", "St, Martin, LA", "St, Mary, LA", "Terrebonne, LA", "Lafourche, LA", "St, James, LA", "Ascension, LA", "East Baton Rouge, LA", "East Feliciana, LA", "St, Helena, LA", "Livingston, LA", "St, John the Baptist, LA", "St, Charles, LA", "Tangipahoa, LA", "Orleans, LA", "St, Bernard, LA", "Plaquemines, LA", "West Feliciana, LA", "Jefferson, LA", "Worcester, MA", "Middlesex, MA", "Nantucket, MA", "Barnstable, MA", "Suffolk, MA", "Bristol, MA", "Plymouth, MA", "Norfolk, MA", "Essex, MA", "Hampden, MA", "Hampshire, MA", "Berkshire, MA", "Franklin, MA", "Dukes, MA", "Allegany, MD", "Garrett, MD", "St Mary s, MD", "Charles, MD", "Worcester, MD", "Wicomico, MD", "Washington, MD", "Calvert, MD", "Talbot, MD", "Caroline, MD", "Kent, MD", "Baltimore City, MD", "Prince George s, MD", "Anne Arundel, MD", "Howard, MD", "Montgomery, MD", "Queen Anne s, MD", "Cecil, MD", "Harford, MD", "Baltimore County, MD", "Carroll, MD", "Frederick, MD", "Somerset, MD", "Dorchester, MD", "Aroostook, ME", "Piscataquis, ME", "Knox, ME", "Lincoln, ME", "Sagadahoc, ME", "Cumberland, ME", "York, ME", "Androscoggin, ME", "Oxford, ME", "Kennebec, ME", "Waldo, ME", "Hancock, ME", "Washington, ME", "Penobscot, ME", "Franklin, ME", "Somerset, ME", "Gogebic, MI", "Ontonagon, MI", "Monroe, MI", "Lenawee, MI", "Hillsdale, MI", "Branch, MI", "St, Joseph, MI", "Cass, MI", "Berrien, MI", "Wayne, MI", "Washtenaw, MI", "Jackson, MI", "Calhoun, MI", "Kalamazoo, MI", "Van Buren, MI", "Allegan, MI", "Barry, MI", "Eaton, MI", "Ingham, MI", "Livingston, MI", "Oakland, MI", "Macomb, MI", "St, Clair, MI", "Lapeer, MI", "Genesee, MI", "Shiawassee, MI", "Clinton, MI", "Ionia, MI", "Ottawa, MI", "Muskegon, MI", "Kent, MI", "Montcalm, MI", "Gratiot, MI", "Saginaw, MI", "Sanilac, MI", "Tuscola, MI", "Huron, MI", "Bay, MI", "Midland, MI", "Isabella, MI", "Mecosta, MI", "Newaygo, MI", "Oceana, MI", "Arenac, MI", "Gladwin, MI", "Clare, MI", "Osceola, MI", "Lake, MI", "Mason, MI", "Iosco, MI", "Ogemaw, MI", "Roscommon, MI", "Missaukee, MI", "Wexford, MI", "Manistee, MI", "Alcona, MI", "Oscoda, MI", "Crawford, MI", "Kalkaska, MI", "Grand Traverse, MI", "Benzie, MI", "Leelanau, MI", "Alpena, MI", "Montmorency, MI", "Otsego, MI", "Antrim, MI", "Charlevoix, MI", "Presque Isle, MI", "Cheboygan, MI", "Emmet, MI", "Mackinac, MI", "Chippewa, MI", "Luce, MI", "Schoolcraft, MI", "Alger, MI", "Delta, MI", "Menominee, MI", "Dickinson, MI", "Marquette, MI", "Iron, MI", "Keweenaw, MI", "Houghton, MI", "Baraga, MI", "Houston, MN", "Fillmore, MN", "Koochiching, MN", "Lake of the Woods, MN", "Roseau, MN", "Kittson, MN", "Red Lake, MN", "Pennington, MN", "Marshall, MN", "Polk, MN", "Norman, MN", "Mahnomen, MN", "Clearwater, MN", "Beltrami, MN", "Cook, MN", "Lake, MN", "Itasca, MN", "Hubbard, MN", "Cass, MN", "Wadena, MN", "Becker, MN", "Clay, MN", "Wilkin, MN", "Otter Tail, MN", "St, Louis, MN", "Carlton, MN", "Pine, MN", "Kanabec, MN", "Aitkin, MN", "Crow Wing, MN", "Morrison, MN", "Todd, MN", "Douglas, MN", "Grant, MN", "Traverse, MN", "Big Stone, MN", "Swift, MN", "Stevens, MN", "Pope, MN", "Stearns, MN", "Benton, MN", "Mille Lacs, MN", "Isanti, MN", "Chisago, MN", "Ramsey, MN", "Anoka, MN", "Sherburne, MN", "Wright, MN", "Meeker, MN", "Kandiyohi, MN", "Chippewa, MN", "Washington, MN", "Dakota, MN", "Hennepin, MN", "Scott, MN", "Carver, MN", "McLeod, MN", "Sibley, MN", "Renville, MN", "Lac qui Parle, MN", "Yellow Medicine, MN", "Lincoln, MN", "Lyon, MN", "Redwood, MN", "Brown, MN", "Nicollet, MN", "Le Sueur, MN", "Rice, MN", "Goodhue, MN", "Wabasha, MN", "Winona, MN", "Olmsted, MN", "Dodge, MN", "Steele, MN", "Waseca, MN", "Blue Earth, MN", "Watonwan, MN", "Cottonwood, MN", "Murray, MN", "Pipestone, MN", "Rock, MN", "Nobles, MN", "Jackson, MN", "Martin, MN", "Faribault, MN", "Freeborn, MN", "Mower, MN", "New Madrid, MO", "Pemiscot, MO", "Atchison, MO", "Holt, MO", "Platte, MO", "Buchanan, MO", "Andrew, MO", "Nodaway, MO", "Worth, MO", "Gentry, MO", "DeKalb, MO", "Clinton, MO", "Clay, MO", "Caldwell, MO", "Daviess, MO", "Harrison, MO", "Mercer, MO", "Grundy, MO", "Livingston, MO", "Carroll, MO", "Ray, MO", "Lafayette, MO", "Jackson, MO", "Johnson, MO", "Henry, MO", "Cass, MO", "St, Clair, MO", "Bates, MO", "Cedar, MO", "Vernon, MO", "Dade, MO", "Barton, MO", "McDonald, MO", "Barry, MO", "Polk, MO", "Stone, MO", "Taney, MO", "Christian, MO", "Hickory, MO", "Benton, MO", "Pettis, MO", "Saline, MO", "Chariton, MO", "Linn, MO", "Sullivan, MO", "Putnam, MO", "Schuyler, MO", "Adair, MO", "Macon, MO", "Randolph, MO", "Howard, MO", "Cooper, MO", "Boone, MO", "Cole, MO", "Moniteau, MO", "Morgan, MO", "Miller, MO", "Camden, MO", "Wright, MO", "Douglas, MO", "Ozark, MO", "Howell, MO", "Texas, MO", "Maries, MO", "Osage, MO", "Callaway, MO", "Monroe, MO", "Shelby, MO", "Knox, MO", "Scotland, MO", "Clark, MO", "Lewis, MO", "Marion, MO", "Ralls, MO", "Audrain, MO", "Montgomery, MO", "Pike, MO", "Lincoln, MO", "Warren, MO", "Gasconade, MO", "Dent, MO", "Shannon, MO", "Oregon, MO", "Ripley, MO", "Carter, MO", "Reynolds, MO", "Iron, MO", "Washington, MO", "St, Charles, MO", "St, Francois, MO", "Sainte Genevieve, MO", "Madison, MO", "Wayne, MO", "Butler, MO", "Dunklin, MO", "Stoddard, MO", "Bollinger, MO", "Perry, MO", "Cape Girardeau, MO", "Scott, MO", "Mississippi, MO", "Harrison, MS", "Jackson, MS", "Grenada, MS", "Yalobusha, MS", "Clay, MS", "Webster, MS", "Chickasaw, MS", "Calhoun, MS", "Pontotoc, MS", "Lee, MS", "Union, MS", "Lafayette, MS", "Tate, MS", "Panola, MS", "Quitman, MS", "Tallahatchie, MS", "Leflore, MS", "Sunflower, MS", "Humphreys, MS", "Holmes, MS", "Carroll, MS", "Montgomery, MS", "Choctaw, MS", "Oktibbeha, MS", "Lowndes, MS", "Monroe, MS", "Itawamba, MS", "Prentiss, MS", "Tishomingo, MS", "Alcorn, MS", "Tippah, MS", "Benton, MS", "Marshall, MS", "DeSoto, MS", "Tunica, MS", "Coahoma, MS", "Bolivar, MS", "Washington, MS", "Sharkey, MS", "Issaquena, MS", "Yazoo, MS", "Attala, MS", "Winston, MS", "Noxubee, MS", "Kemper, MS", "Neshoba, MS", "Leake, MS", "Madison, MS", "Jefferson, MS", "Claiborne, MS", "Copiah, MS", "Simpson, MS", "Clarke, MS", "Jones, MS", "Covington, MS", "Jefferson Davis, MS", "Lawrence, MS", "Lincoln, MS", "Franklin, MS", "Adams, MS", "Wilkinson, MS", "Amite, MS", "Pike, MS", "Walthall, MS", "Marion, MS", "Lamar, MS", "Forrest, MS", "Wayne, MS", "Greene, MS", "Perry, MS", "Stone, MS", "Pearl River, MS", "Hancock, MS", "George, MS", "Sheridan, MT", "Roosevelt, MT", "Gallatin, MT", "Madison, MT", "Broadwater, MT", "Jefferson, MT", "Silver Bow, MT", "Deer Lodge, MT", "Beaverhead, MT", "Ravalli, MT", "Granite, MT", "Lewis and Clark, MT", "Powell, MT", "Lake, MT", "Missoula, MT", "Mineral, MT", "Sanders, MT", "Lincoln, MT", "Flathead, MT", "Glacier, MT", "Liberty, MT", "Toole, MT", "Pondera, MT", "Teton, MT", "Cascade, MT", "Meagher, MT", "Park, MT", "Hill, MT", "Chouteau, MT", "Judith Basin, MT", "Wheatland, MT", "Sweet Grass, MT", "Carbon, MT", "Stillwater, MT", "Golden Valley, MT", "Fergus, MT", "Blaine, MT", "Phillips, MT", "Petroleum, MT", "Musselshell, MT", "Yellowstone, MT", "Big Horn, MT", "Treasure, MT", "Rosebud, MT", "Garfield, MT", "Daniels, MT", "Valley, MT", "McCone, MT", "Prairie, MT", "Powder River, MT", "Custer, MT", "Carter, MT", "Fallon, MT", "Wibaux, MT", "Dawson, MT", "Richland, MT", "Clay, NC", "Macon, NC", "Transylvania, NC", "Jackson, NC", "Haywood, NC", "Swain, NC", "Graham, NC", "Cherokee, NC", "Mitchell, NC", "Yancey, NC", "Madison, NC", "Buncombe, NC", "Henderson, NC", "Polk, NC", "Rutherford, NC", "McDowell, NC", "Avery, NC", "Watauga, NC", "Alexander, NC", "Ashe, NC", "Alleghany, NC", "Wilkes, NC", "Caldwell, NC", "Burke, NC", "Cleveland, NC", "Gaston, NC", "Lincoln, NC", "Catawba, NC", "Iredell, NC", "Mecklenburg, NC", "Rowan, NC", "Davie, NC", "Yadkin, NC", "Surry, NC", "Stokes, NC", "Forsyth, NC", "Davidson, NC", "Stanly, NC", "Cabarrus, NC", "Union, NC", "Anson, NC", "Rockingham, NC", "Guilford, NC", "Randolph, NC", "Montgomery, NC", "Richmond, NC", "Scotland, NC", "Caswell, NC", "Alamance, NC", "Moore, NC", "Hoke, NC", "Robeson, NC", "Columbus, NC", "Brunswick, NC", "New Hanover, NC", "Bladen, NC", "Cumberland, NC", "Chatham, NC", "Harnett, NC", "Lee, NC", "Orange, NC", "Person, NC", "Durham, NC", "Pender, NC", "Sampson, NC", "Wayne, NC", "Johnston, NC", "Wake, NC", "Granville, NC", "Vance, NC", "Warren, NC", "Franklin, NC", "Nash, NC", "Northampton, NC", "Halifax, NC", "Edgecombe, NC", "Wilson, NC", "Greene, NC", "Lenoir, NC", "Jones, NC", "Duplin, NC", "Onslow, NC", "Carteret, NC", "Pamlico, NC", "Craven, NC", "Pitt, NC", "Martin, NC", "Chowan, NC", "Hertford, NC", "Bertie, NC", "Gates, NC", "Camden, NC", "Pasquotank, NC", "Perquimans, NC", "Beaufort, NC", "Washington, NC", "Tyrrell, NC", "Currituck, NC", "Dare, NC", "Hyde, NC", "Cass, ND", "Richland, ND", "Burke, ND", "Divide, ND", "Williams, ND", "Mountrail, ND", "McKenzie, ND", "Dunn, ND", "Stark, ND", "Golden Valley, ND", "Billings, ND", "Bowman, ND", "Slope, ND", "Hettinger, ND", "Adams, ND", "Mercer, ND", "Grant, ND", "Sioux, ND", "Morton, ND", "Oliver, ND", "Renville, ND", "Ward, ND", "McLean, ND", "Bottineau, ND", "McHenry, ND", "Sheridan, ND", "Burleigh, ND", "Emmons, ND", "McIntosh, ND", "Logan, ND", "Kidder, ND", "Wells, ND", "Pierce, ND", "Rolette, ND", "Towner, ND", "Benson, ND", "Eddy, ND", "Foster, ND", "Stutsman, ND", "LaMoure, ND", "Dickey, ND", "Sargent, ND", "Ransom, ND", "Barnes, ND", "Griggs, ND", "Steele, ND", "Nelson, ND", "Ramsey, ND", "Cavalier, ND", "Pembina, ND", "Walsh, ND", "Grand Forks, ND", "Traill, ND", "Dawes, NE", "Sioux, NE", "Richardson, NE", "Pawnee, NE", "Nemaha, NE", "Johnson, NE", "Otoe, NE", "Cass, NE", "Sarpy, NE", "Douglas, NE", "Washington, NE", "Burt, NE", "Thurston, NE", "Dakota, NE", "Dixon, NE", "Wayne, NE", "Pierce, NE", "Cedar, NE", "Knox, NE", "Dodge, NE", "Colfax, NE", "Cuming, NE", "Stanton, NE", "Madison, NE", "Antelope, NE", "Boone, NE", "Platte, NE", "Saunders, NE", "Seward, NE", "Butler, NE", "Polk, NE", "York, NE", "Hamilton, NE", "Nance, NE", "Merrick, NE", "Hall, NE", "Howard, NE", "Sherman, NE", "Boyd, NE", "Holt, NE", "Valley, NE", "Greeley, NE", "Wheeler, NE", "Garfield, NE", "Loup, NE", "Rock, NE", "Keya Paha, NE", "Brown, NE", "Blaine, NE", "Custer, NE", "Buffalo, NE", "Dawson, NE", "Phelps, NE", "Kearney, NE", "Adams, NE", "Clay, NE", "Fillmore, NE", "Saline, NE", "Lancaster, NE", "Gage, NE", "Jefferson, NE", "Thayer, NE", "Nuckolls, NE", "Webster, NE", "Franklin, NE", "Harlan, NE", "Gosper, NE", "Furnas, NE", "Red Willow, NE", "Hitchcock, NE", "Dundy, NE", "Frontier, NE", "Hayes, NE", "Chase, NE", "Perkins, NE", "Lincoln, NE", "Keith, NE", "Logan, NE", "McPherson, NE", "Arthur, NE", "Thomas, NE", "Hooker, NE", "Grant, NE", "Deuel, NE", "Garden, NE", "Cheyenne, NE", "Morrill, NE", "Kimball, NE", "Banner, NE", "Scotts Bluff, NE", "Box Butte, NE", "Cherry, NE", "Sheridan, NE", "Coos, NH", "Grafton, NH", "Strafford, NH", "Rockingham, NH", "Cheshire, NH", "Sullivan, NH", "Hillsborough, NH", "Belknap, NH", "Merrimack, NH", "Carroll, NH", "Monmouth, NJ", "Ocean, NJ", "Essex, NJ", "Union, NJ", "Hudson, NJ", "Bergen, NJ", "Middlesex, NJ", "Somerset, NJ", "Morris, NJ", "Passaic, NJ", "Sussex, NJ", "Warren, NJ", "Hunterdon, NJ", "Mercer, NJ", "Camden, NJ", "Gloucester, NJ", "Salem, NJ", "Cumberland, NJ", "Cape May, NJ", "Atlantic, NJ", "Burlington, NJ", "Lea, NM", "Eddy, NM", "Los Alamos, NM", "Rio Arriba, NM", "San Juan, NM", "McKinley, NM", "Bernalillo, NM", "Valencia, NM", "Cibola, NM", "Sierra, NM", "Socorro, NM", "Catron, NM", "Grant, NM", "Hidalgo, NM", "Luna, NM", "Dona Ana, NM", "Taos, NM", "Santa Fe, NM", "Otero, NM", "Torrance, NM", "Lincoln, NM", "Colfax, NM", "Mora, NM", "Union, NM", "Harding, NM", "San Miguel, NM", "Quay, NM", "Guadalupe, NM", "De Baca, NM", "Curry, NM", "Roosevelt, NM", "Chaves, NM", "Sandoval, NM", "Elko, NV", "White Pine, NV", "Clark, NV", "Lincoln, NV", "Esmeralda, NV", "Nye, NV", "Eureka, NV", "Lander, NV", "Mineral, NV", "Douglas, NV", "Carson City, NV", "Lyon, NV", "Churchill, NV", "Pershing, NV", "Storey, NV", "Washoe, NV", "Humboldt, NV", "Richmond, NY", "Clinton, NY", "Essex, NY", "Orleans, NY", "Genesee, NY", "Wyoming, NY", "Livingston, NY", "Schenectady, NY", "Montgomery, NY", "Fulton, NY", "Seneca, NY", "Ontario, NY", "Yates, NY", "Schuyler, NY", "Tompkins, NY", "Cayuga, NY", "Onondaga, NY", "Cortland, NY", "Chenango, NY", "Madison, NY", "Oneida, NY", "Lewis, NY", "Herkimer, NY", "Otsego, NY", "Schoharie, NY", "Albany, NY", "Saratoga, NY", "Warren, NY", "Hamilton, NY", "Franklin, NY", "St, Lawrence, NY", "Jefferson, NY", "Oswego, NY", "Wayne, NY", "Monroe, NY", "Niagara, NY", "Erie, NY", "Chautauqua, NY", "Cattaraugus, NY", "Allegany, NY", "Steuben, NY", "Chemung, NY", "Tioga, NY", "Broome, NY", "Delaware, NY", "Sullivan, NY", "Greene, NY", "New York, NY", "Ulster, NY", "Bronx, NY", "Kings, NY", "Rockland, NY", "Nassau, NY", "Orange, NY", "Queens, NY", "Suffolk, NY", "Westchester, NY", "Putnam, NY", "Dutchess, NY", "Columbia, NY", "Rensselaer, NY", "Washington, NY", "Trumbull, OH", "Ashtabula, OH", "Lawrence, OH", "Scioto, OH", "Adams, OH", "Pike, OH", "Jackson, OH", "Gallia, OH", "Meigs, OH", "Vinton, OH", "Washington, OH", "Athens, OH", "Hocking, OH", "Ross, OH", "Highland, OH", "Brown, OH", "Clermont, OH", "Preble, OH", "Montgomery, OH", "Perry, OH", "Monroe, OH", "Noble, OH", "Morgan, OH", "Muskingum, OH", "Belmont, OH", "Harrison, OH", "Guernsey, OH", "Coshocton, OH", "Clark, OH", "Champaign, OH", "Miami, OH", "Shelby, OH", "Darke, OH", "Mercer, OH", "Auglaize, OH", "Logan, OH", "Marion, OH", "Morrow, OH", "Knox, OH", "Holmes, OH", "Tuscarawas, OH", "Carroll, OH", "Jefferson, OH", "Columbiana, OH", "Stark, OH", "Wayne, OH", "Ashland, OH", "Richland, OH", "Crawford, OH", "Wyandot, OH", "Hardin, OH", "Allen, OH", "Hancock, OH", "Putnam, OH", "Van Wert, OH", "Mahoning, OH", "Portage, OH", "Summit, OH", "Medina, OH", "Huron, OH", "Seneca, OH", "Sandusky, OH", "Wood, OH", "Henry, OH", "Paulding, OH", "Defiance, OH", "Geauga, OH", "Lake, OH", "Cuyahoga, OH", "Lorain, OH", "Erie, OH", "Ottawa, OH", "Lucas, OH", "Fulton, OH", "Williams, OH", "Texas, OK", "Cimarron, OK", "Delaware, OK", "Adair, OK", "Cherokee, OK", "Sequoyah, OK", "Haskell, OK", "Le Flore, OK", "Latimer, OK", "Pittsburg, OK", "Coal, OK", "Atoka, OK", "Pushmataha, OK", "McCurtain, OK", "Choctaw, OK", "Bryan, OK", "Marshall, OK", "Johnston, OK", "Pontotoc, OK", "Jefferson, OK", "Stephens, OK", "Cotton, OK", "Comanche, OK", "Tillman, OK", "Jackson, OK", "Greer, OK", "Kiowa, OK", "Harmon, OK", "Muskogee, OK", "McIntosh, OK", "Hughes, OK", "Seminole, OK", "Pottawatomie, OK", "Grady, OK", "Caddo, OK", "Canadian, OK", "Okfuskee, OK", "Okmulgee, OK", "Nowata, OK", "Washington, OK", "Payne, OK", "Logan, OK", "Kingfisher, OK", "Blaine, OK", "Washita, OK", "Beckham, OK", "Custer, OK", "Dewey, OK", "Roger Mills, OK", "Ellis, OK", "Woodward, OK", "Major, OK", "Garfield, OK", "Noble, OK", "Pawnee, OK", "Osage, OK", "Kay, OK", "Grant, OK", "Alfalfa, OK", "Woods, OK", "Harper, OK", "Beaver, OK", "Clatsop, OR", "Columbia, OR", "Curry, OR", "Coos, OR", "Josephine, OR", "Jackson, OR", "Douglas, OR", "Klamath, OR", "Lake, OR", "Harney, OR", "Malheur, OR", "Baker, OR", "Wallowa, OR", "Union, OR", "Grant, OR", "Wheeler, OR", "Crook, OR", "Deschutes, OR", "Jefferson, OR", "Linn, OR", "Lane, OR", "Benton, OR", "Lincoln, OR", "Polk, OR", "Yamhill, OR", "Marion, OR", "Clackamas, OR", "Umatilla, OR", "Morrow, OR", "Gilliam, OR", "Sherman, OR", "Wasco, OR", "Hood River, OR", "Multnomah, OR", "Washington, OR", "Tillamook, OR", "Kent, RI", "Providence, RI", "Bristol, RI", "Newport, RI", "Washington, RI", "Philadelphia, PA", "Bucks, PA", "Greene, PA", "Fayette, PA", "Washington, PA", "Allegheny, PA", "Beaver, PA", "Lawrence, PA", "Butler, PA", "Armstrong, PA", "Clarion, PA", "Forest, PA", "Venango, PA", "Mercer, PA", "Crawford, PA", "Erie, PA", "Westmoreland, PA", "Indiana, PA", "Jefferson, PA", "Warren, PA", "McKean, PA", "Cameron, PA", "Elk, PA", "Clearfield, PA", "Blair, PA", "Cambria, PA", "Somerset, PA", "Bedford, PA", "Fulton, PA", "Huntingdon, PA", "Franklin, PA", "Mifflin, PA", "Potter, PA", "Clinton, PA", "Centre, PA", "Union, PA", "Montour, PA", "Tioga, PA", "Lycoming, PA", "Wyoming, PA", "Sullivan, PA", "Columbia, PA", "Northumberland, PA", "Snyder, PA", "Juniata, PA", "Perry, PA", "Cumberland, PA", "Adams, PA", "York, PA", "Dauphin, PA", "Lebanon, PA", "Lancaster, PA", "Berks, PA", "Schuylkill, PA", "Carbon, PA", "Luzerne, PA", "Lackawanna, PA", "Bradford, PA", "Susquehanna, PA", "Wayne, PA", "Pike, PA", "Monroe, PA", "Northampton, PA", "Lehigh, PA", "Delaware, PA", "Montgomery, PA", "Chester, PA", "Pickens, SC", "Oconee, SC", "Beaufort, SC", "Hampton, SC", "Jasper, SC", "Marion, SC", "Dillon, SC", "Horry, SC", "Charleston, SC", "Dorchester, SC", "Berkeley, SC", "Georgetown, SC", "Clarendon, SC", "Williamsburg, SC", "Florence, SC", "Marlboro, SC", "Darlington, SC", "Lee, SC", "Kershaw, SC", "Sumter, SC", "Calhoun, SC", "Colleton, SC", "Allendale, SC", "Bamberg, SC", "Orangeburg, SC", "Barnwell, SC", "Aiken, SC", "Lexington, SC", "Richland, SC", "Fairfield, SC", "Newberry, SC", "Saluda, SC", "Edgefield, SC", "McCormick, SC", "Greenwood, SC", "Laurens, SC", "Abbeville, SC", "Anderson, SC", "Union, SC", "Chesterfield, SC", "Lancaster, SC", "Chester, SC", "York, SC", "Cherokee, SC", "Spartanburg, SC", "Greenville, SC", "Perkins, SD", "Harding, SD", "Custer, SD", "Fall River, SD", "Oglala Lakota, SD", "Bennett, SD", "Mellette, SD", "Todd, SD", "Tripp, SD", "Gregory, SD", "Brule, SD", "Aurora, SD", "Davison, SD", "Douglas, SD", "Charles Mix, SD", "Bon Homme, SD", "Yankton, SD", "Hutchinson, SD", "Hanson, SD", "McCook, SD", "Turner, SD", "Clay, SD", "Union, SD", "Lincoln, SD", "Minnehaha, SD", "Lyman, SD", "Jones, SD", "Jackson, SD", "Stanley, SD", "Haakon, SD", "Pennington, SD", "Lawrence, SD", "Butte, SD", "Meade, SD", "Ziebach, SD", "Dewey, SD", "Walworth, SD", "Potter, SD", "Sully, SD", "Hughes, SD", "Buffalo, SD", "Jerauld, SD", "Sanborn, SD", "Miner, SD", "Lake, SD", "Moody, SD", "Brookings, SD", "Hamlin, SD", "Kingsbury, SD", "Beadle, SD", "Hyde, SD", "Hand, SD", "Edmunds, SD", "Faulk, SD", "Spink, SD", "Clark, SD", "Codington, SD", "Deuel, SD", "Grant, SD", "Day, SD", "Roberts, SD", "Marshall, SD", "Brown, SD", "McPherson, SD", "Campbell, SD", "Corson, SD", "Sullivan, TN", "Johnson, TN", "McNairy, TN", "Chester, TN", "Hardeman, TN", "Crockett, TN", "Gibson, TN", "Carroll, TN", "Weakley, TN", "Obion, TN", "Lake, TN", "Dyer, TN", "Lauderdale, TN", "Tipton, TN", "Henry, TN", "Hardin, TN", "Lawrence, TN", "Wayne, TN", "Houston, TN", "Stewart, TN", "Montgomery, TN", "Marshall, TN", "Giles, TN", "Maury, TN", "Lincoln, TN", "Moore, TN", "Bedford, TN", "Rutherford, TN", "Wilson, TN", "Cannon, TN", "Coffee, TN", "Franklin, TN", "Marion, TN", "Sequatchie, TN", "Grundy, TN", "Van Buren, TN", "Warren, TN", "White, TN", "DeKalb, TN", "Putnam, TN", "Trousdale, TN", "Macon, TN", "Smith, TN", "Jackson, TN", "Overton, TN", "Clay, TN", "Pickett, TN", "Bledsoe, TN", "Fentress, TN", "Cumberland, TN", "Rhea, TN", "Meigs, TN", "Hamilton, TN", "Bradley, TN", "Polk, TN", "Monroe, TN", "McMinn, TN", "Roane, TN", "Morgan, TN", "Scott, TN", "Campbell, TN", "Anderson, TN", "Loudon, TN", "Blount, TN", "Sevier, TN", "Knox, TN", "Union, TN", "Claiborne, TN", "Hancock, TN", "Grainger, TN", "Hamblen, TN", "Jefferson, TN", "Cocke, TN", "Unicoi, TN", "Hawkins, TN", "Greene, TN", "Washington, TN", "Carter, TN", "Red River, TX", "Crosby, TX", "Lubbock, TX", "Hockley, TX", "Cochran, TX", "Floyd, TX", "Hale, TX", "Lamb, TX", "Bailey, TX", "Briscoe, TX", "Swisher, TX", "Castro, TX", "Parmer, TX", "Armstrong, TX", "Randall, TX", "Deaf Smith, TX", "Carson, TX", "Potter, TX", "Oldham, TX", "Hutchinson, TX", "Moore, TX", "Hartley, TX", "Hansford, TX", "Sherman, TX", "Dallam, TX", "Hudspeth, TX", "El Paso, TX", "Lynn, TX", "Terry, TX", "Yoakum, TX", "Dawson, TX", "Gaines, TX", "Martin, TX", "Andrews, TX", "Midland, TX", "Ector, TX", "Crane, TX", "Presidio, TX", "Culberson, TX", "Ward, TX", "Winkler, TX", "Loving, TX", "Reeves, TX", "Jeff Davis, TX", "Brewster, TX", "Terrell, TX", "Pecos, TX", "Upton, TX", "Reagan, TX", "Glasscock, TX", "Howard, TX", "Borden, TX", "Garza, TX", "Scurry, TX", "Mitchell, TX", "Sterling, TX", "Irion, TX", "Crockett, TX", "Val Verde, TX", "Zapata, TX", "Jim Hogg, TX", "Starr, TX", "Willacy, TX", "Hidalgo, TX", "Brooks, TX", "Kenedy, TX", "Kleberg, TX", "Jim Wells, TX", "Nueces, TX", "San Patricio, TX", "Calhoun, TX", "Refugio, TX", "Bee, TX", "Live Oak, TX", "McMullen, TX", "Duval, TX", "Webb, TX", "La Salle, TX", "Dimmit, TX", "Maverick, TX", "Kinney, TX", "Edwards, TX", "Real, TX", "Uvalde, TX", "Zavala, TX", "Frio, TX", "Goliad, TX", "Victoria, TX", "DeWitt, TX", "Kerr, TX", "Gillespie, TX", "Lavaca, TX", "Jackson, TX", "Matagorda, TX", "Wharton, TX", "Colorado, TX", "Fayette, TX", "Lee, TX", "Austin, TX", "Washington, TX", "Hardin, TX", "Liberty, TX", "Jefferson, TX", "Orange, TX", "Kent, TX", "Kimble, TX", "Sutton, TX", "Schleicher, TX", "Menard, TX", "Mason, TX", "Llano, TX", "Burleson, TX", "San Jacinto, TX", "Milam, TX", "Lampasas, TX", "Mills, TX", "San Saba, TX", "McCulloch, TX", "Concho, TX", "Tom Green, TX", "Coke, TX", "Runnels, TX", "Coleman, TX", "Brown, TX", "Callahan, TX", "Taylor, TX", "Nolan, TX", "Fisher, TX", "Jones, TX", "Shackelford, TX", "Houston, TX", "Trinity, TX", "Polk, TX", "Newton, TX", "Jasper, TX", "Tyler, TX", "Angelina, TX", "Sabine, TX", "San Augustine, TX", "Shelby, TX", "Nacogdoches, TX", "Panola, TX", "Rusk, TX", "Camp, TX", "Marion, TX", "Cass, TX", "Throckmorton, TX", "Haskell, TX", "Stonewall, TX", "Dickens, TX", "Motley, TX", "Hall, TX", "Donley, TX", "Gray, TX", "Roberts, TX", "Ochiltree, TX", "Lipscomb, TX", "Hemphill, TX", "Wheeler, TX", "Collingsworth, TX", "Childress, TX", "Cottle, TX", "King, TX", "Knox, TX", "Foard, TX", "Hardeman, TX", "Archer, TX", "Baylor, TX", "Wilbarger, TX", "Wichita, TX", "Lamar, TX", "Aransas, TX", "Cameron, TX", "San Juan, UT", "Garfield, UT", "Morgan, UT", "Davis, UT", "Weber, UT", "Rich, UT", "Cache, UT", "Box Elder, UT", "Daggett, UT", "Salt Lake, UT", "Summit, UT", "Wasatch, UT", "Utah, UT", "Tooele, UT", "Juab, UT", "Millard, UT", "Sevier, UT", "Sanpete, UT", "Carbon, UT", "Duchesne, UT", "Uintah, UT", "Grand, UT", "Emery, UT", "Wayne, UT", "Piute, UT", "Beaver, UT", "Iron, UT", "Washington, UT", "Kane, UT", "Prince William, VA", "Manassas Park, VA", "Accomack, VA", "Northampton, VA", "Buchanan, VA", "Tazewell, VA", "Smyth, VA", "Bristol, VA", "Washington, VA", "Russell, VA", "Norton, VA", "Wise, VA", "Dickenson, VA", "Scott, VA", "Lee, VA", "Bland, VA", "Grayson, VA", "Galax, VA", "Wythe, VA", "Giles, VA", "Radford, VA", "Pulaski, VA", "Falls Church, VA", "Arlington, VA", "Carroll, VA", "Henry, VA", "Patrick, VA", "Floyd, VA", "Montgomery, VA", "Salem, VA", "Franklin Co,  VA", "Bedford Co,  VA", "Roanoke Co,  VA", "Alleghany, VA", "Craig, VA", "Botetourt, VA", "Amherst, VA", "Rockbridge, VA", "Bath, VA", "Highland, VA", "Greene, VA", "Rockingham, VA", "Augusta, VA", "Nelson, VA", "Buckingham, VA", "Appomattox, VA", "Campbell, VA", "Halifax, VA", "Pittsylvania, VA", "Martinsville, VA", "Danville, VA", "Lynchburg, VA", "Roanoke, VA", "Buena Vista, VA", "Covington, VA", "Lexington, VA", "Waynesboro, VA", "Staunton, VA", "Charlottesville, VA", "Harrisonburg, VA", "Albemarle, VA", "Fluvanna, VA", "Cumberland, VA", "Prince Edward, VA", "Charlotte, VA", "Mecklenburg, VA", "Colonial Heights, VA", "Lunenburg, VA", "Hopewell, VA", "Alexandria, VA", "Page, VA", "Shenandoah, VA", "Clarke, VA", "Winchester, VA", "Frederick, VA", "Warren, VA", "Rappahannock, VA", "Madison, VA", "Louisa, VA", "Goochland, VA", "Orange, VA", "Amelia, VA", "Powhatan, VA", "Nottoway, VA", "Brunswick, VA", "Dinwiddie, VA", "Emporia, VA", "Greensville, VA", "Poquoson, VA", "Franklin, VA", "Southampton, VA", "Hampton, VA", "Williamsburg, VA", "Newport News, VA", "Portsmouth, VA", "York, VA", "James City, VA", "Surry, VA", "Sussex, VA", "Prince George, VA", "Petersburg, VA", "Henrico, VA", "Chesterfield, VA", "Charles City, VA", "New Kent, VA", "Richmond, VA", "Fredericksburg, VA", "Fairfax, VA", "Manassas, VA", "Loudoun, VA", "Fauquier, VA", "Culpeper, VA", "Spotsylvania, VA", "Hanover, VA", "King William, VA", "King and Queen, VA", "Middlesex, VA", "Gloucester, VA", "Lancaster, VA", "Richmond Co,  VA", "Essex, VA", "Caroline, VA", "Fairfax Co,  VA", "Stafford, VA", "King George, VA", "Westmoreland, VA", "Northumberland, VA", "Mathews, VA", "Norfolk, VA", "Isle of Wight, VA", "Suffolk, VA", "Chesapeake, VA", "Virginia Beach, VA", "Essex, VT", "Orleans, VT", "Bennington, VT", "Grand Isle, VT", "Washington, VT", "Caledonia, VT", "Lamoille, VT", "Franklin, VT", "Chittenden, VT", "Addison, VT", "Rutland, VT", "Windham, VT", "Windsor, VT", "Orange, VT", "Okanogan, WA", "Whatcom, WA", "Wahkiakum, WA", "Asotin, WA", "Garfield, WA", "Columbia, WA", "Walla Walla, WA", "Franklin, WA", "Whitman, WA", "Spokane, WA", "Pend Oreille, WA", "Stevens, WA", "Lincoln, WA", "Adams, WA", "Grant, WA", "Benton, WA", "Klickitat, WA", "Clark, WA", "Skamania, WA", "Cowlitz, WA", "Pacific, WA", "Lewis, WA", "Thurston, WA", "Pierce, WA", "Yakima, WA", "Kittitas, WA", "Douglas, WA", "Ferry, WA", "San Juan, WA", "Island, WA", "Snohomish, WA", "King, WA", "Kitsap, WA", "Mason, WA", "Grays Harbor, WA", "Jefferson, WA", "Clallam, WA", "Skagit, WA", "Chelan, WA", "Door, WI", "Kewaunee, WI", "Pierce, WI", "Pepin, WI", "Buffalo, WI", "Trempealeau, WI", "Jackson, WI", "Eau Claire, WI", "Clark, WI", "Chippewa, WI", "Dunn, WI", "St, Croix, WI", "Polk, WI", "Barron, WI", "Rusk, WI", "Taylor, WI", "Price, WI", "Sawyer, WI", "Washburn, WI", "Burnett, WI", "Douglas, WI", "Bayfield, WI", "Ashland, WI", "Iron, WI", "Vilas, WI", "Oneida, WI", "Lincoln, WI", "Langlade, WI", "Marathon, WI", "Wood, WI", "Adams, WI", "Juneau, WI", "Monroe, WI", "La Crosse, WI", "Vernon, WI", "Sauk, WI", "Richland, WI", "Crawford, WI", "Iowa, WI", "Grant, WI", "Lafayette, WI", "Green, WI", "Marquette, WI", "Portage, WI", "Waupaca, WI", "Waushara, WI", "Green Lake, WI", "Columbia, WI", "Dane, WI", "Rock, WI", "Kenosha, WI", "Racine, WI", "Walworth, WI", "Dodge, WI", "Jefferson, WI", "Waukesha, WI", "Milwaukee, WI", "Ozaukee, WI", "Washington, WI", "Winnebago, WI", "Fond du Lac, WI", "Sheboygan, WI", "Calumet, WI", "Manitowoc, WI", "Brown, WI", "Outagamie, WI", "Shawano, WI", "Menominee, WI", "Oconto, WI", "Forest, WI", "Florence, WI", "Marinette, WI", "Berkeley, WV", "Jefferson, WV", "Cabell, WV", "Mingo, WV", "Wayne, WV", "Wyoming, WV", "Logan, WV", "McDowell, WV", "Mercer, WV", "Monroe, WV", "Summers, WV", "Raleigh, WV", "Boone, WV", "Lincoln, WV", "Putnam, WV", "Mason, WV", "Jackson, WV", "Kanawha, WV", "Fayette, WV", "Clay, WV", "Roane, WV", "Calhoun, WV", "Wirt, WV", "Wood, WV", "Pleasants, WV", "Ritchie, WV", "Gilmer, WV", "Braxton, WV", "Nicholas, WV", "Greenbrier, WV", "Webster, WV", "Upshur, WV", "Lewis, WV", "Doddridge, WV", "Tyler, WV", "Harrison, WV", "Hancock, WV", "Brooke, WV", "Ohio, WV", "Marshall, WV", "Wetzel, WV", "Marion, WV", "Barbour, WV", "Taylor, WV", "Monongalia, WV", "Pocahontas, WV", "Preston, WV", "Randolph, WV", "Pendleton, WV", "Tucker, WV", "Grant, WV", "Hardy, WV", "Mineral, WV", "Hampshire, WV", "Morgan, WV", "Laramie, WY", "Goshen, WY", "Teton, WY", "Lincoln, WY", "Uinta, WY", "Sublette, WY", "Park, WY", "Sweetwater, WY", "Fremont, WY", "Hot Springs, WY", "Washakie, WY", "Big Horn, WY", "Sheridan, WY", "Johnson, WY", "Natrona, WY", "Carbon, WY", "Albany, WY", "Weston, WY", "Crook, WY", "Campbell, WY", "Converse, WY", "Niobrara, WY", "Platte, WY", "Secret County, tag me on Twitter with screenshot if found >:)"]
    const randomCounty = counties[(Math.random() * counties.length) | 0]
    message.reply(randomCounty);
  }

  // // constitution

  // //first amendment
  // if (message.content === 'b!firstamendment') {
  //   message.channel.send('Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.');
  // }

  // //second amendment
  // if (message.content === 'b!secondamendment') {
  //   message.channel.send('A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.')
  // }

  // //third amendment
  // if (message.content === 'b!thirdamendment') {
  //   message.channel.send('No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.')
  // }

  // //fourth amendment
  // if (message.content === 'b!fourthamendment') {
  //   message.channel.send('The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.')
  // }


  // //fifth amendment
  // if (message.content === 'b!fifthamendment') {
  //   message.channel.send('No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.')
  // }

  // //sixth amendment
  // if (message.content === 'b!sixthamendment') {
  //   message.channel.send('In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.')
  // }

  // //seventh amendment
  // if (message.content === 'b!seventhamendment') {
  //   message.channel.send('In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.')
  // }

  // //eight amendment
  // if (message.content === 'b!eighthamendment') {
  //   message.channel.send('Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.')
  // }

  // //ninth amendment
  // if (message.content === 'b!ninthamendment') {
  //   message.channel.send('The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.')
  // }

  // //tenth amendemnt
  // if (message.content === 'b!tenthamendment') {
  //   message.channel.send('The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.')
  // }

  // //eleventh amendment
  // if (message.content === 'b!eleventhamendment') {
  //   message.channel.send('The Judicial power of the United States shall not be construed to extend to any suit in law or equity, commenced or prosecuted against one of the United States by Citizens of another State, or by Citizens or Subjects of any Foreign State.')
  // }

  // //twelveth amendment
  // if (message.content === 'b!twelfthamendment1') {
  //   message.channel.send('The Electors shall meet in their respective states and vote by ballot for President and Vice-President, one of whom, at least, shall not be an inhabitant of the same state with themselves; they shall name in their ballots the person voted for as President, and in distinct ballots the person voted for as Vice-President, and they shall make distinct lists of all persons voted for as President, and of all persons voted for as Vice-President, and of the number of votes for each, which lists they shall sign and certify, and transmit sealed to the seat of the government of the United States, directed to the President of the Senate;-The President of the Senate shall, in the presence of the Senate and House of Representatives, open all the certificates and the votes shall then be counted;-The person having the greatest Number of votes for President, shall be the President, if such number be a majority of the whole number of Electors appointed;')
  // }

  // if (message.content === 'b!twelfthamendment2') {
  //   message.channel.send('and if no person have such majority, then from the persons having the highest numbers not exceeding three on the list of those voted for as President, the House of Representatives shall choose immediately, by ballot, the President. But in choosing the President, the votes shall be taken by states, the representation from each state having one vote; a quorum for this purpose shall consist of a member or members from two-thirds of the states, and a majority of all the states shall be necessary to a choice. And if the House of Representatives shall not choose a President whenever the right of choice shall devolve upon them, before the fourth day of March next following, then the Vice-President shall act as President, as in the case of the death or other constitutional disability of the President-The person having the greatest number of votes as Vice-President, shall be the Vice-President, if such number be a majority of the whole number of Electors appointed, and if no person have a majority, then from the two highest numbers on the list, the Senate shall choose the Vice-President; a quorum for the purpose shall consist of two-thirds of the whole number of Senators, and a majority of the whole number shall be necessary to a choice. But no person constitutionally ineligible to the office of President shall be eligible to that of Vice-President of the United States.')
  // }

  // apple cloth command
  if (message.content === 'b!applecloth') {
    const clothEmbed = new MessageEmbed()
      .setTitle("Apple Cloth")
      .setColor("#0774e9")
      .setDescription('You can buy the Apple Polishing Cloth at Apple.com for only $19')
    message.channel.send({ embeds: [clothEmbed] })
  }

  // ban command
  if (message.content.startsWith("b!ban")) {
    if (member.permissions.has("BAN_MEMBERS")) {
      var member = message.mentions.members.first();
      member.ban().then((member) => {
        message.reply(":wave: " + member.displayName + " has been banned!");
      }).catch(() => {
        message.channel.send("Access Denied");
      });
    }
  }
})

client.on('messageDelete', async message => {
	// Ignore direct messages
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	// Since there's only 1 audit log entry in this collection, grab the first one
	const deletionLog = fetchedLogs.entries.first();

	// Perform a coherence check to make sure that there's *something*
	if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

	// Now grab the user object of the person who deleted the message
	// Also grab the target of this action to double-check things
	const { executor, target } = deletionLog;

	// Update the output with a bit more information
	// Also run a check to make sure that the log returned was for the same author's message
	if (target.id === message.author.id) {
		console.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
	} else {
		console.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
	}
});

// client.on("guildMemberAdd", (member) => {
//   const exampleEmbed = new MessageEmbed()
//     .setTitle("Member has joined!")
//     .setColor("#0774e9")
//     .setDescription(`\n📥 <@${member.id}> has joined the server. There are now \`${member.guild.memberCount}\` in the server`)

//   const channel = member.guild.channels.cache.get("962585859671072859")
//   if (!channel) console.log("no channel in this server with that")
//   else channel.send({ embeds: [exampleEmbed] })
// });

// client.on("guildMemberRemove", (member) => {
//   const exampleEmbed = new MessageEmbed()
//     .setTitle("Member has left!")
//     .setColor("#0774e9")
//     .setDescription(`\n📥 <@${member.id}> has left the server. There are now \`${member.guild.memberCount}\` in the server`)

//   const channel = member.guild.channels.cache.get(["962585859671072859", "845033543004061738"])
//   if (!channel) console.log(`${member.nickname} has left the server`)
//   else channel.send({ embeds: [exampleEmbed] })
// });




// const exampleEmbed = (
// 	temp,
// 	maxTemp,
// 	minTemp,
// 	pressure,
// 	humidity,
// 	wind,
// 	cloudness,
// 	icon,
// 	author,
// 	profile,
// 	cityName,
// 	country
// ) =>
// 	new MessageEmbed()
// 		.setColor('#0099ff')
// 		.setAuthor(`Hello, ${author}`, profile)
// 		.setTitle(`There is ${temp}\u00B0 C in ${cityName}, ${country}`)
// 		.addField(`Maximum Temperature:`, `${maxTemp}\u00B0 C`, true)
// 		.addField(`Minimum Temperature:`, `${minTemp}\u00B0 C`, true)
// 		.addField(`Humidity:`, `${humidity} %`, true)
// 		.addField(`Wind Speed:`, `${wind} m/s`, true)
// 		.addField(`Pressure:`, `${pressure} hpa`, true)
// 		.addField(`Cloudiness:`, `${cloudness}`, true)
// 		.setThumbnail(`http://openweathermap.org/img/w/${icon}.png`)



      
//     else if (command === 'w' || 'weather') {
//         axios
//             .get(
//                 `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${apitoken}`
//             )
//             .then(response => {
//                 let apiData = response;
//                 let currentTemp = Math.ceil(apiData.data.main.temp)
//                 let maxTemp = apiData.data.main.temp_max;
//                 let minTemp = apiData.data.main.temp_min;
//                 let humidity = apiData.data.main.humidity;
//                 let wind = apiData.data.wind.speed;
//                 let author = message.author.username
//                 let profile = message.author.displayAvatarURL
//                 let icon = apiData.data.weather[0].icon
//                 let cityName = args
//                 let country = apiData.data.sys.country
//                 let pressure = apiData.data.main.pressure;
//                 let cloudness = apiData.data.weather[0].description;
//                 message.channel.send(exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName, country));
//             }).catch(err => {
//                 message.reply(`Enter a vailid city name`)
//             })
//     }
// }
// )

// client.login(token);

client.login(process.env.TOKEN)