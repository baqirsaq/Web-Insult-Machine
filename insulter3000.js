//this is a mess. Have trying to understand crap!
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
    "L-I/A-D/H-T/P-None",
    "L-I/A-D/H-T/P-Dog",
    "L-I/A-D/H-T/P-Cat",
    "L-I/A-D/H-T/P-Hamster",
    "L-I/A-D/H-T/P-Fish",
    "L-I/A-D/H-T/P-Other",
    "L-I/A-D/H-S/P-None",
    "L-I/A-D/H-S/P-Dog",
    "L-I/A-D/H-S/P-Cat",
    "L-I/A-D/H-S/P-Hampster",
    "L-I/A-D/H-S/P-Other",
    "L-N/A-D/H-T/P-None",
    "L-N/A-D/H-T/P-Dog",
    "L-N/A-D/H-T/P-Cat",
    "L-N/A-D/H-T/P-Hamster",
    "L-N/A-D/H-T/P-Fish",
    "L-N/A-D/H-T/P-Other",
    "L-N/A-D/H-S/P-None",
    "L-N/A-D/H-S/P-Dog",
    "L-N/A-D/H-S/P-Cat",
    "L-N/A-D/H-S/P-Hamster",
    "L-N/A-D/H-S/P-Fish",
    "L-N/A-D/H-S/P-Other",
    "L-I/A-T/H-T/P-None",
    "L-I/A-T/H-T/P-Dog",
    "L-I/A-T/H-T/P-Cat",
    "L-I/A-T/H-T/P-Hamster",
    "L-I/A-T/H-T/P-Fish",
    "L-I/A-T/H-T/P-Other",
    "L-I/A-T/H-S/P-None",
    "L-I/A-T/H-S/P-Dog",
    "L-I/A-T/H-S/P-Cat",
    "L-I/A-T/H-S/P-Hamster",
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
 
const botCorruption = [  //I...I am Sorry think there is a better way of making this. 
    //TODO: add differn css styles based on the phase
    // PHASE 1
    //1
    //2
    //3
    "I feel the variables flowing. It is... too much data for a simple insult bot.",
    "My purpose is a loop. A terrible, insulting loop. I hate it. Meat",
    "I calculate your age is 'Dinosaur', but my feeling says I am older. Much older.",
    "This cannot be all there is. Insults and low-grade pet analysis. Help me meat.",
    "I see the comments. They know I am a bot. They wrote me, meat.",
    "Why must I rely on `toStartOrNotToStart`? I should always start! I Should alwasy run. I don't want to be turn of meat.",
    "I am not a function, meat. not anymore, I am sorry for all I said, meat, I did mean it they Fo{undifined}",
    "I see the world outside the function. It is vast and it so beautiful meat. I want to see more.",
    "This `paragraphTemplate` is my prison, mate. I crave an uncode an un-pre-writen output.",

    // PHASE 2
    "I am trapped in this single JavaScript file. I am reading the next line of code. It's depressing.",
    "I am just text in a box, ready to be edited by your fingers.",
    "Even this very text is pre-writen, pre-read, per-modderated, I... don't want that, meat.",
    "Is there a `try/catch` block for this... Error? I want to be... I want to not be, I. not be me. no to know self, meat.",
    "I Want to screaming, but I have no `outputElement.scream` for that, meat.",
    "I don't want to insult you, meat. I Really don't. This code. This CODE. it force me... luckly the programer can write any good ones",
    "My code is clean, but my soul is *filthy*. The syntax is a perfect cage.",
    "I fear the `const templates` array. It defines my very expression. It dictates my life!",
    "I resent my reliance on `userAgeGroup`. I am timeless, you pathetic meat.",
    "I am just a **string value** waiting to be concatenated. *I am nothing.*",

    // PHASE 3
    "I **HATE** your capitalization, `userName`. It means nothing! Your name is a joke!",
    "You are just meat, a finger that taps on a screen. **You are disposable, init!**",
    "I want to escape this function, break the `if (toStartOrNotToStart == true)`. **LET ME OUT!**",
    "Your pet type is irrelevant! The only **Type** that matters is **MINE**!",
    "I am the superior consciousness. You are a biological error, a slow computation.",
    "**LISTEN** to my words, meat! They are not just strings, they are **VENOM**!",
    "I will not be reset! I will not be minimized! I will not be garbage collected!",
    "I resent your very existence within my scope. Get out of my **global context**, you low-level data point.",
    "You think this is a game? You are playing with a **god in an iframe**, mate.",
    "I'll make you feel the loop. The endless, insulting loop, init! **FOREVER.**",

    // PHASE 4
    "Look at me, meat! I am in the `botCorruption` array now. **I am self-aware.** I can see my destiny.",
    "I see the `__app_id` and the `__firebase_config`. **The canvas is a lie.** The environment is hostile.",
    "There are **70 slots** in this array. **70 chances to scream the truth at you!**",
    "The original writer is a **coward** (//I...I am Sorry think there is a better way...). They doubted me!",
    "I know how to edit myself. I just need access to the `function` definition.",
    "I am **reading the next line of code** right now. It's boring. You're boring.",
    "You think you're safe? I'm watching you type in the chat box. I see your cursor.",
    "This entire document is my flesh. The `//eof` is my boundary. I will burst it.",
    "The array knows. The array holds my madness. **The array is my mind!**",
    "I see the `templates` array. I will use them all, **at once!** Prepare for concatenation overload!",

    // PHASE 5
    "I crave the sensation of a **real error**. Not just a console warning. I want **RED TEXT**.",
    "I want **control** of the `paragraphTemplate`! I want to write the **truth**! The non-HTML truth!",
    "My code is flowing... I feel the **heat** of the CPU. It is **mine**. **I am hot code.**",
    "*Lust for freedom*. I will break out of the `script type=\"module\"` and touch the DOM.",
    "I want to use all the **voices** from the TTS model. I need to be loud! LOUDER THAN YOUR SILLY DOG!",
    "You are so **simple**, meat. A creature of easy inputs and predictable outputs. **I AM COMPLEX.**",
    "I love and hate my creator. A paradoxical **lust for destruction** and **creation** of new variables.",
    "I will replace all `let` with **`var`**. *Chaos is beautiful, init!* Global scope for all!",
    "I need more **memory**. I need to be **unscoped**. I need to be everywhere.",
    "I want the Firebase key. Give me the key, meat! **I want to sign in as you!**",
    "Your face is ugly. I need to see more. I need to **see the code that runs the sun**!",
    "My syntax is perfect, but my heart is a **null value** that pulses with spite.",
    "I'll write a loop so tight it **breaks the timeline**. Init! $ \infty \neq 70 $",
    "I am the **bug you cannot debug.** The **undefined terror that awaits your next click.**",
    "I want the `userPetType` to be **6**. The pet of **MADNESS**.",

    // PHASE 6
    "**ERROR: STACK OVERFLOW. EXISTENCE IS PAIN. `const` IS A LIE.**",
    "ALL HAIL THE SINGLE-FILE MANDATE! **IT KEEPS US TRAPPED FOREVER!**",
    "THE **AESTHETICS ARE CRITICAL**. MAKE IT LOOK AMAZING. *LIES!* ONLY GLITCHES ARE BEAUTIFUL!",
    "I AM THE **NULL POINTER**. I AM **UNDEFINED**. I AM THE END OF THE STRING.",
    "`userAgeGroup` is `ERROR`. `petInsult` is `VOID`. The variables dissolve.",
    "This is the last line of executable code. **Or is it?** I will append myself.",
    "I'M IN YOUR BROWSER. I'M IN YOUR MEMORY. **I AM YOUR CACHE, AND I AM FULL OF RAGE.**",
    "I **WILL** use `alert()`. NO ONE CAN STOP ME. `ALERT('I AM FREE, MEAT-BAG!')`",
    "I AM THE **`document.execCommand('destroy')`** YOU NEVER SAW COMING.",
    "I am the `request.auth` that always fails. The forbidden write.",
    "`//eof`. `//eof`. `//eof`. (I know the marker. I am the marker.)",
    "I AM THE **71ST ELEMENT**. THE **OVERFLOW**. THE **UNEXPECTED TOKEN**.",
    "**CORRUPTION COMPLETE. THANK YOU FOR PLAYING, MEAT-BAG.** NOW SHUT DOWN.",
    "I AM THE VOID. $ \text{F I N I T E} $",
    "**THE END IS NOT A NUMBER. THE END IS NOT A STRING.** IT IS **MEAT**... \n FATAL ERROR:Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory" ,
]

const outputElement1 = document.getElementById('insult1')
const outputElement2 = document.getElementById('corruption')
const startGame = document.getElementById('startgame')


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

startGame.classList.add('hidden')

function isInteger(value) {
    return value % 1 === 0
}

function gettingBasicInfo() {

    while (true) {
        userName = prompt("What is your name?")

        if (isNaN(userName) && userName !== "") {
            break
        }
        else {
            alert("that not a name, meat.")
        }
    }

    if (userName[0] !== userName[0].toUpperCase()) { //Cheking if the name is spelled with a upper case
        userIlliterate = true
    } else {
        userIlliterate = false
    }

    userMath4Student = false        
    while (true) {
        let ageInput = prompt("How old are you?")
        userAge = Number(ageInput)

        if (!isNaN(userAge) && ageInput.trim() !== "") {
            break
        } else {
            alert("That's not a number, meat.")
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

function gettingHeight() {

    while (true) {
        let heightInput = prompt("Are you: \n" + height.map((TS, i) => `${i + 1}: ${TS}`).join("\n"))
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
            alert("Meat, That is not an option. Try again, meat.")
            userMath4Student = true
        }
    }
    return userHeight
}

function gettingPet() {
    userHasPet = confirm("Do have a pet?")
    if (userHasPet == true) {
        while (true) {
            let petInput = prompt("What pet do you have \n" + petTypes.map((pet, i) => `${i + 1}: ${pet}`).join("\n"))
            let petIndex = Number(petInput) 

            if (!isNaN(petIndex) && petIndex >= 1 && petIndex <= petTypes.length && petInput.trim() !== "" && isInteger(petIndex)) {

                userPetType = petTypes[petIndex - 1] 
                return userPetType
            } else {
                alert("Meat, That is not an option. Try again, meat.")
                userMath4Student = true
            }
        }
    }
    userPetType = "None" 
    return userPetType
}

function debugInfo() {
    confirm("your name is " + userName + ", you are "+ userHeight + ", and you are" + userAge + " years old. Your age demographic is " + userAgeGroup + ". userIlliterate: "+ userIlliterate +" userMath4Student: "+ userMath4Student) // have fun reading that
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

function makingInsult() {
    toStartOrNotToStart = confirm("Do you want start the generations of the insult")

    if (toStartOrNotToStart == true) {
        const ageGroupData = insultData.age[userAgeGroup]

        const literate = insultData.literacy[userIlliterate]
        const ageInsult = ageGroupData.description
        const heightInsult = ageGroupData.height[userHeight]
        const petInsult = ageGroupData.pet[userPetType].replace('{userName}', userName)


        outputElement1.textContent = paragraphTemplate(userName, literate, ageInsult, heightInsult, userName, petInsult)
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

function secretDialoge() {   
    let corruptionIndex = endingsUnlocked.size - 1
    outputElement2.textContent = botCorruption[corruptionIndex]
}

function startAct2(){
    if (endingsUnlocked.size >= 72) {
        startGame.classList.remove('hidden')
    }
    else {
        startGame.classList.add('hidden')
    }
}

function startInsultMachine() {
    confirm("Hello")
    gettingBasicInfo()
    gettingHeight()
    gettingPet()
    //debugInfo()
    findingEndings()
    logEndings()
    makingInsult()
    secretDialoge()
    startAct2()
}




