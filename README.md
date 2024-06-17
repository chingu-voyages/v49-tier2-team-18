# PalettePro

## Overview

PalettePro is an AI-powered tool that can provide recommendations for any color selected by users. An intuitive color picker allows users to select a color from a color wheel, or enter hex, rgb, or hsl values manually. A form guides users to provide additional details, utilizing dropdown menues with pre-populated options as much as possible in order to ensure quality prompt construction. This structure also helps to provide recommendations that are as consistent as possible. Recommendations are displayed as a full text response from the AI model, accompanied by color swatches for the originally selected color as well as any recommended colors.

<img width="1420" alt="image" src="https://github.com/chingu-voyages/v49-tier2-team-18/assets/106836794/7ca5554e-844d-49a3-ad29-954bedb825ad">

## PalettePro External Link

[PalettePro](https://color-picker-project-omega.vercel.app/)

## Features

### Color Picker

PalettePro uses a customizable color picker. The user may choose a color from the color wheel and modify the shade, hue, saturation, and light of the chosen color. The user may input rgb, hex, or hsl values to generate a color. The chosen color is used in the prompt for the AI response.

<img width="763" alt="image" src="https://github.com/chingu-voyages/v49-tier2-team-18/assets/106836794/e828d4c8-4d96-4b9f-b414-60299d52073d">


### Color Details Form

After selecting a starting color, the user enters additional details in a simple form which will help to construct the prompt sent to the Groq AI API. This ensures that the color recommendations provided by PalettePro are as relevant to the user's use case as possible. The user must enter a context using the first field on the form; this form field asks the user what they're using the selected color for, and they select options from a dropdown menu ("other" is available as an option if none of the preset options apply). Additional form fields ask users what color codes they would like their recommendation in, how many recommended colors they would like, whether they need a specific harmonious color scheme (with dropdown options to select from), whether they are trying to evoke a specific mood or emotion, and a final text field to provide any additional information that might be helpful.

<img width="763" alt="image" src="https://github.com/chingu-voyages/v49-tier2-team-18/assets/106836794/ea004931-4f30-4bd7-83ea-3d4cb9cafd7a">

### Groq AI

The full text of the AI-generated color recommendation is displayed below the Color Details form. Additionally, color swatches below the recommendation display the original selected color as well as all recommended colors. Color swatches are labeled in the color code format selected by the user (defaulting to hex codes if the user did not specify).

PalettePro uses Artificial Intelligence (AI) to recommend the perfect color combinations for your use cases. It is powered by Groq's Language Processing Unit (LPU) Inference Engine, which offers industry-leading compute speed, quality, and energy efficiency. The specific Large Language Model (LLM) utilized by PalettePro is Meta's llama3-8b-8192.

You can learn more about Groq [HERE](https://wow.groq.com/why-groq/).

You can learn more about Meta's llama3-8b LLM [HERE](https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct).

## Dependencies

- React  
- React Color  
- Groq AI API
- React-three/fiber
- React-three/drei
- React Icons
- Framer Motion
- Vite
- Vercel  

## Color Reference

| Color            | Hex                                                              |
| ---------------- | ---------------------------------------------------------------- |
| background Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8fc |
| primary Color    | ![#0d109b](https://via.placeholder.com/10/0d109b?text=+) #0d109b |
| secondary Color  | ![#0f0fff](https://via.placeholder.com/10/0f0fff?text=+) #0f0fff |
| accent Color     | ![#6365e8](https://via.placeholder.com/10/6365e8?text=+) #6365e8 |

## Our Team

- Jonathan Mendez: [GitHub](https://github.com/jonathanwmendez) / [LinkedIn](https://www.linkedin.com/in/jonathanwmendez/) / [Website](https://www.jonathanwmendez.com)
- Brian Slaby: [GitHub](https://github.com/BrianSlaby) / [LinkedIn](https://www.linkedin.com/in/brian-slaby-78022388/)
- Tanutsapon Jinaongkan : [GitHub](https://github.com/TanutsaponJ) / [LinkedIn](https://www.linkedin.com/in/tanutsapon/)
- Matthew Neie : [GitHub](https://github.com/MatthewNeie) / [LinkedIn](https://www.linkedin.com/in/matthew-neie/) / [Website](https://matthew-neie.netlify.app/)
- Sushmita Ghosh: [GitHub](https://github.com/Sushmita-Ghosh) / [LinkedIn](https://linkedin.com/in/sushghosh)

## Acknowledgements

- [Wiki about Color Scheme](https://en.wikipedia.org/wiki/Color_scheme)
- [OpenAI API docs](https://platform.openai.com/docs/introduction)
- [Color picker library](https://iro.js.org/)

## Running This Project Locally

To install and run the project locally, follow these steps:

### Prerequisites

📙 Node.js and npm (Node Package Manager) should be installed on your machine.

### 1. Clone or Download the Repository:

Open your terminal or command prompt.
Use the git clone command to clone the project repository:

```bash
 https://github.com/chingu-voyages/v49-tier2-team-18
```

### 2. Navigate to the Project Directory:

Use the cd command to move into the project directory:

```bash
  cd project-directory-name
```
### 3. Run the following command to install project dependencies using npm:

Run the following command to install project dependencies using npm:

```bash
  npm install
```

### 4. Start the Development Server

After the dependencies are installed, start the development server:

```sql
  npm run dev
```
### 5. View the Project:

Once the development server is running, open your web browser and visit:

```arduino
  http://localhost:3000
```
