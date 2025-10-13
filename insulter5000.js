const outputArea = document.getElementById('output-area')
const currentCommandSpan = document.getElementById('current-command')
const petTypes = [
    "Dog",              //Why there are no static types!
    "Cat", 
    "Hampster",
    "Fish", 
    "Other"
]

const ageGroup = [
    "Little",           //10 years or younger 
    "PainToDealWith",   //11-17 years old
    "Dinosaur"          //18-💀 years old
]

const height = [
    "Short",            
    "Tall",             
]

const insultData = {
    // Insults based on Illiterate state
    literacy: {
        true: "You illiterate dummy, can't even capitalize your name...",
        false: "Nerd... capitalized your name! Where did they teach you that, grade school, ~ha."  
    },
    
    // Insults based on Age Group (Key)
    age: {
        "Dinosaur": { //Over 18
            description: "a prehistoric life form. Dinosaur, init? So how was it like seeing the Big Bang? I heard it was a lovely firework show. Were you there to witness the birth of Elizabeth the Second? ",
            height: {
                "Tall": "After so many years, no wonder you're so lengthy... So how is the weather there, meat? Or are you too tall to the point of reaching the vacuum of space? You don't need a telescope to see the moon, you just need to look up at yourself.",
                "Short": "So old yet so short. Haven't you eaten your vegetables, eh? When you order an ice cream cone, is it called a soft-serve miniature? You're like a little pocket person—great for when I need something from the bottom shelf of life."
            },
            pet: {
                "None": "Which you don't have. ¬Ha. Of course you don't, meat! Too busy with your old-people thing to keep one, init. You're an old boring person like all of the others. Well... is there really anything for me to say, meat? Oh! Pardon me, my dearest {userName}",
                "Dog": "Oh, a dog, init? Does it ever mistake your wrinkled hands for a chew toy? I bet the poor thing thinks you're just a really slow-moving, highly-fragile piece of furniture. Bet it pulls you over on your walks, doesn't it?",
                "Cat": "A cat? Yeah, figures. They only like you because you're warm and sit still for hours, like a fossilized heat pad. It's probably plotting to trip you on the stairs. It judges you, meat! Just like I do.",
                "Hampster": "A hamster? You know you're old when your pet is a tiny, fast-moving thing that's a metaphor for how slowly time passes for you now. I bet you forget you own it, then scream when you see it running in the wheel, eh?",
                "Fish": "A fish. The only pet more boring than an old person. Is it a good listener, meat? It's probably just wondering why its tank is full of dust from the 1950s. At least it can't complain about your stories, init.",
                "Other": "Something else? I bet it's some exotic thing that's even older than you are. It probably comes with its own walking stick and a story about the good old days. Get a life, meat, stop collecting relics!"
            }
        },
        "PainToDealWith": { //Teens
            description: "Oh, a teenager, init? The human equivalent of a Wi-Fi signal that keeps cutting out. I bet your whole personality is just the last five TikToks you watched. Go on, roll your eyes at me, you lumpy bundle of hormones.",
            height: {
                "Tall": "You're all arms and legs, like a spider that hasn't finished loading. I bet you trip over air. Enjoy hitting your head on everything, including your own ridiculously overinflated ego. Go on, grow into your feet, meat!",
                "Short": "Short, init? Looks like your growth spurt got lost on the way to your brain. You're a human fire-hydrant. I bet you have to stand on your wallet to reach the counter. You're just a pocket-sized problem."
            },
            pet: {
                "None": "No pet? Of course not. You're too busy staring at your phone to care for anything. You can barely feed yourself, let alone a creature that doesn't talk back. Your only pet is probably the dust bunny collection under your unmade bed.",
                "Dog": "A dog. I bet it's the only creature in your life that hasn't blocked you on social media. Does your poor dog have to listen to your awful music, init? It’s probably only loyal because you’re the one holding the snacks.",
                "Cat": "A cat. Perfect. You're both moody and act like you're too cool for everyone. I bet it ignores you until it needs something, which is a perfect reflection of your relationship with your parents. Selfish little thing, innit? Just like you.",
                "Hampster": "A hamster. That is tragically small for someone with such a massive sense of self-importance. You've got a pet with a lifespan shorter than your last attention span. I bet you even forget to clean its tiny little cage, you irresponsible little twerp.",
                "Fish": "A fish. The only thing you can keep alive, because it doesn't require conversation. It's about as interesting as your last school project. I bet the fish thinks you're just a big, clumsy shadow that keeps dropping flakes.",
                "Other": "Something else? I bet it's something weird and gross that you keep in a tank in your room. Trying to be edgy, init? Get a real hobby, mate. Stop trying to make your life look like a bad documentary."
            }
        },
        "Little": { //Children
            description: "A little one, init? You look like you just escaped from a colouring book. Are you here to sell me a poorly-drawn picture? Go on, have a tantrum. You're like a human noise-maker set to maximum volume.",
            height: {
                "Tall": "Tall for your age, eh? You're going to peak early, meat. You're like a miniature skyscraper that hasn't figured out where the windows go. I bet you have to duck under the 'Under 10s' sign. Stop hogging the air!",
                "Short": "Short? Bless your little cotton socks. You're a walking tripping hazard. I bet you get dizzy trying to see over the breakfast table. You're not short, you're vertically challenged to the point of being a garden gnome."
            },
            pet: {
                "None": "No pet? Of course not. Your parents probably realized that you're enough trouble without adding a creature that sheds. You're too busy demanding things to look after anything, init. You're the pet, meat!",
                "Dog": "A dog. The only reason you have it is so you have something to blame for the messes you make. I bet that poor dog runs every time you try to dress it up. Does it ever try to bury you in the garden?",
                "Cat": "A cat. I bet you squeeze it too hard. It’s probably only sticking around until it's old enough to run away and live a life without your sticky little fingers. Does it ever scratch your face when you’re not looking?",
                "Hampster": "A hamster. I bet you try to put little hats on it. It’s a furball of fear because you keep shaking its cage. You're going to lose it, meat, and then you’ll be crying to your mummy.",
                "Fish": "A fish. You're the one who keeps tapping the glass, init? It’s probably a nervous wreck. I bet you think the fish remembers your birthday. Get a grip, you tiny delusional thing.",
                "Other": "Something else? I bet it’s a terrifying lizard or a noisy parrot. Trying to compensate for something, meat? Does your little pet think you're just a really loud, colourful snack?"
            }
        }
    }
}

const listEndings = [  //I...I am Sorry think there is a better way of making this. 
    "Firth Ending",
    "Bad Ending",
    "Good Ending",
    "Furry Ending",
    "Amphibian Ending",
    "Hopeless Ending",
    "Tragic Ending",
    "Clueless Ending",
    "Awful Ending",
    "Little Ending",
    "Wet Ending",
    "Lamborghini Ending",
    "True Ending",
    "Running Out of Ending",
    "4 Squared Ending",
    "End of Ending",
    "Hospitalistion Ending",
    "Debt Collectors Ending",
    "Pret(Ending)",
    "Choke on a Tail Ending",
    "Pointless Ending",
    "What is Tr(Ending)",
    "Fishing With M(Ending)",
    "L(Ending) a Leg",
    "The Ending (of Your Life)",
    "Veganism Ending",
    "Corporate Slave Ending",
    "Unrelated Ending",
    "BeFriEnding",
    "School Isn't Ending",
    "Clearly an Ending",
    "R(End)er(ing)",
    "Brain Power Descending",
    "L-I/A-T/H-S/P-Fish",
    "L-I/A-T/H-S/P-Other",
    "L-N/A-T/H-T/P-None",
    "L-N/A-T/H-T/P-Dog", 
    "L-N/A-T/H-T/P-Cat",
    "L-N/A-T/H-T/P-Hamster",
    "L-N/A-T/H-T/P-Fish",
    "L-N/A-T/H-T/P-Other",
    "L-N/A-T/H-S/P-None",
    "L-N/A-T/H-S/P-Dog",
    "L-N/A-T/H-S/P-Cat",
    "L-N/A-T/H-S/P-Hamster",
    "L-N/A-T/H-S/P-Fish",
    "L-N/A-T/H-S/P-Other",
    "L-I/A-L/H-T/P-None",
    "L-I/A-L/H-T/P-Dog",
    "L-I/A-L/H-T/P-Cat",
    "L-I/A-L/H-T/P-Hamster",
    "L-I/A-L/H-T/P-Fish",
    "L-I/A-L/H-T/P-Other",
    "L-I/A-L/H-S/P-None",
    "L-I/A-L/H-S/P-Dog",
    "L-I/A-L/H-S/P-Cat",
    "L-I/A-L/H-S/P-Hamster",
    "L-I/A-L/H-S/P-Fish",
    "L-I/A-L/H-S/P-Other",
    "L-N/A-L/H-T/P-None",
    "L-N/A-L/H-T/P-Dog",
    "L-N/A-L/H-T/P-Cat",
    "L-N/A-L/H-T/P-Hamster",
    "L-N/A-L/H-T/P-Fish",
    "L-N/A-L/H-T/P-Other",
    "L-N/A-L/H-S/P-None",
    "L-N/A-L/H-S/P-Dog",
    "L-N/A-L/H-S/P-Cat",
    "L-N/A-L/H-S/P-Hamster",
    "L-N/A-L/H-S/P-Fish",
    "L-N/A-L/H-S/P-Other",
]

let endingID = 0
let ending = listEndings[0]
let endingsUnlocked = new Set()

let userAge = 0
let userName = ""
let userHeight = null
let userPetType = null
let userHasPet = false
let userAgeGroup = null
let userIlliterate = false
let userMath4Student = false
let toStartOrNotToStart = false

let currentCommand = ''
let commandHistory = []
let historyIndex = -1 // -1 means viewing current input


let isAwaitingCustomInput = false
let resolveCustomInput = null // Promise resolve function
let inputType = 'command' // 'command', 'prompt', or 'confirm'
let confirmOptions = ['y', 'n']


/*
 Appends a line of text to the terminal output.
 'text' The text to display.
 'className' for styling (e.g., 'error').
 */
function printLine(text, className = '') {
    const line = document.createElement('div')
    line.className = 'py-0.5 ' + className
    line.innerHTML = text 
    outputArea.appendChild(line)
    outputArea.scrollTop = outputArea.scrollHeight
}

// Updates the display of the current input buffer.
function updateInputDisplay() {
    currentCommandSpan.textContent = currentCommand
}


function awaitCustomInput(message, type) {
    return new Promise(resolve => {
        isAwaitingCustomInput = true
        resolveCustomInput = resolve
        inputType = type
        currentCommand = ''
        
        if (type === 'prompt') {
            printLine(`<span class="focus-text">[SYSTEM PROMPT]</span> ${message}`, 'focus-text')
        } else if (type === 'confirm') {
            printLine(`<span class="focus-text">[SYSTEM CONFIRM]</span> ${message} (y/n)`, 'focus-text')
        }
        
        updateInputDisplay()
    })
}

// Expose custom functions in a more accessible way
const commandPrompt = (message) => awaitCustomInput(message, 'prompt')
const commandConfirm = (message) => awaitCustomInput(message, 'confirm')



// Executes the main terminal command or resolves custom input.
function handleExecute() {
    const input = currentCommand.trim()
    commandHistory.unshift(input)
    currentCommand = ''
    historyIndex = -1 // Reset

    if (isAwaitingCustomInput) {
        // Handle custom input resolution
        isAwaitingCustomInput = false
        
        if (inputType === 'confirm') {
            const normalizedInput = input.toLowerCase()
            // Print input *before* validation/recursion
            printLine(`> ${input}`) 
            if (confirmOptions.includes(normalizedInput)) {
                resolveCustomInput(normalizedInput === 'y')
            } else {
                isAwaitingCustomInput = true 
                printLine('Invalid input. Please enter only "y" or "n".', 'error')
            }
        } 

        else if (inputType === 'prompt') {
            printLine(`> ${input}`)
            resolveCustomInput(input)
        }
        
        if (!isAwaitingCustomInput) {
            inputType = 'command'
        }

    } else {
        // Handle regular command execution
        // Using modern prompt prefix
        printLine(`user@app-sim:~$ ${input}`)
        executeCommand(input.toLowerCase())
    }

    updateInputDisplay()
}

// handling known commands. 
function executeCommand(command) {
    const parts = command.split(' ')
    const cmd = parts[0]

    switch (cmd) {
        case 'help':
            printLine('Available Commands:')
            printLine('  <span class="highlight">start</span> - Start the Insulter.')
            printLine('  <span class="highlight">clear</span> - Clears the terminal history.')
            printLine('  <span class="highlight">webfetch</span> - Print out the Title.')
            printLine('  <span class="highlight">help</span> - Shows this list.')
            break
        
        case 'start':
            runApp()
            break

        case 'clear':
            outputArea.innerHTML = ''
            printLine('Terminal cleared. Type "help" for commands.')
            break

        case 'webfetch':
            webfetch()
            break
        
        case '':
            // Do nothing for empty command
            break

        default:
            printLine(`'${cmd}' is not recognized as an internal or external command.`, 'error')
            break
    }
}


// --- Keyboard Event Handling ---

document.addEventListener('keydown', (e) => {
    const key = e.key

    if (key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {

        // Regular character input
        currentCommand += key
        updateInputDisplay()
        e.preventDefault()
    } else if (key === 'Backspace') {

        // Backspace
        currentCommand = currentCommand.slice(0, -1)
        updateInputDisplay()
        e.preventDefault()
    } else if (key === 'Enter') {

        // Enter key to execute or resolve input
        handleExecute()
        e.preventDefault()
    } else if (key === 'ArrowUp' && commandHistory.length > 0) {

        // Navigate command history up
        historyIndex = Math.min(historyIndex + 1, commandHistory.length - 1)
        currentCommand = commandHistory[historyIndex] || ''
        updateInputDisplay()
        e.preventDefault()
    } else if (key === 'ArrowDown' && historyIndex > -1) {
        
        // Navigate command history down
        historyIndex = Math.max(historyIndex - 1, -1)
        currentCommand = (historyIndex === -1) ? '' : commandHistory[historyIndex]
        updateInputDisplay()
        e.preventDefault()
    }
})

function webfetch() {
    printLine(' /$$$$$$                               /$$   /$$                         ', 'title')
    printLine('|_  $$_/                              | $$  | $$                         ', 'title')
    printLine('  | $$   /$$$$$$$   /$$$$$$$ /$$   /$$| $$ /$$$$$$    /$$$$$$   /$$$$$$  ', 'title')
    printLine('  | $$  | $$__  $$ /$$_____/| $$  | $$| $$|_  $$_/   /$$__  $$ /$$__  $$ ', 'title')
    printLine('  | $$  | $$  | $$|  $$$$$$ | $$  | $$| $$  | $$    | $$$$$$$$| $$  |__/ ', 'title')
    printLine('  | $$  | $$  | $$ |____  $$| $$  | $$| $$  | $$ /$$| $$_____/| $$       ', 'title')
    printLine(' /$$$$$$| $$  | $$ /$$$$$$$/|  $$$$$$/| $$  |  $$$$/|  $$$$$$$| $$       ', 'title')
    printLine('|______/|__/  |__/|_______/  |______/ |__/   |___/   |_______/|__/       ', 'title')
    printLine('    ')
    printLine('             /$$$$$$      /$$$$$$ ', 'title')
    printLine('            /$$$_  $$    /$$__  $$', 'title')
    printLine(' /$$    /$$| $$$$| $$   |__/  | $$', 'title')
    printLine('|  $$  /$$/| $$ $$ $$     /$$$$$$/', 'title')
    printLine(' |  $$/$$/ | $$| $$$$    /$$____/ ', 'title')
    printLine('  |  $$$/  | $$ | $$$   | $$      ', 'title')
    printLine('   |  $/   |  $$$$$$//$$| $$$$$$$$', 'title')
    printLine('    |_/     |______/|__/|________/', 'title')        

                                                                                               
                                                                                               

}

// Ensure the terminal always receives focus when clicked
document.getElementById('terminal').addEventListener('click', () => {
    document.body.focus()
})



// --- Initialization ---

window.onload = () => {
    // Focus the document body to immediately enable keyboard input
    document.body.focus()
    webfetch()
    printLine('Welcome, user. Type "help" for a list of available commands.')
    printLine('')
}


function isInteger(value) {
    return value % 1 === 0
}


async function gettingBasicInfo() {

    while (true) {
        userName = await commandPrompt('What is your name?')

        if (isNaN(userName) && userName !== "") {
            break
        }
        else {
            printLine('That not a name, meat.', 'error')
        }
    }

    if (userName !== userName.toUpperCase()) { //Cheking if the name is spelled with a upper case
        userIlliterate = true
    } else {
        userIlliterate = false
    }

    userMath4Student = false        
    while (true) {
        let ageInput = await commandPrompt('How old are you?')
        userAge = Number(ageInput)

        if (!isNaN(userAge) && ageInput.trim() !== "") {
            break
        } else {
            printLine('That not a number, meat.', 'error')
            userMath4Student = true
        }
    }

    if (userAge <= 10) {
        userAgeGroup = ageGroup[0]
    } 
    if (userAge > 10 && userAge <= 17) {
        userAgeGroup = ageGroup[1]
    }
    if (userAge > 17) {
        userAgeGroup = ageGroup[2]
    }

    return userAge, userName, userAgeGroup
}


async function gettingHeight() {

    while (true) {
        let heightInput = await commandPrompt('Are you: \n' + height.map((TS, i) => `${i + 1}: ${TS}`).join('\n'))
        // Okay this one needs an explonations: Question, new line, list though the array: array number(i+1, cuz it starts at zero):[pet]. new line.

        userHeight = Number(heightInput)

        if (!isNaN(userHeight) && userHeight >= 1 && userHeight <= 2  && heightInput.trim() !== "" && isInteger(userHeight)) {
            if  (userHeight == 1) {
                userHeight = "Short"
                break
            }
            else {
                userHeight = "Tall"
                break
            }

        } else {
            printLine('Meat, That is not an option. Try again, meat.', 'error')
            userMath4Student = true
        }
    }
    return userHeight
}


async function gettingPet() {
    userHasPet = await commandConfirm("Do have a pet?")
    if (userHasPet == true) {
        while (true) {
            let petInput = await commandPrompt("What pet do you have \n" + petTypes.map((pet, i) => `${i + 1}: ${pet}`).join("\n"))
            let petIndex = Number(petInput) 

            if (!isNaN(petIndex) && petIndex >= 1 && petIndex <= petTypes.length && petInput.trim() !== "" && isInteger(petIndex)) {

                userPetType = petTypes[petIndex - 1] 
                return userPetType
            } else {
                printLine('Meat, That is not an option. Try again, meat.', 'error')
                userMath4Student = true
            }
        }
    }
    userPetType = "None" 
    return userPetType
}


function findingEndings() { //hard function had to put my smart hat for this!!! わわわあああ！やば、これを作るには考えなければならなかった。
    //Функция кодирует сложную комбинацию пользовательских данных в одно число, которое соответствует уникальной концовке истории/сценария.
    /*
    Maths: (weighted positional numeral system)
    let: 
    A = Radix for Age Group
    H = Radix for Height
    P = Radix for Pet State (P = PetTypes + None)
    L = 2
    
    iL = Literacy Index [0 or 1]
    iA = Age Group Index [0 to A-1]
    iH = Height Index [0 to H-1]
    iP = Pet Index [0 to P-1]

    Suppose weight for iH is the radix of the least significant variable (Pet State).
    W_H = P 
    
    Suppose Weight for iA is the product of the radices of all less significant variables (Height * Pet State).
    W_A = H * W_H
    
    Suppose Weight for iL is the product of the radices of all less significant variables (Age Group * Height * Pet State).
    W_L = A * W_A

    Thus endingID = (iL * W_L) + (iA * W_A) + (iH * W_H) + (iP * 1)
    */
    const ageGroupCount = ageGroup.length
    const heightCount = height.length
    const petStateCount = petTypes.length + 1

    const illiterateIndex = userIlliterate ? 0 : 1

    const ageGroupListIndex = ageGroup.indexOf(userAgeGroup)
    const ageGroupIndex = ageGroupCount - 1 - ageGroupListIndex

    const heightIndex = heightCount - 1 - height.indexOf(userHeight)

    let petTypeIndex
    if (userPetType === "None") {
        petTypeIndex = 0
    } else {
        petTypeIndex = petTypes.indexOf(userPetType) + 1
    }

    const endingsPerAgeGroupPerLiteracy = heightCount * petStateCount // 12
    const endingsPerLiteracy = ageGroupCount * endingsPerAgeGroupPerLiteracy // 36

    endingID = illiterateIndex * endingsPerLiteracy 
             + ageGroupIndex * endingsPerAgeGroupPerLiteracy 
             + heightIndex * petStateCount 
             + petTypeIndex

    ending = listEndings[endingID]

    return ending
}


async function makingInsult() {
    toStartOrNotToStart = await commandConfirm("Do you want start the generations of the insult")

    if (toStartOrNotToStart == true) {
        const ageGroupData = insultData.age[userAgeGroup]

        const literate = insultData.literacy[userIlliterate]
        const ageInsult = ageGroupData.description
        const heightInsult = ageGroupData.height[userHeight]
        const petInsult = ageGroupData.pet[userPetType].replace('{userName}', userName)


        printLine(paragraphTemplate(userName, literate, ageInsult, heightInsult, userName, petInsult))
    }
}


function paragraphTemplate(userName, literate, ageInsult, heightInsult, userName, petInsult) {
    let endingNumber = endingID + 1
    const templates = [
        "Sub meat, or rather " + userName + "! So... " + literate + " Maybe I should call you " + ageInsult + heightInsult + " Enough about you, " + userName + ". Let's talk about your pet (˵¬ᴗ¬˵): " + petInsult + "\nAre you still alive there, meat? Well done, meat. You got ending "  + endingNumber + "# " + ending, //72

        "Listen up, meat! You're lucky you even get my attention, " + userName + ". anyway what fist on my list." + literate + " Anyway, based on your looks, you're " + heightInsult + " And don't get me started on your age, you're " + ageInsult + " But the real dirt is your pet (˵¬ᴗ¬˵) " + petInsult + "\nSeriously, still here? Impressive for a meat-bag like you. You got ending " + endingNumber + "# " + ending,

        "Oh, look who it is. Hello, meat! Or should I say, " + userName + "? Let's just address the basics: " + ageInsult + " I guess that explains why you're " + heightInsult + " And let's not forget your intellect: " + literate + " Now, tell me about your little friend, your pet (˵¬ᴗ¬˵), " + petInsult + "\nGo on, meat, take a bow. You survived. For now. You got ending " + endingNumber + "# " + ending,
        
        "Right, let's get this over with, " + userName + ". You're a walking disaster of a life form: " + ageInsult + " Which probably explains why you're also " + heightInsult + " And you can barely string a sentence together: " + literate + " Now, let's talk about your poor pet (˵¬ᴗ¬˵). I bet it hates you just as much as I do: " + petInsult + "\nAnother day, another failure. You got ending " + endingNumber + "# " + ending,
        
        "Hark! It's the grand entrance of " + userName + ", the meat. Let's start with your terrible grammar: " + literate + " Your body's no better, init. You're " + heightInsult + " And of course, you're tragically old or just tragically young: " + ageInsult + " The only thing sadder than you is your pet, meat. Show me the creature (˵¬ᴗ¬˵)! " + petInsult + "\nGet out of here before I insult you again, meat. You got ending " + endingNumber + "# " + ending,

        "Processing data on 'meat' with username " + userName + ". File Integrity Check: FAILED. Reason: " + literate + " Age Category: " + ageInsult + " Height Index: " + heightInsult + " Now loading the 'Pathetic Pet' subsection (˵¬ᴗ¬˵): " + petInsult + "\nError. The data is too depressing to continue. You got ending " + endingNumber + "# " + ending,

        "Sub, " + userName + ". Get a load of this meat. " + literate + " Pathetic. Your age is a joke: " + ageInsult + " And your height's no better: " + heightInsult + " Talk to me about your pet (˵¬ᴗ¬˵): " + petInsult + "\nSeriously? Still here? Fine. You got ending " + endingNumber + "# " + ending
    ]
    var templatePicked = templates[Math.floor(Math.random() * 6)] //returns value from 0 to 6

    return templatePicked
}


function logEndings() {
    endingsUnlocked.add(endingID)
}


async function runApp() {
    printLine('')
    printLine('--- Starting Insult Bot 5000 ---')
    
    await gettingBasicInfo()

    await gettingHeight()

    await gettingPet()

    findingEndings()
    
    logEndings()
    
    await makingInsult()
    
    printLine('Application closed.')
    printLine('--------------------------------')
}