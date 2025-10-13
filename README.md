# Insult Bot 5000 

The **Insult Bot 5000** is a CLI style application that makes highly specific, insults based on a user's demographic data.

The application is a 2in1 personality quiz and insult generator, by the end getting an **"Ending"** that is determined by the combination of your answers.

---

## Getting Started
if you want to try it out! go to [heapOutOfMemory.js by Digianii](https://digianii.itch.io/heapoutofmemoryjs)

This is a **browser-based JavaScript application**. To run it, you'll need to embed the script in an HTML file that contains the necessary structure to display the terminal interface.

### Needed DOM Elements

check if your HTML contains elements with the following IDs:

| Element ID        | Purpose                                                                  |
| ----------------- | ------------------------------------------------------------------------ |
| `output-area`     | The main container where all terminal output                             |
| `current-command` | The `<span>` or element used to display the user's current input buffer. |

The script also listens for keyboard events on the `document` and uses an event listener on the element with the ID `terminal` (if present) to keep the input focused.

---

## Usage

The application starts automatically on page load by displaying the `webfetch` title and a welcome message. You use it by typing commands and pressing **Enter**.

### Commands

| Command        | Description                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| **`start`**    | Initiates the **Insult Generation** process by prompting the user for their information (name, age, height, pet). |
| **`help`**     | Displays a list of all available commands.                                                                        |
| **`clear`**    | Clears all past output from the terminal screen.                                                                  |
| **`webfetch`** | Re-displays the large ASCII art title screen.                                                                     |

### Interaction

Once you run the `start` command, the app will guide you through a couple of questions:

1. **Name & Age:** Finds your **Literacy** (based on name capitalisation) and **Age Group** (Little, PainToDealWith, Dinosaur).
    
2. **Height:** Asks if you are **Short** or **Tall**.
    
3. **Pet:** Asks if you have a pet, and if so, what type (**Dog, Cat, Hamster, Fish, Other**).
    

After:

- Finds the **Ending ID**.
    
- Composes and prints a personalised insult based on a random template.
    

---
## Data Structure

The application's core logic centers on a single, massive data object and a complex numerical encoding system.

### 1. Data Categorisation (§1)

The application uses static arrays and a primary JSON-like object to store all text and options:

|Variable|Values|Purpose|
|---|---|---|
|`petTypes`|Dog, Cat, Hampster, Fish, Other|Options for pet selection.|
|`ageGroup`|Little (≤10), PainToDealWith (11−17), Dinosaur (≥18)|Categorizes the user's age.|
|`height`|Short, Tall|Options for height selection.|
|`insultData`|Nested object structure|Holds all the raw insult strings, organized by: **Literacy** → **Age Group** → **Height** → **Pet Type**.|
|`listEndings`|≈72 string values|An array of all possible **"Endings"** for the scenario.|

---

### 2. The Ending Algorithm (Weighted Positional System)

The function `findingEndings()` uses a weighted positional numeral system to map the four user attributes to a single **`endingID`**.
The calculation for endingID is based on a set of weights derived from the number of options for each variable (radix):

|Variable|Index|Radix/Options|Weight|
|---|---|---|---|
|Literacy|iL∈{0,1}|L=2|WL​=A×H×P=3×2×6=36|
|Age Group|iA∈{0,1,2}|A=3|WA​=H×P=2×6=12|
|Height|iH∈{0,1}|H=2|WH​=P=6|
|Pet State|iP∈{0,...,5}|P=6|WP​=1|

The final endingID calculation is:

endingID=(iL×WL​)+(iA×WA​)+(iH×WH​)+(iP×WP​)

endingID=(iL×36)+(iA×12)+(iH×6)+(iP×1)

This system allows for a total of 2×3×2×6=72 unique endings.

---

##  TODOs

- Move the large `insultData` object and the `listEndings` array to external **JSON** files.
    
- Add more `paragraphTemplate`.
    
- act 2.
