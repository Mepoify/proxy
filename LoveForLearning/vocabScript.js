// List of words with their meanings, pronunciations, and example sentences
const words = [
    { word: "Aberration", meaning: "A departure from what is normal or expected.", pronunciation: "ab-uh-rey-shun", example: "The sudden drop in temperature was an aberration in the summer weather." },
    { word: "Abscond", meaning: "To leave hurriedly and secretly.", pronunciation: "ab-skond", example: "The thief absconded with the jewels before the police arrived." },
    { word: "Adulation", meaning: "Excessive praise or flattery.", pronunciation: "aj-uh-ley-shun", example: "The actor was uncomfortable with the constant adulation from his fans." },
    { word: "Altruistic", meaning: "Unselfishly concerned for the well-being of others.", pronunciation: "al-truh-wis-tik", example: "Her altruistic actions made her beloved by the community." },
    { word: "Ambiguous", meaning: "Open to more than one interpretation.", pronunciation: "am-big-yoo-uhs", example: "The instructions were so ambiguous that no one knew how to complete the task." },
    { word: "Apathy", meaning: "Lack of interest, enthusiasm, or concern.", pronunciation: "ap-uh-thee", example: "His apathy toward the environment was shocking, especially since he worked in ecology." },
    { word: "Arduous", meaning: "Involving a lot of effort and hard work.", pronunciation: "ar-joo-uhs", example: "The journey through the mountains was arduous, but rewarding." },
    { word: "Ascertain", meaning: "To find out or determine something.", pronunciation: "as-er-teyn", example: "I need to ascertain the cause of the malfunction before we can proceed." },
    { word: "Benevolent", meaning: "Well-meaning and kind.", pronunciation: "buh-nev-uh-luhnt", example: "The benevolent charity helped thousands of families in need." },
    { word: "Cacophony", meaning: "A harsh, discordant mixture of sounds.", pronunciation: "ka-kof-uh-nee", example: "The cacophony of the city traffic made it hard to focus." },
    { word: "Candor", meaning: "The quality of being open and honest.", pronunciation: "kan-dur", example: "Her candor about the situation was refreshing and appreciated." },
    { word: "Capricious", meaning: "Given to sudden and unaccountable changes in mood or behavior.", pronunciation: "ka-prish-uhs", example: "The weather in the mountains was capricious, changing from sun to snow in minutes." },
    { word: "Clairvoyant", meaning: "A person who claims to have a supernatural ability to perceive events in the future or beyond normal sensory contact.", pronunciation: "klair-voy-uhnt", example: "The clairvoyant predicted a major change in my life within the next year." },
    { word: "Cogent", meaning: "Clear, logical, and convincing.", pronunciation: "koh-juhnt", example: "His argument was cogent and well-reasoned, persuading everyone in the room." },
    { word: "Concise", meaning: "Giving a lot of information clearly and in a few words.", pronunciation: "kuh-nys", example: "The presentation was concise and to the point, covering everything necessary." },
    { word: "Conducive", meaning: "Making a certain situation or outcome likely or possible.", pronunciation: "kun-doo-siv", example: "A quiet environment is conducive to studying effectively." },
    { word: "Convoluted", meaning: "Extremely complex and difficult to follow.", pronunciation: "kon-vuh-loo-ted", example: "The instructions were so convoluted that I gave up trying to follow them." },
    { word: "Cursory", meaning: "Hasty and not thorough.", pronunciation: "kur-suh-ree", example: "She gave the report a cursory glance before submitting it." },
    { word: "Deference", meaning: "Humble submission and respect.", pronunciation: "def-uh-ruhnts", example: "He showed deference to his elder's opinions, even when he disagreed." },
    { word: "Delineate", meaning: "To describe or portray something precisely.", pronunciation: "di-lin-ee-ayt", example: "The artist was able to delineate the landscape with stunning accuracy." },
    { word: "Denounce", meaning: "To publicly declare something to be wrong or evil.", pronunciation: "di-nowns", example: "The politician denounced the corruption in his party." },
    { word: "Disparage", meaning: "To regard or represent as being of little worth.", pronunciation: "di-spar-ij", example: "She disparaged his efforts, calling them insignificant." },
    { word: "Ebullient", meaning: "Cheerful and full of energy.", pronunciation: "ih-buhl-yuhnt", example: "Her ebullient personality made her the life of the party." },
    { word: "Eccentric", meaning: "Unconventional and slightly strange.", pronunciation: "ik-sen-trik", example: "His eccentric behavior made him an intriguing character." },
    { word: "Eclectic", meaning: "Deriving ideas, style, or taste from a broad and diverse range of sources.", pronunciation: "ih-klek-tik", example: "Her eclectic taste in music ranged from classical to modern pop." },
    { word: "Enervate", meaning: "To drain of energy or vitality.", pronunciation: "en-er-veyt", example: "The hot weather enervated him, making it difficult to concentrate." },
    { word: "Ephemeral", meaning: "Lasting for a very short time.", pronunciation: "ih-fem-er-uhl", example: "The beauty of the sunset was ephemeral, disappearing as quickly as it arrived." },
    { word: "Erudite", meaning: "Having or showing great knowledge or learning.", pronunciation: "er-yoo-dahyt", example: "The erudite scholar captivated the audience with his vast knowledge." },
    { word: "Exacerbate", meaning: "To make a problem or situation worse.", pronunciation: "ig-zas-er-bayt", example: "His rude comments only exacerbated the tension in the room." },
    { word: "Exemplary", meaning: "Serving as a desirable model.", pronunciation: "ig-zem-pler-ee", example: "Her exemplary work ethic earned her a promotion." },
    { word: "Facetious", meaning: "Treating serious issues with inappropriate humor.", pronunciation: "fuh-see-shuhs", example: "His facetious remarks about the accident were inappropriate." },
    { word: "Fatuous", meaning: "Silly and pointless.", pronunciation: "fatch-oo-uhs", example: "Her fatuous comments about the topic showed a lack of understanding." },
    { word: "Flabbergasted", meaning: "Astonished or greatly surprised.", pronunciation: "flab-er-gas-tid", example: "I was flabbergasted when I saw the surprise party they had planned for me." },
    { word: "Flamboyant", meaning: "Attracting attention due to exuberance or style.", pronunciation: "flam-boi-uhnt", example: "His flamboyant outfit made him the center of attention." },
    { word: "Fortuitous", meaning: "Happening by chance, often in a lucky way.", pronunciation: "for-too-i-tuhs", example: "The fortuitous meeting led to a lifelong friendship." },
    { word: "Frivolous", meaning: "Not having any serious purpose or value.", pronunciation: "friv-uh-luhs", example: "She spent money on frivolous items she didn’t need." },
    { word: "Galvanize", meaning: "To shock or excite someone into taking action.", pronunciation: "gal-vuh-nahyz", example: "The news of the disaster galvanized the community into helping." },
    { word: "Garrulous", meaning: "Excessively talkative.", pronunciation: "gar-uh-luhs", example: "He became garrulous after a few drinks, talking nonstop." },
    { word: "Grandiose", meaning: "Impressive in appearance or style, often to the point of exaggeration.", pronunciation: "gran-dee-ohs", example: "The grandiose plans for the mansion were unrealistic." },
    { word: "Grievous", meaning: "Very serious or severe.", pronunciation: "gree-vuhs", example: "The grievous injury required immediate medical attention." },
    { word: "Guile", meaning: "Sly or cunning intelligence.", pronunciation: "gahyl", example: "His guile allowed him to outsmart his competitors." },
    { word: "Hapless", meaning: "Unlucky or unfortunate.", pronunciation: "hap-luhs", example: "The hapless traveler lost his passport and wallet on the same day." },
    { word: "Haughty", meaning: "Arrogantly superior and disdainful.", pronunciation: "haw-tee", example: "Her haughty attitude made her difficult to work with." },
    { word: "Hubris", meaning: "Excessive pride or self-confidence.", pronunciation: "hyoo-bris", example: "His hubris led him to underestimate his opponents." },
    { word: "Ignominious", meaning: "Deserving or causing public disgrace or shame.", pronunciation: "ig-nuh-min-ee-uhs", example: "The team's ignominious defeat left them humiliated." },
    { word: "Impetuous", meaning: "Acting or done quickly and without thought or care.", pronunciation: "im-pech-oo-uhs", example: "Her impetuous decision to quit her job left her with no backup plan." },
    { word: "Ineffable", meaning: "Too great or extreme to be expressed or described in words.", pronunciation: "in-ef-uh-buhl", example: "The beauty of the sunset was ineffable, leaving me speechless." },
    { word: "Inexorable", meaning: "Impossible to stop or prevent.", pronunciation: "in-ek-sawr-uh-buhl", example: "The inexorable march of time cannot be avoided." },
    { word: "Insidious", meaning: "Proceeding in a subtle way but with harmful effects.", pronunciation: "in-sid-ee-uhs", example: "The insidious effects of smoking are often not immediately apparent." },
    { word: "Intrepid", meaning: "Fearless; adventurous.", pronunciation: "in-trep-id", example: "The intrepid explorers trekked across the arctic region." },
    { word: "Irrelevant", meaning: "Not connected with or relevant to something.", pronunciation: "ih-rel-uh-vuhnt", example: "His comments were irrelevant to the topic at hand." },
    { word: "Juxtapose", meaning: "To place two things side by side for comparison.", pronunciation: "juhk-stuh-pohz", example: "The artist juxtaposed light and dark colors to create contrast." },
    { word: "Kinetic", meaning: "Relating to or resulting from motion.", pronunciation: "ki-net-ik", example: "The kinetic energy of the moving car is converted into heat." },
    { word: "Lethargic", meaning: "Sluggish and lacking energy.", pronunciation: "li-thar-jik", example: "I felt lethargic after staying up too late last night." },
    { word: "Magnanimous", meaning: "Generous or forgiving, especially toward a rival or less powerful person.", pronunciation: "mag-nan-uh-muhs", example: "His magnanimous gesture helped mend the broken relationship." },
    { word: "Malevolent", meaning: "Having or showing a wish to do evil to others.", pronunciation: "muh-lev-uh-luhnt", example: "The malevolent witch cursed the village out of spite." },
    { word: "Mellifluous", meaning: "Sweet or musical; pleasant to hear.", pronunciation: "muh-lif-loo-uhs", example: "The mellifluous sound of the violin calmed my nerves." },
    { word: "Nefarious", meaning: "Wicked or criminal.", pronunciation: "ni-fair-ee-uhs", example: "The nefarious actions of the villain were finally exposed." },
    { word: "Obfuscate", meaning: "To deliberately make something unclear or difficult to understand.", pronunciation: "ob-fuh-skeyt", example: "The lawyer's long-winded speech only served to obfuscate the truth." },
    { word: "Ominous", meaning: "Giving the impression that something bad is going to happen.", pronunciation: "om-uh-nuhs", example: "The dark clouds were an ominous sign of the approaching storm." },
    { word: "Opulent", meaning: "Rich, luxurious, and lavish.", pronunciation: "op-yuh-luhnt", example: "The opulent mansion had gold fixtures and expensive artwork." },
    { word: "Pernicious", meaning: "Having a harmful effect, especially in a gradual or subtle way.", pronunciation: "per-nish-uhs", example: "The pernicious influence of the media can affect young people's self-esteem." },
    { word: "Pragmatic", meaning: "Dealing with things sensibly and realistically.", pronunciation: "prag-mat-ik", example: "She took a pragmatic approach to solving the issue." },
    { word: "Quixotic", meaning: "Extremely idealistic; unrealistic and impractical.", pronunciation: "kwik-sot-ik", example: "His quixotic dream of world peace led him to create a humanitarian organization." },
    { word: "Rancorous", meaning: "Characterized by bitterness or resentment.", pronunciation: "rang-kuh-ruhs", example: "The rancorous dispute between the two neighbors lasted for years." },
    { word: "Recalcitrant", meaning: "Having an obstinately uncooperative attitude.", pronunciation: "ri-kal-si-truhnt", example: "The recalcitrant student refused to follow the teacher’s instructions." },
    { word: "Resilient", meaning: "Able to withstand or recover from difficult conditions.", pronunciation: "ri-zil-yuhnt", example: "Her resilient spirit helped her recover quickly after the setback." },
    { word: "Sagacious", meaning: "Having or showing keen mental discernment and good judgment.", pronunciation: "suh-gey-shuhs", example: "The sagacious leader guided the company through tough times." },
    { word: "Salient", meaning: "Most noticeable or important.", pronunciation: "sey-lee-uhnt", example: "The salient features of the new software were its speed and simplicity." },
    { word: "Supercilious", meaning: "Behaving or looking as though one thinks one is superior to others.", pronunciation: "soo-per-sil-ee-uhs", example: "His supercilious attitude alienated him from the rest of the group." },
    { word: "Taciturn", meaning: "Reserved or uncommunicative in speech.", pronunciation: "tas-i-turn", example: "He was a taciturn man, always keeping his thoughts to himself." },
    { word: "Ubiquitous", meaning: "Present, appearing, or found everywhere.", pronunciation: "yoo-bik-wi-tuhs", example: "Smartphones are ubiquitous in today’s society." },
    { word: "Venerable", meaning: "Accorded a great deal of respect, especially because of age or dignity.", pronunciation: "ven-er-uh-buhl", example: "The venerable professor was highly respected in his field." },
    { word: "Vex", meaning: "To make someone feel annoyed or frustrated.", pronunciation: "veks", example: "Her constant questions began to vex him." },
    { word: "Voracious", meaning: "Wanting or devouring great quantities of food.", pronunciation: "vuh-ray-shuhs", example: "He had a voracious appetite after the long hike." },
    { word: "Wistful", meaning: "Longing or yearning for something that may never be attained.", pronunciation: "wist-fuhl", example: "She had a wistful look in her eyes when she thought of her childhood home." }
];

// Function to generate a random word and its meaning, pronunciation, and example sentence
function generateWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];

    document.getElementById("wordDisplay").innerText = word.word;
    document.getElementById("meaning").innerText = "Meaning: " + word.meaning;
    document.getElementById("pronunciation").innerText = "Pronunciation: " + word.pronunciation;
    document.getElementById("sentence").innerText = "Example sentence: " + word.example;
}

// Event listener for the button
document.getElementById("generateBtn").addEventListener("click", generateWord);

