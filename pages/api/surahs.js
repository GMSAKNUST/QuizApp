var surahs =[ "al-Fātihah", "al-Baqarah", "Āl-ʿImrān", "an-Nisāʾ", "al-Māʾidah", "al-Anʿām", "al-Aʿrāf", "al-Anfāl", "at-Taubah", "Yūnus", "Hūd", "Yūsuf", 
"ar-Raʿd",  
"Ibrāhīm", "al-Ḥijr", "an-Naḥl", "al-Isrāʾ", "al-Kahf", "Maryam", "Ṭā-Hā", "al-Anbiyāʾ", "al-Ḥajj", 
"al-Muʾminūn", "an-Nūr", "al-Furqān", "ash-Shuʿarā", "an-Naml", "al-Qaṣaṣ", "al-ʿAnkabūt", "ar-Rūm", "Luqmān", "as-Sajdah", 
"al-Aḥzāb", "Sabaʾ", "Fāṭir", "Yā-Sīn", "as-Ṣāffāt", "Ṣād", "az-Zumar", "Ghāfir", "Fuṣṣilat", "ash-Shūrā", "az-Zukhruf", "ad-Dukhān", "al-Jāthiyah", "al-Aḥqāf", "Muḥammad", "al-Fatḥ", 
"al-Ḥujurāt", "Qāf", "adh-Dhāriyāt", "at-Ṭūr", "an-Najm", "al-Qamar", "ar-Raḥmān", "al-Wāqiʿah", "al-Ḥadīd", 
"al-Mujādilah", "al-Ḥashr", "al-Mumtaḥanah", "as-Ṣaff", "al-Jumuʿah", "al-Munāfiqūn", "at-Taghābun", "at-Ṭalāq", "at-Taḥrīm",
 "al-Mulk", "al-Qalam", "al-Ḥāqqah", "al-Maʿārij", "Nūḥ", "al-Jinn", "al-Muzzammil", "al-Muddaththir", "al-Qiyāmah", "al-Insān", "al-Mursalāt", "an-Nabaʾ", "an-Nāziʿāt", "ʿAbasa", "at-Takwīr", 
 "al-Infiṭār", "al-Muṭaffifīn", "al-Inshiqāq", "al-Burūj", "at-Ṭāriq", "al-Aʿlā", "al-Ghāshiyah", "al-Fajr", "al-Balad", "ash-Shams", "al-Layl", "ad-Ḍuḥā", "ash-Sharḥ", "at-Tīn", 
 "al-ʿAlaq", "al-Qadr", "al-Bayyinah", "az-Zalzalah", "al-ʿĀdiyāt",
 "al-Qāriʿah",
 "at-Takāthur",
 "al-ʿAsr",
 "al-Humazah",
 "al-Fīl",
 "Quraysh",
 "al-Māʿūn",
 "al-Kawthar",

 "al-Kāfirūn",
 "an-Naṣr",
 "al-Masad",
 "al-Ikhlāṣ",
 "al-Falaq",
 "an-Nās"]











export default (req, res) => {
    // res.status(200).json({ name: 'John Doe' })
    return(
        res.json(surahs)
    )

  }