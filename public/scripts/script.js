(function () {
  const questionBank =
  [{
    question: "Food is prepared on the counter where cleaning solution is spilled and not wiped off. Define type of contamination.",
    answers: [
      { text: "Allergen", correct: false },
      { text: "Chemical", correct: true },
      { text: "Microbiological", correct: false },
      { text: "Physical", correct: false }
    ],
  },
  {
    question: "Insecticides, rodenticides, or cleaning chemicals accidentally getting into food. Define type of contamination.",
    answers: [
      { text: "Additive", correct: false },
      { text: "Adulteration", correct: true },
      { text: "Allergen", correct: false },
      { text: "Physical hazard", correct: false }
    ],
  },
  {
    question: "Bits of metal that accidentally gets into food. Define type of contamination.",
    answers: [
      { text: "Additive", correct: false },
      { text: "Allergen", correct: false },
      { text: "Chemical", correct: false },
      { text: "Physical", correct: true }
    ],
  },
  {
    question: "Making sure the ingredients on your menu are accurate can prevent a:",
    answers: [
      { text: "Allergic reaction", correct: true },
      { text: "Physical contamination", correct: false },
      { text: "Chemical contamination", correct: false },
      { text: "Microbiological contamination", correct: false }
    ],
  },
  {
    question: "Which of the following microorganisms multiply in food?",
    answers: [
      { text: "Bacteria", correct: true },
      { text: "Parasites", correct: false },
      { text: "Protozoans", correct: false },
      { text: "Viruses", correct: false }
    ],
  },
  {
    question: "Bacteria will multiply every _____ minutes at room temperature.",
    answers: [
      { text: "5 to 10", correct: false },
      { text: "15 to 20", correct: true },
      { text: "25 to 30", correct: false },
      { text: "35 to 40", correct: false }
    ],
  },
  {
    question: "The most common way viruses contaminate food is through:",
    answers: [
      { text: "Unwashed hands", correct: true },
      { text: "Inadequate cooking temperatures", correct: false },
      { text: "Inadequate hot holding temperatures", correct: false },
      { text: "Cross-contamination from raw meat juices", correct: false }
    ],
  },
  {
    question: "Mycotoxins are toxins produced by:",
    answers: [
      { text: "Bacteria", correct: false },
      { text: "Mold", correct: true },
      { text: "Parasites", correct: false },
      { text: "Yeast", correct: false }
    ],
  },
  {
    question: "High heat or cooking temperatures kill:",
    answers: [
      { text: "Bacteria", correct: true },
      { text: "Mold", correct: false },
      { text: "Spores", correct: false },
      { text: "Toxins", correct: false }
    ],
  },
  {
    question: "The danger zone is:",
    answers: [
      { text: "A temperature range between 0°C and 74°C (32°F and 165°F)", correct: false },
      { text: "A temperature range between 4°C and 60°C (40°F and 140°F)", correct: true },
      { text: "A temperature range between 20°C and 60°C (68°F and 140°F)", correct: false },
      { text: "A temperature range between 60°C and 82°C (140°F and 180°F)", correct: false }
    ],
  },
  {
    question: "In a temperature range from 0°C to 4°C (32°F to 40°F) bacteria will:",
    answers: [
      { text: "Be destroyed", correct: false },
      { text: "Survive but not multiply", correct: false },
      { text: "Survive and grow rapidly", correct: false },
      { text: "Survive and multiply slowly", correct: true }
    ],
  },
  {
    question: "Foods with a pH below three are:",
    answers: [
      { text: "Acidic", correct: true },
      { text: "Alkaline", correct: false },
      { text: "Moist", correct: false },
      { text: "Neutral", correct: false }
    ],
  },
  {
    question: "The easiest way to reduce the growth of bacteria in food is to control the:",
    answers: [
      { text: "Acidity level", correct: false },
      { text: "Protein level", correct: false },
      { text: "Moisture level", correct: false },
      { text: "Time and temperature", correct: true }
    ],
  },
  {
    question: "Which of the following is a hazardous food that supports the growth of bacteria:",
    answers: [
      { text: "Cereal", correct: false },
      { text: "Jam", correct: false },
      { text: "Pickles", correct: false },
      { text: "Pork", correct: true }
    ],
  },
  {
    question: "Bacteria grow in food with a pH of:",
    answers: [
      { text: "3", correct: false },
      { text: "7", correct: true },
      { text: "10", correct: false },
      { text: "16", correct: false }
    ],
  },
  {
    question: "If your food premises receive a complaint of a foodborne illness, you should:",
    answers: [
      { text: "Offer the customer a refund", correct: false },
      { text: "Record the details", correct: true },
      { text: "Blame the chef", correct: false },
      { text: "Ignore it", correct: false }
    ],
  },
  {
    question: "Which of the following methods is an acceptable way to reheat food?",
    answers: [
      { text: "On a stovetop", correct: true },
      { text: "In a steam table", correct: false },
      { text: "In a chafing dish", correct: false },
      { text: "In a warming drawer", correct: false }
    ],
  },
  {
    question: "Food should be reheated within:",
    answers: [
      { text: "Two hours or less", correct: true },
      { text: "Four hours or less", correct: false },
      { text: "Six hours or less", correct: false },
      { text: "Eight hours or less", correct: false }
    ],
  },
  {
    question: "The safest way to thaw/defrost food is:",
    answers: [
      { text: "In a microwave", correct: false },
      { text: "In the refrigerator", correct: false },
      { text: "At room temperature", correct: false },
      { text: "In a sink of cold running water", correct: true }
    ],
  },
  {
    question: "Food should be cooled from 60°C (140°F) to 20°C (68°F) within:",
    answers: [
      { text: "Two hours", correct: true },
      { text: "Four hours", correct: false },
      { text: "Six hours", correct: false },
      { text: "Eight hours", correct: false }
    ],
  },
  {
    question: "Food should be cooled from 60°C to 20°C (140°F to 68°F) by which acceptable method?",
    answers: [
      { text: "In shallow pans", correct: true },
      { text: "On the countertop", correct: false },
      { text: "Beside an open window", correct: false },
      { text: "In a tightly sealed container", correct: false }
    ],
  },
  {
    question: "The recommended way to calibrate your probe thermometer is by using:",
    answers: [
      { text: "Cold water at 4°C (40°F)", correct: false },
      { text: "Ice cubes at minus 4°C (40°F)", correct: false },
      { text: "Boiling water at 100°C (212°F)", correct: false },
      { text: "Mix of crushed ice and water at 0°C (32°F)", correct: true }
    ],
  },
  {
    question: "Probe thermometers must be cleaned and sanitized:",
    answers: [
      { text: "Every day", correct: false },
      { text: "Every week", correct: false },
      { text: "After each use", correct: true },
      { text: "At least once every hour", correct: false }
    ],
  },
  {
    question: "To get an accurate temperature reading of a food item make sure your probe thermometer is:",
    answers: [
      { text: "In the thinnest part of the food", correct: false },
      { text: "Left in the food while it’s cooking", correct: false },
      { text: "In the center or thickest part of the food", correct: true },
      { text: "Touching the bottom of the food container", correct: false }
    ],
  },
  {
    question: "The fridge or freezer thermometer should be placed:",
    answers: [
      { text: "Near the back, at the top of the fridge", correct: false },
      { text: "Near the door, at the top of the fridge", correct: true },
      { text: "Near the door, at the bottom of the fridge", correct: false },
      { text: "Near the back, at the bottom of the fridge", correct: false }
    ],
  },
  {
    question: "A customer has ordered a chicken dinner. Which of the following methods should the chef use to  determine that the chicken is properly cooked?",
    answers: [
      { text: "Poking the chicken with his/her finger", correct: false },
      { text: "Cutting the chicken to ensure that the flesh is no longer pink or red", correct: false },
      { text: "Using a timer to check that the chicken was cooked for the proper length of time", correct: false },
      { text: "Using a probe thermometer to check that a minimum internal cooking temperature has been reached", correct: true }
    ],
  },
  {
    question: "What should you do if your supplier offers to sell his home-canned tomatoes?",
    answers: [
      { text: "Do not accept it or any other offer of homemade products", correct: true },
      { text: "Accept it and store it immediately in the dry goods area", correct: false },
      { text: "Accept it. The jars appear to be in good condition", correct: false },
      { text: "Accept it and store it in a cold holding unit", correct: false }
    ],
  },
  {
    question: "Invoices, receipts and records for meats should be stored on-site for a minimum of:",
    answers: [
      { text: "30 days", correct: false },
      { text: "60 days", correct: false },
      { text: "90 days", correct: false },
      { text: "One year", correct: true }
    ],
  },
  {
    question: "Which of the following food products can be received and accepted upon delivery?",
    answers: [
      { text: "Unpasteurized milk", correct: false },
      { text: "Unpasteurized soft cheeses", correct: false },
      { text: "Grade A eggs at a temperature of 14°C (58°F)", correct: false },
      { text: "A poultry product with a label indicating it is from a federally inspected plant", correct: true }
    ],
  },
  {
    question: "Which of the following egg products can be accepted upon delivery?",
    answers: [
      { text: "Cracked Grade B eggs at 4°C (40°F)", correct: false },
      { text: "Unpasteurized liquid eggs at 4°C (40°F)", correct: false },
      { text: "Grade A eggs at a temperature of 4°C (40°F)", correct: true },
      { text: "Grade C eggs at a temperature of 4°C (40°F)", correct: false }
    ],
  },
  {
    question: "What is the general rule to how high food should be stored off the ground?",
    answers: [
      { text: "5 cm/two inches", correct: false },
      { text: "10 cm/four inches", correct: false },
      { text: "15 cm/six inches", correct: true },
      { text: "15 mm/one inch", correct: false }
    ],
  },
  {
    question: "When a shipment of food arrives, the employee should:",
    answers: [
      { text: "Inspect only the potentially hazardous food", correct: false },
      { text: "Put everything away first and inspect it later", correct: false },
      { text: "Inspect all foods right away before storing them", correct: true },
      { text: "Stack or place the new food items in front of old product", correct: false }
    ],
  },
  {
    question: "The first in, first out (FIFO) rule means:",
    answers: [
      { text: "Rotating stock to be sure the oldest products are used first", correct: true },
      { text: "Food that is placed in the oven first should be the first food to come out", correct: false },
      { text: "Storing foods, being sure that frozen foods are put away first when they are received", correct: false },
      { text: "Making sure ready-to-eat foods are stored above raw foods, on the first shelf in the fridge", correct: false }
    ],
  },
  {
    question: "Which of the following procedures should employees follow when serving food?",
    answers: [
      { text: "Store glasses right side up", correct: false },
      { text: "Re-use single-service-utensils if they appear to not have been used", correct: false },
      { text: "Refrain from touching the insides of glasses or the eating ends of cutlery", correct: true },
      { text: "Serve food to the customers quicker by carrying as many plates as possible", correct: false }
    ],
  },
  {
    question: "Which of the following procedures should be used to taste food?",
    answers: [
      { text: "Re-use a regular spoon, rinsing it under water after each use", correct: false },
      { text: "Dip a washed finger into the food and then re-wash your hands", correct: false },
      { text: "Ladle food into a cup and use a second spoon to taste the food", correct: true },
      { text: "Re-use a disposable spoon, rinsing it under water after each use", correct: false }
    ],
  },
  {
    question: "Which of the following is the correct way to store raw, unwashed vegetables in a refrigerator?",
    answers: [
      { text: "Under raw meats", correct: false },
      { text: "Above a cheese platter", correct: false },
      { text: "Under a prepared salad", correct: true },
      { text: "Above cooked vegetables", correct: false }
    ],
  },
  {
    question: "Where should wiping cloths be stored?",
    answers: [
      { text: "In the handwash sink", correct: false },
      { text: "Hung from your apron", correct: false },
      { text: "In a bucket of sanitizing solution", correct: true },
      { text: "On the counter to be close at hand", correct: false }
    ],
  },
  {
    question: "Which of the following is an example of cross-contamination?",
    answers: [
      { text: "A cheese platter placed next to a bowl of prepared salad in a walk-in-cooler", correct: false },
      { text: "A wiping cloth in a labelled bucket of sanitizer under a food prep counter", correct: false },
      { text: "A knife used to slice raw chicken breasts and then to chop vegetables", correct: true },
      { text: "A knife used to slice cucumbers and then to slice tomatoes", correct: false }
    ],
  },
  {
    question: "Can a food handler perform regular food preparation duties with a cut on their finger?",
    answers: [
      { text: "Yes, if they use antiseptic between jobs", correct: false },
      { text: "Yes, if the cut is bandaged and they wear a glove over the bandage", correct: true },
      { text: "Yes, if they have a doctor’s note to show that the cut is not contagious", correct: false },
      { text: "No, they should be exempt from food preparation until the cut is healed", correct: false }
    ],
  },
  {
    question: "An ill food handler can return to work:",
    answers: [
      { text: "As soon as he/she feels better", correct: false },
      { text: "After he/she is symptom free for at least 24 hours", correct: true },
      { text: "After he/she is symptom free for at least 12 hours", correct: false },
      { text: "As long as he/she wears gloves when preparing food", correct: false }
    ],
  },
  {
    question: "What is an acceptable way to deal with a cough or sneeze?",
    answers: [
      { text: "Into your upper sleeve", correct: true },
      { text: "Into the air but away from food", correct: false },
      { text: "Into a disposable tissue and discard it", correct: false },
      { text: "Into a re-usable cloth handkerchief and wash your hands", correct: false }
    ],
  },
  {
    question: "_________ reduces the number of microorganisms to safe levels.",
    answers: [
      { text: "Cleaning", correct: false },
      { text: "Disinfecting", correct: false },
      { text: "Sanitizing", correct: true },
      { text: "Soaking", correct: false }
    ],
  },
  {
    question: "At what strength should chlorine-based sanitizing solution be when sanitizing multi-use utensils?",
    answers: [
      { text: "25 ppm", correct: false },
      { text: "100 ppm", correct: true },
      { text: "200 ppm", correct: false },
      { text: "400 ppm", correct: false }
    ],
  },
  {
    question: "At what strength should quaternary ammonium-based sanitizing solution be when sanitizing multi-use utensils?",
    answers: [
      { text: "25 ppm", correct: false },
      { text: "100 ppm", correct: false },
      { text: "200 ppm", correct: true },
      { text: "400 ppm", correct: false }
    ],
  },
  {
    question: "At what strength should iodine-based sanitizing solution be during the sanitizing cycle of a bar glass dishwasher?",
    answers: [
      { text: "25 ppm", correct: true },
      { text: "100 ppm", correct: false },
      { text: "200 ppm", correct: false },
      { text: "250 ppm", correct: false }
    ],
  },
  {
    question: "A two compartment sink method can be used for washing:",
    answers: [
      { text: "Pots and pans", correct: true },
      { text: "Reusable plates", correct: false },
      { text: "Reusable glasses", correct: false },
      { text: "Reusable cutlery", correct: false }
    ],
  },
  {
    question: "The proper procedure for washing dishes in a three compartment sink is:",
    answers: [
      { text: "Scrape/pre-rinse, wash, rinse, sanitize, air dry", correct: true },
      { text: "Scrape/pre-rinse, wash, sanitize, rinse, air dry", correct: false },
      { text: "Scrape/pre-rinse, wash, sanitize, rinse", correct: false },
      { text: "Wash, rinse, sanitize", correct: false }
    ],
  },
  {
    question: "High temperature mechanical dishwashers must reach a sanitizing rinse temperature of:",
    answers: [
      { text: "74°C (165°F)", correct: false },
      { text: "77°C (170°F)", correct: false },
      { text: "82°C (180°F)", correct: true },
      { text: "100°C (212°F)", correct: false }
    ],
  },
  {
    question: "Which of the following statements is TRUE regarding cleaning and sanitizing?",
    answers: [
      { text: "Garbage containers do not need to be cleaned and sanitized", correct: false },
      { text: "Test strips make sure your sanitizing solution is working", correct: true },
      { text: "Cleaning alone reduces the number of microorganisms to safe levels", correct: false },
      { text: "When cleaning in-place, the chlorine sanitizer must be at a 400 ppm concentration", correct: false }
    ],
  },
  {
    question: "A designated handwash sink can be used for:",
    answers: [
      { text: "Handwashing only", correct: true },
      { text: "Handwashing and rinsing small utensils", correct: false },
      { text: "Handwashing and storing sanitizer solution", correct: false },
      { text: "Handwashing and washing vegetables and fruits", correct: false }
    ],
  },
  {
    question: "Which of the following pests like to live and breed in sink or floor drains and spaces around hot water pipes?",
    answers: [
      { text: "Ants", correct: false },
      { text: "Cockroaches", correct: true },
      { text: "Flies", correct: false },
      { text: "Rodents", correct: false }
    ],
  },
  {
    question: "Seeing a cockroach in daylight usually means that you have:",
    answers: [
      { text: "A very large infestation", correct: true },
      { text: "No places for the cockroaches to hide", correct: false },
      { text: "A breed of cockroaches that like daylight", correct: false },
      { text: "Not enough food sources for the cockroaches to survive", correct: false }
    ],
  },
  {
    question: "When should a food premises first contact a pest control company?",
    answers: [
      { text: "When they see signs of infestation", correct: false },
      { text: "If cockroaches or rats are seen during daylight hours", correct: false },
      { text: "Before any signs of pests are seen, for pest prevention", correct: true },
      { text: "If they have tried spraying for insects themselves, but it has not worked", correct: false }
    ],
  },
  {
    question: "What is the greatest concern regarding pests in a food premises?",
    answers: [
      { text: "Pests may spread foodborne illnesses", correct: true },
      { text: "Pests may cause damage to the building", correct: false },
      { text: "Pests may cause damage to foods in dry good areas", correct: false },
      { text: "Customers may not return because they are bothered by pests", correct: false }
    ],
  },
  {
    question: "What is one of the rules for developing an Integrated Pest Management (IPM) program?",
    answers: [
      { text: "Do not work with a licensed pest control company", correct: false },
      { text: "Pest-proofing the building is not necessary", correct: false },
      { text: "Follow good sanitation and housekeeping practices", correct: true },
      { text: "An IPM program is not needed if there are no pests inside the food premises", correct: false }
    ],
  },
  {
    question: "Which of the following is an example of a critical limit?",
    answers: [
      { text: "Cooking chicken breast to a minimum internal temperature of 74°C (165°F)", correct: true },
      { text: "Microbiological contamination of a raw chicken", correct: false },
      { text: "Hot holding cooked chicken on a buffet table", correct: false },
      { text: "Cold holding a prepared chicken salad", correct: false }
    ],
  },
  {
    question: "Discarding food that is handled with contaminated hands is an example of a:",
    answers: [
      { text: "Critical control point", correct: false },
      { text: "Corrective action", correct: true },
      { text: "Hazard analysis", correct: false },
      { text: "Critical limit", correct: false }
    ],
  },
  {
    question: "Cooking whole chicken to a minimum internal temperature is an example of a:",
    answers: [
      { text: "Critical control point", correct: true },
      { text: "Corrective action", correct: false },
      { text: "Hazard analysis", correct: false },
      { text: "Critical limit", correct: false }
    ],
  },
  {
    question: "“Bacterial growth is most likely to occur between 4°C and 60°C (40°F and 140°F)” is an example of:",
    answers: [
      { text: "Critical control point", correct: false },
      { text: "Corrective action", correct: false },
      { text: "Hazard analysis", correct: true },
      { text: "Critical limit", correct: false }
    ],
  },
  {
    question: "Checking temperatures during cooking is an example of what HACCP step?",
    answers: [
      { text: "Monitoring CCPs", correct: true },
      { text: "Hazard analysis", correct: false },
      { text: "Documentation", correct: false },
      { text: "Verification", correct: false }
    ],
  },
  {
    question: "HACCP stands for:",
    answers: [
      { text: "Hazard Analysis Critical Control Point", correct: true },
      { text: "Health Activities Critical Control Program", correct: false },
      { text: "Hazard Analysis Comprehensive Control Point", correct: false },
      { text: "Hazard Analysis Comprehensive Control and Prevention", correct: false }
    ],
  },
  {
    question: "The responsibility for handling food safely belongs to the Public Health Inspector.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "A Public Health Inspector requires a warrant to enter any place of business to carry out inspections,  during normal working hours.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "Public Health Inspectors enforce the Ontario Food Premises Regulation 493 by conducting routine  inspections of all food premises.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "What piece of Ontario legislation sets out specific standards for safe food in food premises?",
    answers: [
      { text: "Licensing Bylaws", correct: false },
      { text: "Food and Drugs Act", correct: false },
      { text: "Health Protection and Promotion Act", correct: false },
      { text: "Ontario Food Premises Regulation 493", correct: true }
    ],
  },
  {
    question: "The responsibility for safe food belongs to:",
    answers: [
      { text: "The customer", correct: false },
      { text: "The government", correct: false },
      { text: "The Public Health Inspector", correct: false },
      { text: "Everyone in the food premises", correct: true }
    ],
  },
  {
    question: "Eggs and shellfish can cause a serious allergic reaction in some people.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "It is a good idea to chill glasses in the same ice that will be used in making drinks.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "If chemicals are put into different, smaller containers or spray bottles, it must be labelled with product name and contents.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "All micro-organisms are harmful.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "Bacteria do not grow well in acidic conditions.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "You can tell that food is contaminated with a micro-organism by look, taste or smell.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "Probe thermometers should be recalibrated on a regular basis.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "All fridges must be equipped with an accurate and easily read thermometer.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "It is acceptable to thaw raw meat at room temperature as long as it is cooked to the minimum cooking temperature.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "Steam tables can be used for reheating.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "Food received at your premises can be accepted if it is not from an inspected source as long as it is in good condition.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "All delivery trucks are required to have a thermometer in their refrigeration units.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "Grade C eggs can be used in a food premises.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "It is acceptable to dip your clean finger in food to taste it.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "It is acceptable to store dry goods in a corridor if there is a lack of space as long as it is kept clean and sanitary.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "It is acceptable to re-use single-use-utensils such as spoons if they appear not to have been used.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "You do not have to wash your hands after you sneeze as long as you contain it with a tissue.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "Human hair can be a problem both as physical contamination and microbial contamination.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "When wearing gloves, hands do not have to be washed after use.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "A person who has diarrhea can handle food as long as they practice proper handwashing.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "If a cutting board has significant cracks or scratches, it must be replaced.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "Once properly washed and sanitized, dishes should be dried with a dish-towel.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "Multi-use service utensils such as plates and cups may be manually washed in a two compartment sink.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "When not in use, a handwash sink can be used to wash small amounts of utensils.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "Cleaning schedules are a good practice to use",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "Keeping pests from infesting your premises is much easier and less expensive than getting rid of pests that are already there.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "Chemicals can be sprayed during food preparation as long as a licensed pest control company is hired to do it.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "Flies are only a nuisance; they do not pose a health hazard.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "It is required to maintain records of all pest control measures taken.",
    answers: [
      { text: "TRUE", correct: true },
      { text: "FALSE", correct: false }
    ],
  },
  {
    question: "A food safety management system takes the place of cleaning and sanitizing.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  },
  {
    question: "A food safety management system guarantees safe food.",
    answers: [
      { text: "TRUE", correct: false },
      { text: "FALSE", correct: true }
    ],
  }];

  //Get the reference to the elements
  const questionContainer = document.getElementById('question-container');
  const questionElem = document.getElementById('question');
  const answersElem = document.getElementById('answers');
  const startButton = document.getElementById('start-btn');
  const promptMsg = document.getElementById('prompt-message');
  const nextButton = document.getElementById('next-btn');
  const msgAndNext = document.getElementById('question-bottom');
  const progressElem = document.getElementById('progress-bar');
  const requestScoreButton = document.getElementById('get-score-btn');
  const resultDiv = document.getElementById('result');
  const redoButton = document.getElementById('redo');
  let shuffledQuestions, currentQuestionIndex, allAnswers = [], noCorrectQuestion;

  var questions = {
    allData: questionBank,
    //Generate random question list with random answers order, it will take a number of questions in a set
    generateRandomQuestionsSet: function (noOfQuestions = 3) {
      shuffledQuestions = functionHelper.shuffle(questions.allData);
      shuffledQuestions = shuffledQuestions.slice(0, noOfQuestions);
      shuffledQuestions.forEach(question => {
        functionHelper.shuffle(question.answers);
      });
    },
    //Render the content of the question and answers to the container
    renderQuestion: function (question) {
        functionHelper.createQuestionContent(question.question);
        functionHelper.createAnswersContent(question.answers);
        allAnswers = Array.from(answersElem.children);
    },
    //Set the next question
    setNextQuestion: function () {
      functionHelper.resetQuestionContainer();
      this.renderQuestion(shuffledQuestions[currentQuestionIndex]);
    },
    //Event listener to determine what would happen when you click on an answer
    chooseAnswer: function (e) {
      const chosenAnswer = e.target;
      const isCorrect = chosenAnswer.dataset.correct;
      const progressBall = functionHelper.createProgressBall();
      //If the chosen answer is a wrong one, style it as a wrong answer and find the correct answer
      //among all answer and style it as the supposedly right answer
      if (!isCorrect) {
        chosenAnswer.classList.add('incorrect');
        progressBall.classList.add('incorrect-ball');
      }
      else {
        progressBall.classList.add('correct-ball');
        noCorrectQuestion++;
      }
      chosenAnswer.style = "background-color: #ececf1"
      //Prevent click event after the first click
      allAnswers.forEach(answer => {
        if(answer.dataset.correct){
          answer.classList.add('correct');
          answer.innerHTML += '<i class="fas fa-check"></i>';
        }
        answer.classList.add('noclick');
      });
      //Render validation answer message
      functionHelper.validationAnswerMsg(isCorrect);
      //Display progress ball for the current question result
      progressElem.appendChild(progressBall);
      //After evaluate the answer, show the message and the next button
      msgAndNext.classList.remove('hide');

    }
  };

  var functionHelper = {
    //Event listener to determine action when click the start button
    start: function () {
      startButton.classList.add('hide');
      nextButton.style.visibility="visible";
      questions.generateRandomQuestionsSet(10);      
      currentQuestionIndex = 0;
      noCorrectQuestion = 0;
      questionContainer.classList.remove('hide');
      progressElem.classList.remove('hide');
      questions.setNextQuestion();
    },
    // shuffle a given array
    shuffle: function (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    //Event listener to determine action when click the next button
    next: function () {
      if (currentQuestionIndex + 1 < shuffledQuestions.length) {
        currentQuestionIndex++
        questions.setNextQuestion();
        msgAndNext.classList.add('hide');
      } else {
        promptMsg.innerHTML = '<p>There is no more question</p>';
        promptMsg.style.color = "#0003a1";
        nextButton.style.visibility="hidden";
        requestScoreButton.classList.remove('hide');
      }
    },
    displayScore: function(){
      let score = (noCorrectQuestion/shuffledQuestions.length*100).toFixed(2);
      resultDiv.innerHTML = `<p>You have answered correctly ${noCorrectQuestion} out of ${shuffledQuestions.length} questions<br>Your score is ${score}%</p>`;
      resultDiv.classList.remove('hide');
      progressElem.classList.add('hide');
      questionContainer.classList.add('hide');
      msgAndNext.classList.add('hide');
      requestScoreButton.classList.add('hide');
      redoButton.classList.remove('hide');
    },
    //Function to reset/empty the content inside question container
    resetQuestionContainer: function () {
      questionElem.innerHTML = "";
      answersElem.innerHTML = "";
    },
    //Function to show the wrong validation message after choosing answer 
    validationAnswerMsg: function (isCorrect) {
      if (isCorrect) {
        promptMsg.innerHTML = '<p><i class="far fa-smile"></i>' + ' Your answer is correct' + '</p>';
        promptMsg.style.color = "#339933";
      } else {
        promptMsg.innerHTML = '<p><i class="far fa-frown"></i>' + ' Your answer is incorrect' + '</p>';
        promptMsg.style.color = "#ff0000";
      }
    },
    createQuestionContent: function (question) {
      questionElem.innerHTML = '<p>' + question + '</p>';
    },
    createAnswersContent: function (answersList) {
      answersList.forEach(answer => {
        let answerDiv = document.createElement('div');
        answerDiv.innerHTML = answer.text + ' ';
        answerDiv.classList.add('answer-item');
        //To add a data attribute "correct" so we know which answer is the correct one later
        if (answer.correct) {
          answerDiv.dataset.correct = answer.correct;
        }
        answerDiv.addEventListener('click', questions.chooseAnswer);
        answersElem.appendChild(answerDiv);
      });
    },
    createProgressBall: function(){
      let progressBall = document.createElement('div');
      progressBall.innerText = currentQuestionIndex + 1;
      return progressBall;
    },
    resetTest: function(){
      resultDiv.classList.add('hide');
      startButton.classList.remove('hide');
      redoButton.classList.add('hide');
      progressElem.innerHTML="";
      nextButton.classList.remove('hide');
    }
  };

  function setupEventHandlers() {
    startButton.addEventListener('click', functionHelper.start);
    nextButton.addEventListener('click', functionHelper.next);
    requestScoreButton.addEventListener('click', functionHelper.displayScore);
    redoButton.addEventListener('click', functionHelper.resetTest);
  }
  window.onload = setupEventHandlers;

  const navSlide = () => {
    const menuBar = document.querySelector('.menu-bar');
    const nav = document.querySelector('.nav');
  
    menuBar.addEventListener('click', () => {
        nav.classList.toggle('nav-link-active');
    });
  }
  
  navSlide();
})();


