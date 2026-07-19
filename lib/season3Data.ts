export type S3LineType = 'normal' | 'emphasis' | 'pause' | 'sanskrit' | 'highlight'

export interface S3Line {
  type: S3LineType
  text: string
  translation?: string // for sanskrit lines
}

export interface S3ChapterTranslation {
  chapterLabel: string
  title: string
  subtitle: string
  lines: { [key: number]: string }
  highlight?: string
}

export interface S3ChapterData {
  id: string
  sectionId: string
  chapterLabel: string
  romanNumeral: string
  title: string
  subtitle: string
  accentColor: string
  imagePath: string
  extraImages?: string[]
  titleFromLeft: boolean // Hollywood title entry direction
  cssFilter: string       // CSS filter for cinematic colour grade
  lines: S3Line[]
  translations?: {
    hindi: S3ChapterTranslation
    telugu: S3ChapterTranslation
  }
}

export const season3Chapters: S3ChapterData[] = [
  // ─── CHAPTER 1 ───────────────────────────────────────────────────────
  {
    id: 's3-ch1',
    sectionId: 's3-entrance',
    chapterLabel: 'CHAPTER I',
    romanNumeral: 'I',
    title: 'THE HIDDEN ENTRANCE',
    subtitle: 'A staircase leading into the endless darkness.',
    accentColor: '#c8a84b',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-1.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-2 (2).png'
    ],
    titleFromLeft: true,
    cssFilter: 'sepia(0.12) saturate(1.1) brightness(0.9)',
    lines: [
      {
        type: 'normal',
        text: 'After unlocking the mysterious Ashoka Chakram inside the Sun Temple, Vara and his team discover a hidden entrance beneath the ancient mechanism. A gigantic underground staircase leads into an endless darkness. The deeper they descend, the colder and more silent the atmosphere becomes. Ancient Surya carvings cover every wall, while mysterious Sanskrit inscriptions hint that no human has entered this place for thousands of years. At the end of the descent, they arrive inside an unimaginably vast underground world. Before them lies a gigantic cave unlike anything ever discovered. Everyone realizes they are standing inside one of Earth\'s greatest hidden mysteries.'
      },
      {
        type: 'highlight',
        text: 'Everyone realizes they are standing inside one of Earth\'s greatest hidden mysteries.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय I',
        title: 'छिपा हुआ प्रवेश द्वार',
        subtitle: 'अनंत अंधकार की ओर जाने वाली सीढ़ियाँ।',
        lines: {
          0: 'सूर्य मंदिर के भीतर रहस्यमयी अशोक चक्र को अनलॉक करने के बाद, वारा और उनकी टीम को प्राचीन प्रणाली के नीचे एक छिपा हुआ प्रवेश द्वार मिलता है। एक विशाल भूमिगत सीढ़ी अनंत अंधकार की ओर जाती है। वे जितना गहरा उतरते हैं, वातावरण उतना ही ठंडा और मौन होता जाता है। प्राचीन सूर्य की नक्काशी हर दीवार पर अंकित है, जबकि रहस्यमयी संस्कृत शिलालेख संकेत देते हैं कि हजारों वर्षों से किसी भी मनुष्य ने इस स्थान पर प्रवेश नहीं किया है। ढलान के अंत में, वे एक अकल्पनीय रूप से विशाल भूमिगत दुनिया के भीतर पहुंचते हैं। उनके सामने एक विशाल गुफा है, जो आज तक खोजी गई किसी भी चीज़ से अलग है। हर किसी को एहसास होता है कि वे पृथ्वी के सबसे महान छिपे रहस्यों में से एक के भीतर खड़े हैं।'
        },
        highlight: 'हर किसी को एहसास होता है कि वे पृथ्वी के सबसे महान छिपे रहस्यों में से एक के भीतर खड़े हैं।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం I',
        title: 'దాగి ఉన్న ద్వారం',
        subtitle: 'అనంతమైన చీకట్లోకి దారితీసే మెట్లు.',
        lines: {
          0: 'సూర్య దేవాలయం లోపల రహస్యమైన అశోక చక్రాన్ని తెరిచిన తర్వాత, వారా మరియు అతని బృందం పురాతన యంత్రాంగం క్రింద ఒక దాగి ఉన్న ప్రవేశ ద్వారాన్ని కనుగొంటారు. ఒక భారీ భూగర్భ మెట్లు అనంతమైన చీకట్లోకి దారితీస్తాయి. వారు ఎంత లోతుకు వెళితే, వాతావరణం అంత చల్లగా మరియు నిశ్శబ్దంగా మారుతుంది. ప్రతి గోడపై పురాతన సూర్యుని శిల్పాలు ఉన్నాయి, అలాగే వేల సంవత్సరాలుగా ఏ మానవుడు ఈ ప్రదేశంలోకి ప్రవేశించలేదని రహస్య సంస్కృత శాసనాలు సూచిస్తున్నాయి. మెట్ల ముగింపులో, వారు ఊహించలేనంత శాతం భూగర్భ ప్రపంచంలోకి చేరుకుంటారు. వారి ముందు ఇప్పటివరకు కనుగొనబడని ఒక భారీ గుహ ఉంది. తాము భూమి యొక్క అత్యంత గొప్ప రహస్యాలలో ఒకటిగా నిలిచి ఉన్నామని ప్రతి ఒక్కరూ గ్రహిస్తారు.'
        },
        highlight: 'తాము భూమి యొక్క అత్యంత గొప్ప రహస్యాలలో ఒకటిగా నిలిచి ఉన్నామని ప్రతి ఒక్కరూ గ్రహిస్తారు.'
      }
    }
  },

  // ─── CHAPTER 2 ───────────────────────────────────────────────────────
  {
    id: 's3-ch2',
    sectionId: 's3-bridge',
    chapterLabel: 'CHAPTER II',
    romanNumeral: 'II',
    title: 'THE BROKEN BRIDGE',
    subtitle: 'Balancing over collapsing stone slabs above a bottomless abyss.',
    accentColor: '#d4a843',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-3.png',
    extraImages: ['/Kalachakra-Documentary/Image/New folder/KalachakramS3-4.png'],
    titleFromLeft: false,
    cssFilter: 'sepia(0.18) saturate(1.05) brightness(0.85) hue-rotate(-5deg)',
    lines: [
      {
        type: 'normal',
        text: 'The team continues deeper until they reach an enormous broken stone bridge suspended above a bottomless abyss. One team member volunteers to remain behind as the first checkpoint, marking the safest return path and maintaining communication through the walkie-talkie. The remaining members carefully cross the fractured bridge, balancing over collapsing stone slabs while looking into the endless darkness below. Every step feels like their last.'
      },
      {
        type: 'highlight',
        text: 'Every step feels like their last.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय II',
        title: 'टूटा हुआ पुल',
        subtitle: 'अतल खाई के ऊपर ढहती शिलाओं पर संतुलन।',
        lines: {
          0: 'टीम गहराई में बढ़ना जारी रखती है जब तक कि वे एक अतल खाई के ऊपर लटके एक विशाल टूटे हुए पत्थर के पुल पर नहीं पहुँच जाते। टीम का एक सदस्य पहले चेकपॉइंट के रूप में पीछे रहने के लिए स्वेच्छा से आगे आता है, ताकि वह सबसे सुरक्षित वापसी का रास्ता चिन्हित कर सके और वॉकी-टॉकी के माध्यम से संचार बनाए रख सके। शेष सदस्य नीचे के अंतहीन अंधेरे में देखते हुए, ढहती हुई पत्थर की सिलियों पर संतुलन बनाते हुए सावधानी से टूटे हुए पुल को पार करते हैं। हर कदम ऐसा महसूस होता है जैसे उनका आखिरी कदम हो।'
        },
        highlight: 'हर कदम ऐसा महसूस होता है जैसे उनका आखिरी कदम हो।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం II',
        title: 'విరిగిన వంతెన',
        subtitle: 'అగాధమైన లోయపై కూలిపోతున్న రాతి పలకలపై సమతుల్యత.',
        lines: {
          0: 'ఈ బృందం మరింత లోతుకు ప్రయాణించి, చివరకు అగాధమైన లోయపై వేలాడుతున్న ఒక భారీ విరిగిన రాతి వంతెన వద్దకు చేరుకుంటుంది. సురక్షితమైన తిరుగు ప్రయాణ మార్గాన్ని గుర్తించడానికి మరియు వాకీ-టాకీ ద్వారా కమ్యూనికేషన్‌ను కొనసాగించడానికి బృందంలోని ఒక సభ్యుడు మొదటి చెక్‌పాయింట్‌గా వెనుక ఉండటానికి స్వచ్ఛందంగా ముందుకు వస్తాడు. మిగిలిన సభ్యులు విరిగిన ఆ వంతెనను చాలా జాగ్రత్తగా దాటుతారు, క్రింద ఉన్న అనంతమైన చీకటిని చూస్తూ, కూలిపోతున్న రాతి పలకలపై సమతుల్యతను కాపాడుకుంటూ అడుగులు వేస్తారు. ప్రతి అడుగు వారి చివరి అడుగులా అనిపిస్తుంది.'
        },
        highlight: 'ప్రతి అడుగు వారి చివరి అడుగులా అనిపిస్తుంది.'
      }
    }
  },

  // ─── CHAPTER 3 ───────────────────────────────────────────────────────
  {
    id: 's3-ch3',
    sectionId: 's3-tunnels',
    chapterLabel: 'CHAPTER III',
    romanNumeral: 'III',
    title: 'THE SEVEN TUNNELS',
    subtitle: 'Resembling the seven divine horses of Surya Bhagavan.',
    accentColor: '#b8924a',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-5.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-6.png'
    ],
    titleFromLeft: true,
    cssFilter: 'sepia(0.2) saturate(1.15) brightness(0.88)',
    lines: [
      {
        type: 'normal',
        text: 'After crossing the bridge, they reach the center of the underground cave. In front of them stand seven gigantic ancient tunnels, each stretching endlessly into darkness. The seven tunnels resemble the seven divine horses of Surya Bhagavan, each carved with unique symbols. After discussing their options, Vara decides to explore the leftmost tunnel, believing it hides the greatest clue. Another team member stays behind as the second checkpoint, ensuring nobody loses the return route. Only Vara, one male teammate, and one female teammate continue deeper.'
      },
      {
        type: 'highlight',
        text: 'Vara decides to explore the leftmost tunnel, believing it hides the greatest clue.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय III',
        title: 'सात सुरंगे',
        subtitle: 'सूर्य देव के सात दिव्य घोड़ों की प्रतीक सुरंगे।',
        lines: {
          0: 'पुल पार करने के बाद, वे भूमिगत गुफा के केंद्र में पहुँचते हैं। उनके सामने सात विशाल प्राचीन सुरंगे खड़ी हैं, जिनमें से प्रत्येक अंधेरे में अंतहीन रूप से फैली हुई है। ये सात सुरंगे सूर्य भगवान के सात दिव्य घोड़ों से मिलती-जुलती हैं, जिनमें से प्रत्येक पर अद्वितीय प्रतीक उकेरे गए हैं। अपने विकल्पों पर चर्चा करने के बाद, वारा बाईं ओर की सुरंग का पता लगाने का निर्णय लेता है, उसका मानना है कि यह सबसे बड़ा सुराग छुपाती है। एक और टीम सदस्य दूसरे चेकपॉइंट के रूप में पीछे रुकता है, यह सुनिश्चित करने के लिए कि कोई भी वापसी का मार्ग न खोए। अब केवल वारा, एक पुरुष साथी और एक महिला साथी ही गहराई में आगे बढ़ते हैं।'
        },
        highlight: 'वारा बाईं ओर की सुरंग का पता लगाने का निर्णय लेता है, उसका मानना है कि यह सबसे बड़ा सुराग छुपाती है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం III',
        title: 'ఏడు సొరంగాలు',
        subtitle: 'సూర్య భగవానుని సప్త దివ్య అశ్వాల రూపాలు.',
        lines: {
          0: 'వంతెన దాటిన తర్వాత, వారు భూగర్భ గుహ మధ్య భాగానికి చేరుకుంటారు. వారి ముందు ఏడు భారీ పురాతన సొరంగాలు ఉన్నాయి, ప్రతి ఒక్కటి చీకట్లోకి అనంతంగా సాగుతుంది. ఈ ఏడు సొరంగాలు సూర్య భగవానుని ఏడు దివ్య అశ్వాలను పోలి ఉంటాయి, ప్రతి దానిపై ప్రత్యేక చిహ్నాలు చెక్కబడి ఉన్నాయి. తమ ప్రత్యామ్నాయాల గురించి చర్చించిన తర్వాత, ఎడమవైపు ఉన్న సొరంగాన్ని అన్వేషించాలని వారా నిర్ణయించుకుంటాడు, ఎందుకంటే అది గొప్ప ఆధారాలను దాచి ఉంచుతుందని అతను నమ్ముతాడు. తిరుగు మార్గం ఎవరూ కోల్పోకుండా చూసుకోవడానికి మరో సభ్యుడు రెండవ చెక్‌పాయింట్‌గా వెనుక ఉండిపోతాడు. వారా, ఒక పురుష సహచరుడు మరియు ఒక మహిళా సహచరుడు మాత్రమే మరింత లోతుకు ప్రయాణిస్తారు.'
        },
        highlight: 'గొప్ప ఆధారాలను దాచి ఉంచుతుందని నమ్మి, ఎడమవైపు సొరంగాన్ని అన్వేషించాలని వారా నిర్ణయించుకుంటాడు.'
      }
    }
  },

  // ─── CHAPTER 4 ───────────────────────────────────────────────────────
  {
    id: 's3-ch4',
    sectionId: 's3-arrow',
    chapterLabel: 'CHAPTER IV',
    romanNumeral: 'IV',
    title: 'THE PURPLE ARROW',
    subtitle: 'An enchanted arrow flies from the complete darkness.',
    accentColor: '#c8a84b',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-7.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-8.png',
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-9.png'
    ],
    titleFromLeft: false,
    cssFilter: 'sepia(0.08) saturate(1.15) brightness(0.85) contrast(1.1)',
    lines: [
      {
        type: 'normal',
        text: 'As they travel further, every torch suddenly extinguishes. Complete darkness consumes the cave. Far in the distance, a mysterious purple-colored light begins glowing. Without warning, an ancient enchanted arrow flies from the darkness directly toward Vara. He narrowly escapes. Soon afterward, the female teammate remains behind as the third checkpoint, while Vara and the remaining male teammate continue forward.'
      },
      {
        type: 'highlight',
        text: 'Without warning, an ancient enchanted arrow flies from the darkness directly toward Vara.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय IV',
        title: 'बैंगनी तीर',
        subtitle: 'पूर्ण अंधकार से एक रहस्यमयी तीर वार करता है।',
        lines: {
          0: 'जैसे ही वे आगे बढ़ते हैं, सभी मशालें अचानक बुझ जाती हैं। पूर्ण अंधकार गुफा को ग्रस लेता है। कुछ दूरी पर, एक रहस्यमयी बैंगनी रंग की रोशनी टिमटिमाने लगती है। बिना किसी चेतावनी के, अंधेरे से एक प्राचीन मंत्रमुग्ध तीर सीधे वारा की ओर आता है। वह बाल-बाल बचता है। इसके तुरंत बाद, महिला साथी तीसरे चेकपॉइंट के रूप में पीछे रह जाती है, जबकि वारा और शेष पुरुष साथी आगे बढ़ते हैं।'
        },
        highlight: 'बिना किसी चेतावनी के, अंधेरे से एक प्राचीन मंत्रमुग्ध तीर सीधे वारा की ओर आता है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం IV',
        title: 'ఊదా బాణం',
        subtitle: 'దట్టమైన చీకటి నుండి ఒక మంత్రించిన బాణం దూసుకువస్తుంది.',
        lines: {
          0: 'వారు మరింత దూరం వెళ్లేసరికి, ఉన్నట్టుండి అన్ని దివిటీలు ఆరిపోతాయి. గుహ అంతటా దట్టమైన చీకటి అలముకుంటుంది. చాలా దూరంలో ఒక రహస్యమైన ఊదా రంగు కాంతి వెలగడం ప్రారంభమవుతుంది. ఎటువంటి హెచ్చరిక లేకుండా, చీకటి నుండి ఒక మంత్రించిన బాణం నేరుగా వారా వైపు దూసుకువస్తుంది. అతను తృటిలో తప్పించుకుంటాడు. వెంటనే, మహిళా సహచరురాలు మూడవ చెక్‌పాయింట్‌గా వెనుక ఉండిపోగా, వారా మరియు మిగిలిన పురుష సహచరుడు ముందుకు సాగుతారు.'
        },
        highlight: 'ఎటువంటి హెచ్చరిక లేకుండా, చీకటి నుండి ఒక మంత్రించిన బాణం నేరుగా వారా వైపు దూసుకువస్తుంది.'
      }
    }
  },

  // ─── CHAPTER 5 ───────────────────────────────────────────────────────
  {
    id: 's3-ch5',
    sectionId: 's3-rope',
    chapterLabel: 'CHAPTER V',
    romanNumeral: 'V',
    title: 'THE MYSTICAL ROPE',
    subtitle: 'An invisible obstacle completely blocking the passage.',
    accentColor: '#9333ea',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-10.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-11.png'
    ],
    titleFromLeft: true,
    cssFilter: 'sepia(0.1) saturate(1.2) brightness(0.9) hue-rotate(15deg)',
    lines: [
      {
        type: 'normal',
        text: 'Eventually, the team encounters an invisible mystical rope covered with glowing purple crystals, completely blocking the passage. When Vara attempts to touch it, a violent wave of energy pushes him backward. He realizes that this barrier is protected by ancient magic, and ordinary human force cannot breach it.'
      },
      {
        type: 'highlight',
        text: 'When Vara attempts to touch it, a violent wave of energy pushes him backward.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय V',
        title: 'रहस्यमयी रस्सी',
        subtitle: 'मार्ग को पूरी तरह से अवरुद्ध करने वाली एक अदृश्य बाधा।',
        lines: {
          0: 'अंततः, टीम चमकीले बैंगनी क्रिस्टल से ढकी एक अदृश्य रहस्यमयी रस्सी का सामना करते हैं, जो मार्ग को पूरी तरह से अवरुद्ध कर रही है। जब वारा इसे छूने का प्रयास करता है, तो ऊर्जा की एक प्रचंड तरंग उसे पीछे धकेल देती है। उसे एहसास होता है कि यह बाधा प्राचीन जादू से सुरक्षित है, और सामान्य मानवीय बल इसे पार नहीं कर सकता।'
        },
        highlight: 'जब वारा इसे छूने का प्रयास करता है, तो ऊर्जा की एक प्रचंड तरंग उसे पीछे धकेल देती है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం V',
        title: 'మాయా తాడు',
        subtitle: 'దారిని పూర్తిగా అడ్డుకునే ఒక అదృశ్య అడ్డంకి.',
        lines: {
          0: 'చివరికి, ఈ బృందం ప్రకాశించే ఊదా రంగు స్ఫటికాలతో కప్పబడిన ఒక అదృశ్య మాయా తాడును ఎదుర్కొంటుంది, అది దారిని పూర్తిగా అడ్డుకుంటుంది. వారా దానిని తాకడానికి ప్రయత్నించినప్పుడు, ఒక తీవ్రమైన శక్తి తరంగం అతనిని వెనక్కి నెట్టివేస్తుంది. ఈ అడ్డంకి పురాతన మాయాశక్తితో రక్షించబడుతోందని, సాధారణ మానవ శక్తి దీనిని దాటలేదని అతను గ్రహిస్తాడు.'
        },
        highlight: 'వారా దానిని తాకడానికి ప్రయత్నించినప్పుడు, ఒక తీవ్రమైన శక్తి తరంగం అతనిని వెనక్కి నెట్టివేస్తుంది.'
      }
    }
  },

  // ─── CHAPTER 6 ───────────────────────────────────────────────────────
  {
    id: 's3-ch6',
    sectionId: 's3-barrier',
    chapterLabel: 'CHAPTER VI',
    romanNumeral: 'VI',
    title: 'THE PURPLE BARRIER',
    subtitle: 'Dissolving the magical barrier using the Surya Gem.',
    accentColor: '#8b5cf6',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-12.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-13.png'
    ],
    titleFromLeft: false,
    cssFilter: 'sepia(0.08) saturate(1.25) brightness(0.88) hue-rotate(20deg)',
    lines: [
      {
        type: 'normal',
        text: 'Vara realizes only one object can interact with the mystical barrier... The Surya Gem. As he brings the Surya Gem closer, the gem begins attracting the purple crystals. One by one, the crystals shatter with high-pitched ringing sounds, dissolving the magical barrier and revealing the hidden path ahead.'
      },
      {
        type: 'highlight',
        text: 'As he brings the Surya Gem closer, the crystals shatter, dissolving the magical barrier.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय VI',
        title: 'बैंगनी बाधा',
        subtitle: 'सूर्य मणि का उपयोग करके जादुई बाधा को भंग करना।',
        lines: {
          0: 'वारा को एहसास होता है कि केवल एक ही वस्तु इस रहस्यमयी बाधा के साथ बातचीत कर सकती है... सूर्य मणि। जैसे ही वह सूर्य मणि को पास लाता है, मणि बैंगनी क्रिस्टल को आकर्षित करने लगती है। एक-एक करके, क्रिस्टल तेज आवाज के साथ टूट जाते हैं, जादुई बाधा को भंग कर देते हैं और आगे का छिपा हुआ मार्ग प्रकट करते हैं।'
        },
        highlight: 'जैसे ही वह सूर्य मणि को पास लाता है, क्रिस्टल टूटने लगते हैं और जादुई बाधा गायब हो जाती है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం VI',
        title: 'ఊదా రంగు అడ్డంకి',
        subtitle: 'సూర్య మణిని ఉపయోగించి మాయా అడ్డంకిని తొలగించడం.',
        lines: {
          0: 'ఆ మాయా అడ్డంకితో సంప్రదించగల వస్తువు సూర్య మణి మాత్రమేనని వారా గ్రహిస్తాడు. అతను సూర్య మణిని దగ్గరకు తీసుకురాగానే, అది ఆ ఊదా స్ఫటికాలను ఆకర్షించడం ప్రారంభిస్తుంది. ఒక్కొక్కటిగా ఆ స్ఫటికాలు పగిలిపోయి, మాయా అడ్డంకిని తొలగించి, ముందుకు సాగడానికి దాగి ఉన్న మార్గాన్ని చూపిస్తాయి.'
        },
        highlight: 'అతను సూర్య మణిని దగ్గరకు తీసుకురాగానే, ఆ స్ఫటికాలు పగిలిపోయి మాయా అడ్డంకిని తొలగిస్తాయి.'
      }
    }
  },

  // ─── CHAPTER 7 ───────────────────────────────────────────────────────
  {
    id: 's3-ch7',
    sectionId: 's3-hanuman',
    chapterLabel: 'CHAPTER VII',
    romanNumeral: 'VII',
    title: 'THE HANUMAN GUARDIAN',
    subtitle: 'Hanuman\'s enormous Gadha falls from above, sealing the entire passage.',
    accentColor: '#8b3a1f',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-14.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-15.png'
    ],
    titleFromLeft: true,
    cssFilter: 'sepia(0.2) saturate(1.2) brightness(0.85) contrast(1.05)',
    lines: [
      {
        type: 'normal',
        text: 'Beyond the barrier stands a colossal ancient Lord Hanuman statue, silently guarding the sacred tunnel. The two explorers cautiously approach. Suddenly... Hanuman\'s enormous Gadha falls from above, crashing across the cave and sealing the entire passage. The impact shakes the mountain itself. Unable to move the gigantic weapon, Vara begins studying its surface. Ancient carvings depict Hanuman\'s journey to Lanka, carved like a sacred stone manuscript. Hidden among those carvings, the Surya Gem emits a faint golden ray. The light reveals a secret clue—Inside the mysterious Rama Cave lies a forgotten Hanuman Gadha Necklace.'
      },
      {
        type: 'highlight',
        text: 'The light reveals a secret clue—Inside the mysterious Rama Cave lies a forgotten Hanuman Gadha Necklace.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय VII',
        title: 'हनुमान रक्षक',
        subtitle: 'हनुमान जी की विशाल गदा अचानक गिरकर मार्ग बंद कर देती है।',
        lines: {
          0: 'बाधा के पार, एक विशाल प्राचीन भगवान हनुमान की मूर्ति पवित्र सुरंग की रक्षा करते हुए चुपचाप खड़ी है। दोनों खोजकर्ता सावधानी से पास पहुँचते हैं। अचानक... हनुमान जी की विशाल गदा ऊपर से गिरती है, गुफा के आर-पार दुर्घटनाग्रस्त होती है और पूरे मार्ग को सील कर देती है। इस प्रभाव से स्वयं पर्वत हिल जाता है। इस विशाल हथियार को हिलाने में असमर्थ, वारा इसकी सतह का अध्ययन करना शुरू करता है। प्राचीन नक्काशी हनुमान जी की लंका यात्रा को दर्शाती है, जिसे एक पवित्र पत्थर की पांडुलिपि की तरह उकेरा गया है। उन नक्काशियों के बीच छिपी, सूर्य मणि एक हल्की सुनहरी किरण उत्सर्जित करती है। वह प्रकाश एक गुप्त सुराग प्रकट करता है—रहस्यमयी राम गुफा के भीतर एक भूली हुई हनुमान गदा लॉकेट (गले का हार) छिपा है।'
        },
        highlight: 'प्रकाश एक गुप्त सुराग प्रकट करता है—रहस्यमयी राम गुफा के भीतर एक भूली हुई हनुमान गदा माला छिपी है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం VII',
        title: 'హనుమాన్ రక్షకుడు',
        subtitle: 'హనుమంతుని భారీ గద పైనుండి పడి, మార్గాన్ని మూసివేస్తుంది.',
        lines: {
          0: 'ఆ అడ్డంకిని దాటిన తర్వాత, ఒక భారీ పురాతన హనుమంతుని విగ్రహం ఆ పవిత్ర సొరంగాన్ని కాపాడుతూ నిశ్శబ్దంగా నిలబడి ఉంటుంది. ఆ ఇద్దరు అన్వేషకులు జాగ్రత్తగా దగ్గరకు వెళతారు. ఉన్నట్టుండి... హనుమంతుని భారీ గద పైనుండి క్రిందికి పడి, గుహ దారిని మూసివేస్తూ కూలిపోతుంది. ఆ దెబ్బకు ఆ కొండ మొత్తం కంపిస్తుంది. ఆ భారీ ఆయుధాన్ని కదపలేక, వారా దాని ఉపరితలాన్ని పరిశీలించడం ప్రారంభిస్తాడు. పురాతన శిల్పాలు హనుమంతుని లంకా ప్రయాణాన్ని ఒక పవిత్ర రాతి గ్రంథంలా వర్ణిస్తాయి. ఆ శిల్పాల మధ్య దాగి ఉన్న సూర్య మణి ఒక సన్నని బంగారు కాంతి కిరణాన్ని ప్రసరింపజేస్తుంది. ఆ కాంతి ఒక రహస్య ఆధారాన్ని వెల్లడిస్తుంది—ఆ రహస్యమైన రామ గుహ లోపల ఒక విస్మరించబడిన హనుమాన్ గద లాకెట్ (హారం) ఉంది.'
        },
        highlight: 'ఆ కాంతి ఒక రహస్య ఆధారాన్ని చూపుతుంది—రామ గుహ లోపల ఒక విస్మరించబడిన హనుమాన్ గద హారం ఉంది.'
      }
    }
  },

  // ─── CHAPTER 8 ───────────────────────────────────────────────────────
  {
    id: 's3-ch8',
    sectionId: 's3-solo',
    chapterLabel: 'CHAPTER VIII',
    romanNumeral: 'VIII',
    title: 'VARA\'S SOLO JOURNEY',
    subtitle: 'Completely alone, Vara begins his journey into the unknown.',
    accentColor: '#c8a84b',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-16.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-17.png'
    ],
    titleFromLeft: false,
    cssFilter: 'sepia(0.15) saturate(1.1) brightness(0.85) hue-rotate(-8deg)',
    lines: [
      {
        type: 'normal',
        text: 'Realizing only one person should continue, the remaining male teammate stays behind as the final checkpoint. Now completely alone, Vara begins his journey into the unknown. The Surya Gem releases a gentle golden wind, guiding him through countless twisting passages. The deeper he walks, the older the cave becomes. Ancient Hindu architecture surrounds him. Massive forgotten temples are carved directly into the mountains. The silence becomes almost unbearable. Only the Surya Gem continues showing him the correct direction.'
      },
      {
        type: 'highlight',
        text: 'Only the Surya Gem continues showing him the correct direction.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय VIII',
        title: 'वारा की एकल यात्रा',
        subtitle: 'अब पूरी तरह अकेला, वारा अज्ञात गहराइयों में कदम रखता है।',
        lines: {
          0: 'यह महसूस करते हुए कि केवल एक व्यक्ति को आगे बढ़ना चाहिए, शेष पुरुष साथी अंतिम चेकपॉइंट के रूप में पीछे रह जाता है। अब पूरी तरह से अकेला, वारा अज्ञात में अपनी यात्रा शुरू करता है। सूर्य मणि एक कोमल सुनहरी हवा छोड़ती है, जो अनगिनत घुमावदार रास्तों के माध्यम से उसका मार्गदर्शन करती है। वह जितना आगे चलता है, गुफा उतनी ही पुरानी होती जाती है। प्राचीन हिंदू वास्तुकला उसे घेर लेती है। विशाल विस्मृत मंदिर सीधे पहाड़ों में उकेरे गए हैं। यह सन्नाटा लगभग असहनीय हो जाता है। केवल सूर्य मणि ही उसे सही दिशा दिखाती रहती है।'
        },
        highlight: 'केवल सूर्य मणि ही उसे सही दिशा दिखाती रहती है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం VIII',
        title: 'వారా ఒంటరి ప్రయాణం',
        subtitle: 'పూర్తిగా ఒంటరిగా మారిన వారా, అపరిచిత లోతుల్లోకి సాగుతాడు.',
        lines: {
          0: 'కేవలం ఒకరు మాత్రమే ముందుకు సాగాలని గ్రహించి, మిగిలిన పురుష సహచరుడు చివరి చెక్‌పాయింట్‌గా వెనుక ఉండిపోతాడు. ఇప్పుడు పూర్తిగా ఒంటరిగా మారిన వారా, తెలియని లోతుల్లోకి తన ప్రయాణాన్ని ప్రారంభిస్తాడు. సూర్య మణి ఒక మృదువైన బంగారు గాలిని విడుదల చేసి, లెక్కలేనన్ని వంకర మార్గాల గుండా అతనికి దారి చూపిస్తుంది. అతను ఎంత లోతుకు వెళితే, ఆ గుహ అంత పురాతనంగా మారుతుంది. పురాతన హిందూ వాస్తుశిల్పం అతని చుట్టూ ఉంటుంది. కొండల్లోనే చెక్కబడిన భారీ విస్మరించబడిన ఆలయాలు కనిపిస్తాయి. ఆ నిశ్శబ్దం భరించలేనంతగా మారుతుంది. సూర్య మణి మాత్రమే అతనికి సరైన దిశను చూపిస్తూ ఉంటుంది.'
        },
        highlight: 'సూర్య మణి మాత్రమే అతనికి సరైన దిశను చూపిస్తూ ఉంటుంది.'
      }
    }
  },

  // ─── CHAPTER 9 ───────────────────────────────────────────────────────
  {
    id: 's3-ch9',
    sectionId: 's3-rama',
    chapterLabel: 'CHAPTER IX',
    romanNumeral: 'IX',
    title: 'THE CAVE OF LORD RAMA',
    subtitle: 'Lord Rama sits peacefully upon a gigantic stone throne in eternal meditation.',
    accentColor: '#d4a843',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-18.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-19.png'
    ],
    titleFromLeft: true,
    cssFilter: 'sepia(0.18) saturate(1.15) brightness(0.92) contrast(1.02)',
    lines: [
      {
        type: 'normal',
        text: 'After an unimaginably long journey, Vara reaches the deepest chamber ever seen. Before him stands a colossal Lord Rama statue, so enormous that Vara is no taller than the statue\'s smallest toe. Lord Rama sits peacefully upon a gigantic stone throne in eternal meditation (Japam). Above the chamber hangs an ancient Gadha Necklace, gently suspended from the cave ceiling. As Vara carefully approaches, he reaches upward and retrieves the mysterious necklace. The moment it leaves its resting place... The cave awakens.'
      },
      {
        type: 'highlight',
        text: 'As Vara retrieves the mysterious necklace... The cave awakens.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय IX',
        title: 'भगवान राम की गुफा',
        subtitle: 'भगवान राम शिला सिंहासन पर अनंत ध्यान में लीन हैं।',
        lines: {
          0: 'एक अकल्पनीय लंबी यात्रा के बाद, वारा अब तक की सबसे गहरी गुफा में पहुँचता है। उसके सामने भगवान राम की एक विशाल मूर्ति खड़ी है, जो इतनी विशाल है कि वारा उस मूर्ति के पैर के सबसे छोटे अंगूठे से भी ऊंचा नहीं है। भगवान राम एक विशाल पत्थर के सिंहासन पर शांत अवस्था में शाश्वत ध्यान (जप) में बैठे हैं। कक्ष के ऊपर एक प्राचीन गदा माला लटकी है, जो गुफा की छत से धीरे से निलंबित है। जैसे ही वारा सावधानी से पास पहुँचता है, वह ऊपर की ओर पहुँचता है और उस रहस्यमयी माला को पुनः प्राप्त करता है। जैसे ही यह अपने विश्राम स्थल को छोड़ती है... गुफा जाग उठती है।'
        },
        highlight: 'जैसे ही वारा उस रहस्यमयी माला को उठाता है... गुफा अचानक जाग उठती है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం IX',
        title: 'శ్రీరాముని గుహ',
        subtitle: 'శ్రీరాముడు ఒక పెద్ద రాతి సింహాసనంపై ప్రశాంతంగా ధ్యాన ముద్రలో ఉన్నారు.',
        lines: {
          0: 'ఆశించలేనంత సుదీర్ఘ ప్రయాణం తర్వాత, వారా ఇప్పటివరకు చూడని అత్యంత లోతైన గదికి చేరుకుంటాడు. అతని ముందు ఒక భారీ శ్రీరాముని విగ్రహం నిలబడి ఉంది, అది ఎంత పెద్దదంటే ఆ విగ్రహం కాలి వేలి కంటే వారా పొడవు తక్కువ. శ్రీరాముడు ఒక పెద్ద రాతి సింహాసనంపై ప్రశాంతంగా కూర్చుని నిరంతర జపంలో (ధ్యానం) ఉన్నాడు. ఆ గది పైన గుహ సీలింగ్ నుండి ఒక పురాతన గద హారం మెల్లగా వేలాడుతోంది. వారా జాగ్రత్తగా దగ్గరకు వెళ్లి, పైకి చేతులు చాపి ఆ రహస్య హారాన్ని అందుకుంటాడు. అది ఆ ప్రదేశాన్ని వదిలిన మరుక్షణమే... ఆ గుహ మేల్కొంటుంది.'
        },
        highlight: 'వారా ఆ రహస్య హారాన్ని అందుకున్న మరుక్షణమే... ఆ గుహ మేల్కొంటుంది.'
      }
    }
  },

  // ─── CHAPTER 10 ───────────────────────────────────────────────────────
  {
    id: 's3-ch10',
    sectionId: 's3-collapse',
    chapterLabel: 'CHAPTER X',
    romanNumeral: 'X',
    title: 'COLLAPSE OF THE ANCIENT CAVE',
    subtitle: 'The entire underground kingdom begins trembling violently.',
    accentColor: '#cc3300',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-20.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-21.png'
    ],
    titleFromLeft: false,
    cssFilter: 'sepia(0.12) saturate(1.3) brightness(0.82) contrast(1.1) hue-rotate(-12deg)',
    lines: [
      {
        type: 'normal',
        text: 'The entire underground kingdom begins trembling violently. Massive rocks fall from every direction. Ancient pillars collapse. The cave starts breaking apart after remaining undisturbed for thousands of years. Across every checkpoint, Vara\'s teammates hear the destruction through their walkie-talkies. Everyone immediately begins running toward the exit, desperately trying to escape before the mountain collapses.'
      },
      {
        type: 'highlight',
        text: 'Everyone immediately begins running toward the exit, desperately trying to escape.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय X',
        title: 'प्राचीन गुफा का ढहना',
        subtitle: 'पहाड़ कांपने लगा है और प्राचीन खंभे टूट रहे हैं।',
        lines: {
          0: 'पूरा भूमिगत साम्राज्य हिंसक रूप से कांपने लगता है। हर दिशा से विशाल चट्टानें गिरने लगती हैं। प्राचीन खंभे ढह जाते हैं। हजारों वर्षों तक अछूती रहने के बाद गुफा बिखरने लगती है। सभी चेकपॉइंट्स पर, वारा के साथी वॉकी-टॉकी के माध्यम से तबाही की आवाज सुनते हैं। हर कोई तुरंत निकास द्वार की ओर भागने लगता है, पर्वत के ढहने से पहले हताश होकर बचने का प्रयास करता है।'
        },
        highlight: 'हर कोई तुरंत निकास द्वार की ओर भागने लगता है, पर्वत के ढहने से पहले हताश होकर बचने का प्रयास करता है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం X',
        title: 'పురాతన గుహ కూలిపోవడం',
        subtitle: 'భూగర్భ సామ్రాజ్యం మొత్తం తీవ్రంగా కదలడం ప్రారంభించింది.',
        lines: {
          0: 'భూగర్భ సామ్రాజ్యం మొత్తం హింసాత్మకంగా కదలడం ప్రారంభిస్తుంది. ప్రతి వైపు నుండి భారీ బండరాళ్లు పడిపోతుంటాయి. పురాతన స్తంభాలు కూలిపోతాయి. వేల సంవత్సరాలుగా కలత చెందని ఆ గుహ ముక్కలైపోవడం ప్రారంభిస్తుంది. చెక్‌పాయింట్‌ల వద్ద ఉన్న వారా సహచరులు వాకీ-టాకీల ద్వారా ఆ వినాశనాన్ని వింటారు. కొండ కూలిపోకముందే తప్పించుకోవడానికి ప్రతి ఒక్కరూ వెంటనే నిష్క్రమణ ద్వారం వైపు పరుగెత్తడం ప్రారంభిస్తారు.'
        },
        highlight: 'కొండ కూలిపోకముందే తప్పించుకోవడానికి ప్రతి ఒక్కరూ వెంటనే పరుగులు తీస్తారు.'
      }
    }
  },

  // ─── CHAPTER 11 ──────────────────────────────────────────────────────
  {
    id: 's3-ch11',
    sectionId: 's3-escape',
    chapterLabel: 'CHAPTER XI',
    romanNumeral: 'XI',
    title: 'VARA\'S FINAL ESCAPE',
    subtitle: 'Thousands of rocks bury him beneath the rubble.',
    accentColor: '#cc3300',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-22.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/New folder/KalachakramS3-23.png'
    ],
    titleFromLeft: true,
    cssFilter: 'sepia(0.2) saturate(1.1) brightness(0.8) hue-rotate(-8deg)',
    lines: [
      {
        type: 'normal',
        text: 'Holding both the Surya Gem and the newly discovered Hanuman Gadha Necklace, Vara sprints through the collapsing tunnel. Enormous boulders crash around him. Dust fills the air. The path behind him disappears. His teammates desperately call his name through the walkie-talkie, but the signal grows weaker with every second. Just as Vara reaches the final stretch... A gigantic section of the cave ceiling collapses. Thousands of rocks bury him beneath the rubble. The Surya Gem slips from his hand and rolls onto the cave floor. Everything becomes silent.'
      },
      {
        type: 'highlight',
        text: 'The Surya Gem slips from his hand and rolls onto the cave floor. Everything becomes silent.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय XI',
        title: 'वारा का अंतिम बचाव',
        subtitle: 'मलबे के नीचे दबी सूर्य मणि और गुफा में पसरा सन्नाटा।',
        lines: {
          0: 'सूर्य मणि और नवनिर्मित हनुमान गदा माला दोनों को पकड़े हुए, वारा ढहती हुई सुरंग के बीच से दौड़ता है। उसके चारों ओर विशाल चट्टानें गिरती हैं। हवा धूल से भर जाती है। उसके पीछे का रास्ता गायब हो जाता है। उसके साथी वॉकी-टॉकी के माध्यम से हताश होकर उसका नाम पुकारते हैं, लेकिन हर सेकंड के साथ सिग्नल कमजोर होता जाता है। जैसे ही वारा अंतिम हिस्से में पहुँचता है... गुफा की छत का एक विशाल हिस्सा ढह जाता है। हजारों चट्टानें उसे मलबे के नीचे दबा देती हैं। सूर्य मणि उसके हाथ से फिसल जाती है और गुफा के फर्श पर लुढ़क जाती है। सब कुछ शांत हो जाता है।'
        },
        highlight: 'सूर्य मणि उसके हाथ से फिसलकर फर्श पर गिर जाती है और चारों ओर पूर्ण सन्नाटा छा जाता है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం XI',
        title: 'వారా తుది పరుగు',
        subtitle: 'ఆశించిన వేలాది బండరాళ్ల శిథిలాల క్రింద చిక్కుకుపోయిన వారా.',
        lines: {
          0: 'సూర్య మణి మరియు కొత్తగా కనుగొన్న హనుమాన్ గద హారం రెండింటినీ పట్టుకుని, వారా కూలిపోతున్న సొరంగం గుండా వేగంగా పరుగెత్తుతాడు. అతని చుట్టూ పెద్ద పెద్ద బండరాళ్లు పడిపోతాయి. గాలి ధూళితో నిండిపోతుంది. అతని వెనుక ఉన్న దారి మాయమవుతుంది. అతని సహచరులు వాకీ-టాకీ ద్వారా అతని పేరును పిలుస్తారు, కానీ ప్రతి సెకనుకు సిగ్నల్ బలహీనపడుతుంది. వారా చివరి భాగానికి చేరుకునే సరికి... గుహ సీలింగ్ లోని ఒక పెద్ద భాగం కూలిపోతుంది. వేలాది రాళ్లు అతనిపై పడి, అతడిని శిథిలాల క్రింద పూడ్చివేస్తాయి. సూర్య మణి అతని చేతి నుండి జారి గుహ నేలపై దొర్లిపోతుంది. అంతటా నిశ్శబ్దం ఆవరిస్తుంది.'
        },
        highlight: 'సూర్య మణి అతని చేతి నుండి జారి గుహ నేలపై దొర్లిపోతుంది. అంతటా నిశ్శబ్దం ఆవరిస్తుంది.'
      }
    }
  },

  // ─── CHAPTER 12 ──────────────────────────────────────────────────────
  {
    id: 's3-ch12',
    sectionId: 's3-arrival',
    chapterLabel: 'CHAPTER XII',
    romanNumeral: 'XII',
    title: 'THE UNKNOWN ARRIVAL',
    subtitle: 'The Surya Gem begins glowing brighter, as though recognizing the newcomer.',
    accentColor: '#e8c96a',
    imagePath: '/Kalachakra-Documentary/Image/New folder/KalachakramS3-24.png',
    extraImages: ['/Kalachakra-Documentary/Image/New folder/KalachakramS3-25.png'],
    titleFromLeft: false,
    cssFilter: 'sepia(0.08) saturate(1.25) brightness(0.95)',
    lines: [
      {
        type: 'normal',
        text: 'Minutes pass. The dust slowly settles. Vara lies unconscious beneath the fallen rocks. The Surya Gem glows faintly beside him. Then... Heavy footsteps echo through the ancient chamber. A mysterious figure slowly approaches. Only the lower part of the stranger is visible. The figure stops directly in front of Vara\'s unconscious body. The identity remains hidden. The Surya Gem begins glowing brighter, as though recognizing the newcomer. The screen fades to black.'
      },
      {
        type: 'emphasis',
        text: 'TO BE CONTINUED...'
      },
      {
        type: 'highlight',
        text: 'The identity remains hidden. The Surya Gem begins glowing brighter, as though recognizing the newcomer.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय XII',
        title: 'अन्तरिक्षीय आगमन (सीज़न समाप्त)',
        subtitle: 'सूर्य मणि अधिक चमकने लगी है, मानो आने वाले को पहचानती हो।',
        lines: {
          0: 'अभिनव मिनट बीत जाते हैं। धूल धीरे-धीरे जमती है। वारा गिरी हुई चट्टानों के नीचे अचेत पड़ा है। सूर्य मणि उसके पास धीमी रोशनी के साथ चमक रही है। तभी... उस प्राचीन कक्ष में भारी कदमों की आवाज गूंजती है। एक रहस्यमयी आकृति धीरे-धीरे वारा की ओर बढ़ती है। अजनबी का केवल निचला हिस्सा दिखाई दे रहा है। वह आकृति वारा के बेहोश शरीर के ठीक सामने आकर रुक जाती है। पहचान छिपी रहती है। सूर्य मणि और अधिक चमकने लगती है, मानो नवागंतुक को पहचान रही हो। स्क्रीन काली हो जाती है।',
          1: 'जारी रहेगा...'
        },
        highlight: 'पहचान अभी भी छिपी हुई है। सूर्य मणि और अधिक चमकने लगती है, मानो नवागंतुक को पहचान रही हो।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం XII',
        title: 'తెలియని ఆగమనం (సీజన్ ముగింపు)',
        subtitle: 'ఆ కొత్త వ్యక్తిని గుర్తించినట్లు సూర్య మణి మరింత వెలుగుతుంది.',
        lines: {
          0: 'నిమిషాలు గడుస్తాయి. ధూళి మెల్లగా స్థిరపడుతుంది. పడిపోయిన రాళ్ల క్రింద వారా స్పృహ కోల్పోయి పడి ఉన్నాడు. సూర్య మణి అతని పక్కన స్వల్పంగా వెలుగుతోంది. అప్పుడు... ఆ పురాతన గదిలో భారీ అడుగుజాడల శబ్దం వినిపిస్తుంది. ఒక రహస్య వ్యక్తి నెమ్మదిగా వారా వైపు వస్తాడు. ఆ అపరిచిత వ్యక్తి యొక్క క్రింది భాగం మాత్రమే కనిపిస్తుంది. ఆ వ్యక్తి వారా అపస్మారక శరీరం ముందు వచ్చి ఆగుతాడు. ఆ వ్యక్తి గుర్తింపు ఇంకా రహస్యంగానే ఉంది. ఆ కొత్త వ్యక్తిని గుర్తించినట్లు సూర్య మణి మరింత ప్రకాశవంతంగా వెలగడం ప్రారంభిస్తుంది. స్క్రీన్ బ్లాక్‌గా మారుతుంది।',
          1: 'ఇంకా ఉంది...'
        },
        highlight: 'ఆ వ్యక్తి గుర్తింపు రహస్యంగానే ఉంది. ఆ కొత్త వ్యక్తిని గుర్తించినట్లు సూర్య మణి మరింత ప్రకాశవంతంగా వెలుగుతుంది.'
      }
    }
  }
]
