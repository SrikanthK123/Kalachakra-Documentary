export type S2LineType = 'normal' | 'emphasis' | 'pause' | 'sanskrit' | 'highlight'

export interface S2Line {
  type: S2LineType
  text: string
  translation?: string // for sanskrit lines
}

export interface S2ChapterTranslation {
  chapterLabel: string
  title: string
  subtitle: string
  lines: { [key: number]: string }
  highlight?: string
}

export interface S2ChapterData {
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
  lines: S2Line[]
  translations?: {
    hindi: S2ChapterTranslation
    telugu: S2ChapterTranslation
  }
}

export const season2Chapters: S2ChapterData[] = [
  // ─── PROLOGUE ────────────────────────────────────────────────────────
  {
    id: 's2-prologue',
    sectionId: 's2-awakening',
    chapterLabel: 'PROLOGUE',
    romanNumeral: '◈',
    title: 'THE RETURN',
    subtitle: 'Kalachakra had returned its chosen bearer.',
    accentColor: '#c8a84b',
    imagePath: '/Kalachakra-Documentary/Image/SankritSlokamWideView.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/VaraRespawnInCaveS2-1.png'],
    titleFromLeft: true,
    cssFilter: 'sepia(0.2) saturate(1.15) brightness(0.92)',
    lines: [
      {
        type: 'normal',
        text: 'Thirty-six hours after Vara vanished inside the collapsing cave, the impossible happened deep beneath the earth. Inside the silent ruins, ancient Sanskrit symbols began glowing again as a sudden pulse of golden energy spiraled across the cave floor. Rebuilt by a power beyond human understanding, Vara materialized out of air and collapsed to his knees—weak, breathless, and disoriented. Fragments of a lava world, a broken bridge, a burning compass, and a divine eye watching him flashed through his mind, but nothing was clear. While the world above believed Vara was dead, beneath the earth, Kalachakra had returned its chosen bearer.'
      },
      {
        type: 'highlight',
        text: 'Yet beneath the earth… Kalachakra had returned its chosen bearer.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'प्रस्तावना',
        title: 'द रिटर्न',
        subtitle: 'कालचक्र ने अपने चुने हुए वाहक को वापस भेज दिया था।',
        lines: {
          0: 'वारा के ढहती हुई गुफा के भीतर गायब होने के छत्तीस घंटे बाद, पृथ्वी के गहरे गर्भ में कुछ असंभव घटित हुआ। मौन खंडहरों के भीतर, प्राचीन संस्कृत प्रतीक फिर से चमकने लगे क्योंकि सुनहरी ऊर्जा का एक तीव्र स्पंदन गुफा की सतह पर घूमने लगा। मानवीय समझ से परे एक शक्ति द्वारा पुनर्जीवित, वारा शून्य से प्रकट हुआ और अपने घुटनों के बल गिर गया—कमजोर, बेदम और दिशाहीन। लावा की दुनिया, एक टूटा हुआ पुल, एक जलता हुआ कम्पास और उस पर नजर रखती एक दिव्य आंख के अंश उसके दिमाग में कौंध गए, लेकिन कुछ भी स्पष्ट नहीं था। जबकि ऊपर की दुनिया मान चुकी थी कि वारा मर चुका है, पृथ्वी के नीचे, कालचक्र ने अपने चुने हुए वाहक को लौटा दिया था।'
        },
        highlight: 'फिर भी पृथ्वी के नीचे... कालचक्र ने अपने चुने हुए वाहक को लौटा दिया था।'
      },
      telugu: {
        chapterLabel: 'పీఠిక',
        title: 'ది రిటర్న్',
        subtitle: 'కాలచక్రం తన ఎంపిక చేసుకున్న వాహకుడిని తిరిగి పంపింది.',
        lines: {
          0: 'కూలిపోతున్న గుహ లోపల వారా అదృశ్యమైన ముప్పై ఆరు గంటల తర్వాత, భూమి లోపల అసాధ్యమైనది సంభవించింది. నిశ్శబ్ద శిథిలాల లోపల, పురాతన సంస్కృత చిహ్నాలు మళ్లీ వెలగడం ప్రారంభించాయి, గుహ నేలపై బంగారు శక్తి ప్రవాహం తిరిగింది. మానవ గ్రహణశక్తికి అందని ఒక శక్తితో పునర్నిర్మించబడిన వారా, గాలి నుండి ప్రత్యక్షమై మోకాళ్లపై పడిపోయాడు—బలహీనంగా, ఊపిరి ఆడక, అయోమయంగా. లావా ప్రపంచం, విరిగిన వంతెన, కాలుతున్న దిక్సూచి మరియు తనను గమనిస్తున్న దైవిక కన్ను యొక్క దృశ్యాలు అతని మనస్సులో మెరిసాయి, కానీ ఏదీ స్పష్టంగా లేదు. పై ప్రపంచం వారా చనిపోయాడని నమ్మిన సమయంలో, భూమి క్రింద, కాలచక్రం తన ఎంపిక చేసుకున్న వాహకుడిని తిరిగి తీసుకువచ్చింది.'
        },
        highlight: 'అయినప్పటికీ భూమి క్రింద... కాలచక్రం తన ఎంపిక చేసుకున్న వాహకుడిని తిరిగి తీసుకువచ్చింది.'
      }
    }
  },

  // ─── CHAPTER 1 ───────────────────────────────────────────────────────
  {
    id: 's2-ch1',
    sectionId: 's2-split',
    chapterLabel: 'CHAPTER I',
    romanNumeral: 'I',
    title: 'THE CAVE THAT BREATHES',
    subtitle: 'As if the power only existed inside the cave.',
    accentColor: '#d4a843',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/VaraExitCaveS2-2.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/VaraNormalFormExitCaveS2-3.png'],
    titleFromLeft: false,
    cssFilter: 'sepia(0.18) saturate(1.1) brightness(0.9) hue-rotate(-5deg)',
    lines: [
      {
        type: 'normal',
        text: 'Vara wandered through the cave searching for an exit, but the cave no longer looked normal as its stone walls shifted like ancient machinery, planetary symbols rotated across the surfaces, and massive carvings of gods stared at him from the shadows. Suddenly, a burning sensation flared on his forehead as a glowing golden tilakam appeared, infusing him with an ancient power that slowed his heartbeat and made his eyes glow faintly. In response, the compass activated, its golden rings rotating to project a celestial pathway ahead. But the moment Vara escaped the cave, the tilakam disappeared, the compass fell silent, and everything vanished, as if the power only existed inside the cave.'
      },
      {
        type: 'highlight',
        text: 'As if the power only existed inside the cave.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय I',
        title: 'सांस लेती गुफा',
        subtitle: 'मानो वह शक्ति केवल गुफा के भीतर ही मौजूद थी।',
        lines: {
          0: 'वारा बाहर निकलने का रास्ता खोजते हुए गुफा में भटकने लगा, लेकिन गुफा अब सामान्य नहीं लग रही थी क्योंकि उसकी पत्थर की दीवारें प्राचीन मशीनरी की तरह खिसक रही थीं, ग्रहों के प्रतीक सतहों पर घूम रहे थे, और देवताओं की विशाल नक्काशीदार आकृतियां परछाइयों से उसे घूर रही थीं। अचानक, उसके माथे पर जलन का अहसास हुआ और एक चमकता हुआ सुनहरा तिलक प्रकट हुआ, जिसने उसे एक प्राचीन शक्ति से भर दिया जिसने उसके दिल की धड़कन को धीमा कर दिया और उसकी आंखों को हल्का चमका दिया। जवाब में, कम्पास सक्रिय हो गया, उसके सुनहरे छल्ले घूमते हुए आगे एक खगोलीय मार्ग प्रक्षेपित करने लगे। लेकिन जैसे ही वारा गुफा से बाहर निकला, तिलक गायब हो गया, कम्पास खामोश हो गया, और सब कुछ ओझल हो गया, मानो वह शक्ति केवल गुफा के भीतर ही मौजूद थी।'
        },
        highlight: 'मानो वह शक्ति केवल गुफा के भीतर ही मौजूद थी।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం I',
        title: 'శ్వాసించే గుహ',
        subtitle: 'ఆ శక్తి కేవలం గుహ లోపల మాత్రమే ఉన్నట్లు.',
        lines: {
          0: 'వారా గుహ నుండి బయటపడే మార్గం కోసం వెతుకుతూ తిరిగాడు, కానీ గుహ ఇక సాధారణంగా లేదు; దాని రాతి గోడలు పురాతన యంత్రాలలా కదులుతున్నాయి, గ్రహాల గుర్తులు ఉపరితలాలపై తిరుగుతున్నాయి, దేవుళ్ల విగ్రహాలు నీడల నుండి అతనిని చూస్తున్నాయి. హఠాత్తుగా, అతని నొసటిపై మండుతున్న అనుభూతి కలిగి తిలకం ప్రత్యక్షమైంది, అతని గుండె వేగాన్ని తగ్గించి, కళ్లు మెరిసేలా పురాతన శక్తిని ఇచ్చింది. దీనికి స్పందనగా, దిక్సూచి పనిచేయడం ప్రారంభించింది, దాని బంగారు వలయాలు తిరుగుతూ ముందు దైవిక మార్గాన్ని చూపించాయి. కానీ వారా గుహ నుండి బయటకు వచ్చిన మరుక్షణమే, ఆ తిలకం అదృశ్యమైంది, దిక్సూచి మూగబోయింది మరియు అంతా మాయమైంది, ఆ శక్తి కేవలం గుహ లోపల మాత్రమే ఉన్నట్లు.'
        },
        highlight: 'ఆ శక్తి కేవలం గుహ లోపల మాత్రమే ఉన్నట్లు.'
      }
    }
  },

  // ─── CHAPTER 2 ───────────────────────────────────────────────────────
  {
    id: 's2-ch2',
    sectionId: 's2-convergence',
    chapterLabel: 'CHAPTER II',
    romanNumeral: 'II',
    title: 'THE 36-HOUR SIGNAL',
    subtitle: 'Every 36 hours… the compass reactivates.',
    accentColor: '#b8924a',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/VirtualCompassVisualAtNightS2-5.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/VirtualCompassVisualAtMorningS2-6.png'],
    titleFromLeft: true,
    cssFilter: 'sepia(0.25) saturate(1.2) brightness(0.88)',
    lines: [
      {
        type: 'normal',
        text: 'Exhausted and broken, Vara returned home to his study, which was cluttered with ancient books, temple sketches, Sanskrit research, and planetary diagrams. That night, as he slept, the compass awakened, emitting a golden light to project a massive virtual celestial compass where each direction represented a Navagraha surrounding Surya, the First Graha. Under the soft moonlight, the room vibrated softly as the moon symbol, Chandra, illuminated brighter than the others. By morning, the projection was gone, but Vara woke up feeling stronger, with the faint outline of the tilakam remaining beneath his skin. When the compass displayed the message “सूर्यः प्रथमः” (Surya is the first), Vara realized the terrifying truth: the compass reactivates every 36 hours, and each activation changes him further.'
      },
      {
        type: 'sanskrit',
        text: '"सूर्यः प्रथमः।"',
        translation: '"Surya is the first."'
      },
      {
        type: 'highlight',
        text: 'Every 36 hours… the compass reactivates. And every activation changes him further.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय II',
        title: '36 घंटे का संकेत',
        subtitle: 'हर 36 घंटे में... कम्पास फिर से सक्रिय हो जाता है।',
        lines: {
          0: 'थके और टूटे हुए, वारा अपने अध्ययन कक्ष में लौट आए, जो प्राचीन पुस्तकों, मंदिर के रेखाचित्रों, संस्कृत शोधों और ग्रहों के रेखाचित्रों से भरा पड़ा था। उस रात, जब वे सो रहे थे, कम्पास जाग उठा, जिसने एक विशाल आभासी खगोलीय कम्पास को प्रक्षेपित करने के लिए सुनहरी रोशनी बिखेरी, जहाँ प्रत्येक दिशा प्रथम ग्रह सूर्य के चारों ओर एक नवग्रह का प्रतिनिधित्व करती थी। कोमल चांदनी के नीचे, कमरा धीरे से गूंज उठा क्योंकि चंद्रमा का प्रतीक चंद्र दूसरों की तुलना में अधिक चमकीला दिखाई दे रहा था। सुबह तक, प्रक्षेपण गायब हो गया था, लेकिन वारा त्वचा के नीचे तिलक की हल्की रूपरेखा के साथ मजबूत महसूस करते हुए जागे। जब कम्पास ने संदेश “सूर्यः प्रथमः” (सूर्य पहला है) प्रदर्शित किया, तो वारा को भयानक सच्चाई का एहसास हुआ: कम्पास हर 36 घंटे में सक्रिय होता है, और प्रत्येक सक्रियता उन्हें और अधिक बदल देती है।',
          1: '“सूर्य पहला है।”'
        },
        highlight: 'हर 36 घंटे में... कम्पास फिर से सक्रिय हो जाता है। और प्रत्येक सक्रियता उन्हें और अधिक बदल देती है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం II',
        title: '36 గంటల సిగ్నల్',
        subtitle: 'ప్రతి 36 గంటలకు... దిక్సూచి తిరిగి పనిచేస్తుంది.',
        lines: {
          0: 'అలసిపోయి నిస్సత్తువగా ఉన్న వారా, తన పరిశోధనా గదికి తిరిగి వచ్చాడు, అది పురాతన పుస్తకాలు, ఆలయ పటాలు, సంస్కృత పరిశోధనలు మరియు గ్రహ పటాలతో నిండి ఉంది. ఆ రాత్రి, అతను నిద్రిస్తున్నప్పుడు, దిక్సూచి మేల్కొంది, మొదటి గ్రహమైన సూర్యుడి చుట్టూ నవగ్రహాలను చూపేలా ఒక పెద్ద ఊహాజనిత ఖగోళ దిక్సూచిని బంగారు కాంతితో చూపించింది. వెన్నెల కాంతిలో, చంద్రుని చిహ్నమైన చంద్ర మిగతా వాటి కంటే ప్రకాశవంతంగా వెలిగింది. ఉదయానికి ఆ చిత్రం మాయమైంది, కానీ వారా తన చర్మంపై తిలకం ఆకారంతో బలంగా మేల్కొన్నాడు. దిక్సూచి “सूर्यः प्रथमः” (సూర్యుడే మొదటివాడు) అనే సందేశాన్ని చూపించినప్పుడు, వారా ఒక భయంకరమైన సత్యాన్ని గ్రహించాడు: ప్రతి 36 గంటలకు దిక్సూచి తిరిగి పనిచేస్తుంది మరియు ప్రతిసారీ అది అతనిని మరింతగా మారుస్తుంది.',
          1: '“సూర్యుడే మొదటివాడు”'
        },
        highlight: 'ప్రతి 36 గంటలకు... దిక్సూచి తిరిగి పనిచేస్తుంది. మరియు ప్రతిసారీ అది అతనిని మరింతగా మారుస్తుంది.'
      }
    }
  },

  // ─── CHAPTER 3 ───────────────────────────────────────────────────────
  {
    id: 's2-ch3',
    sectionId: 's2-reckoning',
    chapterLabel: 'CHAPTER III',
    romanNumeral: 'III',
    title: 'THE SECOND DESCENT',
    subtitle: 'The deeper Vara traveled… the more impossible the cave became.',
    accentColor: '#c8a84b',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/Vara1stPowerActivatedS2-7.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/VaraRevisitTempleS2-8.png'],
    titleFromLeft: false,
    cssFilter: 'sepia(0.15) saturate(1.15) brightness(0.85) hue-rotate(-8deg)',
    lines: [
      {
        type: 'normal',
        text: 'Unable to resist the visions, Vara returned to the cave. The moment he entered, his body transformed as dark ancient robes materialized around him and the tilakam on his forehead blazed brighter. The compass projected a massive virtual celestial map into the air, revealing glowing golden pathways and colossal underground structures. Traveling deeper than before, Vara discovered a subterranean world containing hidden civilizations, gigantic stone pillars, ancient temples, moving planetary mechanisms, and colossal carvings of forgotten gods.'
      },
      {
        type: 'highlight',
        text: 'And everywhere— massive carvings of forgotten gods.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय III',
        title: 'दूसरा अवतरण',
        subtitle: 'वारा जितना गहराई में जाता गया... गुफा उतनी ही असंभव होती गई।',
        lines: {
          0: 'विज़न को रोकने में असमर्थ, वारा गुफा में लौट आया। जैसे ही उसने प्रवेश किया, उसका शरीर बदल गया क्योंकि उसके चारों ओर गहरे रंग के प्राचीन वस्त्र प्रकट हो गए और उसके माथे पर तिलक अधिक चमकीला हो गया। कम्पास ने हवा में एक विशाल आभासी खगोलीय मानचित्र प्रक्षेपित किया, जिसमें चमकते हुए सुनहरे मार्ग और विशाल भूमिगत संरचनाएं प्रकट हुईं। पहले की तुलना में अधिक गहराई से यात्रा करते हुए, वारा ने एक ऐसी भूमिगत दुनिया की खोज की जिसमें छिपी हुई सभ्यताएं, विशाल पत्थर के खंभे, प्राचीन मंदिर, घूमते हुए ग्रहीय तंत्र और भूले हुए देवताओं की विशाल नक्काशी शामिल थी।'
        },
        highlight: 'और हर जगह— भूले हुए देवताओं की विशाल नक्काशी थी।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం III',
        title: 'రెండవ ప్రయాణం',
        subtitle: 'వారా లోపలికి వెళ్లేకొద్దీ... ఆ గుహ మరింత అసాధ్యంగా మారింది.',
        lines: {
          0: 'ఆ ఆలోచనలను ఆపుకోలేక, వారా తిరిగి గుహలోకి వెళ్లాడు. అతను ప్రవేశించిన మరుక్షణమే, అతని శరీరం చుట్టూ పురాతన వస్త్రాలు ఏర్పడ్డాయి మరియు అతని నొసటిపై తిలకం మరింత ప్రకాశవంతంగా వెలిగింది. దిక్సూచి గాలిలో ఒక పెద్ద దైవిక పటాన్ని చూపించింది, ప్రకాశవంతమైన బంగారు మార్గాలు మరియు భారీ భూగర్భ నిర్మాణాలను వెల్లడించింది. మునుపటి కంటే లోతుగా ప్రయాణించిన వారా, దాగి ఉన్న నాగరికతలు, భారీ రాతి స్తంభాలు, పురాతన ఆలయాలు, తిరిగే గ్రహాల యంత్రాంగాలు మరియు మర్చిపోయిన దేవుళ్ల భారీ విగ్రహాలు ఉన్న ఒక భూగర్భ ప్రపంచాన్ని కనుగొన్నాడు.'
        },
        highlight: 'మరియు ప్రతిచోటా— మర్చిపోయిన దేవుళ్ల భారీ విగ్రహాలు ఉన్నాయి।'
      }
    }
  },

  // ─── CHAPTER 4 ───────────────────────────────────────────────────────
  {
    id: 's2-ch4',
    sectionId: 's2-vishnu-hall',
    chapterLabel: 'CHAPTER IV',
    romanNumeral: 'IV',
    title: 'THE HALL OF VISHNU',
    subtitle: 'The Vishnu statue opened its eyes slightly.',
    accentColor: '#4fa3d4',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/LordVishnuBigSatueS2-12.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/LordVishnuCloseUpViewS2-14.png'],
    titleFromLeft: true,
    cssFilter: 'saturate(1.2) brightness(0.9) hue-rotate(5deg)',
    lines: [
      {
        type: 'normal',
        text: 'After navigating winding tunnels for hours, Vara entered a colossal chamber dominated by an enormous statue of Lord Vishnu resting upon Adi Shesha, beneath a ceiling that resembled a galaxy trapped in stone. Thousands of glowing Sanskrit symbols floated around the space, causing the compass to react violently. For a brief second, Vara heard whispering ancient voices before the Vishnu statue opened its eyes slightly, releasing a wave of divine energy that pushed him backward. As a hidden tunnel opened beneath the statue, the compass pointed toward it—directing him toward Surya.'
      },
      {
        type: 'highlight',
        text: 'And beneath the statue— a hidden tunnel opened. Toward Surya.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय IV',
        title: 'विष्णु की सभा',
        subtitle: 'विष्णु की मूर्ति ने अपनी आँखें थोड़ी खोलीं।',
        lines: {
          0: 'घंटों घुमावदार सुरंगों से गुजरने के बाद, वारा ने एक विशाल कक्ष में प्रवेश किया, जिसमें आदि शेष पर विश्राम करते हुए भगवान विष्णु की एक विशाल मूर्ति थी, जिसकी छत पत्थर में कैद एक आकाशगंगा जैसी दिखती थी। हजारों चमकते संस्कृत प्रतीक उस स्थान के चारों ओर तैर रहे थे, जिससे कम्पास हिंसक रूप से प्रतिक्रिया करने लगा। कुछ क्षणों के लिए, वारा ने फुसफुसाती हुई प्राचीन आवाज़ें सुनीं, जिसके बाद विष्णु की मूर्ति ने अपनी आँखें थोड़ी खोलीं, जिससे दिव्य ऊर्जा की एक लहर निकली जिसने उसे पीछे धकेल दिया। जैसे ही मूर्ति के नीचे एक छिपी हुई सुरंग खुली, कम्पास ने उसकी ओर इशारा किया—उसे सूर्य की ओर निर्देशित करते हुए।'
        },
        highlight: 'और मूर्ति के नीचे— एक छिपी हुई सुरंग खुली। सूर्य की ओर।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం IV',
        title: 'విష్ణు సభ',
        subtitle: 'విష్ణుమూర్తి విగ్రహం తన కళ్లను కొద్దిగా తెరిచింది.',
        lines: {
          0: 'గంటల తరబడి వంకర సొరంగాల్లో ప్రయాణించిన తర్వాత, వారా ఆదిశేషుడిపై కొలువై ఉన్న విష్ణుమూర్తి యొక్క ఒక భారీ విగ్రహం ఉన్న విశాల గదిలోకి ప్రవేశించాడు. ఆ గది పైకప్పు రాతిలో బంధించబడిన పాలపుంత వలె ఉంది. వేలాది సంస్కృత చిహ్నాలు ఆ ప్రదేశంలో తిరుగుతున్నాయి, దీనివల్ల దిక్సూచి వేగంగా స్పందించింది. క్షణకాలం పాటు వారాకి పురాతన స్వరాలు వినిపించాయి, ఆపై విష్ణువు విగ్రహం కళ్లు కొద్దిగా తెరిచి, తనను వెనక్కి నెట్టేలా ఒక దైవిక శక్తి తరంగాన్ని విడుదల చేసింది. విగ్రహం కింద ఒక రహస్య సొరంగం తెరుచుకోగా, దిక్సూచి దాని వైపు చూపించింది—సూర్యుడి వైపు మార్గాన్ని నిర్దేశిస్తూ।'
        },
        highlight: 'మరియు విగ్రహం కింద— ఒక రహస్య సొరంగం తెరుచుకుంది. సూర్యుడి వైపు।'
      }
    }
  },

  // ─── CHAPTER 5 ───────────────────────────────────────────────────────
  {
    id: 's2-ch5',
    sectionId: 's2-golden-tunnel',
    chapterLabel: 'CHAPTER V',
    romanNumeral: 'V',
    title: 'THE GOLDEN TUNNEL',
    subtitle: 'Surya Bhagavan stands at the center.',
    accentColor: '#c8a84b',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/Vara6Different TunnelCaveS2-15(i).png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/LoedSuryaStatueLongShotS2-16.png'],
    titleFromLeft: false,
    cssFilter: 'sepia(0.2) saturate(1.2) brightness(0.85) hue-rotate(-5deg)',
    lines: [
      {
        type: 'normal',
        text: 'The deeper Vara traveled, the hotter the cave became, until a bright golden light appeared far ahead. He emerged into a massive chamber featuring a colossal statue of Surya Bhagavan surrounded by seven giant stone horses, with endless rivers of molten lava flowing below. Between Vara and the statue stood a broken ancient bridge. Guided by the compass pointing directly toward Surya, Vara stepped forward, only for the ancient bridge to crack and shatter beneath him.'
      },
      {
        type: 'highlight',
        text: 'Then— CRACK. The bridge shattered.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय V',
        title: 'सुनहरा सुरंग',
        subtitle: 'सूर्य भगवान केंद्र में खड़े हैं।',
        lines: {
          0: 'वारा जितना गहरा गया, गुफा उतनी ही गर्म होती गई, जब तक कि आगे एक चमकीली सुनहरी रोशनी दिखाई नहीं दी। वह एक विशाल कक्ष में निकला, जिसमें सात विशाल पत्थर के घोड़ों से घिरी सूर्य भगवान की एक विशाल मूर्ति थी, और नीचे पिघले हुए लावे की अंतहीन नदियाँ बह रही थीं। वारा और मूर्ति के बीच एक टूटा हुआ प्राचीन पुल था। सीधे सूर्य की ओर इशारा करने वाले कम्पास से निर्देशित होकर, वारा आगे बढ़ा, लेकिन प्राचीन पुल टूटकर उसके नीचे बिखर गया।'
        },
        highlight: 'तभी— चटख की आवाज़ आई। पुल टूट गया।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం V',
        title: 'బంగారు సొరంగం',
        subtitle: 'సూర్య భగవానుడు మధ్యలో నిలిచాడు.',
        lines: {
          0: 'వారా లోపలికి వెళ్లేకొద్దీ వేడి ఎక్కువైంది, చివరకు ముందు ఒక ప్రకాశవంతమైన బంగారు కాంతి కనిపించింది. అతను ఏడు భారీ రాతి గుర్రాలతో కూడిన సూర్య భగవానుడి విగ్రహం మరియు కింద ప్రవహిస్తున్న లావా నదులు ఉన్న ఒక భారీ గదిలోకి వచ్చాడు. వారాకి, విగ్రహానికి మధ్య ఒక విరిగిన వంతెన ఉంది. సూర్యుడి వైపు చూపిస్తున్న దిక్సూచి ఆధారంగా వారా ముందుకు అడుగు వేయగా, ఆ వంతెన ఒక్కసారిగా విరిగి ముక్కలైంది।'
        },
        highlight: 'అప్పుడు— విరిగింది. వంతెన కూలిపోయింది।'
      }
    }
  },

  // ─── CHAPTER 6 ───────────────────────────────────────────────────────
  {
    id: 's2-ch6',
    sectionId: 's2-fire-fall',
    chapterLabel: 'CHAPTER VI',
    romanNumeral: 'VI',
    title: 'THE FALL OF FIRE',
    subtitle: 'The compass slipped from his hand.',
    accentColor: '#cc3300',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/FinalBridgeBrokenS2-19.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/FinalPowerActivateFloorShieldS2-20.png'],
    titleFromLeft: true,
    cssFilter: 'saturate(1.5) hue-rotate(5deg) brightness(1.02)',
    lines: [
      {
        type: 'normal',
        text: 'Vara plunged into the lava abyss as ancient lava serpents—massive creatures made of molten fire—awakened below him. Just before impact, his powers activated instinctively, creating a glowing energy shield that stopped his fall. As the serpents immediately launched their attack, Vara defended himself using unstable energy barriers, but in the chaotic struggle, the compass slipped from his hand and fell toward the molten lava.'
      },
      {
        type: 'highlight',
        text: 'But during the chaos— the compass slipped from his hand. And fell toward the lava.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय VI',
        title: 'अग्नि का पतन',
        subtitle: 'कम्पास उसके हाथ से फिसल गया।',
        lines: {
          0: 'वारा लावा की खाई में गिर गया क्योंकि पिघली हुई आग से बने विशाल जीव—प्राचीन लावा सर्प—उसके नीचे जाग उठे थे। गिरने से ठीक पहले, उसकी शक्तियां सहज रूप से सक्रिय हो गईं, जिससे एक चमकता हुआ ऊर्जा कवच बन गया जिसने उसके गिरने को रोक दिया। जैसे ही सर्पों ने तुरंत अपना हमला शुरू किया, वारा ने अस्थिर ऊर्जा बाधाओं का उपयोग करके अपना बचाव किया, लेकिन अराजक संघर्ष में, कम्पास उसके हाथ से फिसल गया और पिघले हुए लावे की ओर गिर गया।'
        },
        highlight: 'लेकिन अराजकता के दौरान— कम्पास उसके हाथ से फिसल गया। और लावा की ओर गिर गया।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం VI',
        title: 'అగ్ని పతనం',
        subtitle: 'దిక్సూచి అతని చేతి నుండి జారిపోయింది.',
        lines: {
          0: 'వారా లావా అగాధంలోకి పడిపోయాడు, పిఘలిపోయిన అగ్నితో తయారైన భారీ లావా సర్పాలు అతని కింద మేల్కొన్నాయి. పడిపోయే ముందే, అతని శక్తులు సహజంగా ప్రేరేపితమై ఒక మెరుస్తున్న రక్షణ కవచాన్ని సృష్టించి అతని పతనాన్ని ఆపాయి. ఆ సర్పాలు దాడి చేయడం ప్రారంభించగా, వారా రక్షణ గోడలతో తనను తాను రక్షించుకున్నాడు, కానీ ఆ గందరగోళంలో దిక్సూచి చేతి నుండి జారి లావాలోకి పడిపోయింది।'
        },
        highlight: 'కానీ ఆ గందరగోళంలో— దిక్సూచి చేతి నుండి జారిపోయింది. లావాలోకి పడిపోయింది।'
      }
    }
  },

  // ─── CHAPTER 7 ───────────────────────────────────────────────────────
  {
    id: 's2-ch7',
    sectionId: 's2-kalachakra-web',
    chapterLabel: 'CHAPTER VII',
    romanNumeral: 'VII',
    title: 'THE WEB OF KALACHAKRA',
    subtitle: 'A divine web of energy emerged.',
    accentColor: '#e8881a',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/FinalCompassOutOfHandS2-23.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/FinalVaraCatchesCompassS2-24.png'],
    titleFromLeft: false,
    cssFilter: 'saturate(1.65) hue-rotate(10deg) brightness(1.05)',
    lines: [
      {
        type: 'normal',
        text: 'As the compass descended into the burning abyss, a new power awakened inside Vara. Out of his hand emerged a glowing cosmic thread—a divine web of energy that wrapped around the falling compass midair, saving it just before it was lost to the fire forever.'
      },
      {
        type: 'highlight',
        text: 'From his hand emerged a glowing cosmic thread... a divine web of energy.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय VII',
        title: 'कालचक्र का जाल',
        subtitle: 'ऊर्जा का एक दिव्य जाल प्रकट हुआ।',
        lines: {
          0: 'जैसे ही कम्पास जलती हुई खाई में गिरा, वारा के भीतर एक नई शक्ति जागृत हुई। उसके हाथ से एक चमकता हुआ ब्रह्मांडीय धागा निकला—ऊर्जा का एक दिव्य जाल जिसने बीच हवा में गिरते कम्पास को लपेट लिया, जिससे वह हमेशा के लिए आग में खो जाने से ठीक पहले बच गया।'
        },
        highlight: 'उसके हाथ से एक चमकता हुआ ब्रह्मांडीय धागा निकला... ऊर्जा का एक दिव्य जाल।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం VII',
        title: 'కాలచక్ర వెబ్',
        subtitle: 'శక్తి యొక్క దైవిక వెబ్ ఉద్భవించింది.',
        lines: {
          0: 'దిక్సూచి మండుతున్న అగాధంలోకి పడిపోతుండగా, వారాలో కొత్త శక్తి మేల్కొంది. అతని చేతి నుండి ఒక మెరుస్తున్న విశ్వ దారం—దైవిక శక్తి వెబ్ బయటకు వచ్చి గాలిలోనే దిక్సూచిని చుట్టుముట్టింది, అది అగ్నిలో కలిసిపోయే లోపే రక్షించింది।'
        },
        highlight: 'అతని చేతి నుండి మెరుస్తున్న విశ్వ దారం ఉద్భవించింది... దైవిక శక్తి వెబ్।'
      }
    }
  },

  // ─── CHAPTER 8 ───────────────────────────────────────────────────────
  {
    id: 's2-ch8',
    sectionId: 's2-fire-crossing',
    chapterLabel: 'CHAPTER VIII',
    romanNumeral: 'VIII',
    title: 'THE CROSSING OF FIRE',
    subtitle: 'Vara truly felt the power of Kalachakra.',
    accentColor: '#e8731a',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/FinalCompassPowerToVanishSnakesS2-25.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/FinalVaraGoingTowardsSuryaGodS2-26.png'],
    titleFromLeft: true,
    cssFilter: 'saturate(1.7) brightness(1.05)',
    lines: [
      {
        type: 'normal',
        text: 'At that exact moment, the compass evolved again, exploding with golden celestial waves that disintegrated the lava serpents instantly. Vara now controlled floating shield platforms of energy. Using them like stepping stones, he crossed the lava abyss toward Surya, feeling the true power of Kalachakra.'
      },
      {
        type: 'highlight',
        text: 'Using them like stepping stones— he crossed the lava abyss.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय VIII',
        title: 'अग्नि पार करना',
        subtitle: 'वारा ने वास्तव में कालचक्र की शक्ति को महसूस किया।',
        lines: {
          0: 'ठीक उसी क्षण, कम्पास फिर से विकसित हुआ, सुनहरी खगोलीय तरंगों के साथ विस्फोट हुआ जिसने लावा सर्पों को तुरंत विघटित कर दिया। वारा अब ऊर्जा के तैरते हुए ढाल प्लेटफार्मों को नियंत्रित कर रहा था। उनका उपयोग पत्थरों की तरह करते हुए, उन्होंने कालचक्र की वास्तविक शक्ति को महसूस करते हुए, सूर्य की ओर लावा की खाई को पार किया।'
        },
        highlight: 'उनका उपयोग सीढ़ीदार पत्थरों की तरह करते हुए— उन्होंने लावा की खाई को पार किया।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం VIII',
        title: 'అగ్నిని దాటడం',
        subtitle: 'వారా కాలచక్రం యొక్క నిజమైన శక్తిని అనుభవించాడు.',
        lines: {
          0: 'సరిగ్గా అదే సమయంలో, దిక్సూచి మళ్లీ రూపాంతరం చెంది, బంగారు తరంగాలను విడుదల చేస్తూ లావా సర్పాలను తక్షణమే నాశనం చేసింది. వారా ఇప్పుడు గాలిలో తేలే శక్తి వేదికలను నియంత్రించాడు. వాటిని మెట్లుగా ఉపయోగించుకుని, కాలచక్రం యొక్క నిజమైన శక్తిని అనుభవిస్తూ లావా అగాధాన్ని దాటి సూర్యుడి వైపు వెళ్లాడు।'
        },
        highlight: 'వాటిని మెట్లుగా ఉపయోగించుకుని— అతను లావా అగాధాన్ని దాటాడు।'
      }
    }
  },

  // ─── CHAPTER 9 ───────────────────────────────────────────────────────
  {
    id: 's2-ch9',
    sectionId: 's2-surya-gem',
    chapterLabel: 'CHAPTER IX',
    romanNumeral: 'IX',
    title: 'THE SURYA GEM',
    subtitle: 'Suryānsha Mani — Fragment of the Sun.',
    accentColor: '#f0c040',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/FinalSlokamNearSuryaGodS2-27.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/FinalConnectingCompassToDesignS2-28.png'],
    titleFromLeft: false,
    cssFilter: 'brightness(1.1) saturate(1.3)',
    lines: [
      {
        type: 'normal',
        text: 'Near the statue’s base, Vara discovered an ancient mechanism with a circular lock shaped exactly like the compass, surrounded by the Sanskrit words for "The Flame of Surya". Aligning the compass with the mechanism, the entire chamber awakened, illuminating the ceiling with solar symbols. From deep within the statue, a radiant crystal emerged—the Suryānsha Mani (Fragment of the Sun), pulsing like a living star.'
      },
      {
        type: 'sanskrit',
        text: '"सूर्यांश मणि"',
        translation: 'Suryānsha Mani — "Fragment of the Sun"'
      },
      {
        type: 'highlight',
        text: 'A radiant crystal emerged—the Suryānsha Mani (Fragment of the Sun).'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय IX',
        title: 'सूर्य मणि',
        subtitle: 'सूर्यांश मणि — सूर्य का अंश।',
        lines: {
          0: 'मूर्ति के आधार के पास, वारा ने एक गोलाकार ताले के साथ एक प्राचीन तंत्र की खोज की जिसका आकार बिल्कुल कम्पास जैसा था, जो "सूर्य की लौ" के लिए संस्कृत शब्दों से घिरा हुआ था। कम्पास को तंत्र के साथ संरेखित करते हुए, पूरा कक्ष जाग उठा, सौर प्रतीकों के साथ छत को रोशन कर दिया। मूर्ति के गहरे अंदर से, एक दीप्तिमान क्रिस्टल उभरा—सूर्यांश मणि (सूर्य का अंश), जो एक जीवित तारे की तरह स्पंदित हो रहा था।',
          1: 'सूर्यांश मणि — "सूर्य का अंश"'
        },
        highlight: 'एक दीप्तिमान क्रिस्टल उभरा—सूर्यांश मणि (सूर्य का अंश)।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం IX',
        title: 'సూర్య మణి',
        subtitle: 'సూర్యాంశ మణి — సూర్యుని భాగం.',
        lines: {
          0: 'విగ్రహం కింద, వారా సరిగ్గా దిక్సూచి ఆకారంలో ఉన్న ఒక పురాతన తాళం యంత్రాంగాన్ని కనుగొన్నాడు, దాని చుట్టూ "సూర్య జ్వాల" అనే సంస్కృత పదాలు ఉన్నాయి. దిక్సూచిని ఆ యంత్రాంగంతో అనుసంధానించినప్పుడు, ఆ గది అంతా మేల్కొంది, పైకప్పు సౌర చిహ్నాలతో వెలిగింది. విగ్రహం లోపల నుండి, ఒక ప్రకాశవంతమైన స్పటికం బయటకు వచ్చింది—అదే సూర్యాంశ మణి, అది ఒక నక్షత్రంలా మెరుస్తోంది.',
          1: 'సూర్యాంశ మణి — "సూర్యుని భాగం"'
        },
        highlight: 'ఒక ప్రకాశవంతమైన స్పటికం వెలువడింది—సూర్యాంశ మణి.'
      }
    }
  },

  // ─── CHAPTER 10 ──────────────────────────────────────────────────────
  {
    id: 's2-ch10',
    sectionId: 's2-failing-light',
    chapterLabel: 'CHAPTER X',
    romanNumeral: 'X',
    title: 'THE FAILING LIGHT',
    subtitle: 'The timer ended. The compass shut down.',
    accentColor: '#cc3300',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/FinalSuryaGemVisibleS2-29.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/Season-2 Images/FinalVaraHoldsGemS2-30.png',
      '/Kalachakra-Documentary/Image/Season-2 Images/FinalVaraReturnFromSuryaStatueS2-31.png',
      '/Kalachakra-Documentary/Image/Season-2 Images/FinalCompassTimeOutS2-32.png',
      '/Kalachakra-Documentary/Image/Season-2 Images/FinalVaraExitCaveAndPowerS2-33.png'
    ],
    titleFromLeft: true,
    cssFilter: 'saturate(1.4) brightness(0.9) hue-rotate(-5deg)',
    lines: [
      {
        type: 'normal',
        text: 'But suddenly, the 36-hour timer ended. The compass shut down, the tilakam vanished from his forehead, and Vara returned to normal instantly. Weak and exhausted, stripped of his divine powers and protection, he struggled to escape the dark and collapsing cave carrying the radiant Surya Gem.'
      },
      {
        type: 'highlight',
        text: 'Weak and exhausted… he escaped the cave carrying the Surya Gem.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय X',
        title: 'बुझती रोशनी',
        subtitle: 'समय समाप्त हो गया। कम्पास बंद हो गया।',
        lines: {
          0: 'लेकिन अचानक, 36 घंटे का समय समाप्त हो गया। कम्पास बंद हो गया, माथे से तिलक गायब हो गया, और वारा तुरंत सामान्य स्थिति में आ गया। कमजोर और थका हुआ, अपनी दिव्य शक्तियों और सुरक्षा से वंचित, वह दीप्तिमान सूर्य मणि को लेकर अंधेरी और ढहती गुफा से बचने के लिए संघर्ष करने लगा।'
        },
        highlight: 'कमजोर और थका हुआ… वह सूर्य मणि लेकर गुफा से बाहर निकल गया।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం X',
        title: 'క్షీణిస్తున్న కాంతి',
        subtitle: 'సమయం ముగిసింది. దిక్సూచి ఆగిపోయింది.',
        lines: {
          0: 'కానీ హఠాత్తుగా, 36 గంటల సమయం ముగిసింది. దిక్సూచి ఆగిపోయింది, నొసటిపై తిలకం మాయమైంది, వారా తక్షణమే సాధారణ స్థితికి వచ్చాడు. బలహీనంగా, అలసటతో, దైవిక శక్తులు మరియు రక్షణ కోల్పోయి, అతను మెరుస్తున్న సూర్య మణిని తీసుకుని చీకటిగా ఉన్న కూలిపోతున్న గుహ నుండి బయటపడటానికి పోరాడాడు.'
        },
        highlight: 'బలహీనంగా మరియు అలసటతో... సూర్య మణిని తీసుకుని గుహ నుండి బయటపడ్డాడు।'
      }
    }
  },

  // ─── CHAPTER 11 ──────────────────────────────────────────────────────
  {
    id: 's2-ch11',
    sectionId: 's2-temple-light',
    chapterLabel: 'CHAPTER XI',
    romanNumeral: 'XI',
    title: 'THE TEMPLE OF LIGHT',
    subtitle: 'A vision of the forgotten Sun Temple.',
    accentColor: '#c8a84b',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/VaraSleepingAfterGemS2-35.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/Season-2 Images/FinalMidNightVaraWatchingSuryaGemS2-36.png',
      '/Kalachakra-Documentary/Image/Season-2 Images/FinalIdentifyingSuryaGemS2-37.png',
      '/Kalachakra-Documentary/Image/Season-2 Images/FinalIdentifyingSuryaGenEarltMorningS2-38.png'
    ],
    titleFromLeft: false,
    cssFilter: 'brightness(1.08) saturate(1.22)',
    lines: [
      {
        type: 'normal',
        text: 'Back in his study, Vara investigated the Surya Gem, which pulsed unpredictably between brilliant radiance and complete darkness. One morning, as sunlight passed through his magnifying lens and struck the gem, the room exploded with golden light, projecting ancient symbols across the walls and revealing a vision of a forgotten Sun Temple—a massive, divine chariot-shaped structure with seven stone horses and colossal wheels.'
      },
      {
        type: 'highlight',
        text: 'The room exploded with golden light, revealing a forgotten Sun Temple.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय XI',
        title: 'प्रकाश का मंदिर',
        subtitle: 'भूले हुए सूर्य मंदिर का दर्शन।',
        lines: {
          0: 'अपने अध्ययन कक्ष में वापस आकर, वारा ने सूर्य मणि की जांच की, जो अत्यधिक चमक और पूर्ण अंधकार के बीच अनिश्चित रूप से स्पंदित हो रही थी। एक सुबह, जब सूर्य का प्रकाश उसके आवर्धक लेंस से होकर मणि पर पड़ा, तो कमरा सुनहरी रोशनी से भर गया, दीवारों पर प्राचीन प्रतीकों को प्रक्षेपित किया और एक भूले हुए सूर्य मंदिर का दर्शन कराया—एक विशाल, दिव्य रथ के आकार की संरचना जिसमें सात पत्थर के घोड़े और विशाल पहिये थे।'
        },
        highlight: 'कमरा सुनहरी रोशनी से भर गया, एक भूले हुए सूर्य मंदिर का अनावरण हुआ।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం XI',
        title: 'కాంతి దేవాలయం',
        subtitle: 'మరచిపోయిన సూర్య దేవాలయం యొక్క దర్శనం.',
        lines: {
          0: 'తన గదికి తిరిగి వచ్చిన వారా సూర్య మణిని పరిశీలించాడు, అది ఒక్కోసారి ప్రకాశవంతంగా, ఒక్కోసారి చీకటిగా మారుతోంది. ఒక ఉదయం, సూర్యరశ్మి భూతద్దం ద్వారా మణిపై పడినప్పుడు, గది అంతా బంగారు కాంతితో నిండిపోయింది, గోడలపై పురాతన చిహ్నాలు కనిపించాయి మరియు మరచిపోయిన సూర్య దేవాలయం యొక్క చిత్రం వెల్లడైంది—ఏడు రాతి గుర్రాలు మరియు పెద్ద చక్రాలతో కూడిన భారీ దైవిక రథం ఆకారపు నిర్మాణం అది.'
        },
        highlight: 'గది అంతా బంగారు కాంతితో నిండిపోయింది, మరచిపోయిన సూర్య దేవాలయం వెల్లడైంది।'
      }
    }
  },

  // ─── CHAPTER 12 ──────────────────────────────────────────────────────
  {
    id: 's2-ch12',
    sectionId: 's2-gem-research',
    chapterLabel: 'CHAPTER XII',
    romanNumeral: 'XII',
    title: 'THE SUN GEM RESEARCH',
    subtitle: 'Vara is researching details of the Sun Gem.',
    accentColor: '#a68a44',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/FinalGemDecreasingPowerS2-39.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/FinalSunRayReflectionOnGemS2-40.png'],
    titleFromLeft: true,
    cssFilter: 'brightness(1.05) saturate(1.15)',
    lines: [
      {
        type: 'normal',
        text: 'Vara spent days researching the intricate details of the Sun Gem. He discovered that its power was tied to solar cycles, sometimes pulsing with blinding intensity and other times fading into darkness. By magnifying sunlight directly onto the crystal, he unlocked complex planetary coordinates showing the exact location of the Sun Temple.'
      },
      {
        type: 'highlight',
        text: 'Vara is researching details of the Sun Gem.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय XII',
        title: 'सूर्य मणि पर शोध',
        subtitle: 'वारा सूर्य मणि के विवरण पर शोध कर रहा है।',
        lines: {
          0: 'वारा ने सूर्य मणि के जटिल विवरणों पर शोध करने में कई दिन बिताए। उसने पाया कि इसकी शक्ति सौर चक्रों से जुड़ी हुई थी, कभी-कभी अत्यधिक तीव्रता के साथ स्पंदित होती थी और दूसरी बार अंधेरे में विलीन हो जाती थी। सूर्य के प्रकाश को सीधे क्रिस्टल पर केंद्रित करके, उसने सूर्य मंदिर के सटीक स्थान को दर्शाने वाले जटिल ग्रहीय निर्देशांकों को अनलॉक किया।'
        },
        highlight: 'वारा सूर्य मणि के विवरण पर शोध कर रहा है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం XII',
        title: 'సూర్య మణి పరిశోధన',
        subtitle: 'వారా సూర్య మణి వివరాలపై పరిశోధన చేస్తున్నాడు.',
        lines: {
          0: 'వారా సూర్య మణి యొక్క క్లిష్టమైన వివరాలపై రోజులు గడిపాడు. దాని शक्ति సౌర చక్రాలతో ముడిపడి ఉందని, కొన్నిసార్లు తీవ్రమైన కాంతితో, మరికొన్నిసార్లు చీకటిగా మారుతోందని అతను కనుగొన్నాడు. సూర్యరశ్మిని నేరుగా స్ఫటికంపై కేంద్రీకరించడం ద్వారా, అతను సూర్య దేవాలయం యొక్క ఖచ్చితమైన స్థానాన్ని చూపే గ్రహాల కోఆర్డినేట్లను కనుగొన్నాడు.'
        },
        highlight: 'వారా సూర్య మణి వివరాలపై పరిశోధన చేస్తున్నాడు।'
      }
    }
  },

  // ─── CHAPTER 13 ──────────────────────────────────────────────────────
  {
    id: 's2-ch13',
    sectionId: 's2-reunion',
    chapterLabel: 'CHAPTER XIII',
    romanNumeral: 'XIII',
    title: 'THE REUNION',
    subtitle: 'The man declared dead was standing alive before them.',
    accentColor: '#c8a84b',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/FinalVaraTeamMembersShockS2-41.png',
    extraImages: [],
    titleFromLeft: false,
    cssFilter: 'brightness(1.05) saturate(1.15)',
    lines: [
      {
        type: 'normal',
        text: 'Before Vara could fully comprehend the vision of the Sun Temple, his team arrived at his house and froze in absolute shock. Standing before them was the very man they had mourned and declared dead, alive and forever changed by the powers of Kalachakra. Vara revealed everything to his team—the cave, the compass, the Surya Gem, and his visions. As a solar eclipse began covering the sky with dark clouds, they prepared to set out.'
      },
      {
        type: 'highlight',
        text: 'Because Vara— the man declared dead— was standing alive before them.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय XIII',
        title: 'पुनर्मिलन',
        subtitle: 'मृत घोषित व्यक्ति उनके सामने जीवित खड़ा था।',
        lines: {
          0: 'इससे पहले कि वारा सूर्य मंदिर के दर्शन को पूरी तरह समझ पाता, उसकी टीम उसके घर पहुंची और बिल्कुल स्तब्ध रह गई। उनके सामने वही व्यक्ति खड़ा था जिसका उन्होंने शोक मनाया था और मृत घोषित कर दिया था, जीवित और कालचक्र की शक्तियों द्वारा हमेशा के लिए बदला हुआ। वारा ने अपनी टीम के सामने सब कुछ प्रकट किया—गुफा, कम्पास, सूर्य मणि और अपने विज़न। जैसे ही सूर्य ग्रहण ने आसमान को काले बादलों से ढंकना शुरू किया, वे निकलने के लिए तैयार हो गए।'
        },
        highlight: 'क्योंकि वारा— जिसे मृत घोषित किया गया था— उनके सामने जीवित खड़ा था।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం XIII',
        title: 'పునఃకలయిక',
        subtitle: 'చనిపోయాడని అనుకున్న వ్యక్తి వారి ముందు సజీవంగా నిలిచాడు.',
        lines: {
          0: 'వారా సూర్య దేవాలయం యొక్క చిత్రాన్ని పూర్తిగా అర్థం చేసుకునే లోపే, అతని బృందం అతని ఇంటికి చేరుకుని తీవ్ర దిగ్భ్రాంతికి గురైంది. వారు చనిపోయాడని భావించి బాధపడిన వ్యక్తి, కాలచక్ర శక్తులతో మారిపోయి వారి ముందు నిలిచాడు. వారా తన బృందానికి గుహ, దిక్సూచి, సూర్య మణి మరియు తన దర్శనాల గురించి వెల్లడించాడు. సూర్యగ్రహణం ఆకాశాన్ని నల్లటి మేఘాలతో కప్పడం ప్రారంభించగా, వారు ప్రయాణానికి సిద్ధమయ్యారు.'
        },
        highlight: 'ఎందుకంటే వారా— చనిపోయాడనుకున్న వ్యక్తి— వారి ముందు సజీవంగా నిలిచాడు।'
      }
    }
  },

  // ─── CHAPTER 14 ──────────────────────────────────────────────────────
  {
    id: 's2-ch14',
    sectionId: 's2-fall-of-surya',
    chapterLabel: 'CHAPTER XIV',
    romanNumeral: 'XIV',
    title: 'THE FALL OF SURYA',
    subtitle: 'The power of Surya disappeared.',
    accentColor: '#a68a44',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/VaraAndTeamSearchingForSunTempleS2-42.png',
    extraImages: [],
    titleFromLeft: true,
    cssFilter: 'brightness(0.9) sepia(0.18) saturate(1.1)',
    lines: [
      {
        type: 'normal',
        text: 'The moment the solar eclipse began, everything changed: darkness consumed the sky, birds stopped moving, and the air grew freezing cold. Suddenly, the Surya Gem lost its glow completely, the compass became unstable, and Vara’s tilakam faded—the power of Surya had disappeared. In panic, Vara searched temple records and Sanskrit scriptures, realizing the Sun Temple vision was actually a clue and destination. Traveling under the darkened eclipse sky, Vara carried the powerless Surya Gem and temple sketches, setting off with his team toward the hidden sanctuary.'
      },
      {
        type: 'highlight',
        text: 'Under the darkened eclipse sky… they traveled toward the hidden Sun Temple.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय XIV',
        title: 'सूर्य का पतन',
        subtitle: 'सूर्य की शक्ति गायब हो गई।',
        lines: {
          0: 'जैसे ही सूर्य ग्रहण शुरू हुआ, सब कुछ बदल गया: अंधेरे ने आसमान को लील लिया, पक्षियों ने हिलना बंद कर दिया, और हवा बहुत ठंडी हो गई। अचानक, सूर्य मणि ने अपनी चमक पूरी तरह से खो दी, कम्पास अस्थिर हो गया, और वारा का तिलक फीका पड़ गया—सूर्य की शक्ति गायब हो गई थी। घबराहट में, वारा ने मंदिर के रिकॉर्ड और संस्कृत ग्रंथों की खोज की, यह महसूस करते हुए कि सूर्य मंदिर का दर्शन वास्तव में एक सुराग और गंतव्य था। ग्रहण के अंधेरे आसमान के नीचे यात्रा करते हुए, वारा शक्तिहीन सूर्य मणि और मंदिर के रेखाचित्रों को लेकर अपनी टीम के साथ छिपे हुए गर्भगृह की ओर चल पड़ा।'
        },
        highlight: 'ग्रहण के काले आसमान के नीचे... वे छिपे हुए सूर्य मंदिर की ओर बढ़े।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం XIV',
        title: 'సూర్యుని పతనం',
        subtitle: 'సూర్యుని శక్తి అదృశ్యమైంది.',
        lines: {
          0: 'సూర్యగ్రహణం ప్రారంభమైన మరుక్షణమే అంతా మారిపోయింది: ఆకాశాన్ని చీకటి కమ్మేసింది, పక్షుల కదలికలు ఆగిపోయాయి, గాలి చల్లగా మారింది. హఠాత్తుగా, సూర్య మణి తన కాంతిని కోల్పోయింది, దిక్సూచి అస్థిరంగా మారింది, వారా తిలకం మాయమైంది—సూర్యుని శక్తి అంతరించింది. భయంతో వారా ఆలయ రికార్డులను, సంస్కృత గ్రంథాలను పరిశీలించి, సూర్య దేవాలయం యొక్క చిత్రం ఒక సూచన అని గ్రహించాడు. చీకటి గ్రహణ ఆకాశం కింద ప్రయాణిస్తూ, వారా కాంతి లేని సూర్య మణి మరియు ఆలయ పటాలను తీసుకుని తన బృందంతో కలిసి దాగి ఉన్న ఆలయం వైపు బయలుదేరాడు.'
        },
        highlight: 'చీకటి గ్రహణ ఆకాశం కింద... వారు దాగి ఉన్న సూర్య దేవాలయం వైపు ప్రయాణించారు।'
      }
    }
  },

  // ─── CHAPTER 15 ──────────────────────────────────────────────────────
  {
    id: 's2-ch15',
    sectionId: 's2-eclipse-temple',
    chapterLabel: 'CHAPTER XV',
    romanNumeral: 'XV',
    title: 'THE TEMPLE OF THE ECLIPSE',
    subtitle: 'A colossal Sun Temple hidden beyond stone gateways.',
    accentColor: '#b8924a',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/FinalSunTempleDroneShotS2-43.png',
    extraImages: [
      '/Kalachakra-Documentary/Image/Season-2 Images/FinalVaraAndTeamEnteredSkyTempleS2-45.png',
      '/Kalachakra-Documentary/Image/Season-2 Images/FinalSunTempleFrontViewS2-44.png'
    ],
    titleFromLeft: false,
    cssFilter: 'brightness(0.95) saturate(1.2) hue-rotate(-2deg)',
    lines: [
      {
        type: 'normal',
        text: 'After days of searching through forests and forgotten pathways, they discovered a colossal Sun Temple hidden behind massive stone gateways, designed like a divine chariot pulled by seven stone horses with massive wheels. Entering the temple under the eclipse, they explored endless dark halls where ancient Sanskrit symbols glowed faintly and broken mechanisms clicked below. Vara searched desperately for clues, realizing the gem had disturbed something ancient and if the temple was not activated soon, catastrophe would strike the Sun and Earth.'
      },
      {
        type: 'highlight',
        text: 'A colossal Sun Temple hidden beyond massive stone gateways.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय XV',
        title: 'ग्रहण का मंदिर',
        subtitle: 'पत्थर के द्वारों से परे छिपा एक विशाल सूर्य मंदिर।',
        lines: {
          0: 'जंगलों और भूले हुए रास्तों में दिनों की खोज के बाद, उन्होंने विशाल पत्थर के द्वारों के पीछे छिपा एक विशाल सूर्य मंदिर खोज निकाला, जिसे सात पत्थर के घोड़ों और विशाल पहियों द्वारा खींचे जाने वाले एक दिव्य रथ की तरह बनाया गया था। ग्रहण के दौरान मंदिर में प्रवेश करते हुए, उन्होंने अंतहीन अंधेरे हॉल का पता लगाया जहाँ प्राचीन संस्कृत प्रतीक मंद चमक रहे थे और टूटे हुए तंत्र नीचे टिक-टिक कर रहे थे। वारा ने सुरागों के लिए बेताबी से खोज की, यह महसूस करते हुए कि मणि ने कुछ प्राचीन अशांत कर दिया था और यदि मंदिर जल्द ही सक्रिय नहीं हुआ, तो सूर्य और पृथ्वी पर तबाही मच जाएगी।'
        },
        highlight: 'विशाल पत्थर के द्वारों के पीछे छिपा एक विशाल सूर्य मंदिर।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం XV',
        title: 'గ్రహణ దేవాలయం',
        subtitle: 'రాతి ద్వారాల వెనుక దాగి ఉన్న ఒక భారీ సూర్య దేవాలయం.',
        lines: {
          0: 'అడవులు, మర్చిపోయిన మార్గాల్లో రోజుల తరబడి వెతికిన తర్వాత, వారు భారీ రాతి ద్వారాల వెనుక దాగి ఉన్న ఒక సూర్య దేవాలయాన్ని కనుగొన్నారు, అది ఏడు రాతి గుర్రాలతో లాగబడుతున్న దైవిక రథంలా చక్రాలతో రూపొందించబడింది. గ్రహణ సమయంలో ఆలయంలోకి ప్రవేశించి, వారు చీకటి గదులను పరిశీలించారు, అక్కడ పురాతన సంస్కృత చిహ్నాలు మెరుస్తున్నాయి. మణి ఏదో పురాతన శక్తులను కదిలించిందని వారా గ్రహించాడు, ఆలయం త్వరలోనే పనిచేయకపోతే సూర్యుడికి, భూమికి పెద్ద ముప్పు వాటిల్లుతుందని ఆందోళన చెందాడు।'
        },
        highlight: 'భారీ రాతి ద్వారాల వెనుక దాగి ఉన్న ఒక భారీ సూర్య దేవాలయం।'
      }
    }
  },

  // ─── CHAPTER 16 ──────────────────────────────────────────────────────
  {
    id: 's2-ch16',
    sectionId: 's2-ashoka-chakram',
    chapterLabel: 'CHAPTER XVI',
    romanNumeral: 'XVI',
    title: 'THE ASHOKA CHAKRAM',
    subtitle: 'But the Ashoka Chakram remains unsolved.',
    accentColor: '#f0c040',
    imagePath: '/Kalachakra-Documentary/Image/Season-2 Images/FinalSunTemBackSideS2-47.png',
    extraImages: ['/Kalachakra-Documentary/Image/Season-2 Images/VaraConnectedSunGemAndAshokaChakram.png'],
    titleFromLeft: true,
    cssFilter: 'brightness(1.1) saturate(1.3)',
    lines: [
      {
        type: 'normal',
        text: 'Behind the temple, they discovered a gigantic rotating stone wheel—an ancient Ashoka Chakram. At its center was a lock identical to the Surya Gem. The moment Vara placed the gem inside, the entire temple awakened in golden energy, showing the message “प्रवेशः स्वीकृतः” (Authentication Accepted). However, a final requirement emerged: the Chakram had to be rotated into a sacred alignment forming a hidden Sanskrit shloka to unseal the temple. Staring at the rotating symbols, Vara froze in fear as the temple trembled and an ancient force awakened within.'
      },
      {
        type: 'sanskrit',
        text: '“प्रवेशः स्वीकृतः”',
        translation: '"Authentication Accepted"'
      },
      {
        type: 'highlight',
        text: 'And somewhere deep inside the temple… an ancient force waits.'
      }
    ],
    translations: {
      hindi: {
        chapterLabel: 'अध्याय XVI',
        title: 'अशोक चक्रम्',
        subtitle: 'लेकिन अशोक चक्र अनसुलझा रहता है।',
        lines: {
          0: 'मंदिर के पीछे, उन्होंने एक विशाल घूमता हुआ पत्थर का पहिया खोजा—एक प्राचीन अशोक चक्र। इसके केंद्र में सूर्य मणि के समान एक ताला था। जैसे ही वारा ने मणि को अंदर रखा, पूरा मंदिर सुनहरी ऊर्जा से जाग उठा, जिसमें संदेश “प्रवेशः स्वीकृतः” (प्रवेश स्वीकृत) दिखाया गया। हालांकि, एक अंतिम आवश्यकता सामने आई: मंदिर को खोलने के लिए चक्र को एक पवित्र संरेखण में घुमाया जाना था जिससे एक छिपा हुआ संस्कृत श्लोक बन सके। घूमते हुए प्रतीकों को घूरते हुए, वारा डर से कांप उठा क्योंकि मंदिर कांप रहा था और भीतर एक प्राचीन शक्ति जागृत हो रही थी।',
          1: '“प्रवेश स्वीकृत”'
        },
        highlight: 'और मंदिर के भीतर कहीं... एक प्राचीन शक्ति प्रतीक्षा कर रही है।'
      },
      telugu: {
        chapterLabel: 'అధ్యాయం XVI',
        title: 'అశోక చక్రం',
        subtitle: 'కానీ అశోక చక్రం ఇప్పటికీ పరిష్కరించబడలేదు.',
        lines: {
          0: 'ఆలయం వెనుక, వారు తిరిగే ఒక పెద్ద రాతి చక్రాన్ని కనుగొన్నారు—అదే పురాతన అశోక చక్రం. దాని మధ్యలో సూర్య మణి ఆకారంలో ఒక తాళం ఉంది. వారా మణిని అందులో ఉంచిన మరుక్షణమే, ఆలయం అంతా బంగారు శక్తితో మేల్కొంది, “प्रवेशः स्वीकृतः” (ధృవీకరణ ఆమోదించబడింది) అని చూపించింది. కానీ ఒక చివరి నిబంధన వెలువడింది: ఆలయ ద్వారం తెరవడానికి చక్రం తిరుగుతూ ఒక పవిత్ర సంస్కృత శ్లోకం ఆకారంలోకి రావాలి. తిరుగుతున్న చిహ్నాలను చూస్తూ వారా భయపడ్డాడు, ఆలయం కదులుతుండగా లోపల ఒక పురాతన శక్తి మేల్కొంది.',
          1: '“ధృవీకరణ ఆమోదించబడింది”'
        },
        highlight: 'మరియు ఆలయం లోపల ఎక్కడో... ఒక పురాతన శక్తి వేచి ఉంది।'
      }
    }
  }
]
