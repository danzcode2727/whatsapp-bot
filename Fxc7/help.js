// menu fitur bot
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `
	\`\`\`Follow My Instagram\`\`\`
${instagram}


\`\`\`HARAP BACA NOTE DIBAWAH SEBELUM\`\`\`
\`\`\`MENGGUNAKAN BOT INI\`\`\`

╭──────「 *REGULATION ${name}* 」
┴
┣⊱  \`\`\`NAMA USER:\`\`\` *${pushname2}*
┣⊱  \`\`\`VERIVICATION:\`\`\` ✅
┣⊱  \`\`\`LIMIT:\`\`\` *${limitt}*
┣⊱  \`\`\`AKTIF:\`\`\` ${kyun(uptime)}
┣⊱  \`\`\`JAM:\`\`\` *${jam} WIB*
┣⊱  \`\`\`TANGGAL:\`\`\` *${tanggal}*
┣⊱  \`\`\`VERSION:\`\`\` *6.5.0*
┣⊱  \`\`\`USER TERDAFTAR:\`\`\` *${user.length} User*
┣⊱  ❌ *SPAM*
┣⊱  ❌ *CALL & VC*
┣⊱  \`\`\`Melanggar??\`\`\` *Banned*
┬
╰────────────────────────


╭──────「 *ABOUT ${name}* 」
┴
│➻ *${prefix}report lapor bug*
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}owner*
│➻ *${prefix}speed*
│➻ *${prefix}daftar*
│➻ *${prefix}totaluser*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
│➻ *${prefix}premiumlist*
│➻ *${prefix}bahasa*
┬
╰────────────────────────

͏
͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭──────「 *_MEDI͏A DOWNLOADER_* 」
┴
│➻ *${prefix}tiktokstalk [Username]*
│➻ *${prefix}igstalk [zidan.amd27]*
│➻ *${prefix}insta [Link]*
│➻ *${prefix}instastory [Username]*
│➻ *${prefix}ssweb [Url]*
│➻ *${prefix}url2img [Url]*
│➻ *${prefix}tiktok*
│➻ *${prefix}fototiktok*
│➻ *${prefix}meme*
│➻ *${prefix}memeindo*
│➻ *${prefix}kbbi*
│➻ *${prefix}wait*
│➻ *${prefix}trendtwit*
│➻ *${prefix}google [Berita terkini]*
┬
╰────────────────────────


╭──────「 *_CREATOR MENU_* 」
┴
│➻ *${prefix}quotemaker tx/wtrmk/tema*
│➻ *${prefix}nulis [Nama/Kelas/Text]*
│➻ *${prefix}rain [Reply image]*
│➻ *${prefix}trigger [Reply image]*
│➻ *${prefix}rip [Reply image]*
│➻ *${prefix}wasted [Reply image]*
│➻ *${prefix}cphlogo [DANZ/BOT]*
│➻ *${prefix}cglitch [DANZ/BOT]*
│➻ *${prefix}cpubg [DANZ/BOT]*
│➻ *${prefix}cml [DANZ]*
│
│➻ *${prefix}tahta [DANZ]*
│➻ *${prefix}croman [DANZ dan BOT]*
│➻ *${prefix}cthunder [DANZ]*
│➻ *${prefix}cbpink [DANZ]*
│➻ *${prefix}cmwolf [DANZ]*
│➻ *${prefix}csky [DANZ]*
│➻ *${prefix}cwooden [DANZ]*
│➻ *${prefix}cflower [DANZ]*
│➻ *${prefix}clove [DANZ]*
│➻ *${prefix}ccrossfire [DANZ]*
│➻ *${prefix}cnaruto [DANZ]*
│➻ *${prefix}cparty [DANZ]*
│➻ *${prefix}cshadow [DANZ]*
│➻ *${prefix}cminion [DANZ]*
│➻ *${prefix}cneon [DANZ]*
│➻ *${prefix}cneon2 [DANZ]*
│➻ *${prefix}cneongreen [DANZ]*
│➻ *${prefix}c3d [DANZ]*
│➻ *${prefix}csky [DANZ]*
│➻ *${prefix}tts [id Haii]*
│➻ *${prefix}ttp [DanzBot]*
│➻ *${prefix}cballon [DanzBot]*
│➻ *${prefix}cpaper [DanzBot]*
│➻ *${prefix}slide [Danz BOT WA]*
│
│➻ *${prefix}stiker*
│➻ *${prefix}gifstiker*
│➻ *${prefix}toimg*
│➻ *${prefix}img2url*
│➻ *${prefix}nobg*
│➻ *${prefix}tomp3*
│➻ *${prefix}ocr*
┬
╰──────────────────────────


╭───────「 *_GROUP ONLY_*」
┴
│➻ *${prefix}modeanime On/Off*
│➻ *${prefix}naruto*
│➻ *${prefix}minato*
│➻ *${prefix}boruto*
│➻ *${prefix}hinata*
│➻ *${prefix}sakura*
│➻ *${prefix}sasuke*
│➻ *${prefix}kaneki*
│➻ *${prefix}toukachan*
│➻ *${prefix}rize*
│➻ *${prefix}akira*
│➻ *${prefix}itori*
│➻ *${prefix}kurumi*
│➻ *${prefix}miku*
│➻ *${prefix}anime*
│➻ *${prefix}animecry*
│➻ *${prefix}neonime*
│➻ *${prefix}animekiss*
│➻ *${prefix}wink*
┬
╰───────────────────────

╭────────────────────────
┴
│➻ *${prefix}welcome [On/Off]*
│➻ *${prefix}grup [buka/tutup]*
│➻ *${prefix}ownergrup*
│➻ *${prefix}setpp*
│➻ *${prefix}infogc*
│➻ *${prefix}add*
│➻ *${prefix}kick*
│➻ *${prefix}promote*
│➻ *${prefix}demote*
│➻ *${prefix}setname*
│➻ *${prefix}setdesc*
│➻ *${prefix}linkgrup*
│➻ *${prefix}tagme*
│➻ *${prefix}hidetag*
│➻ *${prefix}tagall*
│➻ *${prefix}mentionall*
│➻ *${prefix}fitnah*
│➻ *${prefix}listadmin*
│➻ *${prefix}openanime*
│➻ *${prefix}edotense*
┬
╰────────────────────────

╭────────────────────────
┴
│➻ *${prefix}nsfw [On/Off]*
│➻ *${prefix}nsfwloli*
│➻ *${prefix}nsfwblowjob*
│➻ *${prefix}nsfwneko*
│➻ *${prefix}nsfwtrap*
│➻ *${prefix}hentai*
┬
╰────────────────────────


╭──────「 *_OTHERS FUN & GAME_* 」
┴
│➻ *${prefix}anjing*
│➻ *${prefix}kucing*
│➻ *${prefix}testime*
│➻ *${prefix}hilih*
│➻ *${prefix}say*
│➻ *${prefix}apakah*
│➻ *${prefix}kapankah*
│➻ *${prefix}bisakah*
│➻ *${prefix}rate*
│➻ *${prefix}watak*
│➻ *${prefix}hobby*
│➻ *${prefix}infogempa*
│➻ *${prefix}infonomor*
│➻ *${prefix}quotes*
│➻ *${prefix}cerpen*
│➻ *${prefix}truth*
│➻ *${prefix}dare*
│➻ *${prefix}katabijak*
│➻ *${prefix}fakta*
│➻ *${prefix}darkjokes*
│➻ *${prefix}bucin*
│➻ *${prefix}pantun*
│➻ *${prefix}katacinta*
│➻ *${prefix}jadwaltvnow*
│➻ *${prefix}hekerbucin*
│➻ *${prefix}katailham*
│➻ *${prefix}animewp*
┬
╰────────────────────────

╭──────────────────────────
┴
│➻ *${prefix}jarak [Banyuwangi/Surabaya]*
│➻ *${prefix}translate [en/Apa kabar?]*
│➻ *${prefix}pasangan [Zidan/Ella]*
│➻ *${prefix}gantengcek [Zidan]*
│➻ *${prefix}cantikcek [Ella]*
│➻ *${prefix}artinama [Zidan]*
│➻ *${prefix}persengay [Alex]*
│➻ *${prefix}pbucin [Zidan]*
│➻ *${prefix}bpfont [Zidan]*
│➻ *${prefix}textstyle [DanzBot]*
│➻ *${prefix}jadwaltv [antv]*
│➻ *${prefix}lirik [Melukis Senja]*
│➻ *${prefix}chord [Melukis senja]*
│➻ *${prefix}wiki [Stalin]*
│➻ *${prefix}brainly [Pertanyaan]*
│➻ *${prefix}resepmasakan [Rawon]*
│➻ *${prefix}map [Banyuwangi]*
│➻ *${prefix}film [Fast and Farious]*
│➻ *${prefix}pinterest [Gambar kucing]*
│➻ *${prefix}infocuaca [Banyuwangi]*
│➻ *${prefix}jamdunia [Banyuwangi]*
│➻ *${prefix}mimpi [Ular]*
│➻ *${prefix}infoalamat [jalan Banyuwangi]*
│➻ *${prefix}playstore [WhatsApp]*
┬
╰───────────────────────────


╭────────────────────────
┴
│➻ *${prefix}asupan*
│➻ *${prefix}tebakgambar*
│➻ *${prefix}caklontong*
│➻ *${prefix}family100*
│➻~ ${prefix}kalkulator [13*12]
│➻ *${prefix}wp gunung*
┬
╰────────────────────────

╭────────────────────────
┴
│➻ *${prefix}jadwalsholat [Banyuwangi]*
│➻ *${prefix}quran*
│➻ *${prefix}quransurah [1]*
│➻ *${prefix}tafsir [Kafir]*
┬
╰────────────────────────

╭────────────────────────
┴
│➻ *${prefix}becrypt [string]*
│➻ *${prefix}encode64 [string]*
│➻ *${prefix}decode64 [encrypt]*
│➻ *${prefix}encode32 [string]*
│➻ *${prefix}decode32 [encrypt]*
│➻ *${prefix}encbinary [string]*
│➻ *${prefix}decbinary [encrypt]*
│➻ *${prefix}encoctal [string]*
│➻ *${prefix}decoctal [encrypt]*
│➻ *${prefix}hashidentifier [Encrypt Hash]*
│➻ *${prefix}dorking [dork]*
│➻ *${prefix}pastebin [teks]*
│➻ *${prefix}tinyurl [Link]*
│➻ *${prefix}bitly [Link]*
┬
╰────────────────────────


╭─────────「 *>OWNER ONLY<* 」
┴
│➻ *${prefix}simih [On/Off]  [Fitur Erorr]*
│➻ *${prefix}antilink [on/off]*
│➻ *${prefix}addprem [Mention]*
│➻ *${prefix}removeprem [Mention]*
│➻ *${prefix}setmemlimit*
│➻ *${prefix}setreply*
│➻ *${prefix}setprefix*
│➻ *${prefix}setnamebot*
│➻ *${prefix}setppbot*
│➻ *${prefix}bc*
│➻ *${prefix}bcgc*
│➻ *${prefix}ban*
│➻ *${prefix}unban*
│➻ *${prefix}block*
│➻ *${prefix}unblock*
│➻ *${prefix}clearall*
│➻ *${prefix}delete*
│➻ *${prefix}clone*
│➻ *${prefix}getses*
│➻ *${prefix}leave*
│➻ *${prefix}kudeta*
┬
╰────────────────────────


╭────────「 *^PREMIUM ONLY^*」
┴
│➻ *${prefix}playmp3 [Menepi]*
│➻ *${prefix}fb [Link video]*
│➻ *${prefix}snack [Link snack Video]*
│➻ *${prefix}ytmp3 [Link yt]*
│➻ *${prefix}ytmp4 [Link Yt]*
│➻ *${prefix}joox [Monolog Pamungkas]*
│➻ *${prefix}smule [Link Video Smule]*
│➻ *${prefix}cersex*
│➻ *${prefix}xxx [Japan]*
│➻ *${prefix}pornhub [StepMoms]*
│➻ *${prefix}indohot*
│➻ *${prefix}moddroid [Lightroom]*
│➻ *${prefix}happymod [Lightroom]*
│➻ *${prefix}spamcall [083xxxxxxxxx]*
│➻ *${prefix}spamsms [083xxxxxxxx/jumlah]*
│➻ *${prefix}spamgmail [danzbolt2703@gmail.com]*
┬
╰────────────────────────

┣━━━━°❀ *❬ NOTE ❭* ❀°━━━━━━⊱
┃
┃Bot ini belum selesai sepenuhnya
┃Masih dalam proses pengerjaan
┃Jadi masih jarang aktif ^_^.
┃
┃
┃Ada Masalah pada BOT ? Bisa
┃langsung hubungi > wa.me/6289686610207
┃
┃
────────────────────

╭─────「 *_SPECIAL THANKS_* 」
│
├➲ *FARHAN | FXC7_BOT*
├➲ *MhankBarbar*
├➲ *Vhetear*
├➲ *T0BZ*
╰────────────────────────

╭─────「 *SUPPORT* 」
│
├➲ *Allah SWT* 😇
├➲ *M. Rahmad Juliansyah*
├➲ *^DANZ BOT^*
├➲ *Mr.Xcode777*
├➲ *DLL*
╰────────────────────────

\`\`\`GROUP OFFICIAL ADMIN\`\`\`
https://chat.whatsapp.com/Hgg0aKOnuY1CPgg1HPRjNR


`
}
exports.help = help

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}


// donasi menu
const donasi = (Ig, name) => { 
	return `       
┏━━━━━━━━━━━━━━━━━━━━
┃          𝗗𝗢𝗡𝗔𝗦𝗜  
┣━━━━━━━━━━━━━━━━━━━━
┣━⊱ *DONASI KUY :))* ❉⊰━━✿
┃  
┣━⊱ *DANA*
┣⊱ 0896-8661-0207
┣━⊱ *PULSA TRI*
┣⊱ 0896-8661-0207
┃
┣━━━━━━━━━━━━━━━━━━━━
┃  *BOT BY DANZ*
┗━━━━━━━━━━━━━━━━━━━━
Note:
 النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ\n_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_
 
Kalo Sudah Donasi Silahkan Invit Di Group Kalian ^_^

Makasih:)

${Ig}

`
}

exports.donasi = donasi
// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount