

FROM PROJECT SPECS:

    Incorporate a mechanism to prompt users for the context in which they intend to use the selected color. Include this context information in the prompt sent to the GroqAI API for more tailored color recommendations.

    When sending color data to the GroqAI API, include it in the prompt along with a request for color recommendations. Ensure it also requests color codes with their respective names for the recommended colors. Example prompt:
    - "Suggest color recommendations based on the [selected color] and [context]"
    - "Color recomemmendations [selected color][context], provide color codes and explanation"
    - "Suggest compatible colors based on the [selected color] and [context]. Display color codes and descriptions"



    
character limits for text boxes!  Don't want to use too many tokens.
    STRETCH GOAL - characters remaining displayed like Twitter?

color (saved as selectedColor state in higher level component and passed as prop into PromptForm)
    colorCodeType state?  (hex, hsl, rgb)
    Add in prompt to make recommendations using same color code type;
    include names of the color represented by the code.


OTHER INPUTS

    STRETCH GOAL - Do you need recommendations that include multiple colors?
        - How many (1-5)? Use dropdown.
        - Do you need a specific color scheme?
            dropdown options: monochromatic, complementary, analogous, triadic, tetradic

    STRETCH GOAL - how do you want your recommendations displayed?
        - palette, text on background, boxes on background, patterns?

    STRETCH GOAL - Do you want some information about the selected color?