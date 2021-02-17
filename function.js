const fetch = require('node-fetch')

module.exports = {
  ara: async function(ad) {
    const api = await fetch(`https://api.filmler.fun/api/ara/${encodeURI(ad)}`)
    .then(response => response.json());
if(api.error) throw 'Apide sorun yaşandı'
let title = api.title ? api.title : 'bulumadım';
let yönetmen = api.yönetmen ? api.yönetmen : 'bulumadım';
let yazarlar = api.yazarlar ? api.yazarlar : 'bulumadım';
let yıldızlar = api.yıldızlar ? api.yıldızlar : 'bulumadım';
let tür = api.tür ? api.tür : 'bulumadım';
let puan = api.puan ? api.puan : 'bulumadım';
let benzerler = api.benzerler ? api.benzerler : 'bulumadım';
let yıl = api.yıl ? api.yıl : 'bulumadım';
let süre = api.süre ? api.süre : 'bulumadım';
let yaratıcılar = api.yaratıcılar ? api.yaratıcılar : 'bulumadım';
let yaratıcı = api.yaratıcı ? api.yaratıcı : 'bulumadım';
let bölüm = api.bölüm ? api.bölüm : 'bulumadım';
let sezon = api.sezon ? api.sezon : 'bulumadım';
let poster = api.poster ? api.poster : 'bulumadım';

let obj = {
ismi: title,
yönetmen: yönetmen,
yazarlar: yazarlar,
yaratıcılar: yaratıcılar,
yaratıcı: yaratıcı,
yıldızlar: yıldızlar,
tür: tür,
puan: puan,
yıl: yıl,
süre: süre,
sezon: sezon,
bölüm: bölüm,
benzerler: benzerler,
poster: poster
}
   return obj
}, trend: async() => {
  const api = await fetch(`https://api.filmler.fun/api/trend/`)
    .then(response => response.json());
    if(api.error) throw 'Apide sorun yaşandı'
    let trendler = api.trend ? api.trend : 'bulunamadı'
    let obj = {
    trendler: trendler
    }

    return obj
  }, rastgele: async function(tür) {
    if(tür !== 'dizi' && tür !== 'film') throw 'geçersiz değer, değerler: dizi/film'
    const api = await fetch(`https://api.filmler.fun/api/rastgele/${tür}`)
    .then(response => response.json());
    if(api.error) throw 'Apide sorun yaşandı'
     let ad = api.ad ? api.ad : 'bulunamadı'
     let türü = api.tür ? api.tür : 'bulunamadı'
     let yıl = api.yıl ? api.yıl : 'bulunamadı'
     let puan = api.puan ? api.puan : 'bulunamadı'
     let poster = api.poster ? api.poster : 'bulunamadı'
    let obj = {
      ad: ad,
      türü: türü,
      yıl: yıl,
      puan: puan,
      poster: poster
    }
    return obj
  }, söz_tür: async function(tür) {
    if(tür !== 'tv' && tür !== 'film' && tür !== 'anime') throw 'geçersiz değer, değerler: film/anime/tv'
    const api = await fetch(`https://api.filmler.fun/api/soz/tur/${tür}`)
    .then(response => response.json());
    if(api.error) throw 'Apide sorun yaşandı'
     let ad = api.ad ? api.ad : 'bulunamadı'
     let söz = api.söz ? api.söz : 'bulunamadı'
     let söztr = api.söztr ? api.söztr : 'bulunamadı'
    let obj = {
      ad: ad,
      söz: söz,
      söztr: söztr
    }
    return obj
  }, söz_ad: async function(adı) {
    const api = await fetch(`https://api.filmler.fun/api/soz/ad/${adı}`)
    .then(response => response.json());
    if(api.error) throw 'Apide sorun yaşandı'
     let ad = api.ad ? api.ad : 'bulunamadı'
     let söz = api.söz ? api.söz : 'bulunamadı'
     let söztr = api.söztr ? api.söztr : 'bulunamadı'
    let obj = {
      ad: ad,
      söz: söz,
      söztr: söztr
    }
    return obj
  }, söz_rastgele: async() => {
    const api = await fetch(`https://api.filmler.fun/api/soz/rastgele/`)
      .then(response => response.json());
      if(api.error) throw 'Apide sorun yaşandı'
      let ad = api.ad ? api.ad : 'bulunamadı'
     let söz = api.söz ? api.söz : 'bulunamadı'
     let söztr = api.söztr ? api.söztr : 'bulunamadı'
    let obj = {
      ad: ad,
      söz: söz,
      söztr: söztr
    }
      return obj
    }
};