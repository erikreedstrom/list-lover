var Chance = require('chance').Chance;

// Common
var commonAdjective = ["Accidental", "Accusing", "Amazing", "Automatic", "Aztec", "Black", "Bound", "Broken", "Birthday", "Bangkok", "Bad", "Big", "Black", "Bloodstained", "Blue", "Cold", "Closing", "Cold", "Conquering", "Corrupt", "Cosmic", "Consuming", "Closed", "Clutching", "Crystal", "Dead", "Damned", "Dancing", "Dark", "Daylight", "Dead-Alive", "Dear", "Delicate", "Destroying", "Different", "Dimensional", "Eastern", "Edible", "English", "Eternal", "Evening", "Eight", "Eighth", "Flaming", "Fallen", "Final", "Flapping", "Forever", "Forty", "Frozen", "First", "Four", "Fourth", "Five", "Fifth", "Golden", "Gray", "Great", "Gray", "Great", "Green", "Grey", "Hairy", "Hidden", "Infernal", "Invisible", "Imaginary", "Imitation", "Iron", "Lost", "Last", "Lead", "Living", "Logical", "Mortal", "Mysterious", "Mad", "Midnight", "Missing", "Moonlit", "Muddy", "My", "Northern", "New", "Next", "Noble", "Nomadic", "Nine", "Ninth", "One", "Orange", "Path", "Purple", "Perfect", "Poor", "Poisoned", "Priceless", "Red", "Reckless", "Radiant", "Raw", "Scarlet", "Secret", "Seventh", "Southern", "Sealed", "Savage", "Second", "Shattered", "Silent", "Silver", "Six", "Spare", "Special", "Strange", "Steel", "Supreme", "Sixth", "Seven", "Seventh", "Third", "Tragic", "Twenty", "Two", "Three", "Ten", "Tenth", "Underwater", "Unknown", "Ultimate", "Unrequited", "Urban", "Uncommon", "Unfaithful", "Unseen", "Variable", "Velvet", "Violet", "Western", "Wicked", "Weird", "Wayward", "Weaving", "Whispering", "Yellow"];
var commonName = ["Alexander", "Angelo", "Barbara", "Caesar", "Cleopatra", "Charles", "David", "Dorothy", "Da Vinci", "Elizabeth", "Einstein", "Hercules", "Hamlet", "Hitler", "Houdini", "James", "Jeeves", "Jennifer", "Jesus", "John", "Joseph", "Jenny Everywhere", "Joan of Arc", "Johnny", "Linda", "Long John Silver", "Margaret", "Maria", "Mary", "Michael", "Marquis de Sade", "Mozart", "Napoleon", "Patricia", "Robin Hood", "Oona", "Satan", "Susan", "Shakespeare", "Thog", "Thomas", "William"];
var commonNoun = ["Adventure", "Affair", "Africa", "Age", "Air", "Angel", "Ape", "Apocalypse", "Armageddon", "Ash", "Avenger", "Awakening", "Basket", "Bat", "Beard", "Beast", "Bird", "Birthday Present", "Bishop", "Black", "Blade", "Blood", "Body", "Bomb", "Book", "Bridge", "Blog", "Blogger", "Blonde", "Bloodline", "Bookkeeper", "Bones", "Boy", "Brain", "Bridge", "Bronze", "Brother", "Bullet", "Bus", "Butterfly", "Cabin", "Cabinet", "Call", "Canary", "Cape", "Card", "Carnival", "Case", "Cave", "Cavern", "Cell", "Chair", "Chance", "Chicago", "Child", "Childhood", "Children", "Circle", "Circus", "City", "Claim", "Club", "Cloven Hoof", "Coast", "Cold", "Comb", "Compendium", "Cove", "Creek", "Crow", "Cry", "Cup", "Cupid", "Cylinder", "Daughter", "Dance", "Dancer", "Dawn", "Daylight", "Day", "Deception", "Departed", "Desert", "Detective", "Discovery", "Doctor", "Devil", "Dog", "Dome", "Door", "Drapes", "Dream", "Dust", "Dusk", "Dweller", "Earth", "East", "Eater", "Escape", "Evening", "Edge", "Elysium", "Eons", "Eternity", "Escape", "Evolution", "Exile", "Express", "Evil", "Eye", "Face", "Fall", "Fate", "Fire", "Floor", "Fog", "Fangs", "Farm House", "Fear", "Feast", "Feet", "Fiend", "Fire", "Fish", "Flame", "Floor", "Flower", "Fog", "Folk", "Force", "Fox", "Game", "Girl", "Glass", "Guard", "Gambit", "Garden", "Gentleman", "Girl", "Gateway", "Glory", "Glass", "God", "Gold", "Grace", "Guard", "Guardian", "Guest", "Gun", "Gunfighter", "Gunsmoke", "Hall", "Hand", "Heart", "Heirloom", "House", "Hamlet", "Hare", "Hate", "Haunt", "Health", "Heaven", "Heist", "Hero", "Hieroglyph", "Highway", "Hollywood", "Home", "Honor", "Horde", "Hour", "Human", "Iron", "Idol", "Inheritance", "Inferno", "Intention", "Insect", "Island", "Jackal", "Jailer", "Jungle", "Jars", "Jailer", "Jewels", "Joan of Arc", "Journey", "Kiss", "Key", "Kitchen", "Killer", "Land", "Law", "Legion", "Legionnaire", "Light", "Legacy", "Letters", "Life", "Lightning", "Link", "Lord", "Man", "Master", "Midnight", "Moon", "Moonlight", "Manhattan", "Manor", "Manuscript", "March", "Mask", "Memory", "Men", "Mesa", "Metronome", "Mind", "Minute", "Mirror", "Mistletoe", "Modern", "Mountain", "Murder", "Music-Box", "Mystery", "Night", "North", "Nail", "Name", "Neighbor", "Night", "North", "Nothing", "Nowhere", "Opportunity", "Options", "Orchid", "Patch", "Parlour", "Place", "Plant", "Present", "Pain", "Paradox", "Party", "Patch", "Path", "Patrol", "People", "Pet", "Pilgrim", "Piper", "Pirate", "Plan", "Player", "Power", "Prague", "Priestess", "Protest", "Punch", "Rabbit", "Rat", "Reply", "Return", "Revenge", "Revolt", "Revolution", "Rider", "Ring", "River", "Room", "Ruler", "Rule", "Sea", "Secret", "Scar", "Sky", "Smith", "Snake", "Soul", "South", "Steel", "Storm", "Sun", "Salvage", "Seal", "Season", "Shell", "Silence", "Sip", "Skunk", "Slab", "Sleep", "Sleeper", "Soldiers", "Song", "South", "Spawn", "Step", "Stranger", "Studio", "Study", "Suicide", "Survivor", "Tale", "Thing", "Thunder", "Time", "Touch", "Tartarus", "They", "Thief", "Ticket", "Tiger", "Toad", "Tommy", "Tower", "Trade", "Trail", "Train", "Treasures", "Tree", "Us", "Vengeance", "Voice", "Valley", "Vial", "War", "Wave", "Well", "West", "Will", "Wish", "Wolf", "Wolfhound", "World", "Wall", "Watcher", "Water", "Wax", "We", "Web", "What Waits", "Wind", "Window", "Wings", "Witch", "Woodcarver", "Woman", "Women", "Woods", "Worm", "Wrath", "Wretched"];

// Fantasy
var fantasyName = ["Achilles", "Aladdin", "Ali Baba", "Alice", "Baron Munchausen", "Bluebeard", "Boudicia", "Cinderella", "Captain Hook", "King Arthur", "Lancelot", "Merlin"];
var fantasyAdjective = ["Fae", "Magic"];
var fantasyNoun = ["Abbey", "Amulet", "Atlantis", "Blade", "Blight", "Castle", "Court", "Crown", "Curse", "Duke", "Demon", "Dragon", "Emperor", "Empire", "Faerie", "Goblet", "Goblins", "Kingdom", "King", "Leviathan", "Magic", "Phoenix", "Princess", "Paladin", "Queen", "Quest", "Sword", "Sorcery", "Tsar", "Warlord"];

// Horror
var horrorName = ["Cthulhu", "Dracula", "Faust", "Frankenstein", "Hastur", "Herbert West", "Lovecraft"];
var horrorNoun = ["Abbey", "Amulet", "Asylum", "Beast", "Bite", "Blade", "Blight", "Chain", "Cemetery", "Corpse", "Casket", "Curse", "Death", "Dead", "Demon", "Doom", "Fear", "Fiend", "Gallows", "Ghost", "Ghoul", "Grave", "Graveyard", "Hell", "Horror", "Incubus", "Madman", "Madness", "Monster", "Nightmare", "Phantom", "Prey", "Reaper", "Shadow", "Skull", "Succubus", "Scream", "Terror", "Tomb", "Tombstone", "Vampire", "Zombie"];
var horrorAdjective = ["Dead", "Dark", "Darkness", "Gothic", "Grim", "Grisly", "Hideous", "Haunting", "Phantom", "Undead", "Vampiric"];

// Finance
var financeName = ["Koch Bros.", "Donald Trump", "The Wall Street Journal", "Warren Buffet", "Janet Yellen", "Li Ka-shing", "Louis Bacon", "Sallie Krawcheck", "Julian Marchese" ];
var financeAdjective = ["Bullish", "Bearish", "Desperate", "Exciting", "Responsible", "Global", "Commercial", "Expertise", "Team" ];
var financeNoun = ["Bank", "Quantitative-Easing", "Money", "Financing", "Future", "London", "Instrument", "Tools", "Interest Rate", "Economist"];

// Steam
var steamName = ["Allan Quartermain", "Captain Nemo", "Doctor Jeckyl", "Frankenstein", "Queen Victoria", "Sherlock Holmes", "Tarzan", "The Artful Dodger", "Tom Sawyer", "Tesla", "Zorro"];
var steamAdjective = ["Brass", "Clockwork", "Copper", "Electric", "Extraordinary", "Equation", "Ether", "Gilded", "Galvanic", "Impossible", "Martian", "Mechanical", "Sky", "Steampunk", "Steam-Powered", "Tarnished", "Victorian"];
var steamNoun = ["Affair", "Airship", "Automaton", "Atlantis", "Captain", "Caravan", "Castle", "Clocktower", "Cog", "Corset", "Cowboy", "Damnation", "Detective", "Device", "Dragoon", "Duke", "Gentleman", "Gentlewoman", "Emperor", "Engine", "Engineer", "Ether", "Express", "Gear", "Horizon", "Legacy", "London", "Machine", "Magistrate", "Mars", "Nautilus", "Plague", "Progress", "Queen", "Sorcery", "Steam", "Timepiece", "Tinkerer", "Zeppelin"];

// Additional grammar
var preposition = ["Above", "Across", "After", "At", "Beyond", "For", "From", "In", "Into", "On", "Out Of", "With", "Without", "Under"];
var stateVerb = ["Is", "Was", "Will Be", "Was Not", "Is Not", "Will Not Be"];
var verbed = ["Accused", "Burned", "Borrowed", "Built", "Closed", "Conquered", "Came", "Chained", "Changed", "Chased", "Died", "Dragged", "Dreamed", "Embraced", "Forgot", "Fell", "Fought", "Had", "Hung", "Killed", "Lived", "Laughed", "Lied", "Murdered", "Owned", "Revealed", "Rose", "Ran", "Rode", "Stopped", "Saved", "Seduced", "Spoke", "Stole", "Saw", "Screamed", "Tricked", "Weaved", "Whispered", "Went", "Wept"];
var verbing = ["Accusing", "Burning", "Borrowing", "Building", "Closing", "Conquering", "Coming", "Chaining", "Changing", "Chasing", "Dragging", "Dreaming", "Dying", "Embracing", "Forgetting", "Falling", "Fighting", "Living", "Laughing", "Lying", "Murdering", "Owning", "Revealing", "Rising", "Running", "Riding", "Stopping", "Saving", "Seducing", "Stealing", "Seeing", "Screaming", "Weaving", "Whispering", "Weeping"];

function nameStructure(names, noun, adjective, seed) {
  var chance = new Chance(seed || Math.random);

  var adj1 = chance.pickone(adjective);
  var adj2 = chance.pickone(adjective);
  var noun1 = chance.pickone(noun);
  var noun2 = chance.pickone(noun);
  var prep = chance.pickone(preposition);
  var name = chance.pickone(names);
  var obj = chance.pickone(verbed);
  var subj = chance.pickone(verbing);
  var state = chance.pickone(stateVerb);

  // Randomize position
  var i = Math.floor(chance.random() * 41);
  switch (i) {
    case 0:
      return (adj1 + " " + noun1);
    case 1:
      return (adj1 + " " + noun1 + "s");
    case 2:
      return ("The " + adj1 + " " + noun1);
    case 3:
      return ("The " + adj1 + " " + noun1 + "s");
    case 4:
      return ("The " + adj1 + " " + noun1 + "'s " + noun2);
    case 5:
      return ("The " + adj1 + " " + subj + " " + prep + " the " +noun1 + " " + noun2);
    case 6:
      return ("The " + adj1 + " " + noun1 + " " + prep + " the " + noun2);
    case 7:
      return (name + ", the " + noun1 + " " + noun2);
    case 8:
      return (adj1 + " " + noun1 + " " + prep + " the " + adj2 + " " + noun2);
    case 9:
      return ("The " + noun1);
    case 10:
      return (noun1 + "born");
    case 11:
      return ("The " + noun1 + " " + noun2);
    case 12:
      return (noun1 + " " + noun2);
    case 13:
      return (noun1 + " and " + noun2);
    case 14:
      return (adj1 + " " + noun1 + " " + obj);
    case 15:
      return (subj + " " + "the " + noun1 + " and the " + noun2);
    case 16:
      return (noun1 + " and the " + adj1 + " " + noun2);
    case 17:
      return ("The " + noun1 + " and the " + adj1 + " " + noun2);
    case 18:
      return (noun1 + "less");
    case 19:
      return (noun1 + "'s " + adj1 + " " + noun2);
    case 20:
      return (adj1 + " " + noun1 + "'s " + noun2);
    case 21:
      return (noun1 + "s and " + noun2 + "s ");
    case 22:
      return (adj1 + " " + noun1 + " of " + noun2);
    case 23:
      return (noun1 + " of " + adj1 + " " + noun2);
    case 24:
      return (noun1 + " of the " + noun2);
    case 25:
      return ("The " + noun1 + " of " + noun2);
    case 26:
      return ("The " + noun1 + " of " + name);
    case 27:
      return (noun1 + " " + prep + " the " + noun2);
    case 28:
      return ("The " + noun1 + " " + prep + " the " + noun2);
    case 29:
      return ("The " + noun1 + ", " + adj1 + noun2);
    case 30:
      return ("The " + adj1 + " " + noun1 + " " + noun2);
    case 31:
      return ("The " + noun1 + "-" + noun2);
    case 32:
      return ("The " + adj1 + " " + noun1 + "'s " + noun2);
    case 33:
      return ("The " + noun1 + " the " + noun2 + " " + obj);
    case 34:
      return ("One " + noun1 + " " + obj);
    case 35:
      return (noun1 + " " + subj);
    case 36:
      return (prep + " the " + noun1);
    case 37:
      return (subj + " " + prep + " the " + noun1 + " and the " + noun2);
    case 38:
      return (prep + " the " + adj1 + " " + noun1);
    case 39:
      return ("The " + obj + " " + noun1);
    case 40:
      return ("The " + subj + " " + noun1);
    case 41:
      return ("The " + noun1 + " " + state + " " + adj1);
  }
}

function getNames(genre) {
  var names = commonName;
  switch(genre) {
    case 'fantasy':
      return names.concat(fantasyName);
    case 'horror':
      return names.concat(horrorName);
    case 'finance':
      return names.concat(financeName);
    case 'steampunk':
      return  names.concat(steamName);
  }
}

function getNouns(genre) {
  var noun = commonNoun;
  switch(genre) {
    case 'fantasy':
      return noun.concat(fantasyNoun);
    case 'horror':
      return noun.concat(horrorNoun);
    case 'finance':
      return noun.concat(financeNoun);
    case 'steampunk':
      return noun.concat(steamNoun);
  }
}

function getAdjectives(genre) {
  var adjective = commonAdjective;
  switch(genre) {
    case 'fantasy':
      return adjective.concat(fantasyAdjective);     
    case 'horror':
      return adjective.concat(horrorAdjective);
    case 'finance':
      return adjective.concat(financeAdjective);
    case 'steampunk':
      return adjective.concat(steamAdjective);
  }
}

function randomTitle(genre, seed) {
  var nouns = getNouns(genre);
  var names = getNames(genre);
  var adj = getAdjectives(genre);

  return nameStructure(names, nouns, adj, seed);
}

module.exports = randomTitle;
